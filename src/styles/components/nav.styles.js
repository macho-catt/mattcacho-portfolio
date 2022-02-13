const navStyles = {
  nav: [
    'lg:col-span-1',
    'lg:fixed',
    'lg:top-0',
    'lg:left-0',
    'lg:box-border',
    'lg:w-1/6',
    'h-screen',
    'z-1',
    'bg-midnightBlue',
    'text-white'
  ].join(' '),

  ul: [
    'lg:flex',
    'lg:flex-col',
    'lg:justify-center',
    'lg:gap-5',
    'lg:h-full',
    'text-center'
  ].join(' '),

  liLink: [
    'hover:text-midnightBlue',
    'hover:bg-white'
  ].join(' ')
}

export default navStyles