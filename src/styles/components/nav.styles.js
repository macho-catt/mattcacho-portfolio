const navStyles = {
  nav: [
    'hidden',
    'z-1',
    'lg:col-span-1',
    'lg:flex',
    'lg:flex-col',
    'lg:place-content-center',
    'lg:fixed',
    'lg:top-0',
    'lg:left-0',
    'lg:box-border',
    'lg:w-1/6',
    'lg:hover:shadow-2xl',
    'lg:h-screen',
    'lg:border-r',
    'lg:border-r-slate-600',
  ].join(' '),

  ul: [
    'lg:flex',
    'lg:flex-col',
    'lg:justify-center',
    'lg:gap-5',
    'text-center',
  ].join(' '),

  liLink: ['hover:text-midnightBlue', 'hover:bg-white'].join(' '),
};

export default navStyles;
