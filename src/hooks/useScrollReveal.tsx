import { useEffect, useRef, useState } from 'react';

export type AnimationType = 'fade-in' | 'slide-in-left' | 'slide-in-right' | 'zoom-in' | 'scroll-reveal';

interface UseScrollRevealOptions {
  threshold?: number;
  animationType?: AnimationType;
  triggerOnce?: boolean;
}

export function useScrollReveal(options: UseScrollRevealOptions = {}) {
  const { threshold = 0.15, animationType = 'fade-in', triggerOnce = true } = options;
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin: '0px 0px -50px 0px' }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, triggerOnce]);

  const className = animationType === 'scroll-reveal'
    ? `scroll-reveal ${isVisible ? 'revealed' : ''}`
    : isVisible ? animationType : 'opacity-0';

  return { ref, isVisible, className };
}
