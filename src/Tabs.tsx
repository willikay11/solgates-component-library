import React from 'react';
import { Tab } from '@headlessui/react'

export const Tabs = () => {
    return (
        <Tab.Group>
            <Tab.List>
                <Tab>
                    {({ selected }) => (
                        <button
                            className={`${selected ? 'text-orange-500 border-b-orange-500' : 'text-gray-500'} px-4 pb-2.5 font-medium border-b`}
                        >
                            Tab 1
                        </button>
                    )}
                </Tab>
                <Tab>
                    {({ selected }) => (
                        <button
                            className={`${selected ? 'text-orange-500 border-b-orange-500' : 'text-gray-500'} px-4 pb-2.5 font-medium border-b`}
                        >
                            Tab 2
                        </button>
                    )}
                </Tab>
                <Tab>
                    {({ selected }) => (
                        <button
                            className={`${selected ? 'text-orange-500 border-b-orange-500' : 'text-gray-500'} px-4 pb-2.5 font-medium border-b`}
                        >
                            Tab 3
                        </button>
                    )}
                </Tab>
            </Tab.List>
            <Tab.Panels>
                <Tab.Panel>Content 1</Tab.Panel>
                <Tab.Panel>Content 2</Tab.Panel>
                <Tab.Panel>Content 3</Tab.Panel>
            </Tab.Panels>
        </Tab.Group>
    );
}