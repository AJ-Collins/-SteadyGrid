export default function BrandLogos() {
  const brands = [
    {
      id: 'lunar',
      content: (
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 relative flex items-center justify-center">
            <div className="absolute bottom-0 left-0 w-3.5 h-3.5 bg-[#234360] rounded-b-full rounded-l-full"></div>
            <div className="absolute top-0 right-0 w-3.5 h-3.5 bg-[#234360] rounded-t-full rounded-r-full"></div>
          </div>
          <div className="flex flex-col leading-[1.1] text-[#234360]">
            <span className="text-[18px] font-medium tracking-tight">lunar</span>
            <span className="text-[18px] font-medium tracking-tight">energy</span>
          </div>
        </div>
      )
    },
    {
      id: 'sirius',
      content: (
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-1.5">
            <div className="grid grid-cols-2 gap-[2px] w-5 h-5">
              <div className="bg-[#1b365d] rounded-tl-[2px] relative overflow-hidden">
                <div className="absolute inset-0 bg-red-600 w-full h-[45%]"></div>
              </div>
              <div className="bg-[#1b365d] rounded-tr-[2px]"></div>
              <div className="bg-[#1b365d] rounded-bl-[2px]"></div>
              <div className="bg-[#1b365d] rounded-br-[2px]"></div>
            </div>
            <span className="text-[22px] font-medium tracking-widest text-[#111]">SIRIUS</span>
          </div>
          <span className="text-[6px] font-bold text-neutral-500 mt-1 uppercase tracking-[0.2em]">Powered by ELIN</span>
        </div>
      )
    },
    {
      id: 'pegasus',
      content: (
        <div className="flex flex-col items-center gap-1">
          <div className="flex flex-col gap-[3px] w-12 self-start ml-2">
            <div className="w-full h-[4px] bg-[#477ebb] rounded-full transform -skew-x-12"></div>
            <div className="w-[85%] h-[4px] bg-[#477ebb] rounded-full transform -skew-x-12"></div>
            <div className="w-[70%] h-[4px] bg-[#477ebb] rounded-full transform -skew-x-12"></div>
          </div>
          <span className="text-[20px] font-black tracking-widest text-[#4a4a4a]">PEGASUS</span>
        </div>
      )
    },
    {
      id: 'eg4',
      content: (
        <span className="text-[34px] font-black tracking-tighter text-black">EG4</span>
      )
    },
    {
      id: 'chiko',
      content: (
        <div className="flex flex-col items-center">
          <div className="flex items-center">
            <span className="text-[22px] font-black text-[#1b4e8c]">CHIK</span>
            <div className="w-[18px] h-[18px] rounded-full border-[3px] border-[#1b4e8c] bg-gradient-to-br from-yellow-300 to-orange-500 mx-[1px]"></div>
            <span className="text-[22px] font-black text-[#1b4e8c]">USA</span>
          </div>
          <span className="text-[7px] font-bold tracking-[0.15em] text-[#187a3e] mt-0.5">
            SOLAR RACKING SOLUTIONS
          </span>
        </div>
      )
    },
  ];

  return (
    <section className="w-full bg-white py-10 sm:py-14 px-4 sm:px-6 lg:px-8 border-b border-neutral-100">
      <div className="max-w-[1400px] mx-auto overflow-x-auto scrollbar-none pb-2">
        <div className="flex items-center justify-between gap-4 md:gap-6 min-w-max md:min-w-0">
          {brands.map((brand) => (
            <div 
              key={brand.id}
              className="flex items-center justify-center w-[200px] lg:w-[250px] h-[100px] lg:h-[120px] bg-white border border-neutral-200 rounded-xl hover:border-neutral-300 hover:shadow-sm transition-all cursor-pointer shrink-0"
            >
              {brand.content}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
