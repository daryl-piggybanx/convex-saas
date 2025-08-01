"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function WeeklyCalendar() {
  const getWeekDays = () => {
    const today = new Date()
    const week = []
    for (let i = 0; i < 7; i++) {
      const day = new Date(today)
      day.setDate(today.getDate() - today.getDay() + i)
      week.push(day)
    }
    return week
  }

  const weekDays = getWeekDays()
  const today = new Date().toDateString()

  return (
    <Card className="border-pipboy-green/20 bg-black/30">
      <CardHeader>
        <CardTitle className="uppercase text-glow">Drop Schedule</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between gap-2">
          {weekDays.map((day) => (
            <div
              key={day.toISOString()}
              className={`flex flex-1 flex-col items-center rounded-none border p-2 transition-colors ${
                day.toDateString() === today ? "border-pipboy-green bg-pipboy-green/10" : "border-pipboy-green/20"
              }`}
            >
              <p className="text-sm uppercase text-pipboy-green/70">
                {day.toLocaleDateString("en-US", { weekday: "short" })}
              </p>
              <p className="text-2xl font-bold">{day.getDate()}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
