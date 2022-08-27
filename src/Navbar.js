import React, { useContext } from 'react';
import './App.css'
import { ThemeContext } from './ThemeContext.js'
import { AuthContext } from './AuthContext';


//class based
// class Navbar extends React.Component {
//     render() {
//         return (
//             <AuthContext.Consumer>{(authContext) => {
//                 return (
//                     <ThemeContext.Consumer>{(themeContext) => {
//                         const { isDarkTheme, darkTheme, lightTheme } = themeContext;
//                         const theme = isDarkTheme ? darkTheme : lightTheme;
//                         const { isLoggedIn, changeAuth } = authContext;
//                         return (
//                             <nav className='topnav' style={{ color: theme.color, background: theme.background }}>
//                                 <p onClick={changeAuth}>{isLoggedIn ? 'User Logged In' : 'User Logged Out'}</p>
//                                 <div>
//                                     <button className='button'>Over view</button>
//                                     <button className='button'>Contact</button>
//                                     <button className='button'>Support</button>
//                                 </div>
//                             </nav>
//                         );
//                     }}
//                     </ThemeContext.Consumer>
//                 );
//             }}
//             </AuthContext.Consumer>
//         );
//     }
// }


//function based
const Navbar = () => {
    const { isDarkTheme, darkTheme, lightTheme } = useContext(ThemeContext);
    const { isLoggedIn, changeAuth } = useContext(AuthContext);
    const theme = isDarkTheme ? darkTheme : lightTheme;
    return (
        <nav className='topnav' style={{ color: theme.color, background: theme.background }}>
            <p onClick={changeAuth}>{isLoggedIn ? 'User Logged In' : 'User Logged Out'}</p>
            <div>
                <button className='button'>Over view</button>
                <button className='button'>Contact</button>
                <button className='button'>Support</button>
            </div>
        </nav>
    );
}

export default Navbar; 