import PropTypes from 'prop-types'
function Food({name, picture, rating}) {
  return (
    <div>
      <h3> I Love {name} {rating} / 5</h3>
      <img src= {picture} alt = {name}></img>
    </div>
  )
}

const foodLike = [
  {
    id : 1,
    name: "kimchi",
    image: "https://static.wtable.co.kr/image-resize/production/service/recipe/719/1x1/23757871-daf5-4a3d-b6e3-87b0a975f8d8.jpg",
    rating: 5,
  },
  {
    id : 2,
    name: "sushi",
    image: "https://static.wtable.co.kr/image-resize/production/service/recipe/719/1x1/23757871-daf5-4a3d-b6e3-87b0a975f8d8.jpg",
    rating: 4.9,
  },
  {
    id : 3,
    name: "tendong",
    image: "https://static.wtable.co.kr/image-resize/production/service/recipe/719/1x1/23757871-daf5-4a3d-b6e3-87b0a975f8d8.jpg",
    rating: 3.5,
  },  
];


function App() {

  return (
    <div>
      {foodLike.map(dish => <Food key={dish.id} name = {dish.name} picture={dish.image} rating = {dish.rating}/>)}
    </div> 
  )
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
}

export default App;