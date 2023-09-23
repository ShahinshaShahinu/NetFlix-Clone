import React from 'react';
import './NavBar.css';

function NavBar() {
  return (
    <div className='navbar'>
      <div className='logo_avtar'>
       <img className='logo' src=" https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="NetFlix Logo" />
       <img className='avatar' src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="Avatar" />
      <div className='NavPages'>
       <p className='Home'>Home</p>
       <p className='TvShow'>Tv Show</p>
       <p className='Movies'>Movies</p>
       <p className='Recent_all'>Recent All</p>
       <p className='MyList'>My List</p>
       </div>
    </div>
    </div>
  )
}

export default NavBar;
