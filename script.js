let ThirdChild_Container = document.querySelector(".ThirdChild_Container")
let ThirdGrandChild_Container = document.querySelector(".ThirdGrandChild_Container")

// Create and append "User Love" title
let title = document.createElement("p")
title.innerText = "User Love"
ThirdChild_Container.append(title)

// First block
let div1 = document.createElement("div")

let img1 = document.createElement("img")
img1.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwFwvXxycimEcm6apClc_IDrgqHFmnZ2l46w&s"

let para1 = document.createElement("p")
para1.innerText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad culpa consequuntur repellat porro, aliquam sapiente vero voluptatem, quod veniam aperiam explicabo et tempore eligendi dolor. Provident unde quas voluptatum id?"

let div2 = document.createElement("div")
div2.style.display = "flex"
div2.style.flexDirection = "row"
div2.style.justifyContent = "flex-start"

let img2 = document.createElement("img")
img2.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWDTVXNNf1KgcuYsRs_xPtuCijSp9QTNqOIQ&s"

let div3 = document.createElement("div")
div3.style.display = "flex"
div3.style.flexDirection = "column"
div3.style.marginLeft = "5px"

let para2 = document.createElement("p")
para2.innerText = "Priya Sharma"
para2.style.fontSize = ".6rem"

let para3 = document.createElement("p")
para3.innerText = "Lawyer"
para3.style.fontSize = ".6rem"

div3.append(para2, para3)
div2.append(img2, div3)
div1.append(img1, para1, div2)
ThirdGrandChild_Container.append(div1)

// Second block
let div4 = document.createElement("div")

let img4 = document.createElement("img")
img4.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwFwvXxycimEcm6apClc_IDrgqHFmnZ2l46w&s"

let para4 = document.createElement("p")
para4.innerText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad culpa consequuntur repellat porro, aliquam sapiente vero voluptatem, quod veniam aperiam explicabo et tempore eligendi dolor. Provident unde quas voluptatum id?"

let div5 = document.createElement("div")
div5.style.display = "flex"
div5.style.flexDirection = "row"
div5.style.justifyContent = "flex-start"

let img5 = document.createElement("img")
img5.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlhp8XItTz3JPqp91GSi6heQb37wviW0VYKw&s"

let div6 = document.createElement("div")
div6.style.display = "flex"
div6.style.flexDirection = "column"
div6.style.marginLeft = "5px"

let para5 = document.createElement("p")
para5.innerText = "Ayaz Khan"
para5.style.fontSize = ".6rem"

let para6 = document.createElement("p")
para6.innerText = "Professior"
para6.style.fontSize = ".6rem"

div6.append(para5, para6)
div5.append(img5, div6)
div4.append(img4, para4, div5)
ThirdGrandChild_Container.append(div4)

// Third block
let div7 = document.createElement("div")

let img7 = document.createElement("img")
img7.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwFwvXxycimEcm6apClc_IDrgqHFmnZ2l46w&s"

let para7 = document.createElement("p")
para7.innerText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad culpa consequuntur repellat porro, aliquam sapiente vero voluptatem, quod veniam aperiam explicabo et tempore eligendi dolor. Provident unde quas voluptatum id?"

let div8 = document.createElement("div")
div8.style.display = "flex"
div8.style.flexDirection = "row"
div8.style.justifyContent = "flex-start"

let img8 = document.createElement("img")
img8.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi1fTlnz5L4wjlrDcx91vBh1IZkUl_T36cRQ&s"

let div9 = document.createElement("div")
div9.style.display = "flex"
div9.style.flexDirection = "column"
div9.style.marginLeft = "5px"

let para8 = document.createElement("p")
para8.innerText = "Pooja Sharma"
para8.style.fontSize = ".6rem"

let para9 = document.createElement("p")
para9.innerText = "singer"
para9.style.fontSize = ".6rem"

div9.append(para8, para9)
div8.append(img8, div9)
div7.append(img7, para7, div8)
ThirdGrandChild_Container.append(div7)
ThirdChild_Container.appendChild(ThirdGrandChild_Container)