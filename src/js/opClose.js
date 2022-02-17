
function open (){

    document.querySelector(".middle__btn").onclick = () => {
    document.querySelector(".middle__form").classList.toggle("middle__input");
    document.querySelector(".middle__btn").classList.toggle("middle__input");  
    }
    }
    
    export default open