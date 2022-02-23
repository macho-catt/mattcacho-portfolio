const headerStyles = {
  section: [
    'flex',
    'flex-col',
    'fixed',
    'top-0',
    'left-0',
    'w-screen',
    'z-10',
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
    // 'active:bg-[#394553]',
  ].join(' '),

  span1: ['block', 'w-8', 'h-0.5', 'bg-bumblebee'].join(' '),

  span2: ['block', 'w-6', 'h-0.5', 'bg-bumblebee'].join(' '),

  span3: ['block', 'w-8', 'h-0.5', 'bg-bumblebee'].join(' '),

  opaqueHeader: ['z-10', 'h-10', 'opacity-80', 'bg-midnightBlue'].join(' '),

  mobileNav: [
    'bg-[#394553]',
    'flex',
    'flex-col',
    'justify-evenly',
    'place-self-end',
    // use w-full until background blur is incorporated
    'w-full',
    // 'w-2/3',
    'h-screen',
    'text-center',
    'z-10',
    'absolute',
  ].join(' '),

  ul: ['flex', 'flex-col', 'gap-10'].join(' '),
};

export default headerStyles;
