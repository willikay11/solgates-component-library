// import {
//     ElementType,
//     RenderMessageProps,
//     RenderNotificationProps
// } from '../global';
import { NotificationIcon } from '../components/notificationIcons';
import { resolveIconColor } from '../utils/resolveIconColor';
import { resolveIconBackgroundColor } from '../utils/resolveIconBackgroundColor';

// type GenericResolveType = {
//     icon?: React.ReactNode;
//     type?: ElementType;
//     render?: (props: RenderMessageProps | RenderNotificationProps) => JSX.Element;
//     [key: string]: unknown;
// };

function genericResolveProps(
  { render, icon: _icon, type = 'success', ...props }: any,
  Component: any
) {
  const icon = _icon || (
    <div
      className={`h-[40px] w-[40px] rounded-full ${resolveIconBackgroundColor(
        type
      )} flex items-center justify-center`}
      style={{ borderRadius: '50%' }}
    >
      <div
        className={`h-[25px] w-[25px] rounded-full ${resolveIconColor(
          type
        )} flex items-center justify-center`}
        style={{ borderRadius: '50%' }}
      >
        <NotificationIcon type={type} />
      </div>
    </div>
  );

  const _render = render ? (
    render({
      ...props,
      type,
      icon: icon as JSX.Element,
      message: props.message as JSX.Element,
    })
  ) : (
    <Component type={type} icon={icon} {...props} />
  );

  return {
    type,
    icon,
    ...props,
    content: _render,
  };
}

export default genericResolveProps;
