import { useNavigate } from "react-router-dom";

import Undo from "../assets/svg/undo";
function Back() {
  const navigate = useNavigate();

  return (
    <>
      <button onClick={() => navigate(-1)}>
        <Undo className="dark:fill-white fill-black"/>
      </button>
    </>
  );
}

export default Back;
