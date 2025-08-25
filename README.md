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

    **Working Professionals** – Organize tasks, manage stress, track expenses
    **Families** – Plan meals, monitor budgets, set reminders for bills & health checkups
    **Students** – Manage study schedules, track spending, get health/diet tips
    **General Users** – Simplify daily life with one integrated AI assistant

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

## **Scalability & Evaluation**

* **Correctness:** Ensures AI responses are relevant based on user data (tasks, expenses, health logs).
* **Efficiency:** Uses optimized MongoDB queries & caching for faster response times.
* **Scalability:** Designed with REST APIs and modular architecture to handle **increased users & large datasets** without performance issues.

---

