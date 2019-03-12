import React, { Component } from 'react';
import './css/Content.css'
import { Link } from "react-router-dom";
import Navigation from './Navigation';
import SearchField from "./SearchField";
import neobis from './css/logo/neobis_logo.png';

class Universities extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isLoading: false,
            error: null,
        };
    }

    componentDidMount() {
        this.setState({ isLoading: true });
        const API = `http://46.101.146.101:8081/universities/`;
        fetch(API)
            .then(response => response.json())
            .then(json => this.setState({data: json}))
    }

    render() {
        const { data } = this.state;

        return (
            <div>
                <Navigation className={"menu-block"}/>
                <div className="logo_neobis-block">
                    <img className="logo_neobis" src={neobis} alt="neobis"/>
                </div>
                <div className="test">
                <SearchField/>
                    <div id='container' className='main'>
                        {data.map(data  =>
                            <div className="content" key={data.id}>
                                <Link to={`/university/${data.id}/`}><img src={data.main_image_url} className="images" /></Link>
                                <h3 className="title">{data.title}</h3>
                                <div className="description_content">
                                    <p className="description">{data.description} </p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        )
    }
}

export default Universities;