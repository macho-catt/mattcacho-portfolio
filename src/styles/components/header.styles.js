const headerStyles = {
  section: [
    'flex',
    'flex-col',
    'fixed',
    'top-0',
    'left-0',
    'bg-transparent',
    'w-screen',
    // 'h-12',
    // '-z-1',
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
  ].join(' '),

  ul: ['flex', 'flex-col', 'gap-10'].join(' '),
};

export default headerStyles;
