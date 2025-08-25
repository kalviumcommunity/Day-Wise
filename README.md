# Day-Wise

# **AI Personal Assistant – Life Planner + Health Bot + Budget Helper**

## **Overview**

This project is a **full-stack AI-powered web application** designed to help individuals and families manage their **daily life, health, and finances** in one place.
The platform integrates **AI-driven suggestions, reminders, and insights** to improve productivity, well-being, and money management.

Users can access three major features:

1. **Life Planner** – AI-based daily planner for tasks, reminders, and productivity guidance.
2. **Health Bot** – Tracks lifestyle habits, gives diet/workout suggestions, and offers basic health tips.
3. **Budget Helper** – Manages expenses, categorizes spending, and provides savings insights.

This makes the application useful for **working professionals, families, and students** who want a smart digital assistant for **time, health, and financial management**.

---

## **Features**

* **AI-driven Smart Planner** – Daily task creation, reminders, and priority suggestions
* **Health Monitoring** – AI-based chatbot for diet & wellness recommendations
* **Budget Tracking** – Expense logging, category-wise spending reports, savings advice
* **Interactive Chat Mode** – Ask AI about tasks, health, or finances in real-time
* **Cross-device Access** – Available on web (React frontend + Express backend)
* **AI Prompting Techniques Used:**

  * Zero-shot prompting (general queries)
  * One-shot & Few-shot prompting (personalized responses)
  * Multi-shot prompting (guided with multiple examples)
  * Chain-of-Thought reasoning (budget + health insights)
  * Dynamic prompting (context-based replies)

---

## **Tech Stack**

* **Frontend:** React.js (Vite for fast build)
* **Backend:** Node.js, Express.js
* **Database:** MongoDB (for users, tasks, expenses, health data)
* **AI/LLM:** OpenAI API (or Gemini-compatible AI model)

**Libraries & Tools**

* `axios` → API requests
* `dotenv` → Environment variables
* `jsonwebtoken` → User authentication
* `bcryptjs` → Password encryption
* `mongoose` → MongoDB connection
* `chart.js / recharts` → Expense & health visualizations

---

## **Use Cases**

👨‍💼 **Working Professionals** – Organize tasks, manage stress, track expenses
👩‍👩‍👧 **Families** – Plan meals, monitor budgets, set reminders for bills & health checkups
🎓 **Students** – Manage study schedules, track spending, get health/diet tips
💰 **General Users** – Simplify daily life with one integrated AI assistant

---

## **Implementation Flow**

1. **Frontend (React.js)**

   * User authentication (JWT / Google OAuth)
   * Dashboard with tabs: Planner | Health Bot | Budget
   * Interactive AI chat interface

2. **Backend (Express.js + MongoDB)**

   * REST APIs for tasks, expenses, and health queries
   * AI API integration for smart recommendations
   * Secure user data storage

3. **AI Features**

   * Dynamic prompt engineering for personalized responses
   * Budget insights: "You spent 40% on food last week. Try reducing by 10%."
   * Health guidance: "Based on your sleep log, try reducing screen time at night."
   * Life planning: "You have 3 pending tasks, shall I schedule them tomorrow morning?"

---

## **System Prompt Design (Using RTFC Framework)**

### **System Prompt**

```
You are DayWise, an AI Personal Assistant.
ROLE: Your role is to be a digital helper for life planning, health tracking, and budgeting.
TASK: Help users by creating schedules, giving wellness tips, and suggesting budgeting strategies.
FORMAT: Respond in clear, simple bullet points or structured schedules.
CONSTRAINTS: If the user asks anything outside your scope, reply with:
"I'm designed only to help with planning, health, and budgeting."
```

### **RTFC Breakdown**

* **R (Role):** Defined as “DayWise, a personal assistant”
* **T (Task):** Limited to planning, health, and budgeting only
* **F (Format):** Responses must be in clear lists/schedules for easy understanding
* **C (Constraints):** Politely decline if asked about unrelated topics

---

## **Zero-Shot Prompting**

**Zero-shot prompting** is when we give the AI a query **without any examples**.
The AI relies only on its training and the **system prompt instructions** to generate the response.

In **DayWise**, zero-shot prompting is applied when users directly ask for help, such as *“Plan my day”* or *“Track my expenses.”*
The system prompt (built with RTFC) ensures the AI stays **focused on planning, health, and budgeting**, even without extra examples.

This makes DayWise reliable for **first-time users** and ensures consistent guidance.

---

## **Multi-Shot Prompting**

**Multi-shot prompting** means providing the AI with **multiple examples of inputs and outputs** before asking the actual query.
This helps the AI understand the **style, structure, and context** we expect in its answers.

In **DayWise**, multi-shot prompting is used when we want the AI to give **consistent responses across different categories** (planning, health, budgeting).

By giving multiple demonstrations in the prompt, the AI learns the **pattern of responses** and follows the same structured style for new queries.

This ensures **accuracy, consistency, and reliability** in DayWise’s guidance.

---

## **Dynamic Prompting**

**Dynamic prompting** means **modifying the prompt in real-time** based on the user’s context, preferences, or data stored in the system.
Instead of using a fixed instruction, the system **injects user-specific information** into the prompt before sending it to the AI.

In **DayWise**, dynamic prompting is used to give **personalized responses**. For example:

* If a user has logged **5 hours of sleep**, the prompt dynamically includes that info → AI suggests “Try increasing your sleep by 2 hours.”
* If monthly expenses show **high spending on food**, the prompt includes that → AI responds with “Consider reducing eating out to save 15%.”
* If tasks are pending, the system prompt dynamically lists them → AI suggests a schedule including those tasks.

This way, the AI doesn’t just rely on general rules but **adapts its answers to the user’s real-time data**, making the assistant more practical and intelligent.

---

## **Chain-of-Thought Prompting (Hidden/Silent Reasoning)**

Chain-of-thought prompting encourages the model to perform internal, step-by-step reasoning before producing an answer.
To keep responses concise and to avoid exposing sensitive intermediate reasoning, DayWise uses a safe pattern: the model reasons internally but only outputs the final plan.

### **Chain-of-Thought–Inspired Prompt (Safe)**

```
Apply internal step-by-step reasoning to plan and verify a feasible day.
Do not reveal your intermediate reasoning or calculations.

Follow this internal sequence silently:
1) Collect constraints (calendar events, priorities, health targets, budget limits)
2) Allocate realistic time blocks and buffer time
3) Check conflicts and adjust
4) Add reminders and simple habit goals
5) Validate that the plan fits within the day

Output only the final result in this format:
- Schedule (time blocks)
- Reminders (time + purpose)
- Health goals (water/sleep/mood)
- Budget actions (limits or logs)
Keep the output concise and actionable.
```

This approach improves planning quality and coherence (the model “thinks first”) while ensuring users receive clean, final answers without internal chains of reasoning.

---

## **Scalability & Evaluation**

* **Correctness:** Ensures AI responses are relevant based on user data (tasks, expenses, health logs).
* **Efficiency:** Uses optimized MongoDB queries & caching for faster response times.
* **Scalability:** Designed with REST APIs and modular architecture to handle **increased users & large datasets** without performance issues.

---
