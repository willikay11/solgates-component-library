import * as React from 'react';
import { createRoot } from 'react-dom/client';

import Store from './Store';
import { Wrapper } from '../components/wrapper';
import { PositionType } from '../utils/resolvePosition';
import { RootState } from '../global';

let root: RootState = {
    // top
    topRight: undefined,
    topCenter: undefined,
    topLeft: undefined,
    // bottom
    bottomRight: undefined,
    bottomCenter: undefined,
    bottomLeft: undefined
};

export default class StoreNotification extends Store {
    constructor() {
        super();
    }

    render(position: PositionType) {
        // const positionClass = resolvePosition(position);
        const elm = document.getElementById(
            `notifications`
        );

        const instances = this.getInstances(position);

        if (!root[position]) {
            root[position] = createRoot(
                elm?.parentElement
                    ? elm.parentElement
                    : document.body.appendChild(document.createElement('DIV'))
            );
        }

        root[position]?.render(
            <Wrapper
                position={position}
                instances={instances}
                onRemove={() => this.unsubscribe}
            />
        );
    }
}