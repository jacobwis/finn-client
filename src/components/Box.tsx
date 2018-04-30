import * as React from 'react';

type DisplayValue = 'none' | 'flex' | 'inline-flex' | 'block' | 'inline-block';

interface Props {
  display?: DisplayValue;
  xsDisplay?: DisplayValue;
  smDisplay?: DisplayValue;
  mdDisplay?: DisplayValue;
  lgDisplay?: DisplayValue;
  xlDisplay?: DisplayValue;
  justifyContent?: 'start' | 'end' | 'center' | 'between' | 'around';
}

const addDisplayClass = (value: string, prefix?: string) => {
  let displayClass = 'display';

  if (prefix) displayClass += `-${prefix}`;

  displayClass += `-${value}`;

  return displayClass;
};

const Box: React.StatelessComponent<Props> = props => {
  const { children, display, xsDisplay, smDisplay, mdDisplay, lgDisplay, xlDisplay } = props;

  let classStr = '';

  if (display) classStr += ` ${addDisplayClass(display)}`;
  if (xsDisplay) classStr += ` ${addDisplayClass(xsDisplay, 'xs')}`;
  if (smDisplay) classStr += ` ${addDisplayClass(smDisplay, 'sm')}`;
  if (mdDisplay) classStr += ` ${addDisplayClass(mdDisplay, 'md')}`;
  if (lgDisplay) classStr += ` ${addDisplayClass(lgDisplay, 'lg')}`;
  if (xlDisplay) classStr += ` ${addDisplayClass(xlDisplay, 'xl')}`;

  return <div className={classStr}>{children}</div>;
};

export default Box;
