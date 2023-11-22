import React from "react";

export default function useEvent(target, event, callback, isRef) {
    
    React.useEffect(function () {
    if (isRef) target = target.current;
    target.addEventListener(event, callback);

    return () => target.removeEventListener(event, callback);
  }, []);
}
