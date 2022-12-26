import React, {ReactNode} from 'react';
import { Tab } from '@headlessui/react'

interface item {
    label: string;
    key: string;
    content: ReactNode
    disabled?: boolean;
}

export interface TabsProps {
    defaultActiveKey: string;
    items: item[];
}

export const Tabs = ({ items }: TabsProps) => {
    return (
        <Tab.Group>
            <Tab.List>
                {items.map(item => (
                    <Tab className="outline-0">
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