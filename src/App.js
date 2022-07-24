function Food({name, picture}) {
  return (
    <div>
      <h3> I Love {name}</h3>
      <img src= {picture} alt = {name}></img>
    </div>
  )
}

const foodLike = [
  {
    id : 1,
    name: "kimchi",
    image: "https://static.wtable.co.kr/image-resize/production/service/recipe/719/1x1/23757871-daf5-4a3d-b6e3-87b0a975f8d8.jpg",
  },
  {
    id : 2,
    name: "sushi",
    image: "https://static.wtable.co.kr/image-resize/production/service/recipe/719/1x1/23757871-daf5-4a3d-b6e3-87b0a975f8d8.jpg",
  },
  {
    id : 3,
    name: "tendong",
    image: "https://static.wtable.co.kr/image-resize/production/service/recipe/719/1x1/23757871-daf5-4a3d-b6e3-87b0a975f8d8.jpg",
  },  
];


function App() {

  return (
    <div>
      {foodLike.map(dish => <Food key={dish.id} name = {dish.name} picture={dish.image}/>)}
    </div> 
  )
}

export default App;