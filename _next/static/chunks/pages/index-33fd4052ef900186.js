(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(2904)}])},955:function(e,t,i){"use strict";var n=i(5893),s=i(7294),o=i(1163),a=i(6010),r=i(7268),h=i.n(r),l=i(3322),c=i.n(l);t.Z=function(e){let{containerId:t}=e,[i,r]=(0,s.useState)(!1),l=(0,o.useRouter)(),d=e=>{e.preventDefault(),e.target.pathname!==l.asPath&&(p(),setTimeout(()=>{l.push(e.target.pathname)},500))},m=e=>{let t=e.target.documentElement.scrollTop;!i&&t>=1?r(!0):i&&t<1&&r(!1)},u=()=>{_(),setTimeout(()=>{f()},500)},p=()=>{if(t){console.log("addUnloadingClass");let e=document.getElementById(t);e.classList.add(c().unloading)}},_=()=>{if(t){console.log("addLoadingClass");let e=document.getElementById(t);e.classList.add(c().loading)}},f=()=>{if(t){console.log("removeLoadingClass");let e=document.getElementById(t);e.classList.remove(c().loading)}};return(0,s.useEffect)(()=>(window.addEventListener("scroll",m),l.events.on("routeChangeComplete",u),()=>{window.removeEventListener("scroll",m),l.events.off("routeChangeComplete",u)}),[l,i]),(0,n.jsx)("nav",{className:(0,a.W)(h().nav__container,c().transition,i&&h().nav__shadow),children:(0,n.jsxs)("ul",{className:h().nav__list,children:[(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"/",className:(0,a.W)(h().nav__link,c().transition,"/"===l.asPath&&h().nav__activeLink),"aria-label":"Home",onClick:d,children:"Home"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"/code",className:(0,a.W)(h().nav__link,c().transition,"/code"===l.asPath&&h().nav__activeLink),"aria-label":"Code",onClick:d,children:"Code"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"/about",className:(0,a.W)(h().nav__link,c().transition,"/about"===l.asPath&&h().nav__activeLink),"aria-label":"About",onClick:d,children:"About"})})]})})}},2904:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return b}});var n=i(5893),s=i(7294),o=i(1163),a=i(9008),r=i.n(a),h=i(955),l=i(6785),c=i.n(l),d=function(){return(0,n.jsxs)("div",{className:c().container,children:[(0,n.jsx)("div",{className:c().group,children:(0,n.jsxs)("div",{className:c().bigSqr,children:[(0,n.jsx)("div",{className:"".concat(c().square," ").concat(c().first)}),(0,n.jsx)("div",{className:"".concat(c().square," ").concat(c().second)}),(0,n.jsx)("div",{className:"".concat(c().square," ").concat(c().third)}),(0,n.jsx)("div",{className:"".concat(c().square," ").concat(c().fourth)})]})}),(0,n.jsx)("div",{className:c().text,children:"loading"})]})},m=i(9477),u=i(7836),p=class{_Init(){this.timer||(this.timer=setInterval(()=>this.Roll.call(this),1e3))}_GetRandomInt(e){return Math.floor(Math.random()*e)}Roll(){if(this.stateManager.State===this.stateManager.idleState&&.2>Math.random()){let e,t=this.stateManager.AnimationStates;do e=this._GetRandomInt(t.length-1);while(e===this.previousAction);this.previousAction=e,this.stateManager.RequestAction(t[e])}}PauseRolls(){clearInterval(this.timer),this.timer=null}ResumeRolls(){this.timer&&clearInterval(this.timer),this._Init()}Dispose(){this.PauseRolls()}constructor(e){this.stateManager=e,this.timer=null,this.previousAction=-1,this._Init()}},_=class{_LoadAnimations(){let e=this.animations[0],t=m.ZZA.subclip(e,"shock",0,41),i=m.ZZA.subclip(e,"plotting",44,80),n=m.ZZA.subclip(e,"smileBobble",82,134),s=m.ZZA.subclip(e,"sad",136,198),o=m.ZZA.subclip(e,"spin",200,243),a=m.ZZA.subclip(e,"snigger",245,280),r=m.ZZA.subclip(e,"idleBobble",282,300);this.shockAction=this.mixer.clipAction(t),this.plottingAction=this.mixer.clipAction(i),this.smileBobbleAction=this.mixer.clipAction(n),this.sadAction=this.mixer.clipAction(s),this.spinAction=this.mixer.clipAction(o),this.sniggerAction=this.mixer.clipAction(a),this.idleBobbleAction=this.mixer.clipAction(r),this.allActions=[this.shockAction,this.plottingAction,this.smileBobbleAction,this.sadAction,this.spinAction,this.sniggerAction,this.idleBobbleAction],this.allActions.forEach(e=>{this._SetWeight(e,0),e.play()});let h=[this.shockAction,this.plottingAction,this.smileBobbleAction,this.spinAction],l=Math.floor(Math.random()*h.length);this._PlayThenIdle(h[l])}_SetWeight(e,t){e.enabled=!0,e.setEffectiveTimeScale(.5),e.setEffectiveWeight(t)}GetAction(e){let t;switch(e){case"shock":t=this.shockAction;break;case"plotting":t=this.plottingAction;break;case"smileBobble":t=this.smileBobbleAction;break;case"sad":t=this.sadAction;break;case"spin":t=this.spinAction;break;case"snigger":t=this.sniggerAction;break;case"idleBobble":t=this.idleBobbleAction;break;default:t=null}return t}QueueActionOnce(e){if(this.queuedAction)return;this.queuedAction=e;let t=this.GetAction(this.currentAction),i=n=>{n.action===t&&(this.mixer.removeEventListener("loop",i),this.queuedAction=null,this._StopAction(t),this._PlayThenIdle(e))};this.mixer.addEventListener("loop",i)}_StopAction(e){this._SetWeight(e,0)}_PlayAction(e){this.currentAction=e._clip.name,e.time=0,this._SetWeight(e,1),this.stateManager.NotifyNewAction(this.currentAction)}_PlayThenIdle(e){let t=i=>{i.action===e&&(this.mixer.removeEventListener("loop",t),this._StopAction(e),this._PlayAction(this.idleBobbleAction))};this._PlayAction(e),this.mixer.addEventListener("loop",t)}Update(e){this.mixer&&this.mixer.update(e)}Dispose(){this.mixer.stopAllAction(),this.allActions.map(e=>{this.mixer.uncacheAction(e)})}constructor(e){this.stateManager=e,this.face=this.stateManager.face,this.animations=this.face.animations,this.mixer=new m.Xcj(this.face.model),this.queuedAction=null,this.currentAction=null,this._LoadAnimations()}},f=class{_Init(){this.isTouchDevice="ontouchstart"in document.documentElement,this.morphValues=[-1,-1,-1,-1,-1],this._SetUpdateTargets(["face_1","face_2","face_3","brows"]),this.morphs={nose:{name:"nose",morphIndices:[5,6,7,8],containerPosition:["20%","30%","41%","35%"],manipulatorPosition:["30%","30%","35%","35%"],offsetX:0,offsetY:0,containerElement:null,manipulatorElement:null},chin:{name:"chin",morphIndices:[9,10,11,12],containerPosition:["25%","32%","61%","34%"],manipulatorPosition:["30%","30%","35%","35%"],offsetX:0,offsetY:0,containerElement:null,manipulatorElement:null},leftBrow:{name:"leftBrow",morphIndices:[13,14,15,16],containerPosition:["20%","20%","25%","26%"],manipulatorPosition:["35%","35%","35%","35%"],offsetX:0,offsetY:0,containerElement:null,manipulatorElement:null},rightBrow:{name:"rightBrow",morphIndices:[17,18,19,20],containerPosition:["20%","20%","25%","54%"],manipulatorPosition:["35%","35%","35%","35%"],offsetX:0,offsetY:0,containerElement:null,manipulatorElement:null},leftCheek:{name:"leftCheek",morphIndices:[21,22,23,24],containerPosition:["30%","20%","43%","26%"],manipulatorPosition:["35%","35%","35%","35%"],offsetX:0,offsetY:0,containerElement:null,manipulatorElement:null},rightCheek:{name:"rightCheek",morphIndices:[25,26,27,28],containerPosition:["30%","20%","43%","54%"],manipulatorPosition:["35%","35%","35%","35%"],offsetX:0,offsetY:0,containerElement:null,manipulatorElement:null},leftEarTip:{name:"leftEarTip",morphIndices:[29,30,31,32],containerPosition:["20%","12%","36%","19%"],manipulatorPosition:["45%","45%","35%","35%"],offsetX:0,offsetY:0,containerElement:null,manipulatorElement:null},rightEarTip:{name:"rightEarTip",morphIndices:[33,34,35,36],containerPosition:["20%","12%","36%","69%"],manipulatorPosition:["45%","45%","35%","35%"],offsetX:0,offsetY:0,containerElement:null,manipulatorElement:null},leftEarLobe:{name:"leftEarLobe",morphIndices:[37,38,39,40],containerPosition:["20%","12%","52%","23%"],manipulatorPosition:["45%","45%","35%","35%"],offsetX:0,offsetY:0,containerElement:null,manipulatorElement:null},rightEarLobe:{name:"rightEarLobe",morphIndices:[41,42,43,44],containerPosition:["20%","12%","52%","65%"],manipulatorPosition:["45%","45%","35%","35%"],offsetX:0,offsetY:0,containerElement:null,manipulatorElement:null},forehead:{name:"forehead",morphIndices:[45,46,47,48],containerPosition:["20%","30%","19%","35%"],manipulatorPosition:["45%","45%","35%","35%"],offsetX:0,offsetY:0,containerElement:null,manipulatorElement:null},lips:{name:"lips",morphIndices:[49,50,51,52],containerPosition:["20%","30%","54%","35%"],manipulatorPosition:["40%","40%","35%","35%"],offsetX:0,offsetY:0,containerElement:null,manipulatorElement:null}},this._MakeDOM()}_SetUpdateTargets(e){this.face.traverse(t=>{t.isMesh&&e.includes(t.name)&&this.updateTargets.push(t)})}_MakeDOM(){let e=document.createElement("div");e.id="three_faceContainer",e.style.position="absolute",e.style.height="1px",e.style.width="1px",e.style.top=0,e.style.overflow="hidden";let t=document.createElement("div");t.style.display="flex",t.style.justifyContent="center",t.style.alignItems="center",t.style.height="100%",t.style.width="100%";let i=document.createElement("div");for(let n in i.id="three_faceObject",i.style.position="absolute",i.style.height="1px",i.style.width="1px",i.style.cursor="grab",document.getElementById(this.stateManager.face.canvasId).appendChild(e),e.appendChild(t),t.appendChild(i),this.morphs){let e=this.morphs[n],t=document.createElement("div");t.style.position="absolute",t.style.height=e.containerPosition[0],t.style.width=e.containerPosition[1],t.style.top=e.containerPosition[2],t.style.left=e.containerPosition[3];let s=document.createElement("div");s.style.position="relative",s.style.height=e.manipulatorPosition[0],s.style.width=e.manipulatorPosition[1],s.style.top=e.manipulatorPosition[2],s.style.left=e.manipulatorPosition[3],e.containerElement=t,e.manipulatorElement=s,i.appendChild(t),t.appendChild(s)}this.mouseDownEventListener=e=>{let t,i;this.isTouchDevice?(t=e.touches[0].clientX,i=e.touches[0].clientY):(e.preventDefault(),t=e.clientX,i=e.clientY);let n=null,s={x:null,y:null},o=-1;for(let e in this.morphs){let a,r,h=this.morphs[e],l=h.manipulatorElement.getBoundingClientRect(),c={x:t-l.x,y:i-l.y},d=Math.abs(a=c.x<0?c.x:(a=c.x-l.width)<0?0:a)+Math.abs(r=c.y<0?c.y:(r=c.y-l.height)<0?0:r);(-1===o||d<o)&&(n=h,s=c,o=d)}o<50&&(this.active=n,this.active.offsetX=s.x,this.active.offsetY=s.y,this.stateManager.PauseRandomController())},this.mouseMoveEventListener=e=>{if(this.active){let t,i;e.preventDefault();let n=this.active.containerElement,s=this.active.manipulatorElement;this.isTouchDevice?(t=e.touches[0].clientX,i=e.touches[0].clientY):(t=e.clientX,i=e.clientY);let o=n.getBoundingClientRect(),a=t-o.x-this.active.offsetX,r=i-o.y-this.active.offsetY,h=n.offsetWidth-s.offsetWidth,l=n.offsetHeight-s.offsetHeight;a=Math.max(0,Math.min(h,a)),r=Math.max(0,Math.min(l,r)),s.style.left=a+"px",s.style.top=r+"px",this._CalculateMorph(this.active)}},this.mouseUpEventListener=()=>{this.active&&(this.active=null,this.stateManager.ResumeRandomController())},this.isTouchDevice?(document.addEventListener("touchstart",this.mouseDownEventListener,{passive:!1}),document.addEventListener("touchmove",this.mouseMoveEventListener,{passive:!1}),document.addEventListener("touchend",this.mouseUpEventListener)):(document.addEventListener("mousedown",this.mouseDownEventListener),document.addEventListener("mousemove",this.mouseMoveEventListener),document.addEventListener("mouseup",this.mouseUpEventListener)),this.Resize()}_CalculateMorph(e){let t=e.containerElement,i=e.manipulatorElement,n=t.offsetWidth-i.offsetWidth,s=t.offsetHeight-i.offsetHeight,o=0,a=0,r=0,h=0,l=i.offsetLeft/n,c=i.offsetTop/s;l<.5&&(r=1-(r=2*l)),l>=.5&&(h=2*l-1),c<.5&&(o=1-(o=2*c)),c>=.5&&(a=2*c-1),this.morphValues[e.morphIndices[0]]=o,this.morphValues[e.morphIndices[1]]=a,this.morphValues[e.morphIndices[2]]=r,this.morphValues[e.morphIndices[3]]=h}Update(){for(let t of this.updateTargets)for(let i=0;i<this.morphValues.length;i++)if(-1!==this.morphValues[i]){var e;t.morphTargetInfluences[i]=null!==(e=this.morphValues[i])&&void 0!==e?e:0}}ResetMorphs(){for(let e=0;e<this.morphValues.length;e++)-1!==this.morphValues[e]&&(this.morphValues[e]=0);for(let e in this.morphs)this._RecalibrateManipulator(this.morphs[e])}Resize(){let e=document.getElementById("three_canvas"),t=document.getElementById("three_faceContainer"),i=document.getElementById("three_faceObject");t.style.height=e.style.height,t.style.width=e.style.width;let n=new m.ZzF().setFromObject(this.face),s=n.max.y-n.min.y,o=n.max.z-n.min.z,a=parseInt(e.style.height);for(let e in i.style.height=a*s+"px",i.style.width=a*o+"px",this.morphs)this._RecalibrateManipulator(this.morphs[e])}_RecalibrateManipulator(e){var t,i,n,s;let o=e.containerElement,a=e.manipulatorElement,r=o.offsetWidth-a.offsetWidth,h=o.offsetHeight-a.offsetHeight,l=null!==(t=this.morphValues[e.morphIndices[0]])&&void 0!==t?t:0,c=null!==(i=this.morphValues[e.morphIndices[1]])&&void 0!==i?i:0,d=null!==(n=this.morphValues[e.morphIndices[2]])&&void 0!==n?n:0,m=null!==(s=this.morphValues[e.morphIndices[3]])&&void 0!==s?s:0;a.style.left=(r-r*d)/2+r/2*m+"px",a.style.top=(h-h*l)/2+h/2*c+"px"}Dispose(){this.isTouchDevice?(document.removeEventListener("touchstart",this.mouseDownEventListener),document.removeEventListener("touchmove",this.mouseUpEventListener),document.removeEventListener("touchend",this.mouseMoveEventListener)):(document.removeEventListener("mousedown",this.mouseDownEventListener),document.removeEventListener("mouseup",this.mouseUpEventListener),document.removeEventListener("mousemove",this.mouseMoveEventListener))}constructor(e){this.stateManager=e,this.face=this.stateManager.face.model,this.updateTargets=[],this.morphValues,this.morphs={},this.active=null,this.isTouchDevice=!1,this._Init()}},g=class{_Init(){this.isTouchDevice="ontouchstart"in document.documentElement,this._SetUpdateTargets(["eye_l_1","eye_l_2","eye_r_1","eye_r_2"]),this.Resize(),this.eyeTarget=new m.Pa4,this.eyeTarget.z=2e3,this.mouseMoveListener=e=>{e.preventDefault(),this.mouseX=e.clientX-this.windowWidth,this.mouseY=e.clientY-this.windowHeight},this.touchStartListener=e=>{this.mouseX=e.touches[0].clientX-this.windowWidth,this.mouseY=e.touches[0].clientY-this.windowHeight},this.isTouchDevice?document.addEventListener("touchstart",this.touchStartListener,{passive:!1}):document.addEventListener("mousemove",this.mouseMoveListener)}_SetUpdateTargets(e){this.face.traverse(t=>{t.isMesh&&e.includes(t.name)&&(t.neutralPosition=new m._fP().copy(t.quaternion),this.updateTargets.push(t))})}PauseTracking(){for(let e of(this.transitionTime=0,this.updateTargets))e.transitionStart=new m._fP().copy(e.quaternion),e.transitionEnd=e.neutralPosition;this.isTracking=!1}ResumeTracking(){for(let e of(this.transitionTime=0,this.updateTargets))e.lookAt(this.eyeTarget),e.transitionEnd=new m._fP().copy(e.quaternion),e.transitionStart=e.neutralPosition,e.quaternion.copy(e.neutralPosition);setTimeout(()=>{this.isTracking=!0},this.transitionDuration)}Resize(){this.windowWidth=window.innerWidth/2,this.windowHeight=window.innerHeight/2}Update(e){if(this.eyeTarget.x+=(this.mouseX-this.eyeTarget.x)*.04,this.eyeTarget.y+=(-this.mouseY-this.eyeTarget.y)*.04,this.isTracking)for(let e of this.updateTargets)e.lookAt(this.eyeTarget);else{this.transitionTime+=1e3*e;let t=Math.min(this.transitionTime/this.transitionDuration,1);for(let e of this.updateTargets){let i=new m._fP().copy(e.transitionStart).slerp(e.transitionEnd,t);e.quaternion.copy(i)}}}Dispose(){this.isTouchDevice?document.removeEventListener("touchstart",this.touchStartListener):document.removeEventListener("mousemove",this.mouseMoveListener)}constructor(e){this.stateManager=e,this.face=this.stateManager.face.model,this.updateTargets=[],this.eyeTarget=null,this.isTracking=!0,this.transitionTime=0,this.transitionDuration=200,this.isTouchDevice=!1,this.windowWidth=0,this.windowHeight=0,this.mouseX=0,this.mouseY=0,this._Init()}},v=class{get AnimationStates(){return this.animationStates}get State(){return this.currentAction}_SetClickListener(){this.clickListener=()=>{this.morphManager.ResetMorphs()};let e=document.getElementById(this.face.resetId);e&&e.addEventListener("click",this.clickListener)}_SetResizeListener(){this.resizeListener=()=>{this.Resize()},window.addEventListener("resize",this.resizeListener,!1)}PauseRandomController(){this.randomController.PauseRolls()}ResumeRandomController(){this.randomController.ResumeRolls()}NotifyNewAction(e){this.currentAction=e,e===this.idleState?(this.eyeTracker.ResumeTracking(),this.Resize()):this.eyeTracker.PauseTracking()}RequestAction(e){let t=this.animationBlender.GetAction(e);this.animationBlender.QueueActionOnce(t)}Update(e){this.animationBlender.Update(e),this.morphManager.Update(),this.eyeTracker.Update(e)}Resize(){this.morphManager.Resize(),this.eyeTracker.Resize()}Dispose(){let e=document.getElementById(this.face.resetId);e&&e.removeEventListener("click",this.clickListener),window.removeEventListener("resize",this.resizeListener),this.randomController.Dispose(),this.eyeTracker.Dispose(),this.morphManager.Dispose(),this.animationBlender.Dispose(),this.randomController=null,this.eyeTracker=null,this.morphManager=null,this.animationBlender=null}constructor(e){this.face=e,this.idleState="idleBobble",this.animationStates=["shock","plotting","smileBobble","sad","spin","snigger","idleBobble"],this.currentAction=null,this.randomController=new p(this),this.morphManager=new f(this),this.eyeTracker=new g(this),this.animationBlender=new _(this),this._SetResizeListener(),this._SetClickListener()}},w=class{InitAsync(e){return new Promise((t,i)=>{let n=new u.E(e);n.load(this.filePath,e=>{this.model=e.scene,this.model.scale.set(1.5,1.5,1.5),this.model.position.x=0,this.model.position.y=-.13,this.model.position.z=0,this.animations=e.animations,this.stateManager=new v(this),t()},void 0,e=>i(e))})}Update(e){this.stateManager&&this.stateManager.Update(e)}Dispose(){this.stateManager&&this.stateManager.Dispose(),this.model.traverse(e=>{if(e.isMesh){if(e.geometry.dispose(),e.material.isMaterial)this._CleanMaterial(e.material);else for(let t of e.material)this._CleanMaterial(t)}})}_CleanMaterial(e){for(let t of(e.dispose(),Object.keys(e))){let i=e[t];i&&"object"==typeof i&&"minFilter"in i&&i.dispose()}}constructor(e){this.filePath=e.filePath,this.canvasId=e.canvasId,this.resetId=e.resetId,this.model=null,this.animations=null,this.mixer=null}},E=i(9034),y=i.n(E),L=class{_BoilerPlate(){this.scene=new m.xsS,this.scene.fog=new m.yo9(16777215,.17),this.clock=new m.SUY,this.renderer=new m.CP7({antialias:!0,logarithmicDepthBuffer:!0}),this.renderer.setClearColor(0,0),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.shadowMap.enabled=!0,this.renderer.useLegacyLights=!1,this.renderer.domElement.id="three_canvas";let e=document.getElementById(this.containerId);e.appendChild(this.renderer.domElement);let t=window.innerHeight,i=window.innerWidth/t,n=window.innerHeight/t,s=i/n,o={viewSize:n,aspectRatio:s,left:-s*n/2,right:s*n/2,top:n/2,bottom:-n/2,near:-100,far:100};this.mainCamera=new m.iKG(o.left,o.right,o.top,o.bottom,o.near,o.far),this.lightA=new m.vmT(16777215,16777215,.6),this.lightA.color.setHSL(.6,1,.6),this.lightA.groundColor.setHSL(.095,1,.75),this.lightA.position.set(0,50,0),this.scene.add(this.lightA),this.lightB=new m.Ox3(10771260,1),this.lightB.position.set(-1,.35,-1),this.lightB.position.multiplyScalar(30),this.lightB.castShadow=!0,this.lightB.shadow.mapSize.width=2040,this.lightB.shadow.mapSize.height=2040,this.scene.add(this.lightB),this.lightC=new m.Ox3(16379352,3.5),this.lightC.position.set(1,2,.75),this.lightC.position.multiplyScalar(30),this.lightC.castShadow=!0,this.lightC.shadow.mapSize.width=2040,this.lightC.shadow.mapSize.height=2040,this.scene.add(this.lightC),this.toUpdate=[],this.previousAnimationFrame=null,this.resizeListener=()=>{this._OnWindowResize()},window.addEventListener("resize",this.resizeListener,!1)}_Custom(){let e=new w({filePath:"11.glb.txt",canvasId:this.containerId,resetId:this.resetId}),t=new m.lLk(()=>{let e=document.getElementById(this.loadingId);e.classList.add(y().fadeOut),e.addEventListener("transitionend",e=>{e.target.remove()})});Promise.all([e.InitAsync(t)]).then(()=>{this.scene.add(e.model),this.toUpdate.push(e)}).finally(()=>{this._Animate()}).catch(e=>{console.error(e)})}_Animate(){this.animationFrameId=requestAnimationFrame(e=>{if(null===this.previousAnimationFrame&&(this.previousAnimationFrame=e),this._Animate(),this.toUpdate){let e=this.clock.getDelta();this.toUpdate.map(t=>t.Update(e))}this.renderer.render(this.scene,this.mainCamera),this.previousAnimationFrame=e})}_OnWindowResize(){let e=window.innerHeight,t=window.innerWidth/e,i=window.innerHeight/e,n=t/i;this.mainCamera.left=-n*i/2,this.mainCamera.right=n*i/2,this.mainCamera.top=i/2,this.mainCamera.bottom=-i/2,this.mainCamera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}Dispose(){this.animationFrameId&&cancelAnimationFrame(this.animationFrameId),window.removeEventListener("resize",this.resizeListener),this.toUpdate.map(e=>e.Dispose()),this.renderer.dispose()}constructor(e){this.domIds=e,this.containerId=this.domIds.containerId,this.resetId=this.domIds.resetId,this.loadingId=this.domIds.loadingId,this._BoilerPlate(),this._Custom()}},A=i(3322),x=i.n(A),b=function(){let e=(0,o.useRouter)(),t="canvas__container",i="canvas__reset",a="canvas__loading";return(0,s.useEffect)(()=>{let n;setTimeout(()=>{n=new L({containerId:t,resetId:i,loadingId:a})},500);let s=()=>{n.Dispose()};return e.events.on("routeChangeStart",s),()=>{e.events.off("routeChangeStart",s)}},[e]),(0,n.jsxs)("div",{id:"app__container",className:x().container,children:[(0,n.jsx)(r(),{children:(0,n.jsx)("title",{children:"Stephan Santos"})}),(0,n.jsxs)("header",{className:x().header,children:[(0,n.jsx)(h.Z,{containerId:"app__container"}),(0,n.jsxs)("div",{className:x().header__container,children:[(0,n.jsx)("h1",{children:"Hi, I'm Stephan"}),(0,n.jsx)("h2",{className:x().header__sub,children:"I'm a full-stack developer based in Seattle, WA"}),(0,n.jsx)("span",{children:"Try stretching my face!"}),(0,n.jsx)("div",{children:(0,n.jsx)("button",{type:"button",id:i,className:y().resetButton,children:"Reset face"})})]})]}),(0,n.jsx)("main",{id:t,className:y().canvas,children:(0,n.jsx)("div",{id:a,className:y().loading,children:(0,n.jsx)(d,{})})})]})}},9034:function(e){e.exports={canvas:"Home_canvas__x616u",resetButton:"Home_resetButton__Fcma4",loading:"Home_loading__IsZ5F",fadeOut:"Home_fadeOut__uiPKz"}},6785:function(e){e.exports={container:"Loading_container__LJM_q",group:"Loading_group__7wxYN",bigSqr:"Loading_bigSqr__kOD_a",bigSqrShrink:"Loading_bigSqrShrink__ckoO2",square:"Loading_square__yzJfX",first:"Loading_first__Cm1Ju",second:"Loading_second__PrP3u",drop2:"Loading_drop2__n2w4r",third:"Loading_third___P2H4",drop3:"Loading_drop3__7kgrT",fourth:"Loading_fourth__Vh7zK",drop4:"Loading_drop4__dqN_6",text:"Loading_text__p_aET"}},7268:function(e){e.exports={nav__container:"Nav_nav__container__TjUWn",nav__shadow:"Nav_nav__shadow__kwAxe",nav__list:"Nav_nav__list___TwYs",nav__link:"Nav_nav__link__zSE_b",nav__activeLink:"Nav_nav__activeLink__8ahX0"}},3322:function(e){e.exports={container:"common_container__mqVJE",loading:"common_loading__hWacd",centerToBottom:"common_centerToBottom__xOIqh",unloading:"common_unloading__CjZS2",topToCenter:"common_topToCenter__R_kKC",header:"common_header__Lafcr",header__container:"common_header__container__JqaDg",header__sub:"common_header__sub___x4QL",v_align_mid:"common_v_align_mid__OefYo",transition:"common_transition__0r4LC"}}},function(e){e.O(0,[737,461,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);