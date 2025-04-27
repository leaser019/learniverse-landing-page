"use client";
import { Github, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { ToggleTheme } from "./toogle-theme";

interface RouteProps {
  href: string;
  label: string;
}

interface FeatureProps {
  title: string;
  description: string;
}

const routeList: RouteProps[] = [
  {
    href: "#benefits",
    label: "Benefits",
  },
  {
    href: "#team",
    label: "Team",
  },
  {
    href: "#contact",
    label: "Contact",
  },
  {
    href: "#faq",
    label: "FAQ",
  },
];

const featureList: FeatureProps[] = [
  {
    title: "📺 Learn by Watching",
    description:
      "Bite-sized videos that show you step-by-step so you actually get it, fast.",
  },
  {
    title: "🤝 Real Proof, Real Results",
    description:
      "See real student wins: project demos. Trust builds when you see it happen.",
  },
  {
    title: "🧩 Interactive Code Challenges",
    description: "In-video coding quests with instant feedback & badges.",
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`transition-all duration-500 ${
        scrolled
          ? "shadow-lg bg-background/80 backdrop-blur-xl w-[95%] md:w-[85%] lg:w-[80%] border-blue-400/40"
          : "shadow-inner bg-background/10 backdrop-blur-sm w-[90%] md:w-[70%] lg:w-[75%] border-blue-300/15"
      } lg:max-w-screen-xl top-5 mx-auto sticky border z-40 rounded-2xl flex justify-between items-center p-2`}
    >
      <Link href="/" className="font-bold text-lg flex items-center group">
        <div className="overflow-hidden rounded-lg mr-2 relative h-9 w-9">
          <Image
            src="/LearniverseLogo.png"
            alt="Learniverse Logo"
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
        </div>
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400 font-extrabold tracking-tight group-hover:tracking-wider transition-all duration-300">
          Learniverse
        </span>
      </Link>

      <div className="flex items-center lg:hidden md:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="relative">
              <Menu
                onClick={() => setIsOpen(!isOpen)}
                className="cursor-pointer transition-transform duration-300 hover:scale-110"
              />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full animate-ping"></span>
            </Button>
          </SheetTrigger>

          <SheetContent
            side="left"
            className="flex flex-col justify-between bg-background/95 backdrop-blur-xl border-r border-blue-300/20 rounded-r-3xl shadow-[5px_0_30px_rgba(59,130,246,0.15)] w-[85%] max-w-[320px] animate-in slide-in-from-left duration-300"
          >
            <div className="flex flex-col h-full">
              <SheetHeader className="mb-6 mt-2">
                <SheetTitle className="flex items-center justify-center">
                  <Link href="/" className="flex items-center group">
                    <div className="overflow-hidden rounded-xl mr-3 h-14 w-14 relative shadow-inner ring-1 ring-blue-300/30">
                      <Image
                        src="/LearniverseLogo.png"
                        alt="Learniverse Logo"
                        fill
                        className="object-cover transition-all duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400 font-extrabold tracking-tight group-hover:tracking-wider transition-all duration-300">
                        Learniverse
                      </span>
                      <span className="text-xs text-muted-foreground">
                        Explore your learning universe
                      </span>
                    </div>
                  </Link>
                </SheetTitle>
              </SheetHeader>

              <div className="mt-4 px-2">
                <div className="relative flex items-center justify-center mb-6">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full h-[1px] bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"></span>
                  </div>
                  {/* <span className="relative z-10 bg-background/95 backdrop-blur-sm px-4 text-sm font-medium text-blue-500/80">
                    Navigation
                  </span> */}
                </div>

                <div className="flex flex-col gap-2">
                  {routeList.map(({ href, label }, index) => (
                    <Button
                      key={href}
                      onClick={() => setIsOpen(false)}
                      asChild
                      variant="ghost"
                      className="justify-start overflow-hidden group relative py-5 h-auto"
                      style={{ animationDelay: `${index * 80}ms` }}
                    >
                      <Link href={href} className="flex items-center w-full">
                        <span className="w-2 h-2 rounded-full bg-blue-400/50 mr-3 group-hover:scale-125 transition-transform"></span>
                        <div className="flex flex-col">
                          <span className="relative z-10 font-medium">
                            {label}
                          </span>
                          <span className="text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity -mt-0.5">
                            Explore {label.toLowerCase()}
                          </span>
                        </div>
                        <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-gradient-to-r from-blue-600 to-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                        <span className="absolute inset-0 bg-blue-500/5 -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                      </Link>
                    </Button>
                  ))}
                </div>
              </div>

              {/* <div className="grow"></div> */}

              <div className="">
                <div className="relative flex items-center justify-center">
                </div>

                <div className="bg-blue-50/40 dark:bg-blue-900/30 backdrop-blur-xl rounded-xl p-4 border border-blue-300/20 dark:border-blue-500/20 shadow-inner">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
                      Theme Mode
                    </span>
                    <ToggleTheme />
                  </div>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <NavigationMenu className="hidden lg:block mx-auto">
        <NavigationMenuList className="gap-1">
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-transparent hover:bg-background/50 text-base group transition-colors">
              <span className="mr-1">✨</span> Features
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid w-[650px] grid-cols-2 gap-6 p-6 rounded-2xl bg-background/80 backdrop-blur-xl border border-blue-300/30 shadow-lg">
                <div className="overflow-hidden rounded-xl">
                  <Image
                    src="/LearniverseLogo.png"
                    alt="Learniverse"
                    className="h-full w-full rounded-xl object-cover hover:scale-105 transition-all duration-500"
                    width={600}
                    height={600}
                  />
                </div>
                <ul className="flex flex-col gap-3">
                  {featureList.map(({ title, description }, index) => (
                    <li
                      key={title}
                      className="rounded-xl p-4 text-sm hover:bg-background/60 group relative overflow-hidden border border-transparent hover:border-blue-300/30 hover:shadow-sm transition-all duration-300"
                      style={{ transitionDelay: `${index * 50}ms` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <p className="mb-1 text-center font-bold leading-none text-foreground group-hover:text-blue-500 transition-colors">
                        {title}
                      </p>
                      <p className="line-clamp-2 text-muted-foreground">
                        {description}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <div className="flex items-center space-x-1">
              {routeList.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="px-3 py-2 text-base hover:text-blue-500 transition-colors duration-200 relative group"
                >
                  {label}
                </Link>
              ))}
            </div>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div className="hidden lg:flex items-center gap-2">
        <ToggleTheme />

        <Button
          asChild
          size="sm"
          variant="outline"
          className="border-blue-300/30 hover:border-blue-500 backdrop-blur-md bg-background/30 hover:bg-background/50 transition-all duration-300 hover:scale-105 group"
        >
          <Link
            aria-label="View on GitHub"
            href="https://github.com/learniverse-alpha"
            target="_blank"
            className="flex items-center gap-2"
          >
            <Github className="size-4 group-hover:rotate-12 transition-transform duration-300" />
            <span className="hidden sm:inline-block">GitHub</span>
          </Link>
        </Button>
      </div>
    </header>
  );
};
