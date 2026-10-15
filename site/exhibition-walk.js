(()=>{var ei={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ps={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Hd=0,hh=1,Vd=2;var uh=1,el=2,Ai=3,Vn=0,Wt=1,xt=2,bt=0,di=1,Fs=2,dh=3,fh=4,wr=5,ln=100,Gd=101,Wd=102,Xd=103,qd=104,Bs=200,Yd=201,jd=202,Zd=203,zi=204,ki=205,Oo=206,Kd=207,Fo=208,Jd=209,$d=210,Qd=211,ef=212,tf=213,nf=214,tl=0,nl=1,il=2,Cs=3,sl=4,rl=5,ol=6,al=7,ll=0,sf=1,rf=2,Ji=0,cl=1,hl=2,ul=3,Tr=4,dl=5,fl=6,pl=7,Qc="attached",of="detached",ph=300,zs=301,ks=302,ml=303,gl=304,Bo=306,cn=1e3,Jn=1001,as=1002,gt=1003,Ar=1004;var $i=1005;var Jt=1006,ms=1007;var pn=1008;var Wn=1009,mh=1010,gh=1011,gs=1012,xl=1013,xs=1014,ti=1015,Xt=1016,yl=1017,vl=1018,ys=1020,xh=35902,yh=35899,vh=1021,_h=1022,tn=1023,fr=1026,vs=1027,_l=1028,Ml=1029,Mh=1030,Sl=1031;var bl=1033,zo=33776,ko=33777,Ho=33778,Vo=33779,El=35840,wl=35841,Tl=35842,Al=35843,Rl=36196,Cl=37492,Il=37496,Pl=37808,Dl=37809,Ll=37810,Nl=37811,Ul=37812,Ol=37813,Fl=37814,Bl=37815,zl=37816,kl=37817,Hl=37818,Vl=37819,Gl=37820,Wl=37821,Xl=36492,ql=36494,Yl=36495,jl=36283,Zl=36284,Kl=36285,Jl=36286;var Hi=2300,Vi=2301,Da=2302,eh=2400,th=2401,nh=2402,af=2500;var Sh=0,Go=1,Rr=2,lf=3200,cf=3201;var Wo=0,hf=1,gi="",Et="srgb",fn="srgb-linear",io="linear",wt="srgb";var Rs=7680,Xo=7681;var bh=34055,Eh=34056;var wh=517;var so=519,uf=512,df=513,ff=514,Th=515,pf=516,mf=517,gf=518,xf=519,La=35044;var Ah="300 es",hi=2e3,ro=2001;var _i=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}},vn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ed=1234567,Qr=Math.PI/180,Is=180/Math.PI;function ui(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(vn[s&255]+vn[s>>8&255]+vn[s>>16&255]+vn[s>>24&255]+"-"+vn[e&255]+vn[e>>8&255]+"-"+vn[e>>16&15|64]+vn[e>>24&255]+"-"+vn[t&63|128]+vn[t>>8&255]+"-"+vn[t>>16&255]+vn[t>>24&255]+vn[n&255]+vn[n>>8&255]+vn[n>>16&255]+vn[n>>24&255]).toLowerCase()}function Qe(s,e,t){return Math.max(e,Math.min(t,s))}function Rh(s,e){return(s%e+e)%e}function Xp(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function qp(s,e,t){return s!==e?(t-s)/(e-s):0}function eo(s,e,t){return(1-t)*s+t*e}function Yp(s,e,t,n){return eo(s,e,1-Math.exp(-t*n))}function jp(s,e=1){return e-Math.abs(Rh(s,e*2)-e)}function Zp(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Kp(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Jp(s,e){return s+Math.floor(Math.random()*(e-s+1))}function $p(s,e){return s+Math.random()*(e-s)}function Qp(s){return s*(.5-Math.random())}function em(s){s!==void 0&&(ed=s);let e=ed+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function tm(s){return s*Qr}function nm(s){return s*Is}function im(s){return(s&s-1)===0&&s!==0}function sm(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function rm(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function om(s,e,t,n,i){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),f=o((e-n)/2),d=r((n-e)/2),m=o((n-e)/2);switch(i){case"XYX":s.set(a*h,l*u,l*f,a*c);break;case"YZY":s.set(l*f,a*h,l*u,a*c);break;case"ZXZ":s.set(l*u,l*f,a*h,a*c);break;case"XZX":s.set(a*h,l*m,l*d,a*c);break;case"YXY":s.set(l*d,a*h,l*m,a*c);break;case"ZYZ":s.set(l*m,l*d,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function ci(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ct(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var mn={DEG2RAD:Qr,RAD2DEG:Is,generateUUID:ui,clamp:Qe,euclideanModulo:Rh,mapLinear:Xp,inverseLerp:qp,lerp:eo,damp:Yp,pingpong:jp,smoothstep:Zp,smootherstep:Kp,randInt:Jp,randFloat:$p,randFloatSpread:Qp,seededRandom:em,degToRad:tm,radToDeg:nm,isPowerOfTwo:im,ceilPowerOfTwo:sm,floorPowerOfTwo:rm,setQuaternionFromProperEuler:om,normalize:Ct,denormalize:ci},Me=class s{constructor(e=0,t=0){s.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},$t=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],f=r[o+0],d=r[o+1],m=r[o+2],x=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=m,e[t+3]=x;return}if(u!==x||l!==f||c!==d||h!==m){let g=1-a,p=l*f+c*d+h*m+u*x,w=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){let b=Math.sqrt(M),P=Math.atan2(b,p*w);g=Math.sin(g*P)/b,a=Math.sin(a*P)/b}let y=a*w;if(l=l*g+f*y,c=c*g+d*y,h=h*g+m*y,u=u*g+x*y,g===1-a){let b=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=b,c*=b,h*=b,u*=b}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[o],f=r[o+1],d=r[o+2],m=r[o+3];return e[t]=a*m+h*u+l*d-c*f,e[t+1]=l*m+h*f+c*u-a*d,e[t+2]=c*m+h*d+a*f-l*u,e[t+3]=h*m-a*u-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(r/2),f=l(n/2),d=l(i/2),m=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u-f*d*m;break;case"YXZ":this._x=f*h*u+c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u+f*d*m;break;case"ZXY":this._x=f*h*u-c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u-f*d*m;break;case"ZYX":this._x=f*h*u-c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u+f*d*m;break;case"YZX":this._x=f*h*u+c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u-f*d*m;break;case"XZY":this._x=f*h*u-c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u+f*d*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-i)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(r+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(r-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-i)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qe(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},E=class s{constructor(e=0,t=0,n=0){s.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(td.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(td.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),h=2*(a*t-r*i),u=2*(r*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=i+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Sc.copy(this).projectOnVector(e),this.sub(Sc)}reflect(e){return this.sub(Sc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Sc=new E,td=new $t,nt=class s{constructor(e,t,n,i,r,o,a,l,c){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c)}set(e,t,n,i,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],m=n[8],x=i[0],g=i[3],p=i[6],w=i[1],M=i[4],y=i[7],b=i[2],P=i[5],C=i[8];return r[0]=o*x+a*w+l*b,r[3]=o*g+a*M+l*P,r[6]=o*p+a*y+l*C,r[1]=c*x+h*w+u*b,r[4]=c*g+h*M+u*P,r[7]=c*p+h*y+u*C,r[2]=f*x+d*w+m*b,r[5]=f*g+d*M+m*P,r[8]=f*p+d*y+m*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,f=a*l-h*r,d=c*r-o*l,m=t*u+n*f+i*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return e[0]=u*x,e[1]=(i*c-h*n)*x,e[2]=(a*n-i*o)*x,e[3]=f*x,e[4]=(h*t-i*l)*x,e[5]=(i*r-a*t)*x,e[6]=d*x,e[7]=(n*l-c*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(bc.makeScale(e,t)),this}rotate(e){return this.premultiply(bc.makeRotation(-e)),this}translate(e,t){return this.premultiply(bc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},bc=new nt;function Ch(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function pr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function yf(){let s=pr("canvas");return s.style.display="block",s}var nd={};function mr(s){s in nd||(nd[s]=!0,console.warn(s))}function vf(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var id=new nt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),sd=new nt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function am(){let s={enabled:!0,workingColorSpace:fn,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===wt&&(i.r=Bi(i.r),i.g=Bi(i.g),i.b=Bi(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===wt&&(i.r=dr(i.r),i.g=dr(i.g),i.b=dr(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===gi?io:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return mr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return mr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[fn]:{primaries:e,whitePoint:n,transfer:io,toXYZ:id,fromXYZ:sd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Et},outputColorSpaceConfig:{drawingBufferColorSpace:Et}},[Et]:{primaries:e,whitePoint:n,transfer:wt,toXYZ:id,fromXYZ:sd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Et}}}),s}var at=am();function Bi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function dr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Ks,gr=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ks===void 0&&(Ks=pr("canvas")),Ks.width=e.width,Ks.height=e.height;let i=Ks.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Ks}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=pr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Bi(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Bi(t[n]/255)*255):t[n]=Bi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},lm=0,ls=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:lm++}),this.uuid=ui(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Ec(i[o].image)):r.push(Ec(i[o]))}else r=Ec(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function Ec(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?gr.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var cm=0,wc=new E,Qt=class s extends _i{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=Jn,i=Jn,r=Jt,o=pn,a=tn,l=Wn,c=s.DEFAULT_ANISOTROPY,h=gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cm++}),this.uuid=ui(),this.name="",this.source=new ls(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Me(0,0),this.repeat=new Me(1,1),this.center=new Me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(wc).x}get height(){return this.source.getSize(wc).y}get depth(){return this.source.getSize(wc).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ph)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case cn:e.x=e.x-Math.floor(e.x);break;case Jn:e.x=e.x<0?0:1;break;case as:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case cn:e.y=e.y-Math.floor(e.y);break;case Jn:e.y=e.y<0?0:1;break;case as:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Qt.DEFAULT_IMAGE=null;Qt.DEFAULT_MAPPING=ph;Qt.DEFAULT_ANISOTROPY=1;var lt=class s{constructor(e=0,t=0,n=0,i=1){s.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],m=l[9],x=l[2],g=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(m+g)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(c+1)/2,y=(d+1)/2,b=(p+1)/2,P=(h+f)/4,C=(u+x)/4,D=(m+g)/4;return M>y&&M>b?M<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(M),i=P/n,r=C/n):y>b?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=P/i,r=D/i):b<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(b),n=C/r,i=D/r),this.set(n,i,r,t),this}let w=Math.sqrt((g-m)*(g-m)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(w)<.001&&(w=1),this.x=(g-m)/w,this.y=(u-x)/w,this.z=(f-h)/w,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this.w=Qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this.w=Qe(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Na=class extends _i{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Jt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new lt(0,0,e,t),this.scissorTest=!1,this.viewport=new lt(0,0,e,t);let i={width:e,height:t,depth:n.depth},r=new Qt(i);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:Jt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new ls(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Lt=class extends Na{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},oo=class extends Qt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=gt,this.minFilter=gt,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ua=class extends Qt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=gt,this.minFilter=gt,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var it=class{constructor(e=new E(1/0,1/0,1/0),t=new E(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(oi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(oi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=oi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,oi):oi.fromBufferAttribute(r,o),oi.applyMatrix4(e.matrixWorld),this.expandByPoint(oi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ra.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ra.copy(n.boundingBox)),ra.applyMatrix4(e.matrixWorld),this.union(ra)}let i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,oi),oi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xr),oa.subVectors(this.max,Xr),Js.subVectors(e.a,Xr),$s.subVectors(e.b,Xr),Qs.subVectors(e.c,Xr),ts.subVectors($s,Js),ns.subVectors(Qs,$s),Es.subVectors(Js,Qs);let t=[0,-ts.z,ts.y,0,-ns.z,ns.y,0,-Es.z,Es.y,ts.z,0,-ts.x,ns.z,0,-ns.x,Es.z,0,-Es.x,-ts.y,ts.x,0,-ns.y,ns.x,0,-Es.y,Es.x,0];return!Tc(t,Js,$s,Qs,oa)||(t=[1,0,0,0,1,0,0,0,1],!Tc(t,Js,$s,Qs,oa))?!1:(aa.crossVectors(ts,ns),t=[aa.x,aa.y,aa.z],Tc(t,Js,$s,Qs,oa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,oi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(oi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Di),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Di=[new E,new E,new E,new E,new E,new E,new E,new E],oi=new E,ra=new it,Js=new E,$s=new E,Qs=new E,ts=new E,ns=new E,Es=new E,Xr=new E,oa=new E,aa=new E,ws=new E;function Tc(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){ws.fromArray(s,r);let a=i.x*Math.abs(ws.x)+i.y*Math.abs(ws.y)+i.z*Math.abs(ws.z),l=e.dot(ws),c=t.dot(ws),h=n.dot(ws);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var hm=new it,qr=new E,Ac=new E,hn=class{constructor(e=new E,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):hm.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;qr.subVectors(e,this.center);let t=qr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(qr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ac.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(qr.copy(e.center).add(Ac)),this.expandByPoint(qr.copy(e.center).sub(Ac))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Li=new E,Rc=new E,la=new E,is=new E,Cc=new E,ca=new E,Ic=new E,Mi=class{constructor(e=new E,t=new E(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Li)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Li.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Li.copy(this.origin).addScaledVector(this.direction,t),Li.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Rc.copy(e).add(t).multiplyScalar(.5),la.copy(t).sub(e).normalize(),is.copy(this.origin).sub(Rc);let r=e.distanceTo(t)*.5,o=-this.direction.dot(la),a=is.dot(this.direction),l=-is.dot(la),c=is.lengthSq(),h=Math.abs(1-o*o),u,f,d,m;if(h>0)if(u=o*l-a,f=o*a-l,m=r*h,u>=0)if(f>=-m)if(f<=m){let x=1/h;u*=x,f*=x,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-m?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=m?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Rc).addScaledVector(la,f),d}intersectSphere(e,t){Li.subVectors(e.center,this.origin);let n=Li.dot(this.direction),i=Li.dot(Li)-n*n,r=e.radius*e.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Li)!==null}intersectTriangle(e,t,n,i,r){Cc.subVectors(t,e),ca.subVectors(n,e),Ic.crossVectors(Cc,ca);let o=this.direction.dot(Ic),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;is.subVectors(this.origin,e);let l=a*this.direction.dot(ca.crossVectors(is,ca));if(l<0)return null;let c=a*this.direction.dot(Cc.cross(is));if(c<0||l+c>o)return null;let h=-a*is.dot(Ic);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ve=class s{constructor(e,t,n,i,r,o,a,l,c,h,u,f,d,m,x,g){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c,h,u,f,d,m,x,g)}set(e,t,n,i,r,o,a,l,c,h,u,f,d,m,x,g){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=m,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/er.setFromMatrixColumn(e,0).length(),r=1/er.setFromMatrixColumn(e,1).length(),o=1/er.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=o*h,d=o*u,m=a*h,x=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=d+m*c,t[5]=f-x*c,t[9]=-a*l,t[2]=x-f*c,t[6]=m+d*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*h,d=l*u,m=c*h,x=c*u;t[0]=f+x*a,t[4]=m*a-d,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=d*a-m,t[6]=x+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*h,d=l*u,m=c*h,x=c*u;t[0]=f-x*a,t[4]=-o*u,t[8]=m+d*a,t[1]=d+m*a,t[5]=o*h,t[9]=x-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*h,d=o*u,m=a*h,x=a*u;t[0]=l*h,t[4]=m*c-d,t[8]=f*c+x,t[1]=l*u,t[5]=x*c+f,t[9]=d*c-m,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,d=o*c,m=a*l,x=a*c;t[0]=l*h,t[4]=x-f*u,t[8]=m*u+d,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=d*u+m,t[10]=f-x*u}else if(e.order==="XZY"){let f=o*l,d=o*c,m=a*l,x=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+x,t[5]=o*h,t[9]=d*u-m,t[2]=m*u-d,t[6]=a*h,t[10]=x*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(um,e,dm)}lookAt(e,t,n){let i=this.elements;return kn.subVectors(e,t),kn.lengthSq()===0&&(kn.z=1),kn.normalize(),ss.crossVectors(n,kn),ss.lengthSq()===0&&(Math.abs(n.z)===1?kn.x+=1e-4:kn.z+=1e-4,kn.normalize(),ss.crossVectors(n,kn)),ss.normalize(),ha.crossVectors(kn,ss),i[0]=ss.x,i[4]=ha.x,i[8]=kn.x,i[1]=ss.y,i[5]=ha.y,i[9]=kn.y,i[2]=ss.z,i[6]=ha.z,i[10]=kn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],m=n[2],x=n[6],g=n[10],p=n[14],w=n[3],M=n[7],y=n[11],b=n[15],P=i[0],C=i[4],D=i[8],_=i[12],v=i[1],A=i[5],N=i[9],B=i[13],z=i[2],k=i[6],X=i[10],te=i[14],Y=i[3],ie=i[7],ae=i[11],fe=i[15];return r[0]=o*P+a*v+l*z+c*Y,r[4]=o*C+a*A+l*k+c*ie,r[8]=o*D+a*N+l*X+c*ae,r[12]=o*_+a*B+l*te+c*fe,r[1]=h*P+u*v+f*z+d*Y,r[5]=h*C+u*A+f*k+d*ie,r[9]=h*D+u*N+f*X+d*ae,r[13]=h*_+u*B+f*te+d*fe,r[2]=m*P+x*v+g*z+p*Y,r[6]=m*C+x*A+g*k+p*ie,r[10]=m*D+x*N+g*X+p*ae,r[14]=m*_+x*B+g*te+p*fe,r[3]=w*P+M*v+y*z+b*Y,r[7]=w*C+M*A+y*k+b*ie,r[11]=w*D+M*N+y*X+b*ae,r[15]=w*_+M*B+y*te+b*fe,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],d=e[14],m=e[3],x=e[7],g=e[11],p=e[15];return m*(+r*l*u-i*c*u-r*a*f+n*c*f+i*a*d-n*l*d)+x*(+t*l*d-t*c*f+r*o*f-i*o*d+i*c*h-r*l*h)+g*(+t*c*u-t*a*d-r*o*u+n*o*d+r*a*h-n*c*h)+p*(-i*a*h-t*l*u+t*a*f+i*o*u-n*o*f+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],d=e[11],m=e[12],x=e[13],g=e[14],p=e[15],w=u*g*c-x*f*c+x*l*d-a*g*d-u*l*p+a*f*p,M=m*f*c-h*g*c-m*l*d+o*g*d+h*l*p-o*f*p,y=h*x*c-m*u*c+m*a*d-o*x*d-h*a*p+o*u*p,b=m*u*l-h*x*l-m*a*f+o*x*f+h*a*g-o*u*g,P=t*w+n*M+i*y+r*b;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/P;return e[0]=w*C,e[1]=(x*f*r-u*g*r-x*i*d+n*g*d+u*i*p-n*f*p)*C,e[2]=(a*g*r-x*l*r+x*i*c-n*g*c-a*i*p+n*l*p)*C,e[3]=(u*l*r-a*f*r-u*i*c+n*f*c+a*i*d-n*l*d)*C,e[4]=M*C,e[5]=(h*g*r-m*f*r+m*i*d-t*g*d-h*i*p+t*f*p)*C,e[6]=(m*l*r-o*g*r-m*i*c+t*g*c+o*i*p-t*l*p)*C,e[7]=(o*f*r-h*l*r+h*i*c-t*f*c-o*i*d+t*l*d)*C,e[8]=y*C,e[9]=(m*u*r-h*x*r-m*n*d+t*x*d+h*n*p-t*u*p)*C,e[10]=(o*x*r-m*a*r+m*n*c-t*x*c-o*n*p+t*a*p)*C,e[11]=(h*a*r-o*u*r-h*n*c+t*u*c+o*n*d-t*a*d)*C,e[12]=b*C,e[13]=(h*x*i-m*u*i+m*n*f-t*x*f-h*n*g+t*u*g)*C,e[14]=(m*a*i-o*x*i-m*n*l+t*x*l+o*n*g-t*a*g)*C,e[15]=(o*u*i-h*a*i+h*n*l-t*u*l-o*n*f+t*a*f)*C,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,f=r*c,d=r*h,m=r*u,x=o*h,g=o*u,p=a*u,w=l*c,M=l*h,y=l*u,b=n.x,P=n.y,C=n.z;return i[0]=(1-(x+p))*b,i[1]=(d+y)*b,i[2]=(m-M)*b,i[3]=0,i[4]=(d-y)*P,i[5]=(1-(f+p))*P,i[6]=(g+w)*P,i[7]=0,i[8]=(m+M)*C,i[9]=(g-w)*C,i[10]=(1-(f+x))*C,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,r=er.set(i[0],i[1],i[2]).length(),o=er.set(i[4],i[5],i[6]).length(),a=er.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],ai.copy(this);let c=1/r,h=1/o,u=1/a;return ai.elements[0]*=c,ai.elements[1]*=c,ai.elements[2]*=c,ai.elements[4]*=h,ai.elements[5]*=h,ai.elements[6]*=h,ai.elements[8]*=u,ai.elements[9]*=u,ai.elements[10]*=u,t.setFromRotationMatrix(ai),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=hi,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(n-i),f=(t+e)/(t-e),d=(n+i)/(n-i),m,x;if(l)m=r/(o-r),x=o*r/(o-r);else if(a===hi)m=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===ro)m=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=hi,l=!1){let c=this.elements,h=2/(t-e),u=2/(n-i),f=-(t+e)/(t-e),d=-(n+i)/(n-i),m,x;if(l)m=1/(o-r),x=o/(o-r);else if(a===hi)m=-2/(o-r),x=-(o+r)/(o-r);else if(a===ro)m=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},er=new E,ai=new Ve,um=new E(0,0,0),dm=new E(1,1,1),ss=new E,ha=new E,kn=new E,rd=new Ve,od=new $t,Dn=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(Qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Qe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Qe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return rd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(rd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return od.setFromEuler(this),this.setFromQuaternion(od,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Dn.DEFAULT_ORDER="XYZ";var xr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},fm=0,ad=new E,tr=new $t,Ni=new Ve,ua=new E,Yr=new E,pm=new E,mm=new $t,ld=new E(1,0,0),cd=new E(0,1,0),hd=new E(0,0,1),ud={type:"added"},gm={type:"removed"},nr={type:"childadded",child:null},Pc={type:"childremoved",child:null},Nt=class s extends _i{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fm++}),this.uuid=ui(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new E,t=new Dn,n=new $t,i=new E(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ve},normalMatrix:{value:new nt}}),this.matrix=new Ve,this.matrixWorld=new Ve,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return tr.setFromAxisAngle(e,t),this.quaternion.multiply(tr),this}rotateOnWorldAxis(e,t){return tr.setFromAxisAngle(e,t),this.quaternion.premultiply(tr),this}rotateX(e){return this.rotateOnAxis(ld,e)}rotateY(e){return this.rotateOnAxis(cd,e)}rotateZ(e){return this.rotateOnAxis(hd,e)}translateOnAxis(e,t){return ad.copy(e).applyQuaternion(this.quaternion),this.position.add(ad.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ld,e)}translateY(e){return this.translateOnAxis(cd,e)}translateZ(e){return this.translateOnAxis(hd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ni.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ua.copy(e):ua.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Yr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ni.lookAt(Yr,ua,this.up):Ni.lookAt(ua,Yr,this.up),this.quaternion.setFromRotationMatrix(Ni),i&&(Ni.extractRotation(i.matrixWorld),tr.setFromRotationMatrix(Ni),this.quaternion.premultiply(tr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ud),nr.child=e,this.dispatchEvent(nr),nr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(gm),Pc.child=e,this.dispatchEvent(Pc),Pc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ni.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ni.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ni),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ud),nr.child=e,this.dispatchEvent(nr),nr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yr,e,pm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yr,mm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),d=o(e.animations),m=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};Nt.DEFAULT_UP=new E(0,1,0);Nt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var li=new E,Ui=new E,Dc=new E,Oi=new E,ir=new E,sr=new E,dd=new E,Lc=new E,Nc=new E,Uc=new E,Oc=new lt,Fc=new lt,Bc=new lt,yi=class s{constructor(e=new E,t=new E,n=new E){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),li.subVectors(e,t),i.cross(li);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){li.subVectors(i,t),Ui.subVectors(n,t),Dc.subVectors(e,t);let o=li.dot(li),a=li.dot(Ui),l=li.dot(Dc),c=Ui.dot(Ui),h=Ui.dot(Dc),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(c*l-a*h)*f,m=(o*h-a*l)*f;return r.set(1-d-m,m,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Oi)===null?!1:Oi.x>=0&&Oi.y>=0&&Oi.x+Oi.y<=1}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,Oi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Oi.x),l.addScaledVector(o,Oi.y),l.addScaledVector(a,Oi.z),l)}static getInterpolatedAttribute(e,t,n,i,r,o){return Oc.setScalar(0),Fc.setScalar(0),Bc.setScalar(0),Oc.fromBufferAttribute(e,t),Fc.fromBufferAttribute(e,n),Bc.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(Oc,r.x),o.addScaledVector(Fc,r.y),o.addScaledVector(Bc,r.z),o}static isFrontFacing(e,t,n,i){return li.subVectors(n,t),Ui.subVectors(e,t),li.cross(Ui).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return li.subVectors(this.c,this.b),Ui.subVectors(this.a,this.b),li.cross(Ui).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,o,a;ir.subVectors(i,n),sr.subVectors(r,n),Lc.subVectors(e,n);let l=ir.dot(Lc),c=sr.dot(Lc);if(l<=0&&c<=0)return t.copy(n);Nc.subVectors(e,i);let h=ir.dot(Nc),u=sr.dot(Nc);if(h>=0&&u<=h)return t.copy(i);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(ir,o);Uc.subVectors(e,r);let d=ir.dot(Uc),m=sr.dot(Uc);if(m>=0&&d<=m)return t.copy(r);let x=d*c-l*m;if(x<=0&&c>=0&&m<=0)return a=c/(c-m),t.copy(n).addScaledVector(sr,a);let g=h*m-d*u;if(g<=0&&u-h>=0&&d-m>=0)return dd.subVectors(r,i),a=(u-h)/(u-h+(d-m)),t.copy(i).addScaledVector(dd,a);let p=1/(g+x+f);return o=x*p,a=f*p,t.copy(n).addScaledVector(ir,o).addScaledVector(sr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},_f={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},rs={h:0,s:0,l:0},da={h:0,s:0,l:0};function zc(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var Pe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Et){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,at.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=at.workingColorSpace){return this.r=e,this.g=t,this.b=n,at.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=at.workingColorSpace){if(e=Rh(e,1),t=Qe(t,0,1),n=Qe(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=zc(o,r,e+1/3),this.g=zc(o,r,e),this.b=zc(o,r,e-1/3)}return at.colorSpaceToWorking(this,i),this}setStyle(e,t=Et){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Et){let n=_f[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Bi(e.r),this.g=Bi(e.g),this.b=Bi(e.b),this}copyLinearToSRGB(e){return this.r=dr(e.r),this.g=dr(e.g),this.b=dr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Et){return at.workingToColorSpace(_n.copy(this),e),Math.round(Qe(_n.r*255,0,255))*65536+Math.round(Qe(_n.g*255,0,255))*256+Math.round(Qe(_n.b*255,0,255))}getHexString(e=Et){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=at.workingColorSpace){at.workingToColorSpace(_n.copy(this),t);let n=_n.r,i=_n.g,r=_n.b,o=Math.max(n,i,r),a=Math.min(n,i,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=at.workingColorSpace){return at.workingToColorSpace(_n.copy(this),t),e.r=_n.r,e.g=_n.g,e.b=_n.b,e}getStyle(e=Et){at.workingToColorSpace(_n.copy(this),e);let t=_n.r,n=_n.g,i=_n.b;return e!==Et?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(rs),this.setHSL(rs.h+e,rs.s+t,rs.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(rs),e.getHSL(da);let n=eo(rs.h,da.h,t),i=eo(rs.s,da.s,t),r=eo(rs.l,da.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},_n=new Pe;Pe.NAMES=_f;var xm=0,Mn=class extends _i{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xm++}),this.uuid=ui(),this.name="",this.type="Material",this.blending=di,this.side=Vn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zi,this.blendDst=ki,this.blendEquation=ln,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pe(0,0,0),this.blendAlpha=0,this.depthFunc=Cs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=so,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Rs,this.stencilZFail=Rs,this.stencilZPass=Rs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==di&&(n.blending=this.blending),this.side!==Vn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==zi&&(n.blendSrc=this.blendSrc),this.blendDst!==ki&&(n.blendDst=this.blendDst),this.blendEquation!==ln&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Cs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==so&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Rs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Rs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Rs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Rt=class extends Mn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.combine=ll,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Yt=new E,fa=new Me,ym=0,tt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ym++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=La,this.updateRanges=[],this.gpuType=ti,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)fa.fromBufferAttribute(this,t),fa.applyMatrix3(e),this.setXY(t,fa.x,fa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix3(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix4(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyNormalMatrix(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.transformDirection(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ci(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ct(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ci(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ci(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ci(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ci(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array),i=Ct(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array),i=Ct(i,this.array),r=Ct(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==La&&(e.usage=this.usage),e}};var ao=class extends tt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var lo=class extends tt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var mt=class extends tt{constructor(e,t,n){super(new Float32Array(e),t,n)}},vm=0,Kn=new Ve,kc=new Nt,rr=new E,Hn=new it,jr=new it,on=new E,vt=class s extends _i{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vm++}),this.uuid=ui(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ch(e)?lo:ao)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new nt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Kn.makeRotationFromQuaternion(e),this.applyMatrix4(Kn),this}rotateX(e){return Kn.makeRotationX(e),this.applyMatrix4(Kn),this}rotateY(e){return Kn.makeRotationY(e),this.applyMatrix4(Kn),this}rotateZ(e){return Kn.makeRotationZ(e),this.applyMatrix4(Kn),this}translate(e,t,n){return Kn.makeTranslation(e,t,n),this.applyMatrix4(Kn),this}scale(e,t,n){return Kn.makeScale(e,t,n),this.applyMatrix4(Kn),this}lookAt(e){return kc.lookAt(e),kc.updateMatrix(),this.applyMatrix4(kc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(rr).negate(),this.translate(rr.x,rr.y,rr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,r=e.length;i<r;i++){let o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new mt(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new it);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new E(-1/0,-1/0,-1/0),new E(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];Hn.setFromBufferAttribute(r),this.morphTargetsRelative?(on.addVectors(this.boundingBox.min,Hn.min),this.boundingBox.expandByPoint(on),on.addVectors(this.boundingBox.max,Hn.max),this.boundingBox.expandByPoint(on)):(this.boundingBox.expandByPoint(Hn.min),this.boundingBox.expandByPoint(Hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new E,1/0);return}if(e){let n=this.boundingSphere.center;if(Hn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];jr.setFromBufferAttribute(a),this.morphTargetsRelative?(on.addVectors(Hn.min,jr.min),Hn.expandByPoint(on),on.addVectors(Hn.max,jr.max),Hn.expandByPoint(on)):(Hn.expandByPoint(jr.min),Hn.expandByPoint(jr.max))}Hn.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)on.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(on));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)on.fromBufferAttribute(a,c),l&&(rr.fromBufferAttribute(e,c),on.add(rr)),i=Math.max(i,n.distanceToSquared(on))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new tt(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let D=0;D<n.count;D++)a[D]=new E,l[D]=new E;let c=new E,h=new E,u=new E,f=new Me,d=new Me,m=new Me,x=new E,g=new E;function p(D,_,v){c.fromBufferAttribute(n,D),h.fromBufferAttribute(n,_),u.fromBufferAttribute(n,v),f.fromBufferAttribute(r,D),d.fromBufferAttribute(r,_),m.fromBufferAttribute(r,v),h.sub(c),u.sub(c),d.sub(f),m.sub(f);let A=1/(d.x*m.y-m.x*d.y);isFinite(A)&&(x.copy(h).multiplyScalar(m.y).addScaledVector(u,-d.y).multiplyScalar(A),g.copy(u).multiplyScalar(d.x).addScaledVector(h,-m.x).multiplyScalar(A),a[D].add(x),a[_].add(x),a[v].add(x),l[D].add(g),l[_].add(g),l[v].add(g))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let D=0,_=w.length;D<_;++D){let v=w[D],A=v.start,N=v.count;for(let B=A,z=A+N;B<z;B+=3)p(e.getX(B+0),e.getX(B+1),e.getX(B+2))}let M=new E,y=new E,b=new E,P=new E;function C(D){b.fromBufferAttribute(i,D),P.copy(b);let _=a[D];M.copy(_),M.sub(b.multiplyScalar(b.dot(_))).normalize(),y.crossVectors(P,_);let A=y.dot(l[D])<0?-1:1;o.setXYZW(D,M.x,M.y,M.z,A)}for(let D=0,_=w.length;D<_;++D){let v=w[D],A=v.start,N=v.count;for(let B=A,z=A+N;B<z;B+=3)C(e.getX(B+0)),C(e.getX(B+1)),C(e.getX(B+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new tt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let i=new E,r=new E,o=new E,a=new E,l=new E,c=new E,h=new E,u=new E;if(e)for(let f=0,d=e.count;f<d;f+=3){let m=e.getX(f+0),x=e.getX(f+1),g=e.getX(f+2);i.fromBufferAttribute(t,m),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,g),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)on.fromBufferAttribute(e,t),on.normalize(),e.setXYZ(t,on.x,on.y,on.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),d=0,m=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*h;for(let p=0;p<h;p++)f[m++]=c[d++]}return new tt(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},fd=new Ve,Ts=new Mi,pa=new hn,pd=new E,ma=new E,ga=new E,xa=new E,Hc=new E,ya=new E,md=new E,va=new E,Ye=class extends Nt{constructor(e=new vt,t=new Rt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let a=this.morphTargetInfluences;if(r&&a){ya.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(Hc.fromBufferAttribute(u,e),o?ya.addScaledVector(Hc,h):ya.addScaledVector(Hc.sub(t),h))}t.add(ya)}return t}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),pa.copy(n.boundingSphere),pa.applyMatrix4(r),Ts.copy(e.ray).recast(e.near),!(pa.containsPoint(Ts.origin)===!1&&(Ts.intersectSphere(pa,pd)===null||Ts.origin.distanceToSquared(pd)>(e.far-e.near)**2))&&(fd.copy(r).invert(),Ts.copy(e.ray).applyMatrix4(fd),!(n.boundingBox!==null&&Ts.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ts)))}_computeIntersections(e,t,n){let i,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,x=f.length;m<x;m++){let g=f[m],p=o[g.materialIndex],w=Math.max(g.start,d.start),M=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let y=w,b=M;y<b;y+=3){let P=a.getX(y),C=a.getX(y+1),D=a.getX(y+2);i=_a(this,p,e,n,c,h,u,P,C,D),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{let m=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let g=m,p=x;g<p;g+=3){let w=a.getX(g),M=a.getX(g+1),y=a.getX(g+2);i=_a(this,o,e,n,c,h,u,w,M,y),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,x=f.length;m<x;m++){let g=f[m],p=o[g.materialIndex],w=Math.max(g.start,d.start),M=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let y=w,b=M;y<b;y+=3){let P=y,C=y+1,D=y+2;i=_a(this,p,e,n,c,h,u,P,C,D),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{let m=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let g=m,p=x;g<p;g+=3){let w=g,M=g+1,y=g+2;i=_a(this,o,e,n,c,h,u,w,M,y),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}};function _m(s,e,t,n,i,r,o,a){let l;if(e.side===Wt?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===Vn,a),l===null)return null;va.copy(a),va.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(va);return c<t.near||c>t.far?null:{distance:c,point:va.clone(),object:s}}function _a(s,e,t,n,i,r,o,a,l,c){s.getVertexPosition(a,ma),s.getVertexPosition(l,ga),s.getVertexPosition(c,xa);let h=_m(s,e,t,n,ma,ga,xa,md);if(h){let u=new E;yi.getBarycoord(md,ma,ga,xa,u),i&&(h.uv=yi.getInterpolatedAttribute(i,a,l,c,u,new Me)),r&&(h.uv1=yi.getInterpolatedAttribute(r,a,l,c,u,new Me)),o&&(h.normal=yi.getInterpolatedAttribute(o,a,l,c,u,new E),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new E,materialIndex:0};yi.getNormal(ma,ga,xa,f.normal),h.face=f,h.barycoord=u}return h}var un=class s extends vt{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,d=0;m("z","y","x",-1,-1,n,t,e,o,r,0),m("z","y","x",1,-1,n,t,-e,o,r,1),m("x","z","y",1,1,e,n,t,i,o,2),m("x","z","y",1,-1,e,n,-t,i,o,3),m("x","y","z",1,-1,e,t,n,i,r,4),m("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new mt(c,3)),this.setAttribute("normal",new mt(h,3)),this.setAttribute("uv",new mt(u,2));function m(x,g,p,w,M,y,b,P,C,D,_){let v=y/C,A=b/D,N=y/2,B=b/2,z=P/2,k=C+1,X=D+1,te=0,Y=0,ie=new E;for(let ae=0;ae<X;ae++){let fe=ae*A-B;for(let Ue=0;Ue<k;Ue++){let Ce=Ue*v-N;ie[x]=Ce*w,ie[g]=fe*M,ie[p]=z,c.push(ie.x,ie.y,ie.z),ie[x]=0,ie[g]=0,ie[p]=P>0?1:-1,h.push(ie.x,ie.y,ie.z),u.push(Ue/C),u.push(1-ae/D),te+=1}}for(let ae=0;ae<D;ae++)for(let fe=0;fe<C;fe++){let Ue=f+fe+k*ae,Ce=f+fe+k*(ae+1),ze=f+(fe+1)+k*(ae+1),Ge=f+(fe+1)+k*ae;l.push(Ue,Ce,Ge),l.push(Ce,ze,Ge),Y+=6}a.addGroup(d,Y,_),d+=Y,f+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Hs(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function bn(s){let e={};for(let t=0;t<s.length;t++){let n=Hs(s[t]);for(let i in n)e[i]=n[i]}return e}function Mm(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Ih(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:at.workingColorSpace}var Ut={clone:Hs,merge:bn},Sm=`void main() {
  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bm=`void main() {
  gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ct=class extends Mn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Sm,this.fragmentShader=bm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Hs(e.uniforms),this.uniformsGroups=Mm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},co=class extends Nt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ve,this.projectionMatrix=new Ve,this.projectionMatrixInverse=new Ve,this.coordinateSystem=hi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},os=new E,gd=new Me,xd=new Me,Ft=class extends co{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Is*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Qr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Is*2*Math.atan(Math.tan(Qr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){os.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(os.x,os.y).multiplyScalar(-e/os.z),os.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(os.x,os.y).multiplyScalar(-e/os.z)}getViewSize(e,t){return this.getViewBounds(e,gd,xd),t.subVectors(xd,gd)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Qr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},or=-90,ar=1,yr=class extends Nt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Ft(or,ar,e,t);i.layers=this.layers,this.add(i);let r=new Ft(or,ar,e,t);r.layers=this.layers,this.add(r);let o=new Ft(or,ar,e,t);o.layers=this.layers,this.add(o);let a=new Ft(or,ar,e,t);a.layers=this.layers,this.add(a);let l=new Ft(or,ar,e,t);l.layers=this.layers,this.add(l);let c=new Ft(or,ar,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===hi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ro)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},ho=class extends Qt{constructor(e=[],t=zs,n,i,r,o,a,l,c,h){super(e,t,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},vr=class extends Lt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new ho(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
      `},i=new un(5,5,5),r=new ct({name:"CubemapFromEquirect",uniforms:Hs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Wt,blending:bt});r.uniforms.tEquirect.value=t;let o=new Ye(i,r),a=t.minFilter;return t.minFilter===pn&&(t.minFilter=Jt),new yr(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}},pt=class extends Nt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Em={type:"move"},_r=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new E,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new E),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new E,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new E),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let g=t.getJointPose(x,n),p=this._getHandJoint(c,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,m=.005;c.inputState.pinching&&f>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Em)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new pt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},uo=class s{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Pe(e),this.density=t}clone(){return new s(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Sn=class extends Nt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Dn,this.environmentIntensity=1,this.environmentRotation=new Dn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Ps=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=La,this.updateRanges=[],this.version=0,this.uuid=ui()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ui()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ui()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},wn=new E,Ln=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)wn.fromBufferAttribute(this,t),wn.applyMatrix4(e),this.setXYZ(t,wn.x,wn.y,wn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)wn.fromBufferAttribute(this,t),wn.applyNormalMatrix(e),this.setXYZ(t,wn.x,wn.y,wn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)wn.fromBufferAttribute(this,t),wn.transformDirection(e),this.setXYZ(t,wn.x,wn.y,wn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=ci(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ct(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Ct(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ci(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ci(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ci(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ci(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array),i=Ct(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array),i=Ct(i,this.array),r=Ct(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new tt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var yd=new E,vd=new lt,_d=new lt,wm=new E,Md=new Ve,Ma=new E,Vc=new hn,Sd=new Ve,Gc=new Mi,fo=class extends Ye{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Qc,this.bindMatrix=new Ve,this.bindMatrixInverse=new Ve,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new it),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ma),this.boundingBox.expandByPoint(Ma)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new hn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ma),this.boundingSphere.expandByPoint(Ma)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Vc.copy(this.boundingSphere),Vc.applyMatrix4(i),e.ray.intersectsSphere(Vc)!==!1&&(Sd.copy(i).invert(),Gc.copy(e.ray).applyMatrix4(Sd),!(this.boundingBox!==null&&Gc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Gc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new lt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Qc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===of?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;vd.fromBufferAttribute(i.attributes.skinIndex,e),_d.fromBufferAttribute(i.attributes.skinWeight,e),yd.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=_d.getComponent(r);if(o!==0){let a=vd.getComponent(r);Md.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(wm.copy(yd).applyMatrix4(Md),o)}}return t.applyMatrix4(this.bindMatrixInverse)}},Mr=class extends Nt{constructor(){super(),this.isBone=!0,this.type="Bone"}},fi=class extends Qt{constructor(e=null,t=1,n=1,i,r,o,a,l,c=gt,h=gt,u,f){super(null,o,a,l,c,h,i,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},bd=new Ve,Tm=new Ve,po=class s{constructor(e=[],t=[]){this.uuid=ui(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ve)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ve;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:Tm;bd.multiplyMatrices(a,t[r]),bd.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new fi(t,e,e,tn,ti);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let r=e.bones[n],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Mr),this.bones.push(o),this.boneInverses.push(new Ve().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){let o=t[i];e.bones.push(o.uuid);let a=n[i];e.boneInverses.push(a.toArray())}return e}},cs=class extends tt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},lr=new Ve,Ed=new Ve,Sa=[],wd=new it,Am=new Ve,Zr=new Ye,Kr=new hn,Gi=class extends Ye{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new cs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Am)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new it),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,lr),wd.copy(e.boundingBox).applyMatrix4(lr),this.boundingBox.union(wd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new hn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,lr),Kr.copy(e.boundingSphere).applyMatrix4(lr),this.boundingSphere.union(Kr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(Zr.geometry=this.geometry,Zr.material=this.material,Zr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Kr.copy(this.boundingSphere),Kr.applyMatrix4(n),e.ray.intersectsSphere(Kr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,lr),Ed.multiplyMatrices(n,lr),Zr.matrixWorld=Ed,Zr.raycast(e,Sa);for(let o=0,a=Sa.length;o<a;o++){let l=Sa[o];l.instanceId=r,l.object=this,t.push(l)}Sa.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new cs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new fi(new Float32Array(i*this.count),i,this.count,_l,ti));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Wc=new E,Rm=new E,Cm=new nt,an=class{constructor(e=new E(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Wc.subVectors(n,t).cross(Rm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Wc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Cm.getNormalMatrix(e),i=this.coplanarPoint(Wc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},As=new hn,Im=new Me(.5,.5),ba=new E,Sr=class{constructor(e=new an,t=new an,n=new an,i=new an,r=new an,o=new an){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=hi,n=!1){let i=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],f=r[6],d=r[7],m=r[8],x=r[9],g=r[10],p=r[11],w=r[12],M=r[13],y=r[14],b=r[15];if(i[0].setComponents(c-o,d-h,p-m,b-w).normalize(),i[1].setComponents(c+o,d+h,p+m,b+w).normalize(),i[2].setComponents(c+a,d+u,p+x,b+M).normalize(),i[3].setComponents(c-a,d-u,p-x,b-M).normalize(),n)i[4].setComponents(l,f,g,y).normalize(),i[5].setComponents(c-l,d-f,p-g,b-y).normalize();else if(i[4].setComponents(c-l,d-f,p-g,b-y).normalize(),t===hi)i[5].setComponents(c+l,d+f,p+g,b+y).normalize();else if(t===ro)i[5].setComponents(l,f,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),As.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),As.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(As)}intersectsSprite(e){As.center.set(0,0,0);let t=Im.distanceTo(e.center);return As.radius=.7071067811865476+t,As.applyMatrix4(e.matrixWorld),this.intersectsSphere(As)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(ba.x=i.normal.x>0?e.max.x:e.min.x,ba.y=i.normal.y>0?e.max.y:e.min.y,ba.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ba)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var $n=class extends Mn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Pe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Oa=new E,Fa=new E,Td=new Ve,Jr=new Mi,Ea=new hn,Xc=new E,Ad=new E,Ds=class extends Nt{constructor(e=new vt,t=new $n){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Oa.fromBufferAttribute(t,i-1),Fa.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Oa.distanceTo(Fa);e.setAttribute("lineDistance",new mt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ea.copy(n.boundingSphere),Ea.applyMatrix4(i),Ea.radius+=r,e.ray.intersectsSphere(Ea)===!1)return;Td.copy(i).invert(),Jr.copy(e.ray).applyMatrix4(Td);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let d=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let x=d,g=m-1;x<g;x+=c){let p=h.getX(x),w=h.getX(x+1),M=wa(this,e,Jr,l,p,w,x);M&&t.push(M)}if(this.isLineLoop){let x=h.getX(m-1),g=h.getX(d),p=wa(this,e,Jr,l,x,g,m-1);p&&t.push(p)}}else{let d=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let x=d,g=m-1;x<g;x+=c){let p=wa(this,e,Jr,l,x,x+1,x);p&&t.push(p)}if(this.isLineLoop){let x=wa(this,e,Jr,l,m-1,d,m-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function wa(s,e,t,n,i,r,o){let a=s.geometry.attributes.position;if(Oa.fromBufferAttribute(a,i),Fa.fromBufferAttribute(a,r),t.distanceSqToSegment(Oa,Fa,Xc,Ad)>n)return;Xc.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(Xc);if(!(c<e.near||c>e.far))return{distance:c,point:Ad.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}var Rd=new E,Cd=new E,hs=class extends Ds{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Rd.fromBufferAttribute(t,i),Cd.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Rd.distanceTo(Cd);e.setAttribute("lineDistance",new mt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},us=class extends Ds{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},ds=class extends Mn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Pe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Id=new Ve,ih=new Mi,Ta=new hn,Aa=new E,Ls=class extends Nt{constructor(e=new vt,t=new ds){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ta.copy(n.boundingSphere),Ta.applyMatrix4(i),Ta.radius+=r,e.ray.intersectsSphere(Ta)===!1)return;Id.copy(i).invert(),ih.copy(e.ray).applyMatrix4(Id);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let m=f,x=d;m<x;m++){let g=c.getX(m);Aa.fromBufferAttribute(u,g),Pd(Aa,g,l,i,e,t,this)}}else{let f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let m=f,x=d;m<x;m++)Aa.fromBufferAttribute(u,m),Pd(Aa,m,l,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Pd(s,e,t,n,i,r,o){let a=ih.distanceSqToPoint(s);if(a<t){let l=new E;ih.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Ns=class extends Qt{constructor(e,t,n,i,r,o,a,l,c,h,u,f){super(null,o,a,l,c,h,i,r,u,f),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}};var Wi=class extends Qt{constructor(e,t,n=xs,i,r,o,a=gt,l=gt,c,h=fr,u=1){if(h!==fr&&h!==vs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:u};super(f,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ls(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},mo=class extends Qt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var go=class s extends vt{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],f=[],d=[],m=0,x=[],g=n/2,p=0;w(),o===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new mt(u,3)),this.setAttribute("normal",new mt(f,3)),this.setAttribute("uv",new mt(d,2));function w(){let y=new E,b=new E,P=0,C=(t-e)/n;for(let D=0;D<=r;D++){let _=[],v=D/r,A=v*(t-e)+e;for(let N=0;N<=i;N++){let B=N/i,z=B*l+a,k=Math.sin(z),X=Math.cos(z);b.x=A*k,b.y=-v*n+g,b.z=A*X,u.push(b.x,b.y,b.z),y.set(k,C,X).normalize(),f.push(y.x,y.y,y.z),d.push(B,1-v),_.push(m++)}x.push(_)}for(let D=0;D<i;D++)for(let _=0;_<r;_++){let v=x[_][D],A=x[_+1][D],N=x[_+1][D+1],B=x[_][D+1];(e>0||_!==0)&&(h.push(v,A,B),P+=3),(t>0||_!==r-1)&&(h.push(A,N,B),P+=3)}c.addGroup(p,P,0),p+=P}function M(y){let b=m,P=new Me,C=new E,D=0,_=y===!0?e:t,v=y===!0?1:-1;for(let N=1;N<=i;N++)u.push(0,g*v,0),f.push(0,v,0),d.push(.5,.5),m++;let A=m;for(let N=0;N<=i;N++){let z=N/i*l+a,k=Math.cos(z),X=Math.sin(z);C.x=_*X,C.y=g*v,C.z=_*k,u.push(C.x,C.y,C.z),f.push(0,v,0),P.x=k*.5+.5,P.y=X*.5*v+.5,d.push(P.x,P.y),m++}for(let N=0;N<i;N++){let B=b+N,z=A+N;y===!0?h.push(z,z+1,B):h.push(z+1,z,B),D+=3}c.addGroup(p,D,y===!0?1:2),p+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Qn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),i=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);let h=n[i],f=n[i+1]-h,d=(o-h)/f;return(i+d)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),l=t||(o.isVector2?new Me:new E);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new E,i=[],r=[],o=[],a=new E,l=new Ve;for(let d=0;d<=e;d++){let m=d/e;i[d]=this.getTangentAt(m,new E)}r[0]=new E,o[0]=new E;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(Qe(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,m))}o[d].crossVectors(i[d],r[d])}if(t===!0){let d=Math.acos(Qe(r[0].dot(r[e]),-1,1));d/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let m=1;m<=e;m++)r[m].applyMatrix4(l.makeRotationAxis(i[m],d*m)),o[m].crossVectors(i[m],r[m])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},xo=class extends Qn{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new Me){let n=t,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Ba=class extends xo{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Ph(){let s=0,e=0,t=0,n=0;function i(r,o,a,l){s=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,i(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return s+e*r+t*o+n*a}}}var Ra=new E,qc=new Ph,Yc=new Ph,jc=new Ph,br=class extends Qn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new E){let n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:(Ra.subVectors(i[0],i[1]).add(i[0]),c=Ra);let u=i[a%r],f=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(Ra.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Ra),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(u),d),x=Math.pow(u.distanceToSquared(f),d),g=Math.pow(f.distanceToSquared(h),d);x<1e-4&&(x=1),m<1e-4&&(m=x),g<1e-4&&(g=x),qc.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,m,x,g),Yc.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,m,x,g),jc.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,m,x,g)}else this.curveType==="catmullrom"&&(qc.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),Yc.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),jc.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(qc.calc(l),Yc.calc(l),jc.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new E().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Dd(s,e,t,n,i){let r=(n-e)*.5,o=(i-t)*.5,a=s*s,l=s*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*s+t}function Pm(s,e){let t=1-s;return t*t*e}function Dm(s,e){return 2*(1-s)*s*e}function Lm(s,e){return s*s*e}function to(s,e,t,n){return Pm(s,e)+Dm(s,t)+Lm(s,n)}function Nm(s,e){let t=1-s;return t*t*t*e}function Um(s,e){let t=1-s;return 3*t*t*s*e}function Om(s,e){return 3*(1-s)*s*s*e}function Fm(s,e){return s*s*s*e}function no(s,e,t,n,i){return Nm(s,e)+Um(s,t)+Om(s,n)+Fm(s,i)}var za=class extends Qn{constructor(e=new Me,t=new Me,n=new Me,i=new Me){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new Me){let n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(no(e,i.x,r.x,o.x,a.x),no(e,i.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ka=class extends Qn{constructor(e=new E,t=new E,n=new E,i=new E){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new E){let n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(no(e,i.x,r.x,o.x,a.x),no(e,i.y,r.y,o.y,a.y),no(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ha=class extends Qn{constructor(e=new Me,t=new Me){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Me){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Me){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Va=class extends Qn{constructor(e=new E,t=new E){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new E){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new E){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ga=class extends Qn{constructor(e=new Me,t=new Me,n=new Me){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Me){let n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(to(e,i.x,r.x,o.x),to(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},yo=class extends Qn{constructor(e=new E,t=new E,n=new E){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new E){let n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(to(e,i.x,r.x,o.x),to(e,i.y,r.y,o.y),to(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Wa=class extends Qn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Me){let n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(Dd(a,l.x,c.x,h.x,u.x),Dd(a,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new Me().fromArray(i))}return this}},Bm=Object.freeze({__proto__:null,ArcCurve:Ba,CatmullRomCurve3:br,CubicBezierCurve:za,CubicBezierCurve3:ka,EllipseCurve:xo,LineCurve:Ha,LineCurve3:Va,QuadraticBezierCurve:Ga,QuadraticBezierCurve3:yo,SplineCurve:Wa});var en=class s extends vt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=e/a,f=t/l,d=[],m=[],x=[],g=[];for(let p=0;p<h;p++){let w=p*f-o;for(let M=0;M<c;M++){let y=M*u-r;m.push(y,-w,0),x.push(0,0,1),g.push(M/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let w=0;w<a;w++){let M=w+c*p,y=w+c*(p+1),b=w+1+c*(p+1),P=w+1+c*p;d.push(M,y,P),d.push(y,b,P)}this.setIndex(d),this.setAttribute("position",new mt(m,3)),this.setAttribute("normal",new mt(x,3)),this.setAttribute("uv",new mt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}};var vo=class s extends vt{constructor(e=new yo(new E(-1,-1,0),new E(-1,1,0),new E(1,1,0)),t=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new E,l=new E,c=new Me,h=new E,u=[],f=[],d=[],m=[];x(),this.setIndex(m),this.setAttribute("position",new mt(u,3)),this.setAttribute("normal",new mt(f,3)),this.setAttribute("uv",new mt(d,2));function x(){for(let M=0;M<t;M++)g(M);g(r===!1?t:0),w(),p()}function g(M){h=e.getPointAt(M/t,h);let y=o.normals[M],b=o.binormals[M];for(let P=0;P<=i;P++){let C=P/i*Math.PI*2,D=Math.sin(C),_=-Math.cos(C);l.x=_*y.x+D*b.x,l.y=_*y.y+D*b.y,l.z=_*y.z+D*b.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function p(){for(let M=1;M<=t;M++)for(let y=1;y<=i;y++){let b=(i+1)*(M-1)+(y-1),P=(i+1)*M+(y-1),C=(i+1)*M+y,D=(i+1)*(M-1)+y;m.push(b,P,D),m.push(P,C,D)}}function w(){for(let M=0;M<=t;M++)for(let y=0;y<=i;y++)c.x=M/t,c.y=y/i,d.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new s(new Bm[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},_o=class extends vt{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],n=new Set,i=new E,r=new E;if(e.index!==null){let o=e.attributes.position,a=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let u=l[c],f=u.start,d=u.count;for(let m=f,x=f+d;m<x;m+=3)for(let g=0;g<3;g++){let p=a.getX(m+g),w=a.getX(m+(g+1)%3);i.fromBufferAttribute(o,p),r.fromBufferAttribute(o,w),Ld(i,r,n)===!0&&(t.push(i.x,i.y,i.z),t.push(r.x,r.y,r.z))}}}else{let o=e.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){let h=3*a+c,u=3*a+(c+1)%3;i.fromBufferAttribute(o,h),r.fromBufferAttribute(o,u),Ld(i,r,n)===!0&&(t.push(i.x,i.y,i.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new mt(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function Ld(s,e,t){let n=`${s.x},${s.y},${s.z}-${e.x},${e.y},${e.z}`,i=`${e.x},${e.y},${e.z}-${s.x},${s.y},${s.z}`;return t.has(n)===!0||t.has(i)===!0?!1:(t.add(n),t.add(i),!0)}var Mo=class extends ct{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},jt=class extends Mn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Pe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wo,this.normalScale=new Me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Zt=class extends jt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Me(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Qe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Pe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Pe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Pe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Us=class extends Mn{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wo,this.normalScale=new Me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}},So=class extends Mn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wo,this.normalScale=new Me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.combine=ll,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Xa=class extends Mn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=lf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},qa=class extends Mn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ca(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function zm(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function km(s){function e(i,r){return s[i]-s[r]}let t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Nd(s,e,t){let n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let l=0;l!==e;++l)i[o++]=s[a+l]}return i}function Mf(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}var Xi=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ya=class extends Xi{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:eh,endingEnd:eh}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,o=e+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case th:r=e,a=2*t-n;break;case nh:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case th:o=e,l=2*n-t;break;case nh:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,m=(n-t)/(i-t),x=m*m,g=x*m,p=-f*g+2*f*x-f*m,w=(1+f)*g+(-1.5-2*f)*x+(-.5+f)*m+1,M=(-1-d)*g+(1.5+d)*x+.5*m,y=d*g-d*x;for(let b=0;b!==a;++b)r[b]=p*o[h+b]+w*o[c+b]+M*o[l+b]+y*o[u+b];return r}},ja=class extends Xi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(i-t),u=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*u+o[l+f]*h;return r}},Za=class extends Xi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},Nn=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ca(t,this.TimeBufferType),this.values=Ca(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ca(e.times,Array),values:Ca(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Za(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ja(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ya(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Hi:t=this.InterpolantFactoryMethodDiscrete;break;case Vi:t=this.InterpolantFactoryMethodLinear;break;case Da:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Hi;case this.InterpolantFactoryMethodLinear:return Vi;case this.InterpolantFactoryMethodSmooth:return Da}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&zm(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Da,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(i)l=!0;else{let u=a*n,f=u-n,d=u+n;for(let m=0;m!==n;++m){let x=t[u+m];if(x!==t[f+m]||x!==t[d+m]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[u+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};Nn.prototype.ValueTypeName="";Nn.prototype.TimeBufferType=Float32Array;Nn.prototype.ValueBufferType=Float32Array;Nn.prototype.DefaultInterpolation=Vi;var qi=class extends Nn{constructor(e,t,n){super(e,t,n)}};qi.prototype.ValueTypeName="bool";qi.prototype.ValueBufferType=Array;qi.prototype.DefaultInterpolation=Hi;qi.prototype.InterpolantFactoryMethodLinear=void 0;qi.prototype.InterpolantFactoryMethodSmooth=void 0;var bo=class extends Nn{constructor(e,t,n,i){super(e,t,n,i)}};bo.prototype.ValueTypeName="color";var Si=class extends Nn{constructor(e,t,n,i){super(e,t,n,i)}};Si.prototype.ValueTypeName="number";var Ka=class extends Xi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t),c=e*a;for(let h=c+a;c!==h;c+=4)$t.slerpFlat(r,0,o,c-a,o,c,l);return r}},bi=class extends Nn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new Ka(this.times,this.values,this.getValueSize(),e)}};bi.prototype.ValueTypeName="quaternion";bi.prototype.InterpolantFactoryMethodSmooth=void 0;var Yi=class extends Nn{constructor(e,t,n){super(e,t,n)}};Yi.prototype.ValueTypeName="string";Yi.prototype.ValueBufferType=Array;Yi.prototype.DefaultInterpolation=Hi;Yi.prototype.InterpolantFactoryMethodLinear=void 0;Yi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ei=class extends Nn{constructor(e,t,n,i){super(e,t,n,i)}};Ei.prototype.ValueTypeName="vector";var Eo=class{constructor(e="",t=-1,n=[],i=af){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=ui(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Vm(n[o]).scale(i));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(Nn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let h=km(l);l=Nd(l,1,h),c=Nd(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Si(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],h=c.name.match(r);if(h&&h.length>1){let u=h[1],f=i[u];f||(i[u]=f=[]),f.push(c)}}let o=[];for(let a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,f,d,m,x){if(d.length!==0){let g=[],p=[];Mf(d,g,p,m),g.length!==0&&x.push(new u(f,g,p))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let u=0;u<c.length;u++){let f=c[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){let d={},m;for(m=0;m<f.length;m++)if(f[m].morphTargets)for(let x=0;x<f[m].morphTargets.length;x++)d[f[m].morphTargets[x]]=-1;for(let x in d){let g=[],p=[];for(let w=0;w!==f[m].morphTargets.length;++w){let M=f[m];g.push(M.time),p.push(M.morphTarget===x?1:0)}i.push(new Si(".morphTargetInfluence["+x+"]",g,p))}l=d.length*o}else{let d=".bones["+t[u].name+"]";n(Ei,d+".position",f,"pos",i),n(bi,d+".quaternion",f,"rot",i),n(Ei,d+".scale",f,"scl",i)}}return i.length===0?null:new this(r,l,i,a)}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function Hm(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Si;case"vector":case"vector2":case"vector3":case"vector4":return Ei;case"color":return bo;case"quaternion":return bi;case"bool":case"boolean":return qi;case"string":return Yi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Vm(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Hm(s.type);if(s.times===void 0){let t=[],n=[];Mf(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}var vi={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}},Ja=class{constructor(e,t,n){let i=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],m=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},Sf=new Ja,wi=class{constructor(e){this.manager=e!==void 0?e:Sf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};wi.DEFAULT_MATERIAL_NAME="__DEFAULT";var Fi={},sh=class extends Error{constructor(e,t){super(e),this.response=t}},Er=class extends wi{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=vi.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Fi[e]!==void 0){Fi[e].push({onLoad:t,onProgress:n,onError:i});return}Fi[e]=[],Fi[e].push({onLoad:t,onProgress:n,onError:i});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=Fi[e],u=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,m=d!==0,x=0,g=new ReadableStream({start(p){w();function w(){u.read().then(({done:M,value:y})=>{if(M)p.close();else{x+=y.byteLength;let b=new ProgressEvent("progress",{lengthComputable:m,loaded:x,total:d});for(let P=0,C=h.length;P<C;P++){let D=h[P];D.onProgress&&D.onProgress(b)}p.enqueue(y),w()}},M=>{p.error(M)})}}});return new Response(g)}else throw new sh(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a==="")return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(m=>d.decode(m))}}}).then(c=>{vi.add(`file:${e}`,c);let h=Fi[e];delete Fi[e];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onLoad&&d.onLoad(c)}}).catch(c=>{let h=Fi[e];if(h===void 0)throw this.manager.itemError(e),c;delete Fi[e];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var cr=new WeakMap,$a=class extends wi{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=vi.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let u=cr.get(o);u===void 0&&(u=[],cr.set(o,u)),u.push({onLoad:t,onError:i})}return o}let a=pr("img");function l(){h(),t&&t(this);let u=cr.get(this)||[];for(let f=0;f<u.length;f++){let d=u[f];d.onLoad&&d.onLoad(this)}cr.delete(this),r.manager.itemEnd(e)}function c(u){h(),i&&i(u),vi.remove(`image:${e}`);let f=cr.get(this)||[];for(let d=0;d<f.length;d++){let m=f[d];m.onError&&m.onError(u)}cr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),vi.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}};var wo=class extends wi{constructor(e){super(e)}load(e,t,n,i){let r=new Qt,o=new $a(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},Os=class extends Nt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Pe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},ji=class extends Os{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Pe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Zc=new Ve,Ud=new E,Od=new E,To=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Me(512,512),this.mapType=Wn,this.map=null,this.mapPass=null,this.matrix=new Ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Sr,this._frameExtents=new Me(1,1),this._viewportCount=1,this._viewports=[new lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Ud.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ud),Od.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Od),t.updateMatrixWorld(),Zc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zc,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Zc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},rh=class extends To{constructor(){super(new Ft(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Is*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Ao=class extends Os{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.target=new Nt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new rh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Fd=new Ve,$r=new E,Kc=new E,oh=class extends To{constructor(){super(new Ft(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Me(4,2),this._viewportCount=6,this._viewports=[new lt(2,1,1,1),new lt(0,1,1,1),new lt(3,1,1,1),new lt(1,1,1,1),new lt(3,0,1,1),new lt(1,0,1,1)],this._cubeDirections=[new E(1,0,0),new E(-1,0,0),new E(0,0,1),new E(0,0,-1),new E(0,1,0),new E(0,-1,0)],this._cubeUps=[new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,0,1),new E(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),$r.setFromMatrixPosition(e.matrixWorld),n.position.copy($r),Kc.copy(n.position),Kc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Kc),n.updateMatrixWorld(),i.makeTranslation(-$r.x,-$r.y,-$r.z),Fd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fd,n.coordinateSystem,n.reversedDepth)}},Zi=class extends Os{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new oh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Gn=class extends co{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ah=class extends To{constructor(){super(new Gn(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},pi=class extends Os{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.target=new Nt,this.shadow=new ah}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Ki=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},Ro=class extends vt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var Jc=new WeakMap,Co=class extends wi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=vi.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{if(Jc.has(o)===!0)i&&i(Jc.get(o)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(c),r.manager.itemEnd(e),c});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return vi.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),Jc.set(l,c),vi.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});vi.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Qa=class extends Ft{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Io=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};var Dh="\\[\\]\\.:\\/",Gm=new RegExp("["+Dh+"]","g"),Lh="[^"+Dh+"]",Wm="[^"+Dh.replace("\\.","")+"]",Xm=/((?:WC+[\/:])*)/.source.replace("WC",Lh),qm=/(WCOD+)?/.source.replace("WCOD",Wm),Ym=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Lh),jm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Lh),Zm=new RegExp("^"+Xm+qm+Ym+jm+"$"),Km=["material","materials","bones","map"],lh=class{constructor(e,t,n){let i=n||St.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},St=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Gm,"")}static parseTrackName(e){let t=Zm.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);Km.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[i];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};St.Composite=lh;St.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};St.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};St.prototype.GetterByBindingType=[St.prototype._getValue_direct,St.prototype._getValue_array,St.prototype._getValue_arrayElement,St.prototype._getValue_toArray];St.prototype.SetterByBindingTypeAndVersioning=[[St.prototype._setValue_direct,St.prototype._setValue_direct_setNeedsUpdate,St.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[St.prototype._setValue_array,St.prototype._setValue_array_setNeedsUpdate,St.prototype._setValue_array_setMatrixWorldNeedsUpdate],[St.prototype._setValue_arrayElement,St.prototype._setValue_arrayElement_setNeedsUpdate,St.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[St.prototype._setValue_fromArray,St.prototype._setValue_fromArray_setNeedsUpdate,St.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var v_=new Float32Array(1);var fs=class extends Ps{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){let t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){let t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}};var Bd=new Ve,mi=class{constructor(e,t,n=0,i=1/0){this.ray=new Mi(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new xr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Bd.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Bd),this}intersectObject(e,t=!0,n=[]){return ch(e,this,n,t),n.sort(zd),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)ch(e[i],this,n,t);return n.sort(zd),n}};function zd(s,e){return s.distance-e.distance}function ch(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){let r=s.children;for(let o=0,a=r.length;o<a;o++)ch(r[o],e,t,!0)}}var Ti=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Qe(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Qe(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var kd=new E,Ia=new E,hr=new E,ur=new E,$c=new E,Jm=new E,$m=new E,Po=class{constructor(e=new E,t=new E){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){kd.subVectors(e,this.start),Ia.subVectors(this.end,this.start);let n=Ia.dot(Ia),r=Ia.dot(kd)/n;return t&&(r=Qe(r,0,1)),r}closestPointToPoint(e,t,n){let i=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(i).add(this.start)}distanceSqToLine3(e,t=Jm,n=$m){let i=10000000000000001e-32,r,o,a=this.start,l=e.start,c=this.end,h=e.end;hr.subVectors(c,a),ur.subVectors(h,l),$c.subVectors(a,l);let u=hr.dot(hr),f=ur.dot(ur),d=ur.dot($c);if(u<=i&&f<=i)return t.copy(a),n.copy(l),t.sub(n),t.dot(t);if(u<=i)r=0,o=d/f,o=Qe(o,0,1);else{let m=hr.dot($c);if(f<=i)o=0,r=Qe(-m/u,0,1);else{let x=hr.dot(ur),g=u*f-x*x;g!==0?r=Qe((x*d-m*f)/g,0,1):r=0,o=(x*r+d)/f,o<0?(o=0,r=Qe(-m/u,0,1)):o>1&&(o=1,r=Qe((x-m)/u,0,1))}}return t.copy(a).add(hr.multiplyScalar(r)),n.copy(l).add(ur.multiplyScalar(o)),t.sub(n),t.dot(t)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};var Do=class extends hs{constructor(e=10,t=10,n=4473924,i=8947848){n=new Pe(n),i=new Pe(i);let r=t/2,o=e/t,a=e/2,l=[],c=[];for(let f=0,d=0,m=-a;f<=t;f++,m+=o){l.push(-a,0,m,a,0,m),l.push(m,0,-a,m,0,a);let x=f===r?n:i;x.toArray(c,d),d+=3,x.toArray(c,d),d+=3,x.toArray(c,d),d+=3,x.toArray(c,d),d+=3}let h=new vt;h.setAttribute("position",new mt(l,3)),h.setAttribute("color",new mt(c,3));let u=new $n({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}};var Pa=new it,Lo=class extends hs{constructor(e,t=16776960){let n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(24),r=new vt;r.setIndex(new tt(n,1)),r.setAttribute("position",new tt(i,3)),super(r,new $n({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(){if(this.object!==void 0&&Pa.setFromObject(this.object),Pa.isEmpty())return;let e=Pa.min,t=Pa.max,n=this.geometry.attributes.position,i=n.array;i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=e.x,i[4]=t.y,i[5]=t.z,i[6]=e.x,i[7]=e.y,i[8]=t.z,i[9]=t.x,i[10]=e.y,i[11]=t.z,i[12]=t.x,i[13]=t.y,i[14]=e.z,i[15]=e.x,i[16]=t.y,i[17]=e.z,i[18]=e.x,i[19]=e.y,i[20]=e.z,i[21]=t.x,i[22]=e.y,i[23]=e.z,n.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}},No=class extends hs{constructor(e,t=16776960){let n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new vt;r.setIndex(new tt(n,1)),r.setAttribute("position",new mt(i,3)),super(r,new $n({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){let t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}};var Uo=class extends _i{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function Nh(s,e,t,n){let i=Qm(n);switch(t){case vh:return s*e;case _l:return s*e/i.components*i.byteLength;case Ml:return s*e/i.components*i.byteLength;case Mh:return s*e*2/i.components*i.byteLength;case Sl:return s*e*2/i.components*i.byteLength;case _h:return s*e*3/i.components*i.byteLength;case tn:return s*e*4/i.components*i.byteLength;case bl:return s*e*4/i.components*i.byteLength;case zo:case ko:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ho:case Vo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case wl:case Al:return Math.max(s,16)*Math.max(e,8)/4;case El:case Tl:return Math.max(s,8)*Math.max(e,8)/2;case Rl:case Cl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Il:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Pl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Dl:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Ll:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Nl:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Ul:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Ol:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Fl:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Bl:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case zl:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case kl:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Hl:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Vl:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Gl:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Wl:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Xl:case ql:case Yl:return Math.ceil(s/4)*Math.ceil(e/4)*16;case jl:case Zl:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Kl:case Jl:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Qm(s){switch(s){case Wn:case mh:return{byteLength:1,components:1};case gs:case gh:case Xt:return{byteLength:2,components:1};case yl:case vl:return{byteLength:2,components:4};case xs:case xl:case ti:return{byteLength:4,components:1};case xh:case yh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function qf(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function eg(s){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,u=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=s.SHORT;else if(c instanceof Uint32Array)d=s.UNSIGNED_INT;else if(c instanceof Int32Array)d=s.INT;else if(c instanceof Int8Array)d=s.BYTE;else if(c instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(s.bindBuffer(c,a),u.length===0)s.bufferSubData(c,0,h);else{u.sort((d,m)=>d.start-m.start);let f=0;for(let d=1;d<u.length;d++){let m=u[f],x=u[d];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++f,u[f]=x)}u.length=f+1;for(let d=0,m=u.length;d<m;d++){let x=u[d];s.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(s.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var tg=`#ifdef USE_ALPHAHASH
  if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ng=`#ifdef USE_ALPHAHASH
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
#endif`,ig=`#ifdef USE_ALPHAMAP
  diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,sg=`#ifdef USE_ALPHAMAP
  uniform sampler2D alphaMap;
#endif`,rg=`#ifdef USE_ALPHATEST
  #ifdef ALPHA_TO_COVERAGE
  diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
  if ( diffuseColor.a == 0.0 ) discard;
  #else
  if ( diffuseColor.a < alphaTest ) discard;
  #endif
#endif`,og=`#ifdef USE_ALPHATEST
  uniform float alphaTest;
#endif`,ag=`#ifdef USE_AOMAP
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
#endif`,lg=`#ifdef USE_AOMAP
  uniform sampler2D aoMap;
  uniform float aoMapIntensity;
#endif`,cg=`#ifdef USE_BATCHING
  #if ! defined( GL_ANGLE_multi_draw )
  #define gl_DrawID _gl_DrawID
  uniform int _gl_DrawID;
  #endif
  uniform highp sampler2D batchingTexture;
  uniform highp usampler2D batchingIdTexture;
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
  float getIndirectIndex( const in int i ) {
    int size = textureSize( batchingIdTexture, 0 ).x;
    int x = i % size;
    int y = i / size;
    return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
  }
#endif
#ifdef USE_BATCHING_COLOR
  uniform sampler2D batchingColorTexture;
  vec3 getBatchingColor( const in float i ) {
    int size = textureSize( batchingColorTexture, 0 ).x;
    int j = int( i );
    int x = j % size;
    int y = j / size;
    return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
  }
#endif`,hg=`#ifdef USE_BATCHING
  mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ug=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
  vPosition = vec3( position );
#endif`,dg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
  vec3 objectTangent = vec3( tangent.xyz );
#endif`,fg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,pg=`#ifdef USE_IRIDESCENCE
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
#endif`,mg=`#ifdef USE_BUMPMAP
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
#endif`,gg=`#if NUM_CLIPPING_PLANES > 0
  vec4 plane;
  #ifdef ALPHA_TO_COVERAGE
    float distanceToPlane, distanceGradient;
    float clipOpacity = 1.0;
    #pragma unroll_loop_start
    for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
      plane = clippingPlanes[ i ];
      distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
      distanceGradient = fwidth( distanceToPlane ) / 2.0;
      clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
      if ( clipOpacity == 0.0 ) discard;
    }
    #pragma unroll_loop_end
    #if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
      float unionClipOpacity = 1.0;
      #pragma unroll_loop_start
      for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
        plane = clippingPlanes[ i ];
        distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
        distanceGradient = fwidth( distanceToPlane ) / 2.0;
        unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
      }
      #pragma unroll_loop_end
      clipOpacity *= 1.0 - unionClipOpacity;
    #endif
    diffuseColor.a *= clipOpacity;
    if ( diffuseColor.a == 0.0 ) discard;
  #else
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
  #endif
#endif`,xg=`#if NUM_CLIPPING_PLANES > 0
  varying vec3 vClipPosition;
  uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yg=`#if NUM_CLIPPING_PLANES > 0
  varying vec3 vClipPosition;
#endif`,vg=`#if NUM_CLIPPING_PLANES > 0
  vClipPosition = - mvPosition.xyz;
#endif`,_g=`#if defined( USE_COLOR_ALPHA )
  diffuseColor *= vColor;
#elif defined( USE_COLOR )
  diffuseColor.rgb *= vColor;
#endif`,Mg=`#if defined( USE_COLOR_ALPHA )
  varying vec4 vColor;
#elif defined( USE_COLOR )
  varying vec3 vColor;
#endif`,Sg=`#if defined( USE_COLOR_ALPHA )
  varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
  varying vec3 vColor;
#endif`,bg=`#if defined( USE_COLOR_ALPHA )
  vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
  vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
  vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
  vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
  vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
  vColor.xyz *= batchingColor.xyz;
#endif`,Eg=`#define PI 3.141592653589793
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
} // validated`,wg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Tg=`vec3 transformedNormal = objectNormal;
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
#endif`,Ag=`#ifdef USE_DISPLACEMENTMAP
  uniform sampler2D displacementMap;
  uniform float displacementScale;
  uniform float displacementBias;
#endif`,Rg=`#ifdef USE_DISPLACEMENTMAP
  transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Cg=`#ifdef USE_EMISSIVEMAP
  vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
  #ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
    emissiveColor = sRGBTransferEOTF( emissiveColor );
  #endif
  totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ig=`#ifdef USE_EMISSIVEMAP
  uniform sampler2D emissiveMap;
#endif`,Pg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Dg=`vec4 LinearTransferOETF( in vec4 value ) {
  return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
  return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
  return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Lg=`#ifdef USE_ENVMAP
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
    vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,Ng=`#ifdef USE_ENVMAP
  uniform float envMapIntensity;
  uniform float flipEnvMap;
  uniform mat3 envMapRotation;
  #ifdef ENVMAP_TYPE_CUBE
    uniform samplerCube envMap;
  #else
    uniform sampler2D envMap;
  #endif

#endif`,Ug=`#ifdef USE_ENVMAP
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
#endif`,Og=`#ifdef USE_ENVMAP
  #if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
    #define ENV_WORLDPOS
  #endif
  #ifdef ENV_WORLDPOS

    varying vec3 vWorldPosition;
  #else
    varying vec3 vReflect;
    uniform float refractionRatio;
  #endif
#endif`,Fg=`#ifdef USE_ENVMAP
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
#endif`,Bg=`#ifdef USE_FOG
  vFogDepth = - mvPosition.z;
#endif`,zg=`#ifdef USE_FOG
  varying float vFogDepth;
#endif`,kg=`#ifdef USE_FOG
  #ifdef FOG_EXP2
    float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
  #else
    float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
  #endif
  gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Hg=`#ifdef USE_FOG
  uniform vec3 fogColor;
  varying float vFogDepth;
  #ifdef FOG_EXP2
    uniform float fogDensity;
  #else
    uniform float fogNear;
    uniform float fogFar;
  #endif
#endif`,Vg=`#ifdef USE_GRADIENTMAP
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
}`,Gg=`#ifdef USE_LIGHTMAP
  uniform sampler2D lightMap;
  uniform float lightMapIntensity;
#endif`,Wg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Xg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qg=`uniform bool receiveShadow;
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
  float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
  if ( cutoffDistance > 0.0 ) {
    distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
  }
  return distanceFalloff;
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
#endif`,Yg=`#ifdef USE_ENVMAP
  vec3 getIBLIrradiance( const in vec3 normal ) {
    #ifdef ENVMAP_TYPE_CUBE_UV
      vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
      vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
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
      vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,jg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Zg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Kg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Jg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$g=`PhysicalMaterial material;
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
#ifdef USE_DISPERSION
  material.dispersion = dispersion;
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
#endif`,Qg=`struct PhysicalMaterial {
  vec3 diffuseColor;
  float roughness;
  vec3 specularColor;
  float specularF90;
  float dispersion;
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
}`,e0=`
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
    directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
    directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
    directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,t0=`#if defined( RE_IndirectDiffuse )
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
#endif`,n0=`#if defined( RE_IndirectDiffuse )
  RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
  RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,i0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
  gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,s0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
  uniform float logDepthBufFC;
  varying float vFragDepth;
  varying float vIsPerspective;
#endif`,r0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
  varying float vFragDepth;
  varying float vIsPerspective;
#endif`,o0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
  vFragDepth = 1.0 + gl_Position.w;
  vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,a0=`#ifdef USE_MAP
  vec4 sampledDiffuseColor = texture2D( map, vMapUv );
  #ifdef DECODE_VIDEO_TEXTURE
    sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
  #endif
  diffuseColor *= sampledDiffuseColor;
#endif`,l0=`#ifdef USE_MAP
  uniform sampler2D map;
#endif`,c0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,h0=`#if defined( USE_POINTS_UV )
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
#endif`,u0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
  vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
  metalnessFactor *= texelMetalness.b;
#endif`,d0=`#ifdef USE_METALNESSMAP
  uniform sampler2D metalnessMap;
#endif`,f0=`#ifdef USE_INSTANCING_MORPH
  float morphTargetInfluences[ MORPHTARGETS_COUNT ];
  float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
  for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
    morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
  }
#endif`,p0=`#if defined( USE_MORPHCOLORS )
  vColor *= morphTargetBaseInfluence;
  for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
    #if defined( USE_COLOR_ALPHA )
      if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
    #elif defined( USE_COLOR )
      if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
    #endif
  }
#endif`,m0=`#ifdef USE_MORPHNORMALS
  objectNormal *= morphTargetBaseInfluence;
  for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
    if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
  }
#endif`,g0=`#ifdef USE_MORPHTARGETS
  #ifndef USE_INSTANCING_MORPH
    uniform float morphTargetBaseInfluence;
    uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
  #endif
  uniform sampler2DArray morphTargetsTexture;
  uniform ivec2 morphTargetsTextureSize;
  vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
    int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
    int y = texelIndex / morphTargetsTextureSize.x;
    int x = texelIndex - y * morphTargetsTextureSize.x;
    ivec3 morphUV = ivec3( x, y, morphTargetIndex );
    return texelFetch( morphTargetsTexture, morphUV, 0 );
  }
#endif`,x0=`#ifdef USE_MORPHTARGETS
  transformed *= morphTargetBaseInfluence;
  for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
    if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
  }
#endif`,y0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,v0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,_0=`#ifndef FLAT_SHADED
  varying vec3 vNormal;
  #ifdef USE_TANGENT
    varying vec3 vTangent;
    varying vec3 vBitangent;
  #endif
#endif`,M0=`#ifndef FLAT_SHADED
  varying vec3 vNormal;
  #ifdef USE_TANGENT
    varying vec3 vTangent;
    varying vec3 vBitangent;
  #endif
#endif`,S0=`#ifndef FLAT_SHADED
  vNormal = normalize( transformedNormal );
  #ifdef USE_TANGENT
    vTangent = normalize( transformedTangent );
    vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
  #endif
#endif`,b0=`#ifdef USE_NORMALMAP
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
#endif`,E0=`#ifdef USE_CLEARCOAT
  vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,w0=`#ifdef USE_CLEARCOAT_NORMALMAP
  vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
  clearcoatMapN.xy *= clearcoatNormalScale;
  clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,T0=`#ifdef USE_CLEARCOATMAP
  uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
  uniform sampler2D clearcoatNormalMap;
  uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
  uniform sampler2D clearcoatRoughnessMap;
#endif`,A0=`#ifdef USE_IRIDESCENCEMAP
  uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
  uniform sampler2D iridescenceThicknessMap;
#endif`,R0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,C0=`vec3 packNormalToRGB( const in vec3 normal ) {
  return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
  return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
  if( v <= 0.0 )
    return vec4( 0., 0., 0., 0. );
  if( v >= 1.0 )
    return vec4( 1., 1., 1., 1. );
  float vuf;
  float af = modf( v * PackFactors.a, vuf );
  float bf = modf( vuf * ShiftRight8, vuf );
  float gf = modf( vuf * ShiftRight8, vuf );
  return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
  if( v <= 0.0 )
    return vec3( 0., 0., 0. );
  if( v >= 1.0 )
    return vec3( 1., 1., 1. );
  float vuf;
  float bf = modf( v * PackFactors.b, vuf );
  float gf = modf( vuf * ShiftRight8, vuf );
  return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
  if( v <= 0.0 )
    return vec2( 0., 0. );
  if( v >= 1.0 )
    return vec2( 1., 1. );
  float vuf;
  float gf = modf( v * 256., vuf );
  return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
  return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
  return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
  return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
  vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
  return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,I0=`#ifdef PREMULTIPLIED_ALPHA
  gl_FragColor.rgb *= gl_FragColor.a;
#endif`,P0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
  mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
  mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,D0=`#ifdef DITHERING
  gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,L0=`#ifdef DITHERING
  vec3 dithering( vec3 color ) {
    float grid_position = rand( gl_FragCoord.xy );
    vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
    dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
    return color + dither_shift_RGB;
  }
#endif`,N0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
  vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
  roughnessFactor *= texelRoughness.g;
#endif`,U0=`#ifdef USE_ROUGHNESSMAP
  uniform sampler2D roughnessMap;
#endif`,O0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
      float shadowIntensity;
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
      float shadowIntensity;
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
      float shadowIntensity;
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
    float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
    #ifdef USE_REVERSED_DEPTH_BUFFER
      return step( depth, compare );
    #else
      return step( compare, depth );
    #endif
  }
  vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
    return unpackRGBATo2Half( texture2D( shadow, uv ) );
  }
  float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
    float occlusion = 1.0;
    vec2 distribution = texture2DDistribution( shadow, uv );
    #ifdef USE_REVERSED_DEPTH_BUFFER
      float hard_shadow = step( distribution.x, compare );
    #else
      float hard_shadow = step( compare, distribution.x );
    #endif
    if ( hard_shadow != 1.0 ) {
      float distance = compare - distribution.x;
      float variance = max( 0.00000, distribution.y * distribution.y );
      float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
    }
    return occlusion;
  }
  float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
    return mix( 1.0, shadow, shadowIntensity );
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
  float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
    float shadow = 1.0;
    vec3 lightToPosition = shadowCoord.xyz;

    float lightToPositionLength = length( lightToPosition );
    if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
      float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
      vec3 bd3D = normalize( lightToPosition );
      vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
      #if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
        vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
        shadow = (
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
        shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
      #endif
    }
    return mix( 1.0, shadow, shadowIntensity );
  }
#endif`,F0=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
  #if NUM_DIR_LIGHT_SHADOWS > 0
    uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
    varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
    struct DirectionalLightShadow {
      float shadowIntensity;
      float shadowBias;
      float shadowNormalBias;
      float shadowRadius;
      vec2 shadowMapSize;
    };
    uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
  #endif
  #if NUM_SPOT_LIGHT_SHADOWS > 0
    struct SpotLightShadow {
      float shadowIntensity;
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
      float shadowIntensity;
      float shadowBias;
      float shadowNormalBias;
      float shadowRadius;
      vec2 shadowMapSize;
      float shadowCameraNear;
      float shadowCameraFar;
    };
    uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
  #endif
#endif`,B0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,z0=`float getShadowMask() {
  float shadow = 1.0;
  #ifdef USE_SHADOWMAP
  #if NUM_DIR_LIGHT_SHADOWS > 0
  DirectionalLightShadow directionalLight;
  #pragma unroll_loop_start
  for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
    directionalLight = directionalLightShadows[ i ];
    shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
  }
  #pragma unroll_loop_end
  #endif
  #if NUM_SPOT_LIGHT_SHADOWS > 0
  SpotLightShadow spotLight;
  #pragma unroll_loop_start
  for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
    spotLight = spotLightShadows[ i ];
    shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
  }
  #pragma unroll_loop_end
  #endif
  #if NUM_POINT_LIGHT_SHADOWS > 0
  PointLightShadow pointLight;
  #pragma unroll_loop_start
  for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
    pointLight = pointLightShadows[ i ];
    shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
  }
  #pragma unroll_loop_end
  #endif
  #endif
  return shadow;
}`,k0=`#ifdef USE_SKINNING
  mat4 boneMatX = getBoneMatrix( skinIndex.x );
  mat4 boneMatY = getBoneMatrix( skinIndex.y );
  mat4 boneMatZ = getBoneMatrix( skinIndex.z );
  mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,H0=`#ifdef USE_SKINNING
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
#endif`,V0=`#ifdef USE_SKINNING
  vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
  vec4 skinned = vec4( 0.0 );
  skinned += boneMatX * skinVertex * skinWeight.x;
  skinned += boneMatY * skinVertex * skinWeight.y;
  skinned += boneMatZ * skinVertex * skinWeight.z;
  skinned += boneMatW * skinVertex * skinWeight.w;
  transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,G0=`#ifdef USE_SKINNING
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
#endif`,W0=`float specularStrength;
#ifdef USE_SPECULARMAP
  vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
  specularStrength = texelSpecular.r;
#else
  specularStrength = 1.0;
#endif`,X0=`#ifdef USE_SPECULARMAP
  uniform sampler2D specularMap;
#endif`,q0=`#if defined( TONE_MAPPING )
  gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Y0=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
  color *= toneMappingExposure;
  color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
  color = AgXInsetMatrix * color;
  color = max( color, 1e-10 );	color = log2( color );
  color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
  color = clamp( color, 0.0, 1.0 );
  color = agxDefaultContrastApprox( color );
  color = AgXOutsetMatrix * color;
  color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
  color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
  color = clamp( color, 0.0, 1.0 );
  return color;
}
vec3 NeutralToneMapping( vec3 color ) {
  const float StartCompression = 0.8 - 0.04;
  const float Desaturation = 0.15;
  color *= toneMappingExposure;
  float x = min( color.r, min( color.g, color.b ) );
  float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
  color -= offset;
  float peak = max( color.r, max( color.g, color.b ) );
  if ( peak < StartCompression ) return color;
  float d = 1. - StartCompression;
  float newPeak = 1. - d * d / ( peak + d - StartCompression );
  color *= newPeak / peak;
  float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
  return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,j0=`#ifdef USE_TRANSMISSION
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
    pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
    material.attenuationColor, material.attenuationDistance );
  material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
  totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Z0=`#ifdef USE_TRANSMISSION
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
    const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
    const in vec3 attenuationColor, const in float attenuationDistance ) {
    vec4 transmittedLight;
    vec3 transmittance;
    #ifdef USE_DISPERSION
      float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
      vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
      for ( int i = 0; i < 3; i ++ ) {
        vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
        vec3 refractedRayExit = position + transmissionRay;
        vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
        vec2 refractionCoords = ndcPos.xy / ndcPos.w;
        refractionCoords += 1.0;
        refractionCoords /= 2.0;
        vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
        transmittedLight[ i ] = transmissionSample[ i ];
        transmittedLight.a += transmissionSample.a;
        transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
      }
      transmittedLight.a /= 3.0;
    #else
      vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
      vec3 refractedRayExit = position + transmissionRay;
      vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
      vec2 refractionCoords = ndcPos.xy / ndcPos.w;
      refractionCoords += 1.0;
      refractionCoords /= 2.0;
      transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
      transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
    #endif
    vec3 attenuatedColor = transmittance * transmittedLight.rgb;
    vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
    float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
    return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
  }
#endif`,K0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,J0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Q0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
  vec4 worldPosition = vec4( transformed, 1.0 );
  #ifdef USE_BATCHING
    worldPosition = batchingMatrix * worldPosition;
  #endif
  #ifdef USE_INSTANCING
    worldPosition = instanceMatrix * worldPosition;
  #endif
  worldPosition = modelMatrix * worldPosition;
#endif`,ex=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
  vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
  gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,tx=`uniform sampler2D t2D;
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
}`,nx=`varying vec3 vWorldDirection;
#include <common>
void main() {
  vWorldDirection = transformDirection( position, modelMatrix );
  #include <begin_vertex>
  #include <project_vertex>
  gl_Position.z = gl_Position.w;
}`,ix=`#ifdef ENVMAP_TYPE_CUBE
  uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
  uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
  #ifdef ENVMAP_TYPE_CUBE
    vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
  #elif defined( ENVMAP_TYPE_CUBE_UV )
    vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
  #else
    vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
  #endif
  texColor.rgb *= backgroundIntensity;
  gl_FragColor = texColor;
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`,sx=`varying vec3 vWorldDirection;
#include <common>
void main() {
  vWorldDirection = transformDirection( position, modelMatrix );
  #include <begin_vertex>
  #include <project_vertex>
  gl_Position.z = gl_Position.w;
}`,rx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
  vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
  gl_FragColor = texColor;
  gl_FragColor.a *= opacity;
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`,ox=`#include <common>
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
  #include <morphinstance_vertex>
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
}`,ax=`#if DEPTH_PACKING == 3200
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
  vec4 diffuseColor = vec4( 1.0 );
  #include <clipping_planes_fragment>
  #if DEPTH_PACKING == 3200
    diffuseColor.a = opacity;
  #endif
  #include <map_fragment>
  #include <alphamap_fragment>
  #include <alphatest_fragment>
  #include <alphahash_fragment>
  #include <logdepthbuf_fragment>
  #ifdef USE_REVERSED_DEPTH_BUFFER
    float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
  #else
    float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
  #endif
  #if DEPTH_PACKING == 3200
    gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
  #elif DEPTH_PACKING == 3201
    gl_FragColor = packDepthToRGBA( fragCoordZ );
  #elif DEPTH_PACKING == 3202
    gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
  #elif DEPTH_PACKING == 3203
    gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
  #endif
}`,lx=`#define DISTANCE
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
  #include <morphinstance_vertex>
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
}`,cx=`#define DISTANCE
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
  vec4 diffuseColor = vec4( 1.0 );
  #include <clipping_planes_fragment>
  #include <map_fragment>
  #include <alphamap_fragment>
  #include <alphatest_fragment>
  #include <alphahash_fragment>
  float dist = length( vWorldPosition - referencePosition );
  dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
  dist = saturate( dist );
  gl_FragColor = packDepthToRGBA( dist );
}`,hx=`varying vec3 vWorldDirection;
#include <common>
void main() {
  vWorldDirection = transformDirection( position, modelMatrix );
  #include <begin_vertex>
  #include <project_vertex>
}`,ux=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
  vec3 direction = normalize( vWorldDirection );
  vec2 sampleUV = equirectUv( direction );
  gl_FragColor = texture2D( tEquirect, sampleUV );
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`,dx=`uniform float scale;
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
  #include <morphinstance_vertex>
  #include <morphcolor_vertex>
  #include <begin_vertex>
  #include <morphtarget_vertex>
  #include <project_vertex>
  #include <logdepthbuf_vertex>
  #include <clipping_planes_vertex>
  #include <fog_vertex>
}`,fx=`uniform vec3 diffuse;
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
  vec4 diffuseColor = vec4( diffuse, opacity );
  #include <clipping_planes_fragment>
  if ( mod( vLineDistance, totalSize ) > dashSize ) {
    discard;
  }
  vec3 outgoingLight = vec3( 0.0 );
  #include <logdepthbuf_fragment>
  #include <map_fragment>
  #include <color_fragment>
  outgoingLight = diffuseColor.rgb;
  #include <opaque_fragment>
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
  #include <fog_fragment>
  #include <premultiplied_alpha_fragment>
}`,px=`#include <common>
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
  #include <morphinstance_vertex>
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
}`,mx=`uniform vec3 diffuse;
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
  vec4 diffuseColor = vec4( diffuse, opacity );
  #include <clipping_planes_fragment>
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
}`,gx=`#define LAMBERT
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
  #include <morphinstance_vertex>
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
}`,xx=`#define LAMBERT
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
  vec4 diffuseColor = vec4( diffuse, opacity );
  #include <clipping_planes_fragment>
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
}`,yx=`#define MATCAP
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
  #include <morphinstance_vertex>
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
}`,vx=`#define MATCAP
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
  vec4 diffuseColor = vec4( diffuse, opacity );
  #include <clipping_planes_fragment>
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
}`,_x=`#define NORMAL
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
  #include <morphinstance_vertex>
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
}`,Mx=`#define NORMAL
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
  vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
  #include <clipping_planes_fragment>
  #include <logdepthbuf_fragment>
  #include <normal_fragment_begin>
  #include <normal_fragment_maps>
  gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
  #ifdef OPAQUE
    gl_FragColor.a = 1.0;
  #endif
}`,Sx=`#define PHONG
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
  #include <morphinstance_vertex>
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
}`,bx=`#define PHONG
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
  vec4 diffuseColor = vec4( diffuse, opacity );
  #include <clipping_planes_fragment>
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
}`,Ex=`#define STANDARD
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
  #include <morphinstance_vertex>
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
}`,wx=`#define STANDARD
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
#ifdef USE_DISPERSION
  uniform float dispersion;
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
  vec4 diffuseColor = vec4( diffuse, opacity );
  #include <clipping_planes_fragment>
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
}`,Tx=`#define TOON
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
  #include <morphinstance_vertex>
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
}`,Ax=`#define TOON
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
  vec4 diffuseColor = vec4( diffuse, opacity );
  #include <clipping_planes_fragment>
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
}`,Rx=`uniform float size;
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
  #include <morphinstance_vertex>
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
}`,Cx=`uniform vec3 diffuse;
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
  vec4 diffuseColor = vec4( diffuse, opacity );
  #include <clipping_planes_fragment>
  vec3 outgoingLight = vec3( 0.0 );
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
}`,Ix=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
  #include <batching_vertex>
  #include <beginnormal_vertex>
  #include <morphinstance_vertex>
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
}`,Px=`uniform vec3 color;
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
}`,Dx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
  #include <uv_vertex>
  vec4 mvPosition = modelViewMatrix[ 3 ];
  vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,Lx=`uniform vec3 diffuse;
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
  vec4 diffuseColor = vec4( diffuse, opacity );
  #include <clipping_planes_fragment>
  vec3 outgoingLight = vec3( 0.0 );
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
}`,rt={alphahash_fragment:tg,alphahash_pars_fragment:ng,alphamap_fragment:ig,alphamap_pars_fragment:sg,alphatest_fragment:rg,alphatest_pars_fragment:og,aomap_fragment:ag,aomap_pars_fragment:lg,batching_pars_vertex:cg,batching_vertex:hg,begin_vertex:ug,beginnormal_vertex:dg,bsdfs:fg,iridescence_fragment:pg,bumpmap_pars_fragment:mg,clipping_planes_fragment:gg,clipping_planes_pars_fragment:xg,clipping_planes_pars_vertex:yg,clipping_planes_vertex:vg,color_fragment:_g,color_pars_fragment:Mg,color_pars_vertex:Sg,color_vertex:bg,common:Eg,cube_uv_reflection_fragment:wg,defaultnormal_vertex:Tg,displacementmap_pars_vertex:Ag,displacementmap_vertex:Rg,emissivemap_fragment:Cg,emissivemap_pars_fragment:Ig,colorspace_fragment:Pg,colorspace_pars_fragment:Dg,envmap_fragment:Lg,envmap_common_pars_fragment:Ng,envmap_pars_fragment:Ug,envmap_pars_vertex:Og,envmap_physical_pars_fragment:Yg,envmap_vertex:Fg,fog_vertex:Bg,fog_pars_vertex:zg,fog_fragment:kg,fog_pars_fragment:Hg,gradientmap_pars_fragment:Vg,lightmap_pars_fragment:Gg,lights_lambert_fragment:Wg,lights_lambert_pars_fragment:Xg,lights_pars_begin:qg,lights_toon_fragment:jg,lights_toon_pars_fragment:Zg,lights_phong_fragment:Kg,lights_phong_pars_fragment:Jg,lights_physical_fragment:$g,lights_physical_pars_fragment:Qg,lights_fragment_begin:e0,lights_fragment_maps:t0,lights_fragment_end:n0,logdepthbuf_fragment:i0,logdepthbuf_pars_fragment:s0,logdepthbuf_pars_vertex:r0,logdepthbuf_vertex:o0,map_fragment:a0,map_pars_fragment:l0,map_particle_fragment:c0,map_particle_pars_fragment:h0,metalnessmap_fragment:u0,metalnessmap_pars_fragment:d0,morphinstance_vertex:f0,morphcolor_vertex:p0,morphnormal_vertex:m0,morphtarget_pars_vertex:g0,morphtarget_vertex:x0,normal_fragment_begin:y0,normal_fragment_maps:v0,normal_pars_fragment:_0,normal_pars_vertex:M0,normal_vertex:S0,normalmap_pars_fragment:b0,clearcoat_normal_fragment_begin:E0,clearcoat_normal_fragment_maps:w0,clearcoat_pars_fragment:T0,iridescence_pars_fragment:A0,opaque_fragment:R0,packing:C0,premultiplied_alpha_fragment:I0,project_vertex:P0,dithering_fragment:D0,dithering_pars_fragment:L0,roughnessmap_fragment:N0,roughnessmap_pars_fragment:U0,shadowmap_pars_fragment:O0,shadowmap_pars_vertex:F0,shadowmap_vertex:B0,shadowmask_pars_fragment:z0,skinbase_vertex:k0,skinning_pars_vertex:H0,skinning_vertex:V0,skinnormal_vertex:G0,specularmap_fragment:W0,specularmap_pars_fragment:X0,tonemapping_fragment:q0,tonemapping_pars_fragment:Y0,transmission_fragment:j0,transmission_pars_fragment:Z0,uv_pars_fragment:K0,uv_pars_vertex:J0,uv_vertex:$0,worldpos_vertex:Q0,background_vert:ex,background_frag:tx,backgroundCube_vert:nx,backgroundCube_frag:ix,cube_vert:sx,cube_frag:rx,depth_vert:ox,depth_frag:ax,distanceRGBA_vert:lx,distanceRGBA_frag:cx,equirect_vert:hx,equirect_frag:ux,linedashed_vert:dx,linedashed_frag:fx,meshbasic_vert:px,meshbasic_frag:mx,meshlambert_vert:gx,meshlambert_frag:xx,meshmatcap_vert:yx,meshmatcap_frag:vx,meshnormal_vert:_x,meshnormal_frag:Mx,meshphong_vert:Sx,meshphong_frag:bx,meshphysical_vert:Ex,meshphysical_frag:wx,meshtoon_vert:Tx,meshtoon_frag:Ax,points_vert:Rx,points_frag:Cx,shadow_vert:Ix,shadow_frag:Px,sprite_vert:Dx,sprite_frag:Lx},Le={common:{diffuse:{value:new Pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new nt}},envmap:{envMap:{value:null},envMapRotation:{value:new nt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new nt},normalScale:{value:new Me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0},uvTransform:{value:new nt}},sprite:{diffuse:{value:new Pe(16777215)},opacity:{value:1},center:{value:new Me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}}},Tn={basic:{uniforms:bn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:rt.meshbasic_vert,fragmentShader:rt.meshbasic_frag},lambert:{uniforms:bn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new Pe(0)}}]),vertexShader:rt.meshlambert_vert,fragmentShader:rt.meshlambert_frag},phong:{uniforms:bn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new Pe(0)},specular:{value:new Pe(1118481)},shininess:{value:30}}]),vertexShader:rt.meshphong_vert,fragmentShader:rt.meshphong_frag},standard:{uniforms:bn([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new Pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag},toon:{uniforms:bn([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new Pe(0)}}]),vertexShader:rt.meshtoon_vert,fragmentShader:rt.meshtoon_frag},matcap:{uniforms:bn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:rt.meshmatcap_vert,fragmentShader:rt.meshmatcap_frag},points:{uniforms:bn([Le.points,Le.fog]),vertexShader:rt.points_vert,fragmentShader:rt.points_frag},dashed:{uniforms:bn([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:rt.linedashed_vert,fragmentShader:rt.linedashed_frag},depth:{uniforms:bn([Le.common,Le.displacementmap]),vertexShader:rt.depth_vert,fragmentShader:rt.depth_frag},normal:{uniforms:bn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:rt.meshnormal_vert,fragmentShader:rt.meshnormal_frag},sprite:{uniforms:bn([Le.sprite,Le.fog]),vertexShader:rt.sprite_vert,fragmentShader:rt.sprite_frag},background:{uniforms:{uvTransform:{value:new nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:rt.background_vert,fragmentShader:rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new nt}},vertexShader:rt.backgroundCube_vert,fragmentShader:rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:rt.cube_vert,fragmentShader:rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:rt.equirect_vert,fragmentShader:rt.equirect_frag},distanceRGBA:{uniforms:bn([Le.common,Le.displacementmap,{referencePosition:{value:new E},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:rt.distanceRGBA_vert,fragmentShader:rt.distanceRGBA_frag},shadow:{uniforms:bn([Le.lights,Le.fog,{color:{value:new Pe(0)},opacity:{value:1}}]),vertexShader:rt.shadow_vert,fragmentShader:rt.shadow_frag}};Tn.physical={uniforms:bn([Tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new nt},clearcoatNormalScale:{value:new Me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new nt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new nt},sheen:{value:0},sheenColor:{value:new Pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new nt},transmissionSamplerSize:{value:new Me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new nt},attenuationDistance:{value:0},attenuationColor:{value:new Pe(0)},specularColor:{value:new Pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new nt},anisotropyVector:{value:new Me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new nt}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag};var $l={r:0,b:0,g:0},Vs=new Dn,Nx=new Ve;function Ux(s,e,t,n,i,r,o){let a=new Pe(0),l=r===!0?0:1,c,h,u=null,f=0,d=null;function m(M){let y=M.isScene===!0?M.background:null;return y&&y.isTexture&&(y=(M.backgroundBlurriness>0?t:e).get(y)),y}function x(M){let y=!1,b=m(M);b===null?p(a,l):b&&b.isColor&&(p(b,1),y=!0);let P=s.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function g(M,y){let b=m(y);b&&(b.isCubeTexture||b.mapping===Bo)?(h===void 0&&(h=new Ye(new un(1,1,1),new ct({name:"BackgroundCubeMaterial",uniforms:Hs(Tn.backgroundCube.uniforms),vertexShader:Tn.backgroundCube.vertexShader,fragmentShader:Tn.backgroundCube.fragmentShader,side:Wt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,C,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Vs.copy(y.backgroundRotation),Vs.x*=-1,Vs.y*=-1,Vs.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Vs.y*=-1,Vs.z*=-1),h.material.uniforms.envMap.value=b,h.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Nx.makeRotationFromEuler(Vs)),h.material.toneMapped=at.getTransfer(b.colorSpace)!==wt,(u!==b||f!==b.version||d!==s.toneMapping)&&(h.material.needsUpdate=!0,u=b,f=b.version,d=s.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new Ye(new en(2,2),new ct({name:"BackgroundMaterial",uniforms:Hs(Tn.background.uniforms),vertexShader:Tn.background.vertexShader,fragmentShader:Tn.background.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=at.getTransfer(b.colorSpace)!==wt,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||f!==b.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,u=b,f=b.version,d=s.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function p(M,y){M.getRGB($l,Ih(s)),n.buffers.color.setClear($l.r,$l.g,$l.b,y,o)}function w(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,y=1){a.set(M),l=y,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,p(a,l)},render:x,addToRenderList:g,dispose:w}}function Ox(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null),r=i,o=!1;function a(v,A,N,B,z){let k=!1,X=u(B,N,A);r!==X&&(r=X,c(r.object)),k=d(v,B,N,z),k&&m(v,B,N,z),z!==null&&e.update(z,s.ELEMENT_ARRAY_BUFFER),(k||o)&&(o=!1,y(v,A,N,B),z!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return s.createVertexArray()}function c(v){return s.bindVertexArray(v)}function h(v){return s.deleteVertexArray(v)}function u(v,A,N){let B=N.wireframe===!0,z=n[v.id];z===void 0&&(z={},n[v.id]=z);let k=z[A.id];k===void 0&&(k={},z[A.id]=k);let X=k[B];return X===void 0&&(X=f(l()),k[B]=X),X}function f(v){let A=[],N=[],B=[];for(let z=0;z<t;z++)A[z]=0,N[z]=0,B[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:N,attributeDivisors:B,object:v,attributes:{},index:null}}function d(v,A,N,B){let z=r.attributes,k=A.attributes,X=0,te=N.getAttributes();for(let Y in te)if(te[Y].location>=0){let ae=z[Y],fe=k[Y];if(fe===void 0&&(Y==="instanceMatrix"&&v.instanceMatrix&&(fe=v.instanceMatrix),Y==="instanceColor"&&v.instanceColor&&(fe=v.instanceColor)),ae===void 0||ae.attribute!==fe||fe&&ae.data!==fe.data)return!0;X++}return r.attributesNum!==X||r.index!==B}function m(v,A,N,B){let z={},k=A.attributes,X=0,te=N.getAttributes();for(let Y in te)if(te[Y].location>=0){let ae=k[Y];ae===void 0&&(Y==="instanceMatrix"&&v.instanceMatrix&&(ae=v.instanceMatrix),Y==="instanceColor"&&v.instanceColor&&(ae=v.instanceColor));let fe={};fe.attribute=ae,ae&&ae.data&&(fe.data=ae.data),z[Y]=fe,X++}r.attributes=z,r.attributesNum=X,r.index=B}function x(){let v=r.newAttributes;for(let A=0,N=v.length;A<N;A++)v[A]=0}function g(v){p(v,0)}function p(v,A){let N=r.newAttributes,B=r.enabledAttributes,z=r.attributeDivisors;N[v]=1,B[v]===0&&(s.enableVertexAttribArray(v),B[v]=1),z[v]!==A&&(s.vertexAttribDivisor(v,A),z[v]=A)}function w(){let v=r.newAttributes,A=r.enabledAttributes;for(let N=0,B=A.length;N<B;N++)A[N]!==v[N]&&(s.disableVertexAttribArray(N),A[N]=0)}function M(v,A,N,B,z,k,X){X===!0?s.vertexAttribIPointer(v,A,N,z,k):s.vertexAttribPointer(v,A,N,B,z,k)}function y(v,A,N,B){x();let z=B.attributes,k=N.getAttributes(),X=A.defaultAttributeValues;for(let te in k){let Y=k[te];if(Y.location>=0){let ie=z[te];if(ie===void 0&&(te==="instanceMatrix"&&v.instanceMatrix&&(ie=v.instanceMatrix),te==="instanceColor"&&v.instanceColor&&(ie=v.instanceColor)),ie!==void 0){let ae=ie.normalized,fe=ie.itemSize,Ue=e.get(ie);if(Ue===void 0)continue;let Ce=Ue.buffer,ze=Ue.type,Ge=Ue.bytesPerElement,se=ze===s.INT||ze===s.UNSIGNED_INT||ie.gpuType===xl;if(ie.isInterleavedBufferAttribute){let le=ie.data,_e=le.stride,be=ie.offset;if(le.isInstancedInterleavedBuffer){for(let we=0;we<Y.locationSize;we++)p(Y.location+we,le.meshPerAttribute);v.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let we=0;we<Y.locationSize;we++)g(Y.location+we);s.bindBuffer(s.ARRAY_BUFFER,Ce);for(let we=0;we<Y.locationSize;we++)M(Y.location+we,fe/Y.locationSize,ze,ae,_e*Ge,(be+fe/Y.locationSize*we)*Ge,se)}else{if(ie.isInstancedBufferAttribute){for(let le=0;le<Y.locationSize;le++)p(Y.location+le,ie.meshPerAttribute);v.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let le=0;le<Y.locationSize;le++)g(Y.location+le);s.bindBuffer(s.ARRAY_BUFFER,Ce);for(let le=0;le<Y.locationSize;le++)M(Y.location+le,fe/Y.locationSize,ze,ae,fe*Ge,fe/Y.locationSize*le*Ge,se)}}else if(X!==void 0){let ae=X[te];if(ae!==void 0)switch(ae.length){case 2:s.vertexAttrib2fv(Y.location,ae);break;case 3:s.vertexAttrib3fv(Y.location,ae);break;case 4:s.vertexAttrib4fv(Y.location,ae);break;default:s.vertexAttrib1fv(Y.location,ae)}}}}w()}function b(){D();for(let v in n){let A=n[v];for(let N in A){let B=A[N];for(let z in B)h(B[z].object),delete B[z];delete A[N]}delete n[v]}}function P(v){if(n[v.id]===void 0)return;let A=n[v.id];for(let N in A){let B=A[N];for(let z in B)h(B[z].object),delete B[z];delete A[N]}delete n[v.id]}function C(v){for(let A in n){let N=n[A];if(N[v.id]===void 0)continue;let B=N[v.id];for(let z in B)h(B[z].object),delete B[z];delete N[v.id]}}function D(){_(),o=!0,r!==i&&(r=i,c(r.object))}function _(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:D,resetDefaultState:_,dispose:b,releaseStatesOfGeometry:P,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:g,disableUnusedAttributes:w}}function Fx(s,e,t){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),t.update(h,n,1)}function o(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let d=0;for(let m=0;m<u;m++)d+=h[m];t.update(d,n,1)}function l(c,h,u,f){if(u===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<c.length;m++)o(c[m],h[m],f[m]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let m=0;for(let x=0;x<u;x++)m+=h[x]*f[x];t.update(m,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Bx(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let C=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(C){return!(C!==tn&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){let D=C===Xt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Wn&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==ti&&!D)}function l(C){if(C==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),w=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),M=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),b=m>0,P=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:w,maxVaryings:M,maxFragmentUniforms:y,vertexTextures:b,maxSamples:P}}function zx(s){let e=this,t=null,n=0,i=!1,r=!1,o=new an,a=new nt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){let m=u.clippingPlanes,x=u.clipIntersection,g=u.clipShadows,p=s.get(u);if(!i||m===null||m.length===0||r&&!g)r?h(null):c();else{let w=r?0:n,M=w*4,y=p.clippingState||null;l.value=y,y=h(m,f,M,d);for(let b=0;b!==M;++b)y[b]=t[b];p.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,d,m){let x=u!==null?u.length:0,g=null;if(x!==0){if(g=l.value,m!==!0||g===null){let p=d+x*4,w=f.matrixWorldInverse;a.getNormalMatrix(w),(g===null||g.length<p)&&(g=new Float32Array(p));for(let M=0,y=d;M!==x;++M,y+=4)o.copy(u[M]).applyMatrix4(w,a),o.normal.toArray(g,y),g[y+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}function kx(s){let e=new WeakMap;function t(o,a){return a===ml?o.mapping=zs:a===gl&&(o.mapping=ks),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===ml||a===gl)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new vr(l.height);return c.fromEquirectangularTexture(s,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Ir=4,bf=[.125,.215,.35,.446,.526,.582],Xs=20,Uh=new Gn,Ef=new Pe,Oh=null,Fh=0,Bh=0,zh=!1,Ws=(1+Math.sqrt(5))/2,Cr=1/Ws,wf=[new E(-Ws,Cr,0),new E(Ws,Cr,0),new E(-Cr,0,Ws),new E(Cr,0,Ws),new E(0,Ws,-Cr),new E(0,Ws,Cr),new E(-1,1,-1),new E(1,1,-1),new E(-1,1,1),new E(1,1,1)],Hx=new E,Qi=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,r={}){let{size:o=256,position:a=Hx}=r;Oh=this._renderer.getRenderTarget(),Fh=this._renderer.getActiveCubeFace(),Bh=this._renderer.getActiveMipmapLevel(),zh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Af(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Oh,Fh,Bh),this._renderer.xr.enabled=zh,e.scissorTest=!1,Ql(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===zs||e.mapping===ks?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Oh=this._renderer.getRenderTarget(),Fh=this._renderer.getActiveCubeFace(),Bh=this._renderer.getActiveMipmapLevel(),zh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Jt,minFilter:Jt,generateMipmaps:!1,type:Xt,format:tn,colorSpace:fn,depthBuffer:!1},i=Tf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Tf(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Vx(r)),this._blurMaterial=Gx(r,e,t)}return i}_compileMaterial(e){let t=new Ye(this._lodPlanes[0],e);this._renderer.compile(t,Uh)}_sceneToCubeUV(e,t,n,i,r){let l=new Ft(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Ef),u.toneMapping=Ji,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null));let x=new Rt({name:"PMREM.Background",side:Wt,depthWrite:!1,depthTest:!1}),g=new Ye(new un,x),p=!1,w=e.background;w?w.isColor&&(x.color.copy(w),e.background=null,p=!0):(x.color.copy(Ef),p=!0);for(let M=0;M<6;M++){let y=M%3;y===0?(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[M],r.y,r.z)):y===1?(l.up.set(0,0,c[M]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[M],r.z)):(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[M]));let b=this._cubeSize;Ql(i,y*b,M>2?b:0,b,b),u.setRenderTarget(i),p&&u.render(g,l),u.render(e,l)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=w}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===zs||e.mapping===ks;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Af());let r=i?this._cubemapMaterial:this._equirectMaterial,o=new Ye(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;Ql(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Uh)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodPlanes.length;for(let r=1;r<i;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=wf[(i-r-1)%wf.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,i,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Ye(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Xs-1),x=r/m,g=isFinite(r)?1+Math.floor(h*x):Xs;g>Xs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Xs}`);let p=[],w=0;for(let C=0;C<Xs;++C){let D=C/x,_=Math.exp(-D*D/2);p.push(_),C===0?w+=_:C<g&&(w+=2*_)}for(let C=0;C<p.length;C++)p[C]=p[C]/w;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:M}=this;f.dTheta.value=m,f.mipInt.value=M-n;let y=this._sizeLods[i],b=3*y*(i>M-Ir?i-M+Ir:0),P=4*(this._cubeSize-y);Ql(t,b,P,3*y,2*y),l.setRenderTarget(t),l.render(u,Uh)}};function Vx(s){let e=[],t=[],n=[],i=s,r=s-Ir+1+bf.length;for(let o=0;o<r;o++){let a=Math.pow(2,i);t.push(a);let l=1/a;o>s-Ir?l=bf[o-s+Ir-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,m=6,x=3,g=2,p=1,w=new Float32Array(x*m*d),M=new Float32Array(g*m*d),y=new Float32Array(p*m*d);for(let P=0;P<d;P++){let C=P%3*2/3-1,D=P>2?0:-1,_=[C,D,0,C+2/3,D,0,C+2/3,D+1,0,C,D,0,C+2/3,D+1,0,C,D+1,0];w.set(_,x*m*P),M.set(f,g*m*P);let v=[P,P,P,P,P,P];y.set(v,p*m*P)}let b=new vt;b.setAttribute("position",new tt(w,x)),b.setAttribute("uv",new tt(M,g)),b.setAttribute("faceIndex",new tt(y,p)),e.push(b),i>Ir&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Tf(s,e,t){let n=new Lt(s,e,t);return n.texture.mapping=Bo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ql(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Gx(s,e,t){let n=new Float32Array(Xs),i=new E(0,1,0);return new ct({name:"SphericalGaussianBlur",defines:{n:Xs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Kh(),fragmentShader:`

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
    `,blending:bt,depthTest:!1,depthWrite:!1})}function Af(){return new ct({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Kh(),fragmentShader:`

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
    `,blending:bt,depthTest:!1,depthWrite:!1})}function Rf(){return new ct({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Kh(),fragmentShader:`

      precision mediump float;
      precision mediump int;

      uniform float flipEnvMap;

      varying vec3 vOutputDirection;

      uniform samplerCube envMap;

      void main() {

        gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

      }
    `,blending:bt,depthTest:!1,depthWrite:!1})}function Kh(){return`

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
  `}function Wx(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===ml||l===gl,h=l===zs||l===ks;if(c||h){let u=e.get(a),f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Qi(s)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{let d=a.image;return c&&d&&d.height>0||h&&d&&i(d)?(t===null&&(t=new Qi(s)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function i(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Xx(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&mr("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function qx(s,e,t,n){let i={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let m in f.attributes)e.remove(f.attributes[m]);f.removeEventListener("dispose",o),delete i[f.id];let d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function l(u){let f=u.attributes;for(let d in f)e.update(f[d],s.ARRAY_BUFFER)}function c(u){let f=[],d=u.index,m=u.attributes.position,x=0;if(d!==null){let w=d.array;x=d.version;for(let M=0,y=w.length;M<y;M+=3){let b=w[M+0],P=w[M+1],C=w[M+2];f.push(b,P,P,C,C,b)}}else if(m!==void 0){let w=m.array;x=m.version;for(let M=0,y=w.length/3-1;M<y;M+=3){let b=M+0,P=M+1,C=M+2;f.push(b,P,P,C,C,b)}}else return;let g=new(Ch(f)?lo:ao)(f,1);g.version=x;let p=r.get(u);p&&e.remove(p),r.set(u,g)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Yx(s,e,t){let n;function i(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){s.drawElements(n,d,r,f*o),t.update(d,n,1)}function c(f,d,m){m!==0&&(s.drawElementsInstanced(n,d,r,f*o,m),t.update(d,n,m))}function h(f,d,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,m);let g=0;for(let p=0;p<m;p++)g+=d[p];t.update(g,n,1)}function u(f,d,m,x){if(m===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<f.length;p++)c(f[p]/o,d[p],x[p]);else{g.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,x,0,m);let p=0;for(let w=0;w<m;w++)p+=d[w]*x[w];t.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function jx(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Zx(s,e,t){let n=new WeakMap,i=new lt;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let _=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",_)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],w=a.morphAttributes.color||[],M=0;d===!0&&(M=1),m===!0&&(M=2),x===!0&&(M=3);let y=a.attributes.position.count*M,b=1;y>e.maxTextureSize&&(b=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let P=new Float32Array(y*b*4*u),C=new oo(P,y,b,u);C.type=ti,C.needsUpdate=!0;let D=M*4;for(let v=0;v<u;v++){let A=g[v],N=p[v],B=w[v],z=y*b*4*v;for(let k=0;k<A.count;k++){let X=k*D;d===!0&&(i.fromBufferAttribute(A,k),P[z+X+0]=i.x,P[z+X+1]=i.y,P[z+X+2]=i.z,P[z+X+3]=0),m===!0&&(i.fromBufferAttribute(N,k),P[z+X+4]=i.x,P[z+X+5]=i.y,P[z+X+6]=i.z,P[z+X+7]=0),x===!0&&(i.fromBufferAttribute(B,k),P[z+X+8]=i.x,P[z+X+9]=i.y,P[z+X+10]=i.z,P[z+X+11]=B.itemSize===4?i.w:1)}}f={count:u,texture:C,size:new Me(y,b)},n.set(a,f),a.addEventListener("dispose",_)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];let m=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(s,"morphTargetBaseInfluence",m),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function Kx(s,e,t,n){let i=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=e.get(l,h);if(i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return u}function o(){i=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var Yf=new Qt,Cf=new Wi(1,1),jf=new oo,Zf=new Ua,Kf=new ho,If=[],Pf=[],Df=new Float32Array(16),Lf=new Float32Array(9),Nf=new Float32Array(4);function Lr(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=If[i];if(r===void 0&&(r=new Float32Array(i),If[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function nn(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function sn(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function tc(s,e){let t=Pf[e];t===void 0&&(t=new Int32Array(e),Pf[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Jx(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function $x(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;s.uniform2fv(this.addr,e),sn(t,e)}}function Qx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(nn(t,e))return;s.uniform3fv(this.addr,e),sn(t,e)}}function ey(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;s.uniform4fv(this.addr,e),sn(t,e)}}function ty(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(nn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),sn(t,e)}else{if(nn(t,n))return;Nf.set(n),s.uniformMatrix2fv(this.addr,!1,Nf),sn(t,n)}}function ny(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(nn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),sn(t,e)}else{if(nn(t,n))return;Lf.set(n),s.uniformMatrix3fv(this.addr,!1,Lf),sn(t,n)}}function iy(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(nn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),sn(t,e)}else{if(nn(t,n))return;Df.set(n),s.uniformMatrix4fv(this.addr,!1,Df),sn(t,n)}}function sy(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function ry(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;s.uniform2iv(this.addr,e),sn(t,e)}}function oy(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;s.uniform3iv(this.addr,e),sn(t,e)}}function ay(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;s.uniform4iv(this.addr,e),sn(t,e)}}function ly(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function cy(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;s.uniform2uiv(this.addr,e),sn(t,e)}}function hy(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;s.uniform3uiv(this.addr,e),sn(t,e)}}function uy(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;s.uniform4uiv(this.addr,e),sn(t,e)}}function dy(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Cf.compareFunction=Th,r=Cf):r=Yf,t.setTexture2D(e||r,i)}function fy(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Zf,i)}function py(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Kf,i)}function my(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||jf,i)}function gy(s){switch(s){case 5126:return Jx;case 35664:return $x;case 35665:return Qx;case 35666:return ey;case 35674:return ty;case 35675:return ny;case 35676:return iy;case 5124:case 35670:return sy;case 35667:case 35671:return ry;case 35668:case 35672:return oy;case 35669:case 35673:return ay;case 5125:return ly;case 36294:return cy;case 36295:return hy;case 36296:return uy;case 35678:case 36198:case 36298:case 36306:case 35682:return dy;case 35679:case 36299:case 36307:return fy;case 35680:case 36300:case 36308:case 36293:return py;case 36289:case 36303:case 36311:case 36292:return my}}function xy(s,e){s.uniform1fv(this.addr,e)}function yy(s,e){let t=Lr(e,this.size,2);s.uniform2fv(this.addr,t)}function vy(s,e){let t=Lr(e,this.size,3);s.uniform3fv(this.addr,t)}function _y(s,e){let t=Lr(e,this.size,4);s.uniform4fv(this.addr,t)}function My(s,e){let t=Lr(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Sy(s,e){let t=Lr(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function by(s,e){let t=Lr(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Ey(s,e){s.uniform1iv(this.addr,e)}function wy(s,e){s.uniform2iv(this.addr,e)}function Ty(s,e){s.uniform3iv(this.addr,e)}function Ay(s,e){s.uniform4iv(this.addr,e)}function Ry(s,e){s.uniform1uiv(this.addr,e)}function Cy(s,e){s.uniform2uiv(this.addr,e)}function Iy(s,e){s.uniform3uiv(this.addr,e)}function Py(s,e){s.uniform4uiv(this.addr,e)}function Dy(s,e,t){let n=this.cache,i=e.length,r=tc(t,i);nn(n,r)||(s.uniform1iv(this.addr,r),sn(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Yf,r[o])}function Ly(s,e,t){let n=this.cache,i=e.length,r=tc(t,i);nn(n,r)||(s.uniform1iv(this.addr,r),sn(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Zf,r[o])}function Ny(s,e,t){let n=this.cache,i=e.length,r=tc(t,i);nn(n,r)||(s.uniform1iv(this.addr,r),sn(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Kf,r[o])}function Uy(s,e,t){let n=this.cache,i=e.length,r=tc(t,i);nn(n,r)||(s.uniform1iv(this.addr,r),sn(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||jf,r[o])}function Oy(s){switch(s){case 5126:return xy;case 35664:return yy;case 35665:return vy;case 35666:return _y;case 35674:return My;case 35675:return Sy;case 35676:return by;case 5124:case 35670:return Ey;case 35667:case 35671:return wy;case 35668:case 35672:return Ty;case 35669:case 35673:return Ay;case 5125:return Ry;case 36294:return Cy;case 36295:return Iy;case 36296:return Py;case 35678:case 36198:case 36298:case 36306:case 35682:return Dy;case 35679:case 36299:case 36307:return Ly;case 35680:case 36300:case 36308:case 36293:return Ny;case 36289:case 36303:case 36311:case 36292:return Uy}}var Hh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=gy(t.type)}},Vh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Oy(t.type)}},Gh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(e,t[a.id],n)}}},kh=/(\w+)(\])?(\[|\.)?/g;function Uf(s,e){s.seq.push(e),s.map[e.id]=e}function Fy(s,e,t){let n=s.name,i=n.length;for(kh.lastIndex=0;;){let r=kh.exec(n),o=kh.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Uf(t,c===void 0?new Hh(a,s,e):new Vh(a,s,e));break}else{let u=t.map[a];u===void 0&&(u=new Gh(a),Uf(t,u)),t=u}}}var Pr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);Fy(r,o,this)}}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let o=e[i];o.id in t&&n.push(o)}return n}};function Of(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var By=37297,zy=0;function ky(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Ff=new nt;function Hy(s){at._getMatrix(Ff,at.workingColorSpace,s);let e=`mat3( ${Ff.elements.map(t=>t.toFixed(4))} )`;switch(at.getTransfer(s)){case io:return[e,"LinearTransferOETF"];case wt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Bf(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+ky(s.getShaderSource(e),a)}else return r}function Vy(s,e){let t=Hy(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Gy(s,e){let t;switch(e){case cl:t="Linear";break;case hl:t="Reinhard";break;case ul:t="Cineon";break;case Tr:t="ACESFilmic";break;case fl:t="AgX";break;case pl:t="Neutral";break;case dl:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var ec=new E;function Wy(){at.getLuminanceCoefficients(ec);let s=ec.x.toFixed(4),e=ec.y.toFixed(4),t=ec.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Xy(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qo).join(`
`)}function qy(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Yy(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function qo(s){return s!==""}function zf(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function kf(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var jy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wh(s){return s.replace(jy,Ky)}var Zy=new Map;function Ky(s,e){let t=rt[e];if(t===void 0){let n=Zy.get(e);if(n!==void 0)t=rt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Wh(t)}var Jy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hf(s){return s.replace(Jy,$y)}function $y(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Vf(s){let e=`precision ${s.precision} float;
  precision ${s.precision} int;
  precision ${s.precision} sampler2D;
  precision ${s.precision} samplerCube;
  precision ${s.precision} sampler3D;
  precision ${s.precision} sampler2DArray;
  precision ${s.precision} sampler2DShadow;
  precision ${s.precision} samplerCubeShadow;
  precision ${s.precision} sampler2DArrayShadow;
  precision ${s.precision} isampler2D;
  precision ${s.precision} isampler3D;
  precision ${s.precision} isamplerCube;
  precision ${s.precision} isampler2DArray;
  precision ${s.precision} usampler2D;
  precision ${s.precision} usampler3D;
  precision ${s.precision} usamplerCube;
  precision ${s.precision} usampler2DArray;
  `;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Qy(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===uh?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===el?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Ai&&(e="SHADOWMAP_TYPE_VSM"),e}function ev(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case zs:case ks:e="ENVMAP_TYPE_CUBE";break;case Bo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function tv(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case ks:e="ENVMAP_MODE_REFRACTION";break}return e}function nv(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case ll:e="ENVMAP_BLENDING_MULTIPLY";break;case sf:e="ENVMAP_BLENDING_MIX";break;case rf:e="ENVMAP_BLENDING_ADD";break}return e}function iv(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function sv(s,e,t,n){let i=s.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=Qy(t),c=ev(t),h=tv(t),u=nv(t),f=iv(t),d=Xy(t),m=qy(r),x=i.createProgram(),g,p,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(qo).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(qo).join(`
`),p.length>0&&(p+=`
`)):(g=[Vf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qo).join(`
`),p=[Vf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ji?"#define TONE_MAPPING":"",t.toneMapping!==Ji?rt.tonemapping_pars_fragment:"",t.toneMapping!==Ji?Gy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",rt.colorspace_pars_fragment,Vy("linearToOutputTexel",t.outputColorSpace),Wy(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(qo).join(`
`)),o=Wh(o),o=zf(o,t),o=kf(o,t),a=Wh(a),a=zf(a,t),a=kf(a,t),o=Hf(o),a=Hf(a),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===Ah?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ah?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let M=w+g+o,y=w+p+a,b=Of(i,i.VERTEX_SHADER,M),P=Of(i,i.FRAGMENT_SHADER,y);i.attachShader(x,b),i.attachShader(x,P),t.index0AttributeName!==void 0?i.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function C(A){if(s.debug.checkShaderErrors){let N=i.getProgramInfoLog(x)||"",B=i.getShaderInfoLog(b)||"",z=i.getShaderInfoLog(P)||"",k=N.trim(),X=B.trim(),te=z.trim(),Y=!0,ie=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(Y=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,b,P);else{let ae=Bf(i,b,"vertex"),fe=Bf(i,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+k+`
`+ae+`
`+fe)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(X===""||te==="")&&(ie=!1);ie&&(A.diagnostics={runnable:Y,programLog:k,vertexShader:{log:X,prefix:g},fragmentShader:{log:te,prefix:p}})}i.deleteShader(b),i.deleteShader(P),D=new Pr(i,x),_=Yy(i,x)}let D;this.getUniforms=function(){return D===void 0&&C(this),D};let _;this.getAttributes=function(){return _===void 0&&C(this),_};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=i.getProgramParameter(x,By)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=zy++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=b,this.fragmentShader=P,this}var rv=0,Xh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new qh(e),t.set(e,n)),n}},qh=class{constructor(e){this.id=rv++,this.code=e,this.usedTimes=0}};function ov(s,e,t,n,i,r,o){let a=new xr,l=new Xh,c=new Set,h=[],u=i.logarithmicDepthBuffer,f=i.vertexTextures,d=i.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(_){return c.add(_),_===0?"uv":`uv${_}`}function g(_,v,A,N,B){let z=N.fog,k=B.geometry,X=_.isMeshStandardMaterial?N.environment:null,te=(_.isMeshStandardMaterial?t:e).get(_.envMap||X),Y=te&&te.mapping===Bo?te.image.height:null,ie=m[_.type];_.precision!==null&&(d=i.getMaxPrecision(_.precision),d!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",d,"instead."));let ae=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,fe=ae!==void 0?ae.length:0,Ue=0;k.morphAttributes.position!==void 0&&(Ue=1),k.morphAttributes.normal!==void 0&&(Ue=2),k.morphAttributes.color!==void 0&&(Ue=3);let Ce,ze,Ge,se;if(ie){let ot=Tn[ie];Ce=ot.vertexShader,ze=ot.fragmentShader}else Ce=_.vertexShader,ze=_.fragmentShader,l.update(_),Ge=l.getVertexShaderID(_),se=l.getFragmentShaderID(_);let le=s.getRenderTarget(),_e=s.state.buffers.depth.getReversed(),be=B.isInstancedMesh===!0,we=B.isBatchedMesh===!0,Ze=!!_.map,et=!!_.matcap,O=!!te,Ke=!!_.aoMap,ke=!!_.lightMap,Oe=!!_.bumpMap,Te=!!_.normalMap,q=!!_.displacementMap,W=!!_.emissiveMap,ye=!!_.metalnessMap,Ne=!!_.roughnessMap,Be=_.anisotropy>0,R=_.clearcoat>0,S=_.dispersion>0,j=_.iridescence>0,re=_.sheen>0,pe=_.transmission>0,Q=Be&&!!_.anisotropyMap,V=R&&!!_.clearcoatMap,H=R&&!!_.clearcoatNormalMap,ne=R&&!!_.clearcoatRoughnessMap,ue=j&&!!_.iridescenceMap,$=j&&!!_.iridescenceThicknessMap,de=re&&!!_.sheenColorMap,Ee=re&&!!_.sheenRoughnessMap,Se=!!_.specularMap,ge=!!_.specularColorMap,U=!!_.specularIntensityMap,L=pe&&!!_.transmissionMap,K=pe&&!!_.thicknessMap,he=!!_.gradientMap,Ae=!!_.alphaMap,ve=_.alphaTest>0,me=!!_.alphaHash,De=!!_.extensions,Xe=Ji;_.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(Xe=s.toneMapping);let _t={shaderID:ie,shaderType:_.type,shaderName:_.name,vertexShader:Ce,fragmentShader:ze,defines:_.defines,customVertexShaderID:Ge,customFragmentShaderID:se,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:d,batching:we,batchingColor:we&&B._colorsTexture!==null,instancing:be,instancingColor:be&&B.instanceColor!==null,instancingMorph:be&&B.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:le===null?s.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:fn,alphaToCoverage:!!_.alphaToCoverage,map:Ze,matcap:et,envMap:O,envMapMode:O&&te.mapping,envMapCubeUVHeight:Y,aoMap:Ke,lightMap:ke,bumpMap:Oe,normalMap:Te,displacementMap:f&&q,emissiveMap:W,normalMapObjectSpace:Te&&_.normalMapType===hf,normalMapTangentSpace:Te&&_.normalMapType===Wo,metalnessMap:ye,roughnessMap:Ne,anisotropy:Be,anisotropyMap:Q,clearcoat:R,clearcoatMap:V,clearcoatNormalMap:H,clearcoatRoughnessMap:ne,dispersion:S,iridescence:j,iridescenceMap:ue,iridescenceThicknessMap:$,sheen:re,sheenColorMap:de,sheenRoughnessMap:Ee,specularMap:Se,specularColorMap:ge,specularIntensityMap:U,transmission:pe,transmissionMap:L,thicknessMap:K,gradientMap:he,opaque:_.transparent===!1&&_.blending===di&&_.alphaToCoverage===!1,alphaMap:Ae,alphaTest:ve,alphaHash:me,combine:_.combine,mapUv:Ze&&x(_.map.channel),aoMapUv:Ke&&x(_.aoMap.channel),lightMapUv:ke&&x(_.lightMap.channel),bumpMapUv:Oe&&x(_.bumpMap.channel),normalMapUv:Te&&x(_.normalMap.channel),displacementMapUv:q&&x(_.displacementMap.channel),emissiveMapUv:W&&x(_.emissiveMap.channel),metalnessMapUv:ye&&x(_.metalnessMap.channel),roughnessMapUv:Ne&&x(_.roughnessMap.channel),anisotropyMapUv:Q&&x(_.anisotropyMap.channel),clearcoatMapUv:V&&x(_.clearcoatMap.channel),clearcoatNormalMapUv:H&&x(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ne&&x(_.clearcoatRoughnessMap.channel),iridescenceMapUv:ue&&x(_.iridescenceMap.channel),iridescenceThicknessMapUv:$&&x(_.iridescenceThicknessMap.channel),sheenColorMapUv:de&&x(_.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&x(_.sheenRoughnessMap.channel),specularMapUv:Se&&x(_.specularMap.channel),specularColorMapUv:ge&&x(_.specularColorMap.channel),specularIntensityMapUv:U&&x(_.specularIntensityMap.channel),transmissionMapUv:L&&x(_.transmissionMap.channel),thicknessMapUv:K&&x(_.thicknessMap.channel),alphaMapUv:Ae&&x(_.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(Te||Be),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!k.attributes.uv&&(Ze||Ae),fog:!!z,useFog:_.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:_.flatShading===!0&&_.wireframe===!1,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:_e,skinning:B.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:fe,morphTextureStride:Ue,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:s.shadowMap.enabled&&A.length>0,shadowMapType:s.shadowMap.type,toneMapping:Xe,decodeVideoTexture:Ze&&_.map.isVideoTexture===!0&&at.getTransfer(_.map.colorSpace)===wt,decodeVideoTextureEmissive:W&&_.emissiveMap.isVideoTexture===!0&&at.getTransfer(_.emissiveMap.colorSpace)===wt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===xt,flipSided:_.side===Wt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:De&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(De&&_.extensions.multiDraw===!0||we)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return _t.vertexUv1s=c.has(1),_t.vertexUv2s=c.has(2),_t.vertexUv3s=c.has(3),c.clear(),_t}function p(_){let v=[];if(_.shaderID?v.push(_.shaderID):(v.push(_.customVertexShaderID),v.push(_.customFragmentShaderID)),_.defines!==void 0)for(let A in _.defines)v.push(A),v.push(_.defines[A]);return _.isRawShaderMaterial===!1&&(w(v,_),M(v,_),v.push(s.outputColorSpace)),v.push(_.customProgramCacheKey),v.join()}function w(_,v){_.push(v.precision),_.push(v.outputColorSpace),_.push(v.envMapMode),_.push(v.envMapCubeUVHeight),_.push(v.mapUv),_.push(v.alphaMapUv),_.push(v.lightMapUv),_.push(v.aoMapUv),_.push(v.bumpMapUv),_.push(v.normalMapUv),_.push(v.displacementMapUv),_.push(v.emissiveMapUv),_.push(v.metalnessMapUv),_.push(v.roughnessMapUv),_.push(v.anisotropyMapUv),_.push(v.clearcoatMapUv),_.push(v.clearcoatNormalMapUv),_.push(v.clearcoatRoughnessMapUv),_.push(v.iridescenceMapUv),_.push(v.iridescenceThicknessMapUv),_.push(v.sheenColorMapUv),_.push(v.sheenRoughnessMapUv),_.push(v.specularMapUv),_.push(v.specularColorMapUv),_.push(v.specularIntensityMapUv),_.push(v.transmissionMapUv),_.push(v.thicknessMapUv),_.push(v.combine),_.push(v.fogExp2),_.push(v.sizeAttenuation),_.push(v.morphTargetsCount),_.push(v.morphAttributeCount),_.push(v.numDirLights),_.push(v.numPointLights),_.push(v.numSpotLights),_.push(v.numSpotLightMaps),_.push(v.numHemiLights),_.push(v.numRectAreaLights),_.push(v.numDirLightShadows),_.push(v.numPointLightShadows),_.push(v.numSpotLightShadows),_.push(v.numSpotLightShadowsWithMaps),_.push(v.numLightProbes),_.push(v.shadowMapType),_.push(v.toneMapping),_.push(v.numClippingPlanes),_.push(v.numClipIntersection),_.push(v.depthPacking)}function M(_,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),v.gradientMap&&a.enable(22),_.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reversedDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),_.push(a.mask)}function y(_){let v=m[_.type],A;if(v){let N=Tn[v];A=Ut.clone(N.uniforms)}else A=_.uniforms;return A}function b(_,v){let A;for(let N=0,B=h.length;N<B;N++){let z=h[N];if(z.cacheKey===v){A=z,++A.usedTimes;break}}return A===void 0&&(A=new sv(s,v,_,r),h.push(A)),A}function P(_){if(--_.usedTimes===0){let v=h.indexOf(_);h[v]=h[h.length-1],h.pop(),_.destroy()}}function C(_){l.remove(_)}function D(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:y,acquireProgram:b,releaseProgram:P,releaseShaderCache:C,programs:h,dispose:D}}function av(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function lv(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Gf(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Wf(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(u,f,d,m,x,g){let p=s[e];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:m,renderOrder:u.renderOrder,z:x,group:g},s[e]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=x,p.group=g),e++,p}function a(u,f,d,m,x,g){let p=o(u,f,d,m,x,g);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):t.push(p)}function l(u,f,d,m,x,g){let p=o(u,f,d,m,x,g);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):t.unshift(p)}function c(u,f){t.length>1&&t.sort(u||lv),n.length>1&&n.sort(f||Gf),i.length>1&&i.sort(f||Gf)}function h(){for(let u=e,f=s.length;u<f;u++){let d=s[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:h,sort:c}}function cv(){let s=new WeakMap;function e(n,i){let r=s.get(n),o;return r===void 0?(o=new Wf,s.set(n,[o])):i>=r.length?(o=new Wf,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function hv(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new E,color:new Pe};break;case"SpotLight":t={position:new E,direction:new E,color:new Pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new E,color:new Pe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new E,skyColor:new Pe,groundColor:new Pe};break;case"RectAreaLight":t={color:new Pe,position:new E,halfWidth:new E,halfHeight:new E};break}return s[e.id]=t,t}}}function uv(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var dv=0;function fv(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function pv(s){let e=new hv,t=uv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new E);let i=new E,r=new Ve,o=new Ve;function a(c){let h=0,u=0,f=0;for(let _=0;_<9;_++)n.probe[_].set(0,0,0);let d=0,m=0,x=0,g=0,p=0,w=0,M=0,y=0,b=0,P=0,C=0;c.sort(fv);for(let _=0,v=c.length;_<v;_++){let A=c[_],N=A.color,B=A.intensity,z=A.distance,k=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)h+=N.r*B,u+=N.g*B,f+=N.b*B;else if(A.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(A.sh.coefficients[X],B);C++}else if(A.isDirectionalLight){let X=e.get(A);if(X.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let te=A.shadow,Y=t.get(A);Y.shadowIntensity=te.intensity,Y.shadowBias=te.bias,Y.shadowNormalBias=te.normalBias,Y.shadowRadius=te.radius,Y.shadowMapSize=te.mapSize,n.directionalShadow[d]=Y,n.directionalShadowMap[d]=k,n.directionalShadowMatrix[d]=A.shadow.matrix,w++}n.directional[d]=X,d++}else if(A.isSpotLight){let X=e.get(A);X.position.setFromMatrixPosition(A.matrixWorld),X.color.copy(N).multiplyScalar(B),X.distance=z,X.coneCos=Math.cos(A.angle),X.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),X.decay=A.decay,n.spot[x]=X;let te=A.shadow;if(A.map&&(n.spotLightMap[b]=A.map,b++,te.updateMatrices(A),A.castShadow&&P++),n.spotLightMatrix[x]=te.matrix,A.castShadow){let Y=t.get(A);Y.shadowIntensity=te.intensity,Y.shadowBias=te.bias,Y.shadowNormalBias=te.normalBias,Y.shadowRadius=te.radius,Y.shadowMapSize=te.mapSize,n.spotShadow[x]=Y,n.spotShadowMap[x]=k,y++}x++}else if(A.isRectAreaLight){let X=e.get(A);X.color.copy(N).multiplyScalar(B),X.halfWidth.set(A.width*.5,0,0),X.halfHeight.set(0,A.height*.5,0),n.rectArea[g]=X,g++}else if(A.isPointLight){let X=e.get(A);if(X.color.copy(A.color).multiplyScalar(A.intensity),X.distance=A.distance,X.decay=A.decay,A.castShadow){let te=A.shadow,Y=t.get(A);Y.shadowIntensity=te.intensity,Y.shadowBias=te.bias,Y.shadowNormalBias=te.normalBias,Y.shadowRadius=te.radius,Y.shadowMapSize=te.mapSize,Y.shadowCameraNear=te.camera.near,Y.shadowCameraFar=te.camera.far,n.pointShadow[m]=Y,n.pointShadowMap[m]=k,n.pointShadowMatrix[m]=A.shadow.matrix,M++}n.point[m]=X,m++}else if(A.isHemisphereLight){let X=e.get(A);X.skyColor.copy(A.color).multiplyScalar(B),X.groundColor.copy(A.groundColor).multiplyScalar(B),n.hemi[p]=X,p++}}g>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Le.LTC_FLOAT_1,n.rectAreaLTC2=Le.LTC_FLOAT_2):(n.rectAreaLTC1=Le.LTC_HALF_1,n.rectAreaLTC2=Le.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let D=n.hash;(D.directionalLength!==d||D.pointLength!==m||D.spotLength!==x||D.rectAreaLength!==g||D.hemiLength!==p||D.numDirectionalShadows!==w||D.numPointShadows!==M||D.numSpotShadows!==y||D.numSpotMaps!==b||D.numLightProbes!==C)&&(n.directional.length=d,n.spot.length=x,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=y+b-P,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=C,D.directionalLength=d,D.pointLength=m,D.spotLength=x,D.rectAreaLength=g,D.hemiLength=p,D.numDirectionalShadows=w,D.numPointShadows=M,D.numSpotShadows=y,D.numSpotMaps=b,D.numLightProbes=C,n.version=dv++)}function l(c,h){let u=0,f=0,d=0,m=0,x=0,g=h.matrixWorldInverse;for(let p=0,w=c.length;p<w;p++){let M=c[p];if(M.isDirectionalLight){let y=n.directional[u];y.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(g),u++}else if(M.isSpotLight){let y=n.spot[d];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(g),d++}else if(M.isRectAreaLight){let y=n.rectArea[m];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(g),o.identity(),r.copy(M.matrixWorld),r.premultiply(g),o.extractRotation(r),y.halfWidth.set(M.width*.5,0,0),y.halfHeight.set(0,M.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),m++}else if(M.isPointLight){let y=n.point[f];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(g),f++}else if(M.isHemisphereLight){let y=n.hemi[x];y.direction.setFromMatrixPosition(M.matrixWorld),y.direction.transformDirection(g),x++}}}return{setup:a,setupView:l,state:n}}function Xf(s){let e=new pv(s),t=[],n=[];function i(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function mv(s){let e=new WeakMap;function t(i,r=0){let o=e.get(i),a;return o===void 0?(a=new Xf(s),e.set(i,[a])):r>=o.length?(a=new Xf(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var gv=`void main() {
  gl_Position = vec4( position, 1.0 );
}`,xv=`uniform sampler2D shadow_pass;
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
}`;function yv(s,e,t){let n=new Sr,i=new Me,r=new Me,o=new lt,a=new Xa({depthPacking:cf}),l=new qa,c={},h=t.maxTextureSize,u={[Vn]:Wt,[Wt]:Vn,[xt]:xt},f=new ct({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Me},radius:{value:4}},vertexShader:gv,fragmentShader:xv}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let m=new vt;m.setAttribute("position",new tt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Ye(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=uh;let p=this.type;this.render=function(P,C,D){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||P.length===0)return;let _=s.getRenderTarget(),v=s.getActiveCubeFace(),A=s.getActiveMipmapLevel(),N=s.state;N.setBlending(bt),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let B=p!==Ai&&this.type===Ai,z=p===Ai&&this.type!==Ai;for(let k=0,X=P.length;k<X;k++){let te=P[k],Y=te.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;i.copy(Y.mapSize);let ie=Y.getFrameExtents();if(i.multiply(ie),r.copy(Y.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/ie.x),i.x=r.x*ie.x,Y.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/ie.y),i.y=r.y*ie.y,Y.mapSize.y=r.y)),Y.map===null||B===!0||z===!0){let fe=this.type!==Ai?{minFilter:gt,magFilter:gt}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Lt(i.x,i.y,fe),Y.map.texture.name=te.name+".shadowMap",Y.camera.updateProjectionMatrix()}s.setRenderTarget(Y.map),s.clear();let ae=Y.getViewportCount();for(let fe=0;fe<ae;fe++){let Ue=Y.getViewport(fe);o.set(r.x*Ue.x,r.y*Ue.y,r.x*Ue.z,r.y*Ue.w),N.viewport(o),Y.updateMatrices(te,fe),n=Y.getFrustum(),y(C,D,Y.camera,te,this.type)}Y.isPointLightShadow!==!0&&this.type===Ai&&w(Y,D),Y.needsUpdate=!1}p=this.type,g.needsUpdate=!1,s.setRenderTarget(_,v,A)};function w(P,C){let D=e.update(x);f.defines.VSM_SAMPLES!==P.blurSamples&&(f.defines.VSM_SAMPLES=P.blurSamples,d.defines.VSM_SAMPLES=P.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Lt(i.x,i.y)),f.uniforms.shadow_pass.value=P.map.texture,f.uniforms.resolution.value=P.mapSize,f.uniforms.radius.value=P.radius,s.setRenderTarget(P.mapPass),s.clear(),s.renderBufferDirect(C,null,D,f,x,null),d.uniforms.shadow_pass.value=P.mapPass.texture,d.uniforms.resolution.value=P.mapSize,d.uniforms.radius.value=P.radius,s.setRenderTarget(P.map),s.clear(),s.renderBufferDirect(C,null,D,d,x,null)}function M(P,C,D,_){let v=null,A=D.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(A!==void 0)v=A;else if(v=D.isPointLight===!0?l:a,s.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let N=v.uuid,B=C.uuid,z=c[N];z===void 0&&(z={},c[N]=z);let k=z[B];k===void 0&&(k=v.clone(),z[B]=k,C.addEventListener("dispose",b)),v=k}if(v.visible=C.visible,v.wireframe=C.wireframe,_===Ai?v.side=C.shadowSide!==null?C.shadowSide:C.side:v.side=C.shadowSide!==null?C.shadowSide:u[C.side],v.alphaMap=C.alphaMap,v.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,v.map=C.map,v.clipShadows=C.clipShadows,v.clippingPlanes=C.clippingPlanes,v.clipIntersection=C.clipIntersection,v.displacementMap=C.displacementMap,v.displacementScale=C.displacementScale,v.displacementBias=C.displacementBias,v.wireframeLinewidth=C.wireframeLinewidth,v.linewidth=C.linewidth,D.isPointLight===!0&&v.isMeshDistanceMaterial===!0){let N=s.properties.get(v);N.light=D}return v}function y(P,C,D,_,v){if(P.visible===!1)return;if(P.layers.test(C.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&v===Ai)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,P.matrixWorld);let B=e.update(P),z=P.material;if(Array.isArray(z)){let k=B.groups;for(let X=0,te=k.length;X<te;X++){let Y=k[X],ie=z[Y.materialIndex];if(ie&&ie.visible){let ae=M(P,ie,_,v);P.onBeforeShadow(s,P,C,D,B,ae,Y),s.renderBufferDirect(D,null,B,ae,P,Y),P.onAfterShadow(s,P,C,D,B,ae,Y)}}}else if(z.visible){let k=M(P,z,_,v);P.onBeforeShadow(s,P,C,D,B,k,null),s.renderBufferDirect(D,null,B,k,P,null),P.onAfterShadow(s,P,C,D,B,k,null)}}let N=P.children;for(let B=0,z=N.length;B<z;B++)y(N[B],C,D,_,v)}function b(P){P.target.removeEventListener("dispose",b);for(let D in c){let _=c[D],v=P.target.uuid;v in _&&(_[v].dispose(),delete _[v])}}}var vv={[tl]:nl,[il]:ol,[sl]:al,[Cs]:rl,[nl]:tl,[ol]:il,[al]:sl,[rl]:Cs};function _v(s,e){function t(){let L=!1,K=new lt,he=null,Ae=new lt(0,0,0,0);return{setMask:function(ve){he!==ve&&!L&&(s.colorMask(ve,ve,ve,ve),he=ve)},setLocked:function(ve){L=ve},setClear:function(ve,me,De,Xe,_t){_t===!0&&(ve*=Xe,me*=Xe,De*=Xe),K.set(ve,me,De,Xe),Ae.equals(K)===!1&&(s.clearColor(ve,me,De,Xe),Ae.copy(K))},reset:function(){L=!1,he=null,Ae.set(-1,0,0,0)}}}function n(){let L=!1,K=!1,he=null,Ae=null,ve=null;return{setReversed:function(me){if(K!==me){let De=e.get("EXT_clip_control");me?De.clipControlEXT(De.LOWER_LEFT_EXT,De.ZERO_TO_ONE_EXT):De.clipControlEXT(De.LOWER_LEFT_EXT,De.NEGATIVE_ONE_TO_ONE_EXT),K=me;let Xe=ve;ve=null,this.setClear(Xe)}},getReversed:function(){return K},setTest:function(me){me?le(s.DEPTH_TEST):_e(s.DEPTH_TEST)},setMask:function(me){he!==me&&!L&&(s.depthMask(me),he=me)},setFunc:function(me){if(K&&(me=vv[me]),Ae!==me){switch(me){case tl:s.depthFunc(s.NEVER);break;case nl:s.depthFunc(s.ALWAYS);break;case il:s.depthFunc(s.LESS);break;case Cs:s.depthFunc(s.LEQUAL);break;case sl:s.depthFunc(s.EQUAL);break;case rl:s.depthFunc(s.GEQUAL);break;case ol:s.depthFunc(s.GREATER);break;case al:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ae=me}},setLocked:function(me){L=me},setClear:function(me){ve!==me&&(K&&(me=1-me),s.clearDepth(me),ve=me)},reset:function(){L=!1,he=null,Ae=null,ve=null,K=!1}}}function i(){let L=!1,K=null,he=null,Ae=null,ve=null,me=null,De=null,Xe=null,_t=null;return{setTest:function(ot){L||(ot?le(s.STENCIL_TEST):_e(s.STENCIL_TEST))},setMask:function(ot){K!==ot&&!L&&(s.stencilMask(ot),K=ot)},setFunc:function(ot,At,qt){(he!==ot||Ae!==At||ve!==qt)&&(s.stencilFunc(ot,At,qt),he=ot,Ae=At,ve=qt)},setOp:function(ot,At,qt){(me!==ot||De!==At||Xe!==qt)&&(s.stencilOp(ot,At,qt),me=ot,De=At,Xe=qt)},setLocked:function(ot){L=ot},setClear:function(ot){_t!==ot&&(s.clearStencil(ot),_t=ot)},reset:function(){L=!1,K=null,he=null,Ae=null,ve=null,me=null,De=null,Xe=null,_t=null}}}let r=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap,h={},u={},f=new WeakMap,d=[],m=null,x=!1,g=null,p=null,w=null,M=null,y=null,b=null,P=null,C=new Pe(0,0,0),D=0,_=!1,v=null,A=null,N=null,B=null,z=null,k=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,te=0,Y=s.getParameter(s.VERSION);Y.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(Y)[1]),X=te>=1):Y.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),X=te>=2);let ie=null,ae={},fe=s.getParameter(s.SCISSOR_BOX),Ue=s.getParameter(s.VIEWPORT),Ce=new lt().fromArray(fe),ze=new lt().fromArray(Ue);function Ge(L,K,he,Ae){let ve=new Uint8Array(4),me=s.createTexture();s.bindTexture(L,me),s.texParameteri(L,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(L,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let De=0;De<he;De++)L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY?s.texImage3D(K,0,s.RGBA,1,1,Ae,0,s.RGBA,s.UNSIGNED_BYTE,ve):s.texImage2D(K+De,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ve);return me}let se={};se[s.TEXTURE_2D]=Ge(s.TEXTURE_2D,s.TEXTURE_2D,1),se[s.TEXTURE_CUBE_MAP]=Ge(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),se[s.TEXTURE_2D_ARRAY]=Ge(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),se[s.TEXTURE_3D]=Ge(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),le(s.DEPTH_TEST),o.setFunc(Cs),Oe(!1),Te(hh),le(s.CULL_FACE),Ke(bt);function le(L){h[L]!==!0&&(s.enable(L),h[L]=!0)}function _e(L){h[L]!==!1&&(s.disable(L),h[L]=!1)}function be(L,K){return u[L]!==K?(s.bindFramebuffer(L,K),u[L]=K,L===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=K),L===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=K),!0):!1}function we(L,K){let he=d,Ae=!1;if(L){he=f.get(K),he===void 0&&(he=[],f.set(K,he));let ve=L.textures;if(he.length!==ve.length||he[0]!==s.COLOR_ATTACHMENT0){for(let me=0,De=ve.length;me<De;me++)he[me]=s.COLOR_ATTACHMENT0+me;he.length=ve.length,Ae=!0}}else he[0]!==s.BACK&&(he[0]=s.BACK,Ae=!0);Ae&&s.drawBuffers(he)}function Ze(L){return m!==L?(s.useProgram(L),m=L,!0):!1}let et={[ln]:s.FUNC_ADD,[Gd]:s.FUNC_SUBTRACT,[Wd]:s.FUNC_REVERSE_SUBTRACT};et[Xd]=s.MIN,et[qd]=s.MAX;let O={[Bs]:s.ZERO,[Yd]:s.ONE,[jd]:s.SRC_COLOR,[zi]:s.SRC_ALPHA,[$d]:s.SRC_ALPHA_SATURATE,[Fo]:s.DST_COLOR,[Oo]:s.DST_ALPHA,[Zd]:s.ONE_MINUS_SRC_COLOR,[ki]:s.ONE_MINUS_SRC_ALPHA,[Jd]:s.ONE_MINUS_DST_COLOR,[Kd]:s.ONE_MINUS_DST_ALPHA,[Qd]:s.CONSTANT_COLOR,[ef]:s.ONE_MINUS_CONSTANT_COLOR,[tf]:s.CONSTANT_ALPHA,[nf]:s.ONE_MINUS_CONSTANT_ALPHA};function Ke(L,K,he,Ae,ve,me,De,Xe,_t,ot){if(L===bt){x===!0&&(_e(s.BLEND),x=!1);return}if(x===!1&&(le(s.BLEND),x=!0),L!==wr){if(L!==g||ot!==_){if((p!==ln||y!==ln)&&(s.blendEquation(s.FUNC_ADD),p=ln,y=ln),ot)switch(L){case di:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Fs:s.blendFunc(s.ONE,s.ONE);break;case dh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case fh:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case di:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Fs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case dh:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case fh:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}w=null,M=null,b=null,P=null,C.set(0,0,0),D=0,g=L,_=ot}return}ve=ve||K,me=me||he,De=De||Ae,(K!==p||ve!==y)&&(s.blendEquationSeparate(et[K],et[ve]),p=K,y=ve),(he!==w||Ae!==M||me!==b||De!==P)&&(s.blendFuncSeparate(O[he],O[Ae],O[me],O[De]),w=he,M=Ae,b=me,P=De),(Xe.equals(C)===!1||_t!==D)&&(s.blendColor(Xe.r,Xe.g,Xe.b,_t),C.copy(Xe),D=_t),g=L,_=!1}function ke(L,K){L.side===xt?_e(s.CULL_FACE):le(s.CULL_FACE);let he=L.side===Wt;K&&(he=!he),Oe(he),L.blending===di&&L.transparent===!1?Ke(bt):Ke(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),r.setMask(L.colorWrite);let Ae=L.stencilWrite;a.setTest(Ae),Ae&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),W(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?le(s.SAMPLE_ALPHA_TO_COVERAGE):_e(s.SAMPLE_ALPHA_TO_COVERAGE)}function Oe(L){v!==L&&(L?s.frontFace(s.CW):s.frontFace(s.CCW),v=L)}function Te(L){L!==Hd?(le(s.CULL_FACE),L!==A&&(L===hh?s.cullFace(s.BACK):L===Vd?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):_e(s.CULL_FACE),A=L}function q(L){L!==N&&(X&&s.lineWidth(L),N=L)}function W(L,K,he){L?(le(s.POLYGON_OFFSET_FILL),(B!==K||z!==he)&&(s.polygonOffset(K,he),B=K,z=he)):_e(s.POLYGON_OFFSET_FILL)}function ye(L){L?le(s.SCISSOR_TEST):_e(s.SCISSOR_TEST)}function Ne(L){L===void 0&&(L=s.TEXTURE0+k-1),ie!==L&&(s.activeTexture(L),ie=L)}function Be(L,K,he){he===void 0&&(ie===null?he=s.TEXTURE0+k-1:he=ie);let Ae=ae[he];Ae===void 0&&(Ae={type:void 0,texture:void 0},ae[he]=Ae),(Ae.type!==L||Ae.texture!==K)&&(ie!==he&&(s.activeTexture(he),ie=he),s.bindTexture(L,K||se[L]),Ae.type=L,Ae.texture=K)}function R(){let L=ae[ie];L!==void 0&&L.type!==void 0&&(s.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function S(){try{s.compressedTexImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function j(){try{s.compressedTexImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function re(){try{s.texSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function pe(){try{s.texSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Q(){try{s.compressedTexSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function V(){try{s.compressedTexSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function H(){try{s.texStorage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ne(){try{s.texStorage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ue(){try{s.texImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function $(){try{s.texImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function de(L){Ce.equals(L)===!1&&(s.scissor(L.x,L.y,L.z,L.w),Ce.copy(L))}function Ee(L){ze.equals(L)===!1&&(s.viewport(L.x,L.y,L.z,L.w),ze.copy(L))}function Se(L,K){let he=c.get(K);he===void 0&&(he=new WeakMap,c.set(K,he));let Ae=he.get(L);Ae===void 0&&(Ae=s.getUniformBlockIndex(K,L.name),he.set(L,Ae))}function ge(L,K){let Ae=c.get(K).get(L);l.get(K)!==Ae&&(s.uniformBlockBinding(K,Ae,L.__bindingPointIndex),l.set(K,Ae))}function U(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},ie=null,ae={},u={},f=new WeakMap,d=[],m=null,x=!1,g=null,p=null,w=null,M=null,y=null,b=null,P=null,C=new Pe(0,0,0),D=0,_=!1,v=null,A=null,N=null,B=null,z=null,Ce.set(0,0,s.canvas.width,s.canvas.height),ze.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:le,disable:_e,bindFramebuffer:be,drawBuffers:we,useProgram:Ze,setBlending:Ke,setMaterial:ke,setFlipSided:Oe,setCullFace:Te,setLineWidth:q,setPolygonOffset:W,setScissorTest:ye,activeTexture:Ne,bindTexture:Be,unbindTexture:R,compressedTexImage2D:S,compressedTexImage3D:j,texImage2D:ue,texImage3D:$,updateUBOMapping:Se,uniformBlockBinding:ge,texStorage2D:H,texStorage3D:ne,texSubImage2D:re,texSubImage3D:pe,compressedTexSubImage2D:Q,compressedTexSubImage3D:V,scissor:de,viewport:Ee,reset:U}}function Mv(s,e,t,n,i,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Me,h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(R,S){return d?new OffscreenCanvas(R,S):pr("canvas")}function x(R,S,j){let re=1,pe=Be(R);if((pe.width>j||pe.height>j)&&(re=j/Math.max(pe.width,pe.height)),re<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let Q=Math.floor(re*pe.width),V=Math.floor(re*pe.height);u===void 0&&(u=m(Q,V));let H=S?m(Q,V):u;return H.width=Q,H.height=V,H.getContext("2d").drawImage(R,0,0,Q,V),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+pe.width+"x"+pe.height+") to ("+Q+"x"+V+")."),H}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+pe.width+"x"+pe.height+")."),R;return R}function g(R){return R.generateMipmaps}function p(R){s.generateMipmap(R)}function w(R){return R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?s.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function M(R,S,j,re,pe=!1){if(R!==null){if(s[R]!==void 0)return s[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Q=S;if(S===s.RED&&(j===s.FLOAT&&(Q=s.R32F),j===s.HALF_FLOAT&&(Q=s.R16F),j===s.UNSIGNED_BYTE&&(Q=s.R8)),S===s.RED_INTEGER&&(j===s.UNSIGNED_BYTE&&(Q=s.R8UI),j===s.UNSIGNED_SHORT&&(Q=s.R16UI),j===s.UNSIGNED_INT&&(Q=s.R32UI),j===s.BYTE&&(Q=s.R8I),j===s.SHORT&&(Q=s.R16I),j===s.INT&&(Q=s.R32I)),S===s.RG&&(j===s.FLOAT&&(Q=s.RG32F),j===s.HALF_FLOAT&&(Q=s.RG16F),j===s.UNSIGNED_BYTE&&(Q=s.RG8)),S===s.RG_INTEGER&&(j===s.UNSIGNED_BYTE&&(Q=s.RG8UI),j===s.UNSIGNED_SHORT&&(Q=s.RG16UI),j===s.UNSIGNED_INT&&(Q=s.RG32UI),j===s.BYTE&&(Q=s.RG8I),j===s.SHORT&&(Q=s.RG16I),j===s.INT&&(Q=s.RG32I)),S===s.RGB_INTEGER&&(j===s.UNSIGNED_BYTE&&(Q=s.RGB8UI),j===s.UNSIGNED_SHORT&&(Q=s.RGB16UI),j===s.UNSIGNED_INT&&(Q=s.RGB32UI),j===s.BYTE&&(Q=s.RGB8I),j===s.SHORT&&(Q=s.RGB16I),j===s.INT&&(Q=s.RGB32I)),S===s.RGBA_INTEGER&&(j===s.UNSIGNED_BYTE&&(Q=s.RGBA8UI),j===s.UNSIGNED_SHORT&&(Q=s.RGBA16UI),j===s.UNSIGNED_INT&&(Q=s.RGBA32UI),j===s.BYTE&&(Q=s.RGBA8I),j===s.SHORT&&(Q=s.RGBA16I),j===s.INT&&(Q=s.RGBA32I)),S===s.RGB&&(j===s.UNSIGNED_INT_5_9_9_9_REV&&(Q=s.RGB9_E5),j===s.UNSIGNED_INT_10F_11F_11F_REV&&(Q=s.R11F_G11F_B10F)),S===s.RGBA){let V=pe?io:at.getTransfer(re);j===s.FLOAT&&(Q=s.RGBA32F),j===s.HALF_FLOAT&&(Q=s.RGBA16F),j===s.UNSIGNED_BYTE&&(Q=V===wt?s.SRGB8_ALPHA8:s.RGBA8),j===s.UNSIGNED_SHORT_4_4_4_4&&(Q=s.RGBA4),j===s.UNSIGNED_SHORT_5_5_5_1&&(Q=s.RGB5_A1)}return(Q===s.R16F||Q===s.R32F||Q===s.RG16F||Q===s.RG32F||Q===s.RGBA16F||Q===s.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function y(R,S){let j;return R?S===null||S===xs||S===ys?j=s.DEPTH24_STENCIL8:S===ti?j=s.DEPTH32F_STENCIL8:S===gs&&(j=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===xs||S===ys?j=s.DEPTH_COMPONENT24:S===ti?j=s.DEPTH_COMPONENT32F:S===gs&&(j=s.DEPTH_COMPONENT16),j}function b(R,S){return g(R)===!0||R.isFramebufferTexture&&R.minFilter!==gt&&R.minFilter!==Jt?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function P(R){let S=R.target;S.removeEventListener("dispose",P),D(S),S.isVideoTexture&&h.delete(S)}function C(R){let S=R.target;S.removeEventListener("dispose",C),v(S)}function D(R){let S=n.get(R);if(S.__webglInit===void 0)return;let j=R.source,re=f.get(j);if(re){let pe=re[S.__cacheKey];pe.usedTimes--,pe.usedTimes===0&&_(R),Object.keys(re).length===0&&f.delete(j)}n.remove(R)}function _(R){let S=n.get(R);s.deleteTexture(S.__webglTexture);let j=R.source,re=f.get(j);delete re[S.__cacheKey],o.memory.textures--}function v(R){let S=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(S.__webglFramebuffer[re]))for(let pe=0;pe<S.__webglFramebuffer[re].length;pe++)s.deleteFramebuffer(S.__webglFramebuffer[re][pe]);else s.deleteFramebuffer(S.__webglFramebuffer[re]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[re])}else{if(Array.isArray(S.__webglFramebuffer))for(let re=0;re<S.__webglFramebuffer.length;re++)s.deleteFramebuffer(S.__webglFramebuffer[re]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let re=0;re<S.__webglColorRenderbuffer.length;re++)S.__webglColorRenderbuffer[re]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[re]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let j=R.textures;for(let re=0,pe=j.length;re<pe;re++){let Q=n.get(j[re]);Q.__webglTexture&&(s.deleteTexture(Q.__webglTexture),o.memory.textures--),n.remove(j[re])}n.remove(R)}let A=0;function N(){A=0}function B(){let R=A;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),A+=1,R}function z(R){let S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function k(R,S){let j=n.get(R);if(R.isVideoTexture&&ye(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&j.__version!==R.version){let re=R.image;if(re===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{se(j,R,S);return}}else R.isExternalTexture&&(j.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,j.__webglTexture,s.TEXTURE0+S)}function X(R,S){let j=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&j.__version!==R.version){se(j,R,S);return}t.bindTexture(s.TEXTURE_2D_ARRAY,j.__webglTexture,s.TEXTURE0+S)}function te(R,S){let j=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&j.__version!==R.version){se(j,R,S);return}t.bindTexture(s.TEXTURE_3D,j.__webglTexture,s.TEXTURE0+S)}function Y(R,S){let j=n.get(R);if(R.version>0&&j.__version!==R.version){le(j,R,S);return}t.bindTexture(s.TEXTURE_CUBE_MAP,j.__webglTexture,s.TEXTURE0+S)}let ie={[cn]:s.REPEAT,[Jn]:s.CLAMP_TO_EDGE,[as]:s.MIRRORED_REPEAT},ae={[gt]:s.NEAREST,[Ar]:s.NEAREST_MIPMAP_NEAREST,[$i]:s.NEAREST_MIPMAP_LINEAR,[Jt]:s.LINEAR,[ms]:s.LINEAR_MIPMAP_NEAREST,[pn]:s.LINEAR_MIPMAP_LINEAR},fe={[uf]:s.NEVER,[xf]:s.ALWAYS,[df]:s.LESS,[Th]:s.LEQUAL,[ff]:s.EQUAL,[gf]:s.GEQUAL,[pf]:s.GREATER,[mf]:s.NOTEQUAL};function Ue(R,S){if(S.type===ti&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Jt||S.magFilter===ms||S.magFilter===$i||S.magFilter===pn||S.minFilter===Jt||S.minFilter===ms||S.minFilter===$i||S.minFilter===pn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(R,s.TEXTURE_WRAP_S,ie[S.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,ie[S.wrapT]),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,ie[S.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,ae[S.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,ae[S.minFilter]),S.compareFunction&&(s.texParameteri(R,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(R,s.TEXTURE_COMPARE_FUNC,fe[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===gt||S.minFilter!==$i&&S.minFilter!==pn||S.type===ti&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let j=e.get("EXT_texture_filter_anisotropic");s.texParameterf(R,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Ce(R,S){let j=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",P));let re=S.source,pe=f.get(re);pe===void 0&&(pe={},f.set(re,pe));let Q=z(S);if(Q!==R.__cacheKey){pe[Q]===void 0&&(pe[Q]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,j=!0),pe[Q].usedTimes++;let V=pe[R.__cacheKey];V!==void 0&&(pe[R.__cacheKey].usedTimes--,V.usedTimes===0&&_(S)),R.__cacheKey=Q,R.__webglTexture=pe[Q].texture}return j}function ze(R,S,j){return Math.floor(Math.floor(R/j)/S)}function Ge(R,S,j,re){let Q=R.updateRanges;if(Q.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,S.width,S.height,j,re,S.data);else{Q.sort(($,de)=>$.start-de.start);let V=0;for(let $=1;$<Q.length;$++){let de=Q[V],Ee=Q[$],Se=de.start+de.count,ge=ze(Ee.start,S.width,4),U=ze(de.start,S.width,4);Ee.start<=Se+1&&ge===U&&ze(Ee.start+Ee.count-1,S.width,4)===ge?de.count=Math.max(de.count,Ee.start+Ee.count-de.start):(++V,Q[V]=Ee)}Q.length=V+1;let H=s.getParameter(s.UNPACK_ROW_LENGTH),ne=s.getParameter(s.UNPACK_SKIP_PIXELS),ue=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,S.width);for(let $=0,de=Q.length;$<de;$++){let Ee=Q[$],Se=Math.floor(Ee.start/4),ge=Math.ceil(Ee.count/4),U=Se%S.width,L=Math.floor(Se/S.width),K=ge,he=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,U),s.pixelStorei(s.UNPACK_SKIP_ROWS,L),t.texSubImage2D(s.TEXTURE_2D,0,U,L,K,he,j,re,S.data)}R.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,H),s.pixelStorei(s.UNPACK_SKIP_PIXELS,ne),s.pixelStorei(s.UNPACK_SKIP_ROWS,ue)}}function se(R,S,j){let re=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(re=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(re=s.TEXTURE_3D);let pe=Ce(R,S),Q=S.source;t.bindTexture(re,R.__webglTexture,s.TEXTURE0+j);let V=n.get(Q);if(Q.version!==V.__version||pe===!0){t.activeTexture(s.TEXTURE0+j);let H=at.getPrimaries(at.workingColorSpace),ne=S.colorSpace===gi?null:at.getPrimaries(S.colorSpace),ue=S.colorSpace===gi||H===ne?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);let $=x(S.image,!1,i.maxTextureSize);$=Ne(S,$);let de=r.convert(S.format,S.colorSpace),Ee=r.convert(S.type),Se=M(S.internalFormat,de,Ee,S.colorSpace,S.isVideoTexture);Ue(re,S);let ge,U=S.mipmaps,L=S.isVideoTexture!==!0,K=V.__version===void 0||pe===!0,he=Q.dataReady,Ae=b(S,$);if(S.isDepthTexture)Se=y(S.format===vs,S.type),K&&(L?t.texStorage2D(s.TEXTURE_2D,1,Se,$.width,$.height):t.texImage2D(s.TEXTURE_2D,0,Se,$.width,$.height,0,de,Ee,null));else if(S.isDataTexture)if(U.length>0){L&&K&&t.texStorage2D(s.TEXTURE_2D,Ae,Se,U[0].width,U[0].height);for(let ve=0,me=U.length;ve<me;ve++)ge=U[ve],L?he&&t.texSubImage2D(s.TEXTURE_2D,ve,0,0,ge.width,ge.height,de,Ee,ge.data):t.texImage2D(s.TEXTURE_2D,ve,Se,ge.width,ge.height,0,de,Ee,ge.data);S.generateMipmaps=!1}else L?(K&&t.texStorage2D(s.TEXTURE_2D,Ae,Se,$.width,$.height),he&&Ge(S,$,de,Ee)):t.texImage2D(s.TEXTURE_2D,0,Se,$.width,$.height,0,de,Ee,$.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){L&&K&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ae,Se,U[0].width,U[0].height,$.depth);for(let ve=0,me=U.length;ve<me;ve++)if(ge=U[ve],S.format!==tn)if(de!==null)if(L){if(he)if(S.layerUpdates.size>0){let De=Nh(ge.width,ge.height,S.format,S.type);for(let Xe of S.layerUpdates){let _t=ge.data.subarray(Xe*De/ge.data.BYTES_PER_ELEMENT,(Xe+1)*De/ge.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ve,0,0,Xe,ge.width,ge.height,1,de,_t)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ve,0,0,0,ge.width,ge.height,$.depth,de,ge.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ve,Se,ge.width,ge.height,$.depth,0,ge.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?he&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ve,0,0,0,ge.width,ge.height,$.depth,de,Ee,ge.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ve,Se,ge.width,ge.height,$.depth,0,de,Ee,ge.data)}else{L&&K&&t.texStorage2D(s.TEXTURE_2D,Ae,Se,U[0].width,U[0].height);for(let ve=0,me=U.length;ve<me;ve++)ge=U[ve],S.format!==tn?de!==null?L?he&&t.compressedTexSubImage2D(s.TEXTURE_2D,ve,0,0,ge.width,ge.height,de,ge.data):t.compressedTexImage2D(s.TEXTURE_2D,ve,Se,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?he&&t.texSubImage2D(s.TEXTURE_2D,ve,0,0,ge.width,ge.height,de,Ee,ge.data):t.texImage2D(s.TEXTURE_2D,ve,Se,ge.width,ge.height,0,de,Ee,ge.data)}else if(S.isDataArrayTexture)if(L){if(K&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ae,Se,$.width,$.height,$.depth),he)if(S.layerUpdates.size>0){let ve=Nh($.width,$.height,S.format,S.type);for(let me of S.layerUpdates){let De=$.data.subarray(me*ve/$.data.BYTES_PER_ELEMENT,(me+1)*ve/$.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,me,$.width,$.height,1,de,Ee,De)}S.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,de,Ee,$.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Se,$.width,$.height,$.depth,0,de,Ee,$.data);else if(S.isData3DTexture)L?(K&&t.texStorage3D(s.TEXTURE_3D,Ae,Se,$.width,$.height,$.depth),he&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,de,Ee,$.data)):t.texImage3D(s.TEXTURE_3D,0,Se,$.width,$.height,$.depth,0,de,Ee,$.data);else if(S.isFramebufferTexture){if(K)if(L)t.texStorage2D(s.TEXTURE_2D,Ae,Se,$.width,$.height);else{let ve=$.width,me=$.height;for(let De=0;De<Ae;De++)t.texImage2D(s.TEXTURE_2D,De,Se,ve,me,0,de,Ee,null),ve>>=1,me>>=1}}else if(U.length>0){if(L&&K){let ve=Be(U[0]);t.texStorage2D(s.TEXTURE_2D,Ae,Se,ve.width,ve.height)}for(let ve=0,me=U.length;ve<me;ve++)ge=U[ve],L?he&&t.texSubImage2D(s.TEXTURE_2D,ve,0,0,de,Ee,ge):t.texImage2D(s.TEXTURE_2D,ve,Se,de,Ee,ge);S.generateMipmaps=!1}else if(L){if(K){let ve=Be($);t.texStorage2D(s.TEXTURE_2D,Ae,Se,ve.width,ve.height)}he&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,de,Ee,$)}else t.texImage2D(s.TEXTURE_2D,0,Se,de,Ee,$);g(S)&&p(re),V.__version=Q.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function le(R,S,j){if(S.image.length!==6)return;let re=Ce(R,S),pe=S.source;t.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+j);let Q=n.get(pe);if(pe.version!==Q.__version||re===!0){t.activeTexture(s.TEXTURE0+j);let V=at.getPrimaries(at.workingColorSpace),H=S.colorSpace===gi?null:at.getPrimaries(S.colorSpace),ne=S.colorSpace===gi||V===H?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);let ue=S.isCompressedTexture||S.image[0].isCompressedTexture,$=S.image[0]&&S.image[0].isDataTexture,de=[];for(let me=0;me<6;me++)!ue&&!$?de[me]=x(S.image[me],!0,i.maxCubemapSize):de[me]=$?S.image[me].image:S.image[me],de[me]=Ne(S,de[me]);let Ee=de[0],Se=r.convert(S.format,S.colorSpace),ge=r.convert(S.type),U=M(S.internalFormat,Se,ge,S.colorSpace),L=S.isVideoTexture!==!0,K=Q.__version===void 0||re===!0,he=pe.dataReady,Ae=b(S,Ee);Ue(s.TEXTURE_CUBE_MAP,S);let ve;if(ue){L&&K&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Ae,U,Ee.width,Ee.height);for(let me=0;me<6;me++){ve=de[me].mipmaps;for(let De=0;De<ve.length;De++){let Xe=ve[De];S.format!==tn?Se!==null?L?he&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,De,0,0,Xe.width,Xe.height,Se,Xe.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,De,U,Xe.width,Xe.height,0,Xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?he&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,De,0,0,Xe.width,Xe.height,Se,ge,Xe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,De,U,Xe.width,Xe.height,0,Se,ge,Xe.data)}}}else{if(ve=S.mipmaps,L&&K){ve.length>0&&Ae++;let me=Be(de[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Ae,U,me.width,me.height)}for(let me=0;me<6;me++)if($){L?he&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,de[me].width,de[me].height,Se,ge,de[me].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,U,de[me].width,de[me].height,0,Se,ge,de[me].data);for(let De=0;De<ve.length;De++){let _t=ve[De].image[me].image;L?he&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,De+1,0,0,_t.width,_t.height,Se,ge,_t.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,De+1,U,_t.width,_t.height,0,Se,ge,_t.data)}}else{L?he&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,Se,ge,de[me]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,U,Se,ge,de[me]);for(let De=0;De<ve.length;De++){let Xe=ve[De];L?he&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,De+1,0,0,Se,ge,Xe.image[me]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,De+1,U,Se,ge,Xe.image[me])}}}g(S)&&p(s.TEXTURE_CUBE_MAP),Q.__version=pe.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function _e(R,S,j,re,pe,Q){let V=r.convert(j.format,j.colorSpace),H=r.convert(j.type),ne=M(j.internalFormat,V,H,j.colorSpace),ue=n.get(S),$=n.get(j);if($.__renderTarget=S,!ue.__hasExternalTextures){let de=Math.max(1,S.width>>Q),Ee=Math.max(1,S.height>>Q);pe===s.TEXTURE_3D||pe===s.TEXTURE_2D_ARRAY?t.texImage3D(pe,Q,ne,de,Ee,S.depth,0,V,H,null):t.texImage2D(pe,Q,ne,de,Ee,0,V,H,null)}t.bindFramebuffer(s.FRAMEBUFFER,R),W(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,re,pe,$.__webglTexture,0,q(S)):(pe===s.TEXTURE_2D||pe>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&pe<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,re,pe,$.__webglTexture,Q),t.bindFramebuffer(s.FRAMEBUFFER,null)}function be(R,S,j){if(s.bindRenderbuffer(s.RENDERBUFFER,R),S.depthBuffer){let re=S.depthTexture,pe=re&&re.isDepthTexture?re.type:null,Q=y(S.stencilBuffer,pe),V=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,H=q(S);W(S)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,H,Q,S.width,S.height):j?s.renderbufferStorageMultisample(s.RENDERBUFFER,H,Q,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,Q,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,V,s.RENDERBUFFER,R)}else{let re=S.textures;for(let pe=0;pe<re.length;pe++){let Q=re[pe],V=r.convert(Q.format,Q.colorSpace),H=r.convert(Q.type),ne=M(Q.internalFormat,V,H,Q.colorSpace),ue=q(S);j&&W(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ue,ne,S.width,S.height):W(S)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ue,ne,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,ne,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function we(R,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let re=n.get(S.depthTexture);re.__renderTarget=S,(!re.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),k(S.depthTexture,0);let pe=re.__webglTexture,Q=q(S);if(S.depthTexture.format===fr)W(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,pe,0,Q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,pe,0);else if(S.depthTexture.format===vs)W(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,pe,0,Q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,pe,0);else throw new Error("Unknown depthTexture format")}function Ze(R){let S=n.get(R),j=R.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==R.depthTexture){let re=R.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),re){let pe=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,re.removeEventListener("dispose",pe)};re.addEventListener("dispose",pe),S.__depthDisposeCallback=pe}S.__boundDepthTexture=re}if(R.depthTexture&&!S.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");let re=R.texture.mipmaps;re&&re.length>0?we(S.__webglFramebuffer[0],R):we(S.__webglFramebuffer,R)}else if(j){S.__webglDepthbuffer=[];for(let re=0;re<6;re++)if(t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[re]),S.__webglDepthbuffer[re]===void 0)S.__webglDepthbuffer[re]=s.createRenderbuffer(),be(S.__webglDepthbuffer[re],R,!1);else{let pe=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Q=S.__webglDepthbuffer[re];s.bindRenderbuffer(s.RENDERBUFFER,Q),s.framebufferRenderbuffer(s.FRAMEBUFFER,pe,s.RENDERBUFFER,Q)}}else{let re=R.texture.mipmaps;if(re&&re.length>0?t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=s.createRenderbuffer(),be(S.__webglDepthbuffer,R,!1);else{let pe=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Q=S.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Q),s.framebufferRenderbuffer(s.FRAMEBUFFER,pe,s.RENDERBUFFER,Q)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function et(R,S,j){let re=n.get(R);S!==void 0&&_e(re.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),j!==void 0&&Ze(R)}function O(R){let S=R.texture,j=n.get(R),re=n.get(S);R.addEventListener("dispose",C);let pe=R.textures,Q=R.isWebGLCubeRenderTarget===!0,V=pe.length>1;if(V||(re.__webglTexture===void 0&&(re.__webglTexture=s.createTexture()),re.__version=S.version,o.memory.textures++),Q){j.__webglFramebuffer=[];for(let H=0;H<6;H++)if(S.mipmaps&&S.mipmaps.length>0){j.__webglFramebuffer[H]=[];for(let ne=0;ne<S.mipmaps.length;ne++)j.__webglFramebuffer[H][ne]=s.createFramebuffer()}else j.__webglFramebuffer[H]=s.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){j.__webglFramebuffer=[];for(let H=0;H<S.mipmaps.length;H++)j.__webglFramebuffer[H]=s.createFramebuffer()}else j.__webglFramebuffer=s.createFramebuffer();if(V)for(let H=0,ne=pe.length;H<ne;H++){let ue=n.get(pe[H]);ue.__webglTexture===void 0&&(ue.__webglTexture=s.createTexture(),o.memory.textures++)}if(R.samples>0&&W(R)===!1){j.__webglMultisampledFramebuffer=s.createFramebuffer(),j.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let H=0;H<pe.length;H++){let ne=pe[H];j.__webglColorRenderbuffer[H]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,j.__webglColorRenderbuffer[H]);let ue=r.convert(ne.format,ne.colorSpace),$=r.convert(ne.type),de=M(ne.internalFormat,ue,$,ne.colorSpace,R.isXRRenderTarget===!0),Ee=q(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ee,de,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+H,s.RENDERBUFFER,j.__webglColorRenderbuffer[H])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&(j.__webglDepthRenderbuffer=s.createRenderbuffer(),be(j.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Q){t.bindTexture(s.TEXTURE_CUBE_MAP,re.__webglTexture),Ue(s.TEXTURE_CUBE_MAP,S);for(let H=0;H<6;H++)if(S.mipmaps&&S.mipmaps.length>0)for(let ne=0;ne<S.mipmaps.length;ne++)_e(j.__webglFramebuffer[H][ne],R,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+H,ne);else _e(j.__webglFramebuffer[H],R,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+H,0);g(S)&&p(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(V){for(let H=0,ne=pe.length;H<ne;H++){let ue=pe[H],$=n.get(ue),de=s.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(de=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(de,$.__webglTexture),Ue(de,ue),_e(j.__webglFramebuffer,R,ue,s.COLOR_ATTACHMENT0+H,de,0),g(ue)&&p(de)}t.unbindTexture()}else{let H=s.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(H=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(H,re.__webglTexture),Ue(H,S),S.mipmaps&&S.mipmaps.length>0)for(let ne=0;ne<S.mipmaps.length;ne++)_e(j.__webglFramebuffer[ne],R,S,s.COLOR_ATTACHMENT0,H,ne);else _e(j.__webglFramebuffer,R,S,s.COLOR_ATTACHMENT0,H,0);g(S)&&p(H),t.unbindTexture()}R.depthBuffer&&Ze(R)}function Ke(R){let S=R.textures;for(let j=0,re=S.length;j<re;j++){let pe=S[j];if(g(pe)){let Q=w(R),V=n.get(pe).__webglTexture;t.bindTexture(Q,V),p(Q),t.unbindTexture()}}}let ke=[],Oe=[];function Te(R){if(R.samples>0){if(W(R)===!1){let S=R.textures,j=R.width,re=R.height,pe=s.COLOR_BUFFER_BIT,Q=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,V=n.get(R),H=S.length>1;if(H)for(let ue=0;ue<S.length;ue++)t.bindFramebuffer(s.FRAMEBUFFER,V.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ue,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,V.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ue,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,V.__webglMultisampledFramebuffer);let ne=R.texture.mipmaps;ne&&ne.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,V.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,V.__webglFramebuffer);for(let ue=0;ue<S.length;ue++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(pe|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(pe|=s.STENCIL_BUFFER_BIT)),H){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,V.__webglColorRenderbuffer[ue]);let $=n.get(S[ue]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,$,0)}s.blitFramebuffer(0,0,j,re,0,0,j,re,pe,s.NEAREST),l===!0&&(ke.length=0,Oe.length=0,ke.push(s.COLOR_ATTACHMENT0+ue),R.depthBuffer&&R.resolveDepthBuffer===!1&&(ke.push(Q),Oe.push(Q),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Oe)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ke))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),H)for(let ue=0;ue<S.length;ue++){t.bindFramebuffer(s.FRAMEBUFFER,V.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ue,s.RENDERBUFFER,V.__webglColorRenderbuffer[ue]);let $=n.get(S[ue]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,V.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ue,s.TEXTURE_2D,$,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,V.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){let S=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function q(R){return Math.min(i.maxSamples,R.samples)}function W(R){let S=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function ye(R){let S=o.render.frame;h.get(R)!==S&&(h.set(R,S),R.update())}function Ne(R,S){let j=R.colorSpace,re=R.format,pe=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||j!==fn&&j!==gi&&(at.getTransfer(j)===wt?(re!==tn||pe!==Wn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",j)),S}function Be(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=N,this.setTexture2D=k,this.setTexture2DArray=X,this.setTexture3D=te,this.setTextureCube=Y,this.rebindTextures=et,this.setupRenderTarget=O,this.updateRenderTargetMipmap=Ke,this.updateMultisampleRenderTarget=Te,this.setupDepthRenderbuffer=Ze,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=W}function Sv(s,e){function t(n,i=gi){let r,o=at.getTransfer(i);if(n===Wn)return s.UNSIGNED_BYTE;if(n===yl)return s.UNSIGNED_SHORT_4_4_4_4;if(n===vl)return s.UNSIGNED_SHORT_5_5_5_1;if(n===xh)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===yh)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===mh)return s.BYTE;if(n===gh)return s.SHORT;if(n===gs)return s.UNSIGNED_SHORT;if(n===xl)return s.INT;if(n===xs)return s.UNSIGNED_INT;if(n===ti)return s.FLOAT;if(n===Xt)return s.HALF_FLOAT;if(n===vh)return s.ALPHA;if(n===_h)return s.RGB;if(n===tn)return s.RGBA;if(n===fr)return s.DEPTH_COMPONENT;if(n===vs)return s.DEPTH_STENCIL;if(n===_l)return s.RED;if(n===Ml)return s.RED_INTEGER;if(n===Mh)return s.RG;if(n===Sl)return s.RG_INTEGER;if(n===bl)return s.RGBA_INTEGER;if(n===zo||n===ko||n===Ho||n===Vo)if(o===wt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===zo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ko)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ho)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Vo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===zo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ko)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ho)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Vo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===El||n===wl||n===Tl||n===Al)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===El)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===wl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Tl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Al)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Rl||n===Cl||n===Il)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Rl||n===Cl)return o===wt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Il)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Pl||n===Dl||n===Ll||n===Nl||n===Ul||n===Ol||n===Fl||n===Bl||n===zl||n===kl||n===Hl||n===Vl||n===Gl||n===Wl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Pl)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Dl)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ll)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Nl)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ul)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ol)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Fl)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Bl)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===zl)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===kl)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Hl)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Vl)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Gl)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Wl)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Xl||n===ql||n===Yl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Xl)return o===wt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ql)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Yl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===jl||n===Zl||n===Kl||n===Jl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===jl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Zl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Kl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Jl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ys?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}var bv=`
void main() {

  gl_Position = vec4( position, 1.0 );

}`,Ev=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

  vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

  if ( coord.x >= 1.0 ) {

    gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

  } else {

    gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

  }

}`,Yh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new mo(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new ct({vertexShader:bv,fragmentShader:Ev,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ye(new en(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},jh=class extends _i{constructor(e,t){super();let n=this,i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,m=null,x=typeof XRWebGLBinding<"u",g=new Yh,p={},w=t.getContextAttributes(),M=null,y=null,b=[],P=[],C=new Me,D=null,_=new Ft;_.viewport=new lt;let v=new Ft;v.viewport=new lt;let A=[_,v],N=new Qa,B=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(se){let le=b[se];return le===void 0&&(le=new _r,b[se]=le),le.getTargetRaySpace()},this.getControllerGrip=function(se){let le=b[se];return le===void 0&&(le=new _r,b[se]=le),le.getGripSpace()},this.getHand=function(se){let le=b[se];return le===void 0&&(le=new _r,b[se]=le),le.getHandSpace()};function k(se){let le=P.indexOf(se.inputSource);if(le===-1)return;let _e=b[le];_e!==void 0&&(_e.update(se.inputSource,se.frame,c||o),_e.dispatchEvent({type:se.type,data:se.inputSource}))}function X(){i.removeEventListener("select",k),i.removeEventListener("selectstart",k),i.removeEventListener("selectend",k),i.removeEventListener("squeeze",k),i.removeEventListener("squeezestart",k),i.removeEventListener("squeezeend",k),i.removeEventListener("end",X),i.removeEventListener("inputsourceschange",te);for(let se=0;se<b.length;se++){let le=P[se];le!==null&&(P[se]=null,b[se].disconnect(le))}B=null,z=null,g.reset();for(let se in p)delete p[se];e.setRenderTarget(M),d=null,f=null,u=null,i=null,y=null,Ge.stop(),n.isPresenting=!1,e.setPixelRatio(D),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(se){r=se,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(se){a=se,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(se){c=se},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(i,t)),u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(se){if(i=se,i!==null){if(M=e.getRenderTarget(),i.addEventListener("select",k),i.addEventListener("selectstart",k),i.addEventListener("selectend",k),i.addEventListener("squeeze",k),i.addEventListener("squeezestart",k),i.addEventListener("squeezeend",k),i.addEventListener("end",X),i.addEventListener("inputsourceschange",te),w.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(C),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,be=null,we=null;w.depth&&(we=w.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=w.stencil?vs:fr,be=w.stencil?ys:xs);let Ze={colorFormat:t.RGBA8,depthFormat:we,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(Ze),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new Lt(f.textureWidth,f.textureHeight,{format:tn,type:Wn,depthTexture:new Wi(f.textureWidth,f.textureHeight,be,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let _e={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,t,_e),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new Lt(d.framebufferWidth,d.framebufferHeight,{format:tn,type:Wn,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Ge.setContext(i),Ge.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function te(se){for(let le=0;le<se.removed.length;le++){let _e=se.removed[le],be=P.indexOf(_e);be>=0&&(P[be]=null,b[be].disconnect(_e))}for(let le=0;le<se.added.length;le++){let _e=se.added[le],be=P.indexOf(_e);if(be===-1){for(let Ze=0;Ze<b.length;Ze++)if(Ze>=P.length){P.push(_e),be=Ze;break}else if(P[Ze]===null){P[Ze]=_e,be=Ze;break}if(be===-1)break}let we=b[be];we&&we.connect(_e)}}let Y=new E,ie=new E;function ae(se,le,_e){Y.setFromMatrixPosition(le.matrixWorld),ie.setFromMatrixPosition(_e.matrixWorld);let be=Y.distanceTo(ie),we=le.projectionMatrix.elements,Ze=_e.projectionMatrix.elements,et=we[14]/(we[10]-1),O=we[14]/(we[10]+1),Ke=(we[9]+1)/we[5],ke=(we[9]-1)/we[5],Oe=(we[8]-1)/we[0],Te=(Ze[8]+1)/Ze[0],q=et*Oe,W=et*Te,ye=be/(-Oe+Te),Ne=ye*-Oe;if(le.matrixWorld.decompose(se.position,se.quaternion,se.scale),se.translateX(Ne),se.translateZ(ye),se.matrixWorld.compose(se.position,se.quaternion,se.scale),se.matrixWorldInverse.copy(se.matrixWorld).invert(),we[10]===-1)se.projectionMatrix.copy(le.projectionMatrix),se.projectionMatrixInverse.copy(le.projectionMatrixInverse);else{let Be=et+ye,R=O+ye,S=q-Ne,j=W+(be-Ne),re=Ke*O/R*Be,pe=ke*O/R*Be;se.projectionMatrix.makePerspective(S,j,re,pe,Be,R),se.projectionMatrixInverse.copy(se.projectionMatrix).invert()}}function fe(se,le){le===null?se.matrixWorld.copy(se.matrix):se.matrixWorld.multiplyMatrices(le.matrixWorld,se.matrix),se.matrixWorldInverse.copy(se.matrixWorld).invert()}this.updateCamera=function(se){if(i===null)return;let le=se.near,_e=se.far;g.texture!==null&&(g.depthNear>0&&(le=g.depthNear),g.depthFar>0&&(_e=g.depthFar)),N.near=v.near=_.near=le,N.far=v.far=_.far=_e,(B!==N.near||z!==N.far)&&(i.updateRenderState({depthNear:N.near,depthFar:N.far}),B=N.near,z=N.far),N.layers.mask=se.layers.mask|6,_.layers.mask=N.layers.mask&3,v.layers.mask=N.layers.mask&5;let be=se.parent,we=N.cameras;fe(N,be);for(let Ze=0;Ze<we.length;Ze++)fe(we[Ze],be);we.length===2?ae(N,_,v):N.projectionMatrix.copy(_.projectionMatrix),Ue(se,N,be)};function Ue(se,le,_e){_e===null?se.matrix.copy(le.matrixWorld):(se.matrix.copy(_e.matrixWorld),se.matrix.invert(),se.matrix.multiply(le.matrixWorld)),se.matrix.decompose(se.position,se.quaternion,se.scale),se.updateMatrixWorld(!0),se.projectionMatrix.copy(le.projectionMatrix),se.projectionMatrixInverse.copy(le.projectionMatrixInverse),se.isPerspectiveCamera&&(se.fov=Is*2*Math.atan(1/se.projectionMatrix.elements[5]),se.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(se){l=se,f!==null&&(f.fixedFoveation=se),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=se)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(N)},this.getCameraTexture=function(se){return p[se]};let Ce=null;function ze(se,le){if(h=le.getViewerPose(c||o),m=le,h!==null){let _e=h.views;d!==null&&(e.setRenderTargetFramebuffer(y,d.framebuffer),e.setRenderTarget(y));let be=!1;_e.length!==N.cameras.length&&(N.cameras.length=0,be=!0);for(let O=0;O<_e.length;O++){let Ke=_e[O],ke=null;if(d!==null)ke=d.getViewport(Ke);else{let Te=u.getViewSubImage(f,Ke);ke=Te.viewport,O===0&&(e.setRenderTargetTextures(y,Te.colorTexture,Te.depthStencilTexture),e.setRenderTarget(y))}let Oe=A[O];Oe===void 0&&(Oe=new Ft,Oe.layers.enable(O),Oe.viewport=new lt,A[O]=Oe),Oe.matrix.fromArray(Ke.transform.matrix),Oe.matrix.decompose(Oe.position,Oe.quaternion,Oe.scale),Oe.projectionMatrix.fromArray(Ke.projectionMatrix),Oe.projectionMatrixInverse.copy(Oe.projectionMatrix).invert(),Oe.viewport.set(ke.x,ke.y,ke.width,ke.height),O===0&&(N.matrix.copy(Oe.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),be===!0&&N.cameras.push(Oe)}let we=i.enabledFeatures;if(we&&we.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){u=n.getBinding();let O=u.getDepthInformation(_e[0]);O&&O.isValid&&O.texture&&g.init(O,i.renderState)}if(we&&we.includes("camera-access")&&x){e.state.unbindTexture(),u=n.getBinding();for(let O=0;O<_e.length;O++){let Ke=_e[O].camera;if(Ke){let ke=p[Ke];ke||(ke=new mo,p[Ke]=ke);let Oe=u.getCameraImage(Ke);ke.sourceTexture=Oe}}}}for(let _e=0;_e<b.length;_e++){let be=P[_e],we=b[_e];be!==null&&we!==void 0&&we.update(be,le,c||o)}Ce&&Ce(se,le),le.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:le}),m=null}let Ge=new qf;Ge.setAnimationLoop(ze),this.setAnimationLoop=function(se){Ce=se},this.dispose=function(){}}},Gs=new Dn,wv=new Ve;function Tv(s,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Ih(s)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,w,M,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),f(g,p),p.isMeshPhysicalMaterial&&d(g,p,y)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),x(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,w,M):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Wt&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Wt&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let w=e.get(p),M=w.envMap,y=w.envMapRotation;M&&(g.envMap.value=M,Gs.copy(y),Gs.x*=-1,Gs.y*=-1,Gs.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Gs.y*=-1,Gs.z*=-1),g.envMapRotation.value.setFromMatrix4(wv.makeRotationFromEuler(Gs)),g.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,w,M){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*w,g.scale.value=M*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,w){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Wt&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=w.texture,g.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){let w=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(w.matrixWorld),g.nearDistance.value=w.shadow.camera.near,g.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Av(s,e,t,n){let i={},r={},o=[],a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,M){let y=M.program;n.uniformBlockBinding(w,y)}function c(w,M){let y=i[w.id];y===void 0&&(m(w),y=h(w),i[w.id]=y,w.addEventListener("dispose",g));let b=M.program;n.updateUBOMapping(w,b);let P=e.render.frame;r[w.id]!==P&&(f(w),r[w.id]=P)}function h(w){let M=u();w.__bindingPointIndex=M;let y=s.createBuffer(),b=w.__size,P=w.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,b,P),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,M,y),y}function u(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(w){let M=i[w.id],y=w.uniforms,b=w.__cache;s.bindBuffer(s.UNIFORM_BUFFER,M);for(let P=0,C=y.length;P<C;P++){let D=Array.isArray(y[P])?y[P]:[y[P]];for(let _=0,v=D.length;_<v;_++){let A=D[_];if(d(A,P,_,b)===!0){let N=A.__offset,B=Array.isArray(A.value)?A.value:[A.value],z=0;for(let k=0;k<B.length;k++){let X=B[k],te=x(X);typeof X=="number"||typeof X=="boolean"?(A.__data[0]=X,s.bufferSubData(s.UNIFORM_BUFFER,N+z,A.__data)):X.isMatrix3?(A.__data[0]=X.elements[0],A.__data[1]=X.elements[1],A.__data[2]=X.elements[2],A.__data[3]=0,A.__data[4]=X.elements[3],A.__data[5]=X.elements[4],A.__data[6]=X.elements[5],A.__data[7]=0,A.__data[8]=X.elements[6],A.__data[9]=X.elements[7],A.__data[10]=X.elements[8],A.__data[11]=0):(X.toArray(A.__data,z),z+=te.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,N,A.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(w,M,y,b){let P=w.value,C=M+"_"+y;if(b[C]===void 0)return typeof P=="number"||typeof P=="boolean"?b[C]=P:b[C]=P.clone(),!0;{let D=b[C];if(typeof P=="number"||typeof P=="boolean"){if(D!==P)return b[C]=P,!0}else if(D.equals(P)===!1)return D.copy(P),!0}return!1}function m(w){let M=w.uniforms,y=0,b=16;for(let C=0,D=M.length;C<D;C++){let _=Array.isArray(M[C])?M[C]:[M[C]];for(let v=0,A=_.length;v<A;v++){let N=_[v],B=Array.isArray(N.value)?N.value:[N.value];for(let z=0,k=B.length;z<k;z++){let X=B[z],te=x(X),Y=y%b,ie=Y%te.boundary,ae=Y+ie;y+=ie,ae!==0&&b-ae<te.storage&&(y+=b-ae),N.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=y,y+=te.storage}}}let P=y%b;return P>0&&(y+=b-P),w.__size=y,w.__cache={},this}function x(w){let M={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(M.boundary=4,M.storage=4):w.isVector2?(M.boundary=8,M.storage=8):w.isVector3||w.isColor?(M.boundary=16,M.storage=12):w.isVector4?(M.boundary=16,M.storage=16):w.isMatrix3?(M.boundary=48,M.storage=48):w.isMatrix4?(M.boundary=64,M.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),M}function g(w){let M=w.target;M.removeEventListener("dispose",g);let y=o.indexOf(M.__bindingPointIndex);o.splice(y,1),s.deleteBuffer(i[M.id]),delete i[M.id],delete r[M.id]}function p(){for(let w in i)s.deleteBuffer(i[w]);o=[],i={},r={}}return{bind:l,update:c,dispose:p}}var Dr=class{constructor(e={}){let{canvas:t=yf(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;let m=new Uint32Array(4),x=new Int32Array(4),g=null,p=null,w=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ji,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let y=this,b=!1;this._outputColorSpace=Et;let P=0,C=0,D=null,_=-1,v=null,A=new lt,N=new lt,B=null,z=new Pe(0),k=0,X=t.width,te=t.height,Y=1,ie=null,ae=null,fe=new lt(0,0,X,te),Ue=new lt(0,0,X,te),Ce=!1,ze=new Sr,Ge=!1,se=!1,le=new Ve,_e=new E,be=new lt,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ze=!1;function et(){return D===null?Y:1}let O=n;function Ke(I,Z){return t.getContext(I,Z)}try{let I={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",he,!1),t.addEventListener("webglcontextrestored",Ae,!1),t.addEventListener("webglcontextcreationerror",ve,!1),O===null){let Z="webgl2";if(O=Ke(Z,I),O===null)throw Ke(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(I){throw console.error("THREE.WebGLRenderer: "+I.message),I}let ke,Oe,Te,q,W,ye,Ne,Be,R,S,j,re,pe,Q,V,H,ne,ue,$,de,Ee,Se,ge,U;function L(){ke=new Xx(O),ke.init(),Se=new Sv(O,ke),Oe=new Bx(O,ke,e,Se),Te=new _v(O,ke),Oe.reversedDepthBuffer&&f&&Te.buffers.depth.setReversed(!0),q=new jx(O),W=new av,ye=new Mv(O,ke,Te,W,Oe,Se,q),Ne=new kx(y),Be=new Wx(y),R=new eg(O),ge=new Ox(O,R),S=new qx(O,R,q,ge),j=new Kx(O,S,R,q),$=new Zx(O,Oe,ye),H=new zx(W),re=new ov(y,Ne,Be,ke,Oe,ge,H),pe=new Tv(y,W),Q=new cv,V=new mv(ke),ue=new Ux(y,Ne,Be,Te,j,d,l),ne=new yv(y,j,Oe),U=new Av(O,q,Oe,Te),de=new Fx(O,ke,q),Ee=new Yx(O,ke,q),q.programs=re.programs,y.capabilities=Oe,y.extensions=ke,y.properties=W,y.renderLists=Q,y.shadowMap=ne,y.state=Te,y.info=q}L();let K=new jh(y,O);this.xr=K,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let I=ke.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){let I=ke.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(I){I!==void 0&&(Y=I,this.setSize(X,te,!1))},this.getSize=function(I){return I.set(X,te)},this.setSize=function(I,Z,oe=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=I,te=Z,t.width=Math.floor(I*Y),t.height=Math.floor(Z*Y),oe===!0&&(t.style.width=I+"px",t.style.height=Z+"px"),this.setViewport(0,0,I,Z)},this.getDrawingBufferSize=function(I){return I.set(X*Y,te*Y).floor()},this.setDrawingBufferSize=function(I,Z,oe){X=I,te=Z,Y=oe,t.width=Math.floor(I*oe),t.height=Math.floor(Z*oe),this.setViewport(0,0,I,Z)},this.getCurrentViewport=function(I){return I.copy(A)},this.getViewport=function(I){return I.copy(fe)},this.setViewport=function(I,Z,oe,ce){I.isVector4?fe.set(I.x,I.y,I.z,I.w):fe.set(I,Z,oe,ce),Te.viewport(A.copy(fe).multiplyScalar(Y).round())},this.getScissor=function(I){return I.copy(Ue)},this.setScissor=function(I,Z,oe,ce){I.isVector4?Ue.set(I.x,I.y,I.z,I.w):Ue.set(I,Z,oe,ce),Te.scissor(N.copy(Ue).multiplyScalar(Y).round())},this.getScissorTest=function(){return Ce},this.setScissorTest=function(I){Te.setScissorTest(Ce=I)},this.setOpaqueSort=function(I){ie=I},this.setTransparentSort=function(I){ae=I},this.getClearColor=function(I){return I.copy(ue.getClearColor())},this.setClearColor=function(){ue.setClearColor(...arguments)},this.getClearAlpha=function(){return ue.getClearAlpha()},this.setClearAlpha=function(){ue.setClearAlpha(...arguments)},this.clear=function(I=!0,Z=!0,oe=!0){let ce=0;if(I){let J=!1;if(D!==null){let Re=D.texture.format;J=Re===bl||Re===Sl||Re===Ml}if(J){let Re=D.texture.type,Fe=Re===Wn||Re===xs||Re===gs||Re===ys||Re===yl||Re===vl,We=ue.getClearColor(),He=ue.getClearAlpha(),Je=We.r,$e=We.g,qe=We.b;Fe?(m[0]=Je,m[1]=$e,m[2]=qe,m[3]=He,O.clearBufferuiv(O.COLOR,0,m)):(x[0]=Je,x[1]=$e,x[2]=qe,x[3]=He,O.clearBufferiv(O.COLOR,0,x))}else ce|=O.COLOR_BUFFER_BIT}Z&&(ce|=O.DEPTH_BUFFER_BIT),oe&&(ce|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(ce)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",he,!1),t.removeEventListener("webglcontextrestored",Ae,!1),t.removeEventListener("webglcontextcreationerror",ve,!1),ue.dispose(),Q.dispose(),V.dispose(),W.dispose(),Ne.dispose(),Be.dispose(),j.dispose(),ge.dispose(),U.dispose(),re.dispose(),K.dispose(),K.removeEventListener("sessionstart",qt),K.removeEventListener("sessionend",ri),Bt.stop()};function he(I){I.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function Ae(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;let I=q.autoReset,Z=ne.enabled,oe=ne.autoUpdate,ce=ne.needsUpdate,J=ne.type;L(),q.autoReset=I,ne.enabled=Z,ne.autoUpdate=oe,ne.needsUpdate=ce,ne.type=J}function ve(I){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function me(I){let Z=I.target;Z.removeEventListener("dispose",me),De(Z)}function De(I){Xe(I),W.remove(I)}function Xe(I){let Z=W.get(I).programs;Z!==void 0&&(Z.forEach(function(oe){re.releaseProgram(oe)}),I.isShaderMaterial&&re.releaseShaderCache(I))}this.renderBufferDirect=function(I,Z,oe,ce,J,Re){Z===null&&(Z=we);let Fe=J.isMesh&&J.matrixWorld.determinant()<0,We=st(I,Z,oe,ce,J);Te.setMaterial(ce,Fe);let He=oe.index,Je=1;if(ce.wireframe===!0){if(He=S.getWireframeAttribute(oe),He===void 0)return;Je=2}let $e=oe.drawRange,qe=oe.attributes.position,ft=$e.start*Je,It=($e.start+$e.count)*Je;Re!==null&&(ft=Math.max(ft,Re.start*Je),It=Math.min(It,(Re.start+Re.count)*Je)),He!==null?(ft=Math.max(ft,0),It=Math.min(It,He.count)):qe!=null&&(ft=Math.max(ft,0),It=Math.min(It,qe.count));let Gt=It-ft;if(Gt<0||Gt===1/0)return;ge.setup(J,ce,We,oe,He);let Ot,Dt=de;if(He!==null&&(Ot=R.get(He),Dt=Ee,Dt.setIndex(Ot)),J.isMesh)ce.wireframe===!0?(Te.setLineWidth(ce.wireframeLinewidth*et()),Dt.setMode(O.LINES)):Dt.setMode(O.TRIANGLES);else if(J.isLine){let je=ce.linewidth;je===void 0&&(je=1),Te.setLineWidth(je*et()),J.isLineSegments?Dt.setMode(O.LINES):J.isLineLoop?Dt.setMode(O.LINE_LOOP):Dt.setMode(O.LINE_STRIP)}else J.isPoints?Dt.setMode(O.POINTS):J.isSprite&&Dt.setMode(O.TRIANGLES);if(J.isBatchedMesh)if(J._multiDrawInstances!==null)mr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Dt.renderMultiDrawInstances(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount,J._multiDrawInstances);else if(ke.get("WEBGL_multi_draw"))Dt.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{let je=J._multiDrawStarts,Ht=J._multiDrawCounts,Mt=J._multiDrawCount,Bn=He?R.get(He).bytesPerElement:1,Zs=W.get(ce).currentProgram.getUniforms();for(let zn=0;zn<Mt;zn++)Zs.setValue(O,"_gl_DrawID",zn),Dt.render(je[zn]/Bn,Ht[zn])}else if(J.isInstancedMesh)Dt.renderInstances(ft,Gt,J.count);else if(oe.isInstancedBufferGeometry){let je=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,Ht=Math.min(oe.instanceCount,je);Dt.renderInstances(ft,Gt,Ht)}else Dt.render(ft,Gt)};function _t(I,Z,oe){I.transparent===!0&&I.side===xt&&I.forceSinglePass===!1?(I.side=Wt,I.needsUpdate=!0,ee(I,Z,oe),I.side=Vn,I.needsUpdate=!0,ee(I,Z,oe),I.side=xt):ee(I,Z,oe)}this.compile=function(I,Z,oe=null){oe===null&&(oe=I),p=V.get(oe),p.init(Z),M.push(p),oe.traverseVisible(function(J){J.isLight&&J.layers.test(Z.layers)&&(p.pushLight(J),J.castShadow&&p.pushShadow(J))}),I!==oe&&I.traverseVisible(function(J){J.isLight&&J.layers.test(Z.layers)&&(p.pushLight(J),J.castShadow&&p.pushShadow(J))}),p.setupLights();let ce=new Set;return I.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;let Re=J.material;if(Re)if(Array.isArray(Re))for(let Fe=0;Fe<Re.length;Fe++){let We=Re[Fe];_t(We,oe,J),ce.add(We)}else _t(Re,oe,J),ce.add(Re)}),p=M.pop(),ce},this.compileAsync=function(I,Z,oe=null){let ce=this.compile(I,Z,oe);return new Promise(J=>{function Re(){if(ce.forEach(function(Fe){W.get(Fe).currentProgram.isReady()&&ce.delete(Fe)}),ce.size===0){J(I);return}setTimeout(Re,10)}ke.get("KHR_parallel_shader_compile")!==null?Re():setTimeout(Re,10)})};let ot=null;function At(I){ot&&ot(I)}function qt(){Bt.stop()}function ri(){Bt.start()}let Bt=new qf;Bt.setAnimationLoop(At),typeof self<"u"&&Bt.setContext(self),this.setAnimationLoop=function(I){ot=I,K.setAnimationLoop(I),I===null?Bt.stop():Bt.start()},K.addEventListener("sessionstart",qt),K.addEventListener("sessionend",ri),this.render=function(I,Z){if(Z!==void 0&&Z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(Z),Z=K.getCamera()),I.isScene===!0&&I.onBeforeRender(y,I,Z,D),p=V.get(I,M.length),p.init(Z),M.push(p),le.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),ze.setFromProjectionMatrix(le,hi,Z.reversedDepth),se=this.localClippingEnabled,Ge=H.init(this.clippingPlanes,se),g=Q.get(I,w.length),g.init(),w.push(g),K.enabled===!0&&K.isPresenting===!0){let Re=y.xr.getDepthSensingMesh();Re!==null&&Fn(Re,Z,-1/0,y.sortObjects)}Fn(I,Z,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(ie,ae),Ze=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,Ze&&ue.addToRenderList(g,I),this.info.render.frame++,Ge===!0&&H.beginShadows();let oe=p.state.shadowsArray;ne.render(oe,I,Z),Ge===!0&&H.endShadows(),this.info.autoReset===!0&&this.info.reset();let ce=g.opaque,J=g.transmissive;if(p.setupLights(),Z.isArrayCamera){let Re=Z.cameras;if(J.length>0)for(let Fe=0,We=Re.length;Fe<We;Fe++){let He=Re[Fe];T(ce,J,I,He)}Ze&&ue.render(I);for(let Fe=0,We=Re.length;Fe<We;Fe++){let He=Re[Fe];Cn(g,I,He,He.viewport)}}else J.length>0&&T(ce,J,I,Z),Ze&&ue.render(I),Cn(g,I,Z);D!==null&&C===0&&(ye.updateMultisampleRenderTarget(D),ye.updateRenderTargetMipmap(D)),I.isScene===!0&&I.onAfterRender(y,I,Z),ge.resetDefaultState(),_=-1,v=null,M.pop(),M.length>0?(p=M[M.length-1],Ge===!0&&H.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,w.pop(),w.length>0?g=w[w.length-1]:g=null};function Fn(I,Z,oe,ce){if(I.visible===!1)return;if(I.layers.test(Z.layers)){if(I.isGroup)oe=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(Z);else if(I.isLight)p.pushLight(I),I.castShadow&&p.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||ze.intersectsSprite(I)){ce&&be.setFromMatrixPosition(I.matrixWorld).applyMatrix4(le);let Fe=j.update(I),We=I.material;We.visible&&g.push(I,Fe,We,oe,be.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||ze.intersectsObject(I))){let Fe=j.update(I),We=I.material;if(ce&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),be.copy(I.boundingSphere.center)):(Fe.boundingSphere===null&&Fe.computeBoundingSphere(),be.copy(Fe.boundingSphere.center)),be.applyMatrix4(I.matrixWorld).applyMatrix4(le)),Array.isArray(We)){let He=Fe.groups;for(let Je=0,$e=He.length;Je<$e;Je++){let qe=He[Je],ft=We[qe.materialIndex];ft&&ft.visible&&g.push(I,Fe,ft,oe,be.z,qe)}}else We.visible&&g.push(I,Fe,We,oe,be.z,null)}}let Re=I.children;for(let Fe=0,We=Re.length;Fe<We;Fe++)Fn(Re[Fe],Z,oe,ce)}function Cn(I,Z,oe,ce){let J=I.opaque,Re=I.transmissive,Fe=I.transparent;p.setupLightsView(oe),Ge===!0&&H.setGlobalState(y.clippingPlanes,oe),ce&&Te.viewport(A.copy(ce)),J.length>0&&F(J,Z,oe),Re.length>0&&F(Re,Z,oe),Fe.length>0&&F(Fe,Z,oe),Te.buffers.depth.setTest(!0),Te.buffers.depth.setMask(!0),Te.buffers.color.setMask(!0),Te.setPolygonOffset(!1)}function T(I,Z,oe,ce){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[ce.id]===void 0&&(p.state.transmissionRenderTarget[ce.id]=new Lt(1,1,{generateMipmaps:!0,type:ke.has("EXT_color_buffer_half_float")||ke.has("EXT_color_buffer_float")?Xt:Wn,minFilter:pn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:at.workingColorSpace}));let Re=p.state.transmissionRenderTarget[ce.id],Fe=ce.viewport||A;Re.setSize(Fe.z*y.transmissionResolutionScale,Fe.w*y.transmissionResolutionScale);let We=y.getRenderTarget(),He=y.getActiveCubeFace(),Je=y.getActiveMipmapLevel();y.setRenderTarget(Re),y.getClearColor(z),k=y.getClearAlpha(),k<1&&y.setClearColor(16777215,.5),y.clear(),Ze&&ue.render(oe);let $e=y.toneMapping;y.toneMapping=Ji;let qe=ce.viewport;if(ce.viewport!==void 0&&(ce.viewport=void 0),p.setupLightsView(ce),Ge===!0&&H.setGlobalState(y.clippingPlanes,ce),F(I,oe,ce),ye.updateMultisampleRenderTarget(Re),ye.updateRenderTargetMipmap(Re),ke.has("WEBGL_multisampled_render_to_texture")===!1){let ft=!1;for(let It=0,Gt=Z.length;It<Gt;It++){let Ot=Z[It],Dt=Ot.object,je=Ot.geometry,Ht=Ot.material,Mt=Ot.group;if(Ht.side===xt&&Dt.layers.test(ce.layers)){let Bn=Ht.side;Ht.side=Wt,Ht.needsUpdate=!0,G(Dt,oe,ce,je,Ht,Mt),Ht.side=Bn,Ht.needsUpdate=!0,ft=!0}}ft===!0&&(ye.updateMultisampleRenderTarget(Re),ye.updateRenderTargetMipmap(Re))}y.setRenderTarget(We,He,Je),y.setClearColor(z,k),qe!==void 0&&(ce.viewport=qe),y.toneMapping=$e}function F(I,Z,oe){let ce=Z.isScene===!0?Z.overrideMaterial:null;for(let J=0,Re=I.length;J<Re;J++){let Fe=I[J],We=Fe.object,He=Fe.geometry,Je=Fe.group,$e=Fe.material;$e.allowOverride===!0&&ce!==null&&($e=ce),We.layers.test(oe.layers)&&G(We,Z,oe,He,$e,Je)}}function G(I,Z,oe,ce,J,Re){I.onBeforeRender(y,Z,oe,ce,J,Re),I.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),J.onBeforeRender(y,Z,oe,ce,I,Re),J.transparent===!0&&J.side===xt&&J.forceSinglePass===!1?(J.side=Wt,J.needsUpdate=!0,y.renderBufferDirect(oe,Z,ce,J,I,Re),J.side=Vn,J.needsUpdate=!0,y.renderBufferDirect(oe,Z,ce,J,I,Re),J.side=xt):y.renderBufferDirect(oe,Z,ce,J,I,Re),I.onAfterRender(y,Z,oe,ce,J,Re)}function ee(I,Z,oe){Z.isScene!==!0&&(Z=we);let ce=W.get(I),J=p.state.lights,Re=p.state.shadowsArray,Fe=J.state.version,We=re.getParameters(I,J.state,Re,Z,oe),He=re.getProgramCacheKey(We),Je=ce.programs;ce.environment=I.isMeshStandardMaterial?Z.environment:null,ce.fog=Z.fog,ce.envMap=(I.isMeshStandardMaterial?Be:Ne).get(I.envMap||ce.environment),ce.envMapRotation=ce.environment!==null&&I.envMap===null?Z.environmentRotation:I.envMapRotation,Je===void 0&&(I.addEventListener("dispose",me),Je=new Map,ce.programs=Je);let $e=Je.get(He);if($e!==void 0){if(ce.currentProgram===$e&&ce.lightsStateVersion===Fe)return Ie(I,We),$e}else We.uniforms=re.getUniforms(I),I.onBeforeCompile(We,y),$e=re.acquireProgram(We,He),Je.set(He,$e),ce.uniforms=We.uniforms;let qe=ce.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(qe.clippingPlanes=H.uniform),Ie(I,We),ce.needsLights=zt(I),ce.lightsStateVersion=Fe,ce.needsLights&&(qe.ambientLightColor.value=J.state.ambient,qe.lightProbe.value=J.state.probe,qe.directionalLights.value=J.state.directional,qe.directionalLightShadows.value=J.state.directionalShadow,qe.spotLights.value=J.state.spot,qe.spotLightShadows.value=J.state.spotShadow,qe.rectAreaLights.value=J.state.rectArea,qe.ltc_1.value=J.state.rectAreaLTC1,qe.ltc_2.value=J.state.rectAreaLTC2,qe.pointLights.value=J.state.point,qe.pointLightShadows.value=J.state.pointShadow,qe.hemisphereLights.value=J.state.hemi,qe.directionalShadowMap.value=J.state.directionalShadowMap,qe.directionalShadowMatrix.value=J.state.directionalShadowMatrix,qe.spotShadowMap.value=J.state.spotShadowMap,qe.spotLightMatrix.value=J.state.spotLightMatrix,qe.spotLightMap.value=J.state.spotLightMap,qe.pointShadowMap.value=J.state.pointShadowMap,qe.pointShadowMatrix.value=J.state.pointShadowMatrix),ce.currentProgram=$e,ce.uniformsList=null,$e}function xe(I){if(I.uniformsList===null){let Z=I.currentProgram.getUniforms();I.uniformsList=Pr.seqWithValue(Z.seq,I.uniforms)}return I.uniformsList}function Ie(I,Z){let oe=W.get(I);oe.outputColorSpace=Z.outputColorSpace,oe.batching=Z.batching,oe.batchingColor=Z.batchingColor,oe.instancing=Z.instancing,oe.instancingColor=Z.instancingColor,oe.instancingMorph=Z.instancingMorph,oe.skinning=Z.skinning,oe.morphTargets=Z.morphTargets,oe.morphNormals=Z.morphNormals,oe.morphColors=Z.morphColors,oe.morphTargetsCount=Z.morphTargetsCount,oe.numClippingPlanes=Z.numClippingPlanes,oe.numIntersection=Z.numClipIntersection,oe.vertexAlphas=Z.vertexAlphas,oe.vertexTangents=Z.vertexTangents,oe.toneMapping=Z.toneMapping}function st(I,Z,oe,ce,J){Z.isScene!==!0&&(Z=we),ye.resetTextureUnits();let Re=Z.fog,Fe=ce.isMeshStandardMaterial?Z.environment:null,We=D===null?y.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:fn,He=(ce.isMeshStandardMaterial?Be:Ne).get(ce.envMap||Fe),Je=ce.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,$e=!!oe.attributes.tangent&&(!!ce.normalMap||ce.anisotropy>0),qe=!!oe.morphAttributes.position,ft=!!oe.morphAttributes.normal,It=!!oe.morphAttributes.color,Gt=Ji;ce.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(Gt=y.toneMapping);let Ot=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,Dt=Ot!==void 0?Ot.length:0,je=W.get(ce),Ht=p.state.lights;if(Ge===!0&&(se===!0||I!==v)){let En=I===v&&ce.id===_;H.setState(ce,I,En)}let Mt=!1;ce.version===je.__version?(je.needsLights&&je.lightsStateVersion!==Ht.state.version||je.outputColorSpace!==We||J.isBatchedMesh&&je.batching===!1||!J.isBatchedMesh&&je.batching===!0||J.isBatchedMesh&&je.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&je.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&je.instancing===!1||!J.isInstancedMesh&&je.instancing===!0||J.isSkinnedMesh&&je.skinning===!1||!J.isSkinnedMesh&&je.skinning===!0||J.isInstancedMesh&&je.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&je.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&je.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&je.instancingMorph===!1&&J.morphTexture!==null||je.envMap!==He||ce.fog===!0&&je.fog!==Re||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==H.numPlanes||je.numIntersection!==H.numIntersection)||je.vertexAlphas!==Je||je.vertexTangents!==$e||je.morphTargets!==qe||je.morphNormals!==ft||je.morphColors!==It||je.toneMapping!==Gt||je.morphTargetsCount!==Dt)&&(Mt=!0):(Mt=!0,je.__version=ce.version);let Bn=je.currentProgram;Mt===!0&&(Bn=ee(ce,Z,J));let Zs=!1,zn=!1,Wr=!1,Vt=Bn.getUniforms(),jn=je.uniforms;if(Te.useProgram(Bn.program)&&(Zs=!0,zn=!0,Wr=!0),ce.id!==_&&(_=ce.id,zn=!0),Zs||v!==I){Te.buffers.depth.getReversed()&&I.reversedDepth!==!0&&(I._reversedDepth=!0,I.updateProjectionMatrix()),Vt.setValue(O,"projectionMatrix",I.projectionMatrix),Vt.setValue(O,"viewMatrix",I.matrixWorldInverse);let Pn=Vt.map.cameraPosition;Pn!==void 0&&Pn.setValue(O,_e.setFromMatrixPosition(I.matrixWorld)),Oe.logarithmicDepthBuffer&&Vt.setValue(O,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(ce.isMeshPhongMaterial||ce.isMeshToonMaterial||ce.isMeshLambertMaterial||ce.isMeshBasicMaterial||ce.isMeshStandardMaterial||ce.isShaderMaterial)&&Vt.setValue(O,"isOrthographic",I.isOrthographicCamera===!0),v!==I&&(v=I,zn=!0,Wr=!0)}if(J.isSkinnedMesh){Vt.setOptional(O,J,"bindMatrix"),Vt.setOptional(O,J,"bindMatrixInverse");let En=J.skeleton;En&&(En.boneTexture===null&&En.computeBoneTexture(),Vt.setValue(O,"boneTexture",En.boneTexture,ye))}J.isBatchedMesh&&(Vt.setOptional(O,J,"batchingTexture"),Vt.setValue(O,"batchingTexture",J._matricesTexture,ye),Vt.setOptional(O,J,"batchingIdTexture"),Vt.setValue(O,"batchingIdTexture",J._indirectTexture,ye),Vt.setOptional(O,J,"batchingColorTexture"),J._colorsTexture!==null&&Vt.setValue(O,"batchingColorTexture",J._colorsTexture,ye));let Zn=oe.morphAttributes;if((Zn.position!==void 0||Zn.normal!==void 0||Zn.color!==void 0)&&$.update(J,oe,Bn),(zn||je.receiveShadow!==J.receiveShadow)&&(je.receiveShadow=J.receiveShadow,Vt.setValue(O,"receiveShadow",J.receiveShadow)),ce.isMeshGouraudMaterial&&ce.envMap!==null&&(jn.envMap.value=He,jn.flipEnvMap.value=He.isCubeTexture&&He.isRenderTargetTexture===!1?-1:1),ce.isMeshStandardMaterial&&ce.envMap===null&&Z.environment!==null&&(jn.envMapIntensity.value=Z.environmentIntensity),zn&&(Vt.setValue(O,"toneMappingExposure",y.toneMappingExposure),je.needsLights&&ht(jn,Wr),Re&&ce.fog===!0&&pe.refreshFogUniforms(jn,Re),pe.refreshMaterialUniforms(jn,ce,Y,te,p.state.transmissionRenderTarget[I.id]),Pr.upload(O,xe(je),jn,ye)),ce.isShaderMaterial&&ce.uniformsNeedUpdate===!0&&(Pr.upload(O,xe(je),jn,ye),ce.uniformsNeedUpdate=!1),ce.isSpriteMaterial&&Vt.setValue(O,"center",J.center),Vt.setValue(O,"modelViewMatrix",J.modelViewMatrix),Vt.setValue(O,"normalMatrix",J.normalMatrix),Vt.setValue(O,"modelMatrix",J.matrixWorld),ce.isShaderMaterial||ce.isRawShaderMaterial){let En=ce.uniformsGroups;for(let Pn=0,Mc=En.length;Pn<Mc;Pn++){let bs=En[Pn];U.update(bs,Bn),U.bind(bs,Bn)}}return Bn}function ht(I,Z){I.ambientLightColor.needsUpdate=Z,I.lightProbe.needsUpdate=Z,I.directionalLights.needsUpdate=Z,I.directionalLightShadows.needsUpdate=Z,I.pointLights.needsUpdate=Z,I.pointLightShadows.needsUpdate=Z,I.spotLights.needsUpdate=Z,I.spotLightShadows.needsUpdate=Z,I.rectAreaLights.needsUpdate=Z,I.hemisphereLights.needsUpdate=Z}function zt(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(I,Z,oe){let ce=W.get(I);ce.__autoAllocateDepthBuffer=I.resolveDepthBuffer===!1,ce.__autoAllocateDepthBuffer===!1&&(ce.__useRenderToTexture=!1),W.get(I.texture).__webglTexture=Z,W.get(I.depthTexture).__webglTexture=ce.__autoAllocateDepthBuffer?void 0:oe,ce.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(I,Z){let oe=W.get(I);oe.__webglFramebuffer=Z,oe.__useDefaultFramebuffer=Z===void 0};let Kt=O.createFramebuffer();this.setRenderTarget=function(I,Z=0,oe=0){D=I,P=Z,C=oe;let ce=!0,J=null,Re=!1,Fe=!1;if(I){let He=W.get(I);if(He.__useDefaultFramebuffer!==void 0)Te.bindFramebuffer(O.FRAMEBUFFER,null),ce=!1;else if(He.__webglFramebuffer===void 0)ye.setupRenderTarget(I);else if(He.__hasExternalTextures)ye.rebindTextures(I,W.get(I.texture).__webglTexture,W.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){let qe=I.depthTexture;if(He.__boundDepthTexture!==qe){if(qe!==null&&W.has(qe)&&(I.width!==qe.image.width||I.height!==qe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ye.setupDepthRenderbuffer(I)}}let Je=I.texture;(Je.isData3DTexture||Je.isDataArrayTexture||Je.isCompressedArrayTexture)&&(Fe=!0);let $e=W.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray($e[Z])?J=$e[Z][oe]:J=$e[Z],Re=!0):I.samples>0&&ye.useMultisampledRTT(I)===!1?J=W.get(I).__webglMultisampledFramebuffer:Array.isArray($e)?J=$e[oe]:J=$e,A.copy(I.viewport),N.copy(I.scissor),B=I.scissorTest}else A.copy(fe).multiplyScalar(Y).floor(),N.copy(Ue).multiplyScalar(Y).floor(),B=Ce;if(oe!==0&&(J=Kt),Te.bindFramebuffer(O.FRAMEBUFFER,J)&&ce&&Te.drawBuffers(I,J),Te.viewport(A),Te.scissor(N),Te.setScissorTest(B),Re){let He=W.get(I.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+Z,He.__webglTexture,oe)}else if(Fe){let He=Z;for(let Je=0;Je<I.textures.length;Je++){let $e=W.get(I.textures[Je]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Je,$e.__webglTexture,oe,He)}}else if(I!==null&&oe!==0){let He=W.get(I.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,He.__webglTexture,oe)}_=-1},this.readRenderTargetPixels=function(I,Z,oe,ce,J,Re,Fe,We=0){if(!(I&&I.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let He=W.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Fe!==void 0&&(He=He[Fe]),He){Te.bindFramebuffer(O.FRAMEBUFFER,He);try{let Je=I.textures[We],$e=Je.format,qe=Je.type;if(!Oe.textureFormatReadable($e)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Oe.textureTypeReadable(qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=I.width-ce&&oe>=0&&oe<=I.height-J&&(I.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+We),O.readPixels(Z,oe,ce,J,Se.convert($e),Se.convert(qe),Re))}finally{let Je=D!==null?W.get(D).__webglFramebuffer:null;Te.bindFramebuffer(O.FRAMEBUFFER,Je)}}},this.readRenderTargetPixelsAsync=async function(I,Z,oe,ce,J,Re,Fe,We=0){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let He=W.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Fe!==void 0&&(He=He[Fe]),He)if(Z>=0&&Z<=I.width-ce&&oe>=0&&oe<=I.height-J){Te.bindFramebuffer(O.FRAMEBUFFER,He);let Je=I.textures[We],$e=Je.format,qe=Je.type;if(!Oe.textureFormatReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Oe.textureTypeReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ft=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,ft),O.bufferData(O.PIXEL_PACK_BUFFER,Re.byteLength,O.STREAM_READ),I.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+We),O.readPixels(Z,oe,ce,J,Se.convert($e),Se.convert(qe),0);let It=D!==null?W.get(D).__webglFramebuffer:null;Te.bindFramebuffer(O.FRAMEBUFFER,It);let Gt=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await vf(O,Gt,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,ft),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,Re),O.deleteBuffer(ft),O.deleteSync(Gt),Re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(I,Z=null,oe=0){let ce=Math.pow(2,-oe),J=Math.floor(I.image.width*ce),Re=Math.floor(I.image.height*ce),Fe=Z!==null?Z.x:0,We=Z!==null?Z.y:0;ye.setTexture2D(I,0),O.copyTexSubImage2D(O.TEXTURE_2D,oe,0,0,Fe,We,J,Re),Te.unbindTexture()};let kt=O.createFramebuffer(),In=O.createFramebuffer();this.copyTextureToTexture=function(I,Z,oe=null,ce=null,J=0,Re=null){Re===null&&(J!==0?(mr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Re=J,J=0):Re=0);let Fe,We,He,Je,$e,qe,ft,It,Gt,Ot=I.isCompressedTexture?I.mipmaps[Re]:I.image;if(oe!==null)Fe=oe.max.x-oe.min.x,We=oe.max.y-oe.min.y,He=oe.isBox3?oe.max.z-oe.min.z:1,Je=oe.min.x,$e=oe.min.y,qe=oe.isBox3?oe.min.z:0;else{let Zn=Math.pow(2,-J);Fe=Math.floor(Ot.width*Zn),We=Math.floor(Ot.height*Zn),I.isDataArrayTexture?He=Ot.depth:I.isData3DTexture?He=Math.floor(Ot.depth*Zn):He=1,Je=0,$e=0,qe=0}ce!==null?(ft=ce.x,It=ce.y,Gt=ce.z):(ft=0,It=0,Gt=0);let Dt=Se.convert(Z.format),je=Se.convert(Z.type),Ht;Z.isData3DTexture?(ye.setTexture3D(Z,0),Ht=O.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(ye.setTexture2DArray(Z,0),Ht=O.TEXTURE_2D_ARRAY):(ye.setTexture2D(Z,0),Ht=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,Z.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,Z.unpackAlignment);let Mt=O.getParameter(O.UNPACK_ROW_LENGTH),Bn=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Zs=O.getParameter(O.UNPACK_SKIP_PIXELS),zn=O.getParameter(O.UNPACK_SKIP_ROWS),Wr=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,Ot.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Ot.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Je),O.pixelStorei(O.UNPACK_SKIP_ROWS,$e),O.pixelStorei(O.UNPACK_SKIP_IMAGES,qe);let Vt=I.isDataArrayTexture||I.isData3DTexture,jn=Z.isDataArrayTexture||Z.isData3DTexture;if(I.isDepthTexture){let Zn=W.get(I),En=W.get(Z),Pn=W.get(Zn.__renderTarget),Mc=W.get(En.__renderTarget);Te.bindFramebuffer(O.READ_FRAMEBUFFER,Pn.__webglFramebuffer),Te.bindFramebuffer(O.DRAW_FRAMEBUFFER,Mc.__webglFramebuffer);for(let bs=0;bs<He;bs++)Vt&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,W.get(I).__webglTexture,J,qe+bs),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,W.get(Z).__webglTexture,Re,Gt+bs)),O.blitFramebuffer(Je,$e,Fe,We,ft,It,Fe,We,O.DEPTH_BUFFER_BIT,O.NEAREST);Te.bindFramebuffer(O.READ_FRAMEBUFFER,null),Te.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(J!==0||I.isRenderTargetTexture||W.has(I)){let Zn=W.get(I),En=W.get(Z);Te.bindFramebuffer(O.READ_FRAMEBUFFER,kt),Te.bindFramebuffer(O.DRAW_FRAMEBUFFER,In);for(let Pn=0;Pn<He;Pn++)Vt?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Zn.__webglTexture,J,qe+Pn):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Zn.__webglTexture,J),jn?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,En.__webglTexture,Re,Gt+Pn):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,En.__webglTexture,Re),J!==0?O.blitFramebuffer(Je,$e,Fe,We,ft,It,Fe,We,O.COLOR_BUFFER_BIT,O.NEAREST):jn?O.copyTexSubImage3D(Ht,Re,ft,It,Gt+Pn,Je,$e,Fe,We):O.copyTexSubImage2D(Ht,Re,ft,It,Je,$e,Fe,We);Te.bindFramebuffer(O.READ_FRAMEBUFFER,null),Te.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else jn?I.isDataTexture||I.isData3DTexture?O.texSubImage3D(Ht,Re,ft,It,Gt,Fe,We,He,Dt,je,Ot.data):Z.isCompressedArrayTexture?O.compressedTexSubImage3D(Ht,Re,ft,It,Gt,Fe,We,He,Dt,Ot.data):O.texSubImage3D(Ht,Re,ft,It,Gt,Fe,We,He,Dt,je,Ot):I.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,Re,ft,It,Fe,We,Dt,je,Ot.data):I.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,Re,ft,It,Ot.width,Ot.height,Dt,Ot.data):O.texSubImage2D(O.TEXTURE_2D,Re,ft,It,Fe,We,Dt,je,Ot);O.pixelStorei(O.UNPACK_ROW_LENGTH,Mt),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Bn),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Zs),O.pixelStorei(O.UNPACK_SKIP_ROWS,zn),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Wr),Re===0&&Z.generateMipmaps&&O.generateMipmap(Ht),Te.unbindTexture()},this.initRenderTarget=function(I){W.get(I).__webglFramebuffer===void 0&&ye.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?ye.setTextureCube(I,0):I.isData3DTexture?ye.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?ye.setTexture2DArray(I,0):ye.setTexture2D(I,0),Te.unbindTexture()},this.resetState=function(){P=0,C=0,D=null,Te.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=at._getDrawingBufferColorSpace(e),t.unpackColorSpace=at._getUnpackColorSpace()}};var An=(s,e=1)=>(s-10+e/2)*20;function $f(s,e=!1){let t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,l=new vt,c=0;for(let h=0;h<s.length;++h){let u=s[h],f=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in u.morphAttributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(e){let d;if(t)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(t){let h=0,u=[];for(let f=0;f<s.length;++f){let d=s[f].index;for(let m=0;m<d.count;++m)u.push(d.getX(m)+h);h+=s[f].attributes.position.count}l.setIndex(u)}for(let h in r){let u=Jf(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){let d=[];for(let x=0;x<o[h].length;++x)d.push(o[h][x][f]);let m=Jf(d);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}return l}function Jf(s){let e,t,n,i=-1,r=0;for(let c=0;c<s.length;++c){let h=s[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),a=new tt(o,t,n),l=0;for(let c=0;c<s.length;++c){let h=s[c];if(h.isInterleavedBufferAttribute){let u=l/t;for(let f=0,d=h.count;f<d;f++)for(let m=0;m<t;m++){let x=h.getComponent(f,m);a.setComponent(f+u,m,x)}}else o.set(h.array,l);l+=h.count*t}return i!==void 0&&(a.gpuType=i),a}function Qf(s,e=1e-4){e=Math.max(e,Number.EPSILON);let t={},n=s.getIndex(),i=s.getAttribute("position"),r=n?n.count:i.count,o=0,a=Object.keys(s.attributes),l={},c={},h=[],u=["getX","getY","getZ","getW"],f=["setX","setY","setZ","setW"];for(let w=0,M=a.length;w<M;w++){let y=a[w],b=s.attributes[y];l[y]=new b.constructor(new b.array.constructor(b.count*b.itemSize),b.itemSize,b.normalized);let P=s.morphAttributes[y];P&&(c[y]||(c[y]=[]),P.forEach((C,D)=>{let _=new C.array.constructor(C.count*C.itemSize);c[y][D]=new C.constructor(_,C.itemSize,C.normalized)}))}let d=e*.5,m=Math.log10(1/e),x=Math.pow(10,m),g=d*x;for(let w=0;w<r;w++){let M=n?n.getX(w):w,y="";for(let b=0,P=a.length;b<P;b++){let C=a[b],D=s.getAttribute(C),_=D.itemSize;for(let v=0;v<_;v++)y+=`${~~(D[u[v]](M)*x+g)},`}if(y in t)h.push(t[y]);else{for(let b=0,P=a.length;b<P;b++){let C=a[b],D=s.getAttribute(C),_=s.morphAttributes[C],v=D.itemSize,A=l[C],N=c[C];for(let B=0;B<v;B++){let z=u[B],k=f[B];if(A[k](o,D[z](M)),_)for(let X=0,te=_.length;X<te;X++)N[X][k](o,_[X][z](M))}}t[y]=o,h.push(o),o++}}let p=s.clone();for(let w in s.attributes){let M=l[w];if(p.setAttribute(w,new M.constructor(M.array.slice(0,o*M.itemSize),M.itemSize,M.normalized)),w in c)for(let y=0;y<c[w].length;y++){let b=c[w][y];p.morphAttributes[w][y]=new b.constructor(b.array.slice(0,o*b.itemSize),b.itemSize,b.normalized)}}return p.setIndex(h),p}function Jh(s,e){if(e===Sh)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Rr||e===Go){let t=s.getIndex();if(t===null){let o=[],a=s.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let n=t.count-2,i=[];if(e===Rr)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}function ep({scene:s,height:e,wallMaterial:t}){let n=new pt;n.name="white-studio-factory-shell",s.add(n);let i=new jt({color:11844028,roughness:.39,metalness:.55}),r=new Zt({color:14478579,transparent:!0,opacity:.085,roughness:.1,clearcoat:.5,side:xt,depthWrite:!1}),o=new jt({color:16448248,roughness:.7,side:xt}),a=[],l=e,c=[];function h(f){return l-6+6*Math.sqrt(Math.max(0,1-(f/200)**2))}function u(f){n.clear(),c.forEach(D=>D.dispose()),c.length=0,a=[],l=f;let d=[],m=[],x=f-8,g=x-.9,p=x+.9;function w(D,_,v,A,N,B,z,k){let X=new un(D,_,v),te=new Ve().makeRotationY(z);te.setPosition(A,N,B),X.applyMatrix4(te),k.push(X)}for(let[D,_,v,A]of[["north",0,0,-20],["south",Math.PI,0,20],["west",Math.PI/2,-20,0],["east",-Math.PI/2,20,0]]){let N=new pt;N.position.set(v,0,A),N.rotation.y=_,n.add(N);let B=(k,X,te,Y)=>{let ie=new un(k,X,.24);c.push(ie);let ae=new Ye(ie,t);ae.position.set(te,Y,0),ae.name=D+"-wall",ae.castShadow=!0,ae.receiveShadow=!0,N.add(ae),a.push(ae)};B(40,g,0,g/2),B(40,f-p,0,(f+p)/2);let z=-20;for(let k of[-15,-5,5,15]){let X=k-1.9;B(X-z,1.8,(z+X)/2,x),z=k+1.9;let te=new en(3.8,1.8);te.translate(k,x,0),te.applyMatrix4(new Ve().makeRotationY(_)),te.translate(v,0,A),m.push(te);for(let Y of[-1.9,0,1.9]){let ie=new E(k+Y,x,0).applyAxisAngle(new E(0,1,0),_).add(new E(v,0,A));w(.1,1.92,.12,ie.x,ie.y,ie.z,_,d)}for(let Y of[g,p]){let ie=new E(k,Y,0).applyAxisAngle(new E(0,1,0),_).add(new E(v,0,A));w(3.92,.1,.12,ie.x,ie.y,ie.z,_,d)}}B(20-z,1.8,(z+20)/2,x)}let M=(D,_,v,A)=>{let N=$f(D,!1);D.forEach(z=>z.dispose()),c.push(N);let B=new Ye(N,_);return B.name=v,B.castShadow=A,B.receiveShadow=!0,n.add(B),B};M(d,i,"studio-window-mullions",!0),M(m,r,"studio-window-glazing",!1);let y=[];for(let D of[-20,-12,-4,4,12,20]){let _=Array.from({length:41},(v,A)=>{let N=-20+A;return new E(N,h(N)-.24,D)});y.push(new vo(new br(_),64,.075,6,!1))}M(y,i,"studio-vault-ribs",!0);let b=[];for(let D of[-1,1])for(let _=0;_<24;_++){let v=D*(12+8*_/24),A=D*(12+8*(_+1)/24),N=h(v),B=h(A);b.push(v,N,-20,A,B,-20,v,N,20,v,N,20,A,B,-20,A,B,20)}let P=new vt;P.setAttribute("position",new mt(b,3)),P.computeVertexNormals(),c.push(P);let C=new Ye(P,o);C.name="white-vault-side-panels",C.castShadow=!0,C.receiveShadow=!0,n.add(C)}return u(e),{ceilingAt:h,setHeight:u,setVisible:f=>n.visible=!!f,collisionMeshes:()=>a,state:()=>({windows:16,windowOpenings:!0,windowWidth:3.8,windowHeight:1.8,windowCentreY:l-8,vaultedRoof:!0,structuralRibs:6,height:l,visible:n.visible}),dispose:()=>{s.remove(n),c.forEach(f=>f.dispose()),i.dispose(),r.dispose(),o.dispose()}}}var tp=new it,nc=new E,qs=class extends Ro{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";let e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new mt(e,3)),this.setAttribute("uv",new mt(t,2))}applyMatrix4(e){let t=this.attributes.instanceStart,n=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),n.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let n=new fs(t,6,1);return this.setAttribute("instanceStart",new Ln(n,3,0)),this.setAttribute("instanceEnd",new Ln(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let n=new fs(t,6,1);return this.setAttribute("instanceColorStart",new Ln(n,3,0)),this.setAttribute("instanceColorEnd",new Ln(n,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new _o(e.geometry)),this}fromLineSegments(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new it);let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),tp.setFromBufferAttribute(t),this.boundingBox.union(tp))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hn),this.boundingBox===null&&this.computeBoundingBox();let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){let n=this.boundingSphere.center;this.boundingBox.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)nc.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(nc)),nc.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(nc));this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}};Le.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new Me(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Tn.line={uniforms:Ut.merge([Le.common,Le.fog,Le.line]),vertexShader:`
    #include <common>
    #include <color_pars_vertex>
    #include <fog_pars_vertex>
    #include <logdepthbuf_pars_vertex>
    #include <clipping_planes_pars_vertex>

    uniform float linewidth;
    uniform vec2 resolution;

    attribute vec3 instanceStart;
    attribute vec3 instanceEnd;

    attribute vec3 instanceColorStart;
    attribute vec3 instanceColorEnd;

    #ifdef WORLD_UNITS

      varying vec4 worldPos;
      varying vec3 worldStart;
      varying vec3 worldEnd;

      #ifdef USE_DASH

        varying vec2 vUv;

      #endif

    #else

      varying vec2 vUv;

    #endif

    #ifdef USE_DASH

      uniform float dashScale;
      attribute float instanceDistanceStart;
      attribute float instanceDistanceEnd;
      varying float vLineDistance;

    #endif

    void trimSegment( const in vec4 start, inout vec4 end ) {

      // trim end segment so it terminates between the camera plane and the near plane

      // conservative estimate of the near plane
      float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
      float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
      float nearEstimate = - 0.5 * b / a;

      float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

      end.xyz = mix( start.xyz, end.xyz, alpha );

    }

    void main() {

      #ifdef USE_COLOR

        vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

      #endif

      #ifdef USE_DASH

        vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
        vUv = uv;

      #endif

      float aspect = resolution.x / resolution.y;

      // camera space
      vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
      vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

      #ifdef WORLD_UNITS

        worldStart = start.xyz;
        worldEnd = end.xyz;

      #else

        vUv = uv;

      #endif

      // special case for perspective projection, and segments that terminate either in, or behind, the camera plane
      // clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
      // but we need to perform ndc-space calculations in the shader, so we must address this issue directly
      // perhaps there is a more elegant solution -- WestLangley

      bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

      if ( perspective ) {

        if ( start.z < 0.0 && end.z >= 0.0 ) {

          trimSegment( start, end );

        } else if ( end.z < 0.0 && start.z >= 0.0 ) {

          trimSegment( end, start );

        }

      }

      // clip space
      vec4 clipStart = projectionMatrix * start;
      vec4 clipEnd = projectionMatrix * end;

      // ndc space
      vec3 ndcStart = clipStart.xyz / clipStart.w;
      vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

      // direction
      vec2 dir = ndcEnd.xy - ndcStart.xy;

      // account for clip-space aspect ratio
      dir.x *= aspect;
      dir = normalize( dir );

      #ifdef WORLD_UNITS

        vec3 worldDir = normalize( end.xyz - start.xyz );
        vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
        vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
        vec3 worldFwd = cross( worldDir, worldUp );
        worldPos = position.y < 0.5 ? start: end;

        // height offset
        float hw = linewidth * 0.5;
        worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

        // don't extend the line if we're rendering dashes because we
        // won't be rendering the endcaps
        #ifndef USE_DASH

          // cap extension
          worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

          // add width to the box
          worldPos.xyz += worldFwd * hw;

          // endcaps
          if ( position.y > 1.0 || position.y < 0.0 ) {

            worldPos.xyz -= worldFwd * 2.0 * hw;

          }

        #endif

        // project the worldpos
        vec4 clip = projectionMatrix * worldPos;

        // shift the depth of the projected points so the line
        // segments overlap neatly
        vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
        clip.z = clipPose.z * clip.w;

      #else

        vec2 offset = vec2( dir.y, - dir.x );
        // undo aspect ratio adjustment
        dir.x /= aspect;
        offset.x /= aspect;

        // sign flip
        if ( position.x < 0.0 ) offset *= - 1.0;

        // endcaps
        if ( position.y < 0.0 ) {

          offset += - dir;

        } else if ( position.y > 1.0 ) {

          offset += dir;

        }

        // adjust for linewidth
        offset *= linewidth;

        // adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
        offset /= resolution.y;

        // select end
        vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

        // back to clip space
        offset *= clip.w;

        clip.xy += offset;

      #endif

      gl_Position = clip;

      vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

      #include <logdepthbuf_vertex>
      #include <clipping_planes_vertex>
      #include <fog_vertex>

    }
    `,fragmentShader:`
    uniform vec3 diffuse;
    uniform float opacity;
    uniform float linewidth;

    #ifdef USE_DASH

      uniform float dashOffset;
      uniform float dashSize;
      uniform float gapSize;

    #endif

    varying float vLineDistance;

    #ifdef WORLD_UNITS

      varying vec4 worldPos;
      varying vec3 worldStart;
      varying vec3 worldEnd;

      #ifdef USE_DASH

        varying vec2 vUv;

      #endif

    #else

      varying vec2 vUv;

    #endif

    #include <common>
    #include <color_pars_fragment>
    #include <fog_pars_fragment>
    #include <logdepthbuf_pars_fragment>
    #include <clipping_planes_pars_fragment>

    vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

      float mua;
      float mub;

      vec3 p13 = p1 - p3;
      vec3 p43 = p4 - p3;

      vec3 p21 = p2 - p1;

      float d1343 = dot( p13, p43 );
      float d4321 = dot( p43, p21 );
      float d1321 = dot( p13, p21 );
      float d4343 = dot( p43, p43 );
      float d2121 = dot( p21, p21 );

      float denom = d2121 * d4343 - d4321 * d4321;

      float numer = d1343 * d4321 - d1321 * d4343;

      mua = numer / denom;
      mua = clamp( mua, 0.0, 1.0 );
      mub = ( d1343 + d4321 * ( mua ) ) / d4343;
      mub = clamp( mub, 0.0, 1.0 );

      return vec2( mua, mub );

    }

    void main() {

      float alpha = opacity;
      vec4 diffuseColor = vec4( diffuse, alpha );

      #include <clipping_planes_fragment>

      #ifdef USE_DASH

        if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

        if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

      #endif

      #ifdef WORLD_UNITS

        // Find the closest points on the view ray and the line segment
        vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
        vec3 lineDir = worldEnd - worldStart;
        vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

        vec3 p1 = worldStart + lineDir * params.x;
        vec3 p2 = rayEnd * params.y;
        vec3 delta = p1 - p2;
        float len = length( delta );
        float norm = len / linewidth;

        #ifndef USE_DASH

          #ifdef USE_ALPHA_TO_COVERAGE

            float dnorm = fwidth( norm );
            alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

          #else

            if ( norm > 0.5 ) {

              discard;

            }

          #endif

        #endif

      #else

        #ifdef USE_ALPHA_TO_COVERAGE

          // artifacts appear on some hardware if a derivative is taken within a conditional
          float a = vUv.x;
          float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
          float len2 = a * a + b * b;
          float dlen = fwidth( len2 );

          if ( abs( vUv.y ) > 1.0 ) {

            alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

          }

        #else

          if ( abs( vUv.y ) > 1.0 ) {

            float a = vUv.x;
            float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
            float len2 = a * a + b * b;

            if ( len2 > 1.0 ) discard;

          }

        #endif

      #endif

      #include <logdepthbuf_fragment>
      #include <color_fragment>

      gl_FragColor = vec4( diffuseColor.rgb, alpha );

      #include <tonemapping_fragment>
      #include <colorspace_fragment>
      #include <fog_fragment>
      #include <premultiplied_alpha_fragment>

    }
    `};var Nr=class extends ct{constructor(e){super({type:"LineMaterial",uniforms:Ut.clone(Tn.line.uniforms),vertexShader:Tn.line.vertexShader,fragmentShader:Tn.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(e){e===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return"USE_DASH"in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}};var $h=new lt,np=new E,ip=new E,gn=new lt,xn=new lt,Ri=new lt,Qh=new E,eu=new Ve,yn=new Po,sp=new E,ic=new it,sc=new hn,Ci=new lt,Ii,Ys;function rp(s,e,t){return Ci.set(0,0,-e,1).applyMatrix4(s.projectionMatrix),Ci.multiplyScalar(1/Ci.w),Ci.x=Ys/t.width,Ci.y=Ys/t.height,Ci.applyMatrix4(s.projectionMatrixInverse),Ci.multiplyScalar(1/Ci.w),Math.abs(Math.max(Ci.x,Ci.y))}function Rv(s,e){let t=s.matrixWorld,n=s.geometry,i=n.attributes.instanceStart,r=n.attributes.instanceEnd,o=Math.min(n.instanceCount,i.count);for(let a=0,l=o;a<l;a++){yn.start.fromBufferAttribute(i,a),yn.end.fromBufferAttribute(r,a),yn.applyMatrix4(t);let c=new E,h=new E;Ii.distanceSqToSegment(yn.start,yn.end,h,c),h.distanceTo(c)<Ys*.5&&e.push({point:h,pointOnLine:c,distance:Ii.origin.distanceTo(h),object:s,face:null,faceIndex:a,uv:null,uv1:null})}}function Cv(s,e,t){let n=e.projectionMatrix,r=s.material.resolution,o=s.matrixWorld,a=s.geometry,l=a.attributes.instanceStart,c=a.attributes.instanceEnd,h=Math.min(a.instanceCount,l.count),u=-e.near;Ii.at(1,Ri),Ri.w=1,Ri.applyMatrix4(e.matrixWorldInverse),Ri.applyMatrix4(n),Ri.multiplyScalar(1/Ri.w),Ri.x*=r.x/2,Ri.y*=r.y/2,Ri.z=0,Qh.copy(Ri),eu.multiplyMatrices(e.matrixWorldInverse,o);for(let f=0,d=h;f<d;f++){if(gn.fromBufferAttribute(l,f),xn.fromBufferAttribute(c,f),gn.w=1,xn.w=1,gn.applyMatrix4(eu),xn.applyMatrix4(eu),gn.z>u&&xn.z>u)continue;if(gn.z>u){let M=gn.z-xn.z,y=(gn.z-u)/M;gn.lerp(xn,y)}else if(xn.z>u){let M=xn.z-gn.z,y=(xn.z-u)/M;xn.lerp(gn,y)}gn.applyMatrix4(n),xn.applyMatrix4(n),gn.multiplyScalar(1/gn.w),xn.multiplyScalar(1/xn.w),gn.x*=r.x/2,gn.y*=r.y/2,xn.x*=r.x/2,xn.y*=r.y/2,yn.start.copy(gn),yn.start.z=0,yn.end.copy(xn),yn.end.z=0;let x=yn.closestPointToPointParameter(Qh,!0);yn.at(x,sp);let g=mn.lerp(gn.z,xn.z,x),p=g>=-1&&g<=1,w=Qh.distanceTo(sp)<Ys*.5;if(p&&w){yn.start.fromBufferAttribute(l,f),yn.end.fromBufferAttribute(c,f),yn.start.applyMatrix4(o),yn.end.applyMatrix4(o);let M=new E,y=new E;Ii.distanceSqToSegment(yn.start,yn.end,y,M),t.push({point:y,pointOnLine:M,distance:Ii.origin.distanceTo(y),object:s,face:null,faceIndex:f,uv:null,uv1:null})}}}var rc=class extends Ye{constructor(e=new qs,t=new Nr({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let e=this.geometry,t=e.attributes.instanceStart,n=e.attributes.instanceEnd,i=new Float32Array(2*t.count);for(let o=0,a=0,l=t.count;o<l;o++,a+=2)np.fromBufferAttribute(t,o),ip.fromBufferAttribute(n,o),i[a]=a===0?0:i[a-1],i[a+1]=i[a]+np.distanceTo(ip);let r=new fs(i,2,1);return e.setAttribute("instanceDistanceStart",new Ln(r,1,0)),e.setAttribute("instanceDistanceEnd",new Ln(r,1,1)),this}raycast(e,t){let n=this.material.worldUnits,i=e.camera;i===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');let r=e.params.Line2!==void 0&&e.params.Line2.threshold||0;Ii=e.ray;let o=this.matrixWorld,a=this.geometry,l=this.material;Ys=l.linewidth+r,a.boundingSphere===null&&a.computeBoundingSphere(),sc.copy(a.boundingSphere).applyMatrix4(o);let c;if(n)c=Ys*.5;else{let u=Math.max(i.near,sc.distanceToPoint(Ii.origin));c=rp(i,u,l.resolution)}if(sc.radius+=c,Ii.intersectsSphere(sc)===!1)return;a.boundingBox===null&&a.computeBoundingBox(),ic.copy(a.boundingBox).applyMatrix4(o);let h;if(n)h=Ys*.5;else{let u=Math.max(i.near,ic.distanceToPoint(Ii.origin));h=rp(i,u,l.resolution)}ic.expandByScalar(h),Ii.intersectsBox(ic)!==!1&&(n?Rv(this,t):Cv(this,i,t))}onBeforeRender(e){let t=this.material.uniforms;t&&t.resolution&&(e.getViewport($h),this.material.uniforms.resolution.value.set($h.z,$h.w))}};function Iv(s,e){let t=s.geometry.attributes.position,n=s.geometry.index,i=e.clone().applyMatrix4(s.matrixWorld.clone().invert()),r=[],o=new E,a=new E,l=new E,c=new E,h=new E,u=[o,a,l],f=1e-7;for(let d=0,m=n?n.count:t.count;d<m;d+=3){for(let p=0;p<3;p++)u[p].fromBufferAttribute(t,n?n.getX(d+p):d+p);let x=u.map(p=>i.distanceToPoint(p));if(x.every(p=>p>f)||x.every(p=>p<-f)||x.every(p=>Math.abs(p)<f))continue;let g=[];for(let p=0;p<3;p++){let w=(p+1)%3;if(Math.abs(x[p])<f)c.copy(u[p]);else if(x[p]*x[w]<0)c.copy(u[p]).lerp(u[w],x[p]/(x[p]-x[w]));else continue;g.some(M=>M.distanceToSquared(c)<f*f)||g.push(c.clone())}if(g.length===2&&g[0].distanceToSquared(g[1])>f*f)for(let p of g)h.copy(p).applyMatrix4(s.matrixWorld),r.push(h.x,h.y,h.z)}return r}function op({scene:s,renderer:e,getMeshes:t,invalidate:n}){let i=document.getElementById("walk-section"),r=document.getElementById("walk-section-panel"),o=document.getElementById("walk-section-height"),a=document.getElementById("walk-section-axis"),l=document.getElementById("walk-section-value"),c=new an(new E(0,-1,0),0),h=new pt;h.name="Axonometric section caps",s.add(h);let u=!1,f="axonometric",d=.45,m="y",x=[],g=new Map,p="",w=0,M=0,y=!1,b=0,P=0;e.localClippingEnabled=!0;let C=k=>Array.isArray(k.material)?k.material:[k.material];function D(){if(b=0,y||!u||f!=="axonometric")return;let k=[];for(let ae of x)k.push(Iv(ae,c));let X=k.reduce((ae,fe)=>ae+fe.length,0),te=new Float32Array(X),Y=0;for(let ae of k)te.set(ae,Y),Y+=ae.length;let ie=h.getObjectByName("Opaque wall cut lines");ie||(ie=new rc(new qs,new Nr({color:2236962,linewidth:2,worldUnits:!1,toneMapped:!1,transparent:!1,depthTest:!0,depthWrite:!1})),ie.name="Opaque wall cut lines",ie.userData.ownsGeometry=!0,ie.renderOrder=2e4,ie.frustumCulled=!1,h.add(ie)),ie.geometry.dispose(),ie.geometry=new qs,ie.geometry.setPositions(te),ie.position.copy(c.normal).multiplyScalar(-.006),P=X/6,n()}function _(){b&&cancelAnimationFrame(b),b=0,P=0;for(let[k,X]of g)k.clippingPlanes=X.planes,k.clipShadows=X.shadows,k.needsUpdate=!0;g.clear();for(let k of x)k.userData.sectionRenderOrder!==void 0&&(k.renderOrder=k.userData.sectionRenderOrder,delete k.userData.sectionRenderOrder);x=[];for(let k of[...h.children])h.remove(k),k.userData.ownsGeometry&&k.geometry.dispose(),k.material.dispose();w=0,p=""}function v(){if(y)return;let k=u&&f==="axonometric";if(i.hidden=f!=="axonometric",r.hidden=!k,i.setAttribute("aria-pressed",String(k)),!k){_(),h.visible=!1,n();return}let X=t().filter(Y=>Y.isMesh);for(let Y of X)Y.updateWorldMatrix(!0,!1);let te=X.map(Y=>Y.uuid+":"+Y.matrixWorld.elements.join(",")).join("|");if(te!==p){_(),x=X,p=te;let Y=new it;for(let ae of x)Y.union(new it().setFromObject(ae));let ie=Math.max(10,Y.getSize(new E).length()*1.1);for(let ae of x){for(let ze of C(ae))g.has(ze)||(g.set(ze,{planes:ze.clippingPlanes,shadows:ze.clipShadows}),ze.clippingPlanes=[c],ze.clipShadows=!1,ze.needsUpdate=!0);if(ae.userData.sectionRenderOrder=ae.renderOrder,ae.renderOrder=0,ae.userData.sourceArchitecture&&!ae.userData.fusionCore&&!ae.userData.road)continue;let fe=100+w*3;for(let[ze,Ge]of[[Wt,bh],[Vn,Eh]]){let se=new Rt({depthWrite:!1,depthTest:!1,colorWrite:!1,stencilWrite:!0,stencilFunc:so,stencilFail:Ge,stencilZFail:Ge,stencilZPass:Ge,side:ze,clippingPlanes:[c]}),le=new Ye(ae.sectionGeometry||ae.geometry,se);le.matrixAutoUpdate=!1,le.matrix.copy(ae.matrixWorld),le.renderOrder=fe,le.frustumCulled=!1,h.add(le)}let Ue=new Rt({color:2236962,opacity:.22,transparent:!1,blending:wr,blendSrc:zi,blendDst:ki,blendEquation:ln,depthWrite:!1,toneMapped:!1,side:xt,stencilWrite:!0,stencilRef:0,stencilFunc:wh,stencilFail:Xo,stencilZFail:Xo,stencilZPass:Xo,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1});Ue.onBeforeCompile=ze=>{ze.uniforms.sectionPitch={value:Math.max(.6,ie/(ae.userData.road?80:180))},ze.uniforms.sectionRoad={value:ae.userData.road?1:0},ze.vertexShader=`varying vec2 cutPatternUV;
`+ze.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
cutPatternUV=position.xy;`),ze.fragmentShader=`uniform float sectionPitch,sectionRoad;varying vec2 cutPatternUV;
`+ze.fragmentShader.replace("#include <opaque_fragment>",["vec2 q=cutPatternUV/sectionPitch;","float dotDistance=length(fract(q)-.5);","float dotMask=step(dotDistance,.23);","vec2 gridDistance=abs(fract(q-.5)-.5)/max(fwidth(q),vec2(.0001));","float gridMask=1.-smoothstep(.55,1.0,min(gridDistance.x,gridDistance.y));","float inkMask=mix(dotMask,gridMask,sectionRoad);diffuseColor.a=mix(.13,1.,inkMask);outgoingLight=diffuse;","#include <opaque_fragment>"].join(`
`))},Ue.customProgramCacheKey=()=>"section-opaque-drafting-v3";let Ce=new Ye(new en(ie,ie),Ue);Ce.name="Translucent cut surface",Ce.userData.ownsGeometry=!0,Ce.userData.sectionCap=!0,Ce.renderOrder=fe+1,Ce.frustumCulled=!1,Ce.onAfterRender=()=>e.clearStencil(),h.add(Ce),w++}}if(x.length){let Y=new it;for(let ae of x)Y.union(new it().setFromObject(ae));M=mn.lerp(Y.min[m],Y.max[m],d),c.normal.set(0,0,0),c.normal[m]=-1,c.constant=M;let ie=Y.getCenter(new E);ie[m]=M;for(let ae of h.children)ae.userData.sectionCap&&(ae.position.copy(ie),ae.quaternion.setFromUnitVectors(new E(0,0,1),c.normal))}b||(b=requestAnimationFrame(D)),l.textContent=M.toFixed(1)+" m",o.value=String(Math.round(d*100)),a.value=m,h.visible=!0,n()}function A(k){u=k.enabled??u,d=mn.clamp(k.ratio??d,.01,.99),m=["x","y","z"].includes(k.axis)?k.axis:m,v()}r.addEventListener("pointerdown",k=>k.stopPropagation());let N=()=>A({enabled:!u}),B=()=>A({ratio:Number(o.value)/100}),z=()=>A({axis:a.value});return i.addEventListener("click",N),o.addEventListener("input",B),a.addEventListener("change",z),{refresh:v,set:A,setViewMode:k=>{f=k,v()},state:()=>({enabled:u,active:u&&f==="axonometric",axis:m,ratio:d,height:M,capColour:"#222222",capOpacity:.22,contourOpacity:1,contourWidth:2,wallPattern:"stipple",roadPattern:"grid",patternColour:"#222222",patternOpacity:1,lineSegments:P,caps:w,meshCount:x.length}),dispose:()=>{y=!0,_(),s.remove(h),i.removeEventListener("click",N),o.removeEventListener("input",B),a.removeEventListener("change",z)}}}var Un={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

    varying vec2 vUv;

    void main() {

      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

    }`,fragmentShader:`

    uniform float opacity;

    uniform sampler2D tDiffuse;

    varying vec2 vUv;

    void main() {

      vec4 texel = texture2D( tDiffuse, vUv );
      gl_FragColor = opacity * texel;


    }`};var Rn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Pv=new Gn(-1,1,1,-1,0,1),tu=class extends vt{constructor(){super(),this.setAttribute("position",new mt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new mt([0,2,0,0,2,0],2))}},Dv=new tu,ni=class{constructor(e){this._mesh=new Ye(Dv,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Pv)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var _s=class extends Rn{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof ct?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Ut.clone(e.uniforms),this.material=new ct({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new ni(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Yo=class extends Rn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}},oc=class extends Rn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var ac=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new Me);this._width=n.width,this._height=n.height,t=new Lt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Xt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new _s(Un),this.copyPass.material.blending=bt,this.clock=new Io}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let i=0,r=this.passes.length;i<r;i++){let o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Yo!==void 0&&(o instanceof Yo?n=!0:o instanceof oc&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Me);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var xi={name:"SSRShader",defines:{MAX_STEP:0,PERSPECTIVE_CAMERA:!0,DISTANCE_ATTENUATION:!0,FRESNEL:!0,INFINITE_THICK:!1,SELECTIVE:!1},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tMetalness:{value:null},tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null},resolution:{value:new Me},cameraProjectionMatrix:{value:new Ve},cameraInverseProjectionMatrix:{value:new Ve},opacity:{value:.5},maxDistance:{value:180},cameraRange:{value:0},thickness:{value:.018}},vertexShader:`

    varying vec2 vUv;

    void main() {

      vUv = uv;

      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

    }

  `,fragmentShader:`
    // precision highp float;
    precision highp sampler2D;
    varying vec2 vUv;
    uniform sampler2D tDepth;
    uniform sampler2D tNormal;
    uniform sampler2D tMetalness;
    uniform sampler2D tDiffuse;
    uniform float cameraRange;
    uniform vec2 resolution;
    uniform float opacity;
    uniform float cameraNear;
    uniform float cameraFar;
    uniform float maxDistance;
    uniform float thickness;
    uniform mat4 cameraProjectionMatrix;
    uniform mat4 cameraInverseProjectionMatrix;
    #include <packing>
    float pointToLineDistance(vec3 x0, vec3 x1, vec3 x2) {
      //x0: point, x1: linePointA, x2: linePointB
      //https://mathworld.wolfram.com/Point-LineDistance3-Dimensional.html
      return length(cross(x0-x1,x0-x2))/length(x2-x1);
    }
    float pointPlaneDistance(vec3 point,vec3 planePoint,vec3 planeNormal){
      // https://mathworld.wolfram.com/Point-PlaneDistance.html
      //// https://en.wikipedia.org/wiki/Plane_(geometry)
      //// http://paulbourke.net/geometry/pointlineplane/
      float a=planeNormal.x,b=planeNormal.y,c=planeNormal.z;
      float x0=point.x,y0=point.y,z0=point.z;
      float x=planePoint.x,y=planePoint.y,z=planePoint.z;
      float d=-(a*x+b*y+c*z);
      float distance=(a*x0+b*y0+c*z0+d)/sqrt(a*a+b*b+c*c);
      return distance;
    }
    float getDepth( const in vec2 uv ) {
      return texture2D( tDepth, uv ).x;
    }
    float getViewZ( const in float depth ) {
      #ifdef PERSPECTIVE_CAMERA
        return perspectiveDepthToViewZ( depth, cameraNear, cameraFar );
      #else
        return orthographicDepthToViewZ( depth, cameraNear, cameraFar );
      #endif
    }
    vec3 getViewPosition( const in vec2 uv, const in float depth/*clip space*/, const in float clipW ) {
      vec4 clipPosition = vec4( ( vec3( uv, depth ) - 0.5 ) * 2.0, 1.0 );//ndc
      clipPosition *= clipW; //clip
      return ( cameraInverseProjectionMatrix * clipPosition ).xyz;//view
    }
    vec3 getViewNormal( const in vec2 uv ) {
      return unpackRGBToNormal( texture2D( tNormal, uv ).xyz );
    }
    vec2 viewPositionToXY(vec3 viewPosition){
      vec2 xy;
      vec4 clip=cameraProjectionMatrix*vec4(viewPosition,1);
      xy=clip.xy;//clip
      float clipW=clip.w;
      xy/=clipW;//NDC
      xy=(xy+1.)/2.;//uv
      xy*=resolution;//screen
      return xy;
    }
    void main(){
      #ifdef SELECTIVE
        float metalness=texture2D(tMetalness,vUv).r;
        if(metalness==0.) return;
      #endif

      float depth = getDepth( vUv );
      float viewZ = getViewZ( depth );
      if(-viewZ>=cameraFar) return;

      float clipW = cameraProjectionMatrix[2][3] * viewZ+cameraProjectionMatrix[3][3];
      vec3 viewPosition=getViewPosition( vUv, depth, clipW );

      vec2 d0=gl_FragCoord.xy;
      vec2 d1;

      vec3 viewNormal=getViewNormal( vUv );

      #ifdef PERSPECTIVE_CAMERA
        vec3 viewIncidentDir=normalize(viewPosition);
        vec3 viewReflectDir=reflect(viewIncidentDir,viewNormal);
      #else
        vec3 viewIncidentDir=vec3(0,0,-1);
        vec3 viewReflectDir=reflect(viewIncidentDir,viewNormal);
      #endif

      float maxReflectRayLen=maxDistance/dot(-viewIncidentDir,viewNormal);
      // dot(a,b)==length(a)*length(b)*cos(theta) // https://www.mathsisfun.com/algebra/vectors-dot-product.html
      // if(a.isNormalized&&b.isNormalized) dot(a,b)==cos(theta)
      // maxDistance/maxReflectRayLen=cos(theta)
      // maxDistance/maxReflectRayLen==dot(a,b)
      // maxReflectRayLen==maxDistance/dot(a,b)

      vec3 d1viewPosition=viewPosition+viewReflectDir*maxReflectRayLen;
      #ifdef PERSPECTIVE_CAMERA
        if(d1viewPosition.z>-cameraNear){
          //https://tutorial.math.lamar.edu/Classes/CalcIII/EqnsOfLines.aspx
          float t=(-cameraNear-viewPosition.z)/viewReflectDir.z;
          d1viewPosition=viewPosition+viewReflectDir*t;
        }
      #endif
      d1=viewPositionToXY(d1viewPosition);

      float totalLen=length(d1-d0);
      float xLen=d1.x-d0.x;
      float yLen=d1.y-d0.y;
      float totalStep=max(abs(xLen),abs(yLen));
      float xSpan=xLen/totalStep;
      float ySpan=yLen/totalStep;
      for(float i=0.;i<float(MAX_STEP);i++){
        if(i>=totalStep) break;
        vec2 xy=vec2(d0.x+i*xSpan,d0.y+i*ySpan);
        if(xy.x<0.||xy.x>resolution.x||xy.y<0.||xy.y>resolution.y) break;
        float s=length(xy-d0)/totalLen;
        vec2 uv=xy/resolution;

        float d = getDepth(uv);
        float vZ = getViewZ( d );
        if(-vZ>=cameraFar) continue;
        float cW = cameraProjectionMatrix[2][3] * vZ+cameraProjectionMatrix[3][3];
        vec3 vP=getViewPosition( uv, d, cW );

        #ifdef PERSPECTIVE_CAMERA
          // https://comp.nus.edu.sg/~lowkl/publications/lowk_persp_interp_techrep.pdf
          float recipVPZ=1./viewPosition.z;
          float viewReflectRayZ=1./(recipVPZ+s*(1./d1viewPosition.z-recipVPZ));
        #else
          float viewReflectRayZ=viewPosition.z+s*(d1viewPosition.z-viewPosition.z);
        #endif

        // if(viewReflectRayZ>vZ) continue; // will cause "npm run make-screenshot webgl_postprocessing_ssr" high probability hang.
        // https://github.com/mrdoob/three.js/pull/21539#issuecomment-821061164
        if(viewReflectRayZ<=vZ){

          bool hit;
          #ifdef INFINITE_THICK
            hit=true;
          #else
            float away=pointToLineDistance(vP,viewPosition,d1viewPosition);

            float minThickness;
            vec2 xyNeighbor=xy;
            xyNeighbor.x+=1.;
            vec2 uvNeighbor=xyNeighbor/resolution;
            vec3 vPNeighbor=getViewPosition(uvNeighbor,d,cW);
            minThickness=vPNeighbor.x-vP.x;
            minThickness*=3.;
            float tk=max(minThickness,thickness);

            hit=away<=tk;
          #endif

          if(hit){
            vec3 vN=getViewNormal( uv );
            if(dot(viewReflectDir,vN)>=0.) continue;
            float distance=pointPlaneDistance(vP,viewPosition,viewNormal);
            if(distance>maxDistance) break;
            float op=opacity;
            #ifdef DISTANCE_ATTENUATION
              float ratio=1.-(distance/maxDistance);
              float attenuation=ratio*ratio;
              op=opacity*attenuation;
            #endif
            #ifdef FRESNEL
              float fresnelCoe=(dot(viewIncidentDir,viewReflectDir)+1.)/2.;
              op*=fresnelCoe;
            #endif
            vec4 reflectColor=texture2D(tDiffuse,uv);
            gl_FragColor.xyz=reflectColor.xyz;
            gl_FragColor.a=op;
            break;
          }
        }
      }
    }
  `},jo={name:"SSRDepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`

    varying vec2 vUv;

    void main() {

      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

    }

  `,fragmentShader:`

    uniform sampler2D tDepth;

    uniform float cameraNear;
    uniform float cameraFar;

    varying vec2 vUv;

    #include <packing>

    float getLinearDepth( const in vec2 uv ) {

      #if PERSPECTIVE_CAMERA == 1

        float fragCoordZ = texture2D( tDepth, uv ).x;
        float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
        return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );

      #else

        return texture2D( tDepth, uv ).x;

      #endif

    }

    void main() {

      float depth = getLinearDepth( vUv );
      float d = 1.0 - depth;
      // d=(d-.999)*1000.;
      gl_FragColor = vec4( vec3( d ), 1.0 );

    }

  `},es={name:"SSRBlurShader",uniforms:{tDiffuse:{value:null},resolution:{value:new Me},opacity:{value:.5}},vertexShader:`

    varying vec2 vUv;

    void main() {

      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

    }

  `,fragmentShader:`

    uniform sampler2D tDiffuse;
    uniform vec2 resolution;
    varying vec2 vUv;
    void main() {
      //reverse engineering from PhotoShop blur filter, then change coefficient

      vec2 texelSize = ( 1.0 / resolution );

      vec4 c=texture2D(tDiffuse,vUv);

      vec2 offset;

      offset=(vec2(-1,0))*texelSize;
      vec4 cl=texture2D(tDiffuse,vUv+offset);

      offset=(vec2(1,0))*texelSize;
      vec4 cr=texture2D(tDiffuse,vUv+offset);

      offset=(vec2(0,-1))*texelSize;
      vec4 cb=texture2D(tDiffuse,vUv+offset);

      offset=(vec2(0,1))*texelSize;
      vec4 ct=texture2D(tDiffuse,vUv+offset);

      // float coeCenter=.5;
      // float coeSide=.125;
      float coeCenter=.2;
      float coeSide=.2;
      float a=c.a*coeCenter+cl.a*coeSide+cr.a*coeSide+cb.a*coeSide+ct.a*coeSide;
      vec3 rgb=(c.rgb*c.a*coeCenter+cl.rgb*cl.a*coeSide+cr.rgb*cr.a*coeSide+cb.rgb*cb.a*coeSide+ct.rgb*ct.a*coeSide)/a;
      gl_FragColor=vec4(rgb,a);

    }
  `};var Zo=class s extends Rn{constructor({renderer:e,scene:t,camera:n,width:i=512,height:r=512,selects:o=null,bouncing:a=!1,groundReflector:l=null}){super(),this.width=i,this.height=r,this.clear=!0,this.renderer=e,this.scene=t,this.camera=n,this.groundReflector=l,this.opacity=xi.uniforms.opacity.value,this.output=0,this.maxDistance=xi.uniforms.maxDistance.value,this.thickness=xi.uniforms.thickness.value,this.tempColor=new Pe,this._selects=o,this._resolutionScale=1,this.selective=Array.isArray(this._selects),Object.defineProperty(this,"selects",{get(){return this._selects},set(h){this._selects!==h&&(this._selects=h,Array.isArray(h)?(this.selective=!0,this.ssrMaterial.defines.SELECTIVE=!0,this.ssrMaterial.needsUpdate=!0):(this.selective=!1,this.ssrMaterial.defines.SELECTIVE=!1,this.ssrMaterial.needsUpdate=!0))}}),this._bouncing=a,Object.defineProperty(this,"bouncing",{get(){return this._bouncing},set(h){this._bouncing!==h&&(this._bouncing=h,h?this.ssrMaterial.uniforms.tDiffuse.value=this.prevRenderTarget.texture:this.ssrMaterial.uniforms.tDiffuse.value=this.beautyRenderTarget.texture)}}),this.blur=!0,this._distanceAttenuation=xi.defines.DISTANCE_ATTENUATION,Object.defineProperty(this,"distanceAttenuation",{get(){return this._distanceAttenuation},set(h){this._distanceAttenuation!==h&&(this._distanceAttenuation=h,this.ssrMaterial.defines.DISTANCE_ATTENUATION=h,this.ssrMaterial.needsUpdate=!0)}}),this._fresnel=xi.defines.FRESNEL,Object.defineProperty(this,"fresnel",{get(){return this._fresnel},set(h){this._fresnel!==h&&(this._fresnel=h,this.ssrMaterial.defines.FRESNEL=h,this.ssrMaterial.needsUpdate=!0)}}),this._infiniteThick=xi.defines.INFINITE_THICK,Object.defineProperty(this,"infiniteThick",{get(){return this._infiniteThick},set(h){this._infiniteThick!==h&&(this._infiniteThick=h,this.ssrMaterial.defines.INFINITE_THICK=h,this.ssrMaterial.needsUpdate=!0)}});let c=new Wi;c.type=gs,c.minFilter=gt,c.magFilter=gt,this.beautyRenderTarget=new Lt(this.width,this.height,{minFilter:gt,magFilter:gt,type:Xt,depthTexture:c,depthBuffer:!0}),this.prevRenderTarget=new Lt(this.width,this.height,{minFilter:gt,magFilter:gt}),this.normalRenderTarget=new Lt(this.width,this.height,{minFilter:gt,magFilter:gt,type:Xt}),this.metalnessRenderTarget=new Lt(this.width,this.height,{minFilter:gt,magFilter:gt,type:Xt}),this.ssrRenderTarget=new Lt(this.width,this.height,{minFilter:gt,magFilter:gt}),this.blurRenderTarget=this.ssrRenderTarget.clone(),this.blurRenderTarget2=this.ssrRenderTarget.clone(),this.ssrMaterial=new ct({defines:Object.assign({},xi.defines,{MAX_STEP:Math.sqrt(this.width*this.width+this.height*this.height)}),uniforms:Ut.clone(xi.uniforms),vertexShader:xi.vertexShader,fragmentShader:xi.fragmentShader,blending:bt}),this.ssrMaterial.uniforms.tDiffuse.value=this.beautyRenderTarget.texture,this.ssrMaterial.uniforms.tNormal.value=this.normalRenderTarget.texture,this.ssrMaterial.defines.SELECTIVE=this.selective,this.ssrMaterial.needsUpdate=!0,this.ssrMaterial.uniforms.tMetalness.value=this.metalnessRenderTarget.texture,this.ssrMaterial.uniforms.tDepth.value=this.beautyRenderTarget.depthTexture,this.ssrMaterial.uniforms.cameraNear.value=this.camera.near,this.ssrMaterial.uniforms.cameraFar.value=this.camera.far,this.ssrMaterial.uniforms.thickness.value=this.thickness,this.ssrMaterial.uniforms.resolution.value.set(this.width,this.height),this.ssrMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssrMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.normalMaterial=new Us,this.normalMaterial.blending=bt,this.metalnessOnMaterial=new Rt({color:"white"}),this.metalnessOffMaterial=new Rt({color:"black"}),this.blurMaterial=new ct({defines:Object.assign({},es.defines),uniforms:Ut.clone(es.uniforms),vertexShader:es.vertexShader,fragmentShader:es.fragmentShader}),this.blurMaterial.uniforms.tDiffuse.value=this.ssrRenderTarget.texture,this.blurMaterial.uniforms.resolution.value.set(this.width,this.height),this.blurMaterial2=new ct({defines:Object.assign({},es.defines),uniforms:Ut.clone(es.uniforms),vertexShader:es.vertexShader,fragmentShader:es.fragmentShader}),this.blurMaterial2.uniforms.tDiffuse.value=this.blurRenderTarget.texture,this.blurMaterial2.uniforms.resolution.value.set(this.width,this.height),this.depthRenderMaterial=new ct({defines:Object.assign({},jo.defines),uniforms:Ut.clone(jo.uniforms),vertexShader:jo.vertexShader,fragmentShader:jo.fragmentShader,blending:bt}),this.depthRenderMaterial.uniforms.tDepth.value=this.beautyRenderTarget.depthTexture,this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new ct({uniforms:Ut.clone(Un.uniforms),vertexShader:Un.vertexShader,fragmentShader:Un.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:zi,blendDst:ki,blendEquation:ln,blendSrcAlpha:zi,blendDstAlpha:ki,blendEquationAlpha:ln}),this.fsQuad=new ni(null),this.originalClearColor=new Pe}get resolutionScale(){return this._resolutionScale}set resolutionScale(e){this._resolutionScale=e,this.setSize(this.width,this.height)}dispose(){this.beautyRenderTarget.dispose(),this.prevRenderTarget.dispose(),this.normalRenderTarget.dispose(),this.metalnessRenderTarget.dispose(),this.ssrRenderTarget.dispose(),this.blurRenderTarget.dispose(),this.blurRenderTarget2.dispose(),this.normalMaterial.dispose(),this.metalnessOnMaterial.dispose(),this.metalnessOffMaterial.dispose(),this.blurMaterial.dispose(),this.blurMaterial2.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}render(e,t){switch(e.setRenderTarget(this.beautyRenderTarget),e.clear(),this.groundReflector&&(this.groundReflector.visible=!1,this.groundReflector.doRender(this.renderer,this.scene,this.camera),this.groundReflector.visible=!0),e.render(this.scene,this.camera),this.groundReflector&&(this.groundReflector.visible=!1),this._renderOverride(e,this.normalMaterial,this.normalRenderTarget,0,0),this.selective&&this._renderMetalness(e,this.metalnessOnMaterial,this.metalnessRenderTarget,0,0),this.ssrMaterial.uniforms.opacity.value=this.opacity,this.ssrMaterial.uniforms.maxDistance.value=this.maxDistance,this.ssrMaterial.uniforms.thickness.value=this.thickness,this._renderPass(e,this.ssrMaterial,this.ssrRenderTarget),this.blur&&(this._renderPass(e,this.blurMaterial,this.blurRenderTarget),this._renderPass(e,this.blurMaterial2,this.blurRenderTarget2)),this.output){case s.OUTPUT.Default:this.bouncing?(this.copyMaterial.uniforms.tDiffuse.value=this.beautyRenderTarget.texture,this.copyMaterial.blending=bt,this._renderPass(e,this.copyMaterial,this.prevRenderTarget),this.blur?this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget2.texture:this.copyMaterial.uniforms.tDiffuse.value=this.ssrRenderTarget.texture,this.copyMaterial.blending=di,this._renderPass(e,this.copyMaterial,this.prevRenderTarget),this.copyMaterial.uniforms.tDiffuse.value=this.prevRenderTarget.texture,this.copyMaterial.blending=bt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t)):(this.copyMaterial.uniforms.tDiffuse.value=this.beautyRenderTarget.texture,this.copyMaterial.blending=bt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blur?this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget2.texture:this.copyMaterial.uniforms.tDiffuse.value=this.ssrRenderTarget.texture,this.copyMaterial.blending=di,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t));break;case s.OUTPUT.SSR:this.blur?this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget2.texture:this.copyMaterial.uniforms.tDiffuse.value=this.ssrRenderTarget.texture,this.copyMaterial.blending=bt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.bouncing&&(this.blur?this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget2.texture:this.copyMaterial.uniforms.tDiffuse.value=this.beautyRenderTarget.texture,this.copyMaterial.blending=bt,this._renderPass(e,this.copyMaterial,this.prevRenderTarget),this.copyMaterial.uniforms.tDiffuse.value=this.ssrRenderTarget.texture,this.copyMaterial.blending=di,this._renderPass(e,this.copyMaterial,this.prevRenderTarget));break;case s.OUTPUT.Beauty:this.copyMaterial.uniforms.tDiffuse.value=this.beautyRenderTarget.texture,this.copyMaterial.blending=bt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.Depth:this._renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=bt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.Metalness:this.copyMaterial.uniforms.tDiffuse.value=this.metalnessRenderTarget.texture,this.copyMaterial.blending=bt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.SSRPass: Unknown output type.")}}setSize(e,t){this.width=e,this.height=t;let n=Math.round(this.resolutionScale*e),i=Math.round(this.resolutionScale*t);this.ssrMaterial.defines.MAX_STEP=Math.sqrt(n*n+i*i),this.ssrMaterial.needsUpdate=!0,this.beautyRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.metalnessRenderTarget.setSize(e,t),this.ssrRenderTarget.setSize(n,i),this.prevRenderTarget.setSize(n,i),this.blurRenderTarget.setSize(n,i),this.blurRenderTarget2.setSize(n,i),this.ssrMaterial.uniforms.resolution.value.set(n,i),this.ssrMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssrMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.blurMaterial.uniforms.resolution.value.set(n,i),this.blurMaterial2.uniforms.resolution.value.set(n,i)}_renderPass(e,t,n,i,r){this.originalClearColor.copy(e.getClearColor(this.tempColor));let o=e.getClearAlpha(this.tempColor),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,i!=null&&(e.setClearColor(i),e.setClearAlpha(r||0),e.clear()),this.fsQuad.material=t,this.fsQuad.render(e),e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}_renderOverride(e,t,n,i,r){this.originalClearColor.copy(e.getClearColor(this.tempColor));let o=e.getClearAlpha(this.tempColor),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,i=t.clearColor||i,r=t.clearAlpha||r,i!=null&&(e.setClearColor(i),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}_renderMetalness(e,t,n,i,r){this.originalClearColor.copy(e.getClearColor(this.tempColor));let o=e.getClearAlpha(this.tempColor),a=e.autoClear,l=this.scene.background,c=this.scene.fog;e.setRenderTarget(n),e.autoClear=!1,this.scene.background=null,this.scene.fog=null,i=t.clearColor||i,r=t.clearAlpha||r,i!=null&&(e.setClearColor(i),e.setClearAlpha(r||0),e.clear()),this.scene.traverseVisible(h=>{h._SSRPassBackupMaterial=h.material,this._selects.includes(h)?h.material=this.metalnessOnMaterial:h.material=this.metalnessOffMaterial}),e.render(this.scene,this.camera),this.scene.traverseVisible(h=>{h.material=h._SSRPassBackupMaterial}),e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o),this.scene.background=l,this.scene.fog=c}};Zo.OUTPUT={Default:0,SSR:1,Beauty:3,Depth:4,Normal:5,Metalness:7};var Ko={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new Me},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new Ve},cameraProjectionMatrixInverse:{value:new Ve},cameraWorldMatrix:{value:new Ve},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new E(-1,-1,-1)},sceneBoxMax:{value:new E(1,1,1)}},vertexShader:`

    varying vec2 vUv;

    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
    }`,fragmentShader:`
    varying vec2 vUv;
    uniform highp sampler2D tNormal;
    uniform highp sampler2D tDepth;
    uniform sampler2D tNoise;
    uniform vec2 resolution;
    uniform float cameraNear;
    uniform float cameraFar;
    uniform mat4 cameraProjectionMatrix;
    uniform mat4 cameraProjectionMatrixInverse;
    uniform mat4 cameraWorldMatrix;
    uniform float radius;
    uniform float distanceExponent;
    uniform float thickness;
    uniform float distanceFallOff;
    uniform float scale;
    #if SCENE_CLIP_BOX == 1
      uniform vec3 sceneBoxMin;
      uniform vec3 sceneBoxMax;
    #endif

    #include <common>
    #include <packing>

    #ifndef FRAGMENT_OUTPUT
    #define FRAGMENT_OUTPUT vec4(vec3(ao), 1.)
    #endif

    vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
      vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
      vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
      return viewSpacePosition.xyz / viewSpacePosition.w;
    }

    float getDepth(const vec2 uv) {
      return textureLod(tDepth, uv.xy, 0.0).DEPTH_SWIZZLING;
    }

    float fetchDepth(const ivec2 uv) {
      return texelFetch(tDepth, uv.xy, 0).DEPTH_SWIZZLING;
    }

    float getViewZ(const in float depth) {
      #if PERSPECTIVE_CAMERA == 1
        return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
      #else
        return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
      #endif
    }

    vec3 computeNormalFromDepth(const vec2 uv) {
      vec2 size = vec2(textureSize(tDepth, 0));
      ivec2 p = ivec2(uv * size);
      float c0 = fetchDepth(p);
      float l2 = fetchDepth(p - ivec2(2, 0));
      float l1 = fetchDepth(p - ivec2(1, 0));
      float r1 = fetchDepth(p + ivec2(1, 0));
      float r2 = fetchDepth(p + ivec2(2, 0));
      float b2 = fetchDepth(p - ivec2(0, 2));
      float b1 = fetchDepth(p - ivec2(0, 1));
      float t1 = fetchDepth(p + ivec2(0, 1));
      float t2 = fetchDepth(p + ivec2(0, 2));
      float dl = abs((2.0 * l1 - l2) - c0);
      float dr = abs((2.0 * r1 - r2) - c0);
      float db = abs((2.0 * b1 - b2) - c0);
      float dt = abs((2.0 * t1 - t2) - c0);
      vec3 ce = getViewPosition(uv, c0).xyz;
      vec3 dpdx = (dl < dr) ? ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz : -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
      vec3 dpdy = (db < dt) ? ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz : -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
      return normalize(cross(dpdx, dpdy));
    }

    vec3 getViewNormal(const vec2 uv) {
      #if NORMAL_VECTOR_TYPE == 2
        return normalize(textureLod(tNormal, uv, 0.).rgb);
      #elif NORMAL_VECTOR_TYPE == 1
        return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
      #else
        return computeNormalFromDepth(uv);
      #endif
    }

    vec3 getSceneUvAndDepth(vec3 sampleViewPos) {
      vec4 sampleClipPos = cameraProjectionMatrix * vec4(sampleViewPos, 1.);
      vec2 sampleUv = sampleClipPos.xy / sampleClipPos.w * 0.5 + 0.5;
      float sampleSceneDepth = getDepth(sampleUv);
      return vec3(sampleUv, sampleSceneDepth);
    }

    void main() {
      float depth = getDepth(vUv.xy);
      if (depth >= 1.0) {
        discard;
        return;
      }
      vec3 viewPos = getViewPosition(vUv, depth);
      vec3 viewNormal = getViewNormal(vUv);

      float radiusToUse = radius;
      float distanceFalloffToUse = thickness;
      #if SCREEN_SPACE_RADIUS == 1
        float radiusScale = getViewPosition(vec2(0.5 + float(SCREEN_SPACE_RADIUS_SCALE) / resolution.x, 0.0), depth).x;
        radiusToUse *= radiusScale;
        distanceFalloffToUse *= radiusScale;
      #endif

      #if SCENE_CLIP_BOX == 1
        vec3 worldPos = (cameraWorldMatrix * vec4(viewPos, 1.0)).xyz;
        float boxDistance = length(max(vec3(0.0), max(sceneBoxMin - worldPos, worldPos - sceneBoxMax)));
        if (boxDistance > radiusToUse) {
          discard;
          return;
        }
      #endif

      vec2 noiseResolution = vec2(textureSize(tNoise, 0));
      vec2 noiseUv = vUv * resolution / noiseResolution;
      vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
      vec3 randomVec = noiseTexel.xyz * 2.0 - 1.0;
      vec3 tangent = normalize(vec3(randomVec.xy, 0.));
      vec3 bitangent = vec3(-tangent.y, tangent.x, 0.);
      mat3 kernelMatrix = mat3(tangent, bitangent, vec3(0., 0., 1.));

      const int DIRECTIONS = SAMPLES < 30 ? 3 : 5;
      const int STEPS = (SAMPLES + DIRECTIONS - 1) / DIRECTIONS;
      float ao = 0.0;
      for (int i = 0; i < DIRECTIONS; ++i) {

        float angle = float(i) / float(DIRECTIONS) * PI;
        vec4 sampleDir = vec4(cos(angle), sin(angle), 0., 0.5 + 0.5 * noiseTexel.w);
        sampleDir.xyz = normalize(kernelMatrix * sampleDir.xyz);

        vec3 viewDir = normalize(-viewPos.xyz);
        vec3 sliceBitangent = normalize(cross(sampleDir.xyz, viewDir));
        vec3 sliceTangent = cross(sliceBitangent, viewDir);
        vec3 normalInSlice = normalize(viewNormal - sliceBitangent * dot(viewNormal, sliceBitangent));

        vec3 tangentToNormalInSlice = cross(normalInSlice, sliceBitangent);
        vec2 cosHorizons = vec2(dot(viewDir, tangentToNormalInSlice), dot(viewDir, -tangentToNormalInSlice));

        for (int j = 0; j < STEPS; ++j) {
          vec3 sampleViewOffset = sampleDir.xyz * radiusToUse * sampleDir.w * pow(float(j + 1) / float(STEPS), distanceExponent);

          vec3 sampleSceneUvDepth = getSceneUvAndDepth(viewPos + sampleViewOffset);
          vec3 sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
          vec3 viewDelta = sampleSceneViewPos - viewPos;
          if (abs(viewDelta.z) < thickness) {
            float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
            cosHorizons.x += max(0., (sampleCosHorizon - cosHorizons.x) * mix(1., 2. / float(j + 2), distanceFallOff));
          }

          sampleSceneUvDepth = getSceneUvAndDepth(viewPos - sampleViewOffset);
          sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
          viewDelta = sampleSceneViewPos - viewPos;
          if (abs(viewDelta.z) < thickness) {
            float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
            cosHorizons.y += max(0., (sampleCosHorizon - cosHorizons.y) * mix(1., 2. / float(j + 2), distanceFallOff));
          }
        }

        vec2 sinHorizons = sqrt(1. - cosHorizons * cosHorizons);
        float nx = dot(normalInSlice, sliceTangent);
        float ny = dot(normalInSlice, viewDir);
        float nxb = 1. / 2. * (acos(cosHorizons.y) - acos(cosHorizons.x) + sinHorizons.x * cosHorizons.x - sinHorizons.y * cosHorizons.y);
        float nyb = 1. / 2. * (2. - cosHorizons.x * cosHorizons.x - cosHorizons.y * cosHorizons.y);
        float occlusion = nx * nxb + ny * nyb;
        ao += occlusion;
      }

      ao = clamp(ao / float(DIRECTIONS), 0., 1.);
    #if SCENE_CLIP_BOX == 1
      ao = mix(ao, 1., smoothstep(0., radiusToUse, boxDistance));
    #endif
      ao = pow(ao, scale);

      gl_FragColor = FRAGMENT_OUTPUT;
    }`},Jo={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
    varying vec2 vUv;

    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
    }`,fragmentShader:`
    uniform sampler2D tDepth;
    uniform float cameraNear;
    uniform float cameraFar;
    varying vec2 vUv;

    #include <packing>

    float getLinearDepth( const in vec2 screenPosition ) {
      #if PERSPECTIVE_CAMERA == 1
        float fragCoordZ = texture2D( tDepth, screenPosition ).x;
        float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
        return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
      #else
        return texture2D( tDepth, screenPosition ).x;
      #endif
    }

    void main() {
      float depth = getLinearDepth( vUv );
      gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

    }`},lc={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
    varying vec2 vUv;

    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
    }`,fragmentShader:`
    uniform float intensity;
    uniform sampler2D tDiffuse;
    varying vec2 vUv;

    void main() {
      vec4 texel = texture2D( tDiffuse, vUv );
      gl_FragColor = vec4(mix(vec3(1.), texel.rgb, intensity), texel.a);
    }`};function ap(s=5){let e=Math.floor(s)%2===0?Math.floor(s)+1:Math.floor(s),t=Lv(e),n=t.length,i=new Uint8Array(n*4);for(let o=0;o<n;++o){let a=t[o],l=2*Math.PI*a/n,c=new E(Math.cos(l),Math.sin(l),0).normalize();i[o*4]=(c.x*.5+.5)*255,i[o*4+1]=(c.y*.5+.5)*255,i[o*4+2]=127,i[o*4+3]=255}let r=new fi(i,e,e);return r.wrapS=cn,r.wrapT=cn,r.needsUpdate=!0,r}function Lv(s){let e=Math.floor(s)%2===0?Math.floor(s)+1:Math.floor(s),t=e*e,n=Array(t).fill(0),i=Math.floor(e/2),r=e-1;for(let o=1;o<=t;){if(i===-1&&r===e?(r=e-2,i=0):(r===e&&(r=0),i<0&&(i=e-1)),n[i*e+r]!==0){r-=2,i++;continue}else n[i*e+r]=o++;r++,i--}return n}var $o={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:nu(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new Me},cameraProjectionMatrixInverse:{value:new Ve},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

    varying vec2 vUv;

    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
    }`,fragmentShader:`

    varying vec2 vUv;

    uniform sampler2D tDiffuse;
    uniform sampler2D tNormal;
    uniform sampler2D tDepth;
    uniform sampler2D tNoise;
    uniform vec2 resolution;
    uniform mat4 cameraProjectionMatrixInverse;
    uniform float lumaPhi;
    uniform float depthPhi;
    uniform float normalPhi;
    uniform float radius;
    uniform int index;

    #include <common>
    #include <packing>

    #ifndef SAMPLE_LUMINANCE
    #define SAMPLE_LUMINANCE dot(vec3(0.2125, 0.7154, 0.0721), a)
    #endif

    #ifndef FRAGMENT_OUTPUT
    #define FRAGMENT_OUTPUT vec4(denoised, 1.)
    #endif

    float getLuminance(const in vec3 a) {
      return SAMPLE_LUMINANCE;
    }

    const vec3 poissonDisk[SAMPLES] = SAMPLE_VECTORS;

    vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
      vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
      vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
      return viewSpacePosition.xyz / viewSpacePosition.w;
    }

    float getDepth(const vec2 uv) {
    #if DEPTH_VALUE_SOURCE == 1
      return textureLod(tDepth, uv.xy, 0.0).a;
    #else
      return textureLod(tDepth, uv.xy, 0.0).r;
    #endif
    }

    float fetchDepth(const ivec2 uv) {
      #if DEPTH_VALUE_SOURCE == 1
        return texelFetch(tDepth, uv.xy, 0).a;
      #else
        return texelFetch(tDepth, uv.xy, 0).r;
      #endif
    }

    vec3 computeNormalFromDepth(const vec2 uv) {
      vec2 size = vec2(textureSize(tDepth, 0));
      ivec2 p = ivec2(uv * size);
      float c0 = fetchDepth(p);
      float l2 = fetchDepth(p - ivec2(2, 0));
      float l1 = fetchDepth(p - ivec2(1, 0));
      float r1 = fetchDepth(p + ivec2(1, 0));
      float r2 = fetchDepth(p + ivec2(2, 0));
      float b2 = fetchDepth(p - ivec2(0, 2));
      float b1 = fetchDepth(p - ivec2(0, 1));
      float t1 = fetchDepth(p + ivec2(0, 1));
      float t2 = fetchDepth(p + ivec2(0, 2));
      float dl = abs((2.0 * l1 - l2) - c0);
      float dr = abs((2.0 * r1 - r2) - c0);
      float db = abs((2.0 * b1 - b2) - c0);
      float dt = abs((2.0 * t1 - t2) - c0);
      vec3 ce = getViewPosition(uv, c0).xyz;
      vec3 dpdx = (dl < dr) ?  ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz
                  : -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
      vec3 dpdy = (db < dt) ?  ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz
                  : -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
      return normalize(cross(dpdx, dpdy));
    }

    vec3 getViewNormal(const vec2 uv) {
    #if NORMAL_VECTOR_TYPE == 2
      return normalize(textureLod(tNormal, uv, 0.).rgb);
    #elif NORMAL_VECTOR_TYPE == 1
      return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
    #else
      return computeNormalFromDepth(uv);
    #endif
    }

    void denoiseSample(in vec3 center, in vec3 viewNormal, in vec3 viewPos, in vec2 sampleUv, inout vec3 denoised, inout float totalWeight) {
      vec4 sampleTexel = textureLod(tDiffuse, sampleUv, 0.0);
      float sampleDepth = getDepth(sampleUv);
      vec3 sampleNormal = getViewNormal(sampleUv);
      vec3 neighborColor = sampleTexel.rgb;
      vec3 viewPosSample = getViewPosition(sampleUv, sampleDepth);

      float normalDiff = dot(viewNormal, sampleNormal);
      float normalSimilarity = pow(max(normalDiff, 0.), normalPhi);
      float lumaDiff = abs(getLuminance(neighborColor) - getLuminance(center));
      float lumaSimilarity = max(1.0 - lumaDiff / lumaPhi, 0.0);
      float depthDiff = abs(dot(viewPos - viewPosSample, viewNormal));
      float depthSimilarity = max(1. - depthDiff / depthPhi, 0.);
      float w = lumaSimilarity * depthSimilarity * normalSimilarity;

      denoised += w * neighborColor;
      totalWeight += w;
    }

    void main() {
      float depth = getDepth(vUv.xy);
      vec3 viewNormal = getViewNormal(vUv);
      if (depth == 1. || dot(viewNormal, viewNormal) == 0.) {
        discard;
        return;
      }
      vec4 texel = textureLod(tDiffuse, vUv, 0.0);
      vec3 center = texel.rgb;
      vec3 viewPos = getViewPosition(vUv, depth);

      vec2 noiseResolution = vec2(textureSize(tNoise, 0));
      vec2 noiseUv = vUv * resolution / noiseResolution;
      vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
          vec2 noiseVec = vec2(sin(noiseTexel[index % 4] * 2. * PI), cos(noiseTexel[index % 4] * 2. * PI));
        mat2 rotationMatrix = mat2(noiseVec.x, -noiseVec.y, noiseVec.x, noiseVec.y);

      float totalWeight = 1.0;
      vec3 denoised = texel.rgb;
      for (int i = 0; i < SAMPLES; i++) {
        vec3 sampleDir = poissonDisk[i];
        vec2 offset = rotationMatrix * (sampleDir.xy * (1. + sampleDir.z * (radius - 1.)) / resolution);
        vec2 sampleUv = vUv + offset;
        denoiseSample(center, viewNormal, viewPos, sampleUv, denoised, totalWeight);
      }

      if (totalWeight > 0.) {
        denoised /= totalWeight;
      }
      gl_FragColor = FRAGMENT_OUTPUT;
    }`};function nu(s,e,t){let n=Nv(s,e,t),i="vec3[SAMPLES](";for(let r=0;r<s;r++){let o=n[r];i+=`vec3(${o.x}, ${o.y}, ${o.z})${r<s-1?",":")"}`}return i}function Nv(s,e,t){let n=[];for(let i=0;i<s;i++){let r=2*Math.PI*e*i/s,o=Math.pow(i/(s-1),t);n.push(new E(Math.cos(r),Math.sin(r),o))}return n}var cc=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let n,i,r,o=.5*(Math.sqrt(3)-1),a=(e+t)*o,l=Math.floor(e+a),c=Math.floor(t+a),h=(3-Math.sqrt(3))/6,u=(l+c)*h,f=l-u,d=c-u,m=e-f,x=t-d,g,p;m>x?(g=1,p=0):(g=0,p=1);let w=m-g+h,M=x-p+h,y=m-1+2*h,b=x-1+2*h,P=l&255,C=c&255,D=this.perm[P+this.perm[C]]%12,_=this.perm[P+g+this.perm[C+p]]%12,v=this.perm[P+1+this.perm[C+1]]%12,A=.5-m*m-x*x;A<0?n=0:(A*=A,n=A*A*this._dot(this.grad3[D],m,x));let N=.5-w*w-M*M;N<0?i=0:(N*=N,i=N*N*this._dot(this.grad3[_],w,M));let B=.5-y*y-b*b;return B<0?r=0:(B*=B,r=B*B*this._dot(this.grad3[v],y,b)),70*(n+i+r)}noise3d(e,t,n){let i,r,o,a,c=(e+t+n)*.3333333333333333,h=Math.floor(e+c),u=Math.floor(t+c),f=Math.floor(n+c),d=1/6,m=(h+u+f)*d,x=h-m,g=u-m,p=f-m,w=e-x,M=t-g,y=n-p,b,P,C,D,_,v;w>=M?M>=y?(b=1,P=0,C=0,D=1,_=1,v=0):w>=y?(b=1,P=0,C=0,D=1,_=0,v=1):(b=0,P=0,C=1,D=1,_=0,v=1):M<y?(b=0,P=0,C=1,D=0,_=1,v=1):w<y?(b=0,P=1,C=0,D=0,_=1,v=1):(b=0,P=1,C=0,D=1,_=1,v=0);let A=w-b+d,N=M-P+d,B=y-C+d,z=w-D+2*d,k=M-_+2*d,X=y-v+2*d,te=w-1+3*d,Y=M-1+3*d,ie=y-1+3*d,ae=h&255,fe=u&255,Ue=f&255,Ce=this.perm[ae+this.perm[fe+this.perm[Ue]]]%12,ze=this.perm[ae+b+this.perm[fe+P+this.perm[Ue+C]]]%12,Ge=this.perm[ae+D+this.perm[fe+_+this.perm[Ue+v]]]%12,se=this.perm[ae+1+this.perm[fe+1+this.perm[Ue+1]]]%12,le=.6-w*w-M*M-y*y;le<0?i=0:(le*=le,i=le*le*this._dot3(this.grad3[Ce],w,M,y));let _e=.6-A*A-N*N-B*B;_e<0?r=0:(_e*=_e,r=_e*_e*this._dot3(this.grad3[ze],A,N,B));let be=.6-z*z-k*k-X*X;be<0?o=0:(be*=be,o=be*be*this._dot3(this.grad3[Ge],z,k,X));let we=.6-te*te-Y*Y-ie*ie;return we<0?a=0:(we*=we,a=we*we*this._dot3(this.grad3[se],te,Y,ie)),32*(i+r+o+a)}noise4d(e,t,n,i){let r=this.grad4,o=this.simplex,a=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,h,u,f,d,m,x=(e+t+n+i)*l,g=Math.floor(e+x),p=Math.floor(t+x),w=Math.floor(n+x),M=Math.floor(i+x),y=(g+p+w+M)*c,b=g-y,P=p-y,C=w-y,D=M-y,_=e-b,v=t-P,A=n-C,N=i-D,B=_>v?32:0,z=_>A?16:0,k=v>A?8:0,X=_>N?4:0,te=v>N?2:0,Y=A>N?1:0,ie=B+z+k+X+te+Y,ae=o[ie][0]>=3?1:0,fe=o[ie][1]>=3?1:0,Ue=o[ie][2]>=3?1:0,Ce=o[ie][3]>=3?1:0,ze=o[ie][0]>=2?1:0,Ge=o[ie][1]>=2?1:0,se=o[ie][2]>=2?1:0,le=o[ie][3]>=2?1:0,_e=o[ie][0]>=1?1:0,be=o[ie][1]>=1?1:0,we=o[ie][2]>=1?1:0,Ze=o[ie][3]>=1?1:0,et=_-ae+c,O=v-fe+c,Ke=A-Ue+c,ke=N-Ce+c,Oe=_-ze+2*c,Te=v-Ge+2*c,q=A-se+2*c,W=N-le+2*c,ye=_-_e+3*c,Ne=v-be+3*c,Be=A-we+3*c,R=N-Ze+3*c,S=_-1+4*c,j=v-1+4*c,re=A-1+4*c,pe=N-1+4*c,Q=g&255,V=p&255,H=w&255,ne=M&255,ue=a[Q+a[V+a[H+a[ne]]]]%32,$=a[Q+ae+a[V+fe+a[H+Ue+a[ne+Ce]]]]%32,de=a[Q+ze+a[V+Ge+a[H+se+a[ne+le]]]]%32,Ee=a[Q+_e+a[V+be+a[H+we+a[ne+Ze]]]]%32,Se=a[Q+1+a[V+1+a[H+1+a[ne+1]]]]%32,ge=.6-_*_-v*v-A*A-N*N;ge<0?h=0:(ge*=ge,h=ge*ge*this._dot4(r[ue],_,v,A,N));let U=.6-et*et-O*O-Ke*Ke-ke*ke;U<0?u=0:(U*=U,u=U*U*this._dot4(r[$],et,O,Ke,ke));let L=.6-Oe*Oe-Te*Te-q*q-W*W;L<0?f=0:(L*=L,f=L*L*this._dot4(r[de],Oe,Te,q,W));let K=.6-ye*ye-Ne*Ne-Be*Be-R*R;K<0?d=0:(K*=K,d=K*K*this._dot4(r[Ee],ye,Ne,Be,R));let he=.6-S*S-j*j-re*re-pe*pe;return he<0?m=0:(he*=he,m=he*he*this._dot4(r[Se],S,j,re,pe)),27*(h+u+f+d+m)}_dot(e,t,n){return e[0]*t+e[1]*n}_dot3(e,t,n,i){return e[0]*t+e[1]*n+e[2]*i}_dot4(e,t,n,i,r){return e[0]*t+e[1]*n+e[2]*i+e[3]*r}};var Qo=class s extends Rn{constructor(e,t,n=512,i=512,r,o,a){super(),this.width=n,this.height=i,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=ap(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new Lt(this.width,this.height,{type:Xt}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new ct({defines:Object.assign({},Ko.defines),uniforms:Ut.clone(Ko.uniforms),vertexShader:Ko.vertexShader,fragmentShader:Ko.fragmentShader,blending:bt,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Us,this.normalMaterial.blending=bt,this.pdMaterial=new ct({defines:Object.assign({},$o.defines),uniforms:Ut.clone($o.uniforms),vertexShader:$o.vertexShader,fragmentShader:$o.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new ct({defines:Object.assign({},Jo.defines),uniforms:Ut.clone(Jo.uniforms),vertexShader:Jo.vertexShader,fragmentShader:Jo.fragmentShader,blending:bt}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new ct({uniforms:Ut.clone(Un.uniforms),vertexShader:Un.vertexShader,fragmentShader:Un.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Fo,blendDst:Bs,blendEquation:ln,blendSrcAlpha:Oo,blendDstAlpha:Bs,blendEquationAlpha:ln}),this.blendMaterial=new ct({uniforms:Ut.clone(lc.uniforms),vertexShader:lc.vertexShader,fragmentShader:lc.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:wr,blendSrc:Fo,blendDst:Bs,blendEquation:ln,blendSrcAlpha:Oo,blendDstAlpha:Bs,blendEquationAlpha:ln}),this._fsQuad=new ni(null),this._originalClearColor=new Pe,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),o!==void 0&&this.updateGtaoMaterial(o),a!==void 0&&this.updatePdMaterial(a)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new Wi,this.depthTexture.format=vs,this.depthTexture.type=ys,this.normalRenderTarget=new Lt(this.width,this.height,{minFilter:gt,magFilter:gt,type:Xt,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let n=this.normalTexture?1:0,i=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=i,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=i,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=nu(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case s.OUTPUT.Off:break;case s.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=bt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=bt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=bt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=bt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=bt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(e,t,n,i,r){e.getClearColor(this._originalClearColor);let o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,i!=null&&(e.setClearColor(i),e.setClearAlpha(r||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=a,e.setClearColor(this._originalClearColor),e.setClearAlpha(o)}_renderOverride(e,t,n,i,r){e.getClearColor(this._originalClearColor);let o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,i=t.clearColor||i,r=t.clearAlpha||r,i!=null&&(e.setClearColor(i),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=a,e.setClearColor(this._originalClearColor),e.setClearAlpha(o)}_overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){(n.isPoints||n.isLine||n.isLine2)&&n.visible&&(n.visible=!1,t.push(n))})}_restoreVisibility(){let e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}_generateNoise(e=64){let t=new cc,n=e*e*4,i=new Uint8Array(n);for(let o=0;o<e;o++)for(let a=0;a<e;a++){let l=o,c=a;i[(o*e+a)*4]=(t.noise(l,c)*.5+.5)*255,i[(o*e+a)*4+1]=(t.noise(l+e,c)*.5+.5)*255,i[(o*e+a)*4+2]=(t.noise(l,c+e)*.5+.5)*255,i[(o*e+a)*4+3]=(t.noise(l+e,c+e)*.5+.5)*255}let r=new fi(i,e,e,tn,Wn);return r.wrapS=cn,r.wrapT=cn,r.needsUpdate=!0,r}};Qo.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var lp={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Pe(0)},defaultOpacity:{value:0}},vertexShader:`

    varying vec2 vUv;

    void main() {

      vUv = uv;

      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

    }`,fragmentShader:`

    uniform sampler2D tDiffuse;
    uniform vec3 defaultColor;
    uniform float defaultOpacity;
    uniform float luminosityThreshold;
    uniform float smoothWidth;

    varying vec2 vUv;

    void main() {

      vec4 texel = texture2D( tDiffuse, vUv );

      float v = luminance( texel.xyz );

      vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

      float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

      gl_FragColor = mix( outputColor, texel, alpha );

    }`};var Ur=class s extends Rn{constructor(e,t=1,n,i){super(),this.strength=t,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new Me(e.x,e.y):new Me(256,256),this.clearColor=new Pe(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Lt(r,o,{type:Xt}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let u=new Lt(r,o,{type:Xt});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);let f=new Lt(r,o,{type:Xt});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}let a=lp;this.highPassUniforms=Ut.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ct({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Me(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new E(1,1,1),new E(1,1,1),new E(1,1,1),new E(1,1,1),new E(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Ut.clone(Un.uniforms),this.blendMaterial=new ct({uniforms:this.copyUniforms,vertexShader:Un.vertexShader,fragmentShader:Un.fragmentShader,blending:Fs,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Pe,this._oldClearAlpha=1,this._basic=new Rt,this._fsQuad=new ni(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new Me(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new ct({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Me(.5,.5)},direction:{value:new Me(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
        }`,fragmentShader:`#include <common>
        varying vec2 vUv;
        uniform sampler2D colorTexture;
        uniform vec2 invSize;
        uniform vec2 direction;
        uniform float gaussianCoefficients[KERNEL_RADIUS];

        void main() {
          float weightSum = gaussianCoefficients[0];
          vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
          for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
            float x = float(i);
            float w = gaussianCoefficients[i];
            vec2 uvOffset = direction * invSize * x;
            vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
            vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
            diffuseSum += (sample1 + sample2) * w;
            weightSum += 2.0 * w;
          }
          gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
        }`})}_getCompositeMaterial(e){return new ct({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
        }`,fragmentShader:`varying vec2 vUv;
        uniform sampler2D blurTexture1;
        uniform sampler2D blurTexture2;
        uniform sampler2D blurTexture3;
        uniform sampler2D blurTexture4;
        uniform sampler2D blurTexture5;
        uniform float bloomStrength;
        uniform float bloomRadius;
        uniform float bloomFactors[NUM_MIPS];
        uniform vec3 bloomTintColors[NUM_MIPS];

        float lerpBloomFactor(const in float factor) {
          float mirrorFactor = 1.2 - factor;
          return mix(factor, mirrorFactor, bloomRadius);
        }

        void main() {
          gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
            lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
            lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
            lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
            lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
        }`})}};Ur.BlurDirectionX=new Me(1,0);Ur.BlurDirectionY=new Me(0,1);var ea={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
    precision highp float;

    uniform mat4 modelViewMatrix;
    uniform mat4 projectionMatrix;

    attribute vec3 position;
    attribute vec2 uv;

    varying vec2 vUv;

    void main() {

      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

    }`,fragmentShader:`

    precision highp float;

    uniform sampler2D tDiffuse;

    #include <tonemapping_pars_fragment>
    #include <colorspace_pars_fragment>

    varying vec2 vUv;

    void main() {

      gl_FragColor = texture2D( tDiffuse, vUv );

      // tone mapping

      #ifdef LINEAR_TONE_MAPPING

        gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

      #elif defined( REINHARD_TONE_MAPPING )

        gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

      #elif defined( CINEON_TONE_MAPPING )

        gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

      #elif defined( ACES_FILMIC_TONE_MAPPING )

        gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

      #elif defined( AGX_TONE_MAPPING )

        gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

      #elif defined( NEUTRAL_TONE_MAPPING )

        gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

      #elif defined( CUSTOM_TONE_MAPPING )

        gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

      #endif

      // color space

      #ifdef SRGB_TRANSFER

        gl_FragColor = sRGBTransferOETF( gl_FragColor );

      #endif

    }`};var hc=class extends Rn{constructor(){super(),this.uniforms=Ut.clone(ea.uniforms),this.material=new Mo({name:ea.name,uniforms:this.uniforms,vertexShader:ea.vertexShader,fragmentShader:ea.fragmentShader}),this._fsQuad=new ni(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},at.getTransfer(this._outputColorSpace)===wt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===cl?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===hl?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===ul?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Tr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===fl?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===pl?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===dl&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var ta=class s extends Ye{constructor(){let e=s.SkyShader,t=new ct({name:e.name,uniforms:Ut.clone(e.uniforms),vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,side:Wt,depthWrite:!1});super(new un(1,1,1),t),this.isSky=!0}};ta.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new E},up:{value:new E(0,1,0)}},vertexShader:`
    uniform vec3 sunPosition;
    uniform float rayleigh;
    uniform float turbidity;
    uniform float mieCoefficient;
    uniform vec3 up;

    varying vec3 vWorldPosition;
    varying vec3 vSunDirection;
    varying float vSunfade;
    varying vec3 vBetaR;
    varying vec3 vBetaM;
    varying float vSunE;

    // constants for atmospheric scattering
    const float e = 2.71828182845904523536028747135266249775724709369995957;
    const float pi = 3.141592653589793238462643383279502884197169;

    // wavelength of used primaries, according to preetham
    const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
    // this pre-calculation replaces older TotalRayleigh(vec3 lambda) function:
    // (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
    const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

    // mie stuff
    // K coefficient for the primaries
    const float v = 4.0;
    const vec3 K = vec3( 0.686, 0.678, 0.666 );
    // MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
    const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

    // earth shadow hack
    // cutoffAngle = pi / 1.95;
    const float cutoffAngle = 1.6110731556870734;
    const float steepness = 1.5;
    const float EE = 1000.0;

    float sunIntensity( float zenithAngleCos ) {
      zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
      return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
    }

    vec3 totalMie( float T ) {
      float c = ( 0.2 * T ) * 10E-18;
      return 0.434 * c * MieConst;
    }

    void main() {

      vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
      vWorldPosition = worldPosition.xyz;

      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
      gl_Position.z = gl_Position.w; // set z to camera.far

      vSunDirection = normalize( sunPosition );

      vSunE = sunIntensity( dot( vSunDirection, up ) );

      vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

      float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

      // extinction (absorption + out scattering)
      // rayleigh coefficients
      vBetaR = totalRayleigh * rayleighCoefficient;

      // mie coefficients
      vBetaM = totalMie( turbidity ) * mieCoefficient;

    }`,fragmentShader:`
    varying vec3 vWorldPosition;
    varying vec3 vSunDirection;
    varying float vSunfade;
    varying vec3 vBetaR;
    varying vec3 vBetaM;
    varying float vSunE;

    uniform float mieDirectionalG;
    uniform vec3 up;

    // constants for atmospheric scattering
    const float pi = 3.141592653589793238462643383279502884197169;

    const float n = 1.0003; // refractive index of air
    const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

    // optical length at zenith for molecules
    const float rayleighZenithLength = 8.4E3;
    const float mieZenithLength = 1.25E3;
    // 66 arc seconds -> degrees, and the cosine of that
    const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

    // 3.0 / ( 16.0 * pi )
    const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
    // 1.0 / ( 4.0 * pi )
    const float ONE_OVER_FOURPI = 0.07957747154594767;

    float rayleighPhase( float cosTheta ) {
      return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
    }

    float hgPhase( float cosTheta, float g ) {
      float g2 = pow( g, 2.0 );
      float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
      return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
    }

    void main() {

      vec3 direction = normalize( vWorldPosition - cameraPosition );

      // optical length
      // cutoff angle at 90 to avoid singularity in next formula.
      float zenithAngle = acos( max( 0.0, dot( up, direction ) ) );
      float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
      float sR = rayleighZenithLength * inverse;
      float sM = mieZenithLength * inverse;

      // combined extinction factor
      vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

      // in scattering
      float cosTheta = dot( direction, vSunDirection );

      float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
      vec3 betaRTheta = vBetaR * rPhase;

      float mPhase = hgPhase( cosTheta, mieDirectionalG );
      vec3 betaMTheta = vBetaM * mPhase;

      vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
      Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - dot( up, vSunDirection ), 5.0 ), 0.0, 1.0 ) );

      // nightsky
      float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
      float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
      vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
      vec3 L0 = vec3( 0.1 ) * Fex;

      // composition + solar disc
      float sundisk = smoothstep( sunAngularDiameterCos, sunAngularDiameterCos + 0.00002, cosTheta );
      L0 += ( vSunE * 19000.0 * Fex ) * sundisk;

      vec3 texColor = ( Lin + L0 ) * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

      vec3 retColor = pow( texColor, vec3( 1.0 / ( 1.2 + ( 1.2 * vSunfade ) ) ) );

      gl_FragColor = vec4( retColor, 1.0 );

      #include <tonemapping_fragment>
      #include <colorspace_fragment>

    }`};var Uv=400/100;function cp({renderer:s,scene:e,camera:t}){let n=null,i=null,r=null,o=null,a=[];function l(){if(n)return;n=new ac(s),i=new Zo({renderer:s,scene:e,camera:t,width:800,height:600,selects:[]}),i.resolutionScale=.5,i.opacity=0,i.maxDistance=26,i.thickness=.16,i.infiniteThick=!1,i.bouncing=!1,i.fresnel=!0,i.distanceAttenuation=!0,r=new Qo(e,t,400,300),r.setGBuffer(i.beautyRenderTarget.depthTexture,i.normalRenderTarget.texture),r.blendIntensity=1.85,r.updateGtaoMaterial({radius:1.2,thickness:1.1,distanceExponent:1.6,distanceFallOff:.65,samples:8,screenSpaceRadius:!1}),r.updatePdMaterial({samples:8,radius:5});let v=i._renderOverride.bind(i);i._renderOverride=(...z)=>{let k=[];e.traverse(X=>{X.visible&&(X.name==="studio-volumetric-sunlight"||X.isPoints||X.isLine)&&(k.push(X),X.visible=!1)});try{return v(...z)}finally{k.forEach(X=>X.visible=!0)}},o=new _s({uniforms:{tDiffuse:{value:null},tDepth:{value:i.beautyRenderTarget.depthTexture},inverseProjection:{value:t.projectionMatrixInverse},cameraWorld:{value:t.matrixWorld},sunDepth:{value:null},sunMatrix:{value:new Ve},shadowReady:{value:0},worldScale:{value:Uv},sunStrength:{value:1},sunDirection:{value:new E(-.78,.32,.56).normalize()}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:`#include <packing>
 uniform sampler2D tDiffuse,tDepth,sunDepth;uniform mat4 inverseProjection,cameraWorld,sunMatrix;uniform float shadowReady,worldScale,sunStrength;uniform vec3 sunDirection;varying vec2 vUv;
 void main(){
  vec4 pixel=texture2D(tDiffuse,vUv),clip=vec4(vUv*2.0-1.0,texture2D(tDepth,vUv).x*2.0-1.0,1.0),view=inverseProjection*clip;view/=view.w;
  vec3 start=(cameraWorld*vec4(0.,0.,0.,1.)).xyz,end=(cameraWorld*view).xyz,ray=end-start;float L=min(length(ray),90.0*worldScale),amount=0.0,transmittance=1.0;ray=normalize(ray);
  float jitter=fract(sin(dot(gl_FragCoord.xy,vec2(12.9898,78.233)))*43758.5453);
  float mu=dot(ray,sunDirection),phase=.32+.90*pow(max(0.,mu),5.);
  for(int i=0;i<24;i++){float t=(float(i)+jitter)/24.0;vec3 p=start+ray*L*t;vec4 q=sunMatrix*vec4(p,1.);q.xyz/=q.w;float lit=1.;
   if(shadowReady>.5&&q.x>0.&&q.x<1.&&q.y>0.&&q.y<1.&&q.z>0.&&q.z<1.)lit=step(q.z-.00065,unpackRGBAToDepth(texture2D(sunDepth,q.xy)));
   float density=.012/worldScale*exp(-max(0.,p.y)*.024/worldScale),scatter=1.-exp(-density*L/24.);
   amount+=lit*scatter*transmittance;transmittance*=1.-scatter;
  }
  vec3 haze=vec3(1.0,.76,.40)*amount*phase*1.5;
  pixel.rgb*=mix(.82,1.,transmittance);
  gl_FragColor=vec4(pixel.rgb+haze*sunStrength,pixel.a);
 }`});let A=new _s({uniforms:{tDiffuse:{value:null}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:"uniform sampler2D tDiffuse;varying vec2 vUv;void main(){vec4 p=texture2D(tDiffuse,vUv);if(!(p.r>=0.))p.r=0.;if(!(p.g>=0.))p.g=0.;if(!(p.b>=0.))p.b=0.;gl_FragColor=vec4(min(p.rgb,vec3(64.)),1.);}"}),N=new Ur(new Me(800,600),.16,.35,3.8),B=new _s({uniforms:{tDiffuse:{value:null}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:"uniform sampler2D tDiffuse;varying vec2 vUv;void main(){vec4 p=texture2D(tDiffuse,vUv);float y=dot(p.rgb,vec3(.2126,.7152,.0722));vec3 c=max(vec3(0.),vec3(y)+(p.rgb-vec3(y))*1.13);c*=mix(.53,1.18,smoothstep(.025,1.1,y));gl_FragColor=vec4(c,p.a);}"});n.addPass(i),n.addPass(r),n.addPass(o),n.addPass(A),n.addPass(N),n.addPass(B),n.addPass(new hc),i.selects=a,_()}let c=new Sn,h=new ta;h.scale.setScalar(500),c.add(h),Object.assign(h.material.uniforms.turbidity,{value:2}),Object.assign(h.material.uniforms.rayleigh,{value:1.8}),h.material.uniforms.mieCoefficient.value=.003,h.material.uniforms.sunPosition.value.set(-.78,.32,.56);let u=new Qi(s),f=u.fromScene(c,.04);u.dispose(),h.geometry.dispose(),h.material.dispose();let d=e.environment;e.environment=f.texture,e.environmentIntensity=.24;let m=new vr(128,{type:Xt,generateMipmaps:!0,minFilter:pn}),x=new yr(.1,200,m),g=null,p=null,w=null,M=0,y=0,b=!1,P=0,C=0;function D(){if(!w)return;let v=w;w=null;let A=[];v.group.traverse(X=>{X.isMesh&&X.userData.road&&(A.push(X),X.visible=!1)});let N=e.getObjectByName("studio-volumetric-sunlight"),B=N?.visible;N&&(N.visible=!1);let z=s.getRenderTarget(),k=s.shadowMap.autoUpdate;try{x.position.set(0,Math.max(2,(v.bounds.min.y+v.bounds.max.y)*.3),0),s.shadowMap.autoUpdate=!1,x.update(s,e);let X=new Qi(s),te=X.fromCubemap(m.texture);X.dispose(),p?.dispose(),p=te;for(let Y of A)Y.material.envMap=p.texture,Y.material.envMapIntensity=1.25,Y.material.needsUpdate=!0;M++}finally{A.forEach(X=>X.visible=!0),N&&(N.visible=B),s.setRenderTarget(z),s.shadowMap.autoUpdate=k}}function _(){n.setPixelRatio(1),n.setSize(P||800,C||600),i.ssrMaterial.defines.MAX_STEP=Math.min(192,i.ssrMaterial.defines.MAX_STEP),i.ssrMaterial.needsUpdate=!0,r.setSize(Math.ceil((P||800)*.5),Math.ceil((C||600)*.5))}return{setLighting:v=>{e.environmentIntensity=.025+.215*v.daylight},updateSpace:(v,A)=>{let N=[];v&&A&&v.group.traverse(B=>{B.isMesh&&B.userData.road&&B.material.metalness>.8&&N.push(B)}),a=N,i&&(i.selects=N),N.length&&v&&A&&v!==g&&(g=v,w=v)},setSize:(v,A)=>{let N=Math.min(1,1400/Math.max(v,A)),B=Math.max(1,Math.round(v*N)),z=Math.max(1,Math.round(A*N));B===P&&z===C||(P=B,C=z,n&&_())},render:(v,A)=>{if(b=!!v,!v){s.render(e,A);return}l(),D(),i.ssrMaterial.uniforms.cameraProjectionMatrix.value.copy(t.projectionMatrix),i.ssrMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(t.projectionMatrixInverse),o.uniforms.inverseProjection.value.copy(t.projectionMatrixInverse),o.uniforms.cameraWorld.value.copy(t.matrixWorld);let N=e.getObjectByName("gallery-sunlight"),B=!!N?.shadow.map;return o.uniforms.sunStrength.value=(N?.intensity||0)/9,N?.shadow.map&&(o.uniforms.sunDirection.value.copy(N.position).sub(N.target.position).normalize(),o.uniforms.sunDepth.value=N.shadow.map.texture,o.uniforms.sunMatrix.value=N.shadow.matrix,o.uniforms.shadowReady.value=1),n.render(),y++,!B&&!!N?.shadow.map},state:()=>({enabled:b,passes:["screen-space-reflection","contact-occlusion","shadow-raymarched-scattering","bloom","colour-grade","HDR-output"],width:P,height:C,reflectionScale:.5,allocated:!!n,mirrorMeshes:a.length,environmentCaptures:M,frames:y}),dispose:()=>{if(n){for(let v of n.passes)v.dispose?.();n.dispose()}m.dispose(),p?.dispose(),f.dispose(),e.environment=d}}}var uc=(s,e,t)=>Math.max(e,Math.min(t,s)),Or=Math.PI/180;function na(s=8){let e=(uc(s,0,24)-12)*15*Or,t=36.17*Or;return{time:uc(s,0,24),azimuth:(Math.atan2(Math.sin(e),Math.cos(e)*Math.sin(t))/Or+180+360)%360,elevation:Math.asin(Math.cos(t)*Math.cos(e))/Or}}function iu(s={}){let e=na(s.time),t=uc(Number.isFinite(s.azimuth)?s.azimuth:e.azimuth,0,360),n=uc(Number.isFinite(s.elevation)?s.elevation:e.elevation,-90,85),i=mn.smoothstep(n,-6,12),r=1-mn.smoothstep(n,4,48),o=t*Or,a=n*Or;return{...e,azimuth:t,elevation:n,daylight:i,intensity:i*(6+3*Math.sin(Math.max(0,a))),colour:new Pe(16773596).lerp(new Pe(16761724),r),direction:new E(Math.sin(o)*Math.cos(a),Math.sin(a),Math.cos(o)*Math.cos(a))}}function hp({scene:s,skylight:e,renderPipeline:t,invalidate:n}){let i=v=>document.getElementById(v),r=i("walk-lighting"),o=i("walk-lighting-panel"),a=i("walk-light-reset"),l=i("walk-light-time"),c=i("walk-light-direction"),h=i("walk-light-elevation"),u="learning-vegas-sun-v1",f=na(8),d="axonometric",m=!1,x=0,g=!1;try{let v=JSON.parse(localStorage.getItem(u));v&&["time","azimuth","elevation"].every(A=>Number.isFinite(v[A]))&&(f={time:Math.max(0,Math.min(24,v.time)),azimuth:Math.max(0,Math.min(360,v.azimuth)),elevation:Math.max(-90,Math.min(85,v.elevation))})}catch{}function p(){r.hidden=d!=="room",o.hidden=d!=="room"||!m,r.setAttribute("aria-pressed",String(!o.hidden)),l.value=String(f.time),c.value=String(f.azimuth),h.value=String(Math.max(-90,f.elevation));let v=Math.round(f.time*60);i("walk-light-time-value").textContent=String(Math.floor(v/60)).padStart(2,"0")+":"+String(v%60).padStart(2,"0"),i("walk-light-direction-value").textContent=Math.round(f.azimuth)+"\xB0",i("walk-light-elevation-value").textContent=Math.round(f.elevation)+"\xB0"}function w(){if(x=0,g)return;let v=e.setLighting(f);t.setLighting(v);let A=s.children.find(N=>N.isHemisphereLight);if(A&&(A.intensity=.035+.045*v.daylight),d==="room"){let N=new Pe(2568251).lerp(new Pe(15789543),v.daylight);s.background.copy(N),s.fog&&s.fog.color.copy(N)}n()}function M(v){Number.isFinite(v.time)&&(f=na(v.time));for(let A of["azimuth","elevation"])Number.isFinite(v[A])&&(f[A]=Math.max(A==="azimuth"?0:-90,Math.min(A==="azimuth"?360:85,v[A])));p(),x||(x=requestAnimationFrame(w));try{localStorage.setItem(u,JSON.stringify(f))}catch{}}let y=()=>{m=!m,p()},b=()=>M(na(8)),P=()=>M({time:Number(l.value)}),C=()=>M({azimuth:Number(c.value)}),D=()=>M({elevation:Number(h.value)}),_=v=>v.stopPropagation();return r.addEventListener("click",y),a.addEventListener("click",b),l.addEventListener("input",P),c.addEventListener("input",C),h.addEventListener("input",D),o.addEventListener("pointerdown",_),o.addEventListener("wheel",_),o.addEventListener("keydown",_),w(),p(),{set:M,setViewMode:v=>{d=v,p(),w()},state:()=>({...f,open:!o.hidden,daylight:e.state().lighting.daylight}),dispose:()=>{g=!0,x&&cancelAnimationFrame(x),r.removeEventListener("click",y),a.removeEventListener("click",b),l.removeEventListener("input",P),c.removeEventListener("input",C),h.removeEventListener("input",D),o.removeEventListener("pointerdown",_),o.removeEventListener("wheel",_),o.removeEventListener("keydown",_)}}}function up({scene:s,sun:e}){let t=new pt;t.name="studio-volumetric-sunlight",s.add(t);let n=[],i=[],r=new ds({color:16773589,size:.045,transparent:!0,opacity:.12,depthWrite:!1}),o=30;function a(l){o=l,t.children.forEach(d=>d.geometry.dispose()),i.forEach(d=>d.dispose()),i.length=0,t.clear(),n.length=0;let c=[],h=e.target.position.clone().sub(e.position).normalize(),u=[[-2,l-.5,0],[6,l-.5,0],[-2,l-.5,8],[6,l-.5,8],...[-5,5,15].map(d=>[19.8,l-8,d]),...[-5,5,15].map(d=>[d,l-8,19.8])];if(h.y>=-.02||e.intensity<.01)return;for(let d of u){let m=new E(...d),x=m.y/-h.y,g=m.clone().addScaledVector(h,x),p=new go(.35,1.5,x,18,1,!0),w={sunDepth:{value:null},sunMatrix:{value:e.shadow.matrix},beamDirection:{value:h},shadowReady:{value:0}},M=new ct({uniforms:w,transparent:!0,depthWrite:!1,side:xt,blending:Fs,vertexShader:"varying vec3 beamPosition;varying vec3 beamNormal;varying float alongBeam;void main(){vec4 p=modelMatrix*vec4(position,1.0);beamPosition=p.xyz;beamNormal=normalize(mat3(modelMatrix)*normal);alongBeam=uv.y;gl_Position=projectionMatrix*viewMatrix*p;}",fragmentShader:`#include <packing>
 uniform sampler2D sunDepth;uniform mat4 sunMatrix;uniform float shadowReady;uniform vec3 beamDirection;varying vec3 beamPosition;varying vec3 beamNormal;varying float alongBeam;
 void main(){vec4 q=sunMatrix*vec4(beamPosition,1.0);q.xyz/=q.w;float light=1.0;if(shadowReady>.5&&q.x>0.0&&q.y>0.0&&q.x<1.0&&q.y<1.0){float depth=unpackRGBAToDepth(texture2D(sunDepth,q.xy));light=step(q.z-.0015,depth);}vec3 view=normalize(cameraPosition-beamPosition);float face=pow(abs(dot(view,normalize(beamNormal))),1.7),forward=.30+.70*pow(abs(dot(view,beamDirection)),2.0),fade=pow(max(0.0,sin(3.14159265*alongBeam)),.6);vec3 colour=vec3(1.0,.78,.43);gl_FragColor=vec4(colour,light*face*forward*fade*.22);
 #include <colorspace_fragment>
 }`});i.push(M);let y=new Ye(p,M);y.position.copy(m).add(g).multiplyScalar(.5),y.quaternion.setFromUnitVectors(new E(0,1,0),h.clone().negate()),y.onBeforeRender=()=>{e.shadow.map&&(w.sunDepth.value=e.shadow.map.texture,w.shadowReady.value=1)},t.add(y),n.push(y);for(let b=0;b<24;b++){let P=(b+.5)/24,C=m.clone().lerp(g,P);C.x+=Math.sin(b*17.1)*(.35+P),C.z+=Math.cos(b*11.3)*(.35+P),c.push(C.x,C.y,C.z)}}let f=new vt;f.setAttribute("position",new mt(c,3)),t.add(new Ls(f,r))}return{setHeight:a,setVisible:l=>t.visible=!!l,state:()=>({beams:n.length,visible:t.visible,height:o,shadowMasked:!0,dustParticles:n.length*24}),dispose:()=>{s.remove(t),t.children.forEach(l=>l.geometry.dispose()),i.forEach(l=>l.dispose()),r.dispose()}}}var dc=400/100;function dp({scene:s,renderer:e,height:t,floorMaterial:n,openAtmosphere:i=!1}){let r=new pt;r.name="steel-glass-skylight",s.add(r);let o=new jt({color:6252656,roughness:.48,metalness:.65}),a=new Zt({color:15200756,roughness:.09,metalness:.02,transparent:!0,opacity:.18,depthWrite:!1,clearcoat:1,clearcoatRoughness:.06,side:xt}),l=new Ye(new en(40,40),a);l.name="skylight-glazing",l.rotation.x=-Math.PI/2,l.position.y=.12,r.add(l);let c=[];for(let M=-20;M<=20;M+=4)for(let y of[!0,!1]){let b=new Ye(new un(y?40:.16,.18,y?.16:40),o);b.position.set(y?0:M,0,y?M:0),b.name="skylight-steel-beam",b.castShadow=!0,b.receiveShadow=!0,r.add(b),c.push(b)}let h=new pi(16767136,9);h.name="gallery-sunlight",h.castShadow=!0,h.shadow.mapSize.set(2048,2048),Object.assign(h.shadow.camera,{left:-110,right:110,top:110,bottom:-110,near:.1,far:380*dc}),h.shadow.normalBias=.025*dc,h.shadow.bias=-15e-5,h.shadow.radius=1.1,h.target.position.set(0,0,0),s.add(h,h.target);let u=up({scene:s,sun:h}),f=!0,d=t,m=iu({time:8});function x(){h.position.copy(m.direction).multiplyScalar(Math.max(180*dc,d*2+100)),h.color.copy(m.colour),h.intensity=m.intensity,u.setHeight(d),h.shadow.camera.updateProjectionMatrix(),e.shadowMap.needsUpdate=!0}function g(M){d=M,r.position.y=M-.15,x()}function p(M){return m=iu(M),x(),m}function w(M){f=!!M,r.visible=f&&!i,u.setVisible(f),h.castShadow=f,e.shadowMap.enabled=f,e.shadowMap.needsUpdate=!0}return g(t),{setHeight:g,setLighting:p,setRoomMode:w,updateCanopy:(M,y)=>{if(M&&y){let b=Math.max(25,Math.min(110*dc,M.bounds.getSize(new E).length()*.7+10));Object.assign(h.shadow.camera,{left:-b,right:b,top:b,bottom:-b}),h.shadow.camera.updateProjectionMatrix(),e.shadowMap.needsUpdate=!0}},state:()=>({lighting:{time:m.time,azimuth:m.azimuth,elevation:m.elevation,daylight:m.daylight,intensity:h.intensity,sunPosition:h.position.toArray()},visible:r.visible,glass:!i,steelBeams:i?0:c.length,height:r.position.y+.15,shadowCasting:f&&h.castShadow,shadowResolution:2048,colouredLight:{active:!1,ordinaryShadows:!0},volumetric:u.state()}),dispose:()=>{u.dispose(),s.remove(r,h,h.target),r.children.forEach(M=>M.geometry.dispose()),o.dispose(),a.dispose(),h.shadow.map?.dispose()}}}var fp={POSITION:["byte","byte normalized","unsigned byte","unsigned byte normalized","short","short normalized","unsigned short","unsigned short normalized"],NORMAL:["byte normalized","short normalized"],TANGENT:["byte normalized","short normalized"],TEXCOORD:["byte","byte normalized","unsigned byte","short","short normalized","unsigned short"]},Ms=class{constructor(){this.textureUtils=null,this.pluginCallbacks=[],this.register(function(e){return new au(e)}),this.register(function(e){return new lu(e)}),this.register(function(e){return new du(e)}),this.register(function(e){return new fu(e)}),this.register(function(e){return new pu(e)}),this.register(function(e){return new mu(e)}),this.register(function(e){return new cu(e)}),this.register(function(e){return new hu(e)}),this.register(function(e){return new uu(e)}),this.register(function(e){return new gu(e)}),this.register(function(e){return new xu(e)}),this.register(function(e){return new yu(e)}),this.register(function(e){return new vu(e)}),this.register(function(e){return new _u(e)})}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}setTextureUtils(e){return this.textureUtils=e,this}parse(e,t,n,i){let r=new ou,o=[];for(let a=0,l=this.pluginCallbacks.length;a<l;a++)o.push(this.pluginCallbacks[a](r));r.setPlugins(o),r.setTextureUtils(this.textureUtils),r.writeAsync(e,t,i).catch(n)}parseAsync(e,t){let n=this;return new Promise(function(i,r){n.parse(e,i,r,t)})}},ut={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,BYTE:5120,UNSIGNED_BYTE:5121,SHORT:5122,UNSIGNED_SHORT:5123,INT:5124,UNSIGNED_INT:5125,FLOAT:5126,ARRAY_BUFFER:34962,ELEMENT_ARRAY_BUFFER:34963,NEAREST:9728,LINEAR:9729,NEAREST_MIPMAP_NEAREST:9984,LINEAR_MIPMAP_NEAREST:9985,NEAREST_MIPMAP_LINEAR:9986,LINEAR_MIPMAP_LINEAR:9987,CLAMP_TO_EDGE:33071,MIRRORED_REPEAT:33648,REPEAT:10497},su="KHR_mesh_quantization",qn={};qn[gt]=ut.NEAREST;qn[Ar]=ut.NEAREST_MIPMAP_NEAREST;qn[$i]=ut.NEAREST_MIPMAP_LINEAR;qn[Jt]=ut.LINEAR;qn[ms]=ut.LINEAR_MIPMAP_NEAREST;qn[pn]=ut.LINEAR_MIPMAP_LINEAR;qn[Jn]=ut.CLAMP_TO_EDGE;qn[cn]=ut.REPEAT;qn[as]=ut.MIRRORED_REPEAT;var pp={scale:"scale",position:"translation",quaternion:"rotation",morphTargetInfluences:"weights"},Ov=new Pe,mp=12,Fv=1179937895,Bv=2,gp=8,zv=1313821514,kv=5130562;function ia(s,e){return s.length===e.length&&s.every(function(t,n){return t===e[n]})}function Hv(s){return new TextEncoder().encode(s).buffer}function Vv(s){return ia(s.elements,[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}function Gv(s,e,t){let n={min:new Array(s.itemSize).fill(Number.POSITIVE_INFINITY),max:new Array(s.itemSize).fill(Number.NEGATIVE_INFINITY)};for(let i=e;i<e+t;i++)for(let r=0;r<s.itemSize;r++){let o;s.itemSize>4?o=s.array[i*s.itemSize+r]:(r===0?o=s.getX(i):r===1?o=s.getY(i):r===2?o=s.getZ(i):r===3&&(o=s.getW(i)),s.normalized===!0&&(o=mn.normalize(o,s.array))),n.min[r]=Math.min(n.min[r],o),n.max[r]=Math.max(n.max[r],o)}return n}function yp(s){return Math.ceil(s/4)*4}function ru(s,e=0){let t=yp(s.byteLength);if(t!==s.byteLength){let n=new Uint8Array(t);if(n.set(new Uint8Array(s)),e!==0)for(let i=s.byteLength;i<t;i++)n[i]=e;return n.buffer}return s}function xp(){return typeof document>"u"&&typeof OffscreenCanvas<"u"?new OffscreenCanvas(1,1):document.createElement("canvas")}function Wv(s,e){if(typeof OffscreenCanvas<"u"&&s instanceof OffscreenCanvas){let t;return e==="image/jpeg"?t=.92:e==="image/webp"&&(t=.8),s.convertToBlob({type:e,quality:t})}else return new Promise(t=>s.toBlob(t,e))}var ou=class{constructor(){this.plugins=[],this.options={},this.pending=[],this.buffers=[],this.byteOffset=0,this.buffers=[],this.nodeMap=new Map,this.skins=[],this.extensionsUsed={},this.extensionsRequired={},this.uids=new Map,this.uid=0,this.json={asset:{version:"2.0",generator:"THREE.GLTFExporter r180"}},this.cache={meshes:new Map,attributes:new Map,attributesNormalized:new Map,materials:new Map,textures:new Map,images:new Map},this.textureUtils=null}setPlugins(e){this.plugins=e}setTextureUtils(e){this.textureUtils=e}async writeAsync(e,t,n={}){this.options=Object.assign({binary:!1,trs:!1,onlyVisible:!0,maxTextureSize:1/0,animations:[],includeCustomExtensions:!1},n),this.options.animations.length>0&&(this.options.trs=!0),await this.processInputAsync(e),await Promise.all(this.pending);let i=this,r=i.buffers,o=i.json;n=i.options;let a=i.extensionsUsed,l=i.extensionsRequired,c=new Blob(r,{type:"application/octet-stream"}),h=Object.keys(a),u=Object.keys(l);if(h.length>0&&(o.extensionsUsed=h),u.length>0&&(o.extensionsRequired=u),o.buffers&&o.buffers.length>0&&(o.buffers[0].byteLength=c.size),n.binary===!0){let f=new FileReader;f.readAsArrayBuffer(c),f.onloadend=function(){let d=ru(f.result),m=new DataView(new ArrayBuffer(gp));m.setUint32(0,d.byteLength,!0),m.setUint32(4,kv,!0);let x=ru(Hv(JSON.stringify(o)),32),g=new DataView(new ArrayBuffer(gp));g.setUint32(0,x.byteLength,!0),g.setUint32(4,zv,!0);let p=new ArrayBuffer(mp),w=new DataView(p);w.setUint32(0,Fv,!0),w.setUint32(4,Bv,!0);let M=mp+g.byteLength+x.byteLength+m.byteLength+d.byteLength;w.setUint32(8,M,!0);let y=new Blob([p,g,x,m,d],{type:"application/octet-stream"}),b=new FileReader;b.readAsArrayBuffer(y),b.onloadend=function(){t(b.result)}}}else if(o.buffers&&o.buffers.length>0){let f=new FileReader;f.readAsDataURL(c),f.onloadend=function(){let d=f.result;o.buffers[0].uri=d,t(o)}}else t(o)}serializeUserData(e,t){if(Object.keys(e.userData).length===0)return;let n=this.options,i=this.extensionsUsed;try{let r=JSON.parse(JSON.stringify(e.userData));if(n.includeCustomExtensions&&r.gltfExtensions){t.extensions===void 0&&(t.extensions={});for(let o in r.gltfExtensions)t.extensions[o]=r.gltfExtensions[o],i[o]=!0;delete r.gltfExtensions}Object.keys(r).length>0&&(t.extras=r)}catch(r){console.warn("THREE.GLTFExporter: userData of '"+e.name+"' won't be serialized because of JSON.stringify error - "+r.message)}}getUID(e,t=!1){if(this.uids.has(e)===!1){let i=new Map;i.set(!0,this.uid++),i.set(!1,this.uid++),this.uids.set(e,i)}return this.uids.get(e).get(t)}isNormalizedNormalAttribute(e){if(this.cache.attributesNormalized.has(e))return!1;let n=new E;for(let i=0,r=e.count;i<r;i++)if(Math.abs(n.fromBufferAttribute(e,i).length()-1)>5e-4)return!1;return!0}createNormalizedNormalAttribute(e){let t=this.cache;if(t.attributesNormalized.has(e))return t.attributesNormalized.get(e);let n=e.clone(),i=new E;for(let r=0,o=n.count;r<o;r++)i.fromBufferAttribute(n,r),i.x===0&&i.y===0&&i.z===0?i.setX(1):i.normalize(),n.setXYZ(r,i.x,i.y,i.z);return t.attributesNormalized.set(e,n),n}applyTextureTransform(e,t){let n=!1,i={};(t.offset.x!==0||t.offset.y!==0)&&(i.offset=t.offset.toArray(),n=!0),t.rotation!==0&&(i.rotation=t.rotation,n=!0),(t.repeat.x!==1||t.repeat.y!==1)&&(i.scale=t.repeat.toArray(),n=!0),n&&(e.extensions=e.extensions||{},e.extensions.KHR_texture_transform=i,this.extensionsUsed.KHR_texture_transform=!0)}async buildMetalRoughTextureAsync(e,t){if(e===t)return e;function n(d){return d.colorSpace===Et?function(x){return x<.04045?x*.0773993808:Math.pow(x*.9478672986+.0521327014,2.4)}:function(x){return x}}e instanceof Ns&&(e=await this.decompressTextureAsync(e)),t instanceof Ns&&(t=await this.decompressTextureAsync(t));let i=e?e.image:null,r=t?t.image:null,o=Math.max(i?i.width:0,r?r.width:0),a=Math.max(i?i.height:0,r?r.height:0),l=xp();l.width=o,l.height=a;let c=l.getContext("2d",{willReadFrequently:!0});c.fillStyle="#00ffff",c.fillRect(0,0,o,a);let h=c.getImageData(0,0,o,a);if(i){c.drawImage(i,0,0,o,a);let d=n(e),m=c.getImageData(0,0,o,a).data;for(let x=2;x<m.length;x+=4)h.data[x]=d(m[x]/256)*256}if(r){c.drawImage(r,0,0,o,a);let d=n(t),m=c.getImageData(0,0,o,a).data;for(let x=1;x<m.length;x+=4)h.data[x]=d(m[x]/256)*256}c.putImageData(h,0,0);let f=(e||t).clone();return f.source=new ls(l),f.colorSpace=gi,f.channel=(e||t).channel,e&&t&&e.channel!==t.channel&&console.warn("THREE.GLTFExporter: UV channels for metalnessMap and roughnessMap textures must match."),console.warn("THREE.GLTFExporter: Merged metalnessMap and roughnessMap textures."),f}async decompressTextureAsync(e,t=1/0){if(this.textureUtils===null)throw new Error("THREE.GLTFExporter: setTextureUtils() must be called to process compressed textures.");return await this.textureUtils.decompress(e,t)}processBuffer(e){let t=this.json,n=this.buffers;return t.buffers||(t.buffers=[{byteLength:0}]),n.push(e),0}processBufferView(e,t,n,i,r){let o=this.json;o.bufferViews||(o.bufferViews=[]);let a;switch(t){case ut.BYTE:case ut.UNSIGNED_BYTE:a=1;break;case ut.SHORT:case ut.UNSIGNED_SHORT:a=2;break;default:a=4}let l=e.itemSize*a;r===ut.ARRAY_BUFFER&&(l=Math.ceil(l/4)*4);let c=yp(i*l),h=new DataView(new ArrayBuffer(c)),u=0;for(let m=n;m<n+i;m++){for(let x=0;x<e.itemSize;x++){let g;e.itemSize>4?g=e.array[m*e.itemSize+x]:(x===0?g=e.getX(m):x===1?g=e.getY(m):x===2?g=e.getZ(m):x===3&&(g=e.getW(m)),e.normalized===!0&&(g=mn.normalize(g,e.array))),t===ut.FLOAT?h.setFloat32(u,g,!0):t===ut.INT?h.setInt32(u,g,!0):t===ut.UNSIGNED_INT?h.setUint32(u,g,!0):t===ut.SHORT?h.setInt16(u,g,!0):t===ut.UNSIGNED_SHORT?h.setUint16(u,g,!0):t===ut.BYTE?h.setInt8(u,g):t===ut.UNSIGNED_BYTE&&h.setUint8(u,g),u+=a}u%l!==0&&(u+=l-u%l)}let f={buffer:this.processBuffer(h.buffer),byteOffset:this.byteOffset,byteLength:c};return r!==void 0&&(f.target=r),r===ut.ARRAY_BUFFER&&(f.byteStride=l),this.byteOffset+=c,o.bufferViews.push(f),{id:o.bufferViews.length-1,byteLength:0}}processBufferViewImage(e){let t=this,n=t.json;return n.bufferViews||(n.bufferViews=[]),new Promise(function(i){let r=new FileReader;r.readAsArrayBuffer(e),r.onloadend=function(){let o=ru(r.result),a={buffer:t.processBuffer(o),byteOffset:t.byteOffset,byteLength:o.byteLength};t.byteOffset+=o.byteLength,i(n.bufferViews.push(a)-1)}})}processAccessor(e,t,n,i){let r=this.json,o={1:"SCALAR",2:"VEC2",3:"VEC3",4:"VEC4",9:"MAT3",16:"MAT4"},a;if(e.array.constructor===Float32Array)a=ut.FLOAT;else if(e.array.constructor===Int32Array)a=ut.INT;else if(e.array.constructor===Uint32Array)a=ut.UNSIGNED_INT;else if(e.array.constructor===Int16Array)a=ut.SHORT;else if(e.array.constructor===Uint16Array)a=ut.UNSIGNED_SHORT;else if(e.array.constructor===Int8Array)a=ut.BYTE;else if(e.array.constructor===Uint8Array)a=ut.UNSIGNED_BYTE;else throw new Error("THREE.GLTFExporter: Unsupported bufferAttribute component type: "+e.array.constructor.name);if(n===void 0&&(n=0),(i===void 0||i===1/0)&&(i=e.count),i===0)return null;let l=Gv(e,n,i),c;t!==void 0&&(c=e===t.index?ut.ELEMENT_ARRAY_BUFFER:ut.ARRAY_BUFFER);let h=this.processBufferView(e,a,n,i,c),u={bufferView:h.id,byteOffset:h.byteOffset,componentType:a,count:i,max:l.max,min:l.min,type:o[e.itemSize]};return e.normalized===!0&&(u.normalized=!0),r.accessors||(r.accessors=[]),r.accessors.push(u)-1}processImage(e,t,n,i="image/png"){if(e!==null){let r=this,o=r.cache,a=r.json,l=r.options,c=r.pending;o.images.has(e)||o.images.set(e,{});let h=o.images.get(e),u=i+":flipY/"+n.toString();if(h[u]!==void 0)return h[u];a.images||(a.images=[]);let f={mimeType:i},d=xp();d.width=Math.min(e.width,l.maxTextureSize),d.height=Math.min(e.height,l.maxTextureSize);let m=d.getContext("2d",{willReadFrequently:!0});if(n===!0&&(m.translate(0,d.height),m.scale(1,-1)),e.data!==void 0){t!==tn&&console.error("GLTFExporter: Only RGBAFormat is supported.",t),(e.width>l.maxTextureSize||e.height>l.maxTextureSize)&&console.warn("GLTFExporter: Image size is bigger than maxTextureSize",e);let g=new Uint8ClampedArray(e.height*e.width*4);for(let p=0;p<g.length;p+=4)g[p+0]=e.data[p+0],g[p+1]=e.data[p+1],g[p+2]=e.data[p+2],g[p+3]=e.data[p+3];m.putImageData(new ImageData(g,e.width,e.height),0,0)}else if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap||typeof OffscreenCanvas<"u"&&e instanceof OffscreenCanvas)m.drawImage(e,0,0,d.width,d.height);else throw new Error("THREE.GLTFExporter: Invalid image type. Use HTMLImageElement, HTMLCanvasElement, ImageBitmap or OffscreenCanvas.");l.binary===!0?c.push(Wv(d,i).then(g=>r.processBufferViewImage(g)).then(g=>{f.bufferView=g})):f.uri=gr.getDataURL(d,i);let x=a.images.push(f)-1;return h[u]=x,x}else throw new Error("THREE.GLTFExporter: No valid image data found. Unable to process texture.")}processSampler(e){let t=this.json;t.samplers||(t.samplers=[]);let n={magFilter:qn[e.magFilter],minFilter:qn[e.minFilter],wrapS:qn[e.wrapS],wrapT:qn[e.wrapT]};return t.samplers.push(n)-1}async processTextureAsync(e){let n=this.options,i=this.cache,r=this.json;if(i.textures.has(e))return i.textures.get(e);r.textures||(r.textures=[]),e instanceof Ns&&(e=await this.decompressTextureAsync(e,n.maxTextureSize));let o=e.userData.mimeType;o==="image/webp"&&(o="image/png");let a={sampler:this.processSampler(e),source:this.processImage(e.image,e.format,e.flipY,o)};e.name&&(a.name=e.name),await this._invokeAllAsync(async function(c){c.writeTexture&&await c.writeTexture(e,a)});let l=r.textures.push(a)-1;return i.textures.set(e,l),l}async processMaterialAsync(e){let t=this.cache,n=this.json;if(t.materials.has(e))return t.materials.get(e);if(e.isShaderMaterial)return console.warn("GLTFExporter: THREE.ShaderMaterial not supported."),null;n.materials||(n.materials=[]);let i={pbrMetallicRoughness:{}};e.isMeshStandardMaterial!==!0&&e.isMeshBasicMaterial!==!0&&console.warn("GLTFExporter: Use MeshStandardMaterial or MeshBasicMaterial for best results.");let r=e.color.toArray().concat([e.opacity]);if(ia(r,[1,1,1,1])||(i.pbrMetallicRoughness.baseColorFactor=r),e.isMeshStandardMaterial?(i.pbrMetallicRoughness.metallicFactor=e.metalness,i.pbrMetallicRoughness.roughnessFactor=e.roughness):(i.pbrMetallicRoughness.metallicFactor=0,i.pbrMetallicRoughness.roughnessFactor=1),e.metalnessMap||e.roughnessMap){let a=await this.buildMetalRoughTextureAsync(e.metalnessMap,e.roughnessMap),l={index:await this.processTextureAsync(a),texCoord:a.channel};this.applyTextureTransform(l,a),i.pbrMetallicRoughness.metallicRoughnessTexture=l}if(e.map){let a={index:await this.processTextureAsync(e.map),texCoord:e.map.channel};this.applyTextureTransform(a,e.map),i.pbrMetallicRoughness.baseColorTexture=a}if(e.emissive){let a=e.emissive;if(Math.max(a.r,a.g,a.b)>0&&(i.emissiveFactor=e.emissive.toArray()),e.emissiveMap){let c={index:await this.processTextureAsync(e.emissiveMap),texCoord:e.emissiveMap.channel};this.applyTextureTransform(c,e.emissiveMap),i.emissiveTexture=c}}if(e.normalMap){let a={index:await this.processTextureAsync(e.normalMap),texCoord:e.normalMap.channel};e.normalScale&&e.normalScale.x!==1&&(a.scale=e.normalScale.x),this.applyTextureTransform(a,e.normalMap),i.normalTexture=a}if(e.aoMap){let a={index:await this.processTextureAsync(e.aoMap),texCoord:e.aoMap.channel};e.aoMapIntensity!==1&&(a.strength=e.aoMapIntensity),this.applyTextureTransform(a,e.aoMap),i.occlusionTexture=a}e.transparent?i.alphaMode="BLEND":e.alphaTest>0&&(i.alphaMode="MASK",i.alphaCutoff=e.alphaTest),e.side===xt&&(i.doubleSided=!0),e.name!==""&&(i.name=e.name),this.serializeUserData(e,i),await this._invokeAllAsync(async function(a){a.writeMaterialAsync&&await a.writeMaterialAsync(e,i)});let o=n.materials.push(i)-1;return t.materials.set(e,o),o}async processMeshAsync(e){let t=this.cache,n=this.json,i=[e.geometry.uuid];if(Array.isArray(e.material))for(let y=0,b=e.material.length;y<b;y++)i.push(e.material[y].uuid);else i.push(e.material.uuid);let r=i.join(":");if(t.meshes.has(r))return t.meshes.get(r);let o=e.geometry,a;e.isLineSegments?a=ut.LINES:e.isLineLoop?a=ut.LINE_LOOP:e.isLine?a=ut.LINE_STRIP:e.isPoints?a=ut.POINTS:a=e.material.wireframe?ut.LINES:ut.TRIANGLES;let l={},c={},h=[],u=[],f={uv:"TEXCOORD_0",uv1:"TEXCOORD_1",uv2:"TEXCOORD_2",uv3:"TEXCOORD_3",color:"COLOR_0",skinWeight:"WEIGHTS_0",skinIndex:"JOINTS_0"},d=o.getAttribute("normal");d!==void 0&&!this.isNormalizedNormalAttribute(d)&&(console.warn("THREE.GLTFExporter: Creating normalized normal attribute from the non-normalized one."),o.setAttribute("normal",this.createNormalizedNormalAttribute(d)));let m=null;for(let y in o.attributes){if(y.slice(0,5)==="morph")continue;let b=o.attributes[y];if(y=f[y]||y.toUpperCase(),/^(POSITION|NORMAL|TANGENT|TEXCOORD_\d+|COLOR_\d+|JOINTS_\d+|WEIGHTS_\d+)$/.test(y)||(y="_"+y),t.attributes.has(this.getUID(b))){c[y]=t.attributes.get(this.getUID(b));continue}m=null;let C=b.array;y==="JOINTS_0"&&!(C instanceof Uint16Array)&&!(C instanceof Uint8Array)?(console.warn('GLTFExporter: Attribute "skinIndex" converted to type UNSIGNED_SHORT.'),m=new tt(new Uint16Array(C),b.itemSize,b.normalized)):(C instanceof Uint32Array||C instanceof Int32Array)&&!y.startsWith("_")&&(console.warn(`GLTFExporter: Attribute "${y}" converted to type FLOAT.`),m=Ms.Utils.toFloat32BufferAttribute(b));let D=this.processAccessor(m||b,o);D!==null&&(y.startsWith("_")||this.detectMeshQuantization(y,b),c[y]=D,t.attributes.set(this.getUID(b),D))}if(d!==void 0&&o.setAttribute("normal",d),Object.keys(c).length===0)return null;if(e.morphTargetInfluences!==void 0&&e.morphTargetInfluences.length>0){let y=[],b=[],P={};if(e.morphTargetDictionary!==void 0)for(let C in e.morphTargetDictionary)P[e.morphTargetDictionary[C]]=C;for(let C=0;C<e.morphTargetInfluences.length;++C){let D={},_=!1;for(let v in o.morphAttributes){if(v!=="position"&&v!=="normal"){_||(console.warn("GLTFExporter: Only POSITION and NORMAL morph are supported."),_=!0);continue}let A=o.morphAttributes[v][C],N=v.toUpperCase(),B=o.attributes[v];if(t.attributes.has(this.getUID(A,!0))){D[N]=t.attributes.get(this.getUID(A,!0));continue}let z=A.clone();if(!o.morphTargetsRelative)for(let k=0,X=A.count;k<X;k++)for(let te=0;te<A.itemSize;te++)te===0&&z.setX(k,A.getX(k)-B.getX(k)),te===1&&z.setY(k,A.getY(k)-B.getY(k)),te===2&&z.setZ(k,A.getZ(k)-B.getZ(k)),te===3&&z.setW(k,A.getW(k)-B.getW(k));D[N]=this.processAccessor(z,o),t.attributes.set(this.getUID(B,!0),D[N])}u.push(D),y.push(e.morphTargetInfluences[C]),e.morphTargetDictionary!==void 0&&b.push(P[C])}l.weights=y,b.length>0&&(l.extras={},l.extras.targetNames=b)}let x=Array.isArray(e.material);if(x&&o.groups.length===0)return null;let g=!1;if(x&&o.index===null){let y=[];for(let b=0,P=o.attributes.position.count;b<P;b++)y[b]=b;o.setIndex(y),g=!0}let p=x?e.material:[e.material],w=x?o.groups:[{materialIndex:0,start:void 0,count:void 0}];for(let y=0,b=w.length;y<b;y++){let P={mode:a,attributes:c};if(this.serializeUserData(o,P),u.length>0&&(P.targets=u),o.index!==null){let D=this.getUID(o.index);(w[y].start!==void 0||w[y].count!==void 0)&&(D+=":"+w[y].start+":"+w[y].count),t.attributes.has(D)?P.indices=t.attributes.get(D):(P.indices=this.processAccessor(o.index,o,w[y].start,w[y].count),t.attributes.set(D,P.indices)),P.indices===null&&delete P.indices}let C=await this.processMaterialAsync(p[w[y].materialIndex]);C!==null&&(P.material=C),h.push(P)}g===!0&&o.setIndex(null),l.primitives=h,n.meshes||(n.meshes=[]),await this._invokeAllAsync(function(y){y.writeMesh&&y.writeMesh(e,l)});let M=n.meshes.push(l)-1;return t.meshes.set(r,M),M}detectMeshQuantization(e,t){if(this.extensionsUsed[su])return;let n;switch(t.array.constructor){case Int8Array:n="byte";break;case Uint8Array:n="unsigned byte";break;case Int16Array:n="short";break;case Uint16Array:n="unsigned short";break;default:return}t.normalized&&(n+=" normalized");let i=e.split("_",1)[0];fp[i]&&fp[i].includes(n)&&(this.extensionsUsed[su]=!0,this.extensionsRequired[su]=!0)}processCamera(e){let t=this.json;t.cameras||(t.cameras=[]);let n=e.isOrthographicCamera,i={type:n?"orthographic":"perspective"};return n?i.orthographic={xmag:e.right*2,ymag:e.top*2,zfar:e.far<=0?.001:e.far,znear:e.near<0?0:e.near}:i.perspective={aspectRatio:e.aspect,yfov:mn.degToRad(e.fov),zfar:e.far<=0?.001:e.far,znear:e.near<0?0:e.near},e.name!==""&&(i.name=e.type),t.cameras.push(i)-1}processAnimation(e,t){let n=this.json,i=this.nodeMap;n.animations||(n.animations=[]),e=Ms.Utils.mergeMorphTargetTracks(e.clone(),t);let r=e.tracks,o=[],a=[];for(let c=0;c<r.length;++c){let h=r[c],u=St.parseTrackName(h.name),f=St.findNode(t,u.nodeName),d=pp[u.propertyName];if(u.objectName==="bones"&&(f.isSkinnedMesh===!0?f=f.skeleton.getBoneByName(u.objectIndex):f=void 0),!f||!d){console.warn('THREE.GLTFExporter: Could not export animation track "%s".',h.name);continue}let m=1,x=h.values.length/h.times.length;d===pp.morphTargetInfluences&&(x/=f.morphTargetInfluences.length);let g;h.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline===!0?(g="CUBICSPLINE",x/=3):h.getInterpolation()===Hi?g="STEP":g="LINEAR",a.push({input:this.processAccessor(new tt(h.times,m)),output:this.processAccessor(new tt(h.values,x)),interpolation:g}),o.push({sampler:a.length-1,target:{node:i.get(f),path:d}})}let l={name:e.name||"clip_"+n.animations.length,samplers:a,channels:o};return this.serializeUserData(e,l),n.animations.push(l),n.animations.length-1}processSkin(e){let t=this.json,n=this.nodeMap,i=t.nodes[n.get(e)],r=e.skeleton;if(r===void 0)return null;let o=e.skeleton.bones[0];if(o===void 0)return null;let a=[],l=new Float32Array(r.bones.length*16),c=new Ve;for(let u=0;u<r.bones.length;++u)a.push(n.get(r.bones[u])),c.copy(r.boneInverses[u]),c.multiply(e.bindMatrix).toArray(l,u*16);return t.skins===void 0&&(t.skins=[]),t.skins.push({inverseBindMatrices:this.processAccessor(new tt(l,16)),joints:a,skeleton:n.get(o)}),i.skin=t.skins.length-1}async processNodeAsync(e){let t=this.json,n=this.options,i=this.nodeMap;t.nodes||(t.nodes=[]);let r={};if(n.trs){let a=e.quaternion.toArray(),l=e.position.toArray(),c=e.scale.toArray();ia(a,[0,0,0,1])||(r.rotation=a),ia(l,[0,0,0])||(r.translation=l),ia(c,[1,1,1])||(r.scale=c)}else e.matrixAutoUpdate&&e.updateMatrix(),Vv(e.matrix)===!1&&(r.matrix=e.matrix.elements);if(e.name!==""&&(r.name=String(e.name)),this.serializeUserData(e,r),e.isMesh||e.isLine||e.isPoints){let a=await this.processMeshAsync(e);a!==null&&(r.mesh=a)}else e.isCamera&&(r.camera=this.processCamera(e));e.isSkinnedMesh&&this.skins.push(e);let o=t.nodes.push(r)-1;if(i.set(e,o),e.children.length>0){let a=[];for(let l=0,c=e.children.length;l<c;l++){let h=e.children[l];if(h.visible||n.onlyVisible===!1){let u=await this.processNodeAsync(h);u!==null&&a.push(u)}}a.length>0&&(r.children=a)}return await this._invokeAllAsync(function(a){a.writeNode&&a.writeNode(e,r)}),o}async processSceneAsync(e){let t=this.json,n=this.options;t.scenes||(t.scenes=[],t.scene=0);let i={};e.name!==""&&(i.name=e.name),t.scenes.push(i);let r=[];for(let o=0,a=e.children.length;o<a;o++){let l=e.children[o];if(l.visible||n.onlyVisible===!1){let c=await this.processNodeAsync(l);c!==null&&r.push(c)}}r.length>0&&(i.nodes=r),this.serializeUserData(e,i)}async processObjectsAsync(e){let t=new Sn;t.name="AuxScene";for(let n=0;n<e.length;n++)t.children.push(e[n]);await this.processSceneAsync(t)}async processInputAsync(e){let t=this.options;e=e instanceof Array?e:[e],await this._invokeAllAsync(function(i){i.beforeParse&&i.beforeParse(e)});let n=[];for(let i=0;i<e.length;i++)e[i]instanceof Sn?await this.processSceneAsync(e[i]):n.push(e[i]);n.length>0&&await this.processObjectsAsync(n);for(let i=0;i<this.skins.length;++i)this.processSkin(this.skins[i]);for(let i=0;i<t.animations.length;++i)this.processAnimation(t.animations[i],e[0]);await this._invokeAllAsync(function(i){i.afterParse&&i.afterParse(e)})}async _invokeAllAsync(e){for(let t=0,n=this.plugins.length;t<n;t++)await e(this.plugins[t])}},au=class{constructor(e){this.writer=e,this.name="KHR_lights_punctual"}writeNode(e,t){if(!e.isLight)return;if(!e.isDirectionalLight&&!e.isPointLight&&!e.isSpotLight){console.warn("THREE.GLTFExporter: Only directional, point, and spot lights are supported.",e);return}let n=this.writer,i=n.json,r=n.extensionsUsed,o={};e.name&&(o.name=e.name),o.color=e.color.toArray(),o.intensity=e.intensity,e.isDirectionalLight?o.type="directional":e.isPointLight?(o.type="point",e.distance>0&&(o.range=e.distance)):e.isSpotLight&&(o.type="spot",e.distance>0&&(o.range=e.distance),o.spot={},o.spot.innerConeAngle=(1-e.penumbra)*e.angle,o.spot.outerConeAngle=e.angle),e.decay!==void 0&&e.decay!==2&&console.warn("THREE.GLTFExporter: Light decay may be lost. glTF is physically-based, and expects light.decay=2."),e.target&&(e.target.parent!==e||e.target.position.x!==0||e.target.position.y!==0||e.target.position.z!==-1)&&console.warn("THREE.GLTFExporter: Light direction may be lost. For best results, make light.target a child of the light with position 0,0,-1."),r[this.name]||(i.extensions=i.extensions||{},i.extensions[this.name]={lights:[]},r[this.name]=!0);let a=i.extensions[this.name].lights;a.push(o),t.extensions=t.extensions||{},t.extensions[this.name]={light:a.length-1}}},lu=class{constructor(e){this.writer=e,this.name="KHR_materials_unlit"}async writeMaterialAsync(e,t){if(!e.isMeshBasicMaterial)return;let i=this.writer.extensionsUsed;t.extensions=t.extensions||{},t.extensions[this.name]={},i[this.name]=!0,t.pbrMetallicRoughness.metallicFactor=0,t.pbrMetallicRoughness.roughnessFactor=.9}},cu=class{constructor(e){this.writer=e,this.name="KHR_materials_clearcoat"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.clearcoat===0)return;let n=this.writer,i=n.extensionsUsed,r={};if(r.clearcoatFactor=e.clearcoat,e.clearcoatMap){let o={index:await n.processTextureAsync(e.clearcoatMap),texCoord:e.clearcoatMap.channel};n.applyTextureTransform(o,e.clearcoatMap),r.clearcoatTexture=o}if(r.clearcoatRoughnessFactor=e.clearcoatRoughness,e.clearcoatRoughnessMap){let o={index:await n.processTextureAsync(e.clearcoatRoughnessMap),texCoord:e.clearcoatRoughnessMap.channel};n.applyTextureTransform(o,e.clearcoatRoughnessMap),r.clearcoatRoughnessTexture=o}if(e.clearcoatNormalMap){let o={index:await n.processTextureAsync(e.clearcoatNormalMap),texCoord:e.clearcoatNormalMap.channel};e.clearcoatNormalScale.x!==1&&(o.scale=e.clearcoatNormalScale.x),n.applyTextureTransform(o,e.clearcoatNormalMap),r.clearcoatNormalTexture=o}t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}},hu=class{constructor(e){this.writer=e,this.name="KHR_materials_dispersion"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.dispersion===0)return;let i=this.writer.extensionsUsed,r={};r.dispersion=e.dispersion,t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}},uu=class{constructor(e){this.writer=e,this.name="KHR_materials_iridescence"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.iridescence===0)return;let n=this.writer,i=n.extensionsUsed,r={};if(r.iridescenceFactor=e.iridescence,e.iridescenceMap){let o={index:await n.processTextureAsync(e.iridescenceMap),texCoord:e.iridescenceMap.channel};n.applyTextureTransform(o,e.iridescenceMap),r.iridescenceTexture=o}if(r.iridescenceIor=e.iridescenceIOR,r.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],r.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1],e.iridescenceThicknessMap){let o={index:await n.processTextureAsync(e.iridescenceThicknessMap),texCoord:e.iridescenceThicknessMap.channel};n.applyTextureTransform(o,e.iridescenceThicknessMap),r.iridescenceThicknessTexture=o}t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}},du=class{constructor(e){this.writer=e,this.name="KHR_materials_transmission"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.transmission===0)return;let n=this.writer,i=n.extensionsUsed,r={};if(r.transmissionFactor=e.transmission,e.transmissionMap){let o={index:await n.processTextureAsync(e.transmissionMap),texCoord:e.transmissionMap.channel};n.applyTextureTransform(o,e.transmissionMap),r.transmissionTexture=o}t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}},fu=class{constructor(e){this.writer=e,this.name="KHR_materials_volume"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.transmission===0)return;let n=this.writer,i=n.extensionsUsed,r={};if(r.thicknessFactor=e.thickness,e.thicknessMap){let o={index:await n.processTextureAsync(e.thicknessMap),texCoord:e.thicknessMap.channel};n.applyTextureTransform(o,e.thicknessMap),r.thicknessTexture=o}e.attenuationDistance!==1/0&&(r.attenuationDistance=e.attenuationDistance),r.attenuationColor=e.attenuationColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}},pu=class{constructor(e){this.writer=e,this.name="KHR_materials_ior"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.ior===1.5)return;let i=this.writer.extensionsUsed,r={};r.ior=e.ior,t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}},mu=class{constructor(e){this.writer=e,this.name="KHR_materials_specular"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.specularIntensity===1&&e.specularColor.equals(Ov)&&!e.specularIntensityMap&&!e.specularColorMap)return;let n=this.writer,i=n.extensionsUsed,r={};if(e.specularIntensityMap){let o={index:await n.processTextureAsync(e.specularIntensityMap),texCoord:e.specularIntensityMap.channel};n.applyTextureTransform(o,e.specularIntensityMap),r.specularTexture=o}if(e.specularColorMap){let o={index:await n.processTextureAsync(e.specularColorMap),texCoord:e.specularColorMap.channel};n.applyTextureTransform(o,e.specularColorMap),r.specularColorTexture=o}r.specularFactor=e.specularIntensity,r.specularColorFactor=e.specularColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}},gu=class{constructor(e){this.writer=e,this.name="KHR_materials_sheen"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.sheen==0)return;let n=this.writer,i=n.extensionsUsed,r={};if(e.sheenRoughnessMap){let o={index:await n.processTextureAsync(e.sheenRoughnessMap),texCoord:e.sheenRoughnessMap.channel};n.applyTextureTransform(o,e.sheenRoughnessMap),r.sheenRoughnessTexture=o}if(e.sheenColorMap){let o={index:await n.processTextureAsync(e.sheenColorMap),texCoord:e.sheenColorMap.channel};n.applyTextureTransform(o,e.sheenColorMap),r.sheenColorTexture=o}r.sheenRoughnessFactor=e.sheenRoughness,r.sheenColorFactor=e.sheenColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}},xu=class{constructor(e){this.writer=e,this.name="KHR_materials_anisotropy"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.anisotropy==0)return;let n=this.writer,i=n.extensionsUsed,r={};if(e.anisotropyMap){let o={index:await n.processTextureAsync(e.anisotropyMap)};n.applyTextureTransform(o,e.anisotropyMap),r.anisotropyTexture=o}r.anisotropyStrength=e.anisotropy,r.anisotropyRotation=e.anisotropyRotation,t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}},yu=class{constructor(e){this.writer=e,this.name="KHR_materials_emissive_strength"}async writeMaterialAsync(e,t){if(!e.isMeshStandardMaterial||e.emissiveIntensity===1)return;let i=this.writer.extensionsUsed,r={};r.emissiveStrength=e.emissiveIntensity,t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}},vu=class{constructor(e){this.writer=e,this.name="EXT_materials_bump"}async writeMaterialAsync(e,t){if(!e.isMeshStandardMaterial||e.bumpScale===1&&!e.bumpMap)return;let n=this.writer,i=n.extensionsUsed,r={};if(e.bumpMap){let o={index:await n.processTextureAsync(e.bumpMap),texCoord:e.bumpMap.channel};n.applyTextureTransform(o,e.bumpMap),r.bumpTexture=o}r.bumpFactor=e.bumpScale,t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}},_u=class{constructor(e){this.writer=e,this.name="EXT_mesh_gpu_instancing"}writeNode(e,t){if(!e.isInstancedMesh)return;let n=this.writer,i=e,r=new Float32Array(i.count*3),o=new Float32Array(i.count*4),a=new Float32Array(i.count*3),l=new Ve,c=new E,h=new $t,u=new E;for(let d=0;d<i.count;d++)i.getMatrixAt(d,l),l.decompose(c,h,u),c.toArray(r,d*3),h.toArray(o,d*4),u.toArray(a,d*3);let f={TRANSLATION:n.processAccessor(new tt(r,3)),ROTATION:n.processAccessor(new tt(o,4)),SCALE:n.processAccessor(new tt(a,3))};i.instanceColor&&(f._COLOR_0=n.processAccessor(i.instanceColor)),t.extensions=t.extensions||{},t.extensions[this.name]={attributes:f},n.extensionsUsed[this.name]=!0,n.extensionsRequired[this.name]=!0}};Ms.Utils={insertKeyframe:function(s,e){let n=s.getValueSize(),i=new s.TimeBufferType(s.times.length+1),r=new s.ValueBufferType(s.values.length+n),o=s.createInterpolant(new s.ValueBufferType(n)),a;if(s.times.length===0){i[0]=e;for(let l=0;l<n;l++)r[l]=0;a=0}else if(e<s.times[0]){if(Math.abs(s.times[0]-e)<.001)return 0;i[0]=e,i.set(s.times,1),r.set(o.evaluate(e),0),r.set(s.values,n),a=0}else if(e>s.times[s.times.length-1]){if(Math.abs(s.times[s.times.length-1]-e)<.001)return s.times.length-1;i[i.length-1]=e,i.set(s.times,0),r.set(s.values,0),r.set(o.evaluate(e),s.values.length),a=i.length-1}else for(let l=0;l<s.times.length;l++){if(Math.abs(s.times[l]-e)<.001)return l;if(s.times[l]<e&&s.times[l+1]>e){i.set(s.times.slice(0,l+1),0),i[l+1]=e,i.set(s.times.slice(l+1),l+2),r.set(s.values.slice(0,(l+1)*n),0),r.set(o.evaluate(e),(l+1)*n),r.set(s.values.slice((l+1)*n),(l+2)*n),a=l+1;break}}return s.times=i,s.values=r,a},mergeMorphTargetTracks:function(s,e){let t=[],n={},i=s.tracks;for(let r=0;r<i.length;++r){let o=i[r],a=St.parseTrackName(o.name),l=St.findNode(e,a.nodeName);if(a.propertyName!=="morphTargetInfluences"||a.propertyIndex===void 0){t.push(o);continue}if(o.createInterpolant!==o.InterpolantFactoryMethodDiscrete&&o.createInterpolant!==o.InterpolantFactoryMethodLinear){if(o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline)throw new Error("THREE.GLTFExporter: Cannot merge tracks with glTF CUBICSPLINE interpolation.");console.warn("THREE.GLTFExporter: Morph target interpolation mode not yet supported. Using LINEAR instead."),o=o.clone(),o.setInterpolation(Vi)}let c=l.morphTargetInfluences.length,h=l.morphTargetDictionary[a.propertyIndex];if(h===void 0)throw new Error("THREE.GLTFExporter: Morph target name not found: "+a.propertyIndex);let u;if(n[l.uuid]===void 0){u=o.clone();let d=new u.ValueBufferType(c*u.times.length);for(let m=0;m<u.times.length;m++)d[m*c+h]=u.values[m];u.name=(a.nodeName||"")+".morphTargetInfluences",u.values=d,n[l.uuid]=u,t.push(u);continue}let f=o.createInterpolant(new o.ValueBufferType(1));u=n[l.uuid];for(let d=0;d<u.times.length;d++)u.values[d*c+h]=f.evaluate(u.times[d]);for(let d=0;d<o.times.length;d++){let m=this.insertKeyframe(u,o.times[d]);u.values[m*c+h]=o.values[d]}}return s.tracks=t,s},toFloat32BufferAttribute:function(s){let e=new tt(new Float32Array(s.count*s.itemSize),s.itemSize,!1);if(!s.normalized&&!s.isInterleavedBufferAttribute)return e.array.set(s.array),e;for(let t=0,n=s.count;t<n;t++)for(let i=0;i<s.itemSize;i++)e.setComponent(t,i,s.getComponent(t,i));return e}};var Br=class extends wi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Au(t)}),this.register(function(t){return new Ru(t)}),this.register(function(t){return new Fu(t)}),this.register(function(t){return new Bu(t)}),this.register(function(t){return new zu(t)}),this.register(function(t){return new Iu(t)}),this.register(function(t){return new Pu(t)}),this.register(function(t){return new Du(t)}),this.register(function(t){return new Lu(t)}),this.register(function(t){return new Tu(t)}),this.register(function(t){return new Nu(t)}),this.register(function(t){return new Cu(t)}),this.register(function(t){return new Ou(t)}),this.register(function(t){return new Uu(t)}),this.register(function(t){return new Eu(t)}),this.register(function(t){return new ku(t)}),this.register(function(t){return new Hu(t)})}load(e,t,n,i){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=Ki.extractUrlBase(e);o=Ki.resolveURL(c,this.path)}else o=Ki.extractUrlBase(e);this.manager.itemStart(e);let a=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Er(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r,o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===bp){try{o[dt.KHR_BINARY_GLTF]=new Vu(e)}catch(u){i&&i(u);return}r=JSON.parse(o[dt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new Zu(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(u){case dt.KHR_MATERIALS_UNLIT:o[u]=new wu;break;case dt.KHR_DRACO_MESH_COMPRESSION:o[u]=new Gu(r,this.dracoLoader);break;case dt.KHR_TEXTURE_TRANSFORM:o[u]=new Wu;break;case dt.KHR_MESH_QUANTIZATION:o[u]=new Xu;break;default:f.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}};function Xv(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}var dt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Eu=class{constructor(e){this.parser=e,this.name=dt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,h=new Pe(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],fn);let u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new pi(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Zi(h),c.distance=u;break;case"spot":c=new Ao(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Pi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}},wu=class{constructor(){this.name=dt.KHR_MATERIALS_UNLIT}getMaterialType(){return Rt}extendParams(e,t,n){let i=[];e.color=new Pe(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],fn),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Et))}return Promise.all(i)}},Tu=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},Au=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Me(a,a)}return Promise.all(r)}},Ru=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zt}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},Cu=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},Iu=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new Pe(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],fn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Et)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},Pu=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},Du=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Pe().setRGB(a[0],a[1],a[2],fn),Promise.all(r)}},Lu=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zt}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},Nu=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new Pe().setRGB(a[0],a[1],a[2],fn),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Et)),Promise.all(r)}},Uu=class{constructor(e){this.parser=e,this.name=dt.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}},Ou=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},Fu=class{constructor(e){this.parser=e,this.name=dt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},Bu=class{constructor(e){this.parser=e,this.name=dt.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=i.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}},zu=class{constructor(e){this.parser=e,this.name=dt.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=i.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}},ku=class{constructor(e){this.name=dt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,f,i.mode,i.filter).then(function(d){return d.buffer}):o.ready.then(function(){let d=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(d),h,u,f,i.mode,i.filter),d})})}else return null}},Hu=class{constructor(e){this.name=dt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let c of i.primitives)if(c.mode!==ii.TRIANGLES&&c.mode!==ii.TRIANGLE_STRIP&&c.mode!==ii.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let h=c.pop(),u=h.isGroup?h.children:[h],f=c[0].count,d=[];for(let m of u){let x=new Ve,g=new E,p=new $t,w=new E(1,1,1),M=new Gi(m.geometry,m.material,f);for(let y=0;y<f;y++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,y),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,y),l.SCALE&&w.fromBufferAttribute(l.SCALE,y),M.setMatrixAt(y,x.compose(g,p,w));for(let y in l)if(y==="_COLOR_0"){let b=l[y];M.instanceColor=new cs(b.array,b.itemSize,b.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&m.geometry.setAttribute(y,l[y]);Nt.prototype.copy.call(M,m),this.parser.assignFinalMaterial(M),d.push(M)}return h.isGroup?(h.clear(),h.add(...d),h):d[0]}))}},bp="glTF",sa=12,vp={JSON:1313821514,BIN:5130562},Vu=class{constructor(e){this.name=dt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,sa),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==bp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-sa,r=new DataView(e,sa),o=0;for(;o<i;){let a=r.getUint32(o,!0);o+=4;let l=r.getUint32(o,!0);if(o+=4,l===vp.JSON){let c=new Uint8Array(e,sa+o,a);this.content=n.decode(c)}else if(l===vp.BIN){let c=sa+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Gu=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=dt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let h in o){let u=Yu[h]||h.toLowerCase();a[u]=o[h]}for(let h in e.attributes){let u=Yu[h]||h.toLowerCase();if(o[h]!==void 0){let f=n.accessors[e.attributes[h]],d=Fr[f.componentType];c[u]=d.name,l[u]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,f){i.decodeDracoFile(h,function(d){for(let m in d.attributes){let x=d.attributes[m],g=l[m];g!==void 0&&(x.normalized=g)}u(d)},a,c,fn,f)})})}},Wu=class{constructor(){this.name=dt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Xu=class{constructor(){this.name=dt.KHR_MESH_QUANTIZATION}},fc=class extends Xi{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=i-t,u=(n-t)/h,f=u*u,d=f*u,m=e*c,x=m-c,g=-2*d+3*f,p=d-f,w=1-g,M=p-f+u;for(let y=0;y!==a;y++){let b=o[x+y+a],P=o[x+y+l]*h,C=o[m+y+a],D=o[m+y]*h;r[y]=w*b+M*P+g*C+p*D}return r}},qv=new $t,qu=class extends fc{interpolate_(e,t,n,i){let r=super.interpolate_(e,t,n,i);return qv.fromArray(r).normalize().toArray(r),r}},ii={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Fr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},_p={9728:gt,9729:Jt,9984:Ar,9985:ms,9986:$i,9987:pn},Mp={33071:Jn,33648:as,10497:cn},Mu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Yu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ss={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Yv={CUBICSPLINE:void 0,LINEAR:Vi,STEP:Hi},Su={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function jv(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new jt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Vn})),s.DefaultMaterial}function js(s,e,t){for(let n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Pi(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Zv(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,h=e.length;c<h;c++){let u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);let o=[],a=[],l=[];for(let c=0,h=e.length;c<h;c++){let u=e[c];if(n){let f=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;o.push(f)}if(i){let f=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;a.push(f)}if(r){let f=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],f=c[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=f),s.morphTargetsRelative=!0,s})}function Kv(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Jv(s){let e,t=s.extensions&&s.extensions[dt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+bu(t.attributes):e=s.indices+":"+bu(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+bu(s.targets[n]);return e}function bu(s){let e="",t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function ju(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function $v(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var Qv=new Ve,Zu=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Xv,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?this.textureLoader=new wo(this.options.manager):this.textureLoader=new Co(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Er(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return js(r,a,i),Pi(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(let l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){let o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){let o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),r=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,h]of o.children.entries())r(h,a.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[dt.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,o){n.load(Ki.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let o=Mu[i.type],a=Fr[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new tt(c,o,l))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],l=Mu[i.type],c=Fr[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,m=i.normalized===!0,x,g;if(d&&d!==u){let p=Math.floor(f/d),w="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count,M=t.cache.get(w);M||(x=new c(a,p*d,i.count*d/h),M=new Ps(x,d/h),t.cache.add(w,M)),g=new Ln(M,l,f%d/h,m)}else a===null?x=new c(i.count*l):x=new c(a,f,i.count*l),g=new tt(x,l,m);if(i.sparse!==void 0){let p=Mu.SCALAR,w=Fr[i.sparse.indices.componentType],M=i.sparse.indices.byteOffset||0,y=i.sparse.values.byteOffset||0,b=new w(o[1],M,i.sparse.count*p),P=new c(o[2],y,i.sparse.count*l);a!==null&&(g=new tt(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let C=0,D=b.length;C<D;C++){let _=b[C];if(g.setX(_,P[C*l]),l>=2&&g.setY(_,P[C*l+1]),l>=3&&g.setZ(_,P[C*l+2]),l>=4&&g.setW(_,P[C*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=m}return g})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let i=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let f=(r.samplers||{})[o.sampler]||{};return h.magFilter=_p[f.magFilter]||Jt,h.minFilter=_p[f.minFilter]||pn,h.wrapS=Mp[f.wrapS]||cn,h.wrapT=Mp[f.wrapT]||cn,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==gt&&h.minFilter!==Jt,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let o=i.images[e],a=self.URL||self.webkitURL,l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(u){c=!0;let f=new Blob([u],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(l).then(function(u){return new Promise(function(f,d){let m=f;t.isImageBitmapLoader===!0&&(m=function(x){let g=new Qt(x);g.needsUpdate=!0,f(g)}),t.load(Ki.resolveURL(u,r.path),m,void 0,d)})}).then(function(u){return c===!0&&a.revokeObjectURL(l),Pi(u,o),u.userData.mimeType=o.mimeType||$v(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[dt.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[dt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=r.associations.get(o);o=r.extensions[dt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new ds,Mn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new $n,Mn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return jt}loadMaterial(e){let t=this,n=this.json,i=this.extensions,r=n.materials[e],o,a={},l=r.extensions||{},c=[];if(l[dt.KHR_MATERIALS_UNLIT]){let u=i[dt.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,r,t))}else{let u=r.pbrMetallicRoughness||{};if(a.color=new Pe(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let f=u.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],fn),a.opacity=f[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",u.baseColorTexture,Et)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=xt);let h=r.alphaMode||Su.OPAQUE;if(h===Su.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Su.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Rt&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Me(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==Rt&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Rt){let u=r.emissiveFactor;a.emissive=new Pe().setRGB(u[0],u[1],u[2],fn)}return r.emissiveTexture!==void 0&&o!==Rt&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Et)),Promise.all(c).then(function(){let u=new o(a);return r.name&&(u.name=r.name),Pi(u,r),t.associations.set(u,{materials:e}),r.extensions&&js(i,u,r),u})}createUniqueName(e){let t=St.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[dt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Sp(l,a,t)})}let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],h=Jv(c),u=i[h];if(u)o.push(u.promise);else{let f;c.extensions&&c.extensions[dt.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=Sp(new vt,c,t),i[h]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let h=o[l].material===void 0?jv(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let d=0,m=h.length;d<m;d++){let x=h[d],g=o[d],p,w=c[d];if(g.mode===ii.TRIANGLES||g.mode===ii.TRIANGLE_STRIP||g.mode===ii.TRIANGLE_FAN||g.mode===void 0)p=r.isSkinnedMesh===!0?new fo(x,w):new Ye(x,w),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),g.mode===ii.TRIANGLE_STRIP?p.geometry=Jh(p.geometry,Go):g.mode===ii.TRIANGLE_FAN&&(p.geometry=Jh(p.geometry,Rr));else if(g.mode===ii.LINES)p=new hs(x,w);else if(g.mode===ii.LINE_STRIP)p=new Ds(x,w);else if(g.mode===ii.LINE_LOOP)p=new us(x,w);else if(g.mode===ii.POINTS)p=new Ls(x,w);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&Kv(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Pi(p,r),g.extensions&&js(i,p,g),t.assignFinalMaterial(p),u.push(p)}for(let d=0,m=u.length;d<m;d++)t.associations.set(u[d],{meshes:e,primitives:d});if(u.length===1)return r.extensions&&js(i,u[0],r),u[0];let f=new pt;r.extensions&&js(i,f,r),t.associations.set(f,{meshes:e});for(let d=0,m=u.length;d<m;d++)f.add(u[d]);return f})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Ft(mn.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Gn(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Pi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),o=i,a=[],l=[];for(let c=0,h=o.length;c<h;c++){let u=o[c];if(u){a.push(u);let f=new Ve;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new po(a,l)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],h=[];for(let u=0,f=i.channels.length;u<f;u++){let d=i.channels[u],m=i.samplers[d.sampler],x=d.target,g=x.node,p=i.parameters!==void 0?i.parameters[m.input]:m.input,w=i.parameters!==void 0?i.parameters[m.output]:m.output;x.node!==void 0&&(o.push(this.getDependency("node",g)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",w)),c.push(m),h.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){let f=u[0],d=u[1],m=u[2],x=u[3],g=u[4],p=[];for(let M=0,y=f.length;M<y;M++){let b=f[M],P=d[M],C=m[M],D=x[M],_=g[M];if(b===void 0)continue;b.updateMatrix&&b.updateMatrix();let v=n._createAnimationTracks(b,P,C,D,_);if(v)for(let A=0;A<v.length;A++)p.push(v[A])}let w=new Eo(r,void 0,p);return Pi(w,i),w})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,h=a.length;c<h;c++)o.push(n.getDependency("node",a[c]));let l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){let h=c[0],u=c[1],f=c[2];f!==null&&h.traverse(function(d){d.isSkinnedMesh&&d.bind(f,Qv)});for(let d=0,m=u.length;d<m;d++)h.add(u[d]);return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let h;if(r.isBone===!0?h=new Mr:c.length>1?h=new pt:c.length===1?h=c[0]:h=new Nt,h!==c[0])for(let u=0,f=c.length;u<f;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=o),Pi(h,r),r.extensions&&js(n,h,r),r.matrix!==void 0){let u=new Ve;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){let u=i.associations.get(h);i.associations.set(h,{...u})}return i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,r=new pt;n.name&&(r.name=i.createUniqueName(n.name)),Pi(r,n),n.extensions&&js(t,r,n);let o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++)r.add(l[h]);let c=h=>{let u=new Map;for(let[f,d]of i.associations)(f instanceof Mn||f instanceof Qt)&&u.set(f,d);return h.traverse(f=>{let d=i.associations.get(f);d!=null&&u.set(f,d)}),u};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){let o=[],a=e.name?e.name:e.uuid,l=[];Ss[r.path]===Ss.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(a);let c;switch(Ss[r.path]){case Ss.weights:c=Si;break;case Ss.rotation:c=bi;break;case Ss.translation:case Ss.scale:c=Ei;break;default:switch(n.itemSize){case 1:c=Si;break;case 2:case 3:default:c=Ei;break}break}let h=i.interpolation!==void 0?Yv[i.interpolation]:Vi,u=this._getArrayFromAccessor(n);for(let f=0,d=l.length;f<d;f++){let m=new c(l[f]+"."+Ss[r.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),o.push(m)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=ju(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof bi?qu:fc;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function e_(s,e,t){let n=e.attributes,i=new it;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new E(l[0],l[1],l[2]),new E(c[0],c[1],c[2])),a.normalized){let h=ju(Fr[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new E,l=new E;for(let c=0,h=r.length;c<h;c++){let u=r[c];if(u.POSITION!==void 0){let f=t.json.accessors[u.POSITION],d=f.min,m=f.max;if(d!==void 0&&m!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(m[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(m[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(m[2]))),f.normalized){let x=ju(Fr[f.componentType]);l.multiplyScalar(x)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;let o=new hn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function Sp(s,e,t){let n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){s.setAttribute(a,l)})}for(let o in n){let a=Yu[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){let o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return at.workingColorSpace!==fn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${at.workingColorSpace}" not supported.`),Pi(s,e),e_(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Zv(s,e.targets,t):s})}function pc(s){let e=s.positions,t=s.walkIndex,n=new Map,i=1;if(!t)return()=>[];for(let r=0;r<t.length;r+=3){let o=t[r]*3,a=t[r+1]*3,l=t[r+2]*3;for(let c=Math.floor(Math.min(e[o+2],e[a+2],e[l+2])/i);c<=Math.floor(Math.max(e[o+2],e[a+2],e[l+2])/i);c++)for(let h=Math.floor(Math.min(e[o],e[a],e[l])/i);h<=Math.floor(Math.max(e[o],e[a],e[l])/i);h++){let u=h+","+c;n.has(u)||n.set(u,[]),n.get(u).push(r)}}return(r,o)=>{let a=[];for(let l of n.get(Math.floor(r/i)+","+Math.floor(o/i))||[]){let c=t[l]*3,h=t[l+1]*3,u=t[l+2]*3,f=e[c],d=e[c+2],m=e[h],x=e[h+2],g=e[u],p=e[u+2],w=(x-p)*(f-g)+(g-m)*(d-p);if(Math.abs(w)<1e-10)continue;let M=((x-p)*(r-g)+(g-m)*(o-p))/w,y=((p-d)*(r-g)+(f-g)*(o-p))/w;M>=-1e-5&&y>=-1e-5&&M+y<=1.00001&&a.push(M*e[c+1]+y*e[h+1]+(1-M-y)*e[u+1])}return a}}var si;function t_(){if(si)return si;let s=512,e=new Uint8Array(s*s*4),t=Math.PI*2;for(let n=0;n<s;n++)for(let i=0;i<s;i++){let r=i/s,o=n/s,a=Math.sin(t*(r+o))*.45+Math.cos(t*(2*r-o))*.23+Math.sin(t*(5*r+3*o))*.1,l=Math.exp(-Math.abs(Math.sin(t*(3*r+2*o)+a*4.5))*23),c=(Math.sin(t*(37*r+41*o))*.5+Math.cos(t*(67*r-53*o))*.5)*2,h=Math.round(232-l*38+a*5+c),u=(n*s+i)*4;e.set([h,Math.max(0,h-2),Math.max(0,h-5),255],u)}return si=new fi(e,s,s,tn),si.colorSpace=Et,si.wrapS=si.wrapT=cn,si.magFilter=Jt,si.minFilter=pn,si.generateMipmaps=!0,si.anisotropy=4,si.needsUpdate=!0,si}function mc(s){let e=s.attributes.position,t=new Float32Array(e.count*2);for(let r=0;r<e.count;r++)t[r*2]=e.getX(r)/5,t[r*2+1]=e.getZ(r)/5;s.setAttribute("uv",new tt(t,2));let n=t_(),i=new jt({map:n,bumpMap:n,bumpScale:.018,color:16777215,roughness:.94,metalness:0,side:xt});return i.name="Honed pale marble",i.userData.roadFinish="rough-marble-v1",i}async function Ep(s){let e=(await new Br().parseAsync(await s.glb.arrayBuffer(),"")).scene;e.updateMatrixWorld(!0);let t=[],n={positions:[],walkIndex:[]},i=new Map,r=[],o=2,a=new E,l=new E,c=new E,h=new E,u=new E,f=new yi,d=0;if(e.traverse(y=>{if(!y.isMesh)return;t.push(y),y.castShadow=!y.userData.road,y.receiveShadow=!0,y.userData.road&&(y.material.dispose(),y.material=mc(y.geometry));let b=y.geometry.attributes.position,P=y.geometry.index,C=P?.count||b.count;d+=C/3;for(let D=0;D<C;D+=3){let _=[0,1,2].map(N=>new E().fromBufferAttribute(b,P?P.getX(D+N):D+N).applyMatrix4(y.matrixWorld)),v=_.flatMap(N=>N.toArray()),A=r.length;r.push(v);for(let N=Math.floor(Math.min(v[2],v[5],v[8])/o);N<=Math.floor(Math.max(v[2],v[5],v[8])/o);N++)for(let B=Math.floor(Math.min(v[1],v[4],v[7])/o);B<=Math.floor(Math.max(v[1],v[4],v[7])/o);B++)for(let z=Math.floor(Math.min(v[0],v[3],v[6])/o);z<=Math.floor(Math.max(v[0],v[3],v[6])/o);z++){let k=z+","+B+","+N;i.has(k)||i.set(k,[]),i.get(k).push(A)}if(y.userData.road&&new E().crossVectors(_[1].clone().sub(_[0]),_[2].clone().sub(_[0])).y<-1e-8){let B=n.positions.length/3;n.positions.push(...v),n.walkIndex.push(B,B+1,B+2)}}}),!t.length)throw Error("This saved space has no visible geometry.");let m=(y,b,P,C)=>{for(let D of[.45,1,1.65,2.15]){a.set(y,P+D,b);let _=new Set;for(let v=Math.floor((b-C)/o);v<=Math.floor((b+C)/o);v++)for(let A=Math.floor((P+D-C)/o);A<=Math.floor((P+D+C)/o);A++)for(let N=Math.floor((y-C)/o);N<=Math.floor((y+C)/o);N++)for(let B of i.get(N+","+A+","+v)||[])_.add(B);for(let v of _){let A=r[v];if(f.set(l.fromArray(A),c.fromArray(A,3),h.fromArray(A,6)),f.closestPointToPoint(a,u),u.distanceToSquared(a)<C*C)return!1}}return!0},x=new it().setFromObject(e),g=x.getCenter(new E),p=new pt,w={x:g.x,z:x.max.z+3,y:0},M={x:g.x,z:g.z,y:0};return{legacy:!0,legacyClear:m,group:e,meshes:t,plan:{meshes:[],nodes:[],paths:[],entrance:w,gathering:M,validation:{routesClear:!0,headroom:2.35}},bounds:x,footprints:p,offset:{x:0,y:0,z:0},scale:1,support:pc(n),layout:s.layout||[],attribution:{},triangles:d}}var zr={spatialScale:2.6,opening:.5,separation:1,repetition:1,intensity:.65,moduleCount:9,density:.88,rotationVariation:.65,scaleVariation:.28,connectionStrength:.65,distortion:.5,corridorWidth:2.2,seed:42,compactness:.88,interlocking:.88,verticalComplexity:.9,fusionStrength:.7,voidDensity:.65};function wp(s,e){if(s?.format!=="borrowed-worlds-model-architecture"||s.version!==1)throw Error("Choose a composition saved by the model transformation workspace.");let t=r=>{if(!r||!Array.isArray(r.items)||r.items.length>50)throw Error("Choose a composition with up to fifty casts.");let o=r.settings;for(let[l,c,h]of[["spatialScale",1.8,3.4],["opening",.2,.85],["separation",0,2.5],["repetition",1,3],["intensity",.2,1]])if(!Number.isFinite(o?.[l])||o[l]<c||o[l]>h)throw Error("A transformation setting is outside its limits.");if(!Number.isInteger(o.repetition))throw Error("Invalid repetition count.");let a=new Set;for(let l of r.items){if(typeof l.id!="string"||a.has(l.id)||!e.includes(l.asset)||!["x","z","rotation","scale"].every(c=>Number.isFinite(l[c]))||Math.abs(l.x)>18||Math.abs(l.z)>18||Math.abs(l.rotation)>2*Math.PI||l.scale<.5||l.scale>1.4)throw Error("A source cast has invalid placement or size.");a.add(l.id)}},n=structuredClone(s);n.settings={...zr,...n.settings},n.generated&&(n.generated.input.settings={...zr,...n.generated.input.settings});let i=r=>{for(let[o,a,l]of[["moduleCount",1,50],["density",.25,1],["rotationVariation",0,1],["scaleVariation",0,.45],["connectionStrength",0,1],["distortion",0,1],["corridorWidth",1.8,3.2],["seed",0,999999],["compactness",0,1],["interlocking",0,1],["verticalComplexity",0,1],["fusionStrength",0,1],["voidDensity",.2,.85]])if(!Number.isFinite(r.settings[o])||r.settings[o]<a||r.settings[o]>l)throw Error("An aggregation setting is outside its limits.");if(!Number.isInteger(r.settings.seed)||!Number.isInteger(r.settings.moduleCount))throw Error("Module count and seed must be whole numbers.")};return t(n),i(n),n.generated&&(t(n.generated.input),i(n.generated.input)),n}function Tp(s){let e=new pt;e.name="Architecture transformed from source casts";for(let t of s.meshes){if(!t.positions.length)continue;let n=new vt;if(n.setAttribute("position",new tt(t.positions,3)),n.setAttribute("color",new tt(t.colors,3)),t.index&&n.setIndex(new tt(t.index,1)),t.sourceTags&&n.setAttribute("sourceTag",new tt(Float32Array.from(t.sourceTags),1)),t.normals)n.setAttribute("normal",new tt(t.normals,3));else{let o=Qf(n,1e-4);n.dispose(),n=o,n.computeVertexNormals()}let i=t.road?mc(n):new Zt({color:16777215,vertexColors:!t.road,roughness:t.road?.58:t.solid?.32:.63,metalness:t.road?0:t.solid?.48:.12,clearcoat:t.road?.05:t.solid?.4:0,clearcoatRoughness:t.road?.035:.22,side:xt}),r=new Ye(n,i);r.name=t.name,r.castShadow=t.solid,r.receiveShadow=!0,r.userData={sourceId:t.sourceId,instanceId:t.moduleId||t.sourceId,operation:t.operation,sourceIds:t.sourceIds,moduleIds:t.moduleIds,sourceArchitecture:!!t.sourceId||!!t.sourceIds,fusionCore:!!t.fusionCore,road:!!t.road,roadThickness:t.thickness||0},t.sectionIndex&&(r.sectionGeometry=new vt,r.sectionGeometry.setAttribute("position",n.attributes.position),r.sectionGeometry.setIndex(new tt(t.sectionIndex,1))),e.add(r)}return e}var RE=Math.PI*2,Ku=(s,e,t)=>Math.max(e,Math.min(t,s));function n_(s,e,t,n){let i=(e-s.minX)/s.step,r=(t-s.minY)/s.step,o=(n-s.minZ)/s.step,a=Math.floor(i),l=Math.floor(r),c=Math.floor(o);if(a<0||l<0||c<0||a>=s.nx-1||l>=s.ny-1||c>=s.nz-1)return 100;let h=0;for(let u=0;u<=1;u++)for(let f=0;f<=1;f++)for(let d=0;d<=1;d++){let m=(d?i-a:1-i+a)*(f?r-l:1-r+l)*(u?o-c:1-o+c);h+=s.values[((c+u)*s.ny+l+f)*s.nx+a+d]*m}return h}function Ap(s,e,t,n,i,r=.23,o=!1,a=1){for(let l of[.65,1.2,1.65,2.35])for(let[c,h]of[[0,0],[r,0],[-r,0],[0,r],[0,-r]]){let u=t+c,f=i+h,d=n+l*a,m=Math.round((u-s.minX)/s.step),x=Math.round((d-s.minY)/s.step),g=Math.round((f-s.minZ)/s.step);if(m<0||x<0||g<0||m>=s.nx||x>=s.ny||g>=s.nz){if(o)continue;return!1}if(n_(s,u,d,f)<.03||e[(g*s.ny+x)*s.nx+m])return!1}return!0}function Rp(s,e,t,n=0,i=.22){let r=Math.round((e-s.minX)/s.step),o=Math.round((t-s.minZ)/s.step);if(r<0||o<0||r>=s.nx||o>=s.nz)return null;let a=o*s.nx+r,l=null,c=1/0;for(let h=0;h<s.counts[a];h++){let u=Cp(s,a,h,e,t),f=Math.abs(u-n);f<c&&f<=i&&(l=u,c=f)}return l}function Cp(s,e,t,n,i){if(!s.corners)return s.heights[e*s.layers+t];let r=e%s.nx,o=Math.floor(e/s.nx),a=Ku((n-s.minX-r*s.step)/s.step+.5,0,1),l=Ku((i-s.minZ-o*s.step)/s.step+.5,0,1),c=(e*s.layers+t)*4,h=s.corners;return a>=l?h[c]*(1-a)+h[c+1]*(a-l)+h[c+2]*l:h[c]*(1-l)+h[c+2]*a+h[c+3]*(l-a)}function Ip(s,e,t,n,i=.23,r=1){for(let[o,a]of[[0,0],[i,0],[-i,0],[0,i],[0,-i]]){let l=e+o,c=t+a,h=Math.round((l-s.minX)/s.step),u=Math.round((c-s.minZ)/s.step);if(h<0||u<0||h>=s.nx||u>=s.nz)continue;let f=u*s.nx+h;for(let d=0;d<s.counts[f];d++){let m=Cp(s,f,d,l,c);if(m>n+.4*r&&m<n+2.55*r+.24)return!1}}return!0}function Pp(s){s.updateMatrixWorld(!0);let e=[],t=0,n=0,i=new Map,r=h=>{if(!h?.image)return null;if(i.has(h))return i.get(h);try{let u=h.image,f=document.createElement("canvas"),d=Math.max(1,Math.min(1024,u.width)),m=Math.max(1,Math.min(1024,u.height));f.width=d,f.height=m;let x=f.getContext("2d",{willReadFrequently:!0});x.drawImage(u,0,0,d,m);let g={w:d,h:m,pixels:x.getImageData(0,0,d,m).data};return i.set(h,g),g}catch{throw Error("This model texture cannot be sampled. Use an embedded GLB texture or vertex colours.")}};if(s.traverse(h=>{if(!h.isMesh)return;if(h.isSkinnedMesh||Object.keys(h.geometry.morphAttributes||{}).length)throw Error("Animated or deforming meshes must be saved as a static model first.");let u=h.geometry,f=u.attributes.position,d=u.attributes.color,m=u.attributes.uv;if(!f||f.itemSize!==3)return;let x=u.index?Uint32Array.from(u.index.array):Uint32Array.from({length:f.count},(D,_)=>_);if(n+=x.length/3,n>6e5)throw Error("This model exceeds 600,000 triangles. Use a lighter version for spatial generation.");let g=Array.isArray(h.material)?h.material:[h.material],p=new Uint16Array(f.count);for(let D of u.groups||[])for(let _=D.start;_<Math.min(x.length,D.start+D.count);_++)p[x[_]]=D.materialIndex||0;let w=new Float32Array(f.count*3),M=new Float32Array(f.count*3),y=new E,b=new Me,P=new Pe,C=new Pe;for(let D=0;D<f.count;D++){y.fromBufferAttribute(f,D).applyMatrix4(h.matrixWorld),w.set(y.toArray(),D*3);let _=g[p[D]]||g[0];if(P.copy(_?.color||new Pe(.65,.65,.65)),d&&_?.vertexColors&&P.multiply(new Pe(d.getX(D),d.getY(D),d.getZ(D))),_?.map&&m){let v=r(_.map);if(v){b.fromBufferAttribute(m,D),_.map.updateMatrix(),_.map.transformUv(b);let A=Math.max(0,Math.min(v.w-1,Math.floor(b.x*v.w))),N=Math.max(0,Math.min(v.h-1,Math.floor(b.y*v.h))),B=(N*v.w+A)*4;C.setRGB(v.pixels[B]/255,v.pixels[B+1]/255,v.pixels[B+2]/255,Et),P.multiply(C)}}M.set(P.toArray(),D*3)}e.push({positions:w,colors:M,index:x,offset:t}),t+=f.count}),!n)throw Error("This model has no usable triangles.");let o=new Float32Array(t*3),a=new Float32Array(t*3),l=new Uint32Array(n*3),c=0;for(let h of e){o.set(h.positions,h.offset*3),a.set(h.colors,h.offset*3);for(let u of h.index)l[c++]=u+h.offset}return{positions:o,colors:a,index:l}}var i_=(s,e,t)=>Math.max(e,Math.min(t,s)),gc=s=>s.spaceSources().map(e=>({id:e.id,modelId:e.modelId,name:e.name,...e.layout})),s_=s=>s.map(e=>({modelId:e.modelId,...e.layout})).sort((e,t)=>JSON.stringify(e).localeCompare(JSON.stringify(t))),kr=s=>JSON.stringify(s.spaceSources().map(e=>({id:e.id,modelId:e.modelId,...e.layout})).sort((e,t)=>JSON.stringify(e).localeCompare(JSON.stringify(t))));function Ju(s){let e=2166136261;for(let t of JSON.stringify(s_(s)))e=Math.imul(e^t.charCodeAt(0),16777619);return(e>>>0)%1e6}function Hr(s){return wp({format:"borrowed-worlds-model-architecture",version:1,items:[],settings:{...zr,...s}},[]).settings}async function Dp(s,e,t=()=>{}){if(s.some(m=>m.target==="space"))throw Error("Saved spaces are display-only and cannot be fused into another space.");if(!s.length)throw Error("Place at least one model before making a space.");if(s.length>50)throw Error("Use up to 50 placed models for this space. Keep other models in the library.");s=[...s].sort((m,x)=>JSON.stringify({modelId:m.modelId,...m.layout}).localeCompare(JSON.stringify({modelId:x.modelId,...x.layout})));let n=s.map(m=>{m.object.updateWorldMatrix(!0,!0);let x=new it().setFromObject(m.object),g=x.getSize(new E),p=new E().setFromMatrixPosition(m.object.matrixWorld);return{s:m,size:g,position:p}}),i=new E(1/0,0,1/0),r=new E(-1/0,0,-1/0);for(let m of n)i.min(m.position),r.max(m.position);let o=0,a=n.map(m=>Math.max(m.size.x,m.size.y,m.size.z)).sort((m,x)=>m-x),l=Math.max(a[Math.floor(a.length/2)]/3.2,(r.x-i.x)/24,(r.z-i.z)/24);if(!Number.isFinite(l)||l<=0)throw Error("The placed models have no measurable size.");let c=i.clone().add(r).multiplyScalar(.5),h=1/l,u={},f=[],d={};for(let m=0;m<n.length;m++){let{s:x,size:g,position:p}=n[m],w=String(x.modelId);if(!u[w]){let M=x.object.clone(!0);M.position.set(0,0,0),M.quaternion.identity(),M.scale.set(1,1,1),M.updateMatrix(),M.updateMatrixWorld(!0);let y=new it().setFromObject(M),b=y.getSize(new E),P=y.getCenter(new E);if(!b.length()||!Number.isFinite(b.length()))throw Error(x.name+" contains no usable geometry.");M.position.set(-P.x,-y.min.y,-P.z);let C=new pt;if(C.add(M),C.scale.setScalar(3.2/Math.max(b.x,b.y,b.z)),C.updateMatrixWorld(!0),u[w]=Pp(C),o+=u[w].index.length/3,o>15e5)throw Error("This layout exceeds the 1.5 million source-triangle budget. Use lighter models or a smaller collection for Make space.")}f.push({id:x.id,asset:w,x:(p.x-c.x)*h,z:(p.z-c.z)*h,rotation:x.layout.rotation||0,scale:i_(Math.max(g.x,g.y,g.z)/(3.2*l),.5,1.4)}),d[x.id]={modelId:w,name:x.name,layout:{...x.layout},originalPosition:{x:p.x,z:p.z}},t(Math.round((m+1)/n.length*100),"Reading source model "+(m+1)+" / "+n.length),await new Promise(M=>typeof requestAnimationFrame=="function"?requestAnimationFrame(M):setTimeout(M,0))}return{items:f,sources:u,settings:{...Hr(e),layoutDriven:!0,worldScale:l,moduleCount:Math.max(f.length,e.moduleCount||9),seed:Ju(s)},centre:{x:0,z:0},layoutScale:h,worldScale:l,attribution:d}}function Lp(s,e,t=20){s.updateMatrixWorld(!0);let n=new it().setFromObject(s),i=.6;if(n.max.x-n.min.x>t*2-i*2||n.max.z-n.min.z>t*2-i*2)throw Error("This growth is wider than the hall. Reduce the fragment count or scale and make space again.");let r=-(n.min.x+n.max.x)/2,o=-(n.min.z+n.max.z)/2;return s.position.set(r,.06,o),s.updateMatrixWorld(!0),{offset:{x:r,y:.06,z:o},bounds:new it().setFromObject(s)}}function Up({scene:s,renderer:e,placement:t,getView:n,getCamera:i,setView:r,navigate:o,invalidate:a,onSpaceBounds:l,onSpaceLight:c}){let h=V=>document.getElementById(V),u=h("walk-surface"),f="learning-vegas-inhabitable-space-v1",d=null,m=!1,x=!1,g=!1,p="",w="",M={...zr,layoutVersion:2},y=null,b=null,P=0,C=null,D=!1,_=null,v=0,A=null,N=0,B=!1,z=null,k=null,X=new mi,te=new Me,Y=null,ie,ae=h("exhibition-space-feedback"),fe=V=>{h("exhibition-space-status").textContent=V,ae.textContent=V,ae.hidden=!1,clearTimeout(ie)},Ue=()=>t.spaceSources().some(V=>V.target==="space");function Ce(){let V=Ue(),H=h("exhibition-make-space");H.disabled=V||x||!t.state().modelCount||!!window.ExhibitionAgentDrafts?.state().busy||!!window.ExhibitionAgent?.state().busy;let ne="Make space";H.textContent=x?Math.round(v)+"%":"+",H.title=V?"Saved spaces can be arranged, but cannot make another space.":ne,H.setAttribute("aria-label",ne),h("exhibition-space-keyword").textContent=ne.toUpperCase(),h("exhibition-space-options").hidden=!1,h("space-options-empty").hidden=!!d,h("exhibition-space-original").hidden=!d,h("exhibition-space-original").textContent=m?"Original models":"Show space",h("exhibition-space-original").disabled=x,h("exhibition-enter-space").hidden=!d||!m,h("exhibition-enter-space").disabled=x,h("exhibition-export-space").hidden=!d,h("exhibition-export-space").disabled=x,h("walk-save-space").hidden=!d,h("walk-save-space").disabled=x||!d,h("exhibition-space-save").disabled=x||!t.state().modelCount,h("exhibition-space-load").disabled=x,u.dataset.spaceGenerationBlocked=String(V),u.dataset.spaceEngine="inhabitable-v1",u.dataset.spacePreview=String(m),u.dataset.spaceBusy=String(x),u.dataset.spaceStale=String(g),u.dataset.spaceProgress=String(v),clearTimeout(ie),!x&&!g&&!p&&!ae.hidden&&(ie=setTimeout(()=>{ae.hidden=!0},6e3));for(let ue of document.querySelectorAll("[data-space-setting]")){ue.dataset.spaceSetting==="seed"&&(ue.disabled=!0,ue.title="Determined by the placed models and their layout"),document.activeElement!==ue&&(ue.value=M[ue.dataset.spaceSetting]);let $=ue.nextElementSibling;$?.tagName==="OUTPUT"&&($.textContent=String(M[ue.dataset.spaceSetting]))}}function ze(){try{localStorage.setItem(f,JSON.stringify({version:1,active:m,settings:M,generatedSettings:y,signature:w,layout:gc(t)}))}catch{fe("Space ready; recipe storage is full. Use Save space recipe.")}}function Ge(V){m=!!V&&!!d,d&&(d.group.visible=m,d.footprints.visible=m&&n()==="axonometric"),t.showSources(!m,{keepFootprints:!1}),window.dispatchEvent(new Event("exhibition-space-change")),c?.(d,m),Ce(),a(),ze()}function se(V){V&&(s.remove(V.group,V.footprints),V.footprints&&(V.footprints.children[0]?.geometry.dispose(),V.footprints.children[0]?.material.dispose()),V.group.traverse(H=>{if(H.isMesh){H.geometry.dispose(),H.sectionGeometry?.dispose();for(let ne of Array.isArray(H.material)?H.material:[H.material])ne.dispose()}}))}function le(V){return new Promise((H,ne)=>{let ue=++P;b=new Worker(new URL("exhibition-space-worker.js",document.baseURI));let $=!1,de=(Ee,Se)=>{$||($=!0,b?.terminate(),b=null,C=null,Ee(Se))};C=()=>de(ne,Error("Space generation cancelled.")),b.onerror=Ee=>de(ne,Error(Ee.message||"Space worker could not finish.")),b.onmessage=Ee=>{let Se=Ee.data;if(Se.ticket===ue){if(Se.error){de(ne,Error(Se.error));return}Se.progress!==void 0&&(v=5+Se.progress*.93,fe(Se.message+" / "+Math.round(v)+"%"),Ce()),Se.plan&&de(H,Se.plan)}},b.postMessage({ticket:ue,...V})})}function _e(V,H,ne){let ue=new pt;ue.name="Generated space / ground-contact cells";let $=V.volumeGrid,de=new en(20,20),Ee=new Rt({color:16179104,transparent:!0,opacity:.72,depthTest:!0,depthWrite:!1,toneMapped:!1,side:xt}),Se=(ge,U)=>{let L=Math.round(((ge-H.x)/ne-$.minX)/$.step),K=Math.round((-H.y/ne-$.minY)/$.step),he=Math.round(((U-H.z)/ne-$.minZ)/$.step);return L>=0&&L<$.nx&&K>=0&&K<$.ny&&he>=0&&he<$.nz?$.values[(he*$.ny+K)*$.nx+L]:1/0};for(let ge=0;ge<20;ge++)for(let U=0;U<20;U++){let L=An(U),K=An(ge);if([[0,0],[-.8,-.8],[.8,-.8],[-.8,.8],[.8,.8]].some(([he,Ae])=>Se(L+he*20/2,K+Ae*20/2)<0)){let he=new Ye(de,Ee);he.rotation.x=-Math.PI/2,he.position.set(L,.005,K),ue.add(he)}}return ue}function be(V,H,ne=1){let ue={...V,meshes:V.meshes.filter(de=>de.name!=="Surrounding ground")},$=Tp(ue);$.name="Inhabitable architecture / placed sculpture aggregation",$.scale.setScalar(ne);try{let{offset:de,bounds:Ee}=Lp($,H.centre,1/0),Se=[];$.traverse(U=>{U.isMesh&&Se.push(U)}),$.userData={engine:"inhabitable-v1",snapshot:!0,settings:V.settings,sources:H.attribution,validation:V.validation,spaceScale:ne};let ge=_e(V,de,ne);return{scale:ne,support:pc(V.meshes.find(U=>U.road)),group:$,meshes:Se,plan:V,offset:de,bounds:Ee,footprints:ge,attribution:H.attribution,layout:Object.entries(H.attribution).map(([U,L])=>({id:U,modelId:L.modelId,name:L.name,...L.layout})),triangles:V.meshes.reduce((U,L)=>U+(L.index?.length||L.positions.length/3)/3,0)}}catch(de){throw se({group:$}),de}}async function we({restore:V=!1,override:H=null}={}){if(x||D||window.ExhibitionAgentDrafts?.state().busy||window.ExhibitionAgent?.state().busy)return!1;if(await t.ready,Ue())return p="Saved spaces can be arranged, but cannot be used to make another space.",fe(p),Ce(),!1;let ne=kr(t),ue=N,$={...M};x=!0,v=0,p="",Ce();let de;try{let Ee={...Hr(H||M),layoutDriven:!0,moduleCount:Math.max(t.spaceSources().length,(H||M).layoutVersion===2?(H||M).moduleCount:9),layoutVersion:2,seed:Ju(t.spaceSources())},Se=await Dp(t.spaceSources(),Ee,(U,L)=>{v=U*.05,fe(L),Ce()});if(D)throw Error("The exhibition was closed.");let ge=await le(Se);if(D)throw Error("The exhibition was closed.");if(ne!==kr(t))throw Error("The placed models changed during generation. Click Make space again.");return de=be(ge,Se,Se.worldScale),l?.(de.bounds),se(d),d=de,de=null,s.add(d.group,d.footprints),k=null,w=ne,M=N!==ue?M:V?$:{...Ee},y={...Ee},g=JSON.stringify(M)!==JSON.stringify(y),_=null,B=!1,z=null,A=null,v=100,Ge(!0),u.dataset.spaceSeed=String(Ee.seed),u.dataset.spaceRoutesClear=String(ge.validation.routesClear),u.dataset.spaceTriangles=String(d.triangles),fe(g?"SPACE READY / CHANGES STAGED FOR UPDATE":"SPACE READY / "+ge.nodes.length+" FRAGMENTS / "+Ee.corridorWidth.toFixed(1)+" M ROUTE"),u.dataset.spaceArchived="false",!0}catch(Ee){return se(de),p=Ee.message,fe(p),!1}finally{x=!1,Ce()}}function Ze(V){return{x:(V.x-d.offset.x)/d.scale,z:(V.z-d.offset.z)/d.scale}}function et(V,H,ne,ue){if(d.legacy)return d.legacyClear(V,H,ne,ue);let $=1/d.scale;return Ap(d.plan.volumeGrid,d.plan.volumeGrid.surfaces,V,ne,H,ue*$,!0,$)&&Ip(d.plan.nav,V,H,ne,ue*$,$)}function O(V,H,ne,ue,$=.22){let de=d.support(V,H),Ee=d.scale;return de.push(-d.offset.y/Ee),de.sort((Se,ge)=>ge-Se).find(Se=>Se<=ne+.22/Ee&&Se>=ne-$/Ee&&et(V,H,Se,ue))??null}function Ke(){if(!d||x)return;Ge(!0);let V=d.plan.paths.find($=>$.role==="carved entrance"),H=V?.points[0]||d.plan.entrance,ne=V?.points.find($=>Math.hypot($.x-H.x,$.z-H.z)>.6)||d.plan.gathering,ue=(d.plan.nav?Rp(d.plan.nav,H.x,H.z,H.y,1):H.y)??H.y??0;_={x:H.x*d.scale+d.offset.x,z:H.z*d.scale+d.offset.z,foot:ue*d.scale+d.offset.y},B=!1,z={..._},h("exhibition-space-options").open=!1,r("room"),o({x:_.x,z:_.z,y:_.foot+1.65,yaw:Math.atan2(H.x-ne.x,H.z-ne.z),pitch:0}),fe("INSIDE SPACE / WASD WALK / Q UP / E DOWN / SPACE TO LAND"),a()}function ke(V,H=.35,{fly:ne=!1,eyeHeight:ue=1.65}={}){if(!m||!d)return V;if(ne)return _={x:V.x,z:V.z,foot:V.y-ue},B=!0,u.dataset.spaceFootHeight=String(_.foot),V;let $={x:V.x,z:V.z,foot:Math.max(0,V.y-ue)},de=_||{...$};if(!ne&&B){let U=Ze(de),L=O(U.x,U.z,(de.foot-d.offset.y)/d.scale,H,1/0);L!==null?de={...de,foot:L*d.scale+d.offset.y}:z&&(de={...z}),$.x=de.x,$.z=de.z,$.foot=de.foot}B=!1;let Ee=Math.hypot($.x-de.x,$.z-de.z),Se=Math.max(1,Math.ceil(Ee/.1)),ge=de;for(let U=1;U<=Se;U++){let L=de.x+($.x-de.x)*U/Se,K=de.z+($.z-de.z)*U/Se,he=Ze({x:L,z:K}),Ae=O(he.x,he.z,(ge.foot-d.offset.y)/d.scale,H);if(Ae===null){let ve=[{x:L,z:ge.z},{x:ge.x,z:K}].sort((me,De)=>Math.hypot($.x-me.x,$.z-me.z)-Math.hypot($.x-De.x,$.z-De.z));for(let me of ve){let De=Ze(me),Xe=O(De.x,De.z,(ge.foot-d.offset.y)/d.scale,H);if(Xe!==null){ge={...me,foot:Xe*d.scale+d.offset.y};break}}continue}ge={x:L,z:K,foot:Ae*d.scale+d.offset.y}}return _=ge,ne||(z={...ge}),V.set(ge.x,ge.foot+ue,ge.z),u.dataset.spaceFootHeight=String(ge.foot),V}async function Oe(){if(!d)throw Error("Generate a space first.");let V=d.group.visible;d.group.visible=!0;try{k||(k=new Blob([await new Ms().parseAsync(d.group,{binary:!0})],{type:"model/gltf-binary"}));let H=d.bounds,ne=H.getSize(new E),ue=H.getCenter(new E),$=ne.length(),de=new Ft(35,1,.01,$*10+100);de.position.copy(ue).add(new E($*.95,$*.7,$*.95)),de.lookAt(ue);let Ee=new Sn;Ee.background=new Pe(15921906),Ee.environment=s.environment,Ee.add(new ji(16777215,9608616,2));let Se=new pi(16777215,2);Se.position.set(30,40,25),Ee.add(Se);let ge=d.group.clone(!0),U=[];ge.traverse(At=>{At.isMesh&&(At.material=At.material.clone(),At.material.clippingPlanes=[],U.push(At.material))}),Ee.add(ge);let L=new Lt(640,640);L.texture.colorSpace=Et;let K=e.getRenderTarget(),he=new Uint8Array(640*640*4);try{e.setRenderTarget(L),e.render(Ee,de),e.readRenderTargetPixels(L,0,0,640,640,he)}finally{e.setRenderTarget(K),L.dispose(),U.forEach(At=>At.dispose())}let Ae=document.createElement("canvas");Ae.width=Ae.height=640;let ve=Ae.getContext("2d"),me=ve.createImageData(640,640);for(let At=0;At<640;At++)me.data.set(he.subarray((639-At)*640*4,(640-At)*640*4),At*640*4);ve.putImageData(me,0,0);let De=await new Promise((At,qt)=>Ae.toBlob(ri=>ri?At(ri):qt(Error("Space preview unavailable")),"image/png")),Xe=n()==="room"?i():null,_t=Xe?{x:Xe.position.x,y:Xe.position.y,z:Xe.position.z,yaw:Xe.rotation.y,pitch:Xe.rotation.x}:null;return{runtime:d.legacy?null:{version:1,scale:d.scale,plan:d.plan,attribution:d.attribution,layout:d.layout,audio:d.savedAudio||t.audioSources?.()||[]},renderCamera:_t,glb:k,preview:De,signature:w,triangles:d.triangles,camera:{orbit:{theta:Math.PI/4,phi:Math.atan2(Math.sqrt(2)*.95,.7),radius:de.position.distanceTo(ue)},target:{x:ue.x,y:ue.y,z:ue.z},fieldOfView:35},layout:d.layout}}finally{d.group.visible=V,a()}}async function Te(){if(!d||x)return!1;x=!0,Ce(),fe("SAVING SPACE");try{let V=await window.ExhibitionArchives.saveSpace(await Oe());return d.savedId=V.id,u.dataset.spaceArchived="true",fe("SPACE SAVED"),V}catch(V){return fe("Could not save this space: "+V.message),!1}finally{x=!1,Ce()}}async function q(V){if(x||D)return!1;x=!0,p="",Ce();let H;try{let ne=V.runtime;return H=ne?.version===1?be(ne.plan,{centre:{x:0,z:0},attribution:ne.attribution},ne.scale||1):await Ep(V),H.savedAudio=ne?.audio||[],H.savedId=V.id,H.layout=ne?.layout||V.layout||[],l?.(H.bounds),se(d),d=H,H=null,s.add(d.group,d.footprints),k=V.glb,w=V.signature||"",y={...M,...ne?.plan.settings||{}},M={...y},_=null,z=null,B=!1,g=!1,Ge(!0),x=!1,Ce(),V.renderCamera?(r("room"),o(V.renderCamera)):Ke(),fe("SAVED SPACE / "+V.title),!0}catch(ne){return se(H),p=ne.message,fe(p),!1}finally{x=!1,Ce()}}async function W(){if(!d||x)return!1;x=!0,Ce(),fe("Preparing GLB...");let V=d,H=V.group.visible;try{V.group.visible=!0;let ne=await new Ms().parseAsync(V.group,{binary:!0});return ye(new Blob([ne],{type:"model/gltf-binary"}),"learning-vegas-inhabitable-space.glb"),fe("SPACE EXPORTED / GLB SNAPSHOT"),!0}catch(ne){return p=ne.message,fe(p),!1}finally{V.group.visible=H,x=!1,Ce(),a()}}function ye(V,H){let ne=URL.createObjectURL(V),ue=document.createElement("a");ue.href=ne,ue.download=H,ue.click(),setTimeout(()=>URL.revokeObjectURL(ne),3e4)}let Ne=V=>{let H=V.target,ne=H.dataset.spaceSetting;if(!(!ne||ne==="seed"||H.value===""))try{M=Hr({...M,layoutVersion:2,[ne]:+H.value}),N++,g=!!d&&(kr(t)!==w||JSON.stringify(M)!==JSON.stringify(y)),fe(g?"SETTINGS CHANGED / MAKE SPACE":d?"SPACE READY":"SETTINGS READY / MAKE SPACE"),ze(),Ce()}catch(ue){fe(ue.message),Ce()}};for(let V of document.querySelectorAll("[data-space-setting]"))V.addEventListener("input",Ne),V.addEventListener("change",Ne);let Be=()=>ye(new Blob([JSON.stringify({format:"learning-vegas-inhabitable-space",version:1,settings:y||M,pendingSettings:M,layout:gc(t)},null,2)],{type:"application/json"}),"learning-vegas-space-recipe.json"),R=async V=>{try{if(x)throw Error("Wait for this generation before loading a recipe.");let H=V.target.files?.[0];if(!H||H.size>2e6)throw Error("Choose a space recipe under 2 MB.");let ne=JSON.parse(await H.text());if(ne.format!=="learning-vegas-inhabitable-space"||ne.version!==1||!Array.isArray(ne.layout))throw Error("Choose a saved MAKE SPACE recipe.");let ue=Hr(ne.settings),$=gc(t);if(ne.layout.length!==$.length||ne.layout.some(de=>!$.some(Ee=>Ee.id===de.id&&Ee.modelId===de.modelId)))throw Error("This recipe needs the same placed models. Restore those models first.");await t.applyLayout(ne.layout),M=ue,g=!!d,await we({override:ue})}catch(H){p=H.message,fe(p)}finally{V.target.value="",Ce()}};function S(){d&&(g=kr(t)!==w||JSON.stringify(M)!==JSON.stringify(y),fe(g?"LAYOUT CHANGED / MAKE SPACE":"SPACE READY")),Ce(),ze()}function j(V){Y=[V.clientX,V.clientY]}function re(V){if(!m||!d||!Y||Math.hypot(V.clientX-Y[0],V.clientY-Y[1])>5)return;Y=null;let H=e.domElement.getBoundingClientRect();te.set((V.clientX-H.left)/H.width*2-1,-(V.clientY-H.top)/H.height*2+1);let ne=i?.();if(!ne)return;X.setFromCamera(te,ne);let ue=X.intersectObjects(d.meshes,!1).find(U=>U.object.userData.sourceId||U.object.userData.sourceIds);if(!ue)return;let $=ue.object.userData,de=ue.object.geometry.attributes.sourceTag,Ee=de&&ue.face?Math.round(de.getX(ue.face.a)):0,Se=$.sourceIds?.[Ee]||$.sourceId,ge=d.attribution[Se];A={id:Se,name:ge?.name||"Source fragment",operation:$.operation},fe("FROM "+A.name+" / "+($.operation||"Transformed source fragment")),h("exhibition-space-status").title=$.operation||"",u.dataset.spaceSource=A.name}let pe=[["walk-save-space",Te],["exhibition-make-space",()=>we()],["exhibition-enter-space",Ke],["exhibition-space-original",()=>Ge(!m)],["exhibition-export-space",W],["exhibition-space-save",Be],["exhibition-space-load",()=>h("exhibition-space-recipe").click()]];pe.forEach(([V,H])=>h(V).addEventListener("click",H)),h("exhibition-space-recipe").addEventListener("change",R),window.addEventListener("exhibition-placement-change",S),window.addEventListener("exhibition-draft-queue-change",Ce),window.addEventListener("exhibition-agent-change",Ce),e.domElement.addEventListener("pointerdown",j),e.domElement.addEventListener("pointerup",re);let Q=t.ready.then(async()=>{Ce();try{let V=JSON.parse(localStorage.getItem(f)||"null");V?.version===1&&(M=Hr({...V.settings,layoutVersion:2,moduleCount:V.settings?.layoutVersion===2?V.settings.moduleCount:Math.max(9,V.settings?.moduleCount||9)}),y=V.generatedSettings,V.active&&V.signature===kr(t)&&await we({restore:!0,override:y||M}),Ce())}catch(V){fe("Previous space could not reopen: "+V.message)}});return Object.freeze({ready:Q,generate:we,captureArchive:Oe,saveSpace:Te,openSaved:q,enter:Ke,showOriginal:()=>Ge(!1),showSpace:()=>Ge(!0),constrain:ke,collisionMeshes:()=>m&&d?d.meshes:[],exportGLB:W,setViewMode:V=>{d&&(d.footprints.visible=m&&V==="axonometric")},audioAnchors:()=>m&&d?d.plan.nodes.map(V=>({id:V.sourceId,x:V.center.x*d.scale+d.offset.x,z:V.center.z*d.scale+d.offset.z,y:V.view.y*d.scale+d.offset.y+1.65,width:V.radius*2*d.scale,...d.savedAudio?{audio:d.savedAudio.find(H=>H.id===V.sourceId)?.audio,name:d.savedAudio.find(H=>H.id===V.sourceId)?.name}:{}})):[],state:()=>({canGenerate:!Ue(),engine:"inhabitable-v1",layoutDriven:!0,scale:d?.scale||1,groundContactCells:d?.footprints.children.length||0,anchors:d?d.plan.nodes.map(V=>({id:V.sourceId,x:V.center.x*d.scale+d.offset.x,z:V.center.z*d.scale+d.offset.z})):[],active:m,busy:x,stale:g,error:p,signature:w,settings:{...M},generatedSettings:y,progress:v,connected:!!d?.plan.validation.routesClear,minimumClearance:(d?.plan.validation.headroom||0)*(d?.scale||1),triangles:d?.triangles||0,validation:d?.plan.validation||null,bounds:d?{min:d.bounds.min.toArray(),max:d.bounds.max.toArray()}:null,offset:d?.offset||null,sourceSelection:A}),dispose:()=>{D=!0,clearTimeout(ie),C?.(),b?.terminate(),pe.forEach(([V,H])=>h(V).removeEventListener("click",H)),h("exhibition-space-recipe").removeEventListener("change",R);for(let V of document.querySelectorAll("[data-space-setting]"))V.removeEventListener("input",Ne),V.removeEventListener("change",Ne);window.removeEventListener("exhibition-placement-change",S),window.removeEventListener("exhibition-draft-queue-change",Ce),window.removeEventListener("exhibition-agent-change",Ce),e.domElement.removeEventListener("pointerdown",j),e.domElement.removeEventListener("pointerup",re),c?.(null,!1),se(d),d=null}})}var r_=1;function Op(s){let e=globalThis.ExhibitionSpaceEngine;if(e&&e.apiVersion!==r_)throw Error("Unsupported exhibition space engine API version.");let t=e?e.create(s):Up(s);for(let n of["generate","enter","showOriginal","showSpace","constrain","collisionMeshes","exportGLB","state","dispose"])if(typeof t?.[n]!="function")throw Error("Exhibition space engine must implement "+n+"().");if(!t.ready||typeof t.ready.then!="function")throw Error("Exhibition space engine must expose a ready promise.");return t}function Yn(s){return s?.kind==="space"||s?.record?.kind==="space"||s?.record?.target==="space"||s?.target==="space"?{minSpan:2,maxSpan:5,minUnits:1.8}:{minSpan:1,maxSpan:3,minUnits:.35}}function Fp({scene:s,canvas:e,entries:t,group:n,getCamera:i,orient:r,pick:o,fit:a,selectLegacy:l,updateCells:c,save:h,suspend:u,invalidate:f,handles:d,rotateHandle:m,moveHandle:x,handleLayer:g,getMaxHeight:p,prune:w,isLocked:M=()=>!1}){let y=new Set,b=document.getElementById("walk-surface"),P=document.getElementById("exhibition-box-select"),C=document.createElement("div");C.className="exhibition-model-marquee",C.hidden=!0,e.parentElement.append(C);let D=!1,_=null,v=null,A=!1,N=()=>[...y].map(q=>t.get(q)).filter(Boolean),B=()=>{s.updateMatrixWorld(!0);let q=new it;for(let W of N())q.union(new it().setFromObject(W.object));return q};function z(q){y.clear(),q&&t.has(q)&&y.add(q),k()}function k(){v&&(s.remove(v),v.geometry.dispose(),v.material.dispose(),v=null)}function X(){for(let q of y)t.has(q)||y.delete(q);A=!0;try{l(y.size===1?[...y][0]:null)}finally{A=!1}Y(),P.setAttribute("aria-pressed",String(D))}function te(q){if(y.clear(),n.visible)for(let W of q)t.has(W)&&y.add(W);X()}function Y(){k(),y.size>1&&n.visible&&(v=new No(B(),5463912),v.renderOrder=4,s.add(v)),ie(),f()}function ie(){if(y.size<2)return!1;if(!n.visible||e.closest("[hidden]")||b.dataset.modelBrowse==="true")return d.forEach(R=>R.hidden=!0),m.hidden=x.hidden=!0,!0;let q=B(),W=e.getBoundingClientRect(),ye=g.getBoundingClientRect(),Ne=i();d.forEach((R,S)=>{let j=new E(S&1?q.max.x:q.min.x,S&2?q.max.y:q.min.y,S&4?q.max.z:q.min.z).project(Ne),re=W.left+(j.x+1)*W.width/2,pe=W.top+(1-j.y)*W.height/2;R.hidden=j.z<-1||j.z>1||re<W.left||re>W.right||pe<W.top||pe>W.bottom,R.style.left=re-ye.left+"px",R.style.top=pe-ye.top+"px"});let Be=d.filter(R=>!R.hidden).map(R=>({x:parseFloat(R.style.left),y:parseFloat(R.style.top)}));if(m.hidden=x.hidden=!Be.length,Be.length){let R=(Math.min(...Be.map(S=>S.x))+Math.max(...Be.map(S=>S.x)))/2;m.style.left=R+"px",m.style.top=Math.max(16,Math.min(...Be.map(S=>S.y))-26)+"px",x.style.left=R+"px",x.style.top=Math.min(W.height-16,Math.max(...Be.map(S=>S.y))+26)+"px"}return!0}function ae(q){let W=new it().setFromObject(q.object),ye=e.getBoundingClientRect(),Ne=[];for(let Be=0;Be<8;Be++){let R=new E(Be&1?W.max.x:W.min.x,Be&2?W.max.y:W.min.y,Be&4?W.max.z:W.min.z).project(i());R.z>=-1&&R.z<=1&&Number.isFinite(R.x+R.y)&&Ne.push({x:ye.left+(R.x+1)*ye.width/2,y:ye.top+(1-R.y)*ye.height/2})}return Ne.length?{left:Math.max(ye.left,Math.min(...Ne.map(Be=>Be.x))),right:Math.min(ye.right,Math.max(...Ne.map(Be=>Be.x))),top:Math.max(ye.top,Math.min(...Ne.map(Be=>Be.y))),bottom:Math.min(ye.bottom,Math.max(...Ne.map(Be=>Be.y)))}:null}function fe(q){r(),s.updateMatrixWorld(!0);let W=[];for(let ye of t.values()){let Ne=ae(ye);Ne&&Ne.left<=Ne.right&&Ne.top<=Ne.bottom&&Ne.right>=q.left&&Ne.left<=q.right&&Ne.bottom>=q.top&&Ne.top<=q.bottom&&W.push(ye.record.id)}return W}let Ue=new an(new E(0,1,0),0),Ce=new mi,ze=new E;function Ge(q,W){let ye=e.getBoundingClientRect();return r(),Ce.setFromCamera(new Me((q-ye.left)/ye.width*2-1,-(W-ye.top)/ye.height*2+1),i()),Ce.ray.intersectPlane(Ue,ze)?ze.clone():null}function se(){let q=B(),W=q.getCenter(new E);return W.y=0,{centre:W,bounds:q,rows:N().map(ye=>({id:ye.record.id,record:structuredClone(ye.record),position:ye.object.position.clone(),height:ye.height}))}}function le(q,W,ye,Ne){let Be=Yn(q);ye=Math.max(Be.minUnits,Math.min(Be.maxSpan,ye));let R=Math.max(Be.minSpan,Math.min(Be.maxSpan,Math.ceil(ye-1e-6))),S=Math.max(0,Math.min(20-R,Math.floor((W.x+200)/20-R/2))),j=Math.max(0,Math.min(20-R,Math.floor((W.z+200)/20-R/2)));Object.assign(q.record,{col:S,row:j,span:R,scale:ye/R,rotation:Ne,offsetX:W.x-An(S,R),offsetZ:W.z-An(j,R)}),delete q.record.scaleCentreX,delete q.record.scaleCentreZ,a(q)}function _e(q,{dx:W=0,dz:ye=0,scale:Ne=1,angle:Be=0},R=!1){if(M()||!q.rows.length||q.rows.some(Q=>!t.has(Q.id)))return!1;let S=Math.round(Be/(Math.PI/2))*Math.PI/2,j=q.rows.map(Q=>Q.record.span*(Q.record.scale||1));Ne!==1&&(Ne=Math.max(Math.max(...q.rows.map((Q,V)=>Yn(Q.record).minUnits/j[V])),Math.min(Math.min(...q.rows.map((Q,V)=>Yn(Q.record).maxSpan/j[V])),p()/Math.max(...q.rows.map(Q=>Q.height)),Ne))),Ne===1&&S===0&&(W=Math.max(-200-q.bounds.min.x,Math.min(200-q.bounds.max.x,W)),ye=Math.max(-200-q.bounds.min.z,Math.min(200-q.bounds.max.z,ye)));let re=N().map(Q=>({e:Q,record:structuredClone(Q.record)}));for(let Q of q.rows){let V=(Q.position.x-q.centre.x)*Ne,H=(Q.position.z-q.centre.z)*Ne,ne=new E(q.centre.x+V*Math.cos(S)+H*Math.sin(S)+W,0,q.centre.z-V*Math.sin(S)+H*Math.cos(S)+ye);le(t.get(Q.id),ne,Q.record.span*(Q.record.scale||1)*Ne,(Q.record.rotation||0)+S)}let pe=B();if(pe.min.x<-200-.001||pe.max.x>200+.001||pe.min.z<-200-.001||pe.max.z>200+.001){for(let Q of re)Q.e.record=Q.record,a(Q.e);return!1}return c(),Y(),R&&h(),!0}function be(q,W,ye){q.preventDefault(),q.stopImmediatePropagation(),u();let Ne=se(),Be=e.getBoundingClientRect(),R=Ne.centre.clone().project(i()),S=Be.left+(R.x+1)*Be.width/2,j=Be.top+(1-R.y)*Be.height/2;_={type:W,pointerId:q.pointerId,target:ye,start:{x:q.clientX,y:q.clientY},snapshot:Ne,ground:Ge(q.clientX,q.clientY),cx:S,cy:j,distance:Math.max(20,Math.hypot(q.clientX-S,q.clientY-j)),last:Math.atan2(q.clientY-j,q.clientX-S),angle:0,changed:!1},ye.setPointerCapture(q.pointerId)}function we(q){if(M()||q.button!==0||!n.visible)return;let W=o(q);if(q.ctrlKey||q.metaKey){q.preventDefault(),q.stopImmediatePropagation(),u(),W?(y.has(W)?y.delete(W):y.add(W),X()):Ze(q,!0);return}if(!W&&(D||q.shiftKey)){Ze(q,q.shiftKey);return}if(W&&q.shiftKey){q.preventDefault(),q.stopImmediatePropagation(),u(),y.add(W),X();return}if(W&&y.size>1&&y.has(W)){be(q,"move",e);return}!W&&y.size>1&&te([])}function Ze(q,W){q.preventDefault(),q.stopImmediatePropagation(),u(),_={type:"box",pointerId:q.pointerId,target:e,start:{x:q.clientX,y:q.clientY},add:W,initial:[...y]},C.hidden=!1,et(q.clientX,q.clientY),e.setPointerCapture(q.pointerId)}function et(q,W){let ye=e.getBoundingClientRect(),Ne=_.start;Object.assign(C.style,{left:Math.min(Ne.x,q)-ye.left+"px",top:Math.min(Ne.y,W)-ye.top+"px",width:Math.abs(q-Ne.x)+"px",height:Math.abs(W-Ne.y)+"px"})}function O(q){if(!_||_.pointerId!==q.pointerId)return;q.preventDefault(),q.stopImmediatePropagation();let W=_;if(W.type==="box"){et(q.clientX,q.clientY);return}if(W.type==="move"){let ye=Ge(q.clientX,q.clientY);ye&&W.ground&&(W.changed=_e(W.snapshot,{dx:ye.x-W.ground.x,dz:ye.z-W.ground.z})||W.changed)}if(W.type==="scale"&&(W.changed=_e(W.snapshot,{scale:Math.hypot(q.clientX-W.cx,q.clientY-W.cy)/W.distance})||W.changed),W.type==="rotate"){let ye=Math.atan2(q.clientY-W.cy,q.clientX-W.cx);W.angle+=Math.atan2(Math.sin(ye-W.last),Math.cos(ye-W.last)),W.last=ye,W.changed=_e(W.snapshot,{angle:W.angle})||W.changed}}function Ke(q){if(!_||_.pointerId!==q.pointerId)return;q.preventDefault(),q.stopImmediatePropagation();let W=_;if(_=null,C.hidden=!0,W.type==="box")if(q.type==="pointercancel")te(W.initial);else{let ye={left:Math.min(W.start.x,q.clientX),right:Math.max(W.start.x,q.clientX),top:Math.min(W.start.y,q.clientY),bottom:Math.max(W.start.y,q.clientY)};te([...W.add?W.initial:[],...fe(ye)])}else if(q.type==="pointercancel"){for(let ye of W.snapshot.rows){let Ne=t.get(ye.id);Ne&&(Ne.record=ye.record,a(Ne))}c(),Y()}else W.changed&&h();try{W.target.releasePointerCapture(q.pointerId)}catch{}f()}function ke(){if(!_)return;let q=_;_=null,C.hidden=!0,q.changed&&h();try{q.target.releasePointerCapture(q.pointerId)}catch{}}e.addEventListener("pointerdown",we,!0),document.addEventListener("pointermove",O,{capture:!0,passive:!1}),document.addEventListener("pointerup",Ke,!0),document.addEventListener("pointercancel",Ke,!0);for(let q of d)q.addEventListener("pointerdown",W=>{y.size>1&&W.button===0&&be(W,"scale",q)},!0),q.addEventListener("keydown",W=>{y.size>1&&["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(W.key)&&(W.preventDefault(),W.stopImmediatePropagation(),_e(se(),{scale:["ArrowUp","ArrowRight"].includes(W.key)?1.1:1/1.1},!0))},!0);m.addEventListener("pointerdown",q=>{y.size>1&&q.button===0&&be(q,"rotate",m)},!0),m.addEventListener("keydown",q=>{y.size>1&&["ArrowLeft","ArrowRight"].includes(q.key)&&(q.preventDefault(),q.stopImmediatePropagation(),_e(se(),{angle:(q.key==="ArrowLeft"?-1:1)*Math.PI/2},!0))},!0),x.addEventListener("pointerdown",q=>{y.size>1&&q.button===0&&be(q,"move",x)},!0);function Oe(q){y.size>1&&q.target!==e&&!g.contains(q.target)&&!q.target.closest("#exhibition-box-select")&&te([])}document.addEventListener("pointerdown",Oe,!0);function Te(q){if(q.key==="Escape"){ke();return}if(!(q.key!=="Delete"||y.size<2||b.dataset.immersive!=="true"&&b.dataset.inputActive!=="true"||b.dataset.modelBrowse==="true"||b.dataset.workspaceOpen!=="none"||document.querySelector("dialog[open]")||document.activeElement?.closest("input,textarea,select,[contenteditable=true]"))){q.preventDefault(),q.stopImmediatePropagation(),ke();for(let W of N())n.remove(W.object),t.delete(W.record.id);te([]),c(),w(),h()}}return document.addEventListener("keydown",Te,!0),window.addEventListener("blur",ke),P.onclick=()=>{D=!D,P.setAttribute("aria-pressed",String(D)),P.textContent=D?"Select on":"Select",u()},{get syncing(){return A},single:z,selectMany:te,updateHandles:ie,state:()=>({ids:[...y],enabled:D,marquee:_?.type==="box",transform:_?.type||null}),screenBounds:q=>{r(),s.updateMatrixWorld(!0);let W=t.get(q);return W?ae(W):null},transform:q=>_e(se(),q,!0),dispose:()=>{ke(),k(),C.remove(),e.removeEventListener("pointerdown",we,!0),document.removeEventListener("pointermove",O,!0),document.removeEventListener("pointerup",Ke,!0),document.removeEventListener("pointercancel",Ke,!0),document.removeEventListener("pointerdown",Oe,!0),document.removeEventListener("keydown",Te,!0),window.removeEventListener("blur",ke)}}}function xc(s){let e=new Map,t=new Map,n=s.clone();return Bp(s,n,function(i,r){e.set(r,i),t.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;let r=i,o=e.get(i),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Bp(s,e,t){t(s,e);for(let n=0;n<s.children.length;n++)Bp(s.children[n],e.children[n],t)}function zp(s){let e=null,t=null,n=null,i=null;function r(l,c){e||(e=new Dr({alpha:!0,antialias:!0,powerPreference:"low-power"}),e.setSize(180,240),e.setPixelRatio(1),e.outputColorSpace=Et,e.setClearColor(0,0),s.append(e.domElement)),n=new Sn,t=l.clone(!0),t.visible=!0,t.updateMatrixWorld(!0);let h=new it().setFromObject(t),u=h.getCenter(new E),f=h.getSize(new E),d=new pt;t.position.sub(u),d.add(t),n.add(d,new ji(16777215,13159376,2));let m=new pi(16777215,2);m.position.set(2,4,6),n.add(m);let x=c?.fov||35;i=c?.orthographic?new Gn(-1,1,1,-1,.01,1e3):new Ft(x,180/240,.01,1e3),c?.quaternion?i.quaternion.fromArray(c.quaternion):c?.orbit&&(i.position.setFromSpherical(new Ti(1,c.orbit.phi,c.orbit.theta)),i.lookAt(0,0,0));let g=new E(0,0,1).applyQuaternion(i.quaternion),p=f.length();i.position.copy(g.multiplyScalar(Math.max(1,p/(2*Math.tan(x*Math.PI/360)))*1.08)),i.isOrthographicCamera&&(i.top=p*.57,i.bottom=-i.top,i.right=i.top*180/240,i.left=-i.right,i.updateProjectionMatrix()),e.render(n,i)}function o(l){s.style.transform="translate("+(l.clientX-90)+"px,"+(l.clientY-120)+"px)",n&&e.render(n,i)}function a(){s.hidden=!0,n=null,t=null,i=null}return{begin:r,update:o,end:a,dispose:()=>{e?.dispose(),e?.domElement.remove()}}}function kp(s){let e=new Map,t=n=>{if(e.has(n))return e.get(n);let i=new Rt({color:n.color?.clone()||new Pe(16777215),map:n.map||null,vertexColors:n.vertexColors,transparent:n.transparent,opacity:n.opacity,alphaMap:n.alphaMap||null,alphaTest:n.alphaTest,side:n.side,depthWrite:n.depthWrite,depthTest:n.depthTest,toneMapped:!1});return i.name=n.name,i.userData={...n.userData,exhibitionColour:"vivid-archive-v1"},i.onBeforeCompile=r=>{r.vertexShader=`varying vec3 vArchiveNormal;
`+r.vertexShader,r.vertexShader=r.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vArchiveNormal = normalize(normalMatrix * normal);`),r.fragmentShader=`varying vec3 vArchiveNormal;
`+r.fragmentShader,r.fragmentShader=r.fragmentShader.replace("#include <opaque_fragment>",["#include <opaque_fragment>","float archiveLuma = dot(gl_FragColor.rgb, vec3(0.2126, 0.7152, 0.0722));","vec3 archiveColour = vec3(archiveLuma) + (gl_FragColor.rgb - vec3(archiveLuma)) * 1.18;","float archiveDepth = 0.84 + 0.16 * max(dot(normalize(vArchiveNormal), normalize(vec3(-0.35, 0.7, 1.0))), 0.0);","gl_FragColor.rgb = clamp(archiveColour * archiveDepth, 0.0, 1.0);"].join(`
`))},i.customProgramCacheKey=()=>"vivid-archive-v1",e.set(n,i),i};s.traverse(n=>{!n.isMesh||!n.material||(n.geometry.attributes.normal||n.geometry.computeVertexNormals(),n.material=Array.isArray(n.material)?n.material.map(t):t(n.material))});for(let n of e.keys())n.dispose();return{mode:"vivid-archive-v1",toneMapped:!1,saturation:1.18,minShading:.84}}function Hp({scene:s,canvas:e,getCamera:t,getRoomMeshes:n,isRoom:i,orient:r,invalidate:o,previewInvalidate:a=o,suspend:l,getMaxHeight:c=()=>4.65}){let h=T=>document.getElementById(T),u=new pt,f=new Br,d=new Map,m=new Map,x=new Map,g=zp(document.getElementById("exhibition-drag-ghost")),p=null,w=null,M=0,y=null,b=new mi,P=new Me,C=new an(new E(0,1,0),0),D=new E,_=new Ye(new en(1,1),new Rt({color:8561034,transparent:!0,opacity:.32,depthWrite:!1,side:xt,toneMapped:!1}));_.rotation.x=-Math.PI/2,_.position.y=.012,_.visible=!1,s.add(_),u.name="exhibition-placed-models",s.add(u);let v=null,A=null,N=null,B=!1,z=null,k=null,X=null,te=Promise.resolve(),Y=!1,ie="",ae=!1,fe=new Gi(new en(20*.994,20*.994),new Rt({color:16179104,transparent:!0,opacity:.72,depthWrite:!1,toneMapped:!1}),400);fe.name="occupied-yellow-cells",fe.count=0,fe.visible=!1,fe.frustumCulled=!1,s.add(fe);let Ue=new Map,Ce=new Ve,ze=new $t().setFromAxisAngle(new E(1,0,0),-Math.PI/2),Ge=document.createElement("div");Ge.className="exhibition-scale-handles",e.parentElement.append(Ge);let se=Array.from({length:8},(T,F)=>{let G=document.createElement("button");return G.className="exhibition-scale-handle",G.type="button",G.dataset.corner=F,G.setAttribute("aria-label","Drag to scale selected model"),G.title="Drag to scale",G.hidden=!0,Ge.append(G),G}),le=document.createElement("button");le.className="exhibition-rotate-handle",le.type="button",le.textContent="\u21BB",le.title="Drag to rotate in 90 degree steps",le.setAttribute("aria-label","Drag to rotate selected model"),le.hidden=!0,Ge.append(le);let _e=document.createElement("button");_e.className="exhibition-move-handle",_e.type="button",_e.textContent="\u2194",_e.title="Drag to move selected model",_e.setAttribute("aria-label","Drag to move selected model"),_e.hidden=!0,Ge.append(_e);function be(){Ue.clear();for(let F of m.values()){let G=!!(F.record.offsetX||F.record.offsetZ),ee=F.footprint/2,xe=G?Math.max(0,Math.floor((F.object.position.x-ee+200)/20)):F.record.col,Ie=G?Math.max(0,Math.floor((F.object.position.z-ee+200)/20)):F.record.row,st=G?Math.min(20,Math.ceil((F.object.position.x+ee+200)/20)):F.record.col+F.record.span,ht=G?Math.min(20,Math.ceil((F.object.position.z+ee+200)/20)):F.record.row+F.record.span;for(let zt=Ie;zt<ht;zt++)for(let Kt=xe;Kt<st;Kt++){let kt=zt*20+Kt;Ue.set(kt,(Ue.get(kt)||0)+1)}}let T=0;for(let F of Ue.keys())Ce.compose(new E(An(F%20),.002,An(Math.floor(F/20))),ze,new E(1,1,1)),fe.setMatrixAt(T++,Ce);fe.count=T,fe.instanceMatrix.needsUpdate=!0,o()}function we(){if(v?.updateHandles())return;let T=m.get(A),F=e.getBoundingClientRect(),G=Ge.getBoundingClientRect();if(!u.visible||!T||e.closest("[hidden]")||h("walk-surface").dataset.modelBrowse==="true"){se.forEach(Ie=>Ie.hidden=!0),le.hidden=!0,_e.hidden=!0;return}s.updateMatrixWorld(!0);let ee=new it().setFromObject(T.object);se.forEach((Ie,st)=>{let ht=new E(st&1?ee.max.x:ee.min.x,st&2?ee.max.y:ee.min.y,st&4?ee.max.z:ee.min.z).project(t()),zt=F.left+(ht.x+1)*F.width/2,Kt=F.top+(1-ht.y)*F.height/2;Ie.hidden=ht.z<-1||ht.z>1||zt<F.left||zt>F.right||Kt<F.top||Kt>F.bottom,Ie.style.left=zt-G.left+"px",Ie.style.top=Kt-G.top+"px"});let xe=se.filter(Ie=>!Ie.hidden).map(Ie=>({x:parseFloat(Ie.style.left),y:parseFloat(Ie.style.top)}));if(le.hidden=!xe.length,_e.hidden=!xe.length,xe.length){let Ie=(Math.min(...xe.map(ht=>ht.x))+Math.max(...xe.map(ht=>ht.x)))/2,st=Math.max(16,Math.min(...xe.map(ht=>ht.y))-26);le.style.left=Ie+"px",le.style.top=st+"px",_e.style.left=Ie+"px",_e.style.top=Math.min(F.height-16,Math.max(...xe.map(ht=>ht.y))+26)+"px"}}let Ze=T=>((Math.round(T/(Math.PI/2))%4+4)%4||4)*Math.PI/2,et=T=>{h("exhibition-placement-status").textContent=T};function O(){return new Promise((T,F)=>{let G=indexedDB.open("learning-vegas-exhibition-floor-v1",1);G.onupgradeneeded=()=>{G.result.createObjectStore("models",{keyPath:"id"}),G.result.createObjectStore("layout")},G.onsuccess=()=>T(G.result),G.onerror=()=>F(G.error)})}async function Ke(){let T=await O();try{return await new Promise((F,G)=>{let ee=T.transaction(["models","layout"],"readonly"),xe=ee.objectStore("models").getAll(),Ie=ee.objectStore("layout").get("current");ee.oncomplete=()=>F({models:xe.result,layout:Ie.result||[]}),ee.onerror=()=>G(ee.error)})}finally{T.close()}}let ke=[],Oe=[],Te=null,q=!1,W=!1;function ye(){let T=[...m.values()].map(G=>({...G.record})),F=new Set(T.map(G=>G.modelId));return{layout:T,files:[...d.values()].filter(G=>F.has(G.id)).map(G=>({id:G.id,blob:G.blob,name:G.name,preview:G.preview||null,record:G.record||null,composition:G.composition||null,camera:G.camera||null,libraryId:G.libraryId||null,obj:G.obj||null}))}}function Ne(){let T=ye();Te&&!q&&JSON.stringify(T.layout)!==JSON.stringify(Te.layout)&&(ke.push(Te),ke.length>40&&ke.shift(),Oe=[]),Te=T}async function Be(T=!1){if(Y||await Cn,W||z||k||X||v?.state().transform)return!1;let F=T?Oe:ke,G=T?ke:Oe,ee=F.at(-1);if(!ee)return!1;W=!0,h("walk-surface").dataset.historyBusy="true";try{let xe=new Map;for(let st of ee.files)xe.set(st.id,await re(st));let Ie=ye();De(!0),ue(null);for(let st of m.values())u.remove(st.object);m.clear();for(let st of ee.layout)de({...st},xe.get(st.modelId));return F.pop(),G.push(Ie),j(),be(),q=!0,await R(),et(T?"Layout redone.":"Layout undone."),!0}catch(xe){return j(),et("Could not restore layout: "+xe.message),!1}finally{q=!1,W=!1,delete h("walk-surface").dataset.historyBusy}}document.addEventListener("pointerdown",T=>{W&&h("walk-surface").contains(T.target)&&(T.preventDefault(),T.stopImmediatePropagation())},!0),document.addEventListener("keydown",T=>{let F=h("walk-surface"),G=T.target;!(T.ctrlKey||T.metaKey)||T.key.toLowerCase()!=="z"||T.altKey||F.dataset.immersive!=="true"&&F.dataset.inputActive!=="true"||F.dataset.modelBrowse==="true"||F.dataset.workspaceOpen&&F.dataset.workspaceOpen!=="none"||document.querySelector("dialog[open]")||G?.closest("input,textarea,select,[contenteditable=true]")||G!==document.body&&!F.contains(G)||(T.preventDefault(),T.stopImmediatePropagation(),Be(T.shiftKey))},!0);function R(){Ne(),window.dispatchEvent(new Event("exhibition-placement-change"));let T=[...m.values()].map(ee=>({...ee.record})),F=new Set(T.map(ee=>ee.modelId)),G=[...d.values()].filter(ee=>F.has(ee.id)).map(ee=>({id:ee.id,blob:ee.blob,name:ee.name,preview:ee.preview||null,record:ee.record||null,composition:ee.composition||null,camera:ee.camera||null,libraryId:ee.libraryId||null,obj:ee.obj||null}));return te=te.catch(()=>{}).then(async()=>{let ee=await O();try{await new Promise((xe,Ie)=>{let st=ee.transaction(["models","layout"],"readwrite"),ht=st.objectStore("models"),zt=ht.getAllKeys();zt.onsuccess=()=>{let Kt=new Set(zt.result);G.forEach(kt=>{if(!Kt.has(kt.id))ht.put(kt);else if(kt.record){let In=ht.get(kt.id);In.onsuccess=()=>{(In.result?.record?.id!==kt.record.id||!In.result?.composition&&kt.composition||In.result?.libraryId!==kt.libraryId||JSON.stringify(In.result?.record?.linkedMedia)!==JSON.stringify(kt.record.linkedMedia))&&ht.put(kt)}}}),zt.result.forEach(kt=>{F.has(kt)||ht.delete(kt)})},st.objectStore("layout").put(T,"current"),st.oncomplete=xe,st.onerror=()=>Ie(st.error),st.onabort=()=>Ie(st.error)})}finally{ee.close()}}).catch(ee=>et("Layout is available this session, but could not save: "+ee.message)),te}function S(T){let F=new Set,G=new Set,ee=new Set;T.traverse(xe=>{xe.geometry&&F.add(xe.geometry);for(let Ie of xe.material?Array.isArray(xe.material)?xe.material:[xe.material]:[]){G.add(Ie);for(let st of Object.values(Ie))st?.isTexture&&ee.add(st)}}),F.forEach(xe=>xe.dispose()),G.forEach(xe=>xe.dispose()),ee.forEach(xe=>{xe.source?.data?.close?.(),xe.dispose()})}function j(){let T=new Set([...m.values()].map(F=>F.record.modelId));for(let[F,G]of d)T.has(F)||(S(G.template),d.delete(F))}async function re(T){if(d.has(T.id)){let G=d.get(T.id);for(let ee of["record","composition","camera","libraryId","obj"])T[ee]&&(G[ee]=T[ee]);return G}if(x.has(T.id))return x.get(T.id);let F=(async()=>{if(!(T.blob instanceof Blob))throw Error("This model is unavailable. Generate or open it again.");let G=await f.parseAsync(await T.blob.arrayBuffer(),""),ee=new pt;ee.add(G.scene),ee.updateMatrixWorld(!0);let xe=new it().setFromObject(ee),Ie=xe.getSize(new E),st=xe.getCenter(new E);if(xe.isEmpty()||!Number.isFinite(Ie.length())||Ie.length()<=0)throw S(ee),Error("This file contains no visible 3D model.");let ht=.98/Math.max(Ie.x,Ie.z,1e-5),zt=0;G.scene.traverse(In=>{In.isMesh&&(zt+=(In.geometry.index?.count||In.geometry.attributes.position.count)/3)});let Kt=T.record?.target==="space"?{mode:"saved-space-original",toneMapped:!0}:kp(G.scene);G.scene.traverse(In=>{In.isMesh&&(In.castShadow=!0)}),G.scene.position.sub(new E(st.x,xe.min.y,st.z)),ee.scale.setScalar(ht);let kt={...T,width:Ie.x*ht,depth:Ie.z*ht,height:Ie.y*ht,triangles:zt,colour:Kt,template:ee};return d.set(T.id,kt),kt})();x.set(T.id,F);try{return await F}finally{x.delete(T.id)}}function pe(T,F){return F||m.get(T)?.record.span||1}function Q(T,F,G=null,ee=null){let xe=pe(G,ee),Ie=e.getBoundingClientRect();if(T<Ie.left||T>Ie.right||F<Ie.top||F>Ie.bottom||document.elementFromPoint(T,F)?.closest(".workspace-expanded,.workspace-previews,.walk-toolbar,.exhibition-placement-tools,dialog")||(r(),s.updateMatrixWorld(!0),P.set((T-Ie.left)/Ie.width*2-1,-(F-Ie.top)/Ie.height*2+1),b.setFromCamera(P,t()),!b.ray.intersectPlane(C,D)||D.x<-200||D.x>=200||D.z<-200||D.z>=200))return null;if(i()){let Kt=b.intersectObjects(n(),!1)[0];if(Kt&&Kt.object.name!=="floor")return null}let ht=Math.min(20-xe,Math.floor((D.x+200)/20)),zt=Math.min(20-xe,Math.floor((D.z+200)/20));return{col:ht,row:zt,span:xe,x:An(ht,xe),z:An(zt,xe),valid:!0}}function V(T,F,G=null){let ee=Q(T,F,G);return _.visible=!!ee,ee&&(_.scale.set(ee.span*20,ee.span*20,1),_.position.set(ee.x,.015,ee.z),_.material.color.setHex(ee.valid?8561034:11759712)),a(),ee}function H(){_.visible=!1,a()}function ne(){N&&(s.remove(N),N.geometry.dispose(),N.material.dispose(),N=null);let T=m.get(A);T&&(s.updateMatrixWorld(!0),N=new Lo(T.object,8882044),s.add(N)),we(),o()}function ue(T){v&&!v.syncing&&v.single(T),A=u.visible&&m.has(T)?T:null,B=!1;let F=m.get(A);h("exhibition-placement-tools").hidden=!F,h("exhibition-placement-name").textContent=F?F.record.name+" / "+(F.record.span||1)**2+" CELL"+((F.record.span||1)>1?"S":""):"",h("exhibition-move-model").setAttribute("aria-pressed","false"),h("exhibition-model-smaller").disabled=!F||(F.record.span||1)<=Yn(F).minSpan,h("exhibition-model-larger").disabled=!F||(F.record.span||1)>=Yn(F).maxSpan,F&&(h("exhibition-model-angle").value=String(Math.round(Ze(F.record.rotation||0)*180/Math.PI))),ne()}function $(T){T.record.rotation=Ze(T.record.rotation||0);let F=d.get(T.record.modelId),G=T.record.span||1,ee=T.record.rotation||0,xe=Math.abs(Math.cos(ee)),Ie=Math.abs(Math.sin(ee)),st=Math.min(.98*20*G*(T.record.scale||1)/Math.max(F.width*xe+F.depth*Ie,F.width*Ie+F.depth*xe,1e-5),c()/Math.max(F.height,1e-5));T.object.scale.copy(F.template.scale).multiplyScalar(st),T.object.rotation.y=ee,T.object.position.set(An(T.record.col,G)+(T.record.offsetX||0),.015,An(T.record.row,G)+(T.record.offsetZ||0)),T.height=F.height*st,T.footprint=Math.max(F.width*xe+F.depth*Ie,F.width*Ie+F.depth*xe)*st}function de(T,F){T.kind=F.record?.target==="space"?"space":T.kind||"model";let G=Yn(T);T.span=Math.max(G.minSpan,Math.min(G.maxSpan,Number.isInteger(T.span)?T.span:G.minSpan)),T.col=Math.min(T.col,20-T.span),T.row=Math.min(T.row,20-T.span),T.cellSize=20;let ee=xc(F.template);ee.userData.placementId=T.id,u.add(ee);let xe={record:T,object:ee};return m.set(T.id,xe),$(xe),be(),o(),T.id}function Ee(T,F){let G=T?.span||1,ee=Yn(F);return T?.valid&&Number.isInteger(G)&&G>=ee.minSpan&&G<=ee.maxSpan&&Number.isInteger(T.col)&&T.col>=0&&T.col+G<=20&&Number.isInteger(T.row)&&T.row>=0&&T.row+G<=20}async function Se(T,F){if(W)throw Error("Wait for the layout to finish restoring.");let G=F?.span||1;if(!Ee(F,T))throw Error("Choose an area within the exhibition floor.");let ee=await re(T),xe=de({id:crypto.randomUUID(),modelId:ee.id,col:F.col,row:F.row,span:G,scale:Number.isFinite(F.scale)?F.scale:1,rotation:Number.isFinite(F.rotation)?F.rotation:0,name:T.name||"Generated model"},ee);return ue(xe),await R(),et("Model placed. Drag to move; double-click to view in 3D."),xe}function ge(T,F){if(W)return!1;let G=m.get(T),ee=G?.record.span||1;return!G||!Ee({...F,span:ee},G)?!1:(G.record.col=F.col,G.record.row=F.row,delete G.record.offsetX,delete G.record.offsetZ,delete G.record.scaleCentreX,delete G.record.scaleCentreZ,$(G),be(),ue(T),R(),et("Moved to cell "+(F.row*20+F.col+1)+"."),!0)}function U(T,F,G=1,ee=!0){if(W)return!1;let xe=m.get(T),Ie=Yn(xe);if(!xe||!Number.isInteger(F)||F<Ie.minSpan||F>Ie.maxSpan)return!1;G=Math.max(Ie.minUnits/F,Math.min(1,Number.isFinite(G)?G:1));let st=xe.record.span||1,ht=xe.record.scaleCentreX??(xe.object.position.x+200)/20,zt=xe.record.scaleCentreZ??(xe.object.position.z+200)/20,Kt=Math.max(0,Math.min(20-F,Math.round(ht-F/2))),kt=Math.max(0,Math.min(20-F,Math.round(zt-F/2)));return Object.assign(xe.record,{col:Kt,row:kt,span:F,scale:G,scaleCentreX:ht,scaleCentreZ:zt,offsetX:(ht-10)*20-An(Kt,F),offsetZ:(zt-10)*20-An(kt,F)}),$(xe),be(),ue(T),ee&&R(),et("Model fills "+F+" \xD7 "+F+" cells."),!0}async function L(T){if(W)throw Error("Wait for the layout to finish restoring.");if(!Array.isArray(T)||T.length!==m.size||new Set(T.map(G=>G.id)).size!==m.size)throw Error("The floor changed. Try arranging again.");let F=new Set;for(let G of T){if(!m.has(G.id)||!Ee(G,m.get(G.id))||!Number.isFinite(G.rotation)||!Number.isFinite(G.scale)||G.scale<=0||G.scale>1)throw Error("Invalid exhibition layout.");for(let ee=G.row;ee<G.row+G.span;ee++)for(let xe=G.col;xe<G.col+G.span;xe++){let Ie=ee*20+xe;if(F.has(Ie))throw Error("The proposed model footprints overlap.");F.add(Ie)}}for(let G=0;G<T.length;G++)for(let ee=G+1;ee<T.length;ee++){let xe=T[G],Ie=T[ee];if(!(xe.col+xe.span+1<=Ie.col||Ie.col+Ie.span+1<=xe.col||xe.row+xe.span+1<=Ie.row||Ie.row+Ie.span+1<=xe.row))throw Error("Leave one white cell between yellow footprints.")}for(let G of T){let ee=m.get(G.id);Object.assign(ee.record,{col:G.col,row:G.row,span:G.span,scale:G.scale,rotation:G.rotation}),delete ee.record.scaleCentreX,delete ee.record.scaleCentreZ,delete ee.record.offsetX,delete ee.record.offsetZ,$(ee)}return ue(null),be(),await R(),et(T.length+" models rearranged."),!0}async function K(T,F){if(W)throw Error("Wait for the layout to finish restoring.");if(T.length!==F.length||F.some((ee,xe)=>!Ee(ee,T[xe])))throw Error("Invalid placement collection.");let G=[];try{for(let ee of T)G.push(await re(ee))}catch(ee){throw j(),ee}De(!0),ue(null);for(let ee of m.values())u.remove(ee.object);m.clear();for(let ee=0;ee<G.length;ee++){let xe=F[ee];de({id:crypto.randomUUID(),modelId:G[ee].id,col:xe.col,row:xe.row,span:xe.span,scale:xe.scale,rotation:xe.rotation,name:T[ee].name||"Generated model"},G[ee])}return j(),be(),await R(),et(F.length+" models arranged."),!0}function he(){return[...d.values()].map(T=>{let F=T.record||{id:T.id,fingerprint:T.id,modelUrl:"assets/generated-sculptures/"+T.id+"/sculpture.glb",objUrl:"assets/generated-sculptures/"+T.id+"/sculpture.obj",target:"city",localOnly:!0,triangles:Math.round(T.triangles)};return{id:"exhibit:"+T.id,ephemeral:!0,title:T.name||"Exhibited model",group:"",savedAt:0,record:F,glb:T.blob,obj:T.obj||null,preview:T.preview,composition:T.composition||null,camera:T.camera||null,libraryId:T.libraryId||null}})}function Ae(T){let F=m.get(T);F&&window.dispatchEvent(new CustomEvent("exhibition-model-open",{detail:{id:"exhibit:"+F.record.modelId,placementId:T}}))}function ve(T){if(!u.visible)return null;r(),s.updateMatrixWorld(!0);let F=e.getBoundingClientRect();P.set((T.clientX-F.left)/F.width*2-1,-(T.clientY-F.top)/F.height*2+1),b.setFromCamera(P,t());let G=b.intersectObjects(u.children,!0)[0];if(!G)return null;if(i()){let xe=b.intersectObjects(n(),!1)[0];if(xe&&xe.distance<G.distance)return null}let ee=G.object;for(;ee&&!ee.userData.placementId;)ee=ee.parent;return ee?.userData.placementId||null}function me(T){let F=ve(T);if(F)return F;for(let[G,ee]of[[1,0],[-1,0],[0,1],[0,-1],[2,0],[-2,0],[0,2],[0,-2]]){let xe=ve({clientX:T.clientX+G,clientY:T.clientY+ee});if(xe)return xe}return null}function De(T=!1){M++,p&&(s.remove(p),p=null),w&&(w.visible=!0,w=null),g.end(),H(),a(),T||j()}function Xe(T,F,G=null){p&&s.remove(p),y=F,g.begin(T,F),p=xc(T),p.visible=!1,p.traverse(ee=>ee.castShadow=!1),s.add(p),w=G,G&&(G.visible=!1),o()}async function _t(T,F){let G=++M,ee=await re(T);if(G!==M)return;let xe=xc(ee.template),Ie=Math.min(.98*20/Math.max(ee.width,ee.depth),c()/ee.height);xe.scale.copy(ee.template.scale).multiplyScalar(Ie),Xe(xe,F)}function ot(T,F=null){if(!p)return;let G=V(T.clientX,T.clientY,F),ee=h("exhibition-drag-ghost");return G?.valid?(ee.hidden=!0,p.position.set(G.x,.015,G.z),p.visible=!0):(p.visible=!1,ee.hidden=!1,g.update(T)),a(),G}function At(T,F){if(!p){let G=t();Xe(F.object,{orthographic:G.isOrthographicCamera,fov:G.fov||35,quaternion:G.quaternion.toArray()},F.object)}ot(T,F.record.id)}v=Fp({scene:s,canvas:e,entries:m,group:u,getCamera:t,orient:r,pick:me,fit:$,selectLegacy:ue,updateCells:be,save:R,suspend:l,invalidate:o,handles:se,rotateHandle:le,moveHandle:_e,handleLayer:Ge,getMaxHeight:c,prune:j,isLocked:()=>W}),e.addEventListener("pointerdown",T=>{if(T.button!==0)return;let F=me(T);if(B&&A&&!F){T.preventDefault(),T.stopImmediatePropagation();let G=V(T.clientX,T.clientY,A);ge(A,G)&&H();return}if(!F){A&&(ue(null),H(),et(""));return}T.preventDefault(),T.stopImmediatePropagation(),l(),ue(F),z={id:F,pointerId:T.pointerId,x:T.clientX,y:T.clientY,started:!1},e.setPointerCapture(T.pointerId)},!0),e.addEventListener("pointermove",T=>{if(B&&!z){V(T.clientX,T.clientY,A);return}!z||z.pointerId!==T.pointerId||(T.preventDefault(),T.stopImmediatePropagation(),!(!z.started&&Math.hypot(T.clientX-z.x,T.clientY-z.y)<6)&&(z.started=!0,At(T,m.get(z.id))))},!0);function qt(T){if(!(!z||z.pointerId!==T.pointerId)){if(T.preventDefault(),T.stopImmediatePropagation(),z.started&&T.type!=="pointercancel"){let F=Q(T.clientX,T.clientY,z.id);ge(z.id,F)||et("Choose a floor cell. The model stays in its previous position.")}try{(z.handle?_e:e).releasePointerCapture(T.pointerId)}catch{}z=null,De(),H()}}_e.addEventListener("pointerdown",T=>{T.button!==0||!A||(T.preventDefault(),T.stopPropagation(),l(),z={id:A,pointerId:T.pointerId,x:T.clientX,y:T.clientY,started:!1,handle:!0},_e.setPointerCapture(T.pointerId))}),_e.addEventListener("pointermove",T=>{!z?.handle||z.pointerId!==T.pointerId||(T.preventDefault(),T.stopPropagation(),!(!z.started&&Math.hypot(T.clientX-z.x,T.clientY-z.y)<6)&&(z.started=!0,At(T,m.get(z.id))))}),_e.addEventListener("pointerup",qt),_e.addEventListener("pointercancel",qt),_e.addEventListener("lostpointercapture",()=>{z?.handle&&(z=null,De(),H())}),document.addEventListener("pointerdown",T=>{A&&T.target!==e&&!Ge.contains(T.target)&&(ue(null),H(),et(""))},!0);function ri(){let T=m.get(A);if(T){if(k=null,X=null,z){try{(z.handle?_e:e).releasePointerCapture(z.pointerId)}catch{}z=null}De(),u.remove(T.object),m.delete(A),be(),ue(null),j(),R(),et("Model removed from the room.")}}document.addEventListener("keydown",T=>{let F=h("walk-surface"),G=document.activeElement;T.key!=="Delete"||!A||F.dataset.immersive!=="true"&&F.dataset.inputActive!=="true"||F.dataset.modelBrowse==="true"||F.dataset.workspaceOpen&&F.dataset.workspaceOpen!=="none"||document.querySelector("dialog[open]")||G?.closest("input,textarea,select,[contenteditable=true]")||G!==document.body&&!F.contains(G)||(T.preventDefault(),T.stopImmediatePropagation(),ri())},!0),e.addEventListener("dblclick",T=>{let F=me(T);F&&(T.preventDefault(),T.stopImmediatePropagation(),l(),ue(F),Ae(F))},!0);for(let T of se)T.addEventListener("pointerdown",F=>{if(F.button!==0||!A)return;F.preventDefault(),F.stopPropagation(),l();let G=m.get(A),ee=new it().setFromObject(G.object),xe=ee.getCenter(new E).project(t()),Ie=e.getBoundingClientRect(),st=Ie.left+(xe.x+1)*Ie.width/2,ht=Ie.top+(1-xe.y)*Ie.height/2;k={id:A,pointerId:F.pointerId,cx:st,cy:ht,distance:Math.max(20,Math.hypot(F.clientX-st,F.clientY-ht)),units:G.record.span*(G.record.scale||1)},T.setPointerCapture(F.pointerId)}),T.addEventListener("keydown",F=>{(F.key==="ArrowUp"||F.key==="ArrowRight")&&(F.preventDefault(),U(A,Math.min(Yn(m.get(A)).maxSpan,m.get(A).record.span+1))),(F.key==="ArrowDown"||F.key==="ArrowLeft")&&(F.preventDefault(),U(A,Math.max(Yn(m.get(A)).minSpan,m.get(A).record.span-1)))});function Bt(T,F,G=!0){if(W)return!1;let ee=m.get(T);return!ee||!Number.isFinite(F)?!1:(ee.record.rotation=Ze(F),A===T&&(h("exhibition-model-angle").value=String(Math.round(ee.record.rotation*180/Math.PI))),$(ee),ne(),G&&R(),!0)}le.addEventListener("pointerdown",T=>{if(T.button!==0||!A)return;T.preventDefault(),T.stopPropagation(),l();let F=m.get(A),G=new it().setFromObject(F.object).getCenter(new E).project(t()),ee=e.getBoundingClientRect(),xe=ee.left+(G.x+1)*ee.width/2,Ie=ee.top+(1-G.y)*ee.height/2;X={id:A,pointerId:T.pointerId,cx:xe,cy:Ie,last:Math.atan2(T.clientY-Ie,T.clientX-xe),angle:F.record.rotation||0},le.setPointerCapture(T.pointerId)}),le.addEventListener("keydown",T=>{["ArrowLeft","ArrowRight"].includes(T.key)&&(T.preventDefault(),Bt(A,(m.get(A)?.record.rotation||0)+(T.key==="ArrowLeft"?-1:1)*Math.PI/2))}),document.addEventListener("pointermove",T=>{if(!X||X.pointerId!==T.pointerId)return;T.preventDefault(),T.stopImmediatePropagation();let F=X,G=Math.atan2(T.clientY-F.cy,T.clientX-F.cx),ee=Math.atan2(Math.sin(G-F.last),Math.cos(G-F.last));F.angle+=ee,F.last=G,Bt(F.id,F.angle,!1)},{capture:!0,passive:!1});for(let T of["pointerup","pointercancel"])document.addEventListener(T,F=>{X?.pointerId===F.pointerId&&(X=null,R())},!0);document.addEventListener("pointermove",T=>{if(!k||k.pointerId!==T.pointerId)return;T.preventDefault(),T.stopImmediatePropagation();let F=k,G=Yn(m.get(F.id)),ee=Math.max(G.minUnits,Math.min(G.maxSpan,F.units*Math.hypot(T.clientX-F.cx,T.clientY-F.cy)/F.distance)),xe=Math.max(G.minSpan,Math.ceil(ee-1e-6));U(F.id,xe,ee/xe,!1)},{capture:!0,passive:!1});for(let T of["pointerup","pointercancel"])document.addEventListener(T,F=>{k?.pointerId===F.pointerId&&(k=null,R())},!0);e.addEventListener("pointerup",qt,!0),e.addEventListener("pointercancel",qt,!0),e.addEventListener("lostpointercapture",()=>{z=null,De(),H()}),h("exhibition-move-model").onclick=()=>{B=!B,l(),h("exhibition-move-model").setAttribute("aria-pressed",String(B)),B?et("Click a floor cell, or drag the selected model."):H()},h("exhibition-turn-model").onclick=()=>Bt(A,(m.get(A)?.record.rotation||0)+Math.PI/2),h("exhibition-model-angle").onchange=T=>Bt(A,Number(T.target.value)*Math.PI/180),h("exhibition-remove-model").onclick=ri,h("exhibition-model-smaller").onclick=()=>U(A,(m.get(A)?.record.span||1)-1),h("exhibition-model-larger").onclick=()=>U(A,(m.get(A)?.record.span||1)+1),h("exhibition-open-model").onclick=()=>Ae(A),h("exhibition-deselect-model").onclick=()=>{ue(null),H(),et("")},window.addEventListener("blur",()=>{if((k||X)&&(k=null,X=null,R()),B=!1,De(),H(),z){try{e.releasePointerCapture(z.pointerId)}catch{}z=null}}),document.addEventListener("keydown",T=>{if(T.key==="Escape"&&((k||X)&&(k=null,X=null,R()),B=!1,H(),De(),z)){try{e.releasePointerCapture(z.pointerId)}catch{}z=null}});function Fn(){let T=new Set;for(let F of d.values())F.template.traverse(G=>{for(let ee of G.material?Array.isArray(G.material)?G.material:[G.material]:[])for(let xe of Object.values(ee))xe?.isTexture&&T.add(xe)});return T.size}let Cn=(async()=>{try{let T=await Ke(),F=new Map(T.models.map(G=>[G.id,G]));for(let G of T.layout){let ee=G.cellSize||2;if(ee!==20){for(let Ie of["offsetX","offsetZ"])Number.isFinite(G[Ie])&&(G[Ie]*=20/ee);G.cellSize=20}if(!Number.isInteger(G.col)||G.col<0||G.col+(G.span||1)>20||!Number.isInteger(G.row)||G.row<0||G.row+(G.span||1)>20)continue;let xe=F.get(G.modelId);if(xe)try{let Ie=await re(xe);de(G,Ie)}catch(Ie){et("Some stored models could not reopen: "+Ie.message)}}}catch(T){et("Previous room layout could not load: "+T.message)}finally{Y=!0,Te=ye()}})();return Object.freeze({ready:Cn,undo:()=>Be(!1),redo:()=>Be(!0),beginDragPreview:_t,updateDragPreview:ot,endDragPreview:De,updateHandles:we,audioSources:()=>[...m.values()].map(T=>{let F=d.get(T.record.modelId);return{id:T.record.id,modelId:T.record.modelId,name:T.record.name,x:T.object.position.x,z:T.object.position.z,width:T.footprint,audio:F?.record?.linkedMedia?.audio||null,composition:F?.composition||null}}),spaceSources:()=>[...m.values()].map(T=>({id:T.record.id,modelId:T.record.modelId,name:T.record.name,target:d.get(T.record.modelId)?.record?.target||(T.record.kind==="space"?"space":"model"),object:T.object,layout:{col:T.record.col,row:T.record.row,span:T.record.span,scale:T.record.scale||1,rotation:T.record.rotation||0,offsetX:T.record.offsetX||0,offsetZ:T.record.offsetZ||0}})),showSources:(T,F={})=>{u.visible=!!T,ae=!!F.keepFootprints,T||ue(null),fe.visible=!i()&&(u.visible||ae),fe.material.depthTest=!0,fe.renderOrder=0,o()},setViewMode:T=>{fe.visible=T==="axonometric"&&(u.visible||ae),we(),o()},cellAt:Q,hitModelAt:(T,F)=>ve({clientX:T,clientY:F}),hover:V,stopHover:H,place:Se,select:ue,selectMany:T=>v.selectMany(T),selectionBounds:T=>v.screenBounds(T),transformSelection:T=>v.transform(T),move:ge,resize:U,rotate:Bt,applyLayout:L,replaceCollection:K,browseEntries:he,openModel:Ae,clearSelection:()=>ue(null),state:()=>({history:{undo:ke.length,redo:Oe.length,busy:W},liveDrag:{active:!!p,floorVisible:!!p?.visible,sourceView:y},restored:Y,sourcesVisible:u.visible,footprintsVisible:fe.visible,footprintsThroughSpace:!1,footprintsPreserved:ae,selected:A,selectedIds:v.state().ids,multiSelection:v.state(),models:[...m.values()].map(T=>({...T.record,x:T.object.position.x,z:T.object.position.z,height:T.height,footprint:T.footprint,colour:d.get(T.record.modelId)?.colour})),modelCount:m.size,uniqueMeshes:d.size,textureCount:Fn(),occupiedCells:[...Ue].map(([T,F])=>({col:T%20,row:Math.floor(T/20),count:F})),occupiedColour:"#f6dfa0",scaling:!!k,rotating:!!X,dragging:!!z?.started,pendingDrag:!!z}),dispose:()=>{v?.dispose(),g.dispose(),Ge.remove(),fe.geometry.dispose(),fe.material.dispose(),d.forEach(T=>S(T.template)),_.geometry.dispose(),_.material.dispose(),N&&(N.geometry.dispose(),N.material.dispose())}})}var yc=class extends Sn{constructor(){super();let e=new un;e.deleteAttribute("uv");let t=new jt({side:Wt}),n=new jt,i=new Zi(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);let r=new Ye(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new Gi(e,n,6),a=new Nt;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);let l=new Ye(e,Vr(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new Ye(e,Vr(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new Ye(e,Vr(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let u=new Ye(e,Vr(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let f=new Ye(e,Vr(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);let d=new Ye(e,Vr(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Vr(s){return new So({color:0,emissive:16777215,emissiveIntensity:s})}var Vp={type:"change"},Qu={type:"start"},Wp={type:"end"},vc=new Mi,Gp=new an,o_=Math.cos(70*mn.DEG2RAD),rn=new E,On=2*Math.PI,Pt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},$u=1e-6,_c=class extends Uo{constructor(e,t=null){super(e,t),this.state=Pt.NONE,this.target=new E,this.cursor=new E,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ei.ROTATE,MIDDLE:ei.DOLLY,RIGHT:ei.PAN},this.touches={ONE:ps.ROTATE,TWO:ps.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new E,this._lastQuaternion=new $t,this._lastTargetPosition=new E,this._quat=new $t().setFromUnitVectors(e.up,new E(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ti,this._sphericalDelta=new Ti,this._scale=1,this._panOffset=new E,this._rotateStart=new Me,this._rotateEnd=new Me,this._rotateDelta=new Me,this._panStart=new Me,this._panEnd=new Me,this._panDelta=new Me,this._dollyStart=new Me,this._dollyEnd=new Me,this._dollyDelta=new Me,this._dollyDirection=new E,this._mouse=new Me,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=l_.bind(this),this._onPointerDown=a_.bind(this),this._onPointerUp=c_.bind(this),this._onContextMenu=g_.bind(this),this._onMouseWheel=d_.bind(this),this._onKeyDown=f_.bind(this),this._onTouchStart=p_.bind(this),this._onTouchMove=m_.bind(this),this._onMouseDown=h_.bind(this),this._onMouseMove=u_.bind(this),this._interceptControlDown=x_.bind(this),this._interceptControlUp=y_.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Vp),this.update(),this.state=Pt.NONE}update(e=null){let t=this.object.position;rn.copy(t).sub(this.target),rn.applyQuaternion(this._quat),this._spherical.setFromVector3(rn),this.autoRotate&&this.state===Pt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=On:n>Math.PI&&(n-=On),i<-Math.PI?i+=On:i>Math.PI&&(i-=On),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(rn.setFromSpherical(this._spherical),rn.applyQuaternion(this._quatInverse),t.copy(this.target).add(rn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=rn.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let a=new E(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new E(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=rn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(vc.origin.copy(this.object.position),vc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(vc.direction))<o_?this.object.lookAt(this.target):(Gp.setFromNormalAndCoplanarPoint(this.object.up,this.target),vc.intersectPlane(Gp,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>$u||8*(1-this._lastQuaternion.dot(this.object.quaternion))>$u||this._lastTargetPosition.distanceToSquared(this.target)>$u?(this.dispatchEvent(Vp),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?On/60*this.autoRotateSpeed*e:On/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){rn.setFromMatrixColumn(t,0),rn.multiplyScalar(-e),this._panOffset.add(rn)}_panUp(e,t){this.screenSpacePanning===!0?rn.setFromMatrixColumn(t,1):(rn.setFromMatrixColumn(t,0),rn.crossVectors(this.object.up,rn)),rn.multiplyScalar(e),this._panOffset.add(rn)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let i=this.object.position;rn.copy(i).sub(this.target);let r=rn.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),i=e-n.left,r=t-n.top,o=n.width,a=n.height;this._mouse.x=i/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(On*this._rotateDelta.x/t.clientHeight),this._rotateUp(On*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(On*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-On*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(On*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-On*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panStart.set(n,i)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(i,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(On*this._rotateDelta.x/t.clientHeight),this._rotateUp(On*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Me,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function a_(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function l_(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function c_(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Wp),this.state=Pt.NONE;break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function h_(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case ei.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=Pt.DOLLY;break;case ei.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Pt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Pt.ROTATE}break;case ei.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Pt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Pt.PAN}break;default:this.state=Pt.NONE}this.state!==Pt.NONE&&this.dispatchEvent(Qu)}function u_(s){switch(this.state){case Pt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case Pt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case Pt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function d_(s){this.enabled===!1||this.enableZoom===!1||this.state!==Pt.NONE||(s.preventDefault(),this.dispatchEvent(Qu),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(Wp))}function f_(s){this.enabled!==!1&&this._handleKeyDown(s)}function p_(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case ps.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=Pt.TOUCH_ROTATE;break;case ps.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=Pt.TOUCH_PAN;break;default:this.state=Pt.NONE}break;case 2:switch(this.touches.TWO){case ps.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=Pt.TOUCH_DOLLY_PAN;break;case ps.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=Pt.TOUCH_DOLLY_ROTATE;break;default:this.state=Pt.NONE}break;default:this.state=Pt.NONE}this.state!==Pt.NONE&&this.dispatchEvent(Qu)}function m_(s){switch(this._trackPointer(s),this.state){case Pt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case Pt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case Pt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case Pt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=Pt.NONE}}function g_(s){this.enabled!==!1&&s.preventDefault()}function x_(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function y_(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}(()=>{"use strict";let s=document.getElementById("walk-surface"),e=document.getElementById("walk-canvas-host");if(!s||!e)return;let t=U=>document.getElementById(U),n=Object.freeze({width:400,depth:400,height:30,wallThickness:.18}),i=400/100,r=1.65,o=.35,a=1.8,l=new Set,c=new mi,h=new Me,u=new E(0,r,14),f=new E,d=new E,m=new E,x,g,p,w,M,y,b,P,C,D=null,_=null,v=null,A=null,N=null,B=null,z=[],k=!1,X=!1,te="room",Y=!1,ie=0,ae=0,fe=!1,Ue=!1,Ce=null,ze=!1,Ge=0,se=0,le=0,_e=0,be=null,we=(U,L,K)=>Math.max(L,Math.min(K,U)),Ze=new Set(["KeyW","KeyA","KeyS","KeyD","KeyQ","KeyE","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","ShiftLeft","ShiftRight","ControlLeft","ControlRight"]),et=["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],O=(...U)=>U.some(L=>l.has(L));function Ke(U){return U.x=we(U.x,-n.width/2+o,n.width/2-o),U.z=we(U.z,-n.depth/2+o,n.depth/2-o),U.y=fe?we(U.y,o,n.height-o):D?.state().active?U.y:r,D?.constrain(U,o,{fly:fe,eyeHeight:r}),U.x=we(U.x,-n.width/2+o,n.width/2-o),U.z=we(U.z,-n.depth/2+o,n.depth/2-o),U}function ke(){if(te==="axonometric"){p.updateMatrixWorld();return}p.position.copy(u),p.rotation.set(Y?0:ae,ie,0,"YXZ"),p.updateProjectionMatrix(),Y&&(p.projectionMatrix.elements[9]=Math.tan(we(ae,-.8,.8))*p.projectionMatrix.elements[5],p.projectionMatrixInverse.copy(p.projectionMatrix).invert()),p.updateMatrixWorld()}function Oe(){let U=te==="axonometric";t("walk-two-point").hidden=U,t("exhibition-proximity-sound").hidden=U,t("walk-two-point").textContent="Two-point "+(Y?"on":"off"),t("walk-two-point").setAttribute("aria-pressed",String(Y)),t("walk-view-toggle").textContent=U?"Axonometric / switch":"Eye level / switch",t("walk-view-toggle").setAttribute("aria-pressed",String(U)),t("walk-status").textContent=U?"AXONOMETRIC / "+20+" M GRID":(fe?"FLY":"WALK")+" / EYE "+u.y.toFixed(2)+" M",t("walk-view-label").textContent=U?"FLOOR PLAN":"WHITE ATMOSPHERE",s.querySelector(".walk-room-label span:last-child").textContent=U?400+" x "+400+" M":n.width.toFixed(0)+" x "+n.depth.toFixed(0)+" M",t("walk-caption-text").textContent=U?"Drag to rotate \xB7 Wheel to zoom \xB7 Right / middle drag to pan":"WASD to walk \xB7 Drag to look \xB7 Q up / E down \xB7 Space to walk \xB7 Shift faster",t("walk-dimensions").textContent=U?400+" \xD7 "+400+" M / 400 CELLS":n.width.toFixed(0)+" \xD7 "+n.depth.toFixed(0)+" \xD7 "+n.height.toFixed(1)+" M",s.setAttribute("aria-label",U?"Orthographic floor view with four hundred twenty metre grid cells. Drag to rotate; wheel to zoom; right or middle drag to pan.":"Walk through a four hundred by four hundred metre sunlit exhibition with fog and reflective multilevel paths"),s.dataset.view=te,s.dataset.navigationActive=String(Ue),s.dataset.fly=String(fe),s.dataset.eyeX=String(u.x),s.dataset.eyeY=String(u.y),s.dataset.eyeZ=String(u.z)}function Te(){if(l.clear(),Ce)try{x.domElement.releasePointerCapture(Ce.id)}catch{}Ce=null,s.classList.remove("is-dragging"),le=0}function q(){Ue=!1,y&&(y.enabled=!1),Te(),be=null,document.activeElement===s&&s.blur()}function W(){s.dataset.inputActive="true",Ue=!0,y&&(y.enabled=te==="axonometric"),s.focus({preventScroll:!0})}function ye(){ze||(Ge=window.scrollY,ze=!0,document.documentElement.classList.add("exhibition-immersive"),s.classList.add("is-immersive"),s.dataset.immersive="true",t("walk-exit-bar").hidden=!1,s.requestFullscreen({navigationUI:"hide"}).then(()=>{pe(),W()}).catch(()=>{t("walk-notice").textContent="Fullscreen was blocked by the browser. The expanded view remains available."}),pe(),W())}function Ne(){ze&&(ze=!1,s.dataset.immersive="false",s.classList.remove("is-immersive","show-exit"),t("walk-exit-bar").hidden=!0,document.documentElement.classList.remove("exhibition-immersive"),window.ExhibitionWorkspace?.closePanel(),window.ExhibitionBrowse?.close(),ne.endDragPreview(),q(),document.fullscreenElement&&document.exitFullscreen().catch(()=>{}),pe(),window.scrollTo({top:Ge,behavior:"instant"}))}function Be(){return te==="room"&&Ue&&(et.some(U=>l.has(U))||fe&&O("KeyQ","KeyE"))}function R(){!k||X||document.hidden||se||(se=requestAnimationFrame(j))}function S(){x&&(x.shadowMap.needsUpdate=!0),R()}function j(U){if(se=0,X||document.hidden)return;let L=le?Math.min((U-le)/1e3,.05):1/60;if(le=U,be){let K=we((U-be.start)/420,0,1),he=K*K*(3-2*K);u.lerpVectors(be.from,be.to,he),Ke(u),K===1&&(be=null)}if(Be()){be=null;let K=fe?ae:0;f.set(-Math.sin(ie)*Math.cos(K),Math.sin(K),-Math.cos(ie)*Math.cos(K)),d.set(Math.cos(ie),0,-Math.sin(ie)),m.set(0,0,0),O("KeyW","ArrowUp")&&m.add(f),O("KeyS","ArrowDown")&&m.sub(f),O("KeyD","ArrowRight")&&m.add(d),O("KeyA","ArrowLeft")&&m.sub(d),fe&&O("KeyQ")&&(m.y+=1),fe&&O("KeyE")&&(m.y-=1);let he=O("ControlLeft","ControlRight")?6:O("ShiftLeft","ShiftRight")?3:1;m.lengthSq()&&u.addScaledVector(m.normalize(),a*he*L),Ke(u)}ke(),ne.updateHandles(),A.render(te==="room",p)&&R(),_e++,Oe(),Be()||be?R():le=0}function re(){if(Te(),be=null,te==="axonometric")M.position.set(120*i,120*i,120*i),M.zoom=1.08,y.target.set(0,0,0),M.updateProjectionMatrix(),y.update();else{if(D?.state().active){D.enter();return}fe=!1,u.set(0,r,7),ie=0,ae=0}Oe(),R()}function pe(){if(!x||X)return;let U=e.getBoundingClientRect();if(!U.width||!U.height)return;x.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),x.setSize(U.width,U.height,!1),A?.setSize(U.width,U.height);let L=U.width/U.height;w.aspect=L,w.updateProjectionMatrix();let K=Math.max(110,160/L)*i/2;M.left=-K*L,M.right=K*L,M.top=K,M.bottom=-K,M.updateProjectionMatrix(),s.style.setProperty("--walk-toolbar-height",t("walk-toolbar").offsetHeight+"px"),R()}function Q(U){ke();let L=x.domElement.getBoundingClientRect();return h.set((U.clientX-L.left)/L.width*2-1,-(U.clientY-L.top)/L.height*2+1),c.setFromCamera(h,p),c.intersectObjects(te==="room"?[...z,...D?.collisionMeshes()||[]]:[b.getObjectByName("axonometric-floor")],!1)[0]||null}function V(U){t("walk-error").textContent=U,t("walk-error").hidden=!1,s.setAttribute("aria-busy","false")}try{let Ae=function(Bt,Fn,Cn,T,F,G,ee,xe=U){let Ie=new Ye(new un(Fn,Cn,T),xe);return Ie.receiveShadow=!0,Ie.name=Bt,Ie.position.set(F,G,ee),g.add(Ie),z.push(Ie),Ie};g=new Sn,g.background=new Pe("#f2f2f2"),w=new Ft(62,1,.05,250*i),M=new Gn(-100,100,55,-55,.05,700*i),M.position.set(120*i,120*i,120*i),M.zoom=1.08,M.lookAt(0,0,0),p=w,x=new Dr({antialias:!0,stencil:!0,powerPreference:"low-power"}),x.outputColorSpace=Et,x.toneMapping=Tr,x.toneMappingExposure=1.05,x.shadowMap.enabled=!0,x.shadowMap.type=el,x.shadowMap.autoUpdate=!1,e.append(x.domElement),x.domElement.setAttribute("aria-hidden","true");let U=new jt({color:16777215,roughness:.94,metalness:0}),L=new jt({color:16777215,roughness:.72,metalness:0}),K=n.wallThickness,he=n.width/2;Ae("floor",440,K,440,0,-K/2,0,L),Ae("ceiling",40+2*K,K,40+2*K,0,n.height+K/2,0,new Rt({transparent:!0,opacity:0,depthWrite:!1})),v=ep({scene:g,height:n.height,wallMaterial:U}),z.push(...v.collisionMeshes()),P=new pt,P.name="room-floor-junctions",g.add(P);let ve=new vt().setFromPoints([new E(-19.996,.009,-19.996),new E(19.996,.009,-19.996),new E(19.996,.009,19.996),new E(-19.996,.009,19.996)]);P.add(new us(ve,new $n({color:12107976,transparent:!0,opacity:.7,toneMapped:!1})));let me=new en(40,.22,1,12),De=me.attributes.position,Xe=[];for(let Bt=0;Bt<De.count;Bt++){let Fn=we((De.getY(Bt)+.11)/.22,0,1);Xe.push(1,1,1,.16*Math.pow(Fn,2))}me.setAttribute("color",new mt(Xe,4));let _t=new Rt({color:9542307,vertexColors:!0,transparent:!0,depthWrite:!1,toneMapped:!1,side:xt});for(let[Bt,Fn,Cn]of[[0,-19.89,0],[0,19.89,Math.PI],[-19.89,0,Math.PI/2],[19.89,0,-Math.PI/2]]){let T=new Ye(me,_t);T.rotation.set(-Math.PI/2,0,Cn),T.position.set(Bt,.005,Fn),P.add(T)}b=new pt,b.name="axonometric-floor-view",b.visible=!1,g.add(b);let ot=new Ye(new en(400,400),new Rt({color:16777215,side:xt,toneMapped:!1}));ot.name="axonometric-floor",ot.rotation.x=-Math.PI/2,b.add(ot),C=new Do(400,20,11384253,11384253),C.name="twenty-metre-grid",C.position.y=.004,C.material.transparent=!0,C.material.opacity=.48,C.material.depthWrite=!1,C.material.toneMapped=!1,b.add(C);let At=new us(new vt().setFromPoints([new E(-200,.006,-200),new E(200,.006,-200),new E(200,.006,200),new E(-200,.006,200)]),new $n({color:10398646,transparent:!0,opacity:.6,toneMapped:!1}));b.add(At),g.add(new ji(14542061,4338987,.08));for(let Bt of[-5,5])for(let Fn of[-5,5]){let Cn=new Zi(16777215,7,28,2);Cn.visible=!1,Cn.name="gallery-ceiling-light",Cn.position.set(Bt,n.height-.45,Fn),g.add(Cn)}_=dp({scene:g,renderer:x,height:n.height,floorMaterial:L,openAtmosphere:!0});let qt=new Qi(x),ri=new yc;g.environment=qt.fromScene(ri,.05).texture,g.environmentIntensity=.68,qt.dispose(),ri.dispose(),A=cp({scene:g,renderer:x,camera:w}),k=!0,s.setAttribute("aria-busy","false"),Oe()}catch(U){console.error("White exhibition room:",U),V("The 3D room could not start. Enable WebGL in your browser and reload this page.");return}B=hp({scene:g,skylight:_,renderPipeline:A,invalidate:S});let H=x.domElement,ne=Hp({scene:g,canvas:H,getCamera:()=>p,getRoomMeshes:()=>z,isRoom:()=>te==="room",orient:ke,invalidate:S,previewInvalidate:R,suspend:q,getMaxHeight:()=>57.5*i});N=op({scene:g,renderer:x,getMeshes:()=>{let U=D?.collisionMeshes()||[];if(U.length)return U;let L=[];for(let K of ne.spaceSources())K.object.traverse(he=>{he.isMesh&&L.push(he)});return L},invalidate:R}),window.addEventListener("exhibition-placement-change",()=>N.refresh()),D=Op({scene:g,renderer:x,placement:ne,getCamera:()=>p,onSpaceLight:(U,L)=>{N?.refresh(),_.updateCanopy(U,L),A.updateSpace(U,L)},onSpaceBounds:de,getView:()=>te,setView:ue,navigate:U=>{Te(),be=null,fe=!1,u.set(U.x,U.y,U.z),ie=U.yaw,ae=U.pitch||0,Ke(u),Oe(),R(),W()},invalidate:S}),s.addEventListener("dblclick",U=>{U.target===H&&!ze&&U.button===0&&(U.preventDefault(),U.stopPropagation(),ye())},!0),s.addEventListener("pointermove",U=>{ze&&s.classList.toggle("show-exit",U.clientY-s.getBoundingClientRect().top<54)}),s.addEventListener("pointerleave",()=>s.classList.remove("show-exit")),t("walk-exit").addEventListener("click",Ne),s.addEventListener("pointerdown",U=>{U.target===H&&W()},!0),y=new _c(M,H),y.enabled=!1,y.enableDamping=!1,y.minPolarAngle=.12,y.maxPolarAngle=Math.PI/2-.1,y.minZoom=.35,y.maxZoom=12,y.screenSpacePanning=!1,y.mouseButtons={LEFT:ei.ROTATE,MIDDLE:ei.PAN,RIGHT:ei.PAN},y.addEventListener("change",R);function ue(U){if(!["room","axonometric"].includes(U))throw new TypeError("Unknown gallery view.");Te(),be=null,te=U,N?.setViewMode(U);let L=U==="axonometric";g.background.set(L?16777215:15789543),g.fog=L?null:new uo(15789543,.0095/i),z.forEach(K=>K.visible=!L&&K.name==="floor"),v.setVisible(!1),P.visible=!1,b.visible=L,_.setRoomMode(!L),B?.setViewMode(U),p=L?M:w,ne.setViewMode(U),D?.setViewMode?.(U),y.enabled=L&&Ue,Oe(),pe(),R()}function $(U){let L=we(Number(U)||30,30,180*i);Math.abs(L-n.height)<.01||(n=Object.freeze({...n,height:L}),z.find(K=>K.name==="ceiling").position.y=L+n.wallThickness/2,v.setHeight(L),z=z.filter(K=>["floor","ceiling"].includes(K.name)).concat(v.collisionMeshes()),z.forEach(K=>K.visible=te==="room"&&K.name==="floor"),g.traverse(K=>{K.isPointLight&&K.name==="gallery-ceiling-light"&&(K.position.y=L-.45)}),_.setHeight(L),Ke(u),Oe(),S())}function de(U){let L=U.getSize(new E),K=Math.max(400,L.x+40),he=Math.max(400,L.z+40);n=Object.freeze({...n,width:K,depth:he});let Ae=z.find(ve=>ve.name==="floor");Ae.geometry.dispose(),Ae.geometry=new un(K+40,n.wallThickness,he+40),$(Math.max(30,U.max.y+3)),R()}function Ee(U){Y=!!U,Y&&(ae=we(ae,-.8,.8)),Oe(),R()}ue("axonometric"),H.addEventListener("contextmenu",U=>U.preventDefault()),H.addEventListener("pointerdown",U=>{if(!Ue||te==="axonometric"||U.button>2)return;U.preventDefault(),W(),be=null;let K=(U.button===2?Q(U):null)?.point.clone()||u.clone().add(p.getWorldDirection(new E).multiplyScalar(5));Ce={id:U.pointerId,button:U.button,x:U.clientX,y:U.clientY,pivot:K},H.setPointerCapture(U.pointerId),s.classList.add("is-dragging")}),H.addEventListener("pointermove",U=>{if(!Ce||Ce.id!==U.pointerId)return;let L=U.clientX-Ce.x,K=U.clientY-Ce.y;if(Ce.x=U.clientX,Ce.y=U.clientY,Ce.button===0)ie-=L*.0035,ae=we(ae-K*.0035,Y?-.8:-1.45,Y?.8:1.45);else if(Ce.button===1)d.set(Math.cos(ie),0,-Math.sin(ie)),u.addScaledVector(d,-L*.008),fe&&(u.y+=K*.008),Ke(u);else{let he=u.clone().sub(Ce.pivot),Ae=new Ti().setFromVector3(he);Ae.theta-=L*.0035,fe&&(Ae.phi=we(Ae.phi+K*.0035,.1,Math.PI-.1)),u.copy(Ce.pivot).add(new E().setFromSpherical(Ae)),Ke(u),p.position.copy(u),p.lookAt(Ce.pivot);let ve=new Dn().setFromQuaternion(p.quaternion,"YXZ");ie=ve.y,ae=we(ve.x-(fe?0:K*.0035),Y?-.8:-1.45,Y?.8:1.45)}R()});function Se(U){if(Ce?.id===U.pointerId){try{H.releasePointerCapture(U.pointerId)}catch{}Ce=null,s.classList.remove("is-dragging")}}H.addEventListener("pointerup",Se),H.addEventListener("pointercancel",Se),H.addEventListener("lostpointercapture",()=>{Ce=null,s.classList.remove("is-dragging")}),H.addEventListener("dblclick",U=>{if(te==="axonometric"||U.button!==0)return;let L=Q(U);if(!L||L.object.name!=="floor")return;W();let K=L.point.clone();K.y=fe?u.y:r,Ke(K),be={from:u.clone(),to:K,start:performance.now()},R()}),H.addEventListener("wheel",U=>{if(te==="axonometric"||!Ue)return;U.preventDefault(),be=null;let L=U.deltaMode===1?16:U.deltaMode===2?e.clientHeight:1,K=we(U.deltaY*L*.006,-1.2,1.2),he=fe?ae:0;f.set(-Math.sin(ie)*Math.cos(he),Math.sin(he),-Math.cos(ie)*Math.cos(he)),u.addScaledVector(f,-K),Ke(u),R()},{passive:!1}),document.addEventListener("keydown",U=>{if(!(U.code==="Escape"&&document.querySelector("#exhibition-materials[open],#saved-model-edit[open]"))){if(U.code==="Escape"&&document.fullscreenElement===s){Te(),be=null,Ne();return}if(U.code==="Escape"&&ze&&!document.querySelector("dialog[open]")&&s.dataset.workspaceOpen!=="collage"&&s.dataset.workspaceOpen!=="sculpture"&&s.dataset.workspaceOpen!=="model"&&s.dataset.modelBrowse!=="true"){U.preventDefault(),Ne();return}if(!(!Ue||document.activeElement!==s||te==="axonometric")){if(U.code==="Escape"){Te(),be=null;return}if(U.code==="Space"){U.preventDefault(),U.repeat||(fe=!fe,Ke(u),Oe(),R());return}Ze.has(U.code)&&(U.preventDefault(),(U.code==="KeyQ"||U.code==="KeyE")&&(fe=!0),l.add(U.code),R())}}}),document.addEventListener("keyup",U=>{l.delete(U.code)&&R()}),s.addEventListener("focus",()=>{Ue=!0,s.dataset.inputActive="true",y&&(y.enabled=te==="axonometric")}),s.addEventListener("blur",()=>{Ue=!1,y.enabled=!1,Te(),be=null}),document.addEventListener("pointerdown",U=>{s.contains(U.target)||(s.dataset.inputActive="false",Ue=!1,y.enabled=!1,Te(),be=null,s.blur())},!0),window.addEventListener("blur",()=>{Ue=!1,y.enabled=!1,Te(),be=null}),document.addEventListener("visibilitychange",()=>{document.hidden?(Te(),be=null,se&&cancelAnimationFrame(se),se=0):R()}),t("walk-two-point").addEventListener("click",()=>{Ee(!Y),W()}),t("walk-view-toggle").addEventListener("click",()=>{if(te==="axonometric"&&D.state().active){D.enter();return}ue(te==="room"?"axonometric":"room"),W()}),t("walk-reset").addEventListener("click",()=>{re(),W()}),document.addEventListener("fullscreenchange",()=>{let U=document.fullscreenElement===s;if(!document.fullscreenElement&&ze){Ne();return}Te(),pe(),s.dataset.modelBrowse==="true"||document.fullscreenElement&&document.fullscreenElement!==s||s.dataset.workspaceOpen&&s.dataset.workspaceOpen!=="none"?q():ze?W():q()}),H.addEventListener("webglcontextlost",U=>{U.preventDefault(),k=!1,Te(),V("The graphics connection was interrupted. Reload this page to reopen the room.")});let ge=new ResizeObserver(pe);ge.observe(e),ge.observe(t("walk-toolbar")),window.addEventListener("resize",pe),window.addEventListener("pagehide",U=>{if(Te(),se&&cancelAnimationFrame(se),se=0,!U.persisted){X=!0,ge.disconnect(),y.dispose();let L=new Set,K=new Set;g.traverse(he=>{if(he.geometry&&L.add(he.geometry),he.sectionGeometry&&L.add(he.sectionGeometry),he.material)for(let Ae of Array.isArray(he.material)?he.material:[he.material])K.add(Ae)}),L.forEach(he=>he.dispose()),K.forEach(he=>he.dispose()),B?.dispose(),N?.dispose(),D?.dispose(),_?.dispose(),v?.dispose(),A?.dispose(),g.environment?.dispose(),x.dispose()}}),window.addEventListener("pageshow",()=>{pe()}),window.ExhibitionWalk=Object.freeze({state:()=>({lighting:B.state(),section:N.state(),space:D.state(),skylight:_.state(),ready:k,environment:"warm-dawn-fog",atmosphere:{fog:!!g.fog,background:"#f0ede7",fogDensity:.0095,sunShadows:te==="room",volumetric:_.state().volumetric.visible},room:{...n,closed:!1,wallCount:0,floor:!0,ceiling:!1},camera:te==="room"?{x:u.x,y:u.y,z:u.z,yaw:ie,pitch:ae}:{x:M.position.x,y:M.position.y,z:M.position.z},viewMode:te,twoPoint:Y,projection:p.isOrthographicCamera?"orthographic":"perspective",walkingCamera:{x:u.x,y:u.y,z:u.z,yaw:ie,pitch:ae},fly:fe,active:Ue,immersive:ze,fullscreen:document.fullscreenElement===s,axonometric:{zoom:M.zoom,target:y.target.toArray(),wallsVisible:z.filter(U=>U.name.includes("wall")&&U.visible).length,ceilingVisible:z.find(U=>U.name==="ceiling").visible},factory:v.state(),grid:{visible:b.visible,size:400,divisions:20,cellSize:20,cells:400,lines:C.geometry.attributes.position.count/2,opacity:C.material.opacity},floorJunctions:{visible:P.visible,seam:!0,softContactShading:!0},walkingBounds:{x:[-n.width/2+o,n.width/2-o],z:[-n.depth/2+o,n.depth/2-o],y:[o,n.height-o]},displayCount:ne.state().modelCount,modelsLoaded:ne.state().modelCount,textureCount:ne.state().textureCount,placements:ne.state(),rendering:A.state(),performance:{triangles:x.info.render.triangles,drawCalls:x.info.render.calls,pixelRatio:x.getPixelRatio(),shadows:x.shadowMap.enabled,shadowAutoUpdate:x.shadowMap.autoUpdate,continuousRendering:!!se,frameCount:_e},moving:!!be||Be()}),lighting:B,section:N,reset:re,setViewMode:ue,setTwoPoint:Ee,setRoomHeight:$,suspendNavigation:q,enterImmersive:ye,leaveImmersive:Ne,placement:ne,space:D,gridSegments:()=>Array.from(C.geometry.attributes.position.array),setCamera:U=>{Te(),be=null,typeof U.fly=="boolean"&&(fe=U.fly),u.set(U.x??u.x,U.y??u.y,U.z??u.z),Ke(u),ie=U.yaw??ie,ae=we(U.pitch??ae,Y?-.8:-1.45,Y?.8:1.45),Oe(),R()},projectWorld:U=>{ke();let L=H.getBoundingClientRect();return U.map(K=>{let he=new E().fromArray(K).project(p);return{x:L.left+(he.x+1)*L.width/2,y:L.top+(1-he.y)*L.height/2,depth:he.z}})}})})();})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
