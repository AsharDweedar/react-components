/*var App = ()=>(
	<ul>
		<Tomato />
		<Potato />
	</ul>
	);
var Tomato = () => (
	<li>Tomato</li>
	);
var Potato = () => (
	<li>Potato</li>
	);

ReactDOM.render(<App />,document.getElementById("app"));

var GroceryListItem = () => (
  <div>
    <h2>My Grocery List</h2>
    <GroceryList items={['Tomato', 'Potato']} /> 
  </div>
);

var GroceryList = (props) => {
	var onListItemClick = (event) => {
	    console.log(event.target.innerHTML);
	 };
	return (
		<ul>
		  <li onClick={onListItemClick}>{props.items[0]}</li>
		  <li onClick={onListItemClick}>{props.items[1]}</li>
		</ul>
	);
}
/Users/rbk12/Library/Application Support/Sublime Text 3/Installed Packages
ReactDOM.render(<GroceryListItem />, document.getElementById("epp"));
*/
class GroceryListItem extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {
	    	done:false
	    };
	}
	onListItemClick() {
	    this.setState({
	      done: !this.state.done
	    });
	}

	render() {
		var style = { 
	      fontWeight: this.state.done ? 'bold' : 'normal'
	      //textDecoration : this.state.done ? 'line-through' : 'none'
	    };
	    return (
	      <li style={style} onClick={this.onListItemClick.bind(this)}> type : {this.props.item} </li>
	    );
	}
}



var GroceryList = (props) => (
		<ul>
		  {props.items.map( i => <GroceryListItem item={i}/>)}
		</ul>
)


ReactDOM.render(<GroceryList items={['Tomato', 'Potato']}/>, document.getElementById("epp"));


