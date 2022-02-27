const panelStyles = {
  container: ['flex', 'flex-col', 'gap-4'].join(' '),

  h2: ['text-3xl', 'text-bumblebee', 'text-center', 'lg:text-left'].join(' '),

  ul: ['flex', 'flex-col', 'gap-4', 'lg:gap-10'].join(' '),

  li: ['flex', 'flex-col', 'gap-1', 'lg:flex-row', 'lg:gap-10'].join(' '),

  liHeader: ['lg:w-32'].join(' '),

  h3: ['text-teal', 'text-left', 'lg:text-xl'].join(' '),

  liBody: [
    'flex',
    'flex-col',
    'gap-2',
    'text-slate-400',
    'lg:w-4/6',
    'lg:ml-10',
  ].join(' '),

  h4: ['text-white', 'lg:text-lg'].join(' '),

  h6: ['text-sm'].join(' '),

  // Creates a properly aligned bulleted list
  liBullet: [
    'relative',
    'pl-4',
    'before:content-["•"]',
    'before:absolute',
    'before:left-0',
  ].join(' '),
};

export default panelStyles;
