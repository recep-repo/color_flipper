const button = document.getElementById("button")
const color = document.querySelector("#color")

button.addEventListener("click", () =>{
    let rgb_1 = Math.floor(Math.random()*256)
    let rgb_2 = Math.floor(Math.random()*256)
    let rgb_3 = Math.floor(Math.random()*256)
    let newColor = `rgb(${rgb_1}, ${rgb_2}, ${rgb_3})`
    color.innerHTML = newColor
    document.body.style.backgroundColor = newColor
})