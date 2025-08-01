import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { leaderboardData } from "@/lib/data"

export function LeaderboardPreview() {
  return (
    <Card className="border-pipboy-green/20 bg-black/30 w-full">
      <CardHeader>
        <CardTitle className="uppercase text-glow">Leaderboard</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 font-mono text-base">
          {leaderboardData.map((user) => (
            <li key={user.rank} className="flex justify-between">
              <span>
                <span className="text-pipboy-green/60">{user.rank.toString().padStart(2, "0")}</span> {user.name}
              </span>
              <span>{user.score}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
