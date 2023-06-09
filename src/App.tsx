import { useState } from 'react'
import { CardContainer } from "./components/cardContainer"
import { HeaderContainer } from "./components/headerContainer"
import { MembershipContainer } from "./components/membershipContainer"

function App() {
    const [likedCount, setLikedCount] = useState(0);
    const [queryString, setQueryString] = useState("")
return (
    <div className="flex flex-col items-center">
        <HeaderContainer likedCount={likedCount} setQueryString={setQueryString} queryString={queryString}/>
        <CardContainer setLikedCount={setLikedCount} queryString={queryString}/>
        <MembershipContainer/>
    </div>
    
)
}

document.body.className = "bg-black"

export default App
