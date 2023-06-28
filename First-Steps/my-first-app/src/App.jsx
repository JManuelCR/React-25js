import KoderCard from "./components/koderCard";
export default function App() {
  const nombre = "Manuel";
  const apellido = "Cabrera";

  return (
    <>
      <h1 className="header">Lista de coders</h1>
      <section className="kodersList">
      <KoderCard firstName="Charles" lastName="Silva"/>
      <KoderCard firstName="Paola" lastName="Arreaola"/>
      <KoderCard firstName="Luis" lastName="Suarez"/>
      <KoderCard firstName="Christian" lastName="Dinter"/>
      <KoderCard firstName="Jorge" lastName="Ramos"/>
      <KoderCard firstName="Damiam" lastName="Tapia"/>
      <KoderCard firstName="Andres" lastName="Garcia"/>
      </section>
    </>
  );
}
