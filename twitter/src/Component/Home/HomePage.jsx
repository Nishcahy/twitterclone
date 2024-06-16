import { Grid } from '@mui/material';
import React from 'react';
import Navigation from '../Navigation/Navigation';
import HomeSection from '../HomeSection/HomeSection';
import RightPart from '../RightPart/RightPart';
import { Route,Routes } from 'react-router-dom';
import Profile from '../Profile/Profile';
import TweetDetails from '../TweetDetails/TweetDetails';
import Authentication from '../Authentication/Authentication';


export default function HomePage() {
  return (
    <Grid container xs={11} className='px-5 lg:px-36 justify-between'>
        <Grid item xs={0} lg={2.5} className='hidden lg:block w-full relative'>
        <Navigation/>
        </Grid>
        <Grid item xs={12} lg={6} className='px-5 lg:px-9 hidden lg:block w-full relative'>
          <Routes>
            <Route path='/' element={<Authentication/>}></Route>
            <Route path='/home' element={<HomeSection/>}></Route>
            <Route path='/profile/:id' element={<Profile/>}></Route>
            <Route path='/twit/:id' element={<TweetDetails/>}></Route>
          </Routes>
         
        </Grid>

        <Grid item xs={0} lg={3} className='hidden lg:block w-full relative'>
           <RightPart/>
        </Grid>
      
    </Grid>
  );
}