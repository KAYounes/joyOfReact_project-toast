import React from "react";
import useEvent from "./useEvent";

export default function useListenToKey(key, callback)
{
    useEvent(window, 'keydown', function(event){
        if(event.code === key)
        {
            callback()
        }
    })
}