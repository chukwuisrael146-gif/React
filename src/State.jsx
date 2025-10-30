import React from "react";

export default function State() {


    const [myFavoriteThings, setMyFavoriteThings] = React.useState([])

    const allFavoriteThings = ["food", "meat", "rice", "beans"]
    const thingsElements = myFavoriteThings.map(thing => <p key={thing}>{thing}</p>)

    function addFavoriteThing() {
        setMyFavoriteThings(prevFavThings => [
            ...prevFavThings,
            allFavoriteThings[prevFavThings.length]
        ])
    }


    return (
        <main className="flex flex-col justify-center items-center">
           <button className="bg-black text-white 
           p-[10px] rounded-[30px] 
           m-[20px] cursor-pointer 
           hover:bg-sky-700  " 
           onClick={addFavoriteThing}>Add item</button>
           <section aria-live="polite">
            {thingsElements}
           </section>
        </main>
    )
}



//  <h1 className="
//             text-[30px] 
//             font-[700] ">Do i feel like going out Tonight?</h1>
//             <button className="
//             rounded-[50%] p-[20px] 
//             bg-black text-white 
//             m-[30px] cursor-pointer
//             hover:bg-sky-700 " 
//             onClick={handleClick}
//             aria-label={`Current answer is ${isGoingOut ? "Yes" : "No"} click to chenge`} >{isGoingOut ? "Yes" : "No"}</button>

{/* <h1 className="text-[30px] font-[700] ">How many times will bob say "State" in this section</h1>
            <div className="flex gap-5 justify-center items-center m-[50px] ">
                <button onClick={subtract} aria-label="Decrease count" 
                className="rounded-[50%] 
                bg-black text-[50px] 
                text-white p-[20px] 
                cursor-pointer
                hover:bg-sky-700 ">-</button>
                <h2 className="rounded-[50%] 
                bg-gray-700 
                text-[200px] 
                p-[30px] ">{count}</h2>
                <button onClick={add} aria-label="Increase count" 
                className="rounded-[50%] 
                bg-black text-[50px] 
                text-white p-[20px] 
                cursor-pointer
                hover:bg-sky-700 " >+</button>
            </div> */}

// export default function State() {
//      let [isImportant, setIsImportant] = React.useState("yes")
//     //  setIsImportant ("Heck yes!")
//     console.log(isImportant)

//     function handleClick() {
//         setIsImportant("Definitely!")
//     }

//     return (
//         <main>
//             <h1>Is state important to know?</h1>
//             <button onClick={handleClick}>{isImportant}</button>
//         </main>
//     )
// }