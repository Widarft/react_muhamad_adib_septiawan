import { useNavigate } from "react-router-dom";

export const useNavigationUtils = () => {
  const navigate = useNavigate();

  // to make navigation easier, developers only need to change the path
  const navigateTo = (path) => {
    navigate(path);
  };

  return { navigateTo };
};
