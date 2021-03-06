const layoutStyles = {
  root: [
    'bg-midnightBlue',
    'text-white',
    'font-roboto',
    'lg:grid',
    'lg:grid-cols-6',
    'lg:relative',
  ].join(' '),

  placeholder: ['h-10', 'z-0', 'lg:col-span-1'].join(' '),
  // placeholder: ['hidden', 'lg:block', 'lg:col-span-1'].join(' '),

  main: ['flex', 'flex-col', 'place-content-center', 'lg:col-span-5'].join(' '),
};

export default layoutStyles;
