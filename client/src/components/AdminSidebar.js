import { ProSidebar, Menu, MenuItem, SidebarContent } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';

import DashboardIcon from '@material-ui/icons/Dashboard';
import DescriptionIcon from '@material-ui/icons/Description';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import './sidebar.css'
import React from 'react'

function Sidebar() {
    return (
        <ProSidebar>
           
            <SidebarContent>

  <Menu iconShape="square">
    <MenuItem icon={<DashboardIcon/>}>Dashboard</MenuItem>
    <MenuItem icon={<DescriptionIcon/>}>Orders</MenuItem>
    <MenuItem icon={<ShoppingCartIcon/>}>Products</MenuItem>
    <MenuItem icon={<PeopleIcon/>}>Customers</MenuItem>
  </Menu>

            </SidebarContent>


</ProSidebar>
    )
}

export default Sidebar
