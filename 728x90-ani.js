(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


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



(lib.fondo728 = function() {
	this.initialize(img.fondo728);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);// helper functions:

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

	// Capa_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AQCEyQg7gCgogsQgqguAAhKIBTAAQACBHA5AEQAVAAAOgNQAPgNAAgXQABgtg2gNQhFgMgfgaQgnggAAhAQgBg/AmgoQAkgmA7AAQA+AAAnApQAqAtACBOIhTAAQgBgggQgTQgQgUgZgBQgWAAgNAPQgNAPAAAYQAAArA5APQBLATAaAWQAhAeAABCQAAA/goAlQgkAgg4AAIgGAAgADCD0QgwhCAAhvIAAjhIBiAAIAADiQgBA/AbAlQAZAkAogBQAogCAZgjQAbglAAg9IAAjiIBiAAIAAHHIheAAIAAhsQgMA3gkAgQghAegrAAIgBAAQhDAAgtg+gAT4D0Qg5hEAAhpQgBhtA4hDQA2g+BPAAQBPAAA1A+QA4BDAABtQgBBrg3BBQg0A/hQAAQhNAAg2g+gAU6gaQgZAlAAA7QAAA4AZAmQAaAnAmAAQAnAAAagmQAcglAAg6QAAg6gbglQgbgngnAAQgmAAgaAmgAjKD0Qg5hDAAhqQgBhtA4hDQA1g+BQAAQA5AAAsAlQAtAmAUBAIhVApQgVhNg9AAQgmAAgaAmQgZAmAAA6QAAA5AZAmQAaAmAmAAQA9AAAWhPIBVArQgRA5gtAoQgwAqg5AAQhNAAg2g+gAwhD0Qg6hEAAhpQgBhtA5hDQA1g+BPAAQBQAAA1A+QA3BDAABtQAABrg3BBQg1A/hQAAQhMAAg2g+gAvfgaQgaAlAAA7QAAA4AaAmQAaAnAlAAQAnAAAbgmQAbglAAg6QAAg6gaglQgbgngoAAQgmAAgZAmgA3uDhQhJhYACiJQAAiLBJhWQBChQBeAAQA+AAAzAnQA0AoAbBGIhVAzQgjhbhJAAQg3AAglA1QgmA4ABBXQAABWAlA4QAlA3A3AAQBKAAAjhkIBSAzQgaBLgzAqQgyAphAAAQheAAhDhRgAJAEpIAAnHIBdAAIAAB0QANhJA1geQAzgeAyAhIgvBnQgigdgoAiQgpAiAABGIAADjgAmYEpIAAjjQAAg/gagkQgagkgoABQgnABgZAjQgbAlAAA9IAADjIhiAAIAAnHIBeAAIAABsQALg3AlggQAhgeApAAQBFgBAuA+QAwBDAABuIAADig");
	this.shape.setTransform(-0.9015,-2.6695);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.texto1, new cjs.Rectangle(-159.9,-33.3,318.1,61.3), null);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E15131").s().p("AjPC1IAml3IF5AlIgWFggAAqiGQieAWhBCuQFCAhAtjXQgugRg0AAQgWAAgYADg");
	this.shape.setTransform(-77.45,17.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F7BD26").s().p("Ai9CoIAfleIFRANIALFggAhhiaIgDAjQAAArALAmQAkB7COAiQAvkRjoAAIgBAAg");
	this.shape_1.setTransform(-38.125,19.725);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#21953B").s().p("AiuC5IASl9IFKADIgCGGgAhvAqQgZA8AEA1QDnAZgLkjQiVAigyB3g");
	this.shape_2.setTransform(-37.6,-20.225);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ACVChQgLgnAAgqIADgjQDqgBgvETQiPgjgkh7gAlPDsQBBivCegWQBPgKBBAYQgmC7j3AAQgmAAgsgEgABwgsQgFg1AZg8QAyh4CWgiQALENjEAAQgRAAgSgCgAhEg6QhWgVgZhfQgJghAHg7IAJg0IAeAGQAkAMAeAWQBeBGgGCZQgPADgRAAQgXAAgZgGg");
	this.shape_3.setTransform(-62.0319,-0.25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0086BC").s().p("AifChIgnlSIGKgTIADGJgAgTg1QgHA6AJAhQAYBfBWAVQArALAmgIQAGiZhfhFQgegWgkgMIgdgGg");
	this.shape_4.setTransform(-78.225,-21.55);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("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");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.logonegro, new cjs.Rectangle(-108.2,-48.5,216.5,97.1), null);


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
	this.shape.graphics.f("#E15131").s().p("AjPC1IAml3IF5AlIgWFggAAqiGQieAWhBCuQFCAhAtjXQgugRg0AAQgWAAgYADg");
	this.shape.setTransform(-77.45,17.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F7BD26").s().p("Ai9CoIAfleIFRANIALFggAhhiaIgDAjQAAArALAmQAkB7COAiQAvkRjoAAIgBAAg");
	this.shape_1.setTransform(-38.125,19.725);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#21953B").s().p("AiuC5IASl9IFKADIgCGGgAhvAqQgZA8AEA1QDnAZgLkjQiVAigyB3g");
	this.shape_2.setTransform(-37.6,-20.225);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0086BC").s().p("AifChIgnlSIGKgTIADGJgAgTg1QgHA6AJAhQAYBfBWAVQArALAmgIQAGiZhfhFQgegWgkgMIgdgGg");
	this.shape_3.setTransform(-78.225,-21.55);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("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");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(-108.2,-48.5,216.5,97.1), null);


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

	// Capa_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AEjA2QgHgCgEgFQgEgFAAgGQgNgCgIgJQgIgKAAgNQAAgPALgKQAKgJAPAAQAPAAALAJQAKALAAAOQAAANgIAKQgIAJgMACQAAAGAIAAQAIAAAFgGIAJALQgMAIgKAAIgIgBgAEMgNQgGAGAAAJQAAAKAGAGQAGAHAJAAQAJAAAGgHQAGgGAAgKQAAgJgGgGQgGgHgJAAQgJAAgGAHgAkrAlQgLAAgHgGQgIgGAAgKIANAAQAAAFAFADQAEADAEAAQAFAAAEgCQADgCAAgFQABgEgEgDQgDgCgIgBQgZgDAAgRQAAgJAHgFQAHgFALAAQAKAAAIAFQAIAHAAAKIgNAAQAAgGgEgDQgEgCgFAAQgFAAgDACQgDADAAAEQAAAHANACQANACAHAEQAHAGgBAJQAAAKgIAFQgHAEgJAAIgCAAgAFRAeQgHgIAAgMIAAgpIAOAAIAAAoQAAAHAEAEQAEAFAHAAQAGAAAEgFQAEgEAAgHIAAgoIAOAAIAAApQAAAMgIAIQgHAHgOAAQgNAAgIgHgAj+AcQgLgLAAgPQAAgPALgKQAKgJAPAAQAKAAAIAEQAIAFAFAIIgNAGQgGgLgMAAQgJAAgGAGQgGAHAAAJQAAAKAGAGQAGAHAJAAQANAAAFgMIANAGQgEAIgIAFQgIAFgLAAQgPAAgKgJgAGLAkIAAhDIAOAAIAABDgADgAkIgJgUIgaAAIgJAUIgPAAIAehDIAOAAIAfBDgADSAFIgIgSIgIASIAQAAgABQAkIAAhDIAxAAIAAAOIgiAAIAAAOIAeAAIAAALIgeAAIAAANIAiAAIAAAPgAAlAkIAAg3IgVAAIAAgMIA4AAIAAAMIgVAAIAAA3gAgnAkIAAhDIAvAAIAAAOIghAAIAAAOIAdAAIAAALIgdAAIAAANIAhAAIAAAPgAhkAkIAAhDIAbAAQANAAAGAFQAFAFAAAHQAAAFgDAEQgEAEgFABQAGABAEAEQAEAEAAAGQAAAJgFAFQgHAHgOAAgAhWAYIAMAAQAMAAAAgKQAAgJgNAAIgLAAgAhWgFIALAAQALAAAAgGQAAgIgLAAIgLAAgAh/AkIAAhDIAOAAIAABDgAibAkIgPgZIgFAAIAAAZIgPAAIAAhDIAcAAQAOAAAHAHQAGAGAAAJQAAARgQADIgDAAIAPAZgAivAAIANAAQAMAAAAgJQAAgKgMAAIgNAAgAlaAkIgegqIAAAqIgPAAIAAhDIANAAIAdArIAAgrIAPAAIAABDgAmdAkIAAhDIAOAAIAABDgAGLgkIAHgSIAMAAIgHASgAh/gkIAHgSIAMAAIgHASg");
	this.shape.setTransform(-0.025,-0.0136);

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


(lib.fondo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_2
	this.instance = new lib.sombra();
	this.instance.setTransform(-243.55,0,0.4218,4.9872,90,0,0,0,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// fondo
	this.instance_1 = new lib.fondo728();
	this.instance_1.setTransform(-364,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.fondo, new cjs.Rectangle(-553,-65.7,917,131.5), null);


// stage content:
(lib._728x90ani = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [194];
	// timeline functions:
	this.frame_194 = function() {
		this.loopCount = this.loopCount || 0;
		this.loopCount++;
		
		if(this.loopCount < 3){
		    this.gotoAndPlay(0);
		}else{
		    this.stop();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(194).call(this.frame_194).wait(19));

	// borde
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("A3bnBMAu3AAAIAAODMgu3AAAg");
	this.shape.setTransform(364.0065,45,2.4267,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(213));

	// btn
	this.instance = new lib.btn();
	this.instance.setTransform(655.2,47.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(131).to({_off:false},0).to({alpha:1},5).wait(62).to({alpha:0},5).to({_off:true},1).wait(9));

	// text2b
	this.instance_1 = new lib.text2b();
	this.instance_1.setTransform(330.4,62.2,0.4161,0.4161,0,0,0,0.1,0.2);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(121).to({_off:false},0).to({alpha:1},5).wait(72).to({alpha:0},5).to({_off:true},1).wait(9));

	// text2a
	this.instance_2 = new lib.text2a();
	this.instance_2.setTransform(330.4,47.55,0.4161,0.4161,0,0,0,0.1,0);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(121).to({_off:false},0).to({alpha:1},5).wait(72).to({alpha:0},5).to({_off:true},1).wait(9));

	// texto1
	this.instance_3 = new lib.texto1();
	this.instance_3.setTransform(330.5,21.9,0.0676,0.0676,0,0,0,0,0.8);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(54).to({_off:false},0).to({regY:0.2,scaleX:0.2656,scaleY:0.2656},5).to({scaleX:0.1913,scaleY:0.1913},3).wait(136).to({alpha:0},5).to({_off:true},1).wait(9));

	// titulo1
	this.instance_4 = new lib.titulo1();
	this.instance_4.setTransform(235.15,55.6,0.2104,0.2104,0,0,0,0.2,0.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(49).to({_off:false},0).to({x:269.9,alpha:1},5).wait(62).to({y:120.05,alpha:0},5).to({_off:true},1).wait(91));

	// titulo2
	this.instance_5 = new lib.titulo2();
	this.instance_5.setTransform(462.55,54.3,0.2104,0.2104,0,0,0,0.5,0.5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(52).to({_off:false},0).to({x:425.25,alpha:1},5).wait(59).to({y:118.75,alpha:0},5).to({_off:true},1).wait(91));

	// logo
	this.instance_6 = new lib.logonegro();
	this.instance_6.setTransform(364.05,45.05,0.3412,0.3412,0,0,0,0.1,0.1);
	this.instance_6.alpha = 0;

	this.instance_7 = new lib.logo();
	this.instance_7.setTransform(79.85,45.1,0.5246,0.5246,0,0,0,0.2,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6}]}).to({state:[{t:this.instance_6}]},9).to({state:[{t:this.instance_6}]},35).to({state:[{t:this.instance_7}]},5).to({state:[{t:this.instance_6}]},149).to({state:[{t:this.instance_6}]},5).to({state:[]},1).wait(9));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regX:0,regY:0,scaleX:0.6728,scaleY:0.6728,x:364,y:45,alpha:1},9).wait(35).to({_off:true,regX:0.2,regY:0.2,scaleX:0.5246,scaleY:0.5246,x:79.85,y:45.1},5).wait(149).to({_off:false},0).to({alpha:0},5).to({_off:true},1).wait(9));

	// sombra
	this.instance_8 = new lib.sombra();
	this.instance_8.setTransform(155.9,726.05,1,1.8746);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(126).to({_off:false},0).to({y:551.4,alpha:1},5).to({_off:true},73).wait(9));

	// fondo
	this.instance_9 = new lib.fondo();
	this.instance_9.setTransform(364.1,45.3,1.032,1.032,0,0,0,0.1,0.3);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(44).to({_off:false},0).to({alpha:1},9).wait(151).to({alpha:0},7).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(157.3,22.2,582.4000000000001,820.5999999999999);
// library properties:
lib.properties = {
	id: 'B2A4B6EAAEFE490DBD8D480946BBB087',
	width: 728,
	height: 90,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/fondo728.jpg?1778513752635", id:"fondo728"}
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