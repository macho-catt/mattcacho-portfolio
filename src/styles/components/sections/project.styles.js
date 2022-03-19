const projStyles = {
  section: [
    'box-border',
    'flex',
    'flex-col',
    'place-content-center',
    'lg:w-full',
    'py-12',
    'lg:pt-0',
    'lg:pb-0',
  ].join(' '),

  container: [
    'flex',
    'flex-col',
    'justify-evenly',
    'gap-10',
    'mx-10',
    'lg:mr-0',
    'lg:ml-10',
  ].join(' '),

  h2: ['text-3xl', 'text-bumblebee', 'text-center', 'lg:text-left'].join(' '),

  body: ['flex', 'flex-row', 'flex-wrap', 'place-content-start', 'gap-10'].join(
    ' '
  ),
};

export default projStyles;
