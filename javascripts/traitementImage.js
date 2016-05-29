var image = new Image()
image.src = "./images/LaureGatet.png"
image.onload = function() {
	var canvas = document.getElementById('image_masque')
	var ctx = canvas.getContext('2d')
	ctx.drawImage(this, 0, 0)
	this.style.display = 'none'
	var imageData = ctx.getImageData(0,0,canvas.width, canvas.height)
	//data est un tableau de longueur 4*canvas.width*canvas.length
	//canvas.width*canvas.length est le nombre de pixels de l'image
	//4 est le nombre de valeurs nécessaires en RGBA
	var data_init = []

	for(var i=0;i<imageData.data.length;i+=4){
		data_init[i] = imageData.data[i]
		imageData.data[i] = 0
		data_init[i+1] = imageData.data[i+1]
		imageData.data[i+1] = 0
		data_init[i+2] = imageData.data[i+2]
		imageData.data[i+2] = 0
	}
	ctx.putImageData(imageData, 0, 0)

	var rayon_cercle = 60;
	creer_masque = function (event){
		event = event || window.event
		diff = getMousePosition(event, canvas)
		for(var i=0;i<imageData.data.length; i+=4){
			//on va de 4 en 4 à cause des trois couleurs et de la transparence (RGBA)
			var num_ligne = Math.floor(Math.floor(i/4)/canvas.width)
			var num_colonne = Math.floor(i/4)-num_ligne*canvas.width
			if(distance([diff.x, diff.y], [num_colonne,num_ligne])<rayon_cercle){
				imageData.data[i] = data_init[i]
				imageData.data[i+1] = data_init[i+1]
				imageData.data[i+2] = data_init[i+2]
			} else {
				imageData.data[i] = imageData.data[i+1] = imageData.data[i+2] = 0
			}
		}
		ctx.putImageData(imageData, 0, 0)
	}

	canvas.addEventListener("mousemove", creer_masque)

}
var image2 = new Image()
image2.src = "./images/LaureGatet.png"
image2.onload = function(){
	var canvas = document.getElementById('image_masque2')
	var ctx = canvas.getContext('2d')
	ctx.drawImage(this, 0, 0)
	this.style.display = 'none'
	var imageData = ctx.getImageData(0,0,canvas.width, canvas.height)
	var data_init = []

	for(var i=0;i<imageData.data.length;i+=4){
		data_init[i] = imageData.data[i]
		data_init[i+1] = imageData.data[i+1]
		data_init[i+2] = imageData.data[i+2]
	}
	//on floute une zone située autour du clic de souris
	var dist = 50 //(là je prends un carré et non un cercle)
	var boucler = false //cette variable me permet de faire un floutage en suivant la souris.
	//Elle est surtout utile quand on relache le bouton de la souris
	floutage = function (event){
		if(boucler) {
			event = event || window.event
			diff = getMousePosition(event, canvas)
			for (i=0; i<imageData.data.length; i+=4) {
				//on va de 4 en 4 à cause des trois couleurs et de la transparence (RGBA)
				var num_ligne = Math.floor(Math.floor(i/4)/canvas.width)
				var num_colonne = Math.floor(i/4)-num_ligne*canvas.width

				if((Math.abs(num_colonne-diff.x)<dist) && (Math.abs(num_ligne-diff.y)<dist)){
					//dans ce cas, on est proche du clic de souris, donc le pixel prendra la moyenne des 9 valeurs situées autour
					var somme_ligne_precedente_red = data_init[i-4*canvas.width]+data_init[i-4*canvas.width-4]+data_init[i-4*canvas.width+4]
					var somme_ligne_precedente_green = data_init[i+1-4*canvas.width]+data_init[i+1-4*canvas.width-4]+data_init[i+1-4*canvas.width+4]
					var somme_ligne_precedente_blue = data_init[i+2-4*canvas.width]+data_init[i+2-4*canvas.width-4]+data_init[i+2-4*canvas.width+4]
					var somme_ligne_red = data_init[i]+data_init[i-4]+data_init[i+4]
					var somme_ligne_green = data_init[i+1]+data_init[i+1-4]+data_init[i+1+4]
					var somme_ligne_blue = data_init[i+2]+data_init[i+2-4]+data_init[i+2+4]
					var somme_ligne_suivante_red = data_init[i+4*canvas.width]+data_init[i+4*canvas.width-4]+data_init[i+4*canvas.width+4]
					var somme_ligne_suivante_green = data_init[i+1+4*canvas.width]+data_init[i+1+4*canvas.width-4]+data_init[i+1+4*canvas.width+4]
					var somme_ligne_suivante_blue = data_init[i+2+4*canvas.width]+data_init[i+2+4*canvas.width-4]+data_init[i+2+4*canvas.width+4]
					if(i<canvas.width*4){
						//la je ne prends pas lapremièreligne
						imageData.data[i] = Math.floor((somme_ligne_red+somme_ligne_suivante_red)/6)
						imageData.data[i+1] = Math.floor((somme_ligne_green+somme_ligne_suivante_green)/6)
						imageData.data[i+1] = Math.floor((somme_ligne_blue+somme_ligne_suivante_blue)/6)
					} else if(i>canvas.width*(canvas.height-1)*4){
						//la je ne prends pas la dernière ligne
						imageData.data[i] = Math.floor((somme_ligne_precedente_red+somme_ligne_red)/6)
						imageData.data[i+1] = Math.floor((somme_ligne_precedente_green+somme_ligne_green)/6)
						imageData.data[i+1] = Math.floor((somme_ligne_precedente_blue+somme_ligne_blue)/6)
					} else {
						imageData.data[i] = Math.floor((somme_ligne_precedente_red+somme_ligne_red+somme_ligne_suivante_red)/9)
						imageData.data[i+1] = Math.floor((somme_ligne_precedente_green+somme_ligne_green+somme_ligne_suivante_green)/9)
						imageData.data[i+1] = Math.floor((somme_ligne_precedente_blue+somme_ligne_blue+somme_ligne_suivante_blue)/9)
					}

					//console.log("imageData[",i,"]=", imageData.data[i], imageData.data[i+1], imageData.data[i+2])
				} else {
					imageData.data[i] = data_init[i]
					imageData.data[i+1] = data_init[i+1]
					imageData.data[i+2] = data_init[i+2]
				}
			}
			ctx.putImageData(imageData, 0, 0)
		}
	}
	debut_floutage = function () {
		boucler = true
	}
	fin_floutage = function () {
		boucler = false
	}
	canvas.addEventListener("mousedown", debut_floutage)
	canvas.addEventListener("mousemove", floutage)
	window.addEventListener("mouseup", fin_floutage)
}




var distance = function (point1, point2){
	//point1 et point2 sont des tableaux de deux coordonnées
	return Math.sqrt(Math.pow(point1[0]-point2[0],2)+Math.pow(point1[1]-point2[1],2))
}
var getMousePosition = function(e,canvasElement){
    OFFSET = getOffsetPosition(canvasElement);

    mouse_x = (e.pageX || (e.clientX + document.body.scrollLeft +  document.documentElement.scrollLeft)) - OFFSET.x
    mouse_y = (e.pageY || (e.clientY + document.body.scrollTop + document.documentElement.scrollTop)) - OFFSET.y

    return {x:mouse_x, y:mouse_y}
}

var getOffsetPosition = function(obj){
    var offsetX = offsetY = 0

    if (obj.offsetParent) {
        do {
            offsetX += obj.offsetLeft
            offsetY += obj.offsetTop
        } while(obj = obj.offsetParent)
    }
    return {x:offsetX, y:offsetY}
}