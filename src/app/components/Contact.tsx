import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to repair your Apple device? Contact us today for a free quote
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">

          {/* Contact Info & Image */}
          <div className="space-y-6">

            {/* Contact Details */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Visit Our Store
              </h3>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <div>
                  <div className="font-medium text-gray-900 mb-1">Address</div>
                  <div className="text-gray-600">
                    Jl. Batu Bolong<br />
                    Canggu, Bali 80361
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <div>
                  <div className="font-medium text-gray-900 mb-1">Phone</div>
                  <div className="text-gray-600"><a href="https://wa.me/6282227565452" target="_blank" rel="noopener noreferrer">+62 822-2756-5452</a></div>
                </div>
              </div>

              {/* <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <div>
                  <div className="font-medium text-gray-900 mb-1">Email</div>
                  <div className="text-gray-600">info@irepair.com</div>
                </div>
              </div> */}

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <div>
                  <div className="font-medium text-gray-900 mb-1">Hours</div>
                  <div className="text-gray-600">
                    Mon - Fri: 9:00 AM - 7:00 PM<br />
                    Sat - Sun: 10:00 AM - 5:00 PM
                  </div>
                </div>
              </div>
              {/* Social buttons */}
              <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:gap-3 gap-3">
                <a
                  href="https://wa.me/6282227565452"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-green-500 text-white font-medium hover:bg-green-600 transition-colors w-full sm:w-auto"
                  aria-label="WhatsApp"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M20.52 3.48A11.87 11.87 0 0012 .5C6.21.5 1.5 5.21 1.5 11c0 1.94.5 3.76 1.44 5.36L.5 23.5l6.9-2.02A11.5 11.5 0 0012 22c5.79 0 10.5-4.71 10.5-11 0-3-1.22-5.8-3.98-7.52z" fill="#fff"/>
                    <path d="M17.53 14.47c-.3-.15-1.78-.88-2.06-.98-.28-.1-.48-.15-.69.15-.2.3-.78.98-.96 1.18-.18.2-.36.22-.66.07-.3-.15-1.27-.47-2.42-1.49-.9-.8-1.5-1.78-1.67-2.08-.18-.3-.02-.46.13-.61.13-.13.3-.36.45-.54.15-.18.2-.3.3-.5.1-.2 0-.38-.05-.53-.05-.15-.69-1.67-.95-2.28-.25-.6-.5-.52-.69-.53l-.59-.01c-.2 0-.52.07-.8.38-.28.3-1.07 1.04-1.07 2.54 0 1.5 1.1 2.96 1.25 3.17.15.2 2.16 3.5 5.24 4.91 3.08 1.4 3.08.93 3.64.87.56-.07 1.78-.72 2.03-1.42.25-.7.25-1.3.18-1.42-.07-.12-.26-.2-.56-.35z" fill="#25D366"/>
                  </svg>
                  WhatsApp
                </a>

                <a
                  href="https://t.me/irepair_canggu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-blue-500 text-white font-medium hover:bg-blue-600 transition-colors w-full sm:w-auto"
                  aria-label="Telegram"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M21.99 3.5L2.5 11.29l4.2 1.59 1.56 4.62s.26 1.04 1.3 1.15c1.04.1 1.88-.75 1.88-.75l3.72-2.73 4.83-6.66-1.1-.87-3.9 3.02-2.1-2.72 6.6-4.11z" fill="#fff"/>
                    <path d="M21.99 3.5L2.5 11.29 7.2 12.88 9 17.5s.26 1.04 1.3 1.15c1.04.1 1.88-.75 1.88-.75l3.72-2.73 4.83-6.66-1.1-.87z" fill="#0088cc"/>
                  </svg>
                  Telegram
                </a>
              </div>
            </div>
          </div>

          {/* Maps */}
          <div className="space-y-6"> 
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Store Location
              </h3>
              <div className="w-full h-64 sm:h-80 rounded-lg overflow-hidden shadow-inner">
                <iframe
                  title="Store Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.467438413526!2d115.13856097588224!3d-8.64701418795013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd239a2e76b54f1%3A0x12f004b707ad1a14!2siRepair%20Canggu!5e0!3m2!1sen!2sid!4v1770573319483!5m2!1sen!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
