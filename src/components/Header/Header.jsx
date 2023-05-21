import React from 'react';
import { Link } from 'react-router-dom';
import SearchField from '../SearchField/SearchField';
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
     return (
          <nav className='flex justify-around bg-emerald-400 text-blue-100 p-3 rounded-md items-center w-full'>
               <ActiveLink to="/">Home</ActiveLink>
               <ActiveLink to="/friends">Friends</ActiveLink>
               <ActiveLink to="/contact">Contacts</ActiveLink>
               <ActiveLink to="/about">About</ActiveLink>
               <div>
                    <SearchField></SearchField>
               </div>
          </nav>
     );
};

export default Header;