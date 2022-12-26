import React, { ReactNode } from "react";

export interface ButtonProps {
    children: ReactNode;
    onClick: () => void;
    type?: 'default' | 'primary' | 'danger';
    loading?: boolean;
    ghost?: boolean;
    htmlType?: 'button' | 'submit' | 'reset';
    block?: boolean;
}

export const Button = ({children, type = 'default', loading = false, htmlType = 'button', block = false, ghost = false, onClick}: ButtonProps) => {
    let width = 'w-auto'
    let color = 'orange-600'
    let bg = `bg-white text-gray-800 border border-gray-200`;

    if (type === 'primary') {
        color = 'orange-600'
        bg = ghost ? `bg-white text-${color} border border-${color}` : `bg-${color} text-white`;
    }
    if (type === 'danger') {
        color = 'red-600'
        bg = ghost ? `bg-white text-${color} border border-${color}` : `bg-${color} text-white`
    }

    if (block) {
        width = 'w-full'
    }

    let content = children;

    if (loading) {
        content =  <div aria-label="Loading..." role="status" className="flex items-center justify-center space-x-2">
            <svg className="h-5 w-5 animate-spin mr-2" viewBox="3 3 18 18">
                <path
                    className="fill-gray-200"
                    d="M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"></path>
                <path
                    className={`fill-${color}`}
                    d="M16.9497 7.05015C14.2161 4.31648 9.78392 4.31648 7.05025 7.05015C6.65973 7.44067 6.02656 7.44067 5.63604 7.05015C5.24551 6.65962 5.24551 6.02646 5.63604 5.63593C9.15076 2.12121 14.8492 2.12121 18.364 5.63593C18.7545 6.02646 18.7545 6.65962 18.364 7.05015C17.9734 7.44067 17.3403 7.44067 16.9497 7.05015Z"></path>
            </svg>
            {children}
        </div>
    }

    return (
        <button type={htmlType} disabled={loading} onClick={onClick} className={`${bg} h-50  py-2.5 px-4 rounded ${ loading ? 'cursor-not-allowed' : 'cursor-pointer'}  ${width} `}>
            {content}
        </button>
    );
}