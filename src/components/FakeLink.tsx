/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { MouseEvent, ReactNode } from 'react';

interface Props {
    className?: string
    children?: ReactNode
}

const FakeLink = ({ children, className }: Props) => {
  const onClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
  };
  return (
    <a href="" onClick={onClick} className={className}>
      {children}
    </a>
  );
};

export default FakeLink;
