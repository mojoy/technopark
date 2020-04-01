(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"09_atlas_", frames: [[877,545,290,595],[0,0,849,807],[851,0,522,543],[0,809,875,780],[877,1142,238,273]]}
];


// symbols:



(lib.b = function() {
	this.spriteSheet = ss["09_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.f1 = function() {
	this.spriteSheet = ss["09_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.f2 = function() {
	this.spriteSheet = ss["09_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.f3 = function() {
	this.spriteSheet = ss["09_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.z = function() {
	this.spriteSheet = ss["09_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Анимация11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.z();
	this.instance.parent = this;
	this.instance.setTransform(-119,-136.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-119,-136.5,238,273);


(lib.Анимация10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.z();
	this.instance.parent = this;
	this.instance.setTransform(-119,-136.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-119,-136.5,238,273);


(lib.Анимация9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.f1();
	this.instance.parent = this;
	this.instance.setTransform(-424.5,-403.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-424.5,-403.5,849,807);


(lib.Анимация8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.f1();
	this.instance.parent = this;
	this.instance.setTransform(-424.5,-403.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-424.5,-403.5,849,807);


(lib.Анимация7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.f2();
	this.instance.parent = this;
	this.instance.setTransform(-261,-271.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-261,-271.5,522,543);


(lib.Анимация6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.f2();
	this.instance.parent = this;
	this.instance.setTransform(-261,-271.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-261,-271.5,522,543);


(lib.Анимация5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.b();
	this.instance.parent = this;
	this.instance.setTransform(-145,-297.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-145,-297.5,290,595);


(lib.Анимация4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.f3();
	this.instance.parent = this;
	this.instance.setTransform(-437.5,-390);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-437.5,-390,875,780);


(lib.Анимация3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.f3();
	this.instance.parent = this;
	this.instance.setTransform(-437.5,-390);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-437.5,-390,875,780);


// stage content:
(lib._09 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_238 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(238).call(this.frame_238).wait(1));

	// Слой_9
	this.instance = new lib.Анимация10("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(386.4,257.6,0.21,0.21,0,0,0,0.3,0);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.instance_1 = new lib.Анимация11("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(230,148.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(83).to({_off:false},0).to({_off:true,regX:0,scaleX:1,scaleY:1,x:230,y:148.5,alpha:1},20).wait(136));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(83).to({_off:false},20).wait(68).to({startPosition:0},0).to({alpha:0},18).wait(49).to({startPosition:0},0).wait(1));

	// Слой_6
	this.instance_2 = new lib.Анимация3("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(441.5,457);
	this.instance_2.alpha = 0;

	this.instance_3 = new lib.Анимация4("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(441.5,457);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},19).wait(220));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true,alpha:1},19).wait(220));

	// Слой_7
	this.instance_4 = new lib.Анимация5("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(456,547.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(44).to({_off:false},0).to({alpha:1},18).wait(147).to({startPosition:0},0).to({alpha:0},20).wait(10));

	// Слой_8
	this.instance_5 = new lib.Анимация6("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(421,570.5);
	this.instance_5.alpha = 0;

	this.instance_6 = new lib.Анимация7("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(421,570.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5}]}).to({state:[{t:this.instance_6}]},19).wait(220));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true,alpha:1},19).wait(220));

	// Слой_3
	this.instance_7 = new lib.Анимация8("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(455.5,403.5);
	this.instance_7.alpha = 0;

	this.instance_8 = new lib.Анимация9("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(455.5,403.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7}]}).to({state:[{t:this.instance_8}]},19).wait(220));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({_off:true,alpha:1},19).wait(220));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(444,425,876,847);
// library properties:
lib.properties = {
	id: '0C7B6BE259D11945B61BE41DDA7B5BF0',
	width: 880,
	height: 850,
	fps: 24,
	color: "#FFFFFF",
	opacity: 0.00,
	manifest: [
		{src:"images/09_atlas_.png?1583011413173", id:"09_atlas_"}
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
an.compositions['0C7B6BE259D11945B61BE41DDA7B5BF0'] = {
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