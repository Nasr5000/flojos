'use client'

import { useState } from 'react'

export default function Page() {
  const [messages, setMessages] = useState<string[]>([])
  const [input, setInput] = useState('')

  function send() {
    if (!input.trim()) return
    setMessages([...messages, input])
    setInput('')
  }

  return (
    <main className="h-screen grid grid-cols-2 bg-stone-50">
      <section className="border-r p-6">
        <h1 className="text-2xl font-bold mb-4">Chat</h1>

        <div className="space-y-2 mb-6">
          {messages.map((m, i) => (
            <div key={i} className="bg-white p-3 rounded-xl shadow">
              {m}
            </div>
          ))}
        </div>

        <div className="flex gap-2">
          <input
            className="border p-2 rounded-xl flex-1"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type..."
          />
          <button
            onClick={send}
            className="bg-black text-white px-4 rounded-xl"
          >
            Send
          </button>
        </div>
      </section>

      <section className="p-6">
        <h1 className="text-2xl font-bold mb-4">Canvas</h1>
        <textarea
          className="w-full h-[80vh] border rounded-xl p-4"
          defaultValue="Your editable workspace"
        />
      </section>
    </main>
  )
}
