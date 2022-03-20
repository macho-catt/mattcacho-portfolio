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
    'gap-2',
    'text-slate-400',
    'w-96',
    // 'lg:h-96',
  ].join(' '),

  header: ['flex', 'flex-col', 'text-white', 'lg:gap-2'].join(' '),

  headerTitle: ['text-center', 'text-2xl'].join(' '),

  headerInfo: [
    'text-sm',
    'text-center',
    'leading-10',
    'flex',
    'flex-col',
    'lg:text-left',
    'lg:gap-6',
    'lg:flex-row',
    'lg:place-content-evenly',
  ].join(' '),

  iconLinks: [
    'flex',
    'flex-row',
    'gap-2',
    'place-content-center',
    'lg:place-content-evenly',
  ].join(' '),

  svgIcon: ['h-8', 'w-8', 'fill-slate-400', 'lg:hover:fill-white'].join(' '),

  textBody: ['leading-relaxed'].join(' '),
};

export default projCardStyles;
