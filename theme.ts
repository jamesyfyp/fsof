import type { Theme } from 'theme-ui'

export const theme: Theme = {
  colors: {
    text: '#E7F2F0',
    background: '#7DA2A1',
    primary: '#C4D7D6',
    secondary: '#598787',
    accent: '#FFE880',
    highlight: '#EE6655',
    muted: '#E7F2F0',
    reallylight: '#F2F2F2'
  },
  fonts: {
    body: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'sans-serif',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [ 12, 14, 16, 18, 20, 22],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  letterSpacings: {
    body: 'normal',     
    caps: '0.2em',
  },
  breakpoints: ['478px', '580px','767px', '991px', '1280px', '1440px', '1920px'],
  text: {
    caps: {
      textTransform: 'uppercase',
      letterSpacing: '0.2em',
    },
    heading: {
      fontSize: ["12px", "16px", "20px", "24px", "28px"],
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
    },
    about: {
      fontSize: ["12px", "14px", "15px", "18px", "22px", "26px"],
      marginX: "1rem",
      textAlign: "center"
    },
    formError:{
      fontSize: ["12px", "14px", "15px", "18px", "22px", "26px"],
      marginX: "1rem",
      textAlign: "center",
      color: "reallyLight"
    },
    formErrorTire:{
      fontSize: ["12px", "14px", "15px", "18px", "22px", "26px"],
      marginX: "1rem",
      display: "block",
      textAlign: "left",
      color: "reallyLight"
    }
  },
  forms: {
    label:{
      margin: 2,
      fontSize:  ['12px',"18px","24px", "24px", "28px",],
      fontFamily: "heading",
      background: "primary"
    },
    flexCenterTire:{
      width: "10%",
      justifySelf: "left",
      textAlign: "center"
    },
    input: {
      borderColor: "primary",
      '&:focus': {
        borderColor: 'reallylight',
        outline: 'none',
      },
    },
    textarea: {
      resize: "none",
      '&:focus': {
        borderColor: 'reallylight',
        outline: "none"
      },
    }
  },
  buttons: {
    LogoButton: {
      breakpoints: [ '300px' ,'478px', '580px','767px', '991px', '1280px', '1440px', '1920px'],
      fontSize: ['12px', "14px","18px","24px", "24px", "28px", "30px"],
      fontWeight: 'bold',
      color: 'secondary',
      bg: 'reallylight',
      marginX:[1,1,2,2,3,3],
      boxShadow: "0rem .5rem .2rem",
      '&:hover': {
        color: 'highlight'
      },
    },
    ContactButton: {
      breakpoints: [ '300px' ,'478px', '580px','767px', '991px', '1280px', '1440px', '1920px'],
      fontSize: ['16px',"20px","26px", "26px", "30px", "32px"],
      fontWeight: 'bold',
      color: 'secondary',
      bg: 'reallylight',
      marginX:[1,1,2,2,3,3],
      boxShadow: "0rem .5rem .2rem",
      '&:hover': {
        color: 'highlight'
      },
    },
  },
}

