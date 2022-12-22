
import { useGlobalContext } from '../context'
import { AiFillLike } from 'react-icons/ai'

const Meals = () => {
	const { meals, loading, selectMeal, addToFavorites } = useGlobalContext()

	if(loading) {
		return <section className="section">
			<h4>Loading...</h4>
		</section>
	}
	if(meals.length < 1) {
		return <section className="section">
			<h4>Meal not found. Please try again</h4>
		</section>
	}
	
	return <section className="section-center">
		{meals.map((singleMeal) => {
			const {idMeal, strMeal:title, strMealThumb:image} = singleMeal
	
			return <article key={idMeal} className="single-meal">
				<img src={image} className="img" onClick={() => selectMeal(idMeal)}/>
				<footer>
					<h5>{title}</h5>
					<button className="like-btn" onClick={()=> addToFavorites(idMeal)}><AiFillLike/></button>
				</footer>					
			</article>
		})}
	</section>
}

export default Meals;