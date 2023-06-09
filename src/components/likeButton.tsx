import {useState} from "react"


interface likeButtonProps{
    id: number
    setLikedCount: React.Dispatch<React.SetStateAction<number>>
    setLikedIndexArray: React.Dispatch<React.SetStateAction<number[]>>
    likedIndexArray: number[]
}
export function LikeButton(props: likeButtonProps){
    const [isLiked, setLiked] = useState(false)
    const base = "h-max absolute px-6 bg-white rounded-lg py-1 right-1 top-1 cursor-pointer border-grey border-[1px]"
    const liked = "h-max absolute px-6 bg-green-500 rounded-lg py-1 right-1 top-1 cursor-pointer border-grey border-[1px]"

    const clickLike=()=>{
        setLiked(!isLiked)
        if (isLiked) {
            const updatedArray= props.likedIndexArray.filter((array) => array !== props.id);
            props.setLikedIndexArray(updatedArray)
            return props.setLikedCount(prevLikedCount => prevLikedCount-1)
        }
        const updatedArray = [...props.likedIndexArray, props.id]
        console.log(props.id)
        props.setLikedIndexArray(updatedArray)
        return props.setLikedCount(prevLikedCount => prevLikedCount+1)        
    }

    return (
        <div className={props.likedIndexArray.includes(props.id)? liked:base} onClick={clickLike}>
            <span>{props.likedIndexArray.includes(props.id)? "Liked": "Like"}</span>
        </div>
    )
}