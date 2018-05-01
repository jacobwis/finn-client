import * as React from 'react';

interface Props {
  dataTestID?: string;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const Overlay: React.StatelessComponent<Props> = ({ dataTestID, onClick }) => (
  <div className="Overlay" data-test-id={dataTestID} onClick={onClick} />
);

export default Overlay;
