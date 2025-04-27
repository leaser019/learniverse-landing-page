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
        {/* Contact Info */}
        <div>
          <div className="mb-6">
            <span className="text-sm font-semibold uppercase text-blue-500 tracking-wide">
              Contact
            </span>
            <h2 className="mt-2 text-4xl font-extrabold text-gray-900">
              Let's Talk
            </h2>
          </div>
          <p className="mb-8 text-gray-600 text-justify">
            Got a cool idea? Don’t be shy, hit us up at vomkhang35@gmail.com or ring us at +84 888 032 465! You can also fill out the form right next to this—we’ll get back to you about your project real quick. We’re so ready to chat, love ya tons!
          </p>

          <div className="space-y-6">
            <div className="flex items-start">
              <Building2 className="mt-1 text-blue-500" />
              <div className="ml-4">
                <h4 className="font-semibold text-gray-700">Address</h4>
                <p className="text-gray-600">Ho Chi Minh City, Vietnam</p>
              </div>
            </div>
            <div className="flex items-start">
              <Phone className="mt-1 text-blue-500" />
              <div className="ml-4">
                <h4 className="font-semibold text-gray-700">Call us</h4>
                <p className="text-gray-600">+84 888 032 465</p>
              </div>
            </div>
            <div className="flex items-start">
              <Mail className="mt-1 text-blue-500" />
              <div className="ml-4">
                <h4 className="font-semibold text-gray-700">Email</h4>
                <p className="text-gray-600">vomkhang35@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start">
              <Clock className="mt-1 text-blue-500" />
              <div className="ml-4">
                <h4 className="font-semibold text-gray-700">Office Hours</h4>
                <p className="text-gray-600">Mon - Fri, 8:00 AM - 4:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <Card className="bg-white shadow-lg rounded-lg">
          <CardHeader>
            <h3 className="text-xl font-semibold text-gray-900">
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
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Vo"
                            className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
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
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Khang"
                            className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
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
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="you@example.com"
                          className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
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
                      <FormLabel>Subject</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="border-gray-300 focus:border-blue-500 focus:ring-blue-500">
                            <SelectValue placeholder="Choose subject" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
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
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          rows={5}
                          placeholder="Your message..."
                          className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-md font-bold flex items-center justify-center text-white relative overflow-hidden transition-all duration-300 hover:shadow-lg"
                  style={{
                    background: "linear-gradient(to right, #2563eb, #60a5fa)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background =
                      "linear-gradient(to right, #1d4ed8, #3b82f6)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background =
                      "linear-gradient(to right, #2563eb, #60a5fa)";
                  }}
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
