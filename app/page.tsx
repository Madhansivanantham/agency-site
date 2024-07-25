import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { MountainIcon, SearchIcon, MegaphoneIcon, BarChartIcon,  LinkedinIcon, FacebookIcon, InstagramIcon, TwitterIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <div className="flex flex-col min-h-[100dvh]">
      <header className="flex items-center justify-between px-4 lg:px-6 h-16 bg-background border-b">
        <Link href="#" className="flex items-center gap-2">
          <MountainIcon className="h-6 w-6" />
          <span className="text-lg font-semibold">Acme Digital</span>
        </Link>
        <nav className="hidden lg:flex items-center gap-6">
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
            Home
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
            Services
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
            About
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
            Testimonials
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
            Contact
          </Link>
        </nav>
        <Button>Get Started</Button>
      </header>
      <main className="flex-1">
        <section className="bg-gradient-to-r from-primary to-primary-foreground py-20 md:py-32">
          <div className="container px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground">Unlock Your Digital Potential</h1>
              <p className="text-lg md:text-xl text-primary-foreground">
                Discover our comprehensive digital marketing solutions to drive your business forward.
              </p>
              <Button variant="secondary">Learn More</Button>
            </div>
            <Image src="/hero.jpeg" width="500" height="400" alt="Hero" className="rounded-xl shadow-lg" />
          </div>
        </section>
        <section className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-2">
                <SearchIcon className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-semibold">Search Engine Optimization</h3>
                <p className="text-muted-foreground">
                  Optimize your website to rank higher in search engine results and drive more organic traffic.
                </p>
              </div>
              <div className="space-y-2">
                <MegaphoneIcon className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-semibold">Social Media Marketing</h3>
                <p className="text-muted-foreground">
                  Leverage the power of social media to engage with your audience and build brand awareness.
                </p>
              </div>
              <div className="space-y-2">
                <BarChartIcon className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-semibold">Analytics and Reporting</h3>
                <p className="text-muted-foreground">
                  Gain valuable insights into your marketing campaigns and make data-driven decisions.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-muted py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold">What Our Clients Say</h2>
                <p className="text-muted-foreground">
                  Hear from our satisfied clients about their experience working with us.
                </p>
                <div className="space-y-4">
                  <div className="bg-background p-4 rounded-lg shadow-sm">
                    <p className="text-muted-foreground">
                      "Acme Digital has been a game-changer for our business. Their expertise in digital marketing has
                      helped us reach new heights."
                    </p>
                    <div className="flex items-center gap-2 mt-4">
                      <Avatar>
                        <AvatarImage src="/placeholder-user.jpg" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-semibold">John Doe</h4>
                        <p className="text-sm text-muted-foreground">CEO, Acme Inc.</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-background p-4 rounded-lg shadow-sm">
                    <p className="text-muted-foreground">
                      "The team at Acme Digital is truly exceptional. They've helped us achieve our marketing goals and
                      exceed our expectations."
                    </p>
                    <div className="flex items-center gap-2 mt-4">
                      <Avatar>
                        <AvatarImage src="/placeholder-user.jpg" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-semibold">Jane Smith</h4>
                        <p className="text-sm text-muted-foreground">CMO, Acme Corp.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold">Stay Up-to-Date</h2>
                <p className="text-muted-foreground">
                  Subscribe to our newsletter to receive the latest news and updates.
                </p>
                <form className="flex gap-2">
                  <Input type="email" placeholder="Enter your email" className="flex-1" />
                  <Button type="submit">Subscribe</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-muted py-6 border-t">
        <div className="container px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <MountainIcon className="h-6 w-6" />
            <span className="text-sm font-medium">© 2024 Acme Digital</span>
          </div>
          <nav className="flex items-center gap-4">
            <Link href="#" className="text-sm hover:underline underline-offset-4">
              Privacy
            </Link>
            <Link href="#" className="text-sm hover:underline underline-offset-4">
              Terms
            </Link>
            <Link href="#" className="text-sm hover:underline underline-offset-4">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <TwitterIcon className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <FacebookIcon className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <InstagramIcon className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <LinkedinIcon className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </footer>
    </div>

    </>
  );
}
