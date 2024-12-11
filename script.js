//your JS code here. If required.
let div=document.getElementById('fname');
div.addEventListener('mouseleave',function () {
	let value=div.value.toUpperCase();
	div.innerHtml=value;
})

