import React, { useState } from 'react';
import { MenuItems } from './MenuItems';
import  Link  from 'next/link';

function Dropdown() {
  const [ click, setClick ] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
      >
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={item.cName}
                href={item.path}
                onClick={() => setClick(false)}
              >
                <a href="">{item.title}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;