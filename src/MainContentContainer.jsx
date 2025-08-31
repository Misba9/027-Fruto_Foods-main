// MainContentContainer.jsx
import React, { useRef, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function MainContentContainer({ children }) {
  const containerRef = useRef(null);
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    // Check if the ref is connected to the element
    if (containerRef.current) {
      // Scroll the specific element to the top
      containerRef.current.scrollTo(0, 0);
    }
  }, [pathname]); // The effect runs whenever the pathname changes

  return (
    <div
      ref={containerRef}
      className="w-[100%] h-[100vh]  shadow-lg overflow-auto no-scrollbar "
    >
      {children}
    </div>
  );
}