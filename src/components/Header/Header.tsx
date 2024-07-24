import React from 'react';
import '../../styles/Header.css'


const Header: React.FC= () => {
  return (
    <header className="file-explorer-header">
      <h1 className="file-explorer-heading">File Explorer</h1>
      <h3 className="file-explorer-subheading">Using React, Typescript and CSS</h3>
    </header>
  );
};

export default Header;
