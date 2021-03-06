import '../src/index.css'
import '../src/index.js'

const screenPresets = {
  xs: {
    name: 'iPhone 5',
    styles: {
      width: '320px',
      height: '568px'
    }
  },
  sm: {
    name: 'OnePlus 6',
    styles: {
      width: '412px',
      height: '869px'
    }
  },
  md: {
    name: 'Macbook Pro 2012',
    styles: {
      width: '1280px',
      height: '740px'
    }
  },
  lg: {
    name: '1080p Desktop',
    styles: {
      width: '1920px',
      height: '1200px'
    }
  }
}

const layout = 'fullscreen'

const actions = {
  argTypesRegex: '^on[A-Z].*'
}

const viewport = {
  viewports: screenPresets,
  // defaultViewport: 'md'
}

const controls = {
  hideNoControlsWarning: true
}

export const parameters = {
  layout,
  actions,
  viewport,
  controls
}
