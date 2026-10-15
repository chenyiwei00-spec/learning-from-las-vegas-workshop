(()=>{var Qn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ps={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Hd=0,hh=1,Vd=2;var uh=1,tl=2,Ti=3,Hn=0,Wt=1,vt=2,mt=0,hi=1,ks=2,dh=3,fh=4,Cr=5,cn=100,Gd=101,Wd=102,Xd=103,qd=104,Hs=200,Yd=201,jd=202,Zd=203,Bi=204,zi=205,Bo=206,Kd=207,zo=208,Jd=209,$d=210,Qd=211,ef=212,tf=213,nf=214,nl=0,il=1,sl=2,Ds=3,rl=4,ol=5,al=6,ll=7,cl=0,sf=1,rf=2,Ki=0,hl=1,ul=2,dl=3,ms=4,fl=5,pl=6,ml=7,Qc="attached",of="detached",ph=300,Vs=301,Gs=302,gl=303,xl=304,ko=306,hn=1e3,Kn=1001,as=1002,xt=1003,Pr=1004;var Ji=1005;var $t=1006,gs=1007;var pn=1008;var Vn=1009,mh=1010,gh=1011,xs=1012,yl=1013,ys=1014,ei=1015,Xt=1016,vl=1017,_l=1018,vs=1020,xh=35902,yh=35899,vh=1021,_h=1022,nn=1023,xr=1026,_s=1027,Ml=1028,Sl=1029,Mh=1030,bl=1031;var El=1033,Ho=33776,Vo=33777,Go=33778,Wo=33779,wl=35840,Tl=35841,Al=35842,Rl=35843,Cl=36196,Pl=37492,Il=37496,Dl=37808,Ll=37809,Nl=37810,Ul=37811,Ol=37812,Fl=37813,Bl=37814,zl=37815,kl=37816,Hl=37817,Vl=37818,Gl=37819,Wl=37820,Xl=37821,ql=36492,Yl=36494,jl=36495,Zl=36283,Kl=36284,Jl=36285,$l=36286;var ki=2300,Hi=2301,La=2302,eh=2400,th=2401,nh=2402,af=2500;var Sh=0,Xo=1,Ir=2,lf=3200,cf=3201;var qo=0,hf=1,pi="",St="srgb",fn="srgb-linear",ro="linear",At="srgb";var Is=7680,Yo=7681;var bh=34055,Eh=34056;var wh=517;var oo=519,uf=512,df=513,ff=514,Th=515,pf=516,mf=517,gf=518,xf=519,Na=35044;var Ah="300 es",li=2e3,ao=2001;var vi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}},yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ed=1234567,to=Math.PI/180,Ls=180/Math.PI;function ci(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(yn[s&255]+yn[s>>8&255]+yn[s>>16&255]+yn[s>>24&255]+"-"+yn[e&255]+yn[e>>8&255]+"-"+yn[e>>16&15|64]+yn[e>>24&255]+"-"+yn[t&63|128]+yn[t>>8&255]+"-"+yn[t>>16&255]+yn[t>>24&255]+yn[n&255]+yn[n>>8&255]+yn[n>>16&255]+yn[n>>24&255]).toLowerCase()}function et(s,e,t){return Math.max(e,Math.min(t,s))}function Rh(s,e){return(s%e+e)%e}function jp(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Zp(s,e,t){return s!==e?(t-s)/(e-s):0}function no(s,e,t){return(1-t)*s+t*e}function Kp(s,e,t,n){return no(s,e,1-Math.exp(-t*n))}function Jp(s,e=1){return e-Math.abs(Rh(s,e*2)-e)}function $p(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Qp(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function em(s,e){return s+Math.floor(Math.random()*(e-s+1))}function tm(s,e){return s+Math.random()*(e-s)}function nm(s){return s*(.5-Math.random())}function im(s){s!==void 0&&(ed=s);let e=ed+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function sm(s){return s*to}function rm(s){return s*Ls}function om(s){return(s&s-1)===0&&s!==0}function am(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function lm(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function cm(s,e,t,n,i){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),f=o((e-n)/2),d=r((n-e)/2),m=o((n-e)/2);switch(i){case"XYX":s.set(a*h,l*u,l*f,a*c);break;case"YZY":s.set(l*f,a*h,l*u,a*c);break;case"ZXZ":s.set(l*u,l*f,a*h,a*c);break;case"XZX":s.set(a*h,l*m,l*d,a*c);break;case"YXY":s.set(l*d,a*h,l*m,a*c);break;case"ZYZ":s.set(l*m,l*d,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function ai(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Pt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var Mn={DEG2RAD:to,RAD2DEG:Ls,generateUUID:ci,clamp:et,euclideanModulo:Rh,mapLinear:jp,inverseLerp:Zp,lerp:no,damp:Kp,pingpong:Jp,smoothstep:$p,smootherstep:Qp,randInt:em,randFloat:tm,randFloatSpread:nm,seededRandom:im,degToRad:sm,radToDeg:rm,isPowerOfTwo:om,ceilPowerOfTwo:am,floorPowerOfTwo:lm,setQuaternionFromProperEuler:cm,normalize:Pt,denormalize:ai},Me=class s{constructor(e=0,t=0){s.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(et(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(et(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Gt=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],f=r[o+0],d=r[o+1],m=r[o+2],x=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=m,e[t+3]=x;return}if(u!==x||l!==f||c!==d||h!==m){let g=1-a,p=l*f+c*d+h*m+u*x,E=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){let S=Math.sqrt(M),R=Math.atan2(S,p*E);g=Math.sin(g*R)/S,a=Math.sin(a*R)/S}let y=a*E;if(l=l*g+f*y,c=c*g+d*y,h=h*g+m*y,u=u*g+x*y,g===1-a){let S=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=S,c*=S,h*=S,u*=S}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[o],f=r[o+1],d=r[o+2],m=r[o+3];return e[t]=a*m+h*u+l*d-c*f,e[t+1]=l*m+h*f+c*u-a*d,e[t+2]=c*m+h*d+a*f-l*u,e[t+3]=h*m-a*u-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(r/2),f=l(n/2),d=l(i/2),m=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u-f*d*m;break;case"YXZ":this._x=f*h*u+c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u+f*d*m;break;case"ZXY":this._x=f*h*u-c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u-f*d*m;break;case"ZYX":this._x=f*h*u-c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u+f*d*m;break;case"YZX":this._x=f*h*u+c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u-f*d*m;break;case"XZY":this._x=f*h*u-c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u+f*d*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-i)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(r+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(r-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-i)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(et(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},w=class s{constructor(e=0,t=0,n=0){s.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(td.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(td.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),h=2*(a*t-r*i),u=2*(r*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=i+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(et(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Sc.copy(this).projectOnVector(e),this.sub(Sc)}reflect(e){return this.sub(Sc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(et(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Sc=new w,td=new Gt,it=class s{constructor(e,t,n,i,r,o,a,l,c){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c)}set(e,t,n,i,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],m=n[8],x=i[0],g=i[3],p=i[6],E=i[1],M=i[4],y=i[7],S=i[2],R=i[5],C=i[8];return r[0]=o*x+a*E+l*S,r[3]=o*g+a*M+l*R,r[6]=o*p+a*y+l*C,r[1]=c*x+h*E+u*S,r[4]=c*g+h*M+u*R,r[7]=c*p+h*y+u*C,r[2]=f*x+d*E+m*S,r[5]=f*g+d*M+m*R,r[8]=f*p+d*y+m*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,f=a*l-h*r,d=c*r-o*l,m=t*u+n*f+i*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return e[0]=u*x,e[1]=(i*c-h*n)*x,e[2]=(a*n-i*o)*x,e[3]=f*x,e[4]=(h*t-i*l)*x,e[5]=(i*r-a*t)*x,e[6]=d*x,e[7]=(n*l-c*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(bc.makeScale(e,t)),this}rotate(e){return this.premultiply(bc.makeRotation(-e)),this}translate(e,t){return this.premultiply(bc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},bc=new it;function Ch(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function yr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function yf(){let s=yr("canvas");return s.style.display="block",s}var nd={};function vr(s){s in nd||(nd[s]=!0,console.warn(s))}function vf(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var id=new it().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),sd=new it().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function hm(){let s={enabled:!0,workingColorSpace:fn,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===At&&(i.r=Fi(i.r),i.g=Fi(i.g),i.b=Fi(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===At&&(i.r=gr(i.r),i.g=gr(i.g),i.b=gr(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===pi?ro:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return vr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return vr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[fn]:{primaries:e,whitePoint:n,transfer:ro,toXYZ:id,fromXYZ:sd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:St},outputColorSpaceConfig:{drawingBufferColorSpace:St}},[St]:{primaries:e,whitePoint:n,transfer:At,toXYZ:id,fromXYZ:sd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:St}}}),s}var at=hm();function Fi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function gr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var er,_r=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{er===void 0&&(er=yr("canvas")),er.width=e.width,er.height=e.height;let i=er.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=er}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=yr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Fi(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Fi(t[n]/255)*255):t[n]=Fi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},um=0,ls=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:um++}),this.uuid=ci(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Ec(i[o].image)):r.push(Ec(i[o]))}else r=Ec(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function Ec(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?_r.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var dm=0,wc=new w,Qt=class s extends vi{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=Kn,i=Kn,r=$t,o=pn,a=nn,l=Vn,c=s.DEFAULT_ANISOTROPY,h=pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dm++}),this.uuid=ci(),this.name="",this.source=new ls(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Me(0,0),this.repeat=new Me(1,1),this.center=new Me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new it,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(wc).x}get height(){return this.source.getSize(wc).y}get depth(){return this.source.getSize(wc).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ph)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case hn:e.x=e.x-Math.floor(e.x);break;case Kn:e.x=e.x<0?0:1;break;case as:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case hn:e.y=e.y-Math.floor(e.y);break;case Kn:e.y=e.y<0?0:1;break;case as:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Qt.DEFAULT_IMAGE=null;Qt.DEFAULT_MAPPING=ph;Qt.DEFAULT_ANISOTROPY=1;var lt=class s{constructor(e=0,t=0,n=0,i=1){s.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],m=l[9],x=l[2],g=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(m+g)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(c+1)/2,y=(d+1)/2,S=(p+1)/2,R=(h+f)/4,C=(u+x)/4,D=(m+g)/4;return M>y&&M>S?M<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(M),i=R/n,r=C/n):y>S?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=R/i,r=D/i):S<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(S),n=C/r,i=D/r),this.set(n,i,r,t),this}let E=Math.sqrt((g-m)*(g-m)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(E)<.001&&(E=1),this.x=(g-m)/E,this.y=(u-x)/E,this.z=(f-h)/E,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this.w=et(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this.w=et(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(et(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ua=class extends vi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$t,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new lt(0,0,e,t),this.scissorTest=!1,this.viewport=new lt(0,0,e,t);let i={width:e,height:t,depth:n.depth},r=new Qt(i);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:$t,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new ls(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Nt=class extends Ua{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},lo=class extends Qt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=xt,this.minFilter=xt,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Oa=class extends Qt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=xt,this.minFilter=xt,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var $e=class{constructor(e=new w(1/0,1/0,1/0),t=new w(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(si.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(si.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=si.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,si):si.fromBufferAttribute(r,o),si.applyMatrix4(e.matrixWorld),this.expandByPoint(si);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),oa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),oa.copy(n.boundingBox)),oa.applyMatrix4(e.matrixWorld),this.union(oa)}let i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,si),si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Yr),aa.subVectors(this.max,Yr),tr.subVectors(e.a,Yr),nr.subVectors(e.b,Yr),ir.subVectors(e.c,Yr),ts.subVectors(nr,tr),ns.subVectors(ir,nr),As.subVectors(tr,ir);let t=[0,-ts.z,ts.y,0,-ns.z,ns.y,0,-As.z,As.y,ts.z,0,-ts.x,ns.z,0,-ns.x,As.z,0,-As.x,-ts.y,ts.x,0,-ns.y,ns.x,0,-As.y,As.x,0];return!Tc(t,tr,nr,ir,aa)||(t=[1,0,0,0,1,0,0,0,1],!Tc(t,tr,nr,ir,aa))?!1:(la.crossVectors(ts,ns),t=[la.x,la.y,la.z],Tc(t,tr,nr,ir,aa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ii),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ii=[new w,new w,new w,new w,new w,new w,new w,new w],si=new w,oa=new $e,tr=new w,nr=new w,ir=new w,ts=new w,ns=new w,As=new w,Yr=new w,aa=new w,la=new w,Rs=new w;function Tc(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Rs.fromArray(s,r);let a=i.x*Math.abs(Rs.x)+i.y*Math.abs(Rs.y)+i.z*Math.abs(Rs.z),l=e.dot(Rs),c=t.dot(Rs),h=n.dot(Rs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var fm=new $e,jr=new w,Ac=new w,un=class{constructor(e=new w,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):fm.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;jr.subVectors(e,this.center);let t=jr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(jr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ac.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(jr.copy(e.center).add(Ac)),this.expandByPoint(jr.copy(e.center).sub(Ac))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Di=new w,Rc=new w,ca=new w,is=new w,Cc=new w,ha=new w,Pc=new w,_i=class{constructor(e=new w,t=new w(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Di)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Di.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Di.copy(this.origin).addScaledVector(this.direction,t),Di.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Rc.copy(e).add(t).multiplyScalar(.5),ca.copy(t).sub(e).normalize(),is.copy(this.origin).sub(Rc);let r=e.distanceTo(t)*.5,o=-this.direction.dot(ca),a=is.dot(this.direction),l=-is.dot(ca),c=is.lengthSq(),h=Math.abs(1-o*o),u,f,d,m;if(h>0)if(u=o*l-a,f=o*a-l,m=r*h,u>=0)if(f>=-m)if(f<=m){let x=1/h;u*=x,f*=x,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-m?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=m?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Rc).addScaledVector(ca,f),d}intersectSphere(e,t){Di.subVectors(e.center,this.origin);let n=Di.dot(this.direction),i=Di.dot(Di)-n*n,r=e.radius*e.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Di)!==null}intersectTriangle(e,t,n,i,r){Cc.subVectors(t,e),ha.subVectors(n,e),Pc.crossVectors(Cc,ha);let o=this.direction.dot(Pc),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;is.subVectors(this.origin,e);let l=a*this.direction.dot(ha.crossVectors(is,ha));if(l<0)return null;let c=a*this.direction.dot(Cc.cross(is));if(c<0||l+c>o)return null;let h=-a*is.dot(Pc);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},He=class s{constructor(e,t,n,i,r,o,a,l,c,h,u,f,d,m,x,g){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c,h,u,f,d,m,x,g)}set(e,t,n,i,r,o,a,l,c,h,u,f,d,m,x,g){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=m,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/sr.setFromMatrixColumn(e,0).length(),r=1/sr.setFromMatrixColumn(e,1).length(),o=1/sr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=o*h,d=o*u,m=a*h,x=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=d+m*c,t[5]=f-x*c,t[9]=-a*l,t[2]=x-f*c,t[6]=m+d*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*h,d=l*u,m=c*h,x=c*u;t[0]=f+x*a,t[4]=m*a-d,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=d*a-m,t[6]=x+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*h,d=l*u,m=c*h,x=c*u;t[0]=f-x*a,t[4]=-o*u,t[8]=m+d*a,t[1]=d+m*a,t[5]=o*h,t[9]=x-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*h,d=o*u,m=a*h,x=a*u;t[0]=l*h,t[4]=m*c-d,t[8]=f*c+x,t[1]=l*u,t[5]=x*c+f,t[9]=d*c-m,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,d=o*c,m=a*l,x=a*c;t[0]=l*h,t[4]=x-f*u,t[8]=m*u+d,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=d*u+m,t[10]=f-x*u}else if(e.order==="XZY"){let f=o*l,d=o*c,m=a*l,x=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+x,t[5]=o*h,t[9]=d*u-m,t[2]=m*u-d,t[6]=a*h,t[10]=x*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(pm,e,mm)}lookAt(e,t,n){let i=this.elements;return zn.subVectors(e,t),zn.lengthSq()===0&&(zn.z=1),zn.normalize(),ss.crossVectors(n,zn),ss.lengthSq()===0&&(Math.abs(n.z)===1?zn.x+=1e-4:zn.z+=1e-4,zn.normalize(),ss.crossVectors(n,zn)),ss.normalize(),ua.crossVectors(zn,ss),i[0]=ss.x,i[4]=ua.x,i[8]=zn.x,i[1]=ss.y,i[5]=ua.y,i[9]=zn.y,i[2]=ss.z,i[6]=ua.z,i[10]=zn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],m=n[2],x=n[6],g=n[10],p=n[14],E=n[3],M=n[7],y=n[11],S=n[15],R=i[0],C=i[4],D=i[8],_=i[12],v=i[1],A=i[5],U=i[9],k=i[13],F=i[2],z=i[6],G=i[10],ie=i[14],j=i[3],oe=i[7],te=i[11],pe=i[15];return r[0]=o*R+a*v+l*F+c*j,r[4]=o*C+a*A+l*z+c*oe,r[8]=o*D+a*U+l*G+c*te,r[12]=o*_+a*k+l*ie+c*pe,r[1]=h*R+u*v+f*F+d*j,r[5]=h*C+u*A+f*z+d*oe,r[9]=h*D+u*U+f*G+d*te,r[13]=h*_+u*k+f*ie+d*pe,r[2]=m*R+x*v+g*F+p*j,r[6]=m*C+x*A+g*z+p*oe,r[10]=m*D+x*U+g*G+p*te,r[14]=m*_+x*k+g*ie+p*pe,r[3]=E*R+M*v+y*F+S*j,r[7]=E*C+M*A+y*z+S*oe,r[11]=E*D+M*U+y*G+S*te,r[15]=E*_+M*k+y*ie+S*pe,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],d=e[14],m=e[3],x=e[7],g=e[11],p=e[15];return m*(+r*l*u-i*c*u-r*a*f+n*c*f+i*a*d-n*l*d)+x*(+t*l*d-t*c*f+r*o*f-i*o*d+i*c*h-r*l*h)+g*(+t*c*u-t*a*d-r*o*u+n*o*d+r*a*h-n*c*h)+p*(-i*a*h-t*l*u+t*a*f+i*o*u-n*o*f+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],d=e[11],m=e[12],x=e[13],g=e[14],p=e[15],E=u*g*c-x*f*c+x*l*d-a*g*d-u*l*p+a*f*p,M=m*f*c-h*g*c-m*l*d+o*g*d+h*l*p-o*f*p,y=h*x*c-m*u*c+m*a*d-o*x*d-h*a*p+o*u*p,S=m*u*l-h*x*l-m*a*f+o*x*f+h*a*g-o*u*g,R=t*E+n*M+i*y+r*S;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/R;return e[0]=E*C,e[1]=(x*f*r-u*g*r-x*i*d+n*g*d+u*i*p-n*f*p)*C,e[2]=(a*g*r-x*l*r+x*i*c-n*g*c-a*i*p+n*l*p)*C,e[3]=(u*l*r-a*f*r-u*i*c+n*f*c+a*i*d-n*l*d)*C,e[4]=M*C,e[5]=(h*g*r-m*f*r+m*i*d-t*g*d-h*i*p+t*f*p)*C,e[6]=(m*l*r-o*g*r-m*i*c+t*g*c+o*i*p-t*l*p)*C,e[7]=(o*f*r-h*l*r+h*i*c-t*f*c-o*i*d+t*l*d)*C,e[8]=y*C,e[9]=(m*u*r-h*x*r-m*n*d+t*x*d+h*n*p-t*u*p)*C,e[10]=(o*x*r-m*a*r+m*n*c-t*x*c-o*n*p+t*a*p)*C,e[11]=(h*a*r-o*u*r-h*n*c+t*u*c+o*n*d-t*a*d)*C,e[12]=S*C,e[13]=(h*x*i-m*u*i+m*n*f-t*x*f-h*n*g+t*u*g)*C,e[14]=(m*a*i-o*x*i-m*n*l+t*x*l+o*n*g-t*a*g)*C,e[15]=(o*u*i-h*a*i+h*n*l-t*u*l-o*n*f+t*a*f)*C,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,f=r*c,d=r*h,m=r*u,x=o*h,g=o*u,p=a*u,E=l*c,M=l*h,y=l*u,S=n.x,R=n.y,C=n.z;return i[0]=(1-(x+p))*S,i[1]=(d+y)*S,i[2]=(m-M)*S,i[3]=0,i[4]=(d-y)*R,i[5]=(1-(f+p))*R,i[6]=(g+E)*R,i[7]=0,i[8]=(m+M)*C,i[9]=(g-E)*C,i[10]=(1-(f+x))*C,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,r=sr.set(i[0],i[1],i[2]).length(),o=sr.set(i[4],i[5],i[6]).length(),a=sr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],ri.copy(this);let c=1/r,h=1/o,u=1/a;return ri.elements[0]*=c,ri.elements[1]*=c,ri.elements[2]*=c,ri.elements[4]*=h,ri.elements[5]*=h,ri.elements[6]*=h,ri.elements[8]*=u,ri.elements[9]*=u,ri.elements[10]*=u,t.setFromRotationMatrix(ri),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=li,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(n-i),f=(t+e)/(t-e),d=(n+i)/(n-i),m,x;if(l)m=r/(o-r),x=o*r/(o-r);else if(a===li)m=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===ao)m=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=li,l=!1){let c=this.elements,h=2/(t-e),u=2/(n-i),f=-(t+e)/(t-e),d=-(n+i)/(n-i),m,x;if(l)m=1/(o-r),x=o/(o-r);else if(a===li)m=-2/(o-r),x=-(o+r)/(o-r);else if(a===ao)m=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},sr=new w,ri=new He,pm=new w(0,0,0),mm=new w(1,1,1),ss=new w,ua=new w,zn=new w,rd=new He,od=new Gt,Dn=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(et(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-et(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(et(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-et(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(et(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return rd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(rd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return od.setFromEuler(this),this.setFromQuaternion(od,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Dn.DEFAULT_ORDER="XYZ";var Mr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},gm=0,ad=new w,rr=new Gt,Li=new He,da=new w,Zr=new w,xm=new w,ym=new Gt,ld=new w(1,0,0),cd=new w(0,1,0),hd=new w(0,0,1),ud={type:"added"},vm={type:"removed"},or={type:"childadded",child:null},Ic={type:"childremoved",child:null},Ut=class s extends vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gm++}),this.uuid=ci(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new w,t=new Dn,n=new Gt,i=new w(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new He},normalMatrix:{value:new it}}),this.matrix=new He,this.matrixWorld=new He,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Mr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return rr.setFromAxisAngle(e,t),this.quaternion.multiply(rr),this}rotateOnWorldAxis(e,t){return rr.setFromAxisAngle(e,t),this.quaternion.premultiply(rr),this}rotateX(e){return this.rotateOnAxis(ld,e)}rotateY(e){return this.rotateOnAxis(cd,e)}rotateZ(e){return this.rotateOnAxis(hd,e)}translateOnAxis(e,t){return ad.copy(e).applyQuaternion(this.quaternion),this.position.add(ad.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ld,e)}translateY(e){return this.translateOnAxis(cd,e)}translateZ(e){return this.translateOnAxis(hd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Li.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?da.copy(e):da.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Zr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Li.lookAt(Zr,da,this.up):Li.lookAt(da,Zr,this.up),this.quaternion.setFromRotationMatrix(Li),i&&(Li.extractRotation(i.matrixWorld),rr.setFromRotationMatrix(Li),this.quaternion.premultiply(rr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ud),or.child=e,this.dispatchEvent(or),or.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(vm),Ic.child=e,this.dispatchEvent(Ic),Ic.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Li.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Li.multiply(e.parent.matrixWorld)),e.applyMatrix4(Li),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ud),or.child=e,this.dispatchEvent(or),or.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zr,e,xm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zr,ym,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),d=o(e.animations),m=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};Ut.DEFAULT_UP=new w(0,1,0);Ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var oi=new w,Ni=new w,Dc=new w,Ui=new w,ar=new w,lr=new w,dd=new w,Lc=new w,Nc=new w,Uc=new w,Oc=new lt,Fc=new lt,Bc=new lt,xi=class s{constructor(e=new w,t=new w,n=new w){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),oi.subVectors(e,t),i.cross(oi);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){oi.subVectors(i,t),Ni.subVectors(n,t),Dc.subVectors(e,t);let o=oi.dot(oi),a=oi.dot(Ni),l=oi.dot(Dc),c=Ni.dot(Ni),h=Ni.dot(Dc),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(c*l-a*h)*f,m=(o*h-a*l)*f;return r.set(1-d-m,m,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Ui)===null?!1:Ui.x>=0&&Ui.y>=0&&Ui.x+Ui.y<=1}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,Ui)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ui.x),l.addScaledVector(o,Ui.y),l.addScaledVector(a,Ui.z),l)}static getInterpolatedAttribute(e,t,n,i,r,o){return Oc.setScalar(0),Fc.setScalar(0),Bc.setScalar(0),Oc.fromBufferAttribute(e,t),Fc.fromBufferAttribute(e,n),Bc.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(Oc,r.x),o.addScaledVector(Fc,r.y),o.addScaledVector(Bc,r.z),o}static isFrontFacing(e,t,n,i){return oi.subVectors(n,t),Ni.subVectors(e,t),oi.cross(Ni).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return oi.subVectors(this.c,this.b),Ni.subVectors(this.a,this.b),oi.cross(Ni).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,o,a;ar.subVectors(i,n),lr.subVectors(r,n),Lc.subVectors(e,n);let l=ar.dot(Lc),c=lr.dot(Lc);if(l<=0&&c<=0)return t.copy(n);Nc.subVectors(e,i);let h=ar.dot(Nc),u=lr.dot(Nc);if(h>=0&&u<=h)return t.copy(i);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(ar,o);Uc.subVectors(e,r);let d=ar.dot(Uc),m=lr.dot(Uc);if(m>=0&&d<=m)return t.copy(r);let x=d*c-l*m;if(x<=0&&c>=0&&m<=0)return a=c/(c-m),t.copy(n).addScaledVector(lr,a);let g=h*m-d*u;if(g<=0&&u-h>=0&&d-m>=0)return dd.subVectors(r,i),a=(u-h)/(u-h+(d-m)),t.copy(i).addScaledVector(dd,a);let p=1/(g+x+f);return o=x*p,a=f*p,t.copy(n).addScaledVector(ar,o).addScaledVector(lr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},_f={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},rs={h:0,s:0,l:0},fa={h:0,s:0,l:0};function zc(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var Ie=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=St){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,at.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=at.workingColorSpace){return this.r=e,this.g=t,this.b=n,at.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=at.workingColorSpace){if(e=Rh(e,1),t=et(t,0,1),n=et(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=zc(o,r,e+1/3),this.g=zc(o,r,e),this.b=zc(o,r,e-1/3)}return at.colorSpaceToWorking(this,i),this}setStyle(e,t=St){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=St){let n=_f[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Fi(e.r),this.g=Fi(e.g),this.b=Fi(e.b),this}copyLinearToSRGB(e){return this.r=gr(e.r),this.g=gr(e.g),this.b=gr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=St){return at.workingToColorSpace(vn.copy(this),e),Math.round(et(vn.r*255,0,255))*65536+Math.round(et(vn.g*255,0,255))*256+Math.round(et(vn.b*255,0,255))}getHexString(e=St){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=at.workingColorSpace){at.workingToColorSpace(vn.copy(this),t);let n=vn.r,i=vn.g,r=vn.b,o=Math.max(n,i,r),a=Math.min(n,i,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=at.workingColorSpace){return at.workingToColorSpace(vn.copy(this),t),e.r=vn.r,e.g=vn.g,e.b=vn.b,e}getStyle(e=St){at.workingToColorSpace(vn.copy(this),e);let t=vn.r,n=vn.g,i=vn.b;return e!==St?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(rs),this.setHSL(rs.h+e,rs.s+t,rs.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(rs),e.getHSL(fa);let n=no(rs.h,fa.h,t),i=no(rs.s,fa.s,t),r=no(rs.l,fa.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},vn=new Ie;Ie.NAMES=_f;var _m=0,_n=class extends vi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_m++}),this.uuid=ci(),this.name="",this.type="Material",this.blending=hi,this.side=Hn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bi,this.blendDst=zi,this.blendEquation=cn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ie(0,0,0),this.blendAlpha=0,this.depthFunc=Ds,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=oo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Is,this.stencilZFail=Is,this.stencilZPass=Is,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==hi&&(n.blending=this.blending),this.side!==Hn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Bi&&(n.blendSrc=this.blendSrc),this.blendDst!==zi&&(n.blendDst=this.blendDst),this.blendEquation!==cn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ds&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==oo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Is&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Is&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Is&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Ct=class extends _n{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.combine=cl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var qt=new w,pa=new Me,Mm=0,nt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Mm++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Na,this.updateRanges=[],this.gpuType=ei,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)pa.fromBufferAttribute(this,t),pa.applyMatrix3(e),this.setXY(t,pa.x,pa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix3(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix4(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyNormalMatrix(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.transformDirection(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ai(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Pt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ai(t,this.array)),t}setX(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ai(t,this.array)),t}setY(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ai(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ai(t,this.array)),t}setW(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array),i=Pt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array),i=Pt(i,this.array),r=Pt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Na&&(e.usage=this.usage),e}};var co=class extends nt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var ho=class extends nt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var gt=class extends nt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Sm=0,Zn=new He,kc=new Ut,cr=new w,kn=new $e,Kr=new $e,an=new w,bt=class s extends vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Sm++}),this.uuid=ci(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ch(e)?ho:co)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new it().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Zn.makeRotationFromQuaternion(e),this.applyMatrix4(Zn),this}rotateX(e){return Zn.makeRotationX(e),this.applyMatrix4(Zn),this}rotateY(e){return Zn.makeRotationY(e),this.applyMatrix4(Zn),this}rotateZ(e){return Zn.makeRotationZ(e),this.applyMatrix4(Zn),this}translate(e,t,n){return Zn.makeTranslation(e,t,n),this.applyMatrix4(Zn),this}scale(e,t,n){return Zn.makeScale(e,t,n),this.applyMatrix4(Zn),this}lookAt(e){return kc.lookAt(e),kc.updateMatrix(),this.applyMatrix4(kc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(cr).negate(),this.translate(cr.x,cr.y,cr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,r=e.length;i<r;i++){let o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new gt(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $e);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new w(-1/0,-1/0,-1/0),new w(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];kn.setFromBufferAttribute(r),this.morphTargetsRelative?(an.addVectors(this.boundingBox.min,kn.min),this.boundingBox.expandByPoint(an),an.addVectors(this.boundingBox.max,kn.max),this.boundingBox.expandByPoint(an)):(this.boundingBox.expandByPoint(kn.min),this.boundingBox.expandByPoint(kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new un);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new w,1/0);return}if(e){let n=this.boundingSphere.center;if(kn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Kr.setFromBufferAttribute(a),this.morphTargetsRelative?(an.addVectors(kn.min,Kr.min),kn.expandByPoint(an),an.addVectors(kn.max,Kr.max),kn.expandByPoint(an)):(kn.expandByPoint(Kr.min),kn.expandByPoint(Kr.max))}kn.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)an.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(an));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)an.fromBufferAttribute(a,c),l&&(cr.fromBufferAttribute(e,c),an.add(cr)),i=Math.max(i,n.distanceToSquared(an))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new nt(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let D=0;D<n.count;D++)a[D]=new w,l[D]=new w;let c=new w,h=new w,u=new w,f=new Me,d=new Me,m=new Me,x=new w,g=new w;function p(D,_,v){c.fromBufferAttribute(n,D),h.fromBufferAttribute(n,_),u.fromBufferAttribute(n,v),f.fromBufferAttribute(r,D),d.fromBufferAttribute(r,_),m.fromBufferAttribute(r,v),h.sub(c),u.sub(c),d.sub(f),m.sub(f);let A=1/(d.x*m.y-m.x*d.y);isFinite(A)&&(x.copy(h).multiplyScalar(m.y).addScaledVector(u,-d.y).multiplyScalar(A),g.copy(u).multiplyScalar(d.x).addScaledVector(h,-m.x).multiplyScalar(A),a[D].add(x),a[_].add(x),a[v].add(x),l[D].add(g),l[_].add(g),l[v].add(g))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let D=0,_=E.length;D<_;++D){let v=E[D],A=v.start,U=v.count;for(let k=A,F=A+U;k<F;k+=3)p(e.getX(k+0),e.getX(k+1),e.getX(k+2))}let M=new w,y=new w,S=new w,R=new w;function C(D){S.fromBufferAttribute(i,D),R.copy(S);let _=a[D];M.copy(_),M.sub(S.multiplyScalar(S.dot(_))).normalize(),y.crossVectors(R,_);let A=y.dot(l[D])<0?-1:1;o.setXYZW(D,M.x,M.y,M.z,A)}for(let D=0,_=E.length;D<_;++D){let v=E[D],A=v.start,U=v.count;for(let k=A,F=A+U;k<F;k+=3)C(e.getX(k+0)),C(e.getX(k+1)),C(e.getX(k+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new nt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let i=new w,r=new w,o=new w,a=new w,l=new w,c=new w,h=new w,u=new w;if(e)for(let f=0,d=e.count;f<d;f+=3){let m=e.getX(f+0),x=e.getX(f+1),g=e.getX(f+2);i.fromBufferAttribute(t,m),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,g),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)an.fromBufferAttribute(e,t),an.normalize(),e.setXYZ(t,an.x,an.y,an.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),d=0,m=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*h;for(let p=0;p<h;p++)f[m++]=c[d++]}return new nt(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},fd=new He,Cs=new _i,ma=new un,pd=new w,ga=new w,xa=new w,ya=new w,Hc=new w,va=new w,md=new w,_a=new w,je=class extends Ut{constructor(e=new bt,t=new Ct){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let a=this.morphTargetInfluences;if(r&&a){va.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(Hc.fromBufferAttribute(u,e),o?va.addScaledVector(Hc,h):va.addScaledVector(Hc.sub(t),h))}t.add(va)}return t}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ma.copy(n.boundingSphere),ma.applyMatrix4(r),Cs.copy(e.ray).recast(e.near),!(ma.containsPoint(Cs.origin)===!1&&(Cs.intersectSphere(ma,pd)===null||Cs.origin.distanceToSquared(pd)>(e.far-e.near)**2))&&(fd.copy(r).invert(),Cs.copy(e.ray).applyMatrix4(fd),!(n.boundingBox!==null&&Cs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Cs)))}_computeIntersections(e,t,n){let i,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,x=f.length;m<x;m++){let g=f[m],p=o[g.materialIndex],E=Math.max(g.start,d.start),M=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let y=E,S=M;y<S;y+=3){let R=a.getX(y),C=a.getX(y+1),D=a.getX(y+2);i=Ma(this,p,e,n,c,h,u,R,C,D),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{let m=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let g=m,p=x;g<p;g+=3){let E=a.getX(g),M=a.getX(g+1),y=a.getX(g+2);i=Ma(this,o,e,n,c,h,u,E,M,y),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,x=f.length;m<x;m++){let g=f[m],p=o[g.materialIndex],E=Math.max(g.start,d.start),M=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let y=E,S=M;y<S;y+=3){let R=y,C=y+1,D=y+2;i=Ma(this,p,e,n,c,h,u,R,C,D),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{let m=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let g=m,p=x;g<p;g+=3){let E=g,M=g+1,y=g+2;i=Ma(this,o,e,n,c,h,u,E,M,y),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}};function bm(s,e,t,n,i,r,o,a){let l;if(e.side===Wt?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===Hn,a),l===null)return null;_a.copy(a),_a.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(_a);return c<t.near||c>t.far?null:{distance:c,point:_a.clone(),object:s}}function Ma(s,e,t,n,i,r,o,a,l,c){s.getVertexPosition(a,ga),s.getVertexPosition(l,xa),s.getVertexPosition(c,ya);let h=bm(s,e,t,n,ga,xa,ya,md);if(h){let u=new w;xi.getBarycoord(md,ga,xa,ya,u),i&&(h.uv=xi.getInterpolatedAttribute(i,a,l,c,u,new Me)),r&&(h.uv1=xi.getInterpolatedAttribute(r,a,l,c,u,new Me)),o&&(h.normal=xi.getInterpolatedAttribute(o,a,l,c,u,new w),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new w,materialIndex:0};xi.getNormal(ga,xa,ya,f.normal),h.face=f,h.barycoord=u}return h}var dn=class s extends bt{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,d=0;m("z","y","x",-1,-1,n,t,e,o,r,0),m("z","y","x",1,-1,n,t,-e,o,r,1),m("x","z","y",1,1,e,n,t,i,o,2),m("x","z","y",1,-1,e,n,-t,i,o,3),m("x","y","z",1,-1,e,t,n,i,r,4),m("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new gt(c,3)),this.setAttribute("normal",new gt(h,3)),this.setAttribute("uv",new gt(u,2));function m(x,g,p,E,M,y,S,R,C,D,_){let v=y/C,A=S/D,U=y/2,k=S/2,F=R/2,z=C+1,G=D+1,ie=0,j=0,oe=new w;for(let te=0;te<G;te++){let pe=te*A-k;for(let Ce=0;Ce<z;Ce++){let Ae=Ce*v-U;oe[x]=Ae*E,oe[g]=pe*M,oe[p]=F,c.push(oe.x,oe.y,oe.z),oe[x]=0,oe[g]=0,oe[p]=R>0?1:-1,h.push(oe.x,oe.y,oe.z),u.push(Ce/C),u.push(1-te/D),ie+=1}}for(let te=0;te<D;te++)for(let pe=0;pe<C;pe++){let Ce=f+pe+z*te,Ae=f+pe+z*(te+1),Ue=f+(pe+1)+z*(te+1),Be=f+(pe+1)+z*te;l.push(Ce,Ae,Be),l.push(Ae,Ue,Be),j+=6}a.addGroup(d,j,_),d+=j,f+=ie}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Ws(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Sn(s){let e={};for(let t=0;t<s.length;t++){let n=Ws(s[t]);for(let i in n)e[i]=n[i]}return e}function Em(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Ph(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:at.workingColorSpace}var Ot={clone:Ws,merge:Sn},wm=`void main() {
  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Tm=`void main() {
  gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ct=class extends _n{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wm,this.fragmentShader=Tm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ws(e.uniforms),this.uniformsGroups=Em(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},uo=class extends Ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new He,this.projectionMatrix=new He,this.projectionMatrixInverse=new He,this.coordinateSystem=li,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},os=new w,gd=new Me,xd=new Me,Bt=class extends uo{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ls*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(to*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ls*2*Math.atan(Math.tan(to*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){os.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(os.x,os.y).multiplyScalar(-e/os.z),os.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(os.x,os.y).multiplyScalar(-e/os.z)}getViewSize(e,t){return this.getViewBounds(e,gd,xd),t.subVectors(xd,gd)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(to*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},hr=-90,ur=1,Sr=class extends Ut{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Bt(hr,ur,e,t);i.layers=this.layers,this.add(i);let r=new Bt(hr,ur,e,t);r.layers=this.layers,this.add(r);let o=new Bt(hr,ur,e,t);o.layers=this.layers,this.add(o);let a=new Bt(hr,ur,e,t);a.layers=this.layers,this.add(a);let l=new Bt(hr,ur,e,t);l.layers=this.layers,this.add(l);let c=new Bt(hr,ur,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===li)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ao)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},fo=class extends Qt{constructor(e=[],t=Vs,n,i,r,o,a,l,c,h){super(e,t,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},br=class extends Nt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new fo(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
      `},i=new dn(5,5,5),r=new ct({name:"CubemapFromEquirect",uniforms:Ws(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Wt,blending:mt});r.uniforms.tEquirect.value=t;let o=new je(i,r),a=t.minFilter;return t.minFilter===pn&&(t.minFilter=$t),new Sr(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}},pt=class extends Ut{constructor(){super(),this.isGroup=!0,this.type="Group"}},Am={type:"move"},Er=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new w,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new w),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new w,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new w),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let g=t.getJointPose(x,n),p=this._getHandJoint(c,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,m=.005;c.inputState.pinching&&f>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Am)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new pt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},po=class s{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ie(e),this.density=t}clone(){return new s(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var en=class extends Ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Dn,this.environmentIntensity=1,this.environmentRotation=new Dn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Ns=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Na,this.updateRanges=[],this.version=0,this.uuid=ci()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ci()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ci()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},wn=new w,Ln=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)wn.fromBufferAttribute(this,t),wn.applyMatrix4(e),this.setXYZ(t,wn.x,wn.y,wn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)wn.fromBufferAttribute(this,t),wn.applyNormalMatrix(e),this.setXYZ(t,wn.x,wn.y,wn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)wn.fromBufferAttribute(this,t),wn.transformDirection(e),this.setXYZ(t,wn.x,wn.y,wn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=ai(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Pt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Pt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ai(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ai(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ai(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ai(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array),i=Pt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array),i=Pt(i,this.array),r=Pt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new nt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var yd=new w,vd=new lt,_d=new lt,Rm=new w,Md=new He,Sa=new w,Vc=new un,Sd=new He,Gc=new _i,mo=class extends je{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Qc,this.bindMatrix=new He,this.bindMatrixInverse=new He,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new $e),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Sa),this.boundingBox.expandByPoint(Sa)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new un),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Sa),this.boundingSphere.expandByPoint(Sa)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Vc.copy(this.boundingSphere),Vc.applyMatrix4(i),e.ray.intersectsSphere(Vc)!==!1&&(Sd.copy(i).invert(),Gc.copy(e.ray).applyMatrix4(Sd),!(this.boundingBox!==null&&Gc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Gc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new lt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Qc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===of?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;vd.fromBufferAttribute(i.attributes.skinIndex,e),_d.fromBufferAttribute(i.attributes.skinWeight,e),yd.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=_d.getComponent(r);if(o!==0){let a=vd.getComponent(r);Md.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Rm.copy(yd).applyMatrix4(Md),o)}}return t.applyMatrix4(this.bindMatrixInverse)}},wr=class extends Ut{constructor(){super(),this.isBone=!0,this.type="Bone"}},ui=class extends Qt{constructor(e=null,t=1,n=1,i,r,o,a,l,c=xt,h=xt,u,f){super(null,o,a,l,c,h,i,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},bd=new He,Cm=new He,go=class s{constructor(e=[],t=[]){this.uuid=ci(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new He)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new He;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:Cm;bd.multiplyMatrices(a,t[r]),bd.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new ui(t,e,e,nn,ei);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let r=e.bones[n],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new wr),this.bones.push(o),this.boneInverses.push(new He().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){let o=t[i];e.bones.push(o.uuid);let a=n[i];e.boneInverses.push(a.toArray())}return e}},cs=class extends nt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},dr=new He,Ed=new He,ba=[],wd=new $e,Pm=new He,Jr=new je,$r=new un,Vi=class extends je{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new cs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Pm)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new $e),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,dr),wd.copy(e.boundingBox).applyMatrix4(dr),this.boundingBox.union(wd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new un),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,dr),$r.copy(e.boundingSphere).applyMatrix4(dr),this.boundingSphere.union($r)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(Jr.geometry=this.geometry,Jr.material=this.material,Jr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),$r.copy(this.boundingSphere),$r.applyMatrix4(n),e.ray.intersectsSphere($r)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,dr),Ed.multiplyMatrices(n,dr),Jr.matrixWorld=Ed,Jr.raycast(e,ba);for(let o=0,a=ba.length;o<a;o++){let l=ba[o];l.instanceId=r,l.object=this,t.push(l)}ba.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new cs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new ui(new Float32Array(i*this.count),i,this.count,Ml,ei));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Wc=new w,Im=new w,Dm=new it,ln=class{constructor(e=new w(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Wc.subVectors(n,t).cross(Im.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Wc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Dm.getNormalMatrix(e),i=this.coplanarPoint(Wc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ps=new un,Lm=new Me(.5,.5),Ea=new w,Tr=class{constructor(e=new ln,t=new ln,n=new ln,i=new ln,r=new ln,o=new ln){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=li,n=!1){let i=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],f=r[6],d=r[7],m=r[8],x=r[9],g=r[10],p=r[11],E=r[12],M=r[13],y=r[14],S=r[15];if(i[0].setComponents(c-o,d-h,p-m,S-E).normalize(),i[1].setComponents(c+o,d+h,p+m,S+E).normalize(),i[2].setComponents(c+a,d+u,p+x,S+M).normalize(),i[3].setComponents(c-a,d-u,p-x,S-M).normalize(),n)i[4].setComponents(l,f,g,y).normalize(),i[5].setComponents(c-l,d-f,p-g,S-y).normalize();else if(i[4].setComponents(c-l,d-f,p-g,S-y).normalize(),t===li)i[5].setComponents(c+l,d+f,p+g,S+y).normalize();else if(t===ao)i[5].setComponents(l,f,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ps.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ps.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ps)}intersectsSprite(e){Ps.center.set(0,0,0);let t=Lm.distanceTo(e.center);return Ps.radius=.7071067811865476+t,Ps.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ps)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Ea.x=i.normal.x>0?e.max.x:e.min.x,Ea.y=i.normal.y>0?e.max.y:e.min.y,Ea.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ea)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Jn=class extends _n{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ie(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Fa=new w,Ba=new w,Td=new He,Qr=new _i,wa=new un,Xc=new w,Ad=new w,Us=class extends Ut{constructor(e=new bt,t=new Jn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Fa.fromBufferAttribute(t,i-1),Ba.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Fa.distanceTo(Ba);e.setAttribute("lineDistance",new gt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),wa.copy(n.boundingSphere),wa.applyMatrix4(i),wa.radius+=r,e.ray.intersectsSphere(wa)===!1)return;Td.copy(i).invert(),Qr.copy(e.ray).applyMatrix4(Td);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let d=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let x=d,g=m-1;x<g;x+=c){let p=h.getX(x),E=h.getX(x+1),M=Ta(this,e,Qr,l,p,E,x);M&&t.push(M)}if(this.isLineLoop){let x=h.getX(m-1),g=h.getX(d),p=Ta(this,e,Qr,l,x,g,m-1);p&&t.push(p)}}else{let d=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let x=d,g=m-1;x<g;x+=c){let p=Ta(this,e,Qr,l,x,x+1,x);p&&t.push(p)}if(this.isLineLoop){let x=Ta(this,e,Qr,l,m-1,d,m-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Ta(s,e,t,n,i,r,o){let a=s.geometry.attributes.position;if(Fa.fromBufferAttribute(a,i),Ba.fromBufferAttribute(a,r),t.distanceSqToSegment(Fa,Ba,Xc,Ad)>n)return;Xc.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(Xc);if(!(c<e.near||c>e.far))return{distance:c,point:Ad.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}var Rd=new w,Cd=new w,hs=class extends Us{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Rd.fromBufferAttribute(t,i),Cd.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Rd.distanceTo(Cd);e.setAttribute("lineDistance",new gt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},us=class extends Us{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},ds=class extends _n{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ie(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Pd=new He,ih=new _i,Aa=new un,Ra=new w,Os=class extends Ut{constructor(e=new bt,t=new ds){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Aa.copy(n.boundingSphere),Aa.applyMatrix4(i),Aa.radius+=r,e.ray.intersectsSphere(Aa)===!1)return;Pd.copy(i).invert(),ih.copy(e.ray).applyMatrix4(Pd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let m=f,x=d;m<x;m++){let g=c.getX(m);Ra.fromBufferAttribute(u,g),Id(Ra,g,l,i,e,t,this)}}else{let f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let m=f,x=d;m<x;m++)Ra.fromBufferAttribute(u,m),Id(Ra,m,l,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Id(s,e,t,n,i,r,o){let a=ih.distanceSqToPoint(s);if(a<t){let l=new w;ih.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Fs=class extends Qt{constructor(e,t,n,i,r,o,a,l,c,h,u,f){super(null,o,a,l,c,h,i,r,u,f),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}};var Gi=class extends Qt{constructor(e,t,n=ys,i,r,o,a=xt,l=xt,c,h=xr,u=1){if(h!==xr&&h!==_s)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:u};super(f,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ls(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},xo=class extends Qt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var yo=class s extends bt{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],f=[],d=[],m=0,x=[],g=n/2,p=0;E(),o===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new gt(u,3)),this.setAttribute("normal",new gt(f,3)),this.setAttribute("uv",new gt(d,2));function E(){let y=new w,S=new w,R=0,C=(t-e)/n;for(let D=0;D<=r;D++){let _=[],v=D/r,A=v*(t-e)+e;for(let U=0;U<=i;U++){let k=U/i,F=k*l+a,z=Math.sin(F),G=Math.cos(F);S.x=A*z,S.y=-v*n+g,S.z=A*G,u.push(S.x,S.y,S.z),y.set(z,C,G).normalize(),f.push(y.x,y.y,y.z),d.push(k,1-v),_.push(m++)}x.push(_)}for(let D=0;D<i;D++)for(let _=0;_<r;_++){let v=x[_][D],A=x[_+1][D],U=x[_+1][D+1],k=x[_][D+1];(e>0||_!==0)&&(h.push(v,A,k),R+=3),(t>0||_!==r-1)&&(h.push(A,U,k),R+=3)}c.addGroup(p,R,0),p+=R}function M(y){let S=m,R=new Me,C=new w,D=0,_=y===!0?e:t,v=y===!0?1:-1;for(let U=1;U<=i;U++)u.push(0,g*v,0),f.push(0,v,0),d.push(.5,.5),m++;let A=m;for(let U=0;U<=i;U++){let F=U/i*l+a,z=Math.cos(F),G=Math.sin(F);C.x=_*G,C.y=g*v,C.z=_*z,u.push(C.x,C.y,C.z),f.push(0,v,0),R.x=z*.5+.5,R.y=G*.5*v+.5,d.push(R.x,R.y),m++}for(let U=0;U<i;U++){let k=S+U,F=A+U;y===!0?h.push(F,F+1,k):h.push(F+1,F,k),D+=3}c.addGroup(p,D,y===!0?1:2),p+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var $n=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),i=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);let h=n[i],f=n[i+1]-h,d=(o-h)/f;return(i+d)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),l=t||(o.isVector2?new Me:new w);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new w,i=[],r=[],o=[],a=new w,l=new He;for(let d=0;d<=e;d++){let m=d/e;i[d]=this.getTangentAt(m,new w)}r[0]=new w,o[0]=new w;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(et(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,m))}o[d].crossVectors(i[d],r[d])}if(t===!0){let d=Math.acos(et(r[0].dot(r[e]),-1,1));d/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let m=1;m<=e;m++)r[m].applyMatrix4(l.makeRotationAxis(i[m],d*m)),o[m].crossVectors(i[m],r[m])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},vo=class extends $n{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new Me){let n=t,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},za=class extends vo{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Ih(){let s=0,e=0,t=0,n=0;function i(r,o,a,l){s=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,i(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return s+e*r+t*o+n*a}}}var Ca=new w,qc=new Ih,Yc=new Ih,jc=new Ih,Ar=class extends $n{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new w){let n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:(Ca.subVectors(i[0],i[1]).add(i[0]),c=Ca);let u=i[a%r],f=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(Ca.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Ca),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(u),d),x=Math.pow(u.distanceToSquared(f),d),g=Math.pow(f.distanceToSquared(h),d);x<1e-4&&(x=1),m<1e-4&&(m=x),g<1e-4&&(g=x),qc.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,m,x,g),Yc.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,m,x,g),jc.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,m,x,g)}else this.curveType==="catmullrom"&&(qc.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),Yc.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),jc.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(qc.calc(l),Yc.calc(l),jc.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new w().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Dd(s,e,t,n,i){let r=(n-e)*.5,o=(i-t)*.5,a=s*s,l=s*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*s+t}function Nm(s,e){let t=1-s;return t*t*e}function Um(s,e){return 2*(1-s)*s*e}function Om(s,e){return s*s*e}function io(s,e,t,n){return Nm(s,e)+Um(s,t)+Om(s,n)}function Fm(s,e){let t=1-s;return t*t*t*e}function Bm(s,e){let t=1-s;return 3*t*t*s*e}function zm(s,e){return 3*(1-s)*s*s*e}function km(s,e){return s*s*s*e}function so(s,e,t,n,i){return Fm(s,e)+Bm(s,t)+zm(s,n)+km(s,i)}var ka=class extends $n{constructor(e=new Me,t=new Me,n=new Me,i=new Me){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new Me){let n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(so(e,i.x,r.x,o.x,a.x),so(e,i.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ha=class extends $n{constructor(e=new w,t=new w,n=new w,i=new w){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new w){let n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(so(e,i.x,r.x,o.x,a.x),so(e,i.y,r.y,o.y,a.y),so(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Va=class extends $n{constructor(e=new Me,t=new Me){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Me){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Me){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ga=class extends $n{constructor(e=new w,t=new w){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new w){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new w){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Wa=class extends $n{constructor(e=new Me,t=new Me,n=new Me){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Me){let n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(io(e,i.x,r.x,o.x),io(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},_o=class extends $n{constructor(e=new w,t=new w,n=new w){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new w){let n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(io(e,i.x,r.x,o.x),io(e,i.y,r.y,o.y),io(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Xa=class extends $n{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Me){let n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(Dd(a,l.x,c.x,h.x,u.x),Dd(a,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new Me().fromArray(i))}return this}},Hm=Object.freeze({__proto__:null,ArcCurve:za,CatmullRomCurve3:Ar,CubicBezierCurve:ka,CubicBezierCurve3:Ha,EllipseCurve:vo,LineCurve:Va,LineCurve3:Ga,QuadraticBezierCurve:Wa,QuadraticBezierCurve3:_o,SplineCurve:Xa});var tn=class s extends bt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=e/a,f=t/l,d=[],m=[],x=[],g=[];for(let p=0;p<h;p++){let E=p*f-o;for(let M=0;M<c;M++){let y=M*u-r;m.push(y,-E,0),x.push(0,0,1),g.push(M/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let E=0;E<a;E++){let M=E+c*p,y=E+c*(p+1),S=E+1+c*(p+1),R=E+1+c*p;d.push(M,y,R),d.push(y,S,R)}this.setIndex(d),this.setAttribute("position",new gt(m,3)),this.setAttribute("normal",new gt(x,3)),this.setAttribute("uv",new gt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}};var Mo=class s extends bt{constructor(e=new _o(new w(-1,-1,0),new w(-1,1,0),new w(1,1,0)),t=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new w,l=new w,c=new Me,h=new w,u=[],f=[],d=[],m=[];x(),this.setIndex(m),this.setAttribute("position",new gt(u,3)),this.setAttribute("normal",new gt(f,3)),this.setAttribute("uv",new gt(d,2));function x(){for(let M=0;M<t;M++)g(M);g(r===!1?t:0),E(),p()}function g(M){h=e.getPointAt(M/t,h);let y=o.normals[M],S=o.binormals[M];for(let R=0;R<=i;R++){let C=R/i*Math.PI*2,D=Math.sin(C),_=-Math.cos(C);l.x=_*y.x+D*S.x,l.y=_*y.y+D*S.y,l.z=_*y.z+D*S.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function p(){for(let M=1;M<=t;M++)for(let y=1;y<=i;y++){let S=(i+1)*(M-1)+(y-1),R=(i+1)*M+(y-1),C=(i+1)*M+y,D=(i+1)*(M-1)+y;m.push(S,R,D),m.push(R,C,D)}}function E(){for(let M=0;M<=t;M++)for(let y=0;y<=i;y++)c.x=M/t,c.y=y/i,d.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new s(new Hm[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},So=class extends bt{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],n=new Set,i=new w,r=new w;if(e.index!==null){let o=e.attributes.position,a=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let u=l[c],f=u.start,d=u.count;for(let m=f,x=f+d;m<x;m+=3)for(let g=0;g<3;g++){let p=a.getX(m+g),E=a.getX(m+(g+1)%3);i.fromBufferAttribute(o,p),r.fromBufferAttribute(o,E),Ld(i,r,n)===!0&&(t.push(i.x,i.y,i.z),t.push(r.x,r.y,r.z))}}}else{let o=e.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){let h=3*a+c,u=3*a+(c+1)%3;i.fromBufferAttribute(o,h),r.fromBufferAttribute(o,u),Ld(i,r,n)===!0&&(t.push(i.x,i.y,i.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new gt(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function Ld(s,e,t){let n=`${s.x},${s.y},${s.z}-${e.x},${e.y},${e.z}`,i=`${e.x},${e.y},${e.z}-${s.x},${s.y},${s.z}`;return t.has(n)===!0||t.has(i)===!0?!1:(t.add(n),t.add(i),!0)}var bo=class extends ct{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Yt=class extends _n{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ie(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qo,this.normalScale=new Me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},jt=class extends Yt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Me(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return et(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ie(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ie(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ie(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Bs=class extends _n{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qo,this.normalScale=new Me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}},Eo=class extends _n{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qo,this.normalScale=new Me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.combine=cl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},qa=class extends _n{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=lf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ya=class extends _n{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Pa(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Vm(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Gm(s){function e(i,r){return s[i]-s[r]}let t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Nd(s,e,t){let n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let l=0;l!==e;++l)i[o++]=s[a+l]}return i}function Mf(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}var Wi=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ja=class extends Wi{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:eh,endingEnd:eh}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,o=e+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case th:r=e,a=2*t-n;break;case nh:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case th:o=e,l=2*n-t;break;case nh:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,m=(n-t)/(i-t),x=m*m,g=x*m,p=-f*g+2*f*x-f*m,E=(1+f)*g+(-1.5-2*f)*x+(-.5+f)*m+1,M=(-1-d)*g+(1.5+d)*x+.5*m,y=d*g-d*x;for(let S=0;S!==a;++S)r[S]=p*o[h+S]+E*o[c+S]+M*o[l+S]+y*o[u+S];return r}},Za=class extends Wi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(i-t),u=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*u+o[l+f]*h;return r}},Ka=class extends Wi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},Nn=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Pa(t,this.TimeBufferType),this.values=Pa(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Pa(e.times,Array),values:Pa(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ka(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Za(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ja(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ki:t=this.InterpolantFactoryMethodDiscrete;break;case Hi:t=this.InterpolantFactoryMethodLinear;break;case La:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ki;case this.InterpolantFactoryMethodLinear:return Hi;case this.InterpolantFactoryMethodSmooth:return La}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&Vm(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===La,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(i)l=!0;else{let u=a*n,f=u-n,d=u+n;for(let m=0;m!==n;++m){let x=t[u+m];if(x!==t[f+m]||x!==t[d+m]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[u+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};Nn.prototype.ValueTypeName="";Nn.prototype.TimeBufferType=Float32Array;Nn.prototype.ValueBufferType=Float32Array;Nn.prototype.DefaultInterpolation=Hi;var Xi=class extends Nn{constructor(e,t,n){super(e,t,n)}};Xi.prototype.ValueTypeName="bool";Xi.prototype.ValueBufferType=Array;Xi.prototype.DefaultInterpolation=ki;Xi.prototype.InterpolantFactoryMethodLinear=void 0;Xi.prototype.InterpolantFactoryMethodSmooth=void 0;var wo=class extends Nn{constructor(e,t,n,i){super(e,t,n,i)}};wo.prototype.ValueTypeName="color";var Mi=class extends Nn{constructor(e,t,n,i){super(e,t,n,i)}};Mi.prototype.ValueTypeName="number";var Ja=class extends Wi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t),c=e*a;for(let h=c+a;c!==h;c+=4)Gt.slerpFlat(r,0,o,c-a,o,c,l);return r}},Si=class extends Nn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new Ja(this.times,this.values,this.getValueSize(),e)}};Si.prototype.ValueTypeName="quaternion";Si.prototype.InterpolantFactoryMethodSmooth=void 0;var qi=class extends Nn{constructor(e,t,n){super(e,t,n)}};qi.prototype.ValueTypeName="string";qi.prototype.ValueBufferType=Array;qi.prototype.DefaultInterpolation=ki;qi.prototype.InterpolantFactoryMethodLinear=void 0;qi.prototype.InterpolantFactoryMethodSmooth=void 0;var bi=class extends Nn{constructor(e,t,n,i){super(e,t,n,i)}};bi.prototype.ValueTypeName="vector";var To=class{constructor(e="",t=-1,n=[],i=af){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=ci(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Xm(n[o]).scale(i));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(Nn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let h=Gm(l);l=Nd(l,1,h),c=Nd(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Mi(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],h=c.name.match(r);if(h&&h.length>1){let u=h[1],f=i[u];f||(i[u]=f=[]),f.push(c)}}let o=[];for(let a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,f,d,m,x){if(d.length!==0){let g=[],p=[];Mf(d,g,p,m),g.length!==0&&x.push(new u(f,g,p))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let u=0;u<c.length;u++){let f=c[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){let d={},m;for(m=0;m<f.length;m++)if(f[m].morphTargets)for(let x=0;x<f[m].morphTargets.length;x++)d[f[m].morphTargets[x]]=-1;for(let x in d){let g=[],p=[];for(let E=0;E!==f[m].morphTargets.length;++E){let M=f[m];g.push(M.time),p.push(M.morphTarget===x?1:0)}i.push(new Mi(".morphTargetInfluence["+x+"]",g,p))}l=d.length*o}else{let d=".bones["+t[u].name+"]";n(bi,d+".position",f,"pos",i),n(Si,d+".quaternion",f,"rot",i),n(bi,d+".scale",f,"scl",i)}}return i.length===0?null:new this(r,l,i,a)}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function Wm(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Mi;case"vector":case"vector2":case"vector3":case"vector4":return bi;case"color":return wo;case"quaternion":return Si;case"bool":case"boolean":return Xi;case"string":return qi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Xm(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Wm(s.type);if(s.times===void 0){let t=[],n=[];Mf(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}var yi={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}},$a=class{constructor(e,t,n){let i=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],m=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},Sf=new $a,Ei=class{constructor(e){this.manager=e!==void 0?e:Sf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Ei.DEFAULT_MATERIAL_NAME="__DEFAULT";var Oi={},sh=class extends Error{constructor(e,t){super(e),this.response=t}},Rr=class extends Ei{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=yi.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Oi[e]!==void 0){Oi[e].push({onLoad:t,onProgress:n,onError:i});return}Oi[e]=[],Oi[e].push({onLoad:t,onProgress:n,onError:i});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=Oi[e],u=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,m=d!==0,x=0,g=new ReadableStream({start(p){E();function E(){u.read().then(({done:M,value:y})=>{if(M)p.close();else{x+=y.byteLength;let S=new ProgressEvent("progress",{lengthComputable:m,loaded:x,total:d});for(let R=0,C=h.length;R<C;R++){let D=h[R];D.onProgress&&D.onProgress(S)}p.enqueue(y),E()}},M=>{p.error(M)})}}});return new Response(g)}else throw new sh(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a==="")return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(m=>d.decode(m))}}}).then(c=>{yi.add(`file:${e}`,c);let h=Oi[e];delete Oi[e];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onLoad&&d.onLoad(c)}}).catch(c=>{let h=Oi[e];if(h===void 0)throw this.manager.itemError(e),c;delete Oi[e];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var fr=new WeakMap,Qa=class extends Ei{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=yi.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let u=fr.get(o);u===void 0&&(u=[],fr.set(o,u)),u.push({onLoad:t,onError:i})}return o}let a=yr("img");function l(){h(),t&&t(this);let u=fr.get(this)||[];for(let f=0;f<u.length;f++){let d=u[f];d.onLoad&&d.onLoad(this)}fr.delete(this),r.manager.itemEnd(e)}function c(u){h(),i&&i(u),yi.remove(`image:${e}`);let f=fr.get(this)||[];for(let d=0;d<f.length;d++){let m=f[d];m.onError&&m.onError(u)}fr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),yi.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}};var Ao=class extends Ei{constructor(e){super(e)}load(e,t,n,i){let r=new Qt,o=new Qa(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},zs=class extends Ut{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ie(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Yi=class extends zs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ie(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Zc=new He,Ud=new w,Od=new w,Ro=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Me(512,512),this.mapType=Vn,this.map=null,this.mapPass=null,this.matrix=new He,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Tr,this._frameExtents=new Me(1,1),this._viewportCount=1,this._viewports=[new lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Ud.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ud),Od.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Od),t.updateMatrixWorld(),Zc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zc,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Zc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},rh=class extends Ro{constructor(){super(new Bt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Ls*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Co=class extends zs{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new rh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Fd=new He,eo=new w,Kc=new w,oh=class extends Ro{constructor(){super(new Bt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Me(4,2),this._viewportCount=6,this._viewports=[new lt(2,1,1,1),new lt(0,1,1,1),new lt(3,1,1,1),new lt(1,1,1,1),new lt(3,0,1,1),new lt(1,0,1,1)],this._cubeDirections=[new w(1,0,0),new w(-1,0,0),new w(0,0,1),new w(0,0,-1),new w(0,1,0),new w(0,-1,0)],this._cubeUps=[new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,0,1),new w(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),eo.setFromMatrixPosition(e.matrixWorld),n.position.copy(eo),Kc.copy(n.position),Kc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Kc),n.updateMatrixWorld(),i.makeTranslation(-eo.x,-eo.y,-eo.z),Fd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fd,n.coordinateSystem,n.reversedDepth)}},ji=class extends zs{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new oh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Tn=class extends uo{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ah=class extends Ro{constructor(){super(new Tn(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},di=class extends zs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.shadow=new ah}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Zi=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},Po=class extends bt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var Jc=new WeakMap,Io=class extends Ei{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=yi.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{if(Jc.has(o)===!0)i&&i(Jc.get(o)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(c),r.manager.itemEnd(e),c});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return yi.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),Jc.set(l,c),yi.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});yi.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var el=class extends Bt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Do=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};var Dh="\\[\\]\\.:\\/",qm=new RegExp("["+Dh+"]","g"),Lh="[^"+Dh+"]",Ym="[^"+Dh.replace("\\.","")+"]",jm=/((?:WC+[\/:])*)/.source.replace("WC",Lh),Zm=/(WCOD+)?/.source.replace("WCOD",Ym),Km=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Lh),Jm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Lh),$m=new RegExp("^"+jm+Zm+Km+Jm+"$"),Qm=["material","materials","bones","map"],lh=class{constructor(e,t,n){let i=n||wt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},wt=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(qm,"")}static parseTrackName(e){let t=$m.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);Qm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[i];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};wt.Composite=lh;wt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};wt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};wt.prototype.GetterByBindingType=[wt.prototype._getValue_direct,wt.prototype._getValue_array,wt.prototype._getValue_arrayElement,wt.prototype._getValue_toArray];wt.prototype.SetterByBindingTypeAndVersioning=[[wt.prototype._setValue_direct,wt.prototype._setValue_direct_setNeedsUpdate,wt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_array,wt.prototype._setValue_array_setNeedsUpdate,wt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_arrayElement,wt.prototype._setValue_arrayElement_setNeedsUpdate,wt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_fromArray,wt.prototype._setValue_fromArray_setNeedsUpdate,wt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var b_=new Float32Array(1);var fs=class extends Ns{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){let t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){let t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}};var Bd=new He,fi=class{constructor(e,t,n=0,i=1/0){this.ray=new _i(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Mr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Bd.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Bd),this}intersectObject(e,t=!0,n=[]){return ch(e,this,n,t),n.sort(zd),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)ch(e[i],this,n,t);return n.sort(zd),n}};function zd(s,e){return s.distance-e.distance}function ch(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){let r=s.children;for(let o=0,a=r.length;o<a;o++)ch(r[o],e,t,!0)}}var wi=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=et(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(et(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var kd=new w,Ia=new w,pr=new w,mr=new w,$c=new w,eg=new w,tg=new w,Lo=class{constructor(e=new w,t=new w){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){kd.subVectors(e,this.start),Ia.subVectors(this.end,this.start);let n=Ia.dot(Ia),r=Ia.dot(kd)/n;return t&&(r=et(r,0,1)),r}closestPointToPoint(e,t,n){let i=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(i).add(this.start)}distanceSqToLine3(e,t=eg,n=tg){let i=10000000000000001e-32,r,o,a=this.start,l=e.start,c=this.end,h=e.end;pr.subVectors(c,a),mr.subVectors(h,l),$c.subVectors(a,l);let u=pr.dot(pr),f=mr.dot(mr),d=mr.dot($c);if(u<=i&&f<=i)return t.copy(a),n.copy(l),t.sub(n),t.dot(t);if(u<=i)r=0,o=d/f,o=et(o,0,1);else{let m=pr.dot($c);if(f<=i)o=0,r=et(-m/u,0,1);else{let x=pr.dot(mr),g=u*f-x*x;g!==0?r=et((x*d-m*f)/g,0,1):r=0,o=(x*r+d)/f,o<0?(o=0,r=et(-m/u,0,1)):o>1&&(o=1,r=et((x-m)/u,0,1))}}return t.copy(a).add(pr.multiplyScalar(r)),n.copy(l).add(mr.multiplyScalar(o)),t.sub(n),t.dot(t)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};var No=class extends hs{constructor(e=10,t=10,n=4473924,i=8947848){n=new Ie(n),i=new Ie(i);let r=t/2,o=e/t,a=e/2,l=[],c=[];for(let f=0,d=0,m=-a;f<=t;f++,m+=o){l.push(-a,0,m,a,0,m),l.push(m,0,-a,m,0,a);let x=f===r?n:i;x.toArray(c,d),d+=3,x.toArray(c,d),d+=3,x.toArray(c,d),d+=3,x.toArray(c,d),d+=3}let h=new bt;h.setAttribute("position",new gt(l,3)),h.setAttribute("color",new gt(c,3));let u=new Jn({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}};var Da=new $e,Uo=class extends hs{constructor(e,t=16776960){let n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(24),r=new bt;r.setIndex(new nt(n,1)),r.setAttribute("position",new nt(i,3)),super(r,new Jn({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(){if(this.object!==void 0&&Da.setFromObject(this.object),Da.isEmpty())return;let e=Da.min,t=Da.max,n=this.geometry.attributes.position,i=n.array;i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=e.x,i[4]=t.y,i[5]=t.z,i[6]=e.x,i[7]=e.y,i[8]=t.z,i[9]=t.x,i[10]=e.y,i[11]=t.z,i[12]=t.x,i[13]=t.y,i[14]=e.z,i[15]=e.x,i[16]=t.y,i[17]=e.z,i[18]=e.x,i[19]=e.y,i[20]=e.z,i[21]=t.x,i[22]=e.y,i[23]=e.z,n.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}},Oo=class extends hs{constructor(e,t=16776960){let n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new bt;r.setIndex(new nt(n,1)),r.setAttribute("position",new gt(i,3)),super(r,new Jn({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){let t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}};var Fo=class extends vi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function Nh(s,e,t,n){let i=ng(n);switch(t){case vh:return s*e;case Ml:return s*e/i.components*i.byteLength;case Sl:return s*e/i.components*i.byteLength;case Mh:return s*e*2/i.components*i.byteLength;case bl:return s*e*2/i.components*i.byteLength;case _h:return s*e*3/i.components*i.byteLength;case nn:return s*e*4/i.components*i.byteLength;case El:return s*e*4/i.components*i.byteLength;case Ho:case Vo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Go:case Wo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Tl:case Rl:return Math.max(s,16)*Math.max(e,8)/4;case wl:case Al:return Math.max(s,8)*Math.max(e,8)/2;case Cl:case Pl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Il:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Dl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ll:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Nl:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Ul:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Ol:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Fl:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Bl:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case zl:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case kl:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Hl:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Vl:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Gl:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Wl:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Xl:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case ql:case Yl:case jl:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Zl:case Kl:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Jl:case $l:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ng(s){switch(s){case Vn:case mh:return{byteLength:1,components:1};case xs:case gh:case Xt:return{byteLength:2,components:1};case vl:case _l:return{byteLength:2,components:4};case ys:case yl:case ei:return{byteLength:4,components:1};case xh:case yh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function qf(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function ig(s){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,u=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=s.SHORT;else if(c instanceof Uint32Array)d=s.UNSIGNED_INT;else if(c instanceof Int32Array)d=s.INT;else if(c instanceof Int8Array)d=s.BYTE;else if(c instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(s.bindBuffer(c,a),u.length===0)s.bufferSubData(c,0,h);else{u.sort((d,m)=>d.start-m.start);let f=0;for(let d=1;d<u.length;d++){let m=u[f],x=u[d];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++f,u[f]=x)}u.length=f+1;for(let d=0,m=u.length;d<m;d++){let x=u[d];s.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(s.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var sg=`#ifdef USE_ALPHAHASH
  if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rg=`#ifdef USE_ALPHAHASH
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
#endif`,og=`#ifdef USE_ALPHAMAP
  diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ag=`#ifdef USE_ALPHAMAP
  uniform sampler2D alphaMap;
#endif`,lg=`#ifdef USE_ALPHATEST
  #ifdef ALPHA_TO_COVERAGE
  diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
  if ( diffuseColor.a == 0.0 ) discard;
  #else
  if ( diffuseColor.a < alphaTest ) discard;
  #endif
#endif`,cg=`#ifdef USE_ALPHATEST
  uniform float alphaTest;
#endif`,hg=`#ifdef USE_AOMAP
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
#endif`,ug=`#ifdef USE_AOMAP
  uniform sampler2D aoMap;
  uniform float aoMapIntensity;
#endif`,dg=`#ifdef USE_BATCHING
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
#endif`,fg=`#ifdef USE_BATCHING
  mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,pg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
  vPosition = vec3( position );
#endif`,mg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
  vec3 objectTangent = vec3( tangent.xyz );
#endif`,gg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,xg=`#ifdef USE_IRIDESCENCE
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
#endif`,yg=`#ifdef USE_BUMPMAP
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
#endif`,vg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,_g=`#if NUM_CLIPPING_PLANES > 0
  varying vec3 vClipPosition;
  uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Mg=`#if NUM_CLIPPING_PLANES > 0
  varying vec3 vClipPosition;
#endif`,Sg=`#if NUM_CLIPPING_PLANES > 0
  vClipPosition = - mvPosition.xyz;
#endif`,bg=`#if defined( USE_COLOR_ALPHA )
  diffuseColor *= vColor;
#elif defined( USE_COLOR )
  diffuseColor.rgb *= vColor;
#endif`,Eg=`#if defined( USE_COLOR_ALPHA )
  varying vec4 vColor;
#elif defined( USE_COLOR )
  varying vec3 vColor;
#endif`,wg=`#if defined( USE_COLOR_ALPHA )
  varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
  varying vec3 vColor;
#endif`,Tg=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Ag=`#define PI 3.141592653589793
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
} // validated`,Rg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Cg=`vec3 transformedNormal = objectNormal;
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
#endif`,Pg=`#ifdef USE_DISPLACEMENTMAP
  uniform sampler2D displacementMap;
  uniform float displacementScale;
  uniform float displacementBias;
#endif`,Ig=`#ifdef USE_DISPLACEMENTMAP
  transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Dg=`#ifdef USE_EMISSIVEMAP
  vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
  #ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
    emissiveColor = sRGBTransferEOTF( emissiveColor );
  #endif
  totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Lg=`#ifdef USE_EMISSIVEMAP
  uniform sampler2D emissiveMap;
#endif`,Ng="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ug=`vec4 LinearTransferOETF( in vec4 value ) {
  return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
  return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
  return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Og=`#ifdef USE_ENVMAP
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
#endif`,Fg=`#ifdef USE_ENVMAP
  uniform float envMapIntensity;
  uniform float flipEnvMap;
  uniform mat3 envMapRotation;
  #ifdef ENVMAP_TYPE_CUBE
    uniform samplerCube envMap;
  #else
    uniform sampler2D envMap;
  #endif

#endif`,Bg=`#ifdef USE_ENVMAP
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
#endif`,zg=`#ifdef USE_ENVMAP
  #if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
    #define ENV_WORLDPOS
  #endif
  #ifdef ENV_WORLDPOS

    varying vec3 vWorldPosition;
  #else
    varying vec3 vReflect;
    uniform float refractionRatio;
  #endif
#endif`,kg=`#ifdef USE_ENVMAP
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
#endif`,Hg=`#ifdef USE_FOG
  vFogDepth = - mvPosition.z;
#endif`,Vg=`#ifdef USE_FOG
  varying float vFogDepth;
#endif`,Gg=`#ifdef USE_FOG
  #ifdef FOG_EXP2
    float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
  #else
    float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
  #endif
  gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Wg=`#ifdef USE_FOG
  uniform vec3 fogColor;
  varying float vFogDepth;
  #ifdef FOG_EXP2
    uniform float fogDensity;
  #else
    uniform float fogNear;
    uniform float fogFar;
  #endif
#endif`,Xg=`#ifdef USE_GRADIENTMAP
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
}`,qg=`#ifdef USE_LIGHTMAP
  uniform sampler2D lightMap;
  uniform float lightMapIntensity;
#endif`,Yg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Zg=`uniform bool receiveShadow;
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
#endif`,Kg=`#ifdef USE_ENVMAP
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
#endif`,Jg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$g=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Qg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,e0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,t0=`PhysicalMaterial material;
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
#endif`,n0=`struct PhysicalMaterial {
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
}`,i0=`
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
#endif`,s0=`#if defined( RE_IndirectDiffuse )
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
#endif`,r0=`#if defined( RE_IndirectDiffuse )
  RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
  RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,o0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
  gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,a0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
  uniform float logDepthBufFC;
  varying float vFragDepth;
  varying float vIsPerspective;
#endif`,l0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
  varying float vFragDepth;
  varying float vIsPerspective;
#endif`,c0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
  vFragDepth = 1.0 + gl_Position.w;
  vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,h0=`#ifdef USE_MAP
  vec4 sampledDiffuseColor = texture2D( map, vMapUv );
  #ifdef DECODE_VIDEO_TEXTURE
    sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
  #endif
  diffuseColor *= sampledDiffuseColor;
#endif`,u0=`#ifdef USE_MAP
  uniform sampler2D map;
#endif`,d0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,f0=`#if defined( USE_POINTS_UV )
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
#endif`,p0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
  vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
  metalnessFactor *= texelMetalness.b;
#endif`,m0=`#ifdef USE_METALNESSMAP
  uniform sampler2D metalnessMap;
#endif`,g0=`#ifdef USE_INSTANCING_MORPH
  float morphTargetInfluences[ MORPHTARGETS_COUNT ];
  float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
  for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
    morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
  }
#endif`,x0=`#if defined( USE_MORPHCOLORS )
  vColor *= morphTargetBaseInfluence;
  for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
    #if defined( USE_COLOR_ALPHA )
      if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
    #elif defined( USE_COLOR )
      if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
    #endif
  }
#endif`,y0=`#ifdef USE_MORPHNORMALS
  objectNormal *= morphTargetBaseInfluence;
  for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
    if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
  }
#endif`,v0=`#ifdef USE_MORPHTARGETS
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
#endif`,_0=`#ifdef USE_MORPHTARGETS
  transformed *= morphTargetBaseInfluence;
  for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
    if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
  }
#endif`,M0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,S0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,b0=`#ifndef FLAT_SHADED
  varying vec3 vNormal;
  #ifdef USE_TANGENT
    varying vec3 vTangent;
    varying vec3 vBitangent;
  #endif
#endif`,E0=`#ifndef FLAT_SHADED
  varying vec3 vNormal;
  #ifdef USE_TANGENT
    varying vec3 vTangent;
    varying vec3 vBitangent;
  #endif
#endif`,w0=`#ifndef FLAT_SHADED
  vNormal = normalize( transformedNormal );
  #ifdef USE_TANGENT
    vTangent = normalize( transformedTangent );
    vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
  #endif
#endif`,T0=`#ifdef USE_NORMALMAP
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
#endif`,A0=`#ifdef USE_CLEARCOAT
  vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,R0=`#ifdef USE_CLEARCOAT_NORMALMAP
  vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
  clearcoatMapN.xy *= clearcoatNormalScale;
  clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,C0=`#ifdef USE_CLEARCOATMAP
  uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
  uniform sampler2D clearcoatNormalMap;
  uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
  uniform sampler2D clearcoatRoughnessMap;
#endif`,P0=`#ifdef USE_IRIDESCENCEMAP
  uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
  uniform sampler2D iridescenceThicknessMap;
#endif`,I0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,D0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,L0=`#ifdef PREMULTIPLIED_ALPHA
  gl_FragColor.rgb *= gl_FragColor.a;
#endif`,N0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
  mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
  mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,U0=`#ifdef DITHERING
  gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,O0=`#ifdef DITHERING
  vec3 dithering( vec3 color ) {
    float grid_position = rand( gl_FragCoord.xy );
    vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
    dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
    return color + dither_shift_RGB;
  }
#endif`,F0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
  vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
  roughnessFactor *= texelRoughness.g;
#endif`,B0=`#ifdef USE_ROUGHNESSMAP
  uniform sampler2D roughnessMap;
#endif`,z0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,k0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,H0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,V0=`float getShadowMask() {
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
}`,G0=`#ifdef USE_SKINNING
  mat4 boneMatX = getBoneMatrix( skinIndex.x );
  mat4 boneMatY = getBoneMatrix( skinIndex.y );
  mat4 boneMatZ = getBoneMatrix( skinIndex.z );
  mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,W0=`#ifdef USE_SKINNING
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
#endif`,X0=`#ifdef USE_SKINNING
  vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
  vec4 skinned = vec4( 0.0 );
  skinned += boneMatX * skinVertex * skinWeight.x;
  skinned += boneMatY * skinVertex * skinWeight.y;
  skinned += boneMatZ * skinVertex * skinWeight.z;
  skinned += boneMatW * skinVertex * skinWeight.w;
  transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,q0=`#ifdef USE_SKINNING
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
#endif`,Y0=`float specularStrength;
#ifdef USE_SPECULARMAP
  vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
  specularStrength = texelSpecular.r;
#else
  specularStrength = 1.0;
#endif`,j0=`#ifdef USE_SPECULARMAP
  uniform sampler2D specularMap;
#endif`,Z0=`#if defined( TONE_MAPPING )
  gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,K0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,J0=`#ifdef USE_TRANSMISSION
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
#endif`,$0=`#ifdef USE_TRANSMISSION
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
#endif`,Q0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ex=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
  vec4 worldPosition = vec4( transformed, 1.0 );
  #ifdef USE_BATCHING
    worldPosition = batchingMatrix * worldPosition;
  #endif
  #ifdef USE_INSTANCING
    worldPosition = instanceMatrix * worldPosition;
  #endif
  worldPosition = modelMatrix * worldPosition;
#endif`,ix=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
  vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
  gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sx=`uniform sampler2D t2D;
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
}`,rx=`varying vec3 vWorldDirection;
#include <common>
void main() {
  vWorldDirection = transformDirection( position, modelMatrix );
  #include <begin_vertex>
  #include <project_vertex>
  gl_Position.z = gl_Position.w;
}`,ox=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ax=`varying vec3 vWorldDirection;
#include <common>
void main() {
  vWorldDirection = transformDirection( position, modelMatrix );
  #include <begin_vertex>
  #include <project_vertex>
  gl_Position.z = gl_Position.w;
}`,lx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
  vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
  gl_FragColor = texColor;
  gl_FragColor.a *= opacity;
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`,cx=`#include <common>
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
}`,hx=`#if DEPTH_PACKING == 3200
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
}`,ux=`#define DISTANCE
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
}`,dx=`#define DISTANCE
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
}`,fx=`varying vec3 vWorldDirection;
#include <common>
void main() {
  vWorldDirection = transformDirection( position, modelMatrix );
  #include <begin_vertex>
  #include <project_vertex>
}`,px=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
  vec3 direction = normalize( vWorldDirection );
  vec2 sampleUV = equirectUv( direction );
  gl_FragColor = texture2D( tEquirect, sampleUV );
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`,mx=`uniform float scale;
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
}`,gx=`uniform vec3 diffuse;
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
}`,xx=`#include <common>
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
}`,yx=`uniform vec3 diffuse;
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
}`,vx=`#define LAMBERT
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
}`,_x=`#define LAMBERT
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
}`,Mx=`#define MATCAP
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
}`,Sx=`#define MATCAP
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
}`,bx=`#define NORMAL
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
}`,Ex=`#define NORMAL
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
}`,wx=`#define PHONG
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
}`,Tx=`#define PHONG
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
}`,Ax=`#define STANDARD
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
}`,Rx=`#define STANDARD
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
}`,Cx=`#define TOON
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
}`,Px=`#define TOON
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
}`,Ix=`uniform float size;
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
}`,Dx=`uniform vec3 diffuse;
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
}`,Lx=`#include <common>
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
}`,Nx=`uniform vec3 color;
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
}`,Ux=`uniform float rotation;
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
}`,Ox=`uniform vec3 diffuse;
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
}`,rt={alphahash_fragment:sg,alphahash_pars_fragment:rg,alphamap_fragment:og,alphamap_pars_fragment:ag,alphatest_fragment:lg,alphatest_pars_fragment:cg,aomap_fragment:hg,aomap_pars_fragment:ug,batching_pars_vertex:dg,batching_vertex:fg,begin_vertex:pg,beginnormal_vertex:mg,bsdfs:gg,iridescence_fragment:xg,bumpmap_pars_fragment:yg,clipping_planes_fragment:vg,clipping_planes_pars_fragment:_g,clipping_planes_pars_vertex:Mg,clipping_planes_vertex:Sg,color_fragment:bg,color_pars_fragment:Eg,color_pars_vertex:wg,color_vertex:Tg,common:Ag,cube_uv_reflection_fragment:Rg,defaultnormal_vertex:Cg,displacementmap_pars_vertex:Pg,displacementmap_vertex:Ig,emissivemap_fragment:Dg,emissivemap_pars_fragment:Lg,colorspace_fragment:Ng,colorspace_pars_fragment:Ug,envmap_fragment:Og,envmap_common_pars_fragment:Fg,envmap_pars_fragment:Bg,envmap_pars_vertex:zg,envmap_physical_pars_fragment:Kg,envmap_vertex:kg,fog_vertex:Hg,fog_pars_vertex:Vg,fog_fragment:Gg,fog_pars_fragment:Wg,gradientmap_pars_fragment:Xg,lightmap_pars_fragment:qg,lights_lambert_fragment:Yg,lights_lambert_pars_fragment:jg,lights_pars_begin:Zg,lights_toon_fragment:Jg,lights_toon_pars_fragment:$g,lights_phong_fragment:Qg,lights_phong_pars_fragment:e0,lights_physical_fragment:t0,lights_physical_pars_fragment:n0,lights_fragment_begin:i0,lights_fragment_maps:s0,lights_fragment_end:r0,logdepthbuf_fragment:o0,logdepthbuf_pars_fragment:a0,logdepthbuf_pars_vertex:l0,logdepthbuf_vertex:c0,map_fragment:h0,map_pars_fragment:u0,map_particle_fragment:d0,map_particle_pars_fragment:f0,metalnessmap_fragment:p0,metalnessmap_pars_fragment:m0,morphinstance_vertex:g0,morphcolor_vertex:x0,morphnormal_vertex:y0,morphtarget_pars_vertex:v0,morphtarget_vertex:_0,normal_fragment_begin:M0,normal_fragment_maps:S0,normal_pars_fragment:b0,normal_pars_vertex:E0,normal_vertex:w0,normalmap_pars_fragment:T0,clearcoat_normal_fragment_begin:A0,clearcoat_normal_fragment_maps:R0,clearcoat_pars_fragment:C0,iridescence_pars_fragment:P0,opaque_fragment:I0,packing:D0,premultiplied_alpha_fragment:L0,project_vertex:N0,dithering_fragment:U0,dithering_pars_fragment:O0,roughnessmap_fragment:F0,roughnessmap_pars_fragment:B0,shadowmap_pars_fragment:z0,shadowmap_pars_vertex:k0,shadowmap_vertex:H0,shadowmask_pars_fragment:V0,skinbase_vertex:G0,skinning_pars_vertex:W0,skinning_vertex:X0,skinnormal_vertex:q0,specularmap_fragment:Y0,specularmap_pars_fragment:j0,tonemapping_fragment:Z0,tonemapping_pars_fragment:K0,transmission_fragment:J0,transmission_pars_fragment:$0,uv_pars_fragment:Q0,uv_pars_vertex:ex,uv_vertex:tx,worldpos_vertex:nx,background_vert:ix,background_frag:sx,backgroundCube_vert:rx,backgroundCube_frag:ox,cube_vert:ax,cube_frag:lx,depth_vert:cx,depth_frag:hx,distanceRGBA_vert:ux,distanceRGBA_frag:dx,equirect_vert:fx,equirect_frag:px,linedashed_vert:mx,linedashed_frag:gx,meshbasic_vert:xx,meshbasic_frag:yx,meshlambert_vert:vx,meshlambert_frag:_x,meshmatcap_vert:Mx,meshmatcap_frag:Sx,meshnormal_vert:bx,meshnormal_frag:Ex,meshphong_vert:wx,meshphong_frag:Tx,meshphysical_vert:Ax,meshphysical_frag:Rx,meshtoon_vert:Cx,meshtoon_frag:Px,points_vert:Ix,points_frag:Dx,shadow_vert:Lx,shadow_frag:Nx,sprite_vert:Ux,sprite_frag:Ox},Ne={common:{diffuse:{value:new Ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new it}},envmap:{envMap:{value:null},envMapRotation:{value:new it},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new it}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new it}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new it},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new it},normalScale:{value:new Me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new it},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new it}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new it}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new it}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0},uvTransform:{value:new it}},sprite:{diffuse:{value:new Ie(16777215)},opacity:{value:1},center:{value:new Me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}}},An={basic:{uniforms:Sn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.fog]),vertexShader:rt.meshbasic_vert,fragmentShader:rt.meshbasic_frag},lambert:{uniforms:Sn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new Ie(0)}}]),vertexShader:rt.meshlambert_vert,fragmentShader:rt.meshlambert_frag},phong:{uniforms:Sn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new Ie(0)},specular:{value:new Ie(1118481)},shininess:{value:30}}]),vertexShader:rt.meshphong_vert,fragmentShader:rt.meshphong_frag},standard:{uniforms:Sn([Ne.common,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.roughnessmap,Ne.metalnessmap,Ne.fog,Ne.lights,{emissive:{value:new Ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag},toon:{uniforms:Sn([Ne.common,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.gradientmap,Ne.fog,Ne.lights,{emissive:{value:new Ie(0)}}]),vertexShader:rt.meshtoon_vert,fragmentShader:rt.meshtoon_frag},matcap:{uniforms:Sn([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,{matcap:{value:null}}]),vertexShader:rt.meshmatcap_vert,fragmentShader:rt.meshmatcap_frag},points:{uniforms:Sn([Ne.points,Ne.fog]),vertexShader:rt.points_vert,fragmentShader:rt.points_frag},dashed:{uniforms:Sn([Ne.common,Ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:rt.linedashed_vert,fragmentShader:rt.linedashed_frag},depth:{uniforms:Sn([Ne.common,Ne.displacementmap]),vertexShader:rt.depth_vert,fragmentShader:rt.depth_frag},normal:{uniforms:Sn([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,{opacity:{value:1}}]),vertexShader:rt.meshnormal_vert,fragmentShader:rt.meshnormal_frag},sprite:{uniforms:Sn([Ne.sprite,Ne.fog]),vertexShader:rt.sprite_vert,fragmentShader:rt.sprite_frag},background:{uniforms:{uvTransform:{value:new it},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:rt.background_vert,fragmentShader:rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new it}},vertexShader:rt.backgroundCube_vert,fragmentShader:rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:rt.cube_vert,fragmentShader:rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:rt.equirect_vert,fragmentShader:rt.equirect_frag},distanceRGBA:{uniforms:Sn([Ne.common,Ne.displacementmap,{referencePosition:{value:new w},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:rt.distanceRGBA_vert,fragmentShader:rt.distanceRGBA_frag},shadow:{uniforms:Sn([Ne.lights,Ne.fog,{color:{value:new Ie(0)},opacity:{value:1}}]),vertexShader:rt.shadow_vert,fragmentShader:rt.shadow_frag}};An.physical={uniforms:Sn([An.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new it},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new it},clearcoatNormalScale:{value:new Me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new it},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new it},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new it},sheen:{value:0},sheenColor:{value:new Ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new it},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new it},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new it},transmissionSamplerSize:{value:new Me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new it},attenuationDistance:{value:0},attenuationColor:{value:new Ie(0)},specularColor:{value:new Ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new it},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new it},anisotropyVector:{value:new Me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new it}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag};var Ql={r:0,b:0,g:0},Xs=new Dn,Fx=new He;function Bx(s,e,t,n,i,r,o){let a=new Ie(0),l=r===!0?0:1,c,h,u=null,f=0,d=null;function m(M){let y=M.isScene===!0?M.background:null;return y&&y.isTexture&&(y=(M.backgroundBlurriness>0?t:e).get(y)),y}function x(M){let y=!1,S=m(M);S===null?p(a,l):S&&S.isColor&&(p(S,1),y=!0);let R=s.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function g(M,y){let S=m(y);S&&(S.isCubeTexture||S.mapping===ko)?(h===void 0&&(h=new je(new dn(1,1,1),new ct({name:"BackgroundCubeMaterial",uniforms:Ws(An.backgroundCube.uniforms),vertexShader:An.backgroundCube.vertexShader,fragmentShader:An.backgroundCube.fragmentShader,side:Wt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,C,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Xs.copy(y.backgroundRotation),Xs.x*=-1,Xs.y*=-1,Xs.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Xs.y*=-1,Xs.z*=-1),h.material.uniforms.envMap.value=S,h.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Fx.makeRotationFromEuler(Xs)),h.material.toneMapped=at.getTransfer(S.colorSpace)!==At,(u!==S||f!==S.version||d!==s.toneMapping)&&(h.material.needsUpdate=!0,u=S,f=S.version,d=s.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new je(new tn(2,2),new ct({name:"BackgroundMaterial",uniforms:Ws(An.background.uniforms),vertexShader:An.background.vertexShader,fragmentShader:An.background.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=at.getTransfer(S.colorSpace)!==At,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||f!==S.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,u=S,f=S.version,d=s.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function p(M,y){M.getRGB(Ql,Ph(s)),n.buffers.color.setClear(Ql.r,Ql.g,Ql.b,y,o)}function E(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,y=1){a.set(M),l=y,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,p(a,l)},render:x,addToRenderList:g,dispose:E}}function zx(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null),r=i,o=!1;function a(v,A,U,k,F){let z=!1,G=u(k,U,A);r!==G&&(r=G,c(r.object)),z=d(v,k,U,F),z&&m(v,k,U,F),F!==null&&e.update(F,s.ELEMENT_ARRAY_BUFFER),(z||o)&&(o=!1,y(v,A,U,k),F!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function l(){return s.createVertexArray()}function c(v){return s.bindVertexArray(v)}function h(v){return s.deleteVertexArray(v)}function u(v,A,U){let k=U.wireframe===!0,F=n[v.id];F===void 0&&(F={},n[v.id]=F);let z=F[A.id];z===void 0&&(z={},F[A.id]=z);let G=z[k];return G===void 0&&(G=f(l()),z[k]=G),G}function f(v){let A=[],U=[],k=[];for(let F=0;F<t;F++)A[F]=0,U[F]=0,k[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:U,attributeDivisors:k,object:v,attributes:{},index:null}}function d(v,A,U,k){let F=r.attributes,z=A.attributes,G=0,ie=U.getAttributes();for(let j in ie)if(ie[j].location>=0){let te=F[j],pe=z[j];if(pe===void 0&&(j==="instanceMatrix"&&v.instanceMatrix&&(pe=v.instanceMatrix),j==="instanceColor"&&v.instanceColor&&(pe=v.instanceColor)),te===void 0||te.attribute!==pe||pe&&te.data!==pe.data)return!0;G++}return r.attributesNum!==G||r.index!==k}function m(v,A,U,k){let F={},z=A.attributes,G=0,ie=U.getAttributes();for(let j in ie)if(ie[j].location>=0){let te=z[j];te===void 0&&(j==="instanceMatrix"&&v.instanceMatrix&&(te=v.instanceMatrix),j==="instanceColor"&&v.instanceColor&&(te=v.instanceColor));let pe={};pe.attribute=te,te&&te.data&&(pe.data=te.data),F[j]=pe,G++}r.attributes=F,r.attributesNum=G,r.index=k}function x(){let v=r.newAttributes;for(let A=0,U=v.length;A<U;A++)v[A]=0}function g(v){p(v,0)}function p(v,A){let U=r.newAttributes,k=r.enabledAttributes,F=r.attributeDivisors;U[v]=1,k[v]===0&&(s.enableVertexAttribArray(v),k[v]=1),F[v]!==A&&(s.vertexAttribDivisor(v,A),F[v]=A)}function E(){let v=r.newAttributes,A=r.enabledAttributes;for(let U=0,k=A.length;U<k;U++)A[U]!==v[U]&&(s.disableVertexAttribArray(U),A[U]=0)}function M(v,A,U,k,F,z,G){G===!0?s.vertexAttribIPointer(v,A,U,F,z):s.vertexAttribPointer(v,A,U,k,F,z)}function y(v,A,U,k){x();let F=k.attributes,z=U.getAttributes(),G=A.defaultAttributeValues;for(let ie in z){let j=z[ie];if(j.location>=0){let oe=F[ie];if(oe===void 0&&(ie==="instanceMatrix"&&v.instanceMatrix&&(oe=v.instanceMatrix),ie==="instanceColor"&&v.instanceColor&&(oe=v.instanceColor)),oe!==void 0){let te=oe.normalized,pe=oe.itemSize,Ce=e.get(oe);if(Ce===void 0)continue;let Ae=Ce.buffer,Ue=Ce.type,Be=Ce.bytesPerElement,se=Ue===s.INT||Ue===s.UNSIGNED_INT||oe.gpuType===yl;if(oe.isInterleavedBufferAttribute){let ae=oe.data,_e=ae.stride,De=oe.offset;if(ae.isInstancedInterleavedBuffer){for(let Le=0;Le<j.locationSize;Le++)p(j.location+Le,ae.meshPerAttribute);v.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Le=0;Le<j.locationSize;Le++)g(j.location+Le);s.bindBuffer(s.ARRAY_BUFFER,Ae);for(let Le=0;Le<j.locationSize;Le++)M(j.location+Le,pe/j.locationSize,Ue,te,_e*Be,(De+pe/j.locationSize*Le)*Be,se)}else{if(oe.isInstancedBufferAttribute){for(let ae=0;ae<j.locationSize;ae++)p(j.location+ae,oe.meshPerAttribute);v.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let ae=0;ae<j.locationSize;ae++)g(j.location+ae);s.bindBuffer(s.ARRAY_BUFFER,Ae);for(let ae=0;ae<j.locationSize;ae++)M(j.location+ae,pe/j.locationSize,Ue,te,pe*Be,pe/j.locationSize*ae*Be,se)}}else if(G!==void 0){let te=G[ie];if(te!==void 0)switch(te.length){case 2:s.vertexAttrib2fv(j.location,te);break;case 3:s.vertexAttrib3fv(j.location,te);break;case 4:s.vertexAttrib4fv(j.location,te);break;default:s.vertexAttrib1fv(j.location,te)}}}}E()}function S(){D();for(let v in n){let A=n[v];for(let U in A){let k=A[U];for(let F in k)h(k[F].object),delete k[F];delete A[U]}delete n[v]}}function R(v){if(n[v.id]===void 0)return;let A=n[v.id];for(let U in A){let k=A[U];for(let F in k)h(k[F].object),delete k[F];delete A[U]}delete n[v.id]}function C(v){for(let A in n){let U=n[A];if(U[v.id]===void 0)continue;let k=U[v.id];for(let F in k)h(k[F].object),delete k[F];delete U[v.id]}}function D(){_(),o=!0,r!==i&&(r=i,c(r.object))}function _(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:D,resetDefaultState:_,dispose:S,releaseStatesOfGeometry:R,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:g,disableUnusedAttributes:E}}function kx(s,e,t){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),t.update(h,n,1)}function o(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let d=0;for(let m=0;m<u;m++)d+=h[m];t.update(d,n,1)}function l(c,h,u,f){if(u===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<c.length;m++)o(c[m],h[m],f[m]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let m=0;for(let x=0;x<u;x++)m+=h[x]*f[x];t.update(m,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Hx(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let C=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(C){return!(C!==nn&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){let D=C===Xt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Vn&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==ei&&!D)}function l(C){if(C==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),E=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),M=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),S=m>0,R=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:E,maxVaryings:M,maxFragmentUniforms:y,vertexTextures:S,maxSamples:R}}function Vx(s){let e=this,t=null,n=0,i=!1,r=!1,o=new ln,a=new it,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){let m=u.clippingPlanes,x=u.clipIntersection,g=u.clipShadows,p=s.get(u);if(!i||m===null||m.length===0||r&&!g)r?h(null):c();else{let E=r?0:n,M=E*4,y=p.clippingState||null;l.value=y,y=h(m,f,M,d);for(let S=0;S!==M;++S)y[S]=t[S];p.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,d,m){let x=u!==null?u.length:0,g=null;if(x!==0){if(g=l.value,m!==!0||g===null){let p=d+x*4,E=f.matrixWorldInverse;a.getNormalMatrix(E),(g===null||g.length<p)&&(g=new Float32Array(p));for(let M=0,y=d;M!==x;++M,y+=4)o.copy(u[M]).applyMatrix4(E,a),o.normal.toArray(g,y),g[y+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}function Gx(s){let e=new WeakMap;function t(o,a){return a===gl?o.mapping=Vs:a===xl&&(o.mapping=Gs),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===gl||a===xl)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new br(l.height);return c.fromEquirectangularTexture(s,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Lr=4,bf=[.125,.215,.35,.446,.526,.582],js=20,Uh=new Tn,Ef=new Ie,Oh=null,Fh=0,Bh=0,zh=!1,Ys=(1+Math.sqrt(5))/2,Dr=1/Ys,wf=[new w(-Ys,Dr,0),new w(Ys,Dr,0),new w(-Dr,0,Ys),new w(Dr,0,Ys),new w(0,Ys,-Dr),new w(0,Ys,Dr),new w(-1,1,-1),new w(1,1,-1),new w(-1,1,1),new w(1,1,1)],Wx=new w,mi=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,r={}){let{size:o=256,position:a=Wx}=r;Oh=this._renderer.getRenderTarget(),Fh=this._renderer.getActiveCubeFace(),Bh=this._renderer.getActiveMipmapLevel(),zh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Af(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Oh,Fh,Bh),this._renderer.xr.enabled=zh,e.scissorTest=!1,ec(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Vs||e.mapping===Gs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Oh=this._renderer.getRenderTarget(),Fh=this._renderer.getActiveCubeFace(),Bh=this._renderer.getActiveMipmapLevel(),zh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:$t,minFilter:$t,generateMipmaps:!1,type:Xt,format:nn,colorSpace:fn,depthBuffer:!1},i=Tf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Tf(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Xx(r)),this._blurMaterial=qx(r,e,t)}return i}_compileMaterial(e){let t=new je(this._lodPlanes[0],e);this._renderer.compile(t,Uh)}_sceneToCubeUV(e,t,n,i,r){let l=new Bt(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Ef),u.toneMapping=Ki,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null));let x=new Ct({name:"PMREM.Background",side:Wt,depthWrite:!1,depthTest:!1}),g=new je(new dn,x),p=!1,E=e.background;E?E.isColor&&(x.color.copy(E),e.background=null,p=!0):(x.color.copy(Ef),p=!0);for(let M=0;M<6;M++){let y=M%3;y===0?(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[M],r.y,r.z)):y===1?(l.up.set(0,0,c[M]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[M],r.z)):(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[M]));let S=this._cubeSize;ec(i,y*S,M>2?S:0,S,S),u.setRenderTarget(i),p&&u.render(g,l),u.render(e,l)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=E}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===Vs||e.mapping===Gs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Af());let r=i?this._cubemapMaterial:this._equirectMaterial,o=new je(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;ec(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Uh)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodPlanes.length;for(let r=1;r<i;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=wf[(i-r-1)%wf.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,i,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new je(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*js-1),x=r/m,g=isFinite(r)?1+Math.floor(h*x):js;g>js&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${js}`);let p=[],E=0;for(let C=0;C<js;++C){let D=C/x,_=Math.exp(-D*D/2);p.push(_),C===0?E+=_:C<g&&(E+=2*_)}for(let C=0;C<p.length;C++)p[C]=p[C]/E;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:M}=this;f.dTheta.value=m,f.mipInt.value=M-n;let y=this._sizeLods[i],S=3*y*(i>M-Lr?i-M+Lr:0),R=4*(this._cubeSize-y);ec(t,S,R,3*y,2*y),l.setRenderTarget(t),l.render(u,Uh)}};function Xx(s){let e=[],t=[],n=[],i=s,r=s-Lr+1+bf.length;for(let o=0;o<r;o++){let a=Math.pow(2,i);t.push(a);let l=1/a;o>s-Lr?l=bf[o-s+Lr-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,m=6,x=3,g=2,p=1,E=new Float32Array(x*m*d),M=new Float32Array(g*m*d),y=new Float32Array(p*m*d);for(let R=0;R<d;R++){let C=R%3*2/3-1,D=R>2?0:-1,_=[C,D,0,C+2/3,D,0,C+2/3,D+1,0,C,D,0,C+2/3,D+1,0,C,D+1,0];E.set(_,x*m*R),M.set(f,g*m*R);let v=[R,R,R,R,R,R];y.set(v,p*m*R)}let S=new bt;S.setAttribute("position",new nt(E,x)),S.setAttribute("uv",new nt(M,g)),S.setAttribute("faceIndex",new nt(y,p)),e.push(S),i>Lr&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Tf(s,e,t){let n=new Nt(s,e,t);return n.texture.mapping=ko,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ec(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function qx(s,e,t){let n=new Float32Array(js),i=new w(0,1,0);return new ct({name:"SphericalGaussianBlur",defines:{n:js,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Kh(),fragmentShader:`

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
    `,blending:mt,depthTest:!1,depthWrite:!1})}function Af(){return new ct({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Kh(),fragmentShader:`

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
    `,blending:mt,depthTest:!1,depthWrite:!1})}function Rf(){return new ct({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Kh(),fragmentShader:`

      precision mediump float;
      precision mediump int;

      uniform float flipEnvMap;

      varying vec3 vOutputDirection;

      uniform samplerCube envMap;

      void main() {

        gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

      }
    `,blending:mt,depthTest:!1,depthWrite:!1})}function Kh(){return`

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
  `}function Yx(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===gl||l===xl,h=l===Vs||l===Gs;if(c||h){let u=e.get(a),f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new mi(s)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{let d=a.image;return c&&d&&d.height>0||h&&d&&i(d)?(t===null&&(t=new mi(s)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function i(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function jx(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&vr("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Zx(s,e,t,n){let i={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let m in f.attributes)e.remove(f.attributes[m]);f.removeEventListener("dispose",o),delete i[f.id];let d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function l(u){let f=u.attributes;for(let d in f)e.update(f[d],s.ARRAY_BUFFER)}function c(u){let f=[],d=u.index,m=u.attributes.position,x=0;if(d!==null){let E=d.array;x=d.version;for(let M=0,y=E.length;M<y;M+=3){let S=E[M+0],R=E[M+1],C=E[M+2];f.push(S,R,R,C,C,S)}}else if(m!==void 0){let E=m.array;x=m.version;for(let M=0,y=E.length/3-1;M<y;M+=3){let S=M+0,R=M+1,C=M+2;f.push(S,R,R,C,C,S)}}else return;let g=new(Ch(f)?ho:co)(f,1);g.version=x;let p=r.get(u);p&&e.remove(p),r.set(u,g)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Kx(s,e,t){let n;function i(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){s.drawElements(n,d,r,f*o),t.update(d,n,1)}function c(f,d,m){m!==0&&(s.drawElementsInstanced(n,d,r,f*o,m),t.update(d,n,m))}function h(f,d,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,m);let g=0;for(let p=0;p<m;p++)g+=d[p];t.update(g,n,1)}function u(f,d,m,x){if(m===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<f.length;p++)c(f[p]/o,d[p],x[p]);else{g.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,x,0,m);let p=0;for(let E=0;E<m;E++)p+=d[E]*x[E];t.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Jx(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function $x(s,e,t){let n=new WeakMap,i=new lt;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let _=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",_)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],E=a.morphAttributes.color||[],M=0;d===!0&&(M=1),m===!0&&(M=2),x===!0&&(M=3);let y=a.attributes.position.count*M,S=1;y>e.maxTextureSize&&(S=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let R=new Float32Array(y*S*4*u),C=new lo(R,y,S,u);C.type=ei,C.needsUpdate=!0;let D=M*4;for(let v=0;v<u;v++){let A=g[v],U=p[v],k=E[v],F=y*S*4*v;for(let z=0;z<A.count;z++){let G=z*D;d===!0&&(i.fromBufferAttribute(A,z),R[F+G+0]=i.x,R[F+G+1]=i.y,R[F+G+2]=i.z,R[F+G+3]=0),m===!0&&(i.fromBufferAttribute(U,z),R[F+G+4]=i.x,R[F+G+5]=i.y,R[F+G+6]=i.z,R[F+G+7]=0),x===!0&&(i.fromBufferAttribute(k,z),R[F+G+8]=i.x,R[F+G+9]=i.y,R[F+G+10]=i.z,R[F+G+11]=k.itemSize===4?i.w:1)}}f={count:u,texture:C,size:new Me(y,S)},n.set(a,f),a.addEventListener("dispose",_)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];let m=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(s,"morphTargetBaseInfluence",m),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function Qx(s,e,t,n){let i=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=e.get(l,h);if(i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return u}function o(){i=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var Yf=new Qt,Cf=new Gi(1,1),jf=new lo,Zf=new Oa,Kf=new fo,Pf=[],If=[],Df=new Float32Array(16),Lf=new Float32Array(9),Nf=new Float32Array(4);function Ur(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=Pf[i];if(r===void 0&&(r=new Float32Array(i),Pf[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function sn(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function rn(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function nc(s,e){let t=If[e];t===void 0&&(t=new Int32Array(e),If[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function ey(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function ty(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;s.uniform2fv(this.addr,e),rn(t,e)}}function ny(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(sn(t,e))return;s.uniform3fv(this.addr,e),rn(t,e)}}function iy(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;s.uniform4fv(this.addr,e),rn(t,e)}}function sy(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(sn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),rn(t,e)}else{if(sn(t,n))return;Nf.set(n),s.uniformMatrix2fv(this.addr,!1,Nf),rn(t,n)}}function ry(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(sn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),rn(t,e)}else{if(sn(t,n))return;Lf.set(n),s.uniformMatrix3fv(this.addr,!1,Lf),rn(t,n)}}function oy(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(sn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),rn(t,e)}else{if(sn(t,n))return;Df.set(n),s.uniformMatrix4fv(this.addr,!1,Df),rn(t,n)}}function ay(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function ly(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;s.uniform2iv(this.addr,e),rn(t,e)}}function cy(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(sn(t,e))return;s.uniform3iv(this.addr,e),rn(t,e)}}function hy(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;s.uniform4iv(this.addr,e),rn(t,e)}}function uy(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function dy(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;s.uniform2uiv(this.addr,e),rn(t,e)}}function fy(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(sn(t,e))return;s.uniform3uiv(this.addr,e),rn(t,e)}}function py(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;s.uniform4uiv(this.addr,e),rn(t,e)}}function my(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Cf.compareFunction=Th,r=Cf):r=Yf,t.setTexture2D(e||r,i)}function gy(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Zf,i)}function xy(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Kf,i)}function yy(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||jf,i)}function vy(s){switch(s){case 5126:return ey;case 35664:return ty;case 35665:return ny;case 35666:return iy;case 35674:return sy;case 35675:return ry;case 35676:return oy;case 5124:case 35670:return ay;case 35667:case 35671:return ly;case 35668:case 35672:return cy;case 35669:case 35673:return hy;case 5125:return uy;case 36294:return dy;case 36295:return fy;case 36296:return py;case 35678:case 36198:case 36298:case 36306:case 35682:return my;case 35679:case 36299:case 36307:return gy;case 35680:case 36300:case 36308:case 36293:return xy;case 36289:case 36303:case 36311:case 36292:return yy}}function _y(s,e){s.uniform1fv(this.addr,e)}function My(s,e){let t=Ur(e,this.size,2);s.uniform2fv(this.addr,t)}function Sy(s,e){let t=Ur(e,this.size,3);s.uniform3fv(this.addr,t)}function by(s,e){let t=Ur(e,this.size,4);s.uniform4fv(this.addr,t)}function Ey(s,e){let t=Ur(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function wy(s,e){let t=Ur(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Ty(s,e){let t=Ur(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Ay(s,e){s.uniform1iv(this.addr,e)}function Ry(s,e){s.uniform2iv(this.addr,e)}function Cy(s,e){s.uniform3iv(this.addr,e)}function Py(s,e){s.uniform4iv(this.addr,e)}function Iy(s,e){s.uniform1uiv(this.addr,e)}function Dy(s,e){s.uniform2uiv(this.addr,e)}function Ly(s,e){s.uniform3uiv(this.addr,e)}function Ny(s,e){s.uniform4uiv(this.addr,e)}function Uy(s,e,t){let n=this.cache,i=e.length,r=nc(t,i);sn(n,r)||(s.uniform1iv(this.addr,r),rn(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Yf,r[o])}function Oy(s,e,t){let n=this.cache,i=e.length,r=nc(t,i);sn(n,r)||(s.uniform1iv(this.addr,r),rn(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Zf,r[o])}function Fy(s,e,t){let n=this.cache,i=e.length,r=nc(t,i);sn(n,r)||(s.uniform1iv(this.addr,r),rn(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Kf,r[o])}function By(s,e,t){let n=this.cache,i=e.length,r=nc(t,i);sn(n,r)||(s.uniform1iv(this.addr,r),rn(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||jf,r[o])}function zy(s){switch(s){case 5126:return _y;case 35664:return My;case 35665:return Sy;case 35666:return by;case 35674:return Ey;case 35675:return wy;case 35676:return Ty;case 5124:case 35670:return Ay;case 35667:case 35671:return Ry;case 35668:case 35672:return Cy;case 35669:case 35673:return Py;case 5125:return Iy;case 36294:return Dy;case 36295:return Ly;case 36296:return Ny;case 35678:case 36198:case 36298:case 36306:case 35682:return Uy;case 35679:case 36299:case 36307:return Oy;case 35680:case 36300:case 36308:case 36293:return Fy;case 36289:case 36303:case 36311:case 36292:return By}}var Hh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=vy(t.type)}},Vh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=zy(t.type)}},Gh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(e,t[a.id],n)}}},kh=/(\w+)(\])?(\[|\.)?/g;function Uf(s,e){s.seq.push(e),s.map[e.id]=e}function ky(s,e,t){let n=s.name,i=n.length;for(kh.lastIndex=0;;){let r=kh.exec(n),o=kh.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Uf(t,c===void 0?new Hh(a,s,e):new Vh(a,s,e));break}else{let u=t.map[a];u===void 0&&(u=new Gh(a),Uf(t,u)),t=u}}}var Nr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);ky(r,o,this)}}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let o=e[i];o.id in t&&n.push(o)}return n}};function Of(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var Hy=37297,Vy=0;function Gy(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Ff=new it;function Wy(s){at._getMatrix(Ff,at.workingColorSpace,s);let e=`mat3( ${Ff.elements.map(t=>t.toFixed(4))} )`;switch(at.getTransfer(s)){case ro:return[e,"LinearTransferOETF"];case At:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Bf(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+Gy(s.getShaderSource(e),a)}else return r}function Xy(s,e){let t=Wy(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function qy(s,e){let t;switch(e){case hl:t="Linear";break;case ul:t="Reinhard";break;case dl:t="Cineon";break;case ms:t="ACESFilmic";break;case pl:t="AgX";break;case ml:t="Neutral";break;case fl:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var tc=new w;function Yy(){at.getLuminanceCoefficients(tc);let s=tc.x.toFixed(4),e=tc.y.toFixed(4),t=tc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function jy(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(jo).join(`
`)}function Zy(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Ky(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function jo(s){return s!==""}function zf(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function kf(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Jy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wh(s){return s.replace(Jy,Qy)}var $y=new Map;function Qy(s,e){let t=rt[e];if(t===void 0){let n=$y.get(e);if(n!==void 0)t=rt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Wh(t)}var ev=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hf(s){return s.replace(ev,tv)}function tv(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Vf(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}function nv(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===uh?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===tl?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Ti&&(e="SHADOWMAP_TYPE_VSM"),e}function iv(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Vs:case Gs:e="ENVMAP_TYPE_CUBE";break;case ko:e="ENVMAP_TYPE_CUBE_UV";break}return e}function sv(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Gs:e="ENVMAP_MODE_REFRACTION";break}return e}function rv(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case cl:e="ENVMAP_BLENDING_MULTIPLY";break;case sf:e="ENVMAP_BLENDING_MIX";break;case rf:e="ENVMAP_BLENDING_ADD";break}return e}function ov(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function av(s,e,t,n){let i=s.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=nv(t),c=iv(t),h=sv(t),u=rv(t),f=ov(t),d=jy(t),m=Zy(r),x=i.createProgram(),g,p,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(jo).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(jo).join(`
`),p.length>0&&(p+=`
`)):(g=[Vf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(jo).join(`
`),p=[Vf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ki?"#define TONE_MAPPING":"",t.toneMapping!==Ki?rt.tonemapping_pars_fragment:"",t.toneMapping!==Ki?qy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",rt.colorspace_pars_fragment,Xy("linearToOutputTexel",t.outputColorSpace),Yy(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(jo).join(`
`)),o=Wh(o),o=zf(o,t),o=kf(o,t),a=Wh(a),a=zf(a,t),a=kf(a,t),o=Hf(o),a=Hf(a),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===Ah?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ah?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let M=E+g+o,y=E+p+a,S=Of(i,i.VERTEX_SHADER,M),R=Of(i,i.FRAGMENT_SHADER,y);i.attachShader(x,S),i.attachShader(x,R),t.index0AttributeName!==void 0?i.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function C(A){if(s.debug.checkShaderErrors){let U=i.getProgramInfoLog(x)||"",k=i.getShaderInfoLog(S)||"",F=i.getShaderInfoLog(R)||"",z=U.trim(),G=k.trim(),ie=F.trim(),j=!0,oe=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(j=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,S,R);else{let te=Bf(i,S,"vertex"),pe=Bf(i,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+z+`
`+te+`
`+pe)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(G===""||ie==="")&&(oe=!1);oe&&(A.diagnostics={runnable:j,programLog:z,vertexShader:{log:G,prefix:g},fragmentShader:{log:ie,prefix:p}})}i.deleteShader(S),i.deleteShader(R),D=new Nr(i,x),_=Ky(i,x)}let D;this.getUniforms=function(){return D===void 0&&C(this),D};let _;this.getAttributes=function(){return _===void 0&&C(this),_};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=i.getProgramParameter(x,Hy)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Vy++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=S,this.fragmentShader=R,this}var lv=0,Xh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new qh(e),t.set(e,n)),n}},qh=class{constructor(e){this.id=lv++,this.code=e,this.usedTimes=0}};function cv(s,e,t,n,i,r,o){let a=new Mr,l=new Xh,c=new Set,h=[],u=i.logarithmicDepthBuffer,f=i.vertexTextures,d=i.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(_){return c.add(_),_===0?"uv":`uv${_}`}function g(_,v,A,U,k){let F=U.fog,z=k.geometry,G=_.isMeshStandardMaterial?U.environment:null,ie=(_.isMeshStandardMaterial?t:e).get(_.envMap||G),j=ie&&ie.mapping===ko?ie.image.height:null,oe=m[_.type];_.precision!==null&&(d=i.getMaxPrecision(_.precision),d!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",d,"instead."));let te=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,pe=te!==void 0?te.length:0,Ce=0;z.morphAttributes.position!==void 0&&(Ce=1),z.morphAttributes.normal!==void 0&&(Ce=2),z.morphAttributes.color!==void 0&&(Ce=3);let Ae,Ue,Be,se;if(oe){let ht=An[oe];Ae=ht.vertexShader,Ue=ht.fragmentShader}else Ae=_.vertexShader,Ue=_.fragmentShader,l.update(_),Be=l.getVertexShaderID(_),se=l.getFragmentShaderID(_);let ae=s.getRenderTarget(),_e=s.state.buffers.depth.getReversed(),De=k.isInstancedMesh===!0,Le=k.isBatchedMesh===!0,Ze=!!_.map,Ve=!!_.matcap,N=!!ie,st=!!_.aoMap,We=!!_.lightMap,ze=!!_.bumpMap,Re=!!_.normalMap,q=!!_.displacementMap,X=!!_.emissiveMap,ge=!!_.metalnessMap,Oe=!!_.roughnessMap,Fe=_.anisotropy>0,I=_.clearcoat>0,b=_.dispersion>0,Y=_.iridescence>0,ne=_.sheen>0,me=_.transmission>0,Q=Fe&&!!_.anisotropyMap,V=I&&!!_.clearcoatMap,W=I&&!!_.clearcoatNormalMap,le=I&&!!_.clearcoatRoughnessMap,fe=Y&&!!_.iridescenceMap,Z=Y&&!!_.iridescenceThicknessMap,ce=ne&&!!_.sheenColorMap,be=ne&&!!_.sheenRoughnessMap,Se=!!_.specularMap,xe=!!_.specularColorMap,Te=!!_.specularIntensityMap,B=me&&!!_.transmissionMap,ye=me&&!!_.thicknessMap,L=!!_.gradientMap,ue=!!_.alphaMap,ee=_.alphaTest>0,re=!!_.alphaHash,Ee=!!_.extensions,Xe=Ki;_.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(Xe=s.toneMapping);let yt={shaderID:oe,shaderType:_.type,shaderName:_.name,vertexShader:Ae,fragmentShader:Ue,defines:_.defines,customVertexShaderID:Be,customFragmentShaderID:se,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:d,batching:Le,batchingColor:Le&&k._colorsTexture!==null,instancing:De,instancingColor:De&&k.instanceColor!==null,instancingMorph:De&&k.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ae===null?s.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:fn,alphaToCoverage:!!_.alphaToCoverage,map:Ze,matcap:Ve,envMap:N,envMapMode:N&&ie.mapping,envMapCubeUVHeight:j,aoMap:st,lightMap:We,bumpMap:ze,normalMap:Re,displacementMap:f&&q,emissiveMap:X,normalMapObjectSpace:Re&&_.normalMapType===hf,normalMapTangentSpace:Re&&_.normalMapType===qo,metalnessMap:ge,roughnessMap:Oe,anisotropy:Fe,anisotropyMap:Q,clearcoat:I,clearcoatMap:V,clearcoatNormalMap:W,clearcoatRoughnessMap:le,dispersion:b,iridescence:Y,iridescenceMap:fe,iridescenceThicknessMap:Z,sheen:ne,sheenColorMap:ce,sheenRoughnessMap:be,specularMap:Se,specularColorMap:xe,specularIntensityMap:Te,transmission:me,transmissionMap:B,thicknessMap:ye,gradientMap:L,opaque:_.transparent===!1&&_.blending===hi&&_.alphaToCoverage===!1,alphaMap:ue,alphaTest:ee,alphaHash:re,combine:_.combine,mapUv:Ze&&x(_.map.channel),aoMapUv:st&&x(_.aoMap.channel),lightMapUv:We&&x(_.lightMap.channel),bumpMapUv:ze&&x(_.bumpMap.channel),normalMapUv:Re&&x(_.normalMap.channel),displacementMapUv:q&&x(_.displacementMap.channel),emissiveMapUv:X&&x(_.emissiveMap.channel),metalnessMapUv:ge&&x(_.metalnessMap.channel),roughnessMapUv:Oe&&x(_.roughnessMap.channel),anisotropyMapUv:Q&&x(_.anisotropyMap.channel),clearcoatMapUv:V&&x(_.clearcoatMap.channel),clearcoatNormalMapUv:W&&x(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:le&&x(_.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&x(_.iridescenceMap.channel),iridescenceThicknessMapUv:Z&&x(_.iridescenceThicknessMap.channel),sheenColorMapUv:ce&&x(_.sheenColorMap.channel),sheenRoughnessMapUv:be&&x(_.sheenRoughnessMap.channel),specularMapUv:Se&&x(_.specularMap.channel),specularColorMapUv:xe&&x(_.specularColorMap.channel),specularIntensityMapUv:Te&&x(_.specularIntensityMap.channel),transmissionMapUv:B&&x(_.transmissionMap.channel),thicknessMapUv:ye&&x(_.thicknessMap.channel),alphaMapUv:ue&&x(_.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(Re||Fe),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!z.attributes.uv&&(Ze||ue),fog:!!F,useFog:_.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:_.flatShading===!0&&_.wireframe===!1,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:_e,skinning:k.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:pe,morphTextureStride:Ce,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:s.shadowMap.enabled&&A.length>0,shadowMapType:s.shadowMap.type,toneMapping:Xe,decodeVideoTexture:Ze&&_.map.isVideoTexture===!0&&at.getTransfer(_.map.colorSpace)===At,decodeVideoTextureEmissive:X&&_.emissiveMap.isVideoTexture===!0&&at.getTransfer(_.emissiveMap.colorSpace)===At,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===vt,flipSided:_.side===Wt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Ee&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ee&&_.extensions.multiDraw===!0||Le)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return yt.vertexUv1s=c.has(1),yt.vertexUv2s=c.has(2),yt.vertexUv3s=c.has(3),c.clear(),yt}function p(_){let v=[];if(_.shaderID?v.push(_.shaderID):(v.push(_.customVertexShaderID),v.push(_.customFragmentShaderID)),_.defines!==void 0)for(let A in _.defines)v.push(A),v.push(_.defines[A]);return _.isRawShaderMaterial===!1&&(E(v,_),M(v,_),v.push(s.outputColorSpace)),v.push(_.customProgramCacheKey),v.join()}function E(_,v){_.push(v.precision),_.push(v.outputColorSpace),_.push(v.envMapMode),_.push(v.envMapCubeUVHeight),_.push(v.mapUv),_.push(v.alphaMapUv),_.push(v.lightMapUv),_.push(v.aoMapUv),_.push(v.bumpMapUv),_.push(v.normalMapUv),_.push(v.displacementMapUv),_.push(v.emissiveMapUv),_.push(v.metalnessMapUv),_.push(v.roughnessMapUv),_.push(v.anisotropyMapUv),_.push(v.clearcoatMapUv),_.push(v.clearcoatNormalMapUv),_.push(v.clearcoatRoughnessMapUv),_.push(v.iridescenceMapUv),_.push(v.iridescenceThicknessMapUv),_.push(v.sheenColorMapUv),_.push(v.sheenRoughnessMapUv),_.push(v.specularMapUv),_.push(v.specularColorMapUv),_.push(v.specularIntensityMapUv),_.push(v.transmissionMapUv),_.push(v.thicknessMapUv),_.push(v.combine),_.push(v.fogExp2),_.push(v.sizeAttenuation),_.push(v.morphTargetsCount),_.push(v.morphAttributeCount),_.push(v.numDirLights),_.push(v.numPointLights),_.push(v.numSpotLights),_.push(v.numSpotLightMaps),_.push(v.numHemiLights),_.push(v.numRectAreaLights),_.push(v.numDirLightShadows),_.push(v.numPointLightShadows),_.push(v.numSpotLightShadows),_.push(v.numSpotLightShadowsWithMaps),_.push(v.numLightProbes),_.push(v.shadowMapType),_.push(v.toneMapping),_.push(v.numClippingPlanes),_.push(v.numClipIntersection),_.push(v.depthPacking)}function M(_,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),v.gradientMap&&a.enable(22),_.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reversedDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),_.push(a.mask)}function y(_){let v=m[_.type],A;if(v){let U=An[v];A=Ot.clone(U.uniforms)}else A=_.uniforms;return A}function S(_,v){let A;for(let U=0,k=h.length;U<k;U++){let F=h[U];if(F.cacheKey===v){A=F,++A.usedTimes;break}}return A===void 0&&(A=new av(s,v,_,r),h.push(A)),A}function R(_){if(--_.usedTimes===0){let v=h.indexOf(_);h[v]=h[h.length-1],h.pop(),_.destroy()}}function C(_){l.remove(_)}function D(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:y,acquireProgram:S,releaseProgram:R,releaseShaderCache:C,programs:h,dispose:D}}function hv(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function uv(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Gf(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Wf(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(u,f,d,m,x,g){let p=s[e];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:m,renderOrder:u.renderOrder,z:x,group:g},s[e]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=x,p.group=g),e++,p}function a(u,f,d,m,x,g){let p=o(u,f,d,m,x,g);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):t.push(p)}function l(u,f,d,m,x,g){let p=o(u,f,d,m,x,g);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):t.unshift(p)}function c(u,f){t.length>1&&t.sort(u||uv),n.length>1&&n.sort(f||Gf),i.length>1&&i.sort(f||Gf)}function h(){for(let u=e,f=s.length;u<f;u++){let d=s[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:h,sort:c}}function dv(){let s=new WeakMap;function e(n,i){let r=s.get(n),o;return r===void 0?(o=new Wf,s.set(n,[o])):i>=r.length?(o=new Wf,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function fv(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new w,color:new Ie};break;case"SpotLight":t={position:new w,direction:new w,color:new Ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new w,color:new Ie,distance:0,decay:0};break;case"HemisphereLight":t={direction:new w,skyColor:new Ie,groundColor:new Ie};break;case"RectAreaLight":t={color:new Ie,position:new w,halfWidth:new w,halfHeight:new w};break}return s[e.id]=t,t}}}function pv(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var mv=0;function gv(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function xv(s){let e=new fv,t=pv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new w);let i=new w,r=new He,o=new He;function a(c){let h=0,u=0,f=0;for(let _=0;_<9;_++)n.probe[_].set(0,0,0);let d=0,m=0,x=0,g=0,p=0,E=0,M=0,y=0,S=0,R=0,C=0;c.sort(gv);for(let _=0,v=c.length;_<v;_++){let A=c[_],U=A.color,k=A.intensity,F=A.distance,z=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)h+=U.r*k,u+=U.g*k,f+=U.b*k;else if(A.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(A.sh.coefficients[G],k);C++}else if(A.isDirectionalLight){let G=e.get(A);if(G.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let ie=A.shadow,j=t.get(A);j.shadowIntensity=ie.intensity,j.shadowBias=ie.bias,j.shadowNormalBias=ie.normalBias,j.shadowRadius=ie.radius,j.shadowMapSize=ie.mapSize,n.directionalShadow[d]=j,n.directionalShadowMap[d]=z,n.directionalShadowMatrix[d]=A.shadow.matrix,E++}n.directional[d]=G,d++}else if(A.isSpotLight){let G=e.get(A);G.position.setFromMatrixPosition(A.matrixWorld),G.color.copy(U).multiplyScalar(k),G.distance=F,G.coneCos=Math.cos(A.angle),G.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),G.decay=A.decay,n.spot[x]=G;let ie=A.shadow;if(A.map&&(n.spotLightMap[S]=A.map,S++,ie.updateMatrices(A),A.castShadow&&R++),n.spotLightMatrix[x]=ie.matrix,A.castShadow){let j=t.get(A);j.shadowIntensity=ie.intensity,j.shadowBias=ie.bias,j.shadowNormalBias=ie.normalBias,j.shadowRadius=ie.radius,j.shadowMapSize=ie.mapSize,n.spotShadow[x]=j,n.spotShadowMap[x]=z,y++}x++}else if(A.isRectAreaLight){let G=e.get(A);G.color.copy(U).multiplyScalar(k),G.halfWidth.set(A.width*.5,0,0),G.halfHeight.set(0,A.height*.5,0),n.rectArea[g]=G,g++}else if(A.isPointLight){let G=e.get(A);if(G.color.copy(A.color).multiplyScalar(A.intensity),G.distance=A.distance,G.decay=A.decay,A.castShadow){let ie=A.shadow,j=t.get(A);j.shadowIntensity=ie.intensity,j.shadowBias=ie.bias,j.shadowNormalBias=ie.normalBias,j.shadowRadius=ie.radius,j.shadowMapSize=ie.mapSize,j.shadowCameraNear=ie.camera.near,j.shadowCameraFar=ie.camera.far,n.pointShadow[m]=j,n.pointShadowMap[m]=z,n.pointShadowMatrix[m]=A.shadow.matrix,M++}n.point[m]=G,m++}else if(A.isHemisphereLight){let G=e.get(A);G.skyColor.copy(A.color).multiplyScalar(k),G.groundColor.copy(A.groundColor).multiplyScalar(k),n.hemi[p]=G,p++}}g>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ne.LTC_FLOAT_1,n.rectAreaLTC2=Ne.LTC_FLOAT_2):(n.rectAreaLTC1=Ne.LTC_HALF_1,n.rectAreaLTC2=Ne.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let D=n.hash;(D.directionalLength!==d||D.pointLength!==m||D.spotLength!==x||D.rectAreaLength!==g||D.hemiLength!==p||D.numDirectionalShadows!==E||D.numPointShadows!==M||D.numSpotShadows!==y||D.numSpotMaps!==S||D.numLightProbes!==C)&&(n.directional.length=d,n.spot.length=x,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=y+S-R,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=C,D.directionalLength=d,D.pointLength=m,D.spotLength=x,D.rectAreaLength=g,D.hemiLength=p,D.numDirectionalShadows=E,D.numPointShadows=M,D.numSpotShadows=y,D.numSpotMaps=S,D.numLightProbes=C,n.version=mv++)}function l(c,h){let u=0,f=0,d=0,m=0,x=0,g=h.matrixWorldInverse;for(let p=0,E=c.length;p<E;p++){let M=c[p];if(M.isDirectionalLight){let y=n.directional[u];y.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(g),u++}else if(M.isSpotLight){let y=n.spot[d];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(g),d++}else if(M.isRectAreaLight){let y=n.rectArea[m];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(g),o.identity(),r.copy(M.matrixWorld),r.premultiply(g),o.extractRotation(r),y.halfWidth.set(M.width*.5,0,0),y.halfHeight.set(0,M.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),m++}else if(M.isPointLight){let y=n.point[f];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(g),f++}else if(M.isHemisphereLight){let y=n.hemi[x];y.direction.setFromMatrixPosition(M.matrixWorld),y.direction.transformDirection(g),x++}}}return{setup:a,setupView:l,state:n}}function Xf(s){let e=new xv(s),t=[],n=[];function i(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function yv(s){let e=new WeakMap;function t(i,r=0){let o=e.get(i),a;return o===void 0?(a=new Xf(s),e.set(i,[a])):r>=o.length?(a=new Xf(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var vv=`void main() {
  gl_Position = vec4( position, 1.0 );
}`,_v=`uniform sampler2D shadow_pass;
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
}`;function Mv(s,e,t){let n=new Tr,i=new Me,r=new Me,o=new lt,a=new qa({depthPacking:cf}),l=new Ya,c={},h=t.maxTextureSize,u={[Hn]:Wt,[Wt]:Hn,[vt]:vt},f=new ct({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Me},radius:{value:4}},vertexShader:vv,fragmentShader:_v}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let m=new bt;m.setAttribute("position",new nt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new je(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=uh;let p=this.type;this.render=function(R,C,D){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||R.length===0)return;let _=s.getRenderTarget(),v=s.getActiveCubeFace(),A=s.getActiveMipmapLevel(),U=s.state;U.setBlending(mt),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let k=p!==Ti&&this.type===Ti,F=p===Ti&&this.type!==Ti;for(let z=0,G=R.length;z<G;z++){let ie=R[z],j=ie.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",ie,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;i.copy(j.mapSize);let oe=j.getFrameExtents();if(i.multiply(oe),r.copy(j.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/oe.x),i.x=r.x*oe.x,j.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/oe.y),i.y=r.y*oe.y,j.mapSize.y=r.y)),j.map===null||k===!0||F===!0){let pe=this.type!==Ti?{minFilter:xt,magFilter:xt}:{};j.map!==null&&j.map.dispose(),j.map=new Nt(i.x,i.y,pe),j.map.texture.name=ie.name+".shadowMap",j.camera.updateProjectionMatrix()}s.setRenderTarget(j.map),s.clear();let te=j.getViewportCount();for(let pe=0;pe<te;pe++){let Ce=j.getViewport(pe);o.set(r.x*Ce.x,r.y*Ce.y,r.x*Ce.z,r.y*Ce.w),U.viewport(o),j.updateMatrices(ie,pe),n=j.getFrustum(),y(C,D,j.camera,ie,this.type)}j.isPointLightShadow!==!0&&this.type===Ti&&E(j,D),j.needsUpdate=!1}p=this.type,g.needsUpdate=!1,s.setRenderTarget(_,v,A)};function E(R,C){let D=e.update(x);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,d.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Nt(i.x,i.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,s.setRenderTarget(R.mapPass),s.clear(),s.renderBufferDirect(C,null,D,f,x,null),d.uniforms.shadow_pass.value=R.mapPass.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,s.setRenderTarget(R.map),s.clear(),s.renderBufferDirect(C,null,D,d,x,null)}function M(R,C,D,_){let v=null,A=D.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(A!==void 0)v=A;else if(v=D.isPointLight===!0?l:a,s.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let U=v.uuid,k=C.uuid,F=c[U];F===void 0&&(F={},c[U]=F);let z=F[k];z===void 0&&(z=v.clone(),F[k]=z,C.addEventListener("dispose",S)),v=z}if(v.visible=C.visible,v.wireframe=C.wireframe,_===Ti?v.side=C.shadowSide!==null?C.shadowSide:C.side:v.side=C.shadowSide!==null?C.shadowSide:u[C.side],v.alphaMap=C.alphaMap,v.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,v.map=C.map,v.clipShadows=C.clipShadows,v.clippingPlanes=C.clippingPlanes,v.clipIntersection=C.clipIntersection,v.displacementMap=C.displacementMap,v.displacementScale=C.displacementScale,v.displacementBias=C.displacementBias,v.wireframeLinewidth=C.wireframeLinewidth,v.linewidth=C.linewidth,D.isPointLight===!0&&v.isMeshDistanceMaterial===!0){let U=s.properties.get(v);U.light=D}return v}function y(R,C,D,_,v){if(R.visible===!1)return;if(R.layers.test(C.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&v===Ti)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,R.matrixWorld);let k=e.update(R),F=R.material;if(Array.isArray(F)){let z=k.groups;for(let G=0,ie=z.length;G<ie;G++){let j=z[G],oe=F[j.materialIndex];if(oe&&oe.visible){let te=M(R,oe,_,v);R.onBeforeShadow(s,R,C,D,k,te,j),s.renderBufferDirect(D,null,k,te,R,j),R.onAfterShadow(s,R,C,D,k,te,j)}}}else if(F.visible){let z=M(R,F,_,v);R.onBeforeShadow(s,R,C,D,k,z,null),s.renderBufferDirect(D,null,k,z,R,null),R.onAfterShadow(s,R,C,D,k,z,null)}}let U=R.children;for(let k=0,F=U.length;k<F;k++)y(U[k],C,D,_,v)}function S(R){R.target.removeEventListener("dispose",S);for(let D in c){let _=c[D],v=R.target.uuid;v in _&&(_[v].dispose(),delete _[v])}}}var Sv={[nl]:il,[sl]:al,[rl]:ll,[Ds]:ol,[il]:nl,[al]:sl,[ll]:rl,[ol]:Ds};function bv(s,e){function t(){let B=!1,ye=new lt,L=null,ue=new lt(0,0,0,0);return{setMask:function(ee){L!==ee&&!B&&(s.colorMask(ee,ee,ee,ee),L=ee)},setLocked:function(ee){B=ee},setClear:function(ee,re,Ee,Xe,yt){yt===!0&&(ee*=Xe,re*=Xe,Ee*=Xe),ye.set(ee,re,Ee,Xe),ue.equals(ye)===!1&&(s.clearColor(ee,re,Ee,Xe),ue.copy(ye))},reset:function(){B=!1,L=null,ue.set(-1,0,0,0)}}}function n(){let B=!1,ye=!1,L=null,ue=null,ee=null;return{setReversed:function(re){if(ye!==re){let Ee=e.get("EXT_clip_control");re?Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.ZERO_TO_ONE_EXT):Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.NEGATIVE_ONE_TO_ONE_EXT),ye=re;let Xe=ee;ee=null,this.setClear(Xe)}},getReversed:function(){return ye},setTest:function(re){re?ae(s.DEPTH_TEST):_e(s.DEPTH_TEST)},setMask:function(re){L!==re&&!B&&(s.depthMask(re),L=re)},setFunc:function(re){if(ye&&(re=Sv[re]),ue!==re){switch(re){case nl:s.depthFunc(s.NEVER);break;case il:s.depthFunc(s.ALWAYS);break;case sl:s.depthFunc(s.LESS);break;case Ds:s.depthFunc(s.LEQUAL);break;case rl:s.depthFunc(s.EQUAL);break;case ol:s.depthFunc(s.GEQUAL);break;case al:s.depthFunc(s.GREATER);break;case ll:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ue=re}},setLocked:function(re){B=re},setClear:function(re){ee!==re&&(ye&&(re=1-re),s.clearDepth(re),ee=re)},reset:function(){B=!1,L=null,ue=null,ee=null,ye=!1}}}function i(){let B=!1,ye=null,L=null,ue=null,ee=null,re=null,Ee=null,Xe=null,yt=null;return{setTest:function(ht){B||(ht?ae(s.STENCIL_TEST):_e(s.STENCIL_TEST))},setMask:function(ht){ye!==ht&&!B&&(s.stencilMask(ht),ye=ht)},setFunc:function(ht,Tt,Kt){(L!==ht||ue!==Tt||ee!==Kt)&&(s.stencilFunc(ht,Tt,Kt),L=ht,ue=Tt,ee=Kt)},setOp:function(ht,Tt,Kt){(re!==ht||Ee!==Tt||Xe!==Kt)&&(s.stencilOp(ht,Tt,Kt),re=ht,Ee=Tt,Xe=Kt)},setLocked:function(ht){B=ht},setClear:function(ht){yt!==ht&&(s.clearStencil(ht),yt=ht)},reset:function(){B=!1,ye=null,L=null,ue=null,ee=null,re=null,Ee=null,Xe=null,yt=null}}}let r=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap,h={},u={},f=new WeakMap,d=[],m=null,x=!1,g=null,p=null,E=null,M=null,y=null,S=null,R=null,C=new Ie(0,0,0),D=0,_=!1,v=null,A=null,U=null,k=null,F=null,z=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,ie=0,j=s.getParameter(s.VERSION);j.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(j)[1]),G=ie>=1):j.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),G=ie>=2);let oe=null,te={},pe=s.getParameter(s.SCISSOR_BOX),Ce=s.getParameter(s.VIEWPORT),Ae=new lt().fromArray(pe),Ue=new lt().fromArray(Ce);function Be(B,ye,L,ue){let ee=new Uint8Array(4),re=s.createTexture();s.bindTexture(B,re),s.texParameteri(B,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(B,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ee=0;Ee<L;Ee++)B===s.TEXTURE_3D||B===s.TEXTURE_2D_ARRAY?s.texImage3D(ye,0,s.RGBA,1,1,ue,0,s.RGBA,s.UNSIGNED_BYTE,ee):s.texImage2D(ye+Ee,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ee);return re}let se={};se[s.TEXTURE_2D]=Be(s.TEXTURE_2D,s.TEXTURE_2D,1),se[s.TEXTURE_CUBE_MAP]=Be(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),se[s.TEXTURE_2D_ARRAY]=Be(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),se[s.TEXTURE_3D]=Be(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ae(s.DEPTH_TEST),o.setFunc(Ds),ze(!1),Re(hh),ae(s.CULL_FACE),st(mt);function ae(B){h[B]!==!0&&(s.enable(B),h[B]=!0)}function _e(B){h[B]!==!1&&(s.disable(B),h[B]=!1)}function De(B,ye){return u[B]!==ye?(s.bindFramebuffer(B,ye),u[B]=ye,B===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=ye),B===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=ye),!0):!1}function Le(B,ye){let L=d,ue=!1;if(B){L=f.get(ye),L===void 0&&(L=[],f.set(ye,L));let ee=B.textures;if(L.length!==ee.length||L[0]!==s.COLOR_ATTACHMENT0){for(let re=0,Ee=ee.length;re<Ee;re++)L[re]=s.COLOR_ATTACHMENT0+re;L.length=ee.length,ue=!0}}else L[0]!==s.BACK&&(L[0]=s.BACK,ue=!0);ue&&s.drawBuffers(L)}function Ze(B){return m!==B?(s.useProgram(B),m=B,!0):!1}let Ve={[cn]:s.FUNC_ADD,[Gd]:s.FUNC_SUBTRACT,[Wd]:s.FUNC_REVERSE_SUBTRACT};Ve[Xd]=s.MIN,Ve[qd]=s.MAX;let N={[Hs]:s.ZERO,[Yd]:s.ONE,[jd]:s.SRC_COLOR,[Bi]:s.SRC_ALPHA,[$d]:s.SRC_ALPHA_SATURATE,[zo]:s.DST_COLOR,[Bo]:s.DST_ALPHA,[Zd]:s.ONE_MINUS_SRC_COLOR,[zi]:s.ONE_MINUS_SRC_ALPHA,[Jd]:s.ONE_MINUS_DST_COLOR,[Kd]:s.ONE_MINUS_DST_ALPHA,[Qd]:s.CONSTANT_COLOR,[ef]:s.ONE_MINUS_CONSTANT_COLOR,[tf]:s.CONSTANT_ALPHA,[nf]:s.ONE_MINUS_CONSTANT_ALPHA};function st(B,ye,L,ue,ee,re,Ee,Xe,yt,ht){if(B===mt){x===!0&&(_e(s.BLEND),x=!1);return}if(x===!1&&(ae(s.BLEND),x=!0),B!==Cr){if(B!==g||ht!==_){if((p!==cn||y!==cn)&&(s.blendEquation(s.FUNC_ADD),p=cn,y=cn),ht)switch(B){case hi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ks:s.blendFunc(s.ONE,s.ONE);break;case dh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case fh:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case hi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ks:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case dh:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case fh:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}E=null,M=null,S=null,R=null,C.set(0,0,0),D=0,g=B,_=ht}return}ee=ee||ye,re=re||L,Ee=Ee||ue,(ye!==p||ee!==y)&&(s.blendEquationSeparate(Ve[ye],Ve[ee]),p=ye,y=ee),(L!==E||ue!==M||re!==S||Ee!==R)&&(s.blendFuncSeparate(N[L],N[ue],N[re],N[Ee]),E=L,M=ue,S=re,R=Ee),(Xe.equals(C)===!1||yt!==D)&&(s.blendColor(Xe.r,Xe.g,Xe.b,yt),C.copy(Xe),D=yt),g=B,_=!1}function We(B,ye){B.side===vt?_e(s.CULL_FACE):ae(s.CULL_FACE);let L=B.side===Wt;ye&&(L=!L),ze(L),B.blending===hi&&B.transparent===!1?st(mt):st(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),r.setMask(B.colorWrite);let ue=B.stencilWrite;a.setTest(ue),ue&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),X(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?ae(s.SAMPLE_ALPHA_TO_COVERAGE):_e(s.SAMPLE_ALPHA_TO_COVERAGE)}function ze(B){v!==B&&(B?s.frontFace(s.CW):s.frontFace(s.CCW),v=B)}function Re(B){B!==Hd?(ae(s.CULL_FACE),B!==A&&(B===hh?s.cullFace(s.BACK):B===Vd?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):_e(s.CULL_FACE),A=B}function q(B){B!==U&&(G&&s.lineWidth(B),U=B)}function X(B,ye,L){B?(ae(s.POLYGON_OFFSET_FILL),(k!==ye||F!==L)&&(s.polygonOffset(ye,L),k=ye,F=L)):_e(s.POLYGON_OFFSET_FILL)}function ge(B){B?ae(s.SCISSOR_TEST):_e(s.SCISSOR_TEST)}function Oe(B){B===void 0&&(B=s.TEXTURE0+z-1),oe!==B&&(s.activeTexture(B),oe=B)}function Fe(B,ye,L){L===void 0&&(oe===null?L=s.TEXTURE0+z-1:L=oe);let ue=te[L];ue===void 0&&(ue={type:void 0,texture:void 0},te[L]=ue),(ue.type!==B||ue.texture!==ye)&&(oe!==L&&(s.activeTexture(L),oe=L),s.bindTexture(B,ye||se[B]),ue.type=B,ue.texture=ye)}function I(){let B=te[oe];B!==void 0&&B.type!==void 0&&(s.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function b(){try{s.compressedTexImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Y(){try{s.compressedTexImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ne(){try{s.texSubImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function me(){try{s.texSubImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Q(){try{s.compressedTexSubImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function V(){try{s.compressedTexSubImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function W(){try{s.texStorage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function le(){try{s.texStorage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function fe(){try{s.texImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Z(){try{s.texImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ce(B){Ae.equals(B)===!1&&(s.scissor(B.x,B.y,B.z,B.w),Ae.copy(B))}function be(B){Ue.equals(B)===!1&&(s.viewport(B.x,B.y,B.z,B.w),Ue.copy(B))}function Se(B,ye){let L=c.get(ye);L===void 0&&(L=new WeakMap,c.set(ye,L));let ue=L.get(B);ue===void 0&&(ue=s.getUniformBlockIndex(ye,B.name),L.set(B,ue))}function xe(B,ye){let ue=c.get(ye).get(B);l.get(ye)!==ue&&(s.uniformBlockBinding(ye,ue,B.__bindingPointIndex),l.set(ye,ue))}function Te(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},oe=null,te={},u={},f=new WeakMap,d=[],m=null,x=!1,g=null,p=null,E=null,M=null,y=null,S=null,R=null,C=new Ie(0,0,0),D=0,_=!1,v=null,A=null,U=null,k=null,F=null,Ae.set(0,0,s.canvas.width,s.canvas.height),Ue.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ae,disable:_e,bindFramebuffer:De,drawBuffers:Le,useProgram:Ze,setBlending:st,setMaterial:We,setFlipSided:ze,setCullFace:Re,setLineWidth:q,setPolygonOffset:X,setScissorTest:ge,activeTexture:Oe,bindTexture:Fe,unbindTexture:I,compressedTexImage2D:b,compressedTexImage3D:Y,texImage2D:fe,texImage3D:Z,updateUBOMapping:Se,uniformBlockBinding:xe,texStorage2D:W,texStorage3D:le,texSubImage2D:ne,texSubImage3D:me,compressedTexSubImage2D:Q,compressedTexSubImage3D:V,scissor:ce,viewport:be,reset:Te}}function Ev(s,e,t,n,i,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Me,h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(I,b){return d?new OffscreenCanvas(I,b):yr("canvas")}function x(I,b,Y){let ne=1,me=Fe(I);if((me.width>Y||me.height>Y)&&(ne=Y/Math.max(me.width,me.height)),ne<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let Q=Math.floor(ne*me.width),V=Math.floor(ne*me.height);u===void 0&&(u=m(Q,V));let W=b?m(Q,V):u;return W.width=Q,W.height=V,W.getContext("2d").drawImage(I,0,0,Q,V),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+me.width+"x"+me.height+") to ("+Q+"x"+V+")."),W}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+me.width+"x"+me.height+")."),I;return I}function g(I){return I.generateMipmaps}function p(I){s.generateMipmap(I)}function E(I){return I.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?s.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function M(I,b,Y,ne,me=!1){if(I!==null){if(s[I]!==void 0)return s[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let Q=b;if(b===s.RED&&(Y===s.FLOAT&&(Q=s.R32F),Y===s.HALF_FLOAT&&(Q=s.R16F),Y===s.UNSIGNED_BYTE&&(Q=s.R8)),b===s.RED_INTEGER&&(Y===s.UNSIGNED_BYTE&&(Q=s.R8UI),Y===s.UNSIGNED_SHORT&&(Q=s.R16UI),Y===s.UNSIGNED_INT&&(Q=s.R32UI),Y===s.BYTE&&(Q=s.R8I),Y===s.SHORT&&(Q=s.R16I),Y===s.INT&&(Q=s.R32I)),b===s.RG&&(Y===s.FLOAT&&(Q=s.RG32F),Y===s.HALF_FLOAT&&(Q=s.RG16F),Y===s.UNSIGNED_BYTE&&(Q=s.RG8)),b===s.RG_INTEGER&&(Y===s.UNSIGNED_BYTE&&(Q=s.RG8UI),Y===s.UNSIGNED_SHORT&&(Q=s.RG16UI),Y===s.UNSIGNED_INT&&(Q=s.RG32UI),Y===s.BYTE&&(Q=s.RG8I),Y===s.SHORT&&(Q=s.RG16I),Y===s.INT&&(Q=s.RG32I)),b===s.RGB_INTEGER&&(Y===s.UNSIGNED_BYTE&&(Q=s.RGB8UI),Y===s.UNSIGNED_SHORT&&(Q=s.RGB16UI),Y===s.UNSIGNED_INT&&(Q=s.RGB32UI),Y===s.BYTE&&(Q=s.RGB8I),Y===s.SHORT&&(Q=s.RGB16I),Y===s.INT&&(Q=s.RGB32I)),b===s.RGBA_INTEGER&&(Y===s.UNSIGNED_BYTE&&(Q=s.RGBA8UI),Y===s.UNSIGNED_SHORT&&(Q=s.RGBA16UI),Y===s.UNSIGNED_INT&&(Q=s.RGBA32UI),Y===s.BYTE&&(Q=s.RGBA8I),Y===s.SHORT&&(Q=s.RGBA16I),Y===s.INT&&(Q=s.RGBA32I)),b===s.RGB&&(Y===s.UNSIGNED_INT_5_9_9_9_REV&&(Q=s.RGB9_E5),Y===s.UNSIGNED_INT_10F_11F_11F_REV&&(Q=s.R11F_G11F_B10F)),b===s.RGBA){let V=me?ro:at.getTransfer(ne);Y===s.FLOAT&&(Q=s.RGBA32F),Y===s.HALF_FLOAT&&(Q=s.RGBA16F),Y===s.UNSIGNED_BYTE&&(Q=V===At?s.SRGB8_ALPHA8:s.RGBA8),Y===s.UNSIGNED_SHORT_4_4_4_4&&(Q=s.RGBA4),Y===s.UNSIGNED_SHORT_5_5_5_1&&(Q=s.RGB5_A1)}return(Q===s.R16F||Q===s.R32F||Q===s.RG16F||Q===s.RG32F||Q===s.RGBA16F||Q===s.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function y(I,b){let Y;return I?b===null||b===ys||b===vs?Y=s.DEPTH24_STENCIL8:b===ei?Y=s.DEPTH32F_STENCIL8:b===xs&&(Y=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===ys||b===vs?Y=s.DEPTH_COMPONENT24:b===ei?Y=s.DEPTH_COMPONENT32F:b===xs&&(Y=s.DEPTH_COMPONENT16),Y}function S(I,b){return g(I)===!0||I.isFramebufferTexture&&I.minFilter!==xt&&I.minFilter!==$t?Math.log2(Math.max(b.width,b.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?b.mipmaps.length:1}function R(I){let b=I.target;b.removeEventListener("dispose",R),D(b),b.isVideoTexture&&h.delete(b)}function C(I){let b=I.target;b.removeEventListener("dispose",C),v(b)}function D(I){let b=n.get(I);if(b.__webglInit===void 0)return;let Y=I.source,ne=f.get(Y);if(ne){let me=ne[b.__cacheKey];me.usedTimes--,me.usedTimes===0&&_(I),Object.keys(ne).length===0&&f.delete(Y)}n.remove(I)}function _(I){let b=n.get(I);s.deleteTexture(b.__webglTexture);let Y=I.source,ne=f.get(Y);delete ne[b.__cacheKey],o.memory.textures--}function v(I){let b=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(b.__webglFramebuffer[ne]))for(let me=0;me<b.__webglFramebuffer[ne].length;me++)s.deleteFramebuffer(b.__webglFramebuffer[ne][me]);else s.deleteFramebuffer(b.__webglFramebuffer[ne]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[ne])}else{if(Array.isArray(b.__webglFramebuffer))for(let ne=0;ne<b.__webglFramebuffer.length;ne++)s.deleteFramebuffer(b.__webglFramebuffer[ne]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let ne=0;ne<b.__webglColorRenderbuffer.length;ne++)b.__webglColorRenderbuffer[ne]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[ne]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let Y=I.textures;for(let ne=0,me=Y.length;ne<me;ne++){let Q=n.get(Y[ne]);Q.__webglTexture&&(s.deleteTexture(Q.__webglTexture),o.memory.textures--),n.remove(Y[ne])}n.remove(I)}let A=0;function U(){A=0}function k(){let I=A;return I>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+i.maxTextures),A+=1,I}function F(I){let b=[];return b.push(I.wrapS),b.push(I.wrapT),b.push(I.wrapR||0),b.push(I.magFilter),b.push(I.minFilter),b.push(I.anisotropy),b.push(I.internalFormat),b.push(I.format),b.push(I.type),b.push(I.generateMipmaps),b.push(I.premultiplyAlpha),b.push(I.flipY),b.push(I.unpackAlignment),b.push(I.colorSpace),b.join()}function z(I,b){let Y=n.get(I);if(I.isVideoTexture&&ge(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&Y.__version!==I.version){let ne=I.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{se(Y,I,b);return}}else I.isExternalTexture&&(Y.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,Y.__webglTexture,s.TEXTURE0+b)}function G(I,b){let Y=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&Y.__version!==I.version){se(Y,I,b);return}t.bindTexture(s.TEXTURE_2D_ARRAY,Y.__webglTexture,s.TEXTURE0+b)}function ie(I,b){let Y=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&Y.__version!==I.version){se(Y,I,b);return}t.bindTexture(s.TEXTURE_3D,Y.__webglTexture,s.TEXTURE0+b)}function j(I,b){let Y=n.get(I);if(I.version>0&&Y.__version!==I.version){ae(Y,I,b);return}t.bindTexture(s.TEXTURE_CUBE_MAP,Y.__webglTexture,s.TEXTURE0+b)}let oe={[hn]:s.REPEAT,[Kn]:s.CLAMP_TO_EDGE,[as]:s.MIRRORED_REPEAT},te={[xt]:s.NEAREST,[Pr]:s.NEAREST_MIPMAP_NEAREST,[Ji]:s.NEAREST_MIPMAP_LINEAR,[$t]:s.LINEAR,[gs]:s.LINEAR_MIPMAP_NEAREST,[pn]:s.LINEAR_MIPMAP_LINEAR},pe={[uf]:s.NEVER,[xf]:s.ALWAYS,[df]:s.LESS,[Th]:s.LEQUAL,[ff]:s.EQUAL,[gf]:s.GEQUAL,[pf]:s.GREATER,[mf]:s.NOTEQUAL};function Ce(I,b){if(b.type===ei&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===$t||b.magFilter===gs||b.magFilter===Ji||b.magFilter===pn||b.minFilter===$t||b.minFilter===gs||b.minFilter===Ji||b.minFilter===pn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(I,s.TEXTURE_WRAP_S,oe[b.wrapS]),s.texParameteri(I,s.TEXTURE_WRAP_T,oe[b.wrapT]),(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)&&s.texParameteri(I,s.TEXTURE_WRAP_R,oe[b.wrapR]),s.texParameteri(I,s.TEXTURE_MAG_FILTER,te[b.magFilter]),s.texParameteri(I,s.TEXTURE_MIN_FILTER,te[b.minFilter]),b.compareFunction&&(s.texParameteri(I,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(I,s.TEXTURE_COMPARE_FUNC,pe[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===xt||b.minFilter!==Ji&&b.minFilter!==pn||b.type===ei&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let Y=e.get("EXT_texture_filter_anisotropic");s.texParameterf(I,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Ae(I,b){let Y=!1;I.__webglInit===void 0&&(I.__webglInit=!0,b.addEventListener("dispose",R));let ne=b.source,me=f.get(ne);me===void 0&&(me={},f.set(ne,me));let Q=F(b);if(Q!==I.__cacheKey){me[Q]===void 0&&(me[Q]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),me[Q].usedTimes++;let V=me[I.__cacheKey];V!==void 0&&(me[I.__cacheKey].usedTimes--,V.usedTimes===0&&_(b)),I.__cacheKey=Q,I.__webglTexture=me[Q].texture}return Y}function Ue(I,b,Y){return Math.floor(Math.floor(I/Y)/b)}function Be(I,b,Y,ne){let Q=I.updateRanges;if(Q.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,b.width,b.height,Y,ne,b.data);else{Q.sort((Z,ce)=>Z.start-ce.start);let V=0;for(let Z=1;Z<Q.length;Z++){let ce=Q[V],be=Q[Z],Se=ce.start+ce.count,xe=Ue(be.start,b.width,4),Te=Ue(ce.start,b.width,4);be.start<=Se+1&&xe===Te&&Ue(be.start+be.count-1,b.width,4)===xe?ce.count=Math.max(ce.count,be.start+be.count-ce.start):(++V,Q[V]=be)}Q.length=V+1;let W=s.getParameter(s.UNPACK_ROW_LENGTH),le=s.getParameter(s.UNPACK_SKIP_PIXELS),fe=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,b.width);for(let Z=0,ce=Q.length;Z<ce;Z++){let be=Q[Z],Se=Math.floor(be.start/4),xe=Math.ceil(be.count/4),Te=Se%b.width,B=Math.floor(Se/b.width),ye=xe,L=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,Te),s.pixelStorei(s.UNPACK_SKIP_ROWS,B),t.texSubImage2D(s.TEXTURE_2D,0,Te,B,ye,L,Y,ne,b.data)}I.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,W),s.pixelStorei(s.UNPACK_SKIP_PIXELS,le),s.pixelStorei(s.UNPACK_SKIP_ROWS,fe)}}function se(I,b,Y){let ne=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ne=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ne=s.TEXTURE_3D);let me=Ae(I,b),Q=b.source;t.bindTexture(ne,I.__webglTexture,s.TEXTURE0+Y);let V=n.get(Q);if(Q.version!==V.__version||me===!0){t.activeTexture(s.TEXTURE0+Y);let W=at.getPrimaries(at.workingColorSpace),le=b.colorSpace===pi?null:at.getPrimaries(b.colorSpace),fe=b.colorSpace===pi||W===le?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);let Z=x(b.image,!1,i.maxTextureSize);Z=Oe(b,Z);let ce=r.convert(b.format,b.colorSpace),be=r.convert(b.type),Se=M(b.internalFormat,ce,be,b.colorSpace,b.isVideoTexture);Ce(ne,b);let xe,Te=b.mipmaps,B=b.isVideoTexture!==!0,ye=V.__version===void 0||me===!0,L=Q.dataReady,ue=S(b,Z);if(b.isDepthTexture)Se=y(b.format===_s,b.type),ye&&(B?t.texStorage2D(s.TEXTURE_2D,1,Se,Z.width,Z.height):t.texImage2D(s.TEXTURE_2D,0,Se,Z.width,Z.height,0,ce,be,null));else if(b.isDataTexture)if(Te.length>0){B&&ye&&t.texStorage2D(s.TEXTURE_2D,ue,Se,Te[0].width,Te[0].height);for(let ee=0,re=Te.length;ee<re;ee++)xe=Te[ee],B?L&&t.texSubImage2D(s.TEXTURE_2D,ee,0,0,xe.width,xe.height,ce,be,xe.data):t.texImage2D(s.TEXTURE_2D,ee,Se,xe.width,xe.height,0,ce,be,xe.data);b.generateMipmaps=!1}else B?(ye&&t.texStorage2D(s.TEXTURE_2D,ue,Se,Z.width,Z.height),L&&Be(b,Z,ce,be)):t.texImage2D(s.TEXTURE_2D,0,Se,Z.width,Z.height,0,ce,be,Z.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){B&&ye&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ue,Se,Te[0].width,Te[0].height,Z.depth);for(let ee=0,re=Te.length;ee<re;ee++)if(xe=Te[ee],b.format!==nn)if(ce!==null)if(B){if(L)if(b.layerUpdates.size>0){let Ee=Nh(xe.width,xe.height,b.format,b.type);for(let Xe of b.layerUpdates){let yt=xe.data.subarray(Xe*Ee/xe.data.BYTES_PER_ELEMENT,(Xe+1)*Ee/xe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ee,0,0,Xe,xe.width,xe.height,1,ce,yt)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ee,0,0,0,xe.width,xe.height,Z.depth,ce,xe.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ee,Se,xe.width,xe.height,Z.depth,0,xe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else B?L&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ee,0,0,0,xe.width,xe.height,Z.depth,ce,be,xe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ee,Se,xe.width,xe.height,Z.depth,0,ce,be,xe.data)}else{B&&ye&&t.texStorage2D(s.TEXTURE_2D,ue,Se,Te[0].width,Te[0].height);for(let ee=0,re=Te.length;ee<re;ee++)xe=Te[ee],b.format!==nn?ce!==null?B?L&&t.compressedTexSubImage2D(s.TEXTURE_2D,ee,0,0,xe.width,xe.height,ce,xe.data):t.compressedTexImage2D(s.TEXTURE_2D,ee,Se,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):B?L&&t.texSubImage2D(s.TEXTURE_2D,ee,0,0,xe.width,xe.height,ce,be,xe.data):t.texImage2D(s.TEXTURE_2D,ee,Se,xe.width,xe.height,0,ce,be,xe.data)}else if(b.isDataArrayTexture)if(B){if(ye&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ue,Se,Z.width,Z.height,Z.depth),L)if(b.layerUpdates.size>0){let ee=Nh(Z.width,Z.height,b.format,b.type);for(let re of b.layerUpdates){let Ee=Z.data.subarray(re*ee/Z.data.BYTES_PER_ELEMENT,(re+1)*ee/Z.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,re,Z.width,Z.height,1,ce,be,Ee)}b.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,ce,be,Z.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Se,Z.width,Z.height,Z.depth,0,ce,be,Z.data);else if(b.isData3DTexture)B?(ye&&t.texStorage3D(s.TEXTURE_3D,ue,Se,Z.width,Z.height,Z.depth),L&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,ce,be,Z.data)):t.texImage3D(s.TEXTURE_3D,0,Se,Z.width,Z.height,Z.depth,0,ce,be,Z.data);else if(b.isFramebufferTexture){if(ye)if(B)t.texStorage2D(s.TEXTURE_2D,ue,Se,Z.width,Z.height);else{let ee=Z.width,re=Z.height;for(let Ee=0;Ee<ue;Ee++)t.texImage2D(s.TEXTURE_2D,Ee,Se,ee,re,0,ce,be,null),ee>>=1,re>>=1}}else if(Te.length>0){if(B&&ye){let ee=Fe(Te[0]);t.texStorage2D(s.TEXTURE_2D,ue,Se,ee.width,ee.height)}for(let ee=0,re=Te.length;ee<re;ee++)xe=Te[ee],B?L&&t.texSubImage2D(s.TEXTURE_2D,ee,0,0,ce,be,xe):t.texImage2D(s.TEXTURE_2D,ee,Se,ce,be,xe);b.generateMipmaps=!1}else if(B){if(ye){let ee=Fe(Z);t.texStorage2D(s.TEXTURE_2D,ue,Se,ee.width,ee.height)}L&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ce,be,Z)}else t.texImage2D(s.TEXTURE_2D,0,Se,ce,be,Z);g(b)&&p(ne),V.__version=Q.version,b.onUpdate&&b.onUpdate(b)}I.__version=b.version}function ae(I,b,Y){if(b.image.length!==6)return;let ne=Ae(I,b),me=b.source;t.bindTexture(s.TEXTURE_CUBE_MAP,I.__webglTexture,s.TEXTURE0+Y);let Q=n.get(me);if(me.version!==Q.__version||ne===!0){t.activeTexture(s.TEXTURE0+Y);let V=at.getPrimaries(at.workingColorSpace),W=b.colorSpace===pi?null:at.getPrimaries(b.colorSpace),le=b.colorSpace===pi||V===W?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,le);let fe=b.isCompressedTexture||b.image[0].isCompressedTexture,Z=b.image[0]&&b.image[0].isDataTexture,ce=[];for(let re=0;re<6;re++)!fe&&!Z?ce[re]=x(b.image[re],!0,i.maxCubemapSize):ce[re]=Z?b.image[re].image:b.image[re],ce[re]=Oe(b,ce[re]);let be=ce[0],Se=r.convert(b.format,b.colorSpace),xe=r.convert(b.type),Te=M(b.internalFormat,Se,xe,b.colorSpace),B=b.isVideoTexture!==!0,ye=Q.__version===void 0||ne===!0,L=me.dataReady,ue=S(b,be);Ce(s.TEXTURE_CUBE_MAP,b);let ee;if(fe){B&&ye&&t.texStorage2D(s.TEXTURE_CUBE_MAP,ue,Te,be.width,be.height);for(let re=0;re<6;re++){ee=ce[re].mipmaps;for(let Ee=0;Ee<ee.length;Ee++){let Xe=ee[Ee];b.format!==nn?Se!==null?B?L&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ee,0,0,Xe.width,Xe.height,Se,Xe.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ee,Te,Xe.width,Xe.height,0,Xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?L&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ee,0,0,Xe.width,Xe.height,Se,xe,Xe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ee,Te,Xe.width,Xe.height,0,Se,xe,Xe.data)}}}else{if(ee=b.mipmaps,B&&ye){ee.length>0&&ue++;let re=Fe(ce[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,ue,Te,re.width,re.height)}for(let re=0;re<6;re++)if(Z){B?L&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,ce[re].width,ce[re].height,Se,xe,ce[re].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,Te,ce[re].width,ce[re].height,0,Se,xe,ce[re].data);for(let Ee=0;Ee<ee.length;Ee++){let yt=ee[Ee].image[re].image;B?L&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ee+1,0,0,yt.width,yt.height,Se,xe,yt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ee+1,Te,yt.width,yt.height,0,Se,xe,yt.data)}}else{B?L&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Se,xe,ce[re]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,Te,Se,xe,ce[re]);for(let Ee=0;Ee<ee.length;Ee++){let Xe=ee[Ee];B?L&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ee+1,0,0,Se,xe,Xe.image[re]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ee+1,Te,Se,xe,Xe.image[re])}}}g(b)&&p(s.TEXTURE_CUBE_MAP),Q.__version=me.version,b.onUpdate&&b.onUpdate(b)}I.__version=b.version}function _e(I,b,Y,ne,me,Q){let V=r.convert(Y.format,Y.colorSpace),W=r.convert(Y.type),le=M(Y.internalFormat,V,W,Y.colorSpace),fe=n.get(b),Z=n.get(Y);if(Z.__renderTarget=b,!fe.__hasExternalTextures){let ce=Math.max(1,b.width>>Q),be=Math.max(1,b.height>>Q);me===s.TEXTURE_3D||me===s.TEXTURE_2D_ARRAY?t.texImage3D(me,Q,le,ce,be,b.depth,0,V,W,null):t.texImage2D(me,Q,le,ce,be,0,V,W,null)}t.bindFramebuffer(s.FRAMEBUFFER,I),X(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ne,me,Z.__webglTexture,0,q(b)):(me===s.TEXTURE_2D||me>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&me<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ne,me,Z.__webglTexture,Q),t.bindFramebuffer(s.FRAMEBUFFER,null)}function De(I,b,Y){if(s.bindRenderbuffer(s.RENDERBUFFER,I),b.depthBuffer){let ne=b.depthTexture,me=ne&&ne.isDepthTexture?ne.type:null,Q=y(b.stencilBuffer,me),V=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,W=q(b);X(b)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,W,Q,b.width,b.height):Y?s.renderbufferStorageMultisample(s.RENDERBUFFER,W,Q,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,Q,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,V,s.RENDERBUFFER,I)}else{let ne=b.textures;for(let me=0;me<ne.length;me++){let Q=ne[me],V=r.convert(Q.format,Q.colorSpace),W=r.convert(Q.type),le=M(Q.internalFormat,V,W,Q.colorSpace),fe=q(b);Y&&X(b)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,fe,le,b.width,b.height):X(b)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,fe,le,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,le,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Le(I,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,I),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let ne=n.get(b.depthTexture);ne.__renderTarget=b,(!ne.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),z(b.depthTexture,0);let me=ne.__webglTexture,Q=q(b);if(b.depthTexture.format===xr)X(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,me,0,Q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,me,0);else if(b.depthTexture.format===_s)X(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,me,0,Q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,me,0);else throw new Error("Unknown depthTexture format")}function Ze(I){let b=n.get(I),Y=I.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==I.depthTexture){let ne=I.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),ne){let me=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,ne.removeEventListener("dispose",me)};ne.addEventListener("dispose",me),b.__depthDisposeCallback=me}b.__boundDepthTexture=ne}if(I.depthTexture&&!b.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");let ne=I.texture.mipmaps;ne&&ne.length>0?Le(b.__webglFramebuffer[0],I):Le(b.__webglFramebuffer,I)}else if(Y){b.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)if(t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[ne]),b.__webglDepthbuffer[ne]===void 0)b.__webglDepthbuffer[ne]=s.createRenderbuffer(),De(b.__webglDepthbuffer[ne],I,!1);else{let me=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Q=b.__webglDepthbuffer[ne];s.bindRenderbuffer(s.RENDERBUFFER,Q),s.framebufferRenderbuffer(s.FRAMEBUFFER,me,s.RENDERBUFFER,Q)}}else{let ne=I.texture.mipmaps;if(ne&&ne.length>0?t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),De(b.__webglDepthbuffer,I,!1);else{let me=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Q=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Q),s.framebufferRenderbuffer(s.FRAMEBUFFER,me,s.RENDERBUFFER,Q)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ve(I,b,Y){let ne=n.get(I);b!==void 0&&_e(ne.__webglFramebuffer,I,I.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Y!==void 0&&Ze(I)}function N(I){let b=I.texture,Y=n.get(I),ne=n.get(b);I.addEventListener("dispose",C);let me=I.textures,Q=I.isWebGLCubeRenderTarget===!0,V=me.length>1;if(V||(ne.__webglTexture===void 0&&(ne.__webglTexture=s.createTexture()),ne.__version=b.version,o.memory.textures++),Q){Y.__webglFramebuffer=[];for(let W=0;W<6;W++)if(b.mipmaps&&b.mipmaps.length>0){Y.__webglFramebuffer[W]=[];for(let le=0;le<b.mipmaps.length;le++)Y.__webglFramebuffer[W][le]=s.createFramebuffer()}else Y.__webglFramebuffer[W]=s.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){Y.__webglFramebuffer=[];for(let W=0;W<b.mipmaps.length;W++)Y.__webglFramebuffer[W]=s.createFramebuffer()}else Y.__webglFramebuffer=s.createFramebuffer();if(V)for(let W=0,le=me.length;W<le;W++){let fe=n.get(me[W]);fe.__webglTexture===void 0&&(fe.__webglTexture=s.createTexture(),o.memory.textures++)}if(I.samples>0&&X(I)===!1){Y.__webglMultisampledFramebuffer=s.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let W=0;W<me.length;W++){let le=me[W];Y.__webglColorRenderbuffer[W]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Y.__webglColorRenderbuffer[W]);let fe=r.convert(le.format,le.colorSpace),Z=r.convert(le.type),ce=M(le.internalFormat,fe,Z,le.colorSpace,I.isXRRenderTarget===!0),be=q(I);s.renderbufferStorageMultisample(s.RENDERBUFFER,be,ce,I.width,I.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+W,s.RENDERBUFFER,Y.__webglColorRenderbuffer[W])}s.bindRenderbuffer(s.RENDERBUFFER,null),I.depthBuffer&&(Y.__webglDepthRenderbuffer=s.createRenderbuffer(),De(Y.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Q){t.bindTexture(s.TEXTURE_CUBE_MAP,ne.__webglTexture),Ce(s.TEXTURE_CUBE_MAP,b);for(let W=0;W<6;W++)if(b.mipmaps&&b.mipmaps.length>0)for(let le=0;le<b.mipmaps.length;le++)_e(Y.__webglFramebuffer[W][le],I,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+W,le);else _e(Y.__webglFramebuffer[W],I,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+W,0);g(b)&&p(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(V){for(let W=0,le=me.length;W<le;W++){let fe=me[W],Z=n.get(fe),ce=s.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(ce=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ce,Z.__webglTexture),Ce(ce,fe),_e(Y.__webglFramebuffer,I,fe,s.COLOR_ATTACHMENT0+W,ce,0),g(fe)&&p(ce)}t.unbindTexture()}else{let W=s.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(W=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(W,ne.__webglTexture),Ce(W,b),b.mipmaps&&b.mipmaps.length>0)for(let le=0;le<b.mipmaps.length;le++)_e(Y.__webglFramebuffer[le],I,b,s.COLOR_ATTACHMENT0,W,le);else _e(Y.__webglFramebuffer,I,b,s.COLOR_ATTACHMENT0,W,0);g(b)&&p(W),t.unbindTexture()}I.depthBuffer&&Ze(I)}function st(I){let b=I.textures;for(let Y=0,ne=b.length;Y<ne;Y++){let me=b[Y];if(g(me)){let Q=E(I),V=n.get(me).__webglTexture;t.bindTexture(Q,V),p(Q),t.unbindTexture()}}}let We=[],ze=[];function Re(I){if(I.samples>0){if(X(I)===!1){let b=I.textures,Y=I.width,ne=I.height,me=s.COLOR_BUFFER_BIT,Q=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,V=n.get(I),W=b.length>1;if(W)for(let fe=0;fe<b.length;fe++)t.bindFramebuffer(s.FRAMEBUFFER,V.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+fe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,V.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+fe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,V.__webglMultisampledFramebuffer);let le=I.texture.mipmaps;le&&le.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,V.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,V.__webglFramebuffer);for(let fe=0;fe<b.length;fe++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(me|=s.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(me|=s.STENCIL_BUFFER_BIT)),W){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,V.__webglColorRenderbuffer[fe]);let Z=n.get(b[fe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Z,0)}s.blitFramebuffer(0,0,Y,ne,0,0,Y,ne,me,s.NEAREST),l===!0&&(We.length=0,ze.length=0,We.push(s.COLOR_ATTACHMENT0+fe),I.depthBuffer&&I.resolveDepthBuffer===!1&&(We.push(Q),ze.push(Q),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,ze)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,We))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),W)for(let fe=0;fe<b.length;fe++){t.bindFramebuffer(s.FRAMEBUFFER,V.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+fe,s.RENDERBUFFER,V.__webglColorRenderbuffer[fe]);let Z=n.get(b[fe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,V.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+fe,s.TEXTURE_2D,Z,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,V.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&l){let b=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function q(I){return Math.min(i.maxSamples,I.samples)}function X(I){let b=n.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function ge(I){let b=o.render.frame;h.get(I)!==b&&(h.set(I,b),I.update())}function Oe(I,b){let Y=I.colorSpace,ne=I.format,me=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||Y!==fn&&Y!==pi&&(at.getTransfer(Y)===At?(ne!==nn||me!==Vn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),b}function Fe(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=U,this.setTexture2D=z,this.setTexture2DArray=G,this.setTexture3D=ie,this.setTextureCube=j,this.rebindTextures=Ve,this.setupRenderTarget=N,this.updateRenderTargetMipmap=st,this.updateMultisampleRenderTarget=Re,this.setupDepthRenderbuffer=Ze,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=X}function wv(s,e){function t(n,i=pi){let r,o=at.getTransfer(i);if(n===Vn)return s.UNSIGNED_BYTE;if(n===vl)return s.UNSIGNED_SHORT_4_4_4_4;if(n===_l)return s.UNSIGNED_SHORT_5_5_5_1;if(n===xh)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===yh)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===mh)return s.BYTE;if(n===gh)return s.SHORT;if(n===xs)return s.UNSIGNED_SHORT;if(n===yl)return s.INT;if(n===ys)return s.UNSIGNED_INT;if(n===ei)return s.FLOAT;if(n===Xt)return s.HALF_FLOAT;if(n===vh)return s.ALPHA;if(n===_h)return s.RGB;if(n===nn)return s.RGBA;if(n===xr)return s.DEPTH_COMPONENT;if(n===_s)return s.DEPTH_STENCIL;if(n===Ml)return s.RED;if(n===Sl)return s.RED_INTEGER;if(n===Mh)return s.RG;if(n===bl)return s.RG_INTEGER;if(n===El)return s.RGBA_INTEGER;if(n===Ho||n===Vo||n===Go||n===Wo)if(o===At)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ho)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Vo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Go)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Wo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ho)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Vo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Go)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Wo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===wl||n===Tl||n===Al||n===Rl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===wl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Tl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Al)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Rl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Cl||n===Pl||n===Il)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Cl||n===Pl)return o===At?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Il)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Dl||n===Ll||n===Nl||n===Ul||n===Ol||n===Fl||n===Bl||n===zl||n===kl||n===Hl||n===Vl||n===Gl||n===Wl||n===Xl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Dl)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ll)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Nl)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ul)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ol)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Fl)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Bl)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===zl)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===kl)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Hl)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Vl)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Gl)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Wl)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Xl)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ql||n===Yl||n===jl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===ql)return o===At?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Yl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===jl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Zl||n===Kl||n===Jl||n===$l)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Zl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Kl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Jl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===$l)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===vs?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}var Tv=`
void main() {

  gl_Position = vec4( position, 1.0 );

}`,Av=`
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

}`,Yh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new xo(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new ct({vertexShader:Tv,fragmentShader:Av,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new je(new tn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},jh=class extends vi{constructor(e,t){super();let n=this,i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,m=null,x=typeof XRWebGLBinding<"u",g=new Yh,p={},E=t.getContextAttributes(),M=null,y=null,S=[],R=[],C=new Me,D=null,_=new Bt;_.viewport=new lt;let v=new Bt;v.viewport=new lt;let A=[_,v],U=new el,k=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(se){let ae=S[se];return ae===void 0&&(ae=new Er,S[se]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(se){let ae=S[se];return ae===void 0&&(ae=new Er,S[se]=ae),ae.getGripSpace()},this.getHand=function(se){let ae=S[se];return ae===void 0&&(ae=new Er,S[se]=ae),ae.getHandSpace()};function z(se){let ae=R.indexOf(se.inputSource);if(ae===-1)return;let _e=S[ae];_e!==void 0&&(_e.update(se.inputSource,se.frame,c||o),_e.dispatchEvent({type:se.type,data:se.inputSource}))}function G(){i.removeEventListener("select",z),i.removeEventListener("selectstart",z),i.removeEventListener("selectend",z),i.removeEventListener("squeeze",z),i.removeEventListener("squeezestart",z),i.removeEventListener("squeezeend",z),i.removeEventListener("end",G),i.removeEventListener("inputsourceschange",ie);for(let se=0;se<S.length;se++){let ae=R[se];ae!==null&&(R[se]=null,S[se].disconnect(ae))}k=null,F=null,g.reset();for(let se in p)delete p[se];e.setRenderTarget(M),d=null,f=null,u=null,i=null,y=null,Be.stop(),n.isPresenting=!1,e.setPixelRatio(D),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(se){r=se,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(se){a=se,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(se){c=se},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(i,t)),u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(se){if(i=se,i!==null){if(M=e.getRenderTarget(),i.addEventListener("select",z),i.addEventListener("selectstart",z),i.addEventListener("selectend",z),i.addEventListener("squeeze",z),i.addEventListener("squeezestart",z),i.addEventListener("squeezeend",z),i.addEventListener("end",G),i.addEventListener("inputsourceschange",ie),E.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(C),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,De=null,Le=null;E.depth&&(Le=E.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=E.stencil?_s:xr,De=E.stencil?vs:ys);let Ze={colorFormat:t.RGBA8,depthFormat:Le,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(Ze),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new Nt(f.textureWidth,f.textureHeight,{format:nn,type:Vn,depthTexture:new Gi(f.textureWidth,f.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:E.stencil,colorSpace:e.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let _e={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,t,_e),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new Nt(d.framebufferWidth,d.framebufferHeight,{format:nn,type:Vn,colorSpace:e.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Be.setContext(i),Be.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function ie(se){for(let ae=0;ae<se.removed.length;ae++){let _e=se.removed[ae],De=R.indexOf(_e);De>=0&&(R[De]=null,S[De].disconnect(_e))}for(let ae=0;ae<se.added.length;ae++){let _e=se.added[ae],De=R.indexOf(_e);if(De===-1){for(let Ze=0;Ze<S.length;Ze++)if(Ze>=R.length){R.push(_e),De=Ze;break}else if(R[Ze]===null){R[Ze]=_e,De=Ze;break}if(De===-1)break}let Le=S[De];Le&&Le.connect(_e)}}let j=new w,oe=new w;function te(se,ae,_e){j.setFromMatrixPosition(ae.matrixWorld),oe.setFromMatrixPosition(_e.matrixWorld);let De=j.distanceTo(oe),Le=ae.projectionMatrix.elements,Ze=_e.projectionMatrix.elements,Ve=Le[14]/(Le[10]-1),N=Le[14]/(Le[10]+1),st=(Le[9]+1)/Le[5],We=(Le[9]-1)/Le[5],ze=(Le[8]-1)/Le[0],Re=(Ze[8]+1)/Ze[0],q=Ve*ze,X=Ve*Re,ge=De/(-ze+Re),Oe=ge*-ze;if(ae.matrixWorld.decompose(se.position,se.quaternion,se.scale),se.translateX(Oe),se.translateZ(ge),se.matrixWorld.compose(se.position,se.quaternion,se.scale),se.matrixWorldInverse.copy(se.matrixWorld).invert(),Le[10]===-1)se.projectionMatrix.copy(ae.projectionMatrix),se.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{let Fe=Ve+ge,I=N+ge,b=q-Oe,Y=X+(De-Oe),ne=st*N/I*Fe,me=We*N/I*Fe;se.projectionMatrix.makePerspective(b,Y,ne,me,Fe,I),se.projectionMatrixInverse.copy(se.projectionMatrix).invert()}}function pe(se,ae){ae===null?se.matrixWorld.copy(se.matrix):se.matrixWorld.multiplyMatrices(ae.matrixWorld,se.matrix),se.matrixWorldInverse.copy(se.matrixWorld).invert()}this.updateCamera=function(se){if(i===null)return;let ae=se.near,_e=se.far;g.texture!==null&&(g.depthNear>0&&(ae=g.depthNear),g.depthFar>0&&(_e=g.depthFar)),U.near=v.near=_.near=ae,U.far=v.far=_.far=_e,(k!==U.near||F!==U.far)&&(i.updateRenderState({depthNear:U.near,depthFar:U.far}),k=U.near,F=U.far),U.layers.mask=se.layers.mask|6,_.layers.mask=U.layers.mask&3,v.layers.mask=U.layers.mask&5;let De=se.parent,Le=U.cameras;pe(U,De);for(let Ze=0;Ze<Le.length;Ze++)pe(Le[Ze],De);Le.length===2?te(U,_,v):U.projectionMatrix.copy(_.projectionMatrix),Ce(se,U,De)};function Ce(se,ae,_e){_e===null?se.matrix.copy(ae.matrixWorld):(se.matrix.copy(_e.matrixWorld),se.matrix.invert(),se.matrix.multiply(ae.matrixWorld)),se.matrix.decompose(se.position,se.quaternion,se.scale),se.updateMatrixWorld(!0),se.projectionMatrix.copy(ae.projectionMatrix),se.projectionMatrixInverse.copy(ae.projectionMatrixInverse),se.isPerspectiveCamera&&(se.fov=Ls*2*Math.atan(1/se.projectionMatrix.elements[5]),se.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(se){l=se,f!==null&&(f.fixedFoveation=se),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=se)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(U)},this.getCameraTexture=function(se){return p[se]};let Ae=null;function Ue(se,ae){if(h=ae.getViewerPose(c||o),m=ae,h!==null){let _e=h.views;d!==null&&(e.setRenderTargetFramebuffer(y,d.framebuffer),e.setRenderTarget(y));let De=!1;_e.length!==U.cameras.length&&(U.cameras.length=0,De=!0);for(let N=0;N<_e.length;N++){let st=_e[N],We=null;if(d!==null)We=d.getViewport(st);else{let Re=u.getViewSubImage(f,st);We=Re.viewport,N===0&&(e.setRenderTargetTextures(y,Re.colorTexture,Re.depthStencilTexture),e.setRenderTarget(y))}let ze=A[N];ze===void 0&&(ze=new Bt,ze.layers.enable(N),ze.viewport=new lt,A[N]=ze),ze.matrix.fromArray(st.transform.matrix),ze.matrix.decompose(ze.position,ze.quaternion,ze.scale),ze.projectionMatrix.fromArray(st.projectionMatrix),ze.projectionMatrixInverse.copy(ze.projectionMatrix).invert(),ze.viewport.set(We.x,We.y,We.width,We.height),N===0&&(U.matrix.copy(ze.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),De===!0&&U.cameras.push(ze)}let Le=i.enabledFeatures;if(Le&&Le.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){u=n.getBinding();let N=u.getDepthInformation(_e[0]);N&&N.isValid&&N.texture&&g.init(N,i.renderState)}if(Le&&Le.includes("camera-access")&&x){e.state.unbindTexture(),u=n.getBinding();for(let N=0;N<_e.length;N++){let st=_e[N].camera;if(st){let We=p[st];We||(We=new xo,p[st]=We);let ze=u.getCameraImage(st);We.sourceTexture=ze}}}}for(let _e=0;_e<S.length;_e++){let De=R[_e],Le=S[_e];De!==null&&Le!==void 0&&Le.update(De,ae,c||o)}Ae&&Ae(se,ae),ae.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ae}),m=null}let Be=new qf;Be.setAnimationLoop(Ue),this.setAnimationLoop=function(se){Ae=se},this.dispose=function(){}}},qs=new Dn,Rv=new He;function Cv(s,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Ph(s)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,E,M,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),f(g,p),p.isMeshPhysicalMaterial&&d(g,p,y)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),x(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,E,M):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Wt&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Wt&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let E=e.get(p),M=E.envMap,y=E.envMapRotation;M&&(g.envMap.value=M,qs.copy(y),qs.x*=-1,qs.y*=-1,qs.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(qs.y*=-1,qs.z*=-1),g.envMapRotation.value.setFromMatrix4(Rv.makeRotationFromEuler(qs)),g.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,E,M){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*E,g.scale.value=M*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,E){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Wt&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=E.texture,g.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){let E=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(E.matrixWorld),g.nearDistance.value=E.shadow.camera.near,g.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Pv(s,e,t,n){let i={},r={},o=[],a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,M){let y=M.program;n.uniformBlockBinding(E,y)}function c(E,M){let y=i[E.id];y===void 0&&(m(E),y=h(E),i[E.id]=y,E.addEventListener("dispose",g));let S=M.program;n.updateUBOMapping(E,S);let R=e.render.frame;r[E.id]!==R&&(f(E),r[E.id]=R)}function h(E){let M=u();E.__bindingPointIndex=M;let y=s.createBuffer(),S=E.__size,R=E.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,S,R),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,M,y),y}function u(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){let M=i[E.id],y=E.uniforms,S=E.__cache;s.bindBuffer(s.UNIFORM_BUFFER,M);for(let R=0,C=y.length;R<C;R++){let D=Array.isArray(y[R])?y[R]:[y[R]];for(let _=0,v=D.length;_<v;_++){let A=D[_];if(d(A,R,_,S)===!0){let U=A.__offset,k=Array.isArray(A.value)?A.value:[A.value],F=0;for(let z=0;z<k.length;z++){let G=k[z],ie=x(G);typeof G=="number"||typeof G=="boolean"?(A.__data[0]=G,s.bufferSubData(s.UNIFORM_BUFFER,U+F,A.__data)):G.isMatrix3?(A.__data[0]=G.elements[0],A.__data[1]=G.elements[1],A.__data[2]=G.elements[2],A.__data[3]=0,A.__data[4]=G.elements[3],A.__data[5]=G.elements[4],A.__data[6]=G.elements[5],A.__data[7]=0,A.__data[8]=G.elements[6],A.__data[9]=G.elements[7],A.__data[10]=G.elements[8],A.__data[11]=0):(G.toArray(A.__data,F),F+=ie.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,U,A.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(E,M,y,S){let R=E.value,C=M+"_"+y;if(S[C]===void 0)return typeof R=="number"||typeof R=="boolean"?S[C]=R:S[C]=R.clone(),!0;{let D=S[C];if(typeof R=="number"||typeof R=="boolean"){if(D!==R)return S[C]=R,!0}else if(D.equals(R)===!1)return D.copy(R),!0}return!1}function m(E){let M=E.uniforms,y=0,S=16;for(let C=0,D=M.length;C<D;C++){let _=Array.isArray(M[C])?M[C]:[M[C]];for(let v=0,A=_.length;v<A;v++){let U=_[v],k=Array.isArray(U.value)?U.value:[U.value];for(let F=0,z=k.length;F<z;F++){let G=k[F],ie=x(G),j=y%S,oe=j%ie.boundary,te=j+oe;y+=oe,te!==0&&S-te<ie.storage&&(y+=S-te),U.__data=new Float32Array(ie.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=y,y+=ie.storage}}}let R=y%S;return R>0&&(y+=S-R),E.__size=y,E.__cache={},this}function x(E){let M={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(M.boundary=4,M.storage=4):E.isVector2?(M.boundary=8,M.storage=8):E.isVector3||E.isColor?(M.boundary=16,M.storage=12):E.isVector4?(M.boundary=16,M.storage=16):E.isMatrix3?(M.boundary=48,M.storage=48):E.isMatrix4?(M.boundary=64,M.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),M}function g(E){let M=E.target;M.removeEventListener("dispose",g);let y=o.indexOf(M.__bindingPointIndex);o.splice(y,1),s.deleteBuffer(i[M.id]),delete i[M.id],delete r[M.id]}function p(){for(let E in i)s.deleteBuffer(i[E]);o=[],i={},r={}}return{bind:l,update:c,dispose:p}}var Ms=class{constructor(e={}){let{canvas:t=yf(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;let m=new Uint32Array(4),x=new Int32Array(4),g=null,p=null,E=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ki,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let y=this,S=!1;this._outputColorSpace=St;let R=0,C=0,D=null,_=-1,v=null,A=new lt,U=new lt,k=null,F=new Ie(0),z=0,G=t.width,ie=t.height,j=1,oe=null,te=null,pe=new lt(0,0,G,ie),Ce=new lt(0,0,G,ie),Ae=!1,Ue=new Tr,Be=!1,se=!1,ae=new He,_e=new w,De=new lt,Le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ze=!1;function Ve(){return D===null?j:1}let N=n;function st(P,K){return t.getContext(P,K)}try{let P={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",L,!1),t.addEventListener("webglcontextrestored",ue,!1),t.addEventListener("webglcontextcreationerror",ee,!1),N===null){let K="webgl2";if(N=st(K,P),N===null)throw st(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let We,ze,Re,q,X,ge,Oe,Fe,I,b,Y,ne,me,Q,V,W,le,fe,Z,ce,be,Se,xe,Te;function B(){We=new jx(N),We.init(),Se=new wv(N,We),ze=new Hx(N,We,e,Se),Re=new bv(N,We),ze.reversedDepthBuffer&&f&&Re.buffers.depth.setReversed(!0),q=new Jx(N),X=new hv,ge=new Ev(N,We,Re,X,ze,Se,q),Oe=new Gx(y),Fe=new Yx(y),I=new ig(N),xe=new zx(N,I),b=new Zx(N,I,q,xe),Y=new Qx(N,b,I,q),Z=new $x(N,ze,ge),W=new Vx(X),ne=new cv(y,Oe,Fe,We,ze,xe,W),me=new Cv(y,X),Q=new dv,V=new yv(We),fe=new Bx(y,Oe,Fe,Re,Y,d,l),le=new Mv(y,Y,ze),Te=new Pv(N,q,ze,Re),ce=new kx(N,We,q),be=new Kx(N,We,q),q.programs=ne.programs,y.capabilities=ze,y.extensions=We,y.properties=X,y.renderLists=Q,y.shadowMap=le,y.state=Re,y.info=q}B();let ye=new jh(y,N);this.xr=ye,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let P=We.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){let P=We.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(P){P!==void 0&&(j=P,this.setSize(G,ie,!1))},this.getSize=function(P){return P.set(G,ie)},this.setSize=function(P,K,he=!0){if(ye.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=P,ie=K,t.width=Math.floor(P*j),t.height=Math.floor(K*j),he===!0&&(t.style.width=P+"px",t.style.height=K+"px"),this.setViewport(0,0,P,K)},this.getDrawingBufferSize=function(P){return P.set(G*j,ie*j).floor()},this.setDrawingBufferSize=function(P,K,he){G=P,ie=K,j=he,t.width=Math.floor(P*he),t.height=Math.floor(K*he),this.setViewport(0,0,P,K)},this.getCurrentViewport=function(P){return P.copy(A)},this.getViewport=function(P){return P.copy(pe)},this.setViewport=function(P,K,he,de){P.isVector4?pe.set(P.x,P.y,P.z,P.w):pe.set(P,K,he,de),Re.viewport(A.copy(pe).multiplyScalar(j).round())},this.getScissor=function(P){return P.copy(Ce)},this.setScissor=function(P,K,he,de){P.isVector4?Ce.set(P.x,P.y,P.z,P.w):Ce.set(P,K,he,de),Re.scissor(U.copy(Ce).multiplyScalar(j).round())},this.getScissorTest=function(){return Ae},this.setScissorTest=function(P){Re.setScissorTest(Ae=P)},this.setOpaqueSort=function(P){oe=P},this.setTransparentSort=function(P){te=P},this.getClearColor=function(P){return P.copy(fe.getClearColor())},this.setClearColor=function(){fe.setClearColor(...arguments)},this.getClearAlpha=function(){return fe.getClearAlpha()},this.setClearAlpha=function(){fe.setClearAlpha(...arguments)},this.clear=function(P=!0,K=!0,he=!0){let de=0;if(P){let J=!1;if(D!==null){let we=D.texture.format;J=we===El||we===bl||we===Sl}if(J){let we=D.texture.type,ke=we===Vn||we===ys||we===xs||we===vs||we===vl||we===_l,qe=fe.getClearColor(),Ge=fe.getClearAlpha(),Je=qe.r,Qe=qe.g,Ye=qe.b;ke?(m[0]=Je,m[1]=Qe,m[2]=Ye,m[3]=Ge,N.clearBufferuiv(N.COLOR,0,m)):(x[0]=Je,x[1]=Qe,x[2]=Ye,x[3]=Ge,N.clearBufferiv(N.COLOR,0,x))}else de|=N.COLOR_BUFFER_BIT}K&&(de|=N.DEPTH_BUFFER_BIT),he&&(de|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(de)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",L,!1),t.removeEventListener("webglcontextrestored",ue,!1),t.removeEventListener("webglcontextcreationerror",ee,!1),fe.dispose(),Q.dispose(),V.dispose(),X.dispose(),Oe.dispose(),Fe.dispose(),Y.dispose(),xe.dispose(),Te.dispose(),ne.dispose(),ye.dispose(),ye.removeEventListener("sessionstart",Kt),ye.removeEventListener("sessionend",qn),bn.stop()};function L(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function ue(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;let P=q.autoReset,K=le.enabled,he=le.autoUpdate,de=le.needsUpdate,J=le.type;B(),q.autoReset=P,le.enabled=K,le.autoUpdate=he,le.needsUpdate=de,le.type=J}function ee(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function re(P){let K=P.target;K.removeEventListener("dispose",re),Ee(K)}function Ee(P){Xe(P),X.remove(P)}function Xe(P){let K=X.get(P).programs;K!==void 0&&(K.forEach(function(he){ne.releaseProgram(he)}),P.isShaderMaterial&&ne.releaseShaderCache(P))}this.renderBufferDirect=function(P,K,he,de,J,we){K===null&&(K=Le);let ke=J.isMesh&&J.matrixWorld.determinant()<0,qe=tt(P,K,he,de,J);Re.setMaterial(de,ke);let Ge=he.index,Je=1;if(de.wireframe===!0){if(Ge=b.getWireframeAttribute(he),Ge===void 0)return;Je=2}let Qe=he.drawRange,Ye=he.attributes.position,ft=Qe.start*Je,It=(Qe.start+Qe.count)*Je;we!==null&&(ft=Math.max(ft,we.start*Je),It=Math.min(It,(we.start+we.count)*Je)),Ge!==null?(ft=Math.max(ft,0),It=Math.min(It,Ge.count)):Ye!=null&&(ft=Math.max(ft,0),It=Math.min(It,Ye.count));let Vt=It-ft;if(Vt<0||Vt===1/0)return;xe.setup(J,de,qe,he,Ge);let Ft,Lt=ce;if(Ge!==null&&(Ft=I.get(Ge),Lt=be,Lt.setIndex(Ft)),J.isMesh)de.wireframe===!0?(Re.setLineWidth(de.wireframeLinewidth*Ve()),Lt.setMode(N.LINES)):Lt.setMode(N.TRIANGLES);else if(J.isLine){let Ke=de.linewidth;Ke===void 0&&(Ke=1),Re.setLineWidth(Ke*Ve()),J.isLineSegments?Lt.setMode(N.LINES):J.isLineLoop?Lt.setMode(N.LINE_LOOP):Lt.setMode(N.LINE_STRIP)}else J.isPoints?Lt.setMode(N.POINTS):J.isSprite&&Lt.setMode(N.TRIANGLES);if(J.isBatchedMesh)if(J._multiDrawInstances!==null)vr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Lt.renderMultiDrawInstances(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount,J._multiDrawInstances);else if(We.get("WEBGL_multi_draw"))Lt.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{let Ke=J._multiDrawStarts,kt=J._multiDrawCounts,Et=J._multiDrawCount,Fn=Ge?I.get(Ge).bytesPerElement:1,Qs=X.get(de).currentProgram.getUniforms();for(let Bn=0;Bn<Et;Bn++)Qs.setValue(N,"_gl_DrawID",Bn),Lt.render(Ke[Bn]/Fn,kt[Bn])}else if(J.isInstancedMesh)Lt.renderInstances(ft,Vt,J.count);else if(he.isInstancedBufferGeometry){let Ke=he._maxInstanceCount!==void 0?he._maxInstanceCount:1/0,kt=Math.min(he.instanceCount,Ke);Lt.renderInstances(ft,Vt,kt)}else Lt.render(ft,Vt)};function yt(P,K,he){P.transparent===!0&&P.side===vt&&P.forceSinglePass===!1?(P.side=Wt,P.needsUpdate=!0,$(P,K,he),P.side=Hn,P.needsUpdate=!0,$(P,K,he),P.side=vt):$(P,K,he)}this.compile=function(P,K,he=null){he===null&&(he=P),p=V.get(he),p.init(K),M.push(p),he.traverseVisible(function(J){J.isLight&&J.layers.test(K.layers)&&(p.pushLight(J),J.castShadow&&p.pushShadow(J))}),P!==he&&P.traverseVisible(function(J){J.isLight&&J.layers.test(K.layers)&&(p.pushLight(J),J.castShadow&&p.pushShadow(J))}),p.setupLights();let de=new Set;return P.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;let we=J.material;if(we)if(Array.isArray(we))for(let ke=0;ke<we.length;ke++){let qe=we[ke];yt(qe,he,J),de.add(qe)}else yt(we,he,J),de.add(we)}),p=M.pop(),de},this.compileAsync=function(P,K,he=null){let de=this.compile(P,K,he);return new Promise(J=>{function we(){if(de.forEach(function(ke){X.get(ke).currentProgram.isReady()&&de.delete(ke)}),de.size===0){J(P);return}setTimeout(we,10)}We.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let ht=null;function Tt(P){ht&&ht(P)}function Kt(){bn.stop()}function qn(){bn.start()}let bn=new qf;bn.setAnimationLoop(Tt),typeof self<"u"&&bn.setContext(self),this.setAnimationLoop=function(P){ht=P,ye.setAnimationLoop(P),P===null?bn.stop():bn.start()},ye.addEventListener("sessionstart",Kt),ye.addEventListener("sessionend",qn),this.render=function(P,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),ye.enabled===!0&&ye.isPresenting===!0&&(ye.cameraAutoUpdate===!0&&ye.updateCamera(K),K=ye.getCamera()),P.isScene===!0&&P.onBeforeRender(y,P,K,D),p=V.get(P,M.length),p.init(K),M.push(p),ae.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),Ue.setFromProjectionMatrix(ae,li,K.reversedDepth),se=this.localClippingEnabled,Be=W.init(this.clippingPlanes,se),g=Q.get(P,E.length),g.init(),E.push(g),ye.enabled===!0&&ye.isPresenting===!0){let we=y.xr.getDepthSensingMesh();we!==null&&Qi(we,K,-1/0,y.sortObjects)}Qi(P,K,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(oe,te),Ze=ye.enabled===!1||ye.isPresenting===!1||ye.hasDepthSensing()===!1,Ze&&fe.addToRenderList(g,P),this.info.render.frame++,Be===!0&&W.beginShadows();let he=p.state.shadowsArray;le.render(he,P,K),Be===!0&&W.endShadows(),this.info.autoReset===!0&&this.info.reset();let de=g.opaque,J=g.transmissive;if(p.setupLights(),K.isArrayCamera){let we=K.cameras;if(J.length>0)for(let ke=0,qe=we.length;ke<qe;ke++){let Ge=we[ke];T(de,J,P,Ge)}Ze&&fe.render(P);for(let ke=0,qe=we.length;ke<qe;ke++){let Ge=we[ke];es(g,P,Ge,Ge.viewport)}}else J.length>0&&T(de,J,P,K),Ze&&fe.render(P),es(g,P,K);D!==null&&C===0&&(ge.updateMultisampleRenderTarget(D),ge.updateRenderTargetMipmap(D)),P.isScene===!0&&P.onAfterRender(y,P,K),xe.resetDefaultState(),_=-1,v=null,M.pop(),M.length>0?(p=M[M.length-1],Be===!0&&W.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,E.pop(),E.length>0?g=E[E.length-1]:g=null};function Qi(P,K,he,de){if(P.visible===!1)return;if(P.layers.test(K.layers)){if(P.isGroup)he=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(K);else if(P.isLight)p.pushLight(P),P.castShadow&&p.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||Ue.intersectsSprite(P)){de&&De.setFromMatrixPosition(P.matrixWorld).applyMatrix4(ae);let ke=Y.update(P),qe=P.material;qe.visible&&g.push(P,ke,qe,he,De.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||Ue.intersectsObject(P))){let ke=Y.update(P),qe=P.material;if(de&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),De.copy(P.boundingSphere.center)):(ke.boundingSphere===null&&ke.computeBoundingSphere(),De.copy(ke.boundingSphere.center)),De.applyMatrix4(P.matrixWorld).applyMatrix4(ae)),Array.isArray(qe)){let Ge=ke.groups;for(let Je=0,Qe=Ge.length;Je<Qe;Je++){let Ye=Ge[Je],ft=qe[Ye.materialIndex];ft&&ft.visible&&g.push(P,ke,ft,he,De.z,Ye)}}else qe.visible&&g.push(P,ke,qe,he,De.z,null)}}let we=P.children;for(let ke=0,qe=we.length;ke<qe;ke++)Qi(we[ke],K,he,de)}function es(P,K,he,de){let J=P.opaque,we=P.transmissive,ke=P.transparent;p.setupLightsView(he),Be===!0&&W.setGlobalState(y.clippingPlanes,he),de&&Re.viewport(A.copy(de)),J.length>0&&O(J,K,he),we.length>0&&O(we,K,he),ke.length>0&&O(ke,K,he),Re.buffers.depth.setTest(!0),Re.buffers.depth.setMask(!0),Re.buffers.color.setMask(!0),Re.setPolygonOffset(!1)}function T(P,K,he,de){if((he.isScene===!0?he.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[de.id]===void 0&&(p.state.transmissionRenderTarget[de.id]=new Nt(1,1,{generateMipmaps:!0,type:We.has("EXT_color_buffer_half_float")||We.has("EXT_color_buffer_float")?Xt:Vn,minFilter:pn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:at.workingColorSpace}));let we=p.state.transmissionRenderTarget[de.id],ke=de.viewport||A;we.setSize(ke.z*y.transmissionResolutionScale,ke.w*y.transmissionResolutionScale);let qe=y.getRenderTarget(),Ge=y.getActiveCubeFace(),Je=y.getActiveMipmapLevel();y.setRenderTarget(we),y.getClearColor(F),z=y.getClearAlpha(),z<1&&y.setClearColor(16777215,.5),y.clear(),Ze&&fe.render(he);let Qe=y.toneMapping;y.toneMapping=Ki;let Ye=de.viewport;if(de.viewport!==void 0&&(de.viewport=void 0),p.setupLightsView(de),Be===!0&&W.setGlobalState(y.clippingPlanes,de),O(P,he,de),ge.updateMultisampleRenderTarget(we),ge.updateRenderTargetMipmap(we),We.has("WEBGL_multisampled_render_to_texture")===!1){let ft=!1;for(let It=0,Vt=K.length;It<Vt;It++){let Ft=K[It],Lt=Ft.object,Ke=Ft.geometry,kt=Ft.material,Et=Ft.group;if(kt.side===vt&&Lt.layers.test(de.layers)){let Fn=kt.side;kt.side=Wt,kt.needsUpdate=!0,H(Lt,he,de,Ke,kt,Et),kt.side=Fn,kt.needsUpdate=!0,ft=!0}}ft===!0&&(ge.updateMultisampleRenderTarget(we),ge.updateRenderTargetMipmap(we))}y.setRenderTarget(qe,Ge,Je),y.setClearColor(F,z),Ye!==void 0&&(de.viewport=Ye),y.toneMapping=Qe}function O(P,K,he){let de=K.isScene===!0?K.overrideMaterial:null;for(let J=0,we=P.length;J<we;J++){let ke=P[J],qe=ke.object,Ge=ke.geometry,Je=ke.group,Qe=ke.material;Qe.allowOverride===!0&&de!==null&&(Qe=de),qe.layers.test(he.layers)&&H(qe,K,he,Ge,Qe,Je)}}function H(P,K,he,de,J,we){P.onBeforeRender(y,K,he,de,J,we),P.modelViewMatrix.multiplyMatrices(he.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),J.onBeforeRender(y,K,he,de,P,we),J.transparent===!0&&J.side===vt&&J.forceSinglePass===!1?(J.side=Wt,J.needsUpdate=!0,y.renderBufferDirect(he,K,de,J,P,we),J.side=Hn,J.needsUpdate=!0,y.renderBufferDirect(he,K,de,J,P,we),J.side=vt):y.renderBufferDirect(he,K,de,J,P,we),P.onAfterRender(y,K,he,de,J,we)}function $(P,K,he){K.isScene!==!0&&(K=Le);let de=X.get(P),J=p.state.lights,we=p.state.shadowsArray,ke=J.state.version,qe=ne.getParameters(P,J.state,we,K,he),Ge=ne.getProgramCacheKey(qe),Je=de.programs;de.environment=P.isMeshStandardMaterial?K.environment:null,de.fog=K.fog,de.envMap=(P.isMeshStandardMaterial?Fe:Oe).get(P.envMap||de.environment),de.envMapRotation=de.environment!==null&&P.envMap===null?K.environmentRotation:P.envMapRotation,Je===void 0&&(P.addEventListener("dispose",re),Je=new Map,de.programs=Je);let Qe=Je.get(Ge);if(Qe!==void 0){if(de.currentProgram===Qe&&de.lightsStateVersion===ke)return Pe(P,qe),Qe}else qe.uniforms=ne.getUniforms(P),P.onBeforeCompile(qe,y),Qe=ne.acquireProgram(qe,Ge),Je.set(Ge,Qe),de.uniforms=qe.uniforms;let Ye=de.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Ye.clippingPlanes=W.uniform),Pe(P,qe),de.needsLights=Rt(P),de.lightsStateVersion=ke,de.needsLights&&(Ye.ambientLightColor.value=J.state.ambient,Ye.lightProbe.value=J.state.probe,Ye.directionalLights.value=J.state.directional,Ye.directionalLightShadows.value=J.state.directionalShadow,Ye.spotLights.value=J.state.spot,Ye.spotLightShadows.value=J.state.spotShadow,Ye.rectAreaLights.value=J.state.rectArea,Ye.ltc_1.value=J.state.rectAreaLTC1,Ye.ltc_2.value=J.state.rectAreaLTC2,Ye.pointLights.value=J.state.point,Ye.pointLightShadows.value=J.state.pointShadow,Ye.hemisphereLights.value=J.state.hemi,Ye.directionalShadowMap.value=J.state.directionalShadowMap,Ye.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Ye.spotShadowMap.value=J.state.spotShadowMap,Ye.spotLightMatrix.value=J.state.spotLightMatrix,Ye.spotLightMap.value=J.state.spotLightMap,Ye.pointShadowMap.value=J.state.pointShadowMap,Ye.pointShadowMatrix.value=J.state.pointShadowMatrix),de.currentProgram=Qe,de.uniformsList=null,Qe}function ve(P){if(P.uniformsList===null){let K=P.currentProgram.getUniforms();P.uniformsList=Nr.seqWithValue(K.seq,P.uniforms)}return P.uniformsList}function Pe(P,K){let he=X.get(P);he.outputColorSpace=K.outputColorSpace,he.batching=K.batching,he.batchingColor=K.batchingColor,he.instancing=K.instancing,he.instancingColor=K.instancingColor,he.instancingMorph=K.instancingMorph,he.skinning=K.skinning,he.morphTargets=K.morphTargets,he.morphNormals=K.morphNormals,he.morphColors=K.morphColors,he.morphTargetsCount=K.morphTargetsCount,he.numClippingPlanes=K.numClippingPlanes,he.numIntersection=K.numClipIntersection,he.vertexAlphas=K.vertexAlphas,he.vertexTangents=K.vertexTangents,he.toneMapping=K.toneMapping}function tt(P,K,he,de,J){K.isScene!==!0&&(K=Le),ge.resetTextureUnits();let we=K.fog,ke=de.isMeshStandardMaterial?K.environment:null,qe=D===null?y.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:fn,Ge=(de.isMeshStandardMaterial?Fe:Oe).get(de.envMap||ke),Je=de.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,Qe=!!he.attributes.tangent&&(!!de.normalMap||de.anisotropy>0),Ye=!!he.morphAttributes.position,ft=!!he.morphAttributes.normal,It=!!he.morphAttributes.color,Vt=Ki;de.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(Vt=y.toneMapping);let Ft=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,Lt=Ft!==void 0?Ft.length:0,Ke=X.get(de),kt=p.state.lights;if(Be===!0&&(se===!0||P!==v)){let En=P===v&&de.id===_;W.setState(de,P,En)}let Et=!1;de.version===Ke.__version?(Ke.needsLights&&Ke.lightsStateVersion!==kt.state.version||Ke.outputColorSpace!==qe||J.isBatchedMesh&&Ke.batching===!1||!J.isBatchedMesh&&Ke.batching===!0||J.isBatchedMesh&&Ke.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&Ke.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&Ke.instancing===!1||!J.isInstancedMesh&&Ke.instancing===!0||J.isSkinnedMesh&&Ke.skinning===!1||!J.isSkinnedMesh&&Ke.skinning===!0||J.isInstancedMesh&&Ke.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&Ke.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&Ke.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&Ke.instancingMorph===!1&&J.morphTexture!==null||Ke.envMap!==Ge||de.fog===!0&&Ke.fog!==we||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==W.numPlanes||Ke.numIntersection!==W.numIntersection)||Ke.vertexAlphas!==Je||Ke.vertexTangents!==Qe||Ke.morphTargets!==Ye||Ke.morphNormals!==ft||Ke.morphColors!==It||Ke.toneMapping!==Vt||Ke.morphTargetsCount!==Lt)&&(Et=!0):(Et=!0,Ke.__version=de.version);let Fn=Ke.currentProgram;Et===!0&&(Fn=$(de,K,J));let Qs=!1,Bn=!1,qr=!1,Ht=Fn.getUniforms(),Yn=Ke.uniforms;if(Re.useProgram(Fn.program)&&(Qs=!0,Bn=!0,qr=!0),de.id!==_&&(_=de.id,Bn=!0),Qs||v!==P){Re.buffers.depth.getReversed()&&P.reversedDepth!==!0&&(P._reversedDepth=!0,P.updateProjectionMatrix()),Ht.setValue(N,"projectionMatrix",P.projectionMatrix),Ht.setValue(N,"viewMatrix",P.matrixWorldInverse);let In=Ht.map.cameraPosition;In!==void 0&&In.setValue(N,_e.setFromMatrixPosition(P.matrixWorld)),ze.logarithmicDepthBuffer&&Ht.setValue(N,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(de.isMeshPhongMaterial||de.isMeshToonMaterial||de.isMeshLambertMaterial||de.isMeshBasicMaterial||de.isMeshStandardMaterial||de.isShaderMaterial)&&Ht.setValue(N,"isOrthographic",P.isOrthographicCamera===!0),v!==P&&(v=P,Bn=!0,qr=!0)}if(J.isSkinnedMesh){Ht.setOptional(N,J,"bindMatrix"),Ht.setOptional(N,J,"bindMatrixInverse");let En=J.skeleton;En&&(En.boneTexture===null&&En.computeBoneTexture(),Ht.setValue(N,"boneTexture",En.boneTexture,ge))}J.isBatchedMesh&&(Ht.setOptional(N,J,"batchingTexture"),Ht.setValue(N,"batchingTexture",J._matricesTexture,ge),Ht.setOptional(N,J,"batchingIdTexture"),Ht.setValue(N,"batchingIdTexture",J._indirectTexture,ge),Ht.setOptional(N,J,"batchingColorTexture"),J._colorsTexture!==null&&Ht.setValue(N,"batchingColorTexture",J._colorsTexture,ge));let jn=he.morphAttributes;if((jn.position!==void 0||jn.normal!==void 0||jn.color!==void 0)&&Z.update(J,he,Fn),(Bn||Ke.receiveShadow!==J.receiveShadow)&&(Ke.receiveShadow=J.receiveShadow,Ht.setValue(N,"receiveShadow",J.receiveShadow)),de.isMeshGouraudMaterial&&de.envMap!==null&&(Yn.envMap.value=Ge,Yn.flipEnvMap.value=Ge.isCubeTexture&&Ge.isRenderTargetTexture===!1?-1:1),de.isMeshStandardMaterial&&de.envMap===null&&K.environment!==null&&(Yn.envMapIntensity.value=K.environmentIntensity),Bn&&(Ht.setValue(N,"toneMappingExposure",y.toneMappingExposure),Ke.needsLights&&ot(Yn,qr),we&&de.fog===!0&&me.refreshFogUniforms(Yn,we),me.refreshMaterialUniforms(Yn,de,j,ie,p.state.transmissionRenderTarget[P.id]),Nr.upload(N,ve(Ke),Yn,ge)),de.isShaderMaterial&&de.uniformsNeedUpdate===!0&&(Nr.upload(N,ve(Ke),Yn,ge),de.uniformsNeedUpdate=!1),de.isSpriteMaterial&&Ht.setValue(N,"center",J.center),Ht.setValue(N,"modelViewMatrix",J.modelViewMatrix),Ht.setValue(N,"normalMatrix",J.normalMatrix),Ht.setValue(N,"modelMatrix",J.matrixWorld),de.isShaderMaterial||de.isRawShaderMaterial){let En=de.uniformsGroups;for(let In=0,Mc=En.length;In<Mc;In++){let Ts=En[In];Te.update(Ts,Fn),Te.bind(Ts,Fn)}}return Fn}function ot(P,K){P.ambientLightColor.needsUpdate=K,P.lightProbe.needsUpdate=K,P.directionalLights.needsUpdate=K,P.directionalLightShadows.needsUpdate=K,P.pointLights.needsUpdate=K,P.pointLightShadows.needsUpdate=K,P.spotLights.needsUpdate=K,P.spotLightShadows.needsUpdate=K,P.rectAreaLights.needsUpdate=K,P.hemisphereLights.needsUpdate=K}function Rt(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(P,K,he){let de=X.get(P);de.__autoAllocateDepthBuffer=P.resolveDepthBuffer===!1,de.__autoAllocateDepthBuffer===!1&&(de.__useRenderToTexture=!1),X.get(P.texture).__webglTexture=K,X.get(P.depthTexture).__webglTexture=de.__autoAllocateDepthBuffer?void 0:he,de.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(P,K){let he=X.get(P);he.__webglFramebuffer=K,he.__useDefaultFramebuffer=K===void 0};let Jt=N.createFramebuffer();this.setRenderTarget=function(P,K=0,he=0){D=P,R=K,C=he;let de=!0,J=null,we=!1,ke=!1;if(P){let Ge=X.get(P);if(Ge.__useDefaultFramebuffer!==void 0)Re.bindFramebuffer(N.FRAMEBUFFER,null),de=!1;else if(Ge.__webglFramebuffer===void 0)ge.setupRenderTarget(P);else if(Ge.__hasExternalTextures)ge.rebindTextures(P,X.get(P.texture).__webglTexture,X.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){let Ye=P.depthTexture;if(Ge.__boundDepthTexture!==Ye){if(Ye!==null&&X.has(Ye)&&(P.width!==Ye.image.width||P.height!==Ye.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ge.setupDepthRenderbuffer(P)}}let Je=P.texture;(Je.isData3DTexture||Je.isDataArrayTexture||Je.isCompressedArrayTexture)&&(ke=!0);let Qe=X.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(Qe[K])?J=Qe[K][he]:J=Qe[K],we=!0):P.samples>0&&ge.useMultisampledRTT(P)===!1?J=X.get(P).__webglMultisampledFramebuffer:Array.isArray(Qe)?J=Qe[he]:J=Qe,A.copy(P.viewport),U.copy(P.scissor),k=P.scissorTest}else A.copy(pe).multiplyScalar(j).floor(),U.copy(Ce).multiplyScalar(j).floor(),k=Ae;if(he!==0&&(J=Jt),Re.bindFramebuffer(N.FRAMEBUFFER,J)&&de&&Re.drawBuffers(P,J),Re.viewport(A),Re.scissor(U),Re.setScissorTest(k),we){let Ge=X.get(P.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ge.__webglTexture,he)}else if(ke){let Ge=K;for(let Je=0;Je<P.textures.length;Je++){let Qe=X.get(P.textures[Je]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+Je,Qe.__webglTexture,he,Ge)}}else if(P!==null&&he!==0){let Ge=X.get(P.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Ge.__webglTexture,he)}_=-1},this.readRenderTargetPixels=function(P,K,he,de,J,we,ke,qe=0){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=X.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&ke!==void 0&&(Ge=Ge[ke]),Ge){Re.bindFramebuffer(N.FRAMEBUFFER,Ge);try{let Je=P.textures[qe],Qe=Je.format,Ye=Je.type;if(!ze.textureFormatReadable(Qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ze.textureTypeReadable(Ye)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=P.width-de&&he>=0&&he<=P.height-J&&(P.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+qe),N.readPixels(K,he,de,J,Se.convert(Qe),Se.convert(Ye),we))}finally{let Je=D!==null?X.get(D).__webglFramebuffer:null;Re.bindFramebuffer(N.FRAMEBUFFER,Je)}}},this.readRenderTargetPixelsAsync=async function(P,K,he,de,J,we,ke,qe=0){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ge=X.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&ke!==void 0&&(Ge=Ge[ke]),Ge)if(K>=0&&K<=P.width-de&&he>=0&&he<=P.height-J){Re.bindFramebuffer(N.FRAMEBUFFER,Ge);let Je=P.textures[qe],Qe=Je.format,Ye=Je.type;if(!ze.textureFormatReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ze.textureTypeReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ft=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,ft),N.bufferData(N.PIXEL_PACK_BUFFER,we.byteLength,N.STREAM_READ),P.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+qe),N.readPixels(K,he,de,J,Se.convert(Qe),Se.convert(Ye),0);let It=D!==null?X.get(D).__webglFramebuffer:null;Re.bindFramebuffer(N.FRAMEBUFFER,It);let Vt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await vf(N,Vt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,ft),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,we),N.deleteBuffer(ft),N.deleteSync(Vt),we}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(P,K=null,he=0){let de=Math.pow(2,-he),J=Math.floor(P.image.width*de),we=Math.floor(P.image.height*de),ke=K!==null?K.x:0,qe=K!==null?K.y:0;ge.setTexture2D(P,0),N.copyTexSubImage2D(N.TEXTURE_2D,he,0,0,ke,qe,J,we),Re.unbindTexture()};let zt=N.createFramebuffer(),Pn=N.createFramebuffer();this.copyTextureToTexture=function(P,K,he=null,de=null,J=0,we=null){we===null&&(J!==0?(vr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),we=J,J=0):we=0);let ke,qe,Ge,Je,Qe,Ye,ft,It,Vt,Ft=P.isCompressedTexture?P.mipmaps[we]:P.image;if(he!==null)ke=he.max.x-he.min.x,qe=he.max.y-he.min.y,Ge=he.isBox3?he.max.z-he.min.z:1,Je=he.min.x,Qe=he.min.y,Ye=he.isBox3?he.min.z:0;else{let jn=Math.pow(2,-J);ke=Math.floor(Ft.width*jn),qe=Math.floor(Ft.height*jn),P.isDataArrayTexture?Ge=Ft.depth:P.isData3DTexture?Ge=Math.floor(Ft.depth*jn):Ge=1,Je=0,Qe=0,Ye=0}de!==null?(ft=de.x,It=de.y,Vt=de.z):(ft=0,It=0,Vt=0);let Lt=Se.convert(K.format),Ke=Se.convert(K.type),kt;K.isData3DTexture?(ge.setTexture3D(K,0),kt=N.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(ge.setTexture2DArray(K,0),kt=N.TEXTURE_2D_ARRAY):(ge.setTexture2D(K,0),kt=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,K.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,K.unpackAlignment);let Et=N.getParameter(N.UNPACK_ROW_LENGTH),Fn=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Qs=N.getParameter(N.UNPACK_SKIP_PIXELS),Bn=N.getParameter(N.UNPACK_SKIP_ROWS),qr=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,Ft.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Ft.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Je),N.pixelStorei(N.UNPACK_SKIP_ROWS,Qe),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ye);let Ht=P.isDataArrayTexture||P.isData3DTexture,Yn=K.isDataArrayTexture||K.isData3DTexture;if(P.isDepthTexture){let jn=X.get(P),En=X.get(K),In=X.get(jn.__renderTarget),Mc=X.get(En.__renderTarget);Re.bindFramebuffer(N.READ_FRAMEBUFFER,In.__webglFramebuffer),Re.bindFramebuffer(N.DRAW_FRAMEBUFFER,Mc.__webglFramebuffer);for(let Ts=0;Ts<Ge;Ts++)Ht&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,X.get(P).__webglTexture,J,Ye+Ts),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,X.get(K).__webglTexture,we,Vt+Ts)),N.blitFramebuffer(Je,Qe,ke,qe,ft,It,ke,qe,N.DEPTH_BUFFER_BIT,N.NEAREST);Re.bindFramebuffer(N.READ_FRAMEBUFFER,null),Re.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(J!==0||P.isRenderTargetTexture||X.has(P)){let jn=X.get(P),En=X.get(K);Re.bindFramebuffer(N.READ_FRAMEBUFFER,zt),Re.bindFramebuffer(N.DRAW_FRAMEBUFFER,Pn);for(let In=0;In<Ge;In++)Ht?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,jn.__webglTexture,J,Ye+In):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,jn.__webglTexture,J),Yn?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,En.__webglTexture,we,Vt+In):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,En.__webglTexture,we),J!==0?N.blitFramebuffer(Je,Qe,ke,qe,ft,It,ke,qe,N.COLOR_BUFFER_BIT,N.NEAREST):Yn?N.copyTexSubImage3D(kt,we,ft,It,Vt+In,Je,Qe,ke,qe):N.copyTexSubImage2D(kt,we,ft,It,Je,Qe,ke,qe);Re.bindFramebuffer(N.READ_FRAMEBUFFER,null),Re.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else Yn?P.isDataTexture||P.isData3DTexture?N.texSubImage3D(kt,we,ft,It,Vt,ke,qe,Ge,Lt,Ke,Ft.data):K.isCompressedArrayTexture?N.compressedTexSubImage3D(kt,we,ft,It,Vt,ke,qe,Ge,Lt,Ft.data):N.texSubImage3D(kt,we,ft,It,Vt,ke,qe,Ge,Lt,Ke,Ft):P.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,we,ft,It,ke,qe,Lt,Ke,Ft.data):P.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,we,ft,It,Ft.width,Ft.height,Lt,Ft.data):N.texSubImage2D(N.TEXTURE_2D,we,ft,It,ke,qe,Lt,Ke,Ft);N.pixelStorei(N.UNPACK_ROW_LENGTH,Et),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Fn),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Qs),N.pixelStorei(N.UNPACK_SKIP_ROWS,Bn),N.pixelStorei(N.UNPACK_SKIP_IMAGES,qr),we===0&&K.generateMipmaps&&N.generateMipmap(kt),Re.unbindTexture()},this.initRenderTarget=function(P){X.get(P).__webglFramebuffer===void 0&&ge.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?ge.setTextureCube(P,0):P.isData3DTexture?ge.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?ge.setTexture2DArray(P,0):ge.setTexture2D(P,0),Re.unbindTexture()},this.resetState=function(){R=0,C=0,D=null,Re.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=at._getDrawingBufferColorSpace(e),t.unpackColorSpace=at._getUnpackColorSpace()}};var Rn=(s,e=1)=>(s-10+e/2)*20;function $f(s,e=!1){let t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,l=new bt,c=0;for(let h=0;h<s.length;++h){let u=s[h],f=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in u.morphAttributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(e){let d;if(t)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(t){let h=0,u=[];for(let f=0;f<s.length;++f){let d=s[f].index;for(let m=0;m<d.count;++m)u.push(d.getX(m)+h);h+=s[f].attributes.position.count}l.setIndex(u)}for(let h in r){let u=Jf(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){let d=[];for(let x=0;x<o[h].length;++x)d.push(o[h][x][f]);let m=Jf(d);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}return l}function Jf(s){let e,t,n,i=-1,r=0;for(let c=0;c<s.length;++c){let h=s[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),a=new nt(o,t,n),l=0;for(let c=0;c<s.length;++c){let h=s[c];if(h.isInterleavedBufferAttribute){let u=l/t;for(let f=0,d=h.count;f<d;f++)for(let m=0;m<t;m++){let x=h.getComponent(f,m);a.setComponent(f+u,m,x)}}else o.set(h.array,l);l+=h.count*t}return i!==void 0&&(a.gpuType=i),a}function Qf(s,e=1e-4){e=Math.max(e,Number.EPSILON);let t={},n=s.getIndex(),i=s.getAttribute("position"),r=n?n.count:i.count,o=0,a=Object.keys(s.attributes),l={},c={},h=[],u=["getX","getY","getZ","getW"],f=["setX","setY","setZ","setW"];for(let E=0,M=a.length;E<M;E++){let y=a[E],S=s.attributes[y];l[y]=new S.constructor(new S.array.constructor(S.count*S.itemSize),S.itemSize,S.normalized);let R=s.morphAttributes[y];R&&(c[y]||(c[y]=[]),R.forEach((C,D)=>{let _=new C.array.constructor(C.count*C.itemSize);c[y][D]=new C.constructor(_,C.itemSize,C.normalized)}))}let d=e*.5,m=Math.log10(1/e),x=Math.pow(10,m),g=d*x;for(let E=0;E<r;E++){let M=n?n.getX(E):E,y="";for(let S=0,R=a.length;S<R;S++){let C=a[S],D=s.getAttribute(C),_=D.itemSize;for(let v=0;v<_;v++)y+=`${~~(D[u[v]](M)*x+g)},`}if(y in t)h.push(t[y]);else{for(let S=0,R=a.length;S<R;S++){let C=a[S],D=s.getAttribute(C),_=s.morphAttributes[C],v=D.itemSize,A=l[C],U=c[C];for(let k=0;k<v;k++){let F=u[k],z=f[k];if(A[z](o,D[F](M)),_)for(let G=0,ie=_.length;G<ie;G++)U[G][z](o,_[G][F](M))}}t[y]=o,h.push(o),o++}}let p=s.clone();for(let E in s.attributes){let M=l[E];if(p.setAttribute(E,new M.constructor(M.array.slice(0,o*M.itemSize),M.itemSize,M.normalized)),E in c)for(let y=0;y<c[E].length;y++){let S=c[E][y];p.morphAttributes[E][y]=new S.constructor(S.array.slice(0,o*S.itemSize),S.itemSize,S.normalized)}}return p.setIndex(h),p}function Jh(s,e){if(e===Sh)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Ir||e===Xo){let t=s.getIndex();if(t===null){let o=[],a=s.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let n=t.count-2,i=[];if(e===Ir)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}function ep({scene:s,height:e,wallMaterial:t}){let n=new pt;n.name="white-studio-factory-shell",s.add(n);let i=new Yt({color:11844028,roughness:.39,metalness:.55}),r=new jt({color:14478579,transparent:!0,opacity:.085,roughness:.1,clearcoat:.5,side:vt,depthWrite:!1}),o=new Yt({color:16448248,roughness:.7,side:vt}),a=[],l=e,c=[];function h(f){return l-6+6*Math.sqrt(Math.max(0,1-(f/200)**2))}function u(f){n.clear(),c.forEach(D=>D.dispose()),c.length=0,a=[],l=f;let d=[],m=[],x=f-8,g=x-.9,p=x+.9;function E(D,_,v,A,U,k,F,z){let G=new dn(D,_,v),ie=new He().makeRotationY(F);ie.setPosition(A,U,k),G.applyMatrix4(ie),z.push(G)}for(let[D,_,v,A]of[["north",0,0,-20],["south",Math.PI,0,20],["west",Math.PI/2,-20,0],["east",-Math.PI/2,20,0]]){let U=new pt;U.position.set(v,0,A),U.rotation.y=_,n.add(U);let k=(z,G,ie,j)=>{let oe=new dn(z,G,.24);c.push(oe);let te=new je(oe,t);te.position.set(ie,j,0),te.name=D+"-wall",te.castShadow=!0,te.receiveShadow=!0,U.add(te),a.push(te)};k(40,g,0,g/2),k(40,f-p,0,(f+p)/2);let F=-20;for(let z of[-15,-5,5,15]){let G=z-1.9;k(G-F,1.8,(F+G)/2,x),F=z+1.9;let ie=new tn(3.8,1.8);ie.translate(z,x,0),ie.applyMatrix4(new He().makeRotationY(_)),ie.translate(v,0,A),m.push(ie);for(let j of[-1.9,0,1.9]){let oe=new w(z+j,x,0).applyAxisAngle(new w(0,1,0),_).add(new w(v,0,A));E(.1,1.92,.12,oe.x,oe.y,oe.z,_,d)}for(let j of[g,p]){let oe=new w(z,j,0).applyAxisAngle(new w(0,1,0),_).add(new w(v,0,A));E(3.92,.1,.12,oe.x,oe.y,oe.z,_,d)}}k(20-F,1.8,(F+20)/2,x)}let M=(D,_,v,A)=>{let U=$f(D,!1);D.forEach(F=>F.dispose()),c.push(U);let k=new je(U,_);return k.name=v,k.castShadow=A,k.receiveShadow=!0,n.add(k),k};M(d,i,"studio-window-mullions",!0),M(m,r,"studio-window-glazing",!1);let y=[];for(let D of[-20,-12,-4,4,12,20]){let _=Array.from({length:41},(v,A)=>{let U=-20+A;return new w(U,h(U)-.24,D)});y.push(new Mo(new Ar(_),64,.075,6,!1))}M(y,i,"studio-vault-ribs",!0);let S=[];for(let D of[-1,1])for(let _=0;_<24;_++){let v=D*(12+8*_/24),A=D*(12+8*(_+1)/24),U=h(v),k=h(A);S.push(v,U,-20,A,k,-20,v,U,20,v,U,20,A,k,-20,A,k,20)}let R=new bt;R.setAttribute("position",new gt(S,3)),R.computeVertexNormals(),c.push(R);let C=new je(R,o);C.name="white-vault-side-panels",C.castShadow=!0,C.receiveShadow=!0,n.add(C)}return u(e),{ceilingAt:h,setHeight:u,setVisible:f=>n.visible=!!f,collisionMeshes:()=>a,state:()=>({windows:16,windowOpenings:!0,windowWidth:3.8,windowHeight:1.8,windowCentreY:l-8,vaultedRoof:!0,structuralRibs:6,height:l,visible:n.visible}),dispose:()=>{s.remove(n),c.forEach(f=>f.dispose()),i.dispose(),r.dispose(),o.dispose()}}}function Iv(s,e=60){let t=new $e,n=0;for(let o of s){o.updateWorldMatrix(!0,!0);let a=new $e().setFromObject(o);a.isEmpty()||(t.union(a),n++)}if(!n)return{point:new w,mode:"floor",count:0};let i=t.getCenter(new w),r=n===1&&Math.hypot(i.x,i.z)<=e?"object":"centred-height";return r!=="object"&&(i.x=0,i.z=0),{point:i,mode:r,count:n}}function tp({controls:s,camera:e,getObjects:t,nearRadius:n=60}){let i=s.update,r=new Gt,o=new He,a={point:new w,mode:"floor",count:0};s.update=function(...h){let u=i.apply(s,h);return e.quaternion.multiply(r),e.updateMatrixWorld(!0),u};function l({reset:h=!1}={}){if(a=Iv(t(),n),!h&&s.target.distanceToSquared(a.point)<1e-12)return;let u=e.quaternion.clone();s.target.copy(a.point),o.lookAt(e.position,a.point,e.up);let f=new Gt().setFromRotationMatrix(o);h?(r.identity(),e.quaternion.copy(f)):(r.copy(f).invert().multiply(u),e.quaternion.copy(u)),e.updateMatrixWorld(!0)}let c=()=>l();return s.addEventListener("end",c),l(),{refresh:l,state:()=>({mode:a.mode,count:a.count,point:a.point.toArray(),quaternion:e.quaternion.toArray()}),dispose:()=>{s.removeEventListener("end",c),s.update=i}}}var Zs=class s extends je{constructor(){let e=s.SkyShader,t=new ct({name:e.name,uniforms:Ot.clone(e.uniforms),vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,side:Wt,depthWrite:!1});super(new dn(1,1,1),t),this.isSky=!0}};Zs.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new w},up:{value:new w(0,1,0)}},vertexShader:`
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

    }`};var bs=class extends Ei{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new su(t)}),this.register(function(t){return new ru(t)}),this.register(function(t){return new pu(t)}),this.register(function(t){return new mu(t)}),this.register(function(t){return new gu(t)}),this.register(function(t){return new au(t)}),this.register(function(t){return new lu(t)}),this.register(function(t){return new cu(t)}),this.register(function(t){return new hu(t)}),this.register(function(t){return new iu(t)}),this.register(function(t){return new uu(t)}),this.register(function(t){return new ou(t)}),this.register(function(t){return new fu(t)}),this.register(function(t){return new du(t)}),this.register(function(t){return new tu(t)}),this.register(function(t){return new xu(t)}),this.register(function(t){return new yu(t)})}load(e,t,n,i){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=Zi.extractUrlBase(e);o=Zi.resolveURL(c,this.path)}else o=Zi.extractUrlBase(e);this.manager.itemStart(e);let a=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Rr(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r,o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===op){try{o[ut.KHR_BINARY_GLTF]=new vu(e)}catch(u){i&&i(u);return}r=JSON.parse(o[ut.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new Tu(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(u){case ut.KHR_MATERIALS_UNLIT:o[u]=new nu;break;case ut.KHR_DRACO_MESH_COMPRESSION:o[u]=new _u(r,this.dracoLoader);break;case ut.KHR_TEXTURE_TRANSFORM:o[u]=new Mu;break;case ut.KHR_MESH_QUANTIZATION:o[u]=new Su;break;default:f.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}};function Dv(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}var ut={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},tu=class{constructor(e){this.parser=e,this.name=ut.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,h=new Ie(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],fn);let u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new di(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new ji(h),c.distance=u;break;case"spot":c=new Co(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Ai(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}},nu=class{constructor(){this.name=ut.KHR_MATERIALS_UNLIT}getMaterialType(){return Ct}extendParams(e,t,n){let i=[];e.color=new Ie(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],fn),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,St))}return Promise.all(i)}},iu=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},su=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:jt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Me(a,a)}return Promise.all(r)}},ru=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:jt}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},ou=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:jt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},au=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:jt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new Ie(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],fn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,St)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},lu=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:jt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},cu=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:jt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Ie().setRGB(a[0],a[1],a[2],fn),Promise.all(r)}},hu=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:jt}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},uu=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:jt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new Ie().setRGB(a[0],a[1],a[2],fn),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,St)),Promise.all(r)}},du=class{constructor(e){this.parser=e,this.name=ut.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:jt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}},fu=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:jt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},pu=class{constructor(e){this.parser=e,this.name=ut.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},mu=class{constructor(e){this.parser=e,this.name=ut.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=i.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}},gu=class{constructor(e){this.parser=e,this.name=ut.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=i.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}},xu=class{constructor(e){this.name=ut.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,f,i.mode,i.filter).then(function(d){return d.buffer}):o.ready.then(function(){let d=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(d),h,u,f,i.mode,i.filter),d})})}else return null}},yu=class{constructor(e){this.name=ut.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let c of i.primitives)if(c.mode!==ti.TRIANGLES&&c.mode!==ti.TRIANGLE_STRIP&&c.mode!==ti.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let h=c.pop(),u=h.isGroup?h.children:[h],f=c[0].count,d=[];for(let m of u){let x=new He,g=new w,p=new Gt,E=new w(1,1,1),M=new Vi(m.geometry,m.material,f);for(let y=0;y<f;y++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,y),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,y),l.SCALE&&E.fromBufferAttribute(l.SCALE,y),M.setMatrixAt(y,x.compose(g,p,E));for(let y in l)if(y==="_COLOR_0"){let S=l[y];M.instanceColor=new cs(S.array,S.itemSize,S.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&m.geometry.setAttribute(y,l[y]);Ut.prototype.copy.call(M,m),this.parser.assignFinalMaterial(M),d.push(M)}return h.isGroup?(h.clear(),h.add(...d),h):d[0]}))}},op="glTF",Zo=12,np={JSON:1313821514,BIN:5130562},vu=class{constructor(e){this.name=ut.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Zo),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==op)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-Zo,r=new DataView(e,Zo),o=0;for(;o<i;){let a=r.getUint32(o,!0);o+=4;let l=r.getUint32(o,!0);if(o+=4,l===np.JSON){let c=new Uint8Array(e,Zo+o,a);this.content=n.decode(c)}else if(l===np.BIN){let c=Zo+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},_u=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ut.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let h in o){let u=Eu[h]||h.toLowerCase();a[u]=o[h]}for(let h in e.attributes){let u=Eu[h]||h.toLowerCase();if(o[h]!==void 0){let f=n.accessors[e.attributes[h]],d=Or[f.componentType];c[u]=d.name,l[u]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,f){i.decodeDracoFile(h,function(d){for(let m in d.attributes){let x=d.attributes[m],g=l[m];g!==void 0&&(x.normalized=g)}u(d)},a,c,fn,f)})})}},Mu=class{constructor(){this.name=ut.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Su=class{constructor(){this.name=ut.KHR_MESH_QUANTIZATION}},ic=class extends Wi{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=i-t,u=(n-t)/h,f=u*u,d=f*u,m=e*c,x=m-c,g=-2*d+3*f,p=d-f,E=1-g,M=p-f+u;for(let y=0;y!==a;y++){let S=o[x+y+a],R=o[x+y+l]*h,C=o[m+y+a],D=o[m+y]*h;r[y]=E*S+M*R+g*C+p*D}return r}},Lv=new Gt,bu=class extends ic{interpolate_(e,t,n,i){let r=super.interpolate_(e,t,n,i);return Lv.fromArray(r).normalize().toArray(r),r}},ti={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Or={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},ip={9728:xt,9729:$t,9984:Pr,9985:gs,9986:Ji,9987:pn},sp={33071:Kn,33648:as,10497:hn},$h={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Eu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ss={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Nv={CUBICSPLINE:void 0,LINEAR:Hi,STEP:ki},Qh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Uv(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Yt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Hn})),s.DefaultMaterial}function Ks(s,e,t){for(let n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Ai(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Ov(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,h=e.length;c<h;c++){let u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);let o=[],a=[],l=[];for(let c=0,h=e.length;c<h;c++){let u=e[c];if(n){let f=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;o.push(f)}if(i){let f=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;a.push(f)}if(r){let f=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],f=c[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=f),s.morphTargetsRelative=!0,s})}function Fv(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Bv(s){let e,t=s.extensions&&s.extensions[ut.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+eu(t.attributes):e=s.indices+":"+eu(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+eu(s.targets[n]);return e}function eu(s){let e="",t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function wu(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function zv(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var kv=new He,Tu=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Dv,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?this.textureLoader=new Ao(this.options.manager):this.textureLoader=new Io(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Rr(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Ks(r,a,i),Ai(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(let l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){let o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){let o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),r=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,h]of o.children.entries())r(h,a.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ut.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,o){n.load(Zi.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let o=$h[i.type],a=Or[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new nt(c,o,l))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],l=$h[i.type],c=Or[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,m=i.normalized===!0,x,g;if(d&&d!==u){let p=Math.floor(f/d),E="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count,M=t.cache.get(E);M||(x=new c(a,p*d,i.count*d/h),M=new Ns(x,d/h),t.cache.add(E,M)),g=new Ln(M,l,f%d/h,m)}else a===null?x=new c(i.count*l):x=new c(a,f,i.count*l),g=new nt(x,l,m);if(i.sparse!==void 0){let p=$h.SCALAR,E=Or[i.sparse.indices.componentType],M=i.sparse.indices.byteOffset||0,y=i.sparse.values.byteOffset||0,S=new E(o[1],M,i.sparse.count*p),R=new c(o[2],y,i.sparse.count*l);a!==null&&(g=new nt(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let C=0,D=S.length;C<D;C++){let _=S[C];if(g.setX(_,R[C*l]),l>=2&&g.setY(_,R[C*l+1]),l>=3&&g.setZ(_,R[C*l+2]),l>=4&&g.setW(_,R[C*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=m}return g})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let i=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let f=(r.samplers||{})[o.sampler]||{};return h.magFilter=ip[f.magFilter]||$t,h.minFilter=ip[f.minFilter]||pn,h.wrapS=sp[f.wrapS]||hn,h.wrapT=sp[f.wrapT]||hn,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==xt&&h.minFilter!==$t,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let o=i.images[e],a=self.URL||self.webkitURL,l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(u){c=!0;let f=new Blob([u],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(l).then(function(u){return new Promise(function(f,d){let m=f;t.isImageBitmapLoader===!0&&(m=function(x){let g=new Qt(x);g.needsUpdate=!0,f(g)}),t.load(Zi.resolveURL(u,r.path),m,void 0,d)})}).then(function(u){return c===!0&&a.revokeObjectURL(l),Ai(u,o),u.userData.mimeType=o.mimeType||zv(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[ut.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[ut.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=r.associations.get(o);o=r.extensions[ut.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new ds,_n.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new Jn,_n.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Yt}loadMaterial(e){let t=this,n=this.json,i=this.extensions,r=n.materials[e],o,a={},l=r.extensions||{},c=[];if(l[ut.KHR_MATERIALS_UNLIT]){let u=i[ut.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,r,t))}else{let u=r.pbrMetallicRoughness||{};if(a.color=new Ie(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let f=u.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],fn),a.opacity=f[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",u.baseColorTexture,St)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=vt);let h=r.alphaMode||Qh.OPAQUE;if(h===Qh.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Qh.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Ct&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Me(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==Ct&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Ct){let u=r.emissiveFactor;a.emissive=new Ie().setRGB(u[0],u[1],u[2],fn)}return r.emissiveTexture!==void 0&&o!==Ct&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,St)),Promise.all(c).then(function(){let u=new o(a);return r.name&&(u.name=r.name),Ai(u,r),t.associations.set(u,{materials:e}),r.extensions&&Ks(i,u,r),u})}createUniqueName(e){let t=wt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[ut.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return rp(l,a,t)})}let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],h=Bv(c),u=i[h];if(u)o.push(u.promise);else{let f;c.extensions&&c.extensions[ut.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=rp(new bt,c,t),i[h]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let h=o[l].material===void 0?Uv(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let d=0,m=h.length;d<m;d++){let x=h[d],g=o[d],p,E=c[d];if(g.mode===ti.TRIANGLES||g.mode===ti.TRIANGLE_STRIP||g.mode===ti.TRIANGLE_FAN||g.mode===void 0)p=r.isSkinnedMesh===!0?new mo(x,E):new je(x,E),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),g.mode===ti.TRIANGLE_STRIP?p.geometry=Jh(p.geometry,Xo):g.mode===ti.TRIANGLE_FAN&&(p.geometry=Jh(p.geometry,Ir));else if(g.mode===ti.LINES)p=new hs(x,E);else if(g.mode===ti.LINE_STRIP)p=new Us(x,E);else if(g.mode===ti.LINE_LOOP)p=new us(x,E);else if(g.mode===ti.POINTS)p=new Os(x,E);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&Fv(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Ai(p,r),g.extensions&&Ks(i,p,g),t.assignFinalMaterial(p),u.push(p)}for(let d=0,m=u.length;d<m;d++)t.associations.set(u[d],{meshes:e,primitives:d});if(u.length===1)return r.extensions&&Ks(i,u[0],r),u[0];let f=new pt;r.extensions&&Ks(i,f,r),t.associations.set(f,{meshes:e});for(let d=0,m=u.length;d<m;d++)f.add(u[d]);return f})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Bt(Mn.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Tn(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Ai(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),o=i,a=[],l=[];for(let c=0,h=o.length;c<h;c++){let u=o[c];if(u){a.push(u);let f=new He;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new go(a,l)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],h=[];for(let u=0,f=i.channels.length;u<f;u++){let d=i.channels[u],m=i.samplers[d.sampler],x=d.target,g=x.node,p=i.parameters!==void 0?i.parameters[m.input]:m.input,E=i.parameters!==void 0?i.parameters[m.output]:m.output;x.node!==void 0&&(o.push(this.getDependency("node",g)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",E)),c.push(m),h.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){let f=u[0],d=u[1],m=u[2],x=u[3],g=u[4],p=[];for(let M=0,y=f.length;M<y;M++){let S=f[M],R=d[M],C=m[M],D=x[M],_=g[M];if(S===void 0)continue;S.updateMatrix&&S.updateMatrix();let v=n._createAnimationTracks(S,R,C,D,_);if(v)for(let A=0;A<v.length;A++)p.push(v[A])}let E=new To(r,void 0,p);return Ai(E,i),E})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,h=a.length;c<h;c++)o.push(n.getDependency("node",a[c]));let l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){let h=c[0],u=c[1],f=c[2];f!==null&&h.traverse(function(d){d.isSkinnedMesh&&d.bind(f,kv)});for(let d=0,m=u.length;d<m;d++)h.add(u[d]);return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let h;if(r.isBone===!0?h=new wr:c.length>1?h=new pt:c.length===1?h=c[0]:h=new Ut,h!==c[0])for(let u=0,f=c.length;u<f;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=o),Ai(h,r),r.extensions&&Ks(n,h,r),r.matrix!==void 0){let u=new He;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){let u=i.associations.get(h);i.associations.set(h,{...u})}return i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,r=new pt;n.name&&(r.name=i.createUniqueName(n.name)),Ai(r,n),n.extensions&&Ks(t,r,n);let o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++)r.add(l[h]);let c=h=>{let u=new Map;for(let[f,d]of i.associations)(f instanceof _n||f instanceof Qt)&&u.set(f,d);return h.traverse(f=>{let d=i.associations.get(f);d!=null&&u.set(f,d)}),u};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){let o=[],a=e.name?e.name:e.uuid,l=[];Ss[r.path]===Ss.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(a);let c;switch(Ss[r.path]){case Ss.weights:c=Mi;break;case Ss.rotation:c=Si;break;case Ss.translation:case Ss.scale:c=bi;break;default:switch(n.itemSize){case 1:c=Mi;break;case 2:case 3:default:c=bi;break}break}let h=i.interpolation!==void 0?Nv[i.interpolation]:Hi,u=this._getArrayFromAccessor(n);for(let f=0,d=l.length;f<d;f++){let m=new c(l[f]+"."+Ss[r.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),o.push(m)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=wu(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof Si?bu:ic;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Hv(s,e,t){let n=e.attributes,i=new $e;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new w(l[0],l[1],l[2]),new w(c[0],c[1],c[2])),a.normalized){let h=wu(Or[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new w,l=new w;for(let c=0,h=r.length;c<h;c++){let u=r[c];if(u.POSITION!==void 0){let f=t.json.accessors[u.POSITION],d=f.min,m=f.max;if(d!==void 0&&m!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(m[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(m[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(m[2]))),f.normalized){let x=wu(Or[f.componentType]);l.multiplyScalar(x)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;let o=new un;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function rp(s,e,t){let n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){s.setAttribute(a,l)})}for(let o in n){let a=Eu[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){let o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return at.workingColorSpace!==fn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${at.workingColorSpace}" not supported.`),Ai(s,e),Hv(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Ov(s,e.targets,t):s})}function ap({scene:s}){let e=null,t=null,n=0,i=!1,r=new bs;async function o(a){if(i||!(a.glb instanceof Blob))throw Error("Space preview unavailable.");let l=(await r.parseAsync(await a.glb.arrayBuffer(),"")).scene,c=new Set,h=new Set,u=new Set;l.traverse(f=>{if(f.isMesh){c.add(f.geometry),f.castShadow=!1,f.receiveShadow=!1;for(let d of Array.isArray(f.material)?f.material:[f.material]){h.add(d),d.clippingPlanes=[];for(let m of Object.values(d))m?.isTexture&&u.add(m)}}});try{if(!e){e=new Ms({antialias:!0,powerPreference:"low-power"}),e.setPixelRatio(1),e.setSize(800,600,!1),e.outputColorSpace=St,e.toneMapping=ms,e.toneMappingExposure=1.05;let y=new en,S=new Zs;S.scale.setScalar(500),y.add(S),S.material.uniforms.turbidity.value=2,S.material.uniforms.rayleigh.value=1.8,S.material.uniforms.mieCoefficient.value=.003,S.material.uniforms.sunPosition.value.set(-.78,.32,.56);let R=new mi(e);t=R.fromScene(y,.04),R.dispose(),S.geometry.dispose(),S.material.dispose()}let f=new en;f.background=new Ie(15921906),f.environment=t.texture,f.environmentIntensity=s.environmentIntensity;for(let y of s.children)if(y.isHemisphereLight||y.isDirectionalLight){let S=y.clone();S.castShadow=!1,f.add(S),S.isDirectionalLight&&(S.target=y.target.clone(),f.add(S.target))}f.add(l),l.updateMatrixWorld(!0);let d=new $e().setFromObject(l),m=d.getCenter(new w),x=Math.max(.01,d.getSize(new w).length()),g=new Tn(-1,1,1,-1,.01,x*6+10);g.position.copy(m).addScaledVector(new w(1,1,1).normalize(),x*2+1),g.lookAt(m),g.updateMatrixWorld(!0);let p=0,E=0;for(let y=0;y<8;y++){let S=new w(y&1?d.max.x:d.min.x,y&2?d.max.y:d.min.y,y&4?d.max.z:d.min.z).applyMatrix4(g.matrixWorldInverse);p=Math.max(p,Math.abs(S.x)),E=Math.max(E,Math.abs(S.y))}let M=Math.max(E,p/(4/3),.01)*1.08;return g.left=-M*4/3,g.right=M*4/3,g.top=M,g.bottom=-M,g.updateProjectionMatrix(),e.render(f,g),n++,await new Promise((y,S)=>e.domElement.toBlob(R=>R?y(R):S(Error("Space card could not render.")),"image/png"))}finally{c.forEach(f=>f.dispose()),h.forEach(f=>f.dispose()),u.forEach(f=>{f.source?.data?.close?.(),f.dispose()}),e?.renderLists.dispose()}}return{preview:o,state:()=>({count:n,projection:"orthographic",background:"#f2f2f2",environmentIntensity:s.environmentIntensity,lighting:"axonometric-scene"}),dispose:()=>{i=!0,t?.dispose(),e?.dispose(),e=null}}}var lp=new $e,sc=new w,Js=class extends Po{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";let e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new gt(e,3)),this.setAttribute("uv",new gt(t,2))}applyMatrix4(e){let t=this.attributes.instanceStart,n=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),n.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let n=new fs(t,6,1);return this.setAttribute("instanceStart",new Ln(n,3,0)),this.setAttribute("instanceEnd",new Ln(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let n=new fs(t,6,1);return this.setAttribute("instanceColorStart",new Ln(n,3,0)),this.setAttribute("instanceColorEnd",new Ln(n,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new So(e.geometry)),this}fromLineSegments(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $e);let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),lp.setFromBufferAttribute(t),this.boundingBox.union(lp))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new un),this.boundingBox===null&&this.computeBoundingBox();let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){let n=this.boundingSphere.center;this.boundingBox.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)sc.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(sc)),sc.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(sc));this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}};Ne.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new Me(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};An.line={uniforms:Ot.merge([Ne.common,Ne.fog,Ne.line]),vertexShader:`
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
    `};var Fr=class extends ct{constructor(e){super({type:"LineMaterial",uniforms:Ot.clone(An.line.uniforms),vertexShader:An.line.vertexShader,fragmentShader:An.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(e){e===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return"USE_DASH"in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}};var Au=new lt,cp=new w,hp=new w,mn=new lt,gn=new lt,Ri=new lt,Ru=new w,Cu=new He,xn=new Lo,up=new w,rc=new $e,oc=new un,Ci=new lt,Pi,$s;function dp(s,e,t){return Ci.set(0,0,-e,1).applyMatrix4(s.projectionMatrix),Ci.multiplyScalar(1/Ci.w),Ci.x=$s/t.width,Ci.y=$s/t.height,Ci.applyMatrix4(s.projectionMatrixInverse),Ci.multiplyScalar(1/Ci.w),Math.abs(Math.max(Ci.x,Ci.y))}function Vv(s,e){let t=s.matrixWorld,n=s.geometry,i=n.attributes.instanceStart,r=n.attributes.instanceEnd,o=Math.min(n.instanceCount,i.count);for(let a=0,l=o;a<l;a++){xn.start.fromBufferAttribute(i,a),xn.end.fromBufferAttribute(r,a),xn.applyMatrix4(t);let c=new w,h=new w;Pi.distanceSqToSegment(xn.start,xn.end,h,c),h.distanceTo(c)<$s*.5&&e.push({point:h,pointOnLine:c,distance:Pi.origin.distanceTo(h),object:s,face:null,faceIndex:a,uv:null,uv1:null})}}function Gv(s,e,t){let n=e.projectionMatrix,r=s.material.resolution,o=s.matrixWorld,a=s.geometry,l=a.attributes.instanceStart,c=a.attributes.instanceEnd,h=Math.min(a.instanceCount,l.count),u=-e.near;Pi.at(1,Ri),Ri.w=1,Ri.applyMatrix4(e.matrixWorldInverse),Ri.applyMatrix4(n),Ri.multiplyScalar(1/Ri.w),Ri.x*=r.x/2,Ri.y*=r.y/2,Ri.z=0,Ru.copy(Ri),Cu.multiplyMatrices(e.matrixWorldInverse,o);for(let f=0,d=h;f<d;f++){if(mn.fromBufferAttribute(l,f),gn.fromBufferAttribute(c,f),mn.w=1,gn.w=1,mn.applyMatrix4(Cu),gn.applyMatrix4(Cu),mn.z>u&&gn.z>u)continue;if(mn.z>u){let M=mn.z-gn.z,y=(mn.z-u)/M;mn.lerp(gn,y)}else if(gn.z>u){let M=gn.z-mn.z,y=(gn.z-u)/M;gn.lerp(mn,y)}mn.applyMatrix4(n),gn.applyMatrix4(n),mn.multiplyScalar(1/mn.w),gn.multiplyScalar(1/gn.w),mn.x*=r.x/2,mn.y*=r.y/2,gn.x*=r.x/2,gn.y*=r.y/2,xn.start.copy(mn),xn.start.z=0,xn.end.copy(gn),xn.end.z=0;let x=xn.closestPointToPointParameter(Ru,!0);xn.at(x,up);let g=Mn.lerp(mn.z,gn.z,x),p=g>=-1&&g<=1,E=Ru.distanceTo(up)<$s*.5;if(p&&E){xn.start.fromBufferAttribute(l,f),xn.end.fromBufferAttribute(c,f),xn.start.applyMatrix4(o),xn.end.applyMatrix4(o);let M=new w,y=new w;Pi.distanceSqToSegment(xn.start,xn.end,y,M),t.push({point:y,pointOnLine:M,distance:Pi.origin.distanceTo(y),object:s,face:null,faceIndex:f,uv:null,uv1:null})}}}var ac=class extends je{constructor(e=new Js,t=new Fr({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let e=this.geometry,t=e.attributes.instanceStart,n=e.attributes.instanceEnd,i=new Float32Array(2*t.count);for(let o=0,a=0,l=t.count;o<l;o++,a+=2)cp.fromBufferAttribute(t,o),hp.fromBufferAttribute(n,o),i[a]=a===0?0:i[a-1],i[a+1]=i[a]+cp.distanceTo(hp);let r=new fs(i,2,1);return e.setAttribute("instanceDistanceStart",new Ln(r,1,0)),e.setAttribute("instanceDistanceEnd",new Ln(r,1,1)),this}raycast(e,t){let n=this.material.worldUnits,i=e.camera;i===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');let r=e.params.Line2!==void 0&&e.params.Line2.threshold||0;Pi=e.ray;let o=this.matrixWorld,a=this.geometry,l=this.material;$s=l.linewidth+r,a.boundingSphere===null&&a.computeBoundingSphere(),oc.copy(a.boundingSphere).applyMatrix4(o);let c;if(n)c=$s*.5;else{let u=Math.max(i.near,oc.distanceToPoint(Pi.origin));c=dp(i,u,l.resolution)}if(oc.radius+=c,Pi.intersectsSphere(oc)===!1)return;a.boundingBox===null&&a.computeBoundingBox(),rc.copy(a.boundingBox).applyMatrix4(o);let h;if(n)h=$s*.5;else{let u=Math.max(i.near,rc.distanceToPoint(Pi.origin));h=dp(i,u,l.resolution)}rc.expandByScalar(h),Pi.intersectsBox(rc)!==!1&&(n?Vv(this,t):Gv(this,i,t))}onBeforeRender(e){let t=this.material.uniforms;t&&t.resolution&&(e.getViewport(Au),this.material.uniforms.resolution.value.set(Au.z,Au.w))}};function Wv(s,e){let t=s.geometry.attributes.position,n=s.geometry.index,i=e.clone().applyMatrix4(s.matrixWorld.clone().invert()),r=[],o=new w,a=new w,l=new w,c=new w,h=new w,u=[o,a,l],f=1e-7;for(let d=0,m=n?n.count:t.count;d<m;d+=3){for(let p=0;p<3;p++)u[p].fromBufferAttribute(t,n?n.getX(d+p):d+p);let x=u.map(p=>i.distanceToPoint(p));if(x.every(p=>p>f)||x.every(p=>p<-f)||x.every(p=>Math.abs(p)<f))continue;let g=[];for(let p=0;p<3;p++){let E=(p+1)%3;if(Math.abs(x[p])<f)c.copy(u[p]);else if(x[p]*x[E]<0)c.copy(u[p]).lerp(u[E],x[p]/(x[p]-x[E]));else continue;g.some(M=>M.distanceToSquared(c)<f*f)||g.push(c.clone())}if(g.length===2&&g[0].distanceToSquared(g[1])>f*f)for(let p of g)h.copy(p).applyMatrix4(s.matrixWorld),r.push(h.x,h.y,h.z)}return r}function fp({scene:s,renderer:e,getMeshes:t,invalidate:n}){let i=document.getElementById("walk-section"),r=document.getElementById("walk-section-panel"),o=document.getElementById("walk-section-height"),a=document.getElementById("walk-section-axis"),l=document.getElementById("walk-section-value"),c=new ln(new w(0,-1,0),0),h=new pt;h.name="Axonometric section caps",s.add(h);let u=!1,f="axonometric",d=.45,m="y",x=[],g=new Map,p="",E=0,M=0,y=!1,S=0,R=0;e.localClippingEnabled=!0;let C=z=>Array.isArray(z.material)?z.material:[z.material];function D(){if(S=0,y||!u||f!=="axonometric")return;let z=[];for(let te of x)z.push(Wv(te,c));let G=z.reduce((te,pe)=>te+pe.length,0),ie=new Float32Array(G),j=0;for(let te of z)ie.set(te,j),j+=te.length;let oe=h.getObjectByName("Opaque wall cut lines");oe||(oe=new ac(new Js,new Fr({color:2236962,linewidth:2,worldUnits:!1,toneMapped:!1,transparent:!1,depthTest:!0,depthWrite:!1})),oe.name="Opaque wall cut lines",oe.userData.ownsGeometry=!0,oe.renderOrder=2e4,oe.frustumCulled=!1,h.add(oe)),oe.geometry.dispose(),oe.geometry=new Js,oe.geometry.setPositions(ie),oe.position.copy(c.normal).multiplyScalar(-.006),R=G/6,n()}function _(){S&&cancelAnimationFrame(S),S=0,R=0;for(let[z,G]of g)z.clippingPlanes=G.planes,z.clipShadows=G.shadows,z.needsUpdate=!0;g.clear();for(let z of x)z.userData.sectionRenderOrder!==void 0&&(z.renderOrder=z.userData.sectionRenderOrder,delete z.userData.sectionRenderOrder);x=[];for(let z of[...h.children])h.remove(z),z.userData.ownsGeometry&&z.geometry.dispose(),z.material.dispose();E=0,p=""}function v(){if(y)return;let z=u&&f==="axonometric";if(i.hidden=f!=="axonometric",r.hidden=!z,i.setAttribute("aria-pressed",String(z)),!z){_(),h.visible=!1,n();return}let G=t().filter(j=>j.isMesh);for(let j of G)j.updateWorldMatrix(!0,!1);let ie=G.map(j=>j.uuid+":"+j.matrixWorld.elements.join(",")).join("|");if(ie!==p){_(),x=G,p=ie;let j=new $e;for(let te of x)j.union(new $e().setFromObject(te));let oe=Math.max(10,j.getSize(new w).length()*1.1);for(let te of x){for(let Ue of C(te))g.has(Ue)||(g.set(Ue,{planes:Ue.clippingPlanes,shadows:Ue.clipShadows}),Ue.clippingPlanes=[c],Ue.clipShadows=!1,Ue.needsUpdate=!0);if(te.userData.sectionRenderOrder=te.renderOrder,te.renderOrder=0,te.userData.sourceArchitecture&&!te.userData.fusionCore&&!te.userData.road)continue;let pe=100+E*3;for(let[Ue,Be]of[[Wt,bh],[Hn,Eh]]){let se=new Ct({depthWrite:!1,depthTest:!1,colorWrite:!1,stencilWrite:!0,stencilFunc:oo,stencilFail:Be,stencilZFail:Be,stencilZPass:Be,side:Ue,clippingPlanes:[c]}),ae=new je(te.sectionGeometry||te.geometry,se);ae.matrixAutoUpdate=!1,ae.matrix.copy(te.matrixWorld),ae.renderOrder=pe,ae.frustumCulled=!1,h.add(ae)}let Ce=new Ct({color:2236962,opacity:te.userData.road?1:.22,transparent:!1,blending:te.userData.road?mt:Cr,blendSrc:Bi,blendDst:zi,blendEquation:cn,depthWrite:!!te.userData.road,toneMapped:!1,side:vt,stencilWrite:!0,stencilRef:0,stencilFunc:wh,stencilFail:Yo,stencilZFail:Yo,stencilZPass:Yo,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1});Ce.onBeforeCompile=Ue=>{Ue.uniforms.sectionPitch={value:Math.max(.6,oe/(te.userData.road?80:180))},Ue.uniforms.sectionRoad={value:te.userData.road?1:0},Ue.vertexShader=`varying vec2 cutPatternUV;
`+Ue.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
cutPatternUV=position.xy;`),Ue.fragmentShader=`uniform float sectionPitch,sectionRoad;varying vec2 cutPatternUV;
`+Ue.fragmentShader.replace("#include <opaque_fragment>",["vec2 q=cutPatternUV/sectionPitch;","float dotDistance=length(fract(q)-.5);","float dotMask=step(dotDistance,.23);","vec2 gridDistance=abs(fract(q-.5)-.5)/max(fwidth(q),vec2(.0001));","float gridMask=1.-smoothstep(.55,1.0,min(gridDistance.x,gridDistance.y));","float inkMask=mix(dotMask,gridMask,sectionRoad);diffuseColor.a=mix(mix(.13,1.,sectionRoad),1.,inkMask);outgoingLight=mix(diffuse,mix(vec3(.65),diffuse,inkMask),sectionRoad);","#include <opaque_fragment>"].join(`
`))},Ce.customProgramCacheKey=()=>"section-opaque-drafting-v4";let Ae=new je(new tn(oe,oe),Ce);Ae.name="Translucent cut surface",Ae.userData.ownsGeometry=!0,Ae.userData.sectionCap=!0,Ae.userData.road=!!te.userData.road,Ae.renderOrder=pe+1,Ae.frustumCulled=!1,Ae.onAfterRender=()=>e.clearStencil(),h.add(Ae),E++}}if(x.length){let j=new $e;for(let te of x)j.union(new $e().setFromObject(te));M=Mn.lerp(j.min[m],j.max[m],d),c.normal.set(0,0,0),c.normal[m]=-1,c.constant=M;let oe=j.getCenter(new w);oe[m]=M;for(let te of h.children)te.userData.sectionCap&&(te.position.copy(oe),te.quaternion.setFromUnitVectors(new w(0,0,1),c.normal))}S||(S=requestAnimationFrame(D)),l.textContent=M.toFixed(1)+" m",o.value=String(Math.round(d*100)),a.value=m,h.visible=!0,n()}function A(z){u=z.enabled??u,d=Mn.clamp(z.ratio??d,.01,.99),m=["x","y","z"].includes(z.axis)?z.axis:m,v()}r.addEventListener("pointerdown",z=>z.stopPropagation());let U=()=>A({enabled:!u}),k=()=>A({ratio:Number(o.value)/100}),F=()=>A({axis:a.value});return i.addEventListener("click",U),o.addEventListener("input",k),a.addEventListener("change",F),{refresh:v,set:A,setViewMode:z=>{f=z,v()},state:()=>({enabled:u,active:u&&f==="axonometric",axis:m,ratio:d,height:M,capColour:"#222222",capOpacity:.22,roadCapOpacity:1,contourOpacity:1,contourWidth:2,wallPattern:"stipple",roadPattern:"grid",patternColour:"#222222",patternOpacity:1,lineSegments:R,caps:E,meshCount:x.length}),dispose:()=>{y=!0,_(),s.remove(h),i.removeEventListener("click",U),o.removeEventListener("input",k),a.removeEventListener("change",F)}}}var Un={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


    }`};var Cn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Xv=new Tn(-1,1,1,-1,0,1),Pu=class extends bt{constructor(){super(),this.setAttribute("position",new gt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new gt([0,2,0,0,2,0],2))}},qv=new Pu,ni=class{constructor(e){this._mesh=new je(qv,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Xv)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Es=class extends Cn{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof ct?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Ot.clone(e.uniforms),this.material=new ct({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new ni(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Ko=class extends Cn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}},lc=class extends Cn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var cc=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new Me);this._width=n.width,this._height=n.height,t=new Nt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Xt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Es(Un),this.copyPass.material.blending=mt,this.clock=new Do}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let i=0,r=this.passes.length;i<r;i++){let o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Ko!==void 0&&(o instanceof Ko?n=!0:o instanceof lc&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Me);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var gi={name:"SSRShader",defines:{MAX_STEP:0,PERSPECTIVE_CAMERA:!0,DISTANCE_ATTENUATION:!0,FRESNEL:!0,INFINITE_THICK:!1,SELECTIVE:!1},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tMetalness:{value:null},tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null},resolution:{value:new Me},cameraProjectionMatrix:{value:new He},cameraInverseProjectionMatrix:{value:new He},opacity:{value:.5},maxDistance:{value:180},cameraRange:{value:0},thickness:{value:.018}},vertexShader:`

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
  `},Jo={name:"SSRDepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`

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

  `},$i={name:"SSRBlurShader",uniforms:{tDiffuse:{value:null},resolution:{value:new Me},opacity:{value:.5}},vertexShader:`

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
  `};var $o=class s extends Cn{constructor({renderer:e,scene:t,camera:n,width:i=512,height:r=512,selects:o=null,bouncing:a=!1,groundReflector:l=null}){super(),this.width=i,this.height=r,this.clear=!0,this.renderer=e,this.scene=t,this.camera=n,this.groundReflector=l,this.opacity=gi.uniforms.opacity.value,this.output=0,this.maxDistance=gi.uniforms.maxDistance.value,this.thickness=gi.uniforms.thickness.value,this.tempColor=new Ie,this._selects=o,this._resolutionScale=1,this.selective=Array.isArray(this._selects),Object.defineProperty(this,"selects",{get(){return this._selects},set(h){this._selects!==h&&(this._selects=h,Array.isArray(h)?(this.selective=!0,this.ssrMaterial.defines.SELECTIVE=!0,this.ssrMaterial.needsUpdate=!0):(this.selective=!1,this.ssrMaterial.defines.SELECTIVE=!1,this.ssrMaterial.needsUpdate=!0))}}),this._bouncing=a,Object.defineProperty(this,"bouncing",{get(){return this._bouncing},set(h){this._bouncing!==h&&(this._bouncing=h,h?this.ssrMaterial.uniforms.tDiffuse.value=this.prevRenderTarget.texture:this.ssrMaterial.uniforms.tDiffuse.value=this.beautyRenderTarget.texture)}}),this.blur=!0,this._distanceAttenuation=gi.defines.DISTANCE_ATTENUATION,Object.defineProperty(this,"distanceAttenuation",{get(){return this._distanceAttenuation},set(h){this._distanceAttenuation!==h&&(this._distanceAttenuation=h,this.ssrMaterial.defines.DISTANCE_ATTENUATION=h,this.ssrMaterial.needsUpdate=!0)}}),this._fresnel=gi.defines.FRESNEL,Object.defineProperty(this,"fresnel",{get(){return this._fresnel},set(h){this._fresnel!==h&&(this._fresnel=h,this.ssrMaterial.defines.FRESNEL=h,this.ssrMaterial.needsUpdate=!0)}}),this._infiniteThick=gi.defines.INFINITE_THICK,Object.defineProperty(this,"infiniteThick",{get(){return this._infiniteThick},set(h){this._infiniteThick!==h&&(this._infiniteThick=h,this.ssrMaterial.defines.INFINITE_THICK=h,this.ssrMaterial.needsUpdate=!0)}});let c=new Gi;c.type=xs,c.minFilter=xt,c.magFilter=xt,this.beautyRenderTarget=new Nt(this.width,this.height,{minFilter:xt,magFilter:xt,type:Xt,depthTexture:c,depthBuffer:!0}),this.prevRenderTarget=new Nt(this.width,this.height,{minFilter:xt,magFilter:xt}),this.normalRenderTarget=new Nt(this.width,this.height,{minFilter:xt,magFilter:xt,type:Xt}),this.metalnessRenderTarget=new Nt(this.width,this.height,{minFilter:xt,magFilter:xt,type:Xt}),this.ssrRenderTarget=new Nt(this.width,this.height,{minFilter:xt,magFilter:xt}),this.blurRenderTarget=this.ssrRenderTarget.clone(),this.blurRenderTarget2=this.ssrRenderTarget.clone(),this.ssrMaterial=new ct({defines:Object.assign({},gi.defines,{MAX_STEP:Math.sqrt(this.width*this.width+this.height*this.height)}),uniforms:Ot.clone(gi.uniforms),vertexShader:gi.vertexShader,fragmentShader:gi.fragmentShader,blending:mt}),this.ssrMaterial.uniforms.tDiffuse.value=this.beautyRenderTarget.texture,this.ssrMaterial.uniforms.tNormal.value=this.normalRenderTarget.texture,this.ssrMaterial.defines.SELECTIVE=this.selective,this.ssrMaterial.needsUpdate=!0,this.ssrMaterial.uniforms.tMetalness.value=this.metalnessRenderTarget.texture,this.ssrMaterial.uniforms.tDepth.value=this.beautyRenderTarget.depthTexture,this.ssrMaterial.uniforms.cameraNear.value=this.camera.near,this.ssrMaterial.uniforms.cameraFar.value=this.camera.far,this.ssrMaterial.uniforms.thickness.value=this.thickness,this.ssrMaterial.uniforms.resolution.value.set(this.width,this.height),this.ssrMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssrMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.normalMaterial=new Bs,this.normalMaterial.blending=mt,this.metalnessOnMaterial=new Ct({color:"white"}),this.metalnessOffMaterial=new Ct({color:"black"}),this.blurMaterial=new ct({defines:Object.assign({},$i.defines),uniforms:Ot.clone($i.uniforms),vertexShader:$i.vertexShader,fragmentShader:$i.fragmentShader}),this.blurMaterial.uniforms.tDiffuse.value=this.ssrRenderTarget.texture,this.blurMaterial.uniforms.resolution.value.set(this.width,this.height),this.blurMaterial2=new ct({defines:Object.assign({},$i.defines),uniforms:Ot.clone($i.uniforms),vertexShader:$i.vertexShader,fragmentShader:$i.fragmentShader}),this.blurMaterial2.uniforms.tDiffuse.value=this.blurRenderTarget.texture,this.blurMaterial2.uniforms.resolution.value.set(this.width,this.height),this.depthRenderMaterial=new ct({defines:Object.assign({},Jo.defines),uniforms:Ot.clone(Jo.uniforms),vertexShader:Jo.vertexShader,fragmentShader:Jo.fragmentShader,blending:mt}),this.depthRenderMaterial.uniforms.tDepth.value=this.beautyRenderTarget.depthTexture,this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new ct({uniforms:Ot.clone(Un.uniforms),vertexShader:Un.vertexShader,fragmentShader:Un.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Bi,blendDst:zi,blendEquation:cn,blendSrcAlpha:Bi,blendDstAlpha:zi,blendEquationAlpha:cn}),this.fsQuad=new ni(null),this.originalClearColor=new Ie}get resolutionScale(){return this._resolutionScale}set resolutionScale(e){this._resolutionScale=e,this.setSize(this.width,this.height)}dispose(){this.beautyRenderTarget.dispose(),this.prevRenderTarget.dispose(),this.normalRenderTarget.dispose(),this.metalnessRenderTarget.dispose(),this.ssrRenderTarget.dispose(),this.blurRenderTarget.dispose(),this.blurRenderTarget2.dispose(),this.normalMaterial.dispose(),this.metalnessOnMaterial.dispose(),this.metalnessOffMaterial.dispose(),this.blurMaterial.dispose(),this.blurMaterial2.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}render(e,t){switch(e.setRenderTarget(this.beautyRenderTarget),e.clear(),this.groundReflector&&(this.groundReflector.visible=!1,this.groundReflector.doRender(this.renderer,this.scene,this.camera),this.groundReflector.visible=!0),e.render(this.scene,this.camera),this.groundReflector&&(this.groundReflector.visible=!1),this._renderOverride(e,this.normalMaterial,this.normalRenderTarget,0,0),this.selective&&this._renderMetalness(e,this.metalnessOnMaterial,this.metalnessRenderTarget,0,0),this.ssrMaterial.uniforms.opacity.value=this.opacity,this.ssrMaterial.uniforms.maxDistance.value=this.maxDistance,this.ssrMaterial.uniforms.thickness.value=this.thickness,this._renderPass(e,this.ssrMaterial,this.ssrRenderTarget),this.blur&&(this._renderPass(e,this.blurMaterial,this.blurRenderTarget),this._renderPass(e,this.blurMaterial2,this.blurRenderTarget2)),this.output){case s.OUTPUT.Default:this.bouncing?(this.copyMaterial.uniforms.tDiffuse.value=this.beautyRenderTarget.texture,this.copyMaterial.blending=mt,this._renderPass(e,this.copyMaterial,this.prevRenderTarget),this.blur?this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget2.texture:this.copyMaterial.uniforms.tDiffuse.value=this.ssrRenderTarget.texture,this.copyMaterial.blending=hi,this._renderPass(e,this.copyMaterial,this.prevRenderTarget),this.copyMaterial.uniforms.tDiffuse.value=this.prevRenderTarget.texture,this.copyMaterial.blending=mt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t)):(this.copyMaterial.uniforms.tDiffuse.value=this.beautyRenderTarget.texture,this.copyMaterial.blending=mt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blur?this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget2.texture:this.copyMaterial.uniforms.tDiffuse.value=this.ssrRenderTarget.texture,this.copyMaterial.blending=hi,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t));break;case s.OUTPUT.SSR:this.blur?this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget2.texture:this.copyMaterial.uniforms.tDiffuse.value=this.ssrRenderTarget.texture,this.copyMaterial.blending=mt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.bouncing&&(this.blur?this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget2.texture:this.copyMaterial.uniforms.tDiffuse.value=this.beautyRenderTarget.texture,this.copyMaterial.blending=mt,this._renderPass(e,this.copyMaterial,this.prevRenderTarget),this.copyMaterial.uniforms.tDiffuse.value=this.ssrRenderTarget.texture,this.copyMaterial.blending=hi,this._renderPass(e,this.copyMaterial,this.prevRenderTarget));break;case s.OUTPUT.Beauty:this.copyMaterial.uniforms.tDiffuse.value=this.beautyRenderTarget.texture,this.copyMaterial.blending=mt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.Depth:this._renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=mt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.Metalness:this.copyMaterial.uniforms.tDiffuse.value=this.metalnessRenderTarget.texture,this.copyMaterial.blending=mt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.SSRPass: Unknown output type.")}}setSize(e,t){this.width=e,this.height=t;let n=Math.round(this.resolutionScale*e),i=Math.round(this.resolutionScale*t);this.ssrMaterial.defines.MAX_STEP=Math.sqrt(n*n+i*i),this.ssrMaterial.needsUpdate=!0,this.beautyRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.metalnessRenderTarget.setSize(e,t),this.ssrRenderTarget.setSize(n,i),this.prevRenderTarget.setSize(n,i),this.blurRenderTarget.setSize(n,i),this.blurRenderTarget2.setSize(n,i),this.ssrMaterial.uniforms.resolution.value.set(n,i),this.ssrMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssrMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.blurMaterial.uniforms.resolution.value.set(n,i),this.blurMaterial2.uniforms.resolution.value.set(n,i)}_renderPass(e,t,n,i,r){this.originalClearColor.copy(e.getClearColor(this.tempColor));let o=e.getClearAlpha(this.tempColor),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,i!=null&&(e.setClearColor(i),e.setClearAlpha(r||0),e.clear()),this.fsQuad.material=t,this.fsQuad.render(e),e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}_renderOverride(e,t,n,i,r){this.originalClearColor.copy(e.getClearColor(this.tempColor));let o=e.getClearAlpha(this.tempColor),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,i=t.clearColor||i,r=t.clearAlpha||r,i!=null&&(e.setClearColor(i),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}_renderMetalness(e,t,n,i,r){this.originalClearColor.copy(e.getClearColor(this.tempColor));let o=e.getClearAlpha(this.tempColor),a=e.autoClear,l=this.scene.background,c=this.scene.fog;e.setRenderTarget(n),e.autoClear=!1,this.scene.background=null,this.scene.fog=null,i=t.clearColor||i,r=t.clearAlpha||r,i!=null&&(e.setClearColor(i),e.setClearAlpha(r||0),e.clear()),this.scene.traverseVisible(h=>{h._SSRPassBackupMaterial=h.material,this._selects.includes(h)?h.material=this.metalnessOnMaterial:h.material=this.metalnessOffMaterial}),e.render(this.scene,this.camera),this.scene.traverseVisible(h=>{h.material=h._SSRPassBackupMaterial}),e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o),this.scene.background=l,this.scene.fog=c}};$o.OUTPUT={Default:0,SSR:1,Beauty:3,Depth:4,Normal:5,Metalness:7};var Qo={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new Me},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new He},cameraProjectionMatrixInverse:{value:new He},cameraWorldMatrix:{value:new He},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new w(-1,-1,-1)},sceneBoxMax:{value:new w(1,1,1)}},vertexShader:`

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
    }`},ea={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

    }`},hc={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
    }`};function pp(s=5){let e=Math.floor(s)%2===0?Math.floor(s)+1:Math.floor(s),t=Yv(e),n=t.length,i=new Uint8Array(n*4);for(let o=0;o<n;++o){let a=t[o],l=2*Math.PI*a/n,c=new w(Math.cos(l),Math.sin(l),0).normalize();i[o*4]=(c.x*.5+.5)*255,i[o*4+1]=(c.y*.5+.5)*255,i[o*4+2]=127,i[o*4+3]=255}let r=new ui(i,e,e);return r.wrapS=hn,r.wrapT=hn,r.needsUpdate=!0,r}function Yv(s){let e=Math.floor(s)%2===0?Math.floor(s)+1:Math.floor(s),t=e*e,n=Array(t).fill(0),i=Math.floor(e/2),r=e-1;for(let o=1;o<=t;){if(i===-1&&r===e?(r=e-2,i=0):(r===e&&(r=0),i<0&&(i=e-1)),n[i*e+r]!==0){r-=2,i++;continue}else n[i*e+r]=o++;r++,i--}return n}var ta={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:Iu(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new Me},cameraProjectionMatrixInverse:{value:new He},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
    }`};function Iu(s,e,t){let n=jv(s,e,t),i="vec3[SAMPLES](";for(let r=0;r<s;r++){let o=n[r];i+=`vec3(${o.x}, ${o.y}, ${o.z})${r<s-1?",":")"}`}return i}function jv(s,e,t){let n=[];for(let i=0;i<s;i++){let r=2*Math.PI*e*i/s,o=Math.pow(i/(s-1),t);n.push(new w(Math.cos(r),Math.sin(r),o))}return n}var uc=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let n,i,r,o=.5*(Math.sqrt(3)-1),a=(e+t)*o,l=Math.floor(e+a),c=Math.floor(t+a),h=(3-Math.sqrt(3))/6,u=(l+c)*h,f=l-u,d=c-u,m=e-f,x=t-d,g,p;m>x?(g=1,p=0):(g=0,p=1);let E=m-g+h,M=x-p+h,y=m-1+2*h,S=x-1+2*h,R=l&255,C=c&255,D=this.perm[R+this.perm[C]]%12,_=this.perm[R+g+this.perm[C+p]]%12,v=this.perm[R+1+this.perm[C+1]]%12,A=.5-m*m-x*x;A<0?n=0:(A*=A,n=A*A*this._dot(this.grad3[D],m,x));let U=.5-E*E-M*M;U<0?i=0:(U*=U,i=U*U*this._dot(this.grad3[_],E,M));let k=.5-y*y-S*S;return k<0?r=0:(k*=k,r=k*k*this._dot(this.grad3[v],y,S)),70*(n+i+r)}noise3d(e,t,n){let i,r,o,a,c=(e+t+n)*.3333333333333333,h=Math.floor(e+c),u=Math.floor(t+c),f=Math.floor(n+c),d=1/6,m=(h+u+f)*d,x=h-m,g=u-m,p=f-m,E=e-x,M=t-g,y=n-p,S,R,C,D,_,v;E>=M?M>=y?(S=1,R=0,C=0,D=1,_=1,v=0):E>=y?(S=1,R=0,C=0,D=1,_=0,v=1):(S=0,R=0,C=1,D=1,_=0,v=1):M<y?(S=0,R=0,C=1,D=0,_=1,v=1):E<y?(S=0,R=1,C=0,D=0,_=1,v=1):(S=0,R=1,C=0,D=1,_=1,v=0);let A=E-S+d,U=M-R+d,k=y-C+d,F=E-D+2*d,z=M-_+2*d,G=y-v+2*d,ie=E-1+3*d,j=M-1+3*d,oe=y-1+3*d,te=h&255,pe=u&255,Ce=f&255,Ae=this.perm[te+this.perm[pe+this.perm[Ce]]]%12,Ue=this.perm[te+S+this.perm[pe+R+this.perm[Ce+C]]]%12,Be=this.perm[te+D+this.perm[pe+_+this.perm[Ce+v]]]%12,se=this.perm[te+1+this.perm[pe+1+this.perm[Ce+1]]]%12,ae=.6-E*E-M*M-y*y;ae<0?i=0:(ae*=ae,i=ae*ae*this._dot3(this.grad3[Ae],E,M,y));let _e=.6-A*A-U*U-k*k;_e<0?r=0:(_e*=_e,r=_e*_e*this._dot3(this.grad3[Ue],A,U,k));let De=.6-F*F-z*z-G*G;De<0?o=0:(De*=De,o=De*De*this._dot3(this.grad3[Be],F,z,G));let Le=.6-ie*ie-j*j-oe*oe;return Le<0?a=0:(Le*=Le,a=Le*Le*this._dot3(this.grad3[se],ie,j,oe)),32*(i+r+o+a)}noise4d(e,t,n,i){let r=this.grad4,o=this.simplex,a=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,h,u,f,d,m,x=(e+t+n+i)*l,g=Math.floor(e+x),p=Math.floor(t+x),E=Math.floor(n+x),M=Math.floor(i+x),y=(g+p+E+M)*c,S=g-y,R=p-y,C=E-y,D=M-y,_=e-S,v=t-R,A=n-C,U=i-D,k=_>v?32:0,F=_>A?16:0,z=v>A?8:0,G=_>U?4:0,ie=v>U?2:0,j=A>U?1:0,oe=k+F+z+G+ie+j,te=o[oe][0]>=3?1:0,pe=o[oe][1]>=3?1:0,Ce=o[oe][2]>=3?1:0,Ae=o[oe][3]>=3?1:0,Ue=o[oe][0]>=2?1:0,Be=o[oe][1]>=2?1:0,se=o[oe][2]>=2?1:0,ae=o[oe][3]>=2?1:0,_e=o[oe][0]>=1?1:0,De=o[oe][1]>=1?1:0,Le=o[oe][2]>=1?1:0,Ze=o[oe][3]>=1?1:0,Ve=_-te+c,N=v-pe+c,st=A-Ce+c,We=U-Ae+c,ze=_-Ue+2*c,Re=v-Be+2*c,q=A-se+2*c,X=U-ae+2*c,ge=_-_e+3*c,Oe=v-De+3*c,Fe=A-Le+3*c,I=U-Ze+3*c,b=_-1+4*c,Y=v-1+4*c,ne=A-1+4*c,me=U-1+4*c,Q=g&255,V=p&255,W=E&255,le=M&255,fe=a[Q+a[V+a[W+a[le]]]]%32,Z=a[Q+te+a[V+pe+a[W+Ce+a[le+Ae]]]]%32,ce=a[Q+Ue+a[V+Be+a[W+se+a[le+ae]]]]%32,be=a[Q+_e+a[V+De+a[W+Le+a[le+Ze]]]]%32,Se=a[Q+1+a[V+1+a[W+1+a[le+1]]]]%32,xe=.6-_*_-v*v-A*A-U*U;xe<0?h=0:(xe*=xe,h=xe*xe*this._dot4(r[fe],_,v,A,U));let Te=.6-Ve*Ve-N*N-st*st-We*We;Te<0?u=0:(Te*=Te,u=Te*Te*this._dot4(r[Z],Ve,N,st,We));let B=.6-ze*ze-Re*Re-q*q-X*X;B<0?f=0:(B*=B,f=B*B*this._dot4(r[ce],ze,Re,q,X));let ye=.6-ge*ge-Oe*Oe-Fe*Fe-I*I;ye<0?d=0:(ye*=ye,d=ye*ye*this._dot4(r[be],ge,Oe,Fe,I));let L=.6-b*b-Y*Y-ne*ne-me*me;return L<0?m=0:(L*=L,m=L*L*this._dot4(r[Se],b,Y,ne,me)),27*(h+u+f+d+m)}_dot(e,t,n){return e[0]*t+e[1]*n}_dot3(e,t,n,i){return e[0]*t+e[1]*n+e[2]*i}_dot4(e,t,n,i,r){return e[0]*t+e[1]*n+e[2]*i+e[3]*r}};var na=class s extends Cn{constructor(e,t,n=512,i=512,r,o,a){super(),this.width=n,this.height=i,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=pp(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new Nt(this.width,this.height,{type:Xt}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new ct({defines:Object.assign({},Qo.defines),uniforms:Ot.clone(Qo.uniforms),vertexShader:Qo.vertexShader,fragmentShader:Qo.fragmentShader,blending:mt,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Bs,this.normalMaterial.blending=mt,this.pdMaterial=new ct({defines:Object.assign({},ta.defines),uniforms:Ot.clone(ta.uniforms),vertexShader:ta.vertexShader,fragmentShader:ta.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new ct({defines:Object.assign({},ea.defines),uniforms:Ot.clone(ea.uniforms),vertexShader:ea.vertexShader,fragmentShader:ea.fragmentShader,blending:mt}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new ct({uniforms:Ot.clone(Un.uniforms),vertexShader:Un.vertexShader,fragmentShader:Un.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:zo,blendDst:Hs,blendEquation:cn,blendSrcAlpha:Bo,blendDstAlpha:Hs,blendEquationAlpha:cn}),this.blendMaterial=new ct({uniforms:Ot.clone(hc.uniforms),vertexShader:hc.vertexShader,fragmentShader:hc.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:Cr,blendSrc:zo,blendDst:Hs,blendEquation:cn,blendSrcAlpha:Bo,blendDstAlpha:Hs,blendEquationAlpha:cn}),this._fsQuad=new ni(null),this._originalClearColor=new Ie,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),o!==void 0&&this.updateGtaoMaterial(o),a!==void 0&&this.updatePdMaterial(a)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new Gi,this.depthTexture.format=_s,this.depthTexture.type=vs,this.normalRenderTarget=new Nt(this.width,this.height,{minFilter:xt,magFilter:xt,type:Xt,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let n=this.normalTexture?1:0,i=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=i,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=i,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Iu(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case s.OUTPUT.Off:break;case s.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=mt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=mt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=mt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=mt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=mt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(e,t,n,i,r){e.getClearColor(this._originalClearColor);let o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,i!=null&&(e.setClearColor(i),e.setClearAlpha(r||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=a,e.setClearColor(this._originalClearColor),e.setClearAlpha(o)}_renderOverride(e,t,n,i,r){e.getClearColor(this._originalClearColor);let o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,i=t.clearColor||i,r=t.clearAlpha||r,i!=null&&(e.setClearColor(i),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=a,e.setClearColor(this._originalClearColor),e.setClearAlpha(o)}_overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){(n.isPoints||n.isLine||n.isLine2)&&n.visible&&(n.visible=!1,t.push(n))})}_restoreVisibility(){let e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}_generateNoise(e=64){let t=new uc,n=e*e*4,i=new Uint8Array(n);for(let o=0;o<e;o++)for(let a=0;a<e;a++){let l=o,c=a;i[(o*e+a)*4]=(t.noise(l,c)*.5+.5)*255,i[(o*e+a)*4+1]=(t.noise(l+e,c)*.5+.5)*255,i[(o*e+a)*4+2]=(t.noise(l,c+e)*.5+.5)*255,i[(o*e+a)*4+3]=(t.noise(l+e,c+e)*.5+.5)*255}let r=new ui(i,e,e,nn,Vn);return r.wrapS=hn,r.wrapT=hn,r.needsUpdate=!0,r}};na.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var mp={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ie(0)},defaultOpacity:{value:0}},vertexShader:`

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

    }`};var Br=class s extends Cn{constructor(e,t=1,n,i){super(),this.strength=t,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new Me(e.x,e.y):new Me(256,256),this.clearColor=new Ie(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Nt(r,o,{type:Xt}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let u=new Nt(r,o,{type:Xt});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);let f=new Nt(r,o,{type:Xt});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}let a=mp;this.highPassUniforms=Ot.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ct({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Me(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new w(1,1,1),new w(1,1,1),new w(1,1,1),new w(1,1,1),new w(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Ot.clone(Un.uniforms),this.blendMaterial=new ct({uniforms:this.copyUniforms,vertexShader:Un.vertexShader,fragmentShader:Un.fragmentShader,blending:ks,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Ie,this._oldClearAlpha=1,this._basic=new Ct,this._fsQuad=new ni(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new Me(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new ct({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Me(.5,.5)},direction:{value:new Me(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
        }`})}};Br.BlurDirectionX=new Me(1,0);Br.BlurDirectionY=new Me(0,1);var ia={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

    }`};var dc=class extends Cn{constructor(){super(),this.uniforms=Ot.clone(ia.uniforms),this.material=new bo({name:ia.name,uniforms:this.uniforms,vertexShader:ia.vertexShader,fragmentShader:ia.fragmentShader}),this._fsQuad=new ni(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},at.getTransfer(this._outputColorSpace)===At&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===hl?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===ul?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===dl?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ms?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===pl?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===ml?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===fl&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var kr=class extends en{constructor(){super();let e=new dn;e.deleteAttribute("uv");let t=new Yt({side:Wt}),n=new Yt,i=new ji(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);let r=new je(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new Vi(e,n,6),a=new Ut;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);let l=new je(e,zr(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new je(e,zr(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new je(e,zr(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let u=new je(e,zr(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let f=new je(e,zr(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);let d=new je(e,zr(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function zr(s){return new Eo({color:0,emissive:16777215,emissiveIntensity:s})}var Zv=400/100;function gp({renderer:s,scene:e,camera:t}){let n=null,i=null,r=null,o=null,a=null,l=!1,c=[];function h(){if(n)return;n=new cc(s),i=new $o({renderer:s,scene:e,camera:t,width:800,height:600,selects:[]}),i.resolutionScale=.5,i.opacity=0,i.maxDistance=26,i.thickness=.16,i.infiniteThick=!1,i.bouncing=!1,i.fresnel=!0,i.distanceAttenuation=!0,r=new na(e,t,400,300),r.setGBuffer(i.beautyRenderTarget.depthTexture,i.normalRenderTarget.texture),r.blendIntensity=1.85,r.updateGtaoMaterial({radius:1.2,thickness:1.1,distanceExponent:1.6,distanceFallOff:.65,samples:8,screenSpaceRadius:!1}),r.updatePdMaterial({samples:8,radius:5});let F=i._renderOverride.bind(i);i._renderOverride=(...ie)=>{let j=[];e.traverse(oe=>{oe.visible&&(oe.name==="studio-volumetric-sunlight"||oe.isPoints||oe.isLine)&&(j.push(oe),oe.visible=!1)});try{return F(...ie)}finally{j.forEach(oe=>oe.visible=!0)}},o=new Es({uniforms:{tDiffuse:{value:null},tDepth:{value:i.beautyRenderTarget.depthTexture},inverseProjection:{value:t.projectionMatrixInverse},cameraWorld:{value:t.matrixWorld},sunDepth:{value:null},sunMatrix:{value:new He},shadowReady:{value:0},worldScale:{value:Zv},sunStrength:{value:1},sunDirection:{value:new w(-.78,.32,.56).normalize()}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:`#include <packing>
 uniform sampler2D tDiffuse,tDepth,sunDepth;uniform mat4 inverseProjection,cameraWorld,sunMatrix;uniform float shadowReady,worldScale,sunStrength;uniform vec3 sunDirection;varying vec2 vUv;
 void main(){
  vec4 pixel=texture2D(tDiffuse,vUv),clip=vec4(vUv*2.0-1.0,texture2D(tDepth,vUv).x*2.0-1.0,1.0),view=inverseProjection*clip;view/=view.w;
  vec3 start=(cameraWorld*vec4(0.,0.,0.,1.)).xyz,end=(cameraWorld*view).xyz,ray=end-start;float L=min(length(ray),90.0*worldScale),amount=0.0,transmittance=1.0;ray=normalize(ray);
  float jitter=fract(sin(dot(gl_FragCoord.xy,vec2(12.9898,78.233)))*43758.5453);
  float mu=dot(ray,sunDirection),phase=.32+.90*pow(max(0.,mu),5.);
  for(int i=0;i<24;i++){float t=(float(i)+jitter)/24.0;vec3 p=start+ray*L*t;vec4 q=sunMatrix*vec4(p,1.);q.xyz/=q.w;float lit=1.;
   if(shadowReady>.5&&q.x>0.&&q.x<1.&&q.y>0.&&q.y<1.&&q.z>0.&&q.z<1.)lit=step(q.z-.00065,unpackRGBAToDepth(texture2D(sunDepth,q.xy)));
   float density=.018/worldScale*exp(-max(0.,p.y)*.024/worldScale),scatter=1.-exp(-density*L/24.);
   amount+=lit*scatter*transmittance;transmittance*=1.-scatter;
  }
  vec3 haze=vec3(1.0)*amount*phase*1.5;
  pixel.rgb*=mix(.82,1.,transmittance);
  gl_FragColor=vec4(pixel.rgb+haze*sunStrength,pixel.a);
 }`});let z=new Es({uniforms:{tDiffuse:{value:null}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:"uniform sampler2D tDiffuse;varying vec2 vUv;void main(){vec4 p=texture2D(tDiffuse,vUv);if(!(p.r>=0.))p.r=0.;if(!(p.g>=0.))p.g=0.;if(!(p.b>=0.))p.b=0.;gl_FragColor=vec4(min(p.rgb,vec3(64.)),1.);}"}),G=new Br(new Me(800,600),.16,.35,3.8);a=new Es({uniforms:{tDiffuse:{value:null},pigmentChroma:{value:1.13}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:"uniform sampler2D tDiffuse;uniform float pigmentChroma;varying vec2 vUv;void main(){vec4 p=texture2D(tDiffuse,vUv);float y=dot(p.rgb,vec3(.2126,.7152,.0722));vec3 c=max(vec3(0.),vec3(y)+(p.rgb-vec3(y))*pigmentChroma);c*=mix(.53,1.18,smoothstep(.025,1.1,y));gl_FragColor=vec4(c,p.a);}"}),n.addPass(i),n.addPass(r),n.addPass(o),n.addPass(z),n.addPass(G),n.addPass(a),n.addPass(new dc),i.selects=c,k()}let u=new en,f=new Zs;f.scale.setScalar(500),u.add(f),Object.assign(f.material.uniforms.turbidity,{value:2}),Object.assign(f.material.uniforms.rayleigh,{value:1.8}),f.material.uniforms.mieCoefficient.value=.003,f.material.uniforms.sunPosition.value.set(-.78,.32,.56);let d=new mi(s),m=d.fromScene(u,.04),x=new kr,g=d.fromScene(x,.04);x.dispose(),d.dispose(),f.geometry.dispose(),f.material.dispose();let p=e.environment;e.environment=m.texture,e.environmentIntensity=.24;let E=new br(128,{type:Xt,generateMipmaps:!0,minFilter:pn}),M=new Sr(.1,200,E),y=null,S=null,R=null,C=0,D=0,_=!1,v=0,A=0;function U(){if(!R)return;let F=R;R=null;let z=[];F.group.traverse(te=>{te.isMesh&&te.userData.road&&(z.push(te),te.visible=!1)});let G=e.getObjectByName("studio-volumetric-sunlight"),ie=G?.visible;G&&(G.visible=!1);let j=s.getRenderTarget(),oe=s.shadowMap.autoUpdate;try{M.position.set(0,Math.max(2,(F.bounds.min.y+F.bounds.max.y)*.3),0),s.shadowMap.autoUpdate=!1,M.update(s,e);let te=new mi(s),pe=te.fromCubemap(E.texture);te.dispose(),S?.dispose(),S=pe;for(let Ce of z)Ce.material.envMap=S.texture,Ce.material.envMapIntensity=1.25,Ce.material.needsUpdate=!0;C++}finally{z.forEach(te=>te.visible=!0),G&&(G.visible=ie),s.setRenderTarget(j),s.shadowMap.autoUpdate=oe}}function k(){n.setPixelRatio(1),n.setSize(v||800,A||600),i.ssrMaterial.defines.MAX_STEP=Math.min(192,i.ssrMaterial.defines.MAX_STEP),i.ssrMaterial.needsUpdate=!0,r.setSize(Math.ceil((v||800)*.5),Math.ceil((A||600)*.5))}return{setLighting:F=>{e.environmentIntensity=.025+.215*F.daylight},updateSpace:(F,z)=>{l=!!F&&!!z;let G=[];F&&z&&F.group.traverse(ie=>{ie.isMesh&&ie.userData.road&&ie.material.metalness>.8&&G.push(ie)}),c=G,i&&(i.selects=G),G.length&&F&&z&&F!==y&&(y=F,R=F)},setSize:(F,z)=>{let G=Math.min(1,1400/Math.max(F,z)),ie=Math.max(1,Math.round(F*G)),j=Math.max(1,Math.round(z*G));ie===v&&j===A||(v=ie,A=j,n&&k())},render:(F,z)=>{if(_=!!F,e.environment=F?g.texture:m.texture,!F){s.render(e,z);return}h(),a.uniforms.pigmentChroma.value=l?1.45:1.13,U(),i.ssrMaterial.uniforms.cameraProjectionMatrix.value.copy(t.projectionMatrix),i.ssrMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(t.projectionMatrixInverse),o.uniforms.inverseProjection.value.copy(t.projectionMatrixInverse),o.uniforms.cameraWorld.value.copy(t.matrixWorld);let G=e.getObjectByName("gallery-sunlight"),ie=!!G?.shadow.map;return o.uniforms.sunStrength.value=(G?.intensity||0)/9,G?.shadow.map&&(o.uniforms.sunDirection.value.copy(G.position).sub(G.target.position).normalize(),o.uniforms.sunDepth.value=G.shadow.map.texture,o.uniforms.sunMatrix.value=G.shadow.matrix,o.uniforms.shadowReady.value=1),n.render(),D++,!ie&&!!G?.shadow.map},state:()=>({enabled:_,spacePigmentChroma:l?1.45:1.13,passes:["screen-space-reflection","contact-occlusion","shadow-raymarched-scattering","bloom","colour-grade","HDR-output"],width:v,height:A,reflectionScale:.5,allocated:!!n,mirrorMeshes:c.length,environmentCaptures:C,frames:D}),dispose:()=>{if(n){for(let F of n.passes)F.dispose?.();n.dispose()}E.dispose(),S?.dispose(),m.dispose(),g.dispose(),e.environment=p}}}var fc=(s,e,t)=>Math.max(e,Math.min(t,s)),Hr=Math.PI/180;function sa(s=8){let e=(fc(s,0,24)-12)*15*Hr,t=36.17*Hr;return{time:fc(s,0,24),azimuth:(Math.atan2(Math.sin(e),Math.cos(e)*Math.sin(t))/Hr+180+360)%360,elevation:Math.asin(Math.cos(t)*Math.cos(e))/Hr}}function Du(s={}){let e=sa(s.time),t=fc(Number.isFinite(s.azimuth)?s.azimuth:e.azimuth,0,360),n=fc(Number.isFinite(s.elevation)?s.elevation:e.elevation,-90,85),i=Mn.smoothstep(n,-6,12),r=t*Hr,o=n*Hr;return{...e,azimuth:t,elevation:n,daylight:i,intensity:i*(6+3*Math.sin(Math.max(0,o))),colour:new Ie(16777215),direction:new w(Math.sin(r)*Math.cos(o),Math.sin(o),Math.cos(r)*Math.cos(o))}}function xp({scene:s,skylight:e,renderPipeline:t,invalidate:n}){let i=v=>document.getElementById(v),r=i("walk-lighting"),o=i("walk-lighting-panel"),a=i("walk-light-reset"),l=i("walk-light-time"),c=i("walk-light-direction"),h=i("walk-light-elevation"),u="learning-vegas-sun-v1",f=sa(8),d="axonometric",m=!1,x=0,g=!1;try{let v=JSON.parse(localStorage.getItem(u));v&&["time","azimuth","elevation"].every(A=>Number.isFinite(v[A]))&&(f={time:Math.max(0,Math.min(24,v.time)),azimuth:Math.max(0,Math.min(360,v.azimuth)),elevation:Math.max(-90,Math.min(85,v.elevation))})}catch{}function p(){r.hidden=!1,o.hidden=!m,r.setAttribute("aria-pressed",String(!o.hidden)),l.value=String(f.time),c.value=String(f.azimuth),h.value=String(Math.max(-90,f.elevation));let v=Math.round(f.time*60);i("walk-light-time-value").textContent=String(Math.floor(v/60)).padStart(2,"0")+":"+String(v%60).padStart(2,"0"),i("walk-light-direction-value").textContent=Math.round(f.azimuth)+"\xB0",i("walk-light-elevation-value").textContent=Math.round(f.elevation)+"\xB0"}function E(){if(x=0,g)return;let v=e.setLighting(f);t.setLighting(v);let A=s.children.find(U=>U.isHemisphereLight);if(A&&(A.intensity=.035+.045*v.daylight,A.color.set(d==="room"?16777215:14542061),A.groundColor.set(d==="room"?4342338:4338987)),d==="room"){let U=new Ie(2631720).lerp(new Ie(16777215),v.daylight);s.background.copy(U),s.fog&&s.fog.color.copy(U)}n()}function M(v){Number.isFinite(v.time)&&(f=sa(v.time));for(let A of["azimuth","elevation"])Number.isFinite(v[A])&&(f[A]=Math.max(A==="azimuth"?0:-90,Math.min(A==="azimuth"?360:85,v[A])));p(),x||(x=requestAnimationFrame(E));try{localStorage.setItem(u,JSON.stringify(f))}catch{}}let y=()=>{m=!m,p()},S=()=>M(sa(8)),R=()=>M({time:Number(l.value)}),C=()=>M({azimuth:Number(c.value)}),D=()=>M({elevation:Number(h.value)}),_=v=>v.stopPropagation();return r.addEventListener("click",y),a.addEventListener("click",S),l.addEventListener("input",R),c.addEventListener("input",C),h.addEventListener("input",D),o.addEventListener("pointerdown",_),o.addEventListener("wheel",_),o.addEventListener("keydown",_),E(),p(),{set:M,setViewMode:v=>{d=v,p(),E()},state:()=>({...f,open:!o.hidden,daylight:e.state().lighting.daylight}),dispose:()=>{g=!0,x&&cancelAnimationFrame(x),r.removeEventListener("click",y),a.removeEventListener("click",S),l.removeEventListener("input",R),c.removeEventListener("input",C),h.removeEventListener("input",D),o.removeEventListener("pointerdown",_),o.removeEventListener("wheel",_),o.removeEventListener("keydown",_)}}}function yp({scene:s,sun:e}){let t=new pt;t.name="studio-volumetric-sunlight",s.add(t);let n=[],i=[],r=new ds({color:16777215,size:.045,transparent:!0,opacity:.12,depthWrite:!1}),o=30;function a(l){o=l,t.children.forEach(d=>d.geometry.dispose()),i.forEach(d=>d.dispose()),i.length=0,t.clear(),n.length=0;let c=[],h=e.target.position.clone().sub(e.position).normalize(),u=[[-2,l-.5,0],[6,l-.5,0],[-2,l-.5,8],[6,l-.5,8],...[-5,5,15].map(d=>[19.8,l-8,d]),...[-5,5,15].map(d=>[d,l-8,19.8])];if(h.y>=-.02||e.intensity<.01)return;for(let d of u){let m=new w(...d),x=m.y/-h.y,g=m.clone().addScaledVector(h,x),p=new yo(.35,1.5,x,18,1,!0),E={sunDepth:{value:null},sunMatrix:{value:e.shadow.matrix},beamDirection:{value:h},shadowReady:{value:0}},M=new ct({uniforms:E,transparent:!0,depthWrite:!1,side:vt,blending:ks,vertexShader:"varying vec3 beamPosition;varying vec3 beamNormal;varying float alongBeam;void main(){vec4 p=modelMatrix*vec4(position,1.0);beamPosition=p.xyz;beamNormal=normalize(mat3(modelMatrix)*normal);alongBeam=uv.y;gl_Position=projectionMatrix*viewMatrix*p;}",fragmentShader:`#include <packing>
 uniform sampler2D sunDepth;uniform mat4 sunMatrix;uniform float shadowReady;uniform vec3 beamDirection;varying vec3 beamPosition;varying vec3 beamNormal;varying float alongBeam;
 void main(){vec4 q=sunMatrix*vec4(beamPosition,1.0);q.xyz/=q.w;float light=1.0;if(shadowReady>.5&&q.x>0.0&&q.y>0.0&&q.x<1.0&&q.y<1.0){float depth=unpackRGBAToDepth(texture2D(sunDepth,q.xy));light=step(q.z-.0015,depth);}vec3 view=normalize(cameraPosition-beamPosition);float face=pow(abs(dot(view,normalize(beamNormal))),1.7),forward=.30+.70*pow(abs(dot(view,beamDirection)),2.0),fade=pow(max(0.0,sin(3.14159265*alongBeam)),.6);vec3 colour=vec3(1.0);gl_FragColor=vec4(colour,light*face*forward*fade*.22);
 #include <colorspace_fragment>
 }`});i.push(M);let y=new je(p,M);y.position.copy(m).add(g).multiplyScalar(.5),y.quaternion.setFromUnitVectors(new w(0,1,0),h.clone().negate()),y.onBeforeRender=()=>{e.shadow.map&&(E.sunDepth.value=e.shadow.map.texture,E.shadowReady.value=1)},t.add(y),n.push(y);for(let S=0;S<24;S++){let R=(S+.5)/24,C=m.clone().lerp(g,R);C.x+=Math.sin(S*17.1)*(.35+R),C.z+=Math.cos(S*11.3)*(.35+R),c.push(C.x,C.y,C.z)}}let f=new bt;f.setAttribute("position",new gt(c,3)),t.add(new Os(f,r))}return{setHeight:a,setVisible:l=>t.visible=!!l,state:()=>({beams:n.length,visible:t.visible,height:o,shadowMasked:!0,dustParticles:n.length*24}),dispose:()=>{s.remove(t),t.children.forEach(l=>l.geometry.dispose()),i.forEach(l=>l.dispose()),r.dispose()}}}var pc=400/100;function vp({scene:s,renderer:e,height:t,floorMaterial:n,openAtmosphere:i=!1}){let r=new pt;r.name="steel-glass-skylight",s.add(r);let o=new Yt({color:6252656,roughness:.48,metalness:.65}),a=new jt({color:15200756,roughness:.09,metalness:.02,transparent:!0,opacity:.18,depthWrite:!1,clearcoat:1,clearcoatRoughness:.06,side:vt}),l=new je(new tn(40,40),a);l.name="skylight-glazing",l.rotation.x=-Math.PI/2,l.position.y=.12,r.add(l);let c=[];for(let M=-20;M<=20;M+=4)for(let y of[!0,!1]){let S=new je(new dn(y?40:.16,.18,y?.16:40),o);S.position.set(y?0:M,0,y?M:0),S.name="skylight-steel-beam",S.castShadow=!0,S.receiveShadow=!0,r.add(S),c.push(S)}let h=new di(16777215,9);h.name="gallery-sunlight",h.castShadow=!0,h.shadow.mapSize.set(2048,2048),Object.assign(h.shadow.camera,{left:-110,right:110,top:110,bottom:-110,near:.1,far:380*pc}),h.shadow.normalBias=.025*pc,h.shadow.bias=-15e-5,h.shadow.radius=1.1,h.target.position.set(0,0,0),s.add(h,h.target);let u=yp({scene:s,sun:h}),f=!0,d=t,m=Du({time:8});function x(){h.position.copy(m.direction).multiplyScalar(Math.max(180*pc,d*2+100)),h.color.copy(m.colour),h.intensity=m.intensity,u.setHeight(d),h.shadow.camera.updateProjectionMatrix(),e.shadowMap.needsUpdate=!0}function g(M){d=M,r.position.y=M-.15,x()}function p(M){return m=Du(M),x(),m}function E(M){f=!!M,r.visible=f&&!i,u.setVisible(f),h.castShadow=f,e.shadowMap.enabled=f,e.shadowMap.needsUpdate=!0}return g(t),{setHeight:g,setLighting:p,setRoomMode:E,updateCanopy:(M,y)=>{if(M&&y){let S=Math.max(25,Math.min(110*pc,M.bounds.getSize(new w).length()*.7+10));Object.assign(h.shadow.camera,{left:-S,right:S,top:S,bottom:-S}),h.shadow.camera.updateProjectionMatrix(),e.shadowMap.needsUpdate=!0}},state:()=>({lighting:{time:m.time,azimuth:m.azimuth,elevation:m.elevation,daylight:m.daylight,intensity:h.intensity,colour:"#"+h.color.getHexString(),sunPosition:h.position.toArray()},visible:r.visible,glass:!i,steelBeams:i?0:c.length,height:r.position.y+.15,shadowCasting:f&&h.castShadow,shadowResolution:2048,colouredLight:{active:!1,ordinaryShadows:!0},volumetric:u.state()}),dispose:()=>{u.dispose(),s.remove(r,h,h.target),r.children.forEach(M=>M.geometry.dispose()),o.dispose(),a.dispose(),h.shadow.map?.dispose()}}}var _p={POSITION:["byte","byte normalized","unsigned byte","unsigned byte normalized","short","short normalized","unsigned short","unsigned short normalized"],NORMAL:["byte normalized","short normalized"],TANGENT:["byte normalized","short normalized"],TEXCOORD:["byte","byte normalized","unsigned byte","short","short normalized","unsigned short"]},ws=class{constructor(){this.textureUtils=null,this.pluginCallbacks=[],this.register(function(e){return new Ou(e)}),this.register(function(e){return new Fu(e)}),this.register(function(e){return new Hu(e)}),this.register(function(e){return new Vu(e)}),this.register(function(e){return new Gu(e)}),this.register(function(e){return new Wu(e)}),this.register(function(e){return new Bu(e)}),this.register(function(e){return new zu(e)}),this.register(function(e){return new ku(e)}),this.register(function(e){return new Xu(e)}),this.register(function(e){return new qu(e)}),this.register(function(e){return new Yu(e)}),this.register(function(e){return new ju(e)}),this.register(function(e){return new Zu(e)})}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}setTextureUtils(e){return this.textureUtils=e,this}parse(e,t,n,i){let r=new Uu,o=[];for(let a=0,l=this.pluginCallbacks.length;a<l;a++)o.push(this.pluginCallbacks[a](r));r.setPlugins(o),r.setTextureUtils(this.textureUtils),r.writeAsync(e,t,i).catch(n)}parseAsync(e,t){let n=this;return new Promise(function(i,r){n.parse(e,i,r,t)})}},dt={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,BYTE:5120,UNSIGNED_BYTE:5121,SHORT:5122,UNSIGNED_SHORT:5123,INT:5124,UNSIGNED_INT:5125,FLOAT:5126,ARRAY_BUFFER:34962,ELEMENT_ARRAY_BUFFER:34963,NEAREST:9728,LINEAR:9729,NEAREST_MIPMAP_NEAREST:9984,LINEAR_MIPMAP_NEAREST:9985,NEAREST_MIPMAP_LINEAR:9986,LINEAR_MIPMAP_LINEAR:9987,CLAMP_TO_EDGE:33071,MIRRORED_REPEAT:33648,REPEAT:10497},Lu="KHR_mesh_quantization",Wn={};Wn[xt]=dt.NEAREST;Wn[Pr]=dt.NEAREST_MIPMAP_NEAREST;Wn[Ji]=dt.NEAREST_MIPMAP_LINEAR;Wn[$t]=dt.LINEAR;Wn[gs]=dt.LINEAR_MIPMAP_NEAREST;Wn[pn]=dt.LINEAR_MIPMAP_LINEAR;Wn[Kn]=dt.CLAMP_TO_EDGE;Wn[hn]=dt.REPEAT;Wn[as]=dt.MIRRORED_REPEAT;var Mp={scale:"scale",position:"translation",quaternion:"rotation",morphTargetInfluences:"weights"},Kv=new Ie,Sp=12,Jv=1179937895,$v=2,bp=8,Qv=1313821514,e_=5130562;function ra(s,e){return s.length===e.length&&s.every(function(t,n){return t===e[n]})}function t_(s){return new TextEncoder().encode(s).buffer}function n_(s){return ra(s.elements,[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}function i_(s,e,t){let n={min:new Array(s.itemSize).fill(Number.POSITIVE_INFINITY),max:new Array(s.itemSize).fill(Number.NEGATIVE_INFINITY)};for(let i=e;i<e+t;i++)for(let r=0;r<s.itemSize;r++){let o;s.itemSize>4?o=s.array[i*s.itemSize+r]:(r===0?o=s.getX(i):r===1?o=s.getY(i):r===2?o=s.getZ(i):r===3&&(o=s.getW(i)),s.normalized===!0&&(o=Mn.normalize(o,s.array))),n.min[r]=Math.min(n.min[r],o),n.max[r]=Math.max(n.max[r],o)}return n}function wp(s){return Math.ceil(s/4)*4}function Nu(s,e=0){let t=wp(s.byteLength);if(t!==s.byteLength){let n=new Uint8Array(t);if(n.set(new Uint8Array(s)),e!==0)for(let i=s.byteLength;i<t;i++)n[i]=e;return n.buffer}return s}function Ep(){return typeof document>"u"&&typeof OffscreenCanvas<"u"?new OffscreenCanvas(1,1):document.createElement("canvas")}function s_(s,e){if(typeof OffscreenCanvas<"u"&&s instanceof OffscreenCanvas){let t;return e==="image/jpeg"?t=.92:e==="image/webp"&&(t=.8),s.convertToBlob({type:e,quality:t})}else return new Promise(t=>s.toBlob(t,e))}var Uu=class{constructor(){this.plugins=[],this.options={},this.pending=[],this.buffers=[],this.byteOffset=0,this.buffers=[],this.nodeMap=new Map,this.skins=[],this.extensionsUsed={},this.extensionsRequired={},this.uids=new Map,this.uid=0,this.json={asset:{version:"2.0",generator:"THREE.GLTFExporter r180"}},this.cache={meshes:new Map,attributes:new Map,attributesNormalized:new Map,materials:new Map,textures:new Map,images:new Map},this.textureUtils=null}setPlugins(e){this.plugins=e}setTextureUtils(e){this.textureUtils=e}async writeAsync(e,t,n={}){this.options=Object.assign({binary:!1,trs:!1,onlyVisible:!0,maxTextureSize:1/0,animations:[],includeCustomExtensions:!1},n),this.options.animations.length>0&&(this.options.trs=!0),await this.processInputAsync(e),await Promise.all(this.pending);let i=this,r=i.buffers,o=i.json;n=i.options;let a=i.extensionsUsed,l=i.extensionsRequired,c=new Blob(r,{type:"application/octet-stream"}),h=Object.keys(a),u=Object.keys(l);if(h.length>0&&(o.extensionsUsed=h),u.length>0&&(o.extensionsRequired=u),o.buffers&&o.buffers.length>0&&(o.buffers[0].byteLength=c.size),n.binary===!0){let f=new FileReader;f.readAsArrayBuffer(c),f.onloadend=function(){let d=Nu(f.result),m=new DataView(new ArrayBuffer(bp));m.setUint32(0,d.byteLength,!0),m.setUint32(4,e_,!0);let x=Nu(t_(JSON.stringify(o)),32),g=new DataView(new ArrayBuffer(bp));g.setUint32(0,x.byteLength,!0),g.setUint32(4,Qv,!0);let p=new ArrayBuffer(Sp),E=new DataView(p);E.setUint32(0,Jv,!0),E.setUint32(4,$v,!0);let M=Sp+g.byteLength+x.byteLength+m.byteLength+d.byteLength;E.setUint32(8,M,!0);let y=new Blob([p,g,x,m,d],{type:"application/octet-stream"}),S=new FileReader;S.readAsArrayBuffer(y),S.onloadend=function(){t(S.result)}}}else if(o.buffers&&o.buffers.length>0){let f=new FileReader;f.readAsDataURL(c),f.onloadend=function(){let d=f.result;o.buffers[0].uri=d,t(o)}}else t(o)}serializeUserData(e,t){if(Object.keys(e.userData).length===0)return;let n=this.options,i=this.extensionsUsed;try{let r=JSON.parse(JSON.stringify(e.userData));if(n.includeCustomExtensions&&r.gltfExtensions){t.extensions===void 0&&(t.extensions={});for(let o in r.gltfExtensions)t.extensions[o]=r.gltfExtensions[o],i[o]=!0;delete r.gltfExtensions}Object.keys(r).length>0&&(t.extras=r)}catch(r){console.warn("THREE.GLTFExporter: userData of '"+e.name+"' won't be serialized because of JSON.stringify error - "+r.message)}}getUID(e,t=!1){if(this.uids.has(e)===!1){let i=new Map;i.set(!0,this.uid++),i.set(!1,this.uid++),this.uids.set(e,i)}return this.uids.get(e).get(t)}isNormalizedNormalAttribute(e){if(this.cache.attributesNormalized.has(e))return!1;let n=new w;for(let i=0,r=e.count;i<r;i++)if(Math.abs(n.fromBufferAttribute(e,i).length()-1)>5e-4)return!1;return!0}createNormalizedNormalAttribute(e){let t=this.cache;if(t.attributesNormalized.has(e))return t.attributesNormalized.get(e);let n=e.clone(),i=new w;for(let r=0,o=n.count;r<o;r++)i.fromBufferAttribute(n,r),i.x===0&&i.y===0&&i.z===0?i.setX(1):i.normalize(),n.setXYZ(r,i.x,i.y,i.z);return t.attributesNormalized.set(e,n),n}applyTextureTransform(e,t){let n=!1,i={};(t.offset.x!==0||t.offset.y!==0)&&(i.offset=t.offset.toArray(),n=!0),t.rotation!==0&&(i.rotation=t.rotation,n=!0),(t.repeat.x!==1||t.repeat.y!==1)&&(i.scale=t.repeat.toArray(),n=!0),n&&(e.extensions=e.extensions||{},e.extensions.KHR_texture_transform=i,this.extensionsUsed.KHR_texture_transform=!0)}async buildMetalRoughTextureAsync(e,t){if(e===t)return e;function n(d){return d.colorSpace===St?function(x){return x<.04045?x*.0773993808:Math.pow(x*.9478672986+.0521327014,2.4)}:function(x){return x}}e instanceof Fs&&(e=await this.decompressTextureAsync(e)),t instanceof Fs&&(t=await this.decompressTextureAsync(t));let i=e?e.image:null,r=t?t.image:null,o=Math.max(i?i.width:0,r?r.width:0),a=Math.max(i?i.height:0,r?r.height:0),l=Ep();l.width=o,l.height=a;let c=l.getContext("2d",{willReadFrequently:!0});c.fillStyle="#00ffff",c.fillRect(0,0,o,a);let h=c.getImageData(0,0,o,a);if(i){c.drawImage(i,0,0,o,a);let d=n(e),m=c.getImageData(0,0,o,a).data;for(let x=2;x<m.length;x+=4)h.data[x]=d(m[x]/256)*256}if(r){c.drawImage(r,0,0,o,a);let d=n(t),m=c.getImageData(0,0,o,a).data;for(let x=1;x<m.length;x+=4)h.data[x]=d(m[x]/256)*256}c.putImageData(h,0,0);let f=(e||t).clone();return f.source=new ls(l),f.colorSpace=pi,f.channel=(e||t).channel,e&&t&&e.channel!==t.channel&&console.warn("THREE.GLTFExporter: UV channels for metalnessMap and roughnessMap textures must match."),console.warn("THREE.GLTFExporter: Merged metalnessMap and roughnessMap textures."),f}async decompressTextureAsync(e,t=1/0){if(this.textureUtils===null)throw new Error("THREE.GLTFExporter: setTextureUtils() must be called to process compressed textures.");return await this.textureUtils.decompress(e,t)}processBuffer(e){let t=this.json,n=this.buffers;return t.buffers||(t.buffers=[{byteLength:0}]),n.push(e),0}processBufferView(e,t,n,i,r){let o=this.json;o.bufferViews||(o.bufferViews=[]);let a;switch(t){case dt.BYTE:case dt.UNSIGNED_BYTE:a=1;break;case dt.SHORT:case dt.UNSIGNED_SHORT:a=2;break;default:a=4}let l=e.itemSize*a;r===dt.ARRAY_BUFFER&&(l=Math.ceil(l/4)*4);let c=wp(i*l),h=new DataView(new ArrayBuffer(c)),u=0;for(let m=n;m<n+i;m++){for(let x=0;x<e.itemSize;x++){let g;e.itemSize>4?g=e.array[m*e.itemSize+x]:(x===0?g=e.getX(m):x===1?g=e.getY(m):x===2?g=e.getZ(m):x===3&&(g=e.getW(m)),e.normalized===!0&&(g=Mn.normalize(g,e.array))),t===dt.FLOAT?h.setFloat32(u,g,!0):t===dt.INT?h.setInt32(u,g,!0):t===dt.UNSIGNED_INT?h.setUint32(u,g,!0):t===dt.SHORT?h.setInt16(u,g,!0):t===dt.UNSIGNED_SHORT?h.setUint16(u,g,!0):t===dt.BYTE?h.setInt8(u,g):t===dt.UNSIGNED_BYTE&&h.setUint8(u,g),u+=a}u%l!==0&&(u+=l-u%l)}let f={buffer:this.processBuffer(h.buffer),byteOffset:this.byteOffset,byteLength:c};return r!==void 0&&(f.target=r),r===dt.ARRAY_BUFFER&&(f.byteStride=l),this.byteOffset+=c,o.bufferViews.push(f),{id:o.bufferViews.length-1,byteLength:0}}processBufferViewImage(e){let t=this,n=t.json;return n.bufferViews||(n.bufferViews=[]),new Promise(function(i){let r=new FileReader;r.readAsArrayBuffer(e),r.onloadend=function(){let o=Nu(r.result),a={buffer:t.processBuffer(o),byteOffset:t.byteOffset,byteLength:o.byteLength};t.byteOffset+=o.byteLength,i(n.bufferViews.push(a)-1)}})}processAccessor(e,t,n,i){let r=this.json,o={1:"SCALAR",2:"VEC2",3:"VEC3",4:"VEC4",9:"MAT3",16:"MAT4"},a;if(e.array.constructor===Float32Array)a=dt.FLOAT;else if(e.array.constructor===Int32Array)a=dt.INT;else if(e.array.constructor===Uint32Array)a=dt.UNSIGNED_INT;else if(e.array.constructor===Int16Array)a=dt.SHORT;else if(e.array.constructor===Uint16Array)a=dt.UNSIGNED_SHORT;else if(e.array.constructor===Int8Array)a=dt.BYTE;else if(e.array.constructor===Uint8Array)a=dt.UNSIGNED_BYTE;else throw new Error("THREE.GLTFExporter: Unsupported bufferAttribute component type: "+e.array.constructor.name);if(n===void 0&&(n=0),(i===void 0||i===1/0)&&(i=e.count),i===0)return null;let l=i_(e,n,i),c;t!==void 0&&(c=e===t.index?dt.ELEMENT_ARRAY_BUFFER:dt.ARRAY_BUFFER);let h=this.processBufferView(e,a,n,i,c),u={bufferView:h.id,byteOffset:h.byteOffset,componentType:a,count:i,max:l.max,min:l.min,type:o[e.itemSize]};return e.normalized===!0&&(u.normalized=!0),r.accessors||(r.accessors=[]),r.accessors.push(u)-1}processImage(e,t,n,i="image/png"){if(e!==null){let r=this,o=r.cache,a=r.json,l=r.options,c=r.pending;o.images.has(e)||o.images.set(e,{});let h=o.images.get(e),u=i+":flipY/"+n.toString();if(h[u]!==void 0)return h[u];a.images||(a.images=[]);let f={mimeType:i},d=Ep();d.width=Math.min(e.width,l.maxTextureSize),d.height=Math.min(e.height,l.maxTextureSize);let m=d.getContext("2d",{willReadFrequently:!0});if(n===!0&&(m.translate(0,d.height),m.scale(1,-1)),e.data!==void 0){t!==nn&&console.error("GLTFExporter: Only RGBAFormat is supported.",t),(e.width>l.maxTextureSize||e.height>l.maxTextureSize)&&console.warn("GLTFExporter: Image size is bigger than maxTextureSize",e);let g=new Uint8ClampedArray(e.height*e.width*4);for(let p=0;p<g.length;p+=4)g[p+0]=e.data[p+0],g[p+1]=e.data[p+1],g[p+2]=e.data[p+2],g[p+3]=e.data[p+3];m.putImageData(new ImageData(g,e.width,e.height),0,0)}else if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap||typeof OffscreenCanvas<"u"&&e instanceof OffscreenCanvas)m.drawImage(e,0,0,d.width,d.height);else throw new Error("THREE.GLTFExporter: Invalid image type. Use HTMLImageElement, HTMLCanvasElement, ImageBitmap or OffscreenCanvas.");l.binary===!0?c.push(s_(d,i).then(g=>r.processBufferViewImage(g)).then(g=>{f.bufferView=g})):f.uri=_r.getDataURL(d,i);let x=a.images.push(f)-1;return h[u]=x,x}else throw new Error("THREE.GLTFExporter: No valid image data found. Unable to process texture.")}processSampler(e){let t=this.json;t.samplers||(t.samplers=[]);let n={magFilter:Wn[e.magFilter],minFilter:Wn[e.minFilter],wrapS:Wn[e.wrapS],wrapT:Wn[e.wrapT]};return t.samplers.push(n)-1}async processTextureAsync(e){let n=this.options,i=this.cache,r=this.json;if(i.textures.has(e))return i.textures.get(e);r.textures||(r.textures=[]),e instanceof Fs&&(e=await this.decompressTextureAsync(e,n.maxTextureSize));let o=e.userData.mimeType;o==="image/webp"&&(o="image/png");let a={sampler:this.processSampler(e),source:this.processImage(e.image,e.format,e.flipY,o)};e.name&&(a.name=e.name),await this._invokeAllAsync(async function(c){c.writeTexture&&await c.writeTexture(e,a)});let l=r.textures.push(a)-1;return i.textures.set(e,l),l}async processMaterialAsync(e){let t=this.cache,n=this.json;if(t.materials.has(e))return t.materials.get(e);if(e.isShaderMaterial)return console.warn("GLTFExporter: THREE.ShaderMaterial not supported."),null;n.materials||(n.materials=[]);let i={pbrMetallicRoughness:{}};e.isMeshStandardMaterial!==!0&&e.isMeshBasicMaterial!==!0&&console.warn("GLTFExporter: Use MeshStandardMaterial or MeshBasicMaterial for best results.");let r=e.color.toArray().concat([e.opacity]);if(ra(r,[1,1,1,1])||(i.pbrMetallicRoughness.baseColorFactor=r),e.isMeshStandardMaterial?(i.pbrMetallicRoughness.metallicFactor=e.metalness,i.pbrMetallicRoughness.roughnessFactor=e.roughness):(i.pbrMetallicRoughness.metallicFactor=0,i.pbrMetallicRoughness.roughnessFactor=1),e.metalnessMap||e.roughnessMap){let a=await this.buildMetalRoughTextureAsync(e.metalnessMap,e.roughnessMap),l={index:await this.processTextureAsync(a),texCoord:a.channel};this.applyTextureTransform(l,a),i.pbrMetallicRoughness.metallicRoughnessTexture=l}if(e.map){let a={index:await this.processTextureAsync(e.map),texCoord:e.map.channel};this.applyTextureTransform(a,e.map),i.pbrMetallicRoughness.baseColorTexture=a}if(e.emissive){let a=e.emissive;if(Math.max(a.r,a.g,a.b)>0&&(i.emissiveFactor=e.emissive.toArray()),e.emissiveMap){let c={index:await this.processTextureAsync(e.emissiveMap),texCoord:e.emissiveMap.channel};this.applyTextureTransform(c,e.emissiveMap),i.emissiveTexture=c}}if(e.normalMap){let a={index:await this.processTextureAsync(e.normalMap),texCoord:e.normalMap.channel};e.normalScale&&e.normalScale.x!==1&&(a.scale=e.normalScale.x),this.applyTextureTransform(a,e.normalMap),i.normalTexture=a}if(e.aoMap){let a={index:await this.processTextureAsync(e.aoMap),texCoord:e.aoMap.channel};e.aoMapIntensity!==1&&(a.strength=e.aoMapIntensity),this.applyTextureTransform(a,e.aoMap),i.occlusionTexture=a}e.transparent?i.alphaMode="BLEND":e.alphaTest>0&&(i.alphaMode="MASK",i.alphaCutoff=e.alphaTest),e.side===vt&&(i.doubleSided=!0),e.name!==""&&(i.name=e.name),this.serializeUserData(e,i),await this._invokeAllAsync(async function(a){a.writeMaterialAsync&&await a.writeMaterialAsync(e,i)});let o=n.materials.push(i)-1;return t.materials.set(e,o),o}async processMeshAsync(e){let t=this.cache,n=this.json,i=[e.geometry.uuid];if(Array.isArray(e.material))for(let y=0,S=e.material.length;y<S;y++)i.push(e.material[y].uuid);else i.push(e.material.uuid);let r=i.join(":");if(t.meshes.has(r))return t.meshes.get(r);let o=e.geometry,a;e.isLineSegments?a=dt.LINES:e.isLineLoop?a=dt.LINE_LOOP:e.isLine?a=dt.LINE_STRIP:e.isPoints?a=dt.POINTS:a=e.material.wireframe?dt.LINES:dt.TRIANGLES;let l={},c={},h=[],u=[],f={uv:"TEXCOORD_0",uv1:"TEXCOORD_1",uv2:"TEXCOORD_2",uv3:"TEXCOORD_3",color:"COLOR_0",skinWeight:"WEIGHTS_0",skinIndex:"JOINTS_0"},d=o.getAttribute("normal");d!==void 0&&!this.isNormalizedNormalAttribute(d)&&(console.warn("THREE.GLTFExporter: Creating normalized normal attribute from the non-normalized one."),o.setAttribute("normal",this.createNormalizedNormalAttribute(d)));let m=null;for(let y in o.attributes){if(y.slice(0,5)==="morph")continue;let S=o.attributes[y];if(y=f[y]||y.toUpperCase(),/^(POSITION|NORMAL|TANGENT|TEXCOORD_\d+|COLOR_\d+|JOINTS_\d+|WEIGHTS_\d+)$/.test(y)||(y="_"+y),t.attributes.has(this.getUID(S))){c[y]=t.attributes.get(this.getUID(S));continue}m=null;let C=S.array;y==="JOINTS_0"&&!(C instanceof Uint16Array)&&!(C instanceof Uint8Array)?(console.warn('GLTFExporter: Attribute "skinIndex" converted to type UNSIGNED_SHORT.'),m=new nt(new Uint16Array(C),S.itemSize,S.normalized)):(C instanceof Uint32Array||C instanceof Int32Array)&&!y.startsWith("_")&&(console.warn(`GLTFExporter: Attribute "${y}" converted to type FLOAT.`),m=ws.Utils.toFloat32BufferAttribute(S));let D=this.processAccessor(m||S,o);D!==null&&(y.startsWith("_")||this.detectMeshQuantization(y,S),c[y]=D,t.attributes.set(this.getUID(S),D))}if(d!==void 0&&o.setAttribute("normal",d),Object.keys(c).length===0)return null;if(e.morphTargetInfluences!==void 0&&e.morphTargetInfluences.length>0){let y=[],S=[],R={};if(e.morphTargetDictionary!==void 0)for(let C in e.morphTargetDictionary)R[e.morphTargetDictionary[C]]=C;for(let C=0;C<e.morphTargetInfluences.length;++C){let D={},_=!1;for(let v in o.morphAttributes){if(v!=="position"&&v!=="normal"){_||(console.warn("GLTFExporter: Only POSITION and NORMAL morph are supported."),_=!0);continue}let A=o.morphAttributes[v][C],U=v.toUpperCase(),k=o.attributes[v];if(t.attributes.has(this.getUID(A,!0))){D[U]=t.attributes.get(this.getUID(A,!0));continue}let F=A.clone();if(!o.morphTargetsRelative)for(let z=0,G=A.count;z<G;z++)for(let ie=0;ie<A.itemSize;ie++)ie===0&&F.setX(z,A.getX(z)-k.getX(z)),ie===1&&F.setY(z,A.getY(z)-k.getY(z)),ie===2&&F.setZ(z,A.getZ(z)-k.getZ(z)),ie===3&&F.setW(z,A.getW(z)-k.getW(z));D[U]=this.processAccessor(F,o),t.attributes.set(this.getUID(k,!0),D[U])}u.push(D),y.push(e.morphTargetInfluences[C]),e.morphTargetDictionary!==void 0&&S.push(R[C])}l.weights=y,S.length>0&&(l.extras={},l.extras.targetNames=S)}let x=Array.isArray(e.material);if(x&&o.groups.length===0)return null;let g=!1;if(x&&o.index===null){let y=[];for(let S=0,R=o.attributes.position.count;S<R;S++)y[S]=S;o.setIndex(y),g=!0}let p=x?e.material:[e.material],E=x?o.groups:[{materialIndex:0,start:void 0,count:void 0}];for(let y=0,S=E.length;y<S;y++){let R={mode:a,attributes:c};if(this.serializeUserData(o,R),u.length>0&&(R.targets=u),o.index!==null){let D=this.getUID(o.index);(E[y].start!==void 0||E[y].count!==void 0)&&(D+=":"+E[y].start+":"+E[y].count),t.attributes.has(D)?R.indices=t.attributes.get(D):(R.indices=this.processAccessor(o.index,o,E[y].start,E[y].count),t.attributes.set(D,R.indices)),R.indices===null&&delete R.indices}let C=await this.processMaterialAsync(p[E[y].materialIndex]);C!==null&&(R.material=C),h.push(R)}g===!0&&o.setIndex(null),l.primitives=h,n.meshes||(n.meshes=[]),await this._invokeAllAsync(function(y){y.writeMesh&&y.writeMesh(e,l)});let M=n.meshes.push(l)-1;return t.meshes.set(r,M),M}detectMeshQuantization(e,t){if(this.extensionsUsed[Lu])return;let n;switch(t.array.constructor){case Int8Array:n="byte";break;case Uint8Array:n="unsigned byte";break;case Int16Array:n="short";break;case Uint16Array:n="unsigned short";break;default:return}t.normalized&&(n+=" normalized");let i=e.split("_",1)[0];_p[i]&&_p[i].includes(n)&&(this.extensionsUsed[Lu]=!0,this.extensionsRequired[Lu]=!0)}processCamera(e){let t=this.json;t.cameras||(t.cameras=[]);let n=e.isOrthographicCamera,i={type:n?"orthographic":"perspective"};return n?i.orthographic={xmag:e.right*2,ymag:e.top*2,zfar:e.far<=0?.001:e.far,znear:e.near<0?0:e.near}:i.perspective={aspectRatio:e.aspect,yfov:Mn.degToRad(e.fov),zfar:e.far<=0?.001:e.far,znear:e.near<0?0:e.near},e.name!==""&&(i.name=e.type),t.cameras.push(i)-1}processAnimation(e,t){let n=this.json,i=this.nodeMap;n.animations||(n.animations=[]),e=ws.Utils.mergeMorphTargetTracks(e.clone(),t);let r=e.tracks,o=[],a=[];for(let c=0;c<r.length;++c){let h=r[c],u=wt.parseTrackName(h.name),f=wt.findNode(t,u.nodeName),d=Mp[u.propertyName];if(u.objectName==="bones"&&(f.isSkinnedMesh===!0?f=f.skeleton.getBoneByName(u.objectIndex):f=void 0),!f||!d){console.warn('THREE.GLTFExporter: Could not export animation track "%s".',h.name);continue}let m=1,x=h.values.length/h.times.length;d===Mp.morphTargetInfluences&&(x/=f.morphTargetInfluences.length);let g;h.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline===!0?(g="CUBICSPLINE",x/=3):h.getInterpolation()===ki?g="STEP":g="LINEAR",a.push({input:this.processAccessor(new nt(h.times,m)),output:this.processAccessor(new nt(h.values,x)),interpolation:g}),o.push({sampler:a.length-1,target:{node:i.get(f),path:d}})}let l={name:e.name||"clip_"+n.animations.length,samplers:a,channels:o};return this.serializeUserData(e,l),n.animations.push(l),n.animations.length-1}processSkin(e){let t=this.json,n=this.nodeMap,i=t.nodes[n.get(e)],r=e.skeleton;if(r===void 0)return null;let o=e.skeleton.bones[0];if(o===void 0)return null;let a=[],l=new Float32Array(r.bones.length*16),c=new He;for(let u=0;u<r.bones.length;++u)a.push(n.get(r.bones[u])),c.copy(r.boneInverses[u]),c.multiply(e.bindMatrix).toArray(l,u*16);return t.skins===void 0&&(t.skins=[]),t.skins.push({inverseBindMatrices:this.processAccessor(new nt(l,16)),joints:a,skeleton:n.get(o)}),i.skin=t.skins.length-1}async processNodeAsync(e){let t=this.json,n=this.options,i=this.nodeMap;t.nodes||(t.nodes=[]);let r={};if(n.trs){let a=e.quaternion.toArray(),l=e.position.toArray(),c=e.scale.toArray();ra(a,[0,0,0,1])||(r.rotation=a),ra(l,[0,0,0])||(r.translation=l),ra(c,[1,1,1])||(r.scale=c)}else e.matrixAutoUpdate&&e.updateMatrix(),n_(e.matrix)===!1&&(r.matrix=e.matrix.elements);if(e.name!==""&&(r.name=String(e.name)),this.serializeUserData(e,r),e.isMesh||e.isLine||e.isPoints){let a=await this.processMeshAsync(e);a!==null&&(r.mesh=a)}else e.isCamera&&(r.camera=this.processCamera(e));e.isSkinnedMesh&&this.skins.push(e);let o=t.nodes.push(r)-1;if(i.set(e,o),e.children.length>0){let a=[];for(let l=0,c=e.children.length;l<c;l++){let h=e.children[l];if(h.visible||n.onlyVisible===!1){let u=await this.processNodeAsync(h);u!==null&&a.push(u)}}a.length>0&&(r.children=a)}return await this._invokeAllAsync(function(a){a.writeNode&&a.writeNode(e,r)}),o}async processSceneAsync(e){let t=this.json,n=this.options;t.scenes||(t.scenes=[],t.scene=0);let i={};e.name!==""&&(i.name=e.name),t.scenes.push(i);let r=[];for(let o=0,a=e.children.length;o<a;o++){let l=e.children[o];if(l.visible||n.onlyVisible===!1){let c=await this.processNodeAsync(l);c!==null&&r.push(c)}}r.length>0&&(i.nodes=r),this.serializeUserData(e,i)}async processObjectsAsync(e){let t=new en;t.name="AuxScene";for(let n=0;n<e.length;n++)t.children.push(e[n]);await this.processSceneAsync(t)}async processInputAsync(e){let t=this.options;e=e instanceof Array?e:[e],await this._invokeAllAsync(function(i){i.beforeParse&&i.beforeParse(e)});let n=[];for(let i=0;i<e.length;i++)e[i]instanceof en?await this.processSceneAsync(e[i]):n.push(e[i]);n.length>0&&await this.processObjectsAsync(n);for(let i=0;i<this.skins.length;++i)this.processSkin(this.skins[i]);for(let i=0;i<t.animations.length;++i)this.processAnimation(t.animations[i],e[0]);await this._invokeAllAsync(function(i){i.afterParse&&i.afterParse(e)})}async _invokeAllAsync(e){for(let t=0,n=this.plugins.length;t<n;t++)await e(this.plugins[t])}},Ou=class{constructor(e){this.writer=e,this.name="KHR_lights_punctual"}writeNode(e,t){if(!e.isLight)return;if(!e.isDirectionalLight&&!e.isPointLight&&!e.isSpotLight){console.warn("THREE.GLTFExporter: Only directional, point, and spot lights are supported.",e);return}let n=this.writer,i=n.json,r=n.extensionsUsed,o={};e.name&&(o.name=e.name),o.color=e.color.toArray(),o.intensity=e.intensity,e.isDirectionalLight?o.type="directional":e.isPointLight?(o.type="point",e.distance>0&&(o.range=e.distance)):e.isSpotLight&&(o.type="spot",e.distance>0&&(o.range=e.distance),o.spot={},o.spot.innerConeAngle=(1-e.penumbra)*e.angle,o.spot.outerConeAngle=e.angle),e.decay!==void 0&&e.decay!==2&&console.warn("THREE.GLTFExporter: Light decay may be lost. glTF is physically-based, and expects light.decay=2."),e.target&&(e.target.parent!==e||e.target.position.x!==0||e.target.position.y!==0||e.target.position.z!==-1)&&console.warn("THREE.GLTFExporter: Light direction may be lost. For best results, make light.target a child of the light with position 0,0,-1."),r[this.name]||(i.extensions=i.extensions||{},i.extensions[this.name]={lights:[]},r[this.name]=!0);let a=i.extensions[this.name].lights;a.push(o),t.extensions=t.extensions||{},t.extensions[this.name]={light:a.length-1}}},Fu=class{constructor(e){this.writer=e,this.name="KHR_materials_unlit"}async writeMaterialAsync(e,t){if(!e.isMeshBasicMaterial)return;let i=this.writer.extensionsUsed;t.extensions=t.extensions||{},t.extensions[this.name]={},i[this.name]=!0,t.pbrMetallicRoughness.metallicFactor=0,t.pbrMetallicRoughness.roughnessFactor=.9}},Bu=class{constructor(e){this.writer=e,this.name="KHR_materials_clearcoat"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.clearcoat===0)return;let n=this.writer,i=n.extensionsUsed,r={};if(r.clearcoatFactor=e.clearcoat,e.clearcoatMap){let o={index:await n.processTextureAsync(e.clearcoatMap),texCoord:e.clearcoatMap.channel};n.applyTextureTransform(o,e.clearcoatMap),r.clearcoatTexture=o}if(r.clearcoatRoughnessFactor=e.clearcoatRoughness,e.clearcoatRoughnessMap){let o={index:await n.processTextureAsync(e.clearcoatRoughnessMap),texCoord:e.clearcoatRoughnessMap.channel};n.applyTextureTransform(o,e.clearcoatRoughnessMap),r.clearcoatRoughnessTexture=o}if(e.clearcoatNormalMap){let o={index:await n.processTextureAsync(e.clearcoatNormalMap),texCoord:e.clearcoatNormalMap.channel};e.clearcoatNormalScale.x!==1&&(o.scale=e.clearcoatNormalScale.x),n.applyTextureTransform(o,e.clearcoatNormalMap),r.clearcoatNormalTexture=o}t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}},zu=class{constructor(e){this.writer=e,this.name="KHR_materials_dispersion"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.dispersion===0)return;let i=this.writer.extensionsUsed,r={};r.dispersion=e.dispersion,t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}},ku=class{constructor(e){this.writer=e,this.name="KHR_materials_iridescence"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.iridescence===0)return;let n=this.writer,i=n.extensionsUsed,r={};if(r.iridescenceFactor=e.iridescence,e.iridescenceMap){let o={index:await n.processTextureAsync(e.iridescenceMap),texCoord:e.iridescenceMap.channel};n.applyTextureTransform(o,e.iridescenceMap),r.iridescenceTexture=o}if(r.iridescenceIor=e.iridescenceIOR,r.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],r.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1],e.iridescenceThicknessMap){let o={index:await n.processTextureAsync(e.iridescenceThicknessMap),texCoord:e.iridescenceThicknessMap.channel};n.applyTextureTransform(o,e.iridescenceThicknessMap),r.iridescenceThicknessTexture=o}t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}},Hu=class{constructor(e){this.writer=e,this.name="KHR_materials_transmission"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.transmission===0)return;let n=this.writer,i=n.extensionsUsed,r={};if(r.transmissionFactor=e.transmission,e.transmissionMap){let o={index:await n.processTextureAsync(e.transmissionMap),texCoord:e.transmissionMap.channel};n.applyTextureTransform(o,e.transmissionMap),r.transmissionTexture=o}t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}},Vu=class{constructor(e){this.writer=e,this.name="KHR_materials_volume"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.transmission===0)return;let n=this.writer,i=n.extensionsUsed,r={};if(r.thicknessFactor=e.thickness,e.thicknessMap){let o={index:await n.processTextureAsync(e.thicknessMap),texCoord:e.thicknessMap.channel};n.applyTextureTransform(o,e.thicknessMap),r.thicknessTexture=o}e.attenuationDistance!==1/0&&(r.attenuationDistance=e.attenuationDistance),r.attenuationColor=e.attenuationColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}},Gu=class{constructor(e){this.writer=e,this.name="KHR_materials_ior"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.ior===1.5)return;let i=this.writer.extensionsUsed,r={};r.ior=e.ior,t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}},Wu=class{constructor(e){this.writer=e,this.name="KHR_materials_specular"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.specularIntensity===1&&e.specularColor.equals(Kv)&&!e.specularIntensityMap&&!e.specularColorMap)return;let n=this.writer,i=n.extensionsUsed,r={};if(e.specularIntensityMap){let o={index:await n.processTextureAsync(e.specularIntensityMap),texCoord:e.specularIntensityMap.channel};n.applyTextureTransform(o,e.specularIntensityMap),r.specularTexture=o}if(e.specularColorMap){let o={index:await n.processTextureAsync(e.specularColorMap),texCoord:e.specularColorMap.channel};n.applyTextureTransform(o,e.specularColorMap),r.specularColorTexture=o}r.specularFactor=e.specularIntensity,r.specularColorFactor=e.specularColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}},Xu=class{constructor(e){this.writer=e,this.name="KHR_materials_sheen"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.sheen==0)return;let n=this.writer,i=n.extensionsUsed,r={};if(e.sheenRoughnessMap){let o={index:await n.processTextureAsync(e.sheenRoughnessMap),texCoord:e.sheenRoughnessMap.channel};n.applyTextureTransform(o,e.sheenRoughnessMap),r.sheenRoughnessTexture=o}if(e.sheenColorMap){let o={index:await n.processTextureAsync(e.sheenColorMap),texCoord:e.sheenColorMap.channel};n.applyTextureTransform(o,e.sheenColorMap),r.sheenColorTexture=o}r.sheenRoughnessFactor=e.sheenRoughness,r.sheenColorFactor=e.sheenColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}},qu=class{constructor(e){this.writer=e,this.name="KHR_materials_anisotropy"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.anisotropy==0)return;let n=this.writer,i=n.extensionsUsed,r={};if(e.anisotropyMap){let o={index:await n.processTextureAsync(e.anisotropyMap)};n.applyTextureTransform(o,e.anisotropyMap),r.anisotropyTexture=o}r.anisotropyStrength=e.anisotropy,r.anisotropyRotation=e.anisotropyRotation,t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}},Yu=class{constructor(e){this.writer=e,this.name="KHR_materials_emissive_strength"}async writeMaterialAsync(e,t){if(!e.isMeshStandardMaterial||e.emissiveIntensity===1)return;let i=this.writer.extensionsUsed,r={};r.emissiveStrength=e.emissiveIntensity,t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}},ju=class{constructor(e){this.writer=e,this.name="EXT_materials_bump"}async writeMaterialAsync(e,t){if(!e.isMeshStandardMaterial||e.bumpScale===1&&!e.bumpMap)return;let n=this.writer,i=n.extensionsUsed,r={};if(e.bumpMap){let o={index:await n.processTextureAsync(e.bumpMap),texCoord:e.bumpMap.channel};n.applyTextureTransform(o,e.bumpMap),r.bumpTexture=o}r.bumpFactor=e.bumpScale,t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}},Zu=class{constructor(e){this.writer=e,this.name="EXT_mesh_gpu_instancing"}writeNode(e,t){if(!e.isInstancedMesh)return;let n=this.writer,i=e,r=new Float32Array(i.count*3),o=new Float32Array(i.count*4),a=new Float32Array(i.count*3),l=new He,c=new w,h=new Gt,u=new w;for(let d=0;d<i.count;d++)i.getMatrixAt(d,l),l.decompose(c,h,u),c.toArray(r,d*3),h.toArray(o,d*4),u.toArray(a,d*3);let f={TRANSLATION:n.processAccessor(new nt(r,3)),ROTATION:n.processAccessor(new nt(o,4)),SCALE:n.processAccessor(new nt(a,3))};i.instanceColor&&(f._COLOR_0=n.processAccessor(i.instanceColor)),t.extensions=t.extensions||{},t.extensions[this.name]={attributes:f},n.extensionsUsed[this.name]=!0,n.extensionsRequired[this.name]=!0}};ws.Utils={insertKeyframe:function(s,e){let n=s.getValueSize(),i=new s.TimeBufferType(s.times.length+1),r=new s.ValueBufferType(s.values.length+n),o=s.createInterpolant(new s.ValueBufferType(n)),a;if(s.times.length===0){i[0]=e;for(let l=0;l<n;l++)r[l]=0;a=0}else if(e<s.times[0]){if(Math.abs(s.times[0]-e)<.001)return 0;i[0]=e,i.set(s.times,1),r.set(o.evaluate(e),0),r.set(s.values,n),a=0}else if(e>s.times[s.times.length-1]){if(Math.abs(s.times[s.times.length-1]-e)<.001)return s.times.length-1;i[i.length-1]=e,i.set(s.times,0),r.set(s.values,0),r.set(o.evaluate(e),s.values.length),a=i.length-1}else for(let l=0;l<s.times.length;l++){if(Math.abs(s.times[l]-e)<.001)return l;if(s.times[l]<e&&s.times[l+1]>e){i.set(s.times.slice(0,l+1),0),i[l+1]=e,i.set(s.times.slice(l+1),l+2),r.set(s.values.slice(0,(l+1)*n),0),r.set(o.evaluate(e),(l+1)*n),r.set(s.values.slice((l+1)*n),(l+2)*n),a=l+1;break}}return s.times=i,s.values=r,a},mergeMorphTargetTracks:function(s,e){let t=[],n={},i=s.tracks;for(let r=0;r<i.length;++r){let o=i[r],a=wt.parseTrackName(o.name),l=wt.findNode(e,a.nodeName);if(a.propertyName!=="morphTargetInfluences"||a.propertyIndex===void 0){t.push(o);continue}if(o.createInterpolant!==o.InterpolantFactoryMethodDiscrete&&o.createInterpolant!==o.InterpolantFactoryMethodLinear){if(o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline)throw new Error("THREE.GLTFExporter: Cannot merge tracks with glTF CUBICSPLINE interpolation.");console.warn("THREE.GLTFExporter: Morph target interpolation mode not yet supported. Using LINEAR instead."),o=o.clone(),o.setInterpolation(Hi)}let c=l.morphTargetInfluences.length,h=l.morphTargetDictionary[a.propertyIndex];if(h===void 0)throw new Error("THREE.GLTFExporter: Morph target name not found: "+a.propertyIndex);let u;if(n[l.uuid]===void 0){u=o.clone();let d=new u.ValueBufferType(c*u.times.length);for(let m=0;m<u.times.length;m++)d[m*c+h]=u.values[m];u.name=(a.nodeName||"")+".morphTargetInfluences",u.values=d,n[l.uuid]=u,t.push(u);continue}let f=o.createInterpolant(new o.ValueBufferType(1));u=n[l.uuid];for(let d=0;d<u.times.length;d++)u.values[d*c+h]=f.evaluate(u.times[d]);for(let d=0;d<o.times.length;d++){let m=this.insertKeyframe(u,o.times[d]);u.values[m*c+h]=o.values[d]}}return s.tracks=t,s},toFloat32BufferAttribute:function(s){let e=new nt(new Float32Array(s.count*s.itemSize),s.itemSize,!1);if(!s.normalized&&!s.isInterleavedBufferAttribute)return e.array.set(s.array),e;for(let t=0,n=s.count;t<n;t++)for(let i=0;i<s.itemSize;i++)e.setComponent(t,i,s.getComponent(t,i));return e}};function mc(s){let e=s.positions,t=s.walkIndex,n=new Map,i=1;if(!t)return()=>[];for(let r=0;r<t.length;r+=3){let o=t[r]*3,a=t[r+1]*3,l=t[r+2]*3;for(let c=Math.floor(Math.min(e[o+2],e[a+2],e[l+2])/i);c<=Math.floor(Math.max(e[o+2],e[a+2],e[l+2])/i);c++)for(let h=Math.floor(Math.min(e[o],e[a],e[l])/i);h<=Math.floor(Math.max(e[o],e[a],e[l])/i);h++){let u=h+","+c;n.has(u)||n.set(u,[]),n.get(u).push(r)}}return(r,o)=>{let a=[];for(let l of n.get(Math.floor(r/i)+","+Math.floor(o/i))||[]){let c=t[l]*3,h=t[l+1]*3,u=t[l+2]*3,f=e[c],d=e[c+2],m=e[h],x=e[h+2],g=e[u],p=e[u+2],E=(x-p)*(f-g)+(g-m)*(d-p);if(Math.abs(E)<1e-10)continue;let M=((x-p)*(r-g)+(g-m)*(o-p))/E,y=((p-d)*(r-g)+(f-g)*(o-p))/E;M>=-1e-5&&y>=-1e-5&&M+y<=1.00001&&a.push(M*e[c+1]+y*e[h+1]+(1-M-y)*e[u+1])}return a}}var ii;function r_(){if(ii)return ii;let s=512,e=new Uint8Array(s*s*4),t=Math.PI*2;for(let n=0;n<s;n++)for(let i=0;i<s;i++){let r=i/s,o=n/s,a=Math.sin(t*(r+o))*.45+Math.cos(t*(2*r-o))*.23+Math.sin(t*(5*r+3*o))*.1,l=Math.exp(-Math.abs(Math.sin(t*(3*r+2*o)+a*4.5))*23),c=(Math.sin(t*(37*r+41*o))*.5+Math.cos(t*(67*r-53*o))*.5)*2,h=Math.round(232-l*38+a*5+c),u=(n*s+i)*4;e.set([h,Math.max(0,h-2),Math.max(0,h-5),255],u)}return ii=new ui(e,s,s,nn),ii.colorSpace=St,ii.wrapS=ii.wrapT=hn,ii.magFilter=$t,ii.minFilter=pn,ii.generateMipmaps=!0,ii.anisotropy=4,ii.needsUpdate=!0,ii}function gc(s){let e=s.attributes.position,t=new Float32Array(e.count*2);for(let r=0;r<e.count;r++)t[r*2]=e.getX(r)/5,t[r*2+1]=e.getZ(r)/5;s.setAttribute("uv",new nt(t,2));let n=r_(),i=new Yt({map:n,bumpMap:n,bumpScale:.018,color:16777215,roughness:.94,metalness:0,transparent:!1,opacity:1,depthWrite:!0,blending:mt,side:vt});return i.name="Honed pale marble",i.userData.roadFinish="rough-marble-v1",i}async function Tp(s){let e=(await new bs().parseAsync(await s.glb.arrayBuffer(),"")).scene;e.updateMatrixWorld(!0);let t=[],n={positions:[],walkIndex:[]},i=new Map,r=[],o=2,a=new w,l=new w,c=new w,h=new w,u=new w,f=new xi,d=0;if(e.traverse(y=>{if(!y.isMesh)return;t.push(y),y.castShadow=!0,y.receiveShadow=!0,y.userData.road&&(y.material.dispose(),y.material=gc(y.geometry));let S=y.geometry.attributes.position,R=y.geometry.index,C=R?.count||S.count;d+=C/3;for(let D=0;D<C;D+=3){let _=[0,1,2].map(U=>new w().fromBufferAttribute(S,R?R.getX(D+U):D+U).applyMatrix4(y.matrixWorld)),v=_.flatMap(U=>U.toArray()),A=r.length;r.push(v);for(let U=Math.floor(Math.min(v[2],v[5],v[8])/o);U<=Math.floor(Math.max(v[2],v[5],v[8])/o);U++)for(let k=Math.floor(Math.min(v[1],v[4],v[7])/o);k<=Math.floor(Math.max(v[1],v[4],v[7])/o);k++)for(let F=Math.floor(Math.min(v[0],v[3],v[6])/o);F<=Math.floor(Math.max(v[0],v[3],v[6])/o);F++){let z=F+","+k+","+U;i.has(z)||i.set(z,[]),i.get(z).push(A)}if(y.userData.road&&new w().crossVectors(_[1].clone().sub(_[0]),_[2].clone().sub(_[0])).y<-1e-8){let k=n.positions.length/3;n.positions.push(...v),n.walkIndex.push(k,k+1,k+2)}}}),!t.length)throw Error("This saved space has no visible geometry.");let m=(y,S,R,C)=>{for(let D of[.45,1,1.65,2.15]){a.set(y,R+D,S);let _=new Set;for(let v=Math.floor((S-C)/o);v<=Math.floor((S+C)/o);v++)for(let A=Math.floor((R+D-C)/o);A<=Math.floor((R+D+C)/o);A++)for(let U=Math.floor((y-C)/o);U<=Math.floor((y+C)/o);U++)for(let k of i.get(U+","+A+","+v)||[])_.add(k);for(let v of _){let A=r[v];if(f.set(l.fromArray(A),c.fromArray(A,3),h.fromArray(A,6)),f.closestPointToPoint(a,u),u.distanceToSquared(a)<C*C)return!1}}return!0},x=new $e().setFromObject(e),g=x.getCenter(new w),p=new pt,E={x:g.x,z:x.max.z+3,y:0},M={x:g.x,z:g.z,y:0};return{legacy:!0,legacyClear:m,group:e,meshes:t,plan:{meshes:[],nodes:[],paths:[],entrance:E,gathering:M,validation:{routesClear:!0,headroom:2.35}},bounds:x,footprints:p,offset:{x:0,y:0,z:0},scale:1,support:mc(n),layout:s.layout||[],attribution:{},triangles:d}}var Vr={spatialScale:2.6,opening:.5,separation:1,repetition:1,intensity:.65,moduleCount:9,density:.88,rotationVariation:.65,scaleVariation:.28,connectionStrength:.65,distortion:.5,corridorWidth:2.2,seed:42,compactness:.88,interlocking:.88,verticalComplexity:.9,fusionStrength:.7,voidDensity:.65};function Ap(s,e){if(s?.format!=="borrowed-worlds-model-architecture"||s.version!==1)throw Error("Choose a composition saved by the model transformation workspace.");let t=r=>{if(!r||!Array.isArray(r.items)||r.items.length>50)throw Error("Choose a composition with up to fifty casts.");let o=r.settings;for(let[l,c,h]of[["spatialScale",1.8,3.4],["opening",.2,.85],["separation",0,2.5],["repetition",1,3],["intensity",.2,1]])if(!Number.isFinite(o?.[l])||o[l]<c||o[l]>h)throw Error("A transformation setting is outside its limits.");if(!Number.isInteger(o.repetition))throw Error("Invalid repetition count.");let a=new Set;for(let l of r.items){if(typeof l.id!="string"||a.has(l.id)||!e.includes(l.asset)||!["x","z","rotation","scale"].every(c=>Number.isFinite(l[c]))||Math.abs(l.x)>18||Math.abs(l.z)>18||Math.abs(l.rotation)>2*Math.PI||l.scale<.5||l.scale>1.4)throw Error("A source cast has invalid placement or size.");a.add(l.id)}},n=structuredClone(s);n.settings={...Vr,...n.settings},n.generated&&(n.generated.input.settings={...Vr,...n.generated.input.settings});let i=r=>{for(let[o,a,l]of[["moduleCount",1,50],["density",.25,1],["rotationVariation",0,1],["scaleVariation",0,.45],["connectionStrength",0,1],["distortion",0,1],["corridorWidth",1.8,3.2],["seed",0,999999],["compactness",0,1],["interlocking",0,1],["verticalComplexity",0,1],["fusionStrength",0,1],["voidDensity",.2,.85]])if(!Number.isFinite(r.settings[o])||r.settings[o]<a||r.settings[o]>l)throw Error("An aggregation setting is outside its limits.");if(!Number.isInteger(r.settings.seed)||!Number.isInteger(r.settings.moduleCount))throw Error("Module count and seed must be whole numbers.")};return t(n),i(n),n.generated&&(t(n.generated.input),i(n.generated.input)),n}function Rp(s){let e=new Float32Array(s.length);for(let t=0;t<s.length;t+=3){let n=[s[t],s[t+1],s[t+2]],i=n[0]*.2126+n[1]*.7152+n[2]*.0722,r=2.15;for(let o of n){let a=o-i;a>0?r=Math.min(r,(1-i)/a):a<0&&(r=Math.min(r,-i/a))}for(let o=0;o<3;o++)e[t+o]=Math.max(0,Math.min(1,i+(n[o]-i)*r))}return e}function Cp(s){let e=new pt;e.name="Architecture transformed from source casts";for(let t of s.meshes){if(!t.positions.length)continue;let n=new bt;if(n.setAttribute("position",new nt(t.positions,3)),n.setAttribute("color",new nt(t.road?t.colors:Rp(t.colors),3)),t.index&&n.setIndex(new nt(t.index,1)),t.sourceTags&&n.setAttribute("sourceTag",new nt(Float32Array.from(t.sourceTags),1)),t.normals)n.setAttribute("normal",new nt(t.normals,3));else{let o=Qf(n,1e-4);n.dispose(),n=o,n.computeVertexNormals()}let i=t.road?gc(n):new jt({color:16777215,vertexColors:!t.road,roughness:t.road?.58:t.solid?.32:.63,metalness:t.road?0:t.solid?.48:.12,clearcoat:t.road?.05:t.solid?.18:0,clearcoatRoughness:t.road?.035:.22,side:vt}),r=new je(n,i);r.name=t.name,r.castShadow=!!(t.solid||t.road),r.receiveShadow=!0,r.userData={sourceId:t.sourceId,instanceId:t.moduleId||t.sourceId,operation:t.operation,sourceIds:t.sourceIds,moduleIds:t.moduleIds,sourceArchitecture:!!t.sourceId||!!t.sourceIds,fusionCore:!!t.fusionCore,road:!!t.road,roadThickness:t.thickness||0},t.sectionIndex&&(r.sectionGeometry=new bt,r.sectionGeometry.setAttribute("position",n.attributes.position),r.sectionGeometry.setIndex(new nt(t.sectionIndex,1))),e.add(r)}return e}var HE=Math.PI*2,Ku=(s,e,t)=>Math.max(e,Math.min(t,s));function o_(s,e,t,n){let i=(e-s.minX)/s.step,r=(t-s.minY)/s.step,o=(n-s.minZ)/s.step,a=Math.floor(i),l=Math.floor(r),c=Math.floor(o);if(a<0||l<0||c<0||a>=s.nx-1||l>=s.ny-1||c>=s.nz-1)return 100;let h=0;for(let u=0;u<=1;u++)for(let f=0;f<=1;f++)for(let d=0;d<=1;d++){let m=(d?i-a:1-i+a)*(f?r-l:1-r+l)*(u?o-c:1-o+c);h+=s.values[((c+u)*s.ny+l+f)*s.nx+a+d]*m}return h}function Pp(s,e,t,n,i,r=.23,o=!1,a=1){for(let l of[.65,1.2,1.65,2.35])for(let[c,h]of[[0,0],[r,0],[-r,0],[0,r],[0,-r]]){let u=t+c,f=i+h,d=n+l*a,m=Math.round((u-s.minX)/s.step),x=Math.round((d-s.minY)/s.step),g=Math.round((f-s.minZ)/s.step);if(m<0||x<0||g<0||m>=s.nx||x>=s.ny||g>=s.nz){if(o)continue;return!1}if(o_(s,u,d,f)<.03||e[(g*s.ny+x)*s.nx+m])return!1}return!0}function Ip(s,e,t,n=0,i=.22){let r=Math.round((e-s.minX)/s.step),o=Math.round((t-s.minZ)/s.step);if(r<0||o<0||r>=s.nx||o>=s.nz)return null;let a=o*s.nx+r,l=null,c=1/0;for(let h=0;h<s.counts[a];h++){let u=Dp(s,a,h,e,t),f=Math.abs(u-n);f<c&&f<=i&&(l=u,c=f)}return l}function Dp(s,e,t,n,i){if(!s.corners)return s.heights[e*s.layers+t];let r=e%s.nx,o=Math.floor(e/s.nx),a=Ku((n-s.minX-r*s.step)/s.step+.5,0,1),l=Ku((i-s.minZ-o*s.step)/s.step+.5,0,1),c=(e*s.layers+t)*4,h=s.corners;return a>=l?h[c]*(1-a)+h[c+1]*(a-l)+h[c+2]*l:h[c]*(1-l)+h[c+2]*a+h[c+3]*(l-a)}function Lp(s,e,t,n,i=.23,r=1){for(let[o,a]of[[0,0],[i,0],[-i,0],[0,i],[0,-i]]){let l=e+o,c=t+a,h=Math.round((l-s.minX)/s.step),u=Math.round((c-s.minZ)/s.step);if(h<0||u<0||h>=s.nx||u>=s.nz)continue;let f=u*s.nx+h;for(let d=0;d<s.counts[f];d++){let m=Dp(s,f,d,l,c);if(m>n+.4*r&&m<n+2.55*r+.24)return!1}}return!0}function Np(s){s.updateMatrixWorld(!0);let e=[],t=0,n=0,i=new Map,r=h=>{if(!h?.image)return null;if(i.has(h))return i.get(h);try{let u=h.image,f=document.createElement("canvas"),d=Math.max(1,Math.min(1024,u.width)),m=Math.max(1,Math.min(1024,u.height));f.width=d,f.height=m;let x=f.getContext("2d",{willReadFrequently:!0});x.drawImage(u,0,0,d,m);let g={w:d,h:m,pixels:x.getImageData(0,0,d,m).data};return i.set(h,g),g}catch{throw Error("This model texture cannot be sampled. Use an embedded GLB texture or vertex colours.")}};if(s.traverse(h=>{if(!h.isMesh)return;if(h.isSkinnedMesh||Object.keys(h.geometry.morphAttributes||{}).length)throw Error("Animated or deforming meshes must be saved as a static model first.");let u=h.geometry,f=u.attributes.position,d=u.attributes.color,m=u.attributes.uv;if(!f||f.itemSize!==3)return;let x=u.index?Uint32Array.from(u.index.array):Uint32Array.from({length:f.count},(D,_)=>_);if(n+=x.length/3,n>6e5)throw Error("This model exceeds 600,000 triangles. Use a lighter version for spatial generation.");let g=Array.isArray(h.material)?h.material:[h.material],p=new Uint16Array(f.count);for(let D of u.groups||[])for(let _=D.start;_<Math.min(x.length,D.start+D.count);_++)p[x[_]]=D.materialIndex||0;let E=new Float32Array(f.count*3),M=new Float32Array(f.count*3),y=new w,S=new Me,R=new Ie,C=new Ie;for(let D=0;D<f.count;D++){y.fromBufferAttribute(f,D).applyMatrix4(h.matrixWorld),E.set(y.toArray(),D*3);let _=g[p[D]]||g[0];if(R.copy(_?.color||new Ie(.65,.65,.65)),d&&_?.vertexColors&&R.multiply(new Ie(d.getX(D),d.getY(D),d.getZ(D))),_?.map&&m){let v=r(_.map);if(v){S.fromBufferAttribute(m,D),_.map.updateMatrix(),_.map.transformUv(S);let A=Math.max(0,Math.min(v.w-1,Math.floor(S.x*v.w))),U=Math.max(0,Math.min(v.h-1,Math.floor(S.y*v.h))),k=(U*v.w+A)*4;C.setRGB(v.pixels[k]/255,v.pixels[k+1]/255,v.pixels[k+2]/255,St),R.multiply(C)}}M.set(R.toArray(),D*3)}e.push({positions:E,colors:M,index:x,offset:t}),t+=f.count}),!n)throw Error("This model has no usable triangles.");let o=new Float32Array(t*3),a=new Float32Array(t*3),l=new Uint32Array(n*3),c=0;for(let h of e){o.set(h.positions,h.offset*3),a.set(h.colors,h.offset*3);for(let u of h.index)l[c++]=u+h.offset}return{positions:o,colors:a,index:l}}var a_=(s,e,t)=>Math.max(e,Math.min(t,s)),xc=s=>s.spaceSources().map(e=>({id:e.id,modelId:e.modelId,name:e.name,...e.layout})),l_=s=>s.map(e=>({modelId:e.modelId,...e.layout})).sort((e,t)=>JSON.stringify(e).localeCompare(JSON.stringify(t))),Gr=s=>JSON.stringify(s.spaceSources().map(e=>({id:e.id,modelId:e.modelId,...e.layout})).sort((e,t)=>JSON.stringify(e).localeCompare(JSON.stringify(t))));function Ju(s){let e=2166136261;for(let t of JSON.stringify(l_(s)))e=Math.imul(e^t.charCodeAt(0),16777619);return(e>>>0)%1e6}function Wr(s){return Ap({format:"borrowed-worlds-model-architecture",version:1,items:[],settings:{...Vr,...s}},[]).settings}async function Up(s,e,t=()=>{}){if(s.some(E=>E.target==="space"))throw Error("Saved spaces are display-only and cannot be fused into another space.");if(!s.length)throw Error("Place at least one model before making a space.");if(s.length>50)throw Error("Use up to 50 placed models for this space. Keep other models in the library.");s=[...s].sort((E,M)=>JSON.stringify({modelId:E.modelId,...E.layout}).localeCompare(JSON.stringify({modelId:M.modelId,...M.layout})));let n=s.map(E=>{E.object.updateWorldMatrix(!0,!0);let M=new $e().setFromObject(E.object),y=M.getSize(new w),S=new w().setFromMatrixPosition(E.object.matrixWorld);return{s:E,size:y,position:S}}),i=new w(1/0,0,1/0),r=new w(-1/0,0,-1/0);for(let E of n)i.min(E.position),r.max(E.position);let o=0,a=n.map(E=>Math.max(E.size.x,E.size.y,E.size.z)).sort((E,M)=>E-M),l=Math.max(a[Math.floor(a.length/2)]/3.2,(r.x-i.x)/24,(r.z-i.z)/24),c=new $e;for(let E of n){let M=(E.s.layout?.span||1)*20/2;c.expandByPoint(new w(E.position.x-M,0,E.position.z-M)),c.expandByPoint(new w(E.position.x+M,0,E.position.z+M))}let h=c.getSize(new w),u={width:h.x,depth:h.z},f=Math.sqrt(h.x*h.z)/(12+3*Math.sqrt(Math.max(s.length,e.moduleCount||9)));if(!Number.isFinite(f)||f<=0)throw Error("The placed models have no measurable size.");let d=i.clone().add(r).multiplyScalar(.5),m=1/l,x={},g=[],p={};for(let E=0;E<n.length;E++){let{s:M,size:y,position:S}=n[E],R=String(M.modelId);if(!x[R]){let C=M.object.clone(!0);C.position.set(0,0,0),C.quaternion.identity(),C.scale.set(1,1,1),C.updateMatrix(),C.updateMatrixWorld(!0);let D=new $e().setFromObject(C),_=D.getSize(new w),v=D.getCenter(new w);if(!_.length()||!Number.isFinite(_.length()))throw Error(M.name+" contains no usable geometry.");C.position.set(-v.x,-D.min.y,-v.z);let A=new pt;if(A.add(C),A.scale.setScalar(3.2/Math.max(_.x,_.y,_.z)),A.updateMatrixWorld(!0),x[R]=Np(A),o+=x[R].index.length/3,o>15e5)throw Error("This layout exceeds the 1.5 million source-triangle budget. Use lighter models or a smaller collection for Make space.")}g.push({id:M.id,asset:R,x:(S.x-d.x)*m,z:(S.z-d.z)*m,rotation:M.layout.rotation||0,scale:a_(Math.max(y.x,y.y,y.z)/(3.2*l),.5,1.4)}),p[M.id]={modelId:R,name:M.name,layout:{...M.layout},originalPosition:{x:S.x,z:S.z}},t(Math.round((E+1)/n.length*100),"Reading source model "+(E+1)+" / "+n.length),await new Promise(C=>typeof requestAnimationFrame=="function"?requestAnimationFrame(C):setTimeout(C,0))}return{items:g,sources:x,settings:{...Wr(e),layoutDriven:!0,worldScale:f,sourceUnits:l,targetFootprint:u,spaceStyle:3,moduleCount:Math.max(g.length,e.moduleCount||9),seed:Ju(s)},centre:{x:0,z:0},layoutScale:m,sourceUnits:l,targetFootprint:u,worldScale:f,attribution:p}}function Op(s,e,t=20){s.updateMatrixWorld(!0);let n=new $e().setFromObject(s),i=.6;if(n.max.x-n.min.x>t*2-i*2||n.max.z-n.min.z>t*2-i*2)throw Error("This growth is wider than the hall. Reduce the fragment count or scale and make space again.");let r=-(n.min.x+n.max.x)/2,o=-(n.min.z+n.max.z)/2;return s.position.set(r,.06,o),s.updateMatrixWorld(!0),{offset:{x:r,y:.06,z:o},bounds:new $e().setFromObject(s)}}function Bp({scene:s,renderer:e,placement:t,getView:n,getCamera:i,setView:r,navigate:o,invalidate:a,onSpaceBounds:l,onSpaceLight:c}){let h=V=>document.getElementById(V),u=h("walk-surface"),f="learning-vegas-inhabitable-space-v1",d=null,m=!1,x=!1,g=!1,p="",E="",M={...Vr,layoutVersion:2},y=null,S=null,R=0,C=null,D=!1,_=null,v=0,A=null,U=0,k=!1,F=null,z=null,G=new fi,ie=new Me,j=null,oe,te=h("exhibition-space-feedback"),pe=V=>{h("exhibition-space-status").textContent=V,te.textContent=V,te.hidden=!1,clearTimeout(oe)},Ce=()=>t.spaceSources().some(V=>V.target==="space");function Ae(){let V=Ce(),W=h("exhibition-make-space");W.disabled=V||x||!t.state().modelCount||!!window.ExhibitionAgentDrafts?.state().busy||!!window.ExhibitionAgent?.state().busy;let le="Make space";W.textContent=x?Math.round(v)+"%":"+",W.title=V?"Saved spaces can be arranged, but cannot make another space.":le,W.setAttribute("aria-label",le),h("exhibition-space-keyword").textContent=le.toUpperCase(),h("exhibition-space-options").hidden=!1,h("space-options-empty").hidden=!!d,h("exhibition-space-original").hidden=!d,h("exhibition-space-original").textContent=m?"Original models":"Show space",h("exhibition-space-original").disabled=x,h("exhibition-enter-space").hidden=!d||!m,h("exhibition-enter-space").disabled=x,h("exhibition-export-space").hidden=!d,h("exhibition-export-space").disabled=x,h("walk-save-space").hidden=!d,h("walk-save-space").disabled=x||!d,h("exhibition-space-save").disabled=x||!t.state().modelCount,h("exhibition-space-load").disabled=x,u.dataset.spaceGenerationBlocked=String(V),u.dataset.spaceEngine="inhabitable-v1",u.dataset.spacePreview=String(m),u.dataset.spaceBusy=String(x),u.dataset.spaceStale=String(g),u.dataset.spaceProgress=String(v),clearTimeout(oe),!x&&!g&&!p&&!te.hidden&&(oe=setTimeout(()=>{te.hidden=!0},6e3));for(let fe of document.querySelectorAll("[data-space-setting]")){fe.dataset.spaceSetting==="seed"&&(fe.disabled=!0,fe.title="Determined by the placed models and their layout"),document.activeElement!==fe&&(fe.value=M[fe.dataset.spaceSetting]);let Z=fe.nextElementSibling;Z?.tagName==="OUTPUT"&&(Z.textContent=String(M[fe.dataset.spaceSetting]))}}function Ue(){try{localStorage.setItem(f,JSON.stringify({version:1,active:m,settings:M,generatedSettings:y,signature:E,layout:xc(t)}))}catch{pe("Space ready; recipe storage is full. Use Save space recipe.")}}function Be(V){m=!!V&&!!d,d&&(d.group.visible=m,d.footprints.visible=m&&n()==="axonometric"),t.showSources(!m,{keepFootprints:!1}),window.dispatchEvent(new Event("exhibition-space-change")),c?.(d,m),Ae(),a(),Ue()}function se(V){V&&(s.remove(V.group,V.footprints),V.footprints&&(V.footprints.children[0]?.geometry.dispose(),V.footprints.children[0]?.material.dispose()),V.group.traverse(W=>{if(W.isMesh){W.geometry.dispose(),W.sectionGeometry?.dispose();for(let le of Array.isArray(W.material)?W.material:[W.material])le.dispose()}}))}function ae(V){return new Promise((W,le)=>{let fe=++R;S=new Worker(new URL("exhibition-space-worker.js",document.baseURI));let Z=!1,ce=(be,Se)=>{Z||(Z=!0,S?.terminate(),S=null,C=null,be(Se))};C=()=>ce(le,Error("Space generation cancelled.")),S.onerror=be=>ce(le,Error(be.message||"Space worker could not finish.")),S.onmessage=be=>{let Se=be.data;if(Se.ticket===fe){if(Se.error){ce(le,Error(Se.error));return}Se.progress!==void 0&&(v=5+Se.progress*.93,pe(Se.message+" / "+Math.round(v)+"%"),Ae()),Se.plan&&ce(W,Se.plan)}},S.postMessage({ticket:fe,...V})})}function _e(V,W,le){let fe=new pt;fe.name="Generated space / ground-contact cells";let Z=V.volumeGrid,ce=new tn(20,20),be=new Ct({color:16179104,transparent:!0,opacity:.72,depthTest:!0,depthWrite:!1,toneMapped:!1,side:vt}),Se=(xe,Te)=>{let B=Math.round(((xe-W.x)/le-Z.minX)/Z.step),ye=Math.round((-W.y/le-Z.minY)/Z.step),L=Math.round(((Te-W.z)/le-Z.minZ)/Z.step);return B>=0&&B<Z.nx&&ye>=0&&ye<Z.ny&&L>=0&&L<Z.nz?Z.values[(L*Z.ny+ye)*Z.nx+B]:1/0};for(let xe=0;xe<20;xe++)for(let Te=0;Te<20;Te++){let B=Rn(Te),ye=Rn(xe);if([[0,0],[-.8,-.8],[.8,-.8],[-.8,.8],[.8,.8]].some(([L,ue])=>Se(B+L*20/2,ye+ue*20/2)<0)){let L=new je(ce,be);L.rotation.x=-Math.PI/2,L.position.set(B,.005,ye),fe.add(L)}}return fe}function De(V,W,le=1){let fe={...V,meshes:V.meshes.filter(ce=>ce.name!=="Surrounding ground")},Z=Cp(fe);Z.name="Inhabitable architecture / placed sculpture aggregation",Z.scale.setScalar(le);try{let{offset:ce,bounds:be}=Op(Z,W.centre,1/0),Se=[];Z.traverse(Te=>{Te.isMesh&&Se.push(Te)}),Z.userData={engine:"inhabitable-v1",snapshot:!0,settings:V.settings,sources:W.attribution,validation:V.validation,spaceScale:le};let xe=_e(V,ce,le);return{scale:le,support:mc(V.meshes.find(Te=>Te.road)),group:Z,meshes:Se,plan:V,offset:ce,bounds:be,footprints:xe,attribution:W.attribution,layout:Object.entries(W.attribution).map(([Te,B])=>({id:Te,modelId:B.modelId,name:B.name,...B.layout})),triangles:V.meshes.reduce((Te,B)=>Te+(B.index?.length||B.positions.length/3)/3,0)}}catch(ce){throw se({group:Z}),ce}}async function Le({restore:V=!1,override:W=null}={}){if(x||D||window.ExhibitionAgentDrafts?.state().busy||window.ExhibitionAgent?.state().busy)return!1;if(await t.ready,Ce())return p="Saved spaces can be arranged, but cannot be used to make another space.",pe(p),Ae(),!1;let le=Gr(t),fe=U,Z={...M};x=!0,v=0,p="",Ae();let ce;try{let be={...Wr(W||M),layoutDriven:!0,moduleCount:Math.max(t.spaceSources().length,(W||M).layoutVersion===2?(W||M).moduleCount:9),layoutVersion:2,seed:Ju(t.spaceSources())},Se=await Up(t.spaceSources(),be,(Te,B)=>{v=Te*.05,pe(B),Ae()});if(D)throw Error("The exhibition was closed.");let xe=await ae(Se);if(D)throw Error("The exhibition was closed.");if(le!==Gr(t))throw Error("The placed models changed during generation. Click Make space again.");return ce=De(xe,Se,xe.settings.worldScale||Se.worldScale),l?.(ce.bounds),se(d),d=ce,ce=null,s.add(d.group,d.footprints),z=null,E=le,M=U!==fe?M:V?Z:{...be},y={...be},g=JSON.stringify(M)!==JSON.stringify(y),_=null,k=!1,F=null,A=null,v=100,Be(!0),u.dataset.spaceSeed=String(be.seed),u.dataset.spaceRoutesClear=String(xe.validation.routesClear),u.dataset.spaceTriangles=String(d.triangles),pe(g?"SPACE READY / CHANGES STAGED FOR UPDATE":"SPACE READY / "+xe.nodes.length+" FRAGMENTS / "+be.corridorWidth.toFixed(1)+" M ROUTE"),u.dataset.spaceArchived="false",!0}catch(be){return se(ce),p=be.message,pe(p),!1}finally{x=!1,Ae()}}function Ze(V){return{x:(V.x-d.offset.x)/d.scale,z:(V.z-d.offset.z)/d.scale}}function Ve(V,W,le,fe){if(d.legacy)return d.legacyClear(V,W,le,fe);let Z=1/d.scale;return Pp(d.plan.volumeGrid,d.plan.volumeGrid.surfaces,V,le,W,fe*Z,!0,Z)&&Lp(d.plan.nav,V,W,le,fe*Z,Z)}function N(V,W,le,fe,Z=.22){let ce=d.support(V,W),be=d.scale;return ce.push(-d.offset.y/be),ce.sort((Se,xe)=>xe-Se).find(Se=>Se<=le+.22/be&&Se>=le-Z/be&&Ve(V,W,Se,fe))??null}function st(){if(!d||x)return;Be(!0);let V=d.plan.paths.find(Z=>Z.role==="carved entrance"),W=V?.points[0]||d.plan.entrance,le=V?.points.find(Z=>Math.hypot(Z.x-W.x,Z.z-W.z)>.6)||d.plan.gathering,fe=(d.plan.nav?Ip(d.plan.nav,W.x,W.z,W.y,1):W.y)??W.y??0;_={x:W.x*d.scale+d.offset.x,z:W.z*d.scale+d.offset.z,foot:fe*d.scale+d.offset.y},k=!1,F={..._},h("exhibition-space-options").open=!1,r("room"),o({x:_.x,z:_.z,y:_.foot+1.65,yaw:Math.atan2(W.x-le.x,W.z-le.z),pitch:0}),pe("INSIDE SPACE / WASD WALK / Q UP / E DOWN / SPACE TO LAND"),a()}function We(V,W=.35,{fly:le=!1,eyeHeight:fe=1.65}={}){if(!m||!d)return V;if(le)return _={x:V.x,z:V.z,foot:V.y-fe},k=!0,u.dataset.spaceFootHeight=String(_.foot),V;let Z={x:V.x,z:V.z,foot:Math.max(0,V.y-fe)},ce=_||{...Z};if(!le&&k){let Te=Ze(ce),B=N(Te.x,Te.z,(ce.foot-d.offset.y)/d.scale,W,1/0);B!==null?ce={...ce,foot:B*d.scale+d.offset.y}:F&&(ce={...F}),Z.x=ce.x,Z.z=ce.z,Z.foot=ce.foot}k=!1;let be=Math.hypot(Z.x-ce.x,Z.z-ce.z),Se=Math.max(1,Math.ceil(be/.1)),xe=ce;for(let Te=1;Te<=Se;Te++){let B=ce.x+(Z.x-ce.x)*Te/Se,ye=ce.z+(Z.z-ce.z)*Te/Se,L=Ze({x:B,z:ye}),ue=N(L.x,L.z,(xe.foot-d.offset.y)/d.scale,W);if(ue===null){let ee=[{x:B,z:xe.z},{x:xe.x,z:ye}].sort((re,Ee)=>Math.hypot(Z.x-re.x,Z.z-re.z)-Math.hypot(Z.x-Ee.x,Z.z-Ee.z));for(let re of ee){let Ee=Ze(re),Xe=N(Ee.x,Ee.z,(xe.foot-d.offset.y)/d.scale,W);if(Xe!==null){xe={...re,foot:Xe*d.scale+d.offset.y};break}}continue}xe={x:B,z:ye,foot:ue*d.scale+d.offset.y}}return _=xe,le||(F={...xe}),V.set(xe.x,xe.foot+fe,xe.z),u.dataset.spaceFootHeight=String(xe.foot),V}async function ze(){if(!d)throw Error("Generate a space first.");let V=d.group.visible;d.group.visible=!0;try{z||(z=new Blob([await new ws().parseAsync(d.group,{binary:!0})],{type:"model/gltf-binary"}));let W=d.bounds,le=W.getSize(new w),fe=W.getCenter(new w),Z=le.length(),ce=new Bt(35,1,.01,Z*10+100);ce.position.copy(fe).add(new w(Z*.95,Z*.7,Z*.95)),ce.lookAt(fe);let be=new en;be.background=new Ie(15921906),be.environment=s.environment,be.add(new Yi(16777215,9608616,2));let Se=new di(16777215,2);Se.position.set(30,40,25),be.add(Se);let xe=d.group.clone(!0),Te=[];xe.traverse(Tt=>{Tt.isMesh&&(Tt.material=Tt.material.clone(),Tt.material.clippingPlanes=[],Te.push(Tt.material))}),be.add(xe);let B=new Nt(640,640);B.texture.colorSpace=St;let ye=e.getRenderTarget(),L=new Uint8Array(640*640*4);try{e.setRenderTarget(B),e.render(be,ce),e.readRenderTargetPixels(B,0,0,640,640,L)}finally{e.setRenderTarget(ye),B.dispose(),Te.forEach(Tt=>Tt.dispose())}let ue=document.createElement("canvas");ue.width=ue.height=640;let ee=ue.getContext("2d"),re=ee.createImageData(640,640);for(let Tt=0;Tt<640;Tt++)re.data.set(L.subarray((639-Tt)*640*4,(640-Tt)*640*4),Tt*640*4);ee.putImageData(re,0,0);let Ee=await new Promise((Tt,Kt)=>ue.toBlob(qn=>qn?Tt(qn):Kt(Error("Space preview unavailable")),"image/png")),Xe=n()==="room"?i():null,yt=Xe?{x:Xe.position.x,y:Xe.position.y,z:Xe.position.z,yaw:Xe.rotation.y,pitch:Xe.rotation.x}:null;return{runtime:d.legacy?null:{version:1,scale:d.scale,plan:d.plan,attribution:d.attribution,layout:d.layout,audio:d.savedAudio||t.audioSources?.()||[]},renderCamera:yt,glb:z,preview:Ee,signature:E,triangles:d.triangles,camera:{orbit:{theta:Math.PI/4,phi:Math.atan2(Math.sqrt(2)*.95,.7),radius:ce.position.distanceTo(fe)},target:{x:fe.x,y:fe.y,z:fe.z},fieldOfView:35},layout:d.layout}}finally{d.group.visible=V,a()}}async function Re(){if(!d||x)return!1;x=!0,Ae(),pe("SAVING SPACE");try{let V=await window.ExhibitionArchives.saveSpace(await ze());return d.savedId=V.id,u.dataset.spaceArchived="true",pe("SPACE SAVED"),V}catch(V){return pe("Could not save this space: "+V.message),!1}finally{x=!1,Ae()}}async function q(V){if(x||D)return!1;x=!0,p="",Ae();let W;try{let le=V.runtime;return W=le?.version===1?De(le.plan,{centre:{x:0,z:0},attribution:le.attribution},le.scale||1):await Tp(V),W.savedAudio=le?.audio||[],W.savedId=V.id,W.layout=le?.layout||V.layout||[],l?.(W.bounds),se(d),d=W,W=null,s.add(d.group,d.footprints),z=V.glb,E=V.signature||"",y={...M,...le?.plan.settings||{}},M={...y},_=null,F=null,k=!1,g=!1,Be(!0),x=!1,Ae(),V.renderCamera?(r("room"),o(V.renderCamera)):st(),pe("SAVED SPACE / "+V.title),!0}catch(le){return se(W),p=le.message,pe(p),!1}finally{x=!1,Ae()}}async function X(){if(!d||x)return!1;x=!0,Ae(),pe("Preparing GLB...");let V=d,W=V.group.visible;try{V.group.visible=!0;let le=await new ws().parseAsync(V.group,{binary:!0});return ge(new Blob([le],{type:"model/gltf-binary"}),"learning-vegas-inhabitable-space.glb"),pe("SPACE EXPORTED / GLB SNAPSHOT"),!0}catch(le){return p=le.message,pe(p),!1}finally{V.group.visible=W,x=!1,Ae(),a()}}function ge(V,W){let le=URL.createObjectURL(V),fe=document.createElement("a");fe.href=le,fe.download=W,fe.click(),setTimeout(()=>URL.revokeObjectURL(le),3e4)}let Oe=V=>{let W=V.target,le=W.dataset.spaceSetting;if(!(!le||le==="seed"||W.value===""))try{M=Wr({...M,layoutVersion:2,[le]:+W.value}),U++,g=!!d&&(Gr(t)!==E||JSON.stringify(M)!==JSON.stringify(y)),pe(g?"SETTINGS CHANGED / MAKE SPACE":d?"SPACE READY":"SETTINGS READY / MAKE SPACE"),Ue(),Ae()}catch(fe){pe(fe.message),Ae()}};for(let V of document.querySelectorAll("[data-space-setting]"))V.addEventListener("input",Oe),V.addEventListener("change",Oe);let Fe=()=>ge(new Blob([JSON.stringify({format:"learning-vegas-inhabitable-space",version:1,settings:y||M,pendingSettings:M,layout:xc(t)},null,2)],{type:"application/json"}),"learning-vegas-space-recipe.json"),I=async V=>{try{if(x)throw Error("Wait for this generation before loading a recipe.");let W=V.target.files?.[0];if(!W||W.size>2e6)throw Error("Choose a space recipe under 2 MB.");let le=JSON.parse(await W.text());if(le.format!=="learning-vegas-inhabitable-space"||le.version!==1||!Array.isArray(le.layout))throw Error("Choose a saved MAKE SPACE recipe.");let fe=Wr(le.settings),Z=xc(t);if(le.layout.length!==Z.length||le.layout.some(ce=>!Z.some(be=>be.id===ce.id&&be.modelId===ce.modelId)))throw Error("This recipe needs the same placed models. Restore those models first.");await t.applyLayout(le.layout),M=fe,g=!!d,await Le({override:fe})}catch(W){p=W.message,pe(p)}finally{V.target.value="",Ae()}};function b(){d&&(g=Gr(t)!==E||JSON.stringify(M)!==JSON.stringify(y),pe(g?"LAYOUT CHANGED / MAKE SPACE":"SPACE READY")),Ae(),Ue()}function Y(V){j=[V.clientX,V.clientY]}function ne(V){if(!m||!d||!j||Math.hypot(V.clientX-j[0],V.clientY-j[1])>5)return;j=null;let W=e.domElement.getBoundingClientRect();ie.set((V.clientX-W.left)/W.width*2-1,-(V.clientY-W.top)/W.height*2+1);let le=i?.();if(!le)return;G.setFromCamera(ie,le);let fe=G.intersectObjects(d.meshes,!1).find(Te=>Te.object.userData.sourceId||Te.object.userData.sourceIds);if(!fe)return;let Z=fe.object.userData,ce=fe.object.geometry.attributes.sourceTag,be=ce&&fe.face?Math.round(ce.getX(fe.face.a)):0,Se=Z.sourceIds?.[be]||Z.sourceId,xe=d.attribution[Se];A={id:Se,name:xe?.name||"Source fragment",operation:Z.operation},pe("FROM "+A.name+" / "+(Z.operation||"Transformed source fragment")),h("exhibition-space-status").title=Z.operation||"",u.dataset.spaceSource=A.name}let me=[["walk-save-space",Re],["exhibition-make-space",()=>Le()],["exhibition-enter-space",st],["exhibition-space-original",()=>Be(!m)],["exhibition-export-space",X],["exhibition-space-save",Fe],["exhibition-space-load",()=>h("exhibition-space-recipe").click()]];me.forEach(([V,W])=>h(V).addEventListener("click",W)),h("exhibition-space-recipe").addEventListener("change",I),window.addEventListener("exhibition-placement-change",b),window.addEventListener("exhibition-draft-queue-change",Ae),window.addEventListener("exhibition-agent-change",Ae),e.domElement.addEventListener("pointerdown",Y),e.domElement.addEventListener("pointerup",ne);let Q=t.ready.then(async()=>{Ae();try{let V=JSON.parse(localStorage.getItem(f)||"null");V?.version===1&&(M=Wr({...V.settings,layoutVersion:2,moduleCount:V.settings?.layoutVersion===2?V.settings.moduleCount:Math.max(9,V.settings?.moduleCount||9)}),y=V.generatedSettings,V.active&&V.signature===Gr(t)&&await Le({restore:!0,override:y||M}),Ae())}catch(V){pe("Previous space could not reopen: "+V.message)}});return Object.freeze({ready:Q,generate:Le,captureArchive:ze,saveSpace:Re,openSaved:q,enter:st,showOriginal:()=>Be(!1),showSpace:()=>Be(!0),constrain:We,collisionMeshes:()=>m&&d?d.meshes:[],exportGLB:X,setViewMode:V=>{d&&(d.footprints.visible=m&&V==="axonometric")},audioAnchors:()=>m&&d?d.plan.nodes.map(V=>({id:V.sourceId,x:V.center.x*d.scale+d.offset.x,z:V.center.z*d.scale+d.offset.z,y:V.view.y*d.scale+d.offset.y+1.65,width:V.radius*2*d.scale,...d.savedAudio?{audio:d.savedAudio.find(W=>W.id===V.sourceId)?.audio,name:d.savedAudio.find(W=>W.id===V.sourceId)?.name}:{}})):[],state:()=>({canGenerate:!Ce(),engine:"inhabitable-v1",layoutDriven:!0,scale:d?.scale||1,groundContactCells:d?.footprints.children.length||0,anchors:d?d.plan.nodes.map(V=>({id:V.sourceId,x:V.center.x*d.scale+d.offset.x,z:V.center.z*d.scale+d.offset.z})):[],active:m,busy:x,stale:g,error:p,signature:E,settings:{...M},generatedSettings:y,progress:v,connected:!!d?.plan.validation.routesClear,minimumClearance:(d?.plan.validation.headroom||0)*(d?.scale||1),triangles:d?.triangles||0,validation:d?.plan.validation||null,bounds:d?{min:d.bounds.min.toArray(),max:d.bounds.max.toArray()}:null,offset:d?.offset||null,sourceSelection:A}),dispose:()=>{D=!0,clearTimeout(oe),C?.(),S?.terminate(),me.forEach(([V,W])=>h(V).removeEventListener("click",W)),h("exhibition-space-recipe").removeEventListener("change",I);for(let V of document.querySelectorAll("[data-space-setting]"))V.removeEventListener("input",Oe),V.removeEventListener("change",Oe);window.removeEventListener("exhibition-placement-change",b),window.removeEventListener("exhibition-draft-queue-change",Ae),window.removeEventListener("exhibition-agent-change",Ae),e.domElement.removeEventListener("pointerdown",Y),e.domElement.removeEventListener("pointerup",ne),c?.(null,!1),se(d),d=null}})}var c_=1;function zp(s){let e=globalThis.ExhibitionSpaceEngine;if(e&&e.apiVersion!==c_)throw Error("Unsupported exhibition space engine API version.");let t=e?e.create(s):Bp(s);for(let n of["generate","enter","showOriginal","showSpace","constrain","collisionMeshes","exportGLB","state","dispose"])if(typeof t?.[n]!="function")throw Error("Exhibition space engine must implement "+n+"().");if(!t.ready||typeof t.ready.then!="function")throw Error("Exhibition space engine must expose a ready promise.");return t}function Xn(s){return s?.kind==="space"||s?.record?.kind==="space"||s?.record?.target==="space"||s?.target==="space"?{minSpan:2,maxSpan:5,minUnits:1.8}:{minSpan:1,maxSpan:3,minUnits:.35}}function kp({scene:s,canvas:e,entries:t,group:n,getCamera:i,orient:r,pick:o,fit:a,selectLegacy:l,updateCells:c,save:h,suspend:u,invalidate:f,handles:d,rotateHandle:m,moveHandle:x,handleLayer:g,getMaxHeight:p,prune:E,isLocked:M=()=>!1}){let y=new Set,S=document.getElementById("walk-surface"),R=document.getElementById("exhibition-box-select"),C=document.createElement("div");C.className="exhibition-model-marquee",C.hidden=!0,e.parentElement.append(C);let D=!1,_=null,v=null,A=!1,U=()=>[...y].map(q=>t.get(q)).filter(Boolean),k=()=>{s.updateMatrixWorld(!0);let q=new $e;for(let X of U())q.union(new $e().setFromObject(X.object));return q};function F(q){y.clear(),q&&t.has(q)&&y.add(q),z()}function z(){v&&(s.remove(v),v.geometry.dispose(),v.material.dispose(),v=null)}function G(){for(let q of y)t.has(q)||y.delete(q);A=!0;try{l(y.size===1?[...y][0]:null)}finally{A=!1}j(),R.setAttribute("aria-pressed",String(D))}function ie(q){if(y.clear(),n.visible)for(let X of q)t.has(X)&&y.add(X);G()}function j(){z(),y.size>1&&n.visible&&(v=new Oo(k(),5463912),v.renderOrder=4,s.add(v)),oe(),f()}function oe(){if(y.size<2)return!1;if(!n.visible||e.closest("[hidden]")||S.dataset.modelBrowse==="true")return d.forEach(I=>I.hidden=!0),m.hidden=x.hidden=!0,!0;let q=k(),X=e.getBoundingClientRect(),ge=g.getBoundingClientRect(),Oe=i();d.forEach((I,b)=>{let Y=new w(b&1?q.max.x:q.min.x,b&2?q.max.y:q.min.y,b&4?q.max.z:q.min.z).project(Oe),ne=X.left+(Y.x+1)*X.width/2,me=X.top+(1-Y.y)*X.height/2;I.hidden=Y.z<-1||Y.z>1||ne<X.left||ne>X.right||me<X.top||me>X.bottom,I.style.left=ne-ge.left+"px",I.style.top=me-ge.top+"px"});let Fe=d.filter(I=>!I.hidden).map(I=>({x:parseFloat(I.style.left),y:parseFloat(I.style.top)}));if(m.hidden=x.hidden=!Fe.length,Fe.length){let I=(Math.min(...Fe.map(b=>b.x))+Math.max(...Fe.map(b=>b.x)))/2;m.style.left=I+"px",m.style.top=Math.max(16,Math.min(...Fe.map(b=>b.y))-26)+"px",x.style.left=I+"px",x.style.top=Math.min(X.height-16,Math.max(...Fe.map(b=>b.y))+26)+"px"}return!0}function te(q){let X=new $e().setFromObject(q.object),ge=e.getBoundingClientRect(),Oe=[];for(let Fe=0;Fe<8;Fe++){let I=new w(Fe&1?X.max.x:X.min.x,Fe&2?X.max.y:X.min.y,Fe&4?X.max.z:X.min.z).project(i());I.z>=-1&&I.z<=1&&Number.isFinite(I.x+I.y)&&Oe.push({x:ge.left+(I.x+1)*ge.width/2,y:ge.top+(1-I.y)*ge.height/2})}return Oe.length?{left:Math.max(ge.left,Math.min(...Oe.map(Fe=>Fe.x))),right:Math.min(ge.right,Math.max(...Oe.map(Fe=>Fe.x))),top:Math.max(ge.top,Math.min(...Oe.map(Fe=>Fe.y))),bottom:Math.min(ge.bottom,Math.max(...Oe.map(Fe=>Fe.y)))}:null}function pe(q){r(),s.updateMatrixWorld(!0);let X=[];for(let ge of t.values()){let Oe=te(ge);Oe&&Oe.left<=Oe.right&&Oe.top<=Oe.bottom&&Oe.right>=q.left&&Oe.left<=q.right&&Oe.bottom>=q.top&&Oe.top<=q.bottom&&X.push(ge.record.id)}return X}let Ce=new ln(new w(0,1,0),0),Ae=new fi,Ue=new w;function Be(q,X){let ge=e.getBoundingClientRect();return r(),Ae.setFromCamera(new Me((q-ge.left)/ge.width*2-1,-(X-ge.top)/ge.height*2+1),i()),Ae.ray.intersectPlane(Ce,Ue)?Ue.clone():null}function se(){let q=k(),X=q.getCenter(new w);return X.y=0,{centre:X,bounds:q,rows:U().map(ge=>({id:ge.record.id,record:structuredClone(ge.record),position:ge.object.position.clone(),height:ge.height}))}}function ae(q,X,ge,Oe){let Fe=Xn(q);ge=Math.max(Fe.minUnits,Math.min(Fe.maxSpan,ge));let I=Math.max(Fe.minSpan,Math.min(Fe.maxSpan,Math.ceil(ge-1e-6))),b=Math.max(0,Math.min(20-I,Math.floor((X.x+200)/20-I/2))),Y=Math.max(0,Math.min(20-I,Math.floor((X.z+200)/20-I/2)));Object.assign(q.record,{col:b,row:Y,span:I,scale:ge/I,rotation:Oe,offsetX:X.x-Rn(b,I),offsetZ:X.z-Rn(Y,I)}),delete q.record.scaleCentreX,delete q.record.scaleCentreZ,a(q)}function _e(q,{dx:X=0,dz:ge=0,scale:Oe=1,angle:Fe=0},I=!1){if(M()||!q.rows.length||q.rows.some(Q=>!t.has(Q.id)))return!1;let b=Math.round(Fe/(Math.PI/2))*Math.PI/2,Y=q.rows.map(Q=>Q.record.span*(Q.record.scale||1));Oe!==1&&(Oe=Math.max(Math.max(...q.rows.map((Q,V)=>Xn(Q.record).minUnits/Y[V])),Math.min(Math.min(...q.rows.map((Q,V)=>Xn(Q.record).maxSpan/Y[V])),p()/Math.max(...q.rows.map(Q=>Q.height)),Oe))),Oe===1&&b===0&&(X=Math.max(-200-q.bounds.min.x,Math.min(200-q.bounds.max.x,X)),ge=Math.max(-200-q.bounds.min.z,Math.min(200-q.bounds.max.z,ge)));let ne=U().map(Q=>({e:Q,record:structuredClone(Q.record)}));for(let Q of q.rows){let V=(Q.position.x-q.centre.x)*Oe,W=(Q.position.z-q.centre.z)*Oe,le=new w(q.centre.x+V*Math.cos(b)+W*Math.sin(b)+X,0,q.centre.z-V*Math.sin(b)+W*Math.cos(b)+ge);ae(t.get(Q.id),le,Q.record.span*(Q.record.scale||1)*Oe,(Q.record.rotation||0)+b)}let me=k();if(me.min.x<-200-.001||me.max.x>200+.001||me.min.z<-200-.001||me.max.z>200+.001){for(let Q of ne)Q.e.record=Q.record,a(Q.e);return!1}return c(),j(),I&&h(),!0}function De(q,X,ge){q.preventDefault(),q.stopImmediatePropagation(),u();let Oe=se(),Fe=e.getBoundingClientRect(),I=Oe.centre.clone().project(i()),b=Fe.left+(I.x+1)*Fe.width/2,Y=Fe.top+(1-I.y)*Fe.height/2;_={type:X,pointerId:q.pointerId,target:ge,start:{x:q.clientX,y:q.clientY},snapshot:Oe,ground:Be(q.clientX,q.clientY),cx:b,cy:Y,distance:Math.max(20,Math.hypot(q.clientX-b,q.clientY-Y)),last:Math.atan2(q.clientY-Y,q.clientX-b),angle:0,changed:!1},ge.setPointerCapture(q.pointerId)}function Le(q){if(M()||q.button!==0||!n.visible)return;let X=o(q);if(q.ctrlKey||q.metaKey){q.preventDefault(),q.stopImmediatePropagation(),u(),X?(y.has(X)?y.delete(X):y.add(X),G()):Ze(q,!0);return}if(!X&&(D||q.shiftKey)){Ze(q,q.shiftKey);return}if(X&&q.shiftKey){q.preventDefault(),q.stopImmediatePropagation(),u(),y.add(X),G();return}if(X&&y.size>1&&y.has(X)){De(q,"move",e);return}!X&&y.size>1&&ie([])}function Ze(q,X){q.preventDefault(),q.stopImmediatePropagation(),u(),_={type:"box",pointerId:q.pointerId,target:e,start:{x:q.clientX,y:q.clientY},add:X,initial:[...y]},C.hidden=!1,Ve(q.clientX,q.clientY),e.setPointerCapture(q.pointerId)}function Ve(q,X){let ge=e.getBoundingClientRect(),Oe=_.start;Object.assign(C.style,{left:Math.min(Oe.x,q)-ge.left+"px",top:Math.min(Oe.y,X)-ge.top+"px",width:Math.abs(q-Oe.x)+"px",height:Math.abs(X-Oe.y)+"px"})}function N(q){if(!_||_.pointerId!==q.pointerId)return;q.preventDefault(),q.stopImmediatePropagation();let X=_;if(X.type==="box"){Ve(q.clientX,q.clientY);return}if(X.type==="move"){let ge=Be(q.clientX,q.clientY);ge&&X.ground&&(X.changed=_e(X.snapshot,{dx:ge.x-X.ground.x,dz:ge.z-X.ground.z})||X.changed)}if(X.type==="scale"&&(X.changed=_e(X.snapshot,{scale:Math.hypot(q.clientX-X.cx,q.clientY-X.cy)/X.distance})||X.changed),X.type==="rotate"){let ge=Math.atan2(q.clientY-X.cy,q.clientX-X.cx);X.angle+=Math.atan2(Math.sin(ge-X.last),Math.cos(ge-X.last)),X.last=ge,X.changed=_e(X.snapshot,{angle:X.angle})||X.changed}}function st(q){if(!_||_.pointerId!==q.pointerId)return;q.preventDefault(),q.stopImmediatePropagation();let X=_;if(_=null,C.hidden=!0,X.type==="box")if(q.type==="pointercancel")ie(X.initial);else{let ge={left:Math.min(X.start.x,q.clientX),right:Math.max(X.start.x,q.clientX),top:Math.min(X.start.y,q.clientY),bottom:Math.max(X.start.y,q.clientY)};ie([...X.add?X.initial:[],...pe(ge)])}else if(q.type==="pointercancel"){for(let ge of X.snapshot.rows){let Oe=t.get(ge.id);Oe&&(Oe.record=ge.record,a(Oe))}c(),j()}else X.changed&&h();try{X.target.releasePointerCapture(q.pointerId)}catch{}f()}function We(){if(!_)return;let q=_;_=null,C.hidden=!0,q.changed&&h();try{q.target.releasePointerCapture(q.pointerId)}catch{}}e.addEventListener("pointerdown",Le,!0),document.addEventListener("pointermove",N,{capture:!0,passive:!1}),document.addEventListener("pointerup",st,!0),document.addEventListener("pointercancel",st,!0);for(let q of d)q.addEventListener("pointerdown",X=>{y.size>1&&X.button===0&&De(X,"scale",q)},!0),q.addEventListener("keydown",X=>{y.size>1&&["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(X.key)&&(X.preventDefault(),X.stopImmediatePropagation(),_e(se(),{scale:["ArrowUp","ArrowRight"].includes(X.key)?1.1:1/1.1},!0))},!0);m.addEventListener("pointerdown",q=>{y.size>1&&q.button===0&&De(q,"rotate",m)},!0),m.addEventListener("keydown",q=>{y.size>1&&["ArrowLeft","ArrowRight"].includes(q.key)&&(q.preventDefault(),q.stopImmediatePropagation(),_e(se(),{angle:(q.key==="ArrowLeft"?-1:1)*Math.PI/2},!0))},!0),x.addEventListener("pointerdown",q=>{y.size>1&&q.button===0&&De(q,"move",x)},!0);function ze(q){y.size>1&&q.target!==e&&!g.contains(q.target)&&!q.target.closest("#exhibition-box-select")&&ie([])}document.addEventListener("pointerdown",ze,!0);function Re(q){if(q.key==="Escape"){We();return}if(!(q.key!=="Delete"||y.size<2||S.dataset.immersive!=="true"&&S.dataset.inputActive!=="true"||S.dataset.modelBrowse==="true"||S.dataset.workspaceOpen!=="none"||document.querySelector("dialog[open]")||document.activeElement?.closest("input,textarea,select,[contenteditable=true]"))){q.preventDefault(),q.stopImmediatePropagation(),We();for(let X of U())n.remove(X.object),t.delete(X.record.id);ie([]),c(),E(),h()}}return document.addEventListener("keydown",Re,!0),window.addEventListener("blur",We),R.onclick=()=>{D=!D,R.setAttribute("aria-pressed",String(D)),R.textContent=D?"Select on":"Select",u()},{get syncing(){return A},single:F,selectMany:ie,updateHandles:oe,state:()=>({ids:[...y],enabled:D,marquee:_?.type==="box",transform:_?.type||null}),screenBounds:q=>{r(),s.updateMatrixWorld(!0);let X=t.get(q);return X?te(X):null},transform:q=>_e(se(),q,!0),dispose:()=>{We(),z(),C.remove(),e.removeEventListener("pointerdown",Le,!0),document.removeEventListener("pointermove",N,!0),document.removeEventListener("pointerup",st,!0),document.removeEventListener("pointercancel",st,!0),document.removeEventListener("pointerdown",ze,!0),document.removeEventListener("keydown",Re,!0),window.removeEventListener("blur",We)}}}function yc(s){let e=new Map,t=new Map,n=s.clone();return Hp(s,n,function(i,r){e.set(r,i),t.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;let r=i,o=e.get(i),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Hp(s,e,t){t(s,e);for(let n=0;n<s.children.length;n++)Hp(s.children[n],e.children[n],t)}function Vp(s){let e=null,t=null,n=null,i=null;function r(l,c){e||(e=new Ms({alpha:!0,antialias:!0,powerPreference:"low-power"}),e.setSize(180,240),e.setPixelRatio(1),e.outputColorSpace=St,e.setClearColor(0,0),s.append(e.domElement)),n=new en,t=l.clone(!0),t.visible=!0,t.updateMatrixWorld(!0);let h=new $e().setFromObject(t),u=h.getCenter(new w),f=h.getSize(new w),d=new pt;t.position.sub(u),d.add(t),n.add(d,new Yi(16777215,13159376,2));let m=new di(16777215,2);m.position.set(2,4,6),n.add(m);let x=c?.fov||35;i=c?.orthographic?new Tn(-1,1,1,-1,.01,1e3):new Bt(x,180/240,.01,1e3),c?.quaternion?i.quaternion.fromArray(c.quaternion):c?.orbit&&(i.position.setFromSpherical(new wi(1,c.orbit.phi,c.orbit.theta)),i.lookAt(0,0,0));let g=new w(0,0,1).applyQuaternion(i.quaternion),p=f.length();i.position.copy(g.multiplyScalar(Math.max(1,p/(2*Math.tan(x*Math.PI/360)))*1.08)),i.isOrthographicCamera&&(i.top=p*.57,i.bottom=-i.top,i.right=i.top*180/240,i.left=-i.right,i.updateProjectionMatrix()),e.render(n,i)}function o(l){s.style.transform="translate("+(l.clientX-90)+"px,"+(l.clientY-120)+"px)",n&&e.render(n,i)}function a(){s.hidden=!0,n=null,t=null,i=null}return{begin:r,update:o,end:a,dispose:()=>{e?.dispose(),e?.domElement.remove()}}}function Gp(s){let e=new Map,t=n=>{if(e.has(n))return e.get(n);let i=new Ct({color:n.color?.clone()||new Ie(16777215),map:n.map||null,vertexColors:n.vertexColors,transparent:n.transparent,opacity:n.opacity,alphaMap:n.alphaMap||null,alphaTest:n.alphaTest,side:n.side,depthWrite:n.depthWrite,depthTest:n.depthTest,toneMapped:!1});return i.name=n.name,i.userData={...n.userData,exhibitionColour:"vivid-archive-v1"},i.onBeforeCompile=r=>{r.vertexShader=`varying vec3 vArchiveNormal;
`+r.vertexShader,r.vertexShader=r.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vArchiveNormal = normalize(normalMatrix * normal);`),r.fragmentShader=`varying vec3 vArchiveNormal;
`+r.fragmentShader,r.fragmentShader=r.fragmentShader.replace("#include <opaque_fragment>",["#include <opaque_fragment>","float archiveLuma = dot(gl_FragColor.rgb, vec3(0.2126, 0.7152, 0.0722));","vec3 archiveColour = vec3(archiveLuma) + (gl_FragColor.rgb - vec3(archiveLuma)) * 1.18;","float archiveDepth = 0.84 + 0.16 * max(dot(normalize(vArchiveNormal), normalize(vec3(-0.35, 0.7, 1.0))), 0.0);","gl_FragColor.rgb = clamp(archiveColour * archiveDepth, 0.0, 1.0);"].join(`
`))},i.customProgramCacheKey=()=>"vivid-archive-v1",e.set(n,i),i};s.traverse(n=>{!n.isMesh||!n.material||(n.geometry.attributes.normal||n.geometry.computeVertexNormals(),n.material=Array.isArray(n.material)?n.material.map(t):t(n.material))});for(let n of e.keys())n.dispose();return{mode:"vivid-archive-v1",toneMapped:!1,saturation:1.18,minShading:.84}}function Wp({scene:s,canvas:e,getCamera:t,getRoomMeshes:n,isRoom:i,orient:r,invalidate:o,previewInvalidate:a=o,suspend:l,getMaxHeight:c=()=>4.65}){let h=T=>document.getElementById(T),u=new pt,f=new bs,d=new Map,m=new Map,x=new Map,g=Vp(document.getElementById("exhibition-drag-ghost")),p=null,E=null,M=0,y=null,S=new fi,R=new Me,C=new ln(new w(0,1,0),0),D=new w,_=new je(new tn(1,1),new Ct({color:8561034,transparent:!0,opacity:.32,depthWrite:!1,side:vt,toneMapped:!1}));_.rotation.x=-Math.PI/2,_.position.y=.012,_.visible=!1,s.add(_),u.name="exhibition-placed-models",s.add(u);let v=null,A=null,U=null,k=!1,F=null,z=null,G=null,ie=Promise.resolve(),j=!1,oe="",te=!1,pe=new Vi(new tn(20*.994,20*.994),new Ct({color:16179104,transparent:!0,opacity:.72,depthWrite:!1,toneMapped:!1}),400);pe.name="occupied-yellow-cells",pe.count=0,pe.visible=!1,pe.frustumCulled=!1,s.add(pe);let Ce=new Map,Ae=new He,Ue=new Gt().setFromAxisAngle(new w(1,0,0),-Math.PI/2),Be=document.createElement("div");Be.className="exhibition-scale-handles",e.parentElement.append(Be);let se=Array.from({length:8},(T,O)=>{let H=document.createElement("button");return H.className="exhibition-scale-handle",H.type="button",H.dataset.corner=O,H.setAttribute("aria-label","Drag to scale selected model"),H.title="Drag to scale",H.hidden=!0,Be.append(H),H}),ae=document.createElement("button");ae.className="exhibition-rotate-handle",ae.type="button",ae.textContent="\u21BB",ae.title="Drag to rotate in 90 degree steps",ae.setAttribute("aria-label","Drag to rotate selected model"),ae.hidden=!0,Be.append(ae);let _e=document.createElement("button");_e.className="exhibition-move-handle",_e.type="button",_e.textContent="\u2194",_e.title="Drag to move selected model",_e.setAttribute("aria-label","Drag to move selected model"),_e.hidden=!0,Be.append(_e);function De(){Ce.clear();for(let O of m.values()){let H=!!(O.record.offsetX||O.record.offsetZ),$=O.footprint/2,ve=H?Math.max(0,Math.floor((O.object.position.x-$+200)/20)):O.record.col,Pe=H?Math.max(0,Math.floor((O.object.position.z-$+200)/20)):O.record.row,tt=H?Math.min(20,Math.ceil((O.object.position.x+$+200)/20)):O.record.col+O.record.span,ot=H?Math.min(20,Math.ceil((O.object.position.z+$+200)/20)):O.record.row+O.record.span;for(let Rt=Pe;Rt<ot;Rt++)for(let Jt=ve;Jt<tt;Jt++){let zt=Rt*20+Jt;Ce.set(zt,(Ce.get(zt)||0)+1)}}let T=0;for(let O of Ce.keys())Ae.compose(new w(Rn(O%20),.002,Rn(Math.floor(O/20))),Ue,new w(1,1,1)),pe.setMatrixAt(T++,Ae);pe.count=T,pe.instanceMatrix.needsUpdate=!0,o()}function Le(){if(v?.updateHandles())return;let T=m.get(A),O=e.getBoundingClientRect(),H=Be.getBoundingClientRect();if(!u.visible||!T||e.closest("[hidden]")||h("walk-surface").dataset.modelBrowse==="true"){se.forEach(Pe=>Pe.hidden=!0),ae.hidden=!0,_e.hidden=!0;return}s.updateMatrixWorld(!0);let $=new $e().setFromObject(T.object);se.forEach((Pe,tt)=>{let ot=new w(tt&1?$.max.x:$.min.x,tt&2?$.max.y:$.min.y,tt&4?$.max.z:$.min.z).project(t()),Rt=O.left+(ot.x+1)*O.width/2,Jt=O.top+(1-ot.y)*O.height/2;Pe.hidden=ot.z<-1||ot.z>1||Rt<O.left||Rt>O.right||Jt<O.top||Jt>O.bottom,Pe.style.left=Rt-H.left+"px",Pe.style.top=Jt-H.top+"px"});let ve=se.filter(Pe=>!Pe.hidden).map(Pe=>({x:parseFloat(Pe.style.left),y:parseFloat(Pe.style.top)}));if(ae.hidden=!ve.length,_e.hidden=!ve.length,ve.length){let Pe=(Math.min(...ve.map(ot=>ot.x))+Math.max(...ve.map(ot=>ot.x)))/2,tt=Math.max(16,Math.min(...ve.map(ot=>ot.y))-26);ae.style.left=Pe+"px",ae.style.top=tt+"px",_e.style.left=Pe+"px",_e.style.top=Math.min(O.height-16,Math.max(...ve.map(ot=>ot.y))+26)+"px"}}let Ze=T=>((Math.round(T/(Math.PI/2))%4+4)%4||4)*Math.PI/2,Ve=T=>{h("exhibition-placement-status").textContent=T};function N(){return new Promise((T,O)=>{let H=indexedDB.open("learning-vegas-exhibition-floor-v1",1);H.onupgradeneeded=()=>{H.result.createObjectStore("models",{keyPath:"id"}),H.result.createObjectStore("layout")},H.onsuccess=()=>T(H.result),H.onerror=()=>O(H.error)})}async function st(){let T=await N();try{return await new Promise((O,H)=>{let $=T.transaction(["models","layout"],"readonly"),ve=$.objectStore("models").getAll(),Pe=$.objectStore("layout").get("current");$.oncomplete=()=>O({models:ve.result,layout:Pe.result||[]}),$.onerror=()=>H($.error)})}finally{T.close()}}let We=[],ze=[],Re=null,q=!1,X=!1;function ge(){let T=[...m.values()].map(H=>({...H.record})),O=new Set(T.map(H=>H.modelId));return{layout:T,files:[...d.values()].filter(H=>O.has(H.id)).map(H=>({id:H.id,blob:H.blob,name:H.name,preview:H.preview||null,record:H.record||null,composition:H.composition||null,camera:H.camera||null,libraryId:H.libraryId||null,obj:H.obj||null}))}}function Oe(){let T=ge();Re&&!q&&JSON.stringify(T.layout)!==JSON.stringify(Re.layout)&&(We.push(Re),We.length>40&&We.shift(),ze=[]),Re=T}async function Fe(T=!1){if(j||await es,X||F||z||G||v?.state().transform)return!1;let O=T?ze:We,H=T?We:ze,$=O.at(-1);if(!$)return!1;X=!0,h("walk-surface").dataset.historyBusy="true";try{let ve=new Map;for(let tt of $.files)ve.set(tt.id,await ne(tt));let Pe=ge();Ee(!0),fe(null);for(let tt of m.values())u.remove(tt.object);m.clear();for(let tt of $.layout)ce({...tt},ve.get(tt.modelId));return O.pop(),H.push(Pe),Y(),De(),q=!0,await I(),Ve(T?"Layout redone.":"Layout undone."),!0}catch(ve){return Y(),Ve("Could not restore layout: "+ve.message),!1}finally{q=!1,X=!1,delete h("walk-surface").dataset.historyBusy}}document.addEventListener("pointerdown",T=>{X&&h("walk-surface").contains(T.target)&&(T.preventDefault(),T.stopImmediatePropagation())},!0),document.addEventListener("keydown",T=>{let O=h("walk-surface"),H=T.target;!(T.ctrlKey||T.metaKey)||T.key.toLowerCase()!=="z"||T.altKey||O.dataset.immersive!=="true"&&O.dataset.inputActive!=="true"||O.dataset.modelBrowse==="true"||O.dataset.workspaceOpen&&O.dataset.workspaceOpen!=="none"||document.querySelector("dialog[open]")||H?.closest("input,textarea,select,[contenteditable=true]")||H!==document.body&&!O.contains(H)||(T.preventDefault(),T.stopImmediatePropagation(),Fe(T.shiftKey))},!0);function I(){Oe(),window.dispatchEvent(new Event("exhibition-placement-change"));let T=[...m.values()].map($=>({...$.record})),O=new Set(T.map($=>$.modelId)),H=[...d.values()].filter($=>O.has($.id)).map($=>({id:$.id,blob:$.blob,name:$.name,preview:$.preview||null,record:$.record||null,composition:$.composition||null,camera:$.camera||null,libraryId:$.libraryId||null,obj:$.obj||null}));return ie=ie.catch(()=>{}).then(async()=>{let $=await N();try{await new Promise((ve,Pe)=>{let tt=$.transaction(["models","layout"],"readwrite"),ot=tt.objectStore("models"),Rt=ot.getAllKeys();Rt.onsuccess=()=>{let Jt=new Set(Rt.result);H.forEach(zt=>{if(!Jt.has(zt.id))ot.put(zt);else if(zt.record){let Pn=ot.get(zt.id);Pn.onsuccess=()=>{(Pn.result?.record?.id!==zt.record.id||!Pn.result?.composition&&zt.composition||Pn.result?.libraryId!==zt.libraryId||JSON.stringify(Pn.result?.record?.linkedMedia)!==JSON.stringify(zt.record.linkedMedia))&&ot.put(zt)}}}),Rt.result.forEach(zt=>{O.has(zt)||ot.delete(zt)})},tt.objectStore("layout").put(T,"current"),tt.oncomplete=ve,tt.onerror=()=>Pe(tt.error),tt.onabort=()=>Pe(tt.error)})}finally{$.close()}}).catch($=>Ve("Layout is available this session, but could not save: "+$.message)),ie}function b(T){let O=new Set,H=new Set,$=new Set;T.traverse(ve=>{ve.geometry&&O.add(ve.geometry);for(let Pe of ve.material?Array.isArray(ve.material)?ve.material:[ve.material]:[]){H.add(Pe);for(let tt of Object.values(Pe))tt?.isTexture&&$.add(tt)}}),O.forEach(ve=>ve.dispose()),H.forEach(ve=>ve.dispose()),$.forEach(ve=>{ve.source?.data?.close?.(),ve.dispose()})}function Y(){let T=new Set([...m.values()].map(O=>O.record.modelId));for(let[O,H]of d)T.has(O)||(b(H.template),d.delete(O))}async function ne(T){if(d.has(T.id)){let H=d.get(T.id);for(let $ of["record","composition","camera","libraryId","obj"])T[$]&&(H[$]=T[$]);return H}if(x.has(T.id))return x.get(T.id);let O=(async()=>{if(!(T.blob instanceof Blob))throw Error("This model is unavailable. Generate or open it again.");let H=await f.parseAsync(await T.blob.arrayBuffer(),""),$=new pt;$.add(H.scene),$.updateMatrixWorld(!0);let ve=new $e().setFromObject($),Pe=ve.getSize(new w),tt=ve.getCenter(new w);if(ve.isEmpty()||!Number.isFinite(Pe.length())||Pe.length()<=0)throw b($),Error("This file contains no visible 3D model.");let ot=.98/Math.max(Pe.x,Pe.z,1e-5),Rt=0;H.scene.traverse(Pn=>{Pn.isMesh&&(Rt+=(Pn.geometry.index?.count||Pn.geometry.attributes.position.count)/3)});let Jt=T.record?.target==="space"?{mode:"saved-space-original",toneMapped:!0}:Gp(H.scene);H.scene.traverse(Pn=>{Pn.isMesh&&(Pn.castShadow=!0)}),H.scene.position.sub(new w(tt.x,ve.min.y,tt.z)),$.scale.setScalar(ot);let zt={...T,width:Pe.x*ot,depth:Pe.z*ot,height:Pe.y*ot,triangles:Rt,colour:Jt,template:$};return d.set(T.id,zt),zt})();x.set(T.id,O);try{return await O}finally{x.delete(T.id)}}function me(T,O){return O||m.get(T)?.record.span||1}function Q(T,O,H=null,$=null){let ve=me(H,$),Pe=e.getBoundingClientRect();if(T<Pe.left||T>Pe.right||O<Pe.top||O>Pe.bottom||document.elementFromPoint(T,O)?.closest(".workspace-expanded,.workspace-previews,.walk-toolbar,.exhibition-placement-tools,dialog")||(r(),s.updateMatrixWorld(!0),R.set((T-Pe.left)/Pe.width*2-1,-(O-Pe.top)/Pe.height*2+1),S.setFromCamera(R,t()),!S.ray.intersectPlane(C,D)||D.x<-200||D.x>=200||D.z<-200||D.z>=200))return null;if(i()){let Jt=S.intersectObjects(n(),!1)[0];if(Jt&&Jt.object.name!=="floor")return null}let ot=Math.min(20-ve,Math.floor((D.x+200)/20)),Rt=Math.min(20-ve,Math.floor((D.z+200)/20));return{col:ot,row:Rt,span:ve,x:Rn(ot,ve),z:Rn(Rt,ve),valid:!0}}function V(T,O,H=null){let $=Q(T,O,H);return _.visible=!!$,$&&(_.scale.set($.span*20,$.span*20,1),_.position.set($.x,.015,$.z),_.material.color.setHex($.valid?8561034:11759712)),a(),$}function W(){_.visible=!1,a()}function le(){U&&(s.remove(U),U.geometry.dispose(),U.material.dispose(),U=null);let T=m.get(A);T&&(s.updateMatrixWorld(!0),U=new Uo(T.object,8882044),s.add(U)),Le(),o()}function fe(T){v&&!v.syncing&&v.single(T),A=u.visible&&m.has(T)?T:null,k=!1;let O=m.get(A);h("exhibition-placement-tools").hidden=!O,h("exhibition-placement-name").textContent=O?O.record.name+" / "+(O.record.span||1)**2+" CELL"+((O.record.span||1)>1?"S":""):"",h("exhibition-move-model").setAttribute("aria-pressed","false"),h("exhibition-model-smaller").disabled=!O||(O.record.span||1)<=Xn(O).minSpan,h("exhibition-model-larger").disabled=!O||(O.record.span||1)>=Xn(O).maxSpan,O&&(h("exhibition-model-angle").value=String(Math.round(Ze(O.record.rotation||0)*180/Math.PI))),le()}function Z(T){T.record.rotation=Ze(T.record.rotation||0);let O=d.get(T.record.modelId),H=T.record.span||1,$=T.record.rotation||0,ve=Math.abs(Math.cos($)),Pe=Math.abs(Math.sin($)),tt=Math.min(.98*20*H*(T.record.scale||1)/Math.max(O.width*ve+O.depth*Pe,O.width*Pe+O.depth*ve,1e-5),c()/Math.max(O.height,1e-5));T.object.scale.copy(O.template.scale).multiplyScalar(tt),T.object.rotation.y=$,T.object.position.set(Rn(T.record.col,H)+(T.record.offsetX||0),.015,Rn(T.record.row,H)+(T.record.offsetZ||0)),T.height=O.height*tt,T.footprint=Math.max(O.width*ve+O.depth*Pe,O.width*Pe+O.depth*ve)*tt}function ce(T,O){T.kind=O.record?.target==="space"?"space":T.kind||"model";let H=Xn(T);T.span=Math.max(H.minSpan,Math.min(H.maxSpan,Number.isInteger(T.span)?T.span:H.minSpan)),T.col=Math.min(T.col,20-T.span),T.row=Math.min(T.row,20-T.span),T.cellSize=20;let $=yc(O.template);$.userData.placementId=T.id,u.add($);let ve={record:T,object:$};return m.set(T.id,ve),Z(ve),De(),o(),T.id}function be(T,O){let H=T?.span||1,$=Xn(O);return T?.valid&&Number.isInteger(H)&&H>=$.minSpan&&H<=$.maxSpan&&Number.isInteger(T.col)&&T.col>=0&&T.col+H<=20&&Number.isInteger(T.row)&&T.row>=0&&T.row+H<=20}async function Se(T,O){if(X)throw Error("Wait for the layout to finish restoring.");let H=O?.span||1;if(!be(O,T))throw Error("Choose an area within the exhibition floor.");let $=await ne(T),ve=ce({id:crypto.randomUUID(),modelId:$.id,col:O.col,row:O.row,span:H,scale:Number.isFinite(O.scale)?O.scale:1,rotation:Number.isFinite(O.rotation)?O.rotation:0,name:T.name||"Generated model"},$);return fe(ve),await I(),Ve("Model placed. Drag to move; double-click to view in 3D."),ve}function xe(T,O){if(X)return!1;let H=m.get(T),$=H?.record.span||1;return!H||!be({...O,span:$},H)?!1:(H.record.col=O.col,H.record.row=O.row,delete H.record.offsetX,delete H.record.offsetZ,delete H.record.scaleCentreX,delete H.record.scaleCentreZ,Z(H),De(),fe(T),I(),Ve("Moved to cell "+(O.row*20+O.col+1)+"."),!0)}function Te(T,O,H=1,$=!0){if(X)return!1;let ve=m.get(T),Pe=Xn(ve);if(!ve||!Number.isInteger(O)||O<Pe.minSpan||O>Pe.maxSpan)return!1;H=Math.max(Pe.minUnits/O,Math.min(1,Number.isFinite(H)?H:1));let tt=ve.record.span||1,ot=ve.record.scaleCentreX??(ve.object.position.x+200)/20,Rt=ve.record.scaleCentreZ??(ve.object.position.z+200)/20,Jt=Math.max(0,Math.min(20-O,Math.round(ot-O/2))),zt=Math.max(0,Math.min(20-O,Math.round(Rt-O/2)));return Object.assign(ve.record,{col:Jt,row:zt,span:O,scale:H,scaleCentreX:ot,scaleCentreZ:Rt,offsetX:(ot-10)*20-Rn(Jt,O),offsetZ:(Rt-10)*20-Rn(zt,O)}),Z(ve),De(),fe(T),$&&I(),Ve("Model fills "+O+" \xD7 "+O+" cells."),!0}async function B(T){if(X)throw Error("Wait for the layout to finish restoring.");if(!Array.isArray(T)||T.length!==m.size||new Set(T.map(H=>H.id)).size!==m.size)throw Error("The floor changed. Try arranging again.");let O=new Set;for(let H of T){if(!m.has(H.id)||!be(H,m.get(H.id))||!Number.isFinite(H.rotation)||!Number.isFinite(H.scale)||H.scale<=0||H.scale>1)throw Error("Invalid exhibition layout.");for(let $=H.row;$<H.row+H.span;$++)for(let ve=H.col;ve<H.col+H.span;ve++){let Pe=$*20+ve;if(O.has(Pe))throw Error("The proposed model footprints overlap.");O.add(Pe)}}for(let H=0;H<T.length;H++)for(let $=H+1;$<T.length;$++){let ve=T[H],Pe=T[$];if(!(ve.col+ve.span+1<=Pe.col||Pe.col+Pe.span+1<=ve.col||ve.row+ve.span+1<=Pe.row||Pe.row+Pe.span+1<=ve.row))throw Error("Leave one white cell between yellow footprints.")}for(let H of T){let $=m.get(H.id);Object.assign($.record,{col:H.col,row:H.row,span:H.span,scale:H.scale,rotation:H.rotation}),delete $.record.scaleCentreX,delete $.record.scaleCentreZ,delete $.record.offsetX,delete $.record.offsetZ,Z($)}return fe(null),De(),await I(),Ve(T.length+" models rearranged."),!0}async function ye(T,O){if(X)throw Error("Wait for the layout to finish restoring.");if(T.length!==O.length||O.some(($,ve)=>!be($,T[ve])))throw Error("Invalid placement collection.");let H=[];try{for(let $ of T)H.push(await ne($))}catch($){throw Y(),$}Ee(!0),fe(null);for(let $ of m.values())u.remove($.object);m.clear();for(let $=0;$<H.length;$++){let ve=O[$];ce({id:crypto.randomUUID(),modelId:H[$].id,col:ve.col,row:ve.row,span:ve.span,scale:ve.scale,rotation:ve.rotation,name:T[$].name||"Generated model"},H[$])}return Y(),De(),await I(),Ve(O.length+" models arranged."),!0}function L(){return[...d.values()].map(T=>{let O=T.record||{id:T.id,fingerprint:T.id,modelUrl:"assets/generated-sculptures/"+T.id+"/sculpture.glb",objUrl:"assets/generated-sculptures/"+T.id+"/sculpture.obj",target:"city",localOnly:!0,triangles:Math.round(T.triangles)};return{id:"exhibit:"+T.id,ephemeral:!0,title:T.name||"Exhibited model",group:"",savedAt:0,record:O,glb:T.blob,obj:T.obj||null,preview:T.preview,composition:T.composition||null,camera:T.camera||null,libraryId:T.libraryId||null}})}function ue(T){let O=m.get(T);O&&window.dispatchEvent(new CustomEvent("exhibition-model-open",{detail:{id:"exhibit:"+O.record.modelId,placementId:T}}))}function ee(T){if(!u.visible)return null;r(),s.updateMatrixWorld(!0);let O=e.getBoundingClientRect();R.set((T.clientX-O.left)/O.width*2-1,-(T.clientY-O.top)/O.height*2+1),S.setFromCamera(R,t());let H=S.intersectObjects(u.children,!0)[0];if(!H)return null;if(i()){let ve=S.intersectObjects(n(),!1)[0];if(ve&&ve.distance<H.distance)return null}let $=H.object;for(;$&&!$.userData.placementId;)$=$.parent;return $?.userData.placementId||null}function re(T){let O=ee(T);if(O)return O;for(let[H,$]of[[1,0],[-1,0],[0,1],[0,-1],[2,0],[-2,0],[0,2],[0,-2]]){let ve=ee({clientX:T.clientX+H,clientY:T.clientY+$});if(ve)return ve}return null}function Ee(T=!1){M++,p&&(s.remove(p),p=null),E&&(E.visible=!0,E=null),g.end(),W(),a(),T||Y()}function Xe(T,O,H=null){p&&s.remove(p),y=O,g.begin(T,O),p=yc(T),p.visible=!1,p.traverse($=>$.castShadow=!1),s.add(p),E=H,H&&(H.visible=!1),o()}async function yt(T,O){let H=++M,$=await ne(T);if(H!==M)return;let ve=yc($.template),Pe=Math.min(.98*20/Math.max($.width,$.depth),c()/$.height);ve.scale.copy($.template.scale).multiplyScalar(Pe),Xe(ve,O)}function ht(T,O=null){if(!p)return;let H=V(T.clientX,T.clientY,O),$=h("exhibition-drag-ghost");return H?.valid?($.hidden=!0,p.position.set(H.x,.015,H.z),p.visible=!0):(p.visible=!1,$.hidden=!1,g.update(T)),a(),H}function Tt(T,O){if(!p){let H=t();Xe(O.object,{orthographic:H.isOrthographicCamera,fov:H.fov||35,quaternion:H.quaternion.toArray()},O.object)}ht(T,O.record.id)}v=kp({scene:s,canvas:e,entries:m,group:u,getCamera:t,orient:r,pick:re,fit:Z,selectLegacy:fe,updateCells:De,save:I,suspend:l,invalidate:o,handles:se,rotateHandle:ae,moveHandle:_e,handleLayer:Be,getMaxHeight:c,prune:Y,isLocked:()=>X}),e.addEventListener("pointerdown",T=>{if(T.button!==0)return;let O=re(T);if(k&&A&&!O){T.preventDefault(),T.stopImmediatePropagation();let H=V(T.clientX,T.clientY,A);xe(A,H)&&W();return}if(!O){A&&(fe(null),W(),Ve(""));return}T.preventDefault(),T.stopImmediatePropagation(),l(),fe(O),F={id:O,pointerId:T.pointerId,x:T.clientX,y:T.clientY,started:!1},e.setPointerCapture(T.pointerId)},!0),e.addEventListener("pointermove",T=>{if(k&&!F){V(T.clientX,T.clientY,A);return}!F||F.pointerId!==T.pointerId||(T.preventDefault(),T.stopImmediatePropagation(),!(!F.started&&Math.hypot(T.clientX-F.x,T.clientY-F.y)<6)&&(F.started=!0,Tt(T,m.get(F.id))))},!0);function Kt(T){if(!(!F||F.pointerId!==T.pointerId)){if(T.preventDefault(),T.stopImmediatePropagation(),F.started&&T.type!=="pointercancel"){let O=Q(T.clientX,T.clientY,F.id);xe(F.id,O)||Ve("Choose a floor cell. The model stays in its previous position.")}try{(F.handle?_e:e).releasePointerCapture(T.pointerId)}catch{}F=null,Ee(),W()}}_e.addEventListener("pointerdown",T=>{T.button!==0||!A||(T.preventDefault(),T.stopPropagation(),l(),F={id:A,pointerId:T.pointerId,x:T.clientX,y:T.clientY,started:!1,handle:!0},_e.setPointerCapture(T.pointerId))}),_e.addEventListener("pointermove",T=>{!F?.handle||F.pointerId!==T.pointerId||(T.preventDefault(),T.stopPropagation(),!(!F.started&&Math.hypot(T.clientX-F.x,T.clientY-F.y)<6)&&(F.started=!0,Tt(T,m.get(F.id))))}),_e.addEventListener("pointerup",Kt),_e.addEventListener("pointercancel",Kt),_e.addEventListener("lostpointercapture",()=>{F?.handle&&(F=null,Ee(),W())}),document.addEventListener("pointerdown",T=>{A&&T.target!==e&&!Be.contains(T.target)&&(fe(null),W(),Ve(""))},!0);function qn(){let T=m.get(A);if(T){if(z=null,G=null,F){try{(F.handle?_e:e).releasePointerCapture(F.pointerId)}catch{}F=null}Ee(),u.remove(T.object),m.delete(A),De(),fe(null),Y(),I(),Ve("Model removed from the room.")}}document.addEventListener("keydown",T=>{let O=h("walk-surface"),H=document.activeElement;T.key!=="Delete"||!A||O.dataset.immersive!=="true"&&O.dataset.inputActive!=="true"||O.dataset.modelBrowse==="true"||O.dataset.workspaceOpen&&O.dataset.workspaceOpen!=="none"||document.querySelector("dialog[open]")||H?.closest("input,textarea,select,[contenteditable=true]")||H!==document.body&&!O.contains(H)||(T.preventDefault(),T.stopImmediatePropagation(),qn())},!0),e.addEventListener("dblclick",T=>{let O=re(T);O&&(T.preventDefault(),T.stopImmediatePropagation(),l(),fe(O),ue(O))},!0);for(let T of se)T.addEventListener("pointerdown",O=>{if(O.button!==0||!A)return;O.preventDefault(),O.stopPropagation(),l();let H=m.get(A),$=new $e().setFromObject(H.object),ve=$.getCenter(new w).project(t()),Pe=e.getBoundingClientRect(),tt=Pe.left+(ve.x+1)*Pe.width/2,ot=Pe.top+(1-ve.y)*Pe.height/2;z={id:A,pointerId:O.pointerId,cx:tt,cy:ot,distance:Math.max(20,Math.hypot(O.clientX-tt,O.clientY-ot)),units:H.record.span*(H.record.scale||1)},T.setPointerCapture(O.pointerId)}),T.addEventListener("keydown",O=>{(O.key==="ArrowUp"||O.key==="ArrowRight")&&(O.preventDefault(),Te(A,Math.min(Xn(m.get(A)).maxSpan,m.get(A).record.span+1))),(O.key==="ArrowDown"||O.key==="ArrowLeft")&&(O.preventDefault(),Te(A,Math.max(Xn(m.get(A)).minSpan,m.get(A).record.span-1)))});function bn(T,O,H=!0){if(X)return!1;let $=m.get(T);return!$||!Number.isFinite(O)?!1:($.record.rotation=Ze(O),A===T&&(h("exhibition-model-angle").value=String(Math.round($.record.rotation*180/Math.PI))),Z($),le(),H&&I(),!0)}ae.addEventListener("pointerdown",T=>{if(T.button!==0||!A)return;T.preventDefault(),T.stopPropagation(),l();let O=m.get(A),H=new $e().setFromObject(O.object).getCenter(new w).project(t()),$=e.getBoundingClientRect(),ve=$.left+(H.x+1)*$.width/2,Pe=$.top+(1-H.y)*$.height/2;G={id:A,pointerId:T.pointerId,cx:ve,cy:Pe,last:Math.atan2(T.clientY-Pe,T.clientX-ve),angle:O.record.rotation||0},ae.setPointerCapture(T.pointerId)}),ae.addEventListener("keydown",T=>{["ArrowLeft","ArrowRight"].includes(T.key)&&(T.preventDefault(),bn(A,(m.get(A)?.record.rotation||0)+(T.key==="ArrowLeft"?-1:1)*Math.PI/2))}),document.addEventListener("pointermove",T=>{if(!G||G.pointerId!==T.pointerId)return;T.preventDefault(),T.stopImmediatePropagation();let O=G,H=Math.atan2(T.clientY-O.cy,T.clientX-O.cx),$=Math.atan2(Math.sin(H-O.last),Math.cos(H-O.last));O.angle+=$,O.last=H,bn(O.id,O.angle,!1)},{capture:!0,passive:!1});for(let T of["pointerup","pointercancel"])document.addEventListener(T,O=>{G?.pointerId===O.pointerId&&(G=null,I())},!0);document.addEventListener("pointermove",T=>{if(!z||z.pointerId!==T.pointerId)return;T.preventDefault(),T.stopImmediatePropagation();let O=z,H=Xn(m.get(O.id)),$=Math.max(H.minUnits,Math.min(H.maxSpan,O.units*Math.hypot(T.clientX-O.cx,T.clientY-O.cy)/O.distance)),ve=Math.max(H.minSpan,Math.ceil($-1e-6));Te(O.id,ve,$/ve,!1)},{capture:!0,passive:!1});for(let T of["pointerup","pointercancel"])document.addEventListener(T,O=>{z?.pointerId===O.pointerId&&(z=null,I())},!0);e.addEventListener("pointerup",Kt,!0),e.addEventListener("pointercancel",Kt,!0),e.addEventListener("lostpointercapture",()=>{F=null,Ee(),W()}),h("exhibition-move-model").onclick=()=>{k=!k,l(),h("exhibition-move-model").setAttribute("aria-pressed",String(k)),k?Ve("Click a floor cell, or drag the selected model."):W()},h("exhibition-turn-model").onclick=()=>bn(A,(m.get(A)?.record.rotation||0)+Math.PI/2),h("exhibition-model-angle").onchange=T=>bn(A,Number(T.target.value)*Math.PI/180),h("exhibition-remove-model").onclick=qn,h("exhibition-model-smaller").onclick=()=>Te(A,(m.get(A)?.record.span||1)-1),h("exhibition-model-larger").onclick=()=>Te(A,(m.get(A)?.record.span||1)+1),h("exhibition-open-model").onclick=()=>ue(A),h("exhibition-deselect-model").onclick=()=>{fe(null),W(),Ve("")},window.addEventListener("blur",()=>{if((z||G)&&(z=null,G=null,I()),k=!1,Ee(),W(),F){try{e.releasePointerCapture(F.pointerId)}catch{}F=null}}),document.addEventListener("keydown",T=>{if(T.key==="Escape"&&((z||G)&&(z=null,G=null,I()),k=!1,W(),Ee(),F)){try{e.releasePointerCapture(F.pointerId)}catch{}F=null}});function Qi(){let T=new Set;for(let O of d.values())O.template.traverse(H=>{for(let $ of H.material?Array.isArray(H.material)?H.material:[H.material]:[])for(let ve of Object.values($))ve?.isTexture&&T.add(ve)});return T.size}let es=(async()=>{try{let T=await st(),O=new Map(T.models.map(H=>[H.id,H]));for(let H of T.layout){let $=H.cellSize||2;if($!==20){for(let Pe of["offsetX","offsetZ"])Number.isFinite(H[Pe])&&(H[Pe]*=20/$);H.cellSize=20}if(!Number.isInteger(H.col)||H.col<0||H.col+(H.span||1)>20||!Number.isInteger(H.row)||H.row<0||H.row+(H.span||1)>20)continue;let ve=O.get(H.modelId);if(ve)try{let Pe=await ne(ve);ce(H,Pe)}catch(Pe){Ve("Some stored models could not reopen: "+Pe.message)}}}catch(T){Ve("Previous room layout could not load: "+T.message)}finally{j=!0,Re=ge()}})();return Object.freeze({ready:es,undo:()=>Fe(!1),redo:()=>Fe(!0),beginDragPreview:yt,updateDragPreview:ht,endDragPreview:Ee,updateHandles:Le,audioSources:()=>[...m.values()].map(T=>{let O=d.get(T.record.modelId);return{id:T.record.id,modelId:T.record.modelId,name:T.record.name,x:T.object.position.x,z:T.object.position.z,width:T.footprint,audio:O?.record?.linkedMedia?.audio||null,composition:O?.composition||null}}),spaceSources:()=>[...m.values()].map(T=>({id:T.record.id,modelId:T.record.modelId,name:T.record.name,target:d.get(T.record.modelId)?.record?.target||(T.record.kind==="space"?"space":"model"),object:T.object,layout:{col:T.record.col,row:T.record.row,span:T.record.span,scale:T.record.scale||1,rotation:T.record.rotation||0,offsetX:T.record.offsetX||0,offsetZ:T.record.offsetZ||0}})),showSources:(T,O={})=>{u.visible=!!T,te=!!O.keepFootprints,T||fe(null),pe.visible=!i()&&(u.visible||te),pe.material.depthTest=!0,pe.renderOrder=0,o()},setViewMode:T=>{pe.visible=T==="axonometric"&&(u.visible||te),Le(),o()},cellAt:Q,hitModelAt:(T,O)=>ee({clientX:T,clientY:O}),hover:V,stopHover:W,place:Se,select:fe,selectMany:T=>v.selectMany(T),selectionBounds:T=>v.screenBounds(T),transformSelection:T=>v.transform(T),move:xe,resize:Te,rotate:bn,applyLayout:B,replaceCollection:ye,browseEntries:L,openModel:ue,clearSelection:()=>fe(null),state:()=>({history:{undo:We.length,redo:ze.length,busy:X},liveDrag:{active:!!p,floorVisible:!!p?.visible,sourceView:y},restored:j,sourcesVisible:u.visible,footprintsVisible:pe.visible,footprintsThroughSpace:!1,footprintsPreserved:te,selected:A,selectedIds:v.state().ids,multiSelection:v.state(),models:[...m.values()].map(T=>({...T.record,x:T.object.position.x,z:T.object.position.z,height:T.height,footprint:T.footprint,colour:d.get(T.record.modelId)?.colour})),modelCount:m.size,uniqueMeshes:d.size,textureCount:Qi(),occupiedCells:[...Ce].map(([T,O])=>({col:T%20,row:Math.floor(T/20),count:O})),occupiedColour:"#f6dfa0",scaling:!!z,rotating:!!G,dragging:!!F?.started,pendingDrag:!!F}),dispose:()=>{v?.dispose(),g.dispose(),Be.remove(),pe.geometry.dispose(),pe.material.dispose(),d.forEach(T=>b(T.template)),_.geometry.dispose(),_.material.dispose(),U&&(U.geometry.dispose(),U.material.dispose())}})}var Xp={type:"change"},Qu={type:"start"},Yp={type:"end"},vc=new _i,qp=new ln,h_=Math.cos(70*Mn.DEG2RAD),on=new w,On=2*Math.PI,Dt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},$u=1e-6,_c=class extends Fo{constructor(e,t=null){super(e,t),this.state=Dt.NONE,this.target=new w,this.cursor=new w,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Qn.ROTATE,MIDDLE:Qn.DOLLY,RIGHT:Qn.PAN},this.touches={ONE:ps.ROTATE,TWO:ps.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new w,this._lastQuaternion=new Gt,this._lastTargetPosition=new w,this._quat=new Gt().setFromUnitVectors(e.up,new w(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new wi,this._sphericalDelta=new wi,this._scale=1,this._panOffset=new w,this._rotateStart=new Me,this._rotateEnd=new Me,this._rotateDelta=new Me,this._panStart=new Me,this._panEnd=new Me,this._panDelta=new Me,this._dollyStart=new Me,this._dollyEnd=new Me,this._dollyDelta=new Me,this._dollyDirection=new w,this._mouse=new Me,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=d_.bind(this),this._onPointerDown=u_.bind(this),this._onPointerUp=f_.bind(this),this._onContextMenu=__.bind(this),this._onMouseWheel=g_.bind(this),this._onKeyDown=x_.bind(this),this._onTouchStart=y_.bind(this),this._onTouchMove=v_.bind(this),this._onMouseDown=p_.bind(this),this._onMouseMove=m_.bind(this),this._interceptControlDown=M_.bind(this),this._interceptControlUp=S_.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Xp),this.update(),this.state=Dt.NONE}update(e=null){let t=this.object.position;on.copy(t).sub(this.target),on.applyQuaternion(this._quat),this._spherical.setFromVector3(on),this.autoRotate&&this.state===Dt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=On:n>Math.PI&&(n-=On),i<-Math.PI?i+=On:i>Math.PI&&(i-=On),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(on.setFromSpherical(this._spherical),on.applyQuaternion(this._quatInverse),t.copy(this.target).add(on),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=on.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let a=new w(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new w(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=on.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(vc.origin.copy(this.object.position),vc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(vc.direction))<h_?this.object.lookAt(this.target):(qp.setFromNormalAndCoplanarPoint(this.object.up,this.target),vc.intersectPlane(qp,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>$u||8*(1-this._lastQuaternion.dot(this.object.quaternion))>$u||this._lastTargetPosition.distanceToSquared(this.target)>$u?(this.dispatchEvent(Xp),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?On/60*this.autoRotateSpeed*e:On/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){on.setFromMatrixColumn(t,0),on.multiplyScalar(-e),this._panOffset.add(on)}_panUp(e,t){this.screenSpacePanning===!0?on.setFromMatrixColumn(t,1):(on.setFromMatrixColumn(t,0),on.crossVectors(this.object.up,on)),on.multiplyScalar(e),this._panOffset.add(on)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let i=this.object.position;on.copy(i).sub(this.target);let r=on.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),i=e-n.left,r=t-n.top,o=n.width,a=n.height;this._mouse.x=i/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(On*this._rotateDelta.x/t.clientHeight),this._rotateUp(On*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(On*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-On*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(On*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-On*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panStart.set(n,i)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(i,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(On*this._rotateDelta.x/t.clientHeight),this._rotateUp(On*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Me,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function u_(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function d_(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function f_(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Yp),this.state=Dt.NONE;break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function p_(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Qn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=Dt.DOLLY;break;case Qn.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Dt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Dt.ROTATE}break;case Qn.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Dt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Dt.PAN}break;default:this.state=Dt.NONE}this.state!==Dt.NONE&&this.dispatchEvent(Qu)}function m_(s){switch(this.state){case Dt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case Dt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case Dt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function g_(s){this.enabled===!1||this.enableZoom===!1||this.state!==Dt.NONE||(s.preventDefault(),this.dispatchEvent(Qu),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(Yp))}function x_(s){this.enabled!==!1&&this._handleKeyDown(s)}function y_(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case ps.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=Dt.TOUCH_ROTATE;break;case ps.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=Dt.TOUCH_PAN;break;default:this.state=Dt.NONE}break;case 2:switch(this.touches.TWO){case ps.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=Dt.TOUCH_DOLLY_PAN;break;case ps.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=Dt.TOUCH_DOLLY_ROTATE;break;default:this.state=Dt.NONE}break;default:this.state=Dt.NONE}this.state!==Dt.NONE&&this.dispatchEvent(Qu)}function v_(s){switch(this._trackPointer(s),this.state){case Dt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case Dt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case Dt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case Dt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=Dt.NONE}}function __(s){this.enabled!==!1&&s.preventDefault()}function M_(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function S_(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}(()=>{"use strict";let s=document.getElementById("walk-surface"),e=document.getElementById("walk-canvas-host");if(!s||!e)return;let t=L=>document.getElementById(L),n=Object.freeze({width:400,depth:400,height:30,wallThickness:.18}),i=400/100,r=.02/i,o=1.65,a=.35,l=1.8,c=new Set,h=new fi,u=new Me,f=new w(0,o,14),d=new w,m=new w,x=new w,g,p,E,M,y,S,R,C,D,_=null,v=null,A=null,U=null,k=null,F=null,z=null,G=null,ie=[],j=!1,oe=!1,te="room",pe=!1,Ce=0,Ae=0,Ue=!1,Be=!1,se=null,ae=!1,_e=0,De=0,Le=0,Ze=0,Ve=null,N=(L,ue,ee)=>Math.max(ue,Math.min(ee,L)),st=new Set(["KeyW","KeyA","KeyS","KeyD","KeyQ","KeyE","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","ShiftLeft","ShiftRight","ControlLeft","ControlRight"]),We=["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],ze=(...L)=>L.some(ue=>c.has(ue));function Re(L){return L.x=N(L.x,-n.width/2+a,n.width/2-a),L.z=N(L.z,-n.depth/2+a,n.depth/2-a),L.y=Ue?N(L.y,a,n.height-a):_?.state().active?L.y:o,_?.constrain(L,a,{fly:Ue,eyeHeight:o}),L.x=N(L.x,-n.width/2+a,n.width/2-a),L.z=N(L.z,-n.depth/2+a,n.depth/2-a),L}function q(){if(te==="axonometric"){E.updateMatrixWorld();return}E.position.copy(f),E.rotation.set(pe?0:Ae,Ce,0,"YXZ"),E.updateProjectionMatrix(),pe&&(E.projectionMatrix.elements[9]=Math.tan(N(Ae,-.8,.8))*E.projectionMatrix.elements[5],E.projectionMatrixInverse.copy(E.projectionMatrix).invert()),E.updateMatrixWorld()}function X(){let L=te==="axonometric";t("walk-two-point").hidden=L,t("exhibition-proximity-sound").hidden=L,t("walk-two-point").textContent="Two-point "+(pe?"on":"off"),t("walk-two-point").setAttribute("aria-pressed",String(pe)),t("walk-view-toggle").textContent=L?"Axonometric / switch":"Eye level / switch",t("walk-view-toggle").setAttribute("aria-pressed",String(L)),t("walk-status").textContent=L?"AXONOMETRIC / "+20+" M GRID":(Ue?"FLY":"WALK")+" / EYE "+f.y.toFixed(2)+" M",t("walk-view-label").textContent=L?"FLOOR PLAN":"WHITE ATMOSPHERE",s.querySelector(".walk-room-label span:last-child").textContent=L?400+" x "+400+" M":n.width.toFixed(0)+" x "+n.depth.toFixed(0)+" M",t("walk-caption-text").textContent=L?"Drag to rotate \xB7 Wheel to zoom \xB7 Right / middle drag to pan":"WASD to walk \xB7 Drag to look \xB7 Q up / E down \xB7 Space to walk \xB7 Shift faster",t("walk-dimensions").textContent=L?400+" \xD7 "+400+" M / 400 CELLS":n.width.toFixed(0)+" \xD7 "+n.depth.toFixed(0)+" \xD7 "+n.height.toFixed(1)+" M",s.setAttribute("aria-label",L?"Orthographic floor view with four hundred twenty metre grid cells. Drag to rotate; wheel to zoom; right or middle drag to pan.":"Walk through a four hundred by four hundred metre sunlit exhibition with fog and reflective multilevel paths"),s.dataset.view=te,s.dataset.navigationActive=String(Be),s.dataset.fly=String(Ue),s.dataset.eyeX=String(f.x),s.dataset.eyeY=String(f.y),s.dataset.eyeZ=String(f.z)}function ge(){if(c.clear(),se)try{g.domElement.releasePointerCapture(se.id)}catch{}se=null,s.classList.remove("is-dragging"),Le=0}function Oe(){Be=!1,S&&(S.enabled=!1),ge(),Ve=null,document.activeElement===s&&s.blur()}function Fe(){s.dataset.inputActive="true",Be=!0,S&&(S.enabled=te==="axonometric"),s.focus({preventScroll:!0})}function I(){ae||(_e=window.scrollY,ae=!0,document.documentElement.classList.add("exhibition-immersive"),s.classList.add("is-immersive"),s.dataset.immersive="true",t("walk-exit-bar").hidden=!1,s.requestFullscreen({navigationUI:"hide"}).then(()=>{W(),Fe()}).catch(()=>{t("walk-notice").textContent="Fullscreen was blocked by the browser. The expanded view remains available."}),W(),Fe())}function b(){ae&&(ae=!1,s.dataset.immersive="false",s.classList.remove("is-immersive","show-exit"),t("walk-exit-bar").hidden=!0,document.documentElement.classList.remove("exhibition-immersive"),window.ExhibitionWorkspace?.closePanel(),window.ExhibitionBrowse?.close(),ce.endDragPreview(),Oe(),document.fullscreenElement&&document.exitFullscreen().catch(()=>{}),W(),window.scrollTo({top:_e,behavior:"instant"}))}function Y(){return te==="room"&&Be&&(We.some(L=>c.has(L))||Ue&&ze("KeyQ","KeyE"))}function ne(){!j||oe||document.hidden||De||(De=requestAnimationFrame(Q))}function me(){g&&(g.shadowMap.needsUpdate=!0),ne()}function Q(L){if(De=0,oe||document.hidden)return;let ue=Le?Math.min((L-Le)/1e3,.05):1/60;if(Le=L,Ve){let ee=N((L-Ve.start)/420,0,1),re=ee*ee*(3-2*ee);f.lerpVectors(Ve.from,Ve.to,re),Re(f),ee===1&&(Ve=null)}if(Y()){Ve=null;let ee=Ue?Ae:0;d.set(-Math.sin(Ce)*Math.cos(ee),Math.sin(ee),-Math.cos(Ce)*Math.cos(ee)),m.set(Math.cos(Ce),0,-Math.sin(Ce)),x.set(0,0,0),ze("KeyW","ArrowUp")&&x.add(d),ze("KeyS","ArrowDown")&&x.sub(d),ze("KeyD","ArrowRight")&&x.add(m),ze("KeyA","ArrowLeft")&&x.sub(m),Ue&&ze("KeyQ")&&(x.y+=1),Ue&&ze("KeyE")&&(x.y-=1);let re=ze("ControlLeft","ControlRight")?6:ze("ShiftLeft","ShiftRight")?3:1;x.lengthSq()&&f.addScaledVector(x.normalize(),l*re*ue),Re(f)}q(),ce.updateHandles(),U.render(te==="room",E)&&ne(),Ze++,X(),Y()||Ve?ne():Le=0}function V(){if(ge(),Ve=null,te==="axonometric")y.position.set(120*i,120*i,120*i),y.zoom=1.08,G?.refresh({reset:!0}),y.updateProjectionMatrix(),S.update();else{if(_?.state().active){_.enter();return}Ue=!1,f.set(0,o,7),Ce=0,Ae=0}X(),ne()}function W(){if(!g||oe)return;let L=e.getBoundingClientRect();if(!L.width||!L.height)return;g.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),g.setSize(L.width,L.height,!1),U?.setSize(L.width,L.height);let ue=L.width/L.height;M.aspect=ue,M.updateProjectionMatrix();let ee=Math.max(110,160/ue)*i/2;y.left=-ee*ue,y.right=ee*ue,y.top=ee,y.bottom=-ee,y.updateProjectionMatrix(),s.style.setProperty("--walk-toolbar-height",t("walk-toolbar").offsetHeight+"px"),ne()}function le(L){q();let ue=g.domElement.getBoundingClientRect();return u.set((L.clientX-ue.left)/ue.width*2-1,-(L.clientY-ue.top)/ue.height*2+1),h.setFromCamera(u,E),h.intersectObjects(te==="room"?[...ie,..._?.collisionMeshes()||[]]:[R.getObjectByName("axonometric-floor")],!1)[0]||null}function fe(L){t("walk-error").textContent=L,t("walk-error").hidden=!1,s.setAttribute("aria-busy","false")}try{let Ee=function(T,O,H,$,ve,Pe,tt,ot=L){let Rt=new je(new dn(O,H,$),ot);return Rt.receiveShadow=!0,Rt.name=T,Rt.position.set(ve,Pe,tt),p.add(Rt),ie.push(Rt),Rt};p=new en,p.background=new Ie("#f2f2f2"),M=new Bt(62,1,.05,250*i),y=new Tn(-100,100,55,-55,.05,700*i),y.position.set(120*i,120*i,120*i),y.zoom=1.08,y.lookAt(0,0,0),E=M,g=new Ms({antialias:!0,stencil:!0,powerPreference:"low-power"}),g.outputColorSpace=St,g.toneMapping=ms,g.toneMappingExposure=1.05,g.shadowMap.enabled=!0,g.shadowMap.type=tl,g.shadowMap.autoUpdate=!1,e.append(g.domElement),g.domElement.setAttribute("aria-hidden","true");let L=new Yt({color:16777215,roughness:.94,metalness:0}),ue=new Yt({color:16777215,roughness:.72,metalness:0}),ee=n.wallThickness,re=n.width/2;Ee("floor",440,ee,440,0,-ee/2,0,ue),Ee("ceiling",40+2*ee,ee,40+2*ee,0,n.height+ee/2,0,new Ct({transparent:!0,opacity:0,depthWrite:!1})),A=ep({scene:p,height:n.height,wallMaterial:L}),ie.push(...A.collisionMeshes()),C=new pt,C.name="room-floor-junctions",p.add(C);let Xe=new bt().setFromPoints([new w(-19.996,.009,-19.996),new w(19.996,.009,-19.996),new w(19.996,.009,19.996),new w(-19.996,.009,19.996)]);C.add(new us(Xe,new Jn({color:12107976,transparent:!0,opacity:.7,toneMapped:!1})));let yt=new tn(40,.22,1,12),ht=yt.attributes.position,Tt=[];for(let T=0;T<ht.count;T++){let O=N((ht.getY(T)+.11)/.22,0,1);Tt.push(1,1,1,.16*Math.pow(O,2))}yt.setAttribute("color",new gt(Tt,4));let Kt=new Ct({color:9542307,vertexColors:!0,transparent:!0,depthWrite:!1,toneMapped:!1,side:vt});for(let[T,O,H]of[[0,-19.89,0],[0,19.89,Math.PI],[-19.89,0,Math.PI/2],[19.89,0,-Math.PI/2]]){let $=new je(yt,Kt);$.rotation.set(-Math.PI/2,0,H),$.position.set(T,.005,O),C.add($)}R=new pt,R.name="axonometric-floor-view",R.visible=!1,p.add(R);let qn=new je(new tn(400,400),new Ct({color:16777215,side:vt,toneMapped:!1}));qn.name="axonometric-floor",qn.rotation.x=-Math.PI/2,R.add(qn),D=new No(400,20,11384253,11384253),D.name="twenty-metre-grid",D.position.y=.004,D.material.transparent=!0,D.material.opacity=.48,D.material.depthWrite=!1,D.material.toneMapped=!1,R.add(D);let bn=new us(new bt().setFromPoints([new w(-200,.006,-200),new w(200,.006,-200),new w(200,.006,200),new w(-200,.006,200)]),new Jn({color:10398646,transparent:!0,opacity:.6,toneMapped:!1}));R.add(bn),p.add(new Yi(14542061,4338987,.08));for(let T of[-5,5])for(let O of[-5,5]){let H=new ji(16777215,7,28,2);H.visible=!1,H.name="gallery-ceiling-light",H.position.set(T,n.height-.45,O),p.add(H)}v=vp({scene:p,renderer:g,height:n.height,floorMaterial:ue,openAtmosphere:!0});let Qi=new mi(g),es=new kr;p.environment=Qi.fromScene(es,.05).texture,p.environmentIntensity=.68,Qi.dispose(),es.dispose(),U=gp({scene:p,renderer:g,camera:M}),j=!0,s.setAttribute("aria-busy","false"),X()}catch(L){console.error("White exhibition room:",L),fe("The 3D room could not start. Enable WebGL in your browser and reload this page.");return}z=ap({scene:p}),F=xp({scene:p,skylight:v,renderPipeline:U,invalidate:me});let Z=g.domElement,ce=Wp({scene:p,canvas:Z,getCamera:()=>E,getRoomMeshes:()=>ie,isRoom:()=>te==="room",orient:q,invalidate:me,previewInvalidate:ne,suspend:Oe,getMaxHeight:()=>57.5*i});k=fp({scene:p,renderer:g,getMeshes:()=>{let L=_?.collisionMeshes()||[];if(L.length)return L;let ue=[];for(let ee of ce.spaceSources())ee.object.traverse(re=>{re.isMesh&&ue.push(re)});return ue},invalidate:ne}),window.addEventListener("exhibition-placement-change",()=>k.refresh()),_=zp({scene:p,renderer:g,placement:ce,getCamera:()=>E,onSpaceLight:(L,ue)=>{k?.refresh(),G?.refresh(),v.updateCanopy(L,ue),U.updateSpace(L,ue)},onSpaceBounds:xe,getView:()=>te,setView:be,navigate:L=>{ge(),Ve=null,Ue=!1,f.set(L.x,L.y,L.z),Ce=L.yaw,Ae=L.pitch||0,Re(f),X(),ne(),Fe()},invalidate:me}),s.addEventListener("dblclick",L=>{L.target===Z&&!ae&&L.button===0&&(L.preventDefault(),L.stopPropagation(),I())},!0),s.addEventListener("pointermove",L=>{ae&&s.classList.toggle("show-exit",L.clientY-s.getBoundingClientRect().top<54)}),s.addEventListener("pointerleave",()=>s.classList.remove("show-exit")),t("walk-exit").addEventListener("click",b),s.addEventListener("pointerdown",L=>{L.target===Z&&Fe()},!0),S=new _c(y,Z),S.enabled=!1,S.enableDamping=!1,S.minPolarAngle=.12,S.maxPolarAngle=Math.PI/2-.1,S.minZoom=.35,S.maxZoom=12,S.screenSpacePanning=!1,S.mouseButtons={LEFT:Qn.ROTATE,MIDDLE:Qn.PAN,RIGHT:Qn.PAN},S.addEventListener("change",ne),G=tp({controls:S,camera:y,nearRadius:60,getObjects:()=>{if(_?.state().active){let L=_.collisionMeshes();return L.length?[L[0].parent]:[]}return ce.spaceSources().map(L=>L.object)}}),window.addEventListener("exhibition-placement-change",()=>G.refresh());function be(L){if(!["room","axonometric"].includes(L))throw new TypeError("Unknown gallery view.");ge(),Ve=null,te=L,k?.setViewMode(L);let ue=L==="axonometric";p.background.set(16777215),p.fog=ue?null:new po(16777215,r),ie.forEach(ee=>ee.visible=!ue&&ee.name==="floor"),A.setVisible(!1),C.visible=!1,R.visible=ue,v.setRoomMode(!ue),F?.setViewMode(L),E=ue?y:M,ce.setViewMode(L),_?.setViewMode?.(L),S.enabled=ue&&Be,X(),W(),ne()}function Se(L){let ue=N(Number(L)||30,30,180*i);Math.abs(ue-n.height)<.01||(n=Object.freeze({...n,height:ue}),ie.find(ee=>ee.name==="ceiling").position.y=ue+n.wallThickness/2,A.setHeight(ue),ie=ie.filter(ee=>["floor","ceiling"].includes(ee.name)).concat(A.collisionMeshes()),ie.forEach(ee=>ee.visible=te==="room"&&ee.name==="floor"),p.traverse(ee=>{ee.isPointLight&&ee.name==="gallery-ceiling-light"&&(ee.position.y=ue-.45)}),v.setHeight(ue),Re(f),X(),me())}function xe(L){let ue=L.getSize(new w),ee=Math.max(400,ue.x+40),re=Math.max(400,ue.z+40);n=Object.freeze({...n,width:ee,depth:re});let Ee=ie.find(Xe=>Xe.name==="floor");Ee.geometry.dispose(),Ee.geometry=new dn(ee+40,n.wallThickness,re+40),Se(Math.max(30,L.max.y+3)),ne()}function Te(L){pe=!!L,pe&&(Ae=N(Ae,-.8,.8)),X(),ne()}be("axonometric"),Z.addEventListener("contextmenu",L=>L.preventDefault()),Z.addEventListener("pointerdown",L=>{if(!Be||te==="axonometric"||L.button>2)return;L.preventDefault(),Fe(),Ve=null;let ee=(L.button===2?le(L):null)?.point.clone()||f.clone().add(E.getWorldDirection(new w).multiplyScalar(5));se={id:L.pointerId,button:L.button,x:L.clientX,y:L.clientY,pivot:ee},Z.setPointerCapture(L.pointerId),s.classList.add("is-dragging")}),Z.addEventListener("pointermove",L=>{if(!se||se.id!==L.pointerId)return;let ue=L.clientX-se.x,ee=L.clientY-se.y;if(se.x=L.clientX,se.y=L.clientY,se.button===0)Ce-=ue*.0035,Ae=N(Ae-ee*.0035,pe?-.8:-1.45,pe?.8:1.45);else if(se.button===1)m.set(Math.cos(Ce),0,-Math.sin(Ce)),f.addScaledVector(m,-ue*.008),Ue&&(f.y+=ee*.008),Re(f);else{let re=f.clone().sub(se.pivot),Ee=new wi().setFromVector3(re);Ee.theta-=ue*.0035,Ue&&(Ee.phi=N(Ee.phi+ee*.0035,.1,Math.PI-.1)),f.copy(se.pivot).add(new w().setFromSpherical(Ee)),Re(f),E.position.copy(f),E.lookAt(se.pivot);let Xe=new Dn().setFromQuaternion(E.quaternion,"YXZ");Ce=Xe.y,Ae=N(Xe.x-(Ue?0:ee*.0035),pe?-.8:-1.45,pe?.8:1.45)}ne()});function B(L){if(se?.id===L.pointerId){try{Z.releasePointerCapture(L.pointerId)}catch{}se=null,s.classList.remove("is-dragging")}}Z.addEventListener("pointerup",B),Z.addEventListener("pointercancel",B),Z.addEventListener("lostpointercapture",()=>{se=null,s.classList.remove("is-dragging")}),Z.addEventListener("dblclick",L=>{if(te==="axonometric"||L.button!==0)return;let ue=le(L);if(!ue||ue.object.name!=="floor")return;Fe();let ee=ue.point.clone();ee.y=Ue?f.y:o,Re(ee),Ve={from:f.clone(),to:ee,start:performance.now()},ne()}),Z.addEventListener("wheel",L=>{if(te==="axonometric"||!Be)return;L.preventDefault(),Ve=null;let ue=L.deltaMode===1?16:L.deltaMode===2?e.clientHeight:1,ee=N(L.deltaY*ue*.006,-1.2,1.2),re=Ue?Ae:0;d.set(-Math.sin(Ce)*Math.cos(re),Math.sin(re),-Math.cos(Ce)*Math.cos(re)),f.addScaledVector(d,-ee),Re(f),ne()},{passive:!1}),document.addEventListener("keydown",L=>{if(!(L.code==="Escape"&&document.querySelector("#exhibition-materials[open],#saved-model-edit[open]"))){if(L.code==="Escape"&&document.fullscreenElement===s){ge(),Ve=null,b();return}if(L.code==="Escape"&&ae&&!document.querySelector("dialog[open]")&&s.dataset.workspaceOpen!=="collage"&&s.dataset.workspaceOpen!=="sculpture"&&s.dataset.workspaceOpen!=="model"&&s.dataset.modelBrowse!=="true"){L.preventDefault(),b();return}if(!(!Be||document.activeElement!==s||te==="axonometric")){if(L.code==="Escape"){ge(),Ve=null;return}if(L.code==="Space"){L.preventDefault(),L.repeat||(Ue=!Ue,Re(f),X(),ne());return}st.has(L.code)&&(L.preventDefault(),(L.code==="KeyQ"||L.code==="KeyE")&&(Ue=!0),c.add(L.code),ne())}}}),document.addEventListener("keyup",L=>{c.delete(L.code)&&ne()}),s.addEventListener("focus",()=>{Be=!0,s.dataset.inputActive="true",S&&(S.enabled=te==="axonometric")}),s.addEventListener("blur",()=>{Be=!1,S.enabled=!1,ge(),Ve=null}),document.addEventListener("pointerdown",L=>{s.contains(L.target)||(s.dataset.inputActive="false",Be=!1,S.enabled=!1,ge(),Ve=null,s.blur())},!0),window.addEventListener("blur",()=>{Be=!1,S.enabled=!1,ge(),Ve=null}),document.addEventListener("visibilitychange",()=>{document.hidden?(ge(),Ve=null,De&&cancelAnimationFrame(De),De=0):ne()}),t("walk-two-point").addEventListener("click",()=>{Te(!pe),Fe()}),t("walk-view-toggle").addEventListener("click",()=>{if(te==="axonometric"&&_.state().active){_.enter();return}be(te==="room"?"axonometric":"room"),Fe()}),t("walk-reset").addEventListener("click",()=>{V(),Fe()}),document.addEventListener("fullscreenchange",()=>{let L=document.fullscreenElement===s;if(!document.fullscreenElement&&ae){b();return}ge(),W(),s.dataset.modelBrowse==="true"||document.fullscreenElement&&document.fullscreenElement!==s||s.dataset.workspaceOpen&&s.dataset.workspaceOpen!=="none"?Oe():ae?Fe():Oe()}),Z.addEventListener("webglcontextlost",L=>{L.preventDefault(),j=!1,ge(),fe("The graphics connection was interrupted. Reload this page to reopen the room.")});let ye=new ResizeObserver(W);ye.observe(e),ye.observe(t("walk-toolbar")),window.addEventListener("resize",W),window.addEventListener("pagehide",L=>{if(ge(),De&&cancelAnimationFrame(De),De=0,!L.persisted){oe=!0,ye.disconnect(),S.dispose();let ue=new Set,ee=new Set;p.traverse(re=>{if(re.geometry&&ue.add(re.geometry),re.sectionGeometry&&ue.add(re.sectionGeometry),re.material)for(let Ee of Array.isArray(re.material)?re.material:[re.material])ee.add(Ee)}),ue.forEach(re=>re.dispose()),ee.forEach(re=>re.dispose()),G?.dispose(),z?.dispose(),F?.dispose(),k?.dispose(),_?.dispose(),v?.dispose(),A?.dispose(),U?.dispose(),p.environment?.dispose(),g.dispose()}}),window.addEventListener("pageshow",()=>{W()}),window.ExhibitionWalk=Object.freeze({state:()=>({spacePreview:z.state(),lighting:F.state(),section:k.state(),space:_.state(),skylight:v.state(),ready:j,environment:"white-light-fog",atmosphere:{fog:!!p.fog,background:"#ffffff",fogDensity:p.fog?.density||0,sunShadows:te==="room",volumetric:v.state().volumetric.visible},room:{...n,closed:!1,wallCount:0,floor:!0,ceiling:!1},camera:te==="room"?{x:f.x,y:f.y,z:f.z,yaw:Ce,pitch:Ae}:{x:y.position.x,y:y.position.y,z:y.position.z},viewMode:te,twoPoint:pe,projection:E.isOrthographicCamera?"orthographic":"perspective",walkingCamera:{x:f.x,y:f.y,z:f.z,yaw:Ce,pitch:Ae},fly:Ue,active:Be,immersive:ae,fullscreen:document.fullscreenElement===s,axonometric:{pivot:G.state(),zoom:y.zoom,target:S.target.toArray(),wallsVisible:ie.filter(L=>L.name.includes("wall")&&L.visible).length,ceilingVisible:ie.find(L=>L.name==="ceiling").visible},factory:A.state(),grid:{visible:R.visible,size:400,divisions:20,cellSize:20,cells:400,lines:D.geometry.attributes.position.count/2,opacity:D.material.opacity},floorJunctions:{visible:C.visible,seam:!0,softContactShading:!0},walkingBounds:{x:[-n.width/2+a,n.width/2-a],z:[-n.depth/2+a,n.depth/2-a],y:[a,n.height-a]},displayCount:ce.state().modelCount,modelsLoaded:ce.state().modelCount,textureCount:ce.state().textureCount,placements:ce.state(),rendering:U.state(),performance:{triangles:g.info.render.triangles,drawCalls:g.info.render.calls,pixelRatio:g.getPixelRatio(),shadows:g.shadowMap.enabled,shadowAutoUpdate:g.shadowMap.autoUpdate,continuousRendering:!!De,frameCount:Ze},moving:!!Ve||Y()}),previewSpaceCard:L=>z.preview(L),lighting:F,section:k,reset:V,setViewMode:be,setTwoPoint:Te,setRoomHeight:Se,suspendNavigation:Oe,enterImmersive:I,leaveImmersive:b,placement:ce,space:_,gridSegments:()=>Array.from(D.geometry.attributes.position.array),setCamera:L=>{ge(),Ve=null,typeof L.fly=="boolean"&&(Ue=L.fly),f.set(L.x??f.x,L.y??f.y,L.z??f.z),Re(f),Ce=L.yaw??Ce,Ae=N(L.pitch??Ae,pe?-.8:-1.45,pe?.8:1.45),X(),ne()},projectWorld:L=>{q();let ue=Z.getBoundingClientRect();return L.map(ee=>{let re=new w().fromArray(ee).project(E);return{x:ue.left+(re.x+1)*ue.width/2,y:ue.top+(1-re.y)*ue.height/2,depth:re.z}})}})})();})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
