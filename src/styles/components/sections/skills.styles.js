const skillStyles = {
  section: [
    'box-border',
    'flex',
    'flex-col',
    'place-content-center',
    'w-full',
    'py-12',
    'lg:pt-0',
    'lg:pb-0',
    'lg:h-screen',
  ].join(' '),

  container: [
    'flex',
    'flex-col',
    'justify-center',
    'gap-5',
    'h-full',
    'mx-10',
    'lg:gap-20',
    'lg:mr-0',
    'lg:ml-10',
  ].join(' '),

  h2: ['text-3xl', 'text-bumblebee', 'text-center', 'lg:text-left'].join(' '),

  body: [
    'flex',
    'flex-col',
    'gap-5',
    'text-center',
    'lg:flex',
    'lg:flex-row',
    'lg:text-left',
    'lg:gap-28',
    'lg:h-1/3',
  ].join(' '),

  col: ['flex', 'flex-col', 'gap-2'].join(' '),

  h3: ['text-lg', 'lg:text-xl', 'text-teal'].join(' '),
};

export default skillStyles;
