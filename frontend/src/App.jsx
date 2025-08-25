import { useState } from "react"
import axios from "axios"

function App() {
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState([])

  const sendMessage = async () => {
    if (!input) return
    const userMsg = { sender: "user", text: input }
    setMessages([...messages, userMsg])

    try {
      const res = await axios.post("http://localhost:5000/api/chat", {
        message: input
      })
      const botMsg = { sender: "bot", text: res.data.reply }
      setMessages(prev => [...prev, botMsg])
    } catch (error) {
      setMessages(prev => [...prev, { sender: "bot", text: "Error!" }])
    }
    setInput("")
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4">DayWise – Smart Daily Guidance</h1>
      
      <div className="w-full max-w-lg h-96 overflow-y-auto bg-white p-4 rounded shadow">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`mb-2 p-2 rounded ${
              msg.sender === "user" ? "bg-blue-200 text-right" : "bg-green-200 text-left"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      <div className="flex w-full max-w-lg mt-4">
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          className="flex-grow p-2 border rounded-l"
          placeholder="Ask DayWise..."
        />
        <button
          onClick={sendMessage}
          className="bg-blue-500 text-white px-4 rounded-r"
        >
          Send
        </button>
      </div>
    </div>
  )
}

export default App
