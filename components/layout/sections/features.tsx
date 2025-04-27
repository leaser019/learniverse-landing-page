import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: "Zap",
    title: "Lightning-Fast Learning",
    description:
      "Master AI and coding concepts in under 10 minutes per video — zero fluff, pure brain fuel for the coding elite.",
  },
  {
    icon: "Brain",
    title: "Mind-Reading AI",
    description:
      "Get personalized learning paths that evolve with your skills, like having a genius best friend who actually remembers what you like.",
  },
  {
    icon: "Code",
    title: "Hands-On Code Playground",
    description:
      "Apply what you learn instantly with interactive coding challenges that give real-time feedback faster than your crush replies to texts.",
  },
  {
    icon: "HeartHandshake",
    title: "Real Human Mentorship",
    description:
      "Submit your projects and get feedback from actual developers who've survived the trenches, not some AI pretending to understand your struggles.",
  },
  {
    icon: "Medal",
    title: "Flex-Worthy Certifications",
    description:
      "Earn industry-recognized credentials that make recruiters slide into your LinkedIn DMs without needing to beg for attention.",
  },
  {
    icon: "Sparkles",
    title: "Career Supercharger",
    description:
      "Build a portfolio so impressive that companies will fight over you like the last PS5 on Black Friday — no CS degree required.",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="container py-24 sm:py-32">
      <h2 className="text-lg text-blue-500 text-center mb-2 tracking-wider">
        Features
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
        What Makes Us Different
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem
        fugiat, odit similique quasi sint reiciendis quidem iure veritatis optio
        facere tenetur.
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {featureList.map(({ icon, title, description }) => (
          <div key={title} className="group">
            <Card className="h-full bg-white/80 dark:bg-black/80 backdrop-blur-sm border border-blue-300/30 dark:border-blue-400/30 rounded-xl transition-all duration-300 hover:shadow-[0_8px_30px_rgb(59,130,246,0.15)] group-hover:-translate-y-1 overflow-hidden">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-tr from-blue-500/5 via-transparent to-blue-400/20 transition-all duration-500"></div>
              <CardHeader className="flex justify-center items-center">
                <div className="bg-gradient-to-br from-blue-500/20 to-blue-400/10 dark:from-blue-500/10 dark:to-transparent p-3 rounded-full ring-8 ring-blue-400/5 dark:ring-blue-500/5 mb-4 transition-all duration-300 group-hover:rotate-6 group-hover:scale-110">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={24}
                    color="blue"
                    className="text-blue-500 transition-all duration-300 group-hover:text-blue-400"
                  />
                </div>

                <CardTitle className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400 transition-all duration-300 group-hover:translate-x-1 py-2">
                  {title}
                </CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground text-center relative z-10 transform transition-all duration-500 translate-y-0 opacity-100 group-hover:opacity-90">
                {description}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};