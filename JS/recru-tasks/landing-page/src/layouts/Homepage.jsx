import Header from "../components/Header/Header"
import Hero from "../components/Hero/Hero"
import MainSection from "../components/MainSection/MainSection"
import Footer from "../components/Footer/Footer"

const Homepage = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <MainSection />
      </main>
      <Footer />
    </>
  )
}

export default Homepage