"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { Building2, Clock, Mail, Phone } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  firstName: z.string().min(2).max(255),
  lastName: z.string().min(2).max(255),
  email: z.string().email(),
  subject: z.string().min(2).max(255),
  message: z.string(),
});

export const ContactSection = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      subject: "Learniverse Landing Page Message",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const { firstName, lastName, email, subject, message } = values;
    const mailToLink = `mailto:vomkhang35@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      `Hello, I am ${firstName} ${lastName}.
Email: ${email}

${message}`
    )}`;
    window.location.href = mailToLink;
  }

  return (
    <section id="contact" className="container mx-auto py-24 sm:py-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <div className="mb-6">
            <span className="text-sm font-semibold uppercase text-blue-500 dark:text-blue-400 tracking-wide">
              Contact
            </span>
            <h2 className="mt-2 text-4xl font-extrabold text-foreground dark:text-slate-100">
              Let&apos;s Talk
            </h2>
          </div>
          <p className="mb-8 text-muted-foreground dark:text-slate-300 text-justify">
            Got a cool idea? Don&apos;t be shy, hit us up at
            vomkhang35@gmail.com or ring us at +84 888 032 465! You can also
            fill out the form right next to this—we&apos;ll get back to you
            about your project real quick. We&apos;re so ready to chat, love ya
            tons!
          </p>

          <div className="space-y-6">
            <div className="flex items-start">
              <Building2 className="mt-1 text-blue-500 dark:text-blue-400" />
              <div className="ml-4">
                <h4 className="font-semibold text-foreground dark:text-slate-200">
                  Address
                </h4>
                <p className="text-muted-foreground dark:text-slate-300">
                  Ho Chi Minh City, Vietnam
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <Phone className="mt-1 text-blue-500 dark:text-blue-400" />
              <div className="ml-4">
                <h4 className="font-semibold text-foreground dark:text-slate-200">
                  Call us
                </h4>
                <p className="text-muted-foreground dark:text-slate-300">
                  +84 888 032 465
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <Mail className="mt-1 text-blue-500 dark:text-blue-400" />
              <div className="ml-4">
                <h4 className="font-semibold text-foreground dark:text-slate-200">
                  Email
                </h4>
                <p className="text-muted-foreground dark:text-slate-300">
                  vomkhang35@gmail.com
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <Clock className="mt-1 text-blue-500 dark:text-blue-400" />
              <div className="ml-4">
                <h4 className="font-semibold text-foreground dark:text-slate-200">
                  Office Hours
                </h4>
                <p className="text-muted-foreground dark:text-slate-300">
                  Mon - Fri, 8:00 AM - 4:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>

        <Card className="bg-card bg-opacity-80 dark:bg-opacity-30 dark:bg-slate-900 shadow-lg border border-muted dark:border-slate-700 rounded-lg">
          <CardHeader>
            <h3 className="text-xl font-semibold text-foreground dark:text-slate-100">
              Send a Message
            </h3>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="dark:text-slate-200">
                          First Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Vo"
                            className="focus-visible:ring-blue-800 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-200"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="dark:text-slate-200">
                          Last Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Khang"
                            className="focus-visible:ring-primary dark:bg-slate-800 dark:border-slate-700 dark:text-slate-200"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="dark:text-slate-200">
                        Email
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="you@example.com"
                          className="focus-visible:ring-primary dark:bg-slate-800 dark:border-slate-700 dark:text-slate-200"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="dark:text-slate-200">
                        Subject
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="focus-visible:ring-primary dark:bg-slate-800 dark:border-slate-700 dark:text-slate-200">
                            <SelectValue placeholder="Choose subject" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="dark:bg-slate-800 dark:border-slate-700">
                          <SelectItem value="Web Development">
                            Web Development
                          </SelectItem>
                          <SelectItem value="Mobile Development">
                            Mobile Development
                          </SelectItem>
                          <SelectItem value="Figma Design">
                            Figma Design
                          </SelectItem>
                          <SelectItem value="REST API">REST API</SelectItem>
                          <SelectItem value="FullStack Project">
                            FullStack Project
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="dark:text-slate-200">
                        Message
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          rows={5}
                          placeholder="Your message..."
                          className="focus-visible:ring-primary resize-none dark:bg-slate-800 dark:border-slate-700 dark:text-slate-200"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-md font-bold flex items-center justify-center bg-blue-500 hover:text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-700 transition-all duration-300 hover:shadow-lg dark:shadow-blue-900/20"
                >
                  <span>Send Message</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-1"
                  >
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                </button>
              </form>
            </Form>
          </CardContent>
          <CardFooter />
        </Card>
      </div>
    </section>
  );
};
