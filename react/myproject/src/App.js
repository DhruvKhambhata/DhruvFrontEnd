import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Movie from "./Props/Movie";
import ApiMain from "./api/ApiMain";
import MainLife from "./LifeCycle/MainLife";
import NavBar from "./navbar/NavBar";
import LifeMain from "./state/Lifemain";
import Field from "./asssign/Field";
import ImgCom from "./Hooks/ImgCom";
import MainHooks from "./Hooks/MainHooks";


function app() {
    return ( 
    <div>
        {/*
        <Header/>
        <Footer/>
        <Movie />
        <ApiMain/>
         
         <NavBar/>
         <LifeMain/>
         <Field/>
        
        <MainLife/>
        */}
        <MainHooks/>
        
    </div>
    )
}

export default app