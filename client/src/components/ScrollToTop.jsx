import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there's no hash, scroll to top
    if (!hash) {
      window.scrollTo(0, 0);
    }
    // If there's a hash, the page component handles it (like About.jsx or Logistics Overview.jsx)
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
