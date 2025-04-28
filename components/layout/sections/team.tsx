import GithubIcon from "@/components/icons/github-icon";
import LinkedInIcon from "@/components/icons/linkedin-icon";
import XIcon from "@/components/icons/x-icon";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const socialIconsMap = {
  LinkedIn: <LinkedInIcon />,
  Github: <GithubIcon />,
  X: <XIcon />,
};

interface SocialNetworkProps {
  name: string;
  url: string;
}

interface TeamProps {
  imageUrl: string;
  firstName: string;
  lastName: string;
  positions: string[];
  socialNetworks: SocialNetworkProps[];
}

export const FancyCard = ({ imageUrl, title, description, link }) => {
  return (
    <Link
      href={link}
      className="relative block overflow-hidden rounded-2xl p-1 group perspective"
    >
      {/* Gradient blurred border */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 opacity-75 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>

      {/* Inner card */}
      <div className="relative bg-white dark:bg-gray-900 rounded-xl p-6 transform transition-transform duration-500 group-hover:scale-105 shadow-2xl">
        <div className="overflow-hidden rounded-lg mb-4">
          <Image
            src={imageUrl}
            alt={title}
            width={400}
            height={250}
            className="object-cover w-full h-56 rounded-lg transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {description}
        </p>
        <span className="inline-block mt-auto text-blue-600 dark:text-blue-400 font-medium transition-transform duration-300 group-hover:translate-x-1">
          Learn More →
        </span>
      </div>
    </Link>
  );
};


export const TeamSection = () => {
  const teamList: TeamProps[] = [
    {
      imageUrl: "/vmkhang.jpg",
      firstName: "Vo",
      lastName: "Minh Khang",
      positions: ["Full-stack Developer", "Creator Of This Website"],
      socialNetworks: [
        { name: "LinkedIn", url: "https://www.linkedin.com/in/vominhkhang/" },
        { name: "Github", url: "https://github.com/leaser019" },
        { name: "X", url: "https://x.com/leasermkhang" },
      ],
    },
  ];

  return (
    <section id="team" className="container lg:w-3/4 py-24 sm:py-32">
      <div className="text-center mb-12">
        <h2 className="text-sm text-blue-600 tracking-widest uppercase mb-2">
          Team
        </h2>
        <h2 className="text-4xl font-extrabold">
          LEARNIVERSE
          <span className="text-blue-500"> TEAM</span>
        </h2>
      </div>
      {/* sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 */}
      <div className="grid grid-cols-3 gap-8">
        <div></div>
        {teamList.map(
          ({ imageUrl, firstName, lastName, positions, socialNetworks }) => (
            <Card
              key={`${firstName}-${lastName}`}
              className="group hover:shadow-xl hover:scale-105 transition-transform duration-300 bg-muted/50 dark:bg-card rounded-lg overflow-hidden flex flex-col"
            >
              <CardHeader className="p-0">
                <div className="overflow-hidden">
                  <Image
                    src={imageUrl}
                    alt={`${firstName} ${lastName}`}
                    width={300}
                    height={300}
                    className="w-full aspect-square object-cover transition-all duration-300 ease-in-out group-hover:scale-105"
                  />
                </div>
                <CardTitle className="px-6 py-4 text-xl font-semibold">
                  {firstName}
                  <span className="text-blue-500 ml-1">{lastName}</span>
                </CardTitle>
              </CardHeader>

              <CardContent className="flex-1 px-6 pb-4 text-sm text-muted-foreground">
                {positions.join(", ")}
              </CardContent>

              <CardFooter className="px-6 py-4 flex space-x-4">
                {socialNetworks.map(({ name, url }) => (
                  <Link
                    key={name}
                    href={url}
                    target="_blank"
                    className="hover:opacity-80 transition-opacity duration-200"
                  >
                    {socialIconsMap[name] || null}
                  </Link>
                ))}
              </CardFooter>
            </Card>
          )
        )}
        <div></div>
      </div>
    </section>
  );
};
