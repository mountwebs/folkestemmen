import * as ReactGA from 'react-ga';

export default function initGA(id) {
  console.log('test');
  if (process.env.NODE_ENV === 'production') {
    ReactGA.initialize(id);
  }
}
