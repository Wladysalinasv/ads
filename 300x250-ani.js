(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"300x250_ani_atlas_1", frames: [[435,402,158,159],[0,402,433,194],[0,0,1000,400]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_4 = function() {
	this.initialize(ss["300x250_ani_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["300x250_ani_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.fondo = function() {
	this.initialize(ss["300x250_ani_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.titulo2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AOKMEIAAxNIEgAAIAAC+QAThcBHg7QBDg4BRgCQCbgCBrB6QBtB9AAC+QAADVhsB5QhiBwiXgDQhXgBhDgyQhNg4gThkIAAHBgAVMhbQg/ABgrAyQgrAyAABOQAABWAqAzQApAyBEACQBGACAqg0QArg0AAhXQAAhSgsgxQgrgwg/AAIgHAAgAfVGZQhth8AAjAQAAjMBsh8QBmh1CUADQBVABBFAyQBNA4ATBkIAAi/IEjAAIAANNIkhAAIAAjAQgUBchHA7QhEA4hPABIgGAAQiYAAhph3gEAi1gAvQgrAzAABYQABBSArAyQArAyBEgCQBBgCArgxQAsgzAAhOQAAhWgrgzQgqgyhDgBIgGAAQhBAAgpAxgAAXGZQhsh8AAjAQAAjMBrh8QBkh1CVADQBWABBEAyQBNA4ASBkIAAi/IElAAIAANNIkiAAIAAjAQgUBchHA7QhDA4hQABIgGAAQiYAAhoh3gAD3gvQgrAzAABYQAABSAsAyQArAyBDgCQBCgCAqgxQAtgzgBhOQAAhWgrgzQgqgyhDgBIgGAAQhAAAgpAxgA7BGUQh0iAAAi4QAAjIB3h9QBuh0CcAAQCXAABsBsQB2B2AJDGQADAUgDAWIqyAAQAICSBeBkQBaBfBuAAQBTAABFgtQBIgvAohYIA/AiQguBnhZA6QhVA3hpAAQibAAhyh8gA58i9QhdBggGCZIJcgCQgJiXhdhgQhXhah0AAQhzAAhVBagEgp4AGTQhyh/AAi3QAAjIBxh8QBsh2CiAAQBuAABbBDQBYBBApBpIAAncIBUAAIAARMIhUAAIAAjjQgmBrhaBEQhbBEhtAAQifAAhwh9gEgo5gC6QhfBmAACxQAACdBgBqQBcBmB9gBQB+AABdhmQBhhqAAicQAAiphihqQhahhiAAAQiEAAhWBdgAu2IAIAAxMIGWAAQDWAABuB+QBYBkAACPQAACPhcBkQhvB5jRAAIiMAAIAAFvgAqsh5ICMAAQBAAAAdgTQAjgXAAg4QAAg4ghgYQgegWhDAAIiKAAgEAjYgG2IBylNIDZAAIhwFNg");
	this.shape.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.titulo2, new cjs.Rectangle(-279.5,-77.1,559.1,154.3), null);


(lib.titulo1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EA4vAK5QhHgWg4g6ICSi0QAXAeAlABQAoAAAQgpIAghQIkssQIEiAAICQIiICmoiIEjAAIl4ONQhPDBigAlQgfAHgeAAQgpAAgpgMgEgsDAE2Qhsh8AAjNIAAmiIEjAAIAAGkQgCBWAsA0QArA0BFgDQBEgCAqgxQAqgzAAhVIAAmkIEiAAIAANMIkYAAIAAi+QgSBjhOA5QhDAyhWABIgIAAQiPAAhjhygEAxAAGoQhQgBhDg4QhHg7gThcIAAC/IkiAAIAAxLIEiAAIAAG9QAUhjBNg5QBDgxBYgCQCWgCBjBvQBsB5AADWQAAC+huB9QhpB3iWAAIgHAAgEAv3gDIQhEABgpAyQgrAzAABWQAABOAsAyQArAyA/ABQBEADAsgyQAtgzAAhRQAAhXgrg0QgpgxhAAAIgHAAgA2LGoQhQgBhDg4QhHg7gThcIAAC/IkiAAIAAxLIEiAAIAAG9QAUhkBNg4QBDgxBXgCQCXgCBjBvQBsB5AADWQAAC+huB9QhpB3iWAAIgHAAgA3UjIQhEABgqAyQgqAzAABWQAABOAsAyQAqAyBAABQBEADAsgyQAsgzAAhRQAAhXgqg0QgpgxhAAAIgHAAgAbzE4QiIh6AAjIQgCjOCFh7QB7hzC4AAQC6AAB6BzQCCB6gCDPQgBDKh9B3Qh4Bxi+AAQixAAh9hwgAe0iRQgnA2AABPQAABNAnA0QAqA1BBAAQBEAAArg1QArg0AAhNQAAhOgqg2Qgsg4hEAAQhBAAgqA3gACOErQh1iAAAi3QAAjIB2h9QBvh1CdAAQCXAABsBtQB2B2AIDGQAEAUgEAVIqyAAQAICSBeBlQBaBfBvAAQBSAABFgtQBJgwAohXIA/AhQgvBnhYA6QhWA4hoAAQicAAhxh9gADSkmQhcBhgICZIJdgBQgIiYhehhQhXhahzAAQh0AAhVBagAspErQhzh/AAi2QAAjKByh8QBsh2CiAAQBuAABbBDQBYBBAqBpIAAnbIBTAAIAARLIhTAAIAAjiQgmBrhbBDQhbBFhtAAQifAAhwh9gArqkjQheBmAACzQAACbBfBqQBcBmB9gBQB+AABdhlQBihrAAiaQAAirhihpQhbhiiAAAQiEAAhWBdgEhB8AEVQisihAEkCQADkICsigQCaiODVAAQCPAAB4BLQB7BOA6CFIj5B6QgdhDgwgkQgzgnhFAAQhnAAhBBSQhBBTAACHQAACFBBBSQBBBSBnAAQBIAAA1gqQA0gqAahLIDzB3Qg3CTh4BRQh1BRiYAAQjZAAidiTgASeGXIACs/IkIgBIAAkLIMaAAIAAELIkIABIAAM/gEgzsAGXIAAxLIEiAAIAARLg");
	this.shape.setTransform(-0.0307,0.0286);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.titulo1, new cjs.Rectangle(-438.9,-70.9,877.8,141.9), null);


(lib.texto1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("APXEyQg6gCgkgoQglgpAAhHIAiAAQAEBvBeAHQAgADAbgYQAcgaABgnQABgsgWgVQgUgTg0gMQg+gPgcgYQgjgegCg6QAAg5AjgkQAhgjA1AAQA6AAAjAlQAkAmAFBHIgiAAQgDgzgagdQgagdgsgBQgmgBgYAbQgZAbAAAoQABAoAXAVQAUAUAzANQBDARAbAZQAeAdAAA7QAAA0gjAjQgiAhgxAAIgFAAgATMDvQg1hFAAhjQAAhqA0hEQAyhABKAAQBLAAAyBAQA0BEAABqQAABjg0BFQg0BDhJAAQhIAAgzhDgATmhNQgqA4AABcQAABTAqA6QApA4A3AAQA5AAApg1QArg5AAhXQAAhZgpg5Qgog3g7AAQg6AAgnA1gADpD0QgzhCAAhvIAAjhIAlAAIAADhQAABgAqA3QAmAyA7AAQA5AAAog1QArg4AAhcIAAjhIAlAAIAAHHIgkAAIAAh2QgSA4gnAjQgoAkgyAAQhIAAgvg+gAinDvQg0hEAAhkQgBhrA1hDQAxhABLAAQA0AAArAlQArAkASA5IggARQgQgzgjgeQgggdgpAAQg5AAgoA3QgqA5AABZQAABUAqA6QApA3A3AAQBYAAAphyIAeAPQgUA7gqAmQgtAogzAAQhIAAg0hDgAvwDvQg1hFAAhjQAAhqA0hEQAyhABKAAQBLAAAyBAQA0BEAABqQAABjg0BFQg0BDhJAAQhIAAgzhDgAvWhNQgqA4AABcQAABTAqA6QApA4A3AAQA5AAApg1QArg5AAhXQAAhZgpg5Qgog3g7AAQg6AAgnA1gA23DcQhAhZAAiDQAAiEBBhYQA+hVBbAAQB7AAA7CKIggAUQg1h3hhAAQhJAAg0BHQg3BNAAB2QABBzA1BNQA0BKBKAAQBeAAA1h8IAfAWQgcBDgvAmQgwAlg4AAQhaAAg/hWgAJbEpIAAnHIAkAAIAACKQAOg+ArgnQAqgnAuAFIgLAmQgygDgoA0QgrA5AABUIAADggAlFEpIABjiQABhfgrg3Qgngzg6AAQg5AAgoA1QgrA5AABbIAADiIglAAIAAnHIAkAAIAAB3QATg5AmgjQAogkAxAAQBJAAAvA+QAzBCAABuIAADig");
	this.shape.setTransform(0.0248,0.0304);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.texto1, new cjs.Rectangle(-152.7,-30.6,305.5,61.3), null);


(lib.text2b = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AMkDJQgugBgggaQgjgcgCgtIBCAAQACAVARANQAOAKARAAQATABAMgIQAOgJAAgQQABgRgPgIQgMgHgbgEQhwgNAAhMQABgnAhgYQAfgXAsAAQAvAAAhAaQAjAbACAsIhCAAQgEgpgvAAQgQAAgMAJQgMAJAAANQAAAZAzAIQA6AIAbAWQAfAYgCArQgBApgkAWQgeATgsAAIgEAAgEAosACgQgugrAAhCQABhCAugqQAsgpBAAAQBAAAArAqQAsAqAABBQgBBCgrAqQgrAqhBAAQg/AAgtgpgEApegALQgYAXAAAnQABAnAXAYQAXAZAjAAQAjAAAWgZQAXgYAAgnQAAgngXgXQgWgYgjAAQgjAAgXAYgEAjXACgQgugrABhCQAAhCAvgqQArgpBAAAQAqAAAjAUQAiATATAjIg/AcQgVgngvAAQgiAAgXAYQgYAXAAAnQAAAmAXAZQAXAZAjAAQAyAAAUguIA/AaQgRAmgjAWQgkAWgtAAQg/AAgtgpgAedCpQgiggAAg0IAAiyIBIAAIAACsQAAAbANAQQAOARAaAAQAZAAAOgRQANgQAAgbIAAisIBIAAIAACyQAAAzgiAgQgiAhg5AAQg4AAgigggAF0CgQgvgrABhCQAAhCAvgqQArgpBAAAQBAAAArAqQAtAqAABBQgBBCgsAqQgrAqhAAAQhAAAgsgpgAGmgLQgYAXAAAnQAAAnAYAYQAXAZAjAAQAjAAAWgZQAWgYABgnQgBgngWgXQgWgYgjAAQgjAAgXAYgAAfCgQgtgrAAhCQABhCAtgqQAsgpA/AAQArAAAiAUQAiATATAjIg+AcQgWgnguAAQgjAAgXAYQgYAXAAAnQABAmAXAZQAXAZAjAAQA1AAAQgkIAAgaIg2AAIAAguIB2AAIAABYQgSAmgjAWQgjAWgtAAQhAAAgsgpgAzHCzQgigbAAg2IA8AAQAAAaANAKQAKAIAXAAQAtAAAAghQAAghg2AAIgyAAIAAgxIAxAAQAcAAAMgHQAOgHAAgTQAAghgtAAQgsAAgCArIg8AAQABgzAjgbQAdgYAsAAQAzAAAdAWQAeAYAAAsQAAAVgJARQgKAPgPAFQAPAGAKAPQAKARAAAXQAAArgjAYQgfAXgvAAQgtAAgbgWgEAwfADEIhxikIAACkIhIAAIAAkhIA9AAIBxCoIAAioIBIAAIAAEhgAZWDEIAAkhIB5AAQBAAAAeAgQAYAZAAAlQAAAmgZAZQgfAeg+AAIgxAAIAABmgAaeAgIAxAAQAtAAAAgfQAAgggtAAIgxAAgAVPDEIgkhPIhpAAIgkBPIhLAAICBkhIBEAAICCEhgAUSA9Igcg9IgbA9IA3AAgAiIDEIAAkhIBFAAIAAEhgAkGDEIAAiZIg/CZIguAAIg9iXIAACXIhIAAIAAkhIBMAAIBQCjIBTijIBLAAIAAEhgAp5DEIgkhPIhpAAIgkBPIhLAAICBkhIBFAAICCEhgAq2A9Igbg9IgcA9IA3AAgA41DEIABh0Ih3itIBLAAIBOB2IBNh2IBLAAIh2CtIAAB0gA+YDEIgkhPIhpAAIgkBPIhLAAICBkhIBFAAICCEhgA/VA9Igbg9IgcA9IA3AAgEgm5ADEIAAkhIB6AAQA/AAAfAgQAXAZAAAlQAAAmgZAZQgfAeg9AAIgyAAIAABmgEglxAAgIAyAAQAtAAAAgfQAAggguAAIgxAAgEgo6ADEIgkhPIhpAAIgkBPIhLAAICBkhIBFAAICCEhgEgp3AA9Igbg9IgcA9IA3AAgEgxbADEIAAkhIB6AAQA/AAAfAgQAXAZAAAlQAAAmgZAZQgfAeg9AAIgyAAIAABmgEgwTAAgIAyAAQAtAAAAgfQAAggguAAIgxAAgEggQgBvIAghSIA7AAIggBSgEAp1gB2IAhhSIA7AAIghBSg");
	this.shape.setTransform(-0.025,0.0274);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.text2b, new cjs.Rectangle(-316.4,-20,632.8,40.1), null);


(lib.text2a = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AXeB/QghgagCgxIAvAAQADAaAPAOQAPAPAZAAQAaAAAPgSQAOgQAAgZIAAjAIAvAAIAAC+QAAA1ghAbQgbAYgqAAQgqAAgcgXgABfB2QgggfgBg0IAAizIA0AAIAACvQAAAhARAUQASAVAhAAQAhAAASgVQAQgUAAghIAAivIAzAAIAACzQAAAzgfAgQghAgg2AAQg2AAghgggApaBsQgsgqAAhBQAAhBAtgrQArgqBAAAQBAAAArArQArAqAABBQAABAgsArQgrAqg/AAQhAAAgsgqgAo0hKQgeAeAAAtQAAAsAdAeQAdAdAqAAQApAAAcgdQAcgdABgtQAAgugcgeQgcgdgqAAQgpAAgdAegA+1BsQgtgrABhBQAAhBAtgqQAqgqBAAAQApAAAhATQAhATAUAiIgtAVQgbgwg3AAQgqAAgcAdQgeAeAAAtQABAtAdAeQAcAeApAAQA5AAAcg0IAtAUQgTAkgiAUQgiAVgrAAQg/AAgrgqgEAxjACRIgnhZIh4gBIgpBaIg2AAICBkhIAxAAICCEhgEAwqAAPIgrhdIgpBdIBUAAgEAr4ACRIhFhwIgbAAIAABwIgzAAIAAkhIBxAAQA8AAAcAeQAVAXAAAmQAABMhIAJIgPABIBFBwgEAqYgAJIA+AAQA5AAAAgsQAAgug5AAIg+AAgEAoMACRIgohZIh4gBIgoBaIg2AAICBkhIAxAAICCEhgEAnSAAPIgqhdIgqBdIBUAAgEAgNACRIAAkhIByAAQA7AAAcAfQAVAXABAkQAAAmgZAWQgdAbg3AAIg+AAIAABwgEAhBgALIA+AAQA4AAABgrQAAgtg5AAIg+AAgAViCRIgnhZIh5gBIgnBaIg2AAICAkhIAyAAICBEhgAUpAPIgrhdIgqBdIBVAAgAQRCRIAAkhIAxAAIAAEhgANFCRIhykhIA1AAIBXDdIBZjdIA2AAIh4EhgAIOCRIiLjJIAADJIgzAAIAAkhIAuAAICKDLIAAjLIA0AAIAAEhgAiiCRIhFhwIgbAAIAABwIgzAAIAAkhIBxAAQA7AAAcAeQAWAXgBAmQAABMhHAJIgQABIBGBwgAkCgJIA+AAQA4AAAAgsQAAgug5AAIg9AAgAuGCRIAAkhIBxAAQA7AAAcAfQAVAXAAAkQAAAmgYAWQgdAbg3AAIg+AAIAABwgAtTgLIA+AAQA5AAAAgrQgBgtg5AAIg9AAgAxUCRIgohZIh4gBIgoBaIg2AAICBkhIAxAAICCEhgAyOAPIgqhdIgqBdIBUAAgA5TCRIAAkhIByAAQA7AAAcAfQAVAXABAkQAAAmgaAWQgcAbg3AAIg+AAIAABwgA4fgLIA+AAQA4AAAAgrQAAgtg4AAIg+AAgA6mCRIAAkhIAxAAIAAEhgEgg2ACRIAAkhIAyAAIAAEhgEgjnACRIABj0IhaAAIAAgtIDoAAIAAAtIhbAAIgBD0gEgmuACRIhFhwIgbAAIAABwIgzAAIAAkhIByAAQA7AAAcAeQAVAXAAAmQAABMhIAJIgQABIBGBwgEgoOgAJIA/AAQA4AAAAgsQAAgug5AAIg+AAgEgqaACRIgohZIh4gBIgoBaIg2AAICAkhIAyAAICCEhgEgrUAAPIgrhdIgpBdIBUAAgEgyYACRIAAkhIBxAAQA7AAAcAfQAVAXAAAkQAAAmgYAWQgdAbg3AAIg+AAIAABwgEgxlgALIA+AAQA5AAAAgrQgBgtg5AAIg9AAgAatCQIAAkgIDJAAIAAAzIiVAAIAABHICEAAIAAAsIiEAAIAABHICUAAIAAAzg");
	this.shape.setTransform(0,-0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.text2a, new cjs.Rectangle(-322.5,-15,645.1,30), null);


(lib.sombra = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","#000000"],[0,1],0.1,-62.2,0.1,62.2).s().p("A4WJuIAAzbMAwtAAAIAATbg");
	this.shape.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sombra, new cjs.Rectangle(-155.9,-62.2,311.8,124.5), null);


(lib.logonegro = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.CachedBmp_4();
	this.instance.setTransform(-98.3,-41.25,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_3();
	this.instance_1.setTransform(-108.25,-48.55,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.logonegro, new cjs.Rectangle(-108.2,-48.5,216.5,97), null);


(lib.logo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F7BD26").s().p("Ai9CoIAfleIFRANIALFggAhhiaIgDAjQAAArALAmQAkB7COAiQAvkRjoAAIgBAAg");
	this.shape.setTransform(-38.125,19.725);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E15131").s().p("AjQC1IAol3IF5AlIgXFggAAqiGQidAWhCCuQFCAhAtjXQgugRg0AAQgWAAgYADg");
	this.shape_1.setTransform(-77.45,17.15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0086BC").s().p("AifCiIgnlTIGKgTIADGJgAgTg1QgHA6AJAhQAYBfBWAVQArALAmgIQAGiZhfhFQgegWgkgLIgdgHg");
	this.shape_2.setTransform(-78.225,-21.55);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#21953B").s().p("AitC5IARl9IFLADIgDGGgAhvAqQgaA8AFA1QDoAZgMkjQiVAigyB3g");
	this.shape_3.setTransform(-37.6,-20.225);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("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");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(-108.2,-48.5,216.5,97.1), null);


(lib.fondo_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.fondo();
	this.instance.setTransform(-500,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.fondo_1, new cjs.Rectangle(-500,-200,1000,400), null);


(lib.cuadrado = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cuadrado, new cjs.Rectangle(-150,-125,300,250), null);


(lib.btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// texto
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AMjDAQgtgBgegXQgggagCgqIAvAAQACAaAWAOQARALAWABQAXAAAQgKQASgLABgVQAAgWgQgMQgPgKgjgFQhqgOAAhIQAAglAegWQAdgWArAAQAtAAAfAYQAhAZABAqIgvAAQgCgagTgNQgRgMgZAAQgVAAgPALQgQAMAAATQAAAjA+AJQA4AJAaAVQAdAXgCApQgBAnghAVQgdATgpAAIgEgBgAJZC8IgohaIh4AAIgoBaIg2AAICBkiIAxAAICCEigAIfA6IgqheIgqBeIBUAAgAEEC8IAAjBIhRDBIgiAAIhPjAIAADAIgzAAIAAkiIA3AAIBdDIIBejIIA3AAIAAEigAjSC8IhFhxIgbAAIAABxIgzAAIAAkiIBxAAQA8AAAbAeQAWAYAAAlQAABNhIAJIgQAAIBGBxgAkyAgIA+AAQA5AAAAgrQAAgug5AAIg+AAgAsdC8IhykiIA2AAIBWDeIBZjeIA2AAIh4EigApRC7IAAkhIDJAAIAAA0IiWAAIAABFICFAAIAAAtIiFAAIAABHICVAAIAAA0gAHdh7IAchFIArAAIgcBFg");
	this.shape.setTransform(0.0626,0.0624,0.2505,0.2505);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Capa_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(1,1,1).p("ApSiBISlAAQApAAAdAeQAeAdAAAqIAAA6QAAApgeAdQgdAegpAAIylAAQgpAAgegeQgdgdAAgpIAAg6QAAgqAdgdQAegeApAAg");
	this.shape_1.setTransform(0.0214,0.471,0.7732,0.7316);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#094100").s().p("ApSCCQgpgBgdgdQgegdAAgpIAAg7QAAgpAegeQAdgdApAAISlAAQApAAAdAdQAeAeAAApIAAA7QAAApgeAdQgdAdgpABg");
	this.shape_2.setTransform(0.0214,0.471,0.7732,0.7316);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.btn, new cjs.Rectangle(-54.7,-10,109.4,21), null);


// stage content:
(lib._300x250ani = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("A3bzhMAu3AAAMAAAAnDMgu3AAAg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(173));

	// btn
	this.instance = new lib.btn();
	this.instance.setTransform(150,230.75);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(109).to({_off:false},0).to({alpha:1},5).wait(47).to({alpha:0},5).to({_off:true},1).wait(6));

	// text2b
	this.instance_1 = new lib.text2b();
	this.instance_1.setTransform(450.05,202.55,0.4161,0.4161,0,0,0,0.1,0.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(104).to({_off:false},0).to({x:150.05},5).wait(52).to({alpha:0},5).to({_off:true},1).wait(6));

	// text2a
	this.instance_2 = new lib.text2a();
	this.instance_2.setTransform(-141.05,184.75,0.4161,0.4161,0,0,0,0.1,0);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(104).to({_off:false},0).to({x:150.05},5).wait(52).to({alpha:0},5).to({_off:true},1).wait(6));

	// texto1
	this.instance_3 = new lib.texto1();
	this.instance_3.setTransform(150,109.65,0.0948,0.0948);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(54).to({_off:false},0).to({scaleX:0.3724,scaleY:0.3724},5).to({scaleX:0.2682,scaleY:0.2682},3).wait(32).to({x:-57.6},5).to({_off:true},1).wait(4).to({_off:false,scaleX:0.1926,scaleY:0.1926,x:150,y:164.65,alpha:0},0).to({alpha:1},5).wait(52).to({alpha:0},5).to({_off:true},1).wait(6));

	// titulo1
	this.instance_4 = new lib.titulo1();
	this.instance_4.setTransform(-142.95,157.3,0.295,0.295,0,0,0,0.1,0.4);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(49).to({_off:false},0).to({x:150.05},5).wait(40).to({x:516.05},5).to({_off:true},1).wait(73));

	// titulo2
	this.instance_5 = new lib.titulo2();
	this.instance_5.setTransform(-142.9,195.3,0.295,0.295,0,0,0,0.4,0.4);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(52).to({_off:false},0).to({x:150.1},5).wait(37).to({x:516.1},5).to({_off:true},1).wait(73));

	// logo_copia
	this.instance_6 = new lib.logonegro();
	this.instance_6.setTransform(150,-38.05,0.4835,0.4835);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(104).to({_off:false},0).to({y:42.15},5).wait(52).to({alpha:0},5).to({_off:true},1).wait(6));

	// logo
	this.instance_7 = new lib.logo();
	this.instance_7.setTransform(141.7,127.3,0.5499,0.5499,0,0,0,0,0.1);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(14).to({_off:false},0).to({regY:0,scaleX:1,scaleY:1,y:127.25,alpha:1},10).wait(20).to({scaleX:0.4835,scaleY:0.4835,x:150,y:42.15},5).wait(50).to({_off:true},1).wait(73));

	// cuadrado
	this.instance_8 = new lib.cuadrado();
	this.instance_8.setTransform(150,125.05);
	this.instance_8.alpha = 0.4297;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(14).to({_off:false},0).wait(85).to({x:-154.25,y:125,alpha:0},4).to({_off:true},1).wait(69));

	// sombra
	this.instance_9 = new lib.sombra();
	this.instance_9.setTransform(151.65,318.55);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(99).to({_off:false},0).to({y:217},5).wait(57).to({alpha:0},5).to({_off:true},1).wait(6));

	// fondo
	this.instance_10 = new lib.fondo_1();
	this.instance_10.setTransform(457.1,124.35,0.9339,0.9339,0,0,0,0,0.2);
	this.instance_10.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({alpha:1},9).wait(90).to({regX:-0.1,regY:0.4,scaleX:0.6493,scaleY:0.6493,x:-6.35,y:126.6},5).wait(62).to({alpha:0},5).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-180.9,62.4,1105,318.40000000000003);
// library properties:
lib.properties = {
	id: 'B2A4B6EAAEFE490DBD8D480946BBB087',
	width: 300,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/300x250_ani_atlas_1.png", id:"300x250_ani_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['B2A4B6EAAEFE490DBD8D480946BBB087'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;