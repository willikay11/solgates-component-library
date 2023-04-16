import { PositionType } from '../utils/resolvePosition';
import StoreNotification from '../stores/StoreNotification';
import { DurationType, RenderNotificationProps } from '../global';
import { Notification, NotificationProps } from '../components/notification';
import genericResolveProps from './genericResolveAction';

const store = new StoreNotification();

export type NotificationsProps = Omit<
    NotificationProps,
    'onRemove' | 'id' | 'animation'
    > & {
    duration?: DurationType;
    position?: PositionType;
    render?: (props: RenderNotificationProps) => JSX.Element;
};

export const notification = ({
                                 duration = 7000,
                                 position = 'bottomRight',
                                 type = 'success',
                                 ...props
                             }: NotificationsProps) => {
    const resolveProps = genericResolveProps(
        { type, ...props },
        Notification,
    );

    store.subscribe({
        duration,
        position,
        ...resolveProps
    });
};