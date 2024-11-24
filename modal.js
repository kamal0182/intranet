let valuecheck ;
function checkme(a) {
    valuecheck = a.value;
    
}
function showmodal(){
    
    document.querySelector(".modal").style.display = "block"
   
}
let fonctionvalue ; 
function selectedvalue() {
    fonctionvalue =  document.getElementById("fonction3").value
    console.log(fonctionvalue)
}
 function color(data){
    if(data.slice(-3) == "ice" || data.slice(-3) == "nte") return "red"
    
    else return "blue"
  }
function confirm() {
    console.log(valuecheck)
    if(validation(document.getElementById("fullname").value)){
        if(document.getElementById("start").value != ""){
            if(valuecheck != undefined){
                            if(valuecheck == "Female" && fonctionvalue == "Formateur"){
                                fonctionvalue = "Formatrice" 
                            }
                            if(valuecheck == "Female" && fonctionvalue == "Aprenant"){
                                fonctionvalue = "Aprenante"
                            }
                            else if(valuecheck == "Male" && fonctionvalue == "Aprenant"){
                                
                                fonctionvalue = "Aprenant"
                            }
        let div2 = `
                <div id= "droit"    class="text-md mt-2 mb-2 p-2 h-20 bg-slate-300 shadow-lg 	  rounded-md "  style="color :${color(fonctionvalue)};" onclick="yesme(this)"    class="datapersone">
                <img id="img1" style="width:45px; height:45px" src="img/OIP.jpg"  alt="">
                <div id="para" class="personne2">
                <h1 class="font-bold " style="font-size: 20px;">${document.getElementById("fullname").value}  </h1>
                <p class="text-black">${document.getElementById("start").value}</p>
                <p class="text-black" id="fonction">${fonctionvalue}</p>
                </div>
                </div>`
                document.getElementById("personnedata").innerHTML  += div2
                document.querySelector(".modal").style.display = "none"
            }
        }
        document.getElementById("start").value = ""
        valuecheck = "undefined"
        document.getElementById("fullname").value = ""
    }   
}

function validation(name){
    let patern = /^[a-z A-Z]+[a-z A-Z]+$/
    if(patern.test(name)) return true
}
function closemodal(){
    document.querySelector(".modal").style.display = "none"
}
let drageme ;
let deletelementpath ;
let elementfonction ; 
let deletelemnt1 = `<img id="delet" onclick="delet(this)" src="img/icons8-supprimer-30.png" alt="">`
let container1 =  document.getElementById("personnedata")
function yesme(me){
    me.addEventListener("dragstart",function(){
        drageme = this 
        deletelementpath = this 
        elementfonction = this.children
        console.log(elementfonction[1].children[2].innerHTML)
        console.log("kamal")
    })
    me.addEventListener("dragend",function(e){
        drageme = null  
        
    })
}
    document.getElementById("cardrespofab").addEventListener("dragover",function(e){
       
       if(elementfonction[1].children[2].innerHTML == "Responsable de fabrique"){
           e.preventDefault();
       }
       
       
})
document.getElementById("cardrespofab").addEventListener("drop",function(e){
    document.getElementById("cardrespofab").appendChild(drageme)
    deletelementpath.innerHTML += deletelemnt1
    swal(`${elementfonction[1].children[0].innerHTML}`, "has been successfully added!", "success");
})
//  Drag and drob for formateurs
document.getElementById("cardformateur").addEventListener("dragover",function(e){
       
    if(document.getElementById("cardformateur").children.length !=  1 ){
    if(elementfonction[1].children[2].innerHTML == "formateur" || elementfonction[1].children[2].innerHTML == "formatrice")
            e.preventDefault();
        
    }
    
    
})
document.getElementById("cardformateur").addEventListener("drop",function(e){
 document.getElementById("cardformateur").appendChild(drageme)
 console.log(deletelementpath)
 deletelementpath.innerHTML += deletelemnt1
 swal(`${elementfonction[1].children[0].innerHTML}`, "has been successfully added!", "success");
})
document.getElementById("cardapprenant").addEventListener("dragover",function(e){
    if(elementfonction[1].children[2].innerHTML == "Aprenant" || elementfonction[1].children[2].innerHTML == "Aprenante"){
        e.preventDefault();
    } 
})
document.getElementById("cardapprenant").addEventListener("drop",function(e){
    document.getElementById("cardapprenant").appendChild(drageme)
    swal(`${elementfonction[1].children[0].innerHTML}`, "has been successfully added!", "success");
    deletelementpath.innerHTML += deletelemnt1
   })
   document.getElementById("cardchefproject").addEventListener("dragover",function(e){
    if(elementfonction[1].children[2].innerHTML == "Chef de Projet"){
        e.preventDefault();
    }
})
document.getElementById("cardchefproject").addEventListener("drop",function(e){
    document.getElementById("cardchefproject").appendChild(drageme)
    swal(`${elementfonction[1].children[0].innerHTML}`, "has been successfully added!", "success");
    deletelementpath.innerHTML += deletelemnt1
   })
   container1.addEventListener("dragover",function(e){
    e.preventDefault();
   })
   container1.addEventListener("drop",function(e){
    deletelementpath.removeChild(deletelementpath.lastChild)
    container1.appendChild(drageme)
   })








