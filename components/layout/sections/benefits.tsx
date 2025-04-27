"use client";

import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface BenefitsProps {
  icon: string;
  title: string;
  description: string;
}

const benefitList: BenefitsProps[] = [
  {
    icon: "Rocket",
    title: "Accelerated Learning",
    description:
      "Master AI and coding skills 10x faster through real-world projects and hands-on practice.",
  },
  {
    icon: "Brain",
    title: "Critical Thinking Skills",
    description:
      "Develop strong problem-solving skills that top tech companies demand.",
  },
  {
    icon: "GraduationCap",
    title: "Career-Ready Portfolio",
    description:
      "Build real-world projects that shine brighter than any resume claim.",
  },
  {
    icon: "Users",
    title: "Community & Mentorship",
    description:
      "Join a network where feedback flies faster than StackOverflow answers.",
  },
];

export const BenefitsSection = () => {
  return (
    <section id="benefits" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-2 place-items-center lg:gap-24">
        <div>
          <h2 className="text-lg  text-blue-500 mb-2 tracking-wider">Benefits</h2>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Learning with Us Is Different
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Our approach focuses on real-world practice, deep understanding, and
            genuine career acceleration — not just textbook theories.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 w-full">
          {benefitList.map(({ icon, title, description }, index) => (
            <a
              key={index}
              href="#"
              className="group relative block h-64 sm:h-80 lg:h-96 overflow-hidden perspective-1000"
            >
              <span className="absolute inset-0 border-2 border-dashed border-blue-300/30 dark:border-blue-400/20 rounded-xl transition-all duration-700 group-hover:border-blue-400/60 group-hover:scale-105 group-hover:opacity-70"></span>

              <div className="relative flex h-full transform items-end border-2 border-blue-400/40 dark:border-blue-400/30 bg-white/80 dark:bg-black/80 backdrop-blur-sm transition-all duration-700 ease-in-out rounded-xl group-hover:-translate-x-2 group-hover:-translate-y-2 group-hover:shadow-[5px_5px_0_0] group-hover:shadow-blue-500/70 overflow-hidden">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-tr from-blue-500/5 via-transparent to-blue-400/20 transition-all duration-700"></div>

                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-[radial-gradient(circle_at_1px_1px,var(--blue-400)_1px,transparent_0)] bg-[length:20px_20px] transition-opacity duration-700"></div>

                <div className="p-4 !pt-0 transition-all duration-500 group-hover:absolute group-hover:opacity-0 group-hover:-translate-y-12 sm:p-6 lg:p-8 flex flex-col items-start relative z-10">
                  <div className="transition-all duration-700 transform bg-gradient-to-br from-blue-500/10 to-blue-400/5 dark:from-blue-500/5 dark:to-transparent rounded-full p-3 mt-6 group-hover:rotate-12 group-hover:scale-125 group-hover:bg-gradient-to-r group-hover:from-blue-500/20 group-hover:to-blue-400/10 dark:group-hover:from-blue-500/20 dark:group-hover:to-transparent shadow-inner">
                    <Icon
                      name={icon as keyof typeof icons}
                      color="blue"
                      size={40}
                      className="text-blue-500 transition-all duration-700 group-hover:text-blue-400 group-hover:scale-110"
                    />
                  </div>
                  <h2 className="mt-4 text-xl font-medium sm:text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
                    {title}
                  </h2>
                </div>

                <div className="absolute p-4 opacity-0 transition-all duration-700 transform translate-y-8 group-hover:translate-y-0 group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8 relative z-10">
                  <h3 className="mt-4 text-xl font-medium sm:text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400 transition-all duration-700 group-hover:translate-x-1">
                    {title}
                  </h3>

                  <p className="mt-4 text-sm sm:text-base text-muted-foreground transform transition-all duration-500 translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                    {description}
                  </p>

                  <div className="mt-8 overflow-hidden relative">
                    <p className="font-medium text-blue-500 transition-all duration-500 group-hover:translate-x-1 inline-flex items-center gap-1 relative">
                      <span className="relative z-10 group-hover:font-bold transition-all duration-500">
                        Learn more
                      </span>
                      <span className="transform transition-all duration-700 group-hover:translate-x-1.5 relative z-10">
                        →
                      </span>
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-400 transition-all duration-700 ease-out group-hover:w-full"></span>
                    </p>
                  </div>
                </div>

                <div className="absolute top-0 right-0 w-12 h-12 opacity-0 group-hover:opacity-100 transition-all duration-700 bg-gradient-to-bl from-blue-500/40 to-transparent transform origin-top-right -rotate-45 scale-150 translate-x-4 -translate-y-4"></div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
