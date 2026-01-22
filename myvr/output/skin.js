// Garden Gnome Software - Skin
// Pano2VR 7.1.9/20995
// Filename: ??.ggsk
// Generated 2026-01-21T11:02:39

function pano2vrSkin(player,base) {
	var me=this;
	var skin=this;
	var flag=false;
	var nodeMarker=[];
	var activeNodeMarker=[];
	var skinKeyPressedKey = 0;
	var skinKeyPressedText = '';
	this.player=player;
	player.setApiVersion(7);
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	var cssPrefix="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown={};
	this.elementMouseOver={};
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	for(var i=0;i<prefixes.length;i++) {
		if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
			cssPrefix='-' + prefixes[i].toLowerCase() + '-';
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; });
	
	var parameterToTransform=function(p) {
		return p.def + 'translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this._=function(text, params) {
		return player._(text, params);
	}
	
	this.languageChanged=function() {
		var stack=[];
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdateText) {
				e.ggUpdateText();
			}
			if (e.ggUpdateAria) {
				e.ggUpdateAria();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('sizechanged', function () { me.updateSize(me.divSkin);});
	player.addListener('languagechanged', this.languageChanged);
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		el=me.__21=document.createElement('div');
		els=me.__21__img=document.createElement('img');
		els.className='ggskin ggskin__21';
		hs=basePath + 'images/_21.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\u5730\u5716";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 165px;';
		hs+='left : -2px;';
		hs+='position : absolute;';
		hs+='top : 2px;';
		hs+='visibility : inherit;';
		hs+='width : 390px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__21.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__21.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me.__21);
		el=me.__19=document.createElement('div');
		el.ggMarkerNodeId='{node2}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="\u884c\u653f\u5927\u6a13";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 306px;';
		hs+='position : absolute;';
		hs+='top : 113px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__19.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__19.onclick=function (e) {
			player.openNext("{node2}","");
		}
		me.__19.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me.__19);
		el=me.__17=document.createElement('div');
		el.ggMarkerNodeId='{node1}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="\u9580\u53e31";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 309px;';
		hs+='position : absolute;';
		hs+='top : 140px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__17.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__17.onclick=function (e) {
			player.openNext("{node1}","");
		}
		me.__17.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me.__17);
		el=me.__15=document.createElement('div');
		el.ggMarkerNodeId='{node19}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="\u9d3b\u8d85\u6a131";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 182px;';
		hs+='position : absolute;';
		hs+='top : 131px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__15.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__15.onclick=function (e) {
			player.openNext("{node19}","");
		}
		me.__15.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me.__15);
		el=me.__14=document.createElement('div');
		el.ggMarkerNodeId='{node18}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="\u5716\u66f8\u99281";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 178px;';
		hs+='position : absolute;';
		hs+='top : 101px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__14.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__14.onclick=function (e) {
			player.openNext("{node18}","");
		}
		me.__14.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me.__14);
		el=me.__8=document.createElement('div');
		els=me.__8__img=document.createElement('img');
		els.className='ggskin ggskin__8';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\u660e\u660e\u6a13";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 10px;';
		hs+='left : 2px;';
		hs+='position : absolute;';
		hs+='top : 435px;';
		hs+='visibility : inherit;';
		hs+='width : 12px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__8.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__8.onclick=function (e) {
			player.openNext("{node12}","");
		}
		me.__8.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me.__8);
		el=me.__13=document.createElement('div');
		el.ggMarkerNodeId='{node12}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="\u660e\u660e\u6a131";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 230px;';
		hs+='position : absolute;';
		hs+='top : 110px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__13.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__13.onclick=function (e) {
			player.openNext("{node12}","");
		}
		me.__13.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me.__13);
		el=me.__120=document.createElement('div');
		el.ggMarkerNodeId='{node17}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="\u5716\u66f8\u992812";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 178px;';
		hs+='position : absolute;';
		hs+='top : 62px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__120.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__120.onclick=function (e) {
			player.openNext("{node17}","");
		}
		me.__120.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me.__120);
		el=me.__12=document.createElement('div');
		el.ggMarkerNodeId='{node14}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="\u660e\u5b78\u6a131";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 210px;';
		hs+='position : absolute;';
		hs+='top : 57px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__12.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__12.onclick=function (e) {
			player.openNext("{node14}","");
		}
		me.__12.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me.__12);
		el=me.__11=document.createElement('div');
		el.ggMarkerNodeId='{node13}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="\u660e\u5149\u6a131";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 209px;';
		hs+='position : absolute;';
		hs+='top : 41px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__11.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__11.onclick=function (e) {
			player.openNext("{node13}","");
		}
		me.__11.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me.__11);
		el=me.__3=document.createElement('div');
		el.ggMarkerNodeId='{node10}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="\u884c\u653f";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 246px;';
		hs+='position : absolute;';
		hs+='top : 96px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__3.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__3.onclick=function (e) {
			player.openNext("{node10}","");
		}
		me.__3.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me.__3);
		el=me.__2=document.createElement('div');
		el.ggMarkerNodeId='{node9}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="\u8cc7\u8a0a\u5927\u6a13";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 272px;';
		hs+='position : absolute;';
		hs+='top : 103px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__2.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__2.onclick=function (e) {
			player.openNext("{node9}","");
		}
		me.__2.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me.__2);
		el=me.__1=document.createElement('div');
		el.ggMarkerNodeId='{node20}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="\u7ba1\u96621";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 234px;';
		hs+='position : absolute;';
		hs+='top : 130px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__1.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__1.onclick=function (e) {
			player.openNext("{node20}","");
		}
		me.__1.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me.__1);
		var clonedNormalElement = new SkinElement__18_Class(this,me.__19);
		me.__19__normal = clonedNormalElement.__18;
		me.__19__normalInst = clonedNormalElement;
		me.__19__normal.style.visibility='inherit';
		me.__19__normal.style.left='0px';
		me.__19__normal.style.top='0px';
		me.__19.ggMarkerNormal=me.__19__normal;
		me.__19.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement__0_Class(this,me.__19);
		me.__19__active = clonedActiveElement.__0;
		me.__19__activeInst = clonedActiveElement;
		me.__19__active.style.visibility='hidden';
		me.__19__active.style.left='0px';
		me.__19__active.style.top='0px';
		me.__19.ggMarkerActive=me.__19__active;
		me.__19.ggMarkerInstances.push(clonedActiveElement);
		if (me.__19.firstChild) {
			me.__19.insertBefore(me.__19__active,me.__19.firstChild);
		} else {
			me.__19.appendChild(me.__19__active);
		}
		if (me.__19.firstChild) {
			me.__19.insertBefore(me.__19__normal,me.__19.firstChild);
		} else {
			me.__19.appendChild(me.__19__normal);
		}
		for (var i = 0; i < me.__19.childNodes.length; i++) {
			me.__19.ggMarkerInstances.push(me.__19.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement__20_Class(this,me.__17);
		me.__17__normal = clonedNormalElement.__20;
		me.__17__normalInst = clonedNormalElement;
		me.__17__normal.style.visibility='inherit';
		me.__17__normal.style.left='0px';
		me.__17__normal.style.top='0px';
		me.__17.ggMarkerNormal=me.__17__normal;
		me.__17.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement__0_Class(this,me.__17);
		me.__17__active = clonedActiveElement.__0;
		me.__17__activeInst = clonedActiveElement;
		me.__17__active.style.visibility='hidden';
		me.__17__active.style.left='0px';
		me.__17__active.style.top='0px';
		me.__17.ggMarkerActive=me.__17__active;
		me.__17.ggMarkerInstances.push(clonedActiveElement);
		if (me.__17.firstChild) {
			me.__17.insertBefore(me.__17__active,me.__17.firstChild);
		} else {
			me.__17.appendChild(me.__17__active);
		}
		if (me.__17.firstChild) {
			me.__17.insertBefore(me.__17__normal,me.__17.firstChild);
		} else {
			me.__17.appendChild(me.__17__normal);
		}
		for (var i = 0; i < me.__17.childNodes.length; i++) {
			me.__17.ggMarkerInstances.push(me.__17.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement__16_Class(this,me.__15);
		me.__15__normal = clonedNormalElement.__16;
		me.__15__normalInst = clonedNormalElement;
		me.__15__normal.style.visibility='inherit';
		me.__15__normal.style.left='0px';
		me.__15__normal.style.top='0px';
		me.__15.ggMarkerNormal=me.__15__normal;
		me.__15.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement__0_Class(this,me.__15);
		me.__15__active = clonedActiveElement.__0;
		me.__15__activeInst = clonedActiveElement;
		me.__15__active.style.visibility='hidden';
		me.__15__active.style.left='0px';
		me.__15__active.style.top='0px';
		me.__15.ggMarkerActive=me.__15__active;
		me.__15.ggMarkerInstances.push(clonedActiveElement);
		if (me.__15.firstChild) {
			me.__15.insertBefore(me.__15__active,me.__15.firstChild);
		} else {
			me.__15.appendChild(me.__15__active);
		}
		if (me.__15.firstChild) {
			me.__15.insertBefore(me.__15__normal,me.__15.firstChild);
		} else {
			me.__15.appendChild(me.__15__normal);
		}
		for (var i = 0; i < me.__15.childNodes.length; i++) {
			me.__15.ggMarkerInstances.push(me.__15.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement__9_Class(this,me.__14);
		me.__14__normal = clonedNormalElement.__9;
		me.__14__normalInst = clonedNormalElement;
		me.__14__normal.style.visibility='inherit';
		me.__14__normal.style.left='0px';
		me.__14__normal.style.top='0px';
		me.__14.ggMarkerNormal=me.__14__normal;
		me.__14.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement__0_Class(this,me.__14);
		me.__14__active = clonedActiveElement.__0;
		me.__14__activeInst = clonedActiveElement;
		me.__14__active.style.visibility='hidden';
		me.__14__active.style.left='0px';
		me.__14__active.style.top='0px';
		me.__14.ggMarkerActive=me.__14__active;
		me.__14.ggMarkerInstances.push(clonedActiveElement);
		if (me.__14.firstChild) {
			me.__14.insertBefore(me.__14__active,me.__14.firstChild);
		} else {
			me.__14.appendChild(me.__14__active);
		}
		if (me.__14.firstChild) {
			me.__14.insertBefore(me.__14__normal,me.__14.firstChild);
		} else {
			me.__14.appendChild(me.__14__normal);
		}
		for (var i = 0; i < me.__14.childNodes.length; i++) {
			me.__14.ggMarkerInstances.push(me.__14.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement__6_Class(this,me.__13);
		me.__13__normal = clonedNormalElement.__6;
		me.__13__normalInst = clonedNormalElement;
		me.__13__normal.style.visibility='inherit';
		me.__13__normal.style.left='0px';
		me.__13__normal.style.top='0px';
		me.__13.ggMarkerNormal=me.__13__normal;
		me.__13.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement__0_Class(this,me.__13);
		me.__13__active = clonedActiveElement.__0;
		me.__13__activeInst = clonedActiveElement;
		me.__13__active.style.visibility='hidden';
		me.__13__active.style.left='0px';
		me.__13__active.style.top='0px';
		me.__13.ggMarkerActive=me.__13__active;
		me.__13.ggMarkerInstances.push(clonedActiveElement);
		if (me.__13.firstChild) {
			me.__13.insertBefore(me.__13__active,me.__13.firstChild);
		} else {
			me.__13.appendChild(me.__13__active);
		}
		if (me.__13.firstChild) {
			me.__13.insertBefore(me.__13__normal,me.__13.firstChild);
		} else {
			me.__13.appendChild(me.__13__normal);
		}
		for (var i = 0; i < me.__13.childNodes.length; i++) {
			me.__13.ggMarkerInstances.push(me.__13.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement__7_Class(this,me.__120);
		me.__120__normal = clonedNormalElement.__7;
		me.__120__normalInst = clonedNormalElement;
		me.__120__normal.style.visibility='inherit';
		me.__120__normal.style.left='0px';
		me.__120__normal.style.top='0px';
		me.__120.ggMarkerNormal=me.__120__normal;
		me.__120.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement__0_Class(this,me.__120);
		me.__120__active = clonedActiveElement.__0;
		me.__120__activeInst = clonedActiveElement;
		me.__120__active.style.visibility='hidden';
		me.__120__active.style.left='0px';
		me.__120__active.style.top='0px';
		me.__120.ggMarkerActive=me.__120__active;
		me.__120.ggMarkerInstances.push(clonedActiveElement);
		if (me.__120.firstChild) {
			me.__120.insertBefore(me.__120__active,me.__120.firstChild);
		} else {
			me.__120.appendChild(me.__120__active);
		}
		if (me.__120.firstChild) {
			me.__120.insertBefore(me.__120__normal,me.__120.firstChild);
		} else {
			me.__120.appendChild(me.__120__normal);
		}
		for (var i = 0; i < me.__120.childNodes.length; i++) {
			me.__120.ggMarkerInstances.push(me.__120.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement__5_Class(this,me.__12);
		me.__12__normal = clonedNormalElement.__5;
		me.__12__normalInst = clonedNormalElement;
		me.__12__normal.style.visibility='inherit';
		me.__12__normal.style.left='0px';
		me.__12__normal.style.top='0px';
		me.__12.ggMarkerNormal=me.__12__normal;
		me.__12.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement__0_Class(this,me.__12);
		me.__12__active = clonedActiveElement.__0;
		me.__12__activeInst = clonedActiveElement;
		me.__12__active.style.visibility='hidden';
		me.__12__active.style.left='0px';
		me.__12__active.style.top='0px';
		me.__12.ggMarkerActive=me.__12__active;
		me.__12.ggMarkerInstances.push(clonedActiveElement);
		if (me.__12.firstChild) {
			me.__12.insertBefore(me.__12__active,me.__12.firstChild);
		} else {
			me.__12.appendChild(me.__12__active);
		}
		if (me.__12.firstChild) {
			me.__12.insertBefore(me.__12__normal,me.__12.firstChild);
		} else {
			me.__12.appendChild(me.__12__normal);
		}
		for (var i = 0; i < me.__12.childNodes.length; i++) {
			me.__12.ggMarkerInstances.push(me.__12.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement__6_Class(this,me.__11);
		me.__11__normal = clonedNormalElement.__6;
		me.__11__normalInst = clonedNormalElement;
		me.__11__normal.style.visibility='inherit';
		me.__11__normal.style.left='0px';
		me.__11__normal.style.top='0px';
		me.__11.ggMarkerNormal=me.__11__normal;
		me.__11.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement__0_Class(this,me.__11);
		me.__11__active = clonedActiveElement.__0;
		me.__11__activeInst = clonedActiveElement;
		me.__11__active.style.visibility='hidden';
		me.__11__active.style.left='0px';
		me.__11__active.style.top='0px';
		me.__11.ggMarkerActive=me.__11__active;
		me.__11.ggMarkerInstances.push(clonedActiveElement);
		if (me.__11.firstChild) {
			me.__11.insertBefore(me.__11__active,me.__11.firstChild);
		} else {
			me.__11.appendChild(me.__11__active);
		}
		if (me.__11.firstChild) {
			me.__11.insertBefore(me.__11__normal,me.__11.firstChild);
		} else {
			me.__11.appendChild(me.__11__normal);
		}
		for (var i = 0; i < me.__11.childNodes.length; i++) {
			me.__11.ggMarkerInstances.push(me.__11.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement__4_Class(this,me.__3);
		me.__3__normal = clonedNormalElement.__4;
		me.__3__normalInst = clonedNormalElement;
		me.__3__normal.style.visibility='inherit';
		me.__3__normal.style.left='0px';
		me.__3__normal.style.top='0px';
		me.__3.ggMarkerNormal=me.__3__normal;
		me.__3.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement__0_Class(this,me.__3);
		me.__3__active = clonedActiveElement.__0;
		me.__3__activeInst = clonedActiveElement;
		me.__3__active.style.visibility='hidden';
		me.__3__active.style.left='0px';
		me.__3__active.style.top='0px';
		me.__3.ggMarkerActive=me.__3__active;
		me.__3.ggMarkerInstances.push(clonedActiveElement);
		if (me.__3.firstChild) {
			me.__3.insertBefore(me.__3__active,me.__3.firstChild);
		} else {
			me.__3.appendChild(me.__3__active);
		}
		if (me.__3.firstChild) {
			me.__3.insertBefore(me.__3__normal,me.__3.firstChild);
		} else {
			me.__3.appendChild(me.__3__normal);
		}
		for (var i = 0; i < me.__3.childNodes.length; i++) {
			me.__3.ggMarkerInstances.push(me.__3.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement__10_Class(this,me.__2);
		me.__2__normal = clonedNormalElement.__10;
		me.__2__normalInst = clonedNormalElement;
		me.__2__normal.style.visibility='inherit';
		me.__2__normal.style.left='0px';
		me.__2__normal.style.top='0px';
		me.__2.ggMarkerNormal=me.__2__normal;
		me.__2.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement__0_Class(this,me.__2);
		me.__2__active = clonedActiveElement.__0;
		me.__2__activeInst = clonedActiveElement;
		me.__2__active.style.visibility='hidden';
		me.__2__active.style.left='0px';
		me.__2__active.style.top='0px';
		me.__2.ggMarkerActive=me.__2__active;
		me.__2.ggMarkerInstances.push(clonedActiveElement);
		if (me.__2.firstChild) {
			me.__2.insertBefore(me.__2__active,me.__2.firstChild);
		} else {
			me.__2.appendChild(me.__2__active);
		}
		if (me.__2.firstChild) {
			me.__2.insertBefore(me.__2__normal,me.__2.firstChild);
		} else {
			me.__2.appendChild(me.__2__normal);
		}
		for (var i = 0; i < me.__2.childNodes.length; i++) {
			me.__2.ggMarkerInstances.push(me.__2.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement___Class(this,me.__1);
		me.__1__normal = clonedNormalElement.__;
		me.__1__normalInst = clonedNormalElement;
		me.__1__normal.style.visibility='inherit';
		me.__1__normal.style.left='0px';
		me.__1__normal.style.top='0px';
		me.__1.ggMarkerNormal=me.__1__normal;
		me.__1.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement__0_Class(this,me.__1);
		me.__1__active = clonedActiveElement.__0;
		me.__1__activeInst = clonedActiveElement;
		me.__1__active.style.visibility='hidden';
		me.__1__active.style.left='0px';
		me.__1__active.style.top='0px';
		me.__1.ggMarkerActive=me.__1__active;
		me.__1.ggMarkerInstances.push(clonedActiveElement);
		if (me.__1.firstChild) {
			me.__1.insertBefore(me.__1__active,me.__1.firstChild);
		} else {
			me.__1.appendChild(me.__1__active);
		}
		if (me.__1.firstChild) {
			me.__1.insertBefore(me.__1__normal,me.__1.firstChild);
		} else {
			me.__1.appendChild(me.__1__normal);
		}
		for (var i = 0; i < me.__1.childNodes.length; i++) {
			me.__1.ggMarkerInstances.push(me.__1.childNodes[i]);
		}
	};
	function SkinElement___Class(parentScope,ggParent) {
		var me=this;
		var flag=false;
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		var nodeId=ggParent.ggElementNodeId();
		me.ggNodeId=nodeId;
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.ggUserdata.nodeid=nodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
		
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		
		el=me.__=document.createElement('div');
		els=me.____img=document.createElement('img');
		els.className='ggskin ggskin__';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\u7ba1\u9662";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 10px;';
		hs+='left : 234px;';
		hs+='position : absolute;';
		hs+='top : 132px;';
		hs+='visibility : inherit;';
		hs+='width : 10px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me.__.onclick=function (e) {
			player.openNext("{node20}","");
		}
		me.__.ggUpdatePosition=function (useTransition) {
		}
	};
	function SkinElement__0_Class(parentScope,ggParent) {
		var me=this;
		var flag=false;
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		var nodeId=ggParent.ggElementNodeId();
		me.ggNodeId=nodeId;
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.ggUserdata.nodeid=nodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
		
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		
		el=me.__0=document.createElement('div');
		els=me.__0__img=document.createElement('img');
		els.className='ggskin ggskin__0';
		hs=basePath + 'images/_0.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\u6a19\u8a8c";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 17px;';
		hs+='left : 4px;';
		hs+='position : absolute;';
		hs+='top : 458px;';
		hs+='visibility : inherit;';
		hs+='width : 14px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__0.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me.__0.ggUpdatePosition=function (useTransition) {
		}
	player.addListener('timer', function() { var hs='';
if (me.__0.ggParameter) {
	hs+=parameterToTransform(me.__0.ggParameter) + ' ';
}
hs+='rotate(' + (-1.0*(1 * player.getPanNorth() + 180)) + 'deg) ';
me.__0.style.transform=hs; });
	};
	function SkinElement__10_Class(parentScope,ggParent) {
		var me=this;
		var flag=false;
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		var nodeId=ggParent.ggElementNodeId();
		me.ggNodeId=nodeId;
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.ggUserdata.nodeid=nodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
		
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		
		el=me.__10=document.createElement('div');
		els=me.__10__img=document.createElement('img');
		els.className='ggskin ggskin__10';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\u8cc7\u8a0a\u5927\u6a131";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 11px;';
		hs+='left : 273px;';
		hs+='position : absolute;';
		hs+='top : 107px;';
		hs+='visibility : inherit;';
		hs+='width : 13px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__10.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me.__10.onclick=function (e) {
			player.openNext("{node9}","");
		}
		me.__10.ggUpdatePosition=function (useTransition) {
		}
	};
	function SkinElement__4_Class(parentScope,ggParent) {
		var me=this;
		var flag=false;
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		var nodeId=ggParent.ggElementNodeId();
		me.ggNodeId=nodeId;
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.ggUserdata.nodeid=nodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
		
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		
		el=me.__4=document.createElement('div');
		els=me.__4__img=document.createElement('img');
		els.className='ggskin ggskin__4';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\u884c\u653f\u4e8c\u9928";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 12px;';
		hs+='left : 250px;';
		hs+='position : absolute;';
		hs+='top : 100px;';
		hs+='visibility : inherit;';
		hs+='width : 10px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__4.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me.__4.onclick=function (e) {
			player.openNext("{node10}","");
		}
		me.__4.ggUpdatePosition=function (useTransition) {
		}
	};
	function SkinElement__5_Class(parentScope,ggParent) {
		var me=this;
		var flag=false;
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		var nodeId=ggParent.ggElementNodeId();
		me.ggNodeId=nodeId;
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.ggUserdata.nodeid=nodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
		
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		
		el=me.__5=document.createElement('div');
		els=me.__5__img=document.createElement('img');
		els.className='ggskin ggskin__5';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\u660e\u5b78\u6a13";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 11px;';
		hs+='left : 211px;';
		hs+='position : absolute;';
		hs+='top : 60px;';
		hs+='visibility : inherit;';
		hs+='width : 11px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__5.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me.__5.onclick=function (e) {
			player.openNext("{node14}","");
		}
		me.__5.ggUpdatePosition=function (useTransition) {
		}
	};
	function SkinElement__6_Class(parentScope,ggParent) {
		var me=this;
		var flag=false;
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		var nodeId=ggParent.ggElementNodeId();
		me.ggNodeId=nodeId;
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.ggUserdata.nodeid=nodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
		
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		
		el=me.__6=document.createElement('div');
		els=me.__6__img=document.createElement('img');
		els.className='ggskin ggskin__6';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\u660e\u5149\u6a13";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 11px;';
		hs+='left : 212px;';
		hs+='position : absolute;';
		hs+='top : 43px;';
		hs+='visibility : inherit;';
		hs+='width : 10px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__6.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me.__6.onclick=function (e) {
			player.openNext("{node13}","");
		}
		me.__6.ggUpdatePosition=function (useTransition) {
		}
	};
	function SkinElement__7_Class(parentScope,ggParent) {
		var me=this;
		var flag=false;
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		var nodeId=ggParent.ggElementNodeId();
		me.ggNodeId=nodeId;
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.ggUserdata.nodeid=nodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
		
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		
		el=me.__7=document.createElement('div');
		els=me.__7__img=document.createElement('img');
		els.className='ggskin ggskin__7';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\u5b78\u9910";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 10px;';
		hs+='left : 183px;';
		hs+='position : absolute;';
		hs+='top : 67px;';
		hs+='visibility : inherit;';
		hs+='width : 10px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__7.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me.__7.onclick=function (e) {
			player.openNext("{node17}","");
		}
		me.__7.ggUpdatePosition=function (useTransition) {
		}
	};
	function SkinElement__9_Class(parentScope,ggParent) {
		var me=this;
		var flag=false;
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		var nodeId=ggParent.ggElementNodeId();
		me.ggNodeId=nodeId;
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.ggUserdata.nodeid=nodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
		
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		
		el=me.__9=document.createElement('div');
		els=me.__9__img=document.createElement('img');
		els.className='ggskin ggskin__9';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\u5716\u66f8\u9928";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 10px;';
		hs+='left : 181px;';
		hs+='position : absolute;';
		hs+='top : 105px;';
		hs+='visibility : inherit;';
		hs+='width : 10px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__9.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me.__9.onclick=function (e) {
			player.openNext("{node18}","");
		}
		me.__9.ggUpdatePosition=function (useTransition) {
		}
	};
	function SkinElement__16_Class(parentScope,ggParent) {
		var me=this;
		var flag=false;
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		var nodeId=ggParent.ggElementNodeId();
		me.ggNodeId=nodeId;
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.ggUserdata.nodeid=nodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
		
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		
		el=me.__16=document.createElement('div');
		els=me.__16__img=document.createElement('img');
		els.className='ggskin ggskin__16';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\u9d3b\u8d85\u6a13";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 10px;';
		hs+='left : 185px;';
		hs+='position : absolute;';
		hs+='top : 131px;';
		hs+='visibility : inherit;';
		hs+='width : 10px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__16.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me.__16.onclick=function (e) {
			player.openNext("{node19}","");
		}
		me.__16.ggUpdatePosition=function (useTransition) {
		}
	};
	function SkinElement__18_Class(parentScope,ggParent) {
		var me=this;
		var flag=false;
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		var nodeId=ggParent.ggElementNodeId();
		me.ggNodeId=nodeId;
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.ggUserdata.nodeid=nodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
		
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		
		el=me.__18=document.createElement('div');
		els=me.__18__img=document.createElement('img');
		els.className='ggskin ggskin__18';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\u884c\u653f\u5927\u6a131";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 10px;';
		hs+='left : 310px;';
		hs+='position : absolute;';
		hs+='top : 119px;';
		hs+='visibility : inherit;';
		hs+='width : 12px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__18.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me.__18.onclick=function (e) {
			player.openNext("{node2}","");
		}
		me.__18.ggUpdatePosition=function (useTransition) {
		}
	};
	function SkinElement__20_Class(parentScope,ggParent) {
		var me=this;
		var flag=false;
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		var nodeId=ggParent.ggElementNodeId();
		me.ggNodeId=nodeId;
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.ggUserdata.nodeid=nodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
		
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		
		el=me.__20=document.createElement('div');
		els=me.__20__img=document.createElement('img');
		els.className='ggskin ggskin__20';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAA3CAIAAAA0bgXlAAAQ4UlEQVRoga1aWXPbWHYGwH0nRZEitcvUbm2WLbu9dI+7ZzI9qXiqUlOVzEvmn8z8leRpqpK39ENS6WTc43Tb7d2SrV3URlEiRVGiuEjiDuQDLgBegmDbXZVrmwax3HvOued85zsHZEuVCvMzB8uytVrt8qqYzeYPEyf78WQsntyNJbYPji1GzmTkjAaO41iWYemnBPzBp8DUeaFaq1drvNtliwz0RAZ7B/pC3V2BcKjT43aazWbMLwjCJ0nyc6XH1JVKNZU+298/3N47WF7f3TlI1qpVm8VsNHJkVdzTELohBo6a9RH4ShW6MF63c3y4b3Ls2vjote5w0Omw0zP8/0jPSqNe5z+sbPzw/N3SytZ57sIAG0tm1l1OFR1XpWNBcx85yUMPXjAajSNDvf'+
			'fvzC3cmAoEOgRptJNFssUnSw9XKJfL8cPjH1+9X1qJnpxmqpUK7MZxjGpRIqIqnnpMZFAVIPfTNxM5ccECtzNZBvq6H/3qs8mxiNNpg21+wouMnyI6DFYoXGxG9588exvdOTjL5niel52bMiUtOi2felI6ID7N0jdLmyrqUK5Uy5clDE6on2Wyc9PjwUAH9qSdAh+XHvPmCxfrG7tPXy6+eLvK1+sGA0LTwDT5NPNpYSZP2e4C7GGzcHy9trK+c3l1dVUs35yb7O8NY0VdBT4ufbFY/rAa/esPr5fXtuGiRqOBtqUyp6ArFrGoukF0GChn6EiQPQo6YG+29w7Pc4VyuWK1mINBP6cXWD/l9xIy1l+9ef8v//btUTLlspskLGM08yjezLRebQ4DWdBWHfRuFj9r9brDZp2fnfinf/i7Dr+Xa0FSrp3oMECxWPqwuvmv'+
			'33yXzZ7bLAbVNm001blKNof8bQAF2xQM9M2agcgqliuItG+/e5Y9F4NNA1n6noObLi+vojuxvzx5kUieMAxPHL3NzfKBIAEfgT9GkpSDG4h6qfHdZPv2tlBxSdT+PJt/+XbFarV8fnc+GPCrVmgrPUD9MJF6vbi6uLzFsdjxpi1qhUWIi2EwGNxOqwWwZzQSYaFLtVIrlsqlCtJrHcmhJWE1QLPZrg0FqvV64vj0f568Cnb6HXabw2HHvUQBHelhplyhsLq+s/hhs1SumE1GdRkVuellRNRnOavV2uF1D/WHwkG/x+OwmE0iAparJ6fZw2Q6kQIA5iuVihiUrBwhqgIM03SGZRtxjm9AibrAbO8n3iytdfq9YyNDqgBa6XHeaDBsbe+/W96MJ9M2i0nNOLrxirAuV+sj1/ruL0zPTI25XU7keewyoEm6KtIhOGH6NL'+
			'Oyvv3nf/8rw9fs4uZwrUDEUHGiASs4ntdlW9/c7Q0HQkG/3++r1+ta6cnD4DBPni8BsMwKOOqZXPQuXmD7u7vuLMxen4h0hwIup0PCU8lnJNeHL4F4uZz2Dp8nHA4ORwbfvV9bXd9Opc8NBqY5SQstcd+0HiAfALq2udsd6sSKBun5JukhJRjY6sZ2/DCJhEd8RtWqSXResFmtg/3he7dnZyZHgccmk6FSqWWwwgXyTBHzQBrM4Ha73C6H3W4PBTvhWh1eV6DD+3ppbT0as1lNKorr8Z/GsWJEHnx2cSUKMtfh8+JkQ3p8gTlzucLKWhR7bTA05Qf6GHa1mEz9vaGH92/emp92Ox2IyPTp+VHieGf/6DSTxePVahUPwUVEq3cFenu6sDk+r3skMgDX4gyG43T26uoSiK2bhnQH7J0rXGKJvdiR1+M2GA207VkEWTKV'+
			'ju4dlcplCR90BrYYLtMV7Fi4MfnZwpzdbq3WaonEyfJa9N3S6sZOvHBZxD0ks2CLYH6IPTzUNzU5fG9h1ulygAPfvjmVOc9+98PbWq0qtJAlQkU1/JTcg8/zbA6EZXJi2E5Ljzuw4wfxRCyRFuo1k0jWGRL1qveTiWDRqYmRB3dvOhw2nN/dPfiPvzz78fUycB46S4GuRiTkYIA2z15/+PHdWiaT/fKLO+FQINTV+fWX97Ln+dWtPYS1lA1k9kYEbk3S5AwQJZ3Jf/P49d8/+spiMXOKfiDu9Uw2t7EdM7BAblaF22ZWI9LA0eH+ybEhv88DF0qlTv/zu+fg+owkOqs8oCRU+YTohwL//cslRO1JOgOrgcHPz43Dl9gW129J2I1oxifMajMxu3sHsHUjDSEmzrOFlc19Rtr31mROsKxS40cig4T3wcFevVuObscuLh'+
			'AnyKg6mYhwBOR8yH96lkXW3IjuAfiBqmOjkZ5QACRMAwmtXym6AfNzZiN7ED8qFUsN6cElT07PkycZoaUCUmYU/wE4Bvu6EYsQPZlMvXiznM8XmpOooDlQiQ3u2No5APAfn5xC+VBXoK+nC3gKAsNoh8JdWzSR8h2bSKZy+QtZepjt7Dx7lEiJiVCbzGVix0v+Nz81jGxqNpsAjGsbO7uxJFgAx6lWEJRSQ0s58RUSgzUgk6DQkai8uac76PG4avUm6akiRokDlvqUdhQZA7ZWV2XhNifpM4upwcaUtCevLzIwnuntCbpcdmmvSsCNWr3GCPQC+lWiakVA0FnmfO8gAQoPk3f6fUjOVSlxahSQbNAkusop8JHJXWRzeSUfMQxAOpu/QFDTLJzOgmIzg2E8LqdF9FQBnpYvXLHK7KqXt0pM6YM6GOwVahfISaQxk8lc'+
			'rwv0DI1JWvi2Mq1wdVWGAArmMMzFZRHaqJFHPFV1APkxhjGBK3MihwFGAenp2VvLC83CxApIbWCcgtThAbNAQAvNNm43SWMh2LpUhhM2ohY1GJyhXeKTFxD9h5c9khNZu+78lDQCbTNFExWdWGkuQXdRMonyqQleBvpjGFVtGIW4cpxmFrlmFZ2EE90dLEDCXSPArlmsJtFbGlPEK8Tsa7eaiS1gslq1ptcMoqthvcpYmlmWFFFfF7taTaupUUJgBAZDEkuls5dX2CLW6bABN1W/opOajrWUKbEKuFpPOEBmzmbzMAd8kdH6SaOE1YFv5UDNtTpLqa4v3ypt99ZuPJsvwH/sdtvQYB9EAVmnMZ5etIWcskh24VBwfHSIeCCAP18omAw65bVud64pKlTpOVJ6Nq/PNDsfsUfsKHWcOru6Kllt1r7e8GikH6BRrfGaBT'+
			'RbQSaBs3YFfGPDA0jVgN9sroCiGYzaoCe9+pR2F6mvqvQM3fSl5afFwgAp2Nzeh82APfCc2/NToL6ADrkS16ZGNWUiV/CIk9nJ4cnxIY/bVa3WYvGjw+QJ8UPNWuRBTfXYkET6x9LVCZgI4AuVHtUm0VIGfLWajR9Wt1CXDA70IHAX5qdQi9VrNcjB83W6a6KiLcnWYGYTIwN3b89dG+zDPucLpfXNnWTqFLTPJJWRzXmmiXc0iSEdSoxQwRfc4nTavR6PZEIVwnTqHezyWSa3vBpdXYvijMVi+puHn/3u0Vczk8PFcq1SrRKHlownfiIZg0qAWczPjP7+d387NTGMcIeNwI6iO3FkLpoLtCzXaHJpbG+3WsDzDH/8058kw3OpdCYWT6ZOziQvbHB6dWrVoXEOBgN6dAU6UIVbrWYU411BP6oQs9GYvyoDls5yxUKx'+
			'giTa3RWYnx5FFXb/zo2Bvm6LCLIsAVzEPdgyyBamElOHDkqxcvRLh3TX0WazzE6NNvC+w+eGBG8/bCCbYkt0K3EysGsINbGtybAPH9zs7wu73c7RyADo5/C1frDUbOESOC7WtUZDV6cXdTSIndfrIc1Ugt82m/X6eARObzQawZlRr3Fs29hlqP2Bc0Adn9vp87gV6QUBIdgdDtQbTFqgPad5E8R3EKB4P7xYgqt8dmt6sL8bgdgd7gIaCgJPoRYr+ScIGcqa8nEqe1UsYaM6/V4I7fE48SzuR9aMxRMVKW2xel0jMR8zFFKyDKwBY8mew0g1L1ja0vKm4vea/gSjlpusUnUBN9aisYvCBaIWIW+zWGA+lggsFzjiixHk5nzhInaQePn6/eKHjVK56u/wOp02KGmxWCCEx+VIg6BnC2RbWgsjOmqlyGTnpkZmVM9hpG'+
			'SE7ZgcGdzY2pPIICW1gveMQhXJhMhTLrt5Pbp/cHjcu7g2NTYU7g7C/G6nk3Sj+DqfSp8ep9KHiRTqkuh+sl6r78ePq9XKo998abGIrxXAkKevjxpNpn/+8zeg3AgVCv617ykYqRkjsEJvT9hqtTY8B7bHhk6PD21E97EqzdQ1pI9U0ATjpHKaKZUrsUPkgKzFarJbbWLksITAiUS6hDKsUsGH2BI1sqnTzNOX7zHNF/dv+bwurOtw2CfGrv3hHx/91+OnO/uHcCTldUOD3qgy8KJlDaPDg06Hne7ngLrYhwZ6g53e0wxsoG03qxBGoEB9ymCQ21ilUoVUlWzzU3IzmWMJn6lJXdXvny9if27OXQdUAO9RH96YGSuWSlaLKbobB/ttIU5yx8lhs45EBgJ+n7G5n8OYLeZQKBgZ6EbVV7gsGloQp4W3NM4TX6dBjRxr'+
			'3m0xUlcetUE8kXry7A2u3ZybDIcCOHA4bAs3rgPQIOLKxm5LY1Aqj3jB53M/uD1D6K2RUdrh2ClgsN/vHR0e2No7yhWuNC17SXQVEwTytblzpOZmln6KHg2VBGZ770jyWA6e43E7cMnrdc1MjV1cFTd3YogQ9WFB7rPzyHrhrsD1iWFO2kaaHorDYjbdvjXXFezEpKQOkV9GNolCtCXgQDPkRqpnqB2n+xlqyoMCsF/sMPXt4+f//fhpLnchXWXtNqv4xtxkpPUmUAEueK2/+96tKVTDnPQmVPNaQYRVf4fn/u3pgd5wsVyV5SMqUISNYI6sm+InSiXZaGaoslKVhqoMtBfbXgji529WHj95gTQv2luqAVp7JDClz+MEPx0bGQQqCLpvH3AWIHB9LJJIpjPnOWQA5Z2Pzmtu1d70GUUBrbsrjieDIBkkBpInp09fLY'+
			'F9DPSFqrX6VnRPIou06Hz+sjQ7PXZ9ItLp71DP67w7wa2BgH92aiyTzT9/I3Yn2XZv8tsMDUI3DzVpyMdwUch6cJRCkdW55UV2O8/maxTiwX/BAHxez43p8chQv1l6K9NWejF8TUagElAcGL67f6SpLGn4b6KucvtEtLEm27e8lmoyB2nFnWZyxycZRoRgsXOopir8BaH89S8Wbs1N+n2eOuVU+sRIKvysk+PXfvv1Q54zIlyUToIOhtA1BGkV0VdpWWm11apNPcYmwK6IV9JTIpQBMeBy2O8vTP36q7sISF5pEfyU9GQ47DYo8PvffokYByNWf7Qh/yiCwhAlChsSN+g0BWm0rIy8Idoykt6ucrWGJIDK4Te/fODv8CEgFZ9p7znqwyD9YI5f3JtHInq9uBo/SoKWyfSLKnmVJRvMgh5sS4ONvqi3rvw/6nf4yfzM'+
			'+IM7N0DCdWvfj//CBTqcZbKv3i5///wdqiHsnYGT20kqXWtvgibpW/O0RjeytbzkH16P+9bs+Bf3bk6MRRRqqB0f/5UFXB7U/96dOVRiufxl+iwrFti8oL5o0BWaFk4jru6dDLWZuMtusz28d+Pzu/M93V3tRGc+xfbKqiwKi4N44n+fvX2ztA4ap7Kulq5t44CWXkEkLXYpvEOkN3XxBQw3NNDz6OvPAdlOh6Pdb1t+tvSYBUTy7Dy3ur79YWUTVOTkLGeQuvK6L21apWfoviIVnbz0OzsQh+GhXpSLcJXIUC8wo02x2xif9NsodVXU1D3hoN1mCfi9vT2h3dhR/PD46CSDDG8xi7+VUiKrkZJ0nUtBLUHs3Aus02kf7e3q7w2NDw9GhvqCQb/FbJYqzI9I9X+LJfOkT9Fa9QAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\u9580\u53e3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 10px;';
		hs+='left : 313px;';
		hs+='position : absolute;';
		hs+='top : 144px;';
		hs+='visibility : inherit;';
		hs+='width : 10px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__20.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me.__20.onclick=function (e) {
			player.openNext("{node1}","");
		}
		me.__20.ggUpdatePosition=function (useTransition) {
		}
	};
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
		var newMarker=[];
		var id=player.getCurrentNode();
		var i,j;
		var tags=me.ggUserdata.tags;
		for (i=0;i<nodeMarker.length;i++) {
			var match=false;
			if ((nodeMarker[i].ggMarkerNodeId.length > 0) && (nodeMarker[i].ggMarkerNodeId.charAt(0)=='{') && (nodeMarker[i].ggMarkerNodeId.substr(1, nodeMarker[i].ggMarkerNodeId.length - 2)==id) && (id!='')) match=true;
			for(j=0;j<tags.length;j++) {
				if (nodeMarker[i].ggMarkerNodeId==tags[j]) match=true;
			}
			if (match) {
				newMarker.push(nodeMarker[i]);
			}
		}
		for(i=0;i<activeNodeMarker.length;i++) {
			if (newMarker.indexOf(activeNodeMarker[i])<0) {
				if (activeNodeMarker[i].ggMarkerNormal) {
					activeNodeMarker[i].ggMarkerNormal.style.visibility='inherit';
				}
				if (activeNodeMarker[i].ggMarkerActive) {
					activeNodeMarker[i].ggMarkerActive.style.visibility='hidden';
				}
				if (activeNodeMarker[i].ggDeactivate) {
					activeNodeMarker[i].ggDeactivate();
				}
				activeNodeMarker[i].ggIsMarkerActive=false;
			}
		}
		for(i=0;i<newMarker.length;i++) {
			if (activeNodeMarker.indexOf(newMarker[i])<0) {
				if (newMarker[i].ggMarkerNormal) {
					newMarker[i].ggMarkerNormal.style.visibility='hidden';
				}
				if (newMarker[i].ggMarkerActive) {
					newMarker[i].ggMarkerActive.style.visibility='inherit';
				}
				if (newMarker[i].ggActivate) {
					newMarker[i].ggActivate();
				}
				newMarker[i].ggIsMarkerActive=true;
			}
		}
		activeNodeMarker=newMarker;
	});
	me.skinTimerEvent=function() {
		if (player.isInVR()) return;
		me.ggCurrentTime=new Date().getTime();
	};
	player.addListener('timer', me.skinTimerEvent);
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode('.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px; line-height: normal; } .ggmarkdown p,.ggmarkdown h1,.ggmarkdown h2,.ggmarkdown h3,.ggmarkdown h4 { margin-top: 0px } .ggmarkdown { white-space:normal }'));
	document.head.appendChild(style);
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onclick) activeElement.onclick();
		}
	});
	document.addEventListener('keydown', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmousedown) activeElement.onmousedown();
		}
	});
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmouseup) activeElement.onmouseup();
		}
	});
	me.skinTimerEvent();
};