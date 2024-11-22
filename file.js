
fetch("file.json")
.then(response => response.json())
.then(data =>{
  showdataperssone(data)
})
function color(data){
  if(data.slice(-3) == "ice" || data.slice(-3) == "nte"){
    return "red"
  }
  else return "blue"
}
let counter = 0 ;
function showdataperssone(info){
        let container = document.getElementById("personnedata")
        for(let ele in info){
          console.log(ele)
          info[ele].forEach(element => {
            let stylecolor ;
            if(element.fonction == undefined){
              stylecolor = "blue"
              element.fonction = ""
            }
            else stylecolor = color(element.fonction)
            if(element.prenom == undefined) element.prenom = ""
            
            let div2 = `
            <div id= "droit" class="mydroit"  class="${element.fonction}" style="color : ${stylecolor} "  class="datapersone" >
                        <img id="img1" src="img/OIP.jpg"  alt="">
                        <div id="para" class="personne2">
                        <h1>${element.nom} ${element.prenom} </h1>
                        <p>${element.dateNaissance}</p>
                        <p id="fonction">${element.fonction}</p>
                        </div>
                  </div>`
                  counter++;
                  container.innerHTML += div2
          })
        }
}

let deletelemnt = `<img id="delet" onclick="delet(this)"  src="img/icons8-supprimer-30.png" alt="">`
let addtoformateur = false 
let checkerclick = 0 ;
document.getElementById("formateurplus").addEventListener("click",function(){
  addtoformateur = true
  checkerclick = 1 ;
})

  
document.getElementById("personnedata").addEventListener("click",function(e){
  if(checkerclick ===1 ){
  if(addtoformateur){
    let myelement = e.target.closest("#droit").children
    if(myelement[1].children[2].innerHTML == "formateur" || myelement[1].children[2].innerHTML == "formatrice"){
      if(document.getElementById("cardformateur").children.length < 1){
        document.getElementById("cardformateur").appendChild(e.target.closest("#droit"))
        e.target.closest("#droit").innerHTML += (deletelemnt)
      }
     
    else{
      setTimeout(() => {
        document.getElementById("tayeb").innerHTML = "you can add just one Formateur"
        document.getElementById("tayeb").style.backgroundColor = "red"
        setTimeout(() => {
          document.getElementById("tayeb").innerHTML = "Formateurs"
          document.getElementById("tayeb").style.backgroundColor = "white"
        }, 1000 );
      }, 1000);
    }
      console.log("you can add just one element")
    }
    else{
      setTimeout(() => {
        document.getElementById("tayeb").innerHTML = "you can add just  Formateurs"
        document.getElementById("tayeb").style.backgroundColor = "red"
        document.getElementById("tayeb").style.color = "white"
        setTimeout(() => {
          document.getElementById("tayeb").innerHTML = "Formateurs"
          document.getElementById("tayeb").style.backgroundColor = "white"
           document.getElementById("tayeb").style.color = "black"
        }, 1000 );
      }, 1000);
    }
    addtoformateur = false
    }
  }
  
})


let addtofabrespo = false

document.getElementById("rspofabrplus").addEventListener("click",function(e){
  addtofabrespo = true
  checkerclick = 2

  
})

document.getElementById("personnedata").addEventListener("click",function(e){
  if(checkerclick == 2){  
  if(addtofabrespo){
    let myelement = e.target.closest("#droit").children
    if(myelement[1].children[2].innerHTML == "Responsable de fabrique" ){
      document.getElementById("cardrespofab").appendChild(e.target.closest("#droit"))
      e.target.closest("#droit").innerHTML += (deletelemnt)
    }
    else{
      setTimeout(() => {
        document.getElementById("responsable").innerHTML = "you  can just  add responsable de fabric"
        document.getElementById("responsable").style.backgroundColor = "red"
            setTimeout(() => {
                document.getElementById("responsable").innerHTML = "Responsable de fabrique"
                document.getElementById("responsable").style.backgroundColor = "white"
              }, 1000 );
      }, 1000);
    }
    addtofabrespo = false
    }
  }
})

let addapprt = false;
document.getElementById("apprenant").addEventListener("click",function(e){
  console.log(e.target)
  checkerclick = 3
  addapprt = true
})
document.getElementById("personnedata").addEventListener("click",function(e){
  if(checkerclick === 3){
  if(addapprt){
    let myelement = e.target.closest("#droit").children
    if(myelement[1].children[2].innerHTML == "Aprenant" || myelement[1].children[2].innerHTML == "Aprenante" ){

      document.getElementById("cardapprenant").appendChild(e.target.closest("#droit"))
      e.target.closest("#droit").innerHTML += (deletelemnt)
    }
    else{
      setTimeout(() => {
        document.getElementById("headerapprenant").innerHTML = "you  can just apprenants  "
        document.getElementById("header").style.backgroundColor = "red"
            setTimeout(() => {
                document.getElementById("headerapprenant").innerHTML = "Responsable de fabrique"
                document.getElementById("header").style.backgroundColor = "white"
              }, 1000 );
      }, 1000);
    }
    addapprt = false
    }
  }
})
//  chef de project 
let addchefdeproject = false
document.getElementById("projectchefplus").addEventListener("click",function(e){
  console.log(e.target)
  checkerclick = 4
  addchefdeproject = true
})
document.getElementById("personnedata").addEventListener("click",function(e){
  if(checkerclick == 4){

  
  if(addchefdeproject){
    
    let myelement = e.target.closest("#droit").children
    if(myelement[1].children[2].innerHTML == "Chef de Projet"){

      document.getElementById("cardchefproject").appendChild(e.target.closest("#droit"))
      e.target.closest("#droit").innerHTML += (deletelemnt)
    }
    else{
      setTimeout(() => {
        document.getElementById("headercherfproject").innerHTML = "you  can just add chef de project  "
        document.getElementById("headercherfproject").style.backgroundColor = "red"
            setTimeout(() => {
                document.getElementById("headercherfproject").innerHTML = "chef de project"
                document.getElementById("headercherfproject").style.backgroundColor = "white"
              }, 1000 );
      }, 1000);
    }
    addchefdeproject = false
    }
  }

  })
  
function delet(that){
  document.getElementById("personnedata").appendChild(that.closest("#droit"))
  that.closest("#droit").removeChild(that)
}




