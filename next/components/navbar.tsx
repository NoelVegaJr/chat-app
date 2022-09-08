const Navbar = ({
  size,
  className,
  children,
}: {
  size: string;
  className?: string;
  children: JSX.Element | JSX.Element[];
}) => {
  let styles = [];
  switch (size) {
    case 'sm':
      styles.push('h-16 md:h-16 2xl:h-20');
      break;
    case 'md':
      styles.push('h-24');
      break;
  }

  return (
    <div className={` bg-slate-900  w-full ${styles} ${className}`}>
      {children}
    </div>
  );
};

export default Navbar;
