import * as React from 'react';
import {
    CheckOutline,
    CheckFilled,
    InfoFilled,
    InfoOutline,
    WarningFilled,
    WarningOutline,
    ErrorFilled,
    ErrorOutline
} from './icon';
import { ElementType } from '../global';

export interface IconProps {
    type: ElementType;
    isFilled?: boolean;
}

export const AntdIcon: React.FC<IconProps> = ({ type, isFilled = false }) => {
    switch (type) {
        case 'success':
            return isFilled ? <CheckFilled /> : <CheckOutline />;

        case 'info':
            return isFilled ? <InfoFilled /> : <InfoOutline />;

        case 'warning':
            return isFilled ? <WarningFilled /> : <WarningOutline />;

        case 'error':
            return isFilled ? <ErrorFilled /> : <ErrorOutline />;

        default:
            return isFilled ? <CheckFilled /> : <CheckOutline />;
    }
};