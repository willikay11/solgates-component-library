import * as React from 'react';


import { ElementType } from '../global';
import {CheckDoubleLine, Information, Error} from "../../Icons";
import colors from "../../Colors";

export interface IconProps {
    type: ElementType;
    isFilled?: boolean;
}

export const NotificationIcon: React.FC<IconProps> = ({ type }) => {
    switch (type) {
        case 'success':
            return <CheckDoubleLine size={18} color={colors.green["500"]} />;

        case 'info':
            return <Information size={18} />;

        case 'warning':
            return <Error size={18} />;

        case 'error':
            return <Error size={18} />;

        default:
            return <CheckDoubleLine size={18} />;
    }
};