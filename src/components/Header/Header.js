import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href='/'>
        <a style={{display: "flex", alignItems: "center", color: 'white'}}>
          <DiCssdeck size="3rem"/><span> home </span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink> two </NavLink>
        </Link>
      </li>
      <li>
        <Link href="#projects">
          <NavLink> three </NavLink>
        </Link>
      </li>
      <li>
        <Link href="#projects">
          <NavLink> four </NavLink>
        </Link>
      </li>
    </Div2>
  </Container>
);

export default Header;