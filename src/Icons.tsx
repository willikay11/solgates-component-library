import React from 'react';

interface IconProps {
  color?: string;
  size?: number;
  className?: string;
  onClick?: () => void;
}

const Heart3Line = ({
  color = 'currentColor',
  size = 14,
  className,
  onClick,
}: IconProps) => (
  <svg
    className={className}
    onClick={() => onClick}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
  >
    <path fill="none" d="M0 0H24V24H0z" />
    <path
      fill={color}
      d="M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2zm-3.566 15.604c.881-.556 1.676-1.109 2.42-1.701C18.335 14.533 20 11.943 20 9c0-2.36-1.537-4-3.5-4-1.076 0-2.24.57-3.086 1.414L12 7.828l-1.414-1.414C9.74 5.57 8.576 5 7.5 5 5.56 5 4 6.656 4 9c0 2.944 1.666 5.533 4.645 7.903.745.592 1.54 1.145 2.421 1.7.299.189.595.37.934.572.339-.202.635-.383.934-.571z"
    />
  </svg>
);

const Heart3LineFill = ({
  color = 'currentColor',
  size = 14,
  className,
  onClick,
}: IconProps) => (
  <svg
    className={className}
    onClick={() => onClick}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
  >
    <path fill="none" d="M0 0H24V24H0z" />
    <path
      fill={color}
      d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228z"
    />
  </svg>
);

const Menu4Line = ({
  color = 'currentColor',
                     size = 14,
  className,
  onClick,
}: IconProps) => (
  <svg
    className={className}
    onClick={() => onClick?.()}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path fill={color} d="M16 18v2H5v-2h11zm5-7v2H3v-2h18zm-2-7v2H8V4h11z" />
  </svg>
);

const Search2Line = ({
  color = 'currentColor',
                       size = 14,
  className,
  onClick,
}: IconProps) => (
  <svg
    className={className}
    onClick={() => onClick?.()}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill={color}
      d="M11 2c4.968 0 9 4.032 9 9s-4.032 9-9 9-9-4.032-9-9 4.032-9 9-9zm0 16c3.867 0 7-3.133 7-7 0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7zm8.485.071l2.829 2.828-1.415 1.415-2.828-2.829 1.414-1.414z"
    />
  </svg>
);

const ShoppingBagLine = ({
  color = 'currentColor',
                           size = 14,
  className,
  onClick,
}: IconProps) => (
  <svg
    className={className}
    onClick={() => onClick?.()}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill={color}
      d="M7 8V6a5 5 0 1 1 10 0v2h3a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h3zm0 2H5v10h14V10h-2v2h-2v-2H9v2H7v-2zm2-2h6V6a3 3 0 0 0-6 0v2z"
    />
  </svg>
);

const User6Line = ({
  color = 'currentColor',
                     size = 14,
  className,
  onClick,
}: IconProps) => (
  <svg
    className={className}
    onClick={() => onClick?.()}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill={color}
      d="M12 17c3.662 0 6.865 1.575 8.607 3.925l-1.842.871C17.347 20.116 14.847 19 12 19c-2.847 0-5.347 1.116-6.765 2.796l-1.841-.872C5.136 18.574 8.338 17 12 17zm0-15a5 5 0 0 1 5 5v3a5 5 0 0 1-4.783 4.995L12 15a5 5 0 0 1-5-5V7a5 5 0 0 1 4.783-4.995L12 2zm0 2a3 3 0 0 0-2.995 2.824L9 7v3a3 3 0 0 0 5.995.176L15 10V7a3 3 0 0 0-3-3z"
    />
  </svg>
);

const AccountCircle = ({
  color = 'currentColor',
                         size = 14,
  className,
  onClick,
}: IconProps) => (
  <svg
    className={className}
    onClick={() => onClick?.()}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
  >
    <path
      fill={color}
      d="M12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM6.02332 15.4163C7.49083 17.6069 9.69511 19 12.1597 19C14.6243 19 16.8286 17.6069 18.2961 15.4163C16.6885 13.9172 14.5312 13 12.1597 13C9.78821 13 7.63095 13.9172 6.02332 15.4163ZM12 11C13.6569 11 15 9.65685 15 8C15 6.34315 13.6569 5 12 5C10.3431 5 9 6.34315 9 8C9 9.65685 10.3431 11 12 11Z"
    />
  </svg>
);

const ArrowLeftLine = ({
  color = 'currentColor',
                         size = 14,
  className,
  onClick,
}: IconProps) => (
  <svg
    className={className}
    onClick={() => onClick?.()}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill={color}
      d="M7.828 11H20v2H7.828l5.364 5.364-1.414 1.414L4 12l7.778-7.778 1.414 1.414z"
    />
  </svg>
);

const ArrowRightLine = ({
  color = 'currentColor',
                          size = 14,
  className,
  onClick,
}: IconProps) => (
  <svg
    className={className}
    onClick={() => onClick?.()}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill={color}
      d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
    />
  </svg>
);

const ArrowLeftRightLine = ({
  color = 'currentColor',
                              size = 14,
  className,
  onClick,
}: IconProps) => (
  <svg
    className={className}
    onClick={() => onClick?.()}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
  >
    <path
      fill={color}
      d="M16.0503 12.0498L21 16.9996L16.0503 21.9493L14.636 20.5351L17.172 17.9988L4 17.9996V15.9996L17.172 15.9988L14.636 13.464L16.0503 12.0498ZM7.94975 2.0498L9.36396 3.46402L6.828 5.9988L20 5.99955V7.99955L6.828 7.9988L9.36396 10.5351L7.94975 11.9493L3 6.99955L7.94975 2.0498Z"
    ></path>
  </svg>
);

const ArrowLeftSLine = ({
  color = 'currentColor',
                          size = 14,
  className,
  onClick,
}: IconProps) => (
  <svg
    className={className}
    onClick={() => onClick?.()}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill={color}
      d="M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z"
    />
  </svg>
);

const ArrowRightSLine = ({
  color = 'currentColor',
                           size = 14,
  className,
  onClick,
}: IconProps) => (
  <svg
    className={className}
    onClick={() => onClick?.()}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill={color}
      d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"
    />
  </svg>
);

const Shop2Line = ({
  color = 'currentColor',
                     size = 14,
  className,
  onClick,
}: IconProps) => (
  <svg
    className={className}
    onClick={() => onClick?.()}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill={color}
      d="M21 13.242V20h1v2H2v-2h1v-6.758A4.496 4.496 0 0 1 1 9.5c0-.827.224-1.624.633-2.303L4.345 2.5a1 1 0 0 1 .866-.5H18.79a1 1 0 0 1 .866.5l2.702 4.682A4.496 4.496 0 0 1 21 13.242zm-2 .73a4.496 4.496 0 0 1-3.75-1.36A4.496 4.496 0 0 1 12 14.001a4.496 4.496 0 0 1-3.25-1.387A4.496 4.496 0 0 1 5 13.973V20h14v-6.027zM5.789 4L3.356 8.213a2.5 2.5 0 0 0 4.466 2.216c.335-.837 1.52-.837 1.856 0a2.5 2.5 0 0 0 4.644 0c.335-.837 1.52-.837 1.856 0a2.5 2.5 0 1 0 4.457-2.232L18.21 4H5.79z"
    />
  </svg>
);

const QuestionLine = ({
  color = 'currentColor',
                        size = 14,
  className,
  onClick,
}: IconProps) => (
  <svg
    className={className}
    onClick={() => onClick?.()}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill={color}
      d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-1-5h2v2h-2v-2zm2-1.645V14h-2v-1.5a1 1 0 0 1 1-1 1.5 1.5 0 1 0-1.471-1.794l-1.962-.393A3.501 3.501 0 1 1 13 13.355z"
    />
  </svg>
);

const PhoneLine = ({
  color = 'currentColor',
                     size = 14,
  className,
  onClick,
}: IconProps) => (
  <svg
    className={className}
    onClick={() => onClick?.()}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill={color}
      d="M9.366 10.682a10.556 10.556 0 0 0 3.952 3.952l.884-1.238a1 1 0 0 1 1.294-.296 11.422 11.422 0 0 0 4.583 1.364 1 1 0 0 1 .921.997v4.462a1 1 0 0 1-.898.995c-.53.055-1.064.082-1.602.082C9.94 21 3 14.06 3 5.5c0-.538.027-1.072.082-1.602A1 1 0 0 1 4.077 3h4.462a1 1 0 0 1 .997.921A11.422 11.422 0 0 0 10.9 8.504a1 1 0 0 1-.296 1.294l-1.238.884zm-2.522-.657l1.9-1.357A13.41 13.41 0 0 1 7.647 5H5.01c-.006.166-.009.333-.009.5C5 12.956 11.044 19 18.5 19c.167 0 .334-.003.5-.01v-2.637a13.41 13.41 0 0 1-3.668-1.097l-1.357 1.9a12.442 12.442 0 0 1-1.588-.75l-.058-.033a12.556 12.556 0 0 1-4.702-4.702l-.033-.058a12.442 12.442 0 0 1-.75-1.588z"
    />
  </svg>
);

const AddLine = ({
  color = 'currentColor',
  size = 14,
  className,
  onClick,
}: IconProps) => (
  <svg
    className={className}
    onClick={() => onClick?.()}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path fill={color} d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z" />
  </svg>
);

const Minus = ({
  color = 'currentColor',
  size = 14,
  className,
  onClick,
}: IconProps) => (
  <svg
    className={className}
    onClick={() => onClick?.()}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path fill={color} d="M5 11h14v2H5z" />
  </svg>
);

const ArrowDownSLine = ({
  color = 'currentColor',
  size = 14,
  className,
  onClick,
}: IconProps) => (
  <svg
    className={className}
    onClick={() => onClick?.()}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill={color}
      d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"
    />
  </svg>
);

const ArrowUpSLine = ({
  color = 'currentColor',
  size = 14,
  className,
  onClick,
}: IconProps) => (
  <svg
    className={className}
    width={size}
    height={size}
    onClick={() => onClick?.()}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill={color}
  >
    <path d="M11.9999 10.8284L7.0502 15.7782L5.63599 14.364L11.9999 8L18.3639 14.364L16.9497 15.7782L11.9999 10.8284Z"></path>
  </svg>
);

const Checkline = ({
  color = 'currentColor',
  size = 14,
  className,
  onClick,
}: IconProps) => (
  <svg
    className={className}
    onClick={() => onClick?.()}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill={color}
      d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
    />
  </svg>
);

const FileUpload = ({
  color = 'currentColor',
  size = 14,
  className,
  onClick,
}: IconProps) => (
  <svg
    className={className}
    onClick={() => onClick?.()}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill={color}
      d="M4.828 21l-.02.02-.021-.02H2.992A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H4.828zM20 15V5H4v14L14 9l6 6zm0 2.828l-6-6L6.828 19H20v-1.172zM8 11a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
    />
  </svg>
);

const AddCircle = ({
  color = 'currentColor',
  size = 14,
  className,
  onClick,
}: IconProps) => (
  <svg
    className={className}
    onClick={() => onClick?.()}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill={color}
      d="M11 11V7h2v4h4v2h-4v4h-2v-4H7v-2h4zm1 11C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z"
    />
  </svg>
);

const CloseLine = ({
  color = 'currentColor',
  size = 14,
  className,
  onClick,
}: IconProps) => (
  <svg
    className={className}
    onClick={() => onClick?.()}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill={color}
      d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"
    />
  </svg>
);

const GiftLine = ({
  color = 'currentColor',
  size = 14,
  className,
  onClick,
}: IconProps) => (
  <svg
    className={className}
    onClick={() => onClick?.()}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
  >
    <path
      fill={color}
      d="M14.5049 2.00293C16.4379 2.00293 18.0049 3.56993 18.0049 5.50293C18.0049 6.04014 17.8839 6.54908 17.6676 7.00397L21.0049 7.00293C21.5572 7.00293 22.0049 7.45064 22.0049 8.00293V12.0029C22.0049 12.5552 21.5572 13.0029 21.0049 13.0029H20.0049V21.0029C20.0049 21.5552 19.5572 22.0029 19.0049 22.0029H5.00488C4.4526 22.0029 4.00488 21.5552 4.00488 21.0029V13.0029H3.00488C2.4526 13.0029 2.00488 12.5552 2.00488 12.0029V8.00293C2.00488 7.45064 2.4526 7.00293 3.00488 7.00293L6.34219 7.00397C6.12591 6.54908 6.00488 6.04014 6.00488 5.50293C6.00488 3.56993 7.57189 2.00293 9.50488 2.00293C10.4849 2.00293 11.3708 2.40569 12.0061 3.05471C12.639 2.40569 13.5249 2.00293 14.5049 2.00293ZM18.0049 13.0029H6.00488V20.0029H18.0049V13.0029ZM20.0049 9.00293H4.00488V11.0029H20.0049V9.00293ZM9.50488 4.00293C8.67646 4.00293 8.00488 4.6745 8.00488 5.50293C8.00488 6.28263 8.59977 6.92338 9.36042 6.99606L9.50488 7.00293H11.0049V5.50293C11.0049 4.72323 10.41 4.08248 9.64934 4.0098L9.50488 4.00293ZM14.5049 4.00293L14.3604 4.0098C13.6473 4.07794 13.0799 4.64536 13.0117 5.35847L13.0049 5.50293V7.00293H14.5049L14.6493 6.99606C15.41 6.92338 16.0049 6.28263 16.0049 5.50293C16.0049 4.72323 15.41 4.08248 14.6493 4.0098L14.5049 4.00293Z"
    ></path>
  </svg>
);

const Information = ({
  color = 'currentColor',
  size = 14,
  className,
  onClick,
}: IconProps) => (
  <svg
    className={className}
    onClick={() => onClick?.()}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
  >
    <path
      fill={color}
      d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11 7H13V9H11V7ZM11 11H13V17H11V11Z"
    ></path>
  </svg>
);

const Error = ({
  color = 'currentColor',
  size = 14,
  className,
  onClick,
}: IconProps) => (
  <svg
    className={className}
    onClick={() => onClick?.()}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
  >
    <path
      fill={color}
      d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11 15H13V17H11V15ZM11 7H13V13H11V7Z"
    ></path>
  </svg>
);

const CheckDoubleLine = ({
  color = 'currentColor',
  size = 14,
  className,
  onClick,
}: IconProps) => (
  <svg
    className={className}
    onClick={() => onClick?.()}
    width={size}
    height={size}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
  >
    <path
      fill={color}
      d="M11.602 13.7599L13.014 15.1719L21.4795 6.7063L22.8938 8.12051L13.014 18.0003L6.65 11.6363L8.06421 10.2221L10.189 12.3469L11.6025 13.7594L11.602 13.7599ZM11.6037 10.9322L16.5563 5.97949L17.9666 7.38977L13.014 12.3424L11.6037 10.9322ZM8.77698 16.5873L7.36396 18.0003L1 11.6363L2.41421 10.2221L3.82723 11.6352L3.82604 11.6363L8.77698 16.5873Z"
    ></path>
  </svg>
);

const DeleteBin5Line = ({
  color = 'currentColor',
  size = 14,
  className,
  onClick,
}: IconProps) => (
  <svg
    className={className}
    onClick={() => onClick}
    width={size}
    height={size}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
  >
    <path
      fill={color}
      d="M4 8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8ZM6 10V20H18V10H6ZM9 12H11V18H9V12ZM13 12H15V18H13V12ZM7 5V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V5H22V7H2V5H7ZM9 4V5H15V4H9Z"
    ></path>
  </svg>
);

const CheckboxBlankCircleFill = ({
  color = 'currentColor',
  size = 14,
  className,
  onClick,
}: IconProps) => (
  <svg
    className={className}
    onClick={() => onClick?.()}
    width={size}
    height={size}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
  >
    <path
      fill={color}
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
    ></path>
  </svg>
);

const CheckLine = ({
  color = 'currentColor',
  size = 14,
  className,
  onClick,
}: IconProps) => (
  <svg
    className={className}
    onClick={() => onClick?.()}
    width={size}
    height={size}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
  >
    <path
      fill={color}
      d="M10.0007 15.1709L19.1931 5.97852L20.6073 7.39273L10.0007 17.9993L3.63672 11.6354L5.05093 10.2212L10.0007 15.1709Z"
    ></path>
  </svg>
);

const EyeLine = ({
  color = 'currentColor',
  size = 14,
  className,
  onClick,
}: IconProps) => (
  <svg
    className={className}
    onClick={() => onClick?.()}
    width={size}
    height={size}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
  >
    <path
      fill={color}
      d="M12.0003 3C17.3924 3 21.8784 6.87976 22.8189 12C21.8784 17.1202 17.3924 21 12.0003 21C6.60812 21 2.12215 17.1202 1.18164 12C2.12215 6.87976 6.60812 3 12.0003 3ZM12.0003 19C16.2359 19 19.8603 16.052 20.7777 12C19.8603 7.94803 16.2359 5 12.0003 5C7.7646 5 4.14022 7.94803 3.22278 12C4.14022 16.052 7.7646 19 12.0003 19ZM12.0003 16.5C9.51498 16.5 7.50026 14.4853 7.50026 12C7.50026 9.51472 9.51498 7.5 12.0003 7.5C14.4855 7.5 16.5003 9.51472 16.5003 12C16.5003 14.4853 14.4855 16.5 12.0003 16.5ZM12.0003 14.5C13.381 14.5 14.5003 13.3807 14.5003 12C14.5003 10.6193 13.381 9.5 12.0003 9.5C10.6196 9.5 9.50026 10.6193 9.50026 12C9.50026 13.3807 10.6196 14.5 12.0003 14.5Z"
    ></path>
  </svg>
);

const EyeCloseLine = ({
  color = 'currentColor',
  size = 14,
  className,
  onClick,
}: IconProps) => (
  <svg
    className={className}
    onClick={() => onClick?.()}
    width={size}
    height={size}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
  >
    <path
      fill={color}
      d="M17.8827 19.2968C16.1814 20.3755 14.1638 21.0002 12.0003 21.0002C6.60812 21.0002 2.12215 17.1204 1.18164 12.0002C1.61832 9.62282 2.81932 7.5129 4.52047 5.93457L1.39366 2.80777L2.80788 1.39355L22.6069 21.1925L21.1927 22.6068L17.8827 19.2968ZM5.9356 7.3497C4.60673 8.56015 3.6378 10.1672 3.22278 12.0002C4.14022 16.0521 7.7646 19.0002 12.0003 19.0002C13.5997 19.0002 15.112 18.5798 16.4243 17.8384L14.396 15.8101C13.7023 16.2472 12.8808 16.5002 12.0003 16.5002C9.51498 16.5002 7.50026 14.4854 7.50026 12.0002C7.50026 11.1196 7.75317 10.2981 8.19031 9.60442L5.9356 7.3497ZM12.9139 14.328L9.67246 11.0866C9.5613 11.3696 9.50026 11.6777 9.50026 12.0002C9.50026 13.3809 10.6196 14.5002 12.0003 14.5002C12.3227 14.5002 12.6309 14.4391 12.9139 14.328ZM20.8068 16.5925L19.376 15.1617C20.0319 14.2268 20.5154 13.1586 20.7777 12.0002C19.8603 7.94818 16.2359 5.00016 12.0003 5.00016C11.1544 5.00016 10.3329 5.11773 9.55249 5.33818L7.97446 3.76015C9.22127 3.26959 10.5793 3.00016 12.0003 3.00016C17.3924 3.00016 21.8784 6.87992 22.8189 12.0002C22.5067 13.6998 21.8038 15.2628 20.8068 16.5925ZM11.7229 7.50857C11.8146 7.50299 11.9071 7.50016 12.0003 7.50016C14.4855 7.50016 16.5003 9.51488 16.5003 12.0002C16.5003 12.0933 16.4974 12.1858 16.4919 12.2775L11.7229 7.50857Z"
    ></path>{' '}
  </svg>
);
const Database = ({
  color = 'currentColor',
  size = 14,
  className,
  onClick,
}: IconProps) => (
  <svg
    className={className}
    onClick={() => onClick?.()}
    width={size}
    height={size}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill={color}
  >
    <path d="M11 19V9H4V19H11ZM11 7V4C11 3.44772 11.4477 3 12 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V8C2 7.44772 2.44772 7 3 7H11ZM13 5V19H20V5H13ZM5 16H10V18H5V16ZM14 16H19V18H14V16ZM14 13H19V15H14V13ZM14 10H19V12H14V10ZM5 13H10V15H5V13Z"></path>
  </svg>
);

export {
  Heart3Line,
  Heart3LineFill,
  Menu4Line,
  Search2Line,
  ShoppingBagLine,
  User6Line,
  AccountCircle,
  ArrowLeftLine,
  ArrowRightLine,
  ArrowLeftSLine,
  ArrowRightSLine,
  Shop2Line,
  QuestionLine,
  PhoneLine,
  AddLine,
  Minus,
  ArrowDownSLine,
  Checkline,
  FileUpload,
  AddCircle,
  CloseLine,
  GiftLine,
  CheckDoubleLine,
  Information,
  Error,
  DeleteBin5Line,
  CheckboxBlankCircleFill,
  CheckLine,
  EyeLine,
  EyeCloseLine,
  ArrowLeftRightLine,
  ArrowUpSLine,
  Database,
};
