import { useNavigate } from "react-router-dom";

export const useNavigationUtils = () => {
  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path);
  };

  return { navigateTo };
};
