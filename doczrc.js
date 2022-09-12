const config = {
  title: 'CSUS Industry Mentorship Program',
  description: 'Website for the CSUS Industry Mentorship Program, McGill University.',
  base: '/csus-industry-mentorship/',
  files: './src/pages/**/*.{md,markdown,mdx}',
  themeConfig: {
    initialColorMode: 'dark',
    useColorSchemeMediaQuery: true,
    useLocalStorage: false,
	},
  typescript: true,
  menu: [
    'Home',
    {name: 'Program Information', menu: ['Program Information', 'Orientation']},
    {name: 'Lectures', menu: ['Lecture 1', 'Lecture 2', 'Lecture 3', 'Lecture 4', 'Lecture 5', 'Lecture 6', 'Lecture 7', 'Lecture 8', 'Lecture 9', 'Lecture 10']},
    {name: 'Workshops', menu: ['Workshop 1', 'Workshop 2', 'Workshop 3', 'Workshop 4', 'Workshop 5']},
    'Additional Resources'
  ]
}

export default config;