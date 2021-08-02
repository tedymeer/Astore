import { ProSidebar, Menu, MenuItem, SidebarContent } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';

import DashboardIcon from '@material-ui/icons/Dashboard';
import DescriptionIcon from '@material-ui/icons/Description';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import SettingsIcon from '@material-ui/icons/Settings';
import './sidebar.css'
import React from 'react'

function Sidebar(props) {
    return (
        <div className="sidebarwrap">
        <ProSidebar collapsed={props.status}>
           
            <SidebarContent>

  <Menu iconShape="square">
    <MenuItem icon={<DashboardIcon/>} onClick={()=>{props.renderAdminPart('dash')}}>Dashboard</MenuItem>
    <MenuItem icon={<DescriptionIcon/>} onClick={()=>{props.renderAdminPart('order')}}>Orders</MenuItem>
    <MenuItem icon={<ShoppingCartIcon/>} onClick={()=>{props.renderAdminPart('product')}}>Products</MenuItem>
    <MenuItem icon={<PeopleIcon/>} onClick={()=>{props.renderAdminPart('customer')}}>Customers</MenuItem>

    <MenuItem style={{marginTop:'auto'}} icon={<SettingsIcon/>} onClick={()=>{props.renderAdminPart('mngadmins')}}>Manage Admins</MenuItem>
  </Menu>

            </SidebarContent>


</ProSidebar>
</div>
    )
}

export default Sidebar
