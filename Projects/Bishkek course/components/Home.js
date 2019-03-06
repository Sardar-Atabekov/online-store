import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './css/Content.css';
import Navigation from './Navigation';
import SearchField from "./SearchField";
import neobis from './css/logo/neobis_logo.png';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
    }
    componentDidMount() {
        const API = "http://46.101.146.101:8081/categories-subcategories/";
        fetch(API)
            .then(response => response.json())
            .then(json => this.setState({data: json}))
    }

    render() {
        const { data } = this.state;

        console.log(data);
        return (
            <div>
                <Navigation/>
                 <div className="logo_neobis-block">
                        <img className="logo_neobis" src={neobis} alt="neobis"/>
                </div>
                <SearchField/>
                <div className="test">
                    <div id='container' className='main' key={data.id}>
                        {data.map((data)  =>
                            <div className="content" key={data.id}>
                                <Link to={{pathname: `/subcategories/${data.id}`, state: { courseId: data.id} }}>
                                    <img src={data.category_image_url} className="images" alt='course' />
                                    </Link>
                                <h3 className="title">{data.title}</h3>
                                <div className="description_content">
                                    <p className="description">{data.description}</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
