import React from 'react';

const NavBar = ({ setIsFormVisible }) => {
  return (
    <div className="pl-5 pt-3 pb-3 min-w-full bg-cyan-500">
      <button
        className="bg-white  w-40 h-10 rounded "
        onClick={() => {
          setIsFormVisible(true);
        }}
      >
        Create job
      </button>
    </div>
  );
};

export default NavBar;
