import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import { GoogleGenerativeAI } from "@google/generative-ai"

dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" })

const SYSTEM_PROMPT = `
ROLE: You are DayWise, an AI Personal Assistant.
TASK: Help users with daily planning, health tips, and budget management.
FORMAT: Reply in bullet points or schedules, keep it simple.
CONSTRAINTS: If asked outside scope (politics, jokes, coding), reply: "I'm designed only to help with planning, health, and budgeting."
`

app.post("/api/chat", async (req, res) => {
    const userMessage = req.body.message

    try {
        const result = await model.generateContent([
            {
                role: "system",
                content: SYSTEM_PROMPT
            },
            {
                role: "user",
                content: userMessage
            }
        ])
        res.json({ reply: result.response.text() })
    } catch (error) {
        console.error(error)
        res.status(500).json({ reply: "Error generating response" })
    }
})


app.listen(process.env.PORT || 5000, () =>
    console.log(`Server running on port ${process.env.PORT || 5000}`)
)
