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
    'text-center',
    'mx-10',
    'gap-6',
    'lg:flex-row',
    'lg:place-items-center',
    'lg:mr-0',
    'lg:ml-10',
    'lg:h-1/3',
  ].join(' '),

  h1: [
    'text-center',
    'text-4xl',
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
    'text-xl',
    'lg:text-6xl',
    'lg:hover:text-midnightBlue',
    'lg:hover:border-midnightBlue',
    'lg:hover:bg-bumblebee',
    'lg:hover:shadow-md',
    'lg:hover:shadow-amber-900',
  ].join(' '),
};

export default contactStyles;
