const resolve = {
    success: 'bg-green-100',
    error: 'bg-red-100',
    warning: 'bg-yellow-100',
    info: 'bg-blue-100',
};

export type iconColorType = keyof typeof resolve;

export function resolveIconColor(position: iconColorType) {
    return resolve[position];
}