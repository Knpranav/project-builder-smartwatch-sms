// const txt1 = document.querySelector('.txt1')
// const txt2 =document.querySelector('.txt2')
// const txt3 =document.querySelector('.txt3')
const txt =document.querySelector('.items')
const back =document.querySelector('#back')
const content = document.querySelector('.content')


function disp(id){
    txt.style.visibility = 'hidden'
    back.style.visibility='visible'
    if(id=='txt1'){
        content.style.visibility = 'visible'
        content.innerHTML='Java is a OOP language that has been widely used today.That means it has classes and objects used to reduce data and time complexity'
    }
    if(id=='txt2'){
        content.style.visibility = 'visible'
        content.innerHTML='HTML stands for Hyper Text Markup Language.Its used in building web pages.It combines with other scripting languages to provide a good layout'
    }
    if(id=='txt3'){
        content.style.visibility = 'visible'
        content.innerHTML='CSS stands for cascading styling sheets.Its used for styling webpages and making them attractive.'
    }
    
}

function reload(){
    location.reload();
}