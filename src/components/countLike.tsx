interface CountLikeProps{
    likedCount: number
}
export function CountLike(props: CountLikeProps){
    return(
    <div className="fixed top-0 right-0 bg-green-500 px-4 py-2 rounded-bl-2xl">
        <span className="text-white text-md">{(props.likedCount==0) ? "You have no liked photos yet": `My Liked Photos (${props.likedCount})`}</span>
    </div>
    )
}