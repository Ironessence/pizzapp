import {createContext, useState, useEffect} from 'react';
import {onAuthStateChangedListener, createUserDocumentFromAuth} from '../utils/firebase';

//USER CONTEXT-----------------------------------
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
    openAccountTab: false,
    setOpenAccountTab: () => {},
    openRegisterPopup: false,
    setOpenRegisterPopup: () => {},
    openProfileTab: false,
    setOpenProfileTab: () => {},
    
});
//------------------------------------------------

//USER PROVIDER----------------------------------
export const UserProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [openAccountTab, setOpenAccountTab] = useState(false);
    const [openRegisterPopup, setOpenRegisterPopup] = useState(false);
    const [openProfileTab, setOpenProfileTab] = useState(false);
    
    
    const value = {
        currentUser,
        setCurrentUser,
        openAccountTab,
        setOpenAccountTab,
        openRegisterPopup,
        setOpenRegisterPopup,
        openProfileTab,
        setOpenProfileTab,
        
    }

//-----------------------------------------------

//UNSUBSCRIBE----------------------------------------
useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
        if(user) {
            createUserDocumentFromAuth(user);
        }
        setCurrentUser(user);
    })

    return unsubscribe;
}, [])
//----------------------------------------------------

return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}