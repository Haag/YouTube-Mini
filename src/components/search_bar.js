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
        <input 
        value = {this.state.term}
        onChange={ e => this.setState({ term: e.target.value })} />
        </div>
        
        )
    // onInputChange = (e) => {
    //     console.log(e)
    // }
    }
}


//Functional Component:
// const SearchBar = () => {
//     return <input />
// }

export default SearchBar