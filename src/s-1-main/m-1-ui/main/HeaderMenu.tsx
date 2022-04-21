import React from "react";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { NavLink, NavLinkProps } from "react-router-dom";
import { pages } from "./routes/Pages";


// навигация по ссылкам
const NavLinks: React.FC<NavLinkProps> = React.memo(({...props})=>{
    return <NavLink {...props}/>
}) 


export const HeaderMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  //  функция добавления ссылок в панель меню
  const NavLinkPages = pages.map(page =>
    <MenuItem onClick={handleClose}>
      <NavLinks key={'navLink-' + page._id} to={(page.path || '/404' )}>
        {page.title}
      </NavLinks>
    </MenuItem>
  )
  return (
    <div>
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
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {NavLinkPages}
      </Menu>
    </div>
  );
}