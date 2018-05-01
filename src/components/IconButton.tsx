import * as React from 'react';
import Icon from './Icon';

interface Props {
  children: React.ReactElement<Icon>;
  dataTestID?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  theme?: 'primary' | 'secondary';
  type?: 'solid' | 'outline' | 'text';
}

class IconButton extends React.Component<Props> {
  public static defaultProps: Partial<Props> = {
    theme: 'primary',
    type: 'solid'
  };

  public static Icon = Icon;

  public render() {
    const { children, dataTestID, onClick, theme, type } = this.props;

    let buttonClass = 'IconButton';

    if (theme === 'primary') buttonClass += ' IconButton--primary';
    if (theme === 'secondary') buttonClass += ' IconButton--secondary';

    if (type === 'solid') buttonClass += ' IconButton--solid';
    if (type === 'outline') buttonClass += ' IconButton--outline';
    if (type === 'text') buttonClass += ' IconButton--text';

    return (
      <button className={buttonClass} onClick={onClick} data-test-id={dataTestID}>
        {children}
      </button>
    );
  }
}

export default IconButton;
