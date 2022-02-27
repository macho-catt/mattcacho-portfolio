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

  h1Link: [
    'h-12',
    'w-12',
    'border',
    'rounded-lg',
    'py-2',
    'px-6',
    'text-bumblebee',
    'border-bumblebee',
    'lg:hover:text-midnightBlue',
    'lg:hover:border-midnightBlue',
    'lg:hover:bg-bumblebee',
    'lg:hover:shadow-md',
    'lg:hover:shadow-amber-900',
    // 'text-bumblebee',
    // 'lg:text-white',
    // 'lg:hover:text-bumblebee'
  ].join(' '),
};

export default contactStyles;
