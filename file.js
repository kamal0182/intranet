// let formateur = document.querySelector(".foramteur")
// let  cardforma = document.getElementById("formateur")
// let aprennantes = document.getElementById("app")
// let alpha = document.querySelector(".perssones")
// console.log(formateur)
// let persone = document.querySelectorAll(".myimg")
// console.log(persone)
// let dragitem ;
// let addid ;
// let counter = 0  ; 
//     for(let ele of persone){
//         console.log(ele)
//     ele.addEventListener('dragstart',function(){
//           cardforma.style.color = "black"
//             dragitem = this ;
//             addid = this
//             console.log("kamal")    
//     })
//     ele.addEventListener ('dragend', function(){
//         dragitem = null ;
//         cardforma.style.color = "black"
//         console.log("kamal")
//     })
//     formateur.addEventListener('dragover',function(e){
//             if(formateur.children.length != 2 && addid.id ==="1"){
//               cardforma.style.color = "green"
//               e.preventDefault()
//             }
//             else {
//               cardforma.style.color = "red"
//             }    
//         })
//         formateur.addEventListener('dragleave',function(e){
//            cardforma.style.color = "black"
//         })
//         formateur.addEventListener('drop',function(){
//             formateur.append(dragitem)
//             counter ++;
//             cardforma.style.color = "black"
//         })

         
//     }



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
            <div id= "droit"   style="color : ${stylecolor} "  class="datapersone">
                        <img id="img1" src="icons8-tour-50.png" alt="">
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
document.getElementById("formateurplus").addEventListener("click",function(){
  addtoformateur = true
})
document.getElementById("personnedata").addEventListener("click",function(e){
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
    addtoformateur = false
    }
})
let addtofabrespo = false
document.getElementById("rspofabrplus").addEventListener("click",function(e){
  addtofabrespo = true
})
document.getElementById("personnedata").addEventListener("click",function(e){
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
})
let addapprt = false;
document.getElementById("apprenant").addEventListener("click",function(e){
  console.log(e.target)
  addapprt = true
})
document.getElementById("personnedata").addEventListener("click",function(e){
  if(addapprt){
    
    let myelement = e.target.closest("#droit").children
    if(myelement[1].children[2].innerHTML == "Aprenant" || myelement[1].children[2].innerHTML == "Aprenante" ){

      document.getElementById("cardapprenant").appendChild(e.target.closest("#droit"))
      e.target.closest("#droit").innerHTML += (deletelemnt)
    }
    else{
      setTimeout(() => {
        document.getElementById("headerapprenant").innerHTML = "you  can just  add responsable de fabric"
        document.getElementById("headerapprenant").style.backgroundColor = "red"
            setTimeout(() => {
                document.getElementById("headerapprenant").innerHTML = "Responsable de fabrique"
                document.getElementById("headerapprenant").style.backgroundColor = "white"
              }, 1000 );
      }, 1000);
    }
    addapprt = false
    }
})

function delet(that){
  document.getElementById("personnedata").appendChild(that.closest("#droit"))
  that.closest("#droit").removeChild(that)

}