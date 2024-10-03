import React, {useState} from 'react';
import Login from './src/Screens/Login';
import BottomNavigation from './src/Navigation/BottomNavigation';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to manage login status

  if (isLoggedIn) {
    return <BottomNavigation />;
  }
  return <Login setIsLoggedIn={setIsLoggedIn} />;
}
