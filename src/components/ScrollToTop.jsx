/* eslint-disable react/prop-types */
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';


const ScrollToTop = ({ children }) => {
    const { pathname } = useLocation();
    const mainRef = useRef(null);

    useEffect(() => {
        if (mainRef.current) {
            mainRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [pathname]);

    return <div ref={mainRef}>{children}</div>;
}

export default ScrollToTop;