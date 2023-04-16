import * as React from 'react';
import { ElementType } from '../global';

export interface NotificationProps {
    title?: React.ReactNode;
    message?: React.ReactNode;
    icon?: React.ReactNode;
    type?: ElementType;
    id?: string;
    onRemove?: () => void;
    className?: string;
    style?: React.CSSProperties;
    onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export const Notification: React.FC<NotificationProps> = ({
                                                              title,
                                                              icon,
                                                              message,
                                                              onRemove,
                                                              id,
                                                              type = 'success',
                                                              className = '',
                                                              ...rest
                                                          }) => {
    return (
        <div className="flex justify-start bg-white shadow-lg border-gray-100 border-[1px] mb-2 p-3.5 w-[400px]" {...rest}>
            {icon}
            <div className="ml-3.5">
                <div className="text-sm leading-5 font-semibold text-gray-800 mb-1">{title}</div>
                <div className="text-sm leading-4 font-normal text-gray-600">{message}</div>
            </div>
            <div
                className="notification-close"
                onClick={() => onRemove && onRemove()}
            />
        </div>
    );
};