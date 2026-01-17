import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Hero Section */}
      <main className="flex-1 flex items-center px-4 py-8 lg:py-12">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-12 xl:gap-16 lg:items-center ">
            {/* LEFT COLUMN – always stays on left/top */}
            <div className="flex flex-col justify-center items-center text-center space-y-6 lg:space-y-8 w-full lg:w-5/12 xl:w-4/12 flex-shrink-0 lg:text-center lg:items-center ">
              {/* Logo */}
              <div className="relative w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-lg flex-shrink-0">
                <Image
                  src="/images/logo.png"
                  alt="UberBet App Icon"
                  fill
                  className="object-contain rounded-lg"
                  priority
                />
              </div>

              {/* Headline */}
              <div className="space-y-4 w-full max-w-md">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-balance">
                  Challenge yourself and train your willpower with UberBet
                </h1>
              </div>


              {/* Download Buttons – Professional Official Badges */}
<div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-8 w-full max-w-md mx-auto lg:mx-0 lg:justify-start">
  {/* App Store Badge */}
  <a
    href="https://apps.apple.com" // ← replace with your REAL app link
    target="_blank"
    rel="noopener noreferrer"
    className="block transition-transform hover:scale-105 active:scale-95"
  >
    <img
      src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83"
      alt="Download on the App Store"
      className="h-14 w-auto drop-shadow-md"   // ← key change: fixed height + auto width
      loading="lazy"
    />
  </a>

  {/* Google Play Badge */}
  <a
    href="https://play.google.com" // ← replace with your REAL app link
    target="_blank"
    rel="noopener noreferrer"
    className="block transition-transform hover:scale-105 active:scale-95"
  >
    <img
      src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
      alt="Get it on Google Play"
      className="h-14 w-auto drop-shadow-md"   // ← same fixed height
      loading="lazy"
    />
  </a>
</div>
</div>
{/* RIGHT COLUMN – Screenshots – CENTERED GRID */}
    <div className="
      w-full lg:w-7/12 xl:w-8/12
      grid 
      grid-cols-1 
      sm:grid-cols-2 
      lg:grid-cols-3 
      gap-6 md:gap-8 
      justify-items-center          /* ← crucial for centering incomplete rows */
      place-items-center
    ">
      {/* Screenshot 1 */}
      <div className="
        relative 
        w-full max-w-[280px] 
        aspect-[9/19] 
        rounded-2xl 
        overflow-hidden 

        ring-1 ring-black/5
      ">
        <Image
          src="/images/photo-2026-01-17-08-29-43-portrait.png"
          alt="UberBet App Screenshot 1"
          fill
          className="object-cover"
          sizes="(max-width: 640px) 85vw, (max-width: 1024px) 45vw, 280px"
          priority
        />
      </div>

      {/* Screenshot 2 */}
      <div className="
        relative 
        w-full max-w-[280px] 
        aspect-[9/19] 
        rounded-2xl 
        overflow-hidden 

        ring-1 ring-black/5
      ">
        <Image
          src="/images/photo-2026-01-17-08-29-43-portrait.png"
          alt="UberBet App Screenshot 2"
          fill
          className="object-cover"
          sizes="(max-width: 640px) 85vw, (max-width: 1024px) 45vw, 280px"
          priority
        />
      </div>

      {/* Screenshot 3 */}
      <div className="
        relative 
        w-full max-w-[280px] 
        aspect-[9/19] 
        rounded-2xl 
        overflow-hidden 

        ring-1 ring-black/5
      ">
        <Image
          src="/images/photo-2026-01-17-08-29-43-portrait.png"
          alt="UberBet App Screenshot 3"
          fill
          className="object-cover"
          sizes="(max-width: 640px) 85vw, (max-width: 1024px) 45vw, 280px"
          priority
        />
      </div>
    </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border w-full flex-shrink-0">
        <div className="container mx-auto px-4 py-2">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="text-sm text-muted-foreground">© 2026 UberBet. All rights reserved.</div>
            <div className="flex gap-6">
              <Link href="/privacy-policy">
                <Button variant="ghost" size="sm">Privacy Policy</Button>
              </Link>
              <Link href="/terms">
                <Button variant="ghost" size="sm">Terms of Service</Button>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
