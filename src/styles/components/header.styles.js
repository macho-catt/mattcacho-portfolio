const headerStyles = {
  section: [
    'flex',
    'flex-col',
    'fixed',
    'top-2',
    'left-0',
    'bg-transparent',
    'w-screen',
    'h-12',
    // '-z-1',
    'lg:hidden',
  ].join(' '),

  hamburger: [
    'place-self-end',
    'mr-4',
    'h-10',
    'w-10',
    'absolute',
    'inline-block',
    'align-middle',
    'z-20',
    'space-y-2',
    'active:bg-[#394553]',
  ].join(' '),

  span1: ['block', 'w-8', 'h-0.5', 'bg-bumblebee'].join(' '),

  span2: ['block', 'w-6', 'h-0.5', 'bg-bumblebee'].join(' '),

  span3: ['block', 'w-8', 'h-0.5', 'bg-bumblebee'].join(' '),
};

export default headerStyles;
