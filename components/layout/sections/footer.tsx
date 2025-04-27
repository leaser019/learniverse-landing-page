import GithubIcon from "@/components/icons/github-icon";
import InstagramIcon from "@/components/icons/instagram-icon";
import XIcon from '@/components/icons/x-icon';
import { Separator } from "@/components/ui/separator";
import {
  BookOpen,
} from "lucide-react";
import Link from "next/link";

export const FooterSection = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="container py-24 sm:py-32">
      <div className="p-10 bg-card border border-secondary rounded-2xl shadow-lg">
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
          <div className="col-span-full xl:col-span-2">
            <Link href="/" className="flex font-bold items-center">
              
              <h3 className="text-blue-500 text-2xl ">Learniverse</h3>
            </Link>
            <p className="mt-4 text-sm opacity-70">
              Explore the unlimited learning universe with our advanced online
              education platform.
            </p>
            <div className="flex mt-4 space-x-3">
              <Link
                href="https://github.com/learniverse-alpha"
                className="p-2 rounded-full bg-secondary/50 hover:bg-secondary transition-all"
              >
                <GithubIcon  />
              </Link>
              <Link
                href="#"
                className="p-2 rounded-full bg-secondary/50 hover:bg-secondary transition-all"
              >
                <XIcon  />
              </Link>
              <Link
                href="#"
                className="p-2 rounded-full bg-secondary/50 hover:bg-secondary transition-all"
              >
                <InstagramIcon />
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-lg">Products</h3>
            <div>
              <Link
                href="/features"
                className="opacity-60 hover:opacity-100 transition-opacity"
              >
                Features
              </Link>
            </div>
            <div>
              <Link
                href="/pricing"
                className="opacity-60 hover:opacity-100 transition-opacity"
              >
                Pricing
              </Link>
            </div>
            <div>
              <Link
                href="/roadmap"
                className="opacity-60 hover:opacity-100 transition-opacity"
              >
                Roadmap
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-lg">Platforms</h3>
            <div>
              <Link
                href="/platforms/ios"
                className="opacity-60 hover:opacity-100 transition-opacity"
              >
                iOS
              </Link>
            </div>
            <div>
              <Link
                href="/platforms/android"
                className="opacity-60 hover:opacity-100 transition-opacity"
              >
                Android
              </Link>
            </div>
            <div>
              <Link
                href="/platforms/web"
                className="opacity-60 hover:opacity-100 transition-opacity"
              >
                Web
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-lg">Support</h3>
            <div>
              <Link
                href="/help/contact"
                className="opacity-60 hover:opacity-100 transition-opacity"
              >
                Contact Us
              </Link>
            </div>
            <div>
              <Link
                href="/help/faq"
                className="opacity-60 hover:opacity-100 transition-opacity"
              >
                FAQ
              </Link>
            </div>
            <div>
              <Link
                href="/help/documentation"
                className="opacity-60 hover:opacity-100 transition-opacity"
              >
                Documentation
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-lg">Legal</h3>
            <div>
              <Link
                href="/legal/terms"
                className="opacity-60 hover:opacity-100 transition-opacity"
              >
                Terms
              </Link>
            </div>
            <div>
              <Link
                href="/legal/privacy"
                className="opacity-60 hover:opacity-100 transition-opacity"
              >
                Privacy
              </Link>
            </div>
            <div>
              <Link
                href="/legal/cookies"
                className="opacity-60 hover:opacity-100 transition-opacity"
              >
                Cookies
              </Link>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm opacity-70">
            &copy; {currentYear} Learniverse. All rights reserved.
          </p>

          <div className="flex mt-4 md:mt-0">
            <Link
              target="_blank"
              href="https://github.com/learniverse-alpha"
              className="text-sm opacity-70 hover:opacity-100 transition-all hover:text-primary mx-2"
            >
              GitHub
            </Link>
            <Link
              href="/sitemap"
              className="text-sm opacity-70 hover:opacity-100 transition-all hover:text-primary mx-2"
            >
              Sitemap
            </Link>
            <Link
              href="#"
              className="text-sm opacity-70 hover:opacity-100 transition-all hover:text-primary mx-2"
            >
              English
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
