import * as React from 'react';

interface Props {
  className?: string;
  dataTestID?: string;
  fullWidth?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  style?: React.CSSProperties;
  theme?: 'primary';
  type?: 'solid' | 'outline' | 'text';
}

const Button: React.StatelessComponent<Props> = props => {
  const { children, className, dataTestID, fullWidth, onClick, style, theme, type } = props;

  let classStr = 'Button';

  if (className) classStr += ` ${className}`;

  if (fullWidth) classStr += ' Button--full-width';

  if (theme === 'primary') classStr += ' Button--primary';

  if (type === 'outline') classStr += ' Button--outline';
  if (type === 'text') classStr += ' Button--text';
  if (type === 'solid') classStr += ' Button--solid';

  return (
    <button className={classStr} data-test-id={dataTestID} onClick={onClick} style={style}>
      <span>{children}</span>
    </button>
  );
};

Button.defaultProps = {
  theme: 'primary',
  type: 'solid'
};

export default Button;
