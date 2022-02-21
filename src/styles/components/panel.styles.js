const panelStyles = {
  container: [
    'lg:flex',
    'lg:flex-col',
    'lg:gap-4'
  ].join(' '),

  h2: [
    'lg:text-3xl',
    'text-bumblebee'
  ].join(' '),

  ul: [
    'lg:flex',
    'lg:flex-col',
    'lg:gap-10',
  ].join(' '),

  li: [
    'lg:flex',
    'lg:flex-row',
    'lg:gap-2',
    // 'bg-blue-500'
  ].join(' '),

  liHeader: [
    'lg:w-32',
    // 'bg-blue-800',
  ].join(' '),

  h3: [
    'lg:text-xl',
    'text-teal'
  ].join(' '),

  liBody: [
    'lg:flex',
    'lg:flex-col',
    'lg:gap-2',
    'lg:w-4/6',
    'lg:ml-10',
    'text-slate-400',
    // 'bg-blue-800',
  ].join(' '),

  h4: [
    'lg:text-lg',
    'text-white'
  ].join(' '),

  h6: [
    'lg:text-sm',
  ].join(' '),

  // Creates a properly aligned bulleted list
  liBullet: [
    'lg:relative',
    'lg:pl-4',
    'lg:before:content-["•"]',
    'lg:before:absolute',
    'lg:before:left-0'
  ].join(' '),
}

export default panelStyles