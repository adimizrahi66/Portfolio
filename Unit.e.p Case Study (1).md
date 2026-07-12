# **Unit.e.p App**  **Assessment System For Oketz Unit Sorting**

**My Role:** Solo Product Designer (Freelance) | **Team:** 1 Social Behavioral Commander, 1 Engineer | **Duration:** 6 mounts engagement

## **Overview**

**O-Assessment System (Unit.e.p app)** is a custom, complex digital evaluation platform built for the IDF's elite canine unit (Oketz) to optimize their high-stakes annual candidate sorting camp through a centralized, live diagnostic ecosystem.

* **Production & Layout:** A live, operational system that replaces paper-and-pen scoring with centralized digital trackers mapping candidate parameters, groups, and stations.  
* **Creative Assets:** Structural evaluation modules tailored to permanent military values and behavioral parameters across distinct physical stations.  
* **Optimization & Insights:** A digital analytics engine that processes candidate rankings in real time, making data visible and syncable immediately rather than after the camp ends.

### **Challenge →**

Held just once a year, the Oketz sorting camp requires rapid, high-stakes evaluations under intense field conditions. Tracking candidate metrics by hand created disconnected data silos and forced a grueling 3-hour alignment meeting at the end of the camp. This operational drag heavily delayed reserve officers, creating a major administrative bottleneck. 

### **Strategy →**

We chose to design a custom, end-to-end mobile (tablet) platform engineered specifically for the extreme conditions of field assessments. By unifying raw observations, real-time tracking, and automated score compiling into a single interface, we aimed to replace manual data entry and eliminate post-camp operational drag.

### **Results →**

We replaced paper-based logs with a semi-automated field assessment interface. This solution streamlined information architecture, drastically cutting post-camp alignment and grading time while giving assessors instant, analytical visibility over candidate scores for the first time.

## **Defining the Problem**

### **The assessors managed a fragmented, manual workflow, tracking fast-paced data points on paper logs before manually syncing with multiple departments.**

*Process Flow: \[Physical Paper Forms\] \-\> \[Manual Drawings/Tables for Sprint Order\] \-\> \[3-Hour Manual Cross-Department Sync Meeting\] \-\> **How can we unify all field observations into one smooth digital workflow?***

To solve this, I conducted extensive user research, interviewing the camp’s director board, commanders, and assessors. I paired this qualitative data with direct physical observations on the ground during the active sorting camp to identify friction points where paper logs failed \- most notably at the fast-paced sprint station where assessors resorted to manually scribbling circles and numbers to track arrival sequences.

## **Strategy & Exploration**

### **User Flow Mapping**

After organizing my field notes and sticky-note affinity mapping, I structured an optimized user flow. This architecture defined how field inputs immediately convert into synchronized system data, paving the way for a continuous, automated flow from live trial to final ranking.  
*\[Insert User Flow / Information Architecture Diagram here\]*

### **Product Context**

Prior to this design, the sorting camp had absolutely no digital interface available for real-time calculation, leaving assessors isolated from statistical analysis. I transformed this entirely manual, paper-heavy environment into a holistic, digital internal platform capable of coordinating field data with administrative decision-makers instantly.

* **The System before the redesign:** *\[Handwritten logs, manual paper drawings, and un-synced spreadsheets\]*  
* **The System after the redesign:** *\[Centralized digital dashboard with real-time field evaluation inputs\]*

## **Design Solutions**

By anchoring the interface around the structural journey of the camp (Candidate → Group Assignment → Station Observations → Final Board Review), I turned complex data entries into simple, sequential workflows.

### **\- Migrating the assessment tasks list**

To minimize the cognitive load of assessors working under stress in the field, I mapped the traditional group candidate tracking lists directly into a clean, digital grid. Each row represents a candidate assigned to a group, mirroring the hierarchy they were familiar with while removing the mess of physical clipboards.  
*\[Insert group tracking list schematic/wireframe here\]*

### **\- Connecting Assessment and Evaluation creation flow**

A key design challenge was managing functional dependencies. To rate a candidate's high-level behavioral attributes, an assessor first needed to input structural data from specific station tasks (like sprint times or drill performance). I designed a nested interface that structurally enforces this operational sequence. The final candidate summary score remains inactive until granular task parameters are entered. Once those field trials are populated, the system automatically aggregates the analytics, unlocking the macro review pipeline in a single view.  
*\[Insert task row dependency UX schematic here\]*

#### **Connecting Data to Actions**

The redesigned candidate row introduces explicit contextual triggers for "Input Station Data" and "View Final Evaluation." To enforce operational accuracy, the comprehensive evaluation overview remains locked until specific station observations are live. Once filled, the system activates the evaluation suite, passing metrics directly into the cross-department analysis portal.

#### **UX Impact: Eliminating the Copy-Paste Tax**

* **The Friction:** Assessors spent hours cross-referencing handwriting, copying scores into separate trackers, and attempting to sync metrics verbally during cross-department alignment meetings.  
* **The Solution:** Field entries now sync natively across the database, completely removing transcription error risks and ensuring data continuity between field lines and command rooms.

**Automating this data aggregation removed the operational bottleneck, eliminating the manual duplication of field inputs.**

## **Streamlining the Workflow**

*\[Insert station input wizard flow diagram here\]*

### **Optimizing Test Setup**

When an assessor triggers an active evaluation modal, it instantly pre-populates candidate metadata and assigned group metrics. The interface isolates high-sensitivity variables, allowing the user to rapidly input observed metrics with minimal interaction overhead.

#### **UX Impact: Intelligent Automation**

* **The Friction:** In complex testing blocks like the sprint station, assessors struggled to observe candidate behavior while simultaneously drawing maps and recording race orders on paper.  
* **The Solution:** The structured UI provides rapid selection buttons and auto-sorting entry fields, removing extra administrative interactions and freeing the assessor to focus purely on behavioral observations.

### **Next Step: Running the Evaluation**

As soon as localized station trials are marked complete, the macro \*\*Evaluation\*\* module goes live. Reviewers and command staff can click through instantly to analyze the data, maintaining absolute momentum without waiting for papers to be collected and sorted at the end of the day.  
*\[Insert active task grid after station completion here\]*

## **The Multi-Step Evaluation Flow**

Clicking the comprehensive review action opens a guided, step-by-step diagnostic wizard designed to balance swift automation with crucial human verification.  
To ensure error-free candidate shortlists, each step isolates a crucial military evaluation criterion. The backend compiles performance logs and generates data visualizations, while the interface highlights only the critical candidate exceptions that require human consensus.  
*\[Insert step-by-step review interface wireframe/mockup here\]*

### **Balancing Automation with User Control**

When the final grading process finishes, the candidate task row changes states to visually signal completion. I intentionally preserved a manual final "Sign-off" check. Because these evaluations determine a candidate's military placement and future trajectory, a fully automated decision engine would introduce user anxiety and operational distrust; giving commanders final approval authority maintains psychological safety and human oversight.  
*\[Insert final signed-off green task state diagram here\]*

## **Interactive Prototype**

The design was tested using a functional Figma prototype with a dedicated focus group to refine mobile field interactions prior to engineering kickoff.  
*\[Insert Link to Figma Prototype Here\]*