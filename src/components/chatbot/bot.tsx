import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { chatHistory } from "@/lib/data"

export function Chatbot() {
  return (
    <Card className="flex flex-1 flex-col border-pipboy-green/20 bg-black/30">
      <CardHeader>
        <CardTitle className="uppercase text-glow">B.A.N.X. Terminal</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col justify-between gap-4">
        <div className="flex-1 space-y-2 overflow-y-auto font-mono text-sm">
          {chatHistory.map((msg, i) => (
            <p key={i}>
              <span className="text-pipboy-green/60">{msg.sender}&gt; </span>
              {msg.text}
            </p>
          ))}
          <p className="animate-pulse text-pipboy-green/60">_</p>
        </div>
        <Input
          type="text"
          placeholder="Enter command..."
          className="rounded-none border-pipboy-green/50 bg-black/50 focus:ring-pipboy-green"
        />
      </CardContent>
    </Card>
  )
}
