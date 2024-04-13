import React, { useEffect, useRef, useState } from 'react';

function FadeIn({children, bgStyle=''}) {
  const ref = useRef<any>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      const e = entries[0];
      setIsVisible(e.isIntersecting);
    }, { threshold: Math.min(60/ref.current.clientHeight, 1)});

    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
                    observer.disconnect();
                }   
  }, [ref]);
  return (
    <div ref={ref} className={`${isVisible ? 'opacity-100' : 'opacity-0'} duration-300 ease-in-out ${bgStyle}`}>
      {children}
    </div>
  );
}

export default FadeIn;