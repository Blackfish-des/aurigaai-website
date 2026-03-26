const backgroundClasses = {
  white: 'bg-white',
  grey: 'bg-light-grey',
  navy: 'bg-brand-navy',
  'off-white': 'bg-off-white',
};

export default function SectionWrapper({
  background = 'white',
  id,
  className = '',
  children,
}) {
  return (
    <section
      id={id}
      className={`${backgroundClasses[background] ?? 'bg-white'} ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        {children}
      </div>
    </section>
  );
}
