import React from 'react';
import { ThemeContext } from './ThemeContext';


class Todo extends React.Component {
    render(){
        return (
            <ThemeContext.Consumer>{(themeContext) => {
                const { isDarkTheme, darkTheme, lightTheme, changeTheme} = themeContext;
                const theme = isDarkTheme ? darkTheme : lightTheme;
                return (
                    <div style={{ color: theme.color, background: theme.background }}>
                        <p>Buy Book</p>
                        <p>Interview Preparation</p>
                        <p>Plan a tour</p>
                        <button className='button' onClick={changeTheme}>Change Theme</button>
                    </div>
                );
            }
            }
            </ThemeContext.Consumer>
        );
    }
}

export default Todo;