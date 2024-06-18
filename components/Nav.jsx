"use client"
import React from 'react'
import Image from 'next/image'
import { useState, useEffect } from 'react';
import { auth, storage, db } from '../firebaseConfig';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import Link from 'next/link';
const Nav = () => {
  const [user, setUser] = useState(null);
  const [extend,setExtend]=useState(false);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);
  const handleLogout = async () => {
    await signOut(auth);
  };
  return (
    <>
    <div className='flex Nav'>
        <p className='logo'>VPX</p>
        <div className="topics">
          <p className='topic'>Gallery</p>
          <p className='topic'>Leaderboard</p>
          <div className="searchbar">
            
            <input id="ip1" type="text" placeholder='Search..' name='search' className='search'/>
          </div>
          
        </div>
        {user?
        <>
        <div className='user bigd' key={user.uid}>
          <Link href="/create-post" className='loginbtn'>Create Post</Link>
          <button className='loginbtn' onClick={()=>handleLogout}>Sign Out</button>
          <Image src={user.photoURL} height={45} width={45} className='userimg' />
        </div>
        <div className='smalld' key={user.uid}>

          {extend?<div className="profitems">
            <Link href="/my-profile" className=''>My Profile</Link>
          <Link href="/create-post" className=''>Create Post</Link>
          <button className='' onClick={()=>signOut(auth)}>Sign Out</button></div>:null}
          <Image src={user.photoURL} height={45} width={45} className='userimg' onClick={()=>setExtend(prev=>!prev)}/>
        </div>
        </>
        :<Link href="/Login" className="loginbtn">Login</Link>}
    </div>
    </>
  )
}

export default Nav
