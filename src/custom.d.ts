declare module 'react-router-hash-link' {
  import * as React from 'react';
  import { NavLinkProps } from 'react-router-dom';

  export interface HashLinkProps extends NavLinkProps {
    smooth?: boolean;
    scroll?: (el: Element) => void;
  }

  export const HashLink: React.FC<HashLinkProps>;
}
