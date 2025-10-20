

function Header() {
  return (
    <header>
      <img src="src/assets/react.svg" alt="The react logo" />
      <nav>
        <ul>
          <li>Pricing</li>
          <li>Abut</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  )
}

function MainContent() {
  return (
    <main>
      <h1>Reasons I am excited to learn React!</h1>
      <ol>
        <li>React is a popular libray that will help me to fit in with all the coolest dev out there</li>
        <li>I am more likely to get a job as a front end developer if i know react </li>
      </ol>
    </main>
  )
}

function Footer() {
  return (
    <footer> <small>@ Chukwu development. All right reserved.</small></footer>
  )
}



function App() {
  return (
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
  );
}


export default App;

