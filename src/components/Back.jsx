/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable default-param-last */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-case-declarations */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/button-has-type */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import { useNavigate } from 'react-router-dom';

import Undo from '../assets/svg/undo';

function Back() {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate(-1)}>
      <Undo className="dark:fill-white fill-black" />
    </button>
  );
}

export default Back;
