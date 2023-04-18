import React,{useState} from 'react'
import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom'
import { useProductsContext } from '../context/products_context'
import { FaTimes } from 'react-icons/fa'
import { links } from '../utils/constants'
import styled from 'styled-components'
import CartButtons from './CartButtons'
import { useUserContext } from '../context/user_context'
import Wrapper from '../assets/Wrapper/SideBarContainer.js'

const Sidebar = () => {
  const {isSidebarOpen, closeSidebar} = useProductsContext()
  return(
    <Wrapper>
      <aside className={`${isSidebarOpen?'sidebar show-sidebar' : 'sidebar'}`}>
        <div className="sidebar-header">
          <img src={logo} className='logo' alt="comfy sloth"/>
          <button className='close-btn' type='button' onClick={()=>closeSidebar()}>
            <FaTimes/>
          </button>
        </div>
        <ul className="links">
          {links.map((link)=>{
            const {id, url, text}=link
            return(
              <li key={id}>
                <Link to={url} onClick={()=>closeSidebar()}>{text}</Link>
              </li>
            )
          })}
              <li>
                <Link to='/checkout' onClick={()=>closeSidebar()}>checkout</Link>
              </li>
        </ul>
        <CartButtons/>
      </aside>
    </Wrapper>
  ) 
}

export default Sidebar
