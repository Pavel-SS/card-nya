import React from "react";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
import { NavLink, NavLinkProps } from "react-router-dom";
import { PATH } from "./routes/path";

import s from "./headerMenu.module.scss"

// навигация по ссылкам
// const NavLinkPage: React.FC<NavLinkProps> = React.memo(({...props})=>{
//     return <NavLink {...props}/>
// }) 


export const HeaderMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <nav>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Menu
      </Button>
      <Menu
        className={s.menu}
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <NavLink to={PATH.LOGIN} className={({isActive}) => isActive ? s.active:s.inactive}>Login</NavLink>
        <NavLink to={PATH.REGISTER} className={({isActive}) => isActive ? s.active: s.inactive}>Registration</NavLink>
        <NavLink to={PATH.FORGOT} className={({isActive}) => isActive ? s.active: s.inactive}> Forgot Password</NavLink>
        <NavLink to={PATH.PROFILE} className={({isActive}) => isActive ? s.active: s.inactive}> Profile</NavLink>
        <NavLink to={PATH.PACKS} className={({isActive}) => isActive ? s.active: s.inactive}> Pack List</NavLink>
        <NavLink to={PATH.CARDS} className={({isActive}) => isActive ? s.active: s.inactive}> Cards</NavLink>
      </Menu>

    </nav>
  );
}