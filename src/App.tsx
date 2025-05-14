import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Rol from './view/Rol';

const AppRoutes: React.FC = () => {
    return (
        <Router>
            <Routes>
                {/* <Route path="/" element={<Login />} /> */}
                <Route path="/roles" element={<Rol />} />
                {/* <Route path="/users" element={<Users />} /> */}
            </Routes>
        </Router>
    );
};
export default AppRoutes;
