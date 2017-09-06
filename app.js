var App = ()=>(
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

var GroceryList = (props) => (
  <ul>
    <li>{props.items[0]}</li>
    <li>{props.items[1]}</li>
  </ul>
);


ReactDOM.render(<GroceryListItem />, document.getElementById("epp"));
