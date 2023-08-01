import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return <div style={{ minHeight: window.innerHeight - 0 }}>{children}</div>;
};

export default Wrapper;
