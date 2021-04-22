const app = document.getElementById("app")
const baseUrl = " https://rickandmortyapi.com/api/"
//Container
      const container = document.createElement("div")
      container.className = "container";


fetch(`${baseUrl}character`)
  .then((Response)=>Response.json())
  .then((data)=>{
    const allItem = []
    console.log(data)
    data.results.forEach((item)=>{
      
      //Card
      const card = document.createElement("div");
      card.className = "card"

      //Names
      const names = document.createElement("h2");
      names.textContent = item.name

      //images
      const images = document.createElement("img");
      images.src = item.image
      images.className="img"

      //gender
      const gender = document.createElement("div")
      gender.textContent = item.gender

      //status
      const status = document.createElement("div")
      status.textContent = item.status
      
      
      card.append(names,images,gender,status)
      container.appendChild(card)

      allItem.push(container)
    })

    
    app.append(...allItem)
    
  })