import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Code, Rocket, Users, Award } from "lucide-react"
import Link from "next/link"

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Internship", href: "#internship" },
  { label: "Process", href: "#process" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
]

const programs = [
  { label: "Frontend Development", href: "#frontend" },
  { label: "Backend Development", href: "#backend" },
  { label: "AI & Machine Learning", href: "#ai-ml" },
  { label: "UI/UX Design", href: "#design" },
  { label: "Data Science", href: "#data" },
  { label: "Cybersecurity", href: "#cybersecurity" },
  { label: "Product Management", href: "#product" },
  { label: "Digital Marketing", href: "#marketing" },
  { label: "Multimedia & Animation", href: "#multimedia" },
]

export function Footer() {
  return (
    <footer className="bg-primary-light-blue text-white relative overflow-hidden">
      {/* Tech Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10 py-12 sm:py-16 md:py-20 px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 mb-10">
            
            {/* About */}
            <div>
              <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 flex items-center gap-2">
                <Code className="w-5 h-5 text-blue-300" />
                About DSHub Internship
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-blue-100 leading-relaxed">
                 A structured tech internship program combining real projects, mentor guidance, and hands-on experience to launch your career in technology.
              </p>
            </div>

            {/* Programs */}
            <div>
              <h4 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 flex items-center gap-2">
                <Rocket className="w-5 h-5 text-blue-300" />
                Our 9 Tech Tracks
              </h4>
              <ul className="grid grid-cols-1 gap-2">
                {programs.map((program) => (
                  <li key={program.label}>
                    <Link
                      href={program.href}
                      className="text-xs sm:text-sm md:text-base text-blue-100 hover:text-white transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 rounded-full bg-blue-300 group-hover:bg-white transition-colors" />
                      {program.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links & Contact Combined */}
            <div className="space-y-6">
              {/* Quick Links */}
              <div>
                <h4 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">Quick Links</h4>
                <ul className="grid grid-cols-1 gap-2">
                  {quickLinks.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-xs sm:text-sm md:text-base text-blue-100 hover:text-white transition-colors flex items-center gap-2 group"
                      >
                        <span className="w-1 h-1 rounded-full bg-blue-300 group-hover:bg-white transition-colors" />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-blue-300" />
                  Get In Touch
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 group">
                    <Phone size={18} className="flex-shrink-0 text-blue-300 mt-0.5 group-hover:text-white transition-colors" />
                    <a 
                      href="tel:+2348140556905" 
                      className="text-xs sm:text-sm md:text-base text-blue-100 hover:text-white transition-colors"
                    >
                      +234 8140 556 905
                    </a>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin size={18} className="flex-shrink-0 text-blue-300 mt-0.5" />
                    <span className="text-xs sm:text-sm md:text-base text-blue-100">
                      Kaduna, Nigeria
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-blue-800/50 pt-8">
            <div className="text-center">
              <div className="text-blue-200 text-xs sm:text-sm mb-1">
                &copy; {new Date().getFullYear()} DSHub Internship. All rights reserved.
              </div>
              <div className="text-blue-300 text-xs">
                Building the next generation of tech professionals
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}