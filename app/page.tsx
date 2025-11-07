import Header from "@/components/header"
import Hero from "@/components/hero"
import Menu from "@/components/menu"
import Video from "@/components/video"
import Promotions from "@/components/promotions"
import Branches from "@/components/branches"
import JoinTeam from "@/components/join-team"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="w-full">
      <Header />
      <Hero />
      <Menu />
      <Video />
      <Promotions />
      <Branches />
      <JoinTeam />
      <Contact />
      <Footer />
    </main>
  )
}
