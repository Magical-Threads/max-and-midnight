/* eslint-disable @typescript-eslint/no-namespace */


import * as React from 'react';

declare module 'react' {
  // We still need to use `namespace JSX` here because that's how React typings are declared
  namespace JSX {
    interface IntrinsicElements {
      'stripe-buy-button': React.HTMLAttributes<HTMLElement> & {
        'buy-button-id': string;
        'publishable-key': string;
      };
    }
  }
}
