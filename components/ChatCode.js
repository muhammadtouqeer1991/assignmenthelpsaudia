"use client"
import React , { useRef } from 'react';
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';
const ChatCode = () => {
  const tawkMessengerRef = useRef();
  return (
    <TawkMessengerReact
    propertyId="5c348a88361b3372892efb91"
    widgetId="default"
    ref={tawkMessengerRef}
    />
  )
}

export default ChatCode