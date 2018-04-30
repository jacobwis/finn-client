import * as React from 'react';
import Icon from './Icon';

interface Props {
  className?: string;
  fullWidth?: boolean;
  iconLeft?: () => React.ReactElement<Icon>;
  iconRight?: () => React.ReactElement<Icon>;
  name?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: 'date' | 'email' | 'number' | 'password' | 'text' | 'url';
  value?: string;
}

const Input: React.StatelessComponent<Props> = props => {
  const {
    className,
    fullWidth,
    iconLeft,
    iconRight,
    name,
    onChange,
    placeholder,
    type,
    value
  } = props;

  let classStr = 'Input';

  if (className) classStr += ` ${className}`;

  if (iconLeft) classStr += ' Input--with-icon-left';
  if (iconRight) classStr += ' Input--with-icon-right';

  let wrapperClassStr = 'Input__wrapper';

  if (fullWidth) wrapperClassStr += ' Input__wrapper--full-width';

  return (
    <span className={wrapperClassStr}>
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
