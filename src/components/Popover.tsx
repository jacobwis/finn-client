import * as React from 'react';

interface Props {
  horizontalAlign?: 'left' | 'right';
  onRequestClose?: (e: React.MouseEvent<HTMLElement>) => void;
}

const Popover: React.StatelessComponent<Props> = ({
  children,
  horizontalAlign,
  onRequestClose
}) => {
  let classStr = 'Popover';

  if (horizontalAlign === 'left') classStr += ' Popover--align-left';
  if (horizontalAlign === 'right') classStr += ' Popover--align-right';

  return (
    <>
      {onRequestClose && <div className="Popover__click-listener" onClick={onRequestClose} />}
      <div className={classStr}>{children}</div>
    </>
  );
};

Popover.defaultProps = {
  horizontalAlign: 'right'
};

export default Popover;
