import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main>
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2>Hello,</h2>
          <p>I'm Shreyas, A code blooded animal.</p>
        </div>
      </header>
      <p> Welcome to my website. Please feel free to  check out my
        <code><a href="/resume" >resume</a></code>,
        <code><a href="/projects">projects</a></code>,
        or <code><a href="/contact">contact</a></code> me.
      </p>
      <p> Source available <a href="https://github.com/shreyasshivashankar/personal-site"><code>here</code></a>.</p>
    </article>
  </Main>
);

export default Index;
