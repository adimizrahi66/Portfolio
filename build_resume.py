#!/usr/bin/env python3
"""
Build Adi Mizrahi's resume PDF from resume.md.

Usage:  python3 build_resume.py
Edit resume.md, then run this script — it regenerates Adi_Mizrahi_Resume.pdf
in the same folder, keeping the styled two-column layout.

The parser is intentionally forgiving: markdown links, **bold**, escaped
characters, and the "Role Tagline: ..." line can sit anywhere in the file.
"""

import html
import os
import re
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
MD_PATH = os.path.join(HERE, "resume.md")
PDF_PATH = os.path.join(HERE, "Adi_Mizrahi_Resume.pdf")


# ---------------------------------------------------------------- inline text
def inline(s):
    """Convert a snippet of markdown to safe inline HTML."""
    s = re.sub(r"\[([^\]]+)\]\([^)]*\)", r"\1", s)   # [text](url) -> text
    s = s.replace("\\+", "+").replace("\\-", "-").replace("\\.", ".")
    s = s.strip().rstrip("\\").strip()               # drop md hard-break "\"
    s = html.escape(s, quote=False)
    s = re.sub(r"\*\*(.+?)\*\*", r"<strong>\1</strong>", s)  # **bold**
    return s


# ---------------------------------------------------------------- parse markdown
def parse_md(text):
    lines = text.splitlines()

    # 1. name = first H1
    name = ""
    out = []
    for ln in lines:
        if not name and ln.startswith("# ") and not ln.startswith("## "):
            name = ln[2:].strip()
            continue
        out.append(ln)
    lines = out

    # 2. role + tagline = any line containing "Tagline:" (removed from body)
    role = ""
    tagline = ""
    out = []
    for ln in lines:
        m = re.search(r"tagline\s*:", ln, re.I)
        if m:
            before = ln[: m.start()].lstrip("-*# \t").strip()
            after = ln[m.end():].strip()
            if before:
                role = before
            tagline = after
            continue
        out.append(ln)
    lines = out

    # 2b. fallback role = first plain line before the first "## "
    if not role:
        for ln in lines:
            if ln.startswith("## "):
                break
            s = ln.strip()
            if s and not s.startswith(("-", "*", "#")):
                role = s
                break
    if not role:
        role = "Product Designer"

    # 3. sections
    doc = {"name": name, "role": role, "tagline": tagline, "sections": []}
    cur = None
    for ln in lines:
        if ln.startswith("## "):
            cur = {"title": ln[3:].strip(), "raw": []}
            doc["sections"].append(cur)
        elif cur is not None:
            cur["raw"].append(ln)
    for sec in doc["sections"]:
        sec["entries"] = parse_entries(sec["raw"])
    return doc


def parse_entries(raw):
    """Split a section body into entries keyed by '### ' headings."""
    entries = []
    cur = {"head": None, "meta": [], "bullets": []}
    started = False
    for ln in raw:
        s = ln.strip()
        if ln.startswith("### "):
            if started:
                entries.append(cur)
            cur = {"head": s[4:].strip(), "meta": [], "bullets": []}
            started = True
        elif s.startswith("- ") or s.startswith("* "):
            cur["bullets"].append(s[2:].strip())
            started = True
        elif s:
            cur["meta"].append(s)
            started = True
    if started:
        entries.append(cur)
    return entries


def find(doc, name):
    for sec in doc["sections"]:
        if sec["title"].strip().lower() == name.lower():
            return sec
    return None


# ---------------------------------------------------------------- render html
def inline_links(s):
    """Like inline(), but keep [text](url) as real clickable <a> anchors."""
    s = s.replace("\\+", "+").strip().rstrip("\\").strip()
    tokens = []

    def stash(m):
        tokens.append((m.group(1), m.group(2)))
        return f"\0{len(tokens) - 1}\0"

    s = re.sub(r"\[([^\]]+)\]\(([^)]*)\)", stash, s)
    s = html.escape(s, quote=False)
    for i, (text, url) in enumerate(tokens):
        cls = "" if url.lower().startswith("mailto:") else ' class="ul"'
        anchor = f'<a{cls} href="{html.escape(url, quote=True)}">{html.escape(text, quote=False)}</a>'
        s = s.replace(f"\0{i}\0", anchor)
    return s


def job_title_html(head):
    if " / " in head:
        company, rest = head.split(" / ", 1)
        return f'<span class="company">{inline(company)}</span> <span class="role-inline">/ {inline(rest)}</span>'
    return inline(head)


# Injected when the roomy layout spills onto a second page, to pull it back to one.
COMPACT_CSS = """
  body { line-height:1.4; font-size:9.5pt; }
  .main, .sidebar { padding-top:20px; padding-bottom:22px; }
  .name { font-size:30pt; }
  .job { margin-bottom:11px; }
  ul.bullets li { margin-bottom:2px; font-size:9pt; }
  .block + .block { margin-top:16px; }
  .section-label { margin-bottom:9px; }
  .summary, .skill-list { font-size:8.5pt; }
"""


def build_html(doc, compact=False):
    work = find(doc, "Work Experience")
    jobs_html = ""
    if work:
        for e in work["entries"]:
            if not e["head"]:
                continue
            meta = inline(e["meta"][0]) if e["meta"] else ""
            bullets = "".join(f"<li>{inline(b)}</li>" for b in e["bullets"])
            jobs_html += f"""
        <div class="job">
          <div class="job-title">{job_title_html(e['head'])}</div>
          <div class="job-meta">{meta}</div>
          <ul class="bullets">{bullets}</ul>
        </div>"""

    contact = find(doc, "Contact")
    contact_html = ""
    if contact and contact["entries"]:
        for b in contact["entries"][0]["bullets"] + contact["entries"][0]["meta"]:
            contact_html += f'<div class="contact-line">{inline_links(b)}</div>'

    summary = find(doc, "Summary")
    summary_html = ""
    if summary and summary["entries"]:
        summary_html = inline(" ".join(summary["entries"][0]["meta"]))

    edu = find(doc, "Education")
    edu_html = ""
    if edu:
        for e in edu["entries"]:
            if not e["head"]:
                continue
            sub = inline(e["meta"][0]) if len(e["meta"]) > 0 else ""
            date = inline(e["meta"][1]) if len(e["meta"]) > 1 else ""
            edu_html += f"""
        <div class="edu-item">
          <div class="edu-title">{inline(e['head'])}</div>
          <div class="edu-sub">{sub}</div>
          <div class="edu-date">{date}</div>
        </div>"""

    skills = find(doc, "Skills")
    skills_html = ""
    if skills:
        for e in skills["entries"]:
            if not e["head"]:
                continue
            lst = inline(" ".join(e["meta"]))
            skills_html += f"""
        <div class="skill-group">
          <div class="skill-heading">{inline(e['head'])}</div>
          <div class="skill-list">{lst}</div>
        </div>"""

    tools = find(doc, "Tools")
    tools_html = ""
    if tools and tools["entries"]:
        tools_html = inline(" ".join(tools["entries"][0]["meta"]))

    certs = find(doc, "Certifications")
    certs_html = ""
    if certs:
        for e in certs["entries"]:
            if not e["head"]:
                continue
            sub = inline(e["meta"][0]) if len(e["meta"]) > 0 else ""
            date = inline(e["meta"][1]) if len(e["meta"]) > 1 else ""
            certs_html += f"""
        <div class="cert-item">
          <div class="cert-title">{inline(e['head'])}</div>
          <div class="cert-sub">{sub}</div>
          <div class="cert-date">{date}</div>
        </div>"""

    tagline_html = "<br>".join(inline(t) for t in doc["tagline"].split("|")) if doc["tagline"] else ""

    def block(label, inner):
        if not inner.strip():
            return ""
        return f'<div class="block"><div class="section-label">{html.escape(label)}</div>{inner}</div>'

    contact_top = ""
    if contact_html:
        contact_top = f'<div class="contact-top">{contact_html}</div>'

    sidebar = "".join([
        block("Summary", f'<div class="summary">{summary_html}</div>' if summary_html else ""),
        block("Education", edu_html),
        block("Skills", skills_html),
        block("Tools", f'<div class="tools">{tools_html}</div>' if tools_html else ""),
        block("Certifications", certs_html),
    ])

    out = TEMPLATE.format(
        name=inline(doc["name"]),
        role=inline(doc["role"]),
        contact_top=contact_top,
        jobs=jobs_html,
        sidebar=sidebar,
    )
    if compact:
        out = out.replace("</style>", COMPACT_CSS + "</style>")
    return out


TEMPLATE = """<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><style>
  @page {{ size: A4; margin: 0; }}
  :root {{
    --ink:#1a1a1a; --muted:#6b6b6b; --soft:#8a8a8a;
    --accent:#5967FB; --line:#e4e0da; --sidebar-bg:#f6f6fb;
  }}
  * {{ margin:0; padding:0; box-sizing:border-box; }}
  /* Column backgrounds are painted on <html> so they repeat on every page. */
  html {{ background:
      linear-gradient(90deg,
        #fff 0, #fff 63%,
        var(--line) 63%, var(--line) calc(63% + 1px),
        var(--sidebar-bg) calc(63% + 1px), var(--sidebar-bg) 100%); }}
  body {{ font-family:"Carlito","DejaVu Sans",sans-serif; color:var(--ink);
    font-size:10pt; line-height:1.5; }}
  .topbar {{ display:none; }}
  .header {{ padding:30px 40px 22px 40px; display:flex; justify-content:space-between;
    align-items:flex-end; border-bottom:1px solid var(--line); background:#fff; }}
  .name {{ font-size:34pt; font-weight:700; letter-spacing:-0.5px; line-height:1; color:#111; }}
  .role {{ font-size:13pt; color:var(--muted); margin-top:6px; letter-spacing:0.2px; }}
  .contact-top {{ text-align:right; }}
  .contact-top .contact-line {{ font-size:9pt; color:#3a3a3a; margin-bottom:3px; }}
  .body::after {{ content:""; display:block; clear:both; }}
  .main {{ float:left; width:63%; padding:26px 30px 40px 40px; }}
  .sidebar {{ float:right; width:37%; padding:26px 34px 40px 30px; }}
  .section-label {{ font-size:8.5pt; font-weight:700; letter-spacing:2px; text-transform:uppercase;
    color:var(--accent); margin-bottom:12px; }}
  .block + .block {{ margin-top:22px; }}
  .job {{ margin-bottom:16px; }}
  .job:last-child {{ margin-bottom:0; }}
  .job-title {{ font-size:11pt; font-weight:700; color:#111; }}
  .job-title .company {{ color:#111; }}
  .job-title .role-inline {{ font-weight:400; color:#555; }}
  .contact-top a {{ color:inherit; text-decoration:none; }}
  .contact-top a.ul {{ text-decoration:underline; text-underline-offset:2px; }}
  .job-meta {{ font-size:8.5pt; color:var(--soft); margin:2px 0 7px 0; letter-spacing:0.2px; }}
  ul.bullets {{ list-style:none; }}
  ul.bullets li {{ position:relative; padding-left:15px; margin-bottom:4px; font-size:9.5pt;
    color:#2e2e2e; line-height:1.45; }}
  ul.bullets li::before {{ content:"\\2022"; position:absolute; left:2px; top:0;
    color:var(--accent); font-weight:700; font-size:7pt; line-height:1.9; }}
  .contact-line {{ font-size:9.5pt; color:#2e2e2e; margin-bottom:4px; word-break:break-word; }}
  .edu-title,.cert-title {{ font-size:10pt; font-weight:700; color:#111; }}
  .edu-sub,.cert-sub {{ font-size:9pt; color:#2e2e2e; margin-top:1px; }}
  .edu-date,.cert-date {{ font-size:8.5pt; color:var(--soft); margin-top:2px; }}
  .edu-item + .edu-item, .cert-item + .cert-item {{ margin-top:12px; }}
  .skill-group {{ margin-bottom:12px; }}
  .skill-group:last-child {{ margin-bottom:0; }}
  .skill-heading {{ font-size:9pt; font-weight:700; color:#111; margin-bottom:4px; }}
  .skill-list {{ font-size:9pt; color:#3a3a3a; line-height:1.55; }}
  .tools {{ font-size:9.5pt; color:#3a3a3a; line-height:1.7; }}
  .summary {{ font-size:9.5pt; color:#2e2e2e; line-height:1.55; }}
</style></head><body>
<div class="page">
  <div class="topbar"></div>
  <div class="header">
    <div><div class="name">{name}</div><div class="role">{role}</div></div>
    {contact_top}
  </div>
  <div class="body">
    <div class="main">
      <div class="section">
        <div class="section-label">Experience</div>{jobs}
      </div>
    </div>
    <div class="sidebar">{sidebar}</div>
  </div>
</div>
</body></html>"""


def main():
    if not os.path.exists(MD_PATH):
        sys.exit(f"resume.md not found at {MD_PATH}")
    with open(MD_PATH, encoding="utf-8") as f:
        doc = parse_md(f.read())

    try:
        from weasyprint import HTML
    except ImportError:
        sys.exit("weasyprint is not installed. Install with: pip install weasyprint")

    # Render roomy first; if it spills past one page, fall back to the compact preset.
    rendered = HTML(string=build_html(doc, compact=False)).render()
    mode = "roomy"
    if len(rendered.pages) > 1:
        compact = HTML(string=build_html(doc, compact=True)).render()
        if len(compact.pages) <= len(rendered.pages):
            rendered, mode = compact, "compact"

    rendered.write_pdf(PDF_PATH)
    print(f"Built {PDF_PATH} ({len(rendered.pages)} page(s), {mode})")


if __name__ == "__main__":
    main()
