var jc={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Nc={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Qx=0,F2=1,Jx=2;var yb=1,_x=2,ns=3,Mi=0,Lr=1,Vr=2;var qs=0,Pa=1,R2=2,I2=3,C2=4,$x=5,wc=100,em=101,tm=102,W2=103,U2=104,nm=200,rm=201,im=202,sm=203,kd=204,Kd=205,cm=206,am=207,om=208,um=209,lm=210,hm=211,dm=212,vm=213,fm=214,bm=0,pm=1,xm=2,rl=3,mm=4,Xm=5,wm=6,Om=7,Mv=0,Hm=1,Pm=2,Fs=0,ym=1,zm=2,Dm=3,Lm=4,Mm=5,gm=6,G2="attached",jm="detached",zb=300,Da=301,La=302,Bd=303,Zd=304,Sl=306,zc=1e3,Er=1001,zo=1002,Un=1003,il=1004;var wo=1005;var mr=1006,gv=1007;var Is=1008;var Rs=1009,Nm=1010,Tm=1011,jv=1012,Db=1013,Vs=1014,rs=1015,Do=1016,Lb=1017,Mb=1018,Hc=1020,Sm=1021,Zr=1023,Vm=1024,Em=1025,Pc=1026,Ma=1027,qm=1028,gb=1029,Fm=1030,jb=1031,Nb=1033,dd=33776,vd=33777,fd=33778,bd=33779,A2=35840,k2=35841,K2=35842,B2=35843,Tb=36196,Z2=37492,Y2=37496,Q2=37808,J2=37809,_2=37810,$2=37811,e9=37812,t9=37813,n9=37814,r9=37815,i9=37816,s9=37817,c9=37818,a9=37819,o9=37820,u9=37821,pd=36492,l9=36494,h9=36495,Rm=36283,d9=36284,v9=36285,f9=36286;var ga=2300,Dc=2301,xd=2302,b9=2400,p9=2401,x9=2402,Im=2500;var Sb=0,Vl=1,Ro=2,Vb=3e3,yc=3001,Cm=3200,Wm=3201,Nv=0,Um=1,Yr="",jn="srgb",Gn="srgb-linear",Tv="display-p3",El="display-p3-linear",sl="linear",Xn="srgb",cl="rec709",al="p3";var ra=7680;var m9=519,Gm=512,Am=513,km=514,Eb=515,Km=516,Bm=517,Zm=518,Ym=519,Yd=35044;var X9="300 es",Qd=1035,is=2e3,ol=2001,gi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let r=this._listeners[e];if(r!==void 0){let i=r.indexOf(t);i!==-1&&r.splice(i,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let r=n.slice(0);for(let i=0,c=r.length;i<c;i++)r[i].call(this,e);e.target=null}}},cr=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],w9=1234567,Oo=Math.PI/180,ja=180/Math.PI;function fi(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(cr[s&255]+cr[s>>8&255]+cr[s>>16&255]+cr[s>>24&255]+"-"+cr[e&255]+cr[e>>8&255]+"-"+cr[e>>16&15|64]+cr[e>>24&255]+"-"+cr[t&63|128]+cr[t>>8&255]+"-"+cr[t>>16&255]+cr[t>>24&255]+cr[n&255]+cr[n>>8&255]+cr[n>>16&255]+cr[n>>24&255]).toLowerCase()}function er(s,e,t){return Math.max(e,Math.min(t,s))}function Sv(s,e){return(s%e+e)%e}function Qm(s,e,t,n,r){return n+(s-e)*(r-n)/(t-e)}function Jm(s,e,t){return s!==e?(t-s)/(e-s):0}function Ho(s,e,t){return(1-t)*s+t*e}function _m(s,e,t,n){return Ho(s,e,1-Math.exp(-t*n))}function $m(s,e=1){return e-Math.abs(Sv(s,e*2)-e)}function e5(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function t5(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function n5(s,e){return s+Math.floor(Math.random()*(e-s+1))}function r5(s,e){return s+Math.random()*(e-s)}function i5(s){return s*(.5-Math.random())}function s5(s){s!==void 0&&(w9=s);let e=w9+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function c5(s){return s*Oo}function a5(s){return s*ja}function Jd(s){return(s&s-1)===0&&s!==0}function o5(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function ul(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function u5(s,e,t,n,r){let i=Math.cos,c=Math.sin,o=i(t/2),h=c(t/2),d=i((e+n)/2),f=c((e+n)/2),p=i((e-n)/2),b=c((e-n)/2),H=i((n-e)/2),P=c((n-e)/2);switch(r){case"XYX":s.set(o*f,h*p,h*b,o*d);break;case"YZY":s.set(h*b,o*f,h*p,o*d);break;case"ZXZ":s.set(h*p,h*b,o*f,o*d);break;case"XZX":s.set(o*f,h*P,h*H,o*d);break;case"YXY":s.set(h*H,o*f,h*P,o*d);break;case"ZYZ":s.set(h*P,h*H,o*f,o*d);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Li(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function an(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var ql={DEG2RAD:Oo,RAD2DEG:ja,generateUUID:fi,clamp:er,euclideanModulo:Sv,mapLinear:Qm,inverseLerp:Jm,lerp:Ho,damp:_m,pingpong:$m,smoothstep:e5,smootherstep:t5,randInt:n5,randFloat:r5,randFloatSpread:i5,seededRandom:s5,degToRad:c5,radToDeg:a5,isPowerOfTwo:Jd,ceilPowerOfTwo:o5,floorPowerOfTwo:ul,setQuaternionFromProperEuler:u5,normalize:an,denormalize:Li},Rt=class s{constructor(e=0,t=0){s.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(er(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,c=this.y-e.y;return this.x=i*n-c*r+e.x,this.y=i*r+c*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Bt=class s{constructor(e,t,n,r,i,c,o,h,d){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,c,o,h,d)}set(e,t,n,r,i,c,o,h,d){let f=this.elements;return f[0]=e,f[1]=r,f[2]=o,f[3]=t,f[4]=i,f[5]=h,f[6]=n,f[7]=c,f[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,c=n[0],o=n[3],h=n[6],d=n[1],f=n[4],p=n[7],b=n[2],H=n[5],P=n[8],X=r[0],y=r[3],O=r[6],D=r[1],L=r[4],g=r[7],q=r[2],F=r[5],T=r[8];return i[0]=c*X+o*D+h*q,i[3]=c*y+o*L+h*F,i[6]=c*O+o*g+h*T,i[1]=d*X+f*D+p*q,i[4]=d*y+f*L+p*F,i[7]=d*O+f*g+p*T,i[2]=b*X+H*D+P*q,i[5]=b*y+H*L+P*F,i[8]=b*O+H*g+P*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],c=e[4],o=e[5],h=e[6],d=e[7],f=e[8];return t*c*f-t*o*d-n*i*f+n*o*h+r*i*d-r*c*h}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],c=e[4],o=e[5],h=e[6],d=e[7],f=e[8],p=f*c-o*d,b=o*h-f*i,H=d*i-c*h,P=t*p+n*b+r*H;if(P===0)return this.set(0,0,0,0,0,0,0,0,0);let X=1/P;return e[0]=p*X,e[1]=(r*d-f*n)*X,e[2]=(o*n-r*c)*X,e[3]=b*X,e[4]=(f*t-r*h)*X,e[5]=(r*i-o*t)*X,e[6]=H*X,e[7]=(n*h-d*t)*X,e[8]=(c*t-n*i)*X,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,c,o){let h=Math.cos(i),d=Math.sin(i);return this.set(n*h,n*d,-n*(h*c+d*o)+c+e,-r*d,r*h,-r*(-d*c+h*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(md.makeScale(e,t)),this}rotate(e){return this.premultiply(md.makeRotation(-e)),this}translate(e,t){return this.premultiply(md.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},md=new Bt;function qb(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Lo(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function l5(){let s=Lo("canvas");return s.style.display="block",s}var O9={};function Po(s){s in O9||(O9[s]=!0,console.warn(s))}var H9=new Bt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),P9=new Bt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),gu={[Gn]:{transfer:sl,primaries:cl,toReference:s=>s,fromReference:s=>s},[jn]:{transfer:Xn,primaries:cl,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[El]:{transfer:sl,primaries:al,toReference:s=>s.applyMatrix3(P9),fromReference:s=>s.applyMatrix3(H9)},[Tv]:{transfer:Xn,primaries:al,toReference:s=>s.convertSRGBToLinear().applyMatrix3(P9),fromReference:s=>s.applyMatrix3(H9).convertLinearToSRGB()}},h5=new Set([Gn,El]),$t={enabled:!0,_workingColorSpace:Gn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!h5.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;let n=gu[e].toReference,r=gu[t].fromReference;return r(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return gu[s].primaries},getTransfer:function(s){return s===Yr?sl:gu[s].transfer}};function ya(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Xd(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var ia,ll=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ia===void 0&&(ia=Lo("canvas")),ia.width=e.width,ia.height=e.height;let n=ia.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ia}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Lo("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let c=0;c<i.length;c++)i[c]=ya(i[c]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ya(t[n]/255)*255):t[n]=ya(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},d5=0,hl=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:d5++}),this.uuid=fi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let i;if(Array.isArray(r)){i=[];for(let c=0,o=r.length;c<o;c++)r[c].isDataTexture?i.push(wd(r[c].image)):i.push(wd(r[c]))}else i=wd(r);n.url=i}return t||(e.images[this.uuid]=n),n}};function wd(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?ll.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var v5=0,ur=class s extends gi{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=Er,r=Er,i=mr,c=Is,o=Zr,h=Rs,d=s.DEFAULT_ANISOTROPY,f=Yr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:v5++}),this.uuid=fi(),this.name="",this.source=new hl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=i,this.minFilter=c,this.anisotropy=d,this.format=o,this.internalFormat=null,this.type=h,this.offset=new Rt(0,0),this.repeat=new Rt(1,1),this.center=new Rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Bt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof f=="string"?this.colorSpace=f:(Po("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=f===yc?jn:Yr),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==zb)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case zc:e.x=e.x-Math.floor(e.x);break;case Er:e.x=e.x<0?0:1;break;case zo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case zc:e.y=e.y-Math.floor(e.y);break;case Er:e.y=e.y<0?0:1;break;case zo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Po("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===jn?yc:Vb}set encoding(e){Po("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===yc?jn:Yr}};ur.DEFAULT_IMAGE=null;ur.DEFAULT_MAPPING=zb;ur.DEFAULT_ANISOTROPY=1;var hn=class s{constructor(e=0,t=0,n=0,r=1){s.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,c=e.elements;return this.x=c[0]*t+c[4]*n+c[8]*r+c[12]*i,this.y=c[1]*t+c[5]*n+c[9]*r+c[13]*i,this.z=c[2]*t+c[6]*n+c[10]*r+c[14]*i,this.w=c[3]*t+c[7]*n+c[11]*r+c[15]*i,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,h=e.elements,d=h[0],f=h[4],p=h[8],b=h[1],H=h[5],P=h[9],X=h[2],y=h[6],O=h[10];if(Math.abs(f-b)<.01&&Math.abs(p-X)<.01&&Math.abs(P-y)<.01){if(Math.abs(f+b)<.1&&Math.abs(p+X)<.1&&Math.abs(P+y)<.1&&Math.abs(d+H+O-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let L=(d+1)/2,g=(H+1)/2,q=(O+1)/2,F=(f+b)/4,T=(p+X)/4,C=(P+y)/4;return L>g&&L>q?L<.01?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(L),r=F/n,i=T/n):g>q?g<.01?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(g),n=F/r,i=C/r):q<.01?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(q),n=T/i,r=C/i),this.set(n,r,i,t),this}let D=Math.sqrt((y-P)*(y-P)+(p-X)*(p-X)+(b-f)*(b-f));return Math.abs(D)<.001&&(D=1),this.x=(y-P)/D,this.y=(p-X)/D,this.z=(b-f)/D,this.w=Math.acos((d+H+O-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},_d=class extends gi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new hn(0,0,e,t),this.scissorTest=!1,this.viewport=new hn(0,0,e,t);let r={width:e,height:t,depth:1};n.encoding!==void 0&&(Po("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===yc?jn:Yr),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mr,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new ur(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new hl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ss=class extends _d{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},dl=class extends ur{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Un,this.minFilter=Un,this.wrapR=Er,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var $d=class extends ur{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Un,this.minFilter=Un,this.wrapR=Er,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var wn=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,c,o){let h=n[r+0],d=n[r+1],f=n[r+2],p=n[r+3],b=i[c+0],H=i[c+1],P=i[c+2],X=i[c+3];if(o===0){e[t+0]=h,e[t+1]=d,e[t+2]=f,e[t+3]=p;return}if(o===1){e[t+0]=b,e[t+1]=H,e[t+2]=P,e[t+3]=X;return}if(p!==X||h!==b||d!==H||f!==P){let y=1-o,O=h*b+d*H+f*P+p*X,D=O>=0?1:-1,L=1-O*O;if(L>Number.EPSILON){let q=Math.sqrt(L),F=Math.atan2(q,O*D);y=Math.sin(y*F)/q,o=Math.sin(o*F)/q}let g=o*D;if(h=h*y+b*g,d=d*y+H*g,f=f*y+P*g,p=p*y+X*g,y===1-o){let q=1/Math.sqrt(h*h+d*d+f*f+p*p);h*=q,d*=q,f*=q,p*=q}}e[t]=h,e[t+1]=d,e[t+2]=f,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,r,i,c){let o=n[r],h=n[r+1],d=n[r+2],f=n[r+3],p=i[c],b=i[c+1],H=i[c+2],P=i[c+3];return e[t]=o*P+f*p+h*H-d*b,e[t+1]=h*P+f*b+d*p-o*H,e[t+2]=d*P+f*H+o*b-h*p,e[t+3]=f*P-o*p-h*b-d*H,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,c=e._order,o=Math.cos,h=Math.sin,d=o(n/2),f=o(r/2),p=o(i/2),b=h(n/2),H=h(r/2),P=h(i/2);switch(c){case"XYZ":this._x=b*f*p+d*H*P,this._y=d*H*p-b*f*P,this._z=d*f*P+b*H*p,this._w=d*f*p-b*H*P;break;case"YXZ":this._x=b*f*p+d*H*P,this._y=d*H*p-b*f*P,this._z=d*f*P-b*H*p,this._w=d*f*p+b*H*P;break;case"ZXY":this._x=b*f*p-d*H*P,this._y=d*H*p+b*f*P,this._z=d*f*P+b*H*p,this._w=d*f*p-b*H*P;break;case"ZYX":this._x=b*f*p-d*H*P,this._y=d*H*p+b*f*P,this._z=d*f*P-b*H*p,this._w=d*f*p+b*H*P;break;case"YZX":this._x=b*f*p+d*H*P,this._y=d*H*p+b*f*P,this._z=d*f*P-b*H*p,this._w=d*f*p-b*H*P;break;case"XZY":this._x=b*f*p-d*H*P,this._y=d*H*p-b*f*P,this._z=d*f*P+b*H*p,this._w=d*f*p+b*H*P;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],c=t[1],o=t[5],h=t[9],d=t[2],f=t[6],p=t[10],b=n+o+p;if(b>0){let H=.5/Math.sqrt(b+1);this._w=.25/H,this._x=(f-h)*H,this._y=(i-d)*H,this._z=(c-r)*H}else if(n>o&&n>p){let H=2*Math.sqrt(1+n-o-p);this._w=(f-h)/H,this._x=.25*H,this._y=(r+c)/H,this._z=(i+d)/H}else if(o>p){let H=2*Math.sqrt(1+o-n-p);this._w=(i-d)/H,this._x=(r+c)/H,this._y=.25*H,this._z=(h+f)/H}else{let H=2*Math.sqrt(1+p-n-o);this._w=(c-r)/H,this._x=(i+d)/H,this._y=(h+f)/H,this._z=.25*H}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(er(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,c=e._w,o=t._x,h=t._y,d=t._z,f=t._w;return this._x=n*f+c*o+r*d-i*h,this._y=r*f+c*h+i*o-n*d,this._z=i*f+c*d+n*h-r*o,this._w=c*f-n*o-r*h-i*d,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,r=this._y,i=this._z,c=this._w,o=c*e._w+n*e._x+r*e._y+i*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=c,this._x=n,this._y=r,this._z=i,this;let h=1-o*o;if(h<=Number.EPSILON){let H=1-t;return this._w=H*c+t*this._w,this._x=H*n+t*this._x,this._y=H*r+t*this._y,this._z=H*i+t*this._z,this.normalize(),this}let d=Math.sqrt(h),f=Math.atan2(d,o),p=Math.sin((1-t)*f)/d,b=Math.sin(t*f)/d;return this._w=c*p+this._w*b,this._x=n*p+this._x*b,this._y=r*p+this._y*b,this._z=i*p+this._z*b,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),i=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(i),n*Math.cos(i),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},ce=class s{constructor(e=0,t=0,n=0){s.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(y9.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(y9.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,c=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*c,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*c,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*c,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,c=e.y,o=e.z,h=e.w,d=2*(c*r-o*n),f=2*(o*t-i*r),p=2*(i*n-c*t);return this.x=t+h*d+c*p-o*f,this.y=n+h*f+o*d-i*p,this.z=r+h*p+i*f-c*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,c=t.x,o=t.y,h=t.z;return this.x=r*h-i*o,this.y=i*c-n*h,this.z=n*o-r*c,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Od.copy(this).projectOnVector(e),this.sub(Od)}reflect(e){return this.sub(Od.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(er(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Od=new ce,y9=new wn,Xr=class{constructor(e=new ce(1/0,1/0,1/0),t=new ce(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(li.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(li.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=li.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let i=n.getAttribute("position");if(t===!0&&i!==void 0&&e.isInstancedMesh!==!0)for(let c=0,o=i.count;c<o;c++)e.isMesh===!0?e.getVertexPosition(c,li):li.fromBufferAttribute(i,c),li.applyMatrix4(e.matrixWorld),this.expandByPoint(li);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ju.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ju.copy(n.boundingBox)),ju.applyMatrix4(e.matrixWorld),this.union(ju)}let r=e.children;for(let i=0,c=r.length;i<c;i++)this.expandByObject(r[i],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,li),li.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(vo),Nu.subVectors(this.max,vo),sa.subVectors(e.a,vo),ca.subVectors(e.b,vo),aa.subVectors(e.c,vo),gs.subVectors(ca,sa),js.subVectors(aa,ca),bc.subVectors(sa,aa);let t=[0,-gs.z,gs.y,0,-js.z,js.y,0,-bc.z,bc.y,gs.z,0,-gs.x,js.z,0,-js.x,bc.z,0,-bc.x,-gs.y,gs.x,0,-js.y,js.x,0,-bc.y,bc.x,0];return!Hd(t,sa,ca,aa,Nu)||(t=[1,0,0,0,1,0,0,0,1],!Hd(t,sa,ca,aa,Nu))?!1:(Tu.crossVectors(gs,js),t=[Tu.x,Tu.y,Tu.z],Hd(t,sa,ca,aa,Nu))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,li).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(li).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Qi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Qi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Qi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Qi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Qi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Qi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Qi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Qi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Qi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Qi=[new ce,new ce,new ce,new ce,new ce,new ce,new ce,new ce],li=new ce,ju=new Xr,sa=new ce,ca=new ce,aa=new ce,gs=new ce,js=new ce,bc=new ce,vo=new ce,Nu=new ce,Tu=new ce,pc=new ce;function Hd(s,e,t,n,r){for(let i=0,c=s.length-3;i<=c;i+=3){pc.fromArray(s,i);let o=r.x*Math.abs(pc.x)+r.y*Math.abs(pc.y)+r.z*Math.abs(pc.z),h=e.dot(pc),d=t.dot(pc),f=n.dot(pc);if(Math.max(-Math.max(h,d,f),Math.min(h,d,f))>o)return!1}return!0}var f5=new Xr,fo=new ce,Pd=new ce,qr=class{constructor(e=new ce,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):f5.setFromPoints(e).getCenter(n);let r=0;for(let i=0,c=e.length;i<c;i++)r=Math.max(r,n.distanceToSquared(e[i]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;fo.subVectors(e,this.center);let t=fo.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(fo,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Pd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(fo.copy(e.center).add(Pd)),this.expandByPoint(fo.copy(e.center).sub(Pd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Ji=new ce,yd=new ce,Su=new ce,Ns=new ce,zd=new ce,Vu=new ce,Dd=new ce,cs=class{constructor(e=new ce,t=new ce(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ji)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ji.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ji.copy(this.origin).addScaledVector(this.direction,t),Ji.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){yd.copy(e).add(t).multiplyScalar(.5),Su.copy(t).sub(e).normalize(),Ns.copy(this.origin).sub(yd);let i=e.distanceTo(t)*.5,c=-this.direction.dot(Su),o=Ns.dot(this.direction),h=-Ns.dot(Su),d=Ns.lengthSq(),f=Math.abs(1-c*c),p,b,H,P;if(f>0)if(p=c*h-o,b=c*o-h,P=i*f,p>=0)if(b>=-P)if(b<=P){let X=1/f;p*=X,b*=X,H=p*(p+c*b+2*o)+b*(c*p+b+2*h)+d}else b=i,p=Math.max(0,-(c*b+o)),H=-p*p+b*(b+2*h)+d;else b=-i,p=Math.max(0,-(c*b+o)),H=-p*p+b*(b+2*h)+d;else b<=-P?(p=Math.max(0,-(-c*i+o)),b=p>0?-i:Math.min(Math.max(-i,-h),i),H=-p*p+b*(b+2*h)+d):b<=P?(p=0,b=Math.min(Math.max(-i,-h),i),H=b*(b+2*h)+d):(p=Math.max(0,-(c*i+o)),b=p>0?i:Math.min(Math.max(-i,-h),i),H=-p*p+b*(b+2*h)+d);else b=c>0?-i:i,p=Math.max(0,-(c*b+o)),H=-p*p+b*(b+2*h)+d;return n&&n.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(yd).addScaledVector(Su,b),H}intersectSphere(e,t){Ji.subVectors(e.center,this.origin);let n=Ji.dot(this.direction),r=Ji.dot(Ji)-n*n,i=e.radius*e.radius;if(r>i)return null;let c=Math.sqrt(i-r),o=n-c,h=n+c;return h<0?null:o<0?this.at(h,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,c,o,h,d=1/this.direction.x,f=1/this.direction.y,p=1/this.direction.z,b=this.origin;return d>=0?(n=(e.min.x-b.x)*d,r=(e.max.x-b.x)*d):(n=(e.max.x-b.x)*d,r=(e.min.x-b.x)*d),f>=0?(i=(e.min.y-b.y)*f,c=(e.max.y-b.y)*f):(i=(e.max.y-b.y)*f,c=(e.min.y-b.y)*f),n>c||i>r||((i>n||isNaN(n))&&(n=i),(c<r||isNaN(r))&&(r=c),p>=0?(o=(e.min.z-b.z)*p,h=(e.max.z-b.z)*p):(o=(e.max.z-b.z)*p,h=(e.min.z-b.z)*p),n>h||o>r)||((o>n||n!==n)&&(n=o),(h<r||r!==r)&&(r=h),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Ji)!==null}intersectTriangle(e,t,n,r,i){zd.subVectors(t,e),Vu.subVectors(n,e),Dd.crossVectors(zd,Vu);let c=this.direction.dot(Dd),o;if(c>0){if(r)return null;o=1}else if(c<0)o=-1,c=-c;else return null;Ns.subVectors(this.origin,e);let h=o*this.direction.dot(Vu.crossVectors(Ns,Vu));if(h<0)return null;let d=o*this.direction.dot(zd.cross(Ns));if(d<0||h+d>c)return null;let f=-o*Ns.dot(Dd);return f<0?null:this.at(f/c,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Gt=class s{constructor(e,t,n,r,i,c,o,h,d,f,p,b,H,P,X,y){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,c,o,h,d,f,p,b,H,P,X,y)}set(e,t,n,r,i,c,o,h,d,f,p,b,H,P,X,y){let O=this.elements;return O[0]=e,O[4]=t,O[8]=n,O[12]=r,O[1]=i,O[5]=c,O[9]=o,O[13]=h,O[2]=d,O[6]=f,O[10]=p,O[14]=b,O[3]=H,O[7]=P,O[11]=X,O[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,r=1/oa.setFromMatrixColumn(e,0).length(),i=1/oa.setFromMatrixColumn(e,1).length(),c=1/oa.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*c,t[9]=n[9]*c,t[10]=n[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,c=Math.cos(n),o=Math.sin(n),h=Math.cos(r),d=Math.sin(r),f=Math.cos(i),p=Math.sin(i);if(e.order==="XYZ"){let b=c*f,H=c*p,P=o*f,X=o*p;t[0]=h*f,t[4]=-h*p,t[8]=d,t[1]=H+P*d,t[5]=b-X*d,t[9]=-o*h,t[2]=X-b*d,t[6]=P+H*d,t[10]=c*h}else if(e.order==="YXZ"){let b=h*f,H=h*p,P=d*f,X=d*p;t[0]=b+X*o,t[4]=P*o-H,t[8]=c*d,t[1]=c*p,t[5]=c*f,t[9]=-o,t[2]=H*o-P,t[6]=X+b*o,t[10]=c*h}else if(e.order==="ZXY"){let b=h*f,H=h*p,P=d*f,X=d*p;t[0]=b-X*o,t[4]=-c*p,t[8]=P+H*o,t[1]=H+P*o,t[5]=c*f,t[9]=X-b*o,t[2]=-c*d,t[6]=o,t[10]=c*h}else if(e.order==="ZYX"){let b=c*f,H=c*p,P=o*f,X=o*p;t[0]=h*f,t[4]=P*d-H,t[8]=b*d+X,t[1]=h*p,t[5]=X*d+b,t[9]=H*d-P,t[2]=-d,t[6]=o*h,t[10]=c*h}else if(e.order==="YZX"){let b=c*h,H=c*d,P=o*h,X=o*d;t[0]=h*f,t[4]=X-b*p,t[8]=P*p+H,t[1]=p,t[5]=c*f,t[9]=-o*f,t[2]=-d*f,t[6]=H*p+P,t[10]=b-X*p}else if(e.order==="XZY"){let b=c*h,H=c*d,P=o*h,X=o*d;t[0]=h*f,t[4]=-p,t[8]=d*f,t[1]=b*p+X,t[5]=c*f,t[9]=H*p-P,t[2]=P*p-H,t[6]=o*f,t[10]=X*p+b}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(b5,e,p5)}lookAt(e,t,n){let r=this.elements;return Tr.subVectors(e,t),Tr.lengthSq()===0&&(Tr.z=1),Tr.normalize(),Ts.crossVectors(n,Tr),Ts.lengthSq()===0&&(Math.abs(n.z)===1?Tr.x+=1e-4:Tr.z+=1e-4,Tr.normalize(),Ts.crossVectors(n,Tr)),Ts.normalize(),Eu.crossVectors(Tr,Ts),r[0]=Ts.x,r[4]=Eu.x,r[8]=Tr.x,r[1]=Ts.y,r[5]=Eu.y,r[9]=Tr.y,r[2]=Ts.z,r[6]=Eu.z,r[10]=Tr.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,c=n[0],o=n[4],h=n[8],d=n[12],f=n[1],p=n[5],b=n[9],H=n[13],P=n[2],X=n[6],y=n[10],O=n[14],D=n[3],L=n[7],g=n[11],q=n[15],F=r[0],T=r[4],C=r[8],M=r[12],E=r[1],W=r[5],$=r[9],J=r[13],U=r[2],Z=r[6],ee=r[10],ae=r[14],oe=r[3],de=r[7],le=r[11],se=r[15];return i[0]=c*F+o*E+h*U+d*oe,i[4]=c*T+o*W+h*Z+d*de,i[8]=c*C+o*$+h*ee+d*le,i[12]=c*M+o*J+h*ae+d*se,i[1]=f*F+p*E+b*U+H*oe,i[5]=f*T+p*W+b*Z+H*de,i[9]=f*C+p*$+b*ee+H*le,i[13]=f*M+p*J+b*ae+H*se,i[2]=P*F+X*E+y*U+O*oe,i[6]=P*T+X*W+y*Z+O*de,i[10]=P*C+X*$+y*ee+O*le,i[14]=P*M+X*J+y*ae+O*se,i[3]=D*F+L*E+g*U+q*oe,i[7]=D*T+L*W+g*Z+q*de,i[11]=D*C+L*$+g*ee+q*le,i[15]=D*M+L*J+g*ae+q*se,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],c=e[1],o=e[5],h=e[9],d=e[13],f=e[2],p=e[6],b=e[10],H=e[14],P=e[3],X=e[7],y=e[11],O=e[15];return P*(+i*h*p-r*d*p-i*o*b+n*d*b+r*o*H-n*h*H)+X*(+t*h*H-t*d*b+i*c*b-r*c*H+r*d*f-i*h*f)+y*(+t*d*p-t*o*H-i*c*p+n*c*H+i*o*f-n*d*f)+O*(-r*o*f-t*h*p+t*o*b+r*c*p-n*c*b+n*h*f)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],c=e[4],o=e[5],h=e[6],d=e[7],f=e[8],p=e[9],b=e[10],H=e[11],P=e[12],X=e[13],y=e[14],O=e[15],D=p*y*d-X*b*d+X*h*H-o*y*H-p*h*O+o*b*O,L=P*b*d-f*y*d-P*h*H+c*y*H+f*h*O-c*b*O,g=f*X*d-P*p*d+P*o*H-c*X*H-f*o*O+c*p*O,q=P*p*h-f*X*h-P*o*b+c*X*b+f*o*y-c*p*y,F=t*D+n*L+r*g+i*q;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/F;return e[0]=D*T,e[1]=(X*b*i-p*y*i-X*r*H+n*y*H+p*r*O-n*b*O)*T,e[2]=(o*y*i-X*h*i+X*r*d-n*y*d-o*r*O+n*h*O)*T,e[3]=(p*h*i-o*b*i-p*r*d+n*b*d+o*r*H-n*h*H)*T,e[4]=L*T,e[5]=(f*y*i-P*b*i+P*r*H-t*y*H-f*r*O+t*b*O)*T,e[6]=(P*h*i-c*y*i-P*r*d+t*y*d+c*r*O-t*h*O)*T,e[7]=(c*b*i-f*h*i+f*r*d-t*b*d-c*r*H+t*h*H)*T,e[8]=g*T,e[9]=(P*p*i-f*X*i-P*n*H+t*X*H+f*n*O-t*p*O)*T,e[10]=(c*X*i-P*o*i+P*n*d-t*X*d-c*n*O+t*o*O)*T,e[11]=(f*o*i-c*p*i-f*n*d+t*p*d+c*n*H-t*o*H)*T,e[12]=q*T,e[13]=(f*X*r-P*p*r+P*n*b-t*X*b-f*n*y+t*p*y)*T,e[14]=(P*o*r-c*X*r-P*n*h+t*X*h+c*n*y-t*o*y)*T,e[15]=(c*p*r-f*o*r+f*n*h-t*p*h-c*n*b+t*o*b)*T,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,c=e.x,o=e.y,h=e.z,d=i*c,f=i*o;return this.set(d*c+n,d*o-r*h,d*h+r*o,0,d*o+r*h,f*o+n,f*h-r*c,0,d*h-r*o,f*h+r*c,i*h*h+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,c){return this.set(1,n,i,0,e,1,c,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,c=t._y,o=t._z,h=t._w,d=i+i,f=c+c,p=o+o,b=i*d,H=i*f,P=i*p,X=c*f,y=c*p,O=o*p,D=h*d,L=h*f,g=h*p,q=n.x,F=n.y,T=n.z;return r[0]=(1-(X+O))*q,r[1]=(H+g)*q,r[2]=(P-L)*q,r[3]=0,r[4]=(H-g)*F,r[5]=(1-(b+O))*F,r[6]=(y+D)*F,r[7]=0,r[8]=(P+L)*T,r[9]=(y-D)*T,r[10]=(1-(b+X))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements,i=oa.set(r[0],r[1],r[2]).length(),c=oa.set(r[4],r[5],r[6]).length(),o=oa.set(r[8],r[9],r[10]).length();this.determinant()<0&&(i=-i),e.x=r[12],e.y=r[13],e.z=r[14],hi.copy(this);let d=1/i,f=1/c,p=1/o;return hi.elements[0]*=d,hi.elements[1]*=d,hi.elements[2]*=d,hi.elements[4]*=f,hi.elements[5]*=f,hi.elements[6]*=f,hi.elements[8]*=p,hi.elements[9]*=p,hi.elements[10]*=p,t.setFromRotationMatrix(hi),n.x=i,n.y=c,n.z=o,this}makePerspective(e,t,n,r,i,c,o=is){let h=this.elements,d=2*i/(t-e),f=2*i/(n-r),p=(t+e)/(t-e),b=(n+r)/(n-r),H,P;if(o===is)H=-(c+i)/(c-i),P=-2*c*i/(c-i);else if(o===ol)H=-c/(c-i),P=-c*i/(c-i);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return h[0]=d,h[4]=0,h[8]=p,h[12]=0,h[1]=0,h[5]=f,h[9]=b,h[13]=0,h[2]=0,h[6]=0,h[10]=H,h[14]=P,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,n,r,i,c,o=is){let h=this.elements,d=1/(t-e),f=1/(n-r),p=1/(c-i),b=(t+e)*d,H=(n+r)*f,P,X;if(o===is)P=(c+i)*p,X=-2*p;else if(o===ol)P=i*p,X=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return h[0]=2*d,h[4]=0,h[8]=0,h[12]=-b,h[1]=0,h[5]=2*f,h[9]=0,h[13]=-H,h[2]=0,h[6]=0,h[10]=X,h[14]=-P,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},oa=new ce,hi=new Gt,b5=new ce(0,0,0),p5=new ce(1,1,1),Ts=new ce,Eu=new ce,Tr=new ce,z9=new Gt,D9=new wn,Na=class s{constructor(e=0,t=0,n=0,r=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],c=r[4],o=r[8],h=r[1],d=r[5],f=r[9],p=r[2],b=r[6],H=r[10];switch(t){case"XYZ":this._y=Math.asin(er(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,H),this._z=Math.atan2(-c,i)):(this._x=Math.atan2(b,d),this._z=0);break;case"YXZ":this._x=Math.asin(-er(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,H),this._z=Math.atan2(h,d)):(this._y=Math.atan2(-p,i),this._z=0);break;case"ZXY":this._x=Math.asin(er(b,-1,1)),Math.abs(b)<.9999999?(this._y=Math.atan2(-p,H),this._z=Math.atan2(-c,d)):(this._y=0,this._z=Math.atan2(h,i));break;case"ZYX":this._y=Math.asin(-er(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(b,H),this._z=Math.atan2(h,i)):(this._x=0,this._z=Math.atan2(-c,d));break;case"YZX":this._z=Math.asin(er(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-f,d),this._y=Math.atan2(-p,i)):(this._x=0,this._y=Math.atan2(o,H));break;case"XZY":this._z=Math.asin(-er(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(b,d),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-f,H),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return z9.makeRotationFromQuaternion(e),this.setFromRotationMatrix(z9,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return D9.setFromEuler(this),this.setFromQuaternion(D9,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Na.DEFAULT_ORDER="XYZ";var Mo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},x5=0,L9=new ce,ua=new wn,_i=new Gt,qu=new ce,bo=new ce,m5=new ce,X5=new wn,M9=new ce(1,0,0),g9=new ce(0,1,0),j9=new ce(0,0,1),w5={type:"added"},O5={type:"removed"},On=class s extends gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:x5++}),this.uuid=fi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new ce,t=new Na,n=new wn,r=new ce(1,1,1);function i(){n.setFromEuler(t,!1)}function c(){t.setFromQuaternion(n,void 0,!1)}t._onChange(i),n._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Gt},normalMatrix:{value:new Bt}}),this.matrix=new Gt,this.matrixWorld=new Gt,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Mo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ua.setFromAxisAngle(e,t),this.quaternion.multiply(ua),this}rotateOnWorldAxis(e,t){return ua.setFromAxisAngle(e,t),this.quaternion.premultiply(ua),this}rotateX(e){return this.rotateOnAxis(M9,e)}rotateY(e){return this.rotateOnAxis(g9,e)}rotateZ(e){return this.rotateOnAxis(j9,e)}translateOnAxis(e,t){return L9.copy(e).applyQuaternion(this.quaternion),this.position.add(L9.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(M9,e)}translateY(e){return this.translateOnAxis(g9,e)}translateZ(e){return this.translateOnAxis(j9,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_i.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?qu.copy(e):qu.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),bo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_i.lookAt(bo,qu,this.up):_i.lookAt(qu,bo,this.up),this.quaternion.setFromRotationMatrix(_i),r&&(_i.extractRotation(r.matrixWorld),ua.setFromRotationMatrix(_i),this.quaternion.premultiply(ua.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(w5)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(O5)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_i.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_i.multiply(e.parent.matrixWorld)),e.applyMatrix4(_i),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let c=this.children[n].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,c=r.length;i<c;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bo,e,m5),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bo,X5,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++){let i=t[n];(i.matrixWorldAutoUpdate===!0||e===!0)&&i.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let r=this.children;for(let i=0,c=r.length;i<c;i++){let o=r[i];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function i(o,h){return o[h.uuid]===void 0&&(o[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let h=o.shapes;if(Array.isArray(h))for(let d=0,f=h.length;d<f;d++){let p=h[d];i(e.shapes,p)}else i(e.shapes,h)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let h=0,d=this.material.length;h<d;h++)o.push(i(e.materials,this.material[h]));r.material=o}else r.material=i(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){let h=this.animations[o];r.animations.push(i(e.animations,h))}}if(t){let o=c(e.geometries),h=c(e.materials),d=c(e.textures),f=c(e.images),p=c(e.shapes),b=c(e.skeletons),H=c(e.animations),P=c(e.nodes);o.length>0&&(n.geometries=o),h.length>0&&(n.materials=h),d.length>0&&(n.textures=d),f.length>0&&(n.images=f),p.length>0&&(n.shapes=p),b.length>0&&(n.skeletons=b),H.length>0&&(n.animations=H),P.length>0&&(n.nodes=P)}return n.object=r,n;function c(o){let h=[];for(let d in o){let f=o[d];delete f.metadata,h.push(f)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let r=e.children[n];this.add(r.clone())}return this}};On.DEFAULT_UP=new ce(0,1,0);On.DEFAULT_MATRIX_AUTO_UPDATE=!0;On.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var di=new ce,$i=new ce,Ld=new ce,es=new ce,la=new ce,ha=new ce,N9=new ce,Md=new ce,gd=new ce,jd=new ce,Fu=!1,wa=class s{constructor(e=new ce,t=new ce,n=new ce){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),di.subVectors(e,t),r.cross(di);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){di.subVectors(r,t),$i.subVectors(n,t),Ld.subVectors(e,t);let c=di.dot(di),o=di.dot($i),h=di.dot(Ld),d=$i.dot($i),f=$i.dot(Ld),p=c*d-o*o;if(p===0)return i.set(0,0,0),null;let b=1/p,H=(d*h-o*f)*b,P=(c*f-o*h)*b;return i.set(1-H-P,P,H)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,es)===null?!1:es.x>=0&&es.y>=0&&es.x+es.y<=1}static getUV(e,t,n,r,i,c,o,h){return Fu===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Fu=!0),this.getInterpolation(e,t,n,r,i,c,o,h)}static getInterpolation(e,t,n,r,i,c,o,h){return this.getBarycoord(e,t,n,r,es)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(i,es.x),h.addScaledVector(c,es.y),h.addScaledVector(o,es.z),h)}static isFrontFacing(e,t,n,r){return di.subVectors(n,t),$i.subVectors(e,t),di.cross($i).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return di.subVectors(this.c,this.b),$i.subVectors(this.a,this.b),di.cross($i).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,i){return Fu===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Fu=!0),s.getInterpolation(e,this.a,this.b,this.c,t,n,r,i)}getInterpolation(e,t,n,r,i){return s.getInterpolation(e,this.a,this.b,this.c,t,n,r,i)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,c,o;la.subVectors(r,n),ha.subVectors(i,n),Md.subVectors(e,n);let h=la.dot(Md),d=ha.dot(Md);if(h<=0&&d<=0)return t.copy(n);gd.subVectors(e,r);let f=la.dot(gd),p=ha.dot(gd);if(f>=0&&p<=f)return t.copy(r);let b=h*p-f*d;if(b<=0&&h>=0&&f<=0)return c=h/(h-f),t.copy(n).addScaledVector(la,c);jd.subVectors(e,i);let H=la.dot(jd),P=ha.dot(jd);if(P>=0&&H<=P)return t.copy(i);let X=H*d-h*P;if(X<=0&&d>=0&&P<=0)return o=d/(d-P),t.copy(n).addScaledVector(ha,o);let y=f*P-H*p;if(y<=0&&p-f>=0&&H-P>=0)return N9.subVectors(i,r),o=(p-f)/(p-f+(H-P)),t.copy(r).addScaledVector(N9,o);let O=1/(y+X+b);return c=X*O,o=b*O,t.copy(n).addScaledVector(la,c).addScaledVector(ha,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Fb={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ss={h:0,s:0,l:0},Ru={h:0,s:0,l:0};function Nd(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var Ft=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=jn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$t.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=$t.workingColorSpace){return this.r=e,this.g=t,this.b=n,$t.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=$t.workingColorSpace){if(e=Sv(e,1),t=er(t,0,1),n=er(n,0,1),t===0)this.r=this.g=this.b=n;else{let i=n<=.5?n*(1+t):n+t-n*t,c=2*n-i;this.r=Nd(c,i,e+1/3),this.g=Nd(c,i,e),this.b=Nd(c,i,e-1/3)}return $t.toWorkingColorSpace(this,r),this}setStyle(e,t=jn){function n(i){i!==void 0&&parseFloat(i)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,c=r[1],o=r[2];switch(c){case"rgb":case"rgba":if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case"hsl":case"hsla":if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let i=r[1],c=i.length;if(c===3)return this.setRGB(parseInt(i.charAt(0),16)/15,parseInt(i.charAt(1),16)/15,parseInt(i.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(i,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=jn){let n=Fb[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ya(e.r),this.g=ya(e.g),this.b=ya(e.b),this}copyLinearToSRGB(e){return this.r=Xd(e.r),this.g=Xd(e.g),this.b=Xd(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=jn){return $t.fromWorkingColorSpace(ar.copy(this),e),Math.round(er(ar.r*255,0,255))*65536+Math.round(er(ar.g*255,0,255))*256+Math.round(er(ar.b*255,0,255))}getHexString(e=jn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=$t.workingColorSpace){$t.fromWorkingColorSpace(ar.copy(this),t);let n=ar.r,r=ar.g,i=ar.b,c=Math.max(n,r,i),o=Math.min(n,r,i),h,d,f=(o+c)/2;if(o===c)h=0,d=0;else{let p=c-o;switch(d=f<=.5?p/(c+o):p/(2-c-o),c){case n:h=(r-i)/p+(r<i?6:0);break;case r:h=(i-n)/p+2;break;case i:h=(n-r)/p+4;break}h/=6}return e.h=h,e.s=d,e.l=f,e}getRGB(e,t=$t.workingColorSpace){return $t.fromWorkingColorSpace(ar.copy(this),t),e.r=ar.r,e.g=ar.g,e.b=ar.b,e}getStyle(e=jn){$t.fromWorkingColorSpace(ar.copy(this),e);let t=ar.r,n=ar.g,r=ar.b;return e!==jn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Ss),this.setHSL(Ss.h+e,Ss.s+t,Ss.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ss),e.getHSL(Ru);let n=Ho(Ss.h,Ru.h,t),r=Ho(Ss.s,Ru.s,t),i=Ho(Ss.l,Ru.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ar=new Ft;Ft.NAMES=Fb;var H5=0,nr=class extends gi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:H5++}),this.uuid=fi(),this.name="",this.type="Material",this.blending=Pa,this.side=Mi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=kd,this.blendDst=Kd,this.blendEquation=wc,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ft(0,0,0),this.blendAlpha=0,this.depthFunc=rl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=m9,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ra,this.stencilZFail=ra,this.stencilZPass=ra,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Pa&&(n.blending=this.blending),this.side!==Mi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==kd&&(n.blendSrc=this.blendSrc),this.blendDst!==Kd&&(n.blendDst=this.blendDst),this.blendEquation!==wc&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==rl&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==m9&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ra&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ra&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ra&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(i){let c=[];for(let o in i){let h=i[o];delete h.metadata,c.push(h)}return c}if(t){let i=r(e.textures),c=r(e.images);i.length>0&&(n.textures=i),c.length>0&&(n.images=c)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let r=t.length;n=new Array(r);for(let i=0;i!==r;++i)n[i]=t[i].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Fr=class extends nr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Mv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var In=new ce,Iu=new Rt,Nn=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Yd,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=rs,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Iu.fromBufferAttribute(this,t),Iu.applyMatrix3(e),this.setXY(t,Iu.x,Iu.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)In.fromBufferAttribute(this,t),In.applyMatrix3(e),this.setXYZ(t,In.x,In.y,In.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)In.fromBufferAttribute(this,t),In.applyMatrix4(e),this.setXYZ(t,In.x,In.y,In.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)In.fromBufferAttribute(this,t),In.applyNormalMatrix(e),this.setXYZ(t,In.x,In.y,In.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)In.fromBufferAttribute(this,t),In.transformDirection(e),this.setXYZ(t,In.x,In.y,In.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Li(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=an(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Li(t,this.array)),t}setX(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Li(t,this.array)),t}setY(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Li(t,this.array)),t}setZ(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Li(t,this.array)),t}setW(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=an(t,this.array),n=an(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=an(t,this.array),n=an(n,this.array),r=an(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=an(t,this.array),n=an(n,this.array),r=an(r,this.array),i=an(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Yd&&(e.usage=this.usage),e}};var vl=class extends Nn{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var fl=class extends Nn{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Qt=class extends Nn{constructor(e,t,n){super(new Float32Array(e),t,n)}};var P5=0,Br=new Gt,Td=new On,da=new ce,Sr=new Xr,po=new Xr,Qn=new ce,Hn=class s extends gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:P5++}),this.uuid=fi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(qb(e)?fl:vl)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let i=new Bt().getNormalMatrix(e);n.applyNormalMatrix(i),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Br.makeRotationFromQuaternion(e),this.applyMatrix4(Br),this}rotateX(e){return Br.makeRotationX(e),this.applyMatrix4(Br),this}rotateY(e){return Br.makeRotationY(e),this.applyMatrix4(Br),this}rotateZ(e){return Br.makeRotationZ(e),this.applyMatrix4(Br),this}translate(e,t,n){return Br.makeTranslation(e,t,n),this.applyMatrix4(Br),this}scale(e,t,n){return Br.makeScale(e,t,n),this.applyMatrix4(Br),this}lookAt(e){return Td.lookAt(e),Td.updateMatrix(),this.applyMatrix4(Td.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(da).negate(),this.translate(da.x,da.y,da.z),this}setFromPoints(e){let t=[];for(let n=0,r=e.length;n<r;n++){let i=e[n];t.push(i.x,i.y,i.z||0)}return this.setAttribute("position",new Qt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new ce(-1/0,-1/0,-1/0),new ce(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){let i=t[n];Sr.setFromBufferAttribute(i),this.morphTargetsRelative?(Qn.addVectors(this.boundingBox.min,Sr.min),this.boundingBox.expandByPoint(Qn),Qn.addVectors(this.boundingBox.max,Sr.max),this.boundingBox.expandByPoint(Qn)):(this.boundingBox.expandByPoint(Sr.min),this.boundingBox.expandByPoint(Sr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new ce,1/0);return}if(e){let n=this.boundingSphere.center;if(Sr.setFromBufferAttribute(e),t)for(let i=0,c=t.length;i<c;i++){let o=t[i];po.setFromBufferAttribute(o),this.morphTargetsRelative?(Qn.addVectors(Sr.min,po.min),Sr.expandByPoint(Qn),Qn.addVectors(Sr.max,po.max),Sr.expandByPoint(Qn)):(Sr.expandByPoint(po.min),Sr.expandByPoint(po.max))}Sr.getCenter(n);let r=0;for(let i=0,c=e.count;i<c;i++)Qn.fromBufferAttribute(e,i),r=Math.max(r,n.distanceToSquared(Qn));if(t)for(let i=0,c=t.length;i<c;i++){let o=t[i],h=this.morphTargetsRelative;for(let d=0,f=o.count;d<f;d++)Qn.fromBufferAttribute(o,d),h&&(da.fromBufferAttribute(e,d),Qn.add(da)),r=Math.max(r,n.distanceToSquared(Qn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,r=t.position.array,i=t.normal.array,c=t.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Nn(new Float32Array(4*o),4));let h=this.getAttribute("tangent").array,d=[],f=[];for(let E=0;E<o;E++)d[E]=new ce,f[E]=new ce;let p=new ce,b=new ce,H=new ce,P=new Rt,X=new Rt,y=new Rt,O=new ce,D=new ce;function L(E,W,$){p.fromArray(r,E*3),b.fromArray(r,W*3),H.fromArray(r,$*3),P.fromArray(c,E*2),X.fromArray(c,W*2),y.fromArray(c,$*2),b.sub(p),H.sub(p),X.sub(P),y.sub(P);let J=1/(X.x*y.y-y.x*X.y);isFinite(J)&&(O.copy(b).multiplyScalar(y.y).addScaledVector(H,-X.y).multiplyScalar(J),D.copy(H).multiplyScalar(X.x).addScaledVector(b,-y.x).multiplyScalar(J),d[E].add(O),d[W].add(O),d[$].add(O),f[E].add(D),f[W].add(D),f[$].add(D))}let g=this.groups;g.length===0&&(g=[{start:0,count:n.length}]);for(let E=0,W=g.length;E<W;++E){let $=g[E],J=$.start,U=$.count;for(let Z=J,ee=J+U;Z<ee;Z+=3)L(n[Z+0],n[Z+1],n[Z+2])}let q=new ce,F=new ce,T=new ce,C=new ce;function M(E){T.fromArray(i,E*3),C.copy(T);let W=d[E];q.copy(W),q.sub(T.multiplyScalar(T.dot(W))).normalize(),F.crossVectors(C,W);let J=F.dot(f[E])<0?-1:1;h[E*4]=q.x,h[E*4+1]=q.y,h[E*4+2]=q.z,h[E*4+3]=J}for(let E=0,W=g.length;E<W;++E){let $=g[E],J=$.start,U=$.count;for(let Z=J,ee=J+U;Z<ee;Z+=3)M(n[Z+0]),M(n[Z+1]),M(n[Z+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Nn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let b=0,H=n.count;b<H;b++)n.setXYZ(b,0,0,0);let r=new ce,i=new ce,c=new ce,o=new ce,h=new ce,d=new ce,f=new ce,p=new ce;if(e)for(let b=0,H=e.count;b<H;b+=3){let P=e.getX(b+0),X=e.getX(b+1),y=e.getX(b+2);r.fromBufferAttribute(t,P),i.fromBufferAttribute(t,X),c.fromBufferAttribute(t,y),f.subVectors(c,i),p.subVectors(r,i),f.cross(p),o.fromBufferAttribute(n,P),h.fromBufferAttribute(n,X),d.fromBufferAttribute(n,y),o.add(f),h.add(f),d.add(f),n.setXYZ(P,o.x,o.y,o.z),n.setXYZ(X,h.x,h.y,h.z),n.setXYZ(y,d.x,d.y,d.z)}else for(let b=0,H=t.count;b<H;b+=3)r.fromBufferAttribute(t,b+0),i.fromBufferAttribute(t,b+1),c.fromBufferAttribute(t,b+2),f.subVectors(c,i),p.subVectors(r,i),f.cross(p),n.setXYZ(b+0,f.x,f.y,f.z),n.setXYZ(b+1,f.x,f.y,f.z),n.setXYZ(b+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Qn.fromBufferAttribute(e,t),Qn.normalize(),e.setXYZ(t,Qn.x,Qn.y,Qn.z)}toNonIndexed(){function e(o,h){let d=o.array,f=o.itemSize,p=o.normalized,b=new d.constructor(h.length*f),H=0,P=0;for(let X=0,y=h.length;X<y;X++){o.isInterleavedBufferAttribute?H=h[X]*o.data.stride+o.offset:H=h[X]*f;for(let O=0;O<f;O++)b[P++]=d[H++]}return new Nn(b,f,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,r=this.attributes;for(let o in r){let h=r[o],d=e(h,n);t.setAttribute(o,d)}let i=this.morphAttributes;for(let o in i){let h=[],d=i[o];for(let f=0,p=d.length;f<p;f++){let b=d[f],H=e(b,n);h.push(H)}t.morphAttributes[o]=h}t.morphTargetsRelative=this.morphTargetsRelative;let c=this.groups;for(let o=0,h=c.length;o<h;o++){let d=c[o];t.addGroup(d.start,d.count,d.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let h=this.parameters;for(let d in h)h[d]!==void 0&&(e[d]=h[d]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let h in n){let d=n[h];e.data.attributes[h]=d.toJSON(e.data)}let r={},i=!1;for(let h in this.morphAttributes){let d=this.morphAttributes[h],f=[];for(let p=0,b=d.length;p<b;p++){let H=d[p];f.push(H.toJSON(e.data))}f.length>0&&(r[h]=f,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let r=e.attributes;for(let d in r){let f=r[d];this.setAttribute(d,f.clone(t))}let i=e.morphAttributes;for(let d in i){let f=[],p=i[d];for(let b=0,H=p.length;b<H;b++)f.push(p[b].clone(t));this.morphAttributes[d]=f}this.morphTargetsRelative=e.morphTargetsRelative;let c=e.groups;for(let d=0,f=c.length;d<f;d++){let p=c[d];this.addGroup(p.start,p.count,p.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},T9=new Gt,xc=new cs,Cu=new qr,S9=new ce,va=new ce,fa=new ce,ba=new ce,Sd=new ce,Wu=new ce,Uu=new Rt,Gu=new Rt,Au=new Rt,V9=new ce,E9=new ce,q9=new ce,ku=new ce,Ku=new ce,ht=class extends On{constructor(e=new Hn,t=new Fr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,c=r.length;i<c;i++){let o=r[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=i}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,c=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){Wu.set(0,0,0);for(let h=0,d=i.length;h<d;h++){let f=o[h],p=i[h];f!==0&&(Sd.fromBufferAttribute(p,e),c?Wu.addScaledVector(Sd,f):Wu.addScaledVector(Sd.sub(t),f))}t.add(Wu)}return t}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Cu.copy(n.boundingSphere),Cu.applyMatrix4(i),xc.copy(e.ray).recast(e.near),!(Cu.containsPoint(xc.origin)===!1&&(xc.intersectSphere(Cu,S9)===null||xc.origin.distanceToSquared(S9)>(e.far-e.near)**2))&&(T9.copy(i).invert(),xc.copy(e.ray).applyMatrix4(T9),!(n.boundingBox!==null&&xc.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,xc)))}_computeIntersections(e,t,n){let r,i=this.geometry,c=this.material,o=i.index,h=i.attributes.position,d=i.attributes.uv,f=i.attributes.uv1,p=i.attributes.normal,b=i.groups,H=i.drawRange;if(o!==null)if(Array.isArray(c))for(let P=0,X=b.length;P<X;P++){let y=b[P],O=c[y.materialIndex],D=Math.max(y.start,H.start),L=Math.min(o.count,Math.min(y.start+y.count,H.start+H.count));for(let g=D,q=L;g<q;g+=3){let F=o.getX(g),T=o.getX(g+1),C=o.getX(g+2);r=Bu(this,O,e,n,d,f,p,F,T,C),r&&(r.faceIndex=Math.floor(g/3),r.face.materialIndex=y.materialIndex,t.push(r))}}else{let P=Math.max(0,H.start),X=Math.min(o.count,H.start+H.count);for(let y=P,O=X;y<O;y+=3){let D=o.getX(y),L=o.getX(y+1),g=o.getX(y+2);r=Bu(this,c,e,n,d,f,p,D,L,g),r&&(r.faceIndex=Math.floor(y/3),t.push(r))}}else if(h!==void 0)if(Array.isArray(c))for(let P=0,X=b.length;P<X;P++){let y=b[P],O=c[y.materialIndex],D=Math.max(y.start,H.start),L=Math.min(h.count,Math.min(y.start+y.count,H.start+H.count));for(let g=D,q=L;g<q;g+=3){let F=g,T=g+1,C=g+2;r=Bu(this,O,e,n,d,f,p,F,T,C),r&&(r.faceIndex=Math.floor(g/3),r.face.materialIndex=y.materialIndex,t.push(r))}}else{let P=Math.max(0,H.start),X=Math.min(h.count,H.start+H.count);for(let y=P,O=X;y<O;y+=3){let D=y,L=y+1,g=y+2;r=Bu(this,c,e,n,d,f,p,D,L,g),r&&(r.faceIndex=Math.floor(y/3),t.push(r))}}}};function y5(s,e,t,n,r,i,c,o){let h;if(e.side===Lr?h=n.intersectTriangle(c,i,r,!0,o):h=n.intersectTriangle(r,i,c,e.side===Mi,o),h===null)return null;Ku.copy(o),Ku.applyMatrix4(s.matrixWorld);let d=t.ray.origin.distanceTo(Ku);return d<t.near||d>t.far?null:{distance:d,point:Ku.clone(),object:s}}function Bu(s,e,t,n,r,i,c,o,h,d){s.getVertexPosition(o,va),s.getVertexPosition(h,fa),s.getVertexPosition(d,ba);let f=y5(s,e,t,n,va,fa,ba,ku);if(f){r&&(Uu.fromBufferAttribute(r,o),Gu.fromBufferAttribute(r,h),Au.fromBufferAttribute(r,d),f.uv=wa.getInterpolation(ku,va,fa,ba,Uu,Gu,Au,new Rt)),i&&(Uu.fromBufferAttribute(i,o),Gu.fromBufferAttribute(i,h),Au.fromBufferAttribute(i,d),f.uv1=wa.getInterpolation(ku,va,fa,ba,Uu,Gu,Au,new Rt),f.uv2=f.uv1),c&&(V9.fromBufferAttribute(c,o),E9.fromBufferAttribute(c,h),q9.fromBufferAttribute(c,d),f.normal=wa.getInterpolation(ku,va,fa,ba,V9,E9,q9,new ce),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));let p={a:o,b:h,c:d,normal:new ce,materialIndex:0};wa.getNormal(va,fa,ba,p.normal),f.face=p}return f}var qn=class s extends Hn{constructor(e=1,t=1,n=1,r=1,i=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:c};let o=this;r=Math.floor(r),i=Math.floor(i),c=Math.floor(c);let h=[],d=[],f=[],p=[],b=0,H=0;P("z","y","x",-1,-1,n,t,e,c,i,0),P("z","y","x",1,-1,n,t,-e,c,i,1),P("x","z","y",1,1,e,n,t,r,c,2),P("x","z","y",1,-1,e,n,-t,r,c,3),P("x","y","z",1,-1,e,t,n,r,i,4),P("x","y","z",-1,-1,e,t,-n,r,i,5),this.setIndex(h),this.setAttribute("position",new Qt(d,3)),this.setAttribute("normal",new Qt(f,3)),this.setAttribute("uv",new Qt(p,2));function P(X,y,O,D,L,g,q,F,T,C,M){let E=g/T,W=q/C,$=g/2,J=q/2,U=F/2,Z=T+1,ee=C+1,ae=0,oe=0,de=new ce;for(let le=0;le<ee;le++){let se=le*W-J;for(let xe=0;xe<Z;xe++){let me=xe*E-$;de[X]=me*D,de[y]=se*L,de[O]=U,d.push(de.x,de.y,de.z),de[X]=0,de[y]=0,de[O]=F>0?1:-1,f.push(de.x,de.y,de.z),p.push(xe/T),p.push(1-le/C),ae+=1}}for(let le=0;le<C;le++)for(let se=0;se<T;se++){let xe=b+se+Z*le,me=b+se+Z*(le+1),Le=b+(se+1)+Z*(le+1),Se=b+(se+1)+Z*le;h.push(xe,me,Se),h.push(me,Le,Se),oe+=6}o.addGroup(H,oe,M),H+=oe,b+=ae}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Ta(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let r=s[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function xr(s){let e={};for(let t=0;t<s.length;t++){let n=Ta(s[t]);for(let r in n)e[r]=n[r]}return e}function z5(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Rb(s){return s.getRenderTarget()===null?s.outputColorSpace:$t.workingColorSpace}var D5={clone:Ta,merge:xr},L5=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,M5=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,as=class extends nr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=L5,this.fragmentShader=M5,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ta(e.uniforms),this.uniformsGroups=z5(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let c=this.uniforms[r].value;c&&c.isTexture?t.uniforms[r]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[r]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[r]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[r]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[r]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[r]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[r]={type:"m4",value:c.toArray()}:t.uniforms[r]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},bl=class extends On{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Gt,this.projectionMatrix=new Gt,this.projectionMatrixInverse=new Gt,this.coordinateSystem=is}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},tr=class extends bl{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ja*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Oo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ja*2*Math.atan(Math.tan(Oo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,i,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Oo*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,c=this.view;if(this.view!==null&&this.view.enabled){let h=c.fullWidth,d=c.fullHeight;i+=c.offsetX*r/h,t-=c.offsetY*n/d,r*=c.width/h,n*=c.height/d}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},pa=-90,xa=1,ev=class extends On{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new tr(pa,xa,e,t);r.layers=this.layers,this.add(r);let i=new tr(pa,xa,e,t);i.layers=this.layers,this.add(i);let c=new tr(pa,xa,e,t);c.layers=this.layers,this.add(c);let o=new tr(pa,xa,e,t);o.layers=this.layers,this.add(o);let h=new tr(pa,xa,e,t);h.layers=this.layers,this.add(h);let d=new tr(pa,xa,e,t);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,c,o,h]=t;for(let d of t)this.remove(d);if(e===is)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===ol)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let d of t)this.add(d),d.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,c,o,h,d,f]=this.children,p=e.getRenderTarget(),b=e.getActiveCubeFace(),H=e.getActiveMipmapLevel(),P=e.xr.enabled;e.xr.enabled=!1;let X=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,i),e.setRenderTarget(n,1,r),e.render(t,c),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,h),e.setRenderTarget(n,4,r),e.render(t,d),n.texture.generateMipmaps=X,e.setRenderTarget(n,5,r),e.render(t,f),e.setRenderTarget(p,b,H),e.xr.enabled=P,n.texture.needsPMREMUpdate=!0}},pl=class extends ur{constructor(e,t,n,r,i,c,o,h,d,f){e=e!==void 0?e:[],t=t!==void 0?t:Da,super(e,t,n,r,i,c,o,h,d,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},tv=class extends ss{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];t.encoding!==void 0&&(Po("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===yc?jn:Yr),this.texture=new pl(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:mr}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new qn(5,5,5),i=new as({name:"CubemapFromEquirect",uniforms:Ta(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Lr,blending:qs});i.uniforms.tEquirect.value=t;let c=new ht(r,i),o=t.minFilter;return t.minFilter===Is&&(t.minFilter=mr),new ev(1,10,this).update(e,c),t.minFilter=o,c.geometry.dispose(),c.material.dispose(),this}clear(e,t,n,r){let i=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,n,r);e.setRenderTarget(i)}},Vd=new ce,g5=new ce,j5=new Bt,vi=class{constructor(e=new ce(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Vd.subVectors(n,t).cross(g5.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Vd),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let i=-(e.start.dot(this.normal)+this.constant)/r;return i<0||i>1?null:t.copy(e.start).addScaledVector(n,i)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||j5.getNormalMatrix(e),r=this.coplanarPoint(Vd).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},mc=new qr,Zu=new ce,go=class{constructor(e=new vi,t=new vi,n=new vi,r=new vi,i=new vi,c=new vi){this.planes=[e,t,n,r,i,c]}set(e,t,n,r,i,c){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(c),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=is){let n=this.planes,r=e.elements,i=r[0],c=r[1],o=r[2],h=r[3],d=r[4],f=r[5],p=r[6],b=r[7],H=r[8],P=r[9],X=r[10],y=r[11],O=r[12],D=r[13],L=r[14],g=r[15];if(n[0].setComponents(h-i,b-d,y-H,g-O).normalize(),n[1].setComponents(h+i,b+d,y+H,g+O).normalize(),n[2].setComponents(h+c,b+f,y+P,g+D).normalize(),n[3].setComponents(h-c,b-f,y-P,g-D).normalize(),n[4].setComponents(h-o,b-p,y-X,g-L).normalize(),t===is)n[5].setComponents(h+o,b+p,y+X,g+L).normalize();else if(t===ol)n[5].setComponents(o,p,X,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),mc.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),mc.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(mc)}intersectsSprite(e){return mc.center.set(0,0,0),mc.radius=.7071067811865476,mc.applyMatrix4(e.matrixWorld),this.intersectsSphere(mc)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let i=0;i<6;i++)if(t[i].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Zu.x=r.normal.x>0?e.max.x:e.min.x,Zu.y=r.normal.y>0?e.max.y:e.min.y,Zu.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Zu)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Ib(){let s=null,e=!1,t=null,n=null;function r(i,c){t(i,c),n=s.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(r),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(i){t=i},setContext:function(i){s=i}}}function N5(s,e){let t=e.isWebGL2,n=new WeakMap;function r(d,f){let p=d.array,b=d.usage,H=p.byteLength,P=s.createBuffer();s.bindBuffer(f,P),s.bufferData(f,p,b),d.onUploadCallback();let X;if(p instanceof Float32Array)X=s.FLOAT;else if(p instanceof Uint16Array)if(d.isFloat16BufferAttribute)if(t)X=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else X=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)X=s.SHORT;else if(p instanceof Uint32Array)X=s.UNSIGNED_INT;else if(p instanceof Int32Array)X=s.INT;else if(p instanceof Int8Array)X=s.BYTE;else if(p instanceof Uint8Array)X=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)X=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:P,type:X,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:H}}function i(d,f,p){let b=f.array,H=f._updateRange,P=f.updateRanges;if(s.bindBuffer(p,d),H.count===-1&&P.length===0&&s.bufferSubData(p,0,b),P.length!==0){for(let X=0,y=P.length;X<y;X++){let O=P[X];t?s.bufferSubData(p,O.start*b.BYTES_PER_ELEMENT,b,O.start,O.count):s.bufferSubData(p,O.start*b.BYTES_PER_ELEMENT,b.subarray(O.start,O.start+O.count))}f.clearUpdateRanges()}H.count!==-1&&(t?s.bufferSubData(p,H.offset*b.BYTES_PER_ELEMENT,b,H.offset,H.count):s.bufferSubData(p,H.offset*b.BYTES_PER_ELEMENT,b.subarray(H.offset,H.offset+H.count)),H.count=-1),f.onUploadCallback()}function c(d){return d.isInterleavedBufferAttribute&&(d=d.data),n.get(d)}function o(d){d.isInterleavedBufferAttribute&&(d=d.data);let f=n.get(d);f&&(s.deleteBuffer(f.buffer),n.delete(d))}function h(d,f){if(d.isGLBufferAttribute){let b=n.get(d);(!b||b.version<d.version)&&n.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}d.isInterleavedBufferAttribute&&(d=d.data);let p=n.get(d);if(p===void 0)n.set(d,r(d,f));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(p.buffer,d,f),p.version=d.version}}return{get:c,remove:o,update:h}}var jo=class s extends Hn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,c=t/2,o=Math.floor(n),h=Math.floor(r),d=o+1,f=h+1,p=e/o,b=t/h,H=[],P=[],X=[],y=[];for(let O=0;O<f;O++){let D=O*b-c;for(let L=0;L<d;L++){let g=L*p-i;P.push(g,-D,0),X.push(0,0,1),y.push(L/o),y.push(1-O/h)}}for(let O=0;O<h;O++)for(let D=0;D<o;D++){let L=D+d*O,g=D+d*(O+1),q=D+1+d*(O+1),F=D+1+d*O;H.push(L,g,F),H.push(g,q,F)}this.setIndex(H),this.setAttribute("position",new Qt(P,3)),this.setAttribute("normal",new Qt(X,3)),this.setAttribute("uv",new Qt(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}},T5=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,S5=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,V5=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,E5=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,q5=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,F5=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,R5=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,I5=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,C5=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,W5=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,U5=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,G5=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,A5=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,k5=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,K5=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,B5=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Z5=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Y5=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Q5=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,J5=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_5=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,$5=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,eX=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,tX=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,nX=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,rX=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,iX=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,sX=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cX=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,aX=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,oX="gl_FragColor = linearToOutputTexel( gl_FragColor );",uX=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,lX=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,hX=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,dX=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,vX=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fX=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,bX=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pX=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,xX=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mX=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,XX=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,wX=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,OX=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,HX=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,PX=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yX=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,zX=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,DX=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,LX=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,MX=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gX=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jX=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,NX=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,TX=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,SX=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,VX=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,EX=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qX=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,FX=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,RX=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,IX=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,CX=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,WX=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,UX=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,GX=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,AX=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,kX=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,KX=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,BX=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,ZX=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,YX=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,QX=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,JX=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_X=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$X=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ew=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,tw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,nw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,rw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cw=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,aw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ow=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,uw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vw=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,fw=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,bw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,pw=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,xw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,mw=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Xw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ww=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ow=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Hw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Pw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,yw=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,zw=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Dw=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Lw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Mw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,gw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,jw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Nw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Tw=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vw=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ew=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Rw=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Iw=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Cw=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Ww=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Uw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gw=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Aw=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,kw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Kw=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bw=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zw=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yw=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Qw=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jw=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,_w=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,$w=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,e8=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,t8=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,n8=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,r8=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,i8=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,s8=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,c8=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,a8=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,o8=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,u8=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,l8=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,kt={alphahash_fragment:T5,alphahash_pars_fragment:S5,alphamap_fragment:V5,alphamap_pars_fragment:E5,alphatest_fragment:q5,alphatest_pars_fragment:F5,aomap_fragment:R5,aomap_pars_fragment:I5,batching_pars_vertex:C5,batching_vertex:W5,begin_vertex:U5,beginnormal_vertex:G5,bsdfs:A5,iridescence_fragment:k5,bumpmap_pars_fragment:K5,clipping_planes_fragment:B5,clipping_planes_pars_fragment:Z5,clipping_planes_pars_vertex:Y5,clipping_planes_vertex:Q5,color_fragment:J5,color_pars_fragment:_5,color_pars_vertex:$5,color_vertex:eX,common:tX,cube_uv_reflection_fragment:nX,defaultnormal_vertex:rX,displacementmap_pars_vertex:iX,displacementmap_vertex:sX,emissivemap_fragment:cX,emissivemap_pars_fragment:aX,colorspace_fragment:oX,colorspace_pars_fragment:uX,envmap_fragment:lX,envmap_common_pars_fragment:hX,envmap_pars_fragment:dX,envmap_pars_vertex:vX,envmap_physical_pars_fragment:zX,envmap_vertex:fX,fog_vertex:bX,fog_pars_vertex:pX,fog_fragment:xX,fog_pars_fragment:mX,gradientmap_pars_fragment:XX,lightmap_fragment:wX,lightmap_pars_fragment:OX,lights_lambert_fragment:HX,lights_lambert_pars_fragment:PX,lights_pars_begin:yX,lights_toon_fragment:DX,lights_toon_pars_fragment:LX,lights_phong_fragment:MX,lights_phong_pars_fragment:gX,lights_physical_fragment:jX,lights_physical_pars_fragment:NX,lights_fragment_begin:TX,lights_fragment_maps:SX,lights_fragment_end:VX,logdepthbuf_fragment:EX,logdepthbuf_pars_fragment:qX,logdepthbuf_pars_vertex:FX,logdepthbuf_vertex:RX,map_fragment:IX,map_pars_fragment:CX,map_particle_fragment:WX,map_particle_pars_fragment:UX,metalnessmap_fragment:GX,metalnessmap_pars_fragment:AX,morphcolor_vertex:kX,morphnormal_vertex:KX,morphtarget_pars_vertex:BX,morphtarget_vertex:ZX,normal_fragment_begin:YX,normal_fragment_maps:QX,normal_pars_fragment:JX,normal_pars_vertex:_X,normal_vertex:$X,normalmap_pars_fragment:ew,clearcoat_normal_fragment_begin:tw,clearcoat_normal_fragment_maps:nw,clearcoat_pars_fragment:rw,iridescence_pars_fragment:iw,opaque_fragment:sw,packing:cw,premultiplied_alpha_fragment:aw,project_vertex:ow,dithering_fragment:uw,dithering_pars_fragment:lw,roughnessmap_fragment:hw,roughnessmap_pars_fragment:dw,shadowmap_pars_fragment:vw,shadowmap_pars_vertex:fw,shadowmap_vertex:bw,shadowmask_pars_fragment:pw,skinbase_vertex:xw,skinning_pars_vertex:mw,skinning_vertex:Xw,skinnormal_vertex:ww,specularmap_fragment:Ow,specularmap_pars_fragment:Hw,tonemapping_fragment:Pw,tonemapping_pars_fragment:yw,transmission_fragment:zw,transmission_pars_fragment:Dw,uv_pars_fragment:Lw,uv_pars_vertex:Mw,uv_vertex:gw,worldpos_vertex:jw,background_vert:Nw,background_frag:Tw,backgroundCube_vert:Sw,backgroundCube_frag:Vw,cube_vert:Ew,cube_frag:qw,depth_vert:Fw,depth_frag:Rw,distanceRGBA_vert:Iw,distanceRGBA_frag:Cw,equirect_vert:Ww,equirect_frag:Uw,linedashed_vert:Gw,linedashed_frag:Aw,meshbasic_vert:kw,meshbasic_frag:Kw,meshlambert_vert:Bw,meshlambert_frag:Zw,meshmatcap_vert:Yw,meshmatcap_frag:Qw,meshnormal_vert:Jw,meshnormal_frag:_w,meshphong_vert:$w,meshphong_frag:e8,meshphysical_vert:t8,meshphysical_frag:n8,meshtoon_vert:r8,meshtoon_frag:i8,points_vert:s8,points_frag:c8,shadow_vert:a8,shadow_frag:o8,sprite_vert:u8,sprite_frag:l8},vt={common:{diffuse:{value:new Ft(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Bt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Bt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Bt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Bt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Bt},normalScale:{value:new Rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Bt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Bt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Bt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Bt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0},uvTransform:{value:new Bt}},sprite:{diffuse:{value:new Ft(16777215)},opacity:{value:1},center:{value:new Rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}}},Di={basic:{uniforms:xr([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.fog]),vertexShader:kt.meshbasic_vert,fragmentShader:kt.meshbasic_frag},lambert:{uniforms:xr([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new Ft(0)}}]),vertexShader:kt.meshlambert_vert,fragmentShader:kt.meshlambert_frag},phong:{uniforms:xr([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new Ft(0)},specular:{value:new Ft(1118481)},shininess:{value:30}}]),vertexShader:kt.meshphong_vert,fragmentShader:kt.meshphong_frag},standard:{uniforms:xr([vt.common,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.roughnessmap,vt.metalnessmap,vt.fog,vt.lights,{emissive:{value:new Ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag},toon:{uniforms:xr([vt.common,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.gradientmap,vt.fog,vt.lights,{emissive:{value:new Ft(0)}}]),vertexShader:kt.meshtoon_vert,fragmentShader:kt.meshtoon_frag},matcap:{uniforms:xr([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,{matcap:{value:null}}]),vertexShader:kt.meshmatcap_vert,fragmentShader:kt.meshmatcap_frag},points:{uniforms:xr([vt.points,vt.fog]),vertexShader:kt.points_vert,fragmentShader:kt.points_frag},dashed:{uniforms:xr([vt.common,vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:kt.linedashed_vert,fragmentShader:kt.linedashed_frag},depth:{uniforms:xr([vt.common,vt.displacementmap]),vertexShader:kt.depth_vert,fragmentShader:kt.depth_frag},normal:{uniforms:xr([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,{opacity:{value:1}}]),vertexShader:kt.meshnormal_vert,fragmentShader:kt.meshnormal_frag},sprite:{uniforms:xr([vt.sprite,vt.fog]),vertexShader:kt.sprite_vert,fragmentShader:kt.sprite_frag},background:{uniforms:{uvTransform:{value:new Bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:kt.background_vert,fragmentShader:kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:kt.backgroundCube_vert,fragmentShader:kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:kt.cube_vert,fragmentShader:kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:kt.equirect_vert,fragmentShader:kt.equirect_frag},distanceRGBA:{uniforms:xr([vt.common,vt.displacementmap,{referencePosition:{value:new ce},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:kt.distanceRGBA_vert,fragmentShader:kt.distanceRGBA_frag},shadow:{uniforms:xr([vt.lights,vt.fog,{color:{value:new Ft(0)},opacity:{value:1}}]),vertexShader:kt.shadow_vert,fragmentShader:kt.shadow_frag}};Di.physical={uniforms:xr([Di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Bt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Bt},clearcoatNormalScale:{value:new Rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Bt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Bt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Bt},sheen:{value:0},sheenColor:{value:new Ft(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Bt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Bt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Bt},transmissionSamplerSize:{value:new Rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Bt},attenuationDistance:{value:0},attenuationColor:{value:new Ft(0)},specularColor:{value:new Ft(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Bt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Bt},anisotropyVector:{value:new Rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Bt}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag};var Yu={r:0,b:0,g:0};function h8(s,e,t,n,r,i,c){let o=new Ft(0),h=i===!0?0:1,d,f,p=null,b=0,H=null;function P(y,O){let D=!1,L=O.isScene===!0?O.background:null;L&&L.isTexture&&(L=(O.backgroundBlurriness>0?t:e).get(L)),L===null?X(o,h):L&&L.isColor&&(X(L,1),D=!0);let g=s.xr.getEnvironmentBlendMode();g==="additive"?n.buffers.color.setClear(0,0,0,1,c):g==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,c),(s.autoClear||D)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),L&&(L.isCubeTexture||L.mapping===Sl)?(f===void 0&&(f=new ht(new qn(1,1,1),new as({name:"BackgroundCubeMaterial",uniforms:Ta(Di.backgroundCube.uniforms),vertexShader:Di.backgroundCube.vertexShader,fragmentShader:Di.backgroundCube.fragmentShader,side:Lr,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(q,F,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),f.material.uniforms.envMap.value=L,f.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=O.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,f.material.toneMapped=$t.getTransfer(L.colorSpace)!==Xn,(p!==L||b!==L.version||H!==s.toneMapping)&&(f.material.needsUpdate=!0,p=L,b=L.version,H=s.toneMapping),f.layers.enableAll(),y.unshift(f,f.geometry,f.material,0,0,null)):L&&L.isTexture&&(d===void 0&&(d=new ht(new jo(2,2),new as({name:"BackgroundMaterial",uniforms:Ta(Di.background.uniforms),vertexShader:Di.background.vertexShader,fragmentShader:Di.background.fragmentShader,side:Mi,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(d)),d.material.uniforms.t2D.value=L,d.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,d.material.toneMapped=$t.getTransfer(L.colorSpace)!==Xn,L.matrixAutoUpdate===!0&&L.updateMatrix(),d.material.uniforms.uvTransform.value.copy(L.matrix),(p!==L||b!==L.version||H!==s.toneMapping)&&(d.material.needsUpdate=!0,p=L,b=L.version,H=s.toneMapping),d.layers.enableAll(),y.unshift(d,d.geometry,d.material,0,0,null))}function X(y,O){y.getRGB(Yu,Rb(s)),n.buffers.color.setClear(Yu.r,Yu.g,Yu.b,O,c)}return{getClearColor:function(){return o},setClearColor:function(y,O=1){o.set(y),h=O,X(o,h)},getClearAlpha:function(){return h},setClearAlpha:function(y){h=y,X(o,h)},render:P}}function d8(s,e,t,n){let r=s.getParameter(s.MAX_VERTEX_ATTRIBS),i=n.isWebGL2?null:e.get("OES_vertex_array_object"),c=n.isWebGL2||i!==null,o={},h=y(null),d=h,f=!1;function p(U,Z,ee,ae,oe){let de=!1;if(c){let le=X(ae,ee,Z);d!==le&&(d=le,H(d.object)),de=O(U,ae,ee,oe),de&&D(U,ae,ee,oe)}else{let le=Z.wireframe===!0;(d.geometry!==ae.id||d.program!==ee.id||d.wireframe!==le)&&(d.geometry=ae.id,d.program=ee.id,d.wireframe=le,de=!0)}oe!==null&&t.update(oe,s.ELEMENT_ARRAY_BUFFER),(de||f)&&(f=!1,C(U,Z,ee,ae),oe!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(oe).buffer))}function b(){return n.isWebGL2?s.createVertexArray():i.createVertexArrayOES()}function H(U){return n.isWebGL2?s.bindVertexArray(U):i.bindVertexArrayOES(U)}function P(U){return n.isWebGL2?s.deleteVertexArray(U):i.deleteVertexArrayOES(U)}function X(U,Z,ee){let ae=ee.wireframe===!0,oe=o[U.id];oe===void 0&&(oe={},o[U.id]=oe);let de=oe[Z.id];de===void 0&&(de={},oe[Z.id]=de);let le=de[ae];return le===void 0&&(le=y(b()),de[ae]=le),le}function y(U){let Z=[],ee=[],ae=[];for(let oe=0;oe<r;oe++)Z[oe]=0,ee[oe]=0,ae[oe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Z,enabledAttributes:ee,attributeDivisors:ae,object:U,attributes:{},index:null}}function O(U,Z,ee,ae){let oe=d.attributes,de=Z.attributes,le=0,se=ee.getAttributes();for(let xe in se)if(se[xe].location>=0){let Le=oe[xe],Se=de[xe];if(Se===void 0&&(xe==="instanceMatrix"&&U.instanceMatrix&&(Se=U.instanceMatrix),xe==="instanceColor"&&U.instanceColor&&(Se=U.instanceColor)),Le===void 0||Le.attribute!==Se||Se&&Le.data!==Se.data)return!0;le++}return d.attributesNum!==le||d.index!==ae}function D(U,Z,ee,ae){let oe={},de=Z.attributes,le=0,se=ee.getAttributes();for(let xe in se)if(se[xe].location>=0){let Le=de[xe];Le===void 0&&(xe==="instanceMatrix"&&U.instanceMatrix&&(Le=U.instanceMatrix),xe==="instanceColor"&&U.instanceColor&&(Le=U.instanceColor));let Se={};Se.attribute=Le,Le&&Le.data&&(Se.data=Le.data),oe[xe]=Se,le++}d.attributes=oe,d.attributesNum=le,d.index=ae}function L(){let U=d.newAttributes;for(let Z=0,ee=U.length;Z<ee;Z++)U[Z]=0}function g(U){q(U,0)}function q(U,Z){let ee=d.newAttributes,ae=d.enabledAttributes,oe=d.attributeDivisors;ee[U]=1,ae[U]===0&&(s.enableVertexAttribArray(U),ae[U]=1),oe[U]!==Z&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](U,Z),oe[U]=Z)}function F(){let U=d.newAttributes,Z=d.enabledAttributes;for(let ee=0,ae=Z.length;ee<ae;ee++)Z[ee]!==U[ee]&&(s.disableVertexAttribArray(ee),Z[ee]=0)}function T(U,Z,ee,ae,oe,de,le){le===!0?s.vertexAttribIPointer(U,Z,ee,oe,de):s.vertexAttribPointer(U,Z,ee,ae,oe,de)}function C(U,Z,ee,ae){if(n.isWebGL2===!1&&(U.isInstancedMesh||ae.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;L();let oe=ae.attributes,de=ee.getAttributes(),le=Z.defaultAttributeValues;for(let se in de){let xe=de[se];if(xe.location>=0){let me=oe[se];if(me===void 0&&(se==="instanceMatrix"&&U.instanceMatrix&&(me=U.instanceMatrix),se==="instanceColor"&&U.instanceColor&&(me=U.instanceColor)),me!==void 0){let Le=me.normalized,Se=me.itemSize,rt=t.get(me);if(rt===void 0)continue;let tt=rt.buffer,ot=rt.type,Ot=rt.bytesPerElement,Ze=n.isWebGL2===!0&&(ot===s.INT||ot===s.UNSIGNED_INT||me.gpuType===Db);if(me.isInterleavedBufferAttribute){let Nt=me.data,De=Nt.stride,Kt=me.offset;if(Nt.isInstancedInterleavedBuffer){for(let fe=0;fe<xe.locationSize;fe++)q(xe.location+fe,Nt.meshPerAttribute);U.isInstancedMesh!==!0&&ae._maxInstanceCount===void 0&&(ae._maxInstanceCount=Nt.meshPerAttribute*Nt.count)}else for(let fe=0;fe<xe.locationSize;fe++)g(xe.location+fe);s.bindBuffer(s.ARRAY_BUFFER,tt);for(let fe=0;fe<xe.locationSize;fe++)T(xe.location+fe,Se/xe.locationSize,ot,Le,De*Ot,(Kt+Se/xe.locationSize*fe)*Ot,Ze)}else{if(me.isInstancedBufferAttribute){for(let Nt=0;Nt<xe.locationSize;Nt++)q(xe.location+Nt,me.meshPerAttribute);U.isInstancedMesh!==!0&&ae._maxInstanceCount===void 0&&(ae._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let Nt=0;Nt<xe.locationSize;Nt++)g(xe.location+Nt);s.bindBuffer(s.ARRAY_BUFFER,tt);for(let Nt=0;Nt<xe.locationSize;Nt++)T(xe.location+Nt,Se/xe.locationSize,ot,Le,Se*Ot,Se/xe.locationSize*Nt*Ot,Ze)}}else if(le!==void 0){let Le=le[se];if(Le!==void 0)switch(Le.length){case 2:s.vertexAttrib2fv(xe.location,Le);break;case 3:s.vertexAttrib3fv(xe.location,Le);break;case 4:s.vertexAttrib4fv(xe.location,Le);break;default:s.vertexAttrib1fv(xe.location,Le)}}}}F()}function M(){$();for(let U in o){let Z=o[U];for(let ee in Z){let ae=Z[ee];for(let oe in ae)P(ae[oe].object),delete ae[oe];delete Z[ee]}delete o[U]}}function E(U){if(o[U.id]===void 0)return;let Z=o[U.id];for(let ee in Z){let ae=Z[ee];for(let oe in ae)P(ae[oe].object),delete ae[oe];delete Z[ee]}delete o[U.id]}function W(U){for(let Z in o){let ee=o[Z];if(ee[U.id]===void 0)continue;let ae=ee[U.id];for(let oe in ae)P(ae[oe].object),delete ae[oe];delete ee[U.id]}}function $(){J(),f=!0,d!==h&&(d=h,H(d.object))}function J(){h.geometry=null,h.program=null,h.wireframe=!1}return{setup:p,reset:$,resetDefaultState:J,dispose:M,releaseStatesOfGeometry:E,releaseStatesOfProgram:W,initAttributes:L,enableAttribute:g,disableUnusedAttributes:F}}function v8(s,e,t,n){let r=n.isWebGL2,i;function c(f){i=f}function o(f,p){s.drawArrays(i,f,p),t.update(p,i,1)}function h(f,p,b){if(b===0)return;let H,P;if(r)H=s,P="drawArraysInstanced";else if(H=e.get("ANGLE_instanced_arrays"),P="drawArraysInstancedANGLE",H===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}H[P](i,f,p,b),t.update(p,i,b)}function d(f,p,b){if(b===0)return;let H=e.get("WEBGL_multi_draw");if(H===null)for(let P=0;P<b;P++)this.render(f[P],p[P]);else{H.multiDrawArraysWEBGL(i,f,0,p,0,b);let P=0;for(let X=0;X<b;X++)P+=p[X];t.update(P,i,1)}}this.setMode=c,this.render=o,this.renderInstances=h,this.renderMultiDraw=d}function f8(s,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let T=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function i(T){if(T==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext",o=t.precision!==void 0?t.precision:"highp",h=i(o);h!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",h,"instead."),o=h);let d=c||e.has("WEBGL_draw_buffers"),f=t.logarithmicDepthBuffer===!0,p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),H=s.getParameter(s.MAX_TEXTURE_SIZE),P=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),X=s.getParameter(s.MAX_VERTEX_ATTRIBS),y=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),O=s.getParameter(s.MAX_VARYING_VECTORS),D=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),L=b>0,g=c||e.has("OES_texture_float"),q=L&&g,F=c?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:c,drawBuffers:d,getMaxAnisotropy:r,getMaxPrecision:i,precision:o,logarithmicDepthBuffer:f,maxTextures:p,maxVertexTextures:b,maxTextureSize:H,maxCubemapSize:P,maxAttributes:X,maxVertexUniforms:y,maxVaryings:O,maxFragmentUniforms:D,vertexTextures:L,floatFragmentTextures:g,floatVertexTextures:q,maxSamples:F}}function b8(s){let e=this,t=null,n=0,r=!1,i=!1,c=new vi,o=new Bt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(p,b){let H=p.length!==0||b||n!==0||r;return r=b,n=p.length,H},this.beginShadows=function(){i=!0,f(null)},this.endShadows=function(){i=!1},this.setGlobalState=function(p,b){t=f(p,b,0)},this.setState=function(p,b,H){let P=p.clippingPlanes,X=p.clipIntersection,y=p.clipShadows,O=s.get(p);if(!r||P===null||P.length===0||i&&!y)i?f(null):d();else{let D=i?0:n,L=D*4,g=O.clippingState||null;h.value=g,g=f(P,b,L,H);for(let q=0;q!==L;++q)g[q]=t[q];O.clippingState=g,this.numIntersection=X?this.numPlanes:0,this.numPlanes+=D}};function d(){h.value!==t&&(h.value=t,h.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function f(p,b,H,P){let X=p!==null?p.length:0,y=null;if(X!==0){if(y=h.value,P!==!0||y===null){let O=H+X*4,D=b.matrixWorldInverse;o.getNormalMatrix(D),(y===null||y.length<O)&&(y=new Float32Array(O));for(let L=0,g=H;L!==X;++L,g+=4)c.copy(p[L]).applyMatrix4(D,o),c.normal.toArray(y,g),y[g+3]=c.constant}h.value=y,h.needsUpdate=!0}return e.numPlanes=X,e.numIntersection=0,y}}function p8(s){let e=new WeakMap;function t(c,o){return o===Bd?c.mapping=Da:o===Zd&&(c.mapping=La),c}function n(c){if(c&&c.isTexture){let o=c.mapping;if(o===Bd||o===Zd)if(e.has(c)){let h=e.get(c).texture;return t(h,c.mapping)}else{let h=c.image;if(h&&h.height>0){let d=new tv(h.height/2);return d.fromEquirectangularTexture(s,c),e.set(c,d),c.addEventListener("dispose",r),t(d.texture,c.mapping)}else return null}}return c}function r(c){let o=c.target;o.removeEventListener("dispose",r);let h=e.get(o);h!==void 0&&(e.delete(o),h.dispose())}function i(){e=new WeakMap}return{get:n,dispose:i}}var Sa=class extends bl{constructor(e=-1,t=1,n=1,r=-1,i=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,c=n+e,o=r+t,h=r-t;if(this.view!==null&&this.view.enabled){let d=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=d*this.view.offsetX,c=i+d*this.view.width,o-=f*this.view.offsetY,h=o-f*this.view.height}this.projectionMatrix.makeOrthographic(i,c,o,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Oa=4,F9=[.125,.215,.35,.446,.526,.582],Oc=20,Ed=new Sa,R9=new Ft,qd=null,Fd=0,Rd=0,Xc=(1+Math.sqrt(5))/2,ma=1/Xc,I9=[new ce(1,1,1),new ce(-1,1,1),new ce(1,1,-1),new ce(-1,1,-1),new ce(0,Xc,ma),new ce(0,Xc,-ma),new ce(ma,0,Xc),new ce(-ma,0,Xc),new ce(Xc,ma,0),new ce(-Xc,ma,0)],xl=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){qd=this._renderer.getRenderTarget(),Fd=this._renderer.getActiveCubeFace(),Rd=this._renderer.getActiveMipmapLevel(),this._setSize(256);let i=this._allocateTargets();return i.depthBuffer=!0,this._sceneToCubeUV(e,n,r,i),t>0&&this._blur(i,0,0,t),this._applyPMREM(i),this._cleanup(i),i}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=U9(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=W9(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(qd,Fd,Rd),e.scissorTest=!1,Qu(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Da||e.mapping===La?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),qd=this._renderer.getRenderTarget(),Fd=this._renderer.getActiveCubeFace(),Rd=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:mr,minFilter:mr,generateMipmaps:!1,type:Do,format:Zr,colorSpace:Gn,depthBuffer:!1},r=C9(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=C9(e,t,n);let{_lodMax:i}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=x8(i)),this._blurMaterial=m8(i,e,t)}return r}_compileMaterial(e){let t=new ht(this._lodPlanes[0],e);this._renderer.compile(t,Ed)}_sceneToCubeUV(e,t,n,r){let o=new tr(90,1,t,n),h=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],f=this._renderer,p=f.autoClear,b=f.toneMapping;f.getClearColor(R9),f.toneMapping=Fs,f.autoClear=!1;let H=new Fr({name:"PMREM.Background",side:Lr,depthWrite:!1,depthTest:!1}),P=new ht(new qn,H),X=!1,y=e.background;y?y.isColor&&(H.color.copy(y),e.background=null,X=!0):(H.color.copy(R9),X=!0);for(let O=0;O<6;O++){let D=O%3;D===0?(o.up.set(0,h[O],0),o.lookAt(d[O],0,0)):D===1?(o.up.set(0,0,h[O]),o.lookAt(0,d[O],0)):(o.up.set(0,h[O],0),o.lookAt(0,0,d[O]));let L=this._cubeSize;Qu(r,D*L,O>2?L:0,L,L),f.setRenderTarget(r),X&&f.render(P,o),f.render(e,o)}P.geometry.dispose(),P.material.dispose(),f.toneMapping=b,f.autoClear=p,e.background=y}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===Da||e.mapping===La;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=U9()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=W9());let i=r?this._cubemapMaterial:this._equirectMaterial,c=new ht(this._lodPlanes[0],i),o=i.uniforms;o.envMap.value=e;let h=this._cubeSize;Qu(t,0,0,3*h,2*h),n.setRenderTarget(t),n.render(c,Ed)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){let i=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),c=I9[(r-1)%I9.length];this._blur(e,r-1,r,i,c)}t.autoClear=n}_blur(e,t,n,r,i){let c=this._pingPongRenderTarget;this._halfBlur(e,c,t,n,r,"latitudinal",i),this._halfBlur(c,e,n,n,r,"longitudinal",i)}_halfBlur(e,t,n,r,i,c,o){let h=this._renderer,d=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let f=3,p=new ht(this._lodPlanes[r],d),b=d.uniforms,H=this._sizeLods[n]-1,P=isFinite(i)?Math.PI/(2*H):2*Math.PI/(2*Oc-1),X=i/P,y=isFinite(i)?1+Math.floor(f*X):Oc;y>Oc&&console.warn(`sigmaRadians, ${i}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Oc}`);let O=[],D=0;for(let T=0;T<Oc;++T){let C=T/X,M=Math.exp(-C*C/2);O.push(M),T===0?D+=M:T<y&&(D+=2*M)}for(let T=0;T<O.length;T++)O[T]=O[T]/D;b.envMap.value=e.texture,b.samples.value=y,b.weights.value=O,b.latitudinal.value=c==="latitudinal",o&&(b.poleAxis.value=o);let{_lodMax:L}=this;b.dTheta.value=P,b.mipInt.value=L-n;let g=this._sizeLods[r],q=3*g*(r>L-Oa?r-L+Oa:0),F=4*(this._cubeSize-g);Qu(t,q,F,3*g,2*g),h.setRenderTarget(t),h.render(p,Ed)}};function x8(s){let e=[],t=[],n=[],r=s,i=s-Oa+1+F9.length;for(let c=0;c<i;c++){let o=Math.pow(2,r);t.push(o);let h=1/o;c>s-Oa?h=F9[c-s+Oa-1]:c===0&&(h=0),n.push(h);let d=1/(o-2),f=-d,p=1+d,b=[f,f,p,f,p,p,f,f,p,p,f,p],H=6,P=6,X=3,y=2,O=1,D=new Float32Array(X*P*H),L=new Float32Array(y*P*H),g=new Float32Array(O*P*H);for(let F=0;F<H;F++){let T=F%3*2/3-1,C=F>2?0:-1,M=[T,C,0,T+2/3,C,0,T+2/3,C+1,0,T,C,0,T+2/3,C+1,0,T,C+1,0];D.set(M,X*P*F),L.set(b,y*P*F);let E=[F,F,F,F,F,F];g.set(E,O*P*F)}let q=new Hn;q.setAttribute("position",new Nn(D,X)),q.setAttribute("uv",new Nn(L,y)),q.setAttribute("faceIndex",new Nn(g,O)),e.push(q),r>Oa&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function C9(s,e,t){let n=new ss(s,e,t);return n.texture.mapping=Sl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Qu(s,e,t,n,r){s.viewport.set(e,t,n,r),s.scissor.set(e,t,n,r)}function m8(s,e,t){let n=new Float32Array(Oc),r=new ce(0,1,0);return new as({name:"SphericalGaussianBlur",defines:{n:Oc,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Vv(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:qs,depthTest:!1,depthWrite:!1})}function W9(){return new as({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vv(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:qs,depthTest:!1,depthWrite:!1})}function U9(){return new as({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vv(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qs,depthTest:!1,depthWrite:!1})}function Vv(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function X8(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let h=o.mapping,d=h===Bd||h===Zd,f=h===Da||h===La;if(d||f)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let p=e.get(o);return t===null&&(t=new xl(s)),p=d?t.fromEquirectangular(o,p):t.fromCubemap(o,p),e.set(o,p),p.texture}else{if(e.has(o))return e.get(o).texture;{let p=o.image;if(d&&p&&p.height>0||f&&p&&r(p)){t===null&&(t=new xl(s));let b=d?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,b),o.addEventListener("dispose",i),b.texture}else return null}}}return o}function r(o){let h=0,d=6;for(let f=0;f<d;f++)o[f]!==void 0&&h++;return h===d}function i(o){let h=o.target;h.removeEventListener("dispose",i);let d=e.get(h);d!==void 0&&(e.delete(h),d.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:c}}function w8(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=s.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function O8(s,e,t,n){let r={},i=new WeakMap;function c(p){let b=p.target;b.index!==null&&e.remove(b.index);for(let P in b.attributes)e.remove(b.attributes[P]);for(let P in b.morphAttributes){let X=b.morphAttributes[P];for(let y=0,O=X.length;y<O;y++)e.remove(X[y])}b.removeEventListener("dispose",c),delete r[b.id];let H=i.get(b);H&&(e.remove(H),i.delete(b)),n.releaseStatesOfGeometry(b),b.isInstancedBufferGeometry===!0&&delete b._maxInstanceCount,t.memory.geometries--}function o(p,b){return r[b.id]===!0||(b.addEventListener("dispose",c),r[b.id]=!0,t.memory.geometries++),b}function h(p){let b=p.attributes;for(let P in b)e.update(b[P],s.ARRAY_BUFFER);let H=p.morphAttributes;for(let P in H){let X=H[P];for(let y=0,O=X.length;y<O;y++)e.update(X[y],s.ARRAY_BUFFER)}}function d(p){let b=[],H=p.index,P=p.attributes.position,X=0;if(H!==null){let D=H.array;X=H.version;for(let L=0,g=D.length;L<g;L+=3){let q=D[L+0],F=D[L+1],T=D[L+2];b.push(q,F,F,T,T,q)}}else if(P!==void 0){let D=P.array;X=P.version;for(let L=0,g=D.length/3-1;L<g;L+=3){let q=L+0,F=L+1,T=L+2;b.push(q,F,F,T,T,q)}}else return;let y=new(qb(b)?fl:vl)(b,1);y.version=X;let O=i.get(p);O&&e.remove(O),i.set(p,y)}function f(p){let b=i.get(p);if(b){let H=p.index;H!==null&&b.version<H.version&&d(p)}else d(p);return i.get(p)}return{get:o,update:h,getWireframeAttribute:f}}function H8(s,e,t,n){let r=n.isWebGL2,i;function c(H){i=H}let o,h;function d(H){o=H.type,h=H.bytesPerElement}function f(H,P){s.drawElements(i,P,o,H*h),t.update(P,i,1)}function p(H,P,X){if(X===0)return;let y,O;if(r)y=s,O="drawElementsInstanced";else if(y=e.get("ANGLE_instanced_arrays"),O="drawElementsInstancedANGLE",y===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}y[O](i,P,o,H*h,X),t.update(P,i,X)}function b(H,P,X){if(X===0)return;let y=e.get("WEBGL_multi_draw");if(y===null)for(let O=0;O<X;O++)this.render(H[O]/h,P[O]);else{y.multiDrawElementsWEBGL(i,P,0,o,H,0,X);let O=0;for(let D=0;D<X;D++)O+=P[D];t.update(O,i,1)}}this.setMode=c,this.setIndex=d,this.render=f,this.renderInstances=p,this.renderMultiDraw=b}function P8(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(i,c,o){switch(t.calls++,c){case s.TRIANGLES:t.triangles+=o*(i/3);break;case s.LINES:t.lines+=o*(i/2);break;case s.LINE_STRIP:t.lines+=o*(i-1);break;case s.LINE_LOOP:t.lines+=o*i;break;case s.POINTS:t.points+=o*i;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function y8(s,e){return s[0]-e[0]}function z8(s,e){return Math.abs(e[1])-Math.abs(s[1])}function D8(s,e,t){let n={},r=new Float32Array(8),i=new WeakMap,c=new hn,o=[];for(let d=0;d<8;d++)o[d]=[d,0];function h(d,f,p){let b=d.morphTargetInfluences;if(e.isWebGL2===!0){let H=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,P=H!==void 0?H.length:0,X=i.get(f);if(X===void 0||X.count!==P){let U=function(){$.dispose(),i.delete(f),f.removeEventListener("dispose",U)};X!==void 0&&X.texture.dispose();let D=f.morphAttributes.position!==void 0,L=f.morphAttributes.normal!==void 0,g=f.morphAttributes.color!==void 0,q=f.morphAttributes.position||[],F=f.morphAttributes.normal||[],T=f.morphAttributes.color||[],C=0;D===!0&&(C=1),L===!0&&(C=2),g===!0&&(C=3);let M=f.attributes.position.count*C,E=1;M>e.maxTextureSize&&(E=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let W=new Float32Array(M*E*4*P),$=new dl(W,M,E,P);$.type=rs,$.needsUpdate=!0;let J=C*4;for(let Z=0;Z<P;Z++){let ee=q[Z],ae=F[Z],oe=T[Z],de=M*E*4*Z;for(let le=0;le<ee.count;le++){let se=le*J;D===!0&&(c.fromBufferAttribute(ee,le),W[de+se+0]=c.x,W[de+se+1]=c.y,W[de+se+2]=c.z,W[de+se+3]=0),L===!0&&(c.fromBufferAttribute(ae,le),W[de+se+4]=c.x,W[de+se+5]=c.y,W[de+se+6]=c.z,W[de+se+7]=0),g===!0&&(c.fromBufferAttribute(oe,le),W[de+se+8]=c.x,W[de+se+9]=c.y,W[de+se+10]=c.z,W[de+se+11]=oe.itemSize===4?c.w:1)}}X={count:P,texture:$,size:new Rt(M,E)},i.set(f,X),f.addEventListener("dispose",U)}let y=0;for(let D=0;D<b.length;D++)y+=b[D];let O=f.morphTargetsRelative?1:1-y;p.getUniforms().setValue(s,"morphTargetBaseInfluence",O),p.getUniforms().setValue(s,"morphTargetInfluences",b),p.getUniforms().setValue(s,"morphTargetsTexture",X.texture,t),p.getUniforms().setValue(s,"morphTargetsTextureSize",X.size)}else{let H=b===void 0?0:b.length,P=n[f.id];if(P===void 0||P.length!==H){P=[];for(let L=0;L<H;L++)P[L]=[L,0];n[f.id]=P}for(let L=0;L<H;L++){let g=P[L];g[0]=L,g[1]=b[L]}P.sort(z8);for(let L=0;L<8;L++)L<H&&P[L][1]?(o[L][0]=P[L][0],o[L][1]=P[L][1]):(o[L][0]=Number.MAX_SAFE_INTEGER,o[L][1]=0);o.sort(y8);let X=f.morphAttributes.position,y=f.morphAttributes.normal,O=0;for(let L=0;L<8;L++){let g=o[L],q=g[0],F=g[1];q!==Number.MAX_SAFE_INTEGER&&F?(X&&f.getAttribute("morphTarget"+L)!==X[q]&&f.setAttribute("morphTarget"+L,X[q]),y&&f.getAttribute("morphNormal"+L)!==y[q]&&f.setAttribute("morphNormal"+L,y[q]),r[L]=F,O+=F):(X&&f.hasAttribute("morphTarget"+L)===!0&&f.deleteAttribute("morphTarget"+L),y&&f.hasAttribute("morphNormal"+L)===!0&&f.deleteAttribute("morphNormal"+L),r[L]=0)}let D=f.morphTargetsRelative?1:1-O;p.getUniforms().setValue(s,"morphTargetBaseInfluence",D),p.getUniforms().setValue(s,"morphTargetInfluences",r)}}return{update:h}}function L8(s,e,t,n){let r=new WeakMap;function i(h){let d=n.render.frame,f=h.geometry,p=e.get(h,f);if(r.get(p)!==d&&(e.update(p),r.set(p,d)),h.isInstancedMesh&&(h.hasEventListener("dispose",o)===!1&&h.addEventListener("dispose",o),r.get(h)!==d&&(t.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,s.ARRAY_BUFFER),r.set(h,d))),h.isSkinnedMesh){let b=h.skeleton;r.get(b)!==d&&(b.update(),r.set(b,d))}return p}function c(){r=new WeakMap}function o(h){let d=h.target;d.removeEventListener("dispose",o),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:i,dispose:c}}var ml=class extends ur{constructor(e,t,n,r,i,c,o,h,d,f){if(f=f!==void 0?f:Pc,f!==Pc&&f!==Ma)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&f===Pc&&(n=Vs),n===void 0&&f===Ma&&(n=Hc),super(null,r,i,c,o,h,f,n,d),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Un,this.minFilter=h!==void 0?h:Un,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Cb=new ur,Wb=new ml(1,1);Wb.compareFunction=Eb;var Ub=new dl,Gb=new $d,Ab=new pl,G9=[],A9=[],k9=new Float32Array(16),K9=new Float32Array(9),B9=new Float32Array(4);function Va(s,e,t){let n=s[0];if(n<=0||n>0)return s;let r=e*t,i=G9[r];if(i===void 0&&(i=new Float32Array(r),G9[r]=i),e!==0){n.toArray(i,0);for(let c=1,o=0;c!==e;++c)o+=t,s[c].toArray(i,o)}return i}function An(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function kn(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Fl(s,e){let t=A9[e];t===void 0&&(t=new Int32Array(e),A9[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function M8(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function g8(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(An(t,e))return;s.uniform2fv(this.addr,e),kn(t,e)}}function j8(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(An(t,e))return;s.uniform3fv(this.addr,e),kn(t,e)}}function N8(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(An(t,e))return;s.uniform4fv(this.addr,e),kn(t,e)}}function T8(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(An(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),kn(t,e)}else{if(An(t,n))return;B9.set(n),s.uniformMatrix2fv(this.addr,!1,B9),kn(t,n)}}function S8(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(An(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),kn(t,e)}else{if(An(t,n))return;K9.set(n),s.uniformMatrix3fv(this.addr,!1,K9),kn(t,n)}}function V8(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(An(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),kn(t,e)}else{if(An(t,n))return;k9.set(n),s.uniformMatrix4fv(this.addr,!1,k9),kn(t,n)}}function E8(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function q8(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(An(t,e))return;s.uniform2iv(this.addr,e),kn(t,e)}}function F8(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(An(t,e))return;s.uniform3iv(this.addr,e),kn(t,e)}}function R8(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(An(t,e))return;s.uniform4iv(this.addr,e),kn(t,e)}}function I8(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function C8(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(An(t,e))return;s.uniform2uiv(this.addr,e),kn(t,e)}}function W8(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(An(t,e))return;s.uniform3uiv(this.addr,e),kn(t,e)}}function U8(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(An(t,e))return;s.uniform4uiv(this.addr,e),kn(t,e)}}function G8(s,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(s.uniform1i(this.addr,r),n[0]=r);let i=this.type===s.SAMPLER_2D_SHADOW?Wb:Cb;t.setTexture2D(e||i,r)}function A8(s,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(s.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Gb,r)}function k8(s,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(s.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Ab,r)}function K8(s,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(s.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Ub,r)}function B8(s){switch(s){case 5126:return M8;case 35664:return g8;case 35665:return j8;case 35666:return N8;case 35674:return T8;case 35675:return S8;case 35676:return V8;case 5124:case 35670:return E8;case 35667:case 35671:return q8;case 35668:case 35672:return F8;case 35669:case 35673:return R8;case 5125:return I8;case 36294:return C8;case 36295:return W8;case 36296:return U8;case 35678:case 36198:case 36298:case 36306:case 35682:return G8;case 35679:case 36299:case 36307:return A8;case 35680:case 36300:case 36308:case 36293:return k8;case 36289:case 36303:case 36311:case 36292:return K8}}function Z8(s,e){s.uniform1fv(this.addr,e)}function Y8(s,e){let t=Va(e,this.size,2);s.uniform2fv(this.addr,t)}function Q8(s,e){let t=Va(e,this.size,3);s.uniform3fv(this.addr,t)}function J8(s,e){let t=Va(e,this.size,4);s.uniform4fv(this.addr,t)}function _8(s,e){let t=Va(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function $8(s,e){let t=Va(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function e6(s,e){let t=Va(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function t6(s,e){s.uniform1iv(this.addr,e)}function n6(s,e){s.uniform2iv(this.addr,e)}function r6(s,e){s.uniform3iv(this.addr,e)}function i6(s,e){s.uniform4iv(this.addr,e)}function s6(s,e){s.uniform1uiv(this.addr,e)}function c6(s,e){s.uniform2uiv(this.addr,e)}function a6(s,e){s.uniform3uiv(this.addr,e)}function o6(s,e){s.uniform4uiv(this.addr,e)}function u6(s,e,t){let n=this.cache,r=e.length,i=Fl(t,r);An(n,i)||(s.uniform1iv(this.addr,i),kn(n,i));for(let c=0;c!==r;++c)t.setTexture2D(e[c]||Cb,i[c])}function l6(s,e,t){let n=this.cache,r=e.length,i=Fl(t,r);An(n,i)||(s.uniform1iv(this.addr,i),kn(n,i));for(let c=0;c!==r;++c)t.setTexture3D(e[c]||Gb,i[c])}function h6(s,e,t){let n=this.cache,r=e.length,i=Fl(t,r);An(n,i)||(s.uniform1iv(this.addr,i),kn(n,i));for(let c=0;c!==r;++c)t.setTextureCube(e[c]||Ab,i[c])}function d6(s,e,t){let n=this.cache,r=e.length,i=Fl(t,r);An(n,i)||(s.uniform1iv(this.addr,i),kn(n,i));for(let c=0;c!==r;++c)t.setTexture2DArray(e[c]||Ub,i[c])}function v6(s){switch(s){case 5126:return Z8;case 35664:return Y8;case 35665:return Q8;case 35666:return J8;case 35674:return _8;case 35675:return $8;case 35676:return e6;case 5124:case 35670:return t6;case 35667:case 35671:return n6;case 35668:case 35672:return r6;case 35669:case 35673:return i6;case 5125:return s6;case 36294:return c6;case 36295:return a6;case 36296:return o6;case 35678:case 36198:case 36298:case 36306:case 35682:return u6;case 35679:case 36299:case 36307:return l6;case 35680:case 36300:case 36308:case 36293:return h6;case 36289:case 36303:case 36311:case 36292:return d6}}var nv=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=B8(t.type)}},rv=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=v6(t.type)}},iv=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,c=r.length;i!==c;++i){let o=r[i];o.setValue(e,t[o.id],n)}}},Id=/(\w+)(\])?(\[|\.)?/g;function Z9(s,e){s.seq.push(e),s.map[e.id]=e}function f6(s,e,t){let n=s.name,r=n.length;for(Id.lastIndex=0;;){let i=Id.exec(n),c=Id.lastIndex,o=i[1],h=i[2]==="]",d=i[3];if(h&&(o=o|0),d===void 0||d==="["&&c+2===r){Z9(t,d===void 0?new nv(o,s,e):new rv(o,s,e));break}else{let p=t.map[o];p===void 0&&(p=new iv(o),Z9(t,p)),t=p}}}var za=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let i=e.getActiveUniform(t,r),c=e.getUniformLocation(t,i.name);f6(i,c,this)}}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,c=t.length;i!==c;++i){let o=t[i],h=n[o.id];h.needsUpdate!==!1&&o.setValue(e,h.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let c=e[r];c.id in t&&n.push(c)}return n}};function Y9(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var b6=37297,p6=0;function x6(s,e){let t=s.split(`
`),n=[],r=Math.max(e-6,0),i=Math.min(e+6,t.length);for(let c=r;c<i;c++){let o=c+1;n.push(`${o===e?">":" "} ${o}: ${t[c]}`)}return n.join(`
`)}function m6(s){let e=$t.getPrimaries($t.workingColorSpace),t=$t.getPrimaries(s),n;switch(e===t?n="":e===al&&t===cl?n="LinearDisplayP3ToLinearSRGB":e===cl&&t===al&&(n="LinearSRGBToLinearDisplayP3"),s){case Gn:case El:return[n,"LinearTransferOETF"];case jn:case Tv:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function Q9(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),r=s.getShaderInfoLog(e).trim();if(n&&r==="")return"";let i=/ERROR: 0:(\d+)/.exec(r);if(i){let c=parseInt(i[1]);return t.toUpperCase()+`

`+r+`

`+x6(s.getShaderSource(e),c)}else return r}function X6(s,e){let t=m6(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function w6(s,e){let t;switch(e){case ym:t="Linear";break;case zm:t="Reinhard";break;case Dm:t="OptimizedCineon";break;case Lm:t="ACESFilmic";break;case gm:t="AgX";break;case Mm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function O6(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ha).join(`
`)}function H6(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ha).join(`
`)}function P6(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function y6(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let i=s.getActiveAttrib(e,r),c=i.name,o=1;i.type===s.FLOAT_MAT2&&(o=2),i.type===s.FLOAT_MAT3&&(o=3),i.type===s.FLOAT_MAT4&&(o=4),t[c]={type:i.type,location:s.getAttribLocation(e,c),locationSize:o}}return t}function Ha(s){return s!==""}function J9(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function _9(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var z6=/^[ \t]*#include +<([\w\d./]+)>/gm;function sv(s){return s.replace(z6,L6)}var D6=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function L6(s,e){let t=kt[e];if(t===void 0){let n=D6.get(e);if(n!==void 0)t=kt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return sv(t)}var M6=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $9(s){return s.replace(M6,g6)}function g6(s,e,t,n){let r="";for(let i=parseInt(e);i<parseInt(t);i++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+i+" ]").replace(/UNROLLED_LOOP_INDEX/g,i);return r}function eb(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function j6(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===yb?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===_x?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ns&&(e="SHADOWMAP_TYPE_VSM"),e}function N6(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Da:case La:e="ENVMAP_TYPE_CUBE";break;case Sl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function T6(s){let e="ENVMAP_MODE_REFLECTION";return s.envMap&&s.envMapMode===La&&(e="ENVMAP_MODE_REFRACTION"),e}function S6(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Mv:e="ENVMAP_BLENDING_MULTIPLY";break;case Hm:e="ENVMAP_BLENDING_MIX";break;case Pm:e="ENVMAP_BLENDING_ADD";break}return e}function V6(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function E6(s,e,t,n){let r=s.getContext(),i=t.defines,c=t.vertexShader,o=t.fragmentShader,h=j6(t),d=N6(t),f=T6(t),p=S6(t),b=V6(t),H=t.isWebGL2?"":O6(t),P=H6(t),X=P6(i),y=r.createProgram(),O,D,L=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(O=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,X].filter(Ha).join(`
`),O.length>0&&(O+=`
`),D=[H,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,X].filter(Ha).join(`
`),D.length>0&&(D+=`
`)):(O=[eb(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,X,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ha).join(`
`),D=[H,eb(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,X,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.envMap?"#define "+f:"",t.envMap?"#define "+p:"",b?"#define CUBEUV_TEXEL_WIDTH "+b.texelWidth:"",b?"#define CUBEUV_TEXEL_HEIGHT "+b.texelHeight:"",b?"#define CUBEUV_MAX_MIP "+b.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Fs?"#define TONE_MAPPING":"",t.toneMapping!==Fs?kt.tonemapping_pars_fragment:"",t.toneMapping!==Fs?w6("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",kt.colorspace_pars_fragment,X6("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ha).join(`
`)),c=sv(c),c=J9(c,t),c=_9(c,t),o=sv(o),o=J9(o,t),o=_9(o,t),c=$9(c),o=$9(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,O=[P,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+O,D=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===X9?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===X9?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+D);let g=L+O+c,q=L+D+o,F=Y9(r,r.VERTEX_SHADER,g),T=Y9(r,r.FRAGMENT_SHADER,q);r.attachShader(y,F),r.attachShader(y,T),t.index0AttributeName!==void 0?r.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function C($){if(s.debug.checkShaderErrors){let J=r.getProgramInfoLog(y).trim(),U=r.getShaderInfoLog(F).trim(),Z=r.getShaderInfoLog(T).trim(),ee=!0,ae=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(ee=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(r,y,F,T);else{let oe=Q9(r,F,"vertex"),de=Q9(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Program Info Log: `+J+`
`+oe+`
`+de)}else J!==""?console.warn("THREE.WebGLProgram: Program Info Log:",J):(U===""||Z==="")&&(ae=!1);ae&&($.diagnostics={runnable:ee,programLog:J,vertexShader:{log:U,prefix:O},fragmentShader:{log:Z,prefix:D}})}r.deleteShader(F),r.deleteShader(T),M=new za(r,y),E=y6(r,y)}let M;this.getUniforms=function(){return M===void 0&&C(this),M};let E;this.getAttributes=function(){return E===void 0&&C(this),E};let W=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return W===!1&&(W=r.getProgramParameter(y,b6)),W},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=p6++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=F,this.fragmentShader=T,this}var q6=0,cv=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),i=this._getShaderStage(n),c=this._getShaderCacheForMaterial(e);return c.has(r)===!1&&(c.add(r),r.usedTimes++),c.has(i)===!1&&(c.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new av(e),t.set(e,n)),n}},av=class{constructor(e){this.id=q6++,this.code=e,this.usedTimes=0}};function F6(s,e,t,n,r,i,c){let o=new Mo,h=new cv,d=[],f=r.isWebGL2,p=r.logarithmicDepthBuffer,b=r.vertexTextures,H=r.precision,P={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function X(M){return M===0?"uv":`uv${M}`}function y(M,E,W,$,J){let U=$.fog,Z=J.geometry,ee=M.isMeshStandardMaterial?$.environment:null,ae=(M.isMeshStandardMaterial?t:e).get(M.envMap||ee),oe=ae&&ae.mapping===Sl?ae.image.height:null,de=P[M.type];M.precision!==null&&(H=r.getMaxPrecision(M.precision),H!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",H,"instead."));let le=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,se=le!==void 0?le.length:0,xe=0;Z.morphAttributes.position!==void 0&&(xe=1),Z.morphAttributes.normal!==void 0&&(xe=2),Z.morphAttributes.color!==void 0&&(xe=3);let me,Le,Se,rt;if(de){let xt=Di[de];me=xt.vertexShader,Le=xt.fragmentShader}else me=M.vertexShader,Le=M.fragmentShader,h.update(M),Se=h.getVertexShaderID(M),rt=h.getFragmentShaderID(M);let tt=s.getRenderTarget(),ot=J.isInstancedMesh===!0,Ot=J.isBatchedMesh===!0,Ze=!!M.map,Nt=!!M.matcap,De=!!ae,Kt=!!M.aoMap,fe=!!M.lightMap,Oe=!!M.bumpMap,Me=!!M.normalMap,ke=!!M.displacementMap,Ee=!!M.emissiveMap,Q=!!M.metalnessMap,A=!!M.roughnessMap,Pe=M.anisotropy>0,Ke=M.clearcoat>0,Ce=M.iridescence>0,_e=M.sheen>0,bt=M.transmission>0,Be=Pe&&!!M.anisotropyMap,ut=Ke&&!!M.clearcoatMap,Pt=Ke&&!!M.clearcoatNormalMap,yt=Ke&&!!M.clearcoatRoughnessMap,qe=Ce&&!!M.iridescenceMap,It=Ce&&!!M.iridescenceThicknessMap,Et=_e&&!!M.sheenColorMap,jt=_e&&!!M.sheenRoughnessMap,Ht=!!M.specularMap,dt=!!M.specularColorMap,ie=!!M.specularIntensityMap,Qe=bt&&!!M.transmissionMap,mt=bt&&!!M.thicknessMap,at=!!M.gradientMap,R=!!M.alphaMap,be=M.alphaTest>0,nt=!!M.alphaHash,Y=!!M.extensions,ze=!!Z.attributes.uv1,Ge=!!Z.attributes.uv2,st=!!Z.attributes.uv3,it=Fs;return M.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(it=s.toneMapping),{isWebGL2:f,shaderID:de,shaderType:M.type,shaderName:M.name,vertexShader:me,fragmentShader:Le,defines:M.defines,customVertexShaderID:Se,customFragmentShaderID:rt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:H,batching:Ot,instancing:ot,instancingColor:ot&&J.instanceColor!==null,supportsVertexTextures:b,outputColorSpace:tt===null?s.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:Gn,map:Ze,matcap:Nt,envMap:De,envMapMode:De&&ae.mapping,envMapCubeUVHeight:oe,aoMap:Kt,lightMap:fe,bumpMap:Oe,normalMap:Me,displacementMap:b&&ke,emissiveMap:Ee,normalMapObjectSpace:Me&&M.normalMapType===Um,normalMapTangentSpace:Me&&M.normalMapType===Nv,metalnessMap:Q,roughnessMap:A,anisotropy:Pe,anisotropyMap:Be,clearcoat:Ke,clearcoatMap:ut,clearcoatNormalMap:Pt,clearcoatRoughnessMap:yt,iridescence:Ce,iridescenceMap:qe,iridescenceThicknessMap:It,sheen:_e,sheenColorMap:Et,sheenRoughnessMap:jt,specularMap:Ht,specularColorMap:dt,specularIntensityMap:ie,transmission:bt,transmissionMap:Qe,thicknessMap:mt,gradientMap:at,opaque:M.transparent===!1&&M.blending===Pa,alphaMap:R,alphaTest:be,alphaHash:nt,combine:M.combine,mapUv:Ze&&X(M.map.channel),aoMapUv:Kt&&X(M.aoMap.channel),lightMapUv:fe&&X(M.lightMap.channel),bumpMapUv:Oe&&X(M.bumpMap.channel),normalMapUv:Me&&X(M.normalMap.channel),displacementMapUv:ke&&X(M.displacementMap.channel),emissiveMapUv:Ee&&X(M.emissiveMap.channel),metalnessMapUv:Q&&X(M.metalnessMap.channel),roughnessMapUv:A&&X(M.roughnessMap.channel),anisotropyMapUv:Be&&X(M.anisotropyMap.channel),clearcoatMapUv:ut&&X(M.clearcoatMap.channel),clearcoatNormalMapUv:Pt&&X(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:yt&&X(M.clearcoatRoughnessMap.channel),iridescenceMapUv:qe&&X(M.iridescenceMap.channel),iridescenceThicknessMapUv:It&&X(M.iridescenceThicknessMap.channel),sheenColorMapUv:Et&&X(M.sheenColorMap.channel),sheenRoughnessMapUv:jt&&X(M.sheenRoughnessMap.channel),specularMapUv:Ht&&X(M.specularMap.channel),specularColorMapUv:dt&&X(M.specularColorMap.channel),specularIntensityMapUv:ie&&X(M.specularIntensityMap.channel),transmissionMapUv:Qe&&X(M.transmissionMap.channel),thicknessMapUv:mt&&X(M.thicknessMap.channel),alphaMapUv:R&&X(M.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(Me||Pe),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,vertexUv1s:ze,vertexUv2s:Ge,vertexUv3s:st,pointsUvs:J.isPoints===!0&&!!Z.attributes.uv&&(Ze||R),fog:!!U,useFog:M.fog===!0,fogExp2:U&&U.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:p,skinning:J.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:xe,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&W.length>0,shadowMapType:s.shadowMap.type,toneMapping:it,useLegacyLights:s._useLegacyLights,decodeVideoTexture:Ze&&M.map.isVideoTexture===!0&&$t.getTransfer(M.map.colorSpace)===Xn,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Vr,flipSided:M.side===Lr,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:Y&&M.extensions.derivatives===!0,extensionFragDepth:Y&&M.extensions.fragDepth===!0,extensionDrawBuffers:Y&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:Y&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Y&&M.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:f||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function O(M){let E=[];if(M.shaderID?E.push(M.shaderID):(E.push(M.customVertexShaderID),E.push(M.customFragmentShaderID)),M.defines!==void 0)for(let W in M.defines)E.push(W),E.push(M.defines[W]);return M.isRawShaderMaterial===!1&&(D(E,M),L(E,M),E.push(s.outputColorSpace)),E.push(M.customProgramCacheKey),E.join()}function D(M,E){M.push(E.precision),M.push(E.outputColorSpace),M.push(E.envMapMode),M.push(E.envMapCubeUVHeight),M.push(E.mapUv),M.push(E.alphaMapUv),M.push(E.lightMapUv),M.push(E.aoMapUv),M.push(E.bumpMapUv),M.push(E.normalMapUv),M.push(E.displacementMapUv),M.push(E.emissiveMapUv),M.push(E.metalnessMapUv),M.push(E.roughnessMapUv),M.push(E.anisotropyMapUv),M.push(E.clearcoatMapUv),M.push(E.clearcoatNormalMapUv),M.push(E.clearcoatRoughnessMapUv),M.push(E.iridescenceMapUv),M.push(E.iridescenceThicknessMapUv),M.push(E.sheenColorMapUv),M.push(E.sheenRoughnessMapUv),M.push(E.specularMapUv),M.push(E.specularColorMapUv),M.push(E.specularIntensityMapUv),M.push(E.transmissionMapUv),M.push(E.thicknessMapUv),M.push(E.combine),M.push(E.fogExp2),M.push(E.sizeAttenuation),M.push(E.morphTargetsCount),M.push(E.morphAttributeCount),M.push(E.numDirLights),M.push(E.numPointLights),M.push(E.numSpotLights),M.push(E.numSpotLightMaps),M.push(E.numHemiLights),M.push(E.numRectAreaLights),M.push(E.numDirLightShadows),M.push(E.numPointLightShadows),M.push(E.numSpotLightShadows),M.push(E.numSpotLightShadowsWithMaps),M.push(E.numLightProbes),M.push(E.shadowMapType),M.push(E.toneMapping),M.push(E.numClippingPlanes),M.push(E.numClipIntersection),M.push(E.depthPacking)}function L(M,E){o.disableAll(),E.isWebGL2&&o.enable(0),E.supportsVertexTextures&&o.enable(1),E.instancing&&o.enable(2),E.instancingColor&&o.enable(3),E.matcap&&o.enable(4),E.envMap&&o.enable(5),E.normalMapObjectSpace&&o.enable(6),E.normalMapTangentSpace&&o.enable(7),E.clearcoat&&o.enable(8),E.iridescence&&o.enable(9),E.alphaTest&&o.enable(10),E.vertexColors&&o.enable(11),E.vertexAlphas&&o.enable(12),E.vertexUv1s&&o.enable(13),E.vertexUv2s&&o.enable(14),E.vertexUv3s&&o.enable(15),E.vertexTangents&&o.enable(16),E.anisotropy&&o.enable(17),E.alphaHash&&o.enable(18),E.batching&&o.enable(19),M.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.skinning&&o.enable(4),E.morphTargets&&o.enable(5),E.morphNormals&&o.enable(6),E.morphColors&&o.enable(7),E.premultipliedAlpha&&o.enable(8),E.shadowMapEnabled&&o.enable(9),E.useLegacyLights&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),M.push(o.mask)}function g(M){let E=P[M.type],W;if(E){let $=Di[E];W=D5.clone($.uniforms)}else W=M.uniforms;return W}function q(M,E){let W;for(let $=0,J=d.length;$<J;$++){let U=d[$];if(U.cacheKey===E){W=U,++W.usedTimes;break}}return W===void 0&&(W=new E6(s,E,M,i),d.push(W)),W}function F(M){if(--M.usedTimes===0){let E=d.indexOf(M);d[E]=d[d.length-1],d.pop(),M.destroy()}}function T(M){h.remove(M)}function C(){h.dispose()}return{getParameters:y,getProgramCacheKey:O,getUniforms:g,acquireProgram:q,releaseProgram:F,releaseShaderCache:T,programs:d,dispose:C}}function R6(){let s=new WeakMap;function e(i){let c=s.get(i);return c===void 0&&(c={},s.set(i,c)),c}function t(i){s.delete(i)}function n(i,c,o){s.get(i)[c]=o}function r(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function I6(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function tb(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function nb(){let s=[],e=0,t=[],n=[],r=[];function i(){e=0,t.length=0,n.length=0,r.length=0}function c(p,b,H,P,X,y){let O=s[e];return O===void 0?(O={id:p.id,object:p,geometry:b,material:H,groupOrder:P,renderOrder:p.renderOrder,z:X,group:y},s[e]=O):(O.id=p.id,O.object=p,O.geometry=b,O.material=H,O.groupOrder=P,O.renderOrder=p.renderOrder,O.z=X,O.group=y),e++,O}function o(p,b,H,P,X,y){let O=c(p,b,H,P,X,y);H.transmission>0?n.push(O):H.transparent===!0?r.push(O):t.push(O)}function h(p,b,H,P,X,y){let O=c(p,b,H,P,X,y);H.transmission>0?n.unshift(O):H.transparent===!0?r.unshift(O):t.unshift(O)}function d(p,b){t.length>1&&t.sort(p||I6),n.length>1&&n.sort(b||tb),r.length>1&&r.sort(b||tb)}function f(){for(let p=e,b=s.length;p<b;p++){let H=s[p];if(H.id===null)break;H.id=null,H.object=null,H.geometry=null,H.material=null,H.group=null}}return{opaque:t,transmissive:n,transparent:r,init:i,push:o,unshift:h,finish:f,sort:d}}function C6(){let s=new WeakMap;function e(n,r){let i=s.get(n),c;return i===void 0?(c=new nb,s.set(n,[c])):r>=i.length?(c=new nb,i.push(c)):c=i[r],c}function t(){s=new WeakMap}return{get:e,dispose:t}}function W6(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ce,color:new Ft};break;case"SpotLight":t={position:new ce,direction:new ce,color:new Ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ce,color:new Ft,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ce,skyColor:new Ft,groundColor:new Ft};break;case"RectAreaLight":t={color:new Ft,position:new ce,halfWidth:new ce,halfHeight:new ce};break}return s[e.id]=t,t}}}function U6(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var G6=0;function A6(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function k6(s,e){let t=new W6,n=U6(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)r.probe.push(new ce);let i=new ce,c=new Gt,o=new Gt;function h(f,p){let b=0,H=0,P=0;for(let $=0;$<9;$++)r.probe[$].set(0,0,0);let X=0,y=0,O=0,D=0,L=0,g=0,q=0,F=0,T=0,C=0,M=0;f.sort(A6);let E=p===!0?Math.PI:1;for(let $=0,J=f.length;$<J;$++){let U=f[$],Z=U.color,ee=U.intensity,ae=U.distance,oe=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)b+=Z.r*ee*E,H+=Z.g*ee*E,P+=Z.b*ee*E;else if(U.isLightProbe){for(let de=0;de<9;de++)r.probe[de].addScaledVector(U.sh.coefficients[de],ee);M++}else if(U.isDirectionalLight){let de=t.get(U);if(de.color.copy(U.color).multiplyScalar(U.intensity*E),U.castShadow){let le=U.shadow,se=n.get(U);se.shadowBias=le.bias,se.shadowNormalBias=le.normalBias,se.shadowRadius=le.radius,se.shadowMapSize=le.mapSize,r.directionalShadow[X]=se,r.directionalShadowMap[X]=oe,r.directionalShadowMatrix[X]=U.shadow.matrix,g++}r.directional[X]=de,X++}else if(U.isSpotLight){let de=t.get(U);de.position.setFromMatrixPosition(U.matrixWorld),de.color.copy(Z).multiplyScalar(ee*E),de.distance=ae,de.coneCos=Math.cos(U.angle),de.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),de.decay=U.decay,r.spot[O]=de;let le=U.shadow;if(U.map&&(r.spotLightMap[T]=U.map,T++,le.updateMatrices(U),U.castShadow&&C++),r.spotLightMatrix[O]=le.matrix,U.castShadow){let se=n.get(U);se.shadowBias=le.bias,se.shadowNormalBias=le.normalBias,se.shadowRadius=le.radius,se.shadowMapSize=le.mapSize,r.spotShadow[O]=se,r.spotShadowMap[O]=oe,F++}O++}else if(U.isRectAreaLight){let de=t.get(U);de.color.copy(Z).multiplyScalar(ee),de.halfWidth.set(U.width*.5,0,0),de.halfHeight.set(0,U.height*.5,0),r.rectArea[D]=de,D++}else if(U.isPointLight){let de=t.get(U);if(de.color.copy(U.color).multiplyScalar(U.intensity*E),de.distance=U.distance,de.decay=U.decay,U.castShadow){let le=U.shadow,se=n.get(U);se.shadowBias=le.bias,se.shadowNormalBias=le.normalBias,se.shadowRadius=le.radius,se.shadowMapSize=le.mapSize,se.shadowCameraNear=le.camera.near,se.shadowCameraFar=le.camera.far,r.pointShadow[y]=se,r.pointShadowMap[y]=oe,r.pointShadowMatrix[y]=U.shadow.matrix,q++}r.point[y]=de,y++}else if(U.isHemisphereLight){let de=t.get(U);de.skyColor.copy(U.color).multiplyScalar(ee*E),de.groundColor.copy(U.groundColor).multiplyScalar(ee*E),r.hemi[L]=de,L++}}D>0&&(e.isWebGL2?s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=vt.LTC_FLOAT_1,r.rectAreaLTC2=vt.LTC_FLOAT_2):(r.rectAreaLTC1=vt.LTC_HALF_1,r.rectAreaLTC2=vt.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=vt.LTC_FLOAT_1,r.rectAreaLTC2=vt.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=vt.LTC_HALF_1,r.rectAreaLTC2=vt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=b,r.ambient[1]=H,r.ambient[2]=P;let W=r.hash;(W.directionalLength!==X||W.pointLength!==y||W.spotLength!==O||W.rectAreaLength!==D||W.hemiLength!==L||W.numDirectionalShadows!==g||W.numPointShadows!==q||W.numSpotShadows!==F||W.numSpotMaps!==T||W.numLightProbes!==M)&&(r.directional.length=X,r.spot.length=O,r.rectArea.length=D,r.point.length=y,r.hemi.length=L,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.pointShadow.length=q,r.pointShadowMap.length=q,r.spotShadow.length=F,r.spotShadowMap.length=F,r.directionalShadowMatrix.length=g,r.pointShadowMatrix.length=q,r.spotLightMatrix.length=F+T-C,r.spotLightMap.length=T,r.numSpotLightShadowsWithMaps=C,r.numLightProbes=M,W.directionalLength=X,W.pointLength=y,W.spotLength=O,W.rectAreaLength=D,W.hemiLength=L,W.numDirectionalShadows=g,W.numPointShadows=q,W.numSpotShadows=F,W.numSpotMaps=T,W.numLightProbes=M,r.version=G6++)}function d(f,p){let b=0,H=0,P=0,X=0,y=0,O=p.matrixWorldInverse;for(let D=0,L=f.length;D<L;D++){let g=f[D];if(g.isDirectionalLight){let q=r.directional[b];q.direction.setFromMatrixPosition(g.matrixWorld),i.setFromMatrixPosition(g.target.matrixWorld),q.direction.sub(i),q.direction.transformDirection(O),b++}else if(g.isSpotLight){let q=r.spot[P];q.position.setFromMatrixPosition(g.matrixWorld),q.position.applyMatrix4(O),q.direction.setFromMatrixPosition(g.matrixWorld),i.setFromMatrixPosition(g.target.matrixWorld),q.direction.sub(i),q.direction.transformDirection(O),P++}else if(g.isRectAreaLight){let q=r.rectArea[X];q.position.setFromMatrixPosition(g.matrixWorld),q.position.applyMatrix4(O),o.identity(),c.copy(g.matrixWorld),c.premultiply(O),o.extractRotation(c),q.halfWidth.set(g.width*.5,0,0),q.halfHeight.set(0,g.height*.5,0),q.halfWidth.applyMatrix4(o),q.halfHeight.applyMatrix4(o),X++}else if(g.isPointLight){let q=r.point[H];q.position.setFromMatrixPosition(g.matrixWorld),q.position.applyMatrix4(O),H++}else if(g.isHemisphereLight){let q=r.hemi[y];q.direction.setFromMatrixPosition(g.matrixWorld),q.direction.transformDirection(O),y++}}}return{setup:h,setupView:d,state:r}}function rb(s,e){let t=new k6(s,e),n=[],r=[];function i(){n.length=0,r.length=0}function c(p){n.push(p)}function o(p){r.push(p)}function h(p){t.setup(n,p)}function d(p){t.setupView(n,p)}return{init:i,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:h,setupLightsView:d,pushLight:c,pushShadow:o}}function K6(s,e){let t=new WeakMap;function n(i,c=0){let o=t.get(i),h;return o===void 0?(h=new rb(s,e),t.set(i,[h])):c>=o.length?(h=new rb(s,e),o.push(h)):h=o[c],h}function r(){t=new WeakMap}return{get:n,dispose:r}}var ov=class extends nr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Cm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},uv=class extends nr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},B6=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Z6=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Y6(s,e,t){let n=new go,r=new Rt,i=new Rt,c=new hn,o=new ov({depthPacking:Wm}),h=new uv,d={},f=t.maxTextureSize,p={[Mi]:Lr,[Lr]:Mi,[Vr]:Vr},b=new as({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Rt},radius:{value:4}},vertexShader:B6,fragmentShader:Z6}),H=b.clone();H.defines.HORIZONTAL_PASS=1;let P=new Hn;P.setAttribute("position",new Nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let X=new ht(P,b),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yb;let O=this.type;this.render=function(F,T,C){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||F.length===0)return;let M=s.getRenderTarget(),E=s.getActiveCubeFace(),W=s.getActiveMipmapLevel(),$=s.state;$.setBlending(qs),$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);let J=O!==ns&&this.type===ns,U=O===ns&&this.type!==ns;for(let Z=0,ee=F.length;Z<ee;Z++){let ae=F[Z],oe=ae.shadow;if(oe===void 0){console.warn("THREE.WebGLShadowMap:",ae,"has no shadow.");continue}if(oe.autoUpdate===!1&&oe.needsUpdate===!1)continue;r.copy(oe.mapSize);let de=oe.getFrameExtents();if(r.multiply(de),i.copy(oe.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(i.x=Math.floor(f/de.x),r.x=i.x*de.x,oe.mapSize.x=i.x),r.y>f&&(i.y=Math.floor(f/de.y),r.y=i.y*de.y,oe.mapSize.y=i.y)),oe.map===null||J===!0||U===!0){let se=this.type!==ns?{minFilter:Un,magFilter:Un}:{};oe.map!==null&&oe.map.dispose(),oe.map=new ss(r.x,r.y,se),oe.map.texture.name=ae.name+".shadowMap",oe.camera.updateProjectionMatrix()}s.setRenderTarget(oe.map),s.clear();let le=oe.getViewportCount();for(let se=0;se<le;se++){let xe=oe.getViewport(se);c.set(i.x*xe.x,i.y*xe.y,i.x*xe.z,i.y*xe.w),$.viewport(c),oe.updateMatrices(ae,se),n=oe.getFrustum(),g(T,C,oe.camera,ae,this.type)}oe.isPointLightShadow!==!0&&this.type===ns&&D(oe,C),oe.needsUpdate=!1}O=this.type,y.needsUpdate=!1,s.setRenderTarget(M,E,W)};function D(F,T){let C=e.update(X);b.defines.VSM_SAMPLES!==F.blurSamples&&(b.defines.VSM_SAMPLES=F.blurSamples,H.defines.VSM_SAMPLES=F.blurSamples,b.needsUpdate=!0,H.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new ss(r.x,r.y)),b.uniforms.shadow_pass.value=F.map.texture,b.uniforms.resolution.value=F.mapSize,b.uniforms.radius.value=F.radius,s.setRenderTarget(F.mapPass),s.clear(),s.renderBufferDirect(T,null,C,b,X,null),H.uniforms.shadow_pass.value=F.mapPass.texture,H.uniforms.resolution.value=F.mapSize,H.uniforms.radius.value=F.radius,s.setRenderTarget(F.map),s.clear(),s.renderBufferDirect(T,null,C,H,X,null)}function L(F,T,C,M){let E=null,W=C.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(W!==void 0)E=W;else if(E=C.isPointLight===!0?h:o,s.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let $=E.uuid,J=T.uuid,U=d[$];U===void 0&&(U={},d[$]=U);let Z=U[J];Z===void 0&&(Z=E.clone(),U[J]=Z,T.addEventListener("dispose",q)),E=Z}if(E.visible=T.visible,E.wireframe=T.wireframe,M===ns?E.side=T.shadowSide!==null?T.shadowSide:T.side:E.side=T.shadowSide!==null?T.shadowSide:p[T.side],E.alphaMap=T.alphaMap,E.alphaTest=T.alphaTest,E.map=T.map,E.clipShadows=T.clipShadows,E.clippingPlanes=T.clippingPlanes,E.clipIntersection=T.clipIntersection,E.displacementMap=T.displacementMap,E.displacementScale=T.displacementScale,E.displacementBias=T.displacementBias,E.wireframeLinewidth=T.wireframeLinewidth,E.linewidth=T.linewidth,C.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let $=s.properties.get(E);$.light=C}return E}function g(F,T,C,M,E){if(F.visible===!1)return;if(F.layers.test(T.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&E===ns)&&(!F.frustumCulled||n.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,F.matrixWorld);let J=e.update(F),U=F.material;if(Array.isArray(U)){let Z=J.groups;for(let ee=0,ae=Z.length;ee<ae;ee++){let oe=Z[ee],de=U[oe.materialIndex];if(de&&de.visible){let le=L(F,de,M,E);F.onBeforeShadow(s,F,T,C,J,le,oe),s.renderBufferDirect(C,null,J,le,F,oe),F.onAfterShadow(s,F,T,C,J,le,oe)}}}else if(U.visible){let Z=L(F,U,M,E);F.onBeforeShadow(s,F,T,C,J,Z,null),s.renderBufferDirect(C,null,J,Z,F,null),F.onAfterShadow(s,F,T,C,J,Z,null)}}let $=F.children;for(let J=0,U=$.length;J<U;J++)g($[J],T,C,M,E)}function q(F){F.target.removeEventListener("dispose",q);for(let C in d){let M=d[C],E=F.target.uuid;E in M&&(M[E].dispose(),delete M[E])}}}function Q6(s,e,t){let n=t.isWebGL2;function r(){let be=!1,nt=new hn,Y=null,ze=new hn(0,0,0,0);return{setMask:function(Ge){Y!==Ge&&!be&&(s.colorMask(Ge,Ge,Ge,Ge),Y=Ge)},setLocked:function(Ge){be=Ge},setClear:function(Ge,st,it,lt,xt){xt===!0&&(Ge*=lt,st*=lt,it*=lt),nt.set(Ge,st,it,lt),ze.equals(nt)===!1&&(s.clearColor(Ge,st,it,lt),ze.copy(nt))},reset:function(){be=!1,Y=null,ze.set(-1,0,0,0)}}}function i(){let be=!1,nt=null,Y=null,ze=null;return{setTest:function(Ge){Ge?Ot(s.DEPTH_TEST):Ze(s.DEPTH_TEST)},setMask:function(Ge){nt!==Ge&&!be&&(s.depthMask(Ge),nt=Ge)},setFunc:function(Ge){if(Y!==Ge){switch(Ge){case bm:s.depthFunc(s.NEVER);break;case pm:s.depthFunc(s.ALWAYS);break;case xm:s.depthFunc(s.LESS);break;case rl:s.depthFunc(s.LEQUAL);break;case mm:s.depthFunc(s.EQUAL);break;case Xm:s.depthFunc(s.GEQUAL);break;case wm:s.depthFunc(s.GREATER);break;case Om:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Y=Ge}},setLocked:function(Ge){be=Ge},setClear:function(Ge){ze!==Ge&&(s.clearDepth(Ge),ze=Ge)},reset:function(){be=!1,nt=null,Y=null,ze=null}}}function c(){let be=!1,nt=null,Y=null,ze=null,Ge=null,st=null,it=null,lt=null,xt=null;return{setTest:function(Xt){be||(Xt?Ot(s.STENCIL_TEST):Ze(s.STENCIL_TEST))},setMask:function(Xt){nt!==Xt&&!be&&(s.stencilMask(Xt),nt=Xt)},setFunc:function(Xt,Ct,_t){(Y!==Xt||ze!==Ct||Ge!==_t)&&(s.stencilFunc(Xt,Ct,_t),Y=Xt,ze=Ct,Ge=_t)},setOp:function(Xt,Ct,_t){(st!==Xt||it!==Ct||lt!==_t)&&(s.stencilOp(Xt,Ct,_t),st=Xt,it=Ct,lt=_t)},setLocked:function(Xt){be=Xt},setClear:function(Xt){xt!==Xt&&(s.clearStencil(Xt),xt=Xt)},reset:function(){be=!1,nt=null,Y=null,ze=null,Ge=null,st=null,it=null,lt=null,xt=null}}}let o=new r,h=new i,d=new c,f=new WeakMap,p=new WeakMap,b={},H={},P=new WeakMap,X=[],y=null,O=!1,D=null,L=null,g=null,q=null,F=null,T=null,C=null,M=new Ft(0,0,0),E=0,W=!1,$=null,J=null,U=null,Z=null,ee=null,ae=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),oe=!1,de=0,le=s.getParameter(s.VERSION);le.indexOf("WebGL")!==-1?(de=parseFloat(/^WebGL (\d)/.exec(le)[1]),oe=de>=1):le.indexOf("OpenGL ES")!==-1&&(de=parseFloat(/^OpenGL ES (\d)/.exec(le)[1]),oe=de>=2);let se=null,xe={},me=s.getParameter(s.SCISSOR_BOX),Le=s.getParameter(s.VIEWPORT),Se=new hn().fromArray(me),rt=new hn().fromArray(Le);function tt(be,nt,Y,ze){let Ge=new Uint8Array(4),st=s.createTexture();s.bindTexture(be,st),s.texParameteri(be,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(be,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let it=0;it<Y;it++)n&&(be===s.TEXTURE_3D||be===s.TEXTURE_2D_ARRAY)?s.texImage3D(nt,0,s.RGBA,1,1,ze,0,s.RGBA,s.UNSIGNED_BYTE,Ge):s.texImage2D(nt+it,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ge);return st}let ot={};ot[s.TEXTURE_2D]=tt(s.TEXTURE_2D,s.TEXTURE_2D,1),ot[s.TEXTURE_CUBE_MAP]=tt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(ot[s.TEXTURE_2D_ARRAY]=tt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ot[s.TEXTURE_3D]=tt(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),h.setClear(1),d.setClear(0),Ot(s.DEPTH_TEST),h.setFunc(rl),Ee(!1),Q(F2),Ot(s.CULL_FACE),Me(qs);function Ot(be){b[be]!==!0&&(s.enable(be),b[be]=!0)}function Ze(be){b[be]!==!1&&(s.disable(be),b[be]=!1)}function Nt(be,nt){return H[be]!==nt?(s.bindFramebuffer(be,nt),H[be]=nt,n&&(be===s.DRAW_FRAMEBUFFER&&(H[s.FRAMEBUFFER]=nt),be===s.FRAMEBUFFER&&(H[s.DRAW_FRAMEBUFFER]=nt)),!0):!1}function De(be,nt){let Y=X,ze=!1;if(be)if(Y=P.get(nt),Y===void 0&&(Y=[],P.set(nt,Y)),be.isWebGLMultipleRenderTargets){let Ge=be.texture;if(Y.length!==Ge.length||Y[0]!==s.COLOR_ATTACHMENT0){for(let st=0,it=Ge.length;st<it;st++)Y[st]=s.COLOR_ATTACHMENT0+st;Y.length=Ge.length,ze=!0}}else Y[0]!==s.COLOR_ATTACHMENT0&&(Y[0]=s.COLOR_ATTACHMENT0,ze=!0);else Y[0]!==s.BACK&&(Y[0]=s.BACK,ze=!0);ze&&(t.isWebGL2?s.drawBuffers(Y):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Y))}function Kt(be){return y!==be?(s.useProgram(be),y=be,!0):!1}let fe={[wc]:s.FUNC_ADD,[em]:s.FUNC_SUBTRACT,[tm]:s.FUNC_REVERSE_SUBTRACT};if(n)fe[W2]=s.MIN,fe[U2]=s.MAX;else{let be=e.get("EXT_blend_minmax");be!==null&&(fe[W2]=be.MIN_EXT,fe[U2]=be.MAX_EXT)}let Oe={[nm]:s.ZERO,[rm]:s.ONE,[im]:s.SRC_COLOR,[kd]:s.SRC_ALPHA,[lm]:s.SRC_ALPHA_SATURATE,[om]:s.DST_COLOR,[cm]:s.DST_ALPHA,[sm]:s.ONE_MINUS_SRC_COLOR,[Kd]:s.ONE_MINUS_SRC_ALPHA,[um]:s.ONE_MINUS_DST_COLOR,[am]:s.ONE_MINUS_DST_ALPHA,[hm]:s.CONSTANT_COLOR,[dm]:s.ONE_MINUS_CONSTANT_COLOR,[vm]:s.CONSTANT_ALPHA,[fm]:s.ONE_MINUS_CONSTANT_ALPHA};function Me(be,nt,Y,ze,Ge,st,it,lt,xt,Xt){if(be===qs){O===!0&&(Ze(s.BLEND),O=!1);return}if(O===!1&&(Ot(s.BLEND),O=!0),be!==$x){if(be!==D||Xt!==W){if((L!==wc||F!==wc)&&(s.blendEquation(s.FUNC_ADD),L=wc,F=wc),Xt)switch(be){case Pa:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case R2:s.blendFunc(s.ONE,s.ONE);break;case I2:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case C2:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",be);break}else switch(be){case Pa:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case R2:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case I2:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case C2:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",be);break}g=null,q=null,T=null,C=null,M.set(0,0,0),E=0,D=be,W=Xt}return}Ge=Ge||nt,st=st||Y,it=it||ze,(nt!==L||Ge!==F)&&(s.blendEquationSeparate(fe[nt],fe[Ge]),L=nt,F=Ge),(Y!==g||ze!==q||st!==T||it!==C)&&(s.blendFuncSeparate(Oe[Y],Oe[ze],Oe[st],Oe[it]),g=Y,q=ze,T=st,C=it),(lt.equals(M)===!1||xt!==E)&&(s.blendColor(lt.r,lt.g,lt.b,xt),M.copy(lt),E=xt),D=be,W=!1}function ke(be,nt){be.side===Vr?Ze(s.CULL_FACE):Ot(s.CULL_FACE);let Y=be.side===Lr;nt&&(Y=!Y),Ee(Y),be.blending===Pa&&be.transparent===!1?Me(qs):Me(be.blending,be.blendEquation,be.blendSrc,be.blendDst,be.blendEquationAlpha,be.blendSrcAlpha,be.blendDstAlpha,be.blendColor,be.blendAlpha,be.premultipliedAlpha),h.setFunc(be.depthFunc),h.setTest(be.depthTest),h.setMask(be.depthWrite),o.setMask(be.colorWrite);let ze=be.stencilWrite;d.setTest(ze),ze&&(d.setMask(be.stencilWriteMask),d.setFunc(be.stencilFunc,be.stencilRef,be.stencilFuncMask),d.setOp(be.stencilFail,be.stencilZFail,be.stencilZPass)),Pe(be.polygonOffset,be.polygonOffsetFactor,be.polygonOffsetUnits),be.alphaToCoverage===!0?Ot(s.SAMPLE_ALPHA_TO_COVERAGE):Ze(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ee(be){$!==be&&(be?s.frontFace(s.CW):s.frontFace(s.CCW),$=be)}function Q(be){be!==Qx?(Ot(s.CULL_FACE),be!==J&&(be===F2?s.cullFace(s.BACK):be===Jx?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ze(s.CULL_FACE),J=be}function A(be){be!==U&&(oe&&s.lineWidth(be),U=be)}function Pe(be,nt,Y){be?(Ot(s.POLYGON_OFFSET_FILL),(Z!==nt||ee!==Y)&&(s.polygonOffset(nt,Y),Z=nt,ee=Y)):Ze(s.POLYGON_OFFSET_FILL)}function Ke(be){be?Ot(s.SCISSOR_TEST):Ze(s.SCISSOR_TEST)}function Ce(be){be===void 0&&(be=s.TEXTURE0+ae-1),se!==be&&(s.activeTexture(be),se=be)}function _e(be,nt,Y){Y===void 0&&(se===null?Y=s.TEXTURE0+ae-1:Y=se);let ze=xe[Y];ze===void 0&&(ze={type:void 0,texture:void 0},xe[Y]=ze),(ze.type!==be||ze.texture!==nt)&&(se!==Y&&(s.activeTexture(Y),se=Y),s.bindTexture(be,nt||ot[be]),ze.type=be,ze.texture=nt)}function bt(){let be=xe[se];be!==void 0&&be.type!==void 0&&(s.bindTexture(be.type,null),be.type=void 0,be.texture=void 0)}function Be(){try{s.compressedTexImage2D.apply(s,arguments)}catch(be){console.error("THREE.WebGLState:",be)}}function ut(){try{s.compressedTexImage3D.apply(s,arguments)}catch(be){console.error("THREE.WebGLState:",be)}}function Pt(){try{s.texSubImage2D.apply(s,arguments)}catch(be){console.error("THREE.WebGLState:",be)}}function yt(){try{s.texSubImage3D.apply(s,arguments)}catch(be){console.error("THREE.WebGLState:",be)}}function qe(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(be){console.error("THREE.WebGLState:",be)}}function It(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(be){console.error("THREE.WebGLState:",be)}}function Et(){try{s.texStorage2D.apply(s,arguments)}catch(be){console.error("THREE.WebGLState:",be)}}function jt(){try{s.texStorage3D.apply(s,arguments)}catch(be){console.error("THREE.WebGLState:",be)}}function Ht(){try{s.texImage2D.apply(s,arguments)}catch(be){console.error("THREE.WebGLState:",be)}}function dt(){try{s.texImage3D.apply(s,arguments)}catch(be){console.error("THREE.WebGLState:",be)}}function ie(be){Se.equals(be)===!1&&(s.scissor(be.x,be.y,be.z,be.w),Se.copy(be))}function Qe(be){rt.equals(be)===!1&&(s.viewport(be.x,be.y,be.z,be.w),rt.copy(be))}function mt(be,nt){let Y=p.get(nt);Y===void 0&&(Y=new WeakMap,p.set(nt,Y));let ze=Y.get(be);ze===void 0&&(ze=s.getUniformBlockIndex(nt,be.name),Y.set(be,ze))}function at(be,nt){let ze=p.get(nt).get(be);f.get(nt)!==ze&&(s.uniformBlockBinding(nt,ze,be.__bindingPointIndex),f.set(nt,ze))}function R(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),b={},se=null,xe={},H={},P=new WeakMap,X=[],y=null,O=!1,D=null,L=null,g=null,q=null,F=null,T=null,C=null,M=new Ft(0,0,0),E=0,W=!1,$=null,J=null,U=null,Z=null,ee=null,Se.set(0,0,s.canvas.width,s.canvas.height),rt.set(0,0,s.canvas.width,s.canvas.height),o.reset(),h.reset(),d.reset()}return{buffers:{color:o,depth:h,stencil:d},enable:Ot,disable:Ze,bindFramebuffer:Nt,drawBuffers:De,useProgram:Kt,setBlending:Me,setMaterial:ke,setFlipSided:Ee,setCullFace:Q,setLineWidth:A,setPolygonOffset:Pe,setScissorTest:Ke,activeTexture:Ce,bindTexture:_e,unbindTexture:bt,compressedTexImage2D:Be,compressedTexImage3D:ut,texImage2D:Ht,texImage3D:dt,updateUBOMapping:mt,uniformBlockBinding:at,texStorage2D:Et,texStorage3D:jt,texSubImage2D:Pt,texSubImage3D:yt,compressedTexSubImage2D:qe,compressedTexSubImage3D:It,scissor:ie,viewport:Qe,reset:R}}function J6(s,e,t,n,r,i,c){let o=r.isWebGL2,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new WeakMap,p,b=new WeakMap,H=!1;try{H=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function P(Q,A){return H?new OffscreenCanvas(Q,A):Lo("canvas")}function X(Q,A,Pe,Ke){let Ce=1;if((Q.width>Ke||Q.height>Ke)&&(Ce=Ke/Math.max(Q.width,Q.height)),Ce<1||A===!0)if(typeof HTMLImageElement<"u"&&Q instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&Q instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&Q instanceof ImageBitmap){let _e=A?ul:Math.floor,bt=_e(Ce*Q.width),Be=_e(Ce*Q.height);p===void 0&&(p=P(bt,Be));let ut=Pe?P(bt,Be):p;return ut.width=bt,ut.height=Be,ut.getContext("2d").drawImage(Q,0,0,bt,Be),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+bt+"x"+Be+")."),ut}else return"data"in Q&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),Q;return Q}function y(Q){return Jd(Q.width)&&Jd(Q.height)}function O(Q){return o?!1:Q.wrapS!==Er||Q.wrapT!==Er||Q.minFilter!==Un&&Q.minFilter!==mr}function D(Q,A){return Q.generateMipmaps&&A&&Q.minFilter!==Un&&Q.minFilter!==mr}function L(Q){s.generateMipmap(Q)}function g(Q,A,Pe,Ke,Ce=!1){if(o===!1)return A;if(Q!==null){if(s[Q]!==void 0)return s[Q];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+Q+"'")}let _e=A;if(A===s.RED&&(Pe===s.FLOAT&&(_e=s.R32F),Pe===s.HALF_FLOAT&&(_e=s.R16F),Pe===s.UNSIGNED_BYTE&&(_e=s.R8)),A===s.RED_INTEGER&&(Pe===s.UNSIGNED_BYTE&&(_e=s.R8UI),Pe===s.UNSIGNED_SHORT&&(_e=s.R16UI),Pe===s.UNSIGNED_INT&&(_e=s.R32UI),Pe===s.BYTE&&(_e=s.R8I),Pe===s.SHORT&&(_e=s.R16I),Pe===s.INT&&(_e=s.R32I)),A===s.RG&&(Pe===s.FLOAT&&(_e=s.RG32F),Pe===s.HALF_FLOAT&&(_e=s.RG16F),Pe===s.UNSIGNED_BYTE&&(_e=s.RG8)),A===s.RGBA){let bt=Ce?sl:$t.getTransfer(Ke);Pe===s.FLOAT&&(_e=s.RGBA32F),Pe===s.HALF_FLOAT&&(_e=s.RGBA16F),Pe===s.UNSIGNED_BYTE&&(_e=bt===Xn?s.SRGB8_ALPHA8:s.RGBA8),Pe===s.UNSIGNED_SHORT_4_4_4_4&&(_e=s.RGBA4),Pe===s.UNSIGNED_SHORT_5_5_5_1&&(_e=s.RGB5_A1)}return(_e===s.R16F||_e===s.R32F||_e===s.RG16F||_e===s.RG32F||_e===s.RGBA16F||_e===s.RGBA32F)&&e.get("EXT_color_buffer_float"),_e}function q(Q,A,Pe){return D(Q,Pe)===!0||Q.isFramebufferTexture&&Q.minFilter!==Un&&Q.minFilter!==mr?Math.log2(Math.max(A.width,A.height))+1:Q.mipmaps!==void 0&&Q.mipmaps.length>0?Q.mipmaps.length:Q.isCompressedTexture&&Array.isArray(Q.image)?A.mipmaps.length:1}function F(Q){return Q===Un||Q===il||Q===wo?s.NEAREST:s.LINEAR}function T(Q){let A=Q.target;A.removeEventListener("dispose",T),M(A),A.isVideoTexture&&f.delete(A)}function C(Q){let A=Q.target;A.removeEventListener("dispose",C),W(A)}function M(Q){let A=n.get(Q);if(A.__webglInit===void 0)return;let Pe=Q.source,Ke=b.get(Pe);if(Ke){let Ce=Ke[A.__cacheKey];Ce.usedTimes--,Ce.usedTimes===0&&E(Q),Object.keys(Ke).length===0&&b.delete(Pe)}n.remove(Q)}function E(Q){let A=n.get(Q);s.deleteTexture(A.__webglTexture);let Pe=Q.source,Ke=b.get(Pe);delete Ke[A.__cacheKey],c.memory.textures--}function W(Q){let A=Q.texture,Pe=n.get(Q),Ke=n.get(A);if(Ke.__webglTexture!==void 0&&(s.deleteTexture(Ke.__webglTexture),c.memory.textures--),Q.depthTexture&&Q.depthTexture.dispose(),Q.isWebGLCubeRenderTarget)for(let Ce=0;Ce<6;Ce++){if(Array.isArray(Pe.__webglFramebuffer[Ce]))for(let _e=0;_e<Pe.__webglFramebuffer[Ce].length;_e++)s.deleteFramebuffer(Pe.__webglFramebuffer[Ce][_e]);else s.deleteFramebuffer(Pe.__webglFramebuffer[Ce]);Pe.__webglDepthbuffer&&s.deleteRenderbuffer(Pe.__webglDepthbuffer[Ce])}else{if(Array.isArray(Pe.__webglFramebuffer))for(let Ce=0;Ce<Pe.__webglFramebuffer.length;Ce++)s.deleteFramebuffer(Pe.__webglFramebuffer[Ce]);else s.deleteFramebuffer(Pe.__webglFramebuffer);if(Pe.__webglDepthbuffer&&s.deleteRenderbuffer(Pe.__webglDepthbuffer),Pe.__webglMultisampledFramebuffer&&s.deleteFramebuffer(Pe.__webglMultisampledFramebuffer),Pe.__webglColorRenderbuffer)for(let Ce=0;Ce<Pe.__webglColorRenderbuffer.length;Ce++)Pe.__webglColorRenderbuffer[Ce]&&s.deleteRenderbuffer(Pe.__webglColorRenderbuffer[Ce]);Pe.__webglDepthRenderbuffer&&s.deleteRenderbuffer(Pe.__webglDepthRenderbuffer)}if(Q.isWebGLMultipleRenderTargets)for(let Ce=0,_e=A.length;Ce<_e;Ce++){let bt=n.get(A[Ce]);bt.__webglTexture&&(s.deleteTexture(bt.__webglTexture),c.memory.textures--),n.remove(A[Ce])}n.remove(A),n.remove(Q)}let $=0;function J(){$=0}function U(){let Q=$;return Q>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+Q+" texture units while this GPU supports only "+r.maxTextures),$+=1,Q}function Z(Q){let A=[];return A.push(Q.wrapS),A.push(Q.wrapT),A.push(Q.wrapR||0),A.push(Q.magFilter),A.push(Q.minFilter),A.push(Q.anisotropy),A.push(Q.internalFormat),A.push(Q.format),A.push(Q.type),A.push(Q.generateMipmaps),A.push(Q.premultiplyAlpha),A.push(Q.flipY),A.push(Q.unpackAlignment),A.push(Q.colorSpace),A.join()}function ee(Q,A){let Pe=n.get(Q);if(Q.isVideoTexture&&ke(Q),Q.isRenderTargetTexture===!1&&Q.version>0&&Pe.__version!==Q.version){let Ke=Q.image;if(Ke===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Ke.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Se(Pe,Q,A);return}}t.bindTexture(s.TEXTURE_2D,Pe.__webglTexture,s.TEXTURE0+A)}function ae(Q,A){let Pe=n.get(Q);if(Q.version>0&&Pe.__version!==Q.version){Se(Pe,Q,A);return}t.bindTexture(s.TEXTURE_2D_ARRAY,Pe.__webglTexture,s.TEXTURE0+A)}function oe(Q,A){let Pe=n.get(Q);if(Q.version>0&&Pe.__version!==Q.version){Se(Pe,Q,A);return}t.bindTexture(s.TEXTURE_3D,Pe.__webglTexture,s.TEXTURE0+A)}function de(Q,A){let Pe=n.get(Q);if(Q.version>0&&Pe.__version!==Q.version){rt(Pe,Q,A);return}t.bindTexture(s.TEXTURE_CUBE_MAP,Pe.__webglTexture,s.TEXTURE0+A)}let le={[zc]:s.REPEAT,[Er]:s.CLAMP_TO_EDGE,[zo]:s.MIRRORED_REPEAT},se={[Un]:s.NEAREST,[il]:s.NEAREST_MIPMAP_NEAREST,[wo]:s.NEAREST_MIPMAP_LINEAR,[mr]:s.LINEAR,[gv]:s.LINEAR_MIPMAP_NEAREST,[Is]:s.LINEAR_MIPMAP_LINEAR},xe={[Gm]:s.NEVER,[Ym]:s.ALWAYS,[Am]:s.LESS,[Eb]:s.LEQUAL,[km]:s.EQUAL,[Zm]:s.GEQUAL,[Km]:s.GREATER,[Bm]:s.NOTEQUAL};function me(Q,A,Pe){if(Pe?(s.texParameteri(Q,s.TEXTURE_WRAP_S,le[A.wrapS]),s.texParameteri(Q,s.TEXTURE_WRAP_T,le[A.wrapT]),(Q===s.TEXTURE_3D||Q===s.TEXTURE_2D_ARRAY)&&s.texParameteri(Q,s.TEXTURE_WRAP_R,le[A.wrapR]),s.texParameteri(Q,s.TEXTURE_MAG_FILTER,se[A.magFilter]),s.texParameteri(Q,s.TEXTURE_MIN_FILTER,se[A.minFilter])):(s.texParameteri(Q,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(Q,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(Q===s.TEXTURE_3D||Q===s.TEXTURE_2D_ARRAY)&&s.texParameteri(Q,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(A.wrapS!==Er||A.wrapT!==Er)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(Q,s.TEXTURE_MAG_FILTER,F(A.magFilter)),s.texParameteri(Q,s.TEXTURE_MIN_FILTER,F(A.minFilter)),A.minFilter!==Un&&A.minFilter!==mr&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),A.compareFunction&&(s.texParameteri(Q,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(Q,s.TEXTURE_COMPARE_FUNC,xe[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let Ke=e.get("EXT_texture_filter_anisotropic");if(A.magFilter===Un||A.minFilter!==wo&&A.minFilter!==Is||A.type===rs&&e.has("OES_texture_float_linear")===!1||o===!1&&A.type===Do&&e.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||n.get(A).__currentAnisotropy)&&(s.texParameterf(Q,Ke.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,r.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy)}}function Le(Q,A){let Pe=!1;Q.__webglInit===void 0&&(Q.__webglInit=!0,A.addEventListener("dispose",T));let Ke=A.source,Ce=b.get(Ke);Ce===void 0&&(Ce={},b.set(Ke,Ce));let _e=Z(A);if(_e!==Q.__cacheKey){Ce[_e]===void 0&&(Ce[_e]={texture:s.createTexture(),usedTimes:0},c.memory.textures++,Pe=!0),Ce[_e].usedTimes++;let bt=Ce[Q.__cacheKey];bt!==void 0&&(Ce[Q.__cacheKey].usedTimes--,bt.usedTimes===0&&E(A)),Q.__cacheKey=_e,Q.__webglTexture=Ce[_e].texture}return Pe}function Se(Q,A,Pe){let Ke=s.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(Ke=s.TEXTURE_2D_ARRAY),A.isData3DTexture&&(Ke=s.TEXTURE_3D);let Ce=Le(Q,A),_e=A.source;t.bindTexture(Ke,Q.__webglTexture,s.TEXTURE0+Pe);let bt=n.get(_e);if(_e.version!==bt.__version||Ce===!0){t.activeTexture(s.TEXTURE0+Pe);let Be=$t.getPrimaries($t.workingColorSpace),ut=A.colorSpace===Yr?null:$t.getPrimaries(A.colorSpace),Pt=A.colorSpace===Yr||Be===ut?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt);let yt=O(A)&&y(A.image)===!1,qe=X(A.image,yt,!1,r.maxTextureSize);qe=Ee(A,qe);let It=y(qe)||o,Et=i.convert(A.format,A.colorSpace),jt=i.convert(A.type),Ht=g(A.internalFormat,Et,jt,A.colorSpace,A.isVideoTexture);me(Ke,A,It);let dt,ie=A.mipmaps,Qe=o&&A.isVideoTexture!==!0&&Ht!==Tb,mt=bt.__version===void 0||Ce===!0,at=q(A,qe,It);if(A.isDepthTexture)Ht=s.DEPTH_COMPONENT,o?A.type===rs?Ht=s.DEPTH_COMPONENT32F:A.type===Vs?Ht=s.DEPTH_COMPONENT24:A.type===Hc?Ht=s.DEPTH24_STENCIL8:Ht=s.DEPTH_COMPONENT16:A.type===rs&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===Pc&&Ht===s.DEPTH_COMPONENT&&A.type!==jv&&A.type!==Vs&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=Vs,jt=i.convert(A.type)),A.format===Ma&&Ht===s.DEPTH_COMPONENT&&(Ht=s.DEPTH_STENCIL,A.type!==Hc&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=Hc,jt=i.convert(A.type))),mt&&(Qe?t.texStorage2D(s.TEXTURE_2D,1,Ht,qe.width,qe.height):t.texImage2D(s.TEXTURE_2D,0,Ht,qe.width,qe.height,0,Et,jt,null));else if(A.isDataTexture)if(ie.length>0&&It){Qe&&mt&&t.texStorage2D(s.TEXTURE_2D,at,Ht,ie[0].width,ie[0].height);for(let R=0,be=ie.length;R<be;R++)dt=ie[R],Qe?t.texSubImage2D(s.TEXTURE_2D,R,0,0,dt.width,dt.height,Et,jt,dt.data):t.texImage2D(s.TEXTURE_2D,R,Ht,dt.width,dt.height,0,Et,jt,dt.data);A.generateMipmaps=!1}else Qe?(mt&&t.texStorage2D(s.TEXTURE_2D,at,Ht,qe.width,qe.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,qe.width,qe.height,Et,jt,qe.data)):t.texImage2D(s.TEXTURE_2D,0,Ht,qe.width,qe.height,0,Et,jt,qe.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Qe&&mt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,at,Ht,ie[0].width,ie[0].height,qe.depth);for(let R=0,be=ie.length;R<be;R++)dt=ie[R],A.format!==Zr?Et!==null?Qe?t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,R,0,0,0,dt.width,dt.height,qe.depth,Et,dt.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,R,Ht,dt.width,dt.height,qe.depth,0,dt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qe?t.texSubImage3D(s.TEXTURE_2D_ARRAY,R,0,0,0,dt.width,dt.height,qe.depth,Et,jt,dt.data):t.texImage3D(s.TEXTURE_2D_ARRAY,R,Ht,dt.width,dt.height,qe.depth,0,Et,jt,dt.data)}else{Qe&&mt&&t.texStorage2D(s.TEXTURE_2D,at,Ht,ie[0].width,ie[0].height);for(let R=0,be=ie.length;R<be;R++)dt=ie[R],A.format!==Zr?Et!==null?Qe?t.compressedTexSubImage2D(s.TEXTURE_2D,R,0,0,dt.width,dt.height,Et,dt.data):t.compressedTexImage2D(s.TEXTURE_2D,R,Ht,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qe?t.texSubImage2D(s.TEXTURE_2D,R,0,0,dt.width,dt.height,Et,jt,dt.data):t.texImage2D(s.TEXTURE_2D,R,Ht,dt.width,dt.height,0,Et,jt,dt.data)}else if(A.isDataArrayTexture)Qe?(mt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,at,Ht,qe.width,qe.height,qe.depth),t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,qe.width,qe.height,qe.depth,Et,jt,qe.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ht,qe.width,qe.height,qe.depth,0,Et,jt,qe.data);else if(A.isData3DTexture)Qe?(mt&&t.texStorage3D(s.TEXTURE_3D,at,Ht,qe.width,qe.height,qe.depth),t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,qe.width,qe.height,qe.depth,Et,jt,qe.data)):t.texImage3D(s.TEXTURE_3D,0,Ht,qe.width,qe.height,qe.depth,0,Et,jt,qe.data);else if(A.isFramebufferTexture){if(mt)if(Qe)t.texStorage2D(s.TEXTURE_2D,at,Ht,qe.width,qe.height);else{let R=qe.width,be=qe.height;for(let nt=0;nt<at;nt++)t.texImage2D(s.TEXTURE_2D,nt,Ht,R,be,0,Et,jt,null),R>>=1,be>>=1}}else if(ie.length>0&&It){Qe&&mt&&t.texStorage2D(s.TEXTURE_2D,at,Ht,ie[0].width,ie[0].height);for(let R=0,be=ie.length;R<be;R++)dt=ie[R],Qe?t.texSubImage2D(s.TEXTURE_2D,R,0,0,Et,jt,dt):t.texImage2D(s.TEXTURE_2D,R,Ht,Et,jt,dt);A.generateMipmaps=!1}else Qe?(mt&&t.texStorage2D(s.TEXTURE_2D,at,Ht,qe.width,qe.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,Et,jt,qe)):t.texImage2D(s.TEXTURE_2D,0,Ht,Et,jt,qe);D(A,It)&&L(Ke),bt.__version=_e.version,A.onUpdate&&A.onUpdate(A)}Q.__version=A.version}function rt(Q,A,Pe){if(A.image.length!==6)return;let Ke=Le(Q,A),Ce=A.source;t.bindTexture(s.TEXTURE_CUBE_MAP,Q.__webglTexture,s.TEXTURE0+Pe);let _e=n.get(Ce);if(Ce.version!==_e.__version||Ke===!0){t.activeTexture(s.TEXTURE0+Pe);let bt=$t.getPrimaries($t.workingColorSpace),Be=A.colorSpace===Yr?null:$t.getPrimaries(A.colorSpace),ut=A.colorSpace===Yr||bt===Be?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);let Pt=A.isCompressedTexture||A.image[0].isCompressedTexture,yt=A.image[0]&&A.image[0].isDataTexture,qe=[];for(let R=0;R<6;R++)!Pt&&!yt?qe[R]=X(A.image[R],!1,!0,r.maxCubemapSize):qe[R]=yt?A.image[R].image:A.image[R],qe[R]=Ee(A,qe[R]);let It=qe[0],Et=y(It)||o,jt=i.convert(A.format,A.colorSpace),Ht=i.convert(A.type),dt=g(A.internalFormat,jt,Ht,A.colorSpace),ie=o&&A.isVideoTexture!==!0,Qe=_e.__version===void 0||Ke===!0,mt=q(A,It,Et);me(s.TEXTURE_CUBE_MAP,A,Et);let at;if(Pt){ie&&Qe&&t.texStorage2D(s.TEXTURE_CUBE_MAP,mt,dt,It.width,It.height);for(let R=0;R<6;R++){at=qe[R].mipmaps;for(let be=0;be<at.length;be++){let nt=at[be];A.format!==Zr?jt!==null?ie?t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+R,be,0,0,nt.width,nt.height,jt,nt.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+R,be,dt,nt.width,nt.height,0,nt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ie?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+R,be,0,0,nt.width,nt.height,jt,Ht,nt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+R,be,dt,nt.width,nt.height,0,jt,Ht,nt.data)}}}else{at=A.mipmaps,ie&&Qe&&(at.length>0&&mt++,t.texStorage2D(s.TEXTURE_CUBE_MAP,mt,dt,qe[0].width,qe[0].height));for(let R=0;R<6;R++)if(yt){ie?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+R,0,0,0,qe[R].width,qe[R].height,jt,Ht,qe[R].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+R,0,dt,qe[R].width,qe[R].height,0,jt,Ht,qe[R].data);for(let be=0;be<at.length;be++){let Y=at[be].image[R].image;ie?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+R,be+1,0,0,Y.width,Y.height,jt,Ht,Y.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+R,be+1,dt,Y.width,Y.height,0,jt,Ht,Y.data)}}else{ie?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+R,0,0,0,jt,Ht,qe[R]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+R,0,dt,jt,Ht,qe[R]);for(let be=0;be<at.length;be++){let nt=at[be];ie?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+R,be+1,0,0,jt,Ht,nt.image[R]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+R,be+1,dt,jt,Ht,nt.image[R])}}}D(A,Et)&&L(s.TEXTURE_CUBE_MAP),_e.__version=Ce.version,A.onUpdate&&A.onUpdate(A)}Q.__version=A.version}function tt(Q,A,Pe,Ke,Ce,_e){let bt=i.convert(Pe.format,Pe.colorSpace),Be=i.convert(Pe.type),ut=g(Pe.internalFormat,bt,Be,Pe.colorSpace);if(!n.get(A).__hasExternalTextures){let yt=Math.max(1,A.width>>_e),qe=Math.max(1,A.height>>_e);Ce===s.TEXTURE_3D||Ce===s.TEXTURE_2D_ARRAY?t.texImage3D(Ce,_e,ut,yt,qe,A.depth,0,bt,Be,null):t.texImage2D(Ce,_e,ut,yt,qe,0,bt,Be,null)}t.bindFramebuffer(s.FRAMEBUFFER,Q),Me(A)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Ke,Ce,n.get(Pe).__webglTexture,0,Oe(A)):(Ce===s.TEXTURE_2D||Ce>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Ce<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Ke,Ce,n.get(Pe).__webglTexture,_e),t.bindFramebuffer(s.FRAMEBUFFER,null)}function ot(Q,A,Pe){if(s.bindRenderbuffer(s.RENDERBUFFER,Q),A.depthBuffer&&!A.stencilBuffer){let Ke=o===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(Pe||Me(A)){let Ce=A.depthTexture;Ce&&Ce.isDepthTexture&&(Ce.type===rs?Ke=s.DEPTH_COMPONENT32F:Ce.type===Vs&&(Ke=s.DEPTH_COMPONENT24));let _e=Oe(A);Me(A)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,_e,Ke,A.width,A.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,_e,Ke,A.width,A.height)}else s.renderbufferStorage(s.RENDERBUFFER,Ke,A.width,A.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,Q)}else if(A.depthBuffer&&A.stencilBuffer){let Ke=Oe(A);Pe&&Me(A)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ke,s.DEPTH24_STENCIL8,A.width,A.height):Me(A)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ke,s.DEPTH24_STENCIL8,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,Q)}else{let Ke=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let Ce=0;Ce<Ke.length;Ce++){let _e=Ke[Ce],bt=i.convert(_e.format,_e.colorSpace),Be=i.convert(_e.type),ut=g(_e.internalFormat,bt,Be,_e.colorSpace),Pt=Oe(A);Pe&&Me(A)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Pt,ut,A.width,A.height):Me(A)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Pt,ut,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,ut,A.width,A.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ot(Q,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,Q),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),ee(A.depthTexture,0);let Ke=n.get(A.depthTexture).__webglTexture,Ce=Oe(A);if(A.depthTexture.format===Pc)Me(A)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Ke,0,Ce):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Ke,0);else if(A.depthTexture.format===Ma)Me(A)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Ke,0,Ce):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Ke,0);else throw new Error("Unknown depthTexture format")}function Ze(Q){let A=n.get(Q),Pe=Q.isWebGLCubeRenderTarget===!0;if(Q.depthTexture&&!A.__autoAllocateDepthBuffer){if(Pe)throw new Error("target.depthTexture not supported in Cube render targets");Ot(A.__webglFramebuffer,Q)}else if(Pe){A.__webglDepthbuffer=[];for(let Ke=0;Ke<6;Ke++)t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[Ke]),A.__webglDepthbuffer[Ke]=s.createRenderbuffer(),ot(A.__webglDepthbuffer[Ke],Q,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=s.createRenderbuffer(),ot(A.__webglDepthbuffer,Q,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function Nt(Q,A,Pe){let Ke=n.get(Q);A!==void 0&&tt(Ke.__webglFramebuffer,Q,Q.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Pe!==void 0&&Ze(Q)}function De(Q){let A=Q.texture,Pe=n.get(Q),Ke=n.get(A);Q.addEventListener("dispose",C),Q.isWebGLMultipleRenderTargets!==!0&&(Ke.__webglTexture===void 0&&(Ke.__webglTexture=s.createTexture()),Ke.__version=A.version,c.memory.textures++);let Ce=Q.isWebGLCubeRenderTarget===!0,_e=Q.isWebGLMultipleRenderTargets===!0,bt=y(Q)||o;if(Ce){Pe.__webglFramebuffer=[];for(let Be=0;Be<6;Be++)if(o&&A.mipmaps&&A.mipmaps.length>0){Pe.__webglFramebuffer[Be]=[];for(let ut=0;ut<A.mipmaps.length;ut++)Pe.__webglFramebuffer[Be][ut]=s.createFramebuffer()}else Pe.__webglFramebuffer[Be]=s.createFramebuffer()}else{if(o&&A.mipmaps&&A.mipmaps.length>0){Pe.__webglFramebuffer=[];for(let Be=0;Be<A.mipmaps.length;Be++)Pe.__webglFramebuffer[Be]=s.createFramebuffer()}else Pe.__webglFramebuffer=s.createFramebuffer();if(_e)if(r.drawBuffers){let Be=Q.texture;for(let ut=0,Pt=Be.length;ut<Pt;ut++){let yt=n.get(Be[ut]);yt.__webglTexture===void 0&&(yt.__webglTexture=s.createTexture(),c.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&Q.samples>0&&Me(Q)===!1){let Be=_e?A:[A];Pe.__webglMultisampledFramebuffer=s.createFramebuffer(),Pe.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer);for(let ut=0;ut<Be.length;ut++){let Pt=Be[ut];Pe.__webglColorRenderbuffer[ut]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Pe.__webglColorRenderbuffer[ut]);let yt=i.convert(Pt.format,Pt.colorSpace),qe=i.convert(Pt.type),It=g(Pt.internalFormat,yt,qe,Pt.colorSpace,Q.isXRRenderTarget===!0),Et=Oe(Q);s.renderbufferStorageMultisample(s.RENDERBUFFER,Et,It,Q.width,Q.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ut,s.RENDERBUFFER,Pe.__webglColorRenderbuffer[ut])}s.bindRenderbuffer(s.RENDERBUFFER,null),Q.depthBuffer&&(Pe.__webglDepthRenderbuffer=s.createRenderbuffer(),ot(Pe.__webglDepthRenderbuffer,Q,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Ce){t.bindTexture(s.TEXTURE_CUBE_MAP,Ke.__webglTexture),me(s.TEXTURE_CUBE_MAP,A,bt);for(let Be=0;Be<6;Be++)if(o&&A.mipmaps&&A.mipmaps.length>0)for(let ut=0;ut<A.mipmaps.length;ut++)tt(Pe.__webglFramebuffer[Be][ut],Q,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Be,ut);else tt(Pe.__webglFramebuffer[Be],Q,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Be,0);D(A,bt)&&L(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(_e){let Be=Q.texture;for(let ut=0,Pt=Be.length;ut<Pt;ut++){let yt=Be[ut],qe=n.get(yt);t.bindTexture(s.TEXTURE_2D,qe.__webglTexture),me(s.TEXTURE_2D,yt,bt),tt(Pe.__webglFramebuffer,Q,yt,s.COLOR_ATTACHMENT0+ut,s.TEXTURE_2D,0),D(yt,bt)&&L(s.TEXTURE_2D)}t.unbindTexture()}else{let Be=s.TEXTURE_2D;if((Q.isWebGL3DRenderTarget||Q.isWebGLArrayRenderTarget)&&(o?Be=Q.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Be,Ke.__webglTexture),me(Be,A,bt),o&&A.mipmaps&&A.mipmaps.length>0)for(let ut=0;ut<A.mipmaps.length;ut++)tt(Pe.__webglFramebuffer[ut],Q,A,s.COLOR_ATTACHMENT0,Be,ut);else tt(Pe.__webglFramebuffer,Q,A,s.COLOR_ATTACHMENT0,Be,0);D(A,bt)&&L(Be),t.unbindTexture()}Q.depthBuffer&&Ze(Q)}function Kt(Q){let A=y(Q)||o,Pe=Q.isWebGLMultipleRenderTargets===!0?Q.texture:[Q.texture];for(let Ke=0,Ce=Pe.length;Ke<Ce;Ke++){let _e=Pe[Ke];if(D(_e,A)){let bt=Q.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,Be=n.get(_e).__webglTexture;t.bindTexture(bt,Be),L(bt),t.unbindTexture()}}}function fe(Q){if(o&&Q.samples>0&&Me(Q)===!1){let A=Q.isWebGLMultipleRenderTargets?Q.texture:[Q.texture],Pe=Q.width,Ke=Q.height,Ce=s.COLOR_BUFFER_BIT,_e=[],bt=Q.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Be=n.get(Q),ut=Q.isWebGLMultipleRenderTargets===!0;if(ut)for(let Pt=0;Pt<A.length;Pt++)t.bindFramebuffer(s.FRAMEBUFFER,Be.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pt,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Be.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pt,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Be.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Be.__webglFramebuffer);for(let Pt=0;Pt<A.length;Pt++){_e.push(s.COLOR_ATTACHMENT0+Pt),Q.depthBuffer&&_e.push(bt);let yt=Be.__ignoreDepthValues!==void 0?Be.__ignoreDepthValues:!1;if(yt===!1&&(Q.depthBuffer&&(Ce|=s.DEPTH_BUFFER_BIT),Q.stencilBuffer&&(Ce|=s.STENCIL_BUFFER_BIT)),ut&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Be.__webglColorRenderbuffer[Pt]),yt===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[bt]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[bt])),ut){let qe=n.get(A[Pt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,qe,0)}s.blitFramebuffer(0,0,Pe,Ke,0,0,Pe,Ke,Ce,s.NEAREST),d&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,_e)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ut)for(let Pt=0;Pt<A.length;Pt++){t.bindFramebuffer(s.FRAMEBUFFER,Be.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pt,s.RENDERBUFFER,Be.__webglColorRenderbuffer[Pt]);let yt=n.get(A[Pt]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Be.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pt,s.TEXTURE_2D,yt,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Be.__webglMultisampledFramebuffer)}}function Oe(Q){return Math.min(r.maxSamples,Q.samples)}function Me(Q){let A=n.get(Q);return o&&Q.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function ke(Q){let A=c.render.frame;f.get(Q)!==A&&(f.set(Q,A),Q.update())}function Ee(Q,A){let Pe=Q.colorSpace,Ke=Q.format,Ce=Q.type;return Q.isCompressedTexture===!0||Q.isVideoTexture===!0||Q.format===Qd||Pe!==Gn&&Pe!==Yr&&($t.getTransfer(Pe)===Xn?o===!1?e.has("EXT_sRGB")===!0&&Ke===Zr?(Q.format=Qd,Q.minFilter=mr,Q.generateMipmaps=!1):A=ll.sRGBToLinear(A):(Ke!==Zr||Ce!==Rs)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Pe)),A}this.allocateTextureUnit=U,this.resetTextureUnits=J,this.setTexture2D=ee,this.setTexture2DArray=ae,this.setTexture3D=oe,this.setTextureCube=de,this.rebindTextures=Nt,this.setupRenderTarget=De,this.updateRenderTargetMipmap=Kt,this.updateMultisampleRenderTarget=fe,this.setupDepthRenderbuffer=Ze,this.setupFrameBufferTexture=tt,this.useMultisampledRTT=Me}function _6(s,e,t){let n=t.isWebGL2;function r(i,c=Yr){let o,h=$t.getTransfer(c);if(i===Rs)return s.UNSIGNED_BYTE;if(i===Lb)return s.UNSIGNED_SHORT_4_4_4_4;if(i===Mb)return s.UNSIGNED_SHORT_5_5_5_1;if(i===Nm)return s.BYTE;if(i===Tm)return s.SHORT;if(i===jv)return s.UNSIGNED_SHORT;if(i===Db)return s.INT;if(i===Vs)return s.UNSIGNED_INT;if(i===rs)return s.FLOAT;if(i===Do)return n?s.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(i===Sm)return s.ALPHA;if(i===Zr)return s.RGBA;if(i===Vm)return s.LUMINANCE;if(i===Em)return s.LUMINANCE_ALPHA;if(i===Pc)return s.DEPTH_COMPONENT;if(i===Ma)return s.DEPTH_STENCIL;if(i===Qd)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(i===qm)return s.RED;if(i===gb)return s.RED_INTEGER;if(i===Fm)return s.RG;if(i===jb)return s.RG_INTEGER;if(i===Nb)return s.RGBA_INTEGER;if(i===dd||i===vd||i===fd||i===bd)if(h===Xn)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===dd)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===vd)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===fd)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===bd)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===dd)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===vd)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===fd)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===bd)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===A2||i===k2||i===K2||i===B2)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===A2)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===k2)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===K2)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===B2)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Tb)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(i===Z2||i===Y2)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(i===Z2)return h===Xn?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===Y2)return h===Xn?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Q2||i===J2||i===_2||i===$2||i===e9||i===t9||i===n9||i===r9||i===i9||i===s9||i===c9||i===a9||i===o9||i===u9)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(i===Q2)return h===Xn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===J2)return h===Xn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===_2)return h===Xn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===$2)return h===Xn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===e9)return h===Xn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===t9)return h===Xn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===n9)return h===Xn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===r9)return h===Xn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===i9)return h===Xn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===s9)return h===Xn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===c9)return h===Xn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===a9)return h===Xn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===o9)return h===Xn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===u9)return h===Xn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===pd||i===l9||i===h9)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(i===pd)return h===Xn?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===l9)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===h9)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Rm||i===d9||i===v9||i===f9)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(i===pd)return o.COMPRESSED_RED_RGTC1_EXT;if(i===d9)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===v9)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===f9)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Hc?n?s.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):s[i]!==void 0?s[i]:null}return{convert:r}}var lv=class extends tr{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},or=class extends On{constructor(){super(),this.isGroup=!0,this.type="Group"}},$6={type:"move"},yo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new or,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new or,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ce,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ce),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new or,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ce,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ce),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,c=null,o=this._targetRay,h=this._grip,d=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(d&&e.hand){c=!0;for(let X of e.hand.values()){let y=t.getJointPose(X,n),O=this._getHandJoint(d,X);y!==null&&(O.matrix.fromArray(y.transform.matrix),O.matrix.decompose(O.position,O.rotation,O.scale),O.matrixWorldNeedsUpdate=!0,O.jointRadius=y.radius),O.visible=y!==null}let f=d.joints["index-finger-tip"],p=d.joints["thumb-tip"],b=f.position.distanceTo(p.position),H=.02,P=.005;d.inputState.pinching&&b>H+P?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&b<=H-P&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(h.matrix.fromArray(i.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,i.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(i.linearVelocity)):h.hasLinearVelocity=!1,i.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(i.angularVelocity)):h.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent($6)))}return o!==null&&(o.visible=r!==null),h!==null&&(h.visible=i!==null),d!==null&&(d.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new or;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},hv=class extends gi{constructor(e,t){super();let n=this,r=null,i=1,c=null,o="local-floor",h=1,d=null,f=null,p=null,b=null,H=null,P=null,X=t.getContextAttributes(),y=null,O=null,D=[],L=[],g=new Rt,q=null,F=new tr;F.layers.enable(1),F.viewport=new hn;let T=new tr;T.layers.enable(2),T.viewport=new hn;let C=[F,T],M=new lv;M.layers.enable(1),M.layers.enable(2);let E=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(me){let Le=D[me];return Le===void 0&&(Le=new yo,D[me]=Le),Le.getTargetRaySpace()},this.getControllerGrip=function(me){let Le=D[me];return Le===void 0&&(Le=new yo,D[me]=Le),Le.getGripSpace()},this.getHand=function(me){let Le=D[me];return Le===void 0&&(Le=new yo,D[me]=Le),Le.getHandSpace()};function $(me){let Le=L.indexOf(me.inputSource);if(Le===-1)return;let Se=D[Le];Se!==void 0&&(Se.update(me.inputSource,me.frame,d||c),Se.dispatchEvent({type:me.type,data:me.inputSource}))}function J(){r.removeEventListener("select",$),r.removeEventListener("selectstart",$),r.removeEventListener("selectend",$),r.removeEventListener("squeeze",$),r.removeEventListener("squeezestart",$),r.removeEventListener("squeezeend",$),r.removeEventListener("end",J),r.removeEventListener("inputsourceschange",U);for(let me=0;me<D.length;me++){let Le=L[me];Le!==null&&(L[me]=null,D[me].disconnect(Le))}E=null,W=null,e.setRenderTarget(y),H=null,b=null,p=null,r=null,O=null,xe.stop(),n.isPresenting=!1,e.setPixelRatio(q),e.setSize(g.width,g.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(me){i=me,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(me){o=me,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||c},this.setReferenceSpace=function(me){d=me},this.getBaseLayer=function(){return b!==null?b:H},this.getBinding=function(){return p},this.getFrame=function(){return P},this.getSession=function(){return r},this.setSession=async function(me){if(r=me,r!==null){if(y=e.getRenderTarget(),r.addEventListener("select",$),r.addEventListener("selectstart",$),r.addEventListener("selectend",$),r.addEventListener("squeeze",$),r.addEventListener("squeezestart",$),r.addEventListener("squeezeend",$),r.addEventListener("end",J),r.addEventListener("inputsourceschange",U),X.xrCompatible!==!0&&await t.makeXRCompatible(),q=e.getPixelRatio(),e.getSize(g),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let Le={antialias:r.renderState.layers===void 0?X.antialias:!0,alpha:!0,depth:X.depth,stencil:X.stencil,framebufferScaleFactor:i};H=new XRWebGLLayer(r,t,Le),r.updateRenderState({baseLayer:H}),e.setPixelRatio(1),e.setSize(H.framebufferWidth,H.framebufferHeight,!1),O=new ss(H.framebufferWidth,H.framebufferHeight,{format:Zr,type:Rs,colorSpace:e.outputColorSpace,stencilBuffer:X.stencil})}else{let Le=null,Se=null,rt=null;X.depth&&(rt=X.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Le=X.stencil?Ma:Pc,Se=X.stencil?Hc:Vs);let tt={colorFormat:t.RGBA8,depthFormat:rt,scaleFactor:i};p=new XRWebGLBinding(r,t),b=p.createProjectionLayer(tt),r.updateRenderState({layers:[b]}),e.setPixelRatio(1),e.setSize(b.textureWidth,b.textureHeight,!1),O=new ss(b.textureWidth,b.textureHeight,{format:Zr,type:Rs,depthTexture:new ml(b.textureWidth,b.textureHeight,Se,void 0,void 0,void 0,void 0,void 0,void 0,Le),stencilBuffer:X.stencil,colorSpace:e.outputColorSpace,samples:X.antialias?4:0});let ot=e.properties.get(O);ot.__ignoreDepthValues=b.ignoreDepthValues}O.isXRRenderTarget=!0,this.setFoveation(h),d=null,c=await r.requestReferenceSpace(o),xe.setContext(r),xe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function U(me){for(let Le=0;Le<me.removed.length;Le++){let Se=me.removed[Le],rt=L.indexOf(Se);rt>=0&&(L[rt]=null,D[rt].disconnect(Se))}for(let Le=0;Le<me.added.length;Le++){let Se=me.added[Le],rt=L.indexOf(Se);if(rt===-1){for(let ot=0;ot<D.length;ot++)if(ot>=L.length){L.push(Se),rt=ot;break}else if(L[ot]===null){L[ot]=Se,rt=ot;break}if(rt===-1)break}let tt=D[rt];tt&&tt.connect(Se)}}let Z=new ce,ee=new ce;function ae(me,Le,Se){Z.setFromMatrixPosition(Le.matrixWorld),ee.setFromMatrixPosition(Se.matrixWorld);let rt=Z.distanceTo(ee),tt=Le.projectionMatrix.elements,ot=Se.projectionMatrix.elements,Ot=tt[14]/(tt[10]-1),Ze=tt[14]/(tt[10]+1),Nt=(tt[9]+1)/tt[5],De=(tt[9]-1)/tt[5],Kt=(tt[8]-1)/tt[0],fe=(ot[8]+1)/ot[0],Oe=Ot*Kt,Me=Ot*fe,ke=rt/(-Kt+fe),Ee=ke*-Kt;Le.matrixWorld.decompose(me.position,me.quaternion,me.scale),me.translateX(Ee),me.translateZ(ke),me.matrixWorld.compose(me.position,me.quaternion,me.scale),me.matrixWorldInverse.copy(me.matrixWorld).invert();let Q=Ot+ke,A=Ze+ke,Pe=Oe-Ee,Ke=Me+(rt-Ee),Ce=Nt*Ze/A*Q,_e=De*Ze/A*Q;me.projectionMatrix.makePerspective(Pe,Ke,Ce,_e,Q,A),me.projectionMatrixInverse.copy(me.projectionMatrix).invert()}function oe(me,Le){Le===null?me.matrixWorld.copy(me.matrix):me.matrixWorld.multiplyMatrices(Le.matrixWorld,me.matrix),me.matrixWorldInverse.copy(me.matrixWorld).invert()}this.updateCamera=function(me){if(r===null)return;M.near=T.near=F.near=me.near,M.far=T.far=F.far=me.far,(E!==M.near||W!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),E=M.near,W=M.far);let Le=me.parent,Se=M.cameras;oe(M,Le);for(let rt=0;rt<Se.length;rt++)oe(Se[rt],Le);Se.length===2?ae(M,F,T):M.projectionMatrix.copy(F.projectionMatrix),de(me,M,Le)};function de(me,Le,Se){Se===null?me.matrix.copy(Le.matrixWorld):(me.matrix.copy(Se.matrixWorld),me.matrix.invert(),me.matrix.multiply(Le.matrixWorld)),me.matrix.decompose(me.position,me.quaternion,me.scale),me.updateMatrixWorld(!0),me.projectionMatrix.copy(Le.projectionMatrix),me.projectionMatrixInverse.copy(Le.projectionMatrixInverse),me.isPerspectiveCamera&&(me.fov=ja*2*Math.atan(1/me.projectionMatrix.elements[5]),me.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(b===null&&H===null))return h},this.setFoveation=function(me){h=me,b!==null&&(b.fixedFoveation=me),H!==null&&H.fixedFoveation!==void 0&&(H.fixedFoveation=me)};let le=null;function se(me,Le){if(f=Le.getViewerPose(d||c),P=Le,f!==null){let Se=f.views;H!==null&&(e.setRenderTargetFramebuffer(O,H.framebuffer),e.setRenderTarget(O));let rt=!1;Se.length!==M.cameras.length&&(M.cameras.length=0,rt=!0);for(let tt=0;tt<Se.length;tt++){let ot=Se[tt],Ot=null;if(H!==null)Ot=H.getViewport(ot);else{let Nt=p.getViewSubImage(b,ot);Ot=Nt.viewport,tt===0&&(e.setRenderTargetTextures(O,Nt.colorTexture,b.ignoreDepthValues?void 0:Nt.depthStencilTexture),e.setRenderTarget(O))}let Ze=C[tt];Ze===void 0&&(Ze=new tr,Ze.layers.enable(tt),Ze.viewport=new hn,C[tt]=Ze),Ze.matrix.fromArray(ot.transform.matrix),Ze.matrix.decompose(Ze.position,Ze.quaternion,Ze.scale),Ze.projectionMatrix.fromArray(ot.projectionMatrix),Ze.projectionMatrixInverse.copy(Ze.projectionMatrix).invert(),Ze.viewport.set(Ot.x,Ot.y,Ot.width,Ot.height),tt===0&&(M.matrix.copy(Ze.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),rt===!0&&M.cameras.push(Ze)}}for(let Se=0;Se<D.length;Se++){let rt=L[Se],tt=D[Se];rt!==null&&tt!==void 0&&tt.update(rt,Le,d||c)}le&&le(me,Le),Le.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Le}),P=null}let xe=new Ib;xe.setAnimationLoop(se),this.setAnimationLoop=function(me){le=me},this.dispose=function(){}}};function eO(s,e){function t(y,O){y.matrixAutoUpdate===!0&&y.updateMatrix(),O.value.copy(y.matrix)}function n(y,O){O.color.getRGB(y.fogColor.value,Rb(s)),O.isFog?(y.fogNear.value=O.near,y.fogFar.value=O.far):O.isFogExp2&&(y.fogDensity.value=O.density)}function r(y,O,D,L,g){O.isMeshBasicMaterial||O.isMeshLambertMaterial?i(y,O):O.isMeshToonMaterial?(i(y,O),p(y,O)):O.isMeshPhongMaterial?(i(y,O),f(y,O)):O.isMeshStandardMaterial?(i(y,O),b(y,O),O.isMeshPhysicalMaterial&&H(y,O,g)):O.isMeshMatcapMaterial?(i(y,O),P(y,O)):O.isMeshDepthMaterial?i(y,O):O.isMeshDistanceMaterial?(i(y,O),X(y,O)):O.isMeshNormalMaterial?i(y,O):O.isLineBasicMaterial?(c(y,O),O.isLineDashedMaterial&&o(y,O)):O.isPointsMaterial?h(y,O,D,L):O.isSpriteMaterial?d(y,O):O.isShadowMaterial?(y.color.value.copy(O.color),y.opacity.value=O.opacity):O.isShaderMaterial&&(O.uniformsNeedUpdate=!1)}function i(y,O){y.opacity.value=O.opacity,O.color&&y.diffuse.value.copy(O.color),O.emissive&&y.emissive.value.copy(O.emissive).multiplyScalar(O.emissiveIntensity),O.map&&(y.map.value=O.map,t(O.map,y.mapTransform)),O.alphaMap&&(y.alphaMap.value=O.alphaMap,t(O.alphaMap,y.alphaMapTransform)),O.bumpMap&&(y.bumpMap.value=O.bumpMap,t(O.bumpMap,y.bumpMapTransform),y.bumpScale.value=O.bumpScale,O.side===Lr&&(y.bumpScale.value*=-1)),O.normalMap&&(y.normalMap.value=O.normalMap,t(O.normalMap,y.normalMapTransform),y.normalScale.value.copy(O.normalScale),O.side===Lr&&y.normalScale.value.negate()),O.displacementMap&&(y.displacementMap.value=O.displacementMap,t(O.displacementMap,y.displacementMapTransform),y.displacementScale.value=O.displacementScale,y.displacementBias.value=O.displacementBias),O.emissiveMap&&(y.emissiveMap.value=O.emissiveMap,t(O.emissiveMap,y.emissiveMapTransform)),O.specularMap&&(y.specularMap.value=O.specularMap,t(O.specularMap,y.specularMapTransform)),O.alphaTest>0&&(y.alphaTest.value=O.alphaTest);let D=e.get(O).envMap;if(D&&(y.envMap.value=D,y.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=O.reflectivity,y.ior.value=O.ior,y.refractionRatio.value=O.refractionRatio),O.lightMap){y.lightMap.value=O.lightMap;let L=s._useLegacyLights===!0?Math.PI:1;y.lightMapIntensity.value=O.lightMapIntensity*L,t(O.lightMap,y.lightMapTransform)}O.aoMap&&(y.aoMap.value=O.aoMap,y.aoMapIntensity.value=O.aoMapIntensity,t(O.aoMap,y.aoMapTransform))}function c(y,O){y.diffuse.value.copy(O.color),y.opacity.value=O.opacity,O.map&&(y.map.value=O.map,t(O.map,y.mapTransform))}function o(y,O){y.dashSize.value=O.dashSize,y.totalSize.value=O.dashSize+O.gapSize,y.scale.value=O.scale}function h(y,O,D,L){y.diffuse.value.copy(O.color),y.opacity.value=O.opacity,y.size.value=O.size*D,y.scale.value=L*.5,O.map&&(y.map.value=O.map,t(O.map,y.uvTransform)),O.alphaMap&&(y.alphaMap.value=O.alphaMap,t(O.alphaMap,y.alphaMapTransform)),O.alphaTest>0&&(y.alphaTest.value=O.alphaTest)}function d(y,O){y.diffuse.value.copy(O.color),y.opacity.value=O.opacity,y.rotation.value=O.rotation,O.map&&(y.map.value=O.map,t(O.map,y.mapTransform)),O.alphaMap&&(y.alphaMap.value=O.alphaMap,t(O.alphaMap,y.alphaMapTransform)),O.alphaTest>0&&(y.alphaTest.value=O.alphaTest)}function f(y,O){y.specular.value.copy(O.specular),y.shininess.value=Math.max(O.shininess,1e-4)}function p(y,O){O.gradientMap&&(y.gradientMap.value=O.gradientMap)}function b(y,O){y.metalness.value=O.metalness,O.metalnessMap&&(y.metalnessMap.value=O.metalnessMap,t(O.metalnessMap,y.metalnessMapTransform)),y.roughness.value=O.roughness,O.roughnessMap&&(y.roughnessMap.value=O.roughnessMap,t(O.roughnessMap,y.roughnessMapTransform)),e.get(O).envMap&&(y.envMapIntensity.value=O.envMapIntensity)}function H(y,O,D){y.ior.value=O.ior,O.sheen>0&&(y.sheenColor.value.copy(O.sheenColor).multiplyScalar(O.sheen),y.sheenRoughness.value=O.sheenRoughness,O.sheenColorMap&&(y.sheenColorMap.value=O.sheenColorMap,t(O.sheenColorMap,y.sheenColorMapTransform)),O.sheenRoughnessMap&&(y.sheenRoughnessMap.value=O.sheenRoughnessMap,t(O.sheenRoughnessMap,y.sheenRoughnessMapTransform))),O.clearcoat>0&&(y.clearcoat.value=O.clearcoat,y.clearcoatRoughness.value=O.clearcoatRoughness,O.clearcoatMap&&(y.clearcoatMap.value=O.clearcoatMap,t(O.clearcoatMap,y.clearcoatMapTransform)),O.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=O.clearcoatRoughnessMap,t(O.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),O.clearcoatNormalMap&&(y.clearcoatNormalMap.value=O.clearcoatNormalMap,t(O.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(O.clearcoatNormalScale),O.side===Lr&&y.clearcoatNormalScale.value.negate())),O.iridescence>0&&(y.iridescence.value=O.iridescence,y.iridescenceIOR.value=O.iridescenceIOR,y.iridescenceThicknessMinimum.value=O.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=O.iridescenceThicknessRange[1],O.iridescenceMap&&(y.iridescenceMap.value=O.iridescenceMap,t(O.iridescenceMap,y.iridescenceMapTransform)),O.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=O.iridescenceThicknessMap,t(O.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),O.transmission>0&&(y.transmission.value=O.transmission,y.transmissionSamplerMap.value=D.texture,y.transmissionSamplerSize.value.set(D.width,D.height),O.transmissionMap&&(y.transmissionMap.value=O.transmissionMap,t(O.transmissionMap,y.transmissionMapTransform)),y.thickness.value=O.thickness,O.thicknessMap&&(y.thicknessMap.value=O.thicknessMap,t(O.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=O.attenuationDistance,y.attenuationColor.value.copy(O.attenuationColor)),O.anisotropy>0&&(y.anisotropyVector.value.set(O.anisotropy*Math.cos(O.anisotropyRotation),O.anisotropy*Math.sin(O.anisotropyRotation)),O.anisotropyMap&&(y.anisotropyMap.value=O.anisotropyMap,t(O.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=O.specularIntensity,y.specularColor.value.copy(O.specularColor),O.specularColorMap&&(y.specularColorMap.value=O.specularColorMap,t(O.specularColorMap,y.specularColorMapTransform)),O.specularIntensityMap&&(y.specularIntensityMap.value=O.specularIntensityMap,t(O.specularIntensityMap,y.specularIntensityMapTransform))}function P(y,O){O.matcap&&(y.matcap.value=O.matcap)}function X(y,O){let D=e.get(O).light;y.referencePosition.value.setFromMatrixPosition(D.matrixWorld),y.nearDistance.value=D.shadow.camera.near,y.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function tO(s,e,t,n){let r={},i={},c=[],o=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function h(D,L){let g=L.program;n.uniformBlockBinding(D,g)}function d(D,L){let g=r[D.id];g===void 0&&(P(D),g=f(D),r[D.id]=g,D.addEventListener("dispose",y));let q=L.program;n.updateUBOMapping(D,q);let F=e.render.frame;i[D.id]!==F&&(b(D),i[D.id]=F)}function f(D){let L=p();D.__bindingPointIndex=L;let g=s.createBuffer(),q=D.__size,F=D.usage;return s.bindBuffer(s.UNIFORM_BUFFER,g),s.bufferData(s.UNIFORM_BUFFER,q,F),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,L,g),g}function p(){for(let D=0;D<o;D++)if(c.indexOf(D)===-1)return c.push(D),D;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function b(D){let L=r[D.id],g=D.uniforms,q=D.__cache;s.bindBuffer(s.UNIFORM_BUFFER,L);for(let F=0,T=g.length;F<T;F++){let C=Array.isArray(g[F])?g[F]:[g[F]];for(let M=0,E=C.length;M<E;M++){let W=C[M];if(H(W,F,M,q)===!0){let $=W.__offset,J=Array.isArray(W.value)?W.value:[W.value],U=0;for(let Z=0;Z<J.length;Z++){let ee=J[Z],ae=X(ee);typeof ee=="number"||typeof ee=="boolean"?(W.__data[0]=ee,s.bufferSubData(s.UNIFORM_BUFFER,$+U,W.__data)):ee.isMatrix3?(W.__data[0]=ee.elements[0],W.__data[1]=ee.elements[1],W.__data[2]=ee.elements[2],W.__data[3]=0,W.__data[4]=ee.elements[3],W.__data[5]=ee.elements[4],W.__data[6]=ee.elements[5],W.__data[7]=0,W.__data[8]=ee.elements[6],W.__data[9]=ee.elements[7],W.__data[10]=ee.elements[8],W.__data[11]=0):(ee.toArray(W.__data,U),U+=ae.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,$,W.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function H(D,L,g,q){let F=D.value,T=L+"_"+g;if(q[T]===void 0)return typeof F=="number"||typeof F=="boolean"?q[T]=F:q[T]=F.clone(),!0;{let C=q[T];if(typeof F=="number"||typeof F=="boolean"){if(C!==F)return q[T]=F,!0}else if(C.equals(F)===!1)return C.copy(F),!0}return!1}function P(D){let L=D.uniforms,g=0,q=16;for(let T=0,C=L.length;T<C;T++){let M=Array.isArray(L[T])?L[T]:[L[T]];for(let E=0,W=M.length;E<W;E++){let $=M[E],J=Array.isArray($.value)?$.value:[$.value];for(let U=0,Z=J.length;U<Z;U++){let ee=J[U],ae=X(ee),oe=g%q;oe!==0&&q-oe<ae.boundary&&(g+=q-oe),$.__data=new Float32Array(ae.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=g,g+=ae.storage}}}let F=g%q;return F>0&&(g+=q-F),D.__size=g,D.__cache={},this}function X(D){let L={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(L.boundary=4,L.storage=4):D.isVector2?(L.boundary=8,L.storage=8):D.isVector3||D.isColor?(L.boundary=16,L.storage=12):D.isVector4?(L.boundary=16,L.storage=16):D.isMatrix3?(L.boundary=48,L.storage=48):D.isMatrix4?(L.boundary=64,L.storage=64):D.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",D),L}function y(D){let L=D.target;L.removeEventListener("dispose",y);let g=c.indexOf(L.__bindingPointIndex);c.splice(g,1),s.deleteBuffer(r[L.id]),delete r[L.id],delete i[L.id]}function O(){for(let D in r)s.deleteBuffer(r[D]);c=[],r={},i={}}return{bind:h,update:d,dispose:O}}var dv=class{constructor(e={}){let{canvas:t=l5(),context:n=null,depth:r=!0,stencil:i=!0,alpha:c=!1,antialias:o=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:d=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:p=!1}=e;this.isWebGLRenderer=!0;let b;n!==null?b=n.getContextAttributes().alpha:b=c;let H=new Uint32Array(4),P=new Int32Array(4),X=null,y=null,O=[],D=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=jn,this._useLegacyLights=!1,this.toneMapping=Fs,this.toneMappingExposure=1;let L=this,g=!1,q=0,F=0,T=null,C=-1,M=null,E=new hn,W=new hn,$=null,J=new Ft(0),U=0,Z=t.width,ee=t.height,ae=1,oe=null,de=null,le=new hn(0,0,Z,ee),se=new hn(0,0,Z,ee),xe=!1,me=new go,Le=!1,Se=!1,rt=null,tt=new Gt,ot=new Rt,Ot=new ce,Ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Nt(){return T===null?ae:1}let De=n;function Kt(ne,I){for(let k=0;k<ne.length;k++){let te=ne[k],re=t.getContext(te,I);if(re!==null)return re}return null}try{let ne={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:h,preserveDrawingBuffer:d,powerPreference:f,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r160"),t.addEventListener("webglcontextlost",R,!1),t.addEventListener("webglcontextrestored",be,!1),t.addEventListener("webglcontextcreationerror",nt,!1),De===null){let I=["webgl2","webgl","experimental-webgl"];if(L.isWebGL1Renderer===!0&&I.shift(),De=Kt(I,ne),De===null)throw Kt(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&De instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),De.getShaderPrecisionFormat===void 0&&(De.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(ne){throw console.error("THREE.WebGLRenderer: "+ne.message),ne}let fe,Oe,Me,ke,Ee,Q,A,Pe,Ke,Ce,_e,bt,Be,ut,Pt,yt,qe,It,Et,jt,Ht,dt,ie,Qe;function mt(){fe=new w8(De),Oe=new f8(De,fe,e),fe.init(Oe),dt=new _6(De,fe,Oe),Me=new Q6(De,fe,Oe),ke=new P8(De),Ee=new R6,Q=new J6(De,fe,Me,Ee,Oe,dt,ke),A=new p8(L),Pe=new X8(L),Ke=new N5(De,Oe),ie=new d8(De,fe,Ke,Oe),Ce=new O8(De,Ke,ke,ie),_e=new L8(De,Ce,Ke,ke),Et=new D8(De,Oe,Q),yt=new b8(Ee),bt=new F6(L,A,Pe,fe,Oe,ie,yt),Be=new eO(L,Ee),ut=new C6,Pt=new K6(fe,Oe),It=new h8(L,A,Pe,Me,_e,b,h),qe=new Y6(L,_e,Oe),Qe=new tO(De,ke,Oe,Me),jt=new v8(De,fe,ke,Oe),Ht=new H8(De,fe,ke,Oe),ke.programs=bt.programs,L.capabilities=Oe,L.extensions=fe,L.properties=Ee,L.renderLists=ut,L.shadowMap=qe,L.state=Me,L.info=ke}mt();let at=new hv(L,De);this.xr=at,this.getContext=function(){return De},this.getContextAttributes=function(){return De.getContextAttributes()},this.forceContextLoss=function(){let ne=fe.get("WEBGL_lose_context");ne&&ne.loseContext()},this.forceContextRestore=function(){let ne=fe.get("WEBGL_lose_context");ne&&ne.restoreContext()},this.getPixelRatio=function(){return ae},this.setPixelRatio=function(ne){ne!==void 0&&(ae=ne,this.setSize(Z,ee,!1))},this.getSize=function(ne){return ne.set(Z,ee)},this.setSize=function(ne,I,k=!0){if(at.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=ne,ee=I,t.width=Math.floor(ne*ae),t.height=Math.floor(I*ae),k===!0&&(t.style.width=ne+"px",t.style.height=I+"px"),this.setViewport(0,0,ne,I)},this.getDrawingBufferSize=function(ne){return ne.set(Z*ae,ee*ae).floor()},this.setDrawingBufferSize=function(ne,I,k){Z=ne,ee=I,ae=k,t.width=Math.floor(ne*k),t.height=Math.floor(I*k),this.setViewport(0,0,ne,I)},this.getCurrentViewport=function(ne){return ne.copy(E)},this.getViewport=function(ne){return ne.copy(le)},this.setViewport=function(ne,I,k,te){ne.isVector4?le.set(ne.x,ne.y,ne.z,ne.w):le.set(ne,I,k,te),Me.viewport(E.copy(le).multiplyScalar(ae).floor())},this.getScissor=function(ne){return ne.copy(se)},this.setScissor=function(ne,I,k,te){ne.isVector4?se.set(ne.x,ne.y,ne.z,ne.w):se.set(ne,I,k,te),Me.scissor(W.copy(se).multiplyScalar(ae).floor())},this.getScissorTest=function(){return xe},this.setScissorTest=function(ne){Me.setScissorTest(xe=ne)},this.setOpaqueSort=function(ne){oe=ne},this.setTransparentSort=function(ne){de=ne},this.getClearColor=function(ne){return ne.copy(It.getClearColor())},this.setClearColor=function(){It.setClearColor.apply(It,arguments)},this.getClearAlpha=function(){return It.getClearAlpha()},this.setClearAlpha=function(){It.setClearAlpha.apply(It,arguments)},this.clear=function(ne=!0,I=!0,k=!0){let te=0;if(ne){let re=!1;if(T!==null){let He=T.texture.format;re=He===Nb||He===jb||He===gb}if(re){let He=T.texture.type,Te=He===Rs||He===Vs||He===jv||He===Hc||He===Lb||He===Mb,Fe=It.getClearColor(),ct=It.getClearAlpha(),pt=Fe.r,wt=Fe.g,qt=Fe.b;Te?(H[0]=pt,H[1]=wt,H[2]=qt,H[3]=ct,De.clearBufferuiv(De.COLOR,0,H)):(P[0]=pt,P[1]=wt,P[2]=qt,P[3]=ct,De.clearBufferiv(De.COLOR,0,P))}else te|=De.COLOR_BUFFER_BIT}I&&(te|=De.DEPTH_BUFFER_BIT),k&&(te|=De.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),De.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",R,!1),t.removeEventListener("webglcontextrestored",be,!1),t.removeEventListener("webglcontextcreationerror",nt,!1),ut.dispose(),Pt.dispose(),Ee.dispose(),A.dispose(),Pe.dispose(),_e.dispose(),ie.dispose(),Qe.dispose(),bt.dispose(),at.dispose(),at.removeEventListener("sessionstart",xt),at.removeEventListener("sessionend",Xt),rt&&(rt.dispose(),rt=null),Ct.stop()};function R(ne){ne.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),g=!0}function be(){console.log("THREE.WebGLRenderer: Context Restored."),g=!1;let ne=ke.autoReset,I=qe.enabled,k=qe.autoUpdate,te=qe.needsUpdate,re=qe.type;mt(),ke.autoReset=ne,qe.enabled=I,qe.autoUpdate=k,qe.needsUpdate=te,qe.type=re}function nt(ne){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",ne.statusMessage)}function Y(ne){let I=ne.target;I.removeEventListener("dispose",Y),ze(I)}function ze(ne){Ge(ne),Ee.remove(ne)}function Ge(ne){let I=Ee.get(ne).programs;I!==void 0&&(I.forEach(function(k){bt.releaseProgram(k)}),ne.isShaderMaterial&&bt.releaseShaderCache(ne))}this.renderBufferDirect=function(ne,I,k,te,re,He){I===null&&(I=Ze);let Te=re.isMesh&&re.matrixWorld.determinant()<0,Fe=Xs(ne,I,k,te,re);Me.setMaterial(te,Te);let ct=k.index,pt=1;if(te.wireframe===!0){if(ct=Ce.getWireframeAttribute(k),ct===void 0)return;pt=2}let wt=k.drawRange,qt=k.attributes.position,on=wt.start*pt,En=(wt.start+wt.count)*pt;He!==null&&(on=Math.max(on,He.start*pt),En=Math.min(En,(He.start+He.count)*pt)),ct!==null?(on=Math.max(on,0),En=Math.min(En,ct.count)):qt!=null&&(on=Math.max(on,0),En=Math.min(En,qt.count));let Rn=En-on;if(Rn<0||Rn===1/0)return;ie.setup(re,te,Fe,k,ct);let ri,pn=jt;if(ct!==null&&(ri=Ke.get(ct),pn=Ht,pn.setIndex(ri)),re.isMesh)te.wireframe===!0?(Me.setLineWidth(te.wireframeLinewidth*Nt()),pn.setMode(De.LINES)):pn.setMode(De.TRIANGLES);else if(re.isLine){let At=te.linewidth;At===void 0&&(At=1),Me.setLineWidth(At*Nt()),re.isLineSegments?pn.setMode(De.LINES):re.isLineLoop?pn.setMode(De.LINE_LOOP):pn.setMode(De.LINE_STRIP)}else re.isPoints?pn.setMode(De.POINTS):re.isSprite&&pn.setMode(De.TRIANGLES);if(re.isBatchedMesh)pn.renderMultiDraw(re._multiDrawStarts,re._multiDrawCounts,re._multiDrawCount);else if(re.isInstancedMesh)pn.renderInstances(on,Rn,re.count);else if(k.isInstancedBufferGeometry){let At=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Ka=Math.min(k.instanceCount,At);pn.renderInstances(on,Rn,Ka)}else pn.render(on,Rn)};function st(ne,I,k){ne.transparent===!0&&ne.side===Vr&&ne.forceSinglePass===!1?(ne.side=Lr,ne.needsUpdate=!0,fr(ne,I,k),ne.side=Mi,ne.needsUpdate=!0,fr(ne,I,k),ne.side=Vr):fr(ne,I,k)}this.compile=function(ne,I,k=null){k===null&&(k=ne),y=Pt.get(k),y.init(),D.push(y),k.traverseVisible(function(re){re.isLight&&re.layers.test(I.layers)&&(y.pushLight(re),re.castShadow&&y.pushShadow(re))}),ne!==k&&ne.traverseVisible(function(re){re.isLight&&re.layers.test(I.layers)&&(y.pushLight(re),re.castShadow&&y.pushShadow(re))}),y.setupLights(L._useLegacyLights);let te=new Set;return ne.traverse(function(re){let He=re.material;if(He)if(Array.isArray(He))for(let Te=0;Te<He.length;Te++){let Fe=He[Te];st(Fe,k,re),te.add(Fe)}else st(He,k,re),te.add(He)}),D.pop(),y=null,te},this.compileAsync=function(ne,I,k=null){let te=this.compile(ne,I,k);return new Promise(re=>{function He(){if(te.forEach(function(Te){Ee.get(Te).currentProgram.isReady()&&te.delete(Te)}),te.size===0){re(ne);return}setTimeout(He,10)}fe.get("KHR_parallel_shader_compile")!==null?He():setTimeout(He,10)})};let it=null;function lt(ne){it&&it(ne)}function xt(){Ct.stop()}function Xt(){Ct.start()}let Ct=new Ib;Ct.setAnimationLoop(lt),typeof self<"u"&&Ct.setContext(self),this.setAnimationLoop=function(ne){it=ne,at.setAnimationLoop(ne),ne===null?Ct.stop():Ct.start()},at.addEventListener("sessionstart",xt),at.addEventListener("sessionend",Xt),this.render=function(ne,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(g===!0)return;ne.matrixWorldAutoUpdate===!0&&ne.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),at.enabled===!0&&at.isPresenting===!0&&(at.cameraAutoUpdate===!0&&at.updateCamera(I),I=at.getCamera()),ne.isScene===!0&&ne.onBeforeRender(L,ne,I,T),y=Pt.get(ne,D.length),y.init(),D.push(y),tt.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),me.setFromProjectionMatrix(tt),Se=this.localClippingEnabled,Le=yt.init(this.clippingPlanes,Se),X=ut.get(ne,O.length),X.init(),O.push(X),_t(ne,I,0,L.sortObjects),X.finish(),L.sortObjects===!0&&X.sort(oe,de),this.info.render.frame++,Le===!0&&yt.beginShadows();let k=y.state.shadowsArray;if(qe.render(k,ne,I),Le===!0&&yt.endShadows(),this.info.autoReset===!0&&this.info.reset(),It.render(X,ne),y.setupLights(L._useLegacyLights),I.isArrayCamera){let te=I.cameras;for(let re=0,He=te.length;re<He;re++){let Te=te[re];ft(X,ne,Te,Te.viewport)}}else ft(X,ne,I);T!==null&&(Q.updateMultisampleRenderTarget(T),Q.updateRenderTargetMipmap(T)),ne.isScene===!0&&ne.onAfterRender(L,ne,I),ie.resetDefaultState(),C=-1,M=null,D.pop(),D.length>0?y=D[D.length-1]:y=null,O.pop(),O.length>0?X=O[O.length-1]:X=null};function _t(ne,I,k,te){if(ne.visible===!1)return;if(ne.layers.test(I.layers)){if(ne.isGroup)k=ne.renderOrder;else if(ne.isLOD)ne.autoUpdate===!0&&ne.update(I);else if(ne.isLight)y.pushLight(ne),ne.castShadow&&y.pushShadow(ne);else if(ne.isSprite){if(!ne.frustumCulled||me.intersectsSprite(ne)){te&&Ot.setFromMatrixPosition(ne.matrixWorld).applyMatrix4(tt);let Te=_e.update(ne),Fe=ne.material;Fe.visible&&X.push(ne,Te,Fe,k,Ot.z,null)}}else if((ne.isMesh||ne.isLine||ne.isPoints)&&(!ne.frustumCulled||me.intersectsObject(ne))){let Te=_e.update(ne),Fe=ne.material;if(te&&(ne.boundingSphere!==void 0?(ne.boundingSphere===null&&ne.computeBoundingSphere(),Ot.copy(ne.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),Ot.copy(Te.boundingSphere.center)),Ot.applyMatrix4(ne.matrixWorld).applyMatrix4(tt)),Array.isArray(Fe)){let ct=Te.groups;for(let pt=0,wt=ct.length;pt<wt;pt++){let qt=ct[pt],on=Fe[qt.materialIndex];on&&on.visible&&X.push(ne,Te,on,k,Ot.z,qt)}}else Fe.visible&&X.push(ne,Te,Fe,k,Ot.z,null)}}let He=ne.children;for(let Te=0,Fe=He.length;Te<Fe;Te++)_t(He[Te],I,k,te)}function ft(ne,I,k,te){let re=ne.opaque,He=ne.transmissive,Te=ne.transparent;y.setupLightsView(k),Le===!0&&yt.setGlobalState(L.clippingPlanes,k),He.length>0&&Zt(re,He,I,k),te&&Me.viewport(E.copy(te)),re.length>0&&mi(re,I,k),He.length>0&&mi(He,I,k),Te.length>0&&mi(Te,I,k),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function Zt(ne,I,k,te){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;let He=Oe.isWebGL2;rt===null&&(rt=new ss(1,1,{generateMipmaps:!0,type:fe.has("EXT_color_buffer_half_float")?Do:Rs,minFilter:Is,samples:He?4:0})),L.getDrawingBufferSize(ot),He?rt.setSize(ot.x,ot.y):rt.setSize(ul(ot.x),ul(ot.y));let Te=L.getRenderTarget();L.setRenderTarget(rt),L.getClearColor(J),U=L.getClearAlpha(),U<1&&L.setClearColor(16777215,.5),L.clear();let Fe=L.toneMapping;L.toneMapping=Fs,mi(ne,k,te),Q.updateMultisampleRenderTarget(rt),Q.updateRenderTargetMipmap(rt);let ct=!1;for(let pt=0,wt=I.length;pt<wt;pt++){let qt=I[pt],on=qt.object,En=qt.geometry,Rn=qt.material,ri=qt.group;if(Rn.side===Vr&&on.layers.test(te.layers)){let pn=Rn.side;Rn.side=Lr,Rn.needsUpdate=!0,Zn(on,k,te,En,Rn,ri),Rn.side=pn,Rn.needsUpdate=!0,ct=!0}}ct===!0&&(Q.updateMultisampleRenderTarget(rt),Q.updateRenderTargetMipmap(rt)),L.setRenderTarget(Te),L.setClearColor(J,U),L.toneMapping=Fe}function mi(ne,I,k){let te=I.isScene===!0?I.overrideMaterial:null;for(let re=0,He=ne.length;re<He;re++){let Te=ne[re],Fe=Te.object,ct=Te.geometry,pt=te===null?Te.material:te,wt=Te.group;Fe.layers.test(k.layers)&&Zn(Fe,I,k,ct,pt,wt)}}function Zn(ne,I,k,te,re,He){ne.onBeforeRender(L,I,k,te,re,He),ne.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,ne.matrixWorld),ne.normalMatrix.getNormalMatrix(ne.modelViewMatrix),re.onBeforeRender(L,I,k,te,ne,He),re.transparent===!0&&re.side===Vr&&re.forceSinglePass===!1?(re.side=Lr,re.needsUpdate=!0,L.renderBufferDirect(k,I,te,re,ne,He),re.side=Mi,re.needsUpdate=!0,L.renderBufferDirect(k,I,te,re,ne,He),re.side=Vr):L.renderBufferDirect(k,I,te,re,ne,He),ne.onAfterRender(L,I,k,te,re,He)}function fr(ne,I,k){I.isScene!==!0&&(I=Ze);let te=Ee.get(ne),re=y.state.lights,He=y.state.shadowsArray,Te=re.state.version,Fe=bt.getParameters(ne,re.state,He,I,k),ct=bt.getProgramCacheKey(Fe),pt=te.programs;te.environment=ne.isMeshStandardMaterial?I.environment:null,te.fog=I.fog,te.envMap=(ne.isMeshStandardMaterial?Pe:A).get(ne.envMap||te.environment),pt===void 0&&(ne.addEventListener("dispose",Y),pt=new Map,te.programs=pt);let wt=pt.get(ct);if(wt!==void 0){if(te.currentProgram===wt&&te.lightsStateVersion===Te)return nc(ne,Fe),wt}else Fe.uniforms=bt.getUniforms(ne),ne.onBuild(k,Fe,L),ne.onBeforeCompile(Fe,L),wt=bt.acquireProgram(Fe,ct),pt.set(ct,wt),te.uniforms=Fe.uniforms;let qt=te.uniforms;return(!ne.isShaderMaterial&&!ne.isRawShaderMaterial||ne.clipping===!0)&&(qt.clippingPlanes=yt.uniform),nc(ne,Fe),te.needsLights=Yn(ne),te.lightsStateVersion=Te,te.needsLights&&(qt.ambientLightColor.value=re.state.ambient,qt.lightProbe.value=re.state.probe,qt.directionalLights.value=re.state.directional,qt.directionalLightShadows.value=re.state.directionalShadow,qt.spotLights.value=re.state.spot,qt.spotLightShadows.value=re.state.spotShadow,qt.rectAreaLights.value=re.state.rectArea,qt.ltc_1.value=re.state.rectAreaLTC1,qt.ltc_2.value=re.state.rectAreaLTC2,qt.pointLights.value=re.state.point,qt.pointLightShadows.value=re.state.pointShadow,qt.hemisphereLights.value=re.state.hemi,qt.directionalShadowMap.value=re.state.directionalShadowMap,qt.directionalShadowMatrix.value=re.state.directionalShadowMatrix,qt.spotShadowMap.value=re.state.spotShadowMap,qt.spotLightMatrix.value=re.state.spotLightMatrix,qt.spotLightMap.value=re.state.spotLightMap,qt.pointShadowMap.value=re.state.pointShadowMap,qt.pointShadowMatrix.value=re.state.pointShadowMatrix),te.currentProgram=wt,te.uniformsList=null,wt}function ni(ne){if(ne.uniformsList===null){let I=ne.currentProgram.getUniforms();ne.uniformsList=za.seqWithValue(I.seq,ne.uniforms)}return ne.uniformsList}function nc(ne,I){let k=Ee.get(ne);k.outputColorSpace=I.outputColorSpace,k.batching=I.batching,k.instancing=I.instancing,k.instancingColor=I.instancingColor,k.skinning=I.skinning,k.morphTargets=I.morphTargets,k.morphNormals=I.morphNormals,k.morphColors=I.morphColors,k.morphTargetsCount=I.morphTargetsCount,k.numClippingPlanes=I.numClippingPlanes,k.numIntersection=I.numClipIntersection,k.vertexAlphas=I.vertexAlphas,k.vertexTangents=I.vertexTangents,k.toneMapping=I.toneMapping}function Xs(ne,I,k,te,re){I.isScene!==!0&&(I=Ze),Q.resetTextureUnits();let He=I.fog,Te=te.isMeshStandardMaterial?I.environment:null,Fe=T===null?L.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Gn,ct=(te.isMeshStandardMaterial?Pe:A).get(te.envMap||Te),pt=te.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,wt=!!k.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),qt=!!k.morphAttributes.position,on=!!k.morphAttributes.normal,En=!!k.morphAttributes.color,Rn=Fs;te.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Rn=L.toneMapping);let ri=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,pn=ri!==void 0?ri.length:0,At=Ee.get(te),Ka=y.state.lights;if(Le===!0&&(Se===!0||ne!==M)){let br=ne===M&&te.id===C;yt.setState(te,ne,br)}let yn=!1;te.version===At.__version?(At.needsLights&&At.lightsStateVersion!==Ka.state.version||At.outputColorSpace!==Fe||re.isBatchedMesh&&At.batching===!1||!re.isBatchedMesh&&At.batching===!0||re.isInstancedMesh&&At.instancing===!1||!re.isInstancedMesh&&At.instancing===!0||re.isSkinnedMesh&&At.skinning===!1||!re.isSkinnedMesh&&At.skinning===!0||re.isInstancedMesh&&At.instancingColor===!0&&re.instanceColor===null||re.isInstancedMesh&&At.instancingColor===!1&&re.instanceColor!==null||At.envMap!==ct||te.fog===!0&&At.fog!==He||At.numClippingPlanes!==void 0&&(At.numClippingPlanes!==yt.numPlanes||At.numIntersection!==yt.numIntersection)||At.vertexAlphas!==pt||At.vertexTangents!==wt||At.morphTargets!==qt||At.morphNormals!==on||At.morphColors!==En||At.toneMapping!==Rn||Oe.isWebGL2===!0&&At.morphTargetsCount!==pn)&&(yn=!0):(yn=!0,At.__version=te.version);let Ci=At.currentProgram;yn===!0&&(Ci=fr(te,I,re));let au=!1,rc=!1,Ba=!1,Jn=Ci.getUniforms(),Wi=At.uniforms;if(Me.useProgram(Ci.program)&&(au=!0,rc=!0,Ba=!0),te.id!==C&&(C=te.id,rc=!0),au||M!==ne){Jn.setValue(De,"projectionMatrix",ne.projectionMatrix),Jn.setValue(De,"viewMatrix",ne.matrixWorldInverse);let br=Jn.map.cameraPosition;br!==void 0&&br.setValue(De,Ot.setFromMatrixPosition(ne.matrixWorld)),Oe.logarithmicDepthBuffer&&Jn.setValue(De,"logDepthBufFC",2/(Math.log(ne.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&Jn.setValue(De,"isOrthographic",ne.isOrthographicCamera===!0),M!==ne&&(M=ne,rc=!0,Ba=!0)}if(re.isSkinnedMesh){Jn.setOptional(De,re,"bindMatrix"),Jn.setOptional(De,re,"bindMatrixInverse");let br=re.skeleton;br&&(Oe.floatVertexTextures?(br.boneTexture===null&&br.computeBoneTexture(),Jn.setValue(De,"boneTexture",br.boneTexture,Q)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}re.isBatchedMesh&&(Jn.setOptional(De,re,"batchingTexture"),Jn.setValue(De,"batchingTexture",re._matricesTexture,Q));let ws=k.morphAttributes;if((ws.position!==void 0||ws.normal!==void 0||ws.color!==void 0&&Oe.isWebGL2===!0)&&Et.update(re,k,Ci),(rc||At.receiveShadow!==re.receiveShadow)&&(At.receiveShadow=re.receiveShadow,Jn.setValue(De,"receiveShadow",re.receiveShadow)),te.isMeshGouraudMaterial&&te.envMap!==null&&(Wi.envMap.value=ct,Wi.flipEnvMap.value=ct.isCubeTexture&&ct.isRenderTargetTexture===!1?-1:1),rc&&(Jn.setValue(De,"toneMappingExposure",L.toneMappingExposure),At.needsLights&&cu(Wi,Ba),He&&te.fog===!0&&Be.refreshFogUniforms(Wi,He),Be.refreshMaterialUniforms(Wi,te,ae,ee,rt),za.upload(De,ni(At),Wi,Q)),te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(za.upload(De,ni(At),Wi,Q),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&Jn.setValue(De,"center",re.center),Jn.setValue(De,"modelViewMatrix",re.modelViewMatrix),Jn.setValue(De,"normalMatrix",re.normalMatrix),Jn.setValue(De,"modelMatrix",re.matrixWorld),te.isShaderMaterial||te.isRawShaderMaterial){let br=te.uniformsGroups;for(let Uc=0,ou=br.length;Uc<ou;Uc++)if(Oe.isWebGL2){let Za=br[Uc];Qe.update(Za,Ci),Qe.bind(Za,Ci)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ci}function cu(ne,I){ne.ambientLightColor.needsUpdate=I,ne.lightProbe.needsUpdate=I,ne.directionalLights.needsUpdate=I,ne.directionalLightShadows.needsUpdate=I,ne.pointLights.needsUpdate=I,ne.pointLightShadows.needsUpdate=I,ne.spotLights.needsUpdate=I,ne.spotLightShadows.needsUpdate=I,ne.rectAreaLights.needsUpdate=I,ne.hemisphereLights.needsUpdate=I}function Yn(ne){return ne.isMeshLambertMaterial||ne.isMeshToonMaterial||ne.isMeshPhongMaterial||ne.isMeshStandardMaterial||ne.isShadowMaterial||ne.isShaderMaterial&&ne.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(ne,I,k){Ee.get(ne.texture).__webglTexture=I,Ee.get(ne.depthTexture).__webglTexture=k;let te=Ee.get(ne);te.__hasExternalTextures=!0,te.__hasExternalTextures&&(te.__autoAllocateDepthBuffer=k===void 0,te.__autoAllocateDepthBuffer||fe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),te.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(ne,I){let k=Ee.get(ne);k.__webglFramebuffer=I,k.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(ne,I=0,k=0){T=ne,q=I,F=k;let te=!0,re=null,He=!1,Te=!1;if(ne){let ct=Ee.get(ne);ct.__useDefaultFramebuffer!==void 0?(Me.bindFramebuffer(De.FRAMEBUFFER,null),te=!1):ct.__webglFramebuffer===void 0?Q.setupRenderTarget(ne):ct.__hasExternalTextures&&Q.rebindTextures(ne,Ee.get(ne.texture).__webglTexture,Ee.get(ne.depthTexture).__webglTexture);let pt=ne.texture;(pt.isData3DTexture||pt.isDataArrayTexture||pt.isCompressedArrayTexture)&&(Te=!0);let wt=Ee.get(ne).__webglFramebuffer;ne.isWebGLCubeRenderTarget?(Array.isArray(wt[I])?re=wt[I][k]:re=wt[I],He=!0):Oe.isWebGL2&&ne.samples>0&&Q.useMultisampledRTT(ne)===!1?re=Ee.get(ne).__webglMultisampledFramebuffer:Array.isArray(wt)?re=wt[k]:re=wt,E.copy(ne.viewport),W.copy(ne.scissor),$=ne.scissorTest}else E.copy(le).multiplyScalar(ae).floor(),W.copy(se).multiplyScalar(ae).floor(),$=xe;if(Me.bindFramebuffer(De.FRAMEBUFFER,re)&&Oe.drawBuffers&&te&&Me.drawBuffers(ne,re),Me.viewport(E),Me.scissor(W),Me.setScissorTest($),He){let ct=Ee.get(ne.texture);De.framebufferTexture2D(De.FRAMEBUFFER,De.COLOR_ATTACHMENT0,De.TEXTURE_CUBE_MAP_POSITIVE_X+I,ct.__webglTexture,k)}else if(Te){let ct=Ee.get(ne.texture),pt=I||0;De.framebufferTextureLayer(De.FRAMEBUFFER,De.COLOR_ATTACHMENT0,ct.__webglTexture,k||0,pt)}C=-1},this.readRenderTargetPixels=function(ne,I,k,te,re,He,Te){if(!(ne&&ne.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=Ee.get(ne).__webglFramebuffer;if(ne.isWebGLCubeRenderTarget&&Te!==void 0&&(Fe=Fe[Te]),Fe){Me.bindFramebuffer(De.FRAMEBUFFER,Fe);try{let ct=ne.texture,pt=ct.format,wt=ct.type;if(pt!==Zr&&dt.convert(pt)!==De.getParameter(De.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let qt=wt===Do&&(fe.has("EXT_color_buffer_half_float")||Oe.isWebGL2&&fe.has("EXT_color_buffer_float"));if(wt!==Rs&&dt.convert(wt)!==De.getParameter(De.IMPLEMENTATION_COLOR_READ_TYPE)&&!(wt===rs&&(Oe.isWebGL2||fe.has("OES_texture_float")||fe.has("WEBGL_color_buffer_float")))&&!qt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=ne.width-te&&k>=0&&k<=ne.height-re&&De.readPixels(I,k,te,re,dt.convert(pt),dt.convert(wt),He)}finally{let ct=T!==null?Ee.get(T).__webglFramebuffer:null;Me.bindFramebuffer(De.FRAMEBUFFER,ct)}}},this.copyFramebufferToTexture=function(ne,I,k=0){let te=Math.pow(2,-k),re=Math.floor(I.image.width*te),He=Math.floor(I.image.height*te);Q.setTexture2D(I,0),De.copyTexSubImage2D(De.TEXTURE_2D,k,0,0,ne.x,ne.y,re,He),Me.unbindTexture()},this.copyTextureToTexture=function(ne,I,k,te=0){let re=I.image.width,He=I.image.height,Te=dt.convert(k.format),Fe=dt.convert(k.type);Q.setTexture2D(k,0),De.pixelStorei(De.UNPACK_FLIP_Y_WEBGL,k.flipY),De.pixelStorei(De.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),De.pixelStorei(De.UNPACK_ALIGNMENT,k.unpackAlignment),I.isDataTexture?De.texSubImage2D(De.TEXTURE_2D,te,ne.x,ne.y,re,He,Te,Fe,I.image.data):I.isCompressedTexture?De.compressedTexSubImage2D(De.TEXTURE_2D,te,ne.x,ne.y,I.mipmaps[0].width,I.mipmaps[0].height,Te,I.mipmaps[0].data):De.texSubImage2D(De.TEXTURE_2D,te,ne.x,ne.y,Te,Fe,I.image),te===0&&k.generateMipmaps&&De.generateMipmap(De.TEXTURE_2D),Me.unbindTexture()},this.copyTextureToTexture3D=function(ne,I,k,te,re=0){if(L.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let He=ne.max.x-ne.min.x+1,Te=ne.max.y-ne.min.y+1,Fe=ne.max.z-ne.min.z+1,ct=dt.convert(te.format),pt=dt.convert(te.type),wt;if(te.isData3DTexture)Q.setTexture3D(te,0),wt=De.TEXTURE_3D;else if(te.isDataArrayTexture||te.isCompressedArrayTexture)Q.setTexture2DArray(te,0),wt=De.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}De.pixelStorei(De.UNPACK_FLIP_Y_WEBGL,te.flipY),De.pixelStorei(De.UNPACK_PREMULTIPLY_ALPHA_WEBGL,te.premultiplyAlpha),De.pixelStorei(De.UNPACK_ALIGNMENT,te.unpackAlignment);let qt=De.getParameter(De.UNPACK_ROW_LENGTH),on=De.getParameter(De.UNPACK_IMAGE_HEIGHT),En=De.getParameter(De.UNPACK_SKIP_PIXELS),Rn=De.getParameter(De.UNPACK_SKIP_ROWS),ri=De.getParameter(De.UNPACK_SKIP_IMAGES),pn=k.isCompressedTexture?k.mipmaps[re]:k.image;De.pixelStorei(De.UNPACK_ROW_LENGTH,pn.width),De.pixelStorei(De.UNPACK_IMAGE_HEIGHT,pn.height),De.pixelStorei(De.UNPACK_SKIP_PIXELS,ne.min.x),De.pixelStorei(De.UNPACK_SKIP_ROWS,ne.min.y),De.pixelStorei(De.UNPACK_SKIP_IMAGES,ne.min.z),k.isDataTexture||k.isData3DTexture?De.texSubImage3D(wt,re,I.x,I.y,I.z,He,Te,Fe,ct,pt,pn.data):k.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),De.compressedTexSubImage3D(wt,re,I.x,I.y,I.z,He,Te,Fe,ct,pn.data)):De.texSubImage3D(wt,re,I.x,I.y,I.z,He,Te,Fe,ct,pt,pn),De.pixelStorei(De.UNPACK_ROW_LENGTH,qt),De.pixelStorei(De.UNPACK_IMAGE_HEIGHT,on),De.pixelStorei(De.UNPACK_SKIP_PIXELS,En),De.pixelStorei(De.UNPACK_SKIP_ROWS,Rn),De.pixelStorei(De.UNPACK_SKIP_IMAGES,ri),re===0&&te.generateMipmaps&&De.generateMipmap(wt),Me.unbindTexture()},this.initTexture=function(ne){ne.isCubeTexture?Q.setTextureCube(ne,0):ne.isData3DTexture?Q.setTexture3D(ne,0):ne.isDataArrayTexture||ne.isCompressedArrayTexture?Q.setTexture2DArray(ne,0):Q.setTexture2D(ne,0),Me.unbindTexture()},this.resetState=function(){q=0,F=0,T=null,Me.reset(),ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return is}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Tv?"display-p3":"srgb",t.unpackColorSpace=$t.workingColorSpace===El?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===jn?yc:Vb}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===yc?jn:Gn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},vv=class extends dv{};vv.prototype.isWebGL1Renderer=!0;var No=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Yd,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=fi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,i=this.stride;r<i;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},pr=new ce,To=class s{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)pr.fromBufferAttribute(this,t),pr.applyMatrix4(e),this.setXYZ(t,pr.x,pr.y,pr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)pr.fromBufferAttribute(this,t),pr.applyNormalMatrix(e),this.setXYZ(t,pr.x,pr.y,pr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)pr.fromBufferAttribute(this,t),pr.transformDirection(e),this.setXYZ(t,pr.x,pr.y,pr.z);return this}setX(e,t){return this.normalized&&(t=an(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=an(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=an(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=an(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Li(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Li(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Li(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Li(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=an(t,this.array),n=an(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=an(t,this.array),n=an(n,this.array),r=an(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=an(t,this.array),n=an(n,this.array),r=an(r,this.array),i=an(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=i,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let i=0;i<this.itemSize;i++)t.push(this.data.array[r+i])}return new Nn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let i=0;i<this.itemSize;i++)t.push(this.data.array[r+i])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var ib=new ce,sb=new hn,cb=new hn,nO=new ce,ab=new Gt,Ju=new ce,Cd=new qr,ob=new Gt,Wd=new cs,Xl=class extends ht{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=G2,this.bindMatrix=new Gt,this.bindMatrixInverse=new Gt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Xr),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ju),this.boundingBox.expandByPoint(Ju)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new qr),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ju),this.boundingSphere.expandByPoint(Ju)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Cd.copy(this.boundingSphere),Cd.applyMatrix4(r),e.ray.intersectsSphere(Cd)!==!1&&(ob.copy(r).invert(),Wd.copy(e.ray).applyMatrix4(ob),!(this.boundingBox!==null&&Wd.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Wd)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new hn,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);let i=1/e.manhattanLength();i!==1/0?e.multiplyScalar(i):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===G2?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===jm?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,r=this.geometry;sb.fromBufferAttribute(r.attributes.skinIndex,e),cb.fromBufferAttribute(r.attributes.skinWeight,e),ib.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let i=0;i<4;i++){let c=cb.getComponent(i);if(c!==0){let o=sb.getComponent(i);ab.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(nO.copy(ib).applyMatrix4(ab),c)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}},So=class extends On{constructor(){super(),this.isBone=!0,this.type="Bone"}},fv=class extends ur{constructor(e=null,t=1,n=1,r,i,c,o,h,d=Un,f=Un,p,b){super(null,c,o,h,d,f,r,i,p,b),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},ub=new Gt,rO=new Gt,wl=class s{constructor(e=[],t=[]){this.uuid=fi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,r=this.bones.length;n<r;n++)this.boneInverses.push(new Gt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Gt;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let i=0,c=e.length;i<c;i++){let o=e[i]?e[i].matrixWorld:rO;ub.multiplyMatrices(o,t[i]),ub.toArray(n,i*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new fv(t,e,e,Zr,rs);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){let i=e.bones[n],c=t[i];c===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",i),c=new So),this.bones.push(c),this.boneInverses.push(new Gt().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let r=0,i=t.length;r<i;r++){let c=t[r];e.bones.push(c.uuid);let o=n[r];e.boneInverses.push(o.toArray())}return e}},Lc=class extends Nn{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Xa=new Gt,lb=new Gt,_u=[],hb=new Xr,iO=new Gt,xo=new ht,mo=new qr,Ol=class extends ht{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Lc(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,iO)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Xr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Xa),hb.copy(e.boundingBox).applyMatrix4(Xa),this.boundingBox.union(hb)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new qr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Xa),mo.copy(e.boundingSphere).applyMatrix4(Xa),this.boundingSphere.union(mo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let n=this.matrixWorld,r=this.count;if(xo.geometry=this.geometry,xo.material=this.material,xo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),mo.copy(this.boundingSphere),mo.applyMatrix4(n),e.ray.intersectsSphere(mo)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,Xa),lb.multiplyMatrices(n,Xa),xo.matrixWorld=lb,xo.raycast(e,_u);for(let c=0,o=_u.length;c<o;c++){let h=_u[c];h.instanceId=i,h.object=this,t.push(h)}_u.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Lc(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var bi=class extends nr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ft(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},db=new ce,vb=new ce,fb=new Gt,Ud=new cs,$u=new qr,wr=class extends On{constructor(e=new Hn,t=new bi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let r=1,i=t.count;r<i;r++)db.fromBufferAttribute(t,r-1),vb.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=db.distanceTo(vb);e.setAttribute("lineDistance",new Qt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Line.threshold,c=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),$u.copy(n.boundingSphere),$u.applyMatrix4(r),$u.radius+=i,e.ray.intersectsSphere($u)===!1)return;fb.copy(r).invert(),Ud.copy(e.ray).applyMatrix4(fb);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),h=o*o,d=new ce,f=new ce,p=new ce,b=new ce,H=this.isLineSegments?2:1,P=n.index,y=n.attributes.position;if(P!==null){let O=Math.max(0,c.start),D=Math.min(P.count,c.start+c.count);for(let L=O,g=D-1;L<g;L+=H){let q=P.getX(L),F=P.getX(L+1);if(d.fromBufferAttribute(y,q),f.fromBufferAttribute(y,F),Ud.distanceSqToSegment(d,f,b,p)>h)continue;b.applyMatrix4(this.matrixWorld);let C=e.ray.origin.distanceTo(b);C<e.near||C>e.far||t.push({distance:C,point:p.clone().applyMatrix4(this.matrixWorld),index:L,face:null,faceIndex:null,object:this})}}else{let O=Math.max(0,c.start),D=Math.min(y.count,c.start+c.count);for(let L=O,g=D-1;L<g;L+=H){if(d.fromBufferAttribute(y,L),f.fromBufferAttribute(y,L+1),Ud.distanceSqToSegment(d,f,b,p)>h)continue;b.applyMatrix4(this.matrixWorld);let F=e.ray.origin.distanceTo(b);F<e.near||F>e.far||t.push({distance:F,point:p.clone().applyMatrix4(this.matrixWorld),index:L,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,c=r.length;i<c;i++){let o=r[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=i}}}}},bb=new ce,pb=new ce,Mc=class extends wr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let r=0,i=t.count;r<i;r+=2)bb.fromBufferAttribute(t,r),pb.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+bb.distanceTo(pb);e.setAttribute("lineDistance",new Qt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Hl=class extends wr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},ji=class extends nr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ft(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},xb=new Gt,bv=new cs,el=new qr,tl=new ce,Cs=class extends On{constructor(e=new Hn,t=new ji){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,c=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),el.copy(n.boundingSphere),el.applyMatrix4(r),el.radius+=i,e.ray.intersectsSphere(el)===!1)return;xb.copy(r).invert(),bv.copy(e.ray).applyMatrix4(xb);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),h=o*o,d=n.index,p=n.attributes.position;if(d!==null){let b=Math.max(0,c.start),H=Math.min(d.count,c.start+c.count);for(let P=b,X=H;P<X;P++){let y=d.getX(P);tl.fromBufferAttribute(p,y),mb(tl,y,h,r,e,t,this)}}else{let b=Math.max(0,c.start),H=Math.min(p.count,c.start+c.count);for(let P=b,X=H;P<X;P++)tl.fromBufferAttribute(p,P),mb(tl,P,h,r,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,c=r.length;i<c;i++){let o=r[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=i}}}}};function mb(s,e,t,n,r,i,c){let o=bv.distanceSqToPoint(s);if(o<t){let h=new ce;bv.closestPointToPoint(s,h),h.applyMatrix4(n);let d=r.ray.origin.distanceTo(h);if(d<r.near||d>r.far)return;i.push({distance:d,distanceToRay:Math.sqrt(o),point:h,index:e,face:null,object:c})}}var rr=class s extends Hn{constructor(e=1,t=1,n=1,r=32,i=1,c=!1,o=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:c,thetaStart:o,thetaLength:h};let d=this;r=Math.floor(r),i=Math.floor(i);let f=[],p=[],b=[],H=[],P=0,X=[],y=n/2,O=0;D(),c===!1&&(e>0&&L(!0),t>0&&L(!1)),this.setIndex(f),this.setAttribute("position",new Qt(p,3)),this.setAttribute("normal",new Qt(b,3)),this.setAttribute("uv",new Qt(H,2));function D(){let g=new ce,q=new ce,F=0,T=(t-e)/n;for(let C=0;C<=i;C++){let M=[],E=C/i,W=E*(t-e)+e;for(let $=0;$<=r;$++){let J=$/r,U=J*h+o,Z=Math.sin(U),ee=Math.cos(U);q.x=W*Z,q.y=-E*n+y,q.z=W*ee,p.push(q.x,q.y,q.z),g.set(Z,T,ee).normalize(),b.push(g.x,g.y,g.z),H.push(J,1-E),M.push(P++)}X.push(M)}for(let C=0;C<r;C++)for(let M=0;M<i;M++){let E=X[M][C],W=X[M+1][C],$=X[M+1][C+1],J=X[M][C+1];f.push(E,W,J),f.push(W,$,J),F+=6}d.addGroup(O,F,0),O+=F}function L(g){let q=P,F=new Rt,T=new ce,C=0,M=g===!0?e:t,E=g===!0?1:-1;for(let $=1;$<=r;$++)p.push(0,y*E,0),b.push(0,E,0),H.push(.5,.5),P++;let W=P;for(let $=0;$<=r;$++){let U=$/r*h+o,Z=Math.cos(U),ee=Math.sin(U);T.x=M*ee,T.y=y*E,T.z=M*Z,p.push(T.x,T.y,T.z),b.push(0,E,0),F.x=Z*.5+.5,F.y=ee*.5*E+.5,H.push(F.x,F.y),P++}for(let $=0;$<r;$++){let J=q+$,U=W+$;g===!0?f.push(U,U+1,J):f.push(U+1,U,J),C+=3}d.addGroup(O,C,g===!0?1:2),O+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var pv=class s extends Hn{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};let i=[],c=[];o(r),d(n),f(),this.setAttribute("position",new Qt(i,3)),this.setAttribute("normal",new Qt(i.slice(),3)),this.setAttribute("uv",new Qt(c,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(D){let L=new ce,g=new ce,q=new ce;for(let F=0;F<t.length;F+=3)H(t[F+0],L),H(t[F+1],g),H(t[F+2],q),h(L,g,q,D)}function h(D,L,g,q){let F=q+1,T=[];for(let C=0;C<=F;C++){T[C]=[];let M=D.clone().lerp(g,C/F),E=L.clone().lerp(g,C/F),W=F-C;for(let $=0;$<=W;$++)$===0&&C===F?T[C][$]=M:T[C][$]=M.clone().lerp(E,$/W)}for(let C=0;C<F;C++)for(let M=0;M<2*(F-C)-1;M++){let E=Math.floor(M/2);M%2===0?(b(T[C][E+1]),b(T[C+1][E]),b(T[C][E])):(b(T[C][E+1]),b(T[C+1][E+1]),b(T[C+1][E]))}}function d(D){let L=new ce;for(let g=0;g<i.length;g+=3)L.x=i[g+0],L.y=i[g+1],L.z=i[g+2],L.normalize().multiplyScalar(D),i[g+0]=L.x,i[g+1]=L.y,i[g+2]=L.z}function f(){let D=new ce;for(let L=0;L<i.length;L+=3){D.x=i[L+0],D.y=i[L+1],D.z=i[L+2];let g=y(D)/2/Math.PI+.5,q=O(D)/Math.PI+.5;c.push(g,1-q)}P(),p()}function p(){for(let D=0;D<c.length;D+=6){let L=c[D+0],g=c[D+2],q=c[D+4],F=Math.max(L,g,q),T=Math.min(L,g,q);F>.9&&T<.1&&(L<.2&&(c[D+0]+=1),g<.2&&(c[D+2]+=1),q<.2&&(c[D+4]+=1))}}function b(D){i.push(D.x,D.y,D.z)}function H(D,L){let g=D*3;L.x=e[g+0],L.y=e[g+1],L.z=e[g+2]}function P(){let D=new ce,L=new ce,g=new ce,q=new ce,F=new Rt,T=new Rt,C=new Rt;for(let M=0,E=0;M<i.length;M+=9,E+=6){D.set(i[M+0],i[M+1],i[M+2]),L.set(i[M+3],i[M+4],i[M+5]),g.set(i[M+6],i[M+7],i[M+8]),F.set(c[E+0],c[E+1]),T.set(c[E+2],c[E+3]),C.set(c[E+4],c[E+5]),q.copy(D).add(L).add(g).divideScalar(3);let W=y(q);X(F,E+0,D,W),X(T,E+2,L,W),X(C,E+4,g,W)}}function X(D,L,g,q){q<0&&D.x===1&&(c[L]=D.x-1),g.x===0&&g.z===0&&(c[L]=q/2/Math.PI+.5)}function y(D){return Math.atan2(D.z,-D.x)}function O(D){return Math.atan2(-D.y,Math.sqrt(D.x*D.x+D.z*D.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.vertices,e.indices,e.radius,e.details)}};var gc=class s extends pv{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,r,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}};var Pl=class s extends Hn{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,c=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:c,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let h=Math.min(c+o,Math.PI),d=0,f=[],p=new ce,b=new ce,H=[],P=[],X=[],y=[];for(let O=0;O<=n;O++){let D=[],L=O/n,g=0;O===0&&c===0?g=.5/t:O===n&&h===Math.PI&&(g=-.5/t);for(let q=0;q<=t;q++){let F=q/t;p.x=-e*Math.cos(r+F*i)*Math.sin(c+L*o),p.y=e*Math.cos(c+L*o),p.z=e*Math.sin(r+F*i)*Math.sin(c+L*o),P.push(p.x,p.y,p.z),b.copy(p).normalize(),X.push(b.x,b.y,b.z),y.push(F+g,1-L),D.push(d++)}f.push(D)}for(let O=0;O<n;O++)for(let D=0;D<t;D++){let L=f[O][D+1],g=f[O][D],q=f[O+1][D],F=f[O+1][D+1];(O!==0||c>0)&&H.push(L,g,F),(O!==n-1||h<Math.PI)&&H.push(g,q,F)}this.setIndex(H),this.setAttribute("position",new Qt(P,3)),this.setAttribute("normal",new Qt(X,3)),this.setAttribute("uv",new Qt(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Ws=class s extends Hn{constructor(e=1,t=.4,n=12,r=48,i=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:i},n=Math.floor(n),r=Math.floor(r);let c=[],o=[],h=[],d=[],f=new ce,p=new ce,b=new ce;for(let H=0;H<=n;H++)for(let P=0;P<=r;P++){let X=P/r*i,y=H/n*Math.PI*2;p.x=(e+t*Math.cos(y))*Math.cos(X),p.y=(e+t*Math.cos(y))*Math.sin(X),p.z=t*Math.sin(y),o.push(p.x,p.y,p.z),f.x=e*Math.cos(X),f.y=e*Math.sin(X),b.subVectors(p,f).normalize(),h.push(b.x,b.y,b.z),d.push(P/r),d.push(H/n)}for(let H=1;H<=n;H++)for(let P=1;P<=r;P++){let X=(r+1)*H+P-1,y=(r+1)*(H-1)+P-1,O=(r+1)*(H-1)+P,D=(r+1)*H+P;c.push(X,y,D),c.push(y,O,D)}this.setIndex(c),this.setAttribute("position",new Qt(o,3)),this.setAttribute("normal",new Qt(h,3)),this.setAttribute("uv",new Qt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var os=class extends nr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ft(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nv,this.normalScale=new Rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Qr=class extends os{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Rt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return er(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ft(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ft(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ft(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},yl=class extends nr{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ft(16777215),this.specular=new Ft(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nv,this.normalScale=new Rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Mv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function nl(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function sO(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function cO(s){function e(r,i){return s[r]-s[i]}let t=s.length,n=new Array(t);for(let r=0;r!==t;++r)n[r]=r;return n.sort(e),n}function Xb(s,e,t){let n=s.length,r=new s.constructor(n);for(let i=0,c=0;c!==n;++i){let o=t[i]*e;for(let h=0;h!==e;++h)r[c++]=s[o+h]}return r}function kb(s,e,t,n){let r=1,i=s[0];for(;i!==void 0&&i[n]===void 0;)i=s[r++];if(i===void 0)return;let c=i[n];if(c!==void 0)if(Array.isArray(c))do c=i[n],c!==void 0&&(e.push(i.time),t.push.apply(t,c)),i=s[r++];while(i!==void 0);else if(c.toArray!==void 0)do c=i[n],c!==void 0&&(e.push(i.time),c.toArray(t,t.length)),i=s[r++];while(i!==void 0);else do c=i[n],c!==void 0&&(e.push(i.time),t.push(c)),i=s[r++];while(i!==void 0)}var Us=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];n:{e:{let c;t:{r:if(!(e<r)){for(let o=n+2;;){if(r===void 0){if(e<i)break r;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(i=r,r=t[++n],e<r)break e}c=t.length;break t}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let h=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===h)break;if(r=i,i=t[--n-1],e>=i)break e}c=n,n=0;break t}break n}for(;n<c;){let o=n+c>>>1;e<t[o]?c=o:n=o+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let c=0;c!==r;++c)t[c]=n[i+c];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},xv=class extends Us{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:b9,endingEnd:b9}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,c=e+1,o=r[i],h=r[c];if(o===void 0)switch(this.getSettings_().endingStart){case p9:i=e,o=2*t-n;break;case x9:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(h===void 0)switch(this.getSettings_().endingEnd){case p9:c=e,h=2*n-t;break;case x9:c=1,h=n+r[1]-r[0];break;default:c=e-1,h=t}let d=(n-t)*.5,f=this.valueSize;this._weightPrev=d/(t-o),this._weightNext=d/(h-n),this._offsetPrev=i*f,this._offsetNext=c*f}interpolate_(e,t,n,r){let i=this.resultBuffer,c=this.sampleValues,o=this.valueSize,h=e*o,d=h-o,f=this._offsetPrev,p=this._offsetNext,b=this._weightPrev,H=this._weightNext,P=(n-t)/(r-t),X=P*P,y=X*P,O=-b*y+2*b*X-b*P,D=(1+b)*y+(-1.5-2*b)*X+(-.5+b)*P+1,L=(-1-H)*y+(1.5+H)*X+.5*P,g=H*y-H*X;for(let q=0;q!==o;++q)i[q]=O*c[f+q]+D*c[d+q]+L*c[h+q]+g*c[p+q];return i}},mv=class extends Us{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,c=this.sampleValues,o=this.valueSize,h=e*o,d=h-o,f=(n-t)/(r-t),p=1-f;for(let b=0;b!==o;++b)i[b]=c[d+b]*p+c[h+b]*f;return i}},Xv=class extends Us{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Jr=class{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=nl(t,this.TimeBufferType),this.values=nl(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:nl(e.times,Array),values:nl(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Xv(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new mv(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new xv(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ga:t=this.InterpolantFactoryMethodDiscrete;break;case Dc:t=this.InterpolantFactoryMethodLinear;break;case xd:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ga;case this.InterpolantFactoryMethodLinear:return Dc;case this.InterpolantFactoryMethodSmooth:return xd}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,i=0,c=r-1;for(;i!==r&&n[i]<e;)++i;for(;c!==-1&&n[c]>t;)--c;if(++c,i!==0||c!==r){i>=c&&(c=Math.max(c,1),i=c-1);let o=this.getValueSize();this.times=n.slice(i,c),this.values=this.values.slice(i*o,c*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let c=null;for(let o=0;o!==i;o++){let h=n[o];if(typeof h=="number"&&isNaN(h)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,h),e=!1;break}if(c!==null&&c>h){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,h,c),e=!1;break}c=h}if(r!==void 0&&sO(r))for(let o=0,h=r.length;o!==h;++o){let d=r[o];if(isNaN(d)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,d),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===xd,i=e.length-1,c=1;for(let o=1;o<i;++o){let h=!1,d=e[o],f=e[o+1];if(d!==f&&(o!==1||d!==e[0]))if(r)h=!0;else{let p=o*n,b=p-n,H=p+n;for(let P=0;P!==n;++P){let X=t[p+P];if(X!==t[b+P]||X!==t[H+P]){h=!0;break}}}if(h){if(o!==c){e[c]=e[o];let p=o*n,b=c*n;for(let H=0;H!==n;++H)t[b+H]=t[p+H]}++c}}if(i>0){e[c]=e[i];for(let o=i*n,h=c*n,d=0;d!==n;++d)t[h+d]=t[o+d];++c}return c!==e.length?(this.times=e.slice(0,c),this.values=t.slice(0,c*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};Jr.prototype.TimeBufferType=Float32Array;Jr.prototype.ValueBufferType=Float32Array;Jr.prototype.DefaultInterpolation=Dc;var Gs=class extends Jr{};Gs.prototype.ValueTypeName="bool";Gs.prototype.ValueBufferType=Array;Gs.prototype.DefaultInterpolation=ga;Gs.prototype.InterpolantFactoryMethodLinear=void 0;Gs.prototype.InterpolantFactoryMethodSmooth=void 0;var zl=class extends Jr{};zl.prototype.ValueTypeName="color";var us=class extends Jr{};us.prototype.ValueTypeName="number";var wv=class extends Us{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,c=this.sampleValues,o=this.valueSize,h=(n-t)/(r-t),d=e*o;for(let f=d+o;d!==f;d+=4)wn.slerpFlat(i,0,c,d-o,c,d,h);return i}},Ni=class extends Jr{InterpolantFactoryMethodLinear(e){return new wv(this.times,this.values,this.getValueSize(),e)}};Ni.prototype.ValueTypeName="quaternion";Ni.prototype.DefaultInterpolation=Dc;Ni.prototype.InterpolantFactoryMethodSmooth=void 0;var As=class extends Jr{};As.prototype.ValueTypeName="string";As.prototype.ValueBufferType=Array;As.prototype.DefaultInterpolation=ga;As.prototype.InterpolantFactoryMethodLinear=void 0;As.prototype.InterpolantFactoryMethodSmooth=void 0;var ls=class extends Jr{};ls.prototype.ValueTypeName="vector";var Dl=class{constructor(e,t=-1,n,r=Im){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=fi(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,r=1/(e.fps||1);for(let c=0,o=n.length;c!==o;++c)t.push(oO(n[c]).scale(r));let i=new this(e.name,e.duration,t,e.blendMode);return i.uuid=e.uuid,i}static toJSON(e){let t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let i=0,c=n.length;i!==c;++i)t.push(Jr.toJSON(n[i]));return r}static CreateFromMorphTargetSequence(e,t,n,r){let i=t.length,c=[];for(let o=0;o<i;o++){let h=[],d=[];h.push((o+i-1)%i,o,(o+1)%i),d.push(0,1,0);let f=cO(h);h=Xb(h,1,f),d=Xb(d,1,f),!r&&h[0]===0&&(h.push(i),d.push(d[0])),c.push(new us(".morphTargetInfluences["+t[o].name+"]",h,d).scale(1/n))}return new this(e,-1,c)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let r=e;n=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<n.length;r++)if(n[r].name===t)return n[r];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let r={},i=/^([\w-]*?)([\d]+)$/;for(let o=0,h=e.length;o<h;o++){let d=e[o],f=d.name.match(i);if(f&&f.length>1){let p=f[1],b=r[p];b||(r[p]=b=[]),b.push(d)}}let c=[];for(let o in r)c.push(this.CreateFromMorphTargetSequence(o,r[o],t,n));return c}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(p,b,H,P,X){if(H.length!==0){let y=[],O=[];kb(H,y,O,P),y.length!==0&&X.push(new p(b,y,O))}},r=[],i=e.name||"default",c=e.fps||30,o=e.blendMode,h=e.length||-1,d=e.hierarchy||[];for(let p=0;p<d.length;p++){let b=d[p].keys;if(!(!b||b.length===0))if(b[0].morphTargets){let H={},P;for(P=0;P<b.length;P++)if(b[P].morphTargets)for(let X=0;X<b[P].morphTargets.length;X++)H[b[P].morphTargets[X]]=-1;for(let X in H){let y=[],O=[];for(let D=0;D!==b[P].morphTargets.length;++D){let L=b[P];y.push(L.time),O.push(L.morphTarget===X?1:0)}r.push(new us(".morphTargetInfluence["+X+"]",y,O))}h=H.length*c}else{let H=".bones["+t[p].name+"]";n(ls,H+".position",b,"pos",r),n(Ni,H+".quaternion",b,"rot",r),n(ls,H+".scale",b,"scl",r)}}return r.length===0?null:new this(i,h,r,o)}resetDuration(){let e=this.tracks,t=0;for(let n=0,r=e.length;n!==r;++n){let i=this.tracks[n];t=Math.max(t,i.times[i.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function aO(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return us;case"vector":case"vector2":case"vector3":case"vector4":return ls;case"color":return zl;case"quaternion":return Ni;case"bool":case"boolean":return Gs;case"string":return As}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function oO(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=aO(s.type);if(s.times===void 0){let t=[],n=[];kb(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}var Es={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}},Vo=class{constructor(e,t,n){let r=this,i=!1,c=0,o=0,h,d=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(f){o++,i===!1&&r.onStart!==void 0&&r.onStart(f,c,o),i=!0},this.itemEnd=function(f){c++,r.onProgress!==void 0&&r.onProgress(f,c,o),c===o&&(i=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(f){r.onError!==void 0&&r.onError(f)},this.resolveURL=function(f){return h?h(f):f},this.setURLModifier=function(f){return h=f,this},this.addHandler=function(f,p){return d.push(f,p),this},this.removeHandler=function(f){let p=d.indexOf(f);return p!==-1&&d.splice(p,2),this},this.getHandler=function(f){for(let p=0,b=d.length;p<b;p+=2){let H=d[p],P=d[p+1];if(H.global&&(H.lastIndex=0),H.test(f))return P}return null}}},uO=new Vo,Rr=class{constructor(e){this.manager=e!==void 0?e:uO,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,i){n.load(e,r,t,i)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Rr.DEFAULT_MATERIAL_NAME="__DEFAULT";var ts={},Ov=class extends Error{constructor(e,t){super(e),this.response=t}},hs=class extends Rr{constructor(e){super(e)}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=Es.get(e);if(i!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(i),this.manager.itemEnd(e)},0),i;if(ts[e]!==void 0){ts[e].push({onLoad:t,onProgress:n,onError:r});return}ts[e]=[],ts[e].push({onLoad:t,onProgress:n,onError:r});let c=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,h=this.responseType;fetch(c).then(d=>{if(d.status===200||d.status===0){if(d.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||d.body===void 0||d.body.getReader===void 0)return d;let f=ts[e],p=d.body.getReader(),b=d.headers.get("Content-Length")||d.headers.get("X-File-Size"),H=b?parseInt(b):0,P=H!==0,X=0,y=new ReadableStream({start(O){D();function D(){p.read().then(({done:L,value:g})=>{if(L)O.close();else{X+=g.byteLength;let q=new ProgressEvent("progress",{lengthComputable:P,loaded:X,total:H});for(let F=0,T=f.length;F<T;F++){let C=f[F];C.onProgress&&C.onProgress(q)}O.enqueue(g),D()}})}}});return new Response(y)}else throw new Ov(`fetch for "${d.url}" responded with ${d.status}: ${d.statusText}`,d)}).then(d=>{switch(h){case"arraybuffer":return d.arrayBuffer();case"blob":return d.blob();case"document":return d.text().then(f=>new DOMParser().parseFromString(f,o));case"json":return d.json();default:if(o===void 0)return d.text();{let p=/charset="?([^;"\s]*)"?/i.exec(o),b=p&&p[1]?p[1].toLowerCase():void 0,H=new TextDecoder(b);return d.arrayBuffer().then(P=>H.decode(P))}}}).then(d=>{Es.add(e,d);let f=ts[e];delete ts[e];for(let p=0,b=f.length;p<b;p++){let H=f[p];H.onLoad&&H.onLoad(d)}}).catch(d=>{let f=ts[e];if(f===void 0)throw this.manager.itemError(e),d;delete ts[e];for(let p=0,b=f.length;p<b;p++){let H=f[p];H.onError&&H.onError(d)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var Hv=class extends Rr{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=this,c=Es.get(e);if(c!==void 0)return i.manager.itemStart(e),setTimeout(function(){t&&t(c),i.manager.itemEnd(e)},0),c;let o=Lo("img");function h(){f(),Es.add(e,this),t&&t(this),i.manager.itemEnd(e)}function d(p){f(),r&&r(p),i.manager.itemError(e),i.manager.itemEnd(e)}function f(){o.removeEventListener("load",h,!1),o.removeEventListener("error",d,!1)}return o.addEventListener("load",h,!1),o.addEventListener("error",d,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),i.manager.itemStart(e),o.src=e,o}};var Ll=class extends Rr{constructor(e){super(e)}load(e,t,n,r){let i=new ur,c=new Hv(this.manager);return c.setCrossOrigin(this.crossOrigin),c.setPath(this.path),c.load(e,function(o){i.image=o,i.needsUpdate=!0,t!==void 0&&t(i)},n,r),i}},Eo=class extends On{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ft(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}};var Gd=new Gt,wb=new ce,Ob=new ce,qo=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Rt(512,512),this.map=null,this.mapPass=null,this.matrix=new Gt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new go,this._frameExtents=new Rt(1,1),this._viewportCount=1,this._viewports=[new hn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;wb.setFromMatrixPosition(e.matrixWorld),t.position.copy(wb),Ob.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ob),t.updateMatrixWorld(),Gd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gd),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Gd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Pv=class extends qo{constructor(){super(new tr(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=ja*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,i=e.distance||t.far;(n!==t.fov||r!==t.aspect||i!==t.far)&&(t.fov=n,t.aspect=r,t.far=i,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Ml=class extends Eo{constructor(e,t,n=0,r=Math.PI/3,i=0,c=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(On.DEFAULT_UP),this.updateMatrix(),this.target=new On,this.distance=n,this.angle=r,this.penumbra=i,this.decay=c,this.map=null,this.shadow=new Pv}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Hb=new Gt,Xo=new ce,Ad=new ce,yv=class extends qo{constructor(){super(new tr(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Rt(4,2),this._viewportCount=6,this._viewports=[new hn(2,1,1,1),new hn(0,1,1,1),new hn(3,1,1,1),new hn(1,1,1,1),new hn(3,0,1,1),new hn(1,0,1,1)],this._cubeDirections=[new ce(1,0,0),new ce(-1,0,0),new ce(0,0,1),new ce(0,0,-1),new ce(0,1,0),new ce(0,-1,0)],this._cubeUps=[new ce(0,1,0),new ce(0,1,0),new ce(0,1,0),new ce(0,1,0),new ce(0,0,1),new ce(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,r=this.matrix,i=e.distance||n.far;i!==n.far&&(n.far=i,n.updateProjectionMatrix()),Xo.setFromMatrixPosition(e.matrixWorld),n.position.copy(Xo),Ad.copy(n.position),Ad.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ad),n.updateMatrixWorld(),r.makeTranslation(-Xo.x,-Xo.y,-Xo.z),Hb.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Hb)}},gl=class extends Eo{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new yv}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},zv=class extends qo{constructor(){super(new Sa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},jl=class extends Eo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(On.DEFAULT_UP),this.updateMatrix(),this.target=new On,this.shadow=new zv}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var ks=class{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,r=e.length;n<r;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Nl=class extends Rr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=this,c=Es.get(e);if(c!==void 0){if(i.manager.itemStart(e),c.then){c.then(d=>{t&&t(d),i.manager.itemEnd(e)}).catch(d=>{r&&r(d)});return}return setTimeout(function(){t&&t(c),i.manager.itemEnd(e)},0),c}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;let h=fetch(e,o).then(function(d){return d.blob()}).then(function(d){return createImageBitmap(d,Object.assign(i.options,{colorSpaceConversion:"none"}))}).then(function(d){return Es.add(e,d),t&&t(d),i.manager.itemEnd(e),d}).catch(function(d){r&&r(d),Es.remove(e),i.manager.itemError(e),i.manager.itemEnd(e)});Es.add(e,h),i.manager.itemStart(e)}};var Ev="\\[\\]\\.:\\/",lO=new RegExp("["+Ev+"]","g"),qv="[^"+Ev+"]",hO="[^"+Ev.replace("\\.","")+"]",dO=/((?:WC+[\/:])*)/.source.replace("WC",qv),vO=/(WCOD+)?/.source.replace("WCOD",hO),fO=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",qv),bO=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",qv),pO=new RegExp("^"+dO+vO+fO+bO+"$"),xO=["material","materials","bones","map"],Dv=class{constructor(e,t,n){let r=n||bn.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},bn=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(lO,"")}static parseTrackName(e){let t=pO.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let i=n.nodeName.substring(r+1);xO.indexOf(i)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=i)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(i){for(let c=0;c<i.length;c++){let o=i[c];if(o.name===t||o.uuid===t)return o;let h=n(o.children);if(h)return h}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,r=t.propertyName,i=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let d=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let f=0;f<e.length;f++)if(e[f].name===d){d=f;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(d!==void 0){if(e[d]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[d]}}let c=e[r];if(c===void 0){let d=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+d+"."+r+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let h=this.BindingType.Direct;if(i!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[i]!==void 0&&(i=e.morphTargetDictionary[i])}h=this.BindingType.ArrayElement,this.resolvedProperty=c,this.propertyIndex=i}else c.fromArray!==void 0&&c.toArray!==void 0?(h=this.BindingType.HasFromToArray,this.resolvedProperty=c):Array.isArray(c)?(h=this.BindingType.EntireArray,this.resolvedProperty=c):this.propertyName=r;this.getValue=this.GetterByBindingType[h],this.setValue=this.SetterByBindingTypeAndVersioning[h][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};bn.Composite=Dv;bn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};bn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};bn.prototype.GetterByBindingType=[bn.prototype._getValue_direct,bn.prototype._getValue_array,bn.prototype._getValue_arrayElement,bn.prototype._getValue_toArray];bn.prototype.SetterByBindingTypeAndVersioning=[[bn.prototype._setValue_direct,bn.prototype._setValue_direct_setNeedsUpdate,bn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[bn.prototype._setValue_array,bn.prototype._setValue_array_setNeedsUpdate,bn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[bn.prototype._setValue_arrayElement,bn.prototype._setValue_arrayElement_setNeedsUpdate,bn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[bn.prototype._setValue_fromArray,bn.prototype._setValue_fromArray_setNeedsUpdate,bn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var eD=new Float32Array(1);var Tl=class{constructor(e,t,n=0,r=1/0){this.ray=new cs(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Mo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Lv(e,this,n,t),n.sort(Pb),n}intersectObjects(e,t=!0,n=[]){for(let r=0,i=e.length;r<i;r++)Lv(e[r],this,n,t);return n.sort(Pb),n}};function Pb(s,e){return s.distance-e.distance}function Lv(s,e,t,n){if(s.layers.test(e.layers)&&s.raycast(e,t),n===!0){let r=s.children;for(let i=0,c=r.length;i<c;i++)Lv(r[i],e,t,!0)}}var Fo=class{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(er(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");var Tc=new Tl,lr=new ce,Ks=new ce,Mn=new wn,Kb={X:new ce(1,0,0),Y:new ce(0,1,0),Z:new ce(0,0,1)},Fv={type:"change"},Bb={type:"mouseDown"},Zb={type:"mouseUp",mode:null},Yb={type:"objectChange"},Ul=class extends On{constructor(e,t){super(),t===void 0&&(console.warn('THREE.TransformControls: The second parameter "domElement" is now mandatory.'),t=document),this.isTransformControls=!0,this.visible=!1,this.domElement=t,this.domElement.style.touchAction="none";let n=new Iv;this._gizmo=n,this.add(n);let r=new Cv;this._plane=r,this.add(r);let i=this;function c(D,L){let g=L;Object.defineProperty(i,D,{get:function(){return g!==void 0?g:L},set:function(q){g!==q&&(g=q,r[D]=q,n[D]=q,i.dispatchEvent({type:D+"-changed",value:q}),i.dispatchEvent(Fv))}}),i[D]=L,r[D]=L,n[D]=L}c("camera",e),c("object",void 0),c("enabled",!0),c("axis",null),c("mode","translate"),c("translationSnap",null),c("rotationSnap",null),c("scaleSnap",null),c("space","world"),c("size",1),c("dragging",!1),c("showX",!0),c("showY",!0),c("showZ",!0);let o=new ce,h=new ce,d=new wn,f=new wn,p=new ce,b=new wn,H=new ce,P=new ce,X=new ce,y=0,O=new ce;c("worldPosition",o),c("worldPositionStart",h),c("worldQuaternion",d),c("worldQuaternionStart",f),c("cameraPosition",p),c("cameraQuaternion",b),c("pointStart",H),c("pointEnd",P),c("rotationAxis",X),c("rotationAngle",y),c("eye",O),this._offset=new ce,this._startNorm=new ce,this._endNorm=new ce,this._cameraScale=new ce,this._parentPosition=new ce,this._parentQuaternion=new wn,this._parentQuaternionInv=new wn,this._parentScale=new ce,this._worldScaleStart=new ce,this._worldQuaternionInv=new wn,this._worldScale=new ce,this._positionStart=new ce,this._quaternionStart=new wn,this._scaleStart=new ce,this._getPointer=mO.bind(this),this._onPointerDown=wO.bind(this),this._onPointerHover=XO.bind(this),this._onPointerMove=OO.bind(this),this._onPointerUp=HO.bind(this),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointermove",this._onPointerHover),this.domElement.addEventListener("pointerup",this._onPointerUp)}updateMatrixWorld(){this.object!==void 0&&(this.object.updateMatrixWorld(),this.object.parent===null?console.error("TransformControls: The attached 3D object must be a part of the scene graph."):this.object.parent.matrixWorld.decompose(this._parentPosition,this._parentQuaternion,this._parentScale),this.object.matrixWorld.decompose(this.worldPosition,this.worldQuaternion,this._worldScale),this._parentQuaternionInv.copy(this._parentQuaternion).invert(),this._worldQuaternionInv.copy(this.worldQuaternion).invert()),this.camera.updateMatrixWorld(),this.camera.matrixWorld.decompose(this.cameraPosition,this.cameraQuaternion,this._cameraScale),this.camera.isOrthographicCamera?this.camera.getWorldDirection(this.eye).negate():this.eye.copy(this.cameraPosition).sub(this.worldPosition).normalize(),super.updateMatrixWorld(this)}pointerHover(e){if(this.object===void 0||this.dragging===!0)return;Tc.setFromCamera(e,this.camera);let t=Rv(this._gizmo.picker[this.mode],Tc);t?this.axis=t.object.name:this.axis=null}pointerDown(e){if(!(this.object===void 0||this.dragging===!0||e.button!==0)&&this.axis!==null){Tc.setFromCamera(e,this.camera);let t=Rv(this._plane,Tc,!0);t&&(this.object.updateMatrixWorld(),this.object.parent.updateMatrixWorld(),this._positionStart.copy(this.object.position),this._quaternionStart.copy(this.object.quaternion),this._scaleStart.copy(this.object.scale),this.object.matrixWorld.decompose(this.worldPositionStart,this.worldQuaternionStart,this._worldScaleStart),this.pointStart.copy(t.point).sub(this.worldPositionStart)),this.dragging=!0,Bb.mode=this.mode,this.dispatchEvent(Bb)}}pointerMove(e){let t=this.axis,n=this.mode,r=this.object,i=this.space;if(n==="scale"?i="local":(t==="E"||t==="XYZE"||t==="XYZ")&&(i="world"),r===void 0||t===null||this.dragging===!1||e.button!==-1)return;Tc.setFromCamera(e,this.camera);let c=Rv(this._plane,Tc,!0);if(c){if(this.pointEnd.copy(c.point).sub(this.worldPositionStart),n==="translate")this._offset.copy(this.pointEnd).sub(this.pointStart),i==="local"&&t!=="XYZ"&&this._offset.applyQuaternion(this._worldQuaternionInv),t.indexOf("X")===-1&&(this._offset.x=0),t.indexOf("Y")===-1&&(this._offset.y=0),t.indexOf("Z")===-1&&(this._offset.z=0),i==="local"&&t!=="XYZ"?this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale):this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale),r.position.copy(this._offset).add(this._positionStart),this.translationSnap&&(i==="local"&&(r.position.applyQuaternion(Mn.copy(this._quaternionStart).invert()),t.search("X")!==-1&&(r.position.x=Math.round(r.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(r.position.y=Math.round(r.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(r.position.z=Math.round(r.position.z/this.translationSnap)*this.translationSnap),r.position.applyQuaternion(this._quaternionStart)),i==="world"&&(r.parent&&r.position.add(lr.setFromMatrixPosition(r.parent.matrixWorld)),t.search("X")!==-1&&(r.position.x=Math.round(r.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(r.position.y=Math.round(r.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(r.position.z=Math.round(r.position.z/this.translationSnap)*this.translationSnap),r.parent&&r.position.sub(lr.setFromMatrixPosition(r.parent.matrixWorld))));else if(n==="scale"){if(t.search("XYZ")!==-1){let o=this.pointEnd.length()/this.pointStart.length();this.pointEnd.dot(this.pointStart)<0&&(o*=-1),Ks.set(o,o,o)}else lr.copy(this.pointStart),Ks.copy(this.pointEnd),lr.applyQuaternion(this._worldQuaternionInv),Ks.applyQuaternion(this._worldQuaternionInv),Ks.divide(lr),t.search("X")===-1&&(Ks.x=1),t.search("Y")===-1&&(Ks.y=1),t.search("Z")===-1&&(Ks.z=1);r.scale.copy(this._scaleStart).multiply(Ks),this.scaleSnap&&(t.search("X")!==-1&&(r.scale.x=Math.round(r.scale.x/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Y")!==-1&&(r.scale.y=Math.round(r.scale.y/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Z")!==-1&&(r.scale.z=Math.round(r.scale.z/this.scaleSnap)*this.scaleSnap||this.scaleSnap))}else if(n==="rotate"){this._offset.copy(this.pointEnd).sub(this.pointStart);let o=20/this.worldPosition.distanceTo(lr.setFromMatrixPosition(this.camera.matrixWorld)),h=!1;t==="XYZE"?(this.rotationAxis.copy(this._offset).cross(this.eye).normalize(),this.rotationAngle=this._offset.dot(lr.copy(this.rotationAxis).cross(this.eye))*o):(t==="X"||t==="Y"||t==="Z")&&(this.rotationAxis.copy(Kb[t]),lr.copy(Kb[t]),i==="local"&&lr.applyQuaternion(this.worldQuaternion),lr.cross(this.eye),lr.length()===0?h=!0:this.rotationAngle=this._offset.dot(lr.normalize())*o),(t==="E"||h)&&(this.rotationAxis.copy(this.eye),this.rotationAngle=this.pointEnd.angleTo(this.pointStart),this._startNorm.copy(this.pointStart).normalize(),this._endNorm.copy(this.pointEnd).normalize(),this.rotationAngle*=this._endNorm.cross(this._startNorm).dot(this.eye)<0?1:-1),this.rotationSnap&&(this.rotationAngle=Math.round(this.rotationAngle/this.rotationSnap)*this.rotationSnap),i==="local"&&t!=="E"&&t!=="XYZE"?(r.quaternion.copy(this._quaternionStart),r.quaternion.multiply(Mn.setFromAxisAngle(this.rotationAxis,this.rotationAngle)).normalize()):(this.rotationAxis.applyQuaternion(this._parentQuaternionInv),r.quaternion.copy(Mn.setFromAxisAngle(this.rotationAxis,this.rotationAngle)),r.quaternion.multiply(this._quaternionStart).normalize())}this.dispatchEvent(Fv),this.dispatchEvent(Yb)}}pointerUp(e){e.button===0&&(this.dragging&&this.axis!==null&&(Zb.mode=this.mode,this.dispatchEvent(Zb)),this.dragging=!1,this.axis=null)}dispose(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerHover),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.traverse(function(e){e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()})}attach(e){return this.object=e,this.visible=!0,this}detach(){return this.object=void 0,this.visible=!1,this.axis=null,this}reset(){this.enabled&&this.dragging&&(this.object.position.copy(this._positionStart),this.object.quaternion.copy(this._quaternionStart),this.object.scale.copy(this._scaleStart),this.dispatchEvent(Fv),this.dispatchEvent(Yb),this.pointStart.copy(this.pointEnd))}getRaycaster(){return Tc}getMode(){return this.mode}setMode(e){this.mode=e}setTranslationSnap(e){this.translationSnap=e}setRotationSnap(e){this.rotationSnap=e}setScaleSnap(e){this.scaleSnap=e}setSize(e){this.size=e}setSpace(e){this.space=e}};function mO(s){if(this.domElement.ownerDocument.pointerLockElement)return{x:0,y:0,button:s.button};{let e=this.domElement.getBoundingClientRect();return{x:(s.clientX-e.left)/e.width*2-1,y:-(s.clientY-e.top)/e.height*2+1,button:s.button}}}function XO(s){if(this.enabled)switch(s.pointerType){case"mouse":case"pen":this.pointerHover(this._getPointer(s));break}}function wO(s){this.enabled&&(document.pointerLockElement||this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.pointerHover(this._getPointer(s)),this.pointerDown(this._getPointer(s)))}function OO(s){this.enabled&&this.pointerMove(this._getPointer(s))}function HO(s){this.enabled&&(this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.pointerUp(this._getPointer(s)))}function Rv(s,e,t){let n=e.intersectObject(s,!0);for(let r=0;r<n.length;r++)if(n[r].object.visible||t)return n[r];return!1}var Rl=new Na,dn=new ce(0,1,0),Qb=new ce(0,0,0),Jb=new Gt,Il=new wn,Wl=new wn,Ti=new ce,_b=new Gt,Wo=new ce(1,0,0),Sc=new ce(0,1,0),Uo=new ce(0,0,1),Cl=new ce,Io=new ce,Co=new ce,Iv=class extends On{constructor(){super(),this.isTransformControlsGizmo=!0,this.type="TransformControlsGizmo";let e=new Fr({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),t=new bi({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),n=e.clone();n.opacity=.15;let r=t.clone();r.opacity=.5;let i=e.clone();i.color.setHex(16711680);let c=e.clone();c.color.setHex(65280);let o=e.clone();o.color.setHex(255);let h=e.clone();h.color.setHex(16711680),h.opacity=.5;let d=e.clone();d.color.setHex(65280),d.opacity=.5;let f=e.clone();f.color.setHex(255),f.opacity=.5;let p=e.clone();p.opacity=.25;let b=e.clone();b.color.setHex(16776960),b.opacity=.25,e.clone().color.setHex(16776960);let P=e.clone();P.color.setHex(7895160);let X=new rr(0,.04,.1,12);X.translate(0,.05,0);let y=new qn(.08,.08,.08);y.translate(0,.04,0);let O=new Hn;O.setAttribute("position",new Qt([0,0,0,1,0,0],3));let D=new rr(.0075,.0075,.5,3);D.translate(0,.25,0);function L(Z,ee){let ae=new Ws(Z,.0075,3,64,ee*Math.PI*2);return ae.rotateY(Math.PI/2),ae.rotateX(Math.PI/2),ae}function g(){let Z=new Hn;return Z.setAttribute("position",new Qt([0,0,0,1,1,1],3)),Z}let q={X:[[new ht(X,i),[.5,0,0],[0,0,-Math.PI/2]],[new ht(X,i),[-.5,0,0],[0,0,Math.PI/2]],[new ht(D,i),[0,0,0],[0,0,-Math.PI/2]]],Y:[[new ht(X,c),[0,.5,0]],[new ht(X,c),[0,-.5,0],[Math.PI,0,0]],[new ht(D,c)]],Z:[[new ht(X,o),[0,0,.5],[Math.PI/2,0,0]],[new ht(X,o),[0,0,-.5],[-Math.PI/2,0,0]],[new ht(D,o),null,[Math.PI/2,0,0]]],XYZ:[[new ht(new gc(.1,0),p.clone()),[0,0,0]]],XY:[[new ht(new qn(.15,.15,.01),f.clone()),[.15,.15,0]]],YZ:[[new ht(new qn(.15,.15,.01),h.clone()),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new ht(new qn(.15,.15,.01),d.clone()),[.15,0,.15],[-Math.PI/2,0,0]]]},F={X:[[new ht(new rr(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new ht(new rr(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new ht(new rr(.2,0,.6,4),n),[0,.3,0]],[new ht(new rr(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new ht(new rr(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new ht(new rr(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XYZ:[[new ht(new gc(.2,0),n)]],XY:[[new ht(new qn(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new ht(new qn(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new ht(new qn(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]]},T={START:[[new ht(new gc(.01,2),r),null,null,null,"helper"]],END:[[new ht(new gc(.01,2),r),null,null,null,"helper"]],DELTA:[[new wr(g(),r),null,null,null,"helper"]],X:[[new wr(O,r.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new wr(O,r.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new wr(O,r.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]},C={XYZE:[[new ht(L(.5,1),P),null,[0,Math.PI/2,0]]],X:[[new ht(L(.5,.5),i)]],Y:[[new ht(L(.5,.5),c),null,[0,0,-Math.PI/2]]],Z:[[new ht(L(.5,.5),o),null,[0,Math.PI/2,0]]],E:[[new ht(L(.75,1),b),null,[0,Math.PI/2,0]]]},M={AXIS:[[new wr(O,r.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]]},E={XYZE:[[new ht(new Pl(.25,10,8),n)]],X:[[new ht(new Ws(.5,.1,4,24),n),[0,0,0],[0,-Math.PI/2,-Math.PI/2]]],Y:[[new ht(new Ws(.5,.1,4,24),n),[0,0,0],[Math.PI/2,0,0]]],Z:[[new ht(new Ws(.5,.1,4,24),n),[0,0,0],[0,0,-Math.PI/2]]],E:[[new ht(new Ws(.75,.1,2,24),n)]]},W={X:[[new ht(y,i),[.5,0,0],[0,0,-Math.PI/2]],[new ht(D,i),[0,0,0],[0,0,-Math.PI/2]],[new ht(y,i),[-.5,0,0],[0,0,Math.PI/2]]],Y:[[new ht(y,c),[0,.5,0]],[new ht(D,c)],[new ht(y,c),[0,-.5,0],[0,0,Math.PI]]],Z:[[new ht(y,o),[0,0,.5],[Math.PI/2,0,0]],[new ht(D,o),[0,0,0],[Math.PI/2,0,0]],[new ht(y,o),[0,0,-.5],[-Math.PI/2,0,0]]],XY:[[new ht(new qn(.15,.15,.01),f),[.15,.15,0]]],YZ:[[new ht(new qn(.15,.15,.01),h),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new ht(new qn(.15,.15,.01),d),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new ht(new qn(.1,.1,.1),p.clone())]]},$={X:[[new ht(new rr(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new ht(new rr(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new ht(new rr(.2,0,.6,4),n),[0,.3,0]],[new ht(new rr(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new ht(new rr(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new ht(new rr(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XY:[[new ht(new qn(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new ht(new qn(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new ht(new qn(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new ht(new qn(.2,.2,.2),n),[0,0,0]]]},J={X:[[new wr(O,r.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new wr(O,r.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new wr(O,r.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]};function U(Z){let ee=new On;for(let ae in Z)for(let oe=Z[ae].length;oe--;){let de=Z[ae][oe][0].clone(),le=Z[ae][oe][1],se=Z[ae][oe][2],xe=Z[ae][oe][3],me=Z[ae][oe][4];de.name=ae,de.tag=me,le&&de.position.set(le[0],le[1],le[2]),se&&de.rotation.set(se[0],se[1],se[2]),xe&&de.scale.set(xe[0],xe[1],xe[2]),de.updateMatrix();let Le=de.geometry.clone();Le.applyMatrix4(de.matrix),de.geometry=Le,de.renderOrder=1/0,de.position.set(0,0,0),de.rotation.set(0,0,0),de.scale.set(1,1,1),ee.add(de)}return ee}this.gizmo={},this.picker={},this.helper={},this.add(this.gizmo.translate=U(q)),this.add(this.gizmo.rotate=U(C)),this.add(this.gizmo.scale=U(W)),this.add(this.picker.translate=U(F)),this.add(this.picker.rotate=U(E)),this.add(this.picker.scale=U($)),this.add(this.helper.translate=U(T)),this.add(this.helper.rotate=U(M)),this.add(this.helper.scale=U(J)),this.picker.translate.visible=!1,this.picker.rotate.visible=!1,this.picker.scale.visible=!1}updateMatrixWorld(e){let n=(this.mode==="scale"?"local":this.space)==="local"?this.worldQuaternion:Wl;this.gizmo.translate.visible=this.mode==="translate",this.gizmo.rotate.visible=this.mode==="rotate",this.gizmo.scale.visible=this.mode==="scale",this.helper.translate.visible=this.mode==="translate",this.helper.rotate.visible=this.mode==="rotate",this.helper.scale.visible=this.mode==="scale";let r=[];r=r.concat(this.picker[this.mode].children),r=r.concat(this.gizmo[this.mode].children),r=r.concat(this.helper[this.mode].children);for(let i=0;i<r.length;i++){let c=r[i];c.visible=!0,c.rotation.set(0,0,0),c.position.copy(this.worldPosition);let o;if(this.camera.isOrthographicCamera?o=(this.camera.top-this.camera.bottom)/this.camera.zoom:o=this.worldPosition.distanceTo(this.cameraPosition)*Math.min(1.9*Math.tan(Math.PI*this.camera.fov/360)/this.camera.zoom,7),c.scale.set(1,1,1).multiplyScalar(o*this.size/4),c.tag==="helper"){c.visible=!1,c.name==="AXIS"?(c.visible=!!this.axis,this.axis==="X"&&(Mn.setFromEuler(Rl.set(0,0,0)),c.quaternion.copy(n).multiply(Mn),Math.abs(dn.copy(Wo).applyQuaternion(n).dot(this.eye))>.9&&(c.visible=!1)),this.axis==="Y"&&(Mn.setFromEuler(Rl.set(0,0,Math.PI/2)),c.quaternion.copy(n).multiply(Mn),Math.abs(dn.copy(Sc).applyQuaternion(n).dot(this.eye))>.9&&(c.visible=!1)),this.axis==="Z"&&(Mn.setFromEuler(Rl.set(0,Math.PI/2,0)),c.quaternion.copy(n).multiply(Mn),Math.abs(dn.copy(Uo).applyQuaternion(n).dot(this.eye))>.9&&(c.visible=!1)),this.axis==="XYZE"&&(Mn.setFromEuler(Rl.set(0,Math.PI/2,0)),dn.copy(this.rotationAxis),c.quaternion.setFromRotationMatrix(Jb.lookAt(Qb,dn,Sc)),c.quaternion.multiply(Mn),c.visible=this.dragging),this.axis==="E"&&(c.visible=!1)):c.name==="START"?(c.position.copy(this.worldPositionStart),c.visible=this.dragging):c.name==="END"?(c.position.copy(this.worldPosition),c.visible=this.dragging):c.name==="DELTA"?(c.position.copy(this.worldPositionStart),c.quaternion.copy(this.worldQuaternionStart),lr.set(1e-10,1e-10,1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1),lr.applyQuaternion(this.worldQuaternionStart.clone().invert()),c.scale.copy(lr),c.visible=this.dragging):(c.quaternion.copy(n),this.dragging?c.position.copy(this.worldPositionStart):c.position.copy(this.worldPosition),this.axis&&(c.visible=this.axis.search(c.name)!==-1));continue}c.quaternion.copy(n),this.mode==="translate"||this.mode==="scale"?(c.name==="X"&&Math.abs(dn.copy(Wo).applyQuaternion(n).dot(this.eye))>.99&&(c.scale.set(1e-10,1e-10,1e-10),c.visible=!1),c.name==="Y"&&Math.abs(dn.copy(Sc).applyQuaternion(n).dot(this.eye))>.99&&(c.scale.set(1e-10,1e-10,1e-10),c.visible=!1),c.name==="Z"&&Math.abs(dn.copy(Uo).applyQuaternion(n).dot(this.eye))>.99&&(c.scale.set(1e-10,1e-10,1e-10),c.visible=!1),c.name==="XY"&&Math.abs(dn.copy(Uo).applyQuaternion(n).dot(this.eye))<.2&&(c.scale.set(1e-10,1e-10,1e-10),c.visible=!1),c.name==="YZ"&&Math.abs(dn.copy(Wo).applyQuaternion(n).dot(this.eye))<.2&&(c.scale.set(1e-10,1e-10,1e-10),c.visible=!1),c.name==="XZ"&&Math.abs(dn.copy(Sc).applyQuaternion(n).dot(this.eye))<.2&&(c.scale.set(1e-10,1e-10,1e-10),c.visible=!1)):this.mode==="rotate"&&(Il.copy(n),dn.copy(this.eye).applyQuaternion(Mn.copy(n).invert()),c.name.search("E")!==-1&&c.quaternion.setFromRotationMatrix(Jb.lookAt(this.eye,Qb,Sc)),c.name==="X"&&(Mn.setFromAxisAngle(Wo,Math.atan2(-dn.y,dn.z)),Mn.multiplyQuaternions(Il,Mn),c.quaternion.copy(Mn)),c.name==="Y"&&(Mn.setFromAxisAngle(Sc,Math.atan2(dn.x,dn.z)),Mn.multiplyQuaternions(Il,Mn),c.quaternion.copy(Mn)),c.name==="Z"&&(Mn.setFromAxisAngle(Uo,Math.atan2(dn.y,dn.x)),Mn.multiplyQuaternions(Il,Mn),c.quaternion.copy(Mn))),c.visible=c.visible&&(c.name.indexOf("X")===-1||this.showX),c.visible=c.visible&&(c.name.indexOf("Y")===-1||this.showY),c.visible=c.visible&&(c.name.indexOf("Z")===-1||this.showZ),c.visible=c.visible&&(c.name.indexOf("E")===-1||this.showX&&this.showY&&this.showZ),c.material._color=c.material._color||c.material.color.clone(),c.material._opacity=c.material._opacity||c.material.opacity,c.material.color.copy(c.material._color),c.material.opacity=c.material._opacity,this.enabled&&this.axis&&(c.name===this.axis||this.axis.split("").some(function(h){return c.name===h}))&&(c.material.color.setHex(16776960),c.material.opacity=1)}super.updateMatrixWorld(e)}},Cv=class extends ht{constructor(){super(new jo(1e5,1e5,2,2),new Fr({visible:!1,wireframe:!0,side:Vr,transparent:!0,opacity:.1,toneMapped:!1})),this.isTransformControlsPlane=!0,this.type="TransformControlsPlane"}updateMatrixWorld(e){let t=this.space;switch(this.position.copy(this.worldPosition),this.mode==="scale"&&(t="local"),Cl.copy(Wo).applyQuaternion(t==="local"?this.worldQuaternion:Wl),Io.copy(Sc).applyQuaternion(t==="local"?this.worldQuaternion:Wl),Co.copy(Uo).applyQuaternion(t==="local"?this.worldQuaternion:Wl),dn.copy(Io),this.mode){case"translate":case"scale":switch(this.axis){case"X":dn.copy(this.eye).cross(Cl),Ti.copy(Cl).cross(dn);break;case"Y":dn.copy(this.eye).cross(Io),Ti.copy(Io).cross(dn);break;case"Z":dn.copy(this.eye).cross(Co),Ti.copy(Co).cross(dn);break;case"XY":Ti.copy(Co);break;case"YZ":Ti.copy(Cl);break;case"XZ":dn.copy(Co),Ti.copy(Io);break;case"XYZ":case"E":Ti.set(0,0,0);break}break;default:Ti.set(0,0,0)}Ti.length()===0?this.quaternion.copy(this.cameraQuaternion):(_b.lookAt(lr.set(0,0,0),Ti,dn),this.quaternion.setFromRotationMatrix(_b)),super.updateMatrixWorld(e)}};function Wv(s,e){if(e===Sb)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Ro||e===Vl){let t=s.getIndex();if(t===null){let c=[],o=s.getAttribute("position");if(o!==void 0){for(let h=0;h<o.count;h++)c.push(h);s.setIndex(c),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let n=t.count-2,r=[];if(e===Ro)for(let c=1;c<=n;c++)r.push(t.getX(0)),r.push(t.getX(c)),r.push(t.getX(c+1));else for(let c=0;c<n;c++)c%2===0?(r.push(t.getX(c)),r.push(t.getX(c+1)),r.push(t.getX(c+2))):(r.push(t.getX(c+2)),r.push(t.getX(c+1)),r.push(t.getX(c)));r.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let i=s.clone();return i.setIndex(r),i.clearGroups(),i}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}var Gl=class extends Rr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Zv(t)}),this.register(function(t){return new r3(t)}),this.register(function(t){return new i3(t)}),this.register(function(t){return new s3(t)}),this.register(function(t){return new Qv(t)}),this.register(function(t){return new Jv(t)}),this.register(function(t){return new _v(t)}),this.register(function(t){return new $v(t)}),this.register(function(t){return new Bv(t)}),this.register(function(t){return new e3(t)}),this.register(function(t){return new Yv(t)}),this.register(function(t){return new n3(t)}),this.register(function(t){return new t3(t)}),this.register(function(t){return new kv(t)}),this.register(function(t){return new c3(t)}),this.register(function(t){return new a3(t)})}load(e,t,n,r){let i=this,c;if(this.resourcePath!=="")c=this.resourcePath;else if(this.path!==""){let d=ks.extractUrlBase(e);c=ks.resolveURL(d,this.path)}else c=ks.extractUrlBase(e);this.manager.itemStart(e);let o=function(d){r?r(d):console.error(d),i.manager.itemError(e),i.manager.itemEnd(e)},h=new hs(this.manager);h.setPath(this.path),h.setResponseType("arraybuffer"),h.setRequestHeader(this.requestHeader),h.setWithCredentials(this.withCredentials),h.load(e,function(d){try{i.parse(d,c,function(f){t(f),i.manager.itemEnd(e)},o)}catch(f){o(f)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,r){let i,c={},o={},h=new TextDecoder;if(typeof e=="string")i=JSON.parse(e);else if(e instanceof ArrayBuffer)if(h.decode(new Uint8Array(e,0,4))===r7){try{c[Jt.KHR_BINARY_GLTF]=new o3(e)}catch(p){r&&r(p);return}i=JSON.parse(c[Jt.KHR_BINARY_GLTF].content)}else i=JSON.parse(h.decode(e));else i=e;if(i.asset===void 0||i.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let d=new b3(i,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});d.fileLoader.setRequestHeader(this.requestHeader);for(let f=0;f<this.pluginCallbacks.length;f++){let p=this.pluginCallbacks[f](d);p.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[p.name]=p,c[p.name]=!0}if(i.extensionsUsed)for(let f=0;f<i.extensionsUsed.length;++f){let p=i.extensionsUsed[f],b=i.extensionsRequired||[];switch(p){case Jt.KHR_MATERIALS_UNLIT:c[p]=new Kv;break;case Jt.KHR_DRACO_MESH_COMPRESSION:c[p]=new u3(i,this.dracoLoader);break;case Jt.KHR_TEXTURE_TRANSFORM:c[p]=new l3;break;case Jt.KHR_MESH_QUANTIZATION:c[p]=new h3;break;default:b.indexOf(p)>=0&&o[p]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+p+'".')}}d.setExtensions(c),d.setPlugins(o),d.parse(n,r)}parseAsync(e,t){let n=this;return new Promise(function(r,i){n.parse(e,t,r,i)})}};function PO(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}var Jt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},kv=class{constructor(e){this.parser=e,this.name=Jt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,r=t.length;n<r;n++){let i=t[n];i.extensions&&i.extensions[this.name]&&i.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,i.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,r=t.cache.get(n);if(r)return r;let i=t.json,h=((i.extensions&&i.extensions[this.name]||{}).lights||[])[e],d,f=new Ft(16777215);h.color!==void 0&&f.setRGB(h.color[0],h.color[1],h.color[2],Gn);let p=h.range!==void 0?h.range:0;switch(h.type){case"directional":d=new jl(f),d.target.position.set(0,0,-1),d.add(d.target);break;case"point":d=new gl(f),d.distance=p;break;case"spot":d=new Ml(f),d.distance=p,h.spot=h.spot||{},h.spot.innerConeAngle=h.spot.innerConeAngle!==void 0?h.spot.innerConeAngle:0,h.spot.outerConeAngle=h.spot.outerConeAngle!==void 0?h.spot.outerConeAngle:Math.PI/4,d.angle=h.spot.outerConeAngle,d.penumbra=1-h.spot.innerConeAngle/h.spot.outerConeAngle,d.target.position.set(0,0,-1),d.add(d.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+h.type)}return d.position.set(0,0,0),d.decay=2,Zs(d,h),h.intensity!==void 0&&(d.intensity=h.intensity),d.name=t.createUniqueName(h.name||"light_"+e),r=Promise.resolve(d),t.cache.add(n,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,i=n.json.nodes[e],o=(i.extensions&&i.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(h){return n._getNodeRef(t.cache,o,h)})}},Kv=class{constructor(){this.name=Jt.KHR_MATERIALS_UNLIT}getMaterialType(){return Fr}extendParams(e,t,n){let r=[];e.color=new Ft(1,1,1),e.opacity=1;let i=t.pbrMetallicRoughness;if(i){if(Array.isArray(i.baseColorFactor)){let c=i.baseColorFactor;e.color.setRGB(c[0],c[1],c[2],Gn),e.opacity=c[3]}i.baseColorTexture!==void 0&&r.push(n.assignTexture(e,"map",i.baseColorTexture,jn))}return Promise.all(r)}},Bv=class{constructor(e){this.parser=e,this.name=Jt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let i=r.extensions[this.name].emissiveStrength;return i!==void 0&&(t.emissiveIntensity=i),Promise.resolve()}},Zv=class{constructor(e){this.parser=e,this.name=Jt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Qr}extendMaterialParams(e,t){let n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let i=[],c=r.extensions[this.name];if(c.clearcoatFactor!==void 0&&(t.clearcoat=c.clearcoatFactor),c.clearcoatTexture!==void 0&&i.push(n.assignTexture(t,"clearcoatMap",c.clearcoatTexture)),c.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=c.clearcoatRoughnessFactor),c.clearcoatRoughnessTexture!==void 0&&i.push(n.assignTexture(t,"clearcoatRoughnessMap",c.clearcoatRoughnessTexture)),c.clearcoatNormalTexture!==void 0&&(i.push(n.assignTexture(t,"clearcoatNormalMap",c.clearcoatNormalTexture)),c.clearcoatNormalTexture.scale!==void 0)){let o=c.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Rt(o,o)}return Promise.all(i)}},Yv=class{constructor(e){this.parser=e,this.name=Jt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Qr}extendMaterialParams(e,t){let n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let i=[],c=r.extensions[this.name];return c.iridescenceFactor!==void 0&&(t.iridescence=c.iridescenceFactor),c.iridescenceTexture!==void 0&&i.push(n.assignTexture(t,"iridescenceMap",c.iridescenceTexture)),c.iridescenceIor!==void 0&&(t.iridescenceIOR=c.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),c.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=c.iridescenceThicknessMinimum),c.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=c.iridescenceThicknessMaximum),c.iridescenceThicknessTexture!==void 0&&i.push(n.assignTexture(t,"iridescenceThicknessMap",c.iridescenceThicknessTexture)),Promise.all(i)}},Qv=class{constructor(e){this.parser=e,this.name=Jt.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Qr}extendMaterialParams(e,t){let n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let i=[];t.sheenColor=new Ft(0,0,0),t.sheenRoughness=0,t.sheen=1;let c=r.extensions[this.name];if(c.sheenColorFactor!==void 0){let o=c.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],Gn)}return c.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=c.sheenRoughnessFactor),c.sheenColorTexture!==void 0&&i.push(n.assignTexture(t,"sheenColorMap",c.sheenColorTexture,jn)),c.sheenRoughnessTexture!==void 0&&i.push(n.assignTexture(t,"sheenRoughnessMap",c.sheenRoughnessTexture)),Promise.all(i)}},Jv=class{constructor(e){this.parser=e,this.name=Jt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Qr}extendMaterialParams(e,t){let n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let i=[],c=r.extensions[this.name];return c.transmissionFactor!==void 0&&(t.transmission=c.transmissionFactor),c.transmissionTexture!==void 0&&i.push(n.assignTexture(t,"transmissionMap",c.transmissionTexture)),Promise.all(i)}},_v=class{constructor(e){this.parser=e,this.name=Jt.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Qr}extendMaterialParams(e,t){let n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let i=[],c=r.extensions[this.name];t.thickness=c.thicknessFactor!==void 0?c.thicknessFactor:0,c.thicknessTexture!==void 0&&i.push(n.assignTexture(t,"thicknessMap",c.thicknessTexture)),t.attenuationDistance=c.attenuationDistance||1/0;let o=c.attenuationColor||[1,1,1];return t.attenuationColor=new Ft().setRGB(o[0],o[1],o[2],Gn),Promise.all(i)}},$v=class{constructor(e){this.parser=e,this.name=Jt.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Qr}extendMaterialParams(e,t){let r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let i=r.extensions[this.name];return t.ior=i.ior!==void 0?i.ior:1.5,Promise.resolve()}},e3=class{constructor(e){this.parser=e,this.name=Jt.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Qr}extendMaterialParams(e,t){let n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let i=[],c=r.extensions[this.name];t.specularIntensity=c.specularFactor!==void 0?c.specularFactor:1,c.specularTexture!==void 0&&i.push(n.assignTexture(t,"specularIntensityMap",c.specularTexture));let o=c.specularColorFactor||[1,1,1];return t.specularColor=new Ft().setRGB(o[0],o[1],o[2],Gn),c.specularColorTexture!==void 0&&i.push(n.assignTexture(t,"specularColorMap",c.specularColorTexture,jn)),Promise.all(i)}},t3=class{constructor(e){this.parser=e,this.name=Jt.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Qr}extendMaterialParams(e,t){let n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let i=[],c=r.extensions[this.name];return t.bumpScale=c.bumpFactor!==void 0?c.bumpFactor:1,c.bumpTexture!==void 0&&i.push(n.assignTexture(t,"bumpMap",c.bumpTexture)),Promise.all(i)}},n3=class{constructor(e){this.parser=e,this.name=Jt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Qr}extendMaterialParams(e,t){let n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let i=[],c=r.extensions[this.name];return c.anisotropyStrength!==void 0&&(t.anisotropy=c.anisotropyStrength),c.anisotropyRotation!==void 0&&(t.anisotropyRotation=c.anisotropyRotation),c.anisotropyTexture!==void 0&&i.push(n.assignTexture(t,"anisotropyMap",c.anisotropyTexture)),Promise.all(i)}},r3=class{constructor(e){this.parser=e,this.name=Jt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,r=n.textures[e];if(!r.extensions||!r.extensions[this.name])return null;let i=r.extensions[this.name],c=t.options.ktx2Loader;if(!c){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,i.source,c)}},i3=class{constructor(e){this.parser=e,this.name=Jt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,r=n.json,i=r.textures[e];if(!i.extensions||!i.extensions[t])return null;let c=i.extensions[t],o=r.images[c.source],h=n.textureLoader;if(o.uri){let d=n.options.manager.getHandler(o.uri);d!==null&&(h=d)}return this.detectSupport().then(function(d){if(d)return n.loadTextureImage(e,c.source,h);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},s3=class{constructor(e){this.parser=e,this.name=Jt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,r=n.json,i=r.textures[e];if(!i.extensions||!i.extensions[t])return null;let c=i.extensions[t],o=r.images[c.source],h=n.textureLoader;if(o.uri){let d=n.options.manager.getHandler(o.uri);d!==null&&(h=d)}return this.detectSupport().then(function(d){if(d)return n.loadTextureImage(e,c.source,h);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},c3=class{constructor(e){this.name=Jt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let r=n.extensions[this.name],i=this.parser.getDependency("buffer",r.buffer),c=this.parser.options.meshoptDecoder;if(!c||!c.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return i.then(function(o){let h=r.byteOffset||0,d=r.byteLength||0,f=r.count,p=r.byteStride,b=new Uint8Array(o,h,d);return c.decodeGltfBufferAsync?c.decodeGltfBufferAsync(f,p,b,r.mode,r.filter).then(function(H){return H.buffer}):c.ready.then(function(){let H=new ArrayBuffer(f*p);return c.decodeGltfBuffer(new Uint8Array(H),f,p,b,r.mode,r.filter),H})})}else return null}},a3=class{constructor(e){this.name=Jt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let r=t.meshes[n.mesh];for(let d of r.primitives)if(d.mode!==_r.TRIANGLES&&d.mode!==_r.TRIANGLE_STRIP&&d.mode!==_r.TRIANGLE_FAN&&d.mode!==void 0)return null;let c=n.extensions[this.name].attributes,o=[],h={};for(let d in c)o.push(this.parser.getDependency("accessor",c[d]).then(f=>(h[d]=f,h[d])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(d=>{let f=d.pop(),p=f.isGroup?f.children:[f],b=d[0].count,H=[];for(let P of p){let X=new Gt,y=new ce,O=new wn,D=new ce(1,1,1),L=new Ol(P.geometry,P.material,b);for(let g=0;g<b;g++)h.TRANSLATION&&y.fromBufferAttribute(h.TRANSLATION,g),h.ROTATION&&O.fromBufferAttribute(h.ROTATION,g),h.SCALE&&D.fromBufferAttribute(h.SCALE,g),L.setMatrixAt(g,X.compose(y,O,D));for(let g in h)if(g==="_COLOR_0"){let q=h[g];L.instanceColor=new Lc(q.array,q.itemSize,q.normalized)}else g!=="TRANSLATION"&&g!=="ROTATION"&&g!=="SCALE"&&P.geometry.setAttribute(g,h[g]);On.prototype.copy.call(L,P),this.parser.assignFinalMaterial(L),H.push(L)}return f.isGroup?(f.clear(),f.add(...H),f):H[0]}))}},r7="glTF",Go=12,$b={JSON:1313821514,BIN:5130562},o3=class{constructor(e){this.name=Jt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Go),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==r7)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let r=this.header.length-Go,i=new DataView(e,Go),c=0;for(;c<r;){let o=i.getUint32(c,!0);c+=4;let h=i.getUint32(c,!0);if(c+=4,h===$b.JSON){let d=new Uint8Array(e,Go+c,o);this.content=n.decode(d)}else if(h===$b.BIN){let d=Go+c;this.body=e.slice(d,d+o)}c+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},u3=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Jt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,r=this.dracoLoader,i=e.extensions[this.name].bufferView,c=e.extensions[this.name].attributes,o={},h={},d={};for(let f in c){let p=v3[f]||f.toLowerCase();o[p]=c[f]}for(let f in e.attributes){let p=v3[f]||f.toLowerCase();if(c[f]!==void 0){let b=n.accessors[e.attributes[f]],H=Ea[b.componentType];d[p]=H.name,h[p]=b.normalized===!0}}return t.getDependency("bufferView",i).then(function(f){return new Promise(function(p,b){r.decodeDracoFile(f,function(H){for(let P in H.attributes){let X=H.attributes[P],y=h[P];y!==void 0&&(X.normalized=y)}p(H)},o,d,Gn,b)})})}},l3=class{constructor(){this.name=Jt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},h3=class{constructor(){this.name=Jt.KHR_MESH_QUANTIZATION}},Al=class extends Us{constructor(e,t,n,r){super(e,t,n,r)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r*3+r;for(let c=0;c!==r;c++)t[c]=n[i+c];return t}interpolate_(e,t,n,r){let i=this.resultBuffer,c=this.sampleValues,o=this.valueSize,h=o*2,d=o*3,f=r-t,p=(n-t)/f,b=p*p,H=b*p,P=e*d,X=P-d,y=-2*H+3*b,O=H-b,D=1-y,L=O-b+p;for(let g=0;g!==o;g++){let q=c[X+g+o],F=c[X+g+h]*f,T=c[P+g+o],C=c[P+g]*f;i[g]=D*q+L*F+y*T+O*C}return i}},yO=new wn,d3=class extends Al{interpolate_(e,t,n,r){let i=super.interpolate_(e,t,n,r);return yO.fromArray(i).normalize().toArray(i),i}},_r={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Ea={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},e7={9728:Un,9729:mr,9984:il,9985:gv,9986:wo,9987:Is},t7={33071:Er,33648:zo,10497:zc},Uv={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},v3={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Bs={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},zO={CUBICSPLINE:void 0,LINEAR:Dc,STEP:ga},Gv={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function DO(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new os({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Mi})),s.DefaultMaterial}function Vc(s,e,t){for(let n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Zs(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function LO(s,e,t){let n=!1,r=!1,i=!1;for(let d=0,f=e.length;d<f;d++){let p=e[d];if(p.POSITION!==void 0&&(n=!0),p.NORMAL!==void 0&&(r=!0),p.COLOR_0!==void 0&&(i=!0),n&&r&&i)break}if(!n&&!r&&!i)return Promise.resolve(s);let c=[],o=[],h=[];for(let d=0,f=e.length;d<f;d++){let p=e[d];if(n){let b=p.POSITION!==void 0?t.getDependency("accessor",p.POSITION):s.attributes.position;c.push(b)}if(r){let b=p.NORMAL!==void 0?t.getDependency("accessor",p.NORMAL):s.attributes.normal;o.push(b)}if(i){let b=p.COLOR_0!==void 0?t.getDependency("accessor",p.COLOR_0):s.attributes.color;h.push(b)}}return Promise.all([Promise.all(c),Promise.all(o),Promise.all(h)]).then(function(d){let f=d[0],p=d[1],b=d[2];return n&&(s.morphAttributes.position=f),r&&(s.morphAttributes.normal=p),i&&(s.morphAttributes.color=b),s.morphTargetsRelative=!0,s})}function MO(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,r=t.length;n<r;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function gO(s){let e,t=s.extensions&&s.extensions[Jt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Av(t.attributes):e=s.indices+":"+Av(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,r=s.targets.length;n<r;n++)e+=":"+Av(s.targets[n]);return e}function Av(s){let e="",t=Object.keys(s).sort();for(let n=0,r=t.length;n<r;n++)e+=t[n]+":"+s[t[n]]+";";return e}function f3(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function jO(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}var NO=new Gt,b3=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new PO,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,r=!1,i=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,r=navigator.userAgent.indexOf("Firefox")>-1,i=r?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||r&&i<98?this.textureLoader=new Ll(this.options.manager):this.textureLoader=new Nl(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new hs(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,r=this.json,i=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(c){return c._markDefs&&c._markDefs()}),Promise.all(this._invokeAll(function(c){return c.beforeRoot&&c.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(c){let o={scene:c[0][r.scene||0],scenes:c[0],animations:c[1],cameras:c[2],asset:r.asset,parser:n,userData:{}};return Vc(i,o,r),Zs(o,r),Promise.all(n._invokeAll(function(h){return h.afterRoot&&h.afterRoot(o)})).then(function(){e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let r=0,i=t.length;r<i;r++){let c=t[r].joints;for(let o=0,h=c.length;o<h;o++)e[c[o]].isBone=!0}for(let r=0,i=e.length;r<i;r++){let c=e[r];c.mesh!==void 0&&(this._addNodeRef(this.meshCache,c.mesh),c.skin!==void 0&&(n[c.mesh].isSkinnedMesh=!0)),c.camera!==void 0&&this._addNodeRef(this.cameraCache,c.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let r=n.clone(),i=(c,o)=>{let h=this.associations.get(c);h!=null&&this.associations.set(o,h);for(let[d,f]of c.children.entries())i(f,o.children[d])};return i(n,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let r=e(t[n]);if(r)return r}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let r=0;r<t.length;r++){let i=e(t[r]);i&&n.push(i)}return n}getDependency(e,t){let n=e+":"+t,r=this.cache.get(n);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(i){return i.loadNode&&i.loadNode(t)});break;case"mesh":r=this._invokeOne(function(i){return i.loadMesh&&i.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(i){return i.loadBufferView&&i.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(i){return i.loadMaterial&&i.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(i){return i.loadTexture&&i.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(i){return i.loadAnimation&&i.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(i){return i!=this&&i.getDependency&&i.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(n,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(i,c){return n.getDependency(e,c)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Jt.KHR_BINARY_GLTF].body);let r=this.options;return new Promise(function(i,c){n.load(ks.resolveURL(t.uri,r.path),i,void 0,function(){c(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let r=t.byteLength||0,i=t.byteOffset||0;return n.slice(i,i+r)})}loadAccessor(e){let t=this,n=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){let c=Uv[r.type],o=Ea[r.componentType],h=r.normalized===!0,d=new o(r.count*c);return Promise.resolve(new Nn(d,c,h))}let i=[];return r.bufferView!==void 0?i.push(this.getDependency("bufferView",r.bufferView)):i.push(null),r.sparse!==void 0&&(i.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),i.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(i).then(function(c){let o=c[0],h=Uv[r.type],d=Ea[r.componentType],f=d.BYTES_PER_ELEMENT,p=f*h,b=r.byteOffset||0,H=r.bufferView!==void 0?n.bufferViews[r.bufferView].byteStride:void 0,P=r.normalized===!0,X,y;if(H&&H!==p){let O=Math.floor(b/H),D="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+O+":"+r.count,L=t.cache.get(D);L||(X=new d(o,O*H,r.count*H/f),L=new No(X,H/f),t.cache.add(D,L)),y=new To(L,h,b%H/f,P)}else o===null?X=new d(r.count*h):X=new d(o,b,r.count*h),y=new Nn(X,h,P);if(r.sparse!==void 0){let O=Uv.SCALAR,D=Ea[r.sparse.indices.componentType],L=r.sparse.indices.byteOffset||0,g=r.sparse.values.byteOffset||0,q=new D(c[1],L,r.sparse.count*O),F=new d(c[2],g,r.sparse.count*h);o!==null&&(y=new Nn(y.array.slice(),y.itemSize,y.normalized));for(let T=0,C=q.length;T<C;T++){let M=q[T];if(y.setX(M,F[T*h]),h>=2&&y.setY(M,F[T*h+1]),h>=3&&y.setZ(M,F[T*h+2]),h>=4&&y.setW(M,F[T*h+3]),h>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return y})}loadTexture(e){let t=this.json,n=this.options,i=t.textures[e].source,c=t.images[i],o=this.textureLoader;if(c.uri){let h=n.manager.getHandler(c.uri);h!==null&&(o=h)}return this.loadTextureImage(e,i,o)}loadTextureImage(e,t,n){let r=this,i=this.json,c=i.textures[e],o=i.images[t],h=(o.uri||o.bufferView)+":"+c.sampler;if(this.textureCache[h])return this.textureCache[h];let d=this.loadImageSource(t,n).then(function(f){f.flipY=!1,f.name=c.name||o.name||"",f.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(f.name=o.uri);let b=(i.samplers||{})[c.sampler]||{};return f.magFilter=e7[b.magFilter]||mr,f.minFilter=e7[b.minFilter]||Is,f.wrapS=t7[b.wrapS]||zc,f.wrapT=t7[b.wrapT]||zc,r.associations.set(f,{textures:e}),f}).catch(function(){return null});return this.textureCache[h]=d,d}loadImageSource(e,t){let n=this,r=this.json,i=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(p=>p.clone());let c=r.images[e],o=self.URL||self.webkitURL,h=c.uri||"",d=!1;if(c.bufferView!==void 0)h=n.getDependency("bufferView",c.bufferView).then(function(p){d=!0;let b=new Blob([p],{type:c.mimeType});return h=o.createObjectURL(b),h});else if(c.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let f=Promise.resolve(h).then(function(p){return new Promise(function(b,H){let P=b;t.isImageBitmapLoader===!0&&(P=function(X){let y=new ur(X);y.needsUpdate=!0,b(y)}),t.load(ks.resolveURL(p,i.path),P,void 0,H)})}).then(function(p){return d===!0&&o.revokeObjectURL(h),p.userData.mimeType=c.mimeType||jO(c.uri),p}).catch(function(p){throw console.error("THREE.GLTFLoader: Couldn't load texture",h),p});return this.sourceCache[e]=f,f}assignTexture(e,t,n,r){let i=this;return this.getDependency("texture",n.index).then(function(c){if(!c)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(c=c.clone(),c.channel=n.texCoord),i.extensions[Jt.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[Jt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let h=i.associations.get(c);c=i.extensions[Jt.KHR_TEXTURE_TRANSFORM].extendTexture(c,o),i.associations.set(c,h)}}return r!==void 0&&(c.colorSpace=r),e[t]=c,c})}assignFinalMaterial(e){let t=e.geometry,n=e.material,r=t.attributes.tangent===void 0,i=t.attributes.color!==void 0,c=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,h=this.cache.get(o);h||(h=new ji,nr.prototype.copy.call(h,n),h.color.copy(n.color),h.map=n.map,h.sizeAttenuation=!1,this.cache.add(o,h)),n=h}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,h=this.cache.get(o);h||(h=new bi,nr.prototype.copy.call(h,n),h.color.copy(n.color),h.map=n.map,this.cache.add(o,h)),n=h}if(r||i||c){let o="ClonedMaterial:"+n.uuid+":";r&&(o+="derivative-tangents:"),i&&(o+="vertex-colors:"),c&&(o+="flat-shading:");let h=this.cache.get(o);h||(h=n.clone(),i&&(h.vertexColors=!0),c&&(h.flatShading=!0),r&&(h.normalScale&&(h.normalScale.y*=-1),h.clearcoatNormalScale&&(h.clearcoatNormalScale.y*=-1)),this.cache.add(o,h),this.associations.set(h,this.associations.get(n))),n=h}e.material=n}getMaterialType(){return os}loadMaterial(e){let t=this,n=this.json,r=this.extensions,i=n.materials[e],c,o={},h=i.extensions||{},d=[];if(h[Jt.KHR_MATERIALS_UNLIT]){let p=r[Jt.KHR_MATERIALS_UNLIT];c=p.getMaterialType(),d.push(p.extendParams(o,i,t))}else{let p=i.pbrMetallicRoughness||{};if(o.color=new Ft(1,1,1),o.opacity=1,Array.isArray(p.baseColorFactor)){let b=p.baseColorFactor;o.color.setRGB(b[0],b[1],b[2],Gn),o.opacity=b[3]}p.baseColorTexture!==void 0&&d.push(t.assignTexture(o,"map",p.baseColorTexture,jn)),o.metalness=p.metallicFactor!==void 0?p.metallicFactor:1,o.roughness=p.roughnessFactor!==void 0?p.roughnessFactor:1,p.metallicRoughnessTexture!==void 0&&(d.push(t.assignTexture(o,"metalnessMap",p.metallicRoughnessTexture)),d.push(t.assignTexture(o,"roughnessMap",p.metallicRoughnessTexture))),c=this._invokeOne(function(b){return b.getMaterialType&&b.getMaterialType(e)}),d.push(Promise.all(this._invokeAll(function(b){return b.extendMaterialParams&&b.extendMaterialParams(e,o)})))}i.doubleSided===!0&&(o.side=Vr);let f=i.alphaMode||Gv.OPAQUE;if(f===Gv.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,f===Gv.MASK&&(o.alphaTest=i.alphaCutoff!==void 0?i.alphaCutoff:.5)),i.normalTexture!==void 0&&c!==Fr&&(d.push(t.assignTexture(o,"normalMap",i.normalTexture)),o.normalScale=new Rt(1,1),i.normalTexture.scale!==void 0)){let p=i.normalTexture.scale;o.normalScale.set(p,p)}if(i.occlusionTexture!==void 0&&c!==Fr&&(d.push(t.assignTexture(o,"aoMap",i.occlusionTexture)),i.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=i.occlusionTexture.strength)),i.emissiveFactor!==void 0&&c!==Fr){let p=i.emissiveFactor;o.emissive=new Ft().setRGB(p[0],p[1],p[2],Gn)}return i.emissiveTexture!==void 0&&c!==Fr&&d.push(t.assignTexture(o,"emissiveMap",i.emissiveTexture,jn)),Promise.all(d).then(function(){let p=new c(o);return i.name&&(p.name=i.name),Zs(p,i),t.associations.set(p,{materials:e}),i.extensions&&Vc(r,p,i),p})}createUniqueName(e){let t=bn.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,r=this.primitiveCache;function i(o){return n[Jt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(h){return n7(h,o,t)})}let c=[];for(let o=0,h=e.length;o<h;o++){let d=e[o],f=gO(d),p=r[f];if(p)c.push(p.promise);else{let b;d.extensions&&d.extensions[Jt.KHR_DRACO_MESH_COMPRESSION]?b=i(d):b=n7(new Hn,d,t),r[f]={primitive:d,promise:b},c.push(b)}}return Promise.all(c)}loadMesh(e){let t=this,n=this.json,r=this.extensions,i=n.meshes[e],c=i.primitives,o=[];for(let h=0,d=c.length;h<d;h++){let f=c[h].material===void 0?DO(this.cache):this.getDependency("material",c[h].material);o.push(f)}return o.push(t.loadGeometries(c)),Promise.all(o).then(function(h){let d=h.slice(0,h.length-1),f=h[h.length-1],p=[];for(let H=0,P=f.length;H<P;H++){let X=f[H],y=c[H],O,D=d[H];if(y.mode===_r.TRIANGLES||y.mode===_r.TRIANGLE_STRIP||y.mode===_r.TRIANGLE_FAN||y.mode===void 0)O=i.isSkinnedMesh===!0?new Xl(X,D):new ht(X,D),O.isSkinnedMesh===!0&&O.normalizeSkinWeights(),y.mode===_r.TRIANGLE_STRIP?O.geometry=Wv(O.geometry,Vl):y.mode===_r.TRIANGLE_FAN&&(O.geometry=Wv(O.geometry,Ro));else if(y.mode===_r.LINES)O=new Mc(X,D);else if(y.mode===_r.LINE_STRIP)O=new wr(X,D);else if(y.mode===_r.LINE_LOOP)O=new Hl(X,D);else if(y.mode===_r.POINTS)O=new Cs(X,D);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+y.mode);Object.keys(O.geometry.morphAttributes).length>0&&MO(O,i),O.name=t.createUniqueName(i.name||"mesh_"+e),Zs(O,i),y.extensions&&Vc(r,O,y),t.assignFinalMaterial(O),p.push(O)}for(let H=0,P=p.length;H<P;H++)t.associations.set(p[H],{meshes:e,primitives:H});if(p.length===1)return i.extensions&&Vc(r,p[0],i),p[0];let b=new or;i.extensions&&Vc(r,b,i),t.associations.set(b,{meshes:e});for(let H=0,P=p.length;H<P;H++)b.add(p[H]);return b})}loadCamera(e){let t,n=this.json.cameras[e],r=n[n.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new tr(ql.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):n.type==="orthographic"&&(t=new Sa(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Zs(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let r=0,i=t.joints.length;r<i;r++)n.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(r){let i=r.pop(),c=r,o=[],h=[];for(let d=0,f=c.length;d<f;d++){let p=c[d];if(p){o.push(p);let b=new Gt;i!==null&&b.fromArray(i.array,d*16),h.push(b)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[d])}return new wl(o,h)})}loadAnimation(e){let t=this.json,n=this,r=t.animations[e],i=r.name?r.name:"animation_"+e,c=[],o=[],h=[],d=[],f=[];for(let p=0,b=r.channels.length;p<b;p++){let H=r.channels[p],P=r.samplers[H.sampler],X=H.target,y=X.node,O=r.parameters!==void 0?r.parameters[P.input]:P.input,D=r.parameters!==void 0?r.parameters[P.output]:P.output;X.node!==void 0&&(c.push(this.getDependency("node",y)),o.push(this.getDependency("accessor",O)),h.push(this.getDependency("accessor",D)),d.push(P),f.push(X))}return Promise.all([Promise.all(c),Promise.all(o),Promise.all(h),Promise.all(d),Promise.all(f)]).then(function(p){let b=p[0],H=p[1],P=p[2],X=p[3],y=p[4],O=[];for(let D=0,L=b.length;D<L;D++){let g=b[D],q=H[D],F=P[D],T=X[D],C=y[D];if(g===void 0)continue;g.updateMatrix&&g.updateMatrix();let M=n._createAnimationTracks(g,q,F,T,C);if(M)for(let E=0;E<M.length;E++)O.push(M[E])}return new Dl(i,void 0,O)})}createNodeMesh(e){let t=this.json,n=this,r=t.nodes[e];return r.mesh===void 0?null:n.getDependency("mesh",r.mesh).then(function(i){let c=n._getNodeRef(n.meshCache,r.mesh,i);return r.weights!==void 0&&c.traverse(function(o){if(o.isMesh)for(let h=0,d=r.weights.length;h<d;h++)o.morphTargetInfluences[h]=r.weights[h]}),c})}loadNode(e){let t=this.json,n=this,r=t.nodes[e],i=n._loadNodeShallow(e),c=[],o=r.children||[];for(let d=0,f=o.length;d<f;d++)c.push(n.getDependency("node",o[d]));let h=r.skin===void 0?Promise.resolve(null):n.getDependency("skin",r.skin);return Promise.all([i,Promise.all(c),h]).then(function(d){let f=d[0],p=d[1],b=d[2];b!==null&&f.traverse(function(H){H.isSkinnedMesh&&H.bind(b,NO)});for(let H=0,P=p.length;H<P;H++)f.add(p[H]);return f})}_loadNodeShallow(e){let t=this.json,n=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let i=t.nodes[e],c=i.name?r.createUniqueName(i.name):"",o=[],h=r._invokeOne(function(d){return d.createNodeMesh&&d.createNodeMesh(e)});return h&&o.push(h),i.camera!==void 0&&o.push(r.getDependency("camera",i.camera).then(function(d){return r._getNodeRef(r.cameraCache,i.camera,d)})),r._invokeAll(function(d){return d.createNodeAttachment&&d.createNodeAttachment(e)}).forEach(function(d){o.push(d)}),this.nodeCache[e]=Promise.all(o).then(function(d){let f;if(i.isBone===!0?f=new So:d.length>1?f=new or:d.length===1?f=d[0]:f=new On,f!==d[0])for(let p=0,b=d.length;p<b;p++)f.add(d[p]);if(i.name&&(f.userData.name=i.name,f.name=c),Zs(f,i),i.extensions&&Vc(n,f,i),i.matrix!==void 0){let p=new Gt;p.fromArray(i.matrix),f.applyMatrix4(p)}else i.translation!==void 0&&f.position.fromArray(i.translation),i.rotation!==void 0&&f.quaternion.fromArray(i.rotation),i.scale!==void 0&&f.scale.fromArray(i.scale);return r.associations.has(f)||r.associations.set(f,{}),r.associations.get(f).nodes=e,f}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],r=this,i=new or;n.name&&(i.name=r.createUniqueName(n.name)),Zs(i,n),n.extensions&&Vc(t,i,n);let c=n.nodes||[],o=[];for(let h=0,d=c.length;h<d;h++)o.push(r.getDependency("node",c[h]));return Promise.all(o).then(function(h){for(let f=0,p=h.length;f<p;f++)i.add(h[f]);let d=f=>{let p=new Map;for(let[b,H]of r.associations)(b instanceof nr||b instanceof ur)&&p.set(b,H);return f.traverse(b=>{let H=r.associations.get(b);H!=null&&p.set(b,H)}),p};return r.associations=d(i),i})}_createAnimationTracks(e,t,n,r,i){let c=[],o=e.name?e.name:e.uuid,h=[];Bs[i.path]===Bs.weights?e.traverse(function(b){b.morphTargetInfluences&&h.push(b.name?b.name:b.uuid)}):h.push(o);let d;switch(Bs[i.path]){case Bs.weights:d=us;break;case Bs.rotation:d=Ni;break;case Bs.position:case Bs.scale:d=ls;break;default:n.itemSize===1?d=us:d=ls;break}let f=r.interpolation!==void 0?zO[r.interpolation]:Dc,p=this._getArrayFromAccessor(n);for(let b=0,H=h.length;b<H;b++){let P=new d(h[b]+"."+Bs[i.path],t.array,p,f);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(P),c.push(P)}return c}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=f3(t.constructor),r=new Float32Array(t.length);for(let i=0,c=t.length;i<c;i++)r[i]=t[i]*n;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let r=this instanceof Ni?d3:Al;return new r(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function TO(s,e,t){let n=e.attributes,r=new Xr;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],h=o.min,d=o.max;if(h!==void 0&&d!==void 0){if(r.set(new ce(h[0],h[1],h[2]),new ce(d[0],d[1],d[2])),o.normalized){let f=f3(Ea[o.componentType]);r.min.multiplyScalar(f),r.max.multiplyScalar(f)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let i=e.targets;if(i!==void 0){let o=new ce,h=new ce;for(let d=0,f=i.length;d<f;d++){let p=i[d];if(p.POSITION!==void 0){let b=t.json.accessors[p.POSITION],H=b.min,P=b.max;if(H!==void 0&&P!==void 0){if(h.setX(Math.max(Math.abs(H[0]),Math.abs(P[0]))),h.setY(Math.max(Math.abs(H[1]),Math.abs(P[1]))),h.setZ(Math.max(Math.abs(H[2]),Math.abs(P[2]))),b.normalized){let X=f3(Ea[b.componentType]);h.multiplyScalar(X)}o.max(h)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(o)}s.boundingBox=r;let c=new qr;r.getCenter(c.center),c.radius=r.min.distanceTo(r.max)/2,s.boundingSphere=c}function n7(s,e,t){let n=e.attributes,r=[];function i(c,o){return t.getDependency("accessor",c).then(function(h){s.setAttribute(o,h)})}for(let c in n){let o=v3[c]||c.toLowerCase();o in s.attributes||r.push(i(n[c],o))}if(e.indices!==void 0&&!s.index){let c=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});r.push(c)}return $t.workingColorSpace!==Gn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${$t.workingColorSpace}" not supported.`),Zs(s,e),TO(s,e,t),Promise.all(r).then(function(){return e.targets!==void 0?LO(s,e.targets,t):s})}var kl=class extends Rr{constructor(e){super(e)}load(e,t,n,r){let i=this,c=new hs(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(o){try{t(i.parse(o))}catch(h){r?r(h):console.error(h),i.manager.itemError(e)}},n,r)}parse(e){function t(d){let f=new DataView(d),p=32/8*3+32/8*3*3+16/8,b=f.getUint32(80,!0);if(80+32/8+b*p===f.byteLength)return!0;let P=[115,111,108,105,100];for(let X=0;X<5;X++)if(n(P,f,X))return!1;return!0}function n(d,f,p){for(let b=0,H=d.length;b<H;b++)if(d[b]!==f.getUint8(p+b))return!1;return!0}function r(d){let f=new DataView(d),p=f.getUint32(80,!0),b,H,P,X=!1,y,O,D,L,g;for(let W=0;W<70;W++)f.getUint32(W,!1)==1129270351&&f.getUint8(W+4)==82&&f.getUint8(W+5)==61&&(X=!0,y=new Float32Array(p*3*3),O=f.getUint8(W+6)/255,D=f.getUint8(W+7)/255,L=f.getUint8(W+8)/255,g=f.getUint8(W+9)/255);let q=84,F=50,T=new Hn,C=new Float32Array(p*3*3),M=new Float32Array(p*3*3),E=new Ft;for(let W=0;W<p;W++){let $=q+W*F,J=f.getFloat32($,!0),U=f.getFloat32($+4,!0),Z=f.getFloat32($+8,!0);if(X){let ee=f.getUint16($+48,!0);(ee&32768)===0?(b=(ee&31)/31,H=(ee>>5&31)/31,P=(ee>>10&31)/31):(b=O,H=D,P=L)}for(let ee=1;ee<=3;ee++){let ae=$+ee*12,oe=W*3*3+(ee-1)*3;C[oe]=f.getFloat32(ae,!0),C[oe+1]=f.getFloat32(ae+4,!0),C[oe+2]=f.getFloat32(ae+8,!0),M[oe]=J,M[oe+1]=U,M[oe+2]=Z,X&&(E.set(b,H,P).convertSRGBToLinear(),y[oe]=E.r,y[oe+1]=E.g,y[oe+2]=E.b)}}return T.setAttribute("position",new Nn(C,3)),T.setAttribute("normal",new Nn(M,3)),X&&(T.setAttribute("color",new Nn(y,3)),T.hasColors=!0,T.alpha=g),T}function i(d){let f=new Hn,p=/solid([\s\S]*?)endsolid/g,b=/facet([\s\S]*?)endfacet/g,H=/solid\s(.+)/,P=0,X=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,y=new RegExp("vertex"+X+X+X,"g"),O=new RegExp("normal"+X+X+X,"g"),D=[],L=[],g=[],q=new ce,F,T=0,C=0,M=0;for(;(F=p.exec(d))!==null;){C=M;let E=F[0],W=(F=H.exec(E))!==null?F[1]:"";for(g.push(W);(F=b.exec(E))!==null;){let U=0,Z=0,ee=F[0];for(;(F=O.exec(ee))!==null;)q.x=parseFloat(F[1]),q.y=parseFloat(F[2]),q.z=parseFloat(F[3]),Z++;for(;(F=y.exec(ee))!==null;)D.push(parseFloat(F[1]),parseFloat(F[2]),parseFloat(F[3])),L.push(q.x,q.y,q.z),U++,M++;Z!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+P),U!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+P),P++}let $=C,J=M-C;f.userData.groupNames=g,f.addGroup($,J,T),T++}return f.setAttribute("position",new Qt(D,3)),f.setAttribute("normal",new Qt(L,3)),f}function c(d){return typeof d!="string"?new TextDecoder().decode(d):d}function o(d){if(typeof d=="string"){let f=new Uint8Array(d.length);for(let p=0;p<d.length;p++)f[p]=d.charCodeAt(p)&255;return f.buffer||f}else return d}let h=o(e);return t(h)?r(h):i(c(e))}};var SO=/^[og]\s*(.+)?/,VO=/^mtllib /,EO=/^usemtl /,qO=/^usemap /,i7=/\s+/,s7=new ce,p3=new ce,c7=new ce,a7=new ce,$r=new ce,Kl=new Ft;function FO(){let s={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=t!==!1;return}let n=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:t!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(r,i){let c=this._finalize(!1);c&&(c.inherited||c.groupCount<=0)&&this.materials.splice(c.index,1);let o={index:this.materials.length,name:r||"",mtllib:Array.isArray(i)&&i.length>0?i[i.length-1]:"",smooth:c!==void 0?c.smooth:this.smooth,groupStart:c!==void 0?c.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(h){let d={index:typeof h=="number"?h:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return d.clone=this.clone.bind(d),d}};return this.materials.push(o),o},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(r){let i=this.currentMaterial();if(i&&i.groupEnd===-1&&(i.groupEnd=this.geometry.vertices.length/3,i.groupCount=i.groupEnd-i.groupStart,i.inherited=!1),r&&this.materials.length>1)for(let c=this.materials.length-1;c>=0;c--)this.materials[c].groupCount<=0&&this.materials.splice(c,1);return r&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),i}},n&&n.name&&typeof n.clone=="function"){let r=n.clone(0);r.inherited=!0,this.object.materials.push(r)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,t){let n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseNormalIndex:function(e,t){let n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseUVIndex:function(e,t){let n=parseInt(e,10);return(n>=0?n-1:n+t/2)*2},addVertex:function(e,t,n){let r=this.vertices,i=this.object.geometry.vertices;i.push(r[e+0],r[e+1],r[e+2]),i.push(r[t+0],r[t+1],r[t+2]),i.push(r[n+0],r[n+1],r[n+2])},addVertexPoint:function(e){let t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){let t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,n){let r=this.normals,i=this.object.geometry.normals;i.push(r[e+0],r[e+1],r[e+2]),i.push(r[t+0],r[t+1],r[t+2]),i.push(r[n+0],r[n+1],r[n+2])},addFaceNormal:function(e,t,n){let r=this.vertices,i=this.object.geometry.normals;s7.fromArray(r,e),p3.fromArray(r,t),c7.fromArray(r,n),$r.subVectors(c7,p3),a7.subVectors(s7,p3),$r.cross(a7),$r.normalize(),i.push($r.x,$r.y,$r.z),i.push($r.x,$r.y,$r.z),i.push($r.x,$r.y,$r.z)},addColor:function(e,t,n){let r=this.colors,i=this.object.geometry.colors;r[e]!==void 0&&i.push(r[e+0],r[e+1],r[e+2]),r[t]!==void 0&&i.push(r[t+0],r[t+1],r[t+2]),r[n]!==void 0&&i.push(r[n+0],r[n+1],r[n+2])},addUV:function(e,t,n){let r=this.uvs,i=this.object.geometry.uvs;i.push(r[e+0],r[e+1]),i.push(r[t+0],r[t+1]),i.push(r[n+0],r[n+1])},addDefaultUV:function(){let e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){let t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,n,r,i,c,o,h,d){let f=this.vertices.length,p=this.parseVertexIndex(e,f),b=this.parseVertexIndex(t,f),H=this.parseVertexIndex(n,f);if(this.addVertex(p,b,H),this.addColor(p,b,H),o!==void 0&&o!==""){let P=this.normals.length;p=this.parseNormalIndex(o,P),b=this.parseNormalIndex(h,P),H=this.parseNormalIndex(d,P),this.addNormal(p,b,H)}else this.addFaceNormal(p,b,H);if(r!==void 0&&r!==""){let P=this.uvs.length;p=this.parseUVIndex(r,P),b=this.parseUVIndex(i,P),H=this.parseUVIndex(c,P),this.addUV(p,b,H),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";let t=this.vertices.length;for(let n=0,r=e.length;n<r;n++){let i=this.parseVertexIndex(e[n],t);this.addVertexPoint(i),this.addColor(i)}},addLineGeometry:function(e,t){this.object.geometry.type="Line";let n=this.vertices.length,r=this.uvs.length;for(let i=0,c=e.length;i<c;i++)this.addVertexLine(this.parseVertexIndex(e[i],n));for(let i=0,c=t.length;i<c;i++)this.addUVLine(this.parseUVIndex(t[i],r))}};return s.startObject("",!1),s}var Bl=class extends Rr{constructor(e){super(e),this.materials=null}load(e,t,n,r){let i=this,c=new hs(this.manager);c.setPath(this.path),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(o){try{t(i.parse(o))}catch(h){r?r(h):console.error(h),i.manager.itemError(e)}},n,r)}setMaterials(e){return this.materials=e,this}parse(e){let t=new FO;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));let n=e.split(`
`),r=[];for(let o=0,h=n.length;o<h;o++){let d=n[o].trimStart();if(d.length===0)continue;let f=d.charAt(0);if(f!=="#")if(f==="v"){let p=d.split(i7);switch(p[0]){case"v":t.vertices.push(parseFloat(p[1]),parseFloat(p[2]),parseFloat(p[3])),p.length>=7?(Kl.setRGB(parseFloat(p[4]),parseFloat(p[5]),parseFloat(p[6])).convertSRGBToLinear(),t.colors.push(Kl.r,Kl.g,Kl.b)):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(p[1]),parseFloat(p[2]),parseFloat(p[3]));break;case"vt":t.uvs.push(parseFloat(p[1]),parseFloat(p[2]));break}}else if(f==="f"){let b=d.slice(1).trim().split(i7),H=[];for(let X=0,y=b.length;X<y;X++){let O=b[X];if(O.length>0){let D=O.split("/");H.push(D)}}let P=H[0];for(let X=1,y=H.length-1;X<y;X++){let O=H[X],D=H[X+1];t.addFace(P[0],O[0],D[0],P[1],O[1],D[1],P[2],O[2],D[2])}}else if(f==="l"){let p=d.substring(1).trim().split(" "),b=[],H=[];if(d.indexOf("/")===-1)b=p;else for(let P=0,X=p.length;P<X;P++){let y=p[P].split("/");y[0]!==""&&b.push(y[0]),y[1]!==""&&H.push(y[1])}t.addLineGeometry(b,H)}else if(f==="p"){let b=d.slice(1).trim().split(" ");t.addPointGeometry(b)}else if((r=SO.exec(d))!==null){let p=(" "+r[0].slice(1).trim()).slice(1);t.startObject(p)}else if(EO.test(d))t.object.startMaterial(d.substring(7).trim(),t.materialLibraries);else if(VO.test(d))t.materialLibraries.push(d.substring(7).trim());else if(qO.test(d))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(f==="s"){if(r=d.split(" "),r.length>1){let b=r[1].trim().toLowerCase();t.object.smooth=b!=="0"&&b!=="off"}else t.object.smooth=!0;let p=t.object.currentMaterial();p&&(p.smooth=t.object.smooth)}else{if(d==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+d+'"')}}t.finalize();let i=new or;if(i.materialLibraries=[].concat(t.materialLibraries),!(t.objects.length===1&&t.objects[0].geometry.vertices.length===0)===!0)for(let o=0,h=t.objects.length;o<h;o++){let d=t.objects[o],f=d.geometry,p=d.materials,b=f.type==="Line",H=f.type==="Points",P=!1;if(f.vertices.length===0)continue;let X=new Hn;X.setAttribute("position",new Qt(f.vertices,3)),f.normals.length>0&&X.setAttribute("normal",new Qt(f.normals,3)),f.colors.length>0&&(P=!0,X.setAttribute("color",new Qt(f.colors,3))),f.hasUVIndices===!0&&X.setAttribute("uv",new Qt(f.uvs,2));let y=[];for(let D=0,L=p.length;D<L;D++){let g=p[D],q=g.name+"_"+g.smooth+"_"+P,F=t.materials[q];if(this.materials!==null){if(F=this.materials.create(g.name),b&&F&&!(F instanceof bi)){let T=new bi;nr.prototype.copy.call(T,F),T.color.copy(F.color),F=T}else if(H&&F&&!(F instanceof ji)){let T=new ji({size:10,sizeAttenuation:!1});nr.prototype.copy.call(T,F),T.color.copy(F.color),T.map=F.map,F=T}}F===void 0&&(b?F=new bi:H?F=new ji({size:1,sizeAttenuation:!1}):F=new yl,F.name=g.name,F.flatShading=!g.smooth,F.vertexColors=P,t.materials[q]=F),y.push(F)}let O;if(y.length>1){for(let D=0,L=p.length;D<L;D++){let g=p[D];X.addGroup(g.groupStart,g.groupCount,D)}b?O=new Mc(X,y):H?O=new Cs(X,y):O=new ht(X,y)}else b?O=new Mc(X,y[0]):H?O=new Cs(X,y[0]):O=new ht(X,y[0]);O.name=d.name,i.add(O)}else if(t.vertices.length>0){let o=new ji({size:1,sizeAttenuation:!1}),h=new Hn;h.setAttribute("position",new Qt(t.vertices,3)),t.colors.length>0&&t.colors[0]!==void 0&&(h.setAttribute("color",new Qt(t.colors,3)),o.vertexColors=!0);let d=new Cs(h,o);i.add(d)}return i}};
var b7={type:"change"},X3={type:"start"},p7={type:"end"},Jl=new cs,x7=new vi,RO=Math.cos(70*ql.DEG2RAD),_l=class extends gi{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new ce,this.cursor=new ce,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:jc.ROTATE,MIDDLE:jc.DOLLY,RIGHT:jc.PAN},this.touches={ONE:Nc.ROTATE,TWO:Nc.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(ie){ie.addEventListener("keydown",Pt),this._domElementKeyEvents=ie},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Pt),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(b7),n.update(),i=r.NONE},this.update=(function(){let ie=new ce,Qe=new wn().setFromUnitVectors(e.up,new ce(0,1,0)),mt=Qe.clone().invert(),at=new ce,R=new wn,be=new ce,nt=2*Math.PI;return function(ze=null){let Ge=n.object.position;ie.copy(Ge).sub(n.target),ie.applyQuaternion(Qe),o.setFromVector3(ie),n.autoRotate&&i===r.NONE&&$(E(ze)),n.enableDamping?(o.theta+=h.theta*n.dampingFactor,o.phi+=h.phi*n.dampingFactor):(o.theta+=h.theta,o.phi+=h.phi);let st=n.minAzimuthAngle,it=n.maxAzimuthAngle;isFinite(st)&&isFinite(it)&&(st<-Math.PI?st+=nt:st>Math.PI&&(st-=nt),it<-Math.PI?it+=nt:it>Math.PI&&(it-=nt),st<=it?o.theta=Math.max(st,Math.min(it,o.theta)):o.theta=o.theta>(st+it)/2?Math.max(st,o.theta):Math.min(it,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(f,n.dampingFactor):n.target.add(f),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&F||n.object.isOrthographicCamera?o.radius=le(o.radius):o.radius=le(o.radius*d),ie.setFromSpherical(o),ie.applyQuaternion(mt),Ge.copy(n.target).add(ie),n.object.lookAt(n.target),n.enableDamping===!0?(h.theta*=1-n.dampingFactor,h.phi*=1-n.dampingFactor,f.multiplyScalar(1-n.dampingFactor)):(h.set(0,0,0),f.set(0,0,0));let lt=!1;if(n.zoomToCursor&&F){let xt=null;if(n.object.isPerspectiveCamera){let Xt=ie.length();xt=le(Xt*d);let Ct=Xt-xt;n.object.position.addScaledVector(g,Ct),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){let Xt=new ce(q.x,q.y,0);Xt.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/d)),n.object.updateProjectionMatrix(),lt=!0;let Ct=new ce(q.x,q.y,0);Ct.unproject(n.object),n.object.position.sub(Ct).add(Xt),n.object.updateMatrixWorld(),xt=ie.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;xt!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(xt).add(n.object.position):(Jl.origin.copy(n.object.position),Jl.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Jl.direction))<RO?e.lookAt(n.target):(x7.setFromNormalAndCoplanarPoint(n.object.up,n.target),Jl.intersectPlane(x7,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/d)),n.object.updateProjectionMatrix(),lt=!0);return d=1,F=!1,lt||at.distanceToSquared(n.object.position)>c||8*(1-R.dot(n.object.quaternion))>c||be.distanceToSquared(n.target)>0?(n.dispatchEvent(b7),at.copy(n.object.position),R.copy(n.object.quaternion),be.copy(n.target),!0):!1}})(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",It),n.domElement.removeEventListener("pointerdown",Q),n.domElement.removeEventListener("pointercancel",Pe),n.domElement.removeEventListener("wheel",_e),n.domElement.removeEventListener("pointermove",A),n.domElement.removeEventListener("pointerup",Pe),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Pt),n._domElementKeyEvents=null)};let n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},i=r.NONE,c=1e-6,o=new Fo,h=new Fo,d=1,f=new ce,p=new Rt,b=new Rt,H=new Rt,P=new Rt,X=new Rt,y=new Rt,O=new Rt,D=new Rt,L=new Rt,g=new ce,q=new Rt,F=!1,T=[],C={},M=!1;function E(ie){return ie!==null?2*Math.PI/60*n.autoRotateSpeed*ie:2*Math.PI/60/60*n.autoRotateSpeed}function W(ie){let Qe=Math.abs(ie*.01);return Math.pow(.95,n.zoomSpeed*Qe)}function $(ie){h.theta-=ie}function J(ie){h.phi-=ie}let U=(function(){let ie=new ce;return function(mt,at){ie.setFromMatrixColumn(at,0),ie.multiplyScalar(-mt),f.add(ie)}})(),Z=(function(){let ie=new ce;return function(mt,at){n.screenSpacePanning===!0?ie.setFromMatrixColumn(at,1):(ie.setFromMatrixColumn(at,0),ie.crossVectors(n.object.up,ie)),ie.multiplyScalar(mt),f.add(ie)}})(),ee=(function(){let ie=new ce;return function(mt,at){let R=n.domElement;if(n.object.isPerspectiveCamera){let be=n.object.position;ie.copy(be).sub(n.target);let nt=ie.length();nt*=Math.tan(n.object.fov/2*Math.PI/180),U(2*mt*nt/R.clientHeight,n.object.matrix),Z(2*at*nt/R.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(U(mt*(n.object.right-n.object.left)/n.object.zoom/R.clientWidth,n.object.matrix),Z(at*(n.object.top-n.object.bottom)/n.object.zoom/R.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}})();function ae(ie){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?d/=ie:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function oe(ie){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?d*=ie:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function de(ie,Qe){if(!n.zoomToCursor)return;F=!0;let mt=n.domElement.getBoundingClientRect(),at=ie-mt.left,R=Qe-mt.top,be=mt.width,nt=mt.height;q.x=at/be*2-1,q.y=-(R/nt)*2+1,g.set(q.x,q.y,1).unproject(n.object).sub(n.object.position).normalize()}function le(ie){return Math.max(n.minDistance,Math.min(n.maxDistance,ie))}function se(ie){p.set(ie.clientX,ie.clientY)}function xe(ie){de(ie.clientX,ie.clientX),O.set(ie.clientX,ie.clientY)}function me(ie){P.set(ie.clientX,ie.clientY)}function Le(ie){b.set(ie.clientX,ie.clientY),H.subVectors(b,p).multiplyScalar(n.rotateSpeed);let Qe=n.domElement;$(2*Math.PI*H.x/Qe.clientHeight),J(2*Math.PI*H.y/Qe.clientHeight),p.copy(b),n.update()}function Se(ie){D.set(ie.clientX,ie.clientY),L.subVectors(D,O),L.y>0?ae(W(L.y)):L.y<0&&oe(W(L.y)),O.copy(D),n.update()}function rt(ie){X.set(ie.clientX,ie.clientY),y.subVectors(X,P).multiplyScalar(n.panSpeed),ee(y.x,y.y),P.copy(X),n.update()}function tt(ie){de(ie.clientX,ie.clientY),ie.deltaY<0?oe(W(ie.deltaY)):ie.deltaY>0&&ae(W(ie.deltaY)),n.update()}function ot(ie){let Qe=!1;switch(ie.code){case n.keys.UP:ie.ctrlKey||ie.metaKey||ie.shiftKey?J(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):ee(0,n.keyPanSpeed),Qe=!0;break;case n.keys.BOTTOM:ie.ctrlKey||ie.metaKey||ie.shiftKey?J(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):ee(0,-n.keyPanSpeed),Qe=!0;break;case n.keys.LEFT:ie.ctrlKey||ie.metaKey||ie.shiftKey?$(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):ee(n.keyPanSpeed,0),Qe=!0;break;case n.keys.RIGHT:ie.ctrlKey||ie.metaKey||ie.shiftKey?$(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):ee(-n.keyPanSpeed,0),Qe=!0;break}Qe&&(ie.preventDefault(),n.update())}function Ot(ie){if(T.length===1)p.set(ie.pageX,ie.pageY);else{let Qe=dt(ie),mt=.5*(ie.pageX+Qe.x),at=.5*(ie.pageY+Qe.y);p.set(mt,at)}}function Ze(ie){if(T.length===1)P.set(ie.pageX,ie.pageY);else{let Qe=dt(ie),mt=.5*(ie.pageX+Qe.x),at=.5*(ie.pageY+Qe.y);P.set(mt,at)}}function Nt(ie){let Qe=dt(ie),mt=ie.pageX-Qe.x,at=ie.pageY-Qe.y,R=Math.sqrt(mt*mt+at*at);O.set(0,R)}function De(ie){n.enableZoom&&Nt(ie),n.enablePan&&Ze(ie)}function Kt(ie){n.enableZoom&&Nt(ie),n.enableRotate&&Ot(ie)}function fe(ie){if(T.length==1)b.set(ie.pageX,ie.pageY);else{let mt=dt(ie),at=.5*(ie.pageX+mt.x),R=.5*(ie.pageY+mt.y);b.set(at,R)}H.subVectors(b,p).multiplyScalar(n.rotateSpeed);let Qe=n.domElement;$(2*Math.PI*H.x/Qe.clientHeight),J(2*Math.PI*H.y/Qe.clientHeight),p.copy(b)}function Oe(ie){if(T.length===1)X.set(ie.pageX,ie.pageY);else{let Qe=dt(ie),mt=.5*(ie.pageX+Qe.x),at=.5*(ie.pageY+Qe.y);X.set(mt,at)}y.subVectors(X,P).multiplyScalar(n.panSpeed),ee(y.x,y.y),P.copy(X)}function Me(ie){let Qe=dt(ie),mt=ie.pageX-Qe.x,at=ie.pageY-Qe.y,R=Math.sqrt(mt*mt+at*at);D.set(0,R),L.set(0,Math.pow(D.y/O.y,n.zoomSpeed)),ae(L.y),O.copy(D);let be=(ie.pageX+Qe.x)*.5,nt=(ie.pageY+Qe.y)*.5;de(be,nt)}function ke(ie){n.enableZoom&&Me(ie),n.enablePan&&Oe(ie)}function Ee(ie){n.enableZoom&&Me(ie),n.enableRotate&&fe(ie)}function Q(ie){n.enabled!==!1&&(T.length===0&&(n.domElement.setPointerCapture(ie.pointerId),n.domElement.addEventListener("pointermove",A),n.domElement.addEventListener("pointerup",Pe)),Et(ie),ie.pointerType==="touch"?yt(ie):Ke(ie))}function A(ie){n.enabled!==!1&&(ie.pointerType==="touch"?qe(ie):Ce(ie))}function Pe(ie){jt(ie),T.length===0&&(n.domElement.releasePointerCapture(ie.pointerId),n.domElement.removeEventListener("pointermove",A),n.domElement.removeEventListener("pointerup",Pe)),n.dispatchEvent(p7),i=r.NONE}function Ke(ie){let Qe;switch(ie.button){case 0:Qe=n.mouseButtons.LEFT;break;case 1:Qe=n.mouseButtons.MIDDLE;break;case 2:Qe=n.mouseButtons.RIGHT;break;default:Qe=-1}switch(Qe){case jc.DOLLY:if(n.enableZoom===!1)return;xe(ie),i=r.DOLLY;break;case jc.ROTATE:if(ie.ctrlKey||ie.metaKey||ie.shiftKey){if(n.enablePan===!1)return;me(ie),i=r.PAN}else{if(n.enableRotate===!1)return;se(ie),i=r.ROTATE}break;case jc.PAN:if(ie.ctrlKey||ie.metaKey||ie.shiftKey){if(n.enableRotate===!1)return;se(ie),i=r.ROTATE}else{if(n.enablePan===!1)return;me(ie),i=r.PAN}break;default:i=r.NONE}i!==r.NONE&&n.dispatchEvent(X3)}function Ce(ie){switch(i){case r.ROTATE:if(n.enableRotate===!1)return;Le(ie);break;case r.DOLLY:if(n.enableZoom===!1)return;Se(ie);break;case r.PAN:if(n.enablePan===!1)return;rt(ie);break}}function _e(ie){n.enabled===!1||n.enableZoom===!1||i!==r.NONE||(ie.preventDefault(),n.dispatchEvent(X3),tt(bt(ie)),n.dispatchEvent(p7))}function bt(ie){let Qe=ie.deltaMode,mt={clientX:ie.clientX,clientY:ie.clientY,deltaY:ie.deltaY};switch(Qe){case 1:mt.deltaY*=16;break;case 2:mt.deltaY*=100;break}return ie.ctrlKey&&!M&&(mt.deltaY*=10),mt}function Be(ie){ie.key==="Control"&&(M=!0,document.addEventListener("keyup",ut,{passive:!0,capture:!0}))}function ut(ie){ie.key==="Control"&&(M=!1,document.removeEventListener("keyup",ut,{passive:!0,capture:!0}))}function Pt(ie){n.enabled===!1||n.enablePan===!1||ot(ie)}function yt(ie){switch(Ht(ie),T.length){case 1:switch(n.touches.ONE){case Nc.ROTATE:if(n.enableRotate===!1)return;Ot(ie),i=r.TOUCH_ROTATE;break;case Nc.PAN:if(n.enablePan===!1)return;Ze(ie),i=r.TOUCH_PAN;break;default:i=r.NONE}break;case 2:switch(n.touches.TWO){case Nc.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;De(ie),i=r.TOUCH_DOLLY_PAN;break;case Nc.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Kt(ie),i=r.TOUCH_DOLLY_ROTATE;break;default:i=r.NONE}break;default:i=r.NONE}i!==r.NONE&&n.dispatchEvent(X3)}function qe(ie){switch(Ht(ie),i){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;fe(ie),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;Oe(ie),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;ke(ie),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ee(ie),n.update();break;default:i=r.NONE}}function It(ie){n.enabled!==!1&&ie.preventDefault()}function Et(ie){T.push(ie.pointerId)}function jt(ie){delete C[ie.pointerId];for(let Qe=0;Qe<T.length;Qe++)if(T[Qe]==ie.pointerId){T.splice(Qe,1);return}}function Ht(ie){let Qe=C[ie.pointerId];Qe===void 0&&(Qe=new Rt,C[ie.pointerId]=Qe),Qe.set(ie.pageX,ie.pageY)}function dt(ie){let Qe=ie.pointerId===T[0]?T[1]:T[0];return C[Qe]}n.domElement.addEventListener("contextmenu",It),n.domElement.addEventListener("pointerdown",Q),n.domElement.addEventListener("pointercancel",Pe),n.domElement.addEventListener("wheel",_e,{passive:!1}),document.addEventListener("keydown",Be,{passive:!0,capture:!0}),this.update()}};
export {Vo,Gl,kl,or,ht,os,Bl,Xr,ce,_l,Ul};
