import { useEffect, useState } from "react";

const Route = ({ path, children }) => {
  const [currentPath, setCurrentPath] = useState(window.location.path);
  useEffect(() => {
    const onLoCationChange = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', onLoCationChange);
    return () => {
      window.removeEventListener('popstate', onLoCationChange);
    };
  }, [])
  return currentPath === path
    ? children
    : null;
};
export default Route;