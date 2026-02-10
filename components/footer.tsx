import { Mail, MapPin, Phone } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-primary-dark-blue text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-4">DSHub Internship</h3>
            <p className="text-blue-100 leading-relaxed">
              Empowering the next generation of tech professionals through hands-on internship experiences and mentorship.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Mail size={20} className="flex-shrink-0 mt-1" />
                <span className="text-blue-100">Email: contact@dshub.com</span>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={20} className="flex-shrink-0 mt-1" />
                <span className="text-blue-100">Phone: +1 (555) 123-4567</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={20} className="flex-shrink-0 mt-1" />
                <span className="text-blue-100">Remote - Serving Globally</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="#home" className="text-blue-100 hover:text-white transition-colors">
                Home
              </a>
              <br />
              <a href="#internship" className="text-blue-100 hover:text-white transition-colors">
                Internship
              </a>
              <br />
              <a href="#process" className="text-blue-100 hover:text-white transition-colors">
                Process
              </a>
              <br />
              <a href="#testimonials" className="text-blue-100 hover:text-white transition-colors">
                Testimonials
              </a>
              <br />
              <a href="#faq" className="text-blue-100 hover:text-white transition-colors">
                FAQ
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-blue-800 pt-8">
          <div className="text-center text-blue-100">
            <p>© 2024 DSHub Internship. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
