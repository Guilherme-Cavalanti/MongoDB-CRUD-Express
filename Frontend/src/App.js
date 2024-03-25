import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import InsertPage from './pages/InsertPage/InsertPage';
import Header from './Header';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import { ThemeContext } from './context/ThemeContext';
import { useContext, useEffect } from 'react';
import { HomePage } from './pages/Home/homePage';
import { Footer } from './Footer';
import { AboutPage } from './pages/About/about';
import { BrowsePage } from './pages/Browse/browse';
import { TasksPage } from './pages/Tasks/tasks';
import { HomeBrowser } from './pages/HomeBrowser/homeBrowser';
import { DeletedPage } from './pages/Deleted/deletedPage';
import { SingleTask } from './pages/SingleTask/singleTask';

function App() {
  const {darkTheme, switchTheme} = useContext(ThemeContext)
  const setDeletedTasks = () => {
    const del = localStorage.getItem("deletedTasks")
    console.log("del:",del)
    if(del===null)localStorage.setItem("deletedTasks","[]")
  }
  setDeletedTasks()
  return (
    <div className={darkTheme ? "App dark-theme" : "App light-theme"}>
      <Router>
        <Header />
        <Routes>
          <Route path = "/" Component={HomePage} />
          <Route path="/about" Component={AboutPage} />
          <Route path="/browse" Component={BrowsePage}>
            <Route index Component={HomeBrowser} />
            <Route path="home" Component={HomeBrowser} />
            <Route path="tasks" Component={TasksPage} />
            <Route path="insert" Component={InsertPage} />
            <Route path="deleted" Component={DeletedPage} />
            <Route path="task" Component={SingleTask} />
          </Route>
        </Routes>
        <Footer />
      </Router>
    </ div>
  );
}

export default App;
