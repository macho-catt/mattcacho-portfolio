const contactStyles = {
  section: [
    'box-border',
    'flex',
    'flex-col',
    'place-content-center',
    'h-screen',
    '-mt-10',
    'lg:mt-0',
    'lg:w-full',
  ].join(' '),

  container: [
    'flex',
    'flex-col',
    'justify-evenly',
    'mx-10',
    'lg:mr-0',
    'lg:ml-10',
    'lg:h-1/3',
  ].join(' '),

  h1: [
    'text-center',
    'text-3xl',
    'break-normal',
    'md:text-5xl',
    'lg:text-left',
    'lg:text-6xl',
  ].join(' '),

  h1Link: ['text-bumblebee', 'lg:text-white', 'lg:hover:text-bumblebee'].join(
    ' '
  ),
};

export default contactStyles;
