import './App.css';
import React from 'react'
import routes from './routes';
import { useRoutes } from 'react-router-dom';
import TopBar from './Components/TopBar/TopBar';
import SideBar from './Components/SideBar/SideBar';

export default function App() {

  let router = useRoutes(routes)

  return (
    <>
      <TopBar/>
      <div className='container'>
        <SideBar/>
        <div className="router-wrapper">
          {router}
        </div>
      </div>
    </>
  )
}