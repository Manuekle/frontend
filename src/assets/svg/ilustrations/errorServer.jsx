/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

function errorServer(props) {
  const img =
    'https://cdn3d.iconscout.com/3d/premium/thumb/cloud-system-error-5070607-4229336.png';
  return <img src={img} alt="errorServer" {...props} />;
}

export default errorServer;
