let valuecheck ;
function checkme(a) {
    valuecheck = a.value;
    
}
function showmodal(){
    
    document.querySelector(".modal").style.display = "block"
   
}
let fonctionvalue ; 
 document.getElementById("fonction").addEventListener("click",function(e){
 
     
     fonctionvalue = e.target.value
 })
function confirm() {
    if(validation(document.getElementById("fullname").value)){
        if(document.getElementById("start").value != ""){
            
           
            
            if(valuecheck != undefined){
                            if(valuecheck == "Female" && fonctionvalue == "Formateur"){
                            
                                fonctionvalue = "Formatrice"
                                
                            }
                            
                            if(valuecheck == "Female" && fonctionvalue == "Aprenant"){
                            
                                fonctionvalue = "Aprenante"
                            }
                            else { 
                                fonctionvalue = "Aprenant"
                            }
        let div2 = `
                <div id= "droit"      class="datapersone">
                <img id="img1" style="width:45px; height:45px" src="img/OIP.jpg"  alt="">
                <div id="para" class="personne2">
                <h1>${document.getElementById("fullname").value}  </h1>
                <p>${document.getElementById("start").value}</p>
                <p id="fonction">${fonctionvalue}</p>
                </div>
                </div>`
          
                
                document.getElementById("personnedata").innerHTML  += div2
                document.querySelector(".modal").style.display = "none"
            }
        }
    }   
}
function validation(name){
    let patern = /^[a-z A-Z]+[a-z A-Z]+$/
    if(patern.test(name)){
        return true
    }
    

}

function closemodal(){
    document.querySelector(".modal").style.display = "none"
}
let profixer ;
// let myelement = document.getElementById("droit").children
let formateur1 = document.getElementById("formateurplus")
let formateur = document.getElementById("cardformateur")
let mydrageelement = (document.querySelectorAll("#droit"))
console.log(mydrageelement)
for(let ele of mydrageelement){
    ele.addEventListener('dragstart',function(){
        dragitem = this ;
        profixer = this ; 

  })
  console.log(profixer)
  ele.addEventListener('dragend',function(e){
    dragitem = null ;
  })
}
formateur1.addEventListener('dragover',function(e){
  
    if(formateur.children.length < 1 ){
        e.preventDefault()
    }
  })    
  formateur1.addEventListener('drop',function(e){
    formateur.appendChild(dragitem)
  })





