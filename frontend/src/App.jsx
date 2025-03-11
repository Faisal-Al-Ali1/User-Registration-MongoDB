import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Register from './pages/Register';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Order from './pages/Order';
import Orders from './pages/Orders';

const App = () => {
    return (
        <Router>
            <div className="font-sans antialiased min-h-screen bg-gray-50">
                <Routes>
                    <Route path="/" element={< Home/>} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/order" element={<Order />} />
                    <Route path="/orders" element={<Orders />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
