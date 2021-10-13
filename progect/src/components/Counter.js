

function Counter(){
	let [likes, setLikes] = useState(0);
	let [str, setStr] = useState('text');

	function increment(){
		setLikes(++likes); 
	}
	function decrement(){
		setLikes(--likes); 
	}

	return (
		<div className="counter">
			<p>{likes}</p>
			<button onClick={increment}>Increment</button>
			<button onClick={decrement}>Decrement</button>
		</div>
	);
	
}