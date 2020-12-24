import { AriaAttributes, DOMAttributes } from 'react';

declare module 'react' {
  interface AnchorHTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    disabled?: boolean;
  }
}
