const API_KEY="e5ef95a111784285a9c26bf60f4ac855";

const general=document.querySelector(".general");
const entertainment=document.querySelector(".entertainment");
const health=document.querySelector(".health");
const science=document.querySelector(".science");
const sports=document.querySelector(".sports");
const technology=document.querySelector(".technology")

const cards=document.querySelector(".cards");
const card=document.querySelector(".card");

const country="in";

// const url=`https:newsapi.org/v2/top-headlines?country=${country}&category=general&apiKey=API_KEY`;


 const shownews=(articles)=>{
     articles.forEach(data => {
      console.log(data);
      let card=document.createElement("div");
      card.classList.add("card");
      if (data.urlToImage==null) {
        card.style.display="none";
      }
      else{
        card.style.display="block";
        card.innerHTML=`     
        <img src=${data.urlToImage} alt="...">
        <div class="card-body">
          <h5 class="card-title">${data.title}</h5>
          <p class="card-text">${data.description}</p>
          <a href="${data.url}" class="btn">Read More</a>
      </div>`
      }
    cards.appendChild(card);
     });
    }


const getnews=async (category)=>{

  console.log(category.textContent);
  // const fixedurl=`https:newsapi.org/v2/top-headlines?country=in&category=${category.textContent}&apiKey=e5ef95a111784285a9c26bf60f4ac855`;
  try {
    const response=await fetch(`https:newsapi.org/v2/top-headlines?country=in&category=${category.textContent}&apiKey=e5ef95a111784285a9c26bf60f4ac855`);
    const data=await response.json();
    return shownews(data.articles);
  } catch (error) {
    console.log(error);
  }
  }

    general.addEventListener("click",()=>{
      cards.innerHTML="";

      getnews(general);
    });

    entertainment.addEventListener("click",()=>{
      cards.innerHTML="";
      getnews(entertainment);
    });

    health.addEventListener("click",()=>{
      cards.innerHTML="";
      getnews(health);
    });

    science.addEventListener("click",()=>{
      cards.innerHTML="";
      getnews(science);
    });

    sports.addEventListener("click",()=>{
      cards.innerHTML="";
      getnews(sports);
    });

    technology.addEventListener("click",()=>{
      cards.innerHTML="";
      getnews(technology);
    });


    window.onload=(event)=>{
      getnews(general);
    }



    