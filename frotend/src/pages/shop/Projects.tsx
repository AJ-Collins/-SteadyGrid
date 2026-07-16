import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import PageHeader from '../../components/common/PageHeader';
import ShopByProjectCard from '../../features/projects/ShopByProjectCard';

export default function Projects() {
    const projects = [
        {
        id: 'homesteading',
        title: 'Homesteading',
        description: 'Empower your off-grid lifestyle with reliable solar power systems for homesteads, built for energy independence. Browse these popular products for homesteading projects.',
        image: 'https://cdn11.bigcommerce.com/s-bi8c0htqsn/images/stencil/original/image-manager/homesteading-4-2026.png?t=1777412401',
        href: '/shop/projects/homesteading',
        },
        {
        id: 'mounting-solutions',
        title: 'Mounting Solutions',
        description: 'Secure your solar investment with durable, high-quality solar panel mounting solutions built for every installation type and solar project. Take a look at these reliable products for solar mounting.',
        image: 'https://checkout.bluettipower.com/cdn/shop/files/7-PC_2x_00cd6597-414a-4dd6-a641-2d717578e4ee.png?v=1774922316&width=800',
        href: '/shop/projects/mounting',
        },
        {
        id: 'ev-charging',
        title: 'EV Charging',
        description: 'Power your electric vehicle with efficient solar EV charging stations, designed for convenience at home or in remote locations. View these popular products for EV charging projects.',
        image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=800&q=80',
        href: '/shop/projects/ev-charging',
        },
        {
        id: 'survival-preparedness',
        title: 'Survival Preparedness',
        description: 'Be ready for anything with solar-powered preparedness kits designed to keep your important devices and systems running. Discover these popular solar products to stay prepared.',
        image: 'https://checkout.bluettipower.com/cdn/shop/files/What_Can_I_Run_With_A_2_000-Watt_Generator.webp?v=1743409092&width=1200',
        href: '/shop/projects/survival',
        },
        {
        id: 'mobile-adventures',
        title: 'Mobile Adventures',
        description: 'Ideal for solar for RVs, vans, and tiny homes—take solar power on the road and keep your space energized anywhere your journey leads. Explore these popular products for mobile solar projects.',
        image: 'https://checkout.bluettipower.com/cdn/shop/files/lQDPKGWqUUkw-X3NCHDNDwCw7e5zqwZZrrUIuAa-ga2IAg_3840_2160_1x_f70730dd-c5cf-4f2c-a680-b70cc4c65d36.png?v=1772592026&width=1200',
        href: '/shop/projects/mobile',
        },
        {
        id: 'battery-backup',
        title: 'Battery Backup',
        description: 'Ensure peace of mind during outages with backup systems built to keep your essentials powered without interruption. Check out these popular products that will keep you prepared.',
        image: 'https://checkout.bluettipower.com/cdn/shop/files/AC300_B300K_home_backup_use_pc_76ee7e83-ef3f-4a5c-891b-23c81cdf1525.jpg?v=1743418693&width=1200',
        href: '/shop/projects/backup',
        },
    ];
    return (
        <div className="min-h-screen bg-white font-sans flex flex-col">
            <Navbar />
            <PageHeader
                title="All Projects"
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "All Projects" },
                ]}
                imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThvTFFERhasU5pz-OA50g3aZXeCXw4Z22dp4C4YgZB2A&s=10"
            />
        <main className="flex-1 max-w-[1440px] w-full mx-auto px-4 md:px-6 py-6 md:py-8 flex flex-col lg:flex-row gap-6 md:gap-8 relative">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 sm:gap-y-12">
                {projects.map(project => (
                    <ShopByProjectCard key={project.id} {...project} />
                ))}
            </div>
        </main>
        <Footer />
        </div>
    )
}