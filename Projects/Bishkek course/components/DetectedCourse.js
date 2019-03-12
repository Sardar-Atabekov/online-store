import React, { Component } from 'react';
import "./css/SearchField.css";
import {Link} from "react-router-dom";
import Navigation from "./Navigation";
import SearchField from "./SearchField";
import neobis from './css/logo/neobis_logo.png';

class DetectedCourse extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
    };

    componentDidMount(){
    fetch(`http://46.101.146.101:8081/courses/search/?search=${this.props.location.state}`)
                .then(response => response.json())
                .then(json => this.setState({data: json}))

    }

    render() {
        console.log(this.state.name);
        console.log(this.state);
        return (
            <div>
                <Navigation className={"menu-block"}/>
                <div className="logo_neobis-block">
                    <img className="logo_neobis" src={neobis} alt="neobis"/>
                </div>

                <div className="test">
                    <SearchField/>
                    <div id='container' className='main'>
                        {this.state.data.map((course)=> {
                            return (
                                <div className="content" key={course.id}>
                                    <Link to={`/subcategory/${course.id}`}> <img src={course.main_image_url} className="images" alt='course' /></Link>
                                    <h3 className="title">{course.title}</h3>
                                    <div className="description_content">
                                        <p className="description">{course.description} </p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    };
}

export default DetectedCourse;