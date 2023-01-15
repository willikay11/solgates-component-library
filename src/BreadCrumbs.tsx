import React from "react";

interface BreadCrumb {
    title: string,
    active: boolean
}
export interface BreadCrumbsProps {
    items: BreadCrumb[]
}
export const BreadCrumbs = ({items }: BreadCrumbsProps) => {
  return (
      <div className="inline-flex">
          {items.map((item, index) => <span className={`text-xs leading-4 font-medium ${item.active ? 'text-orange-600 ml-1' : 'text-gray-800'}`}>{item.title} { index < items.length -1 ? ' / ' : null }</span>)}
      </div>
  );
}