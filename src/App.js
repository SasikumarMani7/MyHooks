import React from 'react'
import './App.css'
import Navbar from './Navbar.js'
import Todo from './Todo.js'
import ThemeContextProvider from './ThemeContext.js'
import AuthContextProvider from './AuthContext'


const App = () => {
  return (
    <div className="App">
      <div>
        <h1 className="App-header">Hooks concept</h1>
        <hr />
        <AuthContextProvider>
        <ThemeContextProvider>
          <Navbar />
          <Todo />
        </ThemeContextProvider>
        </AuthContextProvider>
      </div>
    </div>
  );
}

export default App;