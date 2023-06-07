// import { useState } from 'react'
import { CardContainer } from "./components/cardContainer"
import { HeaderContainer } from "./components/headerContainer"
import { ClubMembership } from "./components/clubMembership"

function App() {
return (
    <div className="flex flex-col">
        <HeaderContainer/>
        <CardContainer/>
        <ClubMembership/>
    </div>
    
)
}

document.body.className = "bg-black"

export default App
