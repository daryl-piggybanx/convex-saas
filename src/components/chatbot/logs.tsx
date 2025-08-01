import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { Link } from "@tanstack/react-router"
import { chatLogsHistory } from "@/lib/data"

export function ChatLogsContent() {
  return (
    <div className="flex flex-col gap-4 text-lg text-pipboy-green">
      <header className="flex items-center gap-4">
        <div>
          <h1 className="text-4xl uppercase text-glow">B.A.N.X. Chat Logs</h1>
          <p className="text-pipboy-green/70">Complete conversation history</p>
        </div>
      </header>
      <Separator className="bg-pipboy-green/20" />

      <div className="space-y-4">
        {chatLogsHistory.map((session) => (
          <Card key={session.id} className="border-pipboy-green/20 bg-black/30">
            <CardHeader>
              <CardTitle className="flex items-center justify-between text-lg">
                <span className="uppercase text-glow">Session #{session.id}</span>
                <span className="text-sm font-normal text-pipboy-green/70">
                  {new Date(session.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 font-mono text-sm">
                {session.messages.map((msg, i) => (
                  <div key={i} className="flex flex-col gap-1">
                    <p>
                      <span className="text-pipboy-green/60">{msg.sender}&gt; </span>
                      {msg.text}
                    </p>
                    <p className="text-xs text-pipboy-green/40 ml-4">
                      {new Date(msg.timestamp).toLocaleTimeString("en-US", {
                        hour: "2-digit",
                        minute: "2-digit",
                        second: "2-digit",
                      })}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
