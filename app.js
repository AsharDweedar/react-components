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