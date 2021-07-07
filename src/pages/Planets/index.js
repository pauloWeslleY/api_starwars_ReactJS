import PlanetsWorld from "../../components/EarthPlanets/EarthPlanets";

function Planets() {
   const planets = {
      title: "Planets"
   }
   return (
      <>
         <h1>{planets.title}</h1>
         <hr />
         <PlanetsWorld />
      </>
   )
}

export default Planets;