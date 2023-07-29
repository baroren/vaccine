import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppNavbar from './components/AppNavBar';
import RegistrationPage from './components/RegistrationPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import RegistrationForm from "./components/RegistrationForm";
import LandingPage from "./components/LandingPage";
import SummaryPage from "./components/SummaryPage";



const App = () => {
    return (
        <Router>
            <AppNavbar />
            <Routes>
                <Route path="/" element={<LandingPage />} />

                <Route path="/Register" element={<RegistrationForm />} />
                <Route path="/Summary" element={<SummaryPage />} />

            </Routes>
        </Router>
    );
};

export default App;
