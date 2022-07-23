function Food({name, picture}) {
  return (
    <div>
      <h3> I Love {name}</h3>
      <img src= {picture}></img>
    </div>
  )
}

const foodLike = [
  {
    name: "kimchi",
    image: "https://static.wtable.co.kr/image-resize/production/service/recipe/719/1x1/23757871-daf5-4a3d-b6e3-87b0a975f8d8.jpg",
  },
  {
    name: "sushi",
    image: "https://static.wtable.co.kr/image-resize/production/service/recipe/719/1x1/23757871-daf5-4a3d-b6e3-87b0a975f8d8.jpg",
  },
  {
    name: "tendong",
    image: "https://static.wtable.co.kr/image-resize/production/service/recipe/719/1x1/23757871-daf5-4a3d-b6e3-87b0a975f8d8.jpg",
  },  
];

function App() {
  
  return (
    <div>
      {foodLike.map(dish => <Food name={dish.name} picture={dish.image} />)}
    </div> 
  )
}

export default App;