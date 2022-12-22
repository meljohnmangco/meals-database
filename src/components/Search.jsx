import { useState } from 'react'
import { useGlobalContext } from '../context'

const Search = () => {
	const [text, setText] = useState('');
	const {setSearchTerm, fetchRandomMeal} = useGlobalContext()

	const handleChange = (e) => {
		setText(e.target.value)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		if(text) {
			setSearchTerm(text)
		}
	}

	const handleRandomMeal = () => {
		setSearchTerm('')
		setText('')
		fetchRandomMeal()
	}

	return (
		<header className="search-container">
			<form onSubmit={handleSubmit}>
				<input type="text" placeholder="type your favorite meal" className="form-input" value={text} onChange={handleChange}/>
				<button type="submit" className="btn">Search Meal</button>
				<button type="button" className="btn btn-hipster" onClick={handleRandomMeal}>Suprise Me!</button>
			</form>
		</header>
	)
}

export default Search;