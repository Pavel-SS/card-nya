import React from "react";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import { NavLink } from "react-router-dom";
import { PATH } from "./routes/path";
import { useDispatch } from "react-redux";
import s from "./headerMenu.module.scss"
import { logoutThunk } from "../../../s-2-features/f-1-auth/a-2-login/l-2-bll/loginThunk";




export const HeaderMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const dispatch = useDispatch();

  const exit = () => {
    dispatch(logoutThunk())
  }


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
        <NavLink to={PATH.SET_NEW_PASS} className={({isActive}) => isActive ? s.active: s.inactive}> Confirm new password</NavLink>
        <NavLink to={PATH.PROFILE} className={({isActive}) => isActive ? s.active: s.inactive}> Profile</NavLink>
        <NavLink to={PATH.PACKS} className={({isActive}) => isActive ? s.active: s.inactive}> Pack List</NavLink>
        <span onClick={exit} style={{cursor: 'pointer'}}>Exit</span>
      </Menu>

    </nav>
  );
}