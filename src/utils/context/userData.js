import {createContext, useState} from 'react';

// Create the UserData context
const UserDataContext = createContext();

const UserDataProvider = ({children}) => {
  const [userData, setUserData] = useState(null);
  const [documentList, setDocumentList] = useState([]);

  // Function to set user data and document list after login
  const updateUserData = (user, documents) => {
    setUserData(user);
    setDocumentList(documents);
    console.log(userData, 'data in contex');
  };

  // Function to clear user data on logout or when needed
  const clearUserData = () => {
    setUserData(null);
    setDocumentList([]);
  };

  return (
    <UserDataContext.Provider
      value={{
        userData,
        documentList,
        updateUserData,
        clearUserData,
      }}>
      {children}
    </UserDataContext.Provider>
  );
};

export {UserDataProvider, UserDataContext};
