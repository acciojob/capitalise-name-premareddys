//your JS code here. If required.
let div=document.getElementById('fname');
div.addEventListener('blur',function () {
	let value=div.value.toUpperCase();
	div.innerHtml=value;
})

