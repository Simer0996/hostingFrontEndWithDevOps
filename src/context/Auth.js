import React, { useEffect, useState } from 'react';
import { useLocalStorage } from '../hooks';

const AuthContext = React.createContext({
    isSigningIn: false,
    signIn: false,
    isOnboarded: false,
    location: '',
    hasShowOnboarding: false,
});

const AuthContextProvider = props => {
    const [user, setUser] = useState(null);
    const [isSigningIn, setIsSigningIn] = useState(false);
    const [location, setLocation] = useState('');
    const [hasShowOnboarding, setHasShowOnboarding] = useState(false);
    const { getValueFor } = useLocalStorage();

    useEffect(() => {
        const getLocation = async () => {
            let location = await getValueFor('location');
            setLocation(JSON.parse(location).description);
        };
        getLocation();
    }, []);

    return (
        <AuthContext.Provider
            value={{
                user,
                isSigningIn,
                hasShowOnboarding,
                setUser,
                setHasShowOnboarding,
                setIsSigningIn,
                location,
                setLocation,
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthContextProvider };