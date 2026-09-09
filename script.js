const data=[
["foto1.jpg","O primeiro brilho","Uma fotografia, uma memória e uma nova parte deste universo para descobrir."],
["foto2.jpg","Uma pequena galáxia","Há detalhes que só aparecem quando olhamos com mais atenção."],
["foto3.jpg","Entre estrelas","Mais um instante guardado numa constelação feita de memórias."],
["foto4.jpg","Um planeta diferente","Porque cada lado de uma pessoa pode revelar um mundo completamente novo."],
["foto5.jpg","Luz no escuro","Mesmo os momentos simples podem ganhar brilho quando se tornam lembranças."],
["foto6.jpg","Para continuar a descobrir","Este universo não termina numa fotografia; há sempre mais alguma coisa para conhecer."]
];
let i=0;
const img=document.getElementById("mainImg"), fallback=document.getElementById("fallback"), num=document.getElementById("num"), title=document.getElementById("title"), text=document.getElementById("text"), dots=document.getElementById("dots");
function dotsRender(){dots.innerHTML="";data.forEach((_,n)=>{const d=document.createElement("span");d.className="dot"+(n===i?" active":"");d.onclick=()=>show(n);dots.appendChild(d)})}
function show(n){i=(n+data.length)%data.length;fallback.style.display="none";img.style.display="block";img.src="fotos/"+data[i][0];img.onerror=()=>{img.style.display="none";fallback.style.display="flex"};num.textContent=String(i+1).padStart(2,"0")+" / 06";title.textContent=data[i][1];text.textContent=data[i][2];dotsRender()}
document.getElementById("next").onclick=()=>show(i+1);
document.getElementById("prev").onclick=()=>show(i-1);
document.getElementById("card").addEventListener("click",()=>{if(img.naturalWidth){window.open(img.src,"_blank")}})
dotsRender();setInterval(()=>show(i+1),5000);
