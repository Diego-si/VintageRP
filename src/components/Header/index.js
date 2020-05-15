import React from 'react';
import { FaDiscord, FaHome, FaStar } from 'react-icons/fa';
import { AiFillSketchCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { Nav } from 'reactstrap';
import { Nave } from './styled';
// <nav class="navbar navbar-light" style="background-color: #e3f2fd;">

export default function Header() {
  return (
    <>
      <div>
        <Nave>
          <Nav
            className="navbar navbar-expand-lg justify-content-center fixed-top navbar-light "
            style={{ background: '#110429' }}
          >
            <a href="https://discord.gg/pAuv7m9" target="_blank">
              <FaDiscord size={40} />
            </a>
            <Link to="/">
              <FaHome size={40} />
            </Link>{' '}
            <Link to="/Vips">
              <FaStar size={40} />
            </Link>
            <Link to="/Nitro">
              <AiFillSketchCircle size={40} />
            </Link>
          </Nav>
        </Nave>
      </div>
    </>
  );
}
