import { useRef, useEffect } from 'react';
import { useInView, useAnimation } from 'framer-motion';

const useAnimateOnView = (options = {}) => {
  const ref = useRef(null); // Reference to a DOM element
  const isInView = useInView(ref, options); // Check if the element is in view using options
  const mainControls = useAnimation(); // Animation controller

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible'); // Start the animation when the element is in view
    }
  }, [isInView, mainControls]);

  return { ref, mainControls }; // Return ref and controls to be used in the component
};

export default useAnimateOnView;
