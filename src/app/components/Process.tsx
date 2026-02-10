import { Phone, Search, Wrench, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: Phone,
    number: '01',
    title: 'Contact Us',
    description: 'Call, email, or visit our store to describe your device issue and get a free quote',
  },
  {
    icon: Search,
    number: '02',
    title: 'Diagnosis',
    description: 'Our technicians perform a thorough diagnostic to identify all issues',
  },
  {
    icon: Wrench,
    number: '03',
    title: 'Repair',
    description: 'We repair your device using genuine parts and professional techniques',
  },
  {
    icon: CheckCircle,
    number: '04',
    title: 'Quality Check',
    description: 'Every device undergoes rigorous testing before being returned to you',
  },
];

export function Process() {
  return (
    <section id="process" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Repair Process
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Simple, transparent, and efficient - from diagnosis to delivery
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                {/* Connector Line (desktop only) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-blue-200 to-transparent -translate-x-1/2"></div>
                )}

                <div className="relative bg-gradient-to-br from-blue-50 to-indigo-50 p-6 sm:p-8 rounded-2xl text-center">
                  {/* Step Number */}
                  <div className="absolute top-4 right-4 text-5xl font-bold text-blue-600/10">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="relative w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Start Your Repair Today
          </a>
        </div>
      </div>
    </section>
  );
}
