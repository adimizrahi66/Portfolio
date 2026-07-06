# **CopyCat \- Internal platform**

**My Role:** Senior Product Designer  |  **Team:** 1 Product Manager, 1 Engineer  |  **Duration:** 1 month

## ---

**Overview**

**CopyCat** is an integrated content and ad-generation platform designed to streamline digital marketing workflows through a unified ecosystem:

* **Production & Layout:** An Articles Generator to manage queues, page structures, and descriptions.  
* **Creative Assets:** A prompt-powered Banner Generator and a modular JSON template library sorted by category (e.g., Apparel, Home & Garden).  
* **Optimization & Insights:** Winner Discovery, an Image Library, and a BI Dashboard tracking production metrics and asset performance.

Challenge →

To scale customer acquisition on Meta, our growth team faced the massive operational burden of generating 500 new creative assets daily while managing complex, parallel campaigns. The team lacked the infrastructure to sustain this high creative volume and data velocity, creating a production bottleneck that stalled their scaling targets.

## Strategy → 

We chose to build a custom platform tailored specifically to the growth team’s needs to reduce production time and unlock massive creative scale. By unifying disparate tools under one roof and integrating advanced AI capabilities, we consolidated the entire workflow into a single, streamlined ecosystem.

Results → 

We designed a semi-automated workflow focusing on rapid creative and landing page generation. This solution cut content production time by 75% compared to the previous process, enabling the team to scale efficiently.

### 

### 

### 

### 

### **Defining the Problem**

### **The team managed a fragmented workflow, using more than 6 different tools simultaneously to create an average of 30 landing pages a day.**

### Process Flow: \[Google Sheets Logo\] \-\> \[Asana Logo\] \-\> \[Gemini Logo\] \-\> \[Ideogram Logo\] \-\> \[Kueez CMS Logo\] \-\> \[Copycat old version \- vibe coding system\]  **How can we unify all the tools to be one smooth workflow?**

### To find out, I began by mapping the entire user journey and auditing every single action taken throughout the existing production cycle. This allowed us to pinpoint the exact friction points.

**Strategy & Exploration**

## **User Flow Mapping** Understanding this journey provided the blueprint for building a centralized, automated platform that replaced six disconnected steps and multiple actions with one continuous flow.

##  \*image placement\*

### **Product Context**

### CopyCat started as a rough, developer-built prototype that helped creatives generate assets but was too complex and isolated for other departments.  I transformed this initial iteration into a holistic, end-to-end platform that harmonizes workflows across the entire ecosystem.

### 

### **the CopyCat before the redesign:** \*image placement\* **the CopyCat after the redesign:** \*image placement\* 

**Design Solutions**

### **Design Solutions**

### Using my user journey map to prioritize features, I realized that every production cycle originated from an **Asana task list**. 

### Each row in that list contained the foundational data critical to the entire workflow \-from landing page generation to the specific creative assets tied to them. 

### **\- Migrating the content tasks list**  Consequently, I decided to anchor the entire creation flow around a centralized task list inside CopyCat.  By migrating and mirroring the familiar structure of Asana within our new platform, I minimized the user learning curve and drastically reduced cognitive load.

###  `*copycat-list migration SVG*`

### **\- Connecting Articles and Creatives creation flow**

### The next step was to map out the functional dependencies between landing pages and creative assets within each task row. Different actions required specific data inputs:

* ### Landing Page Generation: Required a storefront link and a page title.

* ### Creative Asset Generation: Required a Product ID (PID). 

### Because a Product ID (PID) is only generated after an article goes live, the workflow requires a strict sequence. I designed a unified interface that structurally enforces this dependency while keeping all data, statuses, and generated assets in a single, cohesive view.

###  

### `*task row undone SVG*`

**Connecting Data to Actions**   
The redesigned task row introduces contextual action buttons for "Article" and "Creatives." To enforce the required operational sequence, the "Creatives" button remains disabled until the landing page is generated and a Product ID (PID) is live. Once active, the system unlocks the button and automatically passes the PID and metadata directly into the creative generation pipeline.

**UX Impact: Eliminating the Copy-Paste Tax**

* **The Friction:** Users previously spent time manually copying titles, storefront links, and new PIDs between Asana and disconnected creation utilities.  
* **The Solution:** Data fields now sync natively within the row, eliminating manual transcription errors and ensuring data continuity.

  **Automating this extraction eliminated 5 manual clicks per task, drastically reducing workflow friction and human error.**

### `*article generator flow SVG*`

**Streamlining Article Creation** Clicking "Article" opens a modal that instantly syncs the page title. Integrated AI models automatically pre-populate the body copy and banner image, allowing the user to simply review the layout and hit "Create."

**UX Impact: Intelligent Automation**

* **The Friction:** Users previously wasted minutes jumping between external AI tools to prompt copy, extract text blocks, and manually upload images into a separate CMS.  
* **The Solution:** Automating the initial layout and pre-populating fields eliminated six manual clicks per page and cut production time significantly.

### **Next Step: Creative Generation**

Once the article goes live, the **Creatives** button activates instantly. The user can immediately click through to start generating ad assets, maintaining total momentum without switching contexts.

### `*task list after article generated SVG*` 

### **The Multi-Step Creative Flow**

### Clicking the **Creatives** button launches a guided, step-by-step wizard designed to balance automation with human oversight.

###  To prevent errors, each step isolates a crucial decision point. Advanced automation handles the asset rendering and data population, while the interface highlights only the critical variables requiring human approval.  \*Prototype placement\*

**Balancing Automation with User Control**  
When a user finishes the creative workflow, the task row turns green to signal completion.   
I intentionally left the final "check" manual. This high-sensitivity process requires a curated human review; giving users final sign-off reduces anxiety, provides a sense of control, and prevents the friction of automated errors.

###  `*Done tasks SVG*`

Here’s the full prototype feel free to to try it out\!

\*full prototype placement\*

Tooling: Claude AI

