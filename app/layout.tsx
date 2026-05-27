import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Etsy Keyword Trend Spy — Spot Trends Before Competitors",
  description: "Track emerging Etsy keyword trends before they saturate. Get real-time alerts when new opportunities appear. Built for Etsy sellers, POD sellers, and handmade business owners."
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="d6019053-4940-4889-a61c-ce7d0eda7932"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
