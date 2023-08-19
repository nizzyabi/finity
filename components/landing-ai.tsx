"use client"

import { Code, Image, MessageSquare, Music, Video } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import "../public/ai.webp";
import "../public/bot.png"
import "../public/code.png"
import "../public/video.png"
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";
import { Button } from "./ui/button";

const tools = [
    {
      label: "Finity-GPT",
      icon: MessageSquare,
      color: "text-violet-500",
      bgColor: "bg-violet-500/10",
      description: "Chat with an AI",
      image: "bot.png"

    },
    {
      label: "Image Generation",
      icon: Image,
      color: "text-pink-700",
      bgColor: "bg-pink-700/10",
      description: "Generate images with text",
      image: "ai.webp"
    },
    {
      label: "Video Generation",
      icon: Video,
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
      description: "Make AI generated videos with text",
      image: "video.png"
    },
    {
      label: "Code Generation",
      icon: Code,
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10",
      description: "Get AI generated code in seconds",
      image: "code.png"
    }
  ]
  
  export const LandingAi = () => {
    const { isSignedIn } = useAuth();

    return (
      <div className="px-5 pb-20">
        <h2 className="text-center text-4xl text-white font-extrabold mb-10">FinityAI Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {tools.map((item) => (
            <Card key={item.label} className="bg-[#192339] border-none text-white hover:scale-105 transform transition-transform">
              <CardHeader>
                <CardTitle className="flex items-center gap-x-2">
                  <div>
                    <p className="text-xxl pb-3">{item.label}</p>
                  </div>
                </CardTitle>
                <CardContent className="pt-4 px-0">
                  {item.description}
                </CardContent>
              </CardHeader>
            </Card>
          ))}
        </div>
        <div className="text-white font-bold py-20 text-center space-y-5">
          <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
              <Button variant="premium" className="md:text-lg p-4 md:p-6 rounded-full font-semibold">
                  Start Generating For Free
              </Button>
          </Link>
        </div>
      </div>
    )
  }