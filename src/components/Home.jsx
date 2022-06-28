import React from "react";
import MenuBar from "./MenuBar";
import Section1 from "./Section1";
import { Button } from "react-bootstrap";
import Section2 from "./Section2";
import Section3 from "./Section3";

const Home = () => {
  return (
    <>
      <section className="Header">
        <MenuBar
          leftContent={<img src="./img/logo.jpg" />}
          headText={"모델"}
          headText2={"구매"}
          headText3={"체험"}
          headText4={"멤버스"}
          headText5={"제네시스"}
          rightContent={"고객센터"}
          rightContent2={"마이 페이지"}
        />
      </section>
      <section>
        <Section1 />
      </section>
      <section>
        <Section2 />
      </section>
      <section>
        <Section3 />
      </section>
    </>
  );
};

export default Home;
