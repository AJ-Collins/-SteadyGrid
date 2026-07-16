import ShopByProjectCard from '../projects/ShopByProjectCard';

export default function ShopByProject() {
  const projects = [
    {
      id: 'homesteading',
      title: 'Homesteading',
      description: 'Empower your off-grid lifestyle with reliable solar power systems for homesteads, built for energy independence. Browse these popular products for homesteading projects.',
      image: 'https://cdn11.bigcommerce.com/s-bi8c0htqsn/images/stencil/original/image-manager/homesteading-4-2026.png?t=1777412401',
      href: '/shop/homesteading',
    },
    {
      id: 'mounting-solutions',
      title: 'Mounting Solutions',
      description: 'Secure your solar investment with durable, high-quality solar panel mounting solutions built for every installation type and solar project. Take a look at these reliable products for solar mounting.',
      image: 'https://checkout.bluettipower.com/cdn/shop/files/7-PC_2x_00cd6597-414a-4dd6-a641-2d717578e4ee.png?v=1774922316&width=800',
      href: '/shop/mounting',
    },
    {
      id: 'ev-charging',
      title: 'EV Charging',
      description: 'Power your electric vehicle with efficient solar EV charging stations, designed for convenience at home or in remote locations. View these popular products for EV charging projects.',
      image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=800&q=80',
      href: '/shop/ev-charging',
    },
    {
      id: 'survival-preparedness',
      title: 'Survival Preparedness',
      description: 'Be ready for anything with solar-powered preparedness kits designed to keep your important devices and systems running. Discover these popular solar products to stay prepared.',
      image: 'https://checkout.bluettipower.com/cdn/shop/files/What_Can_I_Run_With_A_2_000-Watt_Generator.webp?v=1743409092&width=1200',
      href: '/shop/survival',
    },
    {
      id: 'mobile-adventures',
      title: 'Mobile Adventures',
      description: 'Ideal for solar for RVs, vans, and tiny homes—take solar power on the road and keep your space energized anywhere your journey leads. Explore these popular products for mobile solar projects.',
      image: 'https://checkout.bluettipower.com/cdn/shop/files/lQDPKGWqUUkw-X3NCHDNDwCw7e5zqwZZrrUIuAa-ga2IAg_3840_2160_1x_f70730dd-c5cf-4f2c-a680-b70cc4c65d36.png?v=1772592026&width=1200',
      href: '/shop/mobile',
    },
    {
      id: 'battery-backup',
      title: 'Battery Backup',
      description: 'Ensure peace of mind during outages with backup systems built to keep your essentials powered without interruption. Check out these popular products that will keep you prepared.',
      image: 'https://checkout.bluettipower.com/cdn/shop/files/AC300_B300K_home_backup_use_pc_76ee7e83-ef3f-4a5c-891b-23c81cdf1525.jpg?v=1743418693&width=1200',
      href: '/shop/backup',
    },
  ];

  return (
    <section className="w-full bg-white py-8 sm:py-12 px-4 sm:px-6 lg:px-8 border-b border-neutral-100">
      <div className="max-w-[1400px] mx-auto">

        {/* Section Header */}
        <div className="flex flex-col mb-8 sm:mb-10">
          <h2 className="text-xl sm:text-2xl font-black text-[#0B1525] tracking-tight uppercase flex items-center gap-2.5">
            <span className="w-1.5 h-6 sm:h-7 bg-[#22a055] block rounded-sm shrink-0"></span>
            Shop By Project
          </h2>
          <p className="text-neutral-500 text-[11px] sm:text-xs font-semibold tracking-wide uppercase mt-1 pl-4">
            Find the perfect solar setup tailored to your specific application
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 sm:gap-y-12">
          {projects.map(project => (
            <ShopByProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
