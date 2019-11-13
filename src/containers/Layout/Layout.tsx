import React from 'react';

import routes from '../../routes/index';
import Header from '../../components/Header/Header';

const Layout: React.FC = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <div className="content-wrapper">
        {routes}
      </div>
    </div>
  )
};

export default Layout;