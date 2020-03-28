import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import { css } from 'glamor';

export const alertOptions = {
  position: positions.TOP_CENTER,
  timeout: 3000,
  offset: '30px',
  transition: transitions.SCALE
}

export const customModalStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

export const pageLink = css({
  margin: '2px',
  display: 'inline-block',
  padding: '2px',
  WebkitBorderRadius: '20px',
  MozBorderRadius: '20px',
  borderRadius: '20px'
})

export const currentLink = css({
  backgroundColor: 'lightblue',
  display: 'inline-block',
  color: '#FFFFFF',
  'a:link': { color: '#FFFFFF' },
  'a:visited': { color: '#FFFFFF' },
  'a:active': { color: '#FFFFFF' }
})
