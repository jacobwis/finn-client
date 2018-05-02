import * as React from 'react';

interface Props {
  tag?: string;
}

const Heading: React.StatelessComponent<Props> = ({ children, tag }) => {
  const El = tag;
  return <El className="Heading">{children}</El>;
};

Heading.defaultProps = {
  tag: 'h1'
};

export default Heading;
