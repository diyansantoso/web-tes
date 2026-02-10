import { Shield, Clock, Award, DollarSign, Users, Wrench } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Certified Technicians',
    description: 'Our experts are certified and trained to repair all Apple devices with precision',
  },
  {
    icon: Clock,
    title: 'Fast Turnaround',
    description: 'Most repairs completed within 24 hours, with same-day service available',
  },
  {
    icon: Award,
    title: '90-Day Warranty',
    description: 'All repairs backed by our comprehensive 90-day warranty for peace of mind',
  },
  {
    icon: DollarSign,
    title: 'Competitive Pricing',
    description: 'Transparent, fair pricing with no hidden fees or surprise charges',
  },
  {
    icon: Wrench,
    title: 'Genuine Parts',
    description: 'We use only high-quality, genuine parts for lasting repairs',
  },
  {
    icon: Users,
    title: '1000+ Happy Customers',
    description: 'Trusted by thousands of customers with 4.9-star average rating',
  },
];

export function WhyUs() {
  return (
    <section id="why-us" className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Why Choose iRepair?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're committed to providing the best repair experience for your Apple devices
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white p-6 sm:p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-5">
                  <Icon className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">10+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">5000+</div>
            <div className="text-gray-600">Devices Repaired</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">4.9</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">24h</div>
            <div className="text-gray-600">Average Repair Time</div>
          </div>
        </div>
      </div>
    </section>
  );
}
