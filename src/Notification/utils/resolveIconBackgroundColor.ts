const resolve = {
    success: 'bg-green-50',
    error: 'bg-red-50',
    warning: 'bg-yellow-50',
    info: 'bg-blue-50',
};

export type iconColorType = keyof typeof resolve;

export function resolveIconBackgroundColor(position: iconColorType) {
    return resolve[position];
}