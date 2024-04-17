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
    <div ref={ref} className={`relative duration-300 ease-in-out`}>
      <div className={`absolute relative ${bgStyle} ${isVisible ? 'opacity-100 translate-y-0' : `opacity-0 ${scrollDown ? '' : '-'}translate-y-20`} duration-700`}>
        {children}
      </div>
    </div>
  );
}

export default FadeIn;