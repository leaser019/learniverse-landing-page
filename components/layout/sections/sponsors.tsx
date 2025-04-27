"use client";

import { Marquee } from "@devnomic/marquee";
import "@devnomic/marquee/dist/index.css";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const messages: string[] = [
  "💡 One line of code today saves your deadline tomorrow.",
  "🤖 ChatGPT just leveled up. Are you keeping up?",
  "🚀 Join our coding community and skyrocket your skills!",
  "🔥 Good code is like true love: right person, right timing.",
  "👾 Debugging isn't hard. Staying calm is.",
  "📚 Learn to code today, unlock your future tomorrow.",
  "⚡ Fast coding leads to fast bugs... but also fast fixes!",
  "🔧 Fixing bugs is like confessing love: scary but worth it.",
  "🛠️ Build projects, not just dreams.",
  "🎯 One commit a day keeps the regret away.",
  "🌟 Your first 100 bad codes are just tickets to greatness.",
  "💬 Comment your code like you're explaining to a golden retriever.",
  "🧠 AI won't replace you — a coder using AI will.",
  "💥 Break things. Learn fast. Build stronger.",
  "💻 Coding is 90% Googling and 10% pretending you know what you're doing.",
  "🔍 Bugs hide better than ninjas. Stay sharp.",
  "📈 You're one side project away from changing your career.",
  "🕹️ Code like it's a game. Win like it's your life.",
  "🎨 Creativity is just structured chaos. Code beautifully.",
  "🥇 Coding isn't about being the best. It's about being better than yesterday.",
];

export const SponsorsSection = () => {
  return (
    <section id="sponsors" className="container">
      <div className="text-center mb-12">
        <h2 className="text-lg text-blue-500 mb-2 tracking-wider">
          Daily Motivation
        </h2>
        <h3 className="text-3xl md:text-4xl font-bold flex items-center justify-center gap-2">
          <Sparkles className="h-8 w-8 text-blue-500" />
          <span>Inspirational Messages</span>
          <span className="text-transparent bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text">
            for Developers
          </span>
        </h3>
      </div>

      <div className="relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-blue-400/20 rounded-xl blur-md"></div>
        {/* <Card className="border border-blue-300/30 bg-background/80 backdrop-blur-sm overflow-hidden"> */}
          <div className="py-8">
            <Marquee
              className="gap-[4rem]"
              fade
              innerClassName="gap-[4rem]"
              pauseOnHover
            >
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-muted/60 dark:bg-card px-6 py-4 rounded-lg shadow-sm border border-secondary flex items-center text-xl font-medium mx-4 min-w-[300px]"
                >
                  {message}
                </motion.div>
              ))}
            </Marquee>
          </div>
        {/* </Card> */}
      </div>
    </section>
  );
};
