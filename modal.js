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
                           
                            console.log(fonctionvalue)
        let div2 = `
                <div id= "droit"   style="color :${color(fonctionvalue)};"    class="datapersone">
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
let drageme
function yesme(me){
    me.addEventListener("dragstart",function(){
        drageme = this 
        console.log("kamal")
    })
    me.addEventListener("dragend",function(){
        drageme = null
        
    })
    document.getElementById("cardrespofab").addEventListener("dragover",function(e){
        e.preventDefault();
})
document.getElementById("cardrespofab").addEventListener("drop",function(e){
    document.getElementById("cardrespofab").appendChild(drageme)
})
}






