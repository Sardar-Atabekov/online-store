import React, { Component } from 'react';
import './css/Navigation.css';
import  Content from './Content';
import 'antd/lib/menu/style/css';
import { Menu, Icon } from 'antd';
import { Router, Route, Switch } from 'react-router';

const API = "http://46.101.146.101:8081/categories-subcategories/";
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Navigation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            titles: [
                // get: function(id) {
                // const isTitle = t => t.id === id
                // return this.titles.find(isTitle)
                // }
            ]
        };
    }
    componentDidMount() {
        fetch(API, {mode: 'cors'}, {method: 'get'})
            .then(response => response.json())
            .then(json => this.setState({titles: json}))
    }

    render() {
        let {titles} = this.state;
        const Links = () => (
            <main>
                <Switch>
                    <Route path='/content' component={Content}/>
                </Switch>
            </main>
        );
        console.log(titles);
        return (
            <div style={{ width: 256 }} className="menu">
                <h1 className="logo">BishkekCourses</h1>
                <Menu mode="vertical" className="all-categories" style={{ width: 257,  background:6849}}>
                    {titles.map((one)=>{
                        return(

                            <SubMenu className="titles" key={one.id} title={<a href={one.title} className="one-title">{one.title}</a>} >
                                <MenuItemGroup style={{ width: 250}} className="sub-categories">
                                    {one.subcategories.map((sub)=>{
                                        return(
                                            <Menu.Item className="sub-titles" key={sub.id}><span className="sub-title">{sub.title}</span></Menu.Item>
                                        );
                                    })}
                                </MenuItemGroup>
                            </SubMenu>
                        );
                    })}
                </Menu>
            </div>

return (
    <Router>
      <div style={{ width: 256 }} className="menu">
                <h1 className="logo">BishkekCourses</h1>
                <Menu mode="vertical" className="all-categories" style={{ width: 257,  background:6849}}>
                    {titles.map((one)=>{
                        return (
                            //<Router>
                                <Link to={`${API}${one.id}`} key={one.id}>
                                    <SubMenu className="titles" title={<a href={one.title} className="one-title">{one.title}</a>} >
                                        <MenuItemGroup style={{ width: 250}} className="sub-categories">
                                            {one.subcategories.map((sub)=>{
                                                return (
                                                    <Router>
                                                        <Link to={`${API}${sub.id}`} key={sub.id}>
                                                           <Menu.Item className="sub-titles"><span className="sub-title">{sub.title}</span></Menu.Item>
                                                        </Link>
                                                        <Route exact path={`${API}${sub.id}`} component={Content} />
                                                    </Router>
                                                );
                                            })}
                                        </MenuItemGroup>
                                    </SubMenu>
                                </Link>
                                <Route exact path={`${API}${one.id}`} component={Content} />
                            // </Router>
                        );
                    })}
                </Menu>
            </div>
    </Router>
    );

    }
}
export default Navigation;