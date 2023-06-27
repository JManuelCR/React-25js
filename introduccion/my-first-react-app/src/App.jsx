import KoderCard, { PI } from "./components/KoderCard";
import { koders } from "./data/koders"



export default function App() {
  return (
    <>
      <p>Lista de koders</p>

      <section className="kodersList">
        {
          koders.map( (x, inx) => {
            return (
              <KoderCard  
              key = { `koder-card-${inx}`} // identificador para el id de react
              firstName= {x.firstName} 
              lastName = {x.lastName} 
              isActive = {x.isActive}
              skills = {x.skills}
              />
            )
          })
        }
      </section>
    </>
  );
}
