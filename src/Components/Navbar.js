import React from 'react';
import style from "./Navbar.module.css";
import PersonIcon from '@mui/icons-material/Person';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

function Navbar() {
  return <div className={style.navContainer}>
      <span className={style.logo}>M</span>
      <div className={style.menu}>
          
              <li>Men</li>
              <li>Woman</li>
              <li>Kids</li>
              <li>Home&Living</li>
              <li>Beauty</li>
              <li>Studio</li>
          
      </div>
      <input type="text" className={style.input} placeholder="Search for Products,Brands and more"/>
      <div className={style.innerdiv}>
        <PersonIcon/>
        <h5>Profile</h5>
      </div>
      <div className={style.innerdiv}>
        <FavoriteBorderIcon/>
        <h5>WishList</h5>
      </div>
      <div className={style.innerdiv}>
        <ShoppingBagIcon/>
        <h5>Bag</h5>
      </div>
  </div>;
}

export default Navbar;

