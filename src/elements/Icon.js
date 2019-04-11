import React, { Component } from 'react';

export const Icon = props => {
  const { size = 10 } = props;
  switch (props.name) {
    case 'close': {
      const { color } = props;
      return (
        <svg height={size} width={size} viewBox="0 0 47.971 47.971">
          <path
            fill={color}
            d="M28.228 23.986L47.092 5.122a2.998 2.998 0 0 0 0-4.242 2.998 2.998 0 0 0-4.242 0L23.986 19.744 5.121.88a2.998 2.998 0 0 0-4.242 0 2.998 2.998 0 0 0 0 4.242l18.865 18.864L.879 42.85a2.998 2.998 0 1 0 4.242 4.241l18.865-18.864L42.85 47.091c.586.586 1.354.879 2.121.879s1.535-.293 2.121-.879a2.998 2.998 0 0 0 0-4.242L28.228 23.986z"
          />
        </svg>
      );
    }
  }
};

export default Icon;
