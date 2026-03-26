import Link from 'next/link';

const variantClasses = {
  primary:
    'bg-brand-teal text-white hover:bg-brand-teal-dark focus-visible:ring-brand-teal',
  secondary:
    'bg-white text-brand-navy hover:bg-light-grey focus-visible:ring-brand-navy',
  'outline-white':
    'border-2 border-white text-white hover:bg-white hover:text-brand-navy focus-visible:ring-white',
  outline:
    'border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white focus-visible:ring-brand-navy',
};

const sizeClasses = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export default function Button({
  variant = 'primary',
  size = 'md',
  href,
  children,
  className = '',
  ...props
}) {
  const base =
    'inline-flex items-center justify-center font-semibold rounded-lg transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';
  const classes = `${base} ${variantClasses[variant] ?? variantClasses.primary} ${sizeClasses[size] ?? sizeClasses.md} ${className}`;

  if (href) {
    const isExternal = href.startsWith('http') || href.startsWith('https');
    return (
      <Link
        href={href}
        className={classes}
        {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...props}
      >
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
