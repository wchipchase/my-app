import React, { Component } from 'react';
import TimeOfDay from '../TimeOfDay/TimeOfDay';
import NavBar from '../NavBar/NavBar';
import Header from '../Header/Header';
import MainContent from '../MainContent/MainContent';
import Footer from '../Footer/Footer';

class Layout extends Component {
    render() {
        return (
            <div className = 'layout'>
                <TimeOfDay />
                {/* <NavBar />
                <Header />
                <MainContent />
                <Footer /> */}
            </div>
        )
    }
}

export default Layout;