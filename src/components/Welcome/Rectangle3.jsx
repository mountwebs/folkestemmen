import React from 'react';
import styled from 'styled-components';

const Svg = styled.svg.attrs({
  version: '1.1',
  xmlns: 'http://www.w3.org/2000/svg',
  xmlnsXlink: 'http://www.w3.org/1999/xlink',
})``;

const Rectangle3 = ({ className }) => (
  <Svg
    width="182"
    height="164"
    viewBox="0 0 182 164"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M128.509 19.1542C135.65 20.4055 141.554 25.4228 143.942 32.2679L180.476 137.023C185.5 151.43 173.191 165.931 158.159 163.312L61.1294 146.411C54.3888 145.237 48.7162 140.699 46.0915 134.38L1.98305 28.1947C-4.07261 13.6164 8.35628 -1.90223 23.9053 0.822674L128.509 19.1542Z"
      fill="currentColor"
    />
  </Svg>
);

export default Rectangle3;
