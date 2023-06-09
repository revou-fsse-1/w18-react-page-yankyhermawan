import { CardComponent } from "./cardComponent"

interface CardContainerProps{
    setLikedCount: React.Dispatch<React.SetStateAction<number>>
    queryString: string
}

export function CardContainer(props:CardContainerProps){
    return  (
        <CardComponent setLikedCount={props.setLikedCount} queryString={props.queryString}/>

)
}