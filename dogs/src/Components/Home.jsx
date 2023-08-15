import React from "react";
import Feed from "./Feed/Feed";
import Head from "./Helper/Head";

const Home = () => {

  
  return (
    <section className="container mainContainer">
     <Head title="Photos" description="Homepage from dogs website, with photos feed"/>
     <Feed />
      
    </section>
  );
};

export default Home;
