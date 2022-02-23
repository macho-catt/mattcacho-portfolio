const homeStyles = {
  section: [
    'box-border',
    'flex',
    'flex-col',
    // 'justify-center',
    // 'content-center',
    'place-content-center',
    'h-screen',
    'w-full',
    '-mt-10',
    'lg:mt-0',
  ].join(' '),

  container: [
    'flex',
    'flex-col',
    'justify-evenly',
    'h-1/3',
    'text-center',
    'mx-6',
    'lg:ml-10',
    'lg:mr-0',
    'lg:text-left',
    // 'bg-blue-500'
  ].join(' '),

  name: ['text-4xl', 'lg:text-8xl'].join(' '),

  h2: ['text-bumblebee', 'text-xl', 'lg:text-3xl'].join(' '),
};

export default homeStyles;
