import React from 'react';

import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const Navbar = () => {
  return (
    <div className='bg-[#202020] w-[100%] h-[60px] sticky top-0'>
      <div className='flex items-center justify-center px-[20px] w-full h-full'>

        <div className='w-[60%] m-auto flex items-center justify-between p-[5px] border border-[#ccc] rounded'>
          <input placeholder='Search' className='rounded bg-transparent border-none outline-none text-[#ccc] w-[80%] h-[80%]' />
          <SearchOutlinedIcon />
        </div>

        <button className=' py-[5px] px-[15px] flex items-center gap-[5px] bg-transparent border border-[#3ea6ff] text-[#3ea6ff] font-medium rounded'>
          <AccountCircleOutlinedIcon />
          SIGN IN
        </button>

      </div>
    </div>
  );
}

export default Navbar;