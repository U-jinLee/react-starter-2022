function Food({favorite}) {
  return <h3> I Love {favorite}</h3>
}

function App() {
  
  return (
    <div>
      <Food favorite = "NadoJin"/>
      <Food favorite = "Yoojin"/>
      <div>Hello World</div>
    </div> 
  )
}

export default App;