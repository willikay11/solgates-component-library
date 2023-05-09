const resolve = {
  topLeft: 'fixed z-50 top-[16px] left-[16px]',
  topRight: 'fixed z-50 top-[16px] right-[16px]',
  topCenter: 'position-top-center',
  bottomRight: 'fixed z-50 bottom-[16px] right-[16px]',
  bottomLeft: 'fixed z-50 bottom-[16px] left-[16px]',
  bottomCenter: 'position-bottom-center',
};

export type PositionType = keyof typeof resolve;

export function resolvePosition(position: PositionType) {
  return resolve[position];
}
