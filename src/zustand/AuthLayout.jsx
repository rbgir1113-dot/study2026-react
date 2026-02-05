import React, { useEffect } from 'react';
import { Navigate, Outlet  } from 'react-router-dom';
import useAuthStore from './store/useAuthStore';

const AuthLayout = () => {

  const {
    isLogin, PreviousUrl,
  } = useAuthStore();

  if(!isLogin) return <Navigate to={"/"} replace={true}/>

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default AuthLayout;