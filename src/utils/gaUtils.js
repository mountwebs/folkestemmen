import * as ReactGA from 'react-ga';

export default function initGA(id) {
  if (process.env.NODE_ENV === 'production') {
    console.log('GA init');
    ReactGA.initialize(id);
  }
}
