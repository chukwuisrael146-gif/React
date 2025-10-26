import Content from "./components/content.jsx"
import NavBar from "./components/navbar.jsx"
import Header from "./components/Header.jsx";
import Entry from "./components/Entry"
import Contact from "./components/Contacts.jsx";
import Joke from "./components/Joke.jsx"
function App() {
  return (
    <div className="">
      <Contact
        img="src\images\mr-whiskerson.png"
        name="Mr Whiskerson"
        phone="(212) 555-1234 "
        email="mr.whiskaz@catnap.com.meow"
      />
      <Contact
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
    </div>
  )
}

export default App;






{/* <Header />
      <main>
        <Entry 
          img={{
            src:"/src/images/100462016.jpeg",
            alt:"Mount Fuji"
          }}
          title="Mount Fuji"
          country="Japan"
          maplink="https://www.google.com/maps/about/behind-the-scenes/streetview/treks/mount-fuji/"
          dates="12 Jan 2021 - 24 Jan 2021"
          text="Mount fuji is the tallest mountain in Japan, standing at 3,766 meters (12,380 feet).
                    Mount fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourist"

        />
      </main> */}





























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

