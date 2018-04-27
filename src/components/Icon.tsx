import * as React from 'react';

interface Props {
  animate?: 'spin' | 'pulse';
  fixedWidth?: boolean;
  icon: string;
  prefix?: 'regular' | 'solid' | 'light' | 'brands';
}

class Icon extends React.Component<Props> {
  public render() {
    const { animate, fixedWidth, icon, prefix } = this.props;

    let classStr = '';

    if (prefix === 'regular') classStr += 'far';
    if (prefix === 'solid') classStr += 'fas';
    if (prefix === 'light') classStr += 'fal';
    if (prefix === 'brands') classStr += 'fab';

    if (animate === 'spin') classStr += ' fa-spin';
    if (animate === 'pulse') classStr += ' fa-pulse';

    if (fixedWidth) classStr += ' fa-fw';

    classStr += ` fa-${icon}`;

    return <i className={classStr} />;
  }
}

// @ts-ignore
Icon.defaultProps = {
  prefix: 'regular'
};

export default Icon;
