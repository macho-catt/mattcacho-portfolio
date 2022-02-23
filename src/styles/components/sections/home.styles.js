const homeStyles = {
  section: [
    'box-border',
    'flex',
    'flex-col',
    'place-content-center',
    'h-screen',
    'w-full',
    '-mt-10',
    'lg:mt-0',
  ].join(' '),

  container: [
    'flex',
    'flex-col',
    'justify-center',
    'h-2/3',
    'text-center',
    'mx-6',
    'gap-10',
    'lg:justify-evenly',
    'lg:h-1/3',
    'lg:ml-10',
    'lg:mr-0',
    'lg:text-left',
  ].join(' '),

  name: ['text-4xl', 'lg:text-8xl'].join(' '),

  h2: ['text-bumblebee', 'text-xl', 'lg:text-3xl'].join(' '),

  ul: [
    'flex',
    'flex-row',
    'justify-evenly',
    'lg:justify-start',
    'lg:gap-10',
  ].join(' '),

  svgIcon: ['fill-blue-100', 'lg:hover:fill-blue-500'].join(' '),
};

export default homeStyles;
