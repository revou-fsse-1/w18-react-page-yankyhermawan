import { TitleHeader } from "./titleHeader";
import { MemberList } from "./memberList";
import { SearchBar } from "./searchBar";
import { CountLike } from "./countLike";

interface HeaderContainerProps{
    likedCount: number
    setQueryString: React.Dispatch<React.SetStateAction<string>>
    queryString: string
}
export function HeaderContainer(props: HeaderContainerProps){
    return(
        <>
            <TitleHeader/>
            <CountLike likedCount ={props.likedCount}/>
            <MemberList/>
            <SearchBar setQueryString = {props.setQueryString} queryString= {props.queryString}/>
        </>
    )
}