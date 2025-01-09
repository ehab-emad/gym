import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();
//   useEffect(() => {
//     document.documentElement.scrollTo({
//       top: 0,
//       behavior: "smooth", // تمرير سلس
//     });
//   }, [pathname]);
  return null; // هذا الكومبوننت لا يحتاج أن يعرض شيئًا
};

export default ScrollToTop;
