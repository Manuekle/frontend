import React, {useState, useEffect} from "react";

import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";


function ProfilePage() {

  const [name, setName] = useState("");

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  console.log(userInfo)


  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    } else {
      setName(userInfo.name);
    }
    // if (!userInfo) {
    //   history.push("/login");
    // } else {
    //   if (!user || !user.name || success || userInfo._id !== user._id) {
    //     dispatch({ type: USER_UPDATE_PROFILE_RESET });
    //     dispatch(getUserDetails("profile"));
    //     dispatch(listMyOrders());
    //   } else {
    //     setName(user.name);
    //     setEmail(user.email);
    //   }
    // }
  }, [dispatch, userInfo, navigate]);

  return (
    <section>
      <div className="flex flex-col">
        <h1 className="text-black dark:text-white text-3xl font-bold capitalize">Bienvenido {name}</h1>
      </div>
    </section>
  );
}

export default ProfilePage;
