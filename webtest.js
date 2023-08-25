const head = document.getElementById("3");
document.addEventListener("scroll", () =>{
			
			const element = document.getElementById("2");
			const bool = elementIsVisibleInViewport(element);
			numb = element.childElementCount;
			if(bool){
				for(let i = 0; i < numb; i++){
					if(i == 0)
						setTimeout(()=>{animate(head);}, 100);
					setTimeout(()=>{animate(element.children[i]);}, 100);
					
				}
				console.log(lists);
			}
		});

const themebutton = document.getElementById("changetheme");
const block2 = document.getElementById("block2");
const downloadholder = document.querySelector("downloadholder");

themebutton.addEventListener("click", () =>{
	switchtheme();
});

function animate(elem){
	console.log(elem);
	elem.style.display = "block";
}
const ul = document.getElementsByTagName('ul');
const ulcount = ul.childElementCount;
const lists = document.getElementsByTagName('li');


console.log(ulcount);

function switchtheme(){
	block2.style.backgroundColor = "navy";
	//downloadholder.style.backgroundColor = "black";
	head.style.color = "white";
	for(let i = 0; i <= 6; i++){
		lists[i].style.color = "white";
	}
}


		
		
		/*
			const elementIsVisibleInViewport = (el, partiallyVisible = false) => {
			
			skulle kunna skrivas om till 
			function elementIsVisibleInViewport(el, partiallyVisible = false) =>{
			
			}
		*/
		
			/*
			för att assignera till flera variabler {var1, var2, var3} = sak
			I detta fallet returnerar .getBoundingClientRect() 
			
			
			
			const lists = lists.childElementCount;
				for(let m  = 0; m < lists; m++){
					lists[i].style.color = "white";
	}
		*/
		
		/*
		Beroende på om partiallyVisible är sann eller falsk så eksekveras antingen
		
		? (trueconditoin) : (falsecondtion)
		
		fungerar i princip som if och if else satser
		*/
		
		
const elementIsVisibleInViewport = (el, partiallyVisible = false) => {
	const { top, left, bottom, right } = el.getBoundingClientRect();
	const { innerHeight, innerWidth } = window;
	
	return partiallyVisible
		? ((top > 0 && top < innerHeight) ||
		(bottom > 0 && bottom < innerHeight)) &&
        ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))
		: top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
};
