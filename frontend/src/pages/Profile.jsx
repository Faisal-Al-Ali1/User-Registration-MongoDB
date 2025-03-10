import { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = () => {
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:8000/auth/profile", { withCredentials: true })
            .then(res => setProfile(res.data))
            .catch(() => alert("Access denied"));
    }, []);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                {profile ? (
                    <div>
                        <h2 className="text-2xl font-bold text-center mb-6">Welcome, {profile.username}</h2>
                        <p className="text-center">Email: {profile.email}</p>
                    </div>
                ) : (
                    <div className="text-center">Loading...</div>
                )}
            </div>
        </div>
    );
};

export default Profile;
