import React from 'react';
import { Outlet } from 'react-router-dom';
import NavbarMenu from "../NavbarMenu/NavbarMenu";
import Footer from "../Footer/Footer";
const Main = () => {
     return (
          <div>
               <NavbarMenu></NavbarMenu>
               <Outlet></Outlet>
               <Footer></Footer>
          </div>
     );
};

export default Main;