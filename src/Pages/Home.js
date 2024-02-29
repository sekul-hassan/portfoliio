import React, {Fragment} from 'react';
import HomeTop from "../Components/HomeTop";
import Menu from "../Components/Menu";
import Footer from "../Components/Footer";

function Home(props) {
    return (
       <Fragment>
           <Menu/>
           <HomeTop/>
           <Footer/>
       </Fragment>
    );
}

export default Home;
