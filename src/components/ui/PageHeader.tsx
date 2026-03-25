interface Props {
  title: string;
  subtitle?: string;
  icon?: string;
}

export default function PageHeader({ title, subtitle }: Props) {
  return (
    <div className="wavy-gradient py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 text-center">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6 flex justify-center">
          <div className="text-4xl font-sans">✦</div>
        </div>
        {subtitle && (
          <p className="text-[10px] font-semibold tracking-[0.5em] uppercase text-primary-600 mb-6 font-sans">
            {subtitle}
          </p>
        )}
        <h1 className="font-sans text-4xl sm:text-5xl lg:text-6xl font-bold text-accent-500 leading-tight tracking-tight">
          {title}
        </h1>
      </div>
    </div>
  );
}
