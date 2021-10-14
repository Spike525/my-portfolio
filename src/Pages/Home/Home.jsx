import React from "react";

import theme from "./Home.module.scss";
import image from '../../static/assets/space-bg.jpeg'

const Home = () => {
  return (
    <main className={theme.home}>
        <img src={image} alt="" className={theme.bgImage}/>
      <div className={theme.wrapper}>
        <section>
          <h1 className={theme.title}>This is Home page</h1>
        </section>
      </div>
    </main>
  );
};

export default Home;
