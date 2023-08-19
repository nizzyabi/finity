"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Image, MessageSquare, Music, Video } from "lucide-react";

const testimonials = [
  {
    name: "Joel",
    avatar: "J",
    title: "Software Engineer",
    description: "This is the best application I've ever used!",
  },
  {
    name: "Antonio",
    avatar: "A",
    title: "Designer",
    description: "I use this daily for generating new photos!",
  },
  {
    name: "Mark",
    avatar: "M",
    title: "CEO",
    description: "This app has changed my life, I cannot imagine working without it!",
  },
  {
    name: "Mary",
    avatar: "M",
    title: "Engineer",
    description: "The best in class, definitely worth the premium subscription!",
  },
];

const tools = [
  {
    label: "Finity-GPT",
    icon: MessageSquare,
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
  },
  {
    label: "Image Generation",
    icon: Image,
    color: "text-pink-700",
    bgColor: "bg-pink-700/10",
  },
  {
    label: "Video Generation (Beta)",
    icon: Video,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
  },
  {
    label: "Music Generation (Beta)",
    icon: Music,
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
  },
  {
    label: "Code Generation",
    icon: Code,
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
  }
]

export const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">Testimonials</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((item) => (
          <Card key={item.description} className="bg-[#192339] border-none text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-zinc-400 text-sm">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  )
}