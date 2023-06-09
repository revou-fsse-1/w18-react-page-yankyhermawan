import { Data } from "../data";
import { LikeButton } from "./likeButton";
import { useState } from "react";

interface CardComponentProps{
    setLikedCount: React.Dispatch<React.SetStateAction<number>>
	queryString: string
}

export function CardComponent(props: CardComponentProps) {

	const [likedIndexArray, setLikedIndexArray]= useState<number[]>([])

	const filteredData = Data.filter((data)=>{
		return data.name.toLowerCase().includes(props.queryString.toLowerCase())
	})
	

	return (
		<div className="flex w-[900px] flex-row flex-wrap gap-4 justify-between mx-auto mt-4">
			{filteredData.map((item) => {
				return (
					<div
						className="w-max relative hover:scale-110 duration-500"
						key={item.id}
					>
						<LikeButton setLikedCount={props.setLikedCount} id = {item.id} likedIndexArray = {likedIndexArray} setLikedIndexArray={setLikedIndexArray}/>
						<img src={item.url} className="h-[270px] w-[200px] rounded-lg" />
						<h3 className="text-white text-xl mt-[-30px] text-center font-semibold">
							{item.name}
						</h3>
					</div>
				);
			})}
		</div>
	);
}
