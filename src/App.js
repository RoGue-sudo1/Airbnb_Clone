import "./App.css";
import Navbar from "./Navbar"
import Hero from "./components/Hero"
import data from "./components/data"
import Card from "./components/card"


function App() {
  const cards = data.map(item =>{
    return(
      
      <Card
      
       key={item.title}
       item={item}
      />
      )
  })
  
  return (
    <div>
      <Navbar/>
      <Hero/>
      <section className="cards-list">
      {cards}
      </section>
    </div>
  );
}

export default App;
