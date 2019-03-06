import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './css/Navigation.css';
import 'antd/lib/menu/style/css';
import { Menu } from 'antd';
import rocket from './css/logo/rocket.png';

const API = "http://46.101.146.101:8081/categories-subcategories/";
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Navigation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            titles: [
            ]
        };
    }

    componentDidMount() {
        fetch(API)
            .then(response => response.json())
            .then(json => this.setState({titles: json}))
    }

    render() {
        let {titles} = this.state;

        return (
            <div className="menu">
                <Link to={'/home'}> <h1 className="logo"><img src={rocket} className="bc_logo" />BishkekCourses</h1></Link>
                <Menu mode="vertical" className="all-categories" style={{ width: 257,  background:6849}}>
                    {titles.map((one)=>{
                        return(
                            <SubMenu className="titles" key={one.id} title={<Link to={{pathname: `/courses/${one.id}/`}} className="one-title">{one.title}</Link>} >
                                <MenuItemGroup style={{ width: 250}} className="sub-categories">
                                    {one.subcategories.map((sub)=>{
                                        return(
                                            <Menu.Item className="sub-titles" key={sub.id}><Link className="sub-title" to={{pathname: `/subcategories/${sub.id}/`}} key={sub.id} ><p className={'sub-title'}>{sub.title}</p></Link></Menu.Item>
                                        );
                                    })}
                                </MenuItemGroup>
                            </SubMenu>
                        );
                    })}
                </Menu>
                <ul className="university"><Link to={'/universities'} ><li className={'text'}>Университеты</li></Link></ul>
            </div>
        )
    }
}
export default Navigation;