import * as React from 'react';

interface Props {
  className?: string;
  name?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: 'date' | 'email' | 'number' | 'password' | 'text' | 'url';
  value?: string;
}

const Input: React.StatelessComponent<Props> = props => {
  const { className, name, onChange, placeholder, type, value } = props;

  let classStr = 'Input';

  if (className) classStr += ` ${className}`;

  return (
    <span>
      <input
        className={classStr}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        value={value}
      />
    </span>
  );
};

Input.defaultProps = {
  type: 'text'
};

export default Input;
