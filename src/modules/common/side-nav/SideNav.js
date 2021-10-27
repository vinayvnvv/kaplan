import React from "react";
import {NavLink} from "react-router-dom";
import './style.scss';

const menus = [
    {title: 'Books', icon: 'ion-ios-book-outline', path: '/books'},
    {title: 'Content Management', icon: 'ion-ios-photos-outline', path: '/management'},
    {title: 'Courses', icon: 'ion-ios-paper-outline', path: '/courses'},
    
]
function SideNavService() {
    this.rootSelector = 'app';
    this.collpaseClassName = 'collapse';
    this.toggleSideNav = function() {
        const el = document.getElementsByClassName(this.rootSelector)[0];
        if (el) {
            if (el.classList.contains(this.collpaseClassName)) el.classList.remove(this.collpaseClassName);
            else el.classList.add(this.collpaseClassName);
        }
    }
}
export const sideNavService = new SideNavService();


const SideNav = () => {
    return <div className="app-sidenav">
        <div className="lists">
            <div className="itm">
                <i className={'ion-navicon'} onClick={() => sideNavService.toggleSideNav()}/>
                <span>Menu</span>
            </div>
            {menus.map(itm => 
                <NavLink to={itm.path} className="itm">
                    <i className={itm.icon} />
                    <span>{itm.title}</span>
                </NavLink>
            )}
            
        </div>
    </div>
}
export default SideNav