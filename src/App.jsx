import { useLoaderData } from "react-router-dom";
import "./App.css";
import CoffeeCard from "./Components/CoffeeCard";
import { useState } from "react";

function App() {
  const loadedCoffees = useLoaderData();
  
  const [coffees, setCoffees] = useState(loadedCoffees)
  
  

  return (
    <div className="m-24">
      <h1 className="text-6xl text-center mb-16 font-bold text-purple-600">
        Coffee Shop : {coffees.length}
      </h1>

      <div className="grid md:grid-cols-2 gap-5">
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee._id} coffee={coffee} coffees = {coffees} setCoffees = {setCoffees}></CoffeeCard>
        ))}
      </div>
    </div>
  );
}

export default App;
