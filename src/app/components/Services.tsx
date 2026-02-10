import { ImageWithFallback } from './figma/ImageWithFallback';
import { Smartphone, Tablet, Laptop, Battery, Wrench, Monitor } from 'lucide-react';

const services = [
  {
    icon: Smartphone,
    title: 'iPhone Repair',
    description: 'Screen replacement, battery service, camera repair, and more',
    image: 'https://images.unsplash.com/photo-1746005718004-1f992c399428?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpUGhvbmUlMjByZXBhaXIlMjB0ZWNobmljaWFufGVufDF8fHx8MTc3MDcwMjE0MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    features: ['Screen Replacement', 'Battery Service', 'Water Damage', 'Port Repair'],
  },
  {
    icon: Tablet,
    title: 'iPad Repair',
    description: 'Display repair, charging issues, speaker problems, and diagnostics',
    image: 'https://images.unsplash.com/photo-1561154464-82e9adf32764?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpUGFkJTIwdGFibGV0JTIwZGV2aWNlfGVufDF8fHx8MTc3MDYzMTI4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    features: ['Glass Digitizer', 'LCD Display', 'Home Button', 'Camera Issues'],
  },
  {
    icon: Laptop,
    title: 'MacBook Repair',
    description: 'Keyboard replacement, SSD upgrade, logic board repair, and optimization',
    image: 'https://images.unsplash.com/photo-1675668409245-955188b96bf6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYWNCb29rJTIwbGFwdG9wJTIwY29tcHV0ZXJ8ZW58MXx8fHwxNzcwNjI2ODQyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    features: ['Keyboard Repair', 'SSD Upgrade', 'Battery Service', 'Logic Board'],
  },
];

const commonRepairs = [
  {
    icon: Monitor,
    title: 'Screen Repair',
    description: 'Cracked or broken displays replaced with quality parts',
  },
  {
    icon: Battery,
    title: 'Battery Replacement',
    description: 'Restore your device\'s battery life to like-new condition',
  },
  {
    icon: Wrench,
    title: 'Hardware Issues',
    description: 'Buttons, ports, speakers, and other hardware repairs',
  },
];

export function Services() {
  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional repair services for all your Apple devices
          </p>
        </div>

        {/* Main Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 flex items-center gap-2">
                    <div className="bg-blue-600 p-2 rounded-lg">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Common Repairs */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {commonRepairs.map((repair, index) => {
            const Icon = repair.icon;
            return (
              <div
                key={index}
                className="flex gap-4 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">{repair.title}</h4>
                  <p className="text-sm text-gray-600">{repair.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
