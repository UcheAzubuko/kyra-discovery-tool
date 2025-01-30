import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        grey: '#7d7d7d',
        primary: '#BEFF48',
        background: '#171717',
        'dark-green': '#317267',
        'light-green': '#5f9770',
        'heatmap-green': '#609e6d',
        'dark-grey': '#1D1C21'
      },
      screens: {
        tablet: '480px',
        desktop: '768px',
        laptop: '1440px',
        monitor: '1920px'
      }
    },
    container: {
      center: true
    }
  }
}
