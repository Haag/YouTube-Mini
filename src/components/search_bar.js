import React, {Component} from 'react'

//Class Component:
class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            term: ''
        }
    }
    render () {
        return (
            <div>
                <div className="search-bar">
                    <input 
                    placeholder = "Search"
                    value = {this.state.term}
                    onChange={ e => this.onInputChange(e.target.value)} />
                    <button className="searchbox">
                        <div className="search-tooltip">
                            Search
                        </div>
                    </button>
                </div>
            </div>
        )
    }
    onInputChange(term) {
        this.setState({term})
        this.props.onSearchTermChange(term)
    }   
}

//Functional Component:
// const SearchBar = () => {
//     return <input />
// }

export default SearchBar