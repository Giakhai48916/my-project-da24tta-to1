const sanpham = [
    {id: 1,name: "totem",gia: "36 diamond",img: "../assets/images/hoa.jpg"},
    {id: 2,name: "apple",gia: "1 iron",img: "../assets/images/hoa.jpg"},
    {id: 3,name: "elytra",gia: "67 diamond",img: "../assets/images/hoa.jpg"}
];
function chitiet()
{
    

const myDiv = document.createElement("div");
for(let i= 0;i<sanpham.length;i++)
{
    const d = document.createElement("d");
    const img = document.createElement("img");
    img.src = sanpham[i].img;
    img.width = 100;
    const p = document.createElement("p");
    p.innerText = `${sanpham[i].id} ${sanpham[i].name} ${sanpham[i].gia}`;
    d.appendChild(img);
    d.appendChild(p);

    myDiv.appendChild(d);
}
document.body.appendChild(myDiv);
}