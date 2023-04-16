import {createPortal} from "react-dom";
import React, {useEffect} from "react";

function createContainer(){
    const portalId = "notifyContainer";
    let element = document.getElementById(portalId);

    if (element) {
        return element;
    }

    element = document.createElement("div");
    element.setAttribute("id", portalId);
    element.className = 'fixed top-[16px] right-[16px]';
    document.body.appendChild(element);
    return element;
}
export const Toast = () => {
    useEffect(() => {
        console.log('here');
    }, []);

    return createPortal(
        <div className="w-36 h-20">
            <p>here</p>
        </div>,
        createContainer()
    )
}