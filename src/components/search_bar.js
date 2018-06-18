import React,{ Component } from 'react'
// const SearchBar= ()=>{
//   return (
//     <div>
//     <input type="text"/>
//     </div>)
// }
class SearchBar extends Component{
  render(){
    return <input onChange={(event) => console.log(event.target.value)}/>;
  }

}
export default SearchBar;
