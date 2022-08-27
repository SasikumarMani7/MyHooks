import React, {createContext, useState} from 'react'

export const AuthContext = createContext();


//class based
// class AuthContextProvider extends React.Component{

// state = {
// isLoggedIn: false
// }

// changeAuth = () =>{
//     this.setState({isLoggedIn: !this.state.isLoggedIn});
// }

// render(){
//     return(
//         <AuthContext.Provider value={{...this.state, changeAuth: this.changeAuth}}>
//             {this.props.children}
//         </AuthContext.Provider>
//     );
// }

// }

//Function based

const AuthContextProvider = (props) => {
    const{isLoggedIn, setIsLoggedIn} = useState(false);

    const changeAuth = () =>{
        setIsLoggedIn(!isLoggedIn);
    }
    return(
        <AuthContextProvider value={{isLoggedIn, changeAuth:changeAuth}}>
            {props.children}
        </AuthContextProvider>
    );
}

export default AuthContextProvider;