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
        <path color={color} d="M9.366 10.682a10.556 10.556 0 0 0 3.952 3.952l.884-1.238a1 1 0 0 1 1.294-.296 11.422 11.422 0 0 0 4.583 1.364 1 1 0 0 1 .921.997v4.462a1 1 0 0 1-.898.995c-.53.055-1.064.082-1.602.082C9.94 21 3 14.06 3 5.5c0-.538.027-1.072.082-1.602A1 1 0 0 1 4.077 3h4.462a1 1 0 0 1 .997.921A11.422 11.422 0 0 0 10.9 8.504a1 1 0 0 1-.296 1.294l-1.238.884zm-2.522-.657l1.9-1.357A13.41 13.41 0 0 1 7.647 5H5.01c-.006.166-.009.333-.009.5C5 12.956 11.044 19 18.5 19c.167 0 .334-.003.5-.01v-2.637a13.41 13.41 0 0 1-3.668-1.097l-1.357 1.9a12.442 12.442 0 0 1-1.588-.75l-.058-.033a12.556 12.556 0 0 1-4.702-4.702l-.033-.058a12.442 12.442 0 0 1-.75-1.588z"/>
    </svg>

const AddLine = ({ color = 'currentColor', size, className }: IconProps) =>
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size}>
        <path fill="none" d="M0 0h24v24H0z"/>
        <path color={color} d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"/>
    </svg>

const Minus = ({ color = 'currentColor', size, className }: IconProps) =>
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size}>
        <path fill="none" d="M0 0h24v24H0z"/>
        <path color={color} d="M5 11h14v2H5z"/>
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
    Minus
}