import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './css/Content.css';
import Navigation from './Navigation';
import SearchField from "./SearchField";
import neobis from './css/logo/neobis_logo.png';

class Subcategories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subcategory: [],
        };
    }
    componentDidMount() {
        this.setState({ isLoading: true });
        const API = `http://46.101.146.101:8081/subcategories/${this.props.match.params.id}/`;
        fetch(API)
            .then(response => response.json())
            .then(json => this.setState({subcategory: json}))
    }

    render() {
        const { subcategory } = this.state;
        console.log(subcategory);

        return (
            <div>
                <Navigation/>
                <div className="logo_neobis-block">
                    <img className="logo_neobis" src={neobis} alt="neobis"/>
                </div>
                <SearchField/>
                <div className="test">
                    <div id='container' className='main' key={subcategory.id}>
                        {subcategory.map((data)  =>
                            <div className="content" key={data.id}>
                                <Link to={`/subcategory/${data.id}`}> <img src={data.main_image_url} className="images" alt='course' /></Link>
                                <h3 className="title">{data.title}</h3>
                                <div className="description_content">
                                    <p className="description">{data.description} </p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default Subcategories;