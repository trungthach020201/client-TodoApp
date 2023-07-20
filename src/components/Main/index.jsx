import React from 'react'
import styles from './styles.module.css'
import TodoList from '../TodoList'

const Main = () => {
  
    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.reload();
    }
    return (
    <div className={styles.main_container}>
        <nav className={styles.navbar}>
            <h1>Wellcome To Do App</h1>
            <button className={styles.btn_white} onClick={handleLogout}>Logout</button>
        </nav>
        <TodoList/>
    </div>
  )
}



export default Main;
