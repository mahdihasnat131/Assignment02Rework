// fetch('https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=Danny_Welbeck')
//     .then((res)=> res.json())
//     .then((data)=> {console.log(data)});


document.getElementById("search-btn").addEventListener("click", (event) => {
    
    const inputValue = document.getElementById("search-bar").value;
    console.log(inputValue);
    document.getElementById("search-bar").value = "";
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${inputValue}`)
              .then(res=>res.json())
              .then((data)=>{displayPlayers(data)}
                  );
  })
  
  const loadhonmepage=()=>{
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
              .then(res=>res.json())
              .then((data)=>{displayPlayers(data)}
                  );
  }
  loadhonmepage();

  const displayPlayers=(items)=>{
      
      const Maincontainer=document.getElementById("main-container");
      Maincontainer.innerHTML="";
      let counter=0;
          items.meals.forEach((item)=>{
              console.log(item)
              const div=document.createElement("div");
              div.classList.add("maincontainerdiv");
              div.classList.add("col-lg-4","col-md-8","col-sm-8");
              div.innerHTML=`<h1 class="player-nm" id="player nm" >${item.strMeal}</h1>
                                <h1 class="Ntn"> ${item.strCategory}</h1>
                                <h1 class="Spt"> ${item.strArea}</h1>
                                <h1 class="Clb"> ${item.strTags}</h1>
                                <p>${item.strInstructions}</p>
                                 <i class="fa-brands fa-youtube">${item.strYoutube}</i>
                                
                                <div id="myModal" class="modal">

                                   <!-- Modal content -->
                                     <div class="modal-content">
                                           <span class="close">&times;</span>
                                           <p>${item.strMeal}</p>
                                           <p>${item.strCategory}<p>
                                           <p>${item.strTags}</p>
                                           <p>${item.strArea}<p>
                                           <p>${item.strIngredient1}</p>
                                     </div>

                                </div>

                                <button id="myBtn" onclick="displaymodal2()"> Details </button>
                                   
                                

                                <button onclick="AddtoCart()"> Select Food </button>
                              <img class="player-img" id="player-img" src=${item.strMealThumb}></img>`;
              Maincontainer.appendChild(div);
          })
      
     
        
      
     
  }

  
  const AddtoCart = () => {
    
   
    const cartCount = document.getElementById("count").innerText;
  
    let convertedCOunt = parseInt(cartCount);
    convertedCOunt = convertedCOunt + 1;

    if(convertedCOunt<12)
      {
          document.getElementById("count").innerText=convertedCOunt;
      }
  else{
      alert("Maximum foods selected");
  }
   
  }

  const displaymodal2= () =>{
    
 
    var modal = document.getElementById("myModal");
   
    modal.style.display = "block";
    var span = document.getElementsByClassName("close")[0];
    span.onclick = function() {
        modal.style.display = "none";
        }
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            }
        }
  }

  
  
  
  
  