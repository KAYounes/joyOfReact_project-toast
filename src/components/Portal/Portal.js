import React from 'react';
import { createPortal } from 'react-dom';

function Portal({ children }) {
  const [portal, setPortal] = React.useState()
  
  React.useEffect(function(){
    const htmlElement = document.createElement('div')
    htmlElement.setAttribute('data-react-portal-host', '')
    document.body.append(htmlElement)
    setPortal(htmlElement)

    return () => htmlElement.remove()
  }, [])

  if (!(portal instanceof HTMLElement)) return

  return createPortal(children, portal)
}

export default Portal;
