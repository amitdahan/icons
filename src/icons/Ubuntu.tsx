import * as React from 'react';
import { IconProps } from '../types';
import { IconWrapper } from '../IconWrapper';

export const Ubuntu = (allProps: IconProps) => {
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
          <g clipPath="url(#prefix__clip0_1107_3497)" fill="currentColor">
            <path d="M12.261 2.067c0 1.142-.89 2.068-1.988 2.068-1.099 0-1.99-.926-1.99-2.068C8.283.926 9.174 0 10.273 0c1.098 0 1.989.926 1.989 2.067zM3.978 6.6c0 1.142-.89 2.068-1.989 2.068C.891 8.668 0 7.742 0 6.601c0-1.142.89-2.068 1.989-2.068 1.099 0 1.989.926 1.989 2.068zM6.475 11.921A4.761 4.761 0 014.539 11a4.993 4.993 0 01-1.367-1.696 2.765 2.765 0 01-1.701.217 6.725 6.725 0 001.844 2.635 6.379 6.379 0 004.23 1.577 3.033 3.033 0 01-.582-1.728 4.767 4.767 0 01-.488-.083zM11.813 11.933c0 1.141-.89 2.067-1.989 2.067-1.098 0-1.989-.926-1.989-2.067 0-1.142.891-2.068 1.99-2.068 1.098 0 1.989.926 1.989 2.068zM12.592 11.173a6.926 6.926 0 001.402-3.913 6.964 6.964 0 00-1.076-4.023A2.952 2.952 0 0111.8 4.6c.398.78.592 1.656.564 2.539a5.213 5.213 0 01-.724 2.495c.466.396.8.935.952 1.54zM1.987 3.631c-.05 0-.101.002-.151.004C3.073 1.365 5.504.024 8.005.23a3.07 3.07 0 00-.603 1.676 4.707 4.707 0 00-2.206.596 4.919 4.919 0 00-1.7 1.576 2.79 2.79 0 00-1.509-.447z" />
          </g>
          <defs>
            <clipPath id="prefix__clip0_1107_3497">
              <path fill="#fff" d="M0 0h14v14H0z" />
            </clipPath>
          </defs>
        </svg>
      }
      {...restProps}
    />
  );
};

export default Ubuntu;
