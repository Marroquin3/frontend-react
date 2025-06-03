import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Rol from './pages/Rol';
import User from './pages/User';

const AppRoutes: React.FC = () => {
    return (
        <Router>
            <Routes>
                {/* <Route path="/" element={<Login />} /> */}
                <Route path="/roles" element={<Rol />} />
                <Route path="/users" element={<User />} />
            </Routes>
        </Router>
    );
};
export default AppRoutes;
