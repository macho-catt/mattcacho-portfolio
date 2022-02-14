const homeStyles = {
  section: [
    'lg:flex',
    'lg:flex-col',
    'lg:justify-center',
    'lg:content-center',
    'lg:h-screen',
    'lg:w-full',
    'bg-midnightBlue',
    'text-white',
    'box-border'
  ].join(' '),

  container: [
    'lg:flex',
    'lg:flex-col',
    'lg:justify-evenly',
    // 'lg:w-1/3',
    'lg:h-1/3',
    'lg:ml-10',
    'bg-blue-500'
  ].join(' '),

  name: [
    'lg:text-8xl',
  ].join(' '),

  location: [
    'lg:text-3xl'
  ].join(' '),
}

export default homeStyles