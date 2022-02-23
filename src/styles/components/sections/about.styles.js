const aboutStyles = {
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
    'lg:mr-0',
    'lg:ml-10',
    'lg:gap-20',
  ].join(' '),

  h2: ['text-bumblebee', 'text-center', 'text-3xl', 'lg:text-left'].join(' '),

  body: ['flex', 'flex-col', 'gap-5', 'lg:flex-row', 'lg:gap-20'].join(' '),

  bodyContent: ['flex', 'flex-col', 'gap-4', 'lg:w-1/3', 'lg:gap-2'].join(' '),

  squareImg: [
    'flex',
    'place-self-center',
    'h-80',
    'w-80',
    'lg:h-96',
    'lg:w-96',
  ].join(' '),

  img: [
    'lg:grayscale',
    'lg:hover:grayscale-0',
    'lg:max-h-full',
    'lg:max-w-full',
  ].join(' '),
};

export default aboutStyles;
