import React, { useEffect, useRef, useState } from 'react';

function FadeIn({children, bgStyle=''}) {
  const ref = useRef<any>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [prevY, setPrevY] = useState(0);
  const [scrollDown, setScrollDown] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      const entry = entries[0];
      const curY = entry.boundingClientRect.y;
      setScrollDown(curY > prevY);
      setIsVisible(entry.isIntersecting);
      setPrevY(curY);
    }, { threshold: Math.min(60/ref.current.clientHeight, 1)});

    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
                    observer.disconnect();
                }   
  }, [ref]);
  return (
    <div ref={ref} className={`relative ease-in-out`}>
      <div className={`absolute relative ${bgStyle} ${isVisible ? 'scale-100 opacity-100 translate-y-0' : `scale-50 opacity-0 ${scrollDown ? 'translate-y-36' : '-translate-y-36'}`} duration-300`}>
        {children}
      </div>
    </div>
  );
}

export default FadeIn;