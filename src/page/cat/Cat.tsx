import Header from "./components/Header"
import CatsList from './components/CatsList';

function Cat() {

    return (
      <>
        <Header/>
        <section className=" bg-gray-100 flex justify-center items-center p-11 ">
          
          <CatsList/>

        </section>
      </>
    )
  }
  
export default Cat
  