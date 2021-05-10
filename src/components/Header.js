
import React from 'react';
import './Header.css';
/* eslint-disable import/no-anonymous-default-export */
export default () => {
    return (
        <header className='black'>
            <div className='header--logo'>
               <a href='/'>
                   <img scr='https://upload.wikimedia.org/wikipedia/commons/1/15/Logonfx.png' alt='Netflix'/>
                </a> 
            </div>

            <div className='header--user'>
              <a href='/'>
                  <img scr='http://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png' alt='Usuário'/>
                </a>
            </div>
        </header>
    )     

}