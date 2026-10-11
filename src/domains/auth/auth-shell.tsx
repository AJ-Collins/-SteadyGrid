interface AuthShellProps {
  image: string;
  imageAlt: string;
  captionTitle: string;
  captionText: string;
  minHeight?: string;
  children: React.ReactNode;
}

// Legacy auth layout: full-width split card, image panel on desktop,
// form column on the right.
export function AuthShell({ image, imageAlt, captionTitle, captionText, minHeight = "lg:min-h-[560px]", children }: AuthShellProps) {
  return (
    <div className={`flex flex-col overflow-hidden rounded-md border border-gray-200 lg:flex-row ${minHeight}`}>
      <div className="relative hidden lg:block lg:w-1/2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image} alt={imageAlt} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-surface-low/30" />
        <div className="absolute bottom-0 left-0 p-10">
          <div className="text-xl font-black text-white md:text-2xl">{captionTitle}</div>
          <p className="mt-1 text-sm text-white/80">{captionText}</p>
        </div>
      </div>
      <div className="flex w-full flex-col justify-center p-6 sm:p-10 md:p-12 lg:w-1/2">{children}</div>
    </div>
  );
}
