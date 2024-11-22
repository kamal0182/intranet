let formateur = document.querySelector(".foramteur")
let  cardforma = document.getElementById("formateur")
let aprennantes = document.getElementById("app")
let alpha = document.querySelector(".perssones")
console.log(formateur)
let persone = document.querySelectorAll(".myimg")
console.log(persone)
let dragitem ;
let addid ;
let counter = 0  ; 
    for(let ele of persone){
        console.log(ele)
    ele.addEventListener('dragstart',function(){
          cardforma.style.color = "black"
            dragitem = this ;
            addid = this
            console.log("kamal")    
    })
    ele.addEventListener ('dragend', function(){
        dragitem = null ;
        cardforma.style.color = "black"
        console.log("kamal")
    })
    formateur.addEventListener('dragover',function(e){
            if(formateur.children.length != 2 && addid.id ==="1"){
              cardforma.style.color = "green"
              e.preventDefault()
            }
            else {
              cardforma.style.color = "red"
            }    
        })
        formateur.addEventListener('dragleave',function(e){
           cardforma.style.color = "black"
        })
        formateur.addEventListener('drop',function(){
            formateur.append(dragitem)
            counter ++;
            cardforma.style.color = "black"
        })

         
    }