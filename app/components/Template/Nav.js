import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import data from '../../data/contact';

const Nav = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${BASE_PATH}/images/me_icon.jpg`} alt="" />
      </Link>
      <header>
        <h2>Bagus Tri Nanda</h2>
        <p><a href="mailto:bagustrinanda@yahoo.com">bagustrinanda@yahoo.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>Tipis - tipis</h2>
      <p>Saya Bagus Tri Nanda. Saya suka berpikir kreatif dan inovatif.
        Mmebuat sesuatu hal dengan estetika, logika dan etika.
      </p>
      <ul className="actions">
        <li>
          {window.location.pathname !== `${BASE_PATH}/resume` ? <Link to="/resume" className="button">Lebih Jauh :)</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ul className="icons">
        {data.map((s) => (
          <li key={s.label}>
            <a href={s.link}>
              <FontAwesomeIcon icon={s.icon} />
            </a>
          </li>
        ))}
      </ul>
      <p className="copyright">&copy; Bagus Tri Nanda <Link to="/">bagustrinanda@yahoo.com</Link>.</p>
    </section>
  </section>
);

export default Nav;
