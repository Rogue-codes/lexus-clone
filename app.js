var classBtnContainer = document.querySelectorAll('.classCont .classBtnContainer .classButton')
var tabcontent = document.querySelectorAll('.classCont  .tabcontent')

function showpanel(index){
    classBtnContainer.forEach(function(x){
        x.style.color =''
    })
    classBtnContainer[index].style.color = 'black'

    tabcontent.forEach(function(x){
        x.style.display ='none'
    })

    tabcontent[index].style.display = 'flex'
}
showpanel(0)