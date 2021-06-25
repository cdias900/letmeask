import { FC, ButtonHTMLAttributes } from 'react';

import '../styles/button.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = (props) => (
  <button className="button" {...props} />
);

export default Button;
