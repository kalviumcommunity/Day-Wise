import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import { GoogleGenerativeAI } from "@google/generative-ai"
import { countTokens } from './utils/index.js'
import { oneShotPrompt } from "./prompts/oneShotPrompt.js"
import { multiShotPrompt } from "./prompts/multiShotPrompt.js"
import { dynamicPrompt } from './prompts/dynamicPrompt.js'
import { chainOfThoughtPrompt } from "./prompts/chainOfThoughtPrompt.js"


dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" })

app.post("/api/chat", async (req, res) => {
    const userMessage = req.body.message

    try {
        const oneShotPromptText = oneShotPrompt(userMessage)
        const tokenCount = countTokens(oneShotPromptText)
        console.log(`Prompt token count: ${tokenCount}`)
        const result = await model.generateContent(oneShotPromptText)
        res.json({ reply: result.response.text() })
    } catch (error) {
        console.error(error)
        res.status(500).json({ reply: "Error generating response" })
    }
})

app.post("/api/chat-cot", async (req, res) => {
    const userMessage = req.body.message

    try {
        const promptText = chainOfThoughtPrompt(userMessage)
        const result = await model.generateContent(promptText)
        res.json({ reply: result.response.text() })
    } catch (error) {
        console.error(error)
        res.status(500).json({ reply: "Error generating response" })
    }
})

app.post("/api/chat-dynamic", async (req, res) => {
    const { userName, todayTasks, recentExpenses, healthLog, message: userMessage } = req.body

    try {
        const promptText = dynamicPrompt({
            userName,
            todayTasks,
            recentExpenses,
            healthLog,
            userMessage
        })
        const result = await model.generateContent(promptText)
        res.json({ reply: result.response.text() })
    } catch (error) {
        console.error(error)
        res.status(500).json({ reply: "Error generating response" })
    }
})

app.post("/api/chat-multishot", async (req, res) => {
    const userMessage = req.body.message

    try {
        const promptText = multiShotPrompt(userMessage)
        const result = await model.generateContent(promptText)
        res.json({ reply: result.response.text() })
    } catch (error) {
        console.error(error)
        res.status(500).json({ reply: "Error generating response" })
    }
})

app.post("/api/chat", async (req, res) => {
    const userMessage = req.body.message

    try {
        const oneShotPromptText = oneShotPrompt(userMessage)
        const result = await model.generateContent(oneShotPromptText)
        res.json({ reply: result.response.text() })
    } catch (error) {
        console.error(error)
        res.status(500).json({ reply: "Error generating response" })
    }
})

app.listen(process.env.PORT || 5000, () =>
    console.log(`Server running on port ${process.env.PORT || 5000}`)
)