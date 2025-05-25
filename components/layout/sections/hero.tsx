"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

export const HeroSection = () => {
  const { theme } = useTheme();
  return (
    <section className="container w-full">
      <div className="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-20 md:py-32">
        <div className="text-center space-y-8">
          <div className="flex items-center justify-center">
            <Badge
              variant="outline"
              className="text-sm py-2 px-4 flex items-center gap-2 animate-pulse-slow"
            >
              <Badge className="bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white">
                NEW
              </Badge>
              <span className="flex items-center gap-1.5">
                <Sparkles className="h-3 w-3 text-blue-500" />
                <span className="font-medium tracking-wide">
                  LIMITLESS LEARNING JUST LAUNCHED!
                </span>
                <Sparkles className="h-3 w-3 text-blue-500" />
              </span>
            </Badge>
          </div>

          <div className="max-w-screen-md mx-auto text-center text-4xl md:text-6xl font-bold">
            <h1>
              Explore
              <span className="text-transparent px-2 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text">
                Learniverse
              </span>
              today!
            </h1>
          </div>

          <p className="max-w-screen-sm mx-auto text-xl text-muted-foreground">
            We’re not just a learning tool – we’re a vibrant community of
            passionate learners. Join us today to access exclusive resources and
            dedicated support.
          </p>

          <div className="space-y-4 md:space-y-0 md:space-x-4">
            <Button className="w-5/6 md:w-1/4 font-bold group/arrow bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500">
              <Link
                href="https://learniverse-client.vercel.app/"
                target="_blank"
              >
                Getting Started
                {/* <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" /> */}
              </Link>
            </Button>

            <Button
              asChild
              variant="secondary"
              className="w-5/6 md:w-1/4 font-bold border border-blue-300/30 hover:border-blue-500/50"
            >
              <Link href="https://github.com/learniverse-alpha" target="_blank">
                Our GitHub
              </Link>
            </Button>
          </div>
        </div>

        <div className="relative group mt-14">
          <div className="absolute top-2 lg:-top-8 left-1/2 transform -translate-x-1/2 w-[90%] mx-auto h-24 lg:h-80 bg-blue-500/40 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-xl opacity-30 group-hover:opacity-50 blur transition duration-1000 group-hover:duration-200"></div>
          <Image
            width={1200}
            height={1200}
            className="w-full md:w-[1200px] mx-auto rounded-lg relative rouded-lg leading-none flex items-center border border-blue-300/30 hover:border-blue-500/50 transition-all duration-300 group-hover:scale-[1.01]"
            src={
              theme === "light"
                ? "/learniverse-dashboard-light.png"
                : "/learniverse-dashboard-light.png"
            }
            alt="Learniverse Dashboard"
          />

          <div className="absolute bottom-0 left-0 w-full h-20 md:h-28 bg-gradient-to-b from-background/0 via-background/50 to-background rounded-lg"></div>
        </div>
      </div>
    </section>
  );
};
