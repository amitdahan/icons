import * as React from 'react';
import { IconProps } from '../types';
import { IconWrapper } from '../IconWrapper';

export const GraphLine = (allProps: IconProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IconWrapper
      icon={
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <path
            d="M5.146 6.15a.5.5 0 01.708 0L7 7.297 9.146 5.15a.5.5 0 01.708 0l1 1a.5.5 0 01-.708.707L9.5 6.211 7.354 8.357a.5.5 0 01-.708 0L5.5 7.211 3.854 8.857a.5.5 0 11-.708-.707l2-2z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.5 1.004a.5.5 0 00-.5.5v11a.5.5 0 00.5.5h11a.5.5 0 00.5-.5v-11a.5.5 0 00-.5-.5h-11zm.5 1v10h10v-10H2z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  );
};

export default GraphLine;
