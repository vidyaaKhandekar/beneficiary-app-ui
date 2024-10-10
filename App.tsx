import React, {useState} from 'react';
import Login from './src/screens/auth/Login';
import BottomNavigation from './src/navigation/BottomNavigation';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to manage login status

  if (isLoggedIn) {
    return <BottomNavigation />;
  }
  return <Login setIsLoggedIn={setIsLoggedIn} />;
}
