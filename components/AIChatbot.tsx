import { sendMessage } from "@/app/actions/chat"
import { useState } from "react"
import { Button } from "./ui/button"

export default function AIChatbot() {
  const [messages, setMessages] = useState([
    {
      role: "system",
      content:
        "You are a highly restricted assistant that can only answer questions related to resume and portfolio.",
    },
    { role: "assistant", content: "Hi Simon! How can I help you today?" },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [chatMessages, setChatMessages] = useState(messages)

  const handleSend = async () => {
    console.log("Sending message:", input)
    if (!input.trim() || isLoading) return

    const userMessage = { role: "user", content: input }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    try {
      const assistantMessage = await sendMessage([...messages, userMessage])

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: assistantMessage.content || "",
        },
      ])
    } catch (error: any) {
      console.error(error)
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Sorry, something went wrong. Please try again.",
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="fixed right-4 bottom-4 rounded-lg border border-gray-300 bg-white shadow-lg sm:w-48 lg:w-120 dark:border-gray-600 dark:bg-gray-800">
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800 dark:text-white">
          AI Resume Assistant
        </h3>
        <div className="text-gray-600 dark:text-gray-400">
          {messages.map((msg, index) =>
            msg.role === "user" ? (
              <div key={index} className="mb-4 flex justify-end">
                <div className="max-w-[75%] rounded-2xl rounded-tr-none bg-blue-500 px-4 py-3 break-words text-white">
                  {msg.content}
                </div>
              </div>
            ) : msg.role === "assistant" ? (
              <div key={index} className="mb-4 flex justify-start">
                <div className="max-w-[75%] rounded-2xl rounded-tl-none bg-gray-200 px-4 py-3 break-words text-gray-800">
                  {msg.content}
                </div>
              </div>
            ) : null
          )}
        </div>
      </div>
      <div className="flex w-full space-x-2 px-4 pb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault()
              handleSend()
            }
          }}
          className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-white"
        />
        <Button onClick={handleSend} disabled={isLoading}>
          Send
        </Button>
      </div>
    </div>
  )
}
