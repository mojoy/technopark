(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"tr_atlas_", frames: [[309,733,353,246],[1283,616,578,378],[0,0,1281,731],[1283,0,674,614],[664,733,246,209],[0,733,307,287]]}
];


// symbols:



(lib.der1 = function() {
	this.spriteSheet = ss["tr_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.der2 = function() {
	this.spriteSheet = ss["tr_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.dor = function() {
	this.spriteSheet = ss["tr_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.fly = function() {
	this.spriteSheet = ss["tr_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.fur = function() {
	this.spriteSheet = ss["tr_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.obl = function() {
	this.spriteSheet = ss["tr_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
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


(lib.tree = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.instance = new lib.der1();
	this.instance.parent = this;
	this.instance.setTransform(1692,1497);

	this.instance_1 = new lib.der1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1046,1159);

	this.instance_2 = new lib.der1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(647,913);

	this.instance_3 = new lib.der1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(257,713);

	this.instance_4 = new lib.der1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-161,421);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой_1
	this.instance_5 = new lib.der2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(1849,1070);

	this.instance_6 = new lib.der2();
	this.instance_6.parent = this;
	this.instance_6.setTransform(1095,624);

	this.instance_7 = new lib.der2();
	this.instance_7.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tree, new cjs.Rectangle(-161,0,2588,1743), null);


(lib.Анимация7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.fly();
	this.instance.parent = this;
	this.instance.setTransform(-337,-307);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-337,-307,674,614);


(lib.Анимация6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.fur();
	this.instance.parent = this;
	this.instance.setTransform(-123,-104.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-123,-104.5,246,209);


(lib.Анимация5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.obl();
	this.instance.parent = this;
	this.instance.setTransform(-153.5,-143.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-153.5,-143.5,307,287);


(lib.Анимация4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.obl();
	this.instance.parent = this;
	this.instance.setTransform(-153.5,-143.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-153.5,-143.5,307,287);


(lib.Анимация2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.dor();
	this.instance.parent = this;
	this.instance.setTransform(-640.5,-365.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-640.5,-365.5,1281,731);


(lib.Анимация1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.dor();
	this.instance.parent = this;
	this.instance.setTransform(-640.5,-365.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-640.5,-365.5,1281,731);


// stage content:
(lib.tr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// fly
	this.instance = new lib.Анимация7("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(541,336);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:526.3,y:348.3},95).to({x:541,y:336},95).wait(1));

	// auto
	this.instance_1 = new lib.Анимация6("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(308,450.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:332.5,y:448.1},71).to({x:316.4,y:462.8},63).to({x:308,y:450.5},56).wait(1));

	// obl
	this.instance_2 = new lib.Анимация4("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(521.5,159.5);

	this.instance_3 = new lib.Анимация5("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(83.8,-80.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true,x:83.8,y:-80.1},95).wait(16).to({_off:false,x:521.5,y:159.5},79).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:false},95).wait(1).to({x:993.5,y:374.7,alpha:0},0).to({x:918.2,y:340.3,alpha:1},15).to({_off:true,x:521.5,y:159.5},79).wait(1));

	// treev
	this.instance_4 = new lib.tree();
	this.instance_4.parent = this;
	this.instance_4.setTransform(504,218,1,1,0,0,0,289,189);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:-1334.8,y:-850.4},189).to({x:504,y:218},1).wait(1));

	// dor - копия
	this.instance_5 = new lib.Анимация1("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(1818.2,1046.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:639.8,y:365.5},189).to({x:640.5},1).wait(1));

	// dor - копия
	this.instance_6 = new lib.Анимация1("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(1221.5,701.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({x:39.5,y:17.6},189).to({x:40.3},1).wait(1));

	// dor
	this.instance_7 = new lib.Анимация2("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(639.5,366.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({x:-542.5,y:-317.4},189).to({x:1239.4,y:711.6},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(639.5,366.5,2643,1771);
// library properties:
lib.properties = {
	id: '92C7265797CC5B459A46F5C97DBDD4C2',
	width: 1281,
	height: 731,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/tr_atlas_.png?1581461169173", id:"tr_atlas_"}
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
an.compositions['92C7265797CC5B459A46F5C97DBDD4C2'] = {
	getStage: function() { return exportRoot.getStage(); },
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



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;