import React, { useEffect, useState } from 'react';

export interface TitleProps {
  children: string;
  size?: number;
  type?: string;
  spaced?: boolean;
}

const Title = (props: TitleProps): JSX.Element => {
  const [titleType, setTitleType] = useState('title');
  const [sizeString, setSizeString] = useState('3');
  const [isSpaced, setIsSpaced] = useState('');

  const { children, size, spaced, type } = props;

  useEffect(() => {
    if (size && size <= 6) {
      setSizeString(size.toString());
    }
  }, [size]);

  useEffect(() => {
    if (type) {
      if (type === 'title' || type === 'subtitle') {
        setTitleType(type);
      }
    }
  }, [type]);

  useEffect(() => {
    if (spaced) {
      setIsSpaced('is-spaced');
    }
  }, [spaced]);

  return <p className={`${titleType} is-${sizeString} ${isSpaced}`}>{children}</p>;
};

export default Title;
