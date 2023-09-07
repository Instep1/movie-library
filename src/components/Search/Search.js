import React from "react";
import './search.scss';

class Search extends React.Component {
    state = {
        search: '',
        type: 'all',
    }

    handleKey = (e) => {
        if(e.key === 'Enter') {
            this.props.filterName(this.state.search, this.state.type);
        }
      }

    handleFilter = (event) => {
        this.setState(() => ({type: event.target.dataset.type}), () => {
            this.props.filterName(this.state.search, this.state.type);
        })
    }

    render() {
        return (
            <div className="row">
                <div className="input-field">
                    <input 
                    type="search" 
                    className="validate" 
                    placeholder="Search..."
                    value={this.state.search}
                    onChange={(e) => (this.setState({search: e.target.value}))}
                    onKeyDown={this.handleKey}/>
                    <button className="btn search-btn" onClick={() => this.props.filterName(this.state.search, this.state.type)}>Search</button>
                    <div className="search__container-radio">
                        <label>
                            <input name="type" type="radio" checked={this.state.type === 'all'} data-type='all' onChange={this.handleFilter} />
                            <span>All</span>
                        </label>
                        <label>
                            <input name="type" type="radio" checked={this.state.type === 'movie'} data-type='movie' onChange={this.handleFilter} />
                            <span>Films</span>
                        </label>
                        <label>
                            <input name="type" type="radio" checked={this.state.type === 'series'} data-type='series' onChange={this.handleFilter} />
                            <span>Serials</span>
                        </label>
                    </div>
                </div>
            </div>
        )
    }
}

export default Search;