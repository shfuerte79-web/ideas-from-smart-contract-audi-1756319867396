import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ideas from: Smart Contract Auditor AI',
  description: '[
  {
    "title": "Smart Contract Guardian",
    "one_liner": "An AI-powered watchdog that monitors smart contracts in real-time for vulnerabilities.",
    "why_now": "As blockchain technology becomes mainstream, the risk of smart contract exploits increases, demanding proactive monitoring solutions.",
    "novel_mechanism": "Utilizes a combination of anomaly detection and predictive modeling to foresee vulnerabilities before deployment.",
    "ai_stack": [
      "GPT",
      "RAG",
      "Agents"
    ],
    "edge_use_cases": [
      "Automated alerts for security breaches",
      "Continuous monitoring for changes in contract state"
    ],
    "blue_ocean": true,
    "execution_72h": {
      "mvp_scope": [
        "Real-time monitoring dashboard",
        "Alert system for detected anomalies",
        "Integration with existing smart contract platforms"
      ],
      "tools": [
        "Next.js",
        "Supabase",
        "Socket.io"
      ],
      "data_bootstrap": [
        "public blockchain data",
        "historical exploit database"
      ],
      "risk": [
        "Integration complexities",
        "Data privacy concerns"
      ],
      "mitigation": [
        "Focus on public data only",
        "Implement strict access controls"
      ]
    },
    "go_to_market": {
      "hooks": [
        "Show staggering statistics of smart contract hacks for urgency",
        "Demonstrate live monitoring capabilities"
      ],
      "channels": [
        "ProductHunt",
        "Medium",
        "LinkedIn"
      ],
      "pricing": {
        "free": "Basic monitoring for one contract",
        "pro": "Advanced features for up to five contracts",
        "business": "Subscription model for unlimited contracts with added features"
      }
    },
    "moat": [
      "Early mover advantage in real-time security",
      "Partnerships with blockchain platforms",
      "Community-driven threat intelligence"
    ],
    "scores": {
      "novelty": 8,
      "72h_feasibility": 7,
      "revenue_potential": 9,
      "defensibility": 8
    },
    "total_score": 32,
    "reasoning": "It addresses the pressing need for smart contract security with a unique real-time monitoring approach that sets it apart from traditional auditing methods."
  }
]',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={inter.className}>{children}</body>
    </html>
  )
}