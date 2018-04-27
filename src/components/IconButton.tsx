import * as React from 'react';

interface Props {
  icon: string;
  prefix?: 'solid' | 'regular' | 'light' | 'brands';
  theme?: 'primary' | 'secondary';
  type?: 'solid' | 'outline' | 'text';
}

const IconButton: React.StatelessComponent<Props> = props => {
  const { icon, prefix, theme, type } = props;

  let iconClass = 'fa-fw ';

  if (prefix === 'solid') iconClass += 'fas';
  if (prefix === 'regular') iconClass += 'far';
  if (prefix === 'light') iconClass += 'fal';
  if (prefix === 'brands') iconClass += 'fab';

  if (icon) iconClass += ` fa-${icon}`;

  let buttonClass = 'IconButton';

  if (theme === 'primary') buttonClass += ' IconButton--primary';
  if (theme === 'secondary') buttonClass += ' IconButton--secondary';

  if (type === 'solid') buttonClass += ' IconButton--solid';
  if (type === 'outline') buttonClass += ' IconButton--outline';
  if (type === 'text') buttonClass += ' IconButton--text';

  return (
    <button className={buttonClass}>
      <i className={iconClass} />
    </button>
  );
};

IconButton.defaultProps = {
  prefix: 'regular',
  theme: 'primary',
  type: 'solid'
};

export default IconButton;
