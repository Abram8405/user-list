import React from 'react';
import { Link } from 'react-router-dom';

import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Header = () => {
  return (
    <>
      <header className="App-header">
        <Link to="/">
          <FontAwesomeIcon icon={faHome} /> GitHub users
        </Link>
      </header>
    </>
  );
};
