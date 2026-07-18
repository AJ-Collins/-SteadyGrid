import React from "react";
import { 
    Truck, 
    Clock, 
    User, 
    DollarSign, 
    MapPin, 
    Phone, 
    ShoppingBag, 
    Search, 
    Package, 
    CheckCircle,
    Star
} from "lucide-react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

const categories = [
  {
    title: "Solar Panels",
    img: "https://cdn11.bigcommerce.com/s-bi8c0htqsn/images/stencil/320w/products/13660/14996/SunPro_440W_Bifacial_Solar_Panel_1__86744.1779113652.png",
  },
  {
    title: "Inverters",
    img: "https://cdn11.bigcommerce.com/s-bi8c0htqsn/images/stencil/1920w/products/13457/15015/12000xp_Front__34872__75143.1779289053.jpg",
  },
  {
    title: "Batteries",
    img: "https://cdn11.bigcommerce.com/s-bi8c0htqsn/images/stencil/original/image-manager/wiring-1.png?t=1734106631",
  },
  {
    title: "Mounting",
    img: "https://cdn11.bigcommerce.com/s-bi8c0htqsn/images/stencil/original/image-manager/kits-and-bundles-7-2025.png?t=1752691446",
  },
  {
    title: "Accessories",
    img: "https://cdn11.bigcommerce.com/s-bi8c0htqsn/images/stencil/original/image-manager/-charge-controllers-2-2026-1-.png?t=1772137272",
  },
];

export default function OurStore() {
    return (
        <div className="min-h-screen bg-white font-sans flex flex-col">
            <Navbar />            
            <main className="flex-1 w-full flex flex-col">
                
                {/* 1. Hero Banner */}
                <section className="relative w-full bg-[#0B0B0B] overflow-hidden flex flex-col md:flex-row min-h-[450px]">
                    {/* Left Image with Diagonal Border */}
                    <div 
                        className="hidden md:block absolute inset-y-0 left-0 w-[45%] bg-[#22a055] z-0" 
                        style={{ clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0% 100%)' }}
                    >
                        {/* Image nested slightly smaller to create the right border */}
                        <div 
                            className="absolute inset-y-0 left-0 w-[98%] bg-cover bg-center"
                            style={{ 
                                backgroundImage: "url('https://service-widget-data-prod.sfo3.digitaloceanspaces.com/places-photos/072466be5f301a80e3d6ecb0dc817695.jpg')",
                                clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0% 100%)' 
                            }}
                        />
                    </div>

                    {/* Right Content */}
                    <div className="relative z-10 w-full md:w-[60%] md:ml-auto flex flex-col justify-center px-6 py-12 md:pl-12 md:pr-16">
                        
                        <div className="flex flex-col items-start mb-8">
                            {/* Slanted Badge */}
                            <div className="bg-[#22a055] text-black px-4 sm:px-5 md:px-8 py-2 md:py-3 flex items-center transform -skew-x-12 mb-2 ml-0 sm:ml-8 md:ml-24 max-w-full">
                                <div className="transform skew-x-12 flex items-center gap-2 md:gap-3">
                                    <div className="border-[2.5px] border-black rounded-full w-6 h-6 md:w-7 md:h-7 flex items-center justify-center font-black text-xs md:text-sm shrink-0">
                                        $
                                    </div>

                                    <span className="font-black text-[1.5rem] sm:text-xl md:text-4xl tracking-tight leading-tight">
                                        Save More When You
                                    </span>
                                </div>
                            </div>

                            <h1 className="text-3xl sm:text-5xl md:text-[8rem] leading-none font-black text-[#22a055] uppercase tracking-tighter ml-0 sm:ml-4 md:ml-14">
                                Shop In Store
                            </h1>
                        </div>

                        {/* Features Row */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 border-t border-white/20 pt-8 mt-4">
                            <HeroFeature icon={<Truck />} title="NO SHIPPING FEES" subtitle="Save More Instantly" />
                            <HeroFeature icon={<Clock />} title="SAME-DAY PICK UP" subtitle="Get it Today" />
                            <HeroFeature icon={<User />} title="EXPERT HELP" subtitle="In-Store Support" />
                            <HeroFeature icon={<DollarSign />} title="EXCLUSIVE DEALS" subtitle="Only In-Store" />
                        </div>
                    </div>
                </section>

                {/* 2. Info Bar */}
                <section className="w-full bg-white border-b border-neutral-200">
                    <div className="max-w-[1440px] mx-auto px-4 py-4">
                        <div className="flex flex-col md:flex-row items-center justify-between divide-y md:divide-y-0 md:divide-x divide-neutral-200 text-xs sm:text-sm font-bold text-neutral-800">
                            <InfoItem icon={<MapPin className="w-4 h-4 md:w-5 md:h-5 text-neutral-600" />} text="614 Bill Bradford Rd Suite 101, Sulphur Springs, TX 75482" />
                            <InfoItem icon={<Clock className="w-4 h-4 md:w-5 md:h-5 text-neutral-600" />} text="Open Monday-Saturday" />
                            <InfoItem icon={<Phone className="w-4 h-4 md:w-5 md:h-5 text-neutral-600" />} text="Call (903) 321-7512" />
                            <InfoItem icon={<ShoppingBag className="w-4 h-4 md:w-5 md:h-5 text-neutral-600" />} text="In Stock Today Ready For Pickup" />
                        </div>
                    </div>
                </section>

                {/* 3. Store Locator */}
                <section className="w-full bg-white py-12 md:py-16 border-b border-neutral-100">
                    <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 h-full min-h-[500px]">
                            
                            {/* Left Panel */}
                            <div className="flex flex-col gap-6">
                                <h2 className="text-2xl md:text-3xl font-black text-neutral-900 tracking-tight leading-snug">
                                    Visit The Signature<br/>Solar Retail Store
                                </h2>
                                
                                <div className="flex w-full bg-neutral-100 p-1.5 rounded-md">
                                    <div className="flex items-center flex-1 px-3 bg-neutral-100">
                                        <Search className="w-4 h-4 text-neutral-400 mr-2" />
                                        <input 
                                            type="text" 
                                            placeholder="Search by address, ZIP, or name"
                                            className="bg-transparent w-full outline-none text-sm font-medium text-neutral-700 placeholder:text-neutral-400"
                                        />
                                    </div>
                                    <button className="bg-neutral-900 text-white px-6 py-2.5 text-xs font-black uppercase tracking-wider rounded">
                                        Search
                                    </button>
                                </div>

                                {/* Store Card */}
                                <div className="mt-4 flex flex-col gap-4">
                                    <img 
                                        src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&q=80&w=800" 
                                        alt="Store exterior" 
                                        className="w-full h-48 object-cover rounded-lg"
                                    />
                                    <div>
                                        <h3 className="font-black text-lg text-neutral-900 mb-1">S2 Retail Store</h3>
                                        <p className="text-xs font-bold mb-4">
                                            <span className="text-red-600">Closed</span> 
                                            <span className="text-neutral-500 ml-1">Opens today at 9:00 AM</span>
                                        </p>
                                        <p className="text-sm font-medium text-neutral-600 leading-relaxed max-w-[280px]">
                                            614 Bill Bradford Rd Suite 101, Sulphur Springs, TX 75482, USA<br/>
                                            (903) 321-7512<br/>
                                            retail.store@signaturesolar.com<br/>
                                            signaturesolar.com/retail-store
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Right Map Area (Real Map) */}
                            <div className="bg-neutral-100 rounded-lg overflow-hidden relative border border-neutral-200 min-h-[400px]">
                                <iframe 
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.4960573752697!2d-95.61463992383796!3d33.12577416719113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864a13e53df39855%3A0xc3b8b15d2a71f0!2s614%20Bill%20Bradford%20Rd%20%23101%2C%20Sulphur%20Springs%2C%20TX%2075482!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" 
                                    width="100%" 
                                    height="100%" 
                                    style={{ border: 0, position: 'absolute', top: 0, left: 0 }} 
                                    allowFullScreen={false} 
                                    loading="lazy" 
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Store Map"
                                ></iframe>
                            </div>

                        </div>
                    </div>
                </section>

                {/* 4. Why Purchase In Store */}
                <section className="w-full bg-white py-16">
                    <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                        <h2 className="text-2xl md:text-3xl font-black text-center text-neutral-900 tracking-tight mb-12">
                            Why Purchase In Store?
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-neutral-100">
                            <FeatureBlock 
                                icon={<Package className="w-6 h-6" />} 
                                title="Take It Home Today" 
                                desc="Purchase and pick up products in the store today." 
                            />
                            <FeatureBlock 
                                icon={<Truck className="w-6 h-6" />} 
                                title="Save on Shipping" 
                                desc="Avoid shipping fees and skip long delivery wait times." 
                            />
                            <FeatureBlock 
                                icon={<User className="w-6 h-6" />} 
                                title="Expert Assistance" 
                                desc="Talk to our team and get the right project equipment." 
                            />
                            <FeatureBlock 
                                icon={<CheckCircle className="w-6 h-6" />} 
                                title="See Products First" 
                                desc="See solar products in store first before you buy." 
                            />
                        </div>
                    </div>
                </section>

                {/* 5. Trusted By Our Customers */}
                {/* <section className="w-full bg-[#F4F9F6] py-16">
                    <div className="max-w-[1200px] mx-auto px-4 md:px-8">
                        <h2 className="text-2xl md:text-3xl font-black text-center text-neutral-900 tracking-tight mb-8">
                            Trusted By Our Customers
                        </h2>

                        <div className="bg-white rounded-xl shadow-sm border border-neutral-100 p-6 flex flex-col md:flex-row items-center justify-between mb-6">
                            <div className="flex items-center gap-4 mb-4 md:mb-0">
                                <div className="flex flex-col">
                                    <div className="flex items-center gap-2">
                                        <img src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png" className="w-5 h-5" alt="Google" />
                                        <span className="font-black text-lg">Reviews</span>
                                    </div>
                                    <div className="flex items-center gap-3 mt-1">
                                        <span className="text-3xl font-black tracking-tighter text-neutral-900">4.9</span>
                                        <div className="flex gap-0.5 text-[#F5B50A]">
                                            <Star className="w-5 h-5 fill-current" />
                                            <Star className="w-5 h-5 fill-current" />
                                            <Star className="w-5 h-5 fill-current" />
                                            <Star className="w-5 h-5 fill-current" />
                                            <Star className="w-5 h-5 fill-current" />
                                        </div>
                                        <span className="text-neutral-400 text-sm font-bold">(129)</span>
                                    </div>
                                </div>
                            </div>
                            <button className="bg-[#1A73E8] hover:bg-[#155DBA] text-white font-bold py-2.5 px-6 rounded-full text-sm transition-colors w-full md:w-auto">
                                Review us on Google
                            </button>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            <ReviewCard author="JT" date="9 days ago" text="K'lara Skidmore was extremely helpful throughout the purchas..." img="https://i.pravatar.cc/150?u=1" />
                            <ReviewCard author="Sonja Gehrlicher" date="29 days ago" text="I urgently needed to purchase just a few small parts. K'lara Skidmore..." img="https://i.pravatar.cc/150?u=2" />
                            <ReviewCard author="Daryl Guthrie" date="1 month ago" text="Best solar equipment supplier in America." img="https://i.pravatar.cc/150?u=3" />
                            <ReviewCard author="Marco Omnilife" date="1 month ago" text="Super happy with Payges customer service definitely a huge asset t..." img="https://i.pravatar.cc/150?u=4" />
                        </div>
                        
                        <div className="flex justify-center gap-2 mt-8">
                            <div className="w-2 h-2 rounded-full bg-neutral-800"></div>
                            <div className="w-2 h-2 rounded-full bg-neutral-300"></div>
                            <div className="w-2 h-2 rounded-full bg-neutral-300"></div>
                            <div className="w-2 h-2 rounded-full bg-neutral-300"></div>
                            <div className="w-2 h-2 rounded-full bg-neutral-300"></div>
                        </div>
                    </div>
                </section> */}

                {/* 6. Categories */}
                <section className="w-full bg-white py-16">
                    <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                        <h2 className="text-xl md:text-2xl font-black text-center text-neutral-900 tracking-tight mb-10">
                        Products You'll Find In Store
                        </h2>

                        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                        {categories.map((category, index) => {
                            const isLast = index === categories.length - 1;
                            const isOdd = categories.length % 2 !== 0;

                            return (
                            <div
                                key={category.title}
                                className={
                                isOdd && isLast
                                    ? "col-span-2 justify-self-center w-1/2 md:col-span-1 md:justify-self-auto md:w-full"
                                    : "w-full"
                                }
                            >
                                <CategoryCard
                                title={category.title}
                                img={category.img}
                                />
                            </div>
                            );
                        })}
                        </div>
                    </div>
                    </section>

                {/* 7. Footer Banner */}
                <section className="w-full max-w-[1440px] mx-auto px-4 md:px-8 pb-16">
                    <div className="relative w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden bg-neutral-900 flex items-center justify-center">
                        {/* Background Image */}
                        <div 
                            className="absolute inset-0 bg-cover bg-center opacity-40"
                            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1509391366360-1e97d526168e?auto=format&fit=crop&q=80')" }}
                        />
                        
                        <div className="relative z-10 flex flex-col items-center justify-center text-center p-6 w-full max-w-3xl">
                            <div className="bg-[#22a055] text-black px-8 py-3 mb-4 inline-block font-black text-2xl md:text-5xl uppercase tracking-tighter transform -skew-x-6">
                                <div className="transform skew-x-6">Save More When You<br/>Shop In-Store</div>
                            </div>
                            <div className="bg-black text-white px-6 py-2 inline-block font-bold text-sm md:text-xl uppercase tracking-wider transform -skew-x-6">
                                <div className="transform skew-x-6">Skip Shipping Fees And Take<br/>Your Products Home Today</div>
                            </div>
                        </div>
                        
                        <div className="absolute bottom-6 right-8 text-white font-black text-2xl tracking-tighter flex items-center gap-2">
                            <span className="text-[#22a055]">S²</span> SIGNATURE SOLAR
                        </div>
                    </div>
                    
                    <div className="flex justify-center items-center gap-4 mt-8">
                        <img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" className="w-6 h-6 cursor-pointer hover:opacity-80 transition-opacity" alt="YouTube" />
                        <img src="https://cdn-icons-png.flaticon.com/512/124/124010.png" className="w-6 h-6 cursor-pointer hover:opacity-80 transition-opacity" alt="Facebook" />
                        <img src="https://cdn-icons-png.flaticon.com/512/1384/1384063.png" className="w-6 h-6 cursor-pointer hover:opacity-80 transition-opacity" alt="Instagram" />
                        <img src="https://cdn-icons-png.flaticon.com/512/174/174814.png" className="w-6 h-6 cursor-pointer hover:opacity-80 transition-opacity" alt="LinkedIn" />
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
}

/* Helper Components */

function HeroFeature({ icon, title, subtitle }: { icon: React.ReactNode, title: string, subtitle: string }) {
    return (
        <div className="flex flex-col items-center text-center">
            <div className="text-[#22a055] mb-3">
                {React.cloneElement(icon as React.ReactElement<any>, { className: "w-8 h-8 md:w-10 md:h-10", strokeWidth: 1.5 })}
            </div>
            <h4 className="text-white font-black text-sm md:text-base uppercase tracking-tight leading-tight">{title}</h4>
            <p className="text-neutral-400 text-xs md:text-sm font-semibold mt-1">{subtitle}</p>
        </div>
    );
}

function InfoItem({ icon, text }: { icon: React.ReactNode, text: string }) {
    return (
        <div className="flex items-center justify-center md:justify-start gap-3 py-3 md:py-4 px-2 w-full">
            <div className="shrink-0">{icon}</div>
            <span className="text-center md:text-left">{text}</span>
        </div>
    );
}

function FeatureBlock({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
    return (
        <div className="flex flex-col items-center text-center px-4 py-6 md:py-0">
            <div className="w-14 h-14 bg-[#EAF5ED] rounded-full flex items-center justify-center text-neutral-800 mb-5">
                {icon}
            </div>
            <h4 className="font-black text-sm md:text-[15px] text-neutral-900 mb-2">{title}</h4>
            <p className="text-neutral-500 text-[13px] font-medium leading-relaxed max-w-[200px]">{desc}</p>
        </div>
    );
}

function ReviewCard({ author, date, text, img }: { author: string, date: string, text: string, img: string }) {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-neutral-100 p-5 flex flex-col h-full hover:shadow-md transition-shadow cursor-pointer">
            <div className="flex items-center gap-3 mb-3">
                <img src={img} alt={author} className="w-10 h-10 rounded-full bg-neutral-200 object-cover" />
                <div className="flex flex-col">
                    <span className="font-bold text-sm text-neutral-900 flex items-center gap-1">
                        {author} <CheckCircle className="w-3 h-3 text-[#1A73E8] fill-current" />
                    </span>
                    <span className="text-neutral-400 text-[11px] font-medium">{date}</span>
                </div>
                <img src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png" className="w-4 h-4 ml-auto" alt="Google" />
            </div>
            <div className="flex gap-0.5 text-[#F5B50A] mb-2">
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
            </div>
            <p className="text-neutral-600 text-xs font-medium leading-relaxed flex-1">
                {text}
            </p>
            <a href="#" className="text-[#1A73E8] text-[11px] font-bold mt-2 hover:underline">Read more</a>
        </div>
    );
}

function CategoryCard({ title, img }: { title: string, img: string }) {
    return (
        <div className="bg-white border border-neutral-200 rounded-lg p-6 flex flex-col items-center justify-center hover:border-neutral-400 hover:shadow-md transition-all cursor-pointer group h-[220px]">
            <div className="flex-1 w-full flex items-center justify-center mb-6">
                <img src={img} alt={title} className="w-full max-h-[120px] object-contain group-hover:scale-105 transition-transform duration-300" />
            </div>
            <span className="font-black text-[13px] text-neutral-900 uppercase tracking-tight">{title}</span>
        </div>
    );
}