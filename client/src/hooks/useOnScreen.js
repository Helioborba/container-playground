import { useEffect, useState, useRef } from "react";
import useWindowDimensions from './useWindowDimensions';
const useOnScreen = (ref) => {
  const [isOnScreen, setIsOnScreen] = useState(false);
  const observerRef = useRef(null); // reference for maneging the observer
  const itRan = useRef(false); // reference for maneging the observer
  const {width} = useWindowDimensions(); // get height/width

  useEffect(() => { // runs only 1 time
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: [0.25]
    }
    const callback = ([entry]) => {
      if (itRan.current) {
        setIsOnScreen(true);
        return isOnScreen;
      }
      setIsOnScreen(entry.isIntersecting);
      itRan.current = true;
    }
    
    
    observerRef.current = new IntersectionObserver(callback,options);
    
  
  }, [isOnScreen,width]);
  
  useEffect(() => {
    // cancel animation IF width is mobile view
    if (width < 800) {
      setIsOnScreen(true);
      return isOnScreen;
    }
    observerRef.current.observe(ref.current);
    return () => {
      observerRef.current.disconnect();
    };
  }, [ref,isOnScreen,width]);
  
  return isOnScreen;
}

export default useOnScreen;