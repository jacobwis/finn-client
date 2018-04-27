import * as React from 'react';

interface Props {
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  style?: React.CSSProperties;
  theme?: 'primary';
  type?: 'solid' | 'outline' | 'text';
}

const Button: React.StatelessComponent<Props> = props => {
  const { children, className, onClick, style, theme, type } = props;

  let classStr = 'Button';
  if (className) classStr += ` ${className}`;

  if (theme === 'primary') classStr += ' Button--primary';

  if (type === 'outline') classStr += ' Button--outline';
  if (type === 'text') classStr += ' Button--text';
  if (type === 'solid') classStr += ' Button--solid';

  return (
    <button className={classStr} onClick={onClick} style={style}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  theme: 'primary',
  type: 'solid'
};

export default Button;
