import React from 'react';

import HomeIcon from '@mui/icons-material/Home';
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import SportsBasketballOutlinedIcon from "@mui/icons-material/SportsBasketballOutlined";
import MovieOutlinedIcon from "@mui/icons-material/MovieOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import SettingsBrightnessOutlinedIcon from "@mui/icons-material/SettingsBrightnessOutlined";

const Sidebar = () => {
  return (
    <div className='flex w-[250px] h-[100vh] sticky top-0 bg-[#202020] text-white overflow-y-scroll scrollbar-hide'>

      <div className='p-4 flex flex-col'>
        
        <div className='flex items-centerw-[165px] h-[40px]'>
          <p className='text-red-600'>samael</p>
        </div>
        <div className='flex flex-col gap-[10px] pb-5 pt-2'>
          <div className='w-[165px] h-[24px] flex items-center gap-[10px] '>
            <HomeIcon />
            <p className='h-full flex items-center'>
              Home
            </p>
          </div>

          <div className='w-[165px] h-[24px] flex items-center gap-[10px] '>
            <ExploreOutlinedIcon />
            <p className='h-full flex items-center'>
              Explore
            </p>
          </div>

          <div className='w-[165px] h-[24px] flex items-center gap-[10px] '>
            <SubscriptionsOutlinedIcon />
            <p className='h-full flex items-center'>
              Subscriptions
            </p>
          </div>

          <div className='mt-[15px] mb-[15px] border border-[#373737]'/>

          <div className='w-[165px] h-[24px] flex items-center gap-[10px] '>
            <VideoLibraryOutlinedIcon />
            <p className='h-full flex items-center'>
              Library
            </p>
          </div>

          <div className='w-[165px] h-[24px] flex items-center gap-[10px] '>
            <HistoryOutlinedIcon />
            <p className='h-full flex items-center'>
              History
            </p>
          </div>

          <div className='mt-[15px] mb-[15px] border border-[#373737]'/>

          <div>
            <p>
              Sign in to like videos, comment, and subscribe.
            </p>
            <button className='mt-[10px] py-[5px] px-[15px] flex items-center gap-[5px] bg-transparent border border-[#3ea6ff] text-[#3ea6ff] font-medium rounded'>
              <AccountCircleOutlinedIcon />
              SIGN IN
            </button>
          </div>

          <div className='mt-[15px] mb-[15px] border border-[#373737]'/>

          <div className='w-[165px] h-[24px] flex items-center gap-[10px] '>
            <LibraryMusicOutlinedIcon />
            <p className='h-full flex items-center'>
              Music
            </p>
          </div>

          <div className='w-[165px] h-[24px] flex items-center gap-[10px] '>
            <SportsBasketballOutlinedIcon />
            <p className='h-full flex items-center'>
              Sports
            </p>
          </div>

          <div className='w-[165px] h-[24px] flex items-center gap-[10px] '>
            <SportsEsportsOutlinedIcon />
            <p className='h-full flex items-center'>
              Gaming
            </p>
          </div>

          <div className='w-[165px] h-[24px] flex items-center gap-[10px] '>
            <MovieOutlinedIcon />
            <p className='h-full flex items-center'>
              Movies
            </p>
          </div>

          <div className='w-[165px] h-[24px] flex items-center gap-[10px] '>
            <ArticleOutlinedIcon />
            <p className='h-full flex items-center'>
              News
            </p>
          </div>

          <div className='w-[165px] h-[24px] flex items-center gap-[10px] '>
            <LiveTvOutlinedIcon />
            <p className='h-full flex items-center'>
              Live
            </p>
          </div>

          <div className='mt-[15px] mb-[15px] border border-[#373737]'/>

          <div className='w-[165px] h-[24px] flex items-center gap-[10px] '>
            <SettingsOutlinedIcon />
            <p className='h-full flex items-center'>
              Settings
            </p>
          </div>

          <div className='w-[165px] h-[24px] flex items-center gap-[10px] '>
            <FlagOutlinedIcon />
            <p className='h-full flex items-center'>
              Report
            </p>
          </div>

          <div className='w-[165px] h-[24px] flex items-center gap-[10px] '>
            <HelpOutlineOutlinedIcon />
            <p className='h-full flex items-center'>
              Help
            </p>
          </div>

          <div className='w-[165px] h-[24px] flex items-center gap-[10px] '>
            <SettingsBrightnessOutlinedIcon />
            <p className='h-full flex items-center'>
              LightMode
            </p>
          </div>

        </div>
      </div>

    </div>
  );
}

export default Sidebar;