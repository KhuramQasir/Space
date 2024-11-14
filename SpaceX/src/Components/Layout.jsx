import React from 'react';
import SideBar from './SideBar';

const Layout = (props) => {
  return (
    <div className="layout">
      <SideBar />
      <div className="content">
        {props.children}
        
      </div>

     
    
   
      
    </div>
  );
};

export default Layout;
