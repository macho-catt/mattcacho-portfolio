const aboutStyles = {
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
    'lg:justify-center',
    'lg:gap-20',
    'lg:h-full',
    'lg:ml-10',
    // 'bg-blue-500'
  ].join(' '),

  body: [
    'lg:flex',
    'lg:flex-row',
    'lg:gap-20'
  ].join(' '),

  bodyContent: [
    'lg:w-1/3',
    'lg:flex',
    'lg:flex-col',
    'lg:gap-2'
  ].join(' '),

  h2: [
    'lg:text-3xl',
  ].join(' '),

  squareImg: [
    'lg:flex',
    'lg:place-self-center',
    'lg:h-96',
    'lg:w-96'
  ].join(' '),

  img: [
    'lg:grayscale',
    'hover:grayscale-0',
    'max-h-full',
    'max-w-full'
  ].join(' '),
}

export default aboutStyles