const products=[{name:"Product1",desc:"This is product 1.",price:1000,image:"https://picsum.photos/id/299/200/200"},
    {name:"Product2",desc:"This is product 2.",price:2000,image:"https://picsum.photos/id/302/200/200"},
    {name:"Product3",desc:"This is product 3.",price:3000,image:"https://picsum.photos/id/301/200/200"},
    {name:"Product4",desc:"This is product 4.",price:4000,image:"https://picsum.photos/id/305/200/200"}
];


function showProducts(){
    let str=`<div class="row">`;
    products.map(e=>{str=str+`<div class="box"><img src=${e.image}/><h3 align="center">${e.name}</h3><hr><p>${e.desc}</p><h5>${e.price}</h5><center><button>Add to cart</button></center></div>`})
    str=str+`</div>`;
    root.innerHTML=str;
}