import Content from "./components/content.jsx"
import NavBar from "./components/navbar.jsx"
import Header from "./components/Header.jsx";
import Entry from "./components/Entry"
import Contact from "./components/Contacts.jsx";
import Joke from "./components/Joke.jsx"
import profile from "./images/react.svg"
import jokesData from "./jokesData.js";
import data from "./data.js"
function App() {
  const entryElements = data.map((entry) => {
    return (
      <Entry
      key={entry.id} 
        {...entry}   //use this {...entry} instead of this entry={entry}
      />
    )
  })

  return (
    <main>
 <Header />
 <main>
  {entryElements}
 </main>
    </main>
  )
}



export default App;






         {/* <Contact className="place-items-start "
        img="src\images\mr-whiskerson.png"
        name="Mr Whiskerson"
        phone="(212) 555-1234 "
        email="mr.whiskaz@catnap.com.meow"
      />
      <Contact className="bg-red-500 "
        img="src\images\fluffykins.png"
        name="Fluffykins"
        phone="(212) 555-2345 "
        email="fluff@me.com"
      />
      <Contact
        img="src\images\felix.png"
        name="Felix"
        phone="(212) 555-4567"
        email="thecat@hotmail.com"
      />
      <Contact
        img="src\images\pumpkin.png"
        name="Pumpkin"
        phone="(0800) CAT KING"
        email="pumpkin@scrimba.com"
      />
      <Contact 
        img={profile}
        name="React"
        phone="(123) 456-7890"
        email="reach.ccom"
      />  */}































// import Header from "./Header.jsx"
// import MainContent from "./MainContent.jsx";
// import Footer from "./Footer.jsx";


// function Page() {
//   return (
//     <>
//       <Header />
//       <MainContent />
//       <Footer />
//     </>
//   );
// }


// export default Page;

