import React from "react";
import Skill from "../components/Skill";
import Skip from "../components/Skip";
import Header from "../components/Header";
import Intro from "../components/Intro";
import Contact from "../components/Contact";
import Site from "../components/Site";
import Port from "../components/Port";
import Footer from "../components/Footer";
import Main from "../components/Main";

const HomeView = () => {
    return (
        <>
            <Skip />
            <Header />
            <Main>
                <Intro />
                <Skill />
                <Site />
                <Port />
                <Contact />
            </Main>
            <Footer />
        </>
    );
};

export default HomeView;
