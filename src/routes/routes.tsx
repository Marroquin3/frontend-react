import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RoleList from '../components/roles/ContentRol';


const AppRoutes: React.FC = () => {
    return (
        <Router>
            <Routes>
            
                <Route path="/roles" element={<RoleList/>} />
                {/* <Route path="/users" element={<UserList/>} /> */}
            </Routes>
        </Router>
    );
};
export default AppRoutes;
