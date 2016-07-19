( function () {
    window.addEventListener( 'tizenhwkey', function( ev ) {
        if( ev.keyName === "back" ) {
            var activePopup = document.querySelector( '.ui-popup-active' ),
                page = document.getElementsByClassName( 'ui-page-active' )[0],
                pageid = page ? page.id : "";

            if( pageid === "one" && !activePopup ) {
                try {
                    tizen.application.getCurrentApplication().exit();
                } catch (ignore) {
                }
            } else {
                window.history.back();
            }
        }
    } );
    

	$("#t1").css("color", "red");
	$("#t2").css("color", "yellow");
	$("#t3").css("color", "green");
	$("#t4").css("color", "white");
} () );


function startTime() {
	var today = new Date();
	var h = today.getHours();

	var m = today.getMinutes();
	var s = today.getSeconds();
	m = checkTime(m);
	s = checkTime(s);
	document.getElementById('divbutton1').innerHTML="Current time: " + h + ":" + m + ":" + s;
	var t = setTimeout(startTime, 250);
}

function checkTime(i) {
	if (i < 10) {
		i="0" + i;
	}
	return i;
}


function showHideImage() {
	var imageDiv = document.getElementById('image');
	imageDiv.style.display = imageDiv.style.display == "block" ? "none" : "block";
}

function showResolution() {
	var resolutionDiv = document.getElementById('resolution');
	resolutionDiv.innerHTML = "Width: " + screen.width + ", height: " + screen.height;
	resolutionDiv.style.display = resolutionDiv.style.display == "block" ? "none" : "block";
}
