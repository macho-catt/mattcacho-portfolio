const projCardStyles = {
  card: [
    'bg-duskBlue',
    'flex',
    'flex-col',
    'border',
    'rounded-lg',
    'border-black',
    'px-4',
    'py-4',
    'gap-10',
    'text-slate-400',
    'w-96',
    'lg:h-96',
  ].join(' '),

  header: ['flex', 'flex-col', 'text-white'].join(' '),

  headerTitle: ['text-center', 'text-2xl'].join(' '),

  headerInfo: [
    'leading-10',
    'text-left',
    'flex',
    'flex-row',
    'gap-6',
    'place-content-evenly',
  ].join(' '),

  iconLinks: ['flex', 'flex-row', 'gap-2', 'place-content-evenly'].join(' '),

  svgIcon: ['h-8', 'w-8', 'fill-slate-400', 'lg:hover:fill-white'].join(' '),
};

export default projCardStyles;
