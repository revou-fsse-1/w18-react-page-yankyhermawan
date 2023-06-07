import { Data } from "../data";
import { LikeButton } from "./likeButton";

export function CardComponent(){
    return(
        <div className="flex w-[900px] flex-row flex-wrap gap-4 justify-between mx-auto mt-4">
            {
                Data.map((item)=>{
                    return (
                        <div className="w-max relative hover:scale-110 duration-500" key={item.id}>
                            <LikeButton/>
                            <img src = {item.url} className="h-[270px] w-[200px] rounded-lg"/>
                            <h3 className="text-white text-xl mt-[-30px] text-center font-semibold">{item.name}</h3>
                        </div>
                    )
                })
            }
        </div>
    )

}