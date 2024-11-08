//var k=document.getElementById("p1");
//k.style.backgroundColor="red"
//k.style.fontSize="40px"
//k.innerHTML="hello everyone,welcome to kphb <span>colony</span> please"

let k=document.getElementById("p")
let a=document.getElementById("btn")

a.onclick=function (){
    k.style.backgroundColor="red"
    k.style.fontSize="60px"
    k.style.borderRadius="30%"
    k.style.display="inline"
    console.log(k)
}
function b(){
    k.textContent="click here to get an image"
    k.style.backgroundColor="red"
    k.innerHTML=`<img id="i1" src="https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg"  width="200" /><img id="i2" src="https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg"  width="200" /><img id="i3" src="https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg"  width="200" />`
    let image1=document.getElementById("i1")
    image1.style.borderRadius="30px"
    let image2=document.getElementById("i2")
    image2.style.borderRadius="100px"
    let image3=document.getElementById("i3")
    image3.style.borderRadius="50%"
    

}
