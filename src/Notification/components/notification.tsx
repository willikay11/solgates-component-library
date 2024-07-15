import { ElementType } from '../global';
import { CloseLine } from '../../Icons';
import colors from '../../Colors';
import generateUniqueId from '../utils/generateUniqueId';

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
  const notificationId = generateUniqueId();
  return (
    <div
      id={notificationId}
      className="flex justify-between bg-white shadow-lg border-gray-100 border-[1px] ml-2 mb-2 p-3.5 w-full md:max-2xl:w-[400px]"
      {...rest}
    >
      <div>{icon}</div>
      <div className="flex-1 ml-3.5">
        <div className="flex flex-col h-full justify-center">
          <div className="text-sm leading-5 font-semibold text-gray-800 mb-1">
            {title}
          </div>
          {message ? (
            <div className="text-sm leading-4 font-normal text-gray-600">
              {message}
            </div>
          ) : null}
        </div>
      </div>
      <div
        className="cursor-pointer"
        onClick={() => {
          document.getElementById(notificationId)?.remove();
        }}
      >
        <CloseLine size={16} color={colors.gray['600']} />
      </div>
    </div>
  );
};
