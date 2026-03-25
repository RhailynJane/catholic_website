interface Props {
  title: string;
  subtitle?: string;
  icon?: string;
}

export default function PageHeader({ title, subtitle }: Props) {
  return (
    <div className="py-16 px-4 text-center border-b border-stone-200 bg-white">
      <div className="max-w-3xl mx-auto">
        {subtitle && (
          <p className="text-[10px] tracking-[0.45em] uppercase text-stone-400 font-sans mb-5">
            {subtitle}
          </p>
        )}
        <h1 className="font-serif text-5xl md:text-6xl text-stone-900 font-light italic leading-tight">
          {title}
        </h1>
        <div className="mt-6 flex justify-center">
          <div className="h-px w-16 bg-catholic-gold" />
        </div>
      </div>
    </div>
  );
}
