const video = document.querySelector(".video")
const play = document.querySelector(".play")
const buttonParent = document.querySelector(".button-parent")

play.addEventListener('click',()=>{
    if (video.paused){
        video.play()
    }
    else {
        video.pause()
    } 
    
})
function screen(){
    if (video.width == "900" ){
        console.log("hshs")
        video.width = "350"
        buttonParent.classList.add('button-close')
        buttonParent.classList.remove('button-open')
    }

    else {
        video.width = "900"
        buttonParent.classList.add('button-open')
        buttonParent.classList.remove('button-close')
     
    } 
    
}