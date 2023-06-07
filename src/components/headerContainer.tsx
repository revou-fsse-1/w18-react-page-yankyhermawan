import { TitleHeader } from "./titleHeader";
import { MemberList } from "./memberList";
import { SearchBar } from "./searchBar";
import { CountLike } from "./countLike";
export function HeaderContainer(){
    return(
        <>
            <TitleHeader/>
            <CountLike/>
            <MemberList/>
            <SearchBar/>
        </>
    )
}