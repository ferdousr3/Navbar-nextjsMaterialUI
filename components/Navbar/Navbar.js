import { AppBar, Container, IconButton, makeStyles, Menu, MenuItem, Toolbar, Typography } from "@material-ui/core";
import NextLink from "next/link";
import { useState } from "react";
import { FaBars, FaBattleNet, FaTimes, FaAngleDown } from "react-icons/fa";
import { Button } from "./Button";
import Dropdown from "./DropDown";
// import ActiveLink from "./ActiveLink";


const useStyles = makeStyles((theme) => ({
  navbar: {
    backgroundColor: '#203040',
    padding: '0 20px',
    '& a': {
      color: '#ffffff',
      margin: '0px 15px',
    },
  },
  mainbar: {
    flexGrow: 1,
  },
  logo:{
    width: '50px',
    height:'50px',
    margingBottom: '-15px',
  },
  sectionDesktop: {
    display: 'none',
    [ theme.breakpoints.up("md") ]: {
      display: 'flex',
    }
  },
  mobileDesktop: {
    display: 'none',
    [ theme.breakpoints.down("sm") ]: {
      display: 'flex',
    },
  },
  mobilemenu: {
    color: "#fff"
  },
  nabarItem: {
    listStyle: 'none',
  },
  mobilemeuDesign:{
    width:' 300px',
    height: 'auto',
  },
  dropdownIcon:{
    marginTop: '4px',
  },

}));


const Navbar = () => {

  const classes = useStyles();

  const [ click, setClick ] = useState(false);
  const [ dropdown, setDropdown ] = useState(false);

  const handleClick = () => setClick(!click);
  // const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };
  // mobile menue
  const [ mobileMenuAnchorEl, setMobileMenuAnchorEl ] = useState(null);
  const isMobileMenuOpen = Boolean(mobileMenuAnchorEl);


  const openMobileMenuOpen = (event) => {
    setMobileMenuAnchorEl(event.currentTarget);
  };
  const closeMobileMenu = () => {
    setMobileMenuAnchorEl(null);
  };



  const mobileMenu = (
    <Menu className={classes.mobilemeuDesign} anchorEl={mobileMenuAnchorEl} id="mobile-menu" keepMounted open={isMobileMenuOpen} >
      <MenuItem onClick={closeMobileMenu} >
        <NextLink href="/services" >
          <a href="" > SERVICES </a>
        </NextLink>
      </MenuItem>
      <MenuItem onClick={closeMobileMenu} >
        <NextLink href="/portfolio" >
          <a href="" >PORTFOLIO </a>
        </NextLink>
      </MenuItem>
      <MenuItem onClick={closeMobileMenu} >
        <NextLink href="/team" >
          <a href="" > OUR TEAM </a>
        </NextLink>
      </MenuItem>
      <MenuItem onClick={closeMobileMenu} >
        <NextLink href="/aboutus" >
          <a href="" > ABOUT US </a>
        </NextLink>
      </MenuItem>
      <MenuItem onClick={closeMobileMenu} >
        <NextLink href="/contact" >
          <a href="">  CONTACT </a>
        </NextLink>
      </MenuItem>
    </Menu>
  );


  return (
    <>

      <AppBar position="sticky" className={classes.navbar} >
        <Toolbar>
          <div className={classes.mainbar} >
            <li className={classes.nabarItem} >
              <NextLink href="/" >
                <a> <FaBattleNet className={classes.logo}  /> </a>
              </NextLink>
            </li>
          </div>
          <div className={classes.sectionDesktop}>
            <ul style={{ display: 'flex', listStyle: 'none', justifyContent: 'center', alignItems: 'center', }} >
              <li
                className='nav-item'
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
              >
                <NextLink
                  href='/services'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  <a href=""> SERVICES<FaAngleDown className={classes.dropdownIcon} /> </a>
                </NextLink>
                {dropdown && <Dropdown />}
              </li>
              <li  >
                <NextLink href="/portfolio" >
                  <a> PORTFOLIO </a>
                </NextLink>
              </li>
              <li  >
                <NextLink href="/team" >
                  <a> OUR TEAM </a>
                </NextLink>
              </li>
              <li  >
                <NextLink href="/aboutus" >
                  <a> ABOUT US </a>
                </NextLink>
              </li>
              <li  >
                <NextLink href="/contact" >
                  <a> CONTACT </a>
                </NextLink>
              </li>
              <li  >
                <Button>
                  SING UP
                </Button>
              </li>
            </ul>
          </div>
          <div className={classes.mobileDesktop}>
            <IconButton onClick={openMobileMenuOpen}  >
              <FaBars className={classes.mobilemenu} />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {/* mobileMenu */}
      {mobileMenu}
    </>
  );
};

export default Navbar;
