import { Bot, Gauge, Trophy, Users, BookOpen, ExternalLink } from "lucide-react"

// Sidebar Navigation
export const menuItems = [
  { icon: Gauge, label: "DASHBOARD", href: "/" },
  { icon: Trophy, label: "TROPHY ROOM", href: "/trophy-room" },
  { icon: Users, label: "LEADERBOARD", href: "/leaderboard" },
  { icon: Bot, label: "B.A.N.X.", href: "/chat-logs" },
]

// Sidebar Call to Actions
export const callToActions = [
  { icon: BookOpen, label: "FAQ", href: "#" },
  { icon: ExternalLink, label: "DROPSITE", href: "#" },
]

// Leaderboard Data
export const leaderboardData = [
  { rank: 1, name: "PIGGY 1", score: 99870 },
  { rank: 2, name: "PIGGY 2", score: 85230 },
  { rank: 3, name: "PIGGY 3", score: 78900 },
  { rank: 4, name: "PIGGY 4", score: 65430 },
  { rank: 5, name: "PIGGY 5", score: 51200 },
]

// Chatbot History (current session)
export const chatHistory = [
  { sender: "B.A.N.X.", text: "Greetings. What is your query?" },
  { sender: "USER", text: "What are the most popular variations?" },
  {
    sender: "B.A.N.X.",
    text: "Refractor, Atomic, Gold, Griddy, Angel Dust, Radiant, Titanium, Wave, Beam, Canvas, Starburst, Metal, Snakeskin, Platinum, Glass, Disco, Sequence, Prism, Hypnotic, Matte, Holo, Galactic, Fractal, Flash, Plaid",
  },
  { sender: "USER", text: "How do private releases work?" },
  {
    sender: "B.A.N.X.",
    text: "Submit a New Collector Application. If you are selected, you'll be notified via email or sms when a private release is available. If you're fast enough, complete the purchase.",
  },
]

// Complete Chat Logs History (sorted by date descending)
export const chatLogsHistory = [
  {
    id: "2025-001-15",
    date: "2025-01-15T14:30:00Z",
    messages: [
      {
        sender: "B.A.N.X.",
        text: "System initialized. Welcome back, Collector.",
        timestamp: "2025-01-15T14:30:00Z",
      },
      {
        sender: "USER",
        text: "What's the status on the latest drop?",
        timestamp: "2025-01-15T14:30:15Z",
      },
      {
        sender: "B.A.N.X.",
        text: "Drop #247 is scheduled for 16:00 UTC. 1,500 units available. Estimated sell-out time: 3.2 minutes.",
        timestamp: "2025-01-15T14:30:18Z",
      },
      {
        sender: "USER",
        text: "Set alert for 15:58 UTC",
        timestamp: "2025-01-15T14:30:45Z",
      },
      {
        sender: "B.A.N.X.",
        text: "Alert configured. You will be notified 2 minutes before drop initiation.",
        timestamp: "2025-01-15T14:30:47Z",
      },
    ],
  },
  {
    id: "2025-001-14",
    date: "2025-01-14T09:15:00Z",
    messages: [
      {
        sender: "B.A.N.X.",
        text: "Good morning, Collector. Your ranking has improved to #23.",
        timestamp: "2025-01-14T09:15:00Z",
      },
      {
        sender: "USER",
        text: "Show me my collection stats",
        timestamp: "2025-01-14T09:15:30Z",
      },
      {
        sender: "B.A.N.X.",
        text: "Collection Summary: 47 items acquired, 12 rare variants, 3 legendary pieces. Total value: 892,340 credits.",
        timestamp: "2025-01-14T09:15:33Z",
      },
      {
        sender: "USER",
        text: "Which legendary pieces do I own?",
        timestamp: "2025-01-14T09:16:00Z",
      },
      {
        sender: "B.A.N.X.",
        text: "Legendary Collection: 'Atomic Sunrise #001', 'Galactic Prism #007', 'Hypnotic Void #013'",
        timestamp: "2025-01-14T09:16:03Z",
      },
    ],
  },
  {
    id: "2025-001-13",
    date: "2025-01-13T20:45:00Z",
    messages: [
      {
        sender: "B.A.N.X.",
        text: "Evening briefing: 3 new drops detected in the next 24 hours.",
        timestamp: "2025-01-13T20:45:00Z",
      },
      {
        sender: "USER",
        text: "Tell me about tomorrow's drops",
        timestamp: "2025-01-13T20:45:20Z",
      },
      {
        sender: "B.A.N.X.",
        text: "Drop Schedule: 08:00 - Titanium Series (500 units), 14:30 - Canvas Collection (750 units), 19:00 - Mystery Box Event (100 units)",
        timestamp: "2025-01-13T20:45:23Z",
      },
      {
        sender: "USER",
        text: "Set alerts for all three",
        timestamp: "2025-01-13T20:45:50Z",
      },
      {
        sender: "B.A.N.X.",
        text: "All alerts configured. Notifications will be sent 5 minutes before each drop.",
        timestamp: "2025-01-13T20:45:52Z",
      },
    ],
  },
  {
    id: "2025-001-12",
    date: "2025-01-12T16:20:00Z",
    messages: [
      {
        sender: "USER",
        text: "What are the rarest items in the Piggyverse?",
        timestamp: "2025-01-12T16:20:00Z",
      },
      {
        sender: "B.A.N.X.",
        text: "Rarity Analysis: Genesis Collection (21 items), Founder's Edition (50 items), Developer Exclusives (7 items). Current market cap: 15.7M credits.",
        timestamp: "2025-01-12T16:20:05Z",
      },
      {
        sender: "USER",
        text: "Do I own any Genesis pieces?",
        timestamp: "2025-01-12T16:20:30Z",
      },
      {
        sender: "B.A.N.X.",
        text: "Negative. Genesis pieces have not appeared in public drops since launch week.",
        timestamp: "2025-01-12T16:20:33Z",
      },
    ],
  },
  {
    id: "2025-001-11",
    date: "2025-01-11T11:10:00Z",
    messages: [
      {
        sender: "B.A.N.X.",
        text: "System maintenance completed. All functions restored.",
        timestamp: "2025-01-11T11:10:00Z",
      },
      {
        sender: "USER",
        text: "Any issues during maintenance?",
        timestamp: "2025-01-11T11:10:15Z",
      },
      {
        sender: "B.A.N.X.",
        text: "No data loss detected. Performance improved by 12%. New features: Enhanced rarity detection, improved drop predictions.",
        timestamp: "2025-01-11T11:10:18Z",
      },
      {
        sender: "USER",
        text: "Test the new drop prediction",
        timestamp: "2025-01-11T11:10:45Z",
      },
      {
        sender: "B.A.N.X.",
        text: "Prediction Model Active: Next high-value drop probability 73% within 48 hours. Recommended preparation: Ensure wallet balance above 50,000 credits.",
        timestamp: "2025-01-11T11:10:48Z",
      },
    ],
  },
]

// Trophy Room Preview Data
export const trophyData = [
  { id: 1, title: "Trophy 1", query: "glowing blue soda bottle, retro futurism" },
  { id: 2, title: "Trophy 2", query: "retro futuristic red rocket gas station sign" },
  { id: 3, title: "Trophy 3", query: "stylized barbarian battle axe" },
  { id: 4, title: "Trophy 4", query: "stylized small atomic bomb with fins" },
]

export const crewLogs = []
