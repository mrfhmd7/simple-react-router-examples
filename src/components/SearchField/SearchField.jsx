import React from 'react';

const SearchField = () => {
     return (
          <div>
               <div className='flex w-765 bg-slate-100 border-solid border-2 border-indigo-400 p-1 rounded-md items-center'>
                    <form>
                         <input className='rounded' type="search" placeholder='search anything' aria-label="Search contacts"/>
                    </form>
                    <hr />
                    <form method="post">
                         <button type="submit"><span className='text-lime-600'>Search</span></button>
                    </form>
               </div>
               {/* <nav className='mt-12 text-left'>
                    <ul>
                         <li>
                              <a href={`/contacts/1`}>Your Name</a>
                         </li>
                         <li className='mt-3'>
                              <a href={`/contacts/2`}>Your Friend</a>
                         </li>
                    </ul>
               </nav> */}
          </div>
     );
};

export default SearchField;