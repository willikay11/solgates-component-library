const resolve = {
    topLeft: 'absolute top-[16px] left-[16px]',
    topRight: 'absolute top-[16px] right-[16px]',
    topCenter: 'position-top-center',
    bottomRight: 'absolute bottom-[16px] right-[16px]',
    bottomLeft: 'absolute bottom-[16px] left-[16px]',
    bottomCenter: 'position-bottom-center'
};

export type PositionType = keyof typeof resolve;

export function resolvePosition(position: PositionType) {
    return resolve[position];
}