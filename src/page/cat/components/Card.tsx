import getColSpanClass from '../../../helpers/cols-indices.helper';
import { CatsReponse } from '../../../interfaces/cat.interface';

interface CartProps{
    cat:CatsReponse;
    i:number;
}


function Card({cat,i}:CartProps){


    const getCat = ()=>{
        console.log(cat.id)
    }

    return(

        <div 
        className={`
            relative w-full pt-3/4 overflow-hidden
            transition duration-300 hover:scale-[103%]
            cursor-pointer
            rounded-lg
            ${
                getColSpanClass(i)
            }
            `
        }
        onClick={getCat}
        >

            <img className=' absolute top-0 left-0 w-full h-full ' src={cat.url} alt="" />

        </div>

    )


}

export default Card;