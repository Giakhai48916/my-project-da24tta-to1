function add(){

    const Divboss = document.createElement("div");
    const img = document.createElement("img");
    img.src = "../assets/images/hoa.jpg";
    img.width = 600;
    Divboss.appendChild(img)

    const Div2 = document.createElement("div");
    const para = document.createElement("p");
	const textp = document.createTextNode("hoa hong ne");
	para.appendChild(textp);
	Div2.appendChild(para);

	const para1 = document.createElement("p");
	const textp1 = document.createTextNode("gia 2 diamond");
	para1.appendChild(textp1);
	Div2.appendChild(para1);
    Divboss.appendChild(Div2);

    document.body.appendChild(Divboss);
}
}