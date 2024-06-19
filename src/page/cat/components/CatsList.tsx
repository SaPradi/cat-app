import { useEffect,useState } from "react"
import { getAllCats } from "../../../service/cats.service"
import { CatsReponse } from '../../../interfaces';
import Card from "./Card";
import SkeletonCard from "./SkeletonCard";

function CatsList() {

    const [loading,setLoading] = useState<boolean>(false);
    const [cats,setCats]       = useState<CatsReponse[]>([])

    const getCats = async() => {
        setLoading(true);
        try {
            const resp = await getAllCats();
            console.log(resp)
            setCats(resp.data);
            setLoading(false)

        } catch (error) {
            console.log(error)
        }

    }

    useEffect(()=>{
        getCats()
    },[])



    return (
        
      <section className=" w-3/4 grid auto-rows-[202px]  gap-4  grid-cols-1 md:grid-cols-4 lg:grid-cols-4 ">

        {
            cats.length > 1 &&
            cats.map((cat:CatsReponse,i:number) => (
                <Card key={`${cat.id}-${i}`} i={i} cat={cat} />
            ))}
        {   
        loading 
            &&
            [...Array(30)].map((_,i)=>(
                <SkeletonCard key={i} i={i}/>
            ))
        }
      </section>
    )
  }
  
  export default CatsList
  