import React from 'react';
import { Outlet } from 'react-router-dom';

const Detail = () => {
  return (
    <div>
      디테일
      <Outlet />
    </div>
  );
};

export default Detail;