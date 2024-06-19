import getColSpanClass from "../../../helpers/cols-indices.helper"

function SkeletonCard({i}:{i:number}){

    return(
        <div className={` rounded-lg  bg-gray-500 border-gray-700 animate-pulse
            ${
                getColSpanClass(i)
            }
            
        `}>
        </div>
    )


}

export default SkeletonCard;