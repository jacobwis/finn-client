import * as React from 'react';
import Icon from './Icon';

interface Props {
  className?: string;
  iconLeft?: () => React.ReactElement<Icon>;
  iconRight?: () => React.ReactElement<Icon>;
  name?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: 'date' | 'email' | 'number' | 'password' | 'text' | 'url';
  value?: string;
}

const Input: React.StatelessComponent<Props> = props => {
  const { className, iconLeft, iconRight, name, onChange, placeholder, type, value } = props;

  let classStr = 'Input';

  if (className) classStr += ` ${className}`;

  if (iconLeft) classStr += ' Input--with-icon-left';
  if (iconRight) classStr += ' Input--with-icon-right';

  return (
    <span className="Input__wrapper">
      {iconLeft && <span className="Input__icon-left">{iconLeft()}</span>}
      <input
        className={classStr}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        value={value}
      />
      {iconRight && <span className="Input__icon-right">{iconRight()}</span>}
    </span>
  );
};

Input.defaultProps = {
  type: 'text'
};

export default Input;
