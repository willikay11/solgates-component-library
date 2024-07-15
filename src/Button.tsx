import { ReactNode } from 'react';
import clsx from 'clsx';

export enum ButtonTypes {
  link = 'link',
  primary = 'primary',
  danger = 'danger',
  default = 'default',
  primary_blue_600 = 'primary-blue-600',
  primary_gray_800 = 'primary-gray-800',
  primary_orange_200 = 'primary-orange-200',
  text = 'text',
}

export interface ButtonProps {
  children: ReactNode;
  onClick?: (event: React.MouseEvent) => void;
  type?:
    | ButtonTypes.default
    | ButtonTypes.primary
    | ButtonTypes.danger
    | ButtonTypes.link
    | ButtonTypes.primary_blue_600
    | ButtonTypes.primary_gray_800
    | ButtonTypes.primary_orange_200
    | ButtonTypes.text;
  loading?: boolean;
  disabled?: boolean;
  ghost?: boolean;
  htmlType?: 'button' | 'submit' | 'reset';
  block?: boolean;
  prefixIcon?: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  name?: string;
  value?: string;
}

export const Button = ({
  children,
  type = ButtonTypes.default,
  loading = false,
  disabled = loading,
  htmlType = 'button',
  block = false,
  ghost = false,
  onClick,
  prefixIcon,
  className,
  style,
  name,
  value,
}: ButtonProps) => {
  const buttonClassName = clsx(
    'rounded w-auto border text-xs inline-flex items-center justify-center outline-0 disabled:opacity-50 h-[50px]',
    className,
    {
      'text-gray-800 border-gray-200 py-2.5 px-4': type === ButtonTypes.default,
      'bg-white text-blue-600 !p-0': type === ButtonTypes.link,
      'bg-white text-gray-800': type === ButtonTypes.text,
      'h-auto !p-0 bg-transparent border-0':
        type === ButtonTypes.link || type === ButtonTypes.text,
      'w-full': block,
      'bg-primary text-white border-primary py-2.5 px-4':
        type === ButtonTypes.primary && !ghost,
      'bg-white text-primary border border-primary py-2.5 px-4':
        type === ButtonTypes.primary && ghost,
      'bg-red-600 text-white border-red-600 py-2.5 px-4':
        type === ButtonTypes.danger && !ghost,
      'bg-white text-red-600 border border-red-600 py-2.5 px-4':
        type === ButtonTypes.danger && ghost,
      'bg-blue-600 py-2.5 px-4': type === ButtonTypes.link && !ghost,
      'bg-white text-blue-600 border border-blue-600 py-2.5 px-4':
        type === (ButtonTypes.primary_blue_600 || type === ButtonTypes.link) &&
        ghost,
      'bg-gray-800 text-white py-2.5 px-4':
        type === ButtonTypes.primary_gray_800 && !ghost,
      'bg-white text-gray-800 border border-gray-800 py-2.5 px-4':
        type === ButtonTypes.primary_gray_800 && ghost,
      'bg-orange-200 text-orange-600 py-2.5 px-4':
        type === ButtonTypes.primary_orange_200 && !ghost,
      'bg-white text-orange-200 border border-orange-200 py-2.5 px-4':
        type === ButtonTypes.primary_orange_200 && ghost,
      'cursor-not-allowed': loading || disabled,
      'cursor-pointer': !loading && !disabled,
    }
  );

  let content = children;

  if (loading) {
    content = (
      <div
        aria-label="Loading..."
        role="status"
        className="flex items-center justify-center space-x-2"
      >
        <svg className="h-5 w-5 animate-spin mr-2" viewBox="3 3 18 18">
          <path
            className="fill-gray-200"
            d="M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"
          ></path>
          <path
            className={`fill-primary`}
            d="M16.9497 7.05015C14.2161 4.31648 9.78392 4.31648 7.05025 7.05015C6.65973 7.44067 6.02656 7.44067 5.63604 7.05015C5.24551 6.65962 5.24551 6.02646 5.63604 5.63593C9.15076 2.12121 14.8492 2.12121 18.364 5.63593C18.7545 6.02646 18.7545 6.65962 18.364 7.05015C17.9734 7.44067 17.3403 7.44067 16.9497 7.05015Z"
          ></path>
        </svg>
        {children}
      </div>
    );
  }

  return (
    <button
      type={htmlType}
      disabled={disabled || loading}
      onClick={(event) => onClick?.(event)}
      style={{ ...style }}
      name={name}
      value={value}
      className={buttonClassName}
    >
      {prefixIcon && <div className="mr-2">{prefixIcon}</div>}
      {content}
    </button>
  );
};
