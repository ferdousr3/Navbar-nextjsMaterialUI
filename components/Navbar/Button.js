
import { makeStyles } from '@material-ui/core';
import NextLink from 'next/link';

const useStyles = makeStyles((theme) => ({
  root: {
    primary: '#1888ff',
  },

  btn: {
    padding: '6px 18px',
    borderRadius: '4px',
    outline: 'none',
    border: 'none',
    fontSize: '18px',
    color: '#fff',
    cursor: 'pointer',
    border: '2px solid #1888ff',
    backgroundColor: '#1888ff',
    '&:hover': {
      padding: '6px 18px',
      transition: 'all 0.3s ease-out',
      backgroundColor:' transparent',
      color: '#fff',
      borderRadius: '4px',
      border: '2px solid #1888ff',
      transition: ' all 0.3s ease-out'
    },
  },
  

}));

export function Button() {
  const classes = useStyles();

  return (
    <NextLink href="singup">
      <button className={classes.btn}>Sign Up</button>
    </NextLink>
  );
}