import {createContext, useState, useEffect} from 'react';
import {getToken} from '../../service/ayncStorage';
import {getDocumentsList, getUser} from '../../service/auth'; // Assuming these services exist

const AuthContext = createContext();

const AuthProvider = ({children}) => {
  // Auth states
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // User data states
  const [userData, setUserData] = useState(null);
  const [documents, setDocuments] = useState([]);

  // Function to check token and update login status
  const checkToken = async () => {
    try {
      const token = await getToken();
      setIsLoggedIn(!!token?.token);
    } catch (error) {
      console.error('Error retrieving token:', error);
      setIsLoggedIn(false);
    }
  };
  // Function to fetch user data and documents after login
  //   const fetchUserData = async () => {
  //     try {
  //       const {sub} = await getToken();
  //       const user = await getUser(sub);
  //       const docs = await getDocumentsList();
  //       setUserData(user);
  //       setDocuments(docs.data);
  //     } catch (error) {
  //       console.error('Error fetching user data or documents:', error);
  //     }
  //   };

  // Update user data if needed
  const updateUserData = (user, docs) => {
    setUserData(user);
    setDocuments(docs);
  };

  useEffect(() => {
    checkToken();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        checkToken,
        setIsLoggedIn,
        userData,
        documents,
        updateUserData,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export {AuthProvider, AuthContext};
