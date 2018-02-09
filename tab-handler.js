
// Tab handler

function openTab(tabName) {
    var i;
    var x = document.getElementsByClassName("element");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";
}

// VideoTab handler

var current = "null"

function launchvid (elm, tab, vidname) {
	var place = document.getElementById(tab).children[0]; // the video frame
	
	var imgs = document.getElementsByClassName("ctab"); // remove "imagevalid" class from tabs
	for (i = 0; i < imgs.length; i++) {
		imgs[i].classList.remove("imagevalid");
	}

	if (vidname == current) {
		document.getElementById(tab).style.display = "none"; // colse if clicked tab = opened tab
		place.src = "";
		current = "";
	} else {
		document.getElementById(tab).style.display = "block"; // else, show and set the correct source
		place.src = "https://www.youtube-nocookie.com/embed/" + vidname + "?autoplay=1";
		current = vidname;
		elm.classList.add("imagevalid");
	}
}

// VideoThumb handler

document.addEventListener("DOMContentLoaded", function() { 
	var imgs = document.getElementsByClassName("ctab");
	for (i = 0; i < imgs.length; i++) {
		imgs[i].firstElementChild.src = "http://i.ytimg.com/vi/" + imgs[i].getAttribute("data-source") + "/mqdefault.jpg";
	}
});

// CollecSlide handler

function slide(count,col) {
	var sliders = document.getElementById("c" + col).querySelectorAll("div");
	var current = parseFloat(sliders[0].style.right, 10);
	if ((current > 10 || count > 0) && (current < ((33.33333 * sliders.length) - 120) || count < 0)) {
		for (i = 0; i < sliders.length; i++) {
			sliders[i].style.right = (current + (33.33333 * count)) + "%";
		}
	} else {
		for (i = 0; i < sliders.length; i++) {
			sliders[i].style.right = (current + (14 * count)) + "%";
		}
		setTimeout(function(){
			for (i = 0; i < sliders.length; i++) {
				sliders[i].style.right = current + "%";
			}
		}, 100);
	}
}

// dropdown handler

function openDrop(elm) {
	var dropdown = elm.parentElement.children[1]
    dropdown.classList.toggle("w3-show");
}

window.onclick = function(event) {
	if (!event.target.matches('.drop')) {
		var dropdowns = document.getElementsByClassName("w3-dropdown-content");
		var i;
		for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('w3-show')) {
				openDropdown.classList.remove('w3-show');
			}
		}
	}
} 