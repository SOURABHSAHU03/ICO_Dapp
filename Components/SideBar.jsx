import React from "react";

const SideBar = () => {
  return (<aside className="slide_bar ">
    <div className="close-mobile-menu">
      <a href="/" className="tx-close"></a>
    </div>

    <nav className="side-mobile-menu">
       <a href="/" className="header__loop mb-30">
          <img src="assets/img/logo/logo.svg" alt="logo"/>      
       </a>
       <div className="header-mobile-search">
          <form action="#">
              <input type="text" placeholder="Search here..."/>
              <button type="submit"><i className="fa fa-search"></i></button>
          </form>
       </div>
       <ul id = "mobile-menu-active" className="side-menu">
         <li>
          <a href="/">Home</a>
         </li>
         <li>
          <a href="#about" className="scrollspy-btn">About</a>
         </li>
         <li>
          <a href="#roadmap" className="scrollspy-btn">RoadMap</a>
         </li>
         <li>
          <a href="#team" className="scrollspy-btn">Team</a>
         </li>

          <li>
          <a href="#!" className="">Blog</a>
         </li>

         <li>
          <a href="#!" className="">Get In Touch</a>
         </li>
       </ul>
       </nav>
  </aside>
  );
};

export default SideBar;
