import {
  type SystemStyleInterpolation,
  type SystemStyleObject,
  type ThemeConfig,
  extendTheme,
  withDefaultColorScheme
} from '@chakra-ui/react'

import { font } from './font'

type GlobalStyles = {
  global?: SystemStyleInterpolation
}

type JSXElementStyles = {
  [K in keyof JSX.IntrinsicElements]?: SystemStyleObject;
}

type Colors = {
  background: {
    primary: {
      lighten: string
      main: string
    }
    secondary: {
      main: string
    }
  }
  error: {
    primary: {
      main: string
    }
  }
  success: {
    primary: {
      main: string
    }
  }
  text: {
    primary: {
      darekn: string
      main: string
    }
    secondary: {
      darken: string
      main: string
    }
  }
}

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false
}

const styles: GlobalStyles & JSXElementStyles = {
  global: {
    'body': {
      margin: 0,
      padding: 0,
      fontFamily: font.style.fontFamily,
      color: 'text.primary.main'
    },
    '*': {
      boxSizing: 'border-box'
    },
    'img': {
      maxWidth: '100%',
      display: 'block'
    },
    'ul,ol': {
      listStyle: 'none',
      margin: 0
    }
  }
}

const colors: Colors = {
  text: {
    primary: {
      main: '#fff',
      darekn: '#e0e0e0'
    },
    secondary: {
      main: '#2f80ed',
      darken: '#2B6ECB'
    }
  },
  background: {
    primary: {
      main: '#131720',
      lighten: '#141925'
    },
    secondary: {
      main: '#151f30'
    }
  },
  success: {
    primary: {
      main: '#29b474'
    }
  },
  error: {
    primary: {
      main: '#eb5757'
    }
  }
}

export const theme = extendTheme(
  {
    config,
    styles,
    colors
  },
  withDefaultColorScheme({ colorScheme: 'primary' })
)
