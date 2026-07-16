import { Phone, Truck, Sun } from 'lucide-react';

export default function TrustBadges() {
  const badges = [
    {
      icon: <Phone className="w-8 h-8 text-neutral-700 mb-4" strokeWidth={1.5} />,
      title: 'On-Time Solar Support',
      description: 'Talk to real solar experts based in the U.S. whenever you need assistance.',
      buttonText: 'Call Now',
    },
    {
      icon: <Truck className="w-9 h-9 text-neutral-700 mb-4" strokeWidth={1.5} />,
      title: 'FREE SHIPPING OFFERS',
      description: 'Free shipping on qualifying orders — no surprises at checkout.',
      buttonText: 'Shop Now',
    },
    {
      icon: <Sun className="w-9 h-9 text-neutral-700 mb-4" strokeWidth={1.5} />,
      title: 'Custom Design Services',
      description: 'Get a custom system design built by solar professionals at no cost.',
      buttonText: 'Design Now',
    },
  ];

  return (
    <section className="w-full bg-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-b border-neutral-100">
      <div className="max-w-[1400px] mx-auto flex flex-col items-center">

        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-[28px] font-bold text-[#0B1525] mb-3 tracking-tight">
            The SteadyGrid Difference
          </h2>
          <p className="text-[14px] sm:text-[15px] text-neutral-600 max-w-2xl mx-auto">
            Our team is committed to providing you with solar services from start to finish.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-[1100px]">
          {badges.map((badge, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center px-6 py-10 sm:px-10 sm:py-12 bg-[#f8f9fa] rounded-2xl"
            >
              {badge.icon}
              <h3 className="text-lg sm:text-[19px] font-bold text-[#0B1525] mb-3 whitespace-pre-line leading-snug">
                {badge.title}
              </h3>
              <p className="text-[13px] sm:text-[14px] text-neutral-600 leading-relaxed mb-8 flex-1 px-2">
                {badge.description}
              </p>
              <button className="bg-[#22a055] hover:bg-[#187a3e] text-white font-bold text-[13px] px-8 py-2.5 rounded-md shadow-sm transition-colors mt-auto">
                {badge.buttonText}
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
