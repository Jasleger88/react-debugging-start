import React from "react"
import CheeseCard from "./components/CheeseCard"

function App() {

  const [cheeses, setCheeses] = React.useState(null)

  React.useEffect(() => {
    // api docs at: https://ga-cheesebored.fly.dev/
   async  function fetchCheeses() {
   const resp= await fetch("https://ga-cheesebored.fly.dev/cheeses")
   const cheeses = await resp.json()
   setCheeses(cheeses)
   }
   fetchCheeses()
  }, [])
  console.log(cheeses)


  return (
    <section className="section">
      <div className="container">
        <div className="columns is-multiline">
          {cheeses?.map(cheese => {
            return <div key={cheese._id} className="column is-one-quarter-desktop is-one-third-tablet">
              <CheeseCard
                name={cheese.name}
                image={cheese.image}
              />
            </div>
          })}
        </div>
      </div>
    </section>
  )
}

export default App