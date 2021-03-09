import React, { useEffect, useState } from 'react';

export interface TitleProps {
  children: string;
  subtitle?: boolean;
  size?: number;
  spaced?: boolean;
}

const Title = (props: TitleProps): JSX.Element => {
  const [titleType, setTitleType] = useState('title');
  const [sizeString, setSizeString] = useState('3');
  const [isSpaced, setIsSpaced] = useState('');

  const { children, size, spaced, subtitle } = props;

  useEffect(() => {
    if (size && size <= 6) {
      setSizeString(size.toString());
    }
  }, [size]);

  useEffect(() => {
    if (subtitle) {
      setTitleType('subtitle');
    }

    if (size && size <= 6) {
      setSizeString(size.toString());
    } else {
      setSizeString('5');
    }
  }, [subtitle, size]);

  useEffect(() => {
    if (spaced) {
      setIsSpaced('is-spaced');
    }
  }, [spaced]);

  const titleClassName =
    isSpaced === 'is-spaced' ? `${titleType} is-${sizeString} ${isSpaced}` : `${titleType} is-${sizeString}`;

  return <p className={titleClassName}>{children}</p>;
};

export default Title;
