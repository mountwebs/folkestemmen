import React from 'react';
import styled from 'styled-components';

const Svg = styled.svg.attrs({
  version: '1.1',
  xmlns: 'http://www.w3.org/2000/svg',
  xmlnsXlink: 'http://www.w3.org/1999/xlink',
})``;

const Rectangle3 = ({ className }) => (
  <Svg
    width="72"
    height="95"
    viewBox="0 0 72 95"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M73.8074 11.5179C77.914 12.2376 81.3097 15.1231 82.6826 19.0597L103.694 79.3053C106.583 87.5908 99.504 95.9304 90.8592 94.4246L35.0565 84.7046C31.1799 84.0294 27.9175 81.4193 26.4081 77.7854L1.04086 16.7172C-2.44181 8.33312 4.70617 -0.591799 13.6485 0.975316L73.8074 11.5179Z"
      fill="#FFE074"
    />
  </Svg>
);

export default Rectangle3;
