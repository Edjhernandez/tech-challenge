import Hero from "./ui/components/Hero"
import Login from "./ui/components/Login"

export default function Page() {

  return (
    <div className="flex flex-col lg:flex-row">
          <Hero />
          <Login />
    </div>
  )
}
