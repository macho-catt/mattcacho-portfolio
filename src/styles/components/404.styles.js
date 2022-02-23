const notFoundStyles = {
  section: [
    'box-border',
    'flex',
    'flex-col',
    'place-content-center',
    'h-screen',
    '-mt-10',
    'mx-10',
    'gap-20',
    'lg:mr-0',
    'lg:ml-10',
    'lg:mt-0',
  ].join(' '),

  h1: ['text-center', 'text-6xl', 'lg:text-left', 'lg:text-8xl'].join(' '),

  h2: [
    'text-center',
    'text-bumblebee',
    'lg:text-white',
    'lg:text-left',
    'lg:hover:text-bumblebee',
  ].join(' '),

  link: ['lg:w-28'].join(' '),
};

export default notFoundStyles;
