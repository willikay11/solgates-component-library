import React, {ReactNode} from 'react';
import { Tab } from '@headlessui/react'

interface item {
    label: string | ReactNode;
    content: ReactNode
    disabled?: boolean;
}

export interface TabsProps {
    items: item[];
    defaultActiveKey?: number;
    onChange?: (activeKey: number) => void;
}

export const Tabs = ({ defaultActiveKey, items, onChange }: TabsProps) => {
    return (
        <Tab.Group defaultIndex={defaultActiveKey} onChange={(index) => onChange?.(index)}>
            <Tab.List>
                {items.map(item => (
                    <Tab className="outline-0" disabled={item.disabled}>
                        {({ selected }) => (
                            <button
                                className={`${selected ? 'text-orange-500 border-b-orange-500' : 'text-gray-500'} px-4 pb-2.5 font-medium border-b`}
                            >
                                {item.label}
                            </button>
                        )}
                    </Tab>
                ))}
            </Tab.List>
            <Tab.Panels>
                { items.map(item => (
                    <Tab.Panel>{item.content}</Tab.Panel>
                ))}
            </Tab.Panels>
        </Tab.Group>
    );
}