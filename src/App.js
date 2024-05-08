import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
    const [quote, setQuote] = useState(null)
	const [author, setAuthor] = useState(null);

	const fetchNewQuote = () => {
		fetch('http://api.quotable.io/random')
			.then(res => res.json())
			.then(
				(quote) => {
					setQuote(quote.content)
					setAuthor(quote.author)
				}
			)
	}

	useEffect(() => {
		fetchNewQuote()
	})

	return (
		<div className="App">
			<header className="App-header">
				<div className='App-newWindow'>
					<h2>{quote}</h2>
					<h3>{author}</h3>
					<button className='button'  onClick={fetchNewQuote}>New</button>
				</div>
				<div className='App-comunication'>
					<a className='App-info' href="https://github.com/DenisMov">© Denys Movchan</a>
				</div>
			</header>
		</div>
	);
}


export default App;
