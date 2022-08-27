import React, { createContext } from 'react'

export const ThemeContext = createContext();

class ThemeContextProvider extends React.Component {

    state = {
        isDarkTheme: false,
        darkTheme: {
            color: '#fff',
            background: '#5c5c5c'
        },
        lightTheme: {
            color: '#222',
            background: '#d8ddf1'
        }
    }

    changeTheme = () =>{
        this.setState({isDarkTheme: !this.state.isDarkTheme});
    }

    render() {
        return (
            <ThemeContext.Provider value={{ ...this.state, changeTheme: this.changeTheme}}>
                {this.props.children}
            </ThemeContext.Provider>
        );
    }
}

export default ThemeContextProvider;