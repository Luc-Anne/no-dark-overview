const Main = imports.ui.main;

let SavedshadeBackgrounds;

function init() {
	this.SavedshadeBackgrounds = Main.overview._shadeBackgrounds;
}

function enable() {
	Main.overview._shadeBackgrounds = function() {};
}

function disable() {
	Main.overview._shadeBackgrounds = this.SavedshadeBackgrounds;
}
