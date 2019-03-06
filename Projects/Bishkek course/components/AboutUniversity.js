import React, { Component } from 'react';
import {Menu} from "antd/lib/menu";
import Navigation from './Navigation';
import './css/About.css';
import neobis from './css/logo/neobis_logo.png';

class AboutUniversity extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
    }
    componentDidMount() {
        const API = `http://46.101.146.101:8081/universities/${this.props.match.params.id}/`;
        fetch(API)
            .then(response => response.json())
            .then(json => this.setState({data: json}))
    }

    componentWillMount = async() => {
        const API = await fetch(`http://46.101.146.101:8081/universities/${this.props.match.params.id}/`);
        const response = await API.json();
        this.setState({contacts: response.contacts})
    };

    render() {
        const {data}  = this.state;
        console.log(data);
        return (
            <div>
                	<Navigation/>

                <div className="logo_neobis-block">
                    <img className="logo_neobis" src={neobis} alt="neobis"/>
                </div>
                <div className="test">
                	<div className="detailed course-content">
                    <article className="about">
                        <div className="about-course">
                            <img className="logo_course" src={data.logo_image_url} />
                            <div className="course">
	                            <h3 className="title">{data.title}</h3>
                     	    </div>
                        </div>
                        <div className="Contacts">
                            {this.state.contacts && this.state.contacts.map((contact) => {
                                return (
                                    <div className="contact-type" key={contact.type}>
                                        <p>{contact.type}</p>
                                        <p>{contact.contact}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </article>
                    <article className="description">
                        <h3>Описания</h3>
                        <div className="description-course">
                            {data.description}
                        </div>
                    </article>
                </div>
                </div>
            </div>
        )
    }
}

export default AboutUniversity;