const cursor = document.querySelector('.page1 .movingcursor');
const page1 = document.querySelector('.page1');
page1.addEventListener('mousemove',(e) =>{
   
    cursor.style.left = e.x-19 + "px";
    cursor.style.top = e.y-20 + "px";
})

cursor.addEventListener('click', () =>{
    console.log('clicked')
})