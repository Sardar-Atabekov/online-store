import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import {Link} from "react-router-dom";
import './css/SearchField.css';

class SearchField extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            courses: '',
        };

    }

    handleClick = (event) => {
        const name = event.target.name;
        this.setState({courses: event.target.value});
    };

    Click = () => {
        this.props.history.push("/searched", this.state.courses);
    }

    render() {
        console.log(this.state.courses);

        return (
            <div className={'search_block searching_form'}>
                <form>
                    <input className="search_input" placeholder="Поиск курса" onChange={this.handleClick}  value={this.state.courses}/>
                    <button className="request-btn" onClick={this.Click}><Link className={'btn-text'} to={'/searched'}>Поиск</Link></button>
                </form>
                <h1 className="result-search">Курсы по запросу</h1>
            </div>
        )
    }
}
export default withRouter(SearchField);