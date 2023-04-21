import React from "react";

interface IconProps {
    color?: string,
    size?: number,
    className?: string

}

const Heart3Line = ({ color = 'currentColor', size = 14, className }: IconProps) =>
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size}>
        <path fill="none" d="M0 0H24V24H0z"/>
        <path fill={color} d="M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2zm-3.566 15.604c.881-.556 1.676-1.109 2.42-1.701C18.335 14.533 20 11.943 20 9c0-2.36-1.537-4-3.5-4-1.076 0-2.24.57-3.086 1.414L12 7.828l-1.414-1.414C9.74 5.57 8.576 5 7.5 5 5.56 5 4 6.656 4 9c0 2.944 1.666 5.533 4.645 7.903.745.592 1.54 1.145 2.421 1.7.299.189.595.37.934.572.339-.202.635-.383.934-.571z"/>
    </svg>

const Heart3LineFill = ({ color = 'currentColor', size = 14, className }: IconProps) =>
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size}>
        <path fill="none" d="M0 0H24V24H0z"/>
        <path fill={color} d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228z"/>
    </svg>

const Menu4Line = ({ color = 'currentColor', size, className }: IconProps) =>
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size}>
        <path fill="none" d="M0 0h24v24H0z"/>
        <path fill={color} d="M16 18v2H5v-2h11zm5-7v2H3v-2h18zm-2-7v2H8V4h11z"/>
    </svg>

const Search2Line = ({ color = 'currentColor', size, className }: IconProps) =>
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size}>
        <path fill="none" d="M0 0h24v24H0z"/>
        <path fill={color} d="M11 2c4.968 0 9 4.032 9 9s-4.032 9-9 9-9-4.032-9-9 4.032-9 9-9zm0 16c3.867 0 7-3.133 7-7 0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7zm8.485.071l2.829 2.828-1.415 1.415-2.828-2.829 1.414-1.414z"/>
    </svg>

const ShoppingBagLine = ({ color = 'currentColor', size, className }: IconProps) =>
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size}>
        <path fill="none" d="M0 0h24v24H0z"/>
        <path fill={color} d="M7 8V6a5 5 0 1 1 10 0v2h3a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h3zm0 2H5v10h14V10h-2v2h-2v-2H9v2H7v-2zm2-2h6V6a3 3 0 0 0-6 0v2z"/>
    </svg>

const User6Line = ({ color = 'currentColor', size, className }: IconProps) =>
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size}>
        <path fill="none" d="M0 0h24v24H0z"/>
        <path fill={color} d="M12 17c3.662 0 6.865 1.575 8.607 3.925l-1.842.871C17.347 20.116 14.847 19 12 19c-2.847 0-5.347 1.116-6.765 2.796l-1.841-.872C5.136 18.574 8.338 17 12 17zm0-15a5 5 0 0 1 5 5v3a5 5 0 0 1-4.783 4.995L12 15a5 5 0 0 1-5-5V7a5 5 0 0 1 4.783-4.995L12 2zm0 2a3 3 0 0 0-2.995 2.824L9 7v3a3 3 0 0 0 5.995.176L15 10V7a3 3 0 0 0-3-3z"/>
    </svg>

const ArrowLeftLine = ({ color = 'currentColor', size, className }: IconProps) =>
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size}>
        <path fill="none" d="M0 0h24v24H0z"/>
        <path fill={color} d="M7.828 11H20v2H7.828l5.364 5.364-1.414 1.414L4 12l7.778-7.778 1.414 1.414z"/>
    </svg>

const ArrowRightLine = ({ color = 'currentColor', size, className }: IconProps) =>
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size}>
        <path fill="none" d="M0 0h24v24H0z"/>
        <path fill={color} d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"/>
    </svg>

const ArrowLeftSLine = ({ color = 'currentColor', size, className }: IconProps) =>
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size}>
        <path fill="none" d="M0 0h24v24H0z"/>
        <path fill={color} d="M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z"/>
    </svg>

const ArrowRightSLine = ({ color = 'currentColor', size, className }: IconProps) =>
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size}>
        <path fill="none" d="M0 0h24v24H0z"/>
        <path fill={color} d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"/>
    </svg>

const Shop2Line = ({ color = 'currentColor', size, className }: IconProps) =>
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size}>
        <path fill="none" d="M0 0h24v24H0z"/>
        <path fill={color} d="M21 13.242V20h1v2H2v-2h1v-6.758A4.496 4.496 0 0 1 1 9.5c0-.827.224-1.624.633-2.303L4.345 2.5a1 1 0 0 1 .866-.5H18.79a1 1 0 0 1 .866.5l2.702 4.682A4.496 4.496 0 0 1 21 13.242zm-2 .73a4.496 4.496 0 0 1-3.75-1.36A4.496 4.496 0 0 1 12 14.001a4.496 4.496 0 0 1-3.25-1.387A4.496 4.496 0 0 1 5 13.973V20h14v-6.027zM5.789 4L3.356 8.213a2.5 2.5 0 0 0 4.466 2.216c.335-.837 1.52-.837 1.856 0a2.5 2.5 0 0 0 4.644 0c.335-.837 1.52-.837 1.856 0a2.5 2.5 0 1 0 4.457-2.232L18.21 4H5.79z"/>
    </svg>

const QuestionLine = ({ color = 'currentColor', size, className }: IconProps) =>
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size}>
        <path fill="none" d="M0 0h24v24H0z"/>
        <path fill={color} d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-1-5h2v2h-2v-2zm2-1.645V14h-2v-1.5a1 1 0 0 1 1-1 1.5 1.5 0 1 0-1.471-1.794l-1.962-.393A3.501 3.501 0 1 1 13 13.355z"/>
    </svg>

const PhoneLine = ({ color = 'currentColor', size, className }: IconProps) =>
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size}>
        <path fill="none" d="M0 0h24v24H0z"/>
        <path fill={color} d="M9.366 10.682a10.556 10.556 0 0 0 3.952 3.952l.884-1.238a1 1 0 0 1 1.294-.296 11.422 11.422 0 0 0 4.583 1.364 1 1 0 0 1 .921.997v4.462a1 1 0 0 1-.898.995c-.53.055-1.064.082-1.602.082C9.94 21 3 14.06 3 5.5c0-.538.027-1.072.082-1.602A1 1 0 0 1 4.077 3h4.462a1 1 0 0 1 .997.921A11.422 11.422 0 0 0 10.9 8.504a1 1 0 0 1-.296 1.294l-1.238.884zm-2.522-.657l1.9-1.357A13.41 13.41 0 0 1 7.647 5H5.01c-.006.166-.009.333-.009.5C5 12.956 11.044 19 18.5 19c.167 0 .334-.003.5-.01v-2.637a13.41 13.41 0 0 1-3.668-1.097l-1.357 1.9a12.442 12.442 0 0 1-1.588-.75l-.058-.033a12.556 12.556 0 0 1-4.702-4.702l-.033-.058a12.442 12.442 0 0 1-.75-1.588z"/>
    </svg>

const AddLine = ({ color = 'currentColor', size, className }: IconProps) =>
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size}>
        <path fill="none" d="M0 0h24v24H0z"/>
        <path fill={color} d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"/>
    </svg>

const Minus = ({ color = 'currentColor', size, className }: IconProps) =>
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size}>
        <path fill="none" d="M0 0h24v24H0z"/>
        <path fill={color} d="M5 11h14v2H5z"/>
    </svg>

const ArrowDownSLine = ({ color = 'currentColor', size, className }: IconProps) =>
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size}>
        <path fill="none" d="M0 0h24v24H0z"/>
        <path fill={color} d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"/>
    </svg>

const Checkline = ({ color = 'currentColor', size, className }: IconProps) =>
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size}>
        <path fill="none" d="M0 0h24v24H0z"/>
        <path fill={color} d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"/>
    </svg>

const FileUpload = ({ color = 'currentColor', size, className }: IconProps) =>
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size}>
        <path fill="none" d="M0 0h24v24H0z"/>
        <path fill={color} d="M4.828 21l-.02.02-.021-.02H2.992A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H4.828zM20 15V5H4v14L14 9l6 6zm0 2.828l-6-6L6.828 19H20v-1.172zM8 11a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/>
    </svg>

const AddCircle = ({ color = 'currentColor', size, className }: IconProps) =>
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size}>
        <path fill="none" d="M0 0h24v24H0z"/>
        <path fill={color} d="M11 11V7h2v4h4v2h-4v4h-2v-4H7v-2h4zm1 11C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z"/>
    </svg>

const CloseLine = ({ color = 'currentColor', size, className }: IconProps) =>
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size}>
        <path fill="none" d="M0 0h24v24H0z"/>
        <path fill={color} d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"/>
    </svg>

const GiftLine = ({ color = 'currentColor', size, className }: IconProps) =>
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size}>
        <path fill={color} d="M14.5049 2.00293C16.4379 2.00293 18.0049 3.56993 18.0049 5.50293C18.0049 6.04014 17.8839 6.54908 17.6676 7.00397L21.0049 7.00293C21.5572 7.00293 22.0049 7.45064 22.0049 8.00293V12.0029C22.0049 12.5552 21.5572 13.0029 21.0049 13.0029H20.0049V21.0029C20.0049 21.5552 19.5572 22.0029 19.0049 22.0029H5.00488C4.4526 22.0029 4.00488 21.5552 4.00488 21.0029V13.0029H3.00488C2.4526 13.0029 2.00488 12.5552 2.00488 12.0029V8.00293C2.00488 7.45064 2.4526 7.00293 3.00488 7.00293L6.34219 7.00397C6.12591 6.54908 6.00488 6.04014 6.00488 5.50293C6.00488 3.56993 7.57189 2.00293 9.50488 2.00293C10.4849 2.00293 11.3708 2.40569 12.0061 3.05471C12.639 2.40569 13.5249 2.00293 14.5049 2.00293ZM18.0049 13.0029H6.00488V20.0029H18.0049V13.0029ZM20.0049 9.00293H4.00488V11.0029H20.0049V9.00293ZM9.50488 4.00293C8.67646 4.00293 8.00488 4.6745 8.00488 5.50293C8.00488 6.28263 8.59977 6.92338 9.36042 6.99606L9.50488 7.00293H11.0049V5.50293C11.0049 4.72323 10.41 4.08248 9.64934 4.0098L9.50488 4.00293ZM14.5049 4.00293L14.3604 4.0098C13.6473 4.07794 13.0799 4.64536 13.0117 5.35847L13.0049 5.50293V7.00293H14.5049L14.6493 6.99606C15.41 6.92338 16.0049 6.28263 16.0049 5.50293C16.0049 4.72323 15.41 4.08248 14.6493 4.0098L14.5049 4.00293Z">
        </path>
    </svg>

const Information = ({ color = 'currentColor', size, className }: IconProps) =>
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size}>
        <path fill={color} d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11 7H13V9H11V7ZM11 11H13V17H11V11Z"></path>
    </svg>

const Error = ({ color = 'currentColor', size, className }: IconProps) =>
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size}>
        <path fill={color} d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11 15H13V17H11V15ZM11 7H13V13H11V7Z"></path>
    </svg>

const CheckDoubleLine = ({ color = 'currentColor', size, className }: IconProps) =>
    <svg className={className} width={size} height={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path fill={color} d="M11.602 13.7599L13.014 15.1719L21.4795 6.7063L22.8938 8.12051L13.014 18.0003L6.65 11.6363L8.06421 10.2221L10.189 12.3469L11.6025 13.7594L11.602 13.7599ZM11.6037 10.9322L16.5563 5.97949L17.9666 7.38977L13.014 12.3424L11.6037 10.9322ZM8.77698 16.5873L7.36396 18.0003L1 11.6363L2.41421 10.2221L3.82723 11.6352L3.82604 11.6363L8.77698 16.5873Z"></path>
    </svg>

const DeleteBin5Line = ({ color = 'currentColor', size, className }: IconProps) =>
    <svg className={className} width={size} height={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path fill={color} d="M4 8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8ZM6 10V20H18V10H6ZM9 12H11V18H9V12ZM13 12H15V18H13V12ZM7 5V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V5H22V7H2V5H7ZM9 4V5H15V4H9Z"></path>
    </svg>

export {
    Heart3Line,
    Heart3LineFill,
    Menu4Line,
    Search2Line,
    ShoppingBagLine,
    User6Line,
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
    DeleteBin5Line
}