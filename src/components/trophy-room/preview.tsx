import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { trophyData } from "@/lib/data"
import trophyImage from "@/assets/trophy-1.jpg"

export function TrophyRoomPreview() {
  return (
    <Card className="border-pipboy-green/20 bg-black/30">
      <CardHeader>
        <CardTitle className="uppercase text-glow">Trophy Room Preview</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {trophyData.map((trophy) => (
            <div key={trophy.id} className="group relative cursor-pointer">
              <img
                src={trophyImage}
                alt={trophy.title}
                width={150}
                height={150}
                className="w-full border-2 border-pipboy-green/20 object-cover transition-all group-hover:border-pipboy-green"
              />
              <div className="absolute bottom-0 w-full bg-black/70 p-1 text-center text-xs uppercase text-pipboy-green opacity-0 transition-opacity group-hover:opacity-100">
                {trophy.title}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
