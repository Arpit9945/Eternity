import { Route, Routes, useNavigate } from "react-router-dom";
import { routes } from "./URLs/routes";
import { useEffect } from "react";

const EternityVision = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/login');
  }, []);

  return (
    <div id="eternity-vision">
      <Routes>
        {routes.map((data, index) => (
          <Route key={index} path={data.path} element={data.element} />
        ))}
      </Routes>
    </div>
  );
};

export default EternityVision;
