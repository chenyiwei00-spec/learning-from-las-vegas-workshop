(()=>{var hn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},gi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Uh=0,hc=1,Fh=2;var uc=1,Oh=2,Un=3,yn=0,Ht=1,bt=2,$n=0,Ri=1,dc=2,fc=3,pc=4,Bh=5,li=100,zh=101,kh=102,Hh=103,Vh=104,Gh=200,Wh=201,Xh=202,Yh=203,eo=204,to=205,qh=206,Kh=207,Zh=208,jh=209,Jh=210,$h=211,Qh=212,eu=213,tu=214,yo=0,vo=1,Mo=2,Ci=3,bo=4,So=5,Eo=6,To=7,mc=0,nu=1,iu=2,Qn=0,su=1,ru=2,ou=3,wo=4,au=5,cu=6,lu=7,$a="attached",hu="detached",gc=300,ki=301,Hi=302,Ao=303,Ro=304,xr=306,an=1e3,on=1001,hi=1002,wt=1003,Es=1004;var ei=1005;var Dt=1006,xi=1007;var en=1008;var En=1009,xc=1010,_c=1011,Ts=1012,Co=1013,_i=1014,un=1015,ws=1016,Io=1017,Po=1018,As=1020,yc=35902,vc=35899,Mc=1021,bc=1022,Vt=1023,ds=1026,Rs=1027,Lo=1028,Do=1029,Sc=1030,No=1031;var Uo=1033,_r=33776,yr=33777,vr=33778,Mr=33779,Fo=35840,Oo=35841,Bo=35842,zo=35843,ko=36196,Ho=37492,Vo=37496,Go=37808,Wo=37809,Xo=37810,Yo=37811,qo=37812,Ko=37813,Zo=37814,jo=37815,Jo=37816,$o=37817,Qo=37818,ea=37819,ta=37820,na=37821,ia=36492,sa=36494,ra=36495,oa=36283,aa=36284,ca=36285,la=36286;var Yn=2300,qn=2301,Qr=2302,Qa=2400,ec=2401,tc=2402,uu=2500;var Ec=0,br=1,Cs=2,du=3200,fu=3201;var Tc=0,pu=1,Tn="",dt="srgb",Nt="srgb-linear",Zs="linear",ot="srgb";var Ai=7680;var nc=519,mu=512,gu=513,xu=514,wc=515,_u=516,yu=517,vu=518,Mu=519,no=35044,Is=35048;var Ac="300 es",xn=2e3,js=2001;var Rn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}},Ut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Jl=1234567,qs=Math.PI/180,Ii=180/Math.PI;function _n(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ut[s&255]+Ut[s>>8&255]+Ut[s>>16&255]+Ut[s>>24&255]+"-"+Ut[e&255]+Ut[e>>8&255]+"-"+Ut[e>>16&15|64]+Ut[e>>24&255]+"-"+Ut[t&63|128]+Ut[t>>8&255]+"-"+Ut[t>>16&255]+Ut[t>>24&255]+Ut[n&255]+Ut[n>>8&255]+Ut[n>>16&255]+Ut[n>>24&255]).toLowerCase()}function Ze(s,e,t){return Math.max(e,Math.min(t,s))}function Rc(s,e){return(s%e+e)%e}function Ld(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Dd(s,e,t){return s!==e?(t-s)/(e-s):0}function Ks(s,e,t){return(1-t)*s+t*e}function Nd(s,e,t,n){return Ks(s,e,1-Math.exp(-t*n))}function Ud(s,e=1){return e-Math.abs(Rc(s,e*2)-e)}function Fd(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Od(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Bd(s,e){return s+Math.floor(Math.random()*(e-s+1))}function zd(s,e){return s+Math.random()*(e-s)}function kd(s){return s*(.5-Math.random())}function Hd(s){s!==void 0&&(Jl=s);let e=Jl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Vd(s){return s*qs}function Gd(s){return s*Ii}function Wd(s){return(s&s-1)===0&&s!==0}function Xd(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Yd(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function qd(s,e,t,n,i){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":s.set(a*u,l*h,l*d,a*c);break;case"YZY":s.set(l*d,a*u,l*h,a*c);break;case"ZXZ":s.set(l*h,l*d,a*u,a*c);break;case"XZX":s.set(a*u,l*g,l*f,a*c);break;case"YXY":s.set(l*f,a*u,l*g,a*c);break;case"ZYZ":s.set(l*g,l*f,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function gn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function rt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var ti={DEG2RAD:qs,RAD2DEG:Ii,generateUUID:_n,clamp:Ze,euclideanModulo:Rc,mapLinear:Ld,inverseLerp:Dd,lerp:Ks,damp:Nd,pingpong:Ud,smoothstep:Fd,smootherstep:Od,randInt:Bd,randFloat:zd,randFloatSpread:kd,seededRandom:Hd,degToRad:Vd,radToDeg:Gd,isPowerOfTwo:Wd,ceilPowerOfTwo:Xd,floorPowerOfTwo:Yd,setQuaternionFromProperEuler:qd,normalize:rt,denormalize:gn},Be=class s{constructor(e=0,t=0){s.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},At=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3],d=r[o+0],f=r[o+1],g=r[o+2],x=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=x;return}if(h!==x||l!==d||c!==f||u!==g){let m=1-a,p=l*d+c*f+u*g+h*x,b=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){let T=Math.sqrt(v),w=Math.atan2(T,p*b);m=Math.sin(m*w)/T,a=Math.sin(a*w)/T}let _=a*b;if(l=l*m+d*_,c=c*m+f*_,u=u*m+g*_,h=h*m+x*_,m===1-a){let T=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=T,c*=T,u*=T,h*=T}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,o){let a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+u*h+l*f-c*d,e[t+1]=l*g+u*d+c*h-a*f,e[t+2]=c*g+u*f+a*d-l*h,e[t+3]=u*g-a*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(r/2),d=l(n/2),f=l(i/2),g=l(r/2);switch(o){case"XYZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"YZX":this._x=d*u*h+c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h-d*f*g;break;case"XZY":this._x=d*u*h-c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(o-i)*f}else if(n>a&&n>h){let f=2*Math.sqrt(1+n-a-h);this._w=(u-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+c)/f}else if(a>h){let f=2*Math.sqrt(1+a-n-h);this._w=(r-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+h-n-a);this._w=(o-i)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ze(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-r*l,this._y=i*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},O=class s{constructor(e=0,t=0,n=0){s.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion($l.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion($l.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),u=2*(a*t-r*i),h=2*(r*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-r*h,this.z=i+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ta.copy(this).projectOnVector(e),this.sub(Ta)}reflect(e){return this.sub(Ta.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ta=new O,$l=new At,qe=class s{constructor(e,t,n,i,r,o,a,l,c){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c)}set(e,t,n,i,r,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],g=n[8],x=i[0],m=i[3],p=i[6],b=i[1],v=i[4],_=i[7],T=i[2],w=i[5],E=i[8];return r[0]=o*x+a*b+l*T,r[3]=o*m+a*v+l*w,r[6]=o*p+a*_+l*E,r[1]=c*x+u*b+h*T,r[4]=c*m+u*v+h*w,r[7]=c*p+u*_+h*E,r[2]=d*x+f*b+g*T,r[5]=d*m+f*v+g*w,r[8]=d*p+f*_+g*E,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+i*r*c-i*o*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*r,f=c*r-o*l,g=t*h+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=h*x,e[1]=(i*c-u*n)*x,e[2]=(a*n-i*o)*x,e[3]=d*x,e[4]=(u*t-i*l)*x,e[5]=(i*r-a*t)*x,e[6]=f*x,e[7]=(n*l-c*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(wa.makeScale(e,t)),this}rotate(e){return this.premultiply(wa.makeRotation(-e)),this}translate(e,t){return this.premultiply(wa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},wa=new qe;function Cc(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function fs(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function bu(){let s=fs("canvas");return s.style.display="block",s}var Ql={};function ps(s){s in Ql||(Ql[s]=!0,console.warn(s))}function Su(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var eh=new qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),th=new qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Kd(){let s={enabled:!0,workingColorSpace:Nt,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ot&&(i.r=Xn(i.r),i.g=Xn(i.g),i.b=Xn(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ot&&(i.r=us(i.r),i.g=us(i.g),i.b=us(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Tn?Zs:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return ps("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return ps("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Nt]:{primaries:e,whitePoint:n,transfer:Zs,toXYZ:eh,fromXYZ:th,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:dt},outputColorSpaceConfig:{drawingBufferColorSpace:dt}},[dt]:{primaries:e,whitePoint:n,transfer:ot,toXYZ:eh,fromXYZ:th,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:dt}}}),s}var Qe=Kd();function Xn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function us(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Ji,ms=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ji===void 0&&(Ji=fs("canvas")),Ji.width=e.width,Ji.height=e.height;let i=Ji.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Ji}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=fs("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Xn(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Xn(t[n]/255)*255):t[n]=Xn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Zd=0,ui=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Zd++}),this.uuid=_n(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Aa(i[o].image)):r.push(Aa(i[o]))}else r=Aa(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function Aa(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?ms.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var jd=0,Ra=new O,Rt=class s extends Rn{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=on,i=on,r=Dt,o=en,a=Vt,l=En,c=s.DEFAULT_ANISOTROPY,u=Tn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jd++}),this.uuid=_n(),this.name="",this.source=new ui(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Be(0,0),this.repeat=new Be(1,1),this.center=new Be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ra).x}get height(){return this.source.getSize(Ra).y}get depth(){return this.source.getSize(Ra).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==gc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case an:e.x=e.x-Math.floor(e.x);break;case on:e.x=e.x<0?0:1;break;case hi:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case an:e.y=e.y-Math.floor(e.y);break;case on:e.y=e.y<0?0:1;break;case hi:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Rt.DEFAULT_IMAGE=null;Rt.DEFAULT_MAPPING=gc;Rt.DEFAULT_ANISOTROPY=1;var it=class s{constructor(e=0,t=0,n=0,i=1){s.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(c+1)/2,_=(f+1)/2,T=(p+1)/2,w=(u+d)/4,E=(h+x)/4,R=(g+m)/4;return v>_&&v>T?v<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(v),i=w/n,r=E/n):_>T?_<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(_),n=w/i,r=R/i):T<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(T),n=E/r,i=R/r),this.set(n,i,r,t),this}let b=Math.sqrt((m-g)*(m-g)+(h-x)*(h-x)+(d-u)*(d-u));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(h-x)/b,this.z=(d-u)/b,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this.w=Ze(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this.w=Ze(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},io=class extends Rn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Dt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new it(0,0,e,t),this.scissorTest=!1,this.viewport=new it(0,0,e,t);let i={width:e,height:t,depth:n.depth},r=new Rt(i);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:Dt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new ui(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},cn=class extends io{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Js=class extends Rt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=wt,this.minFilter=wt,this.wrapR=on,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var so=class extends Rt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=wt,this.minFilter=wt,this.wrapR=on,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var pt=class{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(fn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(fn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=fn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,fn):fn.fromBufferAttribute(r,o),fn.applyMatrix4(e.matrixWorld),this.expandByPoint(fn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Rr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Rr.copy(n.boundingBox)),Rr.applyMatrix4(e.matrixWorld),this.union(Rr)}let i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,fn),fn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(zs),Cr.subVectors(this.max,zs),$i.subVectors(e.a,zs),Qi.subVectors(e.b,zs),es.subVectors(e.c,zs),ni.subVectors(Qi,$i),ii.subVectors(es,Qi),Si.subVectors($i,es);let t=[0,-ni.z,ni.y,0,-ii.z,ii.y,0,-Si.z,Si.y,ni.z,0,-ni.x,ii.z,0,-ii.x,Si.z,0,-Si.x,-ni.y,ni.x,0,-ii.y,ii.x,0,-Si.y,Si.x,0];return!Ca(t,$i,Qi,es,Cr)||(t=[1,0,0,0,1,0,0,0,1],!Ca(t,$i,Qi,es,Cr))?!1:(Ir.crossVectors(ni,ii),t=[Ir.x,Ir.y,Ir.z],Ca(t,$i,Qi,es,Cr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,fn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(fn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(zn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},zn=[new O,new O,new O,new O,new O,new O,new O,new O],fn=new O,Rr=new pt,$i=new O,Qi=new O,es=new O,ni=new O,ii=new O,Si=new O,zs=new O,Cr=new O,Ir=new O,Ei=new O;function Ca(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Ei.fromArray(s,r);let a=i.x*Math.abs(Ei.x)+i.y*Math.abs(Ei.y)+i.z*Math.abs(Ei.z),l=e.dot(Ei),c=t.dot(Ei),u=n.dot(Ei);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var Jd=new pt,ks=new O,Ia=new O,Ot=class{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Jd.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ks.subVectors(e,this.center);let t=ks.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ks,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ia.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ks.copy(e.center).add(Ia)),this.expandByPoint(ks.copy(e.center).sub(Ia))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},kn=new O,Pa=new O,Pr=new O,si=new O,La=new O,Lr=new O,Da=new O,Cn=class{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,kn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=kn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(kn.copy(this.origin).addScaledVector(this.direction,t),kn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Pa.copy(e).add(t).multiplyScalar(.5),Pr.copy(t).sub(e).normalize(),si.copy(this.origin).sub(Pa);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Pr),a=si.dot(this.direction),l=-si.dot(Pr),c=si.lengthSq(),u=Math.abs(1-o*o),h,d,f,g;if(u>0)if(h=o*l-a,d=o*a-l,g=r*u,h>=0)if(d>=-g)if(d<=g){let x=1/u;h*=x,d*=x,f=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Pa).addScaledVector(Pr,d),f}intersectSphere(e,t){kn.subVectors(e.center,this.origin);let n=kn.dot(this.direction),i=kn.dot(kn)-n*n,r=e.radius*e.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,kn)!==null}intersectTriangle(e,t,n,i,r){La.subVectors(t,e),Lr.subVectors(n,e),Da.crossVectors(La,Lr);let o=this.direction.dot(Da),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;si.subVectors(this.origin,e);let l=a*this.direction.dot(Lr.crossVectors(si,Lr));if(l<0)return null;let c=a*this.direction.dot(La.cross(si));if(c<0||l+c>o)return null;let u=-a*si.dot(Da);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Xe=class s{constructor(e,t,n,i,r,o,a,l,c,u,h,d,f,g,x,m){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c,u,h,d,f,g,x,m)}set(e,t,n,i,r,o,a,l,c,u,h,d,f,g,x,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/ts.setFromMatrixColumn(e,0).length(),r=1/ts.setFromMatrixColumn(e,1).length(),o=1/ts.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let d=o*u,f=o*h,g=a*u,x=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+g*c,t[5]=d-x*c,t[9]=-a*l,t[2]=x-d*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*u,f=l*h,g=c*u,x=c*h;t[0]=d+x*a,t[4]=g*a-f,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-g,t[6]=x+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*u,f=l*h,g=c*u,x=c*h;t[0]=d-x*a,t[4]=-o*h,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*u,t[9]=x-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*u,f=o*h,g=a*u,x=a*h;t[0]=l*u,t[4]=g*c-f,t[8]=d*c+x,t[1]=l*h,t[5]=x*c+d,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,f=o*c,g=a*l,x=a*c;t[0]=l*u,t[4]=x-d*h,t[8]=g*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*h+g,t[10]=d-x*h}else if(e.order==="XZY"){let d=o*l,f=o*c,g=a*l,x=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+x,t[5]=o*u,t[9]=f*h-g,t[2]=g*h-f,t[6]=a*u,t[10]=x*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose($d,e,Qd)}lookAt(e,t,n){let i=this.elements;return Jt.subVectors(e,t),Jt.lengthSq()===0&&(Jt.z=1),Jt.normalize(),ri.crossVectors(n,Jt),ri.lengthSq()===0&&(Math.abs(n.z)===1?Jt.x+=1e-4:Jt.z+=1e-4,Jt.normalize(),ri.crossVectors(n,Jt)),ri.normalize(),Dr.crossVectors(Jt,ri),i[0]=ri.x,i[4]=Dr.x,i[8]=Jt.x,i[1]=ri.y,i[5]=Dr.y,i[9]=Jt.y,i[2]=ri.z,i[6]=Dr.z,i[10]=Jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],g=n[2],x=n[6],m=n[10],p=n[14],b=n[3],v=n[7],_=n[11],T=n[15],w=i[0],E=i[4],R=i[8],y=i[12],M=i[1],P=i[5],L=i[9],N=i[13],k=i[2],G=i[6],V=i[10],j=i[14],H=i[3],ie=i[7],de=i[11],pe=i[15];return r[0]=o*w+a*M+l*k+c*H,r[4]=o*E+a*P+l*G+c*ie,r[8]=o*R+a*L+l*V+c*de,r[12]=o*y+a*N+l*j+c*pe,r[1]=u*w+h*M+d*k+f*H,r[5]=u*E+h*P+d*G+f*ie,r[9]=u*R+h*L+d*V+f*de,r[13]=u*y+h*N+d*j+f*pe,r[2]=g*w+x*M+m*k+p*H,r[6]=g*E+x*P+m*G+p*ie,r[10]=g*R+x*L+m*V+p*de,r[14]=g*y+x*N+m*j+p*pe,r[3]=b*w+v*M+_*k+T*H,r[7]=b*E+v*P+_*G+T*ie,r[11]=b*R+v*L+_*V+T*de,r[15]=b*y+v*N+_*j+T*pe,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],g=e[3],x=e[7],m=e[11],p=e[15];return g*(+r*l*h-i*c*h-r*a*d+n*c*d+i*a*f-n*l*f)+x*(+t*l*f-t*c*d+r*o*d-i*o*f+i*c*u-r*l*u)+m*(+t*c*h-t*a*f-r*o*h+n*o*f+r*a*u-n*c*u)+p*(-i*a*u-t*l*h+t*a*d+i*o*h-n*o*d+n*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],g=e[12],x=e[13],m=e[14],p=e[15],b=h*m*c-x*d*c+x*l*f-a*m*f-h*l*p+a*d*p,v=g*d*c-u*m*c-g*l*f+o*m*f+u*l*p-o*d*p,_=u*x*c-g*h*c+g*a*f-o*x*f-u*a*p+o*h*p,T=g*h*l-u*x*l-g*a*d+o*x*d+u*a*m-o*h*m,w=t*b+n*v+i*_+r*T;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let E=1/w;return e[0]=b*E,e[1]=(x*d*r-h*m*r-x*i*f+n*m*f+h*i*p-n*d*p)*E,e[2]=(a*m*r-x*l*r+x*i*c-n*m*c-a*i*p+n*l*p)*E,e[3]=(h*l*r-a*d*r-h*i*c+n*d*c+a*i*f-n*l*f)*E,e[4]=v*E,e[5]=(u*m*r-g*d*r+g*i*f-t*m*f-u*i*p+t*d*p)*E,e[6]=(g*l*r-o*m*r-g*i*c+t*m*c+o*i*p-t*l*p)*E,e[7]=(o*d*r-u*l*r+u*i*c-t*d*c-o*i*f+t*l*f)*E,e[8]=_*E,e[9]=(g*h*r-u*x*r-g*n*f+t*x*f+u*n*p-t*h*p)*E,e[10]=(o*x*r-g*a*r+g*n*c-t*x*c-o*n*p+t*a*p)*E,e[11]=(u*a*r-o*h*r-u*n*c+t*h*c+o*n*f-t*a*f)*E,e[12]=T*E,e[13]=(u*x*i-g*h*i+g*n*d-t*x*d-u*n*m+t*h*m)*E,e[14]=(g*a*i-o*x*i-g*n*l+t*x*l+o*n*m-t*a*m)*E,e[15]=(o*h*i-u*a*i+u*n*l-t*h*l-o*n*d+t*a*d)*E,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,d=r*c,f=r*u,g=r*h,x=o*u,m=o*h,p=a*h,b=l*c,v=l*u,_=l*h,T=n.x,w=n.y,E=n.z;return i[0]=(1-(x+p))*T,i[1]=(f+_)*T,i[2]=(g-v)*T,i[3]=0,i[4]=(f-_)*w,i[5]=(1-(d+p))*w,i[6]=(m+b)*w,i[7]=0,i[8]=(g+v)*E,i[9]=(m-b)*E,i[10]=(1-(d+x))*E,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,r=ts.set(i[0],i[1],i[2]).length(),o=ts.set(i[4],i[5],i[6]).length(),a=ts.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],pn.copy(this);let c=1/r,u=1/o,h=1/a;return pn.elements[0]*=c,pn.elements[1]*=c,pn.elements[2]*=c,pn.elements[4]*=u,pn.elements[5]*=u,pn.elements[6]*=u,pn.elements[8]*=h,pn.elements[9]*=h,pn.elements[10]*=h,t.setFromRotationMatrix(pn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=xn,l=!1){let c=this.elements,u=2*r/(t-e),h=2*r/(n-i),d=(t+e)/(t-e),f=(n+i)/(n-i),g,x;if(l)g=r/(o-r),x=o*r/(o-r);else if(a===xn)g=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===js)g=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=xn,l=!1){let c=this.elements,u=2/(t-e),h=2/(n-i),d=-(t+e)/(t-e),f=-(n+i)/(n-i),g,x;if(l)g=1/(o-r),x=o/(o-r);else if(a===xn)g=-2/(o-r),x=-(o+r)/(o-r);else if(a===js)g=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},ts=new O,pn=new Xe,$d=new O(0,0,0),Qd=new O(1,1,1),ri=new O,Dr=new O,Jt=new O,nh=new Xe,ih=new At,Qt=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ze(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ze(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ze(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return nh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(nh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ih.setFromEuler(this),this.setFromQuaternion(ih,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Qt.DEFAULT_ORDER="XYZ";var gs=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},ef=0,sh=new O,ns=new At,Hn=new Xe,Nr=new O,Hs=new O,tf=new O,nf=new At,rh=new O(1,0,0),oh=new O(0,1,0),ah=new O(0,0,1),ch={type:"added"},sf={type:"removed"},is={type:"childadded",child:null},Na={type:"childremoved",child:null},mt=class s extends Rn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ef++}),this.uuid=_n(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new O,t=new Qt,n=new At,i=new O(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Xe},normalMatrix:{value:new qe}}),this.matrix=new Xe,this.matrixWorld=new Xe,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ns.setFromAxisAngle(e,t),this.quaternion.multiply(ns),this}rotateOnWorldAxis(e,t){return ns.setFromAxisAngle(e,t),this.quaternion.premultiply(ns),this}rotateX(e){return this.rotateOnAxis(rh,e)}rotateY(e){return this.rotateOnAxis(oh,e)}rotateZ(e){return this.rotateOnAxis(ah,e)}translateOnAxis(e,t){return sh.copy(e).applyQuaternion(this.quaternion),this.position.add(sh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(rh,e)}translateY(e){return this.translateOnAxis(oh,e)}translateZ(e){return this.translateOnAxis(ah,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Hn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Nr.copy(e):Nr.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Hs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hn.lookAt(Hs,Nr,this.up):Hn.lookAt(Nr,Hs,this.up),this.quaternion.setFromRotationMatrix(Hn),i&&(Hn.extractRotation(i.matrixWorld),ns.setFromRotationMatrix(Hn),this.quaternion.premultiply(ns.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ch),is.child=e,this.dispatchEvent(is),is.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(sf),Na.child=e,this.dispatchEvent(Na),Na.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Hn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Hn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Hn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ch),is.child=e,this.dispatchEvent(is),is.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hs,e,tf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hs,nf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};mt.DEFAULT_UP=new O(0,1,0);mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var mn=new O,Vn=new O,Ua=new O,Gn=new O,ss=new O,rs=new O,lh=new O,Fa=new O,Oa=new O,Ba=new O,za=new it,ka=new it,Ha=new it,ci=class s{constructor(e=new O,t=new O,n=new O){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),mn.subVectors(e,t),i.cross(mn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){mn.subVectors(i,t),Vn.subVectors(n,t),Ua.subVectors(e,t);let o=mn.dot(mn),a=mn.dot(Vn),l=mn.dot(Ua),c=Vn.dot(Vn),u=Vn.dot(Ua),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;let d=1/h,f=(c*l-a*u)*d,g=(o*u-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Gn)===null?!1:Gn.x>=0&&Gn.y>=0&&Gn.x+Gn.y<=1}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,Gn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Gn.x),l.addScaledVector(o,Gn.y),l.addScaledVector(a,Gn.z),l)}static getInterpolatedAttribute(e,t,n,i,r,o){return za.setScalar(0),ka.setScalar(0),Ha.setScalar(0),za.fromBufferAttribute(e,t),ka.fromBufferAttribute(e,n),Ha.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(za,r.x),o.addScaledVector(ka,r.y),o.addScaledVector(Ha,r.z),o}static isFrontFacing(e,t,n,i){return mn.subVectors(n,t),Vn.subVectors(e,t),mn.cross(Vn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return mn.subVectors(this.c,this.b),Vn.subVectors(this.a,this.b),mn.cross(Vn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,o,a;ss.subVectors(i,n),rs.subVectors(r,n),Fa.subVectors(e,n);let l=ss.dot(Fa),c=rs.dot(Fa);if(l<=0&&c<=0)return t.copy(n);Oa.subVectors(e,i);let u=ss.dot(Oa),h=rs.dot(Oa);if(u>=0&&h<=u)return t.copy(i);let d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(ss,o);Ba.subVectors(e,r);let f=ss.dot(Ba),g=rs.dot(Ba);if(g>=0&&f<=g)return t.copy(r);let x=f*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(rs,a);let m=u*g-f*h;if(m<=0&&h-u>=0&&f-g>=0)return lh.subVectors(r,i),a=(h-u)/(h-u+(f-g)),t.copy(i).addScaledVector(lh,a);let p=1/(m+x+d);return o=x*p,a=d*p,t.copy(n).addScaledVector(ss,o).addScaledVector(rs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Eu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},oi={h:0,s:0,l:0},Ur={h:0,s:0,l:0};function Va(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var Ie=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=dt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Qe.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=Qe.workingColorSpace){if(e=Rc(e,1),t=Ze(t,0,1),n=Ze(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Va(o,r,e+1/3),this.g=Va(o,r,e),this.b=Va(o,r,e-1/3)}return Qe.colorSpaceToWorking(this,i),this}setStyle(e,t=dt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=dt){let n=Eu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xn(e.r),this.g=Xn(e.g),this.b=Xn(e.b),this}copyLinearToSRGB(e){return this.r=us(e.r),this.g=us(e.g),this.b=us(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=dt){return Qe.workingToColorSpace(Ft.copy(this),e),Math.round(Ze(Ft.r*255,0,255))*65536+Math.round(Ze(Ft.g*255,0,255))*256+Math.round(Ze(Ft.b*255,0,255))}getHexString(e=dt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.workingToColorSpace(Ft.copy(this),t);let n=Ft.r,i=Ft.g,r=Ft.b,o=Math.max(n,i,r),a=Math.min(n,i,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-r)/h+(i<r?6:0);break;case i:l=(r-n)/h+2;break;case r:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Qe.workingColorSpace){return Qe.workingToColorSpace(Ft.copy(this),t),e.r=Ft.r,e.g=Ft.g,e.b=Ft.b,e}getStyle(e=dt){Qe.workingToColorSpace(Ft.copy(this),e);let t=Ft.r,n=Ft.g,i=Ft.b;return e!==dt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(oi),this.setHSL(oi.h+e,oi.s+t,oi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(oi),e.getHSL(Ur);let n=Ks(oi.h,Ur.h,t),i=Ks(oi.s,Ur.s,t),r=Ks(oi.l,Ur.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ft=new Ie;Ie.NAMES=Eu;var rf=0,Xt=class extends Rn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rf++}),this.uuid=_n(),this.name="",this.type="Material",this.blending=Ri,this.side=yn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=eo,this.blendDst=to,this.blendEquation=li,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ie(0,0,0),this.blendAlpha=0,this.depthFunc=Ci,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=nc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ai,this.stencilZFail=Ai,this.stencilZPass=Ai,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ri&&(n.blending=this.blending),this.side!==yn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==eo&&(n.blendSrc=this.blendSrc),this.blendDst!==to&&(n.blendDst=this.blendDst),this.blendEquation!==li&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ci&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==nc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ai&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ai&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ai&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Mt=class extends Xt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qt,this.combine=mc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var St=new O,Fr=new Be,of=0,et=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:of++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=no,this.updateRanges=[],this.gpuType=un,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Fr.fromBufferAttribute(this,t),Fr.applyMatrix3(e),this.setXY(t,Fr.x,Fr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyMatrix3(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyMatrix4(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyNormalMatrix(e),this.setXYZ(t,St.x,St.y,St.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.transformDirection(e),this.setXYZ(t,St.x,St.y,St.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=gn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=rt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=gn(t,this.array)),t}setX(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=gn(t,this.array)),t}setY(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=gn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=gn(t,this.array)),t}setW(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),i=rt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),i=rt(i,this.array),r=rt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==no&&(e.usage=this.usage),e}};var $s=class extends et{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Qs=class extends et{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var vt=class extends et{constructor(e,t,n){super(new Float32Array(e),t,n)}},af=0,rn=new Xe,Ga=new mt,os=new O,$t=new pt,Vs=new pt,Lt=new O,yt=class s extends Rn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:af++}),this.uuid=_n(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Cc(e)?Qs:$s)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new qe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return rn.makeRotationFromQuaternion(e),this.applyMatrix4(rn),this}rotateX(e){return rn.makeRotationX(e),this.applyMatrix4(rn),this}rotateY(e){return rn.makeRotationY(e),this.applyMatrix4(rn),this}rotateZ(e){return rn.makeRotationZ(e),this.applyMatrix4(rn),this}translate(e,t,n){return rn.makeTranslation(e,t,n),this.applyMatrix4(rn),this}scale(e,t,n){return rn.makeScale(e,t,n),this.applyMatrix4(rn),this}lookAt(e){return Ga.lookAt(e),Ga.updateMatrix(),this.applyMatrix4(Ga.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(os).negate(),this.translate(os.x,os.y,os.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,r=e.length;i<r;i++){let o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new vt(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];$t.setFromBufferAttribute(r),this.morphTargetsRelative?(Lt.addVectors(this.boundingBox.min,$t.min),this.boundingBox.expandByPoint(Lt),Lt.addVectors(this.boundingBox.max,$t.max),this.boundingBox.expandByPoint(Lt)):(this.boundingBox.expandByPoint($t.min),this.boundingBox.expandByPoint($t.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ot);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){let n=this.boundingSphere.center;if($t.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Vs.setFromBufferAttribute(a),this.morphTargetsRelative?(Lt.addVectors($t.min,Vs.min),$t.expandByPoint(Lt),Lt.addVectors($t.max,Vs.max),$t.expandByPoint(Lt)):($t.expandByPoint(Vs.min),$t.expandByPoint(Vs.max))}$t.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)Lt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Lt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Lt.fromBufferAttribute(a,c),l&&(os.fromBufferAttribute(e,c),Lt.add(os)),i=Math.max(i,n.distanceToSquared(Lt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new et(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<n.count;R++)a[R]=new O,l[R]=new O;let c=new O,u=new O,h=new O,d=new Be,f=new Be,g=new Be,x=new O,m=new O;function p(R,y,M){c.fromBufferAttribute(n,R),u.fromBufferAttribute(n,y),h.fromBufferAttribute(n,M),d.fromBufferAttribute(r,R),f.fromBufferAttribute(r,y),g.fromBufferAttribute(r,M),u.sub(c),h.sub(c),f.sub(d),g.sub(d);let P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(P),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(P),a[R].add(x),a[y].add(x),a[M].add(x),l[R].add(m),l[y].add(m),l[M].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let R=0,y=b.length;R<y;++R){let M=b[R],P=M.start,L=M.count;for(let N=P,k=P+L;N<k;N+=3)p(e.getX(N+0),e.getX(N+1),e.getX(N+2))}let v=new O,_=new O,T=new O,w=new O;function E(R){T.fromBufferAttribute(i,R),w.copy(T);let y=a[R];v.copy(y),v.sub(T.multiplyScalar(T.dot(y))).normalize(),_.crossVectors(w,y);let P=_.dot(l[R])<0?-1:1;o.setXYZW(R,v.x,v.y,v.z,P)}for(let R=0,y=b.length;R<y;++R){let M=b[R],P=M.start,L=M.count;for(let N=P,k=P+L;N<k;N+=3)E(e.getX(N+0)),E(e.getX(N+1)),E(e.getX(N+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new et(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let i=new O,r=new O,o=new O,a=new O,l=new O,c=new O,u=new O,h=new O;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Lt.fromBufferAttribute(e,t),Lt.normalize(),e.setXYZ(t,Lt.x,Lt.y,Lt.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u),f=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*u;for(let p=0;p<u;p++)d[g++]=c[f++]}return new et(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){let d=c[u],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){let f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let c in i){let u=i[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],h=r[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},hh=new Xe,Ti=new Cn,Or=new Ot,uh=new O,Br=new O,zr=new O,kr=new O,Wa=new O,Hr=new O,dh=new O,Vr=new O,ht=class extends mt{constructor(e=new yt,t=new Mt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let a=this.morphTargetInfluences;if(r&&a){Hr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],h=r[l];u!==0&&(Wa.fromBufferAttribute(h,e),o?Hr.addScaledVector(Wa,u):Hr.addScaledVector(Wa.sub(t),u))}t.add(Hr)}return t}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Or.copy(n.boundingSphere),Or.applyMatrix4(r),Ti.copy(e.ray).recast(e.near),!(Or.containsPoint(Ti.origin)===!1&&(Ti.intersectSphere(Or,uh)===null||Ti.origin.distanceToSquared(uh)>(e.far-e.near)**2))&&(hh.copy(r).invert(),Ti.copy(e.ray).applyMatrix4(hh),!(n.boundingBox!==null&&Ti.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ti)))}_computeIntersections(e,t,n){let i,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=o[m.materialIndex],b=Math.max(m.start,f.start),v=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let _=b,T=v;_<T;_+=3){let w=a.getX(_),E=a.getX(_+1),R=a.getX(_+2);i=Gr(this,p,e,n,c,u,h,w,E,R),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let g=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let b=a.getX(m),v=a.getX(m+1),_=a.getX(m+2);i=Gr(this,o,e,n,c,u,h,b,v,_),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=o[m.materialIndex],b=Math.max(m.start,f.start),v=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let _=b,T=v;_<T;_+=3){let w=_,E=_+1,R=_+2;i=Gr(this,p,e,n,c,u,h,w,E,R),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let g=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let b=m,v=m+1,_=m+2;i=Gr(this,o,e,n,c,u,h,b,v,_),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}};function cf(s,e,t,n,i,r,o,a){let l;if(e.side===Ht?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===yn,a),l===null)return null;Vr.copy(a),Vr.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(Vr);return c<t.near||c>t.far?null:{distance:c,point:Vr.clone(),object:s}}function Gr(s,e,t,n,i,r,o,a,l,c){s.getVertexPosition(a,Br),s.getVertexPosition(l,zr),s.getVertexPosition(c,kr);let u=cf(s,e,t,n,Br,zr,kr,dh);if(u){let h=new O;ci.getBarycoord(dh,Br,zr,kr,h),i&&(u.uv=ci.getInterpolatedAttribute(i,a,l,c,h,new Be)),r&&(u.uv1=ci.getInterpolatedAttribute(r,a,l,c,h,new Be)),o&&(u.normal=ci.getInterpolatedAttribute(o,a,l,c,h,new O),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new O,materialIndex:0};ci.getNormal(Br,zr,kr,d.normal),u.face=d,u.barycoord=h}return u}var di=class s extends yt{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],h=[],d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new vt(c,3)),this.setAttribute("normal",new vt(u,3)),this.setAttribute("uv",new vt(h,2));function g(x,m,p,b,v,_,T,w,E,R,y){let M=_/E,P=T/R,L=_/2,N=T/2,k=w/2,G=E+1,V=R+1,j=0,H=0,ie=new O;for(let de=0;de<V;de++){let pe=de*P-N;for(let ye=0;ye<G;ye++){let Ee=ye*M-L;ie[x]=Ee*b,ie[m]=pe*v,ie[p]=k,c.push(ie.x,ie.y,ie.z),ie[x]=0,ie[m]=0,ie[p]=w>0?1:-1,u.push(ie.x,ie.y,ie.z),h.push(ye/E),h.push(1-de/R),j+=1}}for(let de=0;de<R;de++)for(let pe=0;pe<E;pe++){let ye=d+pe+G*de,Ee=d+pe+G*(de+1),Fe=d+(pe+1)+G*(de+1),He=d+(pe+1)+G*de;l.push(ye,Ee,He),l.push(Ee,Fe,He),H+=6}a.addGroup(f,H,y),f+=H,d+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Vi(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Bt(s){let e={};for(let t=0;t<s.length;t++){let n=Vi(s[t]);for(let i in n)e[i]=n[i]}return e}function lf(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Ic(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}var Tu={clone:Vi,merge:Bt},hf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,uf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,vn=class extends Xt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hf,this.fragmentShader=uf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Vi(e.uniforms),this.uniformsGroups=lf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},er=class extends mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xe,this.projectionMatrix=new Xe,this.projectionMatrixInverse=new Xe,this.coordinateSystem=xn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ai=new O,fh=new Be,ph=new Be,Et=class extends er{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ii*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(qs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ii*2*Math.atan(Math.tan(qs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ai.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ai.x,ai.y).multiplyScalar(-e/ai.z),ai.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ai.x,ai.y).multiplyScalar(-e/ai.z)}getViewSize(e,t){return this.getViewBounds(e,fh,ph),t.subVectors(ph,fh)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(qs*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},as=-90,cs=1,ro=class extends mt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Et(as,cs,e,t);i.layers=this.layers,this.add(i);let r=new Et(as,cs,e,t);r.layers=this.layers,this.add(r);let o=new Et(as,cs,e,t);o.layers=this.layers,this.add(o);let a=new Et(as,cs,e,t);a.layers=this.layers,this.add(a);let l=new Et(as,cs,e,t);l.layers=this.layers,this.add(l);let c=new Et(as,cs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===xn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===js)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},tr=class extends Rt{constructor(e=[],t=ki,n,i,r,o,a,l,c,u){super(e,t,n,i,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},oo=class extends cn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new tr(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new di(5,5,5),r=new vn({name:"CubemapFromEquirect",uniforms:Vi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ht,blending:$n});r.uniforms.tEquirect.value=t;let o=new ht(i,r),a=t.minFilter;return t.minFilter===en&&(t.minFilter=Dt),new ro(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}},Tt=class extends mt{constructor(){super(),this.isGroup=!0,this.type="Group"}},df={type:"move"},xs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Tt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Tt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Tt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(df)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Tt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var In=class extends mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qt,this.environmentIntensity=1,this.environmentRotation=new Qt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},_s=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=no,this.updateRanges=[],this.version=0,this.uuid=_n()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_n()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_n()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},kt=new O,ys=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix4(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyNormalMatrix(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.transformDirection(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=gn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=rt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=gn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=gn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=gn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=gn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),i=rt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),i=rt(i,this.array),r=rt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new et(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var mh=new O,gh=new it,xh=new it,ff=new O,_h=new Xe,Wr=new O,Xa=new Ot,yh=new Xe,Ya=new Cn,nr=class extends ht{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=$a,this.bindMatrix=new Xe,this.bindMatrixInverse=new Xe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new pt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Wr),this.boundingBox.expandByPoint(Wr)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ot),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Wr),this.boundingSphere.expandByPoint(Wr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Xa.copy(this.boundingSphere),Xa.applyMatrix4(i),e.ray.intersectsSphere(Xa)!==!1&&(yh.copy(i).invert(),Ya.copy(e.ray).applyMatrix4(yh),!(this.boundingBox!==null&&Ya.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Ya)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new it,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===$a?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===hu?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;gh.fromBufferAttribute(i.attributes.skinIndex,e),xh.fromBufferAttribute(i.attributes.skinWeight,e),mh.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=xh.getComponent(r);if(o!==0){let a=gh.getComponent(r);_h.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(ff.copy(mh).applyMatrix4(_h),o)}}return t.applyMatrix4(this.bindMatrixInverse)}},vs=class extends mt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Pi=class extends Rt{constructor(e=null,t=1,n=1,i,r,o,a,l,c=wt,u=wt,h,d){super(null,o,a,l,c,u,i,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},vh=new Xe,pf=new Xe,ir=class s{constructor(e=[],t=[]){this.uuid=_n(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Xe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Xe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:pf;vh.multiplyMatrices(a,t[r]),vh.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Pi(t,e,e,Vt,un);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let r=e.bones[n],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new vs),this.bones.push(o),this.boneInverses.push(new Xe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){let o=t[i];e.bones.push(o.uuid);let a=n[i];e.boneInverses.push(a.toArray())}return e}},fi=class extends et{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ls=new Xe,Mh=new Xe,Xr=[],bh=new pt,mf=new Xe,Gs=new ht,Ws=new Ot,Li=class extends ht{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new fi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,mf)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new pt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ls),bh.copy(e.boundingBox).applyMatrix4(ls),this.boundingBox.union(bh)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ot),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ls),Ws.copy(e.boundingSphere).applyMatrix4(ls),this.boundingSphere.union(Ws)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(Gs.geometry=this.geometry,Gs.material=this.material,Gs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ws.copy(this.boundingSphere),Ws.applyMatrix4(n),e.ray.intersectsSphere(Ws)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,ls),Mh.multiplyMatrices(n,ls),Gs.matrixWorld=Mh,Gs.raycast(e,Xr);for(let o=0,a=Xr.length;o<a;o++){let l=Xr[o];l.instanceId=r,l.object=this,t.push(l)}Xr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new fi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Pi(new Float32Array(i*this.count),i,this.count,Lo,un));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},qa=new O,gf=new O,xf=new qe,Wt=class{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=qa.subVectors(n,t).cross(gf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(qa),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||xf.getNormalMatrix(e),i=this.coplanarPoint(qa).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},wi=new Ot,_f=new Be(.5,.5),Yr=new O,Ms=class{constructor(e=new Wt,t=new Wt,n=new Wt,i=new Wt,r=new Wt,o=new Wt){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=xn,n=!1){let i=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],h=r[5],d=r[6],f=r[7],g=r[8],x=r[9],m=r[10],p=r[11],b=r[12],v=r[13],_=r[14],T=r[15];if(i[0].setComponents(c-o,f-u,p-g,T-b).normalize(),i[1].setComponents(c+o,f+u,p+g,T+b).normalize(),i[2].setComponents(c+a,f+h,p+x,T+v).normalize(),i[3].setComponents(c-a,f-h,p-x,T-v).normalize(),n)i[4].setComponents(l,d,m,_).normalize(),i[5].setComponents(c-l,f-d,p-m,T-_).normalize();else if(i[4].setComponents(c-l,f-d,p-m,T-_).normalize(),t===xn)i[5].setComponents(c+l,f+d,p+m,T+_).normalize();else if(t===js)i[5].setComponents(l,d,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),wi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),wi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(wi)}intersectsSprite(e){wi.center.set(0,0,0);let t=_f.distanceTo(e.center);return wi.radius=.7071067811865476+t,wi.applyMatrix4(e.matrixWorld),this.intersectsSphere(wi)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Yr.x=i.normal.x>0?e.max.x:e.min.x,Yr.y=i.normal.y>0?e.max.y:e.min.y,Yr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Yr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Mn=class extends Xt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ie(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},ao=new O,co=new O,Sh=new Xe,Xs=new Cn,qr=new Ot,Ka=new O,Eh=new O,Di=class extends mt{constructor(e=new yt,t=new Mn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)ao.fromBufferAttribute(t,i-1),co.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=ao.distanceTo(co);e.setAttribute("lineDistance",new vt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),qr.copy(n.boundingSphere),qr.applyMatrix4(i),qr.radius+=r,e.ray.intersectsSphere(qr)===!1)return;Sh.copy(i).invert(),Xs.copy(e.ray).applyMatrix4(Sh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){let f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let x=f,m=g-1;x<m;x+=c){let p=u.getX(x),b=u.getX(x+1),v=Kr(this,e,Xs,l,p,b,x);v&&t.push(v)}if(this.isLineLoop){let x=u.getX(g-1),m=u.getX(f),p=Kr(this,e,Xs,l,x,m,g-1);p&&t.push(p)}}else{let f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let x=f,m=g-1;x<m;x+=c){let p=Kr(this,e,Xs,l,x,x+1,x);p&&t.push(p)}if(this.isLineLoop){let x=Kr(this,e,Xs,l,g-1,f,g-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Kr(s,e,t,n,i,r,o){let a=s.geometry.attributes.position;if(ao.fromBufferAttribute(a,i),co.fromBufferAttribute(a,r),t.distanceSqToSegment(ao,co,Ka,Eh)>n)return;Ka.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(Ka);if(!(c<e.near||c>e.far))return{distance:c,point:Eh.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}var Th=new O,wh=new O,Ni=class extends Di{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Th.fromBufferAttribute(t,i),wh.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Th.distanceTo(wh);e.setAttribute("lineDistance",new vt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},pi=class extends Di{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},bs=class extends Xt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ie(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ah=new Xe,ic=new Cn,Zr=new Ot,jr=new O,sr=class extends mt{constructor(e=new yt,t=new bs){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Zr.copy(n.boundingSphere),Zr.applyMatrix4(i),Zr.radius+=r,e.ray.intersectsSphere(Zr)===!1)return;Ah.copy(i).invert(),ic.copy(e.ray).applyMatrix4(Ah);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){let d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=d,x=f;g<x;g++){let m=c.getX(g);jr.fromBufferAttribute(h,m),Rh(jr,m,l,i,e,t,this)}}else{let d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let g=d,x=f;g<x;g++)jr.fromBufferAttribute(h,g),Rh(jr,g,l,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Rh(s,e,t,n,i,r,o){let a=ic.distanceSqToPoint(s);if(a<t){let l=new O;ic.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Ui=class extends Rt{constructor(e,t,n,i,r,o,a,l,c,u,h,d){super(null,o,a,l,c,u,i,r,h,d),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}};var rr=class extends Rt{constructor(e,t,n=_i,i,r,o,a=wt,l=wt,c,u=ds,h=1){if(u!==ds&&u!==Rs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:h};super(d,i,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ui(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},or=class extends Rt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var bn=class s extends yt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=e/a,d=t/l,f=[],g=[],x=[],m=[];for(let p=0;p<u;p++){let b=p*d-o;for(let v=0;v<c;v++){let _=v*h-r;g.push(_,-b,0),x.push(0,0,1),m.push(v/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<a;b++){let v=b+c*p,_=b+c*(p+1),T=b+1+c*(p+1),w=b+1+c*p;f.push(v,_,w),f.push(_,T,w)}this.setIndex(f),this.setAttribute("position",new vt(g,3)),this.setAttribute("normal",new vt(x,3)),this.setAttribute("uv",new vt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}};var ln=class extends Xt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ie(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Tc,this.normalScale=new Be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Yt=class extends ln{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Be(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ze(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ie(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ie(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ie(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var lo=class extends Xt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=du,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ho=class extends Xt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Jr(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function yf(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function vf(s){function e(i,r){return s[i]-s[r]}let t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Ch(s,e,t){let n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let l=0;l!==e;++l)i[o++]=s[a+l]}return i}function wu(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}var Kn=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},uo=class extends Kn{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Qa,endingEnd:Qa}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,o=e+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case ec:r=e,a=2*t-n;break;case tc:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case ec:o=e,l=2*n-t;break;case tc:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),x=g*g,m=x*g,p=-d*m+2*d*x-d*g,b=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*g+1,v=(-1-f)*m+(1.5+f)*x+.5*g,_=f*m-f*x;for(let T=0;T!==a;++T)r[T]=p*o[u+T]+b*o[c+T]+v*o[l+T]+_*o[h+T];return r}},fo=class extends Kn{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(i-t),h=1-u;for(let d=0;d!==a;++d)r[d]=o[c+d]*h+o[l+d]*u;return r}},po=class extends Kn{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},qt=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Jr(t,this.TimeBufferType),this.values=Jr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Jr(e.times,Array),values:Jr(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new po(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new fo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new uo(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Yn:t=this.InterpolantFactoryMethodDiscrete;break;case qn:t=this.InterpolantFactoryMethodLinear;break;case Qr:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Yn;case this.InterpolantFactoryMethodLinear:return qn;case this.InterpolantFactoryMethodSmooth:return Qr}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&yf(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Qr,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(i)l=!0;else{let h=a*n,d=h-n,f=h+n;for(let g=0;g!==n;++g){let x=t[h+g];if(x!==t[d+g]||x!==t[f+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let h=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};qt.prototype.ValueTypeName="";qt.prototype.TimeBufferType=Float32Array;qt.prototype.ValueBufferType=Float32Array;qt.prototype.DefaultInterpolation=qn;var Zn=class extends qt{constructor(e,t,n){super(e,t,n)}};Zn.prototype.ValueTypeName="bool";Zn.prototype.ValueBufferType=Array;Zn.prototype.DefaultInterpolation=Yn;Zn.prototype.InterpolantFactoryMethodLinear=void 0;Zn.prototype.InterpolantFactoryMethodSmooth=void 0;var ar=class extends qt{constructor(e,t,n,i){super(e,t,n,i)}};ar.prototype.ValueTypeName="color";var Pn=class extends qt{constructor(e,t,n,i){super(e,t,n,i)}};Pn.prototype.ValueTypeName="number";var mo=class extends Kn{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t),c=e*a;for(let u=c+a;c!==u;c+=4)At.slerpFlat(r,0,o,c-a,o,c,l);return r}},Ln=class extends qt{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new mo(this.times,this.values,this.getValueSize(),e)}};Ln.prototype.ValueTypeName="quaternion";Ln.prototype.InterpolantFactoryMethodSmooth=void 0;var jn=class extends qt{constructor(e,t,n){super(e,t,n)}};jn.prototype.ValueTypeName="string";jn.prototype.ValueBufferType=Array;jn.prototype.DefaultInterpolation=Yn;jn.prototype.InterpolantFactoryMethodLinear=void 0;jn.prototype.InterpolantFactoryMethodSmooth=void 0;var Dn=class extends qt{constructor(e,t,n,i){super(e,t,n,i)}};Dn.prototype.ValueTypeName="vector";var cr=class{constructor(e="",t=-1,n=[],i=uu){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=_n(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(bf(n[o]).scale(i));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(qt.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let u=vf(l);l=Ch(l,1,u),c=Ch(c,1,u),!i&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Pn(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],u=c.name.match(r);if(u&&u.length>1){let h=u[1],d=i[h];d||(i[h]=d=[]),d.push(c)}}let o=[];for(let a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(h,d,f,g,x){if(f.length!==0){let m=[],p=[];wu(f,m,p,g),m.length!==0&&x.push(new h(d,m,p))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let h=0;h<c.length;h++){let d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let f={},g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let x=0;x<d[g].morphTargets.length;x++)f[d[g].morphTargets[x]]=-1;for(let x in f){let m=[],p=[];for(let b=0;b!==d[g].morphTargets.length;++b){let v=d[g];m.push(v.time),p.push(v.morphTarget===x?1:0)}i.push(new Pn(".morphTargetInfluence["+x+"]",m,p))}l=f.length*o}else{let f=".bones["+t[h].name+"]";n(Dn,f+".position",d,"pos",i),n(Ln,f+".quaternion",d,"rot",i),n(Dn,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,l,i,a)}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function Mf(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Pn;case"vector":case"vector2":case"vector3":case"vector4":return Dn;case"color":return ar;case"quaternion":return Ln;case"bool":case"boolean":return Zn;case"string":return jn}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function bf(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Mf(s.type);if(s.times===void 0){let t=[],n=[];wu(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}var An={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}},go=class{constructor(e,t,n){let i=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){let f=c[h],g=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},Au=new go,Nn=class{constructor(e){this.manager=e!==void 0?e:Au,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Nn.DEFAULT_MATERIAL_NAME="__DEFAULT";var Wn={},sc=class extends Error{constructor(e,t){super(e),this.response=t}},Ss=class extends Nn{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=An.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Wn[e]!==void 0){Wn[e].push({onLoad:t,onProgress:n,onError:i});return}Wn[e]=[],Wn[e].push({onLoad:t,onProgress:n,onError:i});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let u=Wn[e],h=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0,x=0,m=new ReadableStream({start(p){b();function b(){h.read().then(({done:v,value:_})=>{if(v)p.close();else{x+=_.byteLength;let T=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:f});for(let w=0,E=u.length;w<E;w++){let R=u[w];R.onProgress&&R.onProgress(T)}p.enqueue(_),b()}},v=>{p.error(v)})}}});return new Response(m)}else throw new sc(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a==="")return c.text();{let h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{An.add(`file:${e}`,c);let u=Wn[e];delete Wn[e];for(let h=0,d=u.length;h<d;h++){let f=u[h];f.onLoad&&f.onLoad(c)}}).catch(c=>{let u=Wn[e];if(u===void 0)throw this.manager.itemError(e),c;delete Wn[e];for(let h=0,d=u.length;h<d;h++){let f=u[h];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var hs=new WeakMap,xo=class extends Nn{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=An.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let h=hs.get(o);h===void 0&&(h=[],hs.set(o,h)),h.push({onLoad:t,onError:i})}return o}let a=fs("img");function l(){u(),t&&t(this);let h=hs.get(this)||[];for(let d=0;d<h.length;d++){let f=h[d];f.onLoad&&f.onLoad(this)}hs.delete(this),r.manager.itemEnd(e)}function c(h){u(),i&&i(h),An.remove(`image:${e}`);let d=hs.get(this)||[];for(let f=0;f<d.length;f++){let g=d[f];g.onError&&g.onError(h)}hs.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),An.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}};var lr=class extends Nn{constructor(e){super(e)}load(e,t,n,i){let r=new Rt,o=new xo(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},Fi=class extends mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ie(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Oi=class extends Fi{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ie(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Za=new Xe,Ih=new O,Ph=new O,hr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Be(512,512),this.mapType=En,this.map=null,this.mapPass=null,this.matrix=new Xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ms,this._frameExtents=new Be(1,1),this._viewportCount=1,this._viewports=[new it(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Ih.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ih),Ph.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ph),t.updateMatrixWorld(),Za.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Za,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Za)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},rc=class extends hr{constructor(){super(new Et(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Ii*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},ur=class extends Fi{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.target=new mt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new rc}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Lh=new Xe,Ys=new O,ja=new O,oc=class extends hr{constructor(){super(new Et(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Be(4,2),this._viewportCount=6,this._viewports=[new it(2,1,1,1),new it(0,1,1,1),new it(3,1,1,1),new it(1,1,1,1),new it(3,0,1,1),new it(1,0,1,1)],this._cubeDirections=[new O(1,0,0),new O(-1,0,0),new O(0,0,1),new O(0,0,-1),new O(0,1,0),new O(0,-1,0)],this._cubeUps=[new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,0,1),new O(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ys.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ys),ja.copy(n.position),ja.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ja),n.updateMatrixWorld(),i.makeTranslation(-Ys.x,-Ys.y,-Ys.z),Lh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Lh,n.coordinateSystem,n.reversedDepth)}},Bi=class extends Fi{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new oc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Sn=class extends er{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ac=class extends hr{constructor(){super(new Sn(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},dr=class extends Fi{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.target=new mt,this.shadow=new ac}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Jn=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Ja=new WeakMap,fr=class extends Nn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=An.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{if(Ja.has(o)===!0)i&&i(Ja.get(o)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(c),r.manager.itemEnd(e),c});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return An.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),Ja.set(l,c),An.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});An.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var _o=class extends Et{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Pc="\\[\\]\\.:\\/",Sf=new RegExp("["+Pc+"]","g"),Lc="[^"+Pc+"]",Ef="[^"+Pc.replace("\\.","")+"]",Tf=/((?:WC+[\/:])*)/.source.replace("WC",Lc),wf=/(WCOD+)?/.source.replace("WCOD",Ef),Af=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Lc),Rf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Lc),Cf=new RegExp("^"+Tf+wf+Af+Rf+"$"),If=["material","materials","bones","map"],cc=class{constructor(e,t,n){let i=n||nt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},nt=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Sf,"")}static parseTrackName(e){let t=Cf.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);If.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[i];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};nt.Composite=cc;nt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};nt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};nt.prototype.GetterByBindingType=[nt.prototype._getValue_direct,nt.prototype._getValue_array,nt.prototype._getValue_arrayElement,nt.prototype._getValue_toArray];nt.prototype.SetterByBindingTypeAndVersioning=[[nt.prototype._setValue_direct,nt.prototype._setValue_direct_setNeedsUpdate,nt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[nt.prototype._setValue_array,nt.prototype._setValue_array_setNeedsUpdate,nt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[nt.prototype._setValue_arrayElement,nt.prototype._setValue_arrayElement_setNeedsUpdate,nt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[nt.prototype._setValue_fromArray,nt.prototype._setValue_fromArray_setNeedsUpdate,nt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var zx=new Float32Array(1);var Dh=new Xe,zi=class{constructor(e,t,n=0,i=1/0){this.ray=new Cn(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new gs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Dh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Dh),this}intersectObject(e,t=!0,n=[]){return lc(e,this,n,t),n.sort(Nh),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)lc(e[i],this,n,t);return n.sort(Nh),n}};function Nh(s,e){return s.distance-e.distance}function lc(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){let r=s.children;for(let o=0,a=r.length;o<a;o++)lc(r[o],e,t,!0)}}var mi=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ze(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Ze(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var pr=class extends Ni{constructor(e=10,t=10,n=4473924,i=8947848){n=new Ie(n),i=new Ie(i);let r=t/2,o=e/t,a=e/2,l=[],c=[];for(let d=0,f=0,g=-a;d<=t;d++,g+=o){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);let x=d===r?n:i;x.toArray(c,f),f+=3,x.toArray(c,f),f+=3,x.toArray(c,f),f+=3,x.toArray(c,f),f+=3}let u=new yt;u.setAttribute("position",new vt(l,3)),u.setAttribute("color",new vt(c,3));let h=new Mn({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}};var $r=new pt,mr=class extends Ni{constructor(e,t=16776960){let n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(24),r=new yt;r.setIndex(new et(n,1)),r.setAttribute("position",new et(i,3)),super(r,new Mn({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(){if(this.object!==void 0&&$r.setFromObject(this.object),$r.isEmpty())return;let e=$r.min,t=$r.max,n=this.geometry.attributes.position,i=n.array;i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=e.x,i[4]=t.y,i[5]=t.z,i[6]=e.x,i[7]=e.y,i[8]=t.z,i[9]=t.x,i[10]=e.y,i[11]=t.z,i[12]=t.x,i[13]=t.y,i[14]=e.z,i[15]=e.x,i[16]=t.y,i[17]=e.z,i[18]=e.x,i[19]=e.y,i[20]=e.z,i[21]=t.x,i[22]=e.y,i[23]=e.z,n.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}};var gr=class extends Rn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function Dc(s,e,t,n){let i=Pf(n);switch(t){case Mc:return s*e;case Lo:return s*e/i.components*i.byteLength;case Do:return s*e/i.components*i.byteLength;case Sc:return s*e*2/i.components*i.byteLength;case No:return s*e*2/i.components*i.byteLength;case bc:return s*e*3/i.components*i.byteLength;case Vt:return s*e*4/i.components*i.byteLength;case Uo:return s*e*4/i.components*i.byteLength;case _r:case yr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case vr:case Mr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Oo:case zo:return Math.max(s,16)*Math.max(e,8)/4;case Fo:case Bo:return Math.max(s,8)*Math.max(e,8)/2;case ko:case Ho:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Vo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Go:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Wo:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Xo:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Yo:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case qo:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Ko:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Zo:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case jo:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Jo:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case $o:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Qo:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case ea:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case ta:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case na:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case ia:case sa:case ra:return Math.ceil(s/4)*Math.ceil(e/4)*16;case oa:case aa:return Math.ceil(s/4)*Math.ceil(e/4)*8;case ca:case la:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Pf(s){switch(s){case En:case xc:return{byteLength:1,components:1};case Ts:case _c:case ws:return{byteLength:2,components:1};case Io:case Po:return{byteLength:2,components:4};case _i:case Co:case un:return{byteLength:4,components:1};case yc:case vc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function Ju(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Lf(s){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,h=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){let u=l.array,h=l.updateRanges;if(s.bindBuffer(c,a),h.length===0)s.bufferSubData(c,0,u);else{h.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<h.length;f++){let g=h[d],x=h[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,h[d]=x)}h.length=d+1;for(let f=0,g=h.length;f<g;f++){let x=h[f];s.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(s.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var Df=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Nf=`#ifdef USE_ALPHAHASH
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
#endif`,Uf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ff=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Of=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Bf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zf=`#ifdef USE_AOMAP
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
#endif`,kf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Hf=`#ifdef USE_BATCHING
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
#endif`,Vf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Gf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Wf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Xf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Yf=`#ifdef USE_IRIDESCENCE
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
#endif`,qf=`#ifdef USE_BUMPMAP
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
#endif`,Kf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Zf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,jf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Jf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$f=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Qf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ep=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,tp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,np=`#define PI 3.141592653589793
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
} // validated`,ip=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,sp=`vec3 transformedNormal = objectNormal;
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
#endif`,rp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,op=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ap=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,lp="gl_FragColor = linearToOutputTexel( gl_FragColor );",hp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,up=`#ifdef USE_ENVMAP
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
#endif`,dp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,fp=`#ifdef USE_ENVMAP
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
#endif`,pp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mp=`#ifdef USE_ENVMAP
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
#endif`,gp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_p=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vp=`#ifdef USE_GRADIENTMAP
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
}`,Mp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Sp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ep=`uniform bool receiveShadow;
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
#endif`,Tp=`#ifdef USE_ENVMAP
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
#endif`,wp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ap=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Rp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Cp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ip=`PhysicalMaterial material;
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
#endif`,Pp=`struct PhysicalMaterial {
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
}`,Lp=`
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
#endif`,Dp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Np=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Up=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Fp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Op=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,zp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,kp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Hp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Vp=`#if defined( USE_POINTS_UV )
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
#endif`,Gp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Wp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Xp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Yp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,qp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kp=`#ifdef USE_MORPHTARGETS
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
#endif`,Zp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Jp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,$p=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,em=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,tm=`#ifdef USE_NORMALMAP
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
#endif`,nm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,im=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,rm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,om=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,am=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,cm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,um=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,dm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,pm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,mm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,xm=`float getShadowMask() {
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
}`,_m=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ym=`#ifdef USE_SKINNING
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
#endif`,vm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Mm=`#ifdef USE_SKINNING
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
#endif`,bm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Sm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Em=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Tm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,wm=`#ifdef USE_TRANSMISSION
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
#endif`,Am=`#ifdef USE_TRANSMISSION
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
#endif`,Rm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Im=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Lm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Dm=`uniform sampler2D t2D;
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
}`,Nm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Um=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Fm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Om=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bm=`#include <common>
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
}`,zm=`#if DEPTH_PACKING == 3200
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
}`,km=`#define DISTANCE
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
}`,Hm=`#define DISTANCE
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
}`,Vm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Gm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wm=`uniform float scale;
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
}`,Xm=`uniform vec3 diffuse;
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
}`,Ym=`#include <common>
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
}`,qm=`uniform vec3 diffuse;
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
}`,Km=`#define LAMBERT
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
}`,Zm=`#define LAMBERT
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
}`,jm=`#define MATCAP
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
}`,Jm=`#define MATCAP
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
}`,$m=`#define NORMAL
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
}`,Qm=`#define NORMAL
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
}`,eg=`#define PHONG
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
}`,tg=`#define PHONG
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
}`,ng=`#define STANDARD
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
}`,ig=`#define STANDARD
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
}`,sg=`#define TOON
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
}`,rg=`#define TOON
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
}`,og=`uniform float size;
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
}`,ag=`uniform vec3 diffuse;
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
}`,cg=`#include <common>
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
}`,lg=`uniform vec3 color;
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
}`,hg=`uniform float rotation;
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
}`,ug=`uniform vec3 diffuse;
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
}`,Ke={alphahash_fragment:Df,alphahash_pars_fragment:Nf,alphamap_fragment:Uf,alphamap_pars_fragment:Ff,alphatest_fragment:Of,alphatest_pars_fragment:Bf,aomap_fragment:zf,aomap_pars_fragment:kf,batching_pars_vertex:Hf,batching_vertex:Vf,begin_vertex:Gf,beginnormal_vertex:Wf,bsdfs:Xf,iridescence_fragment:Yf,bumpmap_pars_fragment:qf,clipping_planes_fragment:Kf,clipping_planes_pars_fragment:Zf,clipping_planes_pars_vertex:jf,clipping_planes_vertex:Jf,color_fragment:$f,color_pars_fragment:Qf,color_pars_vertex:ep,color_vertex:tp,common:np,cube_uv_reflection_fragment:ip,defaultnormal_vertex:sp,displacementmap_pars_vertex:rp,displacementmap_vertex:op,emissivemap_fragment:ap,emissivemap_pars_fragment:cp,colorspace_fragment:lp,colorspace_pars_fragment:hp,envmap_fragment:up,envmap_common_pars_fragment:dp,envmap_pars_fragment:fp,envmap_pars_vertex:pp,envmap_physical_pars_fragment:Tp,envmap_vertex:mp,fog_vertex:gp,fog_pars_vertex:xp,fog_fragment:_p,fog_pars_fragment:yp,gradientmap_pars_fragment:vp,lightmap_pars_fragment:Mp,lights_lambert_fragment:bp,lights_lambert_pars_fragment:Sp,lights_pars_begin:Ep,lights_toon_fragment:wp,lights_toon_pars_fragment:Ap,lights_phong_fragment:Rp,lights_phong_pars_fragment:Cp,lights_physical_fragment:Ip,lights_physical_pars_fragment:Pp,lights_fragment_begin:Lp,lights_fragment_maps:Dp,lights_fragment_end:Np,logdepthbuf_fragment:Up,logdepthbuf_pars_fragment:Fp,logdepthbuf_pars_vertex:Op,logdepthbuf_vertex:Bp,map_fragment:zp,map_pars_fragment:kp,map_particle_fragment:Hp,map_particle_pars_fragment:Vp,metalnessmap_fragment:Gp,metalnessmap_pars_fragment:Wp,morphinstance_vertex:Xp,morphcolor_vertex:Yp,morphnormal_vertex:qp,morphtarget_pars_vertex:Kp,morphtarget_vertex:Zp,normal_fragment_begin:jp,normal_fragment_maps:Jp,normal_pars_fragment:$p,normal_pars_vertex:Qp,normal_vertex:em,normalmap_pars_fragment:tm,clearcoat_normal_fragment_begin:nm,clearcoat_normal_fragment_maps:im,clearcoat_pars_fragment:sm,iridescence_pars_fragment:rm,opaque_fragment:om,packing:am,premultiplied_alpha_fragment:cm,project_vertex:lm,dithering_fragment:hm,dithering_pars_fragment:um,roughnessmap_fragment:dm,roughnessmap_pars_fragment:fm,shadowmap_pars_fragment:pm,shadowmap_pars_vertex:mm,shadowmap_vertex:gm,shadowmask_pars_fragment:xm,skinbase_vertex:_m,skinning_pars_vertex:ym,skinning_vertex:vm,skinnormal_vertex:Mm,specularmap_fragment:bm,specularmap_pars_fragment:Sm,tonemapping_fragment:Em,tonemapping_pars_fragment:Tm,transmission_fragment:wm,transmission_pars_fragment:Am,uv_pars_fragment:Rm,uv_pars_vertex:Cm,uv_vertex:Im,worldpos_vertex:Pm,background_vert:Lm,background_frag:Dm,backgroundCube_vert:Nm,backgroundCube_frag:Um,cube_vert:Fm,cube_frag:Om,depth_vert:Bm,depth_frag:zm,distanceRGBA_vert:km,distanceRGBA_frag:Hm,equirect_vert:Vm,equirect_frag:Gm,linedashed_vert:Wm,linedashed_frag:Xm,meshbasic_vert:Ym,meshbasic_frag:qm,meshlambert_vert:Km,meshlambert_frag:Zm,meshmatcap_vert:jm,meshmatcap_frag:Jm,meshnormal_vert:$m,meshnormal_frag:Qm,meshphong_vert:eg,meshphong_frag:tg,meshphysical_vert:ng,meshphysical_frag:ig,meshtoon_vert:sg,meshtoon_frag:rg,points_vert:og,points_frag:ag,shadow_vert:cg,shadow_frag:lg,sprite_vert:hg,sprite_frag:ug},we={common:{diffuse:{value:new Ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new Be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new Ie(16777215)},opacity:{value:1},center:{value:new Be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},Fn={basic:{uniforms:Bt([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:Bt([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new Ie(0)}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:Bt([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new Ie(0)},specular:{value:new Ie(1118481)},shininess:{value:30}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:Bt([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new Ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:Bt([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new Ie(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:Bt([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:Bt([we.points,we.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:Bt([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:Bt([we.common,we.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:Bt([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:Bt([we.sprite,we.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distanceRGBA:{uniforms:Bt([we.common,we.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distanceRGBA_vert,fragmentShader:Ke.distanceRGBA_frag},shadow:{uniforms:Bt([we.lights,we.fog,{color:{value:new Ie(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};Fn.physical={uniforms:Bt([Fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new Be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new Ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new Be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new Ie(0)},specularColor:{value:new Ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new Be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};var ha={r:0,b:0,g:0},Gi=new Qt,dg=new Xe;function fg(s,e,t,n,i,r,o){let a=new Ie(0),l=r===!0?0:1,c,u,h=null,d=0,f=null;function g(v){let _=v.isScene===!0?v.background:null;return _&&_.isTexture&&(_=(v.backgroundBlurriness>0?t:e).get(_)),_}function x(v){let _=!1,T=g(v);T===null?p(a,l):T&&T.isColor&&(p(T,1),_=!0);let w=s.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(v,_){let T=g(_);T&&(T.isCubeTexture||T.mapping===xr)?(u===void 0&&(u=new ht(new di(1,1,1),new vn({name:"BackgroundCubeMaterial",uniforms:Vi(Fn.backgroundCube.uniforms),vertexShader:Fn.backgroundCube.vertexShader,fragmentShader:Fn.backgroundCube.fragmentShader,side:Ht,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,E,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Gi.copy(_.backgroundRotation),Gi.x*=-1,Gi.y*=-1,Gi.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Gi.y*=-1,Gi.z*=-1),u.material.uniforms.envMap.value=T,u.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(dg.makeRotationFromEuler(Gi)),u.material.toneMapped=Qe.getTransfer(T.colorSpace)!==ot,(h!==T||d!==T.version||f!==s.toneMapping)&&(u.material.needsUpdate=!0,h=T,d=T.version,f=s.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new ht(new bn(2,2),new vn({name:"BackgroundMaterial",uniforms:Vi(Fn.background.uniforms),vertexShader:Fn.background.vertexShader,fragmentShader:Fn.background.fragmentShader,side:yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=Qe.getTransfer(T.colorSpace)!==ot,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(h!==T||d!==T.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,h=T,d=T.version,f=s.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function p(v,_){v.getRGB(ha,Ic(s)),n.buffers.color.setClear(ha.r,ha.g,ha.b,_,o)}function b(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,_=1){a.set(v),l=_,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,p(a,l)},render:x,addToRenderList:m,dispose:b}}function pg(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null),r=i,o=!1;function a(M,P,L,N,k){let G=!1,V=h(N,L,P);r!==V&&(r=V,c(r.object)),G=f(M,N,L,k),G&&g(M,N,L,k),k!==null&&e.update(k,s.ELEMENT_ARRAY_BUFFER),(G||o)&&(o=!1,_(M,P,L,N),k!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return s.createVertexArray()}function c(M){return s.bindVertexArray(M)}function u(M){return s.deleteVertexArray(M)}function h(M,P,L){let N=L.wireframe===!0,k=n[M.id];k===void 0&&(k={},n[M.id]=k);let G=k[P.id];G===void 0&&(G={},k[P.id]=G);let V=G[N];return V===void 0&&(V=d(l()),G[N]=V),V}function d(M){let P=[],L=[],N=[];for(let k=0;k<t;k++)P[k]=0,L[k]=0,N[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:L,attributeDivisors:N,object:M,attributes:{},index:null}}function f(M,P,L,N){let k=r.attributes,G=P.attributes,V=0,j=L.getAttributes();for(let H in j)if(j[H].location>=0){let de=k[H],pe=G[H];if(pe===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(pe=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(pe=M.instanceColor)),de===void 0||de.attribute!==pe||pe&&de.data!==pe.data)return!0;V++}return r.attributesNum!==V||r.index!==N}function g(M,P,L,N){let k={},G=P.attributes,V=0,j=L.getAttributes();for(let H in j)if(j[H].location>=0){let de=G[H];de===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(de=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(de=M.instanceColor));let pe={};pe.attribute=de,de&&de.data&&(pe.data=de.data),k[H]=pe,V++}r.attributes=k,r.attributesNum=V,r.index=N}function x(){let M=r.newAttributes;for(let P=0,L=M.length;P<L;P++)M[P]=0}function m(M){p(M,0)}function p(M,P){let L=r.newAttributes,N=r.enabledAttributes,k=r.attributeDivisors;L[M]=1,N[M]===0&&(s.enableVertexAttribArray(M),N[M]=1),k[M]!==P&&(s.vertexAttribDivisor(M,P),k[M]=P)}function b(){let M=r.newAttributes,P=r.enabledAttributes;for(let L=0,N=P.length;L<N;L++)P[L]!==M[L]&&(s.disableVertexAttribArray(L),P[L]=0)}function v(M,P,L,N,k,G,V){V===!0?s.vertexAttribIPointer(M,P,L,k,G):s.vertexAttribPointer(M,P,L,N,k,G)}function _(M,P,L,N){x();let k=N.attributes,G=L.getAttributes(),V=P.defaultAttributeValues;for(let j in G){let H=G[j];if(H.location>=0){let ie=k[j];if(ie===void 0&&(j==="instanceMatrix"&&M.instanceMatrix&&(ie=M.instanceMatrix),j==="instanceColor"&&M.instanceColor&&(ie=M.instanceColor)),ie!==void 0){let de=ie.normalized,pe=ie.itemSize,ye=e.get(ie);if(ye===void 0)continue;let Ee=ye.buffer,Fe=ye.type,He=ye.bytesPerElement,$=Fe===s.INT||Fe===s.UNSIGNED_INT||ie.gpuType===Co;if(ie.isInterleavedBufferAttribute){let te=ie.data,_e=te.stride,Re=ie.offset;if(te.isInstancedInterleavedBuffer){for(let ve=0;ve<H.locationSize;ve++)p(H.location+ve,te.meshPerAttribute);M.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let ve=0;ve<H.locationSize;ve++)m(H.location+ve);s.bindBuffer(s.ARRAY_BUFFER,Ee);for(let ve=0;ve<H.locationSize;ve++)v(H.location+ve,pe/H.locationSize,Fe,de,_e*He,(Re+pe/H.locationSize*ve)*He,$)}else{if(ie.isInstancedBufferAttribute){for(let te=0;te<H.locationSize;te++)p(H.location+te,ie.meshPerAttribute);M.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let te=0;te<H.locationSize;te++)m(H.location+te);s.bindBuffer(s.ARRAY_BUFFER,Ee);for(let te=0;te<H.locationSize;te++)v(H.location+te,pe/H.locationSize,Fe,de,pe*He,pe/H.locationSize*te*He,$)}}else if(V!==void 0){let de=V[j];if(de!==void 0)switch(de.length){case 2:s.vertexAttrib2fv(H.location,de);break;case 3:s.vertexAttrib3fv(H.location,de);break;case 4:s.vertexAttrib4fv(H.location,de);break;default:s.vertexAttrib1fv(H.location,de)}}}}b()}function T(){R();for(let M in n){let P=n[M];for(let L in P){let N=P[L];for(let k in N)u(N[k].object),delete N[k];delete P[L]}delete n[M]}}function w(M){if(n[M.id]===void 0)return;let P=n[M.id];for(let L in P){let N=P[L];for(let k in N)u(N[k].object),delete N[k];delete P[L]}delete n[M.id]}function E(M){for(let P in n){let L=n[P];if(L[M.id]===void 0)continue;let N=L[M.id];for(let k in N)u(N[k].object),delete N[k];delete L[M.id]}}function R(){y(),o=!0,r!==i&&(r=i,c(r.object))}function y(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:R,resetDefaultState:y,dispose:T,releaseStatesOfGeometry:w,releaseStatesOfProgram:E,initAttributes:x,enableAttribute:m,disableUnusedAttributes:b}}function mg(s,e,t){let n;function i(c){n=c}function r(c,u){s.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,h){h!==0&&(s.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let f=0;for(let g=0;g<h;g++)f+=u[g];t.update(f,n,1)}function l(c,u,h,d){if(h===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],u[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let g=0;for(let x=0;x<h;x++)g+=u[x]*d[x];t.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function gg(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let E=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(E){return!(E!==Vt&&n.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){let R=E===ws&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==En&&n.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==un&&!R)}function l(E){if(E==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),b=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),v=s.getParameter(s.MAX_VARYING_VECTORS),_=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),T=g>0,w=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:v,maxFragmentUniforms:_,vertexTextures:T,maxSamples:w}}function xg(s){let e=this,t=null,n=0,i=!1,r=!1,o=new Wt,a=new qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let f=h.length!==0||d||n!==0||i;return i=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){let g=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,p=s.get(h);if(!i||g===null||g.length===0||r&&!m)r?u(null):c();else{let b=r?0:n,v=b*4,_=p.clippingState||null;l.value=_,_=u(g,d,v,f);for(let T=0;T!==v;++T)_[T]=t[T];p.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,g){let x=h!==null?h.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let p=f+x*4,b=d.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,_=f;v!==x;++v,_+=4)o.copy(h[v]).applyMatrix4(b,a),o.normal.toArray(m,_),m[_+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function _g(s){let e=new WeakMap;function t(o,a){return a===Ao?o.mapping=ki:a===Ro&&(o.mapping=Hi),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Ao||a===Ro)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new oo(l.height);return c.fromEquirectangularTexture(s,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Ls=4,Ru=[.125,.215,.35,.446,.526,.582],Yi=20,Nc=new Sn,Cu=new Ie,Uc=null,Fc=0,Oc=0,Bc=!1,Xi=(1+Math.sqrt(5))/2,Ps=1/Xi,Iu=[new O(-Xi,Ps,0),new O(Xi,Ps,0),new O(-Ps,0,Xi),new O(Ps,0,Xi),new O(0,Xi,-Ps),new O(0,Xi,Ps),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)],yg=new O,fa=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,r={}){let{size:o=256,position:a=yg}=r;Uc=this._renderer.getRenderTarget(),Fc=this._renderer.getActiveCubeFace(),Oc=this._renderer.getActiveMipmapLevel(),Bc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Du(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Lu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Uc,Fc,Oc),this._renderer.xr.enabled=Bc,e.scissorTest=!1,ua(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ki||e.mapping===Hi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Uc=this._renderer.getRenderTarget(),Fc=this._renderer.getActiveCubeFace(),Oc=this._renderer.getActiveMipmapLevel(),Bc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Dt,minFilter:Dt,generateMipmaps:!1,type:ws,format:Vt,colorSpace:Nt,depthBuffer:!1},i=Pu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pu(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=vg(r)),this._blurMaterial=Mg(r,e,t)}return i}_compileMaterial(e){let t=new ht(this._lodPlanes[0],e);this._renderer.compile(t,Nc)}_sceneToCubeUV(e,t,n,i,r){let l=new Et(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(Cu),h.toneMapping=Qn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(i),h.clearDepth(),h.setRenderTarget(null));let x=new Mt({name:"PMREM.Background",side:Ht,depthWrite:!1,depthTest:!1}),m=new ht(new di,x),p=!1,b=e.background;b?b.isColor&&(x.color.copy(b),e.background=null,p=!0):(x.color.copy(Cu),p=!0);for(let v=0;v<6;v++){let _=v%3;_===0?(l.up.set(0,c[v],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[v],r.y,r.z)):_===1?(l.up.set(0,0,c[v]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[v],r.z)):(l.up.set(0,c[v],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[v]));let T=this._cubeSize;ua(i,_*T,v>2?T:0,T,T),h.setRenderTarget(i),p&&h.render(m,l),h.render(e,l)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=b}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===ki||e.mapping===Hi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Du()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Lu());let r=i?this._cubemapMaterial:this._equirectMaterial,o=new ht(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;ua(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Nc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodPlanes.length;for(let r=1;r<i;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Iu[(i-r-1)%Iu.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,i,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new ht(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Yi-1),x=r/g,m=isFinite(r)?1+Math.floor(u*x):Yi;m>Yi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Yi}`);let p=[],b=0;for(let E=0;E<Yi;++E){let R=E/x,y=Math.exp(-R*R/2);p.push(y),E===0?b+=y:E<m&&(b+=2*y)}for(let E=0;E<p.length;E++)p[E]=p[E]/b;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-n;let _=this._sizeLods[i],T=3*_*(i>v-Ls?i-v+Ls:0),w=4*(this._cubeSize-_);ua(t,T,w,3*_,2*_),l.setRenderTarget(t),l.render(h,Nc)}};function vg(s){let e=[],t=[],n=[],i=s,r=s-Ls+1+Ru.length;for(let o=0;o<r;o++){let a=Math.pow(2,i);t.push(a);let l=1/a;o>s-Ls?l=Ru[o-s+Ls-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,x=3,m=2,p=1,b=new Float32Array(x*g*f),v=new Float32Array(m*g*f),_=new Float32Array(p*g*f);for(let w=0;w<f;w++){let E=w%3*2/3-1,R=w>2?0:-1,y=[E,R,0,E+2/3,R,0,E+2/3,R+1,0,E,R,0,E+2/3,R+1,0,E,R+1,0];b.set(y,x*g*w),v.set(d,m*g*w);let M=[w,w,w,w,w,w];_.set(M,p*g*w)}let T=new yt;T.setAttribute("position",new et(b,x)),T.setAttribute("uv",new et(v,m)),T.setAttribute("faceIndex",new et(_,p)),e.push(T),i>Ls&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Pu(s,e,t){let n=new cn(s,e,t);return n.texture.mapping=xr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ua(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Mg(s,e,t){let n=new Float32Array(Yi),i=new O(0,1,0);return new vn({name:"SphericalGaussianBlur",defines:{n:Yi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Zc(),fragmentShader:`

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
		`,blending:$n,depthTest:!1,depthWrite:!1})}function Lu(){return new vn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zc(),fragmentShader:`

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
		`,blending:$n,depthTest:!1,depthWrite:!1})}function Du(){return new vn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$n,depthTest:!1,depthWrite:!1})}function Zc(){return`

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
	`}function bg(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Ao||l===Ro,u=l===ki||l===Hi;if(c||u){let h=e.get(a),d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new fa(s)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{let f=a.image;return c&&f&&f.height>0||u&&f&&i(f)?(t===null&&(t=new fa(s)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function i(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Sg(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&ps("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Eg(s,e,t,n){let i={},r=new WeakMap;function o(h){let d=h.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete i[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function l(h){let d=h.attributes;for(let f in d)e.update(d[f],s.ARRAY_BUFFER)}function c(h){let d=[],f=h.index,g=h.attributes.position,x=0;if(f!==null){let b=f.array;x=f.version;for(let v=0,_=b.length;v<_;v+=3){let T=b[v+0],w=b[v+1],E=b[v+2];d.push(T,w,w,E,E,T)}}else if(g!==void 0){let b=g.array;x=g.version;for(let v=0,_=b.length/3-1;v<_;v+=3){let T=v+0,w=v+1,E=v+2;d.push(T,w,w,E,E,T)}}else return;let m=new(Cc(d)?Qs:$s)(d,1);m.version=x;let p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){let d=r.get(h);if(d){let f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function Tg(s,e,t){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){s.drawElements(n,f,r,d*o),t.update(f,n,1)}function c(d,f,g){g!==0&&(s.drawElementsInstanced(n,f,r,d*o,g),t.update(f,n,g))}function u(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function h(d,f,g,x){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,x,0,g);let p=0;for(let b=0;b<g;b++)p+=f[b]*x[b];t.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function wg(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Ag(s,e,t){let n=new WeakMap,i=new it;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,d=n.get(a);if(d===void 0||d.count!==h){let y=function(){E.dispose(),n.delete(a),a.removeEventListener("dispose",y)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],b=a.morphAttributes.color||[],v=0;f===!0&&(v=1),g===!0&&(v=2),x===!0&&(v=3);let _=a.attributes.position.count*v,T=1;_>e.maxTextureSize&&(T=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let w=new Float32Array(_*T*4*h),E=new Js(w,_,T,h);E.type=un,E.needsUpdate=!0;let R=v*4;for(let M=0;M<h;M++){let P=m[M],L=p[M],N=b[M],k=_*T*4*M;for(let G=0;G<P.count;G++){let V=G*R;f===!0&&(i.fromBufferAttribute(P,G),w[k+V+0]=i.x,w[k+V+1]=i.y,w[k+V+2]=i.z,w[k+V+3]=0),g===!0&&(i.fromBufferAttribute(L,G),w[k+V+4]=i.x,w[k+V+5]=i.y,w[k+V+6]=i.z,w[k+V+7]=0),x===!0&&(i.fromBufferAttribute(N,G),w[k+V+8]=i.x,w[k+V+9]=i.y,w[k+V+10]=i.z,w[k+V+11]=N.itemSize===4?i.w:1)}}d={count:h,texture:E,size:new Be(_,T)},n.set(a,d),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",g),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function Rg(s,e,t,n){let i=new WeakMap;function r(l){let c=n.render.frame,u=l.geometry,h=e.get(l,u);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return h}function o(){i=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var $u=new Rt,Nu=new rr(1,1),Qu=new Js,ed=new so,td=new tr,Uu=[],Fu=[],Ou=new Float32Array(16),Bu=new Float32Array(9),zu=new Float32Array(4);function Ns(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=Uu[i];if(r===void 0&&(r=new Float32Array(i),Uu[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function Ct(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function It(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function ma(s,e){let t=Fu[e];t===void 0&&(t=new Int32Array(e),Fu[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Cg(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Ig(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;s.uniform2fv(this.addr,e),It(t,e)}}function Pg(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ct(t,e))return;s.uniform3fv(this.addr,e),It(t,e)}}function Lg(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;s.uniform4fv(this.addr,e),It(t,e)}}function Dg(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),It(t,e)}else{if(Ct(t,n))return;zu.set(n),s.uniformMatrix2fv(this.addr,!1,zu),It(t,n)}}function Ng(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),It(t,e)}else{if(Ct(t,n))return;Bu.set(n),s.uniformMatrix3fv(this.addr,!1,Bu),It(t,n)}}function Ug(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),It(t,e)}else{if(Ct(t,n))return;Ou.set(n),s.uniformMatrix4fv(this.addr,!1,Ou),It(t,n)}}function Fg(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Og(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;s.uniform2iv(this.addr,e),It(t,e)}}function Bg(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;s.uniform3iv(this.addr,e),It(t,e)}}function zg(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;s.uniform4iv(this.addr,e),It(t,e)}}function kg(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Hg(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;s.uniform2uiv(this.addr,e),It(t,e)}}function Vg(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;s.uniform3uiv(this.addr,e),It(t,e)}}function Gg(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;s.uniform4uiv(this.addr,e),It(t,e)}}function Wg(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Nu.compareFunction=wc,r=Nu):r=$u,t.setTexture2D(e||r,i)}function Xg(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||ed,i)}function Yg(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||td,i)}function qg(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Qu,i)}function Kg(s){switch(s){case 5126:return Cg;case 35664:return Ig;case 35665:return Pg;case 35666:return Lg;case 35674:return Dg;case 35675:return Ng;case 35676:return Ug;case 5124:case 35670:return Fg;case 35667:case 35671:return Og;case 35668:case 35672:return Bg;case 35669:case 35673:return zg;case 5125:return kg;case 36294:return Hg;case 36295:return Vg;case 36296:return Gg;case 35678:case 36198:case 36298:case 36306:case 35682:return Wg;case 35679:case 36299:case 36307:return Xg;case 35680:case 36300:case 36308:case 36293:return Yg;case 36289:case 36303:case 36311:case 36292:return qg}}function Zg(s,e){s.uniform1fv(this.addr,e)}function jg(s,e){let t=Ns(e,this.size,2);s.uniform2fv(this.addr,t)}function Jg(s,e){let t=Ns(e,this.size,3);s.uniform3fv(this.addr,t)}function $g(s,e){let t=Ns(e,this.size,4);s.uniform4fv(this.addr,t)}function Qg(s,e){let t=Ns(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function e0(s,e){let t=Ns(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function t0(s,e){let t=Ns(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function n0(s,e){s.uniform1iv(this.addr,e)}function i0(s,e){s.uniform2iv(this.addr,e)}function s0(s,e){s.uniform3iv(this.addr,e)}function r0(s,e){s.uniform4iv(this.addr,e)}function o0(s,e){s.uniform1uiv(this.addr,e)}function a0(s,e){s.uniform2uiv(this.addr,e)}function c0(s,e){s.uniform3uiv(this.addr,e)}function l0(s,e){s.uniform4uiv(this.addr,e)}function h0(s,e,t){let n=this.cache,i=e.length,r=ma(t,i);Ct(n,r)||(s.uniform1iv(this.addr,r),It(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||$u,r[o])}function u0(s,e,t){let n=this.cache,i=e.length,r=ma(t,i);Ct(n,r)||(s.uniform1iv(this.addr,r),It(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||ed,r[o])}function d0(s,e,t){let n=this.cache,i=e.length,r=ma(t,i);Ct(n,r)||(s.uniform1iv(this.addr,r),It(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||td,r[o])}function f0(s,e,t){let n=this.cache,i=e.length,r=ma(t,i);Ct(n,r)||(s.uniform1iv(this.addr,r),It(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Qu,r[o])}function p0(s){switch(s){case 5126:return Zg;case 35664:return jg;case 35665:return Jg;case 35666:return $g;case 35674:return Qg;case 35675:return e0;case 35676:return t0;case 5124:case 35670:return n0;case 35667:case 35671:return i0;case 35668:case 35672:return s0;case 35669:case 35673:return r0;case 5125:return o0;case 36294:return a0;case 36295:return c0;case 36296:return l0;case 35678:case 36198:case 36298:case 36306:case 35682:return h0;case 35679:case 36299:case 36307:return u0;case 35680:case 36300:case 36308:case 36293:return d0;case 36289:case 36303:case 36311:case 36292:return f0}}var kc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Kg(t.type)}},Hc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=p0(t.type)}},Vc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(e,t[a.id],n)}}},zc=/(\w+)(\])?(\[|\.)?/g;function ku(s,e){s.seq.push(e),s.map[e.id]=e}function m0(s,e,t){let n=s.name,i=n.length;for(zc.lastIndex=0;;){let r=zc.exec(n),o=zc.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){ku(t,c===void 0?new kc(a,s,e):new Hc(a,s,e));break}else{let h=t.map[a];h===void 0&&(h=new Vc(a),ku(t,h)),t=h}}}var Ds=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);m0(r,o,this)}}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let o=e[i];o.id in t&&n.push(o)}return n}};function Hu(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var g0=37297,x0=0;function _0(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Vu=new qe;function y0(s){Qe._getMatrix(Vu,Qe.workingColorSpace,s);let e=`mat3( ${Vu.elements.map(t=>t.toFixed(4))} )`;switch(Qe.getTransfer(s)){case Zs:return[e,"LinearTransferOETF"];case ot:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Gu(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+_0(s.getShaderSource(e),a)}else return r}function v0(s,e){let t=y0(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function M0(s,e){let t;switch(e){case su:t="Linear";break;case ru:t="Reinhard";break;case ou:t="Cineon";break;case wo:t="ACESFilmic";break;case cu:t="AgX";break;case lu:t="Neutral";break;case au:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var da=new O;function b0(){Qe.getLuminanceCoefficients(da);let s=da.x.toFixed(4),e=da.y.toFixed(4),t=da.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function S0(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Sr).join(`
`)}function E0(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function T0(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function Sr(s){return s!==""}function Wu(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Xu(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var w0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gc(s){return s.replace(w0,R0)}var A0=new Map;function R0(s,e){let t=Ke[e];if(t===void 0){let n=A0.get(e);if(n!==void 0)t=Ke[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Gc(t)}var C0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yu(s){return s.replace(C0,I0)}function I0(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function qu(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}function P0(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===uc?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Oh?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Un&&(e="SHADOWMAP_TYPE_VSM"),e}function L0(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case ki:case Hi:e="ENVMAP_TYPE_CUBE";break;case xr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function D0(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Hi:e="ENVMAP_MODE_REFRACTION";break}return e}function N0(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case mc:e="ENVMAP_BLENDING_MULTIPLY";break;case nu:e="ENVMAP_BLENDING_MIX";break;case iu:e="ENVMAP_BLENDING_ADD";break}return e}function U0(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function F0(s,e,t,n){let i=s.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=P0(t),c=L0(t),u=D0(t),h=N0(t),d=U0(t),f=S0(t),g=E0(r),x=i.createProgram(),m,p,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Sr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Sr).join(`
`),p.length>0&&(p+=`
`)):(m=[qu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Sr).join(`
`),p=[qu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Qn?"#define TONE_MAPPING":"",t.toneMapping!==Qn?Ke.tonemapping_pars_fragment:"",t.toneMapping!==Qn?M0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,v0("linearToOutputTexel",t.outputColorSpace),b0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Sr).join(`
`)),o=Gc(o),o=Wu(o,t),o=Xu(o,t),a=Gc(a),a=Wu(a,t),a=Xu(a,t),o=Yu(o),a=Yu(a),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Ac?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ac?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let v=b+m+o,_=b+p+a,T=Hu(i,i.VERTEX_SHADER,v),w=Hu(i,i.FRAGMENT_SHADER,_);i.attachShader(x,T),i.attachShader(x,w),t.index0AttributeName!==void 0?i.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function E(P){if(s.debug.checkShaderErrors){let L=i.getProgramInfoLog(x)||"",N=i.getShaderInfoLog(T)||"",k=i.getShaderInfoLog(w)||"",G=L.trim(),V=N.trim(),j=k.trim(),H=!0,ie=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(H=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,T,w);else{let de=Gu(i,T,"vertex"),pe=Gu(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+G+`
`+de+`
`+pe)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(V===""||j==="")&&(ie=!1);ie&&(P.diagnostics={runnable:H,programLog:G,vertexShader:{log:V,prefix:m},fragmentShader:{log:j,prefix:p}})}i.deleteShader(T),i.deleteShader(w),R=new Ds(i,x),y=T0(i,x)}let R;this.getUniforms=function(){return R===void 0&&E(this),R};let y;this.getAttributes=function(){return y===void 0&&E(this),y};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(x,g0)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=x0++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=T,this.fragmentShader=w,this}var O0=0,Wc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Xc(e),t.set(e,n)),n}},Xc=class{constructor(e){this.id=O0++,this.code=e,this.usedTimes=0}};function B0(s,e,t,n,i,r,o){let a=new gs,l=new Wc,c=new Set,u=[],h=i.logarithmicDepthBuffer,d=i.vertexTextures,f=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,M,P,L,N){let k=L.fog,G=N.geometry,V=y.isMeshStandardMaterial?L.environment:null,j=(y.isMeshStandardMaterial?t:e).get(y.envMap||V),H=j&&j.mapping===xr?j.image.height:null,ie=g[y.type];y.precision!==null&&(f=i.getMaxPrecision(y.precision),f!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));let de=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,pe=de!==void 0?de.length:0,ye=0;G.morphAttributes.position!==void 0&&(ye=1),G.morphAttributes.normal!==void 0&&(ye=2),G.morphAttributes.color!==void 0&&(ye=3);let Ee,Fe,He,$;if(ie){let st=Fn[ie];Ee=st.vertexShader,Fe=st.fragmentShader}else Ee=y.vertexShader,Fe=y.fragmentShader,l.update(y),He=l.getVertexShaderID(y),$=l.getFragmentShaderID(y);let te=s.getRenderTarget(),_e=s.state.buffers.depth.getReversed(),Re=N.isInstancedMesh===!0,ve=N.isBatchedMesh===!0,Ne=!!y.map,Ye=!!y.matcap,F=!!j,ze=!!y.aoMap,J=!!y.lightMap,ae=!!y.bumpMap,se=!!y.normalMap,Se=!!y.displacementMap,le=!!y.emissiveMap,be=!!y.metalnessMap,Ae=!!y.roughnessMap,Ue=y.anisotropy>0,I=y.clearcoat>0,S=y.dispersion>0,Y=y.iridescence>0,D=y.sheen>0,Z=y.transmission>0,W=Ue&&!!y.anisotropyMap,me=I&&!!y.clearcoatMap,ue=I&&!!y.clearcoatNormalMap,C=I&&!!y.clearcoatRoughnessMap,U=Y&&!!y.iridescenceMap,B=Y&&!!y.iridescenceThicknessMap,X=D&&!!y.sheenColorMap,ne=D&&!!y.sheenRoughnessMap,re=!!y.specularMap,he=!!y.specularColorMap,Me=!!y.specularIntensityMap,z=Z&&!!y.transmissionMap,ce=Z&&!!y.thicknessMap,fe=!!y.gradientMap,Te=!!y.alphaMap,ge=y.alphaTest>0,oe=!!y.alphaHash,Le=!!y.extensions,Ve=Qn;y.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Ve=s.toneMapping);let ut={shaderID:ie,shaderType:y.type,shaderName:y.name,vertexShader:Ee,fragmentShader:Fe,defines:y.defines,customVertexShaderID:He,customFragmentShaderID:$,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:ve,batchingColor:ve&&N._colorsTexture!==null,instancing:Re,instancingColor:Re&&N.instanceColor!==null,instancingMorph:Re&&N.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:te===null?s.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:Nt,alphaToCoverage:!!y.alphaToCoverage,map:Ne,matcap:Ye,envMap:F,envMapMode:F&&j.mapping,envMapCubeUVHeight:H,aoMap:ze,lightMap:J,bumpMap:ae,normalMap:se,displacementMap:d&&Se,emissiveMap:le,normalMapObjectSpace:se&&y.normalMapType===pu,normalMapTangentSpace:se&&y.normalMapType===Tc,metalnessMap:be,roughnessMap:Ae,anisotropy:Ue,anisotropyMap:W,clearcoat:I,clearcoatMap:me,clearcoatNormalMap:ue,clearcoatRoughnessMap:C,dispersion:S,iridescence:Y,iridescenceMap:U,iridescenceThicknessMap:B,sheen:D,sheenColorMap:X,sheenRoughnessMap:ne,specularMap:re,specularColorMap:he,specularIntensityMap:Me,transmission:Z,transmissionMap:z,thicknessMap:ce,gradientMap:fe,opaque:y.transparent===!1&&y.blending===Ri&&y.alphaToCoverage===!1,alphaMap:Te,alphaTest:ge,alphaHash:oe,combine:y.combine,mapUv:Ne&&x(y.map.channel),aoMapUv:ze&&x(y.aoMap.channel),lightMapUv:J&&x(y.lightMap.channel),bumpMapUv:ae&&x(y.bumpMap.channel),normalMapUv:se&&x(y.normalMap.channel),displacementMapUv:Se&&x(y.displacementMap.channel),emissiveMapUv:le&&x(y.emissiveMap.channel),metalnessMapUv:be&&x(y.metalnessMap.channel),roughnessMapUv:Ae&&x(y.roughnessMap.channel),anisotropyMapUv:W&&x(y.anisotropyMap.channel),clearcoatMapUv:me&&x(y.clearcoatMap.channel),clearcoatNormalMapUv:ue&&x(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:C&&x(y.clearcoatRoughnessMap.channel),iridescenceMapUv:U&&x(y.iridescenceMap.channel),iridescenceThicknessMapUv:B&&x(y.iridescenceThicknessMap.channel),sheenColorMapUv:X&&x(y.sheenColorMap.channel),sheenRoughnessMapUv:ne&&x(y.sheenRoughnessMap.channel),specularMapUv:re&&x(y.specularMap.channel),specularColorMapUv:he&&x(y.specularColorMap.channel),specularIntensityMapUv:Me&&x(y.specularIntensityMap.channel),transmissionMapUv:z&&x(y.transmissionMap.channel),thicknessMapUv:ce&&x(y.thicknessMap.channel),alphaMapUv:Te&&x(y.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(se||Ue),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!G.attributes.uv&&(Ne||Te),fog:!!k,useFog:y.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:y.flatShading===!0&&y.wireframe===!1,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:_e,skinning:N.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:pe,morphTextureStride:ye,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ve,decodeVideoTexture:Ne&&y.map.isVideoTexture===!0&&Qe.getTransfer(y.map.colorSpace)===ot,decodeVideoTextureEmissive:le&&y.emissiveMap.isVideoTexture===!0&&Qe.getTransfer(y.emissiveMap.colorSpace)===ot,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===bt,flipSided:y.side===Ht,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Le&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Le&&y.extensions.multiDraw===!0||ve)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return ut.vertexUv1s=c.has(1),ut.vertexUv2s=c.has(2),ut.vertexUv3s=c.has(3),c.clear(),ut}function p(y){let M=[];if(y.shaderID?M.push(y.shaderID):(M.push(y.customVertexShaderID),M.push(y.customFragmentShaderID)),y.defines!==void 0)for(let P in y.defines)M.push(P),M.push(y.defines[P]);return y.isRawShaderMaterial===!1&&(b(M,y),v(M,y),M.push(s.outputColorSpace)),M.push(y.customProgramCacheKey),M.join()}function b(y,M){y.push(M.precision),y.push(M.outputColorSpace),y.push(M.envMapMode),y.push(M.envMapCubeUVHeight),y.push(M.mapUv),y.push(M.alphaMapUv),y.push(M.lightMapUv),y.push(M.aoMapUv),y.push(M.bumpMapUv),y.push(M.normalMapUv),y.push(M.displacementMapUv),y.push(M.emissiveMapUv),y.push(M.metalnessMapUv),y.push(M.roughnessMapUv),y.push(M.anisotropyMapUv),y.push(M.clearcoatMapUv),y.push(M.clearcoatNormalMapUv),y.push(M.clearcoatRoughnessMapUv),y.push(M.iridescenceMapUv),y.push(M.iridescenceThicknessMapUv),y.push(M.sheenColorMapUv),y.push(M.sheenRoughnessMapUv),y.push(M.specularMapUv),y.push(M.specularColorMapUv),y.push(M.specularIntensityMapUv),y.push(M.transmissionMapUv),y.push(M.thicknessMapUv),y.push(M.combine),y.push(M.fogExp2),y.push(M.sizeAttenuation),y.push(M.morphTargetsCount),y.push(M.morphAttributeCount),y.push(M.numDirLights),y.push(M.numPointLights),y.push(M.numSpotLights),y.push(M.numSpotLightMaps),y.push(M.numHemiLights),y.push(M.numRectAreaLights),y.push(M.numDirLightShadows),y.push(M.numPointLightShadows),y.push(M.numSpotLightShadows),y.push(M.numSpotLightShadowsWithMaps),y.push(M.numLightProbes),y.push(M.shadowMapType),y.push(M.toneMapping),y.push(M.numClippingPlanes),y.push(M.numClipIntersection),y.push(M.depthPacking)}function v(y,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),M.gradientMap&&a.enable(22),y.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),y.push(a.mask)}function _(y){let M=g[y.type],P;if(M){let L=Fn[M];P=Tu.clone(L.uniforms)}else P=y.uniforms;return P}function T(y,M){let P;for(let L=0,N=u.length;L<N;L++){let k=u[L];if(k.cacheKey===M){P=k,++P.usedTimes;break}}return P===void 0&&(P=new F0(s,M,y,r),u.push(P)),P}function w(y){if(--y.usedTimes===0){let M=u.indexOf(y);u[M]=u[u.length-1],u.pop(),y.destroy()}}function E(y){l.remove(y)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:_,acquireProgram:T,releaseProgram:w,releaseShaderCache:E,programs:u,dispose:R}}function z0(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function k0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Ku(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Zu(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(h,d,f,g,x,m){let p=s[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:x,group:m},s[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=x,p.group=m),e++,p}function a(h,d,f,g,x,m){let p=o(h,d,f,g,x,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function l(h,d,f,g,x,m){let p=o(h,d,f,g,x,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function c(h,d){t.length>1&&t.sort(h||k0),n.length>1&&n.sort(d||Ku),i.length>1&&i.sort(d||Ku)}function u(){for(let h=e,d=s.length;h<d;h++){let f=s[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:u,sort:c}}function H0(){let s=new WeakMap;function e(n,i){let r=s.get(n),o;return r===void 0?(o=new Zu,s.set(n,[o])):i>=r.length?(o=new Zu,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function V0(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new Ie};break;case"SpotLight":t={position:new O,direction:new O,color:new Ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new Ie,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new Ie,groundColor:new Ie};break;case"RectAreaLight":t={color:new Ie,position:new O,halfWidth:new O,halfHeight:new O};break}return s[e.id]=t,t}}}function G0(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var W0=0;function X0(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Y0(s){let e=new V0,t=G0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new O);let i=new O,r=new Xe,o=new Xe;function a(c){let u=0,h=0,d=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let f=0,g=0,x=0,m=0,p=0,b=0,v=0,_=0,T=0,w=0,E=0;c.sort(X0);for(let y=0,M=c.length;y<M;y++){let P=c[y],L=P.color,N=P.intensity,k=P.distance,G=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=L.r*N,h+=L.g*N,d+=L.b*N;else if(P.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(P.sh.coefficients[V],N);E++}else if(P.isDirectionalLight){let V=e.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let j=P.shadow,H=t.get(P);H.shadowIntensity=j.intensity,H.shadowBias=j.bias,H.shadowNormalBias=j.normalBias,H.shadowRadius=j.radius,H.shadowMapSize=j.mapSize,n.directionalShadow[f]=H,n.directionalShadowMap[f]=G,n.directionalShadowMatrix[f]=P.shadow.matrix,b++}n.directional[f]=V,f++}else if(P.isSpotLight){let V=e.get(P);V.position.setFromMatrixPosition(P.matrixWorld),V.color.copy(L).multiplyScalar(N),V.distance=k,V.coneCos=Math.cos(P.angle),V.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),V.decay=P.decay,n.spot[x]=V;let j=P.shadow;if(P.map&&(n.spotLightMap[T]=P.map,T++,j.updateMatrices(P),P.castShadow&&w++),n.spotLightMatrix[x]=j.matrix,P.castShadow){let H=t.get(P);H.shadowIntensity=j.intensity,H.shadowBias=j.bias,H.shadowNormalBias=j.normalBias,H.shadowRadius=j.radius,H.shadowMapSize=j.mapSize,n.spotShadow[x]=H,n.spotShadowMap[x]=G,_++}x++}else if(P.isRectAreaLight){let V=e.get(P);V.color.copy(L).multiplyScalar(N),V.halfWidth.set(P.width*.5,0,0),V.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=V,m++}else if(P.isPointLight){let V=e.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity),V.distance=P.distance,V.decay=P.decay,P.castShadow){let j=P.shadow,H=t.get(P);H.shadowIntensity=j.intensity,H.shadowBias=j.bias,H.shadowNormalBias=j.normalBias,H.shadowRadius=j.radius,H.shadowMapSize=j.mapSize,H.shadowCameraNear=j.camera.near,H.shadowCameraFar=j.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=G,n.pointShadowMatrix[g]=P.shadow.matrix,v++}n.point[g]=V,g++}else if(P.isHemisphereLight){let V=e.get(P);V.skyColor.copy(P.color).multiplyScalar(N),V.groundColor.copy(P.groundColor).multiplyScalar(N),n.hemi[p]=V,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=we.LTC_FLOAT_1,n.rectAreaLTC2=we.LTC_FLOAT_2):(n.rectAreaLTC1=we.LTC_HALF_1,n.rectAreaLTC2=we.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;let R=n.hash;(R.directionalLength!==f||R.pointLength!==g||R.spotLength!==x||R.rectAreaLength!==m||R.hemiLength!==p||R.numDirectionalShadows!==b||R.numPointShadows!==v||R.numSpotShadows!==_||R.numSpotMaps!==T||R.numLightProbes!==E)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=_+T-w,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=E,R.directionalLength=f,R.pointLength=g,R.spotLength=x,R.rectAreaLength=m,R.hemiLength=p,R.numDirectionalShadows=b,R.numPointShadows=v,R.numSpotShadows=_,R.numSpotMaps=T,R.numLightProbes=E,n.version=W0++)}function l(c,u){let h=0,d=0,f=0,g=0,x=0,m=u.matrixWorldInverse;for(let p=0,b=c.length;p<b;p++){let v=c[p];if(v.isDirectionalLight){let _=n.directional[h];_.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(m),h++}else if(v.isSpotLight){let _=n.spot[f];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(m),f++}else if(v.isRectAreaLight){let _=n.rectArea[g];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(m),o.identity(),r.copy(v.matrixWorld),r.premultiply(m),o.extractRotation(r),_.halfWidth.set(v.width*.5,0,0),_.halfHeight.set(0,v.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){let _=n.point[d];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(m),d++}else if(v.isHemisphereLight){let _=n.hemi[x];_.direction.setFromMatrixPosition(v.matrixWorld),_.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:n}}function ju(s){let e=new Y0(s),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function q0(s){let e=new WeakMap;function t(i,r=0){let o=e.get(i),a;return o===void 0?(a=new ju(s),e.set(i,[a])):r>=o.length?(a=new ju(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var K0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Z0=`uniform sampler2D shadow_pass;
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
}`;function j0(s,e,t){let n=new Ms,i=new Be,r=new Be,o=new it,a=new lo({depthPacking:fu}),l=new ho,c={},u=t.maxTextureSize,h={[yn]:Ht,[Ht]:yn,[bt]:bt},d=new vn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Be},radius:{value:4}},vertexShader:K0,fragmentShader:Z0}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new yt;g.setAttribute("position",new et(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new ht(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=uc;let p=this.type;this.render=function(w,E,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;let y=s.getRenderTarget(),M=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),L=s.state;L.setBlending($n),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let N=p!==Un&&this.type===Un,k=p===Un&&this.type!==Un;for(let G=0,V=w.length;G<V;G++){let j=w[G],H=j.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);let ie=H.getFrameExtents();if(i.multiply(ie),r.copy(H.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/ie.x),i.x=r.x*ie.x,H.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/ie.y),i.y=r.y*ie.y,H.mapSize.y=r.y)),H.map===null||N===!0||k===!0){let pe=this.type!==Un?{minFilter:wt,magFilter:wt}:{};H.map!==null&&H.map.dispose(),H.map=new cn(i.x,i.y,pe),H.map.texture.name=j.name+".shadowMap",H.camera.updateProjectionMatrix()}s.setRenderTarget(H.map),s.clear();let de=H.getViewportCount();for(let pe=0;pe<de;pe++){let ye=H.getViewport(pe);o.set(r.x*ye.x,r.y*ye.y,r.x*ye.z,r.y*ye.w),L.viewport(o),H.updateMatrices(j,pe),n=H.getFrustum(),_(E,R,H.camera,j,this.type)}H.isPointLightShadow!==!0&&this.type===Un&&b(H,R),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(y,M,P)};function b(w,E){let R=e.update(x);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new cn(i.x,i.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(E,null,R,d,x,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(E,null,R,f,x,null)}function v(w,E,R,y){let M=null,P=R.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)M=P;else if(M=R.isPointLight===!0?l:a,s.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){let L=M.uuid,N=E.uuid,k=c[L];k===void 0&&(k={},c[L]=k);let G=k[N];G===void 0&&(G=M.clone(),k[N]=G,E.addEventListener("dispose",T)),M=G}if(M.visible=E.visible,M.wireframe=E.wireframe,y===Un?M.side=E.shadowSide!==null?E.shadowSide:E.side:M.side=E.shadowSide!==null?E.shadowSide:h[E.side],M.alphaMap=E.alphaMap,M.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,M.map=E.map,M.clipShadows=E.clipShadows,M.clippingPlanes=E.clippingPlanes,M.clipIntersection=E.clipIntersection,M.displacementMap=E.displacementMap,M.displacementScale=E.displacementScale,M.displacementBias=E.displacementBias,M.wireframeLinewidth=E.wireframeLinewidth,M.linewidth=E.linewidth,R.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let L=s.properties.get(M);L.light=R}return M}function _(w,E,R,y,M){if(w.visible===!1)return;if(w.layers.test(E.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&M===Un)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,w.matrixWorld);let N=e.update(w),k=w.material;if(Array.isArray(k)){let G=N.groups;for(let V=0,j=G.length;V<j;V++){let H=G[V],ie=k[H.materialIndex];if(ie&&ie.visible){let de=v(w,ie,y,M);w.onBeforeShadow(s,w,E,R,N,de,H),s.renderBufferDirect(R,null,N,de,w,H),w.onAfterShadow(s,w,E,R,N,de,H)}}}else if(k.visible){let G=v(w,k,y,M);w.onBeforeShadow(s,w,E,R,N,G,null),s.renderBufferDirect(R,null,N,G,w,null),w.onAfterShadow(s,w,E,R,N,G,null)}}let L=w.children;for(let N=0,k=L.length;N<k;N++)_(L[N],E,R,y,M)}function T(w){w.target.removeEventListener("dispose",T);for(let R in c){let y=c[R],M=w.target.uuid;M in y&&(y[M].dispose(),delete y[M])}}}var J0={[yo]:vo,[Mo]:Eo,[bo]:To,[Ci]:So,[vo]:yo,[Eo]:Mo,[To]:bo,[So]:Ci};function $0(s,e){function t(){let z=!1,ce=new it,fe=null,Te=new it(0,0,0,0);return{setMask:function(ge){fe!==ge&&!z&&(s.colorMask(ge,ge,ge,ge),fe=ge)},setLocked:function(ge){z=ge},setClear:function(ge,oe,Le,Ve,ut){ut===!0&&(ge*=Ve,oe*=Ve,Le*=Ve),ce.set(ge,oe,Le,Ve),Te.equals(ce)===!1&&(s.clearColor(ge,oe,Le,Ve),Te.copy(ce))},reset:function(){z=!1,fe=null,Te.set(-1,0,0,0)}}}function n(){let z=!1,ce=!1,fe=null,Te=null,ge=null;return{setReversed:function(oe){if(ce!==oe){let Le=e.get("EXT_clip_control");oe?Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.ZERO_TO_ONE_EXT):Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.NEGATIVE_ONE_TO_ONE_EXT),ce=oe;let Ve=ge;ge=null,this.setClear(Ve)}},getReversed:function(){return ce},setTest:function(oe){oe?te(s.DEPTH_TEST):_e(s.DEPTH_TEST)},setMask:function(oe){fe!==oe&&!z&&(s.depthMask(oe),fe=oe)},setFunc:function(oe){if(ce&&(oe=J0[oe]),Te!==oe){switch(oe){case yo:s.depthFunc(s.NEVER);break;case vo:s.depthFunc(s.ALWAYS);break;case Mo:s.depthFunc(s.LESS);break;case Ci:s.depthFunc(s.LEQUAL);break;case bo:s.depthFunc(s.EQUAL);break;case So:s.depthFunc(s.GEQUAL);break;case Eo:s.depthFunc(s.GREATER);break;case To:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Te=oe}},setLocked:function(oe){z=oe},setClear:function(oe){ge!==oe&&(ce&&(oe=1-oe),s.clearDepth(oe),ge=oe)},reset:function(){z=!1,fe=null,Te=null,ge=null,ce=!1}}}function i(){let z=!1,ce=null,fe=null,Te=null,ge=null,oe=null,Le=null,Ve=null,ut=null;return{setTest:function(st){z||(st?te(s.STENCIL_TEST):_e(s.STENCIL_TEST))},setMask:function(st){ce!==st&&!z&&(s.stencilMask(st),ce=st)},setFunc:function(st,Bn,wn){(fe!==st||Te!==Bn||ge!==wn)&&(s.stencilFunc(st,Bn,wn),fe=st,Te=Bn,ge=wn)},setOp:function(st,Bn,wn){(oe!==st||Le!==Bn||Ve!==wn)&&(s.stencilOp(st,Bn,wn),oe=st,Le=Bn,Ve=wn)},setLocked:function(st){z=st},setClear:function(st){ut!==st&&(s.clearStencil(st),ut=st)},reset:function(){z=!1,ce=null,fe=null,Te=null,ge=null,oe=null,Le=null,Ve=null,ut=null}}}let r=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap,u={},h={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,b=null,v=null,_=null,T=null,w=null,E=new Ie(0,0,0),R=0,y=!1,M=null,P=null,L=null,N=null,k=null,G=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,j=0,H=s.getParameter(s.VERSION);H.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(H)[1]),V=j>=1):H.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),V=j>=2);let ie=null,de={},pe=s.getParameter(s.SCISSOR_BOX),ye=s.getParameter(s.VIEWPORT),Ee=new it().fromArray(pe),Fe=new it().fromArray(ye);function He(z,ce,fe,Te){let ge=new Uint8Array(4),oe=s.createTexture();s.bindTexture(z,oe),s.texParameteri(z,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(z,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Le=0;Le<fe;Le++)z===s.TEXTURE_3D||z===s.TEXTURE_2D_ARRAY?s.texImage3D(ce,0,s.RGBA,1,1,Te,0,s.RGBA,s.UNSIGNED_BYTE,ge):s.texImage2D(ce+Le,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ge);return oe}let $={};$[s.TEXTURE_2D]=He(s.TEXTURE_2D,s.TEXTURE_2D,1),$[s.TEXTURE_CUBE_MAP]=He(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[s.TEXTURE_2D_ARRAY]=He(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),$[s.TEXTURE_3D]=He(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),te(s.DEPTH_TEST),o.setFunc(Ci),ae(!1),se(hc),te(s.CULL_FACE),ze($n);function te(z){u[z]!==!0&&(s.enable(z),u[z]=!0)}function _e(z){u[z]!==!1&&(s.disable(z),u[z]=!1)}function Re(z,ce){return h[z]!==ce?(s.bindFramebuffer(z,ce),h[z]=ce,z===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=ce),z===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=ce),!0):!1}function ve(z,ce){let fe=f,Te=!1;if(z){fe=d.get(ce),fe===void 0&&(fe=[],d.set(ce,fe));let ge=z.textures;if(fe.length!==ge.length||fe[0]!==s.COLOR_ATTACHMENT0){for(let oe=0,Le=ge.length;oe<Le;oe++)fe[oe]=s.COLOR_ATTACHMENT0+oe;fe.length=ge.length,Te=!0}}else fe[0]!==s.BACK&&(fe[0]=s.BACK,Te=!0);Te&&s.drawBuffers(fe)}function Ne(z){return g!==z?(s.useProgram(z),g=z,!0):!1}let Ye={[li]:s.FUNC_ADD,[zh]:s.FUNC_SUBTRACT,[kh]:s.FUNC_REVERSE_SUBTRACT};Ye[Hh]=s.MIN,Ye[Vh]=s.MAX;let F={[Gh]:s.ZERO,[Wh]:s.ONE,[Xh]:s.SRC_COLOR,[eo]:s.SRC_ALPHA,[Jh]:s.SRC_ALPHA_SATURATE,[Zh]:s.DST_COLOR,[qh]:s.DST_ALPHA,[Yh]:s.ONE_MINUS_SRC_COLOR,[to]:s.ONE_MINUS_SRC_ALPHA,[jh]:s.ONE_MINUS_DST_COLOR,[Kh]:s.ONE_MINUS_DST_ALPHA,[$h]:s.CONSTANT_COLOR,[Qh]:s.ONE_MINUS_CONSTANT_COLOR,[eu]:s.CONSTANT_ALPHA,[tu]:s.ONE_MINUS_CONSTANT_ALPHA};function ze(z,ce,fe,Te,ge,oe,Le,Ve,ut,st){if(z===$n){x===!0&&(_e(s.BLEND),x=!1);return}if(x===!1&&(te(s.BLEND),x=!0),z!==Bh){if(z!==m||st!==y){if((p!==li||_!==li)&&(s.blendEquation(s.FUNC_ADD),p=li,_=li),st)switch(z){case Ri:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case dc:s.blendFunc(s.ONE,s.ONE);break;case fc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case pc:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case Ri:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case dc:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case fc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case pc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}b=null,v=null,T=null,w=null,E.set(0,0,0),R=0,m=z,y=st}return}ge=ge||ce,oe=oe||fe,Le=Le||Te,(ce!==p||ge!==_)&&(s.blendEquationSeparate(Ye[ce],Ye[ge]),p=ce,_=ge),(fe!==b||Te!==v||oe!==T||Le!==w)&&(s.blendFuncSeparate(F[fe],F[Te],F[oe],F[Le]),b=fe,v=Te,T=oe,w=Le),(Ve.equals(E)===!1||ut!==R)&&(s.blendColor(Ve.r,Ve.g,Ve.b,ut),E.copy(Ve),R=ut),m=z,y=!1}function J(z,ce){z.side===bt?_e(s.CULL_FACE):te(s.CULL_FACE);let fe=z.side===Ht;ce&&(fe=!fe),ae(fe),z.blending===Ri&&z.transparent===!1?ze($n):ze(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),o.setFunc(z.depthFunc),o.setTest(z.depthTest),o.setMask(z.depthWrite),r.setMask(z.colorWrite);let Te=z.stencilWrite;a.setTest(Te),Te&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),le(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?te(s.SAMPLE_ALPHA_TO_COVERAGE):_e(s.SAMPLE_ALPHA_TO_COVERAGE)}function ae(z){M!==z&&(z?s.frontFace(s.CW):s.frontFace(s.CCW),M=z)}function se(z){z!==Uh?(te(s.CULL_FACE),z!==P&&(z===hc?s.cullFace(s.BACK):z===Fh?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):_e(s.CULL_FACE),P=z}function Se(z){z!==L&&(V&&s.lineWidth(z),L=z)}function le(z,ce,fe){z?(te(s.POLYGON_OFFSET_FILL),(N!==ce||k!==fe)&&(s.polygonOffset(ce,fe),N=ce,k=fe)):_e(s.POLYGON_OFFSET_FILL)}function be(z){z?te(s.SCISSOR_TEST):_e(s.SCISSOR_TEST)}function Ae(z){z===void 0&&(z=s.TEXTURE0+G-1),ie!==z&&(s.activeTexture(z),ie=z)}function Ue(z,ce,fe){fe===void 0&&(ie===null?fe=s.TEXTURE0+G-1:fe=ie);let Te=de[fe];Te===void 0&&(Te={type:void 0,texture:void 0},de[fe]=Te),(Te.type!==z||Te.texture!==ce)&&(ie!==fe&&(s.activeTexture(fe),ie=fe),s.bindTexture(z,ce||$[z]),Te.type=z,Te.texture=ce)}function I(){let z=de[ie];z!==void 0&&z.type!==void 0&&(s.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function S(){try{s.compressedTexImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Y(){try{s.compressedTexImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function D(){try{s.texSubImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Z(){try{s.texSubImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function W(){try{s.compressedTexSubImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function me(){try{s.compressedTexSubImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ue(){try{s.texStorage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function C(){try{s.texStorage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function U(){try{s.texImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function B(){try{s.texImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function X(z){Ee.equals(z)===!1&&(s.scissor(z.x,z.y,z.z,z.w),Ee.copy(z))}function ne(z){Fe.equals(z)===!1&&(s.viewport(z.x,z.y,z.z,z.w),Fe.copy(z))}function re(z,ce){let fe=c.get(ce);fe===void 0&&(fe=new WeakMap,c.set(ce,fe));let Te=fe.get(z);Te===void 0&&(Te=s.getUniformBlockIndex(ce,z.name),fe.set(z,Te))}function he(z,ce){let Te=c.get(ce).get(z);l.get(ce)!==Te&&(s.uniformBlockBinding(ce,Te,z.__bindingPointIndex),l.set(ce,Te))}function Me(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),u={},ie=null,de={},h={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,b=null,v=null,_=null,T=null,w=null,E=new Ie(0,0,0),R=0,y=!1,M=null,P=null,L=null,N=null,k=null,Ee.set(0,0,s.canvas.width,s.canvas.height),Fe.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:te,disable:_e,bindFramebuffer:Re,drawBuffers:ve,useProgram:Ne,setBlending:ze,setMaterial:J,setFlipSided:ae,setCullFace:se,setLineWidth:Se,setPolygonOffset:le,setScissorTest:be,activeTexture:Ae,bindTexture:Ue,unbindTexture:I,compressedTexImage2D:S,compressedTexImage3D:Y,texImage2D:U,texImage3D:B,updateUBOMapping:re,uniformBlockBinding:he,texStorage2D:ue,texStorage3D:C,texSubImage2D:D,texSubImage3D:Z,compressedTexSubImage2D:W,compressedTexSubImage3D:me,scissor:X,viewport:ne,reset:Me}}function Q0(s,e,t,n,i,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Be,u=new WeakMap,h,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(I,S){return f?new OffscreenCanvas(I,S):fs("canvas")}function x(I,S,Y){let D=1,Z=Ue(I);if((Z.width>Y||Z.height>Y)&&(D=Y/Math.max(Z.width,Z.height)),D<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let W=Math.floor(D*Z.width),me=Math.floor(D*Z.height);h===void 0&&(h=g(W,me));let ue=S?g(W,me):h;return ue.width=W,ue.height=me,ue.getContext("2d").drawImage(I,0,0,W,me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+W+"x"+me+")."),ue}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),I;return I}function m(I){return I.generateMipmaps}function p(I){s.generateMipmap(I)}function b(I){return I.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?s.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function v(I,S,Y,D,Z=!1){if(I!==null){if(s[I]!==void 0)return s[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let W=S;if(S===s.RED&&(Y===s.FLOAT&&(W=s.R32F),Y===s.HALF_FLOAT&&(W=s.R16F),Y===s.UNSIGNED_BYTE&&(W=s.R8)),S===s.RED_INTEGER&&(Y===s.UNSIGNED_BYTE&&(W=s.R8UI),Y===s.UNSIGNED_SHORT&&(W=s.R16UI),Y===s.UNSIGNED_INT&&(W=s.R32UI),Y===s.BYTE&&(W=s.R8I),Y===s.SHORT&&(W=s.R16I),Y===s.INT&&(W=s.R32I)),S===s.RG&&(Y===s.FLOAT&&(W=s.RG32F),Y===s.HALF_FLOAT&&(W=s.RG16F),Y===s.UNSIGNED_BYTE&&(W=s.RG8)),S===s.RG_INTEGER&&(Y===s.UNSIGNED_BYTE&&(W=s.RG8UI),Y===s.UNSIGNED_SHORT&&(W=s.RG16UI),Y===s.UNSIGNED_INT&&(W=s.RG32UI),Y===s.BYTE&&(W=s.RG8I),Y===s.SHORT&&(W=s.RG16I),Y===s.INT&&(W=s.RG32I)),S===s.RGB_INTEGER&&(Y===s.UNSIGNED_BYTE&&(W=s.RGB8UI),Y===s.UNSIGNED_SHORT&&(W=s.RGB16UI),Y===s.UNSIGNED_INT&&(W=s.RGB32UI),Y===s.BYTE&&(W=s.RGB8I),Y===s.SHORT&&(W=s.RGB16I),Y===s.INT&&(W=s.RGB32I)),S===s.RGBA_INTEGER&&(Y===s.UNSIGNED_BYTE&&(W=s.RGBA8UI),Y===s.UNSIGNED_SHORT&&(W=s.RGBA16UI),Y===s.UNSIGNED_INT&&(W=s.RGBA32UI),Y===s.BYTE&&(W=s.RGBA8I),Y===s.SHORT&&(W=s.RGBA16I),Y===s.INT&&(W=s.RGBA32I)),S===s.RGB&&(Y===s.UNSIGNED_INT_5_9_9_9_REV&&(W=s.RGB9_E5),Y===s.UNSIGNED_INT_10F_11F_11F_REV&&(W=s.R11F_G11F_B10F)),S===s.RGBA){let me=Z?Zs:Qe.getTransfer(D);Y===s.FLOAT&&(W=s.RGBA32F),Y===s.HALF_FLOAT&&(W=s.RGBA16F),Y===s.UNSIGNED_BYTE&&(W=me===ot?s.SRGB8_ALPHA8:s.RGBA8),Y===s.UNSIGNED_SHORT_4_4_4_4&&(W=s.RGBA4),Y===s.UNSIGNED_SHORT_5_5_5_1&&(W=s.RGB5_A1)}return(W===s.R16F||W===s.R32F||W===s.RG16F||W===s.RG32F||W===s.RGBA16F||W===s.RGBA32F)&&e.get("EXT_color_buffer_float"),W}function _(I,S){let Y;return I?S===null||S===_i||S===As?Y=s.DEPTH24_STENCIL8:S===un?Y=s.DEPTH32F_STENCIL8:S===Ts&&(Y=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===_i||S===As?Y=s.DEPTH_COMPONENT24:S===un?Y=s.DEPTH_COMPONENT32F:S===Ts&&(Y=s.DEPTH_COMPONENT16),Y}function T(I,S){return m(I)===!0||I.isFramebufferTexture&&I.minFilter!==wt&&I.minFilter!==Dt?Math.log2(Math.max(S.width,S.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?S.mipmaps.length:1}function w(I){let S=I.target;S.removeEventListener("dispose",w),R(S),S.isVideoTexture&&u.delete(S)}function E(I){let S=I.target;S.removeEventListener("dispose",E),M(S)}function R(I){let S=n.get(I);if(S.__webglInit===void 0)return;let Y=I.source,D=d.get(Y);if(D){let Z=D[S.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&y(I),Object.keys(D).length===0&&d.delete(Y)}n.remove(I)}function y(I){let S=n.get(I);s.deleteTexture(S.__webglTexture);let Y=I.source,D=d.get(Y);delete D[S.__cacheKey],o.memory.textures--}function M(I){let S=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let D=0;D<6;D++){if(Array.isArray(S.__webglFramebuffer[D]))for(let Z=0;Z<S.__webglFramebuffer[D].length;Z++)s.deleteFramebuffer(S.__webglFramebuffer[D][Z]);else s.deleteFramebuffer(S.__webglFramebuffer[D]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[D])}else{if(Array.isArray(S.__webglFramebuffer))for(let D=0;D<S.__webglFramebuffer.length;D++)s.deleteFramebuffer(S.__webglFramebuffer[D]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let D=0;D<S.__webglColorRenderbuffer.length;D++)S.__webglColorRenderbuffer[D]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[D]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let Y=I.textures;for(let D=0,Z=Y.length;D<Z;D++){let W=n.get(Y[D]);W.__webglTexture&&(s.deleteTexture(W.__webglTexture),o.memory.textures--),n.remove(Y[D])}n.remove(I)}let P=0;function L(){P=0}function N(){let I=P;return I>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+i.maxTextures),P+=1,I}function k(I){let S=[];return S.push(I.wrapS),S.push(I.wrapT),S.push(I.wrapR||0),S.push(I.magFilter),S.push(I.minFilter),S.push(I.anisotropy),S.push(I.internalFormat),S.push(I.format),S.push(I.type),S.push(I.generateMipmaps),S.push(I.premultiplyAlpha),S.push(I.flipY),S.push(I.unpackAlignment),S.push(I.colorSpace),S.join()}function G(I,S){let Y=n.get(I);if(I.isVideoTexture&&be(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&Y.__version!==I.version){let D=I.image;if(D===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(D.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(Y,I,S);return}}else I.isExternalTexture&&(Y.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,Y.__webglTexture,s.TEXTURE0+S)}function V(I,S){let Y=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&Y.__version!==I.version){$(Y,I,S);return}t.bindTexture(s.TEXTURE_2D_ARRAY,Y.__webglTexture,s.TEXTURE0+S)}function j(I,S){let Y=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&Y.__version!==I.version){$(Y,I,S);return}t.bindTexture(s.TEXTURE_3D,Y.__webglTexture,s.TEXTURE0+S)}function H(I,S){let Y=n.get(I);if(I.version>0&&Y.__version!==I.version){te(Y,I,S);return}t.bindTexture(s.TEXTURE_CUBE_MAP,Y.__webglTexture,s.TEXTURE0+S)}let ie={[an]:s.REPEAT,[on]:s.CLAMP_TO_EDGE,[hi]:s.MIRRORED_REPEAT},de={[wt]:s.NEAREST,[Es]:s.NEAREST_MIPMAP_NEAREST,[ei]:s.NEAREST_MIPMAP_LINEAR,[Dt]:s.LINEAR,[xi]:s.LINEAR_MIPMAP_NEAREST,[en]:s.LINEAR_MIPMAP_LINEAR},pe={[mu]:s.NEVER,[Mu]:s.ALWAYS,[gu]:s.LESS,[wc]:s.LEQUAL,[xu]:s.EQUAL,[vu]:s.GEQUAL,[_u]:s.GREATER,[yu]:s.NOTEQUAL};function ye(I,S){if(S.type===un&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Dt||S.magFilter===xi||S.magFilter===ei||S.magFilter===en||S.minFilter===Dt||S.minFilter===xi||S.minFilter===ei||S.minFilter===en)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(I,s.TEXTURE_WRAP_S,ie[S.wrapS]),s.texParameteri(I,s.TEXTURE_WRAP_T,ie[S.wrapT]),(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)&&s.texParameteri(I,s.TEXTURE_WRAP_R,ie[S.wrapR]),s.texParameteri(I,s.TEXTURE_MAG_FILTER,de[S.magFilter]),s.texParameteri(I,s.TEXTURE_MIN_FILTER,de[S.minFilter]),S.compareFunction&&(s.texParameteri(I,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(I,s.TEXTURE_COMPARE_FUNC,pe[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===wt||S.minFilter!==ei&&S.minFilter!==en||S.type===un&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let Y=e.get("EXT_texture_filter_anisotropic");s.texParameterf(I,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Ee(I,S){let Y=!1;I.__webglInit===void 0&&(I.__webglInit=!0,S.addEventListener("dispose",w));let D=S.source,Z=d.get(D);Z===void 0&&(Z={},d.set(D,Z));let W=k(S);if(W!==I.__cacheKey){Z[W]===void 0&&(Z[W]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),Z[W].usedTimes++;let me=Z[I.__cacheKey];me!==void 0&&(Z[I.__cacheKey].usedTimes--,me.usedTimes===0&&y(S)),I.__cacheKey=W,I.__webglTexture=Z[W].texture}return Y}function Fe(I,S,Y){return Math.floor(Math.floor(I/Y)/S)}function He(I,S,Y,D){let W=I.updateRanges;if(W.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,S.width,S.height,Y,D,S.data);else{W.sort((B,X)=>B.start-X.start);let me=0;for(let B=1;B<W.length;B++){let X=W[me],ne=W[B],re=X.start+X.count,he=Fe(ne.start,S.width,4),Me=Fe(X.start,S.width,4);ne.start<=re+1&&he===Me&&Fe(ne.start+ne.count-1,S.width,4)===he?X.count=Math.max(X.count,ne.start+ne.count-X.start):(++me,W[me]=ne)}W.length=me+1;let ue=s.getParameter(s.UNPACK_ROW_LENGTH),C=s.getParameter(s.UNPACK_SKIP_PIXELS),U=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,S.width);for(let B=0,X=W.length;B<X;B++){let ne=W[B],re=Math.floor(ne.start/4),he=Math.ceil(ne.count/4),Me=re%S.width,z=Math.floor(re/S.width),ce=he,fe=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,Me),s.pixelStorei(s.UNPACK_SKIP_ROWS,z),t.texSubImage2D(s.TEXTURE_2D,0,Me,z,ce,fe,Y,D,S.data)}I.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,ue),s.pixelStorei(s.UNPACK_SKIP_PIXELS,C),s.pixelStorei(s.UNPACK_SKIP_ROWS,U)}}function $(I,S,Y){let D=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(D=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(D=s.TEXTURE_3D);let Z=Ee(I,S),W=S.source;t.bindTexture(D,I.__webglTexture,s.TEXTURE0+Y);let me=n.get(W);if(W.version!==me.__version||Z===!0){t.activeTexture(s.TEXTURE0+Y);let ue=Qe.getPrimaries(Qe.workingColorSpace),C=S.colorSpace===Tn?null:Qe.getPrimaries(S.colorSpace),U=S.colorSpace===Tn||ue===C?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,U);let B=x(S.image,!1,i.maxTextureSize);B=Ae(S,B);let X=r.convert(S.format,S.colorSpace),ne=r.convert(S.type),re=v(S.internalFormat,X,ne,S.colorSpace,S.isVideoTexture);ye(D,S);let he,Me=S.mipmaps,z=S.isVideoTexture!==!0,ce=me.__version===void 0||Z===!0,fe=W.dataReady,Te=T(S,B);if(S.isDepthTexture)re=_(S.format===Rs,S.type),ce&&(z?t.texStorage2D(s.TEXTURE_2D,1,re,B.width,B.height):t.texImage2D(s.TEXTURE_2D,0,re,B.width,B.height,0,X,ne,null));else if(S.isDataTexture)if(Me.length>0){z&&ce&&t.texStorage2D(s.TEXTURE_2D,Te,re,Me[0].width,Me[0].height);for(let ge=0,oe=Me.length;ge<oe;ge++)he=Me[ge],z?fe&&t.texSubImage2D(s.TEXTURE_2D,ge,0,0,he.width,he.height,X,ne,he.data):t.texImage2D(s.TEXTURE_2D,ge,re,he.width,he.height,0,X,ne,he.data);S.generateMipmaps=!1}else z?(ce&&t.texStorage2D(s.TEXTURE_2D,Te,re,B.width,B.height),fe&&He(S,B,X,ne)):t.texImage2D(s.TEXTURE_2D,0,re,B.width,B.height,0,X,ne,B.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){z&&ce&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Te,re,Me[0].width,Me[0].height,B.depth);for(let ge=0,oe=Me.length;ge<oe;ge++)if(he=Me[ge],S.format!==Vt)if(X!==null)if(z){if(fe)if(S.layerUpdates.size>0){let Le=Dc(he.width,he.height,S.format,S.type);for(let Ve of S.layerUpdates){let ut=he.data.subarray(Ve*Le/he.data.BYTES_PER_ELEMENT,(Ve+1)*Le/he.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ge,0,0,Ve,he.width,he.height,1,X,ut)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ge,0,0,0,he.width,he.height,B.depth,X,he.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ge,re,he.width,he.height,B.depth,0,he.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else z?fe&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ge,0,0,0,he.width,he.height,B.depth,X,ne,he.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ge,re,he.width,he.height,B.depth,0,X,ne,he.data)}else{z&&ce&&t.texStorage2D(s.TEXTURE_2D,Te,re,Me[0].width,Me[0].height);for(let ge=0,oe=Me.length;ge<oe;ge++)he=Me[ge],S.format!==Vt?X!==null?z?fe&&t.compressedTexSubImage2D(s.TEXTURE_2D,ge,0,0,he.width,he.height,X,he.data):t.compressedTexImage2D(s.TEXTURE_2D,ge,re,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):z?fe&&t.texSubImage2D(s.TEXTURE_2D,ge,0,0,he.width,he.height,X,ne,he.data):t.texImage2D(s.TEXTURE_2D,ge,re,he.width,he.height,0,X,ne,he.data)}else if(S.isDataArrayTexture)if(z){if(ce&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Te,re,B.width,B.height,B.depth),fe)if(S.layerUpdates.size>0){let ge=Dc(B.width,B.height,S.format,S.type);for(let oe of S.layerUpdates){let Le=B.data.subarray(oe*ge/B.data.BYTES_PER_ELEMENT,(oe+1)*ge/B.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,oe,B.width,B.height,1,X,ne,Le)}S.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,B.width,B.height,B.depth,X,ne,B.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,re,B.width,B.height,B.depth,0,X,ne,B.data);else if(S.isData3DTexture)z?(ce&&t.texStorage3D(s.TEXTURE_3D,Te,re,B.width,B.height,B.depth),fe&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,B.width,B.height,B.depth,X,ne,B.data)):t.texImage3D(s.TEXTURE_3D,0,re,B.width,B.height,B.depth,0,X,ne,B.data);else if(S.isFramebufferTexture){if(ce)if(z)t.texStorage2D(s.TEXTURE_2D,Te,re,B.width,B.height);else{let ge=B.width,oe=B.height;for(let Le=0;Le<Te;Le++)t.texImage2D(s.TEXTURE_2D,Le,re,ge,oe,0,X,ne,null),ge>>=1,oe>>=1}}else if(Me.length>0){if(z&&ce){let ge=Ue(Me[0]);t.texStorage2D(s.TEXTURE_2D,Te,re,ge.width,ge.height)}for(let ge=0,oe=Me.length;ge<oe;ge++)he=Me[ge],z?fe&&t.texSubImage2D(s.TEXTURE_2D,ge,0,0,X,ne,he):t.texImage2D(s.TEXTURE_2D,ge,re,X,ne,he);S.generateMipmaps=!1}else if(z){if(ce){let ge=Ue(B);t.texStorage2D(s.TEXTURE_2D,Te,re,ge.width,ge.height)}fe&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,X,ne,B)}else t.texImage2D(s.TEXTURE_2D,0,re,X,ne,B);m(S)&&p(D),me.__version=W.version,S.onUpdate&&S.onUpdate(S)}I.__version=S.version}function te(I,S,Y){if(S.image.length!==6)return;let D=Ee(I,S),Z=S.source;t.bindTexture(s.TEXTURE_CUBE_MAP,I.__webglTexture,s.TEXTURE0+Y);let W=n.get(Z);if(Z.version!==W.__version||D===!0){t.activeTexture(s.TEXTURE0+Y);let me=Qe.getPrimaries(Qe.workingColorSpace),ue=S.colorSpace===Tn?null:Qe.getPrimaries(S.colorSpace),C=S.colorSpace===Tn||me===ue?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,C);let U=S.isCompressedTexture||S.image[0].isCompressedTexture,B=S.image[0]&&S.image[0].isDataTexture,X=[];for(let oe=0;oe<6;oe++)!U&&!B?X[oe]=x(S.image[oe],!0,i.maxCubemapSize):X[oe]=B?S.image[oe].image:S.image[oe],X[oe]=Ae(S,X[oe]);let ne=X[0],re=r.convert(S.format,S.colorSpace),he=r.convert(S.type),Me=v(S.internalFormat,re,he,S.colorSpace),z=S.isVideoTexture!==!0,ce=W.__version===void 0||D===!0,fe=Z.dataReady,Te=T(S,ne);ye(s.TEXTURE_CUBE_MAP,S);let ge;if(U){z&&ce&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Te,Me,ne.width,ne.height);for(let oe=0;oe<6;oe++){ge=X[oe].mipmaps;for(let Le=0;Le<ge.length;Le++){let Ve=ge[Le];S.format!==Vt?re!==null?z?fe&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Le,0,0,Ve.width,Ve.height,re,Ve.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Le,Me,Ve.width,Ve.height,0,Ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?fe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Le,0,0,Ve.width,Ve.height,re,he,Ve.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Le,Me,Ve.width,Ve.height,0,re,he,Ve.data)}}}else{if(ge=S.mipmaps,z&&ce){ge.length>0&&Te++;let oe=Ue(X[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Te,Me,oe.width,oe.height)}for(let oe=0;oe<6;oe++)if(B){z?fe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,X[oe].width,X[oe].height,re,he,X[oe].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,Me,X[oe].width,X[oe].height,0,re,he,X[oe].data);for(let Le=0;Le<ge.length;Le++){let ut=ge[Le].image[oe].image;z?fe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Le+1,0,0,ut.width,ut.height,re,he,ut.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Le+1,Me,ut.width,ut.height,0,re,he,ut.data)}}else{z?fe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,re,he,X[oe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,Me,re,he,X[oe]);for(let Le=0;Le<ge.length;Le++){let Ve=ge[Le];z?fe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Le+1,0,0,re,he,Ve.image[oe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Le+1,Me,re,he,Ve.image[oe])}}}m(S)&&p(s.TEXTURE_CUBE_MAP),W.__version=Z.version,S.onUpdate&&S.onUpdate(S)}I.__version=S.version}function _e(I,S,Y,D,Z,W){let me=r.convert(Y.format,Y.colorSpace),ue=r.convert(Y.type),C=v(Y.internalFormat,me,ue,Y.colorSpace),U=n.get(S),B=n.get(Y);if(B.__renderTarget=S,!U.__hasExternalTextures){let X=Math.max(1,S.width>>W),ne=Math.max(1,S.height>>W);Z===s.TEXTURE_3D||Z===s.TEXTURE_2D_ARRAY?t.texImage3D(Z,W,C,X,ne,S.depth,0,me,ue,null):t.texImage2D(Z,W,C,X,ne,0,me,ue,null)}t.bindFramebuffer(s.FRAMEBUFFER,I),le(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,D,Z,B.__webglTexture,0,Se(S)):(Z===s.TEXTURE_2D||Z>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,D,Z,B.__webglTexture,W),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Re(I,S,Y){if(s.bindRenderbuffer(s.RENDERBUFFER,I),S.depthBuffer){let D=S.depthTexture,Z=D&&D.isDepthTexture?D.type:null,W=_(S.stencilBuffer,Z),me=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ue=Se(S);le(S)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ue,W,S.width,S.height):Y?s.renderbufferStorageMultisample(s.RENDERBUFFER,ue,W,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,W,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,me,s.RENDERBUFFER,I)}else{let D=S.textures;for(let Z=0;Z<D.length;Z++){let W=D[Z],me=r.convert(W.format,W.colorSpace),ue=r.convert(W.type),C=v(W.internalFormat,me,ue,W.colorSpace),U=Se(S);Y&&le(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,U,C,S.width,S.height):le(S)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,U,C,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,C,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ve(I,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,I),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let D=n.get(S.depthTexture);D.__renderTarget=S,(!D.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),G(S.depthTexture,0);let Z=D.__webglTexture,W=Se(S);if(S.depthTexture.format===ds)le(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Z,0,W):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Z,0);else if(S.depthTexture.format===Rs)le(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Z,0,W):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Ne(I){let S=n.get(I),Y=I.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==I.depthTexture){let D=I.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),D){let Z=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,D.removeEventListener("dispose",Z)};D.addEventListener("dispose",Z),S.__depthDisposeCallback=Z}S.__boundDepthTexture=D}if(I.depthTexture&&!S.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");let D=I.texture.mipmaps;D&&D.length>0?ve(S.__webglFramebuffer[0],I):ve(S.__webglFramebuffer,I)}else if(Y){S.__webglDepthbuffer=[];for(let D=0;D<6;D++)if(t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[D]),S.__webglDepthbuffer[D]===void 0)S.__webglDepthbuffer[D]=s.createRenderbuffer(),Re(S.__webglDepthbuffer[D],I,!1);else{let Z=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,W=S.__webglDepthbuffer[D];s.bindRenderbuffer(s.RENDERBUFFER,W),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,W)}}else{let D=I.texture.mipmaps;if(D&&D.length>0?t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=s.createRenderbuffer(),Re(S.__webglDepthbuffer,I,!1);else{let Z=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,W=S.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,W),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,W)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ye(I,S,Y){let D=n.get(I);S!==void 0&&_e(D.__webglFramebuffer,I,I.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Y!==void 0&&Ne(I)}function F(I){let S=I.texture,Y=n.get(I),D=n.get(S);I.addEventListener("dispose",E);let Z=I.textures,W=I.isWebGLCubeRenderTarget===!0,me=Z.length>1;if(me||(D.__webglTexture===void 0&&(D.__webglTexture=s.createTexture()),D.__version=S.version,o.memory.textures++),W){Y.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(S.mipmaps&&S.mipmaps.length>0){Y.__webglFramebuffer[ue]=[];for(let C=0;C<S.mipmaps.length;C++)Y.__webglFramebuffer[ue][C]=s.createFramebuffer()}else Y.__webglFramebuffer[ue]=s.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){Y.__webglFramebuffer=[];for(let ue=0;ue<S.mipmaps.length;ue++)Y.__webglFramebuffer[ue]=s.createFramebuffer()}else Y.__webglFramebuffer=s.createFramebuffer();if(me)for(let ue=0,C=Z.length;ue<C;ue++){let U=n.get(Z[ue]);U.__webglTexture===void 0&&(U.__webglTexture=s.createTexture(),o.memory.textures++)}if(I.samples>0&&le(I)===!1){Y.__webglMultisampledFramebuffer=s.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let ue=0;ue<Z.length;ue++){let C=Z[ue];Y.__webglColorRenderbuffer[ue]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Y.__webglColorRenderbuffer[ue]);let U=r.convert(C.format,C.colorSpace),B=r.convert(C.type),X=v(C.internalFormat,U,B,C.colorSpace,I.isXRRenderTarget===!0),ne=Se(I);s.renderbufferStorageMultisample(s.RENDERBUFFER,ne,X,I.width,I.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ue,s.RENDERBUFFER,Y.__webglColorRenderbuffer[ue])}s.bindRenderbuffer(s.RENDERBUFFER,null),I.depthBuffer&&(Y.__webglDepthRenderbuffer=s.createRenderbuffer(),Re(Y.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(W){t.bindTexture(s.TEXTURE_CUBE_MAP,D.__webglTexture),ye(s.TEXTURE_CUBE_MAP,S);for(let ue=0;ue<6;ue++)if(S.mipmaps&&S.mipmaps.length>0)for(let C=0;C<S.mipmaps.length;C++)_e(Y.__webglFramebuffer[ue][C],I,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,C);else _e(Y.__webglFramebuffer[ue],I,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);m(S)&&p(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(me){for(let ue=0,C=Z.length;ue<C;ue++){let U=Z[ue],B=n.get(U),X=s.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(X=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(X,B.__webglTexture),ye(X,U),_e(Y.__webglFramebuffer,I,U,s.COLOR_ATTACHMENT0+ue,X,0),m(U)&&p(X)}t.unbindTexture()}else{let ue=s.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(ue=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ue,D.__webglTexture),ye(ue,S),S.mipmaps&&S.mipmaps.length>0)for(let C=0;C<S.mipmaps.length;C++)_e(Y.__webglFramebuffer[C],I,S,s.COLOR_ATTACHMENT0,ue,C);else _e(Y.__webglFramebuffer,I,S,s.COLOR_ATTACHMENT0,ue,0);m(S)&&p(ue),t.unbindTexture()}I.depthBuffer&&Ne(I)}function ze(I){let S=I.textures;for(let Y=0,D=S.length;Y<D;Y++){let Z=S[Y];if(m(Z)){let W=b(I),me=n.get(Z).__webglTexture;t.bindTexture(W,me),p(W),t.unbindTexture()}}}let J=[],ae=[];function se(I){if(I.samples>0){if(le(I)===!1){let S=I.textures,Y=I.width,D=I.height,Z=s.COLOR_BUFFER_BIT,W=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,me=n.get(I),ue=S.length>1;if(ue)for(let U=0;U<S.length;U++)t.bindFramebuffer(s.FRAMEBUFFER,me.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+U,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,me.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+U,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer);let C=I.texture.mipmaps;C&&C.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,me.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let U=0;U<S.length;U++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(Z|=s.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(Z|=s.STENCIL_BUFFER_BIT)),ue){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,me.__webglColorRenderbuffer[U]);let B=n.get(S[U]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,B,0)}s.blitFramebuffer(0,0,Y,D,0,0,Y,D,Z,s.NEAREST),l===!0&&(J.length=0,ae.length=0,J.push(s.COLOR_ATTACHMENT0+U),I.depthBuffer&&I.resolveDepthBuffer===!1&&(J.push(W),ae.push(W),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,ae)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,J))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ue)for(let U=0;U<S.length;U++){t.bindFramebuffer(s.FRAMEBUFFER,me.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+U,s.RENDERBUFFER,me.__webglColorRenderbuffer[U]);let B=n.get(S[U]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,me.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+U,s.TEXTURE_2D,B,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&l){let S=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function Se(I){return Math.min(i.maxSamples,I.samples)}function le(I){let S=n.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function be(I){let S=o.render.frame;u.get(I)!==S&&(u.set(I,S),I.update())}function Ae(I,S){let Y=I.colorSpace,D=I.format,Z=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||Y!==Nt&&Y!==Tn&&(Qe.getTransfer(Y)===ot?(D!==Vt||Z!==En)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),S}function Ue(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=L,this.setTexture2D=G,this.setTexture2DArray=V,this.setTexture3D=j,this.setTextureCube=H,this.rebindTextures=Ye,this.setupRenderTarget=F,this.updateRenderTargetMipmap=ze,this.updateMultisampleRenderTarget=se,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=le}function ex(s,e){function t(n,i=Tn){let r,o=Qe.getTransfer(i);if(n===En)return s.UNSIGNED_BYTE;if(n===Io)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Po)return s.UNSIGNED_SHORT_5_5_5_1;if(n===yc)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===vc)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===xc)return s.BYTE;if(n===_c)return s.SHORT;if(n===Ts)return s.UNSIGNED_SHORT;if(n===Co)return s.INT;if(n===_i)return s.UNSIGNED_INT;if(n===un)return s.FLOAT;if(n===ws)return s.HALF_FLOAT;if(n===Mc)return s.ALPHA;if(n===bc)return s.RGB;if(n===Vt)return s.RGBA;if(n===ds)return s.DEPTH_COMPONENT;if(n===Rs)return s.DEPTH_STENCIL;if(n===Lo)return s.RED;if(n===Do)return s.RED_INTEGER;if(n===Sc)return s.RG;if(n===No)return s.RG_INTEGER;if(n===Uo)return s.RGBA_INTEGER;if(n===_r||n===yr||n===vr||n===Mr)if(o===ot)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===_r)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===yr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===vr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Mr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===_r)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===yr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===vr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Mr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Fo||n===Oo||n===Bo||n===zo)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Fo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Oo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Bo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===zo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ko||n===Ho||n===Vo)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ko||n===Ho)return o===ot?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Vo)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Go||n===Wo||n===Xo||n===Yo||n===qo||n===Ko||n===Zo||n===jo||n===Jo||n===$o||n===Qo||n===ea||n===ta||n===na)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Go)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Wo)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Xo)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Yo)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===qo)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ko)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Zo)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===jo)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Jo)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===$o)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Qo)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ea)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ta)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===na)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ia||n===sa||n===ra)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===ia)return o===ot?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===sa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ra)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===oa||n===aa||n===ca||n===la)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===oa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===aa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ca)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===la)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===As?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}var tx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,nx=`
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

}`,Yc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new or(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new vn({vertexShader:tx,fragmentShader:nx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ht(new bn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},qc=class extends Rn{constructor(e,t){super();let n=this,i=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,g=null,x=typeof XRWebGLBinding<"u",m=new Yc,p={},b=t.getContextAttributes(),v=null,_=null,T=[],w=[],E=new Be,R=null,y=new Et;y.viewport=new it;let M=new Et;M.viewport=new it;let P=[y,M],L=new _o,N=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let te=T[$];return te===void 0&&(te=new xs,T[$]=te),te.getTargetRaySpace()},this.getControllerGrip=function($){let te=T[$];return te===void 0&&(te=new xs,T[$]=te),te.getGripSpace()},this.getHand=function($){let te=T[$];return te===void 0&&(te=new xs,T[$]=te),te.getHandSpace()};function G($){let te=w.indexOf($.inputSource);if(te===-1)return;let _e=T[te];_e!==void 0&&(_e.update($.inputSource,$.frame,c||o),_e.dispatchEvent({type:$.type,data:$.inputSource}))}function V(){i.removeEventListener("select",G),i.removeEventListener("selectstart",G),i.removeEventListener("selectend",G),i.removeEventListener("squeeze",G),i.removeEventListener("squeezestart",G),i.removeEventListener("squeezeend",G),i.removeEventListener("end",V),i.removeEventListener("inputsourceschange",j);for(let $=0;$<T.length;$++){let te=w[$];te!==null&&(w[$]=null,T[$].disconnect(te))}N=null,k=null,m.reset();for(let $ in p)delete p[$];e.setRenderTarget(v),f=null,d=null,h=null,i=null,_=null,He.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(i,t)),h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function($){if(i=$,i!==null){if(v=e.getRenderTarget(),i.addEventListener("select",G),i.addEventListener("selectstart",G),i.addEventListener("selectend",G),i.addEventListener("squeeze",G),i.addEventListener("squeezestart",G),i.addEventListener("squeezeend",G),i.addEventListener("end",V),i.addEventListener("inputsourceschange",j),b.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(E),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,Re=null,ve=null;b.depth&&(ve=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=b.stencil?Rs:ds,Re=b.stencil?As:_i);let Ne={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:r};h=this.getBinding(),d=h.createProjectionLayer(Ne),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),_=new cn(d.textureWidth,d.textureHeight,{format:Vt,type:En,depthTexture:new rr(d.textureWidth,d.textureHeight,Re,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let _e={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,_e),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new cn(f.framebufferWidth,f.framebufferHeight,{format:Vt,type:En,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),He.setContext(i),He.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function j($){for(let te=0;te<$.removed.length;te++){let _e=$.removed[te],Re=w.indexOf(_e);Re>=0&&(w[Re]=null,T[Re].disconnect(_e))}for(let te=0;te<$.added.length;te++){let _e=$.added[te],Re=w.indexOf(_e);if(Re===-1){for(let Ne=0;Ne<T.length;Ne++)if(Ne>=w.length){w.push(_e),Re=Ne;break}else if(w[Ne]===null){w[Ne]=_e,Re=Ne;break}if(Re===-1)break}let ve=T[Re];ve&&ve.connect(_e)}}let H=new O,ie=new O;function de($,te,_e){H.setFromMatrixPosition(te.matrixWorld),ie.setFromMatrixPosition(_e.matrixWorld);let Re=H.distanceTo(ie),ve=te.projectionMatrix.elements,Ne=_e.projectionMatrix.elements,Ye=ve[14]/(ve[10]-1),F=ve[14]/(ve[10]+1),ze=(ve[9]+1)/ve[5],J=(ve[9]-1)/ve[5],ae=(ve[8]-1)/ve[0],se=(Ne[8]+1)/Ne[0],Se=Ye*ae,le=Ye*se,be=Re/(-ae+se),Ae=be*-ae;if(te.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Ae),$.translateZ(be),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),ve[10]===-1)$.projectionMatrix.copy(te.projectionMatrix),$.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{let Ue=Ye+be,I=F+be,S=Se-Ae,Y=le+(Re-Ae),D=ze*F/I*Ue,Z=J*F/I*Ue;$.projectionMatrix.makePerspective(S,Y,D,Z,Ue,I),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function pe($,te){te===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(te.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(i===null)return;let te=$.near,_e=$.far;m.texture!==null&&(m.depthNear>0&&(te=m.depthNear),m.depthFar>0&&(_e=m.depthFar)),L.near=M.near=y.near=te,L.far=M.far=y.far=_e,(N!==L.near||k!==L.far)&&(i.updateRenderState({depthNear:L.near,depthFar:L.far}),N=L.near,k=L.far),L.layers.mask=$.layers.mask|6,y.layers.mask=L.layers.mask&3,M.layers.mask=L.layers.mask&5;let Re=$.parent,ve=L.cameras;pe(L,Re);for(let Ne=0;Ne<ve.length;Ne++)pe(ve[Ne],Re);ve.length===2?de(L,y,M):L.projectionMatrix.copy(y.projectionMatrix),ye($,L,Re)};function ye($,te,_e){_e===null?$.matrix.copy(te.matrixWorld):($.matrix.copy(_e.matrixWorld),$.matrix.invert(),$.matrix.multiply(te.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(te.projectionMatrix),$.projectionMatrixInverse.copy(te.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Ii*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function($){l=$,d!==null&&(d.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(L)},this.getCameraTexture=function($){return p[$]};let Ee=null;function Fe($,te){if(u=te.getViewerPose(c||o),g=te,u!==null){let _e=u.views;f!==null&&(e.setRenderTargetFramebuffer(_,f.framebuffer),e.setRenderTarget(_));let Re=!1;_e.length!==L.cameras.length&&(L.cameras.length=0,Re=!0);for(let F=0;F<_e.length;F++){let ze=_e[F],J=null;if(f!==null)J=f.getViewport(ze);else{let se=h.getViewSubImage(d,ze);J=se.viewport,F===0&&(e.setRenderTargetTextures(_,se.colorTexture,se.depthStencilTexture),e.setRenderTarget(_))}let ae=P[F];ae===void 0&&(ae=new Et,ae.layers.enable(F),ae.viewport=new it,P[F]=ae),ae.matrix.fromArray(ze.transform.matrix),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.projectionMatrix.fromArray(ze.projectionMatrix),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert(),ae.viewport.set(J.x,J.y,J.width,J.height),F===0&&(L.matrix.copy(ae.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),Re===!0&&L.cameras.push(ae)}let ve=i.enabledFeatures;if(ve&&ve.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){h=n.getBinding();let F=h.getDepthInformation(_e[0]);F&&F.isValid&&F.texture&&m.init(F,i.renderState)}if(ve&&ve.includes("camera-access")&&x){e.state.unbindTexture(),h=n.getBinding();for(let F=0;F<_e.length;F++){let ze=_e[F].camera;if(ze){let J=p[ze];J||(J=new or,p[ze]=J);let ae=h.getCameraImage(ze);J.sourceTexture=ae}}}}for(let _e=0;_e<T.length;_e++){let Re=w[_e],ve=T[_e];Re!==null&&ve!==void 0&&ve.update(Re,te,c||o)}Ee&&Ee($,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),g=null}let He=new Ju;He.setAnimationLoop(Fe),this.setAnimationLoop=function($){Ee=$},this.dispose=function(){}}},Wi=new Qt,ix=new Xe;function sx(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Ic(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,b,v,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,_)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,b,v):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ht&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ht&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let b=e.get(p),v=b.envMap,_=b.envMapRotation;v&&(m.envMap.value=v,Wi.copy(_),Wi.x*=-1,Wi.y*=-1,Wi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Wi.y*=-1,Wi.z*=-1),m.envMapRotation.value.setFromMatrix4(ix.makeRotationFromEuler(Wi)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,b,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=v*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ht&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let b=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function rx(s,e,t,n){let i={},r={},o=[],a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,v){let _=v.program;n.uniformBlockBinding(b,_)}function c(b,v){let _=i[b.id];_===void 0&&(g(b),_=u(b),i[b.id]=_,b.addEventListener("dispose",m));let T=v.program;n.updateUBOMapping(b,T);let w=e.render.frame;r[b.id]!==w&&(d(b),r[b.id]=w)}function u(b){let v=h();b.__bindingPointIndex=v;let _=s.createBuffer(),T=b.__size,w=b.usage;return s.bindBuffer(s.UNIFORM_BUFFER,_),s.bufferData(s.UNIFORM_BUFFER,T,w),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,_),_}function h(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){let v=i[b.id],_=b.uniforms,T=b.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let w=0,E=_.length;w<E;w++){let R=Array.isArray(_[w])?_[w]:[_[w]];for(let y=0,M=R.length;y<M;y++){let P=R[y];if(f(P,w,y,T)===!0){let L=P.__offset,N=Array.isArray(P.value)?P.value:[P.value],k=0;for(let G=0;G<N.length;G++){let V=N[G],j=x(V);typeof V=="number"||typeof V=="boolean"?(P.__data[0]=V,s.bufferSubData(s.UNIFORM_BUFFER,L+k,P.__data)):V.isMatrix3?(P.__data[0]=V.elements[0],P.__data[1]=V.elements[1],P.__data[2]=V.elements[2],P.__data[3]=0,P.__data[4]=V.elements[3],P.__data[5]=V.elements[4],P.__data[6]=V.elements[5],P.__data[7]=0,P.__data[8]=V.elements[6],P.__data[9]=V.elements[7],P.__data[10]=V.elements[8],P.__data[11]=0):(V.toArray(P.__data,k),k+=j.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,L,P.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(b,v,_,T){let w=b.value,E=v+"_"+_;if(T[E]===void 0)return typeof w=="number"||typeof w=="boolean"?T[E]=w:T[E]=w.clone(),!0;{let R=T[E];if(typeof w=="number"||typeof w=="boolean"){if(R!==w)return T[E]=w,!0}else if(R.equals(w)===!1)return R.copy(w),!0}return!1}function g(b){let v=b.uniforms,_=0,T=16;for(let E=0,R=v.length;E<R;E++){let y=Array.isArray(v[E])?v[E]:[v[E]];for(let M=0,P=y.length;M<P;M++){let L=y[M],N=Array.isArray(L.value)?L.value:[L.value];for(let k=0,G=N.length;k<G;k++){let V=N[k],j=x(V),H=_%T,ie=H%j.boundary,de=H+ie;_+=ie,de!==0&&T-de<j.storage&&(_+=T-de),L.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=_,_+=j.storage}}}let w=_%T;return w>0&&(_+=T-w),b.__size=_,b.__cache={},this}function x(b){let v={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(v.boundary=4,v.storage=4):b.isVector2?(v.boundary=8,v.storage=8):b.isVector3||b.isColor?(v.boundary=16,v.storage=12):b.isVector4?(v.boundary=16,v.storage=16):b.isMatrix3?(v.boundary=48,v.storage=48):b.isMatrix4?(v.boundary=64,v.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),v}function m(b){let v=b.target;v.removeEventListener("dispose",m);let _=o.indexOf(v.__bindingPointIndex);o.splice(_,1),s.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function p(){for(let b in i)s.deleteBuffer(i[b]);o=[],i={},r={}}return{bind:l,update:c,dispose:p}}var pa=class{constructor(e={}){let{canvas:t=bu(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let g=new Uint32Array(4),x=new Int32Array(4),m=null,p=null,b=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Qn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let _=this,T=!1;this._outputColorSpace=dt;let w=0,E=0,R=null,y=-1,M=null,P=new it,L=new it,N=null,k=new Ie(0),G=0,V=t.width,j=t.height,H=1,ie=null,de=null,pe=new it(0,0,V,j),ye=new it(0,0,V,j),Ee=!1,Fe=new Ms,He=!1,$=!1,te=new Xe,_e=new O,Re=new it,ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ne=!1;function Ye(){return R===null?H:1}let F=n;function ze(A,q){return t.getContext(A,q)}try{let A={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",fe,!1),t.addEventListener("webglcontextrestored",Te,!1),t.addEventListener("webglcontextcreationerror",ge,!1),F===null){let q="webgl2";if(F=ze(q,A),F===null)throw ze(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let J,ae,se,Se,le,be,Ae,Ue,I,S,Y,D,Z,W,me,ue,C,U,B,X,ne,re,he,Me;function z(){J=new Sg(F),J.init(),re=new ex(F,J),ae=new gg(F,J,e,re),se=new $0(F,J),ae.reversedDepthBuffer&&d&&se.buffers.depth.setReversed(!0),Se=new wg(F),le=new z0,be=new Q0(F,J,se,le,ae,re,Se),Ae=new _g(_),Ue=new bg(_),I=new Lf(F),he=new pg(F,I),S=new Eg(F,I,Se,he),Y=new Rg(F,S,I,Se),B=new Ag(F,ae,be),ue=new xg(le),D=new B0(_,Ae,Ue,J,ae,he,ue),Z=new sx(_,le),W=new H0,me=new q0(J),U=new fg(_,Ae,Ue,se,Y,f,l),C=new j0(_,Y,ae),Me=new rx(F,Se,ae,se),X=new mg(F,J,Se),ne=new Tg(F,J,Se),Se.programs=D.programs,_.capabilities=ae,_.extensions=J,_.properties=le,_.renderLists=W,_.shadowMap=C,_.state=se,_.info=Se}z();let ce=new qc(_,F);this.xr=ce,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let A=J.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=J.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(A){A!==void 0&&(H=A,this.setSize(V,j,!1))},this.getSize=function(A){return A.set(V,j)},this.setSize=function(A,q,Q=!0){if(ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=A,j=q,t.width=Math.floor(A*H),t.height=Math.floor(q*H),Q===!0&&(t.style.width=A+"px",t.style.height=q+"px"),this.setViewport(0,0,A,q)},this.getDrawingBufferSize=function(A){return A.set(V*H,j*H).floor()},this.setDrawingBufferSize=function(A,q,Q){V=A,j=q,H=Q,t.width=Math.floor(A*Q),t.height=Math.floor(q*Q),this.setViewport(0,0,A,q)},this.getCurrentViewport=function(A){return A.copy(P)},this.getViewport=function(A){return A.copy(pe)},this.setViewport=function(A,q,Q,ee){A.isVector4?pe.set(A.x,A.y,A.z,A.w):pe.set(A,q,Q,ee),se.viewport(P.copy(pe).multiplyScalar(H).round())},this.getScissor=function(A){return A.copy(ye)},this.setScissor=function(A,q,Q,ee){A.isVector4?ye.set(A.x,A.y,A.z,A.w):ye.set(A,q,Q,ee),se.scissor(L.copy(ye).multiplyScalar(H).round())},this.getScissorTest=function(){return Ee},this.setScissorTest=function(A){se.setScissorTest(Ee=A)},this.setOpaqueSort=function(A){ie=A},this.setTransparentSort=function(A){de=A},this.getClearColor=function(A){return A.copy(U.getClearColor())},this.setClearColor=function(){U.setClearColor(...arguments)},this.getClearAlpha=function(){return U.getClearAlpha()},this.setClearAlpha=function(){U.setClearAlpha(...arguments)},this.clear=function(A=!0,q=!0,Q=!0){let ee=0;if(A){let K=!1;if(R!==null){let xe=R.texture.format;K=xe===Uo||xe===No||xe===Do}if(K){let xe=R.texture.type,Ce=xe===En||xe===_i||xe===Ts||xe===As||xe===Io||xe===Po,De=U.getClearColor(),Pe=U.getClearAlpha(),Ge=De.r,We=De.g,Oe=De.b;Ce?(g[0]=Ge,g[1]=We,g[2]=Oe,g[3]=Pe,F.clearBufferuiv(F.COLOR,0,g)):(x[0]=Ge,x[1]=We,x[2]=Oe,x[3]=Pe,F.clearBufferiv(F.COLOR,0,x))}else ee|=F.COLOR_BUFFER_BIT}q&&(ee|=F.DEPTH_BUFFER_BIT),Q&&(ee|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",fe,!1),t.removeEventListener("webglcontextrestored",Te,!1),t.removeEventListener("webglcontextcreationerror",ge,!1),U.dispose(),W.dispose(),me.dispose(),le.dispose(),Ae.dispose(),Ue.dispose(),Y.dispose(),he.dispose(),Me.dispose(),D.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",wn),ce.removeEventListener("sessionend",Xl),Mi.stop()};function fe(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function Te(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;let A=Se.autoReset,q=C.enabled,Q=C.autoUpdate,ee=C.needsUpdate,K=C.type;z(),Se.autoReset=A,C.enabled=q,C.autoUpdate=Q,C.needsUpdate=ee,C.type=K}function ge(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function oe(A){let q=A.target;q.removeEventListener("dispose",oe),Le(q)}function Le(A){Ve(A),le.remove(A)}function Ve(A){let q=le.get(A).programs;q!==void 0&&(q.forEach(function(Q){D.releaseProgram(Q)}),A.isShaderMaterial&&D.releaseShaderCache(A))}this.renderBufferDirect=function(A,q,Q,ee,K,xe){q===null&&(q=ve);let Ce=K.isMesh&&K.matrixWorld.determinant()<0,De=wd(A,q,Q,ee,K);se.setMaterial(ee,Ce);let Pe=Q.index,Ge=1;if(ee.wireframe===!0){if(Pe=S.getWireframeAttribute(Q),Pe===void 0)return;Ge=2}let We=Q.drawRange,Oe=Q.attributes.position,$e=We.start*Ge,at=(We.start+We.count)*Ge;xe!==null&&($e=Math.max($e,xe.start*Ge),at=Math.min(at,(xe.start+xe.count)*Ge)),Pe!==null?($e=Math.max($e,0),at=Math.min(at,Pe.count)):Oe!=null&&($e=Math.max($e,0),at=Math.min(at,Oe.count));let _t=at-$e;if(_t<0||_t===1/0)return;he.setup(K,ee,De,Q,Pe);let ft,lt=X;if(Pe!==null&&(ft=I.get(Pe),lt=ne,lt.setIndex(ft)),K.isMesh)ee.wireframe===!0?(se.setLineWidth(ee.wireframeLinewidth*Ye()),lt.setMode(F.LINES)):lt.setMode(F.TRIANGLES);else if(K.isLine){let ke=ee.linewidth;ke===void 0&&(ke=1),se.setLineWidth(ke*Ye()),K.isLineSegments?lt.setMode(F.LINES):K.isLineLoop?lt.setMode(F.LINE_LOOP):lt.setMode(F.LINE_STRIP)}else K.isPoints?lt.setMode(F.POINTS):K.isSprite&&lt.setMode(F.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)ps("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),lt.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(J.get("WEBGL_multi_draw"))lt.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{let ke=K._multiDrawStarts,gt=K._multiDrawCounts,tt=K._multiDrawCount,Zt=Pe?I.get(Pe).bytesPerElement:1,ji=le.get(ee).currentProgram.getUniforms();for(let jt=0;jt<tt;jt++)ji.setValue(F,"_gl_DrawID",jt),lt.render(ke[jt]/Zt,gt[jt])}else if(K.isInstancedMesh)lt.renderInstances($e,_t,K.count);else if(Q.isInstancedBufferGeometry){let ke=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,gt=Math.min(Q.instanceCount,ke);lt.renderInstances($e,_t,gt)}else lt.render($e,_t)};function ut(A,q,Q){A.transparent===!0&&A.side===bt&&A.forceSinglePass===!1?(A.side=Ht,A.needsUpdate=!0,Ar(A,q,Q),A.side=yn,A.needsUpdate=!0,Ar(A,q,Q),A.side=bt):Ar(A,q,Q)}this.compile=function(A,q,Q=null){Q===null&&(Q=A),p=me.get(Q),p.init(q),v.push(p),Q.traverseVisible(function(K){K.isLight&&K.layers.test(q.layers)&&(p.pushLight(K),K.castShadow&&p.pushShadow(K))}),A!==Q&&A.traverseVisible(function(K){K.isLight&&K.layers.test(q.layers)&&(p.pushLight(K),K.castShadow&&p.pushShadow(K))}),p.setupLights();let ee=new Set;return A.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;let xe=K.material;if(xe)if(Array.isArray(xe))for(let Ce=0;Ce<xe.length;Ce++){let De=xe[Ce];ut(De,Q,K),ee.add(De)}else ut(xe,Q,K),ee.add(xe)}),p=v.pop(),ee},this.compileAsync=function(A,q,Q=null){let ee=this.compile(A,q,Q);return new Promise(K=>{function xe(){if(ee.forEach(function(Ce){le.get(Ce).currentProgram.isReady()&&ee.delete(Ce)}),ee.size===0){K(A);return}setTimeout(xe,10)}J.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let st=null;function Bn(A){st&&st(A)}function wn(){Mi.stop()}function Xl(){Mi.start()}let Mi=new Ju;Mi.setAnimationLoop(Bn),typeof self<"u"&&Mi.setContext(self),this.setAnimationLoop=function(A){st=A,ce.setAnimationLoop(A),A===null?Mi.stop():Mi.start()},ce.addEventListener("sessionstart",wn),ce.addEventListener("sessionend",Xl),this.render=function(A,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(q),q=ce.getCamera()),A.isScene===!0&&A.onBeforeRender(_,A,q,R),p=me.get(A,v.length),p.init(q),v.push(p),te.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Fe.setFromProjectionMatrix(te,xn,q.reversedDepth),$=this.localClippingEnabled,He=ue.init(this.clippingPlanes,$),m=W.get(A,b.length),m.init(),b.push(m),ce.enabled===!0&&ce.isPresenting===!0){let xe=_.xr.getDepthSensingMesh();xe!==null&&Sa(xe,q,-1/0,_.sortObjects)}Sa(A,q,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(ie,de),Ne=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,Ne&&U.addToRenderList(m,A),this.info.render.frame++,He===!0&&ue.beginShadows();let Q=p.state.shadowsArray;C.render(Q,A,q),He===!0&&ue.endShadows(),this.info.autoReset===!0&&this.info.reset();let ee=m.opaque,K=m.transmissive;if(p.setupLights(),q.isArrayCamera){let xe=q.cameras;if(K.length>0)for(let Ce=0,De=xe.length;Ce<De;Ce++){let Pe=xe[Ce];ql(ee,K,A,Pe)}Ne&&U.render(A);for(let Ce=0,De=xe.length;Ce<De;Ce++){let Pe=xe[Ce];Yl(m,A,Pe,Pe.viewport)}}else K.length>0&&ql(ee,K,A,q),Ne&&U.render(A),Yl(m,A,q);R!==null&&E===0&&(be.updateMultisampleRenderTarget(R),be.updateRenderTargetMipmap(R)),A.isScene===!0&&A.onAfterRender(_,A,q),he.resetDefaultState(),y=-1,M=null,v.pop(),v.length>0?(p=v[v.length-1],He===!0&&ue.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function Sa(A,q,Q,ee){if(A.visible===!1)return;if(A.layers.test(q.layers)){if(A.isGroup)Q=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(q);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Fe.intersectsSprite(A)){ee&&Re.setFromMatrixPosition(A.matrixWorld).applyMatrix4(te);let Ce=Y.update(A),De=A.material;De.visible&&m.push(A,Ce,De,Q,Re.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Fe.intersectsObject(A))){let Ce=Y.update(A),De=A.material;if(ee&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Re.copy(A.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),Re.copy(Ce.boundingSphere.center)),Re.applyMatrix4(A.matrixWorld).applyMatrix4(te)),Array.isArray(De)){let Pe=Ce.groups;for(let Ge=0,We=Pe.length;Ge<We;Ge++){let Oe=Pe[Ge],$e=De[Oe.materialIndex];$e&&$e.visible&&m.push(A,Ce,$e,Q,Re.z,Oe)}}else De.visible&&m.push(A,Ce,De,Q,Re.z,null)}}let xe=A.children;for(let Ce=0,De=xe.length;Ce<De;Ce++)Sa(xe[Ce],q,Q,ee)}function Yl(A,q,Q,ee){let K=A.opaque,xe=A.transmissive,Ce=A.transparent;p.setupLightsView(Q),He===!0&&ue.setGlobalState(_.clippingPlanes,Q),ee&&se.viewport(P.copy(ee)),K.length>0&&wr(K,q,Q),xe.length>0&&wr(xe,q,Q),Ce.length>0&&wr(Ce,q,Q),se.buffers.depth.setTest(!0),se.buffers.depth.setMask(!0),se.buffers.color.setMask(!0),se.setPolygonOffset(!1)}function ql(A,q,Q,ee){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[ee.id]===void 0&&(p.state.transmissionRenderTarget[ee.id]=new cn(1,1,{generateMipmaps:!0,type:J.has("EXT_color_buffer_half_float")||J.has("EXT_color_buffer_float")?ws:En,minFilter:en,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace}));let xe=p.state.transmissionRenderTarget[ee.id],Ce=ee.viewport||P;xe.setSize(Ce.z*_.transmissionResolutionScale,Ce.w*_.transmissionResolutionScale);let De=_.getRenderTarget(),Pe=_.getActiveCubeFace(),Ge=_.getActiveMipmapLevel();_.setRenderTarget(xe),_.getClearColor(k),G=_.getClearAlpha(),G<1&&_.setClearColor(16777215,.5),_.clear(),Ne&&U.render(Q);let We=_.toneMapping;_.toneMapping=Qn;let Oe=ee.viewport;if(ee.viewport!==void 0&&(ee.viewport=void 0),p.setupLightsView(ee),He===!0&&ue.setGlobalState(_.clippingPlanes,ee),wr(A,Q,ee),be.updateMultisampleRenderTarget(xe),be.updateRenderTargetMipmap(xe),J.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let at=0,_t=q.length;at<_t;at++){let ft=q[at],lt=ft.object,ke=ft.geometry,gt=ft.material,tt=ft.group;if(gt.side===bt&&lt.layers.test(ee.layers)){let Zt=gt.side;gt.side=Ht,gt.needsUpdate=!0,Kl(lt,Q,ee,ke,gt,tt),gt.side=Zt,gt.needsUpdate=!0,$e=!0}}$e===!0&&(be.updateMultisampleRenderTarget(xe),be.updateRenderTargetMipmap(xe))}_.setRenderTarget(De,Pe,Ge),_.setClearColor(k,G),Oe!==void 0&&(ee.viewport=Oe),_.toneMapping=We}function wr(A,q,Q){let ee=q.isScene===!0?q.overrideMaterial:null;for(let K=0,xe=A.length;K<xe;K++){let Ce=A[K],De=Ce.object,Pe=Ce.geometry,Ge=Ce.group,We=Ce.material;We.allowOverride===!0&&ee!==null&&(We=ee),De.layers.test(Q.layers)&&Kl(De,q,Q,Pe,We,Ge)}}function Kl(A,q,Q,ee,K,xe){A.onBeforeRender(_,q,Q,ee,K,xe),A.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),K.onBeforeRender(_,q,Q,ee,A,xe),K.transparent===!0&&K.side===bt&&K.forceSinglePass===!1?(K.side=Ht,K.needsUpdate=!0,_.renderBufferDirect(Q,q,ee,K,A,xe),K.side=yn,K.needsUpdate=!0,_.renderBufferDirect(Q,q,ee,K,A,xe),K.side=bt):_.renderBufferDirect(Q,q,ee,K,A,xe),A.onAfterRender(_,q,Q,ee,K,xe)}function Ar(A,q,Q){q.isScene!==!0&&(q=ve);let ee=le.get(A),K=p.state.lights,xe=p.state.shadowsArray,Ce=K.state.version,De=D.getParameters(A,K.state,xe,q,Q),Pe=D.getProgramCacheKey(De),Ge=ee.programs;ee.environment=A.isMeshStandardMaterial?q.environment:null,ee.fog=q.fog,ee.envMap=(A.isMeshStandardMaterial?Ue:Ae).get(A.envMap||ee.environment),ee.envMapRotation=ee.environment!==null&&A.envMap===null?q.environmentRotation:A.envMapRotation,Ge===void 0&&(A.addEventListener("dispose",oe),Ge=new Map,ee.programs=Ge);let We=Ge.get(Pe);if(We!==void 0){if(ee.currentProgram===We&&ee.lightsStateVersion===Ce)return jl(A,De),We}else De.uniforms=D.getUniforms(A),A.onBeforeCompile(De,_),We=D.acquireProgram(De,Pe),Ge.set(Pe,We),ee.uniforms=De.uniforms;let Oe=ee.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Oe.clippingPlanes=ue.uniform),jl(A,De),ee.needsLights=Rd(A),ee.lightsStateVersion=Ce,ee.needsLights&&(Oe.ambientLightColor.value=K.state.ambient,Oe.lightProbe.value=K.state.probe,Oe.directionalLights.value=K.state.directional,Oe.directionalLightShadows.value=K.state.directionalShadow,Oe.spotLights.value=K.state.spot,Oe.spotLightShadows.value=K.state.spotShadow,Oe.rectAreaLights.value=K.state.rectArea,Oe.ltc_1.value=K.state.rectAreaLTC1,Oe.ltc_2.value=K.state.rectAreaLTC2,Oe.pointLights.value=K.state.point,Oe.pointLightShadows.value=K.state.pointShadow,Oe.hemisphereLights.value=K.state.hemi,Oe.directionalShadowMap.value=K.state.directionalShadowMap,Oe.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Oe.spotShadowMap.value=K.state.spotShadowMap,Oe.spotLightMatrix.value=K.state.spotLightMatrix,Oe.spotLightMap.value=K.state.spotLightMap,Oe.pointShadowMap.value=K.state.pointShadowMap,Oe.pointShadowMatrix.value=K.state.pointShadowMatrix),ee.currentProgram=We,ee.uniformsList=null,We}function Zl(A){if(A.uniformsList===null){let q=A.currentProgram.getUniforms();A.uniformsList=Ds.seqWithValue(q.seq,A.uniforms)}return A.uniformsList}function jl(A,q){let Q=le.get(A);Q.outputColorSpace=q.outputColorSpace,Q.batching=q.batching,Q.batchingColor=q.batchingColor,Q.instancing=q.instancing,Q.instancingColor=q.instancingColor,Q.instancingMorph=q.instancingMorph,Q.skinning=q.skinning,Q.morphTargets=q.morphTargets,Q.morphNormals=q.morphNormals,Q.morphColors=q.morphColors,Q.morphTargetsCount=q.morphTargetsCount,Q.numClippingPlanes=q.numClippingPlanes,Q.numIntersection=q.numClipIntersection,Q.vertexAlphas=q.vertexAlphas,Q.vertexTangents=q.vertexTangents,Q.toneMapping=q.toneMapping}function wd(A,q,Q,ee,K){q.isScene!==!0&&(q=ve),be.resetTextureUnits();let xe=q.fog,Ce=ee.isMeshStandardMaterial?q.environment:null,De=R===null?_.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Nt,Pe=(ee.isMeshStandardMaterial?Ue:Ae).get(ee.envMap||Ce),Ge=ee.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,We=!!Q.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),Oe=!!Q.morphAttributes.position,$e=!!Q.morphAttributes.normal,at=!!Q.morphAttributes.color,_t=Qn;ee.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(_t=_.toneMapping);let ft=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,lt=ft!==void 0?ft.length:0,ke=le.get(ee),gt=p.state.lights;if(He===!0&&($===!0||A!==M)){let zt=A===M&&ee.id===y;ue.setState(ee,A,zt)}let tt=!1;ee.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==gt.state.version||ke.outputColorSpace!==De||K.isBatchedMesh&&ke.batching===!1||!K.isBatchedMesh&&ke.batching===!0||K.isBatchedMesh&&ke.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&ke.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&ke.instancing===!1||!K.isInstancedMesh&&ke.instancing===!0||K.isSkinnedMesh&&ke.skinning===!1||!K.isSkinnedMesh&&ke.skinning===!0||K.isInstancedMesh&&ke.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&ke.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&ke.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&ke.instancingMorph===!1&&K.morphTexture!==null||ke.envMap!==Pe||ee.fog===!0&&ke.fog!==xe||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==ue.numPlanes||ke.numIntersection!==ue.numIntersection)||ke.vertexAlphas!==Ge||ke.vertexTangents!==We||ke.morphTargets!==Oe||ke.morphNormals!==$e||ke.morphColors!==at||ke.toneMapping!==_t||ke.morphTargetsCount!==lt)&&(tt=!0):(tt=!0,ke.__version=ee.version);let Zt=ke.currentProgram;tt===!0&&(Zt=Ar(ee,q,K));let ji=!1,jt=!1,Bs=!1,xt=Zt.getUniforms(),nn=ke.uniforms;if(se.useProgram(Zt.program)&&(ji=!0,jt=!0,Bs=!0),ee.id!==y&&(y=ee.id,jt=!0),ji||M!==A){se.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),xt.setValue(F,"projectionMatrix",A.projectionMatrix),xt.setValue(F,"viewMatrix",A.matrixWorldInverse);let Gt=xt.map.cameraPosition;Gt!==void 0&&Gt.setValue(F,_e.setFromMatrixPosition(A.matrixWorld)),ae.logarithmicDepthBuffer&&xt.setValue(F,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&xt.setValue(F,"isOrthographic",A.isOrthographicCamera===!0),M!==A&&(M=A,jt=!0,Bs=!0)}if(K.isSkinnedMesh){xt.setOptional(F,K,"bindMatrix"),xt.setOptional(F,K,"bindMatrixInverse");let zt=K.skeleton;zt&&(zt.boneTexture===null&&zt.computeBoneTexture(),xt.setValue(F,"boneTexture",zt.boneTexture,be))}K.isBatchedMesh&&(xt.setOptional(F,K,"batchingTexture"),xt.setValue(F,"batchingTexture",K._matricesTexture,be),xt.setOptional(F,K,"batchingIdTexture"),xt.setValue(F,"batchingIdTexture",K._indirectTexture,be),xt.setOptional(F,K,"batchingColorTexture"),K._colorsTexture!==null&&xt.setValue(F,"batchingColorTexture",K._colorsTexture,be));let sn=Q.morphAttributes;if((sn.position!==void 0||sn.normal!==void 0||sn.color!==void 0)&&B.update(K,Q,Zt),(jt||ke.receiveShadow!==K.receiveShadow)&&(ke.receiveShadow=K.receiveShadow,xt.setValue(F,"receiveShadow",K.receiveShadow)),ee.isMeshGouraudMaterial&&ee.envMap!==null&&(nn.envMap.value=Pe,nn.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),ee.isMeshStandardMaterial&&ee.envMap===null&&q.environment!==null&&(nn.envMapIntensity.value=q.environmentIntensity),jt&&(xt.setValue(F,"toneMappingExposure",_.toneMappingExposure),ke.needsLights&&Ad(nn,Bs),xe&&ee.fog===!0&&Z.refreshFogUniforms(nn,xe),Z.refreshMaterialUniforms(nn,ee,H,j,p.state.transmissionRenderTarget[A.id]),Ds.upload(F,Zl(ke),nn,be)),ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(Ds.upload(F,Zl(ke),nn,be),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&xt.setValue(F,"center",K.center),xt.setValue(F,"modelViewMatrix",K.modelViewMatrix),xt.setValue(F,"normalMatrix",K.normalMatrix),xt.setValue(F,"modelMatrix",K.matrixWorld),ee.isShaderMaterial||ee.isRawShaderMaterial){let zt=ee.uniformsGroups;for(let Gt=0,Ea=zt.length;Gt<Ea;Gt++){let bi=zt[Gt];Me.update(bi,Zt),Me.bind(bi,Zt)}}return Zt}function Ad(A,q){A.ambientLightColor.needsUpdate=q,A.lightProbe.needsUpdate=q,A.directionalLights.needsUpdate=q,A.directionalLightShadows.needsUpdate=q,A.pointLights.needsUpdate=q,A.pointLightShadows.needsUpdate=q,A.spotLights.needsUpdate=q,A.spotLightShadows.needsUpdate=q,A.rectAreaLights.needsUpdate=q,A.hemisphereLights.needsUpdate=q}function Rd(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(A,q,Q){let ee=le.get(A);ee.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,ee.__autoAllocateDepthBuffer===!1&&(ee.__useRenderToTexture=!1),le.get(A.texture).__webglTexture=q,le.get(A.depthTexture).__webglTexture=ee.__autoAllocateDepthBuffer?void 0:Q,ee.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,q){let Q=le.get(A);Q.__webglFramebuffer=q,Q.__useDefaultFramebuffer=q===void 0};let Cd=F.createFramebuffer();this.setRenderTarget=function(A,q=0,Q=0){R=A,w=q,E=Q;let ee=!0,K=null,xe=!1,Ce=!1;if(A){let Pe=le.get(A);if(Pe.__useDefaultFramebuffer!==void 0)se.bindFramebuffer(F.FRAMEBUFFER,null),ee=!1;else if(Pe.__webglFramebuffer===void 0)be.setupRenderTarget(A);else if(Pe.__hasExternalTextures)be.rebindTextures(A,le.get(A.texture).__webglTexture,le.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let Oe=A.depthTexture;if(Pe.__boundDepthTexture!==Oe){if(Oe!==null&&le.has(Oe)&&(A.width!==Oe.image.width||A.height!==Oe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");be.setupDepthRenderbuffer(A)}}let Ge=A.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(Ce=!0);let We=le.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(We[q])?K=We[q][Q]:K=We[q],xe=!0):A.samples>0&&be.useMultisampledRTT(A)===!1?K=le.get(A).__webglMultisampledFramebuffer:Array.isArray(We)?K=We[Q]:K=We,P.copy(A.viewport),L.copy(A.scissor),N=A.scissorTest}else P.copy(pe).multiplyScalar(H).floor(),L.copy(ye).multiplyScalar(H).floor(),N=Ee;if(Q!==0&&(K=Cd),se.bindFramebuffer(F.FRAMEBUFFER,K)&&ee&&se.drawBuffers(A,K),se.viewport(P),se.scissor(L),se.setScissorTest(N),xe){let Pe=le.get(A.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+q,Pe.__webglTexture,Q)}else if(Ce){let Pe=q;for(let Ge=0;Ge<A.textures.length;Ge++){let We=le.get(A.textures[Ge]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Ge,We.__webglTexture,Q,Pe)}}else if(A!==null&&Q!==0){let Pe=le.get(A.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Pe.__webglTexture,Q)}y=-1},this.readRenderTargetPixels=function(A,q,Q,ee,K,xe,Ce,De=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=le.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ce!==void 0&&(Pe=Pe[Ce]),Pe){se.bindFramebuffer(F.FRAMEBUFFER,Pe);try{let Ge=A.textures[De],We=Ge.format,Oe=Ge.type;if(!ae.textureFormatReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ae.textureTypeReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=A.width-ee&&Q>=0&&Q<=A.height-K&&(A.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+De),F.readPixels(q,Q,ee,K,re.convert(We),re.convert(Oe),xe))}finally{let Ge=R!==null?le.get(R).__webglFramebuffer:null;se.bindFramebuffer(F.FRAMEBUFFER,Ge)}}},this.readRenderTargetPixelsAsync=async function(A,q,Q,ee,K,xe,Ce,De=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=le.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ce!==void 0&&(Pe=Pe[Ce]),Pe)if(q>=0&&q<=A.width-ee&&Q>=0&&Q<=A.height-K){se.bindFramebuffer(F.FRAMEBUFFER,Pe);let Ge=A.textures[De],We=Ge.format,Oe=Ge.type;if(!ae.textureFormatReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ae.textureTypeReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let $e=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,$e),F.bufferData(F.PIXEL_PACK_BUFFER,xe.byteLength,F.STREAM_READ),A.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+De),F.readPixels(q,Q,ee,K,re.convert(We),re.convert(Oe),0);let at=R!==null?le.get(R).__webglFramebuffer:null;se.bindFramebuffer(F.FRAMEBUFFER,at);let _t=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Su(F,_t,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,$e),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,xe),F.deleteBuffer($e),F.deleteSync(_t),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,q=null,Q=0){let ee=Math.pow(2,-Q),K=Math.floor(A.image.width*ee),xe=Math.floor(A.image.height*ee),Ce=q!==null?q.x:0,De=q!==null?q.y:0;be.setTexture2D(A,0),F.copyTexSubImage2D(F.TEXTURE_2D,Q,0,0,Ce,De,K,xe),se.unbindTexture()};let Id=F.createFramebuffer(),Pd=F.createFramebuffer();this.copyTextureToTexture=function(A,q,Q=null,ee=null,K=0,xe=null){xe===null&&(K!==0?(ps("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),xe=K,K=0):xe=0);let Ce,De,Pe,Ge,We,Oe,$e,at,_t,ft=A.isCompressedTexture?A.mipmaps[xe]:A.image;if(Q!==null)Ce=Q.max.x-Q.min.x,De=Q.max.y-Q.min.y,Pe=Q.isBox3?Q.max.z-Q.min.z:1,Ge=Q.min.x,We=Q.min.y,Oe=Q.isBox3?Q.min.z:0;else{let sn=Math.pow(2,-K);Ce=Math.floor(ft.width*sn),De=Math.floor(ft.height*sn),A.isDataArrayTexture?Pe=ft.depth:A.isData3DTexture?Pe=Math.floor(ft.depth*sn):Pe=1,Ge=0,We=0,Oe=0}ee!==null?($e=ee.x,at=ee.y,_t=ee.z):($e=0,at=0,_t=0);let lt=re.convert(q.format),ke=re.convert(q.type),gt;q.isData3DTexture?(be.setTexture3D(q,0),gt=F.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(be.setTexture2DArray(q,0),gt=F.TEXTURE_2D_ARRAY):(be.setTexture2D(q,0),gt=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,q.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,q.unpackAlignment);let tt=F.getParameter(F.UNPACK_ROW_LENGTH),Zt=F.getParameter(F.UNPACK_IMAGE_HEIGHT),ji=F.getParameter(F.UNPACK_SKIP_PIXELS),jt=F.getParameter(F.UNPACK_SKIP_ROWS),Bs=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,ft.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ft.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Ge),F.pixelStorei(F.UNPACK_SKIP_ROWS,We),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Oe);let xt=A.isDataArrayTexture||A.isData3DTexture,nn=q.isDataArrayTexture||q.isData3DTexture;if(A.isDepthTexture){let sn=le.get(A),zt=le.get(q),Gt=le.get(sn.__renderTarget),Ea=le.get(zt.__renderTarget);se.bindFramebuffer(F.READ_FRAMEBUFFER,Gt.__webglFramebuffer),se.bindFramebuffer(F.DRAW_FRAMEBUFFER,Ea.__webglFramebuffer);for(let bi=0;bi<Pe;bi++)xt&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,le.get(A).__webglTexture,K,Oe+bi),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,le.get(q).__webglTexture,xe,_t+bi)),F.blitFramebuffer(Ge,We,Ce,De,$e,at,Ce,De,F.DEPTH_BUFFER_BIT,F.NEAREST);se.bindFramebuffer(F.READ_FRAMEBUFFER,null),se.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(K!==0||A.isRenderTargetTexture||le.has(A)){let sn=le.get(A),zt=le.get(q);se.bindFramebuffer(F.READ_FRAMEBUFFER,Id),se.bindFramebuffer(F.DRAW_FRAMEBUFFER,Pd);for(let Gt=0;Gt<Pe;Gt++)xt?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,sn.__webglTexture,K,Oe+Gt):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,sn.__webglTexture,K),nn?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,zt.__webglTexture,xe,_t+Gt):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,zt.__webglTexture,xe),K!==0?F.blitFramebuffer(Ge,We,Ce,De,$e,at,Ce,De,F.COLOR_BUFFER_BIT,F.NEAREST):nn?F.copyTexSubImage3D(gt,xe,$e,at,_t+Gt,Ge,We,Ce,De):F.copyTexSubImage2D(gt,xe,$e,at,Ge,We,Ce,De);se.bindFramebuffer(F.READ_FRAMEBUFFER,null),se.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else nn?A.isDataTexture||A.isData3DTexture?F.texSubImage3D(gt,xe,$e,at,_t,Ce,De,Pe,lt,ke,ft.data):q.isCompressedArrayTexture?F.compressedTexSubImage3D(gt,xe,$e,at,_t,Ce,De,Pe,lt,ft.data):F.texSubImage3D(gt,xe,$e,at,_t,Ce,De,Pe,lt,ke,ft):A.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,xe,$e,at,Ce,De,lt,ke,ft.data):A.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,xe,$e,at,ft.width,ft.height,lt,ft.data):F.texSubImage2D(F.TEXTURE_2D,xe,$e,at,Ce,De,lt,ke,ft);F.pixelStorei(F.UNPACK_ROW_LENGTH,tt),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Zt),F.pixelStorei(F.UNPACK_SKIP_PIXELS,ji),F.pixelStorei(F.UNPACK_SKIP_ROWS,jt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Bs),xe===0&&q.generateMipmaps&&F.generateMipmap(gt),se.unbindTexture()},this.initRenderTarget=function(A){le.get(A).__webglFramebuffer===void 0&&be.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?be.setTextureCube(A,0):A.isData3DTexture?be.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?be.setTexture2DArray(A,0):be.setTexture2D(A,0),se.unbindTexture()},this.resetState=function(){w=0,E=0,R=null,se.reset(),he.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Qe._getUnpackColorSpace()}};var nd={POSITION:["byte","byte normalized","unsigned byte","unsigned byte normalized","short","short normalized","unsigned short","unsigned short normalized"],NORMAL:["byte normalized","short normalized"],TANGENT:["byte normalized","short normalized"],TEXCOORD:["byte","byte normalized","unsigned byte","short","short normalized","unsigned short"]},qi=class{constructor(){this.textureUtils=null,this.pluginCallbacks=[],this.register(function(e){return new Qc(e)}),this.register(function(e){return new el(e)}),this.register(function(e){return new sl(e)}),this.register(function(e){return new rl(e)}),this.register(function(e){return new ol(e)}),this.register(function(e){return new al(e)}),this.register(function(e){return new tl(e)}),this.register(function(e){return new nl(e)}),this.register(function(e){return new il(e)}),this.register(function(e){return new cl(e)}),this.register(function(e){return new ll(e)}),this.register(function(e){return new hl(e)}),this.register(function(e){return new ul(e)}),this.register(function(e){return new dl(e)})}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}setTextureUtils(e){return this.textureUtils=e,this}parse(e,t,n,i){let r=new $c,o=[];for(let a=0,l=this.pluginCallbacks.length;a<l;a++)o.push(this.pluginCallbacks[a](r));r.setPlugins(o),r.setTextureUtils(this.textureUtils),r.writeAsync(e,t,i).catch(n)}parseAsync(e,t){let n=this;return new Promise(function(i,r){n.parse(e,i,r,t)})}},je={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,BYTE:5120,UNSIGNED_BYTE:5121,SHORT:5122,UNSIGNED_SHORT:5123,INT:5124,UNSIGNED_INT:5125,FLOAT:5126,ARRAY_BUFFER:34962,ELEMENT_ARRAY_BUFFER:34963,NEAREST:9728,LINEAR:9729,NEAREST_MIPMAP_NEAREST:9984,LINEAR_MIPMAP_NEAREST:9985,NEAREST_MIPMAP_LINEAR:9986,LINEAR_MIPMAP_LINEAR:9987,CLAMP_TO_EDGE:33071,MIRRORED_REPEAT:33648,REPEAT:10497},jc="KHR_mesh_quantization",tn={};tn[wt]=je.NEAREST;tn[Es]=je.NEAREST_MIPMAP_NEAREST;tn[ei]=je.NEAREST_MIPMAP_LINEAR;tn[Dt]=je.LINEAR;tn[xi]=je.LINEAR_MIPMAP_NEAREST;tn[en]=je.LINEAR_MIPMAP_LINEAR;tn[on]=je.CLAMP_TO_EDGE;tn[an]=je.REPEAT;tn[hi]=je.MIRRORED_REPEAT;var id={scale:"scale",position:"translation",quaternion:"rotation",morphTargetInfluences:"weights"},ox=new Ie,sd=12,ax=1179937895,cx=2,rd=8,lx=1313821514,hx=5130562;function Er(s,e){return s.length===e.length&&s.every(function(t,n){return t===e[n]})}function ux(s){return new TextEncoder().encode(s).buffer}function dx(s){return Er(s.elements,[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}function fx(s,e,t){let n={min:new Array(s.itemSize).fill(Number.POSITIVE_INFINITY),max:new Array(s.itemSize).fill(Number.NEGATIVE_INFINITY)};for(let i=e;i<e+t;i++)for(let r=0;r<s.itemSize;r++){let o;s.itemSize>4?o=s.array[i*s.itemSize+r]:(r===0?o=s.getX(i):r===1?o=s.getY(i):r===2?o=s.getZ(i):r===3&&(o=s.getW(i)),s.normalized===!0&&(o=ti.normalize(o,s.array))),n.min[r]=Math.min(n.min[r],o),n.max[r]=Math.max(n.max[r],o)}return n}function ad(s){return Math.ceil(s/4)*4}function Jc(s,e=0){let t=ad(s.byteLength);if(t!==s.byteLength){let n=new Uint8Array(t);if(n.set(new Uint8Array(s)),e!==0)for(let i=s.byteLength;i<t;i++)n[i]=e;return n.buffer}return s}function od(){return typeof document>"u"&&typeof OffscreenCanvas<"u"?new OffscreenCanvas(1,1):document.createElement("canvas")}function px(s,e){if(typeof OffscreenCanvas<"u"&&s instanceof OffscreenCanvas){let t;return e==="image/jpeg"?t=.92:e==="image/webp"&&(t=.8),s.convertToBlob({type:e,quality:t})}else return new Promise(t=>s.toBlob(t,e))}var $c=class{constructor(){this.plugins=[],this.options={},this.pending=[],this.buffers=[],this.byteOffset=0,this.buffers=[],this.nodeMap=new Map,this.skins=[],this.extensionsUsed={},this.extensionsRequired={},this.uids=new Map,this.uid=0,this.json={asset:{version:"2.0",generator:"THREE.GLTFExporter r180"}},this.cache={meshes:new Map,attributes:new Map,attributesNormalized:new Map,materials:new Map,textures:new Map,images:new Map},this.textureUtils=null}setPlugins(e){this.plugins=e}setTextureUtils(e){this.textureUtils=e}async writeAsync(e,t,n={}){this.options=Object.assign({binary:!1,trs:!1,onlyVisible:!0,maxTextureSize:1/0,animations:[],includeCustomExtensions:!1},n),this.options.animations.length>0&&(this.options.trs=!0),await this.processInputAsync(e),await Promise.all(this.pending);let i=this,r=i.buffers,o=i.json;n=i.options;let a=i.extensionsUsed,l=i.extensionsRequired,c=new Blob(r,{type:"application/octet-stream"}),u=Object.keys(a),h=Object.keys(l);if(u.length>0&&(o.extensionsUsed=u),h.length>0&&(o.extensionsRequired=h),o.buffers&&o.buffers.length>0&&(o.buffers[0].byteLength=c.size),n.binary===!0){let d=new FileReader;d.readAsArrayBuffer(c),d.onloadend=function(){let f=Jc(d.result),g=new DataView(new ArrayBuffer(rd));g.setUint32(0,f.byteLength,!0),g.setUint32(4,hx,!0);let x=Jc(ux(JSON.stringify(o)),32),m=new DataView(new ArrayBuffer(rd));m.setUint32(0,x.byteLength,!0),m.setUint32(4,lx,!0);let p=new ArrayBuffer(sd),b=new DataView(p);b.setUint32(0,ax,!0),b.setUint32(4,cx,!0);let v=sd+m.byteLength+x.byteLength+g.byteLength+f.byteLength;b.setUint32(8,v,!0);let _=new Blob([p,m,x,g,f],{type:"application/octet-stream"}),T=new FileReader;T.readAsArrayBuffer(_),T.onloadend=function(){t(T.result)}}}else if(o.buffers&&o.buffers.length>0){let d=new FileReader;d.readAsDataURL(c),d.onloadend=function(){let f=d.result;o.buffers[0].uri=f,t(o)}}else t(o)}serializeUserData(e,t){if(Object.keys(e.userData).length===0)return;let n=this.options,i=this.extensionsUsed;try{let r=JSON.parse(JSON.stringify(e.userData));if(n.includeCustomExtensions&&r.gltfExtensions){t.extensions===void 0&&(t.extensions={});for(let o in r.gltfExtensions)t.extensions[o]=r.gltfExtensions[o],i[o]=!0;delete r.gltfExtensions}Object.keys(r).length>0&&(t.extras=r)}catch(r){console.warn("THREE.GLTFExporter: userData of '"+e.name+"' won't be serialized because of JSON.stringify error - "+r.message)}}getUID(e,t=!1){if(this.uids.has(e)===!1){let i=new Map;i.set(!0,this.uid++),i.set(!1,this.uid++),this.uids.set(e,i)}return this.uids.get(e).get(t)}isNormalizedNormalAttribute(e){if(this.cache.attributesNormalized.has(e))return!1;let n=new O;for(let i=0,r=e.count;i<r;i++)if(Math.abs(n.fromBufferAttribute(e,i).length()-1)>5e-4)return!1;return!0}createNormalizedNormalAttribute(e){let t=this.cache;if(t.attributesNormalized.has(e))return t.attributesNormalized.get(e);let n=e.clone(),i=new O;for(let r=0,o=n.count;r<o;r++)i.fromBufferAttribute(n,r),i.x===0&&i.y===0&&i.z===0?i.setX(1):i.normalize(),n.setXYZ(r,i.x,i.y,i.z);return t.attributesNormalized.set(e,n),n}applyTextureTransform(e,t){let n=!1,i={};(t.offset.x!==0||t.offset.y!==0)&&(i.offset=t.offset.toArray(),n=!0),t.rotation!==0&&(i.rotation=t.rotation,n=!0),(t.repeat.x!==1||t.repeat.y!==1)&&(i.scale=t.repeat.toArray(),n=!0),n&&(e.extensions=e.extensions||{},e.extensions.KHR_texture_transform=i,this.extensionsUsed.KHR_texture_transform=!0)}async buildMetalRoughTextureAsync(e,t){if(e===t)return e;function n(f){return f.colorSpace===dt?function(x){return x<.04045?x*.0773993808:Math.pow(x*.9478672986+.0521327014,2.4)}:function(x){return x}}e instanceof Ui&&(e=await this.decompressTextureAsync(e)),t instanceof Ui&&(t=await this.decompressTextureAsync(t));let i=e?e.image:null,r=t?t.image:null,o=Math.max(i?i.width:0,r?r.width:0),a=Math.max(i?i.height:0,r?r.height:0),l=od();l.width=o,l.height=a;let c=l.getContext("2d",{willReadFrequently:!0});c.fillStyle="#00ffff",c.fillRect(0,0,o,a);let u=c.getImageData(0,0,o,a);if(i){c.drawImage(i,0,0,o,a);let f=n(e),g=c.getImageData(0,0,o,a).data;for(let x=2;x<g.length;x+=4)u.data[x]=f(g[x]/256)*256}if(r){c.drawImage(r,0,0,o,a);let f=n(t),g=c.getImageData(0,0,o,a).data;for(let x=1;x<g.length;x+=4)u.data[x]=f(g[x]/256)*256}c.putImageData(u,0,0);let d=(e||t).clone();return d.source=new ui(l),d.colorSpace=Tn,d.channel=(e||t).channel,e&&t&&e.channel!==t.channel&&console.warn("THREE.GLTFExporter: UV channels for metalnessMap and roughnessMap textures must match."),console.warn("THREE.GLTFExporter: Merged metalnessMap and roughnessMap textures."),d}async decompressTextureAsync(e,t=1/0){if(this.textureUtils===null)throw new Error("THREE.GLTFExporter: setTextureUtils() must be called to process compressed textures.");return await this.textureUtils.decompress(e,t)}processBuffer(e){let t=this.json,n=this.buffers;return t.buffers||(t.buffers=[{byteLength:0}]),n.push(e),0}processBufferView(e,t,n,i,r){let o=this.json;o.bufferViews||(o.bufferViews=[]);let a;switch(t){case je.BYTE:case je.UNSIGNED_BYTE:a=1;break;case je.SHORT:case je.UNSIGNED_SHORT:a=2;break;default:a=4}let l=e.itemSize*a;r===je.ARRAY_BUFFER&&(l=Math.ceil(l/4)*4);let c=ad(i*l),u=new DataView(new ArrayBuffer(c)),h=0;for(let g=n;g<n+i;g++){for(let x=0;x<e.itemSize;x++){let m;e.itemSize>4?m=e.array[g*e.itemSize+x]:(x===0?m=e.getX(g):x===1?m=e.getY(g):x===2?m=e.getZ(g):x===3&&(m=e.getW(g)),e.normalized===!0&&(m=ti.normalize(m,e.array))),t===je.FLOAT?u.setFloat32(h,m,!0):t===je.INT?u.setInt32(h,m,!0):t===je.UNSIGNED_INT?u.setUint32(h,m,!0):t===je.SHORT?u.setInt16(h,m,!0):t===je.UNSIGNED_SHORT?u.setUint16(h,m,!0):t===je.BYTE?u.setInt8(h,m):t===je.UNSIGNED_BYTE&&u.setUint8(h,m),h+=a}h%l!==0&&(h+=l-h%l)}let d={buffer:this.processBuffer(u.buffer),byteOffset:this.byteOffset,byteLength:c};return r!==void 0&&(d.target=r),r===je.ARRAY_BUFFER&&(d.byteStride=l),this.byteOffset+=c,o.bufferViews.push(d),{id:o.bufferViews.length-1,byteLength:0}}processBufferViewImage(e){let t=this,n=t.json;return n.bufferViews||(n.bufferViews=[]),new Promise(function(i){let r=new FileReader;r.readAsArrayBuffer(e),r.onloadend=function(){let o=Jc(r.result),a={buffer:t.processBuffer(o),byteOffset:t.byteOffset,byteLength:o.byteLength};t.byteOffset+=o.byteLength,i(n.bufferViews.push(a)-1)}})}processAccessor(e,t,n,i){let r=this.json,o={1:"SCALAR",2:"VEC2",3:"VEC3",4:"VEC4",9:"MAT3",16:"MAT4"},a;if(e.array.constructor===Float32Array)a=je.FLOAT;else if(e.array.constructor===Int32Array)a=je.INT;else if(e.array.constructor===Uint32Array)a=je.UNSIGNED_INT;else if(e.array.constructor===Int16Array)a=je.SHORT;else if(e.array.constructor===Uint16Array)a=je.UNSIGNED_SHORT;else if(e.array.constructor===Int8Array)a=je.BYTE;else if(e.array.constructor===Uint8Array)a=je.UNSIGNED_BYTE;else throw new Error("THREE.GLTFExporter: Unsupported bufferAttribute component type: "+e.array.constructor.name);if(n===void 0&&(n=0),(i===void 0||i===1/0)&&(i=e.count),i===0)return null;let l=fx(e,n,i),c;t!==void 0&&(c=e===t.index?je.ELEMENT_ARRAY_BUFFER:je.ARRAY_BUFFER);let u=this.processBufferView(e,a,n,i,c),h={bufferView:u.id,byteOffset:u.byteOffset,componentType:a,count:i,max:l.max,min:l.min,type:o[e.itemSize]};return e.normalized===!0&&(h.normalized=!0),r.accessors||(r.accessors=[]),r.accessors.push(h)-1}processImage(e,t,n,i="image/png"){if(e!==null){let r=this,o=r.cache,a=r.json,l=r.options,c=r.pending;o.images.has(e)||o.images.set(e,{});let u=o.images.get(e),h=i+":flipY/"+n.toString();if(u[h]!==void 0)return u[h];a.images||(a.images=[]);let d={mimeType:i},f=od();f.width=Math.min(e.width,l.maxTextureSize),f.height=Math.min(e.height,l.maxTextureSize);let g=f.getContext("2d",{willReadFrequently:!0});if(n===!0&&(g.translate(0,f.height),g.scale(1,-1)),e.data!==void 0){t!==Vt&&console.error("GLTFExporter: Only RGBAFormat is supported.",t),(e.width>l.maxTextureSize||e.height>l.maxTextureSize)&&console.warn("GLTFExporter: Image size is bigger than maxTextureSize",e);let m=new Uint8ClampedArray(e.height*e.width*4);for(let p=0;p<m.length;p+=4)m[p+0]=e.data[p+0],m[p+1]=e.data[p+1],m[p+2]=e.data[p+2],m[p+3]=e.data[p+3];g.putImageData(new ImageData(m,e.width,e.height),0,0)}else if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap||typeof OffscreenCanvas<"u"&&e instanceof OffscreenCanvas)g.drawImage(e,0,0,f.width,f.height);else throw new Error("THREE.GLTFExporter: Invalid image type. Use HTMLImageElement, HTMLCanvasElement, ImageBitmap or OffscreenCanvas.");l.binary===!0?c.push(px(f,i).then(m=>r.processBufferViewImage(m)).then(m=>{d.bufferView=m})):d.uri=ms.getDataURL(f,i);let x=a.images.push(d)-1;return u[h]=x,x}else throw new Error("THREE.GLTFExporter: No valid image data found. Unable to process texture.")}processSampler(e){let t=this.json;t.samplers||(t.samplers=[]);let n={magFilter:tn[e.magFilter],minFilter:tn[e.minFilter],wrapS:tn[e.wrapS],wrapT:tn[e.wrapT]};return t.samplers.push(n)-1}async processTextureAsync(e){let n=this.options,i=this.cache,r=this.json;if(i.textures.has(e))return i.textures.get(e);r.textures||(r.textures=[]),e instanceof Ui&&(e=await this.decompressTextureAsync(e,n.maxTextureSize));let o=e.userData.mimeType;o==="image/webp"&&(o="image/png");let a={sampler:this.processSampler(e),source:this.processImage(e.image,e.format,e.flipY,o)};e.name&&(a.name=e.name),await this._invokeAllAsync(async function(c){c.writeTexture&&await c.writeTexture(e,a)});let l=r.textures.push(a)-1;return i.textures.set(e,l),l}async processMaterialAsync(e){let t=this.cache,n=this.json;if(t.materials.has(e))return t.materials.get(e);if(e.isShaderMaterial)return console.warn("GLTFExporter: THREE.ShaderMaterial not supported."),null;n.materials||(n.materials=[]);let i={pbrMetallicRoughness:{}};e.isMeshStandardMaterial!==!0&&e.isMeshBasicMaterial!==!0&&console.warn("GLTFExporter: Use MeshStandardMaterial or MeshBasicMaterial for best results.");let r=e.color.toArray().concat([e.opacity]);if(Er(r,[1,1,1,1])||(i.pbrMetallicRoughness.baseColorFactor=r),e.isMeshStandardMaterial?(i.pbrMetallicRoughness.metallicFactor=e.metalness,i.pbrMetallicRoughness.roughnessFactor=e.roughness):(i.pbrMetallicRoughness.metallicFactor=0,i.pbrMetallicRoughness.roughnessFactor=1),e.metalnessMap||e.roughnessMap){let a=await this.buildMetalRoughTextureAsync(e.metalnessMap,e.roughnessMap),l={index:await this.processTextureAsync(a),texCoord:a.channel};this.applyTextureTransform(l,a),i.pbrMetallicRoughness.metallicRoughnessTexture=l}if(e.map){let a={index:await this.processTextureAsync(e.map),texCoord:e.map.channel};this.applyTextureTransform(a,e.map),i.pbrMetallicRoughness.baseColorTexture=a}if(e.emissive){let a=e.emissive;if(Math.max(a.r,a.g,a.b)>0&&(i.emissiveFactor=e.emissive.toArray()),e.emissiveMap){let c={index:await this.processTextureAsync(e.emissiveMap),texCoord:e.emissiveMap.channel};this.applyTextureTransform(c,e.emissiveMap),i.emissiveTexture=c}}if(e.normalMap){let a={index:await this.processTextureAsync(e.normalMap),texCoord:e.normalMap.channel};e.normalScale&&e.normalScale.x!==1&&(a.scale=e.normalScale.x),this.applyTextureTransform(a,e.normalMap),i.normalTexture=a}if(e.aoMap){let a={index:await this.processTextureAsync(e.aoMap),texCoord:e.aoMap.channel};e.aoMapIntensity!==1&&(a.strength=e.aoMapIntensity),this.applyTextureTransform(a,e.aoMap),i.occlusionTexture=a}e.transparent?i.alphaMode="BLEND":e.alphaTest>0&&(i.alphaMode="MASK",i.alphaCutoff=e.alphaTest),e.side===bt&&(i.doubleSided=!0),e.name!==""&&(i.name=e.name),this.serializeUserData(e,i),await this._invokeAllAsync(async function(a){a.writeMaterialAsync&&await a.writeMaterialAsync(e,i)});let o=n.materials.push(i)-1;return t.materials.set(e,o),o}async processMeshAsync(e){let t=this.cache,n=this.json,i=[e.geometry.uuid];if(Array.isArray(e.material))for(let _=0,T=e.material.length;_<T;_++)i.push(e.material[_].uuid);else i.push(e.material.uuid);let r=i.join(":");if(t.meshes.has(r))return t.meshes.get(r);let o=e.geometry,a;e.isLineSegments?a=je.LINES:e.isLineLoop?a=je.LINE_LOOP:e.isLine?a=je.LINE_STRIP:e.isPoints?a=je.POINTS:a=e.material.wireframe?je.LINES:je.TRIANGLES;let l={},c={},u=[],h=[],d={uv:"TEXCOORD_0",uv1:"TEXCOORD_1",uv2:"TEXCOORD_2",uv3:"TEXCOORD_3",color:"COLOR_0",skinWeight:"WEIGHTS_0",skinIndex:"JOINTS_0"},f=o.getAttribute("normal");f!==void 0&&!this.isNormalizedNormalAttribute(f)&&(console.warn("THREE.GLTFExporter: Creating normalized normal attribute from the non-normalized one."),o.setAttribute("normal",this.createNormalizedNormalAttribute(f)));let g=null;for(let _ in o.attributes){if(_.slice(0,5)==="morph")continue;let T=o.attributes[_];if(_=d[_]||_.toUpperCase(),/^(POSITION|NORMAL|TANGENT|TEXCOORD_\d+|COLOR_\d+|JOINTS_\d+|WEIGHTS_\d+)$/.test(_)||(_="_"+_),t.attributes.has(this.getUID(T))){c[_]=t.attributes.get(this.getUID(T));continue}g=null;let E=T.array;_==="JOINTS_0"&&!(E instanceof Uint16Array)&&!(E instanceof Uint8Array)?(console.warn('GLTFExporter: Attribute "skinIndex" converted to type UNSIGNED_SHORT.'),g=new et(new Uint16Array(E),T.itemSize,T.normalized)):(E instanceof Uint32Array||E instanceof Int32Array)&&!_.startsWith("_")&&(console.warn(`GLTFExporter: Attribute "${_}" converted to type FLOAT.`),g=qi.Utils.toFloat32BufferAttribute(T));let R=this.processAccessor(g||T,o);R!==null&&(_.startsWith("_")||this.detectMeshQuantization(_,T),c[_]=R,t.attributes.set(this.getUID(T),R))}if(f!==void 0&&o.setAttribute("normal",f),Object.keys(c).length===0)return null;if(e.morphTargetInfluences!==void 0&&e.morphTargetInfluences.length>0){let _=[],T=[],w={};if(e.morphTargetDictionary!==void 0)for(let E in e.morphTargetDictionary)w[e.morphTargetDictionary[E]]=E;for(let E=0;E<e.morphTargetInfluences.length;++E){let R={},y=!1;for(let M in o.morphAttributes){if(M!=="position"&&M!=="normal"){y||(console.warn("GLTFExporter: Only POSITION and NORMAL morph are supported."),y=!0);continue}let P=o.morphAttributes[M][E],L=M.toUpperCase(),N=o.attributes[M];if(t.attributes.has(this.getUID(P,!0))){R[L]=t.attributes.get(this.getUID(P,!0));continue}let k=P.clone();if(!o.morphTargetsRelative)for(let G=0,V=P.count;G<V;G++)for(let j=0;j<P.itemSize;j++)j===0&&k.setX(G,P.getX(G)-N.getX(G)),j===1&&k.setY(G,P.getY(G)-N.getY(G)),j===2&&k.setZ(G,P.getZ(G)-N.getZ(G)),j===3&&k.setW(G,P.getW(G)-N.getW(G));R[L]=this.processAccessor(k,o),t.attributes.set(this.getUID(N,!0),R[L])}h.push(R),_.push(e.morphTargetInfluences[E]),e.morphTargetDictionary!==void 0&&T.push(w[E])}l.weights=_,T.length>0&&(l.extras={},l.extras.targetNames=T)}let x=Array.isArray(e.material);if(x&&o.groups.length===0)return null;let m=!1;if(x&&o.index===null){let _=[];for(let T=0,w=o.attributes.position.count;T<w;T++)_[T]=T;o.setIndex(_),m=!0}let p=x?e.material:[e.material],b=x?o.groups:[{materialIndex:0,start:void 0,count:void 0}];for(let _=0,T=b.length;_<T;_++){let w={mode:a,attributes:c};if(this.serializeUserData(o,w),h.length>0&&(w.targets=h),o.index!==null){let R=this.getUID(o.index);(b[_].start!==void 0||b[_].count!==void 0)&&(R+=":"+b[_].start+":"+b[_].count),t.attributes.has(R)?w.indices=t.attributes.get(R):(w.indices=this.processAccessor(o.index,o,b[_].start,b[_].count),t.attributes.set(R,w.indices)),w.indices===null&&delete w.indices}let E=await this.processMaterialAsync(p[b[_].materialIndex]);E!==null&&(w.material=E),u.push(w)}m===!0&&o.setIndex(null),l.primitives=u,n.meshes||(n.meshes=[]),await this._invokeAllAsync(function(_){_.writeMesh&&_.writeMesh(e,l)});let v=n.meshes.push(l)-1;return t.meshes.set(r,v),v}detectMeshQuantization(e,t){if(this.extensionsUsed[jc])return;let n;switch(t.array.constructor){case Int8Array:n="byte";break;case Uint8Array:n="unsigned byte";break;case Int16Array:n="short";break;case Uint16Array:n="unsigned short";break;default:return}t.normalized&&(n+=" normalized");let i=e.split("_",1)[0];nd[i]&&nd[i].includes(n)&&(this.extensionsUsed[jc]=!0,this.extensionsRequired[jc]=!0)}processCamera(e){let t=this.json;t.cameras||(t.cameras=[]);let n=e.isOrthographicCamera,i={type:n?"orthographic":"perspective"};return n?i.orthographic={xmag:e.right*2,ymag:e.top*2,zfar:e.far<=0?.001:e.far,znear:e.near<0?0:e.near}:i.perspective={aspectRatio:e.aspect,yfov:ti.degToRad(e.fov),zfar:e.far<=0?.001:e.far,znear:e.near<0?0:e.near},e.name!==""&&(i.name=e.type),t.cameras.push(i)-1}processAnimation(e,t){let n=this.json,i=this.nodeMap;n.animations||(n.animations=[]),e=qi.Utils.mergeMorphTargetTracks(e.clone(),t);let r=e.tracks,o=[],a=[];for(let c=0;c<r.length;++c){let u=r[c],h=nt.parseTrackName(u.name),d=nt.findNode(t,h.nodeName),f=id[h.propertyName];if(h.objectName==="bones"&&(d.isSkinnedMesh===!0?d=d.skeleton.getBoneByName(h.objectIndex):d=void 0),!d||!f){console.warn('THREE.GLTFExporter: Could not export animation track "%s".',u.name);continue}let g=1,x=u.values.length/u.times.length;f===id.morphTargetInfluences&&(x/=d.morphTargetInfluences.length);let m;u.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline===!0?(m="CUBICSPLINE",x/=3):u.getInterpolation()===Yn?m="STEP":m="LINEAR",a.push({input:this.processAccessor(new et(u.times,g)),output:this.processAccessor(new et(u.values,x)),interpolation:m}),o.push({sampler:a.length-1,target:{node:i.get(d),path:f}})}let l={name:e.name||"clip_"+n.animations.length,samplers:a,channels:o};return this.serializeUserData(e,l),n.animations.push(l),n.animations.length-1}processSkin(e){let t=this.json,n=this.nodeMap,i=t.nodes[n.get(e)],r=e.skeleton;if(r===void 0)return null;let o=e.skeleton.bones[0];if(o===void 0)return null;let a=[],l=new Float32Array(r.bones.length*16),c=new Xe;for(let h=0;h<r.bones.length;++h)a.push(n.get(r.bones[h])),c.copy(r.boneInverses[h]),c.multiply(e.bindMatrix).toArray(l,h*16);return t.skins===void 0&&(t.skins=[]),t.skins.push({inverseBindMatrices:this.processAccessor(new et(l,16)),joints:a,skeleton:n.get(o)}),i.skin=t.skins.length-1}async processNodeAsync(e){let t=this.json,n=this.options,i=this.nodeMap;t.nodes||(t.nodes=[]);let r={};if(n.trs){let a=e.quaternion.toArray(),l=e.position.toArray(),c=e.scale.toArray();Er(a,[0,0,0,1])||(r.rotation=a),Er(l,[0,0,0])||(r.translation=l),Er(c,[1,1,1])||(r.scale=c)}else e.matrixAutoUpdate&&e.updateMatrix(),dx(e.matrix)===!1&&(r.matrix=e.matrix.elements);if(e.name!==""&&(r.name=String(e.name)),this.serializeUserData(e,r),e.isMesh||e.isLine||e.isPoints){let a=await this.processMeshAsync(e);a!==null&&(r.mesh=a)}else e.isCamera&&(r.camera=this.processCamera(e));e.isSkinnedMesh&&this.skins.push(e);let o=t.nodes.push(r)-1;if(i.set(e,o),e.children.length>0){let a=[];for(let l=0,c=e.children.length;l<c;l++){let u=e.children[l];if(u.visible||n.onlyVisible===!1){let h=await this.processNodeAsync(u);h!==null&&a.push(h)}}a.length>0&&(r.children=a)}return await this._invokeAllAsync(function(a){a.writeNode&&a.writeNode(e,r)}),o}async processSceneAsync(e){let t=this.json,n=this.options;t.scenes||(t.scenes=[],t.scene=0);let i={};e.name!==""&&(i.name=e.name),t.scenes.push(i);let r=[];for(let o=0,a=e.children.length;o<a;o++){let l=e.children[o];if(l.visible||n.onlyVisible===!1){let c=await this.processNodeAsync(l);c!==null&&r.push(c)}}r.length>0&&(i.nodes=r),this.serializeUserData(e,i)}async processObjectsAsync(e){let t=new In;t.name="AuxScene";for(let n=0;n<e.length;n++)t.children.push(e[n]);await this.processSceneAsync(t)}async processInputAsync(e){let t=this.options;e=e instanceof Array?e:[e],await this._invokeAllAsync(function(i){i.beforeParse&&i.beforeParse(e)});let n=[];for(let i=0;i<e.length;i++)e[i]instanceof In?await this.processSceneAsync(e[i]):n.push(e[i]);n.length>0&&await this.processObjectsAsync(n);for(let i=0;i<this.skins.length;++i)this.processSkin(this.skins[i]);for(let i=0;i<t.animations.length;++i)this.processAnimation(t.animations[i],e[0]);await this._invokeAllAsync(function(i){i.afterParse&&i.afterParse(e)})}async _invokeAllAsync(e){for(let t=0,n=this.plugins.length;t<n;t++)await e(this.plugins[t])}},Qc=class{constructor(e){this.writer=e,this.name="KHR_lights_punctual"}writeNode(e,t){if(!e.isLight)return;if(!e.isDirectionalLight&&!e.isPointLight&&!e.isSpotLight){console.warn("THREE.GLTFExporter: Only directional, point, and spot lights are supported.",e);return}let n=this.writer,i=n.json,r=n.extensionsUsed,o={};e.name&&(o.name=e.name),o.color=e.color.toArray(),o.intensity=e.intensity,e.isDirectionalLight?o.type="directional":e.isPointLight?(o.type="point",e.distance>0&&(o.range=e.distance)):e.isSpotLight&&(o.type="spot",e.distance>0&&(o.range=e.distance),o.spot={},o.spot.innerConeAngle=(1-e.penumbra)*e.angle,o.spot.outerConeAngle=e.angle),e.decay!==void 0&&e.decay!==2&&console.warn("THREE.GLTFExporter: Light decay may be lost. glTF is physically-based, and expects light.decay=2."),e.target&&(e.target.parent!==e||e.target.position.x!==0||e.target.position.y!==0||e.target.position.z!==-1)&&console.warn("THREE.GLTFExporter: Light direction may be lost. For best results, make light.target a child of the light with position 0,0,-1."),r[this.name]||(i.extensions=i.extensions||{},i.extensions[this.name]={lights:[]},r[this.name]=!0);let a=i.extensions[this.name].lights;a.push(o),t.extensions=t.extensions||{},t.extensions[this.name]={light:a.length-1}}},el=class{constructor(e){this.writer=e,this.name="KHR_materials_unlit"}async writeMaterialAsync(e,t){if(!e.isMeshBasicMaterial)return;let i=this.writer.extensionsUsed;t.extensions=t.extensions||{},t.extensions[this.name]={},i[this.name]=!0,t.pbrMetallicRoughness.metallicFactor=0,t.pbrMetallicRoughness.roughnessFactor=.9}},tl=class{constructor(e){this.writer=e,this.name="KHR_materials_clearcoat"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.clearcoat===0)return;let n=this.writer,i=n.extensionsUsed,r={};if(r.clearcoatFactor=e.clearcoat,e.clearcoatMap){let o={index:await n.processTextureAsync(e.clearcoatMap),texCoord:e.clearcoatMap.channel};n.applyTextureTransform(o,e.clearcoatMap),r.clearcoatTexture=o}if(r.clearcoatRoughnessFactor=e.clearcoatRoughness,e.clearcoatRoughnessMap){let o={index:await n.processTextureAsync(e.clearcoatRoughnessMap),texCoord:e.clearcoatRoughnessMap.channel};n.applyTextureTransform(o,e.clearcoatRoughnessMap),r.clearcoatRoughnessTexture=o}if(e.clearcoatNormalMap){let o={index:await n.processTextureAsync(e.clearcoatNormalMap),texCoord:e.clearcoatNormalMap.channel};e.clearcoatNormalScale.x!==1&&(o.scale=e.clearcoatNormalScale.x),n.applyTextureTransform(o,e.clearcoatNormalMap),r.clearcoatNormalTexture=o}t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}},nl=class{constructor(e){this.writer=e,this.name="KHR_materials_dispersion"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.dispersion===0)return;let i=this.writer.extensionsUsed,r={};r.dispersion=e.dispersion,t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}},il=class{constructor(e){this.writer=e,this.name="KHR_materials_iridescence"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.iridescence===0)return;let n=this.writer,i=n.extensionsUsed,r={};if(r.iridescenceFactor=e.iridescence,e.iridescenceMap){let o={index:await n.processTextureAsync(e.iridescenceMap),texCoord:e.iridescenceMap.channel};n.applyTextureTransform(o,e.iridescenceMap),r.iridescenceTexture=o}if(r.iridescenceIor=e.iridescenceIOR,r.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],r.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1],e.iridescenceThicknessMap){let o={index:await n.processTextureAsync(e.iridescenceThicknessMap),texCoord:e.iridescenceThicknessMap.channel};n.applyTextureTransform(o,e.iridescenceThicknessMap),r.iridescenceThicknessTexture=o}t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}},sl=class{constructor(e){this.writer=e,this.name="KHR_materials_transmission"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.transmission===0)return;let n=this.writer,i=n.extensionsUsed,r={};if(r.transmissionFactor=e.transmission,e.transmissionMap){let o={index:await n.processTextureAsync(e.transmissionMap),texCoord:e.transmissionMap.channel};n.applyTextureTransform(o,e.transmissionMap),r.transmissionTexture=o}t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}},rl=class{constructor(e){this.writer=e,this.name="KHR_materials_volume"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.transmission===0)return;let n=this.writer,i=n.extensionsUsed,r={};if(r.thicknessFactor=e.thickness,e.thicknessMap){let o={index:await n.processTextureAsync(e.thicknessMap),texCoord:e.thicknessMap.channel};n.applyTextureTransform(o,e.thicknessMap),r.thicknessTexture=o}e.attenuationDistance!==1/0&&(r.attenuationDistance=e.attenuationDistance),r.attenuationColor=e.attenuationColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}},ol=class{constructor(e){this.writer=e,this.name="KHR_materials_ior"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.ior===1.5)return;let i=this.writer.extensionsUsed,r={};r.ior=e.ior,t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}},al=class{constructor(e){this.writer=e,this.name="KHR_materials_specular"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.specularIntensity===1&&e.specularColor.equals(ox)&&!e.specularIntensityMap&&!e.specularColorMap)return;let n=this.writer,i=n.extensionsUsed,r={};if(e.specularIntensityMap){let o={index:await n.processTextureAsync(e.specularIntensityMap),texCoord:e.specularIntensityMap.channel};n.applyTextureTransform(o,e.specularIntensityMap),r.specularTexture=o}if(e.specularColorMap){let o={index:await n.processTextureAsync(e.specularColorMap),texCoord:e.specularColorMap.channel};n.applyTextureTransform(o,e.specularColorMap),r.specularColorTexture=o}r.specularFactor=e.specularIntensity,r.specularColorFactor=e.specularColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}},cl=class{constructor(e){this.writer=e,this.name="KHR_materials_sheen"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.sheen==0)return;let n=this.writer,i=n.extensionsUsed,r={};if(e.sheenRoughnessMap){let o={index:await n.processTextureAsync(e.sheenRoughnessMap),texCoord:e.sheenRoughnessMap.channel};n.applyTextureTransform(o,e.sheenRoughnessMap),r.sheenRoughnessTexture=o}if(e.sheenColorMap){let o={index:await n.processTextureAsync(e.sheenColorMap),texCoord:e.sheenColorMap.channel};n.applyTextureTransform(o,e.sheenColorMap),r.sheenColorTexture=o}r.sheenRoughnessFactor=e.sheenRoughness,r.sheenColorFactor=e.sheenColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}},ll=class{constructor(e){this.writer=e,this.name="KHR_materials_anisotropy"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.anisotropy==0)return;let n=this.writer,i=n.extensionsUsed,r={};if(e.anisotropyMap){let o={index:await n.processTextureAsync(e.anisotropyMap)};n.applyTextureTransform(o,e.anisotropyMap),r.anisotropyTexture=o}r.anisotropyStrength=e.anisotropy,r.anisotropyRotation=e.anisotropyRotation,t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}},hl=class{constructor(e){this.writer=e,this.name="KHR_materials_emissive_strength"}async writeMaterialAsync(e,t){if(!e.isMeshStandardMaterial||e.emissiveIntensity===1)return;let i=this.writer.extensionsUsed,r={};r.emissiveStrength=e.emissiveIntensity,t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}},ul=class{constructor(e){this.writer=e,this.name="EXT_materials_bump"}async writeMaterialAsync(e,t){if(!e.isMeshStandardMaterial||e.bumpScale===1&&!e.bumpMap)return;let n=this.writer,i=n.extensionsUsed,r={};if(e.bumpMap){let o={index:await n.processTextureAsync(e.bumpMap),texCoord:e.bumpMap.channel};n.applyTextureTransform(o,e.bumpMap),r.bumpTexture=o}r.bumpFactor=e.bumpScale,t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}},dl=class{constructor(e){this.writer=e,this.name="EXT_mesh_gpu_instancing"}writeNode(e,t){if(!e.isInstancedMesh)return;let n=this.writer,i=e,r=new Float32Array(i.count*3),o=new Float32Array(i.count*4),a=new Float32Array(i.count*3),l=new Xe,c=new O,u=new At,h=new O;for(let f=0;f<i.count;f++)i.getMatrixAt(f,l),l.decompose(c,u,h),c.toArray(r,f*3),u.toArray(o,f*4),h.toArray(a,f*3);let d={TRANSLATION:n.processAccessor(new et(r,3)),ROTATION:n.processAccessor(new et(o,4)),SCALE:n.processAccessor(new et(a,3))};i.instanceColor&&(d._COLOR_0=n.processAccessor(i.instanceColor)),t.extensions=t.extensions||{},t.extensions[this.name]={attributes:d},n.extensionsUsed[this.name]=!0,n.extensionsRequired[this.name]=!0}};qi.Utils={insertKeyframe:function(s,e){let n=s.getValueSize(),i=new s.TimeBufferType(s.times.length+1),r=new s.ValueBufferType(s.values.length+n),o=s.createInterpolant(new s.ValueBufferType(n)),a;if(s.times.length===0){i[0]=e;for(let l=0;l<n;l++)r[l]=0;a=0}else if(e<s.times[0]){if(Math.abs(s.times[0]-e)<.001)return 0;i[0]=e,i.set(s.times,1),r.set(o.evaluate(e),0),r.set(s.values,n),a=0}else if(e>s.times[s.times.length-1]){if(Math.abs(s.times[s.times.length-1]-e)<.001)return s.times.length-1;i[i.length-1]=e,i.set(s.times,0),r.set(s.values,0),r.set(o.evaluate(e),s.values.length),a=i.length-1}else for(let l=0;l<s.times.length;l++){if(Math.abs(s.times[l]-e)<.001)return l;if(s.times[l]<e&&s.times[l+1]>e){i.set(s.times.slice(0,l+1),0),i[l+1]=e,i.set(s.times.slice(l+1),l+2),r.set(s.values.slice(0,(l+1)*n),0),r.set(o.evaluate(e),(l+1)*n),r.set(s.values.slice((l+1)*n),(l+2)*n),a=l+1;break}}return s.times=i,s.values=r,a},mergeMorphTargetTracks:function(s,e){let t=[],n={},i=s.tracks;for(let r=0;r<i.length;++r){let o=i[r],a=nt.parseTrackName(o.name),l=nt.findNode(e,a.nodeName);if(a.propertyName!=="morphTargetInfluences"||a.propertyIndex===void 0){t.push(o);continue}if(o.createInterpolant!==o.InterpolantFactoryMethodDiscrete&&o.createInterpolant!==o.InterpolantFactoryMethodLinear){if(o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline)throw new Error("THREE.GLTFExporter: Cannot merge tracks with glTF CUBICSPLINE interpolation.");console.warn("THREE.GLTFExporter: Morph target interpolation mode not yet supported. Using LINEAR instead."),o=o.clone(),o.setInterpolation(qn)}let c=l.morphTargetInfluences.length,u=l.morphTargetDictionary[a.propertyIndex];if(u===void 0)throw new Error("THREE.GLTFExporter: Morph target name not found: "+a.propertyIndex);let h;if(n[l.uuid]===void 0){h=o.clone();let f=new h.ValueBufferType(c*h.times.length);for(let g=0;g<h.times.length;g++)f[g*c+u]=h.values[g];h.name=(a.nodeName||"")+".morphTargetInfluences",h.values=f,n[l.uuid]=h,t.push(h);continue}let d=o.createInterpolant(new o.ValueBufferType(1));h=n[l.uuid];for(let f=0;f<h.times.length;f++)h.values[f*c+u]=d.evaluate(h.times[f]);for(let f=0;f<o.times.length;f++){let g=this.insertKeyframe(h,o.times[f]);h.values[g*c+u]=o.values[f]}}return s.tracks=t,s},toFloat32BufferAttribute:function(s){let e=new et(new Float32Array(s.count*s.itemSize),s.itemSize,!1);if(!s.normalized&&!s.isInterleavedBufferAttribute)return e.array.set(s.array),e;for(let t=0,n=s.count;t<n;t++)for(let i=0;i<s.itemSize;i++)e.setComponent(t,i,s.getComponent(t,i));return e}};var Ki=(s,e,t)=>Math.max(e,Math.min(t,s)),yi=(s,e)=>(s.sort((t,n)=>t-n),s[Math.min(s.length-1,Math.floor(s.length*e))]||0);function cd(s,e,t){let r=Array.from({length:14},()=>[]),o=e.max.y-e.min.y,a=Math.max(e.max.x-e.min.x,e.max.z-e.min.z)/2,l=new O,c=new O,u=new O,h=0;s.object.traverse(E=>{if(!E.isMesh||!E.geometry?.attributes.position)return;let R=E.geometry,y=R.index,M=Math.floor((y?.count||R.attributes.position.count)/3),P=Math.max(1,Math.ceil(M/1e4));for(let L=0;L<M;L+=P){let N=L*3;E.getVertexPosition(y?y.getX(N):N,l),E.getVertexPosition(y?y.getX(N+1):N+1,c),E.getVertexPosition(y?y.getX(N+2):N+2,u),l.applyMatrix4(E.matrixWorld),c.applyMatrix4(E.matrixWorld),u.applyMatrix4(E.matrixWorld);let k=[l,c,u];h++;for(let G=0;G<14;G++){let V=e.min.y+o*(G+.5)/14;if(!(V<Math.min(l.y,c.y,u.y)||V>Math.max(l.y,c.y,u.y)))for(let j=0;j<3;j++){let H=k[j],ie=k[(j+1)%3];if(Math.abs(H.y-ie.y)<1e-9||(H.y-V)*(ie.y-V)>0)continue;let de=(V-H.y)/(ie.y-H.y);r[G].push([H.x+(ie.x-H.x)*de-t.x,H.z+(ie.z-H.z)*de-t.z])}}}});let d=r.map(E=>{if(!E.length)return null;let R=E.map(H=>H[0]),y=E.map(H=>H[1]),M=yi(R.slice(),.03),P=yi(R.slice(),.97),L=yi(y.slice(),.03),N=yi(y.slice(),.97),k=(M+P)/2,G=(L+N)/2,V=Array(16).fill(0);for(let[H,ie]of E){let de=Math.atan2(ie-G,H-k),pe=(Math.round(de/Math.PI/2*16)%16+16)%16;V[pe]=Math.max(V[pe],Math.hypot(H-k,ie-G))}let j=yi(V.filter(H=>H>0).slice(),.55);return{cx:k,cz:G,rx:Math.max(a*.13,(P-M)/2),rz:Math.max(a*.13,(N-L)/2),core:j,radials:V}});for(let E=0;E<14;E++)if(!d[E]){let R=0,y=1/0;for(let M=0;M<14;M++)d[M]&&Math.abs(E-M)<y&&(y=Math.abs(E-M),R=M);d[E]=d[R]?{...d[R],radials:[...d[R].radials]}:{cx:0,cz:0,rx:a,rz:a,core:a,radials:Array(16).fill(a)}}let f=d.map((E,R)=>{let y=d.slice(Math.max(0,R-1),Math.min(14,R+2));return{...E,...Object.fromEntries(["cx","cz","rx","rz","core"].map(M=>[M,y.reduce((P,L)=>P+L[M],0)/y.length]))}}),g=f.slice(0,4).reduce((E,R)=>E+R.core,0)/4,x=f.slice(-4).reduce((E,R)=>E+R.core,0)/4,m=g>x*1.18,p=yi(d.map(E=>E.cx),.5),b=yi(d.map(E=>E.cz),.5);for(let E=0;E<14;E++)if(r[E].length){let R=Array(16).fill(0);for(let[y,M]of r[E]){let P=Math.atan2(M-b,y-p),L=(Math.round(P/Math.PI/2*16)%16+16)%16;R[L]=Math.max(R[L],Math.hypot(y-p,M-b))}d[E].radials=R}let v=[];for(let E=2;E<12;E++){let R=d[E],y=R.radials.filter(P=>P>0),M=Math.max(a*.18,yi(y.slice(),.45));for(let P=0;P<16;P++){let L=R.radials[P],N=R.radials[(P+16-1)%16],k=R.radials[(P+1)%16];L>M*1.75&&L>a*.48&&Math.max(N,k)<L*.88&&v.push({sourceT:(E+.5)/14,angle:P/16*Math.PI*2,prominence:L/M,sourceReach:L})}}let _=[];for(let E of v.sort((R,y)=>y.prominence-R.prominence))if(!_.some(R=>Math.abs(Math.atan2(Math.sin(R.angle-E.angle),Math.cos(R.angle-E.angle)))<.65)&&(_.push({...E,t:Ki(m?1-E.sourceT:E.sourceT,.24,.72),length:Ki(E.sourceReach*.95,.35,Math.min(2.1,a*1.7)),width:Ki(a*.2,.1,.34)}),_.length===3))break;let T=Math.max(...f.map(E=>Math.max(E.rx,E.rz)),a*.1),w=(m?[...f].reverse():f).map(E=>({x:E.cx*.38,z:E.cz*.38,rx:Ki(E.rx/T,.18,1),rz:Ki(E.rz/T,.18,1)}));return{method:"mesh-cross-sections-v1",sampledFaces:h,inverted:m,profile:w,branches:_}}function ld(s,e){let t=s.growth.profile,n=Ki(e,0,1)*(t.length-1),i=Math.floor(n),r=Math.min(i+1,t.length-1),o=n-i,a=o*o*(3-2*o),l=t[i],c=t[r],u=g=>l[g]+(c[g]-l[g])*a,h=Ki((e-.58)/.42,0,1),d=h*h*(3-2*h)*(.85+s.radius*.4),f=1-h*h;return{x:s.x+u("x")*f,z:s.z+u("z")*f,rx:s.radius*(.26+.7*u("rx"))+d,rz:s.radius*(.26+.7*u("rz"))+d}}var xa=class extends ht{constructor(e,t,n=!1,i=!1,r=1e4){let o=new yt;super(o,t),this.isMarchingCubes=!0;let a=this,l=new Float32Array(36),c=new Float32Array(36),u=new Float32Array(36);this.enableUvs=n,this.enableColors=i,this.init=function(b){this.resolution=b,this.isolation=80,this.size=b,this.size2=this.size*this.size,this.size3=this.size2*this.size,this.halfsize=this.size/2,this.delta=2/this.size,this.yd=this.size,this.zd=this.size2,this.field=new Float32Array(this.size3),this.normal_cache=new Float32Array(this.size3*3),this.palette=new Float32Array(this.size3*3),this.count=0;let v=r*3;this.positionArray=new Float32Array(v*3);let _=new et(this.positionArray,3);_.setUsage(Is),o.setAttribute("position",_),this.normalArray=new Float32Array(v*3);let T=new et(this.normalArray,3);if(T.setUsage(Is),o.setAttribute("normal",T),this.enableUvs){this.uvArray=new Float32Array(v*2);let w=new et(this.uvArray,2);w.setUsage(Is),o.setAttribute("uv",w)}if(this.enableColors){this.colorArray=new Float32Array(v*3);let w=new et(this.colorArray,3);w.setUsage(Is),o.setAttribute("color",w)}o.boundingSphere=new Ot(new O,1)};function h(b,v,_){return b+(v-b)*_}function d(b,v,_,T,w,E,R,y,M,P){let L=(_-R)/(y-R),N=a.normal_cache;l[v+0]=T+L*a.delta,l[v+1]=w,l[v+2]=E,c[v+0]=h(N[b+0],N[b+3],L),c[v+1]=h(N[b+1],N[b+4],L),c[v+2]=h(N[b+2],N[b+5],L),u[v+0]=h(a.palette[M*3+0],a.palette[P*3+0],L),u[v+1]=h(a.palette[M*3+1],a.palette[P*3+1],L),u[v+2]=h(a.palette[M*3+2],a.palette[P*3+2],L)}function f(b,v,_,T,w,E,R,y,M,P){let L=(_-R)/(y-R),N=a.normal_cache;l[v+0]=T,l[v+1]=w+L*a.delta,l[v+2]=E;let k=b+a.yd*3;c[v+0]=h(N[b+0],N[k+0],L),c[v+1]=h(N[b+1],N[k+1],L),c[v+2]=h(N[b+2],N[k+2],L),u[v+0]=h(a.palette[M*3+0],a.palette[P*3+0],L),u[v+1]=h(a.palette[M*3+1],a.palette[P*3+1],L),u[v+2]=h(a.palette[M*3+2],a.palette[P*3+2],L)}function g(b,v,_,T,w,E,R,y,M,P){let L=(_-R)/(y-R),N=a.normal_cache;l[v+0]=T,l[v+1]=w,l[v+2]=E+L*a.delta;let k=b+a.zd*3;c[v+0]=h(N[b+0],N[k+0],L),c[v+1]=h(N[b+1],N[k+1],L),c[v+2]=h(N[b+2],N[k+2],L),u[v+0]=h(a.palette[M*3+0],a.palette[P*3+0],L),u[v+1]=h(a.palette[M*3+1],a.palette[P*3+1],L),u[v+2]=h(a.palette[M*3+2],a.palette[P*3+2],L)}function x(b){let v=b*3;a.normal_cache[v]===0&&(a.normal_cache[v+0]=a.field[b-1]-a.field[b+1],a.normal_cache[v+1]=a.field[b-a.yd]-a.field[b+a.yd],a.normal_cache[v+2]=a.field[b-a.zd]-a.field[b+a.zd])}function m(b,v,_,T,w){let E=T+1,R=T+a.yd,y=T+a.zd,M=E+a.yd,P=E+a.zd,L=T+a.yd+a.zd,N=E+a.yd+a.zd,k=0,G=a.field[T],V=a.field[E],j=a.field[R],H=a.field[M],ie=a.field[y],de=a.field[P],pe=a.field[L],ye=a.field[N];G<w&&(k|=1),V<w&&(k|=2),j<w&&(k|=8),H<w&&(k|=4),ie<w&&(k|=16),de<w&&(k|=32),pe<w&&(k|=128),ye<w&&(k|=64);let Ee=mx[k];if(Ee===0)return 0;let Fe=a.delta,He=b+Fe,$=v+Fe,te=_+Fe;Ee&1&&(x(T),x(E),d(T*3,0,w,b,v,_,G,V,T,E)),Ee&2&&(x(E),x(M),f(E*3,3,w,He,v,_,V,H,E,M)),Ee&4&&(x(R),x(M),d(R*3,6,w,b,$,_,j,H,R,M)),Ee&8&&(x(T),x(R),f(T*3,9,w,b,v,_,G,j,T,R)),Ee&16&&(x(y),x(P),d(y*3,12,w,b,v,te,ie,de,y,P)),Ee&32&&(x(P),x(N),f(P*3,15,w,He,v,te,de,ye,P,N)),Ee&64&&(x(L),x(N),d(L*3,18,w,b,$,te,pe,ye,L,N)),Ee&128&&(x(y),x(L),f(y*3,21,w,b,v,te,ie,pe,y,L)),Ee&256&&(x(T),x(y),g(T*3,24,w,b,v,_,G,ie,T,y)),Ee&512&&(x(E),x(P),g(E*3,27,w,He,v,_,V,de,E,P)),Ee&1024&&(x(M),x(N),g(M*3,30,w,He,$,_,H,ye,M,N)),Ee&2048&&(x(R),x(L),g(R*3,33,w,b,$,_,j,pe,R,L)),k<<=4;let _e,Re,ve,Ne=0,Ye=0;for(;ga[k+Ye]!=-1;)_e=k+Ye,Re=_e+1,ve=_e+2,p(l,c,u,3*ga[_e],3*ga[Re],3*ga[ve]),Ye+=3,Ne++;return Ne}function p(b,v,_,T,w,E){let R=a.count*3;if(a.positionArray[R+0]=b[T],a.positionArray[R+1]=b[T+1],a.positionArray[R+2]=b[T+2],a.positionArray[R+3]=b[w],a.positionArray[R+4]=b[w+1],a.positionArray[R+5]=b[w+2],a.positionArray[R+6]=b[E],a.positionArray[R+7]=b[E+1],a.positionArray[R+8]=b[E+2],a.material.flatShading===!0){let y=(v[T+0]+v[w+0]+v[E+0])/3,M=(v[T+1]+v[w+1]+v[E+1])/3,P=(v[T+2]+v[w+2]+v[E+2])/3;a.normalArray[R+0]=y,a.normalArray[R+1]=M,a.normalArray[R+2]=P,a.normalArray[R+3]=y,a.normalArray[R+4]=M,a.normalArray[R+5]=P,a.normalArray[R+6]=y,a.normalArray[R+7]=M,a.normalArray[R+8]=P}else a.normalArray[R+0]=v[T+0],a.normalArray[R+1]=v[T+1],a.normalArray[R+2]=v[T+2],a.normalArray[R+3]=v[w+0],a.normalArray[R+4]=v[w+1],a.normalArray[R+5]=v[w+2],a.normalArray[R+6]=v[E+0],a.normalArray[R+7]=v[E+1],a.normalArray[R+8]=v[E+2];if(a.enableUvs){let y=a.count*2;a.uvArray[y+0]=b[T+0],a.uvArray[y+1]=b[T+2],a.uvArray[y+2]=b[w+0],a.uvArray[y+3]=b[w+2],a.uvArray[y+4]=b[E+0],a.uvArray[y+5]=b[E+2]}a.enableColors&&(a.colorArray[R+0]=_[T+0],a.colorArray[R+1]=_[T+1],a.colorArray[R+2]=_[T+2],a.colorArray[R+3]=_[w+0],a.colorArray[R+4]=_[w+1],a.colorArray[R+5]=_[w+2],a.colorArray[R+6]=_[E+0],a.colorArray[R+7]=_[E+1],a.colorArray[R+8]=_[E+2]),a.count+=3}this.addBall=function(b,v,_,T,w,E){let R=Math.sign(T);T=Math.abs(T);let y=E!=null,M=new Ie(b,v,_);if(y)try{M=E instanceof Ie?E:Array.isArray(E)?new Ie(Math.min(Math.abs(E[0]),1),Math.min(Math.abs(E[1]),1),Math.min(Math.abs(E[2]),1)):new Ie(E)}catch{M=new Ie(b,v,_)}let P=this.size*Math.sqrt(T/w),L=_*this.size,N=v*this.size,k=b*this.size,G=Math.floor(L-P);G<1&&(G=1);let V=Math.floor(L+P);V>this.size-1&&(V=this.size-1);let j=Math.floor(N-P);j<1&&(j=1);let H=Math.floor(N+P);H>this.size-1&&(H=this.size-1);let ie=Math.floor(k-P);ie<1&&(ie=1);let de=Math.floor(k+P);de>this.size-1&&(de=this.size-1);let pe,ye,Ee,Fe,He,$,te,_e,Re,ve,Ne;for(Ee=G;Ee<V;Ee++)for(He=this.size2*Ee,_e=Ee/this.size-_,Re=_e*_e,ye=j;ye<H;ye++)for(Fe=He+this.size*ye,te=ye/this.size-v,ve=te*te,pe=ie;pe<de;pe++)if($=pe/this.size-b,Ne=T/(1e-6+$*$+ve+Re)-w,Ne>0){this.field[Fe+pe]+=Ne*R;let Ye=Math.sqrt((pe-k)*(pe-k)+(ye-N)*(ye-N)+(Ee-L)*(Ee-L))/P,F=1-Ye*Ye*Ye*(Ye*(Ye*6-15)+10);this.palette[(Fe+pe)*3+0]+=M.r*F,this.palette[(Fe+pe)*3+1]+=M.g*F,this.palette[(Fe+pe)*3+2]+=M.b*F}},this.addPlaneX=function(b,v){let _=this.size,T=this.yd,w=this.zd,E=this.field,R,y,M,P,L,N,k,G=_*Math.sqrt(b/v);for(G>_&&(G=_),R=0;R<G;R++)if(N=R/_,P=N*N,L=b/(1e-4+P)-v,L>0)for(y=0;y<_;y++)for(k=R+y*T,M=0;M<_;M++)E[w*M+k]+=L},this.addPlaneY=function(b,v){let _=this.size,T=this.yd,w=this.zd,E=this.field,R,y,M,P,L,N,k,G,V=_*Math.sqrt(b/v);for(V>_&&(V=_),y=0;y<V;y++)if(N=y/_,P=N*N,L=b/(1e-4+P)-v,L>0)for(k=y*T,R=0;R<_;R++)for(G=k+R,M=0;M<_;M++)E[w*M+G]+=L},this.addPlaneZ=function(b,v){let _=this.size,T=this.yd,w=this.zd,E=this.field,R,y,M,P,L,N,k,G,V=_*Math.sqrt(b/v);for(V>_&&(V=_),M=0;M<V;M++)if(N=M/_,P=N*N,L=b/(1e-4+P)-v,L>0)for(k=w*M,y=0;y<_;y++)for(G=k+y*T,R=0;R<_;R++)E[G+R]+=L},this.setCell=function(b,v,_,T){let w=this.size2*_+this.size*v+b;this.field[w]=T},this.getCell=function(b,v,_){let T=this.size2*_+this.size*v+b;return this.field[T]},this.blur=function(b=1){let v=this.field,_=v.slice(),T=this.size,w=this.size2;for(let E=0;E<T;E++)for(let R=0;R<T;R++)for(let y=0;y<T;y++){let M=w*y+T*R+E,P=_[M],L=1;for(let N=-1;N<=1;N+=2){let k=N+E;if(!(k<0||k>=T))for(let G=-1;G<=1;G+=2){let V=G+R;if(!(V<0||V>=T))for(let j=-1;j<=1;j+=2){let H=j+y;if(H<0||H>=T)continue;let ie=w*H+T*V+k,de=_[ie];L++,P+=b*(de-P)/L}}}v[M]=P}},this.reset=function(){for(let b=0;b<this.size3;b++)this.normal_cache[b*3]=0,this.field[b]=0,this.palette[b*3]=this.palette[b*3+1]=this.palette[b*3+2]=0},this.update=function(){this.count=0;let b=this.size-2;for(let v=1;v<b;v++){let _=this.size2*v,T=(v-this.halfsize)/this.halfsize;for(let w=1;w<b;w++){let E=_+this.size*w,R=(w-this.halfsize)/this.halfsize;for(let y=1;y<b;y++){let M=(y-this.halfsize)/this.halfsize,P=E+y;m(M,R,T,P,this.isolation)}}}this.geometry.setDrawRange(0,this.count),o.getAttribute("position").needsUpdate=!0,o.getAttribute("normal").needsUpdate=!0,this.enableUvs&&(o.getAttribute("uv").needsUpdate=!0),this.enableColors&&(o.getAttribute("color").needsUpdate=!0),this.count/3>r&&console.warn("THREE.MarchingCubes: Geometry buffers too small for rendering. Please create an instance with a higher poly count.")},this.init(e)}},mx=new Int32Array([0,265,515,778,1030,1295,1541,1804,2060,2309,2575,2822,3082,3331,3593,3840,400,153,915,666,1430,1183,1941,1692,2460,2197,2975,2710,3482,3219,3993,3728,560,825,51,314,1590,1855,1077,1340,2620,2869,2111,2358,3642,3891,3129,3376,928,681,419,170,1958,1711,1445,1196,2988,2725,2479,2214,4010,3747,3497,3232,1120,1385,1635,1898,102,367,613,876,3180,3429,3695,3942,2154,2403,2665,2912,1520,1273,2035,1786,502,255,1013,764,3580,3317,4095,3830,2554,2291,3065,2800,1616,1881,1107,1370,598,863,85,348,3676,3925,3167,3414,2650,2899,2137,2384,1984,1737,1475,1226,966,719,453,204,4044,3781,3535,3270,3018,2755,2505,2240,2240,2505,2755,3018,3270,3535,3781,4044,204,453,719,966,1226,1475,1737,1984,2384,2137,2899,2650,3414,3167,3925,3676,348,85,863,598,1370,1107,1881,1616,2800,3065,2291,2554,3830,4095,3317,3580,764,1013,255,502,1786,2035,1273,1520,2912,2665,2403,2154,3942,3695,3429,3180,876,613,367,102,1898,1635,1385,1120,3232,3497,3747,4010,2214,2479,2725,2988,1196,1445,1711,1958,170,419,681,928,3376,3129,3891,3642,2358,2111,2869,2620,1340,1077,1855,1590,314,51,825,560,3728,3993,3219,3482,2710,2975,2197,2460,1692,1941,1183,1430,666,915,153,400,3840,3593,3331,3082,2822,2575,2309,2060,1804,1541,1295,1030,778,515,265,0]),ga=new Int32Array([-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,8,3,9,8,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,1,2,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,2,10,0,2,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,8,3,2,10,8,10,9,8,-1,-1,-1,-1,-1,-1,-1,3,11,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,11,2,8,11,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,9,0,2,3,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,11,2,1,9,11,9,8,11,-1,-1,-1,-1,-1,-1,-1,3,10,1,11,10,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,10,1,0,8,10,8,11,10,-1,-1,-1,-1,-1,-1,-1,3,9,0,3,11,9,11,10,9,-1,-1,-1,-1,-1,-1,-1,9,8,10,10,8,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,7,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,3,0,7,3,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,8,4,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,1,9,4,7,1,7,3,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,8,4,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,4,7,3,0,4,1,2,10,-1,-1,-1,-1,-1,-1,-1,9,2,10,9,0,2,8,4,7,-1,-1,-1,-1,-1,-1,-1,2,10,9,2,9,7,2,7,3,7,9,4,-1,-1,-1,-1,8,4,7,3,11,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,4,7,11,2,4,2,0,4,-1,-1,-1,-1,-1,-1,-1,9,0,1,8,4,7,2,3,11,-1,-1,-1,-1,-1,-1,-1,4,7,11,9,4,11,9,11,2,9,2,1,-1,-1,-1,-1,3,10,1,3,11,10,7,8,4,-1,-1,-1,-1,-1,-1,-1,1,11,10,1,4,11,1,0,4,7,11,4,-1,-1,-1,-1,4,7,8,9,0,11,9,11,10,11,0,3,-1,-1,-1,-1,4,7,11,4,11,9,9,11,10,-1,-1,-1,-1,-1,-1,-1,9,5,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,5,4,0,8,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,5,4,1,5,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,5,4,8,3,5,3,1,5,-1,-1,-1,-1,-1,-1,-1,1,2,10,9,5,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,8,1,2,10,4,9,5,-1,-1,-1,-1,-1,-1,-1,5,2,10,5,4,2,4,0,2,-1,-1,-1,-1,-1,-1,-1,2,10,5,3,2,5,3,5,4,3,4,8,-1,-1,-1,-1,9,5,4,2,3,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,11,2,0,8,11,4,9,5,-1,-1,-1,-1,-1,-1,-1,0,5,4,0,1,5,2,3,11,-1,-1,-1,-1,-1,-1,-1,2,1,5,2,5,8,2,8,11,4,8,5,-1,-1,-1,-1,10,3,11,10,1,3,9,5,4,-1,-1,-1,-1,-1,-1,-1,4,9,5,0,8,1,8,10,1,8,11,10,-1,-1,-1,-1,5,4,0,5,0,11,5,11,10,11,0,3,-1,-1,-1,-1,5,4,8,5,8,10,10,8,11,-1,-1,-1,-1,-1,-1,-1,9,7,8,5,7,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,3,0,9,5,3,5,7,3,-1,-1,-1,-1,-1,-1,-1,0,7,8,0,1,7,1,5,7,-1,-1,-1,-1,-1,-1,-1,1,5,3,3,5,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,7,8,9,5,7,10,1,2,-1,-1,-1,-1,-1,-1,-1,10,1,2,9,5,0,5,3,0,5,7,3,-1,-1,-1,-1,8,0,2,8,2,5,8,5,7,10,5,2,-1,-1,-1,-1,2,10,5,2,5,3,3,5,7,-1,-1,-1,-1,-1,-1,-1,7,9,5,7,8,9,3,11,2,-1,-1,-1,-1,-1,-1,-1,9,5,7,9,7,2,9,2,0,2,7,11,-1,-1,-1,-1,2,3,11,0,1,8,1,7,8,1,5,7,-1,-1,-1,-1,11,2,1,11,1,7,7,1,5,-1,-1,-1,-1,-1,-1,-1,9,5,8,8,5,7,10,1,3,10,3,11,-1,-1,-1,-1,5,7,0,5,0,9,7,11,0,1,0,10,11,10,0,-1,11,10,0,11,0,3,10,5,0,8,0,7,5,7,0,-1,11,10,5,7,11,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,10,6,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,5,10,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,0,1,5,10,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,8,3,1,9,8,5,10,6,-1,-1,-1,-1,-1,-1,-1,1,6,5,2,6,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,6,5,1,2,6,3,0,8,-1,-1,-1,-1,-1,-1,-1,9,6,5,9,0,6,0,2,6,-1,-1,-1,-1,-1,-1,-1,5,9,8,5,8,2,5,2,6,3,2,8,-1,-1,-1,-1,2,3,11,10,6,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,0,8,11,2,0,10,6,5,-1,-1,-1,-1,-1,-1,-1,0,1,9,2,3,11,5,10,6,-1,-1,-1,-1,-1,-1,-1,5,10,6,1,9,2,9,11,2,9,8,11,-1,-1,-1,-1,6,3,11,6,5,3,5,1,3,-1,-1,-1,-1,-1,-1,-1,0,8,11,0,11,5,0,5,1,5,11,6,-1,-1,-1,-1,3,11,6,0,3,6,0,6,5,0,5,9,-1,-1,-1,-1,6,5,9,6,9,11,11,9,8,-1,-1,-1,-1,-1,-1,-1,5,10,6,4,7,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,3,0,4,7,3,6,5,10,-1,-1,-1,-1,-1,-1,-1,1,9,0,5,10,6,8,4,7,-1,-1,-1,-1,-1,-1,-1,10,6,5,1,9,7,1,7,3,7,9,4,-1,-1,-1,-1,6,1,2,6,5,1,4,7,8,-1,-1,-1,-1,-1,-1,-1,1,2,5,5,2,6,3,0,4,3,4,7,-1,-1,-1,-1,8,4,7,9,0,5,0,6,5,0,2,6,-1,-1,-1,-1,7,3,9,7,9,4,3,2,9,5,9,6,2,6,9,-1,3,11,2,7,8,4,10,6,5,-1,-1,-1,-1,-1,-1,-1,5,10,6,4,7,2,4,2,0,2,7,11,-1,-1,-1,-1,0,1,9,4,7,8,2,3,11,5,10,6,-1,-1,-1,-1,9,2,1,9,11,2,9,4,11,7,11,4,5,10,6,-1,8,4,7,3,11,5,3,5,1,5,11,6,-1,-1,-1,-1,5,1,11,5,11,6,1,0,11,7,11,4,0,4,11,-1,0,5,9,0,6,5,0,3,6,11,6,3,8,4,7,-1,6,5,9,6,9,11,4,7,9,7,11,9,-1,-1,-1,-1,10,4,9,6,4,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,10,6,4,9,10,0,8,3,-1,-1,-1,-1,-1,-1,-1,10,0,1,10,6,0,6,4,0,-1,-1,-1,-1,-1,-1,-1,8,3,1,8,1,6,8,6,4,6,1,10,-1,-1,-1,-1,1,4,9,1,2,4,2,6,4,-1,-1,-1,-1,-1,-1,-1,3,0,8,1,2,9,2,4,9,2,6,4,-1,-1,-1,-1,0,2,4,4,2,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,3,2,8,2,4,4,2,6,-1,-1,-1,-1,-1,-1,-1,10,4,9,10,6,4,11,2,3,-1,-1,-1,-1,-1,-1,-1,0,8,2,2,8,11,4,9,10,4,10,6,-1,-1,-1,-1,3,11,2,0,1,6,0,6,4,6,1,10,-1,-1,-1,-1,6,4,1,6,1,10,4,8,1,2,1,11,8,11,1,-1,9,6,4,9,3,6,9,1,3,11,6,3,-1,-1,-1,-1,8,11,1,8,1,0,11,6,1,9,1,4,6,4,1,-1,3,11,6,3,6,0,0,6,4,-1,-1,-1,-1,-1,-1,-1,6,4,8,11,6,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,10,6,7,8,10,8,9,10,-1,-1,-1,-1,-1,-1,-1,0,7,3,0,10,7,0,9,10,6,7,10,-1,-1,-1,-1,10,6,7,1,10,7,1,7,8,1,8,0,-1,-1,-1,-1,10,6,7,10,7,1,1,7,3,-1,-1,-1,-1,-1,-1,-1,1,2,6,1,6,8,1,8,9,8,6,7,-1,-1,-1,-1,2,6,9,2,9,1,6,7,9,0,9,3,7,3,9,-1,7,8,0,7,0,6,6,0,2,-1,-1,-1,-1,-1,-1,-1,7,3,2,6,7,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,11,10,6,8,10,8,9,8,6,7,-1,-1,-1,-1,2,0,7,2,7,11,0,9,7,6,7,10,9,10,7,-1,1,8,0,1,7,8,1,10,7,6,7,10,2,3,11,-1,11,2,1,11,1,7,10,6,1,6,7,1,-1,-1,-1,-1,8,9,6,8,6,7,9,1,6,11,6,3,1,3,6,-1,0,9,1,11,6,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,8,0,7,0,6,3,11,0,11,6,0,-1,-1,-1,-1,7,11,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,6,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,8,11,7,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,11,7,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,1,9,8,3,1,11,7,6,-1,-1,-1,-1,-1,-1,-1,10,1,2,6,11,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,10,3,0,8,6,11,7,-1,-1,-1,-1,-1,-1,-1,2,9,0,2,10,9,6,11,7,-1,-1,-1,-1,-1,-1,-1,6,11,7,2,10,3,10,8,3,10,9,8,-1,-1,-1,-1,7,2,3,6,2,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,0,8,7,6,0,6,2,0,-1,-1,-1,-1,-1,-1,-1,2,7,6,2,3,7,0,1,9,-1,-1,-1,-1,-1,-1,-1,1,6,2,1,8,6,1,9,8,8,7,6,-1,-1,-1,-1,10,7,6,10,1,7,1,3,7,-1,-1,-1,-1,-1,-1,-1,10,7,6,1,7,10,1,8,7,1,0,8,-1,-1,-1,-1,0,3,7,0,7,10,0,10,9,6,10,7,-1,-1,-1,-1,7,6,10,7,10,8,8,10,9,-1,-1,-1,-1,-1,-1,-1,6,8,4,11,8,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,6,11,3,0,6,0,4,6,-1,-1,-1,-1,-1,-1,-1,8,6,11,8,4,6,9,0,1,-1,-1,-1,-1,-1,-1,-1,9,4,6,9,6,3,9,3,1,11,3,6,-1,-1,-1,-1,6,8,4,6,11,8,2,10,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,3,0,11,0,6,11,0,4,6,-1,-1,-1,-1,4,11,8,4,6,11,0,2,9,2,10,9,-1,-1,-1,-1,10,9,3,10,3,2,9,4,3,11,3,6,4,6,3,-1,8,2,3,8,4,2,4,6,2,-1,-1,-1,-1,-1,-1,-1,0,4,2,4,6,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,9,0,2,3,4,2,4,6,4,3,8,-1,-1,-1,-1,1,9,4,1,4,2,2,4,6,-1,-1,-1,-1,-1,-1,-1,8,1,3,8,6,1,8,4,6,6,10,1,-1,-1,-1,-1,10,1,0,10,0,6,6,0,4,-1,-1,-1,-1,-1,-1,-1,4,6,3,4,3,8,6,10,3,0,3,9,10,9,3,-1,10,9,4,6,10,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,9,5,7,6,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,4,9,5,11,7,6,-1,-1,-1,-1,-1,-1,-1,5,0,1,5,4,0,7,6,11,-1,-1,-1,-1,-1,-1,-1,11,7,6,8,3,4,3,5,4,3,1,5,-1,-1,-1,-1,9,5,4,10,1,2,7,6,11,-1,-1,-1,-1,-1,-1,-1,6,11,7,1,2,10,0,8,3,4,9,5,-1,-1,-1,-1,7,6,11,5,4,10,4,2,10,4,0,2,-1,-1,-1,-1,3,4,8,3,5,4,3,2,5,10,5,2,11,7,6,-1,7,2,3,7,6,2,5,4,9,-1,-1,-1,-1,-1,-1,-1,9,5,4,0,8,6,0,6,2,6,8,7,-1,-1,-1,-1,3,6,2,3,7,6,1,5,0,5,4,0,-1,-1,-1,-1,6,2,8,6,8,7,2,1,8,4,8,5,1,5,8,-1,9,5,4,10,1,6,1,7,6,1,3,7,-1,-1,-1,-1,1,6,10,1,7,6,1,0,7,8,7,0,9,5,4,-1,4,0,10,4,10,5,0,3,10,6,10,7,3,7,10,-1,7,6,10,7,10,8,5,4,10,4,8,10,-1,-1,-1,-1,6,9,5,6,11,9,11,8,9,-1,-1,-1,-1,-1,-1,-1,3,6,11,0,6,3,0,5,6,0,9,5,-1,-1,-1,-1,0,11,8,0,5,11,0,1,5,5,6,11,-1,-1,-1,-1,6,11,3,6,3,5,5,3,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,9,5,11,9,11,8,11,5,6,-1,-1,-1,-1,0,11,3,0,6,11,0,9,6,5,6,9,1,2,10,-1,11,8,5,11,5,6,8,0,5,10,5,2,0,2,5,-1,6,11,3,6,3,5,2,10,3,10,5,3,-1,-1,-1,-1,5,8,9,5,2,8,5,6,2,3,8,2,-1,-1,-1,-1,9,5,6,9,6,0,0,6,2,-1,-1,-1,-1,-1,-1,-1,1,5,8,1,8,0,5,6,8,3,8,2,6,2,8,-1,1,5,6,2,1,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,3,6,1,6,10,3,8,6,5,6,9,8,9,6,-1,10,1,0,10,0,6,9,5,0,5,6,0,-1,-1,-1,-1,0,3,8,5,6,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,10,5,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,5,10,7,5,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,5,10,11,7,5,8,3,0,-1,-1,-1,-1,-1,-1,-1,5,11,7,5,10,11,1,9,0,-1,-1,-1,-1,-1,-1,-1,10,7,5,10,11,7,9,8,1,8,3,1,-1,-1,-1,-1,11,1,2,11,7,1,7,5,1,-1,-1,-1,-1,-1,-1,-1,0,8,3,1,2,7,1,7,5,7,2,11,-1,-1,-1,-1,9,7,5,9,2,7,9,0,2,2,11,7,-1,-1,-1,-1,7,5,2,7,2,11,5,9,2,3,2,8,9,8,2,-1,2,5,10,2,3,5,3,7,5,-1,-1,-1,-1,-1,-1,-1,8,2,0,8,5,2,8,7,5,10,2,5,-1,-1,-1,-1,9,0,1,5,10,3,5,3,7,3,10,2,-1,-1,-1,-1,9,8,2,9,2,1,8,7,2,10,2,5,7,5,2,-1,1,3,5,3,7,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,7,0,7,1,1,7,5,-1,-1,-1,-1,-1,-1,-1,9,0,3,9,3,5,5,3,7,-1,-1,-1,-1,-1,-1,-1,9,8,7,5,9,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5,8,4,5,10,8,10,11,8,-1,-1,-1,-1,-1,-1,-1,5,0,4,5,11,0,5,10,11,11,3,0,-1,-1,-1,-1,0,1,9,8,4,10,8,10,11,10,4,5,-1,-1,-1,-1,10,11,4,10,4,5,11,3,4,9,4,1,3,1,4,-1,2,5,1,2,8,5,2,11,8,4,5,8,-1,-1,-1,-1,0,4,11,0,11,3,4,5,11,2,11,1,5,1,11,-1,0,2,5,0,5,9,2,11,5,4,5,8,11,8,5,-1,9,4,5,2,11,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,5,10,3,5,2,3,4,5,3,8,4,-1,-1,-1,-1,5,10,2,5,2,4,4,2,0,-1,-1,-1,-1,-1,-1,-1,3,10,2,3,5,10,3,8,5,4,5,8,0,1,9,-1,5,10,2,5,2,4,1,9,2,9,4,2,-1,-1,-1,-1,8,4,5,8,5,3,3,5,1,-1,-1,-1,-1,-1,-1,-1,0,4,5,1,0,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,4,5,8,5,3,9,0,5,0,3,5,-1,-1,-1,-1,9,4,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,11,7,4,9,11,9,10,11,-1,-1,-1,-1,-1,-1,-1,0,8,3,4,9,7,9,11,7,9,10,11,-1,-1,-1,-1,1,10,11,1,11,4,1,4,0,7,4,11,-1,-1,-1,-1,3,1,4,3,4,8,1,10,4,7,4,11,10,11,4,-1,4,11,7,9,11,4,9,2,11,9,1,2,-1,-1,-1,-1,9,7,4,9,11,7,9,1,11,2,11,1,0,8,3,-1,11,7,4,11,4,2,2,4,0,-1,-1,-1,-1,-1,-1,-1,11,7,4,11,4,2,8,3,4,3,2,4,-1,-1,-1,-1,2,9,10,2,7,9,2,3,7,7,4,9,-1,-1,-1,-1,9,10,7,9,7,4,10,2,7,8,7,0,2,0,7,-1,3,7,10,3,10,2,7,4,10,1,10,0,4,0,10,-1,1,10,2,8,7,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,9,1,4,1,7,7,1,3,-1,-1,-1,-1,-1,-1,-1,4,9,1,4,1,7,0,8,1,8,7,1,-1,-1,-1,-1,4,0,3,7,4,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,8,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,10,8,10,11,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,9,3,9,11,11,9,10,-1,-1,-1,-1,-1,-1,-1,0,1,10,0,10,8,8,10,11,-1,-1,-1,-1,-1,-1,-1,3,1,10,11,3,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,11,1,11,9,9,11,8,-1,-1,-1,-1,-1,-1,-1,3,0,9,3,9,11,1,2,9,2,11,9,-1,-1,-1,-1,0,2,11,8,0,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,2,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,8,2,8,10,10,8,9,-1,-1,-1,-1,-1,-1,-1,9,10,2,0,9,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,8,2,8,10,0,1,8,1,10,8,-1,-1,-1,-1,1,10,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,3,8,9,1,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,9,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,3,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]);var hd=()=>new Promise(s=>requestAnimationFrame(s)),Fs=(s,e,t)=>Math.max(e,Math.min(t,s)),_a=(s,e,t)=>{let n=Math.max(t-Math.abs(s-e),0)/t;return Math.min(s,e)-n*n*t*.25};async function ud(s,{onProgress:e=()=>{},resolution:t=112}={}){if(!s.length)throw Error("Place models on the floor first.");let n=s.map(u=>{u.object.updateWorldMatrix(!0,!0);let h=new pt().setFromObject(u.object),d=h.getSize(new O),f=new O().setFromMatrixPosition(u.object.matrixWorld);return{growth:cd(u,h,f),id:u.id,modelId:u.modelId,name:u.name,x:f.x,z:f.z,width:Math.max(d.x,d.z),height:d.y,baseY:h.min.y,radius:Math.max(d.x,d.z)/2,source:u}});if(n.some(u=>u.height<.15||u.radius<.08))throw Error("Enlarge very small models before making a space.");let i=[],r=[],o=[],a=new Mt,l,c=()=>{o.forEach(u=>u.dispose()),i.forEach(u=>u.dispose()),r.forEach(u=>u.dispose())};try{for(let J of n){let ae=null,se=-1,Se=new Ie(1,1,1);if(J.source.object.traverse(Ae=>{if(!Ae.isMesh)return;let Ue=Array.isArray(Ae.material)?Ae.material:[Ae.material];for(let I of Ue){let S=(I.map?1e6:0)+(Ae.geometry.index?.count||Ae.geometry.attributes.position.count);if(S>se){ae=I,se=S;let Y=Ae.geometry.attributes.color;if(Y&&!I.map){Se.setRGB(0,0,0);let D=0;for(let Z=0;Z<Y.count;Z+=Math.max(1,Math.floor(Y.count/500)))Se.r+=Y.getX(Z),Se.g+=Y.getY(Z),Se.b+=Y.getZ(Z),D++;Se.multiplyScalar(1/D)}else Se.setRGB(1,1,1)}}}),!ae)throw Error("A placed model has no usable material.");let le=(J.source.surfaceMap||ae.map)?.clone()||null;le&&(le.wrapS=le.wrapT=an,le.needsUpdate=!0,r.push(le));let be=new ln({map:le,color:J.source.surfaceMap?16777215:ae.color?.clone().multiply(Se)||Se,roughness:.72,metalness:.02,side:bt});be.name="Canopy / "+J.name,be.userData={sourcePlacementId:J.id,sourceModelId:J.modelId,textureKind:J.source.surfaceMap?.userData.kind||"source-material",backgroundRemoved:!!J.source.surfaceMap?.userData.backgroundRemoved},i.push(be)}let u=[],h=new Set([0]);for(;h.size<n.length;){let J=null;for(let ae of h)for(let se=0;se<n.length;se++)if(!h.has(se)){let Se=Math.hypot(n[ae].x-n[se].x,n[ae].z-n[se].z);(!J||Se<J.d)&&(J={a:ae,b:se,d:Se})}u.push(J),h.add(J.b)}let d=J=>1.1+J.radius*1.6,f=Math.max(-9.8,Math.min(...n.map(J=>J.x-d(J)))),g=Math.min(9.8,Math.max(...n.map(J=>J.x+d(J)))),x=Math.max(-9.8,Math.min(...n.map(J=>J.z-d(J)))),m=Math.min(9.8,Math.max(...n.map(J=>J.z+d(J)))),p=.24,b=Math.max(...n.map(J=>J.height+J.baseY)),v=-.35,_=b+1.05,T={minX:f-.4,maxX:g+.4,minZ:x-.4,maxZ:m+.4,low:v,high:_},w=T.maxX-T.minX,E=_-v,R=T.maxZ-T.minZ,y=t,M=new O((T.minX+T.maxX)/2,(_+v)/2,(T.minZ+T.maxZ)/2),P=new O(w/2,E/2,R/2),L=22e4;l=new xa(y,a,!1,!1,L),l.isolation=0;let N=Math.max(w,R)/y*.8,k=(J,ae)=>{let se=ld(J,Fs((ae-J.baseY)/J.height,0,1));return se.rx=Math.max(N,se.rx),se.rz=Math.max(N,se.rz),se},G=(J,ae)=>{let se=k(J,ae);return Math.max(se.rx,se.rz)+Math.hypot(se.x-J.x,se.z-J.z)},V=(J,ae)=>{let se=0,Se=0,le=1/0;for(let be of n){let Ae=(J-be.x)**2+(ae-be.z)**2,Ue=1/Math.pow(Ae+.008,1.55);se+=(be.height+be.baseY)*Ue,Se+=Ue,le=Math.min(le,Ae)}return se/Se+.18*(1-Math.exp(-le/1.6))},j=(J,ae)=>{let se=1/0;for(let Se of n)se=_a(se,Math.hypot(J-Se.x,ae-Se.z)-d(Se),.6);for(let Se of u){let le=n[Se.a],be=n[Se.b],Ae=be.x-le.x,Ue=be.z-le.z,I=Fs(((J-le.x)*Ae+(ae-le.z)*Ue)/Math.max(1e-8,Ae*Ae+Ue*Ue),0,1),S=(d(le)*(1-I)+d(be)*I)*.75;se=_a(se,Math.hypot(J-le.x-Ae*I,ae-le.z-Ue*I)-S,.6)}return Math.max(se,Math.abs(J)-9.8,Math.abs(ae)-9.8)},H=(J,ae,se,Se)=>{let le=Se.a,be=Se.b,Ae=be[0]-le[0],Ue=be[1]-le[1],I=be[2]-le[2],S=Fs(((J-le[0])*Ae+(ae-le[1])*Ue+(se-le[2])*I)/Math.max(1e-9,Ae*Ae+Ue*Ue+I*I),0,1);return Math.hypot(J-le[0]-Ae*S,ae-le[1]-Ue*S,se-le[2]-I*S)-(Se.r0+(Se.r1-Se.r0)*S)},ie=[];for(let J of n){J.branchSegments=[];for(let ae of J.growth.branches){let se=J.baseY+J.height*ae.t,Se=k(J,se),le=Math.cos(ae.angle),be=Math.sin(ae.angle),Ae=ae.length,Ue=Fs(J.x+le*(J.radius*.35+Ae),-9.4,9.4),I=Fs(J.z+be*(J.radius*.35+Ae),-9.4,9.4),S=V(Ue,I),Y=[[Se.x,se,Se.z],[Se.x+le*Ae*.45,se+(S-se)*.28,Se.z+be*Ae*.45],[Ue,S-.25,I],[Ue,S,I]],D=Math.max(N*.85,ae.width);for(let Z=0;Z<3;Z++){let W=Z===0?D*1.6:Z===2?D*.9:D,me=Z===2?D*2:D,ue={a:Y[Z],b:Y[Z+1],r0:W,r1:me,sourcePlacementId:J.id};J.branchSegments.push(ue),ie.push(ue)}}}let de=Math.min(...n.map(J=>J.baseY)),pe=n.map(J=>Array.from({length:y},(ae,se)=>k(J,v+se/y*E)));for(let J=0;J<y;J++){let ae=T.minZ+J/y*R;for(let se=0;se<y;se++){let Se=T.minX+se/y*w,le=V(Se,ae),be=n.map(I=>Math.hypot(Se-I.x,ae-I.z)),Ae=j(Se,ae),Ue=ie.filter(I=>Se>=Math.min(I.a[0],I.b[0])-Math.max(I.r0,I.r1)-.6&&Se<=Math.max(I.a[0],I.b[0])+Math.max(I.r0,I.r1)+.6&&ae>=Math.min(I.a[2],I.b[2])-Math.max(I.r0,I.r1)-.6&&ae<=Math.max(I.a[2],I.b[2])+Math.max(I.r0,I.r1)+.6);for(let I=0;I<y;I++){let S=v+I/y*E,Y=Math.max(Math.abs(S-le)-p/2,Ae);for(let D=0;D<n.length;D++){let Z=n[D],W=pe[D][I],me=Se-W.x,ue=ae-W.z;if(Math.abs(me)>W.rx+.7||Math.abs(ue)>W.rz+.7)continue;let C=(Math.hypot(me/W.rx,ue/W.rz)-1)*Math.min(W.rx,W.rz),U=Math.max(C,Z.baseY-S,S-(Z.height+Z.baseY));Y=_a(Y,U,Fs(.3+Z.radius*.28,.38,.75))}for(let D of Ue)S>=Math.min(D.a[1],D.b[1])-.7&&S<=Math.max(D.a[1],D.b[1])+.7&&(Y=_a(Y,H(Se,S,ae,D),.32));Y=Math.max(Y,S-Math.min(4.985,le+p/2),de-S),l.field[J*y*y+I*y+se]=-Y}}J%6===0&&(e("Joining supports / "+Math.round(J/y*100)+"%"),await hd())}if(e("Building the thick surface..."),await hd(),l.update(),l.count/3>=L)throw Error("This layout is too complex. Use fewer models.");let ye=l.geometry.attributes.position,Ee=l.geometry.attributes.normal,Fe=n.map(()=>[]),He=n.map(()=>[]),$=n.map(()=>[]),te=new O,_e=new O;for(let J=0;J<l.count;J+=3){let ae=0,se=0;for(let Ae=0;Ae<3;Ae++)ae+=ye.getX(J+Ae)*P.x+M.x,se+=ye.getZ(J+Ae)*P.z+M.z;ae/=3,se/=3;let Se=0,le=1/0;for(let Ae=0;Ae<n.length;Ae++){let Ue=(ae-n[Ae].x)**2+(se-n[Ae].z)**2;Ue<le&&(le=Ue,Se=Ae)}let be=n[Se];for(let Ae=0;Ae<3;Ae++){te.fromBufferAttribute(ye,J+Ae).multiply(P).add(M),_e.fromBufferAttribute(Ee,J+Ae),_e.set(_e.x/P.x,_e.y/P.y,_e.z/P.z).normalize(),Fe[Se].push(te.x,te.y,te.z),$[Se].push(_e.x,_e.y,_e.z);let Ue=Math.max(.65,be.width*.8);He[Se].push((te.x+.61*te.z+.13*Math.sin(te.y*1.5))/Ue,(te.y+.37*te.z+.12*Math.sin(te.x*1.7))/Ue)}}let Re=new Tt;Re.name="exhibition-continuous-canopy";let ve=[];for(let J=0;J<n.length;J++)if(Fe[J].length){let ae=new yt;o.push(ae),ae.setAttribute("position",new vt(Fe[J],3)),ae.setAttribute("normal",new vt($[J],3)),ae.setAttribute("uv",new vt(He[J],2)),ae.computeBoundingBox(),ae.computeBoundingSphere();let se=new ht(ae,i[J]);se.name="Canopy region / "+n[J].name,se.userData={sourcePlacementId:n[J].id,sourceModelId:n[J].modelId},Re.add(se),ve.push(se)}let Ne=n.map(({source:J,...ae})=>ae);Re.userData={kind:"organic-model-growth-canopy-v3",thickness:p,pillars:Ne};let Ye=new pt().setFromObject(Re),F=Ye.getCenter(new O),ze=Math.min(...n.map(J=>J.height))-.12;return l.geometry.dispose(),l=null,a.dispose(),{group:Re,meshes:ve,materials:i,pillars:Ne,thickness:p,bounds:Ye,centre:F,triangles:Fe.reduce((J,ae)=>J+ae.length/9,0),roofConnected:!0,links:u.map(J=>({from:n[J.a].id,to:n[J.b].id})),clearance:ze,roofAt:V,footprintAt:j,radialAt:G,sectionAt:k,branches:ie,segmentDistance:H,dispose:c}}catch(u){throw l?.geometry.dispose(),a.dispose(),c(),u}}function dd(s,e,t,{seed:n=1,size:i=256}={}){let r=typeof n=="number"?n:2166136261;if(typeof n=="string")for(let b of n)r=Math.imul(r^b.charCodeAt(0),16777619);r>>>=0;let o=()=>(r=Math.imul(r,1664525)+1013904223>>>0,r/4294967296),a=[],l=[];for(let b=0;b<e*t;b++){let v=b*4;if(s[v+3]<180)continue;a.push(b);let _=s[v],T=s[v+1],w=s[v+2];(Math.max(_,T,w)-Math.min(_,T,w)>24||Math.max(_,T,w)<226)&&l.push(b)}if(!a.length)throw Error("The model has no visible colour pixels.");let c=l.length>Math.max(16,a.length*.08)?l:a,u=new Uint8Array(e*t);for(let b of c)u[b]=1;let h=12,d=Array.from({length:h*h},()=>{let b=c[Math.floor(o()*c.length)],v=o()*Math.PI*2;return{x:b%e,y:Math.floor(b/e),index:b,c:Math.cos(v),s:Math.sin(v)}}),f=(b,v)=>(b%v+v)%v,g=new Uint8Array(i*i*4),x=b=>b*b*(3-2*b),m=Math.PI*2/i;function p(b,v,_){let T=Math.min(e,t)*.045,w=Math.round(b.x+(v*b.c-_*b.s)*T),E=Math.round(b.y+(v*b.s+_*b.c)*T);return(w>=0&&w<e&&E>=0&&E<t&&u[E*e+w]?E*e+w:b.index)*4}for(let b=0;b<i;b++)for(let v=0;v<i;v++){let _=f(v+i*.1*Math.sin(m*b)+i*.045*Math.sin(m*(2*v+b)),i)/i*h,T=f(b+i*.09*Math.sin(m*v)+i*.04*Math.cos(m*(v-2*b)),i)/i*h,w=Math.floor(_),E=Math.floor(T),R=_-w,y=T-E,M=x(R),P=x(y),L=(b*i+v)*4,N=[(1-M)*(1-P),M*(1-P),(1-M)*P,M*P],k=[];for(let G=0;G<2;G++)for(let V=0;V<2;V++){let j=d[f(E+G,h)*h+f(w+V,h)];k.push(p(j,R-V,y-G))}for(let G=0;G<3;G++)g[L+G]=Math.round(k.reduce((V,j,H)=>V+s[j+G]*N[H],0));g[L+3]=255}return{pixels:g,width:i,height:i,foregroundCount:c.length,sourceForegroundCount:a.length,backgroundRemoved:!0}}function fd({scene:s,renderer:e,placement:t,getView:n,setView:i,navigate:r,invalidate:o}){let a=y=>document.getElementById(y),l="learning-vegas-continuous-canopy-v2",c=null,u=!1,h=!1,d=!1,f="",g="",x=()=>JSON.stringify(t.spaceSources().map(y=>({id:y.id,modelId:y.modelId,...y.layout}))),m=y=>a("exhibition-space-status").textContent=y;function p(){a("exhibition-make-space").disabled=h||!t.state().modelCount,a("exhibition-make-space").textContent=h?"Joining...":c?"Update space":"Make space",a("exhibition-space-original").hidden=!c,a("exhibition-space-original").textContent=u?"Original models":"Show space",a("exhibition-space-original").disabled=h,a("exhibition-enter-space").hidden=!c||!u,a("exhibition-export-space").hidden=!c,a("exhibition-export-space").disabled=h,a("walk-surface").dataset.spacePreview=String(u)}function b(y){u=!!y&&!!c,c&&(c.group.visible=u),t.showSources(!u),p(),o();try{localStorage.setItem(l,JSON.stringify({active:u,signature:g}))}catch{}}function v(y){let M=new In;M.background=null;let P=y.object.clone(!0);y.object.updateWorldMatrix(!0,!0),P.matrix.copy(y.object.matrixWorld),P.matrixAutoUpdate=!1,M.add(P),M.add(new Oi(16777215,16777215,3));let L=new pt().setFromObject(P),N=L.getSize(new O),k=L.getCenter(new O),G=Math.max(N.x,N.z)*1.08,V=N.y*1.08,j=y.layout.rotation||0,H=new Sn(-G/2,G/2,V/2,-V/2,.01,100);H.position.copy(k).add(new O(Math.sin(j)*20,0,Math.cos(j)*20)),H.lookAt(k);let ie=512,de=512,pe=new cn(ie,de);pe.texture.colorSpace=dt;let ye=e.getRenderTarget(),Ee=e.getClearColor(new Ie).clone(),Fe=e.getClearAlpha(),He=new Uint8Array(ie*de*4);try{e.setRenderTarget(pe),e.setClearColor(0,0),e.render(M,H),e.readRenderTargetPixels(pe,0,0,ie,de,He);let $=dd(He,ie,de,{seed:y.modelId}),te=new Pi($.pixels,$.width,$.height);return te.userData={sourceModelId:y.modelId,kind:"abstract-foreground-quilt-v1",backgroundRemoved:!0,foregroundCount:$.foregroundCount},te.colorSpace=dt,te.flipY=!1,te.needsUpdate=!0,te}finally{e.setClearColor(Ee,Fe),e.setRenderTarget(ye),pe.dispose(),o()}}async function _(){if(h)return!1;await t.ready,h=!0,f="",p();let y=x(),M,P=t.spaceSources(),L=[];try{for(let N of P)N.surfaceMap=v(N),L.push(N.surfaceMap),await new Promise(k=>requestAnimationFrame(k));if(M=await ud(P,{onProgress:m}),y!==x())throw Error("The layout changed. Make space again.");return c&&(s.remove(c.group),c.dispose()),c=M,M=null,s.add(c.group),g=y,d=!1,b(!0),m(c.clearance<1.9?"SPACE READY / low supports: enlarge models for more headroom":"SPACE READY / "+c.pillars.length+" SUPPORTS"),!0}catch(N){return M?.dispose(),f=N.message,m(f),!1}finally{L.forEach(N=>N.dispose()),h=!1,p()}}function T(){if(!c)return;let y=null,M=c.bounds;for(let L=M.min.z+.7;L<M.max.z-.7;L+=.45)for(let N=M.min.x+.7;N<M.max.x-.7;N+=.45){if(c.footprintAt(N,L)>-.45||c.roofAt(N,L)<1.95||c.pillars.some(G=>Math.hypot(N-G.x,L-G.z)<c.radialAt(G,1.65)+.55&&G.height>1.3))continue;let k=Math.hypot(N-c.centre.x,L-c.centre.z);(!y||k<y.score)&&(y={x:N,z:L,score:k})}if(!y){m("Not enough headroom: enlarge the source models, then update space.");return}b(!0),i("room");let P=c.pillars.reduce((L,N)=>L.height>N.height?L:N);r({x:y.x,z:y.z,y:1.65,yaw:Math.atan2(y.x-P.x,y.z-P.z),pitch:.28}),m("SPACE / WASD TO WALK")}function w(y,M=.35){if(!u||!c)return y;for(let P=0;P<3;P++){for(let L of c.pillars){if(y.y>L.baseY+L.height+.15)continue;let N=c.sectionAt(L,y.y),k=Math.max(N.rx,N.rz)+M,G=y.x-N.x,V=y.z-N.z,j=Math.hypot(G,V);j<k&&(y.x=N.x+(j?G/j:1)*(k+.001),y.z=N.z+(j?V/j:0)*(k+.001))}for(let L of c.branches){let N=L.a,k=L.b,G=Math.max(L.r0,L.r1)+M;if(y.y<Math.min(N[1],k[1])-G||y.y>Math.max(N[1],k[1])+G)continue;let V=k[1]-N[1],j=Math.abs(V)>1e-5?Math.max(0,Math.min(1,(y.y-N[1])/V)):0,H=N[0]+(k[0]-N[0])*j,ie=N[2]+(k[2]-N[2])*j,de=L.r0+(L.r1-L.r0)*j+M,pe=y.x-H,ye=y.z-ie,Ee=Math.hypot(pe,ye);Ee<de&&(y.x=H+(Ee?pe/Ee:1)*(de+.001),y.z=ie+(Ee?ye/Ee:0)*(de+.001))}}return y}async function E(){if(!c||h)return;h=!0,p(),m("Preparing GLB...");let y=c.group.visible;try{c.group.visible=!0;let M=await new qi().parseAsync(c.group,{binary:!0}),P=URL.createObjectURL(new Blob([M],{type:"model/gltf-binary"})),L=document.createElement("a");L.href=P,L.download="learning-from-las-vegas-canopy.glb",L.click(),setTimeout(()=>URL.revokeObjectURL(P),3e4),m("SPACE EXPORTED / GLB")}catch(M){m(M.message)}finally{c.group.visible=y,h=!1,p(),o()}}a("exhibition-make-space").onclick=_,a("exhibition-space-original").onclick=()=>b(!u),a("exhibition-enter-space").onclick=T,a("exhibition-export-space").onclick=E,window.addEventListener("exhibition-placement-change",()=>{c&&x()!==g&&(d=!0,b(!1),m("LAYOUT CHANGED / UPDATE SPACE")),p()});let R=t.ready.then(async()=>{p();try{let y=JSON.parse(localStorage.getItem(l)||"null");y?.active&&y.signature===x()&&await _()}catch{}});return Object.freeze({ready:R,generate:_,enter:T,showOriginal:()=>b(!1),showSpace:()=>b(!0),constrain:w,collisionMeshes:()=>u&&c?c.meshes:[],exportGLB:E,state:()=>({active:u,busy:h,stale:d,error:f,signature:g,triangles:c?.triangles||0,thickness:c?.thickness||0,connected:c?.roofConnected||!1,pillars:c?.pillars||[],clearance:c?.clearance||0,bounds:c?{min:c.bounds.min.toArray(),max:c.bounds.max.toArray()}:null}),dispose:()=>{c&&(s.remove(c.group),c.dispose(),c=null)}})}function fl(s,e){if(e===Ec)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Cs||e===br){let t=s.getIndex();if(t===null){let o=[],a=s.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let n=t.count-2,i=[];if(e===Cs)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}var ya=class extends Nn{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new vl(t)}),this.register(function(t){return new Ml(t)}),this.register(function(t){return new Il(t)}),this.register(function(t){return new Pl(t)}),this.register(function(t){return new Ll(t)}),this.register(function(t){return new Sl(t)}),this.register(function(t){return new El(t)}),this.register(function(t){return new Tl(t)}),this.register(function(t){return new wl(t)}),this.register(function(t){return new yl(t)}),this.register(function(t){return new Al(t)}),this.register(function(t){return new bl(t)}),this.register(function(t){return new Cl(t)}),this.register(function(t){return new Rl(t)}),this.register(function(t){return new xl(t)}),this.register(function(t){return new Dl(t)}),this.register(function(t){return new Nl(t)})}load(e,t,n,i){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=Jn.extractUrlBase(e);o=Jn.resolveURL(c,this.path)}else o=Jn.extractUrlBase(e);this.manager.itemStart(e);let a=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Ss(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r,o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===_d){try{o[Je.KHR_BINARY_GLTF]=new Ul(e)}catch(h){i&&i(h);return}r=JSON.parse(o[Je.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new Vl(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){let h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case Je.KHR_MATERIALS_UNLIT:o[h]=new _l;break;case Je.KHR_DRACO_MESH_COMPRESSION:o[h]=new Fl(r,this.dracoLoader);break;case Je.KHR_TEXTURE_TRANSFORM:o[h]=new Ol;break;case Je.KHR_MESH_QUANTIZATION:o[h]=new Bl;break;default:d.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}};function gx(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}var Je={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},xl=class{constructor(e){this.parser=e,this.name=Je.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,u=new Ie(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Nt);let h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new dr(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Bi(u),c.distance=h;break;case"spot":c=new ur(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),On(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}},_l=class{constructor(){this.name=Je.KHR_MATERIALS_UNLIT}getMaterialType(){return Mt}extendParams(e,t,n){let i=[];e.color=new Ie(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Nt),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,dt))}return Promise.all(i)}},yl=class{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},vl=class{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Yt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Be(a,a)}return Promise.all(r)}},Ml=class{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Yt}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},bl=class{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Yt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},Sl=class{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Yt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new Ie(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Nt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,dt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},El=class{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Yt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},Tl=class{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Yt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Ie().setRGB(a[0],a[1],a[2],Nt),Promise.all(r)}},wl=class{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Yt}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},Al=class{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Yt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new Ie().setRGB(a[0],a[1],a[2],Nt),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,dt)),Promise.all(r)}},Rl=class{constructor(e){this.parser=e,this.name=Je.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Yt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}},Cl=class{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Yt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},Il=class{constructor(e){this.parser=e,this.name=Je.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},Pl=class{constructor(e){this.parser=e,this.name=Je.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=i.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}},Ll=class{constructor(e){this.parser=e,this.name=Je.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=i.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}},Dl=class{constructor(e){this.name=Je.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let l=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,d,i.mode,i.filter).then(function(f){return f.buffer}):o.ready.then(function(){let f=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(f),u,h,d,i.mode,i.filter),f})})}else return null}},Nl=class{constructor(e){this.name=Je.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let c of i.primitives)if(c.mode!==dn.TRIANGLES&&c.mode!==dn.TRIANGLE_STRIP&&c.mode!==dn.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let u=c.pop(),h=u.isGroup?u.children:[u],d=c[0].count,f=[];for(let g of h){let x=new Xe,m=new O,p=new At,b=new O(1,1,1),v=new Li(g.geometry,g.material,d);for(let _=0;_<d;_++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,_),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,_),l.SCALE&&b.fromBufferAttribute(l.SCALE,_),v.setMatrixAt(_,x.compose(m,p,b));for(let _ in l)if(_==="_COLOR_0"){let T=l[_];v.instanceColor=new fi(T.array,T.itemSize,T.normalized)}else _!=="TRANSLATION"&&_!=="ROTATION"&&_!=="SCALE"&&g.geometry.setAttribute(_,l[_]);mt.prototype.copy.call(v,g),this.parser.assignFinalMaterial(v),f.push(v)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}},_d="glTF",Tr=12,pd={JSON:1313821514,BIN:5130562},Ul=class{constructor(e){this.name=Je.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Tr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==_d)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-Tr,r=new DataView(e,Tr),o=0;for(;o<i;){let a=r.getUint32(o,!0);o+=4;let l=r.getUint32(o,!0);if(o+=4,l===pd.JSON){let c=new Uint8Array(e,Tr+o,a);this.content=n.decode(c)}else if(l===pd.BIN){let c=Tr+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Fl=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Je.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let u in o){let h=kl[u]||u.toLowerCase();a[h]=o[u]}for(let u in e.attributes){let h=kl[u]||u.toLowerCase();if(o[u]!==void 0){let d=n.accessors[e.attributes[u]],f=Os[d.componentType];c[h]=f.name,l[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,d){i.decodeDracoFile(u,function(f){for(let g in f.attributes){let x=f.attributes[g],m=l[g];m!==void 0&&(x.normalized=m)}h(f)},a,c,Nt,d)})})}},Ol=class{constructor(){this.name=Je.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Bl=class{constructor(){this.name=Je.KHR_MESH_QUANTIZATION}},va=class extends Kn{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=i-t,h=(n-t)/u,d=h*h,f=d*h,g=e*c,x=g-c,m=-2*f+3*d,p=f-d,b=1-m,v=p-d+h;for(let _=0;_!==a;_++){let T=o[x+_+a],w=o[x+_+l]*u,E=o[g+_+a],R=o[g+_]*u;r[_]=b*T+v*w+m*E+p*R}return r}},xx=new At,zl=class extends va{interpolate_(e,t,n,i){let r=super.interpolate_(e,t,n,i);return xx.fromArray(r).normalize().toArray(r),r}},dn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Os={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},md={9728:wt,9729:Dt,9984:Es,9985:xi,9986:ei,9987:en},gd={33071:on,33648:hi,10497:an},pl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},kl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},vi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},_x={CUBICSPLINE:void 0,LINEAR:qn,STEP:Yn},ml={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function yx(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new ln({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:yn})),s.DefaultMaterial}function Zi(s,e,t){for(let n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function On(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function vx(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,u=e.length;c<u;c++){let h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);let o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){let h=e[c];if(n){let d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):s.attributes.position;o.push(d)}if(i){let d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):s.attributes.normal;a.push(d)}if(r){let d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):s.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let u=c[0],h=c[1],d=c[2];return n&&(s.morphAttributes.position=u),i&&(s.morphAttributes.normal=h),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function Mx(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function bx(s){let e,t=s.extensions&&s.extensions[Je.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+gl(t.attributes):e=s.indices+":"+gl(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+gl(s.targets[n]);return e}function gl(s){let e="",t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function Hl(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Sx(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var Ex=new Xe,Vl=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new gx,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?this.textureLoader=new lr(this.options.manager):this.textureLoader=new fr(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ss(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Zi(r,a,i),On(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(let l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){let o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){let o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),r=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,u]of o.children.entries())r(u,a.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Je.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,o){n.load(Jn.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let o=pl[i.type],a=Os[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new et(c,o,l))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],l=pl[i.type],c=Os[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0,x,m;if(f&&f!==h){let p=Math.floor(d/f),b="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count,v=t.cache.get(b);v||(x=new c(a,p*f,i.count*f/u),v=new _s(x,f/u),t.cache.add(b,v)),m=new ys(v,l,d%f/u,g)}else a===null?x=new c(i.count*l):x=new c(a,d,i.count*l),m=new et(x,l,g);if(i.sparse!==void 0){let p=pl.SCALAR,b=Os[i.sparse.indices.componentType],v=i.sparse.indices.byteOffset||0,_=i.sparse.values.byteOffset||0,T=new b(o[1],v,i.sparse.count*p),w=new c(o[2],_,i.sparse.count*l);a!==null&&(m=new et(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let E=0,R=T.length;E<R;E++){let y=T[E];if(m.setX(y,w[E*l]),l>=2&&m.setY(y,w[E*l+1]),l>=3&&m.setZ(y,w[E*l+2]),l>=4&&m.setW(y,w[E*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let i=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);let d=(r.samplers||{})[o.sampler]||{};return u.magFilter=md[d.magFilter]||Dt,u.minFilter=md[d.minFilter]||en,u.wrapS=gd[d.wrapS]||an,u.wrapT=gd[d.wrapT]||an,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==wt&&u.minFilter!==Dt,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());let o=i.images[e],a=self.URL||self.webkitURL,l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(h){c=!0;let d=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(l).then(function(h){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(x){let m=new Rt(x);m.needsUpdate=!0,d(m)}),t.load(Jn.resolveURL(h,r.path),g,void 0,f)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),On(h,o),h.userData.mimeType=o.mimeType||Sx(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[Je.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[Je.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=r.associations.get(o);o=r.extensions[Je.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new bs,Xt.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new Mn,Xt.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return ln}loadMaterial(e){let t=this,n=this.json,i=this.extensions,r=n.materials[e],o,a={},l=r.extensions||{},c=[];if(l[Je.KHR_MATERIALS_UNLIT]){let h=i[Je.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,r,t))}else{let h=r.pbrMetallicRoughness||{};if(a.color=new Ie(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){let d=h.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Nt),a.opacity=d[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,dt)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=bt);let u=r.alphaMode||ml.OPAQUE;if(u===ml.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===ml.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Mt&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Be(1,1),r.normalTexture.scale!==void 0)){let h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==Mt&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Mt){let h=r.emissiveFactor;a.emissive=new Ie().setRGB(h[0],h[1],h[2],Nt)}return r.emissiveTexture!==void 0&&o!==Mt&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,dt)),Promise.all(c).then(function(){let h=new o(a);return r.name&&(h.name=r.name),On(h,r),t.associations.set(h,{materials:e}),r.extensions&&Zi(i,h,r),h})}createUniqueName(e){let t=nt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[Je.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return xd(l,a,t)})}let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],u=bx(c),h=i[u];if(h)o.push(h.promise);else{let d;c.extensions&&c.extensions[Je.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=xd(new yt,c,t),i[u]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let u=o[l].material===void 0?yx(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){let c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let f=0,g=u.length;f<g;f++){let x=u[f],m=o[f],p,b=c[f];if(m.mode===dn.TRIANGLES||m.mode===dn.TRIANGLE_STRIP||m.mode===dn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new nr(x,b):new ht(x,b),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===dn.TRIANGLE_STRIP?p.geometry=fl(p.geometry,br):m.mode===dn.TRIANGLE_FAN&&(p.geometry=fl(p.geometry,Cs));else if(m.mode===dn.LINES)p=new Ni(x,b);else if(m.mode===dn.LINE_STRIP)p=new Di(x,b);else if(m.mode===dn.LINE_LOOP)p=new pi(x,b);else if(m.mode===dn.POINTS)p=new sr(x,b);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&Mx(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),On(p,r),m.extensions&&Zi(i,p,m),t.assignFinalMaterial(p),h.push(p)}for(let f=0,g=h.length;f<g;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return r.extensions&&Zi(i,h[0],r),h[0];let d=new Tt;r.extensions&&Zi(i,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=h.length;f<g;f++)d.add(h[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Et(ti.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Sn(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),On(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),o=i,a=[],l=[];for(let c=0,u=o.length;c<u;c++){let h=o[c];if(h){a.push(h);let d=new Xe;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new ir(a,l)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,d=i.channels.length;h<d;h++){let f=i.channels[h],g=i.samplers[f.sampler],x=f.target,m=x.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,b=i.parameters!==void 0?i.parameters[g.output]:g.output;x.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",b)),c.push(g),u.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){let d=h[0],f=h[1],g=h[2],x=h[3],m=h[4],p=[];for(let v=0,_=d.length;v<_;v++){let T=d[v],w=f[v],E=g[v],R=x[v],y=m[v];if(T===void 0)continue;T.updateMatrix&&T.updateMatrix();let M=n._createAnimationTracks(T,w,E,R,y);if(M)for(let P=0;P<M.length;P++)p.push(M[P])}let b=new cr(r,void 0,p);return On(b,i),b})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));let l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){let u=c[0],h=c[1],d=c[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,Ex)});for(let f=0,g=h.length;f<g;f++)u.add(h[f]);return u})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new vs:c.length>1?u=new Tt:c.length===1?u=c[0]:u=new mt,u!==c[0])for(let h=0,d=c.length;h<d;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=o),On(u,r),r.extensions&&Zi(n,u,r),r.matrix!==void 0){let h=new Xe;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);if(!i.associations.has(u))i.associations.set(u,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){let h=i.associations.get(u);i.associations.set(u,{...h})}return i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,r=new Tt;n.name&&(r.name=i.createUniqueName(n.name)),On(r,n),n.extensions&&Zi(t,r,n);let o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)r.add(l[u]);let c=u=>{let h=new Map;for(let[d,f]of i.associations)(d instanceof Xt||d instanceof Rt)&&h.set(d,f);return u.traverse(d=>{let f=i.associations.get(d);f!=null&&h.set(d,f)}),h};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){let o=[],a=e.name?e.name:e.uuid,l=[];vi[r.path]===vi.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(vi[r.path]){case vi.weights:c=Pn;break;case vi.rotation:c=Ln;break;case vi.translation:case vi.scale:c=Dn;break;default:switch(n.itemSize){case 1:c=Pn;break;case 2:case 3:default:c=Dn;break}break}let u=i.interpolation!==void 0?_x[i.interpolation]:qn,h=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){let g=new c(l[d]+"."+vi[r.path],t.array,h,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Hl(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof Ln?zl:va;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Tx(s,e,t){let n=e.attributes,i=new pt;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new O(l[0],l[1],l[2]),new O(c[0],c[1],c[2])),a.normalized){let u=Hl(Os[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new O,l=new O;for(let c=0,u=r.length;c<u;c++){let h=r[c];if(h.POSITION!==void 0){let d=t.json.accessors[h.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){let x=Hl(Os[d.componentType]);l.multiplyScalar(x)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;let o=new Ot;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function xd(s,e,t){let n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){s.setAttribute(a,l)})}for(let o in n){let a=kl[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){let o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return Qe.workingColorSpace!==Nt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Qe.workingColorSpace}" not supported.`),On(s,e),Tx(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?vx(s,e.targets,t):s})}function yd(s){let e=new Map,t=new Map,n=s.clone();return vd(s,n,function(i,r){e.set(r,i),t.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;let r=i,o=e.get(i),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function vd(s,e,t){t(s,e);for(let n=0;n<s.children.length;n++)vd(s.children[n],e.children[n],t)}function Md(s){let e=new Map,t=n=>{if(e.has(n))return e.get(n);let i=new Mt({color:n.color?.clone()||new Ie(16777215),map:n.map||null,vertexColors:n.vertexColors,transparent:n.transparent,opacity:n.opacity,alphaMap:n.alphaMap||null,alphaTest:n.alphaTest,side:n.side,depthWrite:n.depthWrite,depthTest:n.depthTest,toneMapped:!1});return i.name=n.name,i.userData={...n.userData,exhibitionColour:"vivid-archive-v1"},i.onBeforeCompile=r=>{r.vertexShader=`varying vec3 vArchiveNormal;
`+r.vertexShader,r.vertexShader=r.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vArchiveNormal = normalize(normalMatrix * normal);`),r.fragmentShader=`varying vec3 vArchiveNormal;
`+r.fragmentShader,r.fragmentShader=r.fragmentShader.replace("#include <opaque_fragment>",["#include <opaque_fragment>","float archiveLuma = dot(gl_FragColor.rgb, vec3(0.2126, 0.7152, 0.0722));","vec3 archiveColour = vec3(archiveLuma) + (gl_FragColor.rgb - vec3(archiveLuma)) * 1.18;","float archiveDepth = 0.84 + 0.16 * max(dot(normalize(vArchiveNormal), normalize(vec3(-0.35, 0.7, 1.0))), 0.0);","gl_FragColor.rgb = clamp(archiveColour * archiveDepth, 0.0, 1.0);"].join(`
`))},i.customProgramCacheKey=()=>"vivid-archive-v1",e.set(n,i),i};s.traverse(n=>{!n.isMesh||!n.material||(n.geometry.attributes.normal||n.geometry.computeVertexNormals(),n.material=Array.isArray(n.material)?n.material.map(t):t(n.material))});for(let n of e.keys())n.dispose();return{mode:"vivid-archive-v1",toneMapped:!1,saturation:1.18,minShading:.84}}function bd({scene:s,canvas:e,getCamera:t,getRoomMeshes:n,isRoom:i,orient:r,invalidate:o,suspend:a}){let l=C=>document.getElementById(C),c=new Tt,u=new ya,h=new Map,d=new Map,f=new Map,g=new zi,x=new Be,m=new Wt(new O(0,1,0),0),p=new O,b=new ht(new bn(1,1),new Mt({color:8561034,transparent:!0,opacity:.32,depthWrite:!1,side:bt,toneMapped:!1}));b.rotation.x=-Math.PI/2,b.position.y=.012,b.visible=!1,s.add(b),c.name="exhibition-placed-models",s.add(c);let v=null,_=null,T=!1,w=null,E=null,R=null,y=Promise.resolve(),M=!1,P="",L=new Li(new bn(.994,.994),new Mt({color:15915115,transparent:!0,opacity:.52,depthWrite:!1,toneMapped:!1}),400);L.name="occupied-yellow-cells",L.count=0,L.visible=!1,L.frustumCulled=!1,s.add(L);let N=new Map,k=new Xe,G=new At().setFromAxisAngle(new O(1,0,0),-Math.PI/2),V=document.createElement("div");V.className="exhibition-scale-handles",e.parentElement.append(V);let j=Array.from({length:8},(C,U)=>{let B=document.createElement("button");return B.className="exhibition-scale-handle",B.type="button",B.dataset.corner=U,B.setAttribute("aria-label","Drag to scale selected model"),B.title="Drag to scale",B.hidden=!0,V.append(B),B}),H=document.createElement("button");H.className="exhibition-rotate-handle",H.type="button",H.textContent="\u21BB",H.title="Drag to rotate model",H.setAttribute("aria-label","Drag to rotate selected model"),H.hidden=!0,V.append(H);function ie(){N.clear();for(let U of d.values())for(let B=U.record.row;B<U.record.row+U.record.span;B++)for(let X=U.record.col;X<U.record.col+U.record.span;X++){let ne=B*20+X;N.set(ne,(N.get(ne)||0)+1)}let C=0;for(let U of N.keys())k.compose(new O(U%20-9.5,.002,Math.floor(U/20)-9.5),G,new O(1,1,1)),L.setMatrixAt(C++,k);L.count=C,L.instanceMatrix.needsUpdate=!0,o()}function de(){let C=d.get(v),U=e.getBoundingClientRect(),B=V.getBoundingClientRect();if(!c.visible||!C||e.closest("[hidden]")||l("walk-surface").dataset.modelBrowse==="true"){j.forEach(re=>re.hidden=!0),H.hidden=!0;return}s.updateMatrixWorld(!0);let X=new pt().setFromObject(C.object);j.forEach((re,he)=>{let Me=new O(he&1?X.max.x:X.min.x,he&2?X.max.y:X.min.y,he&4?X.max.z:X.min.z).project(t()),z=U.left+(Me.x+1)*U.width/2,ce=U.top+(1-Me.y)*U.height/2;re.hidden=Me.z<-1||Me.z>1||z<U.left||z>U.right||ce<U.top||ce>U.bottom,re.style.left=z-B.left+"px",re.style.top=ce-B.top+"px"});let ne=j.filter(re=>!re.hidden).map(re=>({x:parseFloat(re.style.left),y:parseFloat(re.style.top)}));if(H.hidden=!ne.length,ne.length){let re=(Math.min(...ne.map(Me=>Me.x))+Math.max(...ne.map(Me=>Me.x)))/2,he=Math.max(16,Math.min(...ne.map(Me=>Me.y))-26);H.style.left=re+"px",H.style.top=he+"px"}}let pe=C=>{l("exhibition-placement-status").textContent=C};function ye(){return new Promise((C,U)=>{let B=indexedDB.open("learning-vegas-exhibition-floor-v1",1);B.onupgradeneeded=()=>{B.result.createObjectStore("models",{keyPath:"id"}),B.result.createObjectStore("layout")},B.onsuccess=()=>C(B.result),B.onerror=()=>U(B.error)})}async function Ee(){let C=await ye();try{return await new Promise((U,B)=>{let X=C.transaction(["models","layout"],"readonly"),ne=X.objectStore("models").getAll(),re=X.objectStore("layout").get("current");X.oncomplete=()=>U({models:ne.result,layout:re.result||[]}),X.onerror=()=>B(X.error)})}finally{C.close()}}function Fe(){window.dispatchEvent(new Event("exhibition-placement-change"));let C=[...d.values()].map(X=>({...X.record})),U=new Set(C.map(X=>X.modelId)),B=[...h.values()].filter(X=>U.has(X.id)).map(X=>({id:X.id,blob:X.blob,name:X.name,preview:X.preview||null,record:X.record||null,composition:X.composition||null,camera:X.camera||null,libraryId:X.libraryId||null,obj:X.obj||null}));return y=y.catch(()=>{}).then(async()=>{let X=await ye();try{await new Promise((ne,re)=>{let he=X.transaction(["models","layout"],"readwrite"),Me=he.objectStore("models"),z=Me.getAllKeys();z.onsuccess=()=>{let ce=new Set(z.result);B.forEach(fe=>{if(!ce.has(fe.id))Me.put(fe);else if(fe.record){let Te=Me.get(fe.id);Te.onsuccess=()=>{(Te.result?.record?.id!==fe.record.id||!Te.result?.composition&&fe.composition||Te.result?.libraryId!==fe.libraryId||JSON.stringify(Te.result?.record?.linkedMedia)!==JSON.stringify(fe.record.linkedMedia))&&Me.put(fe)}}}),z.result.forEach(fe=>{U.has(fe)||Me.delete(fe)})},he.objectStore("layout").put(C,"current"),he.oncomplete=ne,he.onerror=()=>re(he.error),he.onabort=()=>re(he.error)})}finally{X.close()}}).catch(X=>pe("Layout is available this session, but could not save: "+X.message)),y}function He(C){let U=new Set,B=new Set,X=new Set;C.traverse(ne=>{ne.geometry&&U.add(ne.geometry);for(let re of ne.material?Array.isArray(ne.material)?ne.material:[ne.material]:[]){B.add(re);for(let he of Object.values(re))he?.isTexture&&X.add(he)}}),U.forEach(ne=>ne.dispose()),B.forEach(ne=>ne.dispose()),X.forEach(ne=>{ne.source?.data?.close?.(),ne.dispose()})}function $(){let C=new Set([...d.values()].map(U=>U.record.modelId));for(let[U,B]of h)C.has(U)||(He(B.template),h.delete(U))}async function te(C){if(h.has(C.id)){let B=h.get(C.id);for(let X of["record","composition","camera","libraryId","obj"])C[X]&&(B[X]=C[X]);return B}if(f.has(C.id))return f.get(C.id);let U=(async()=>{if(!(C.blob instanceof Blob))throw Error("This model is unavailable. Generate or open it again.");let B=await u.parseAsync(await C.blob.arrayBuffer(),""),X=new Tt;X.add(B.scene),X.updateMatrixWorld(!0);let ne=new pt().setFromObject(X),re=ne.getSize(new O),he=ne.getCenter(new O);if(ne.isEmpty()||!Number.isFinite(re.length())||re.length()<=0)throw He(X),Error("This file contains no visible 3D model.");let Me=.98/Math.max(re.x,re.z,1e-5),z=0;B.scene.traverse(Te=>{Te.isMesh&&(z+=(Te.geometry.index?.count||Te.geometry.attributes.position.count)/3)});let ce=Md(B.scene);B.scene.position.sub(new O(he.x,ne.min.y,he.z)),X.scale.setScalar(Me);let fe={...C,width:re.x*Me,depth:re.z*Me,height:re.y*Me,triangles:z,colour:ce,template:X};return h.set(C.id,fe),fe})();f.set(C.id,U);try{return await U}finally{f.delete(C.id)}}function _e(C,U){return U||d.get(C)?.record.span||1}function Re(C,U,B=null,X=null){let ne=_e(B,X),re=e.getBoundingClientRect();if(C<re.left||C>re.right||U<re.top||U>re.bottom||document.elementFromPoint(C,U)?.closest(".workspace-expanded,.workspace-previews,.walk-toolbar,.exhibition-placement-tools,dialog")||(r(),s.updateMatrixWorld(!0),x.set((C-re.left)/re.width*2-1,-(U-re.top)/re.height*2+1),g.setFromCamera(x,t()),!g.ray.intersectPlane(m,p)||p.x<-10||p.x>=10||p.z<-10||p.z>=10))return null;if(i()){let ce=g.intersectObjects(n(),!1)[0];if(ce&&ce.object.name!=="floor")return null}let Me=Math.min(20-ne,Math.floor(p.x+10)),z=Math.min(20-ne,Math.floor(p.z+10));return{col:Me,row:z,span:ne,x:Me-10+ne/2,z:z-10+ne/2,valid:!0}}function ve(C,U,B=null){let X=Re(C,U,B);return b.visible=!!X,X&&(b.scale.set(X.span,X.span,1),b.position.set(X.x,.015,X.z),b.material.color.setHex(X.valid?8561034:11759712)),o(),X}function Ne(){b.visible=!1,o()}function Ye(){_&&(s.remove(_),_.geometry.dispose(),_.material.dispose(),_=null);let C=d.get(v);C&&(s.updateMatrixWorld(!0),_=new mr(C.object,8882044),s.add(_)),de(),o()}function F(C){v=c.visible&&d.has(C)?C:null,T=!1;let U=d.get(v);l("exhibition-placement-tools").hidden=!U,l("exhibition-placement-name").textContent=U?U.record.name+" / "+(U.record.span||1)**2+" CELL"+((U.record.span||1)>1?"S":""):"",l("exhibition-move-model").setAttribute("aria-pressed","false"),l("exhibition-model-smaller").disabled=!U||(U.record.span||1)===1,l("exhibition-model-larger").disabled=!U||(U.record.span||1)===3,Ye()}function ze(C){let U=h.get(C.record.modelId),B=C.record.span||1,X=C.record.rotation||0,ne=Math.abs(Math.cos(X)),re=Math.abs(Math.sin(X)),he=Math.min(.98*B*(C.record.scale||1)/Math.max(U.width*ne+U.depth*re,U.width*re+U.depth*ne,1e-5),4.65/Math.max(U.height,1e-5));C.object.scale.copy(U.template.scale).multiplyScalar(he),C.object.rotation.y=X,C.object.position.set(C.record.col-10+B/2,.015,C.record.row-10+B/2),C.height=U.height*he,C.footprint=Math.max(U.width*ne+U.depth*re,U.width*re+U.depth*ne)*he}function J(C,U){C.span=[1,2,3].includes(C.span)?C.span:1;let B=yd(U.template);B.userData.placementId=C.id,c.add(B);let X={record:C,object:B};return d.set(C.id,X),ze(X),ie(),o(),C.id}function ae(C){let U=C?.span||1;return C?.valid&&[1,2,3].includes(U)&&Number.isInteger(C.col)&&C.col>=0&&C.col+U<=20&&Number.isInteger(C.row)&&C.row>=0&&C.row+U<=20}async function se(C,U){let B=U?.span||1;if(!ae(U))throw Error("Choose an area within the exhibition floor.");let X=await te(C),ne=J({id:crypto.randomUUID(),modelId:X.id,col:U.col,row:U.row,span:B,scale:Number.isFinite(U.scale)?U.scale:1,rotation:Number.isFinite(U.rotation)?U.rotation:0,name:C.name||"Generated model"},X);return F(ne),await Fe(),pe("Model placed. Drag to move; double-click to view in 3D."),ne}function Se(C,U){let B=d.get(C),X=B?.record.span||1;return!B||!ae({...U,span:X})?!1:(B.record.col=U.col,B.record.row=U.row,delete B.record.scaleCentreX,delete B.record.scaleCentreZ,ze(B),ie(),F(C),Fe(),pe("Moved to cell "+(U.row*20+U.col+1)+"."),!0)}function le(C,U,B=1,X=!0){let ne=d.get(C);if(!ne||![1,2,3].includes(U))return!1;let re=ne.record.span||1,he=ne.record.scaleCentreX??ne.record.col+re/2,Me=ne.record.scaleCentreZ??ne.record.row+re/2,z=Math.max(0,Math.min(20-U,Math.round(he-U/2))),ce=Math.max(0,Math.min(20-U,Math.round(Me-U/2)));return Object.assign(ne.record,{col:z,row:ce,span:U,scale:B,scaleCentreX:he,scaleCentreZ:Me}),ze(ne),ie(),F(C),X&&Fe(),pe("Model fills "+U+" \xD7 "+U+" cells."),!0}async function be(C){if(!Array.isArray(C)||C.length!==d.size||new Set(C.map(B=>B.id)).size!==d.size)throw Error("The floor changed. Try arranging again.");let U=new Set;for(let B of C){if(!d.has(B.id)||!ae(B)||!Number.isFinite(B.rotation)||!Number.isFinite(B.scale)||B.scale<=0||B.scale>1)throw Error("Invalid exhibition layout.");for(let X=B.row;X<B.row+B.span;X++)for(let ne=B.col;ne<B.col+B.span;ne++){let re=X*20+ne;if(U.has(re))throw Error("The proposed model footprints overlap.");U.add(re)}}for(let B of C){let X=d.get(B.id);Object.assign(X.record,{col:B.col,row:B.row,span:B.span,scale:B.scale,rotation:B.rotation}),delete X.record.scaleCentreX,delete X.record.scaleCentreZ,ze(X)}return F(null),ie(),await Fe(),pe(C.length+" models rearranged."),!0}function Ae(){return[...h.values()].map(C=>{let U=C.record||{id:C.id,fingerprint:C.id,modelUrl:"assets/generated-sculptures/"+C.id+"/sculpture.glb",objUrl:"assets/generated-sculptures/"+C.id+"/sculpture.obj",target:"city",localOnly:!0,triangles:Math.round(C.triangles)};return{id:"exhibit:"+C.id,ephemeral:!0,title:C.name||"Exhibited model",group:"",savedAt:0,record:U,glb:C.blob,obj:C.obj||null,preview:C.preview,composition:C.composition||null,camera:C.camera||null,libraryId:C.libraryId||null}})}function Ue(C){let U=d.get(C);U&&window.dispatchEvent(new CustomEvent("exhibition-model-open",{detail:{id:"exhibit:"+U.record.modelId,placementId:C}}))}function I(C){if(!c.visible)return null;r(),s.updateMatrixWorld(!0);let U=e.getBoundingClientRect();x.set((C.clientX-U.left)/U.width*2-1,-(C.clientY-U.top)/U.height*2+1),g.setFromCamera(x,t());let B=g.intersectObjects(c.children,!0)[0];if(!B)return null;if(i()){let ne=g.intersectObjects(n(),!1)[0];if(ne&&ne.distance<B.distance)return null}let X=B.object;for(;X&&!X.userData.placementId;)X=X.parent;return X?.userData.placementId||null}function S(C){let U=I(C);if(U)return U;for(let[B,X]of[[1,0],[-1,0],[0,1],[0,-1],[2,0],[-2,0],[0,2],[0,-2]]){let ne=I({clientX:C.clientX+B,clientY:C.clientY+X});if(ne)return ne}return null}function Y(){let C=l("exhibition-drag-ghost");C.hidden=!0,P&&URL.revokeObjectURL(P),P=""}function D(C,U){let B=l("exhibition-drag-ghost"),X=h.get(U.record.modelId)?.preview;X&&!P&&(P=URL.createObjectURL(X),B.querySelector("img").src=P),B.hidden=!1,B.style.transform="translate("+(C.clientX+16)+"px,"+(C.clientY+16)+"px)";let ne=ve(C.clientX,C.clientY,U.record.id);B.dataset.valid=String(!!ne?.valid),B.querySelector("span").textContent=ne?.valid?"CELL "+(ne.row*20+ne.col+1):ne?"Cell occupied":"Move over the floor"}e.addEventListener("pointerdown",C=>{if(C.button!==0)return;let U=S(C);if(T&&v&&!U){C.preventDefault(),C.stopImmediatePropagation();let B=ve(C.clientX,C.clientY,v);Se(v,B)&&Ne();return}U&&(C.preventDefault(),C.stopImmediatePropagation(),a(),F(U),w={id:U,pointerId:C.pointerId,x:C.clientX,y:C.clientY,started:!1},e.setPointerCapture(C.pointerId))},!0),e.addEventListener("pointermove",C=>{if(T&&!w){ve(C.clientX,C.clientY,v);return}!w||w.pointerId!==C.pointerId||(C.preventDefault(),C.stopImmediatePropagation(),!(!w.started&&Math.hypot(C.clientX-w.x,C.clientY-w.y)<6)&&(w.started=!0,D(C,d.get(w.id))))},!0);function Z(C){if(!(!w||w.pointerId!==C.pointerId)){if(C.preventDefault(),C.stopImmediatePropagation(),w.started&&C.type!=="pointercancel"){let U=Re(C.clientX,C.clientY,w.id);Se(w.id,U)||pe("Choose a floor cell. The model stays in its previous position.")}try{e.releasePointerCapture(C.pointerId)}catch{}w=null,Y(),Ne()}}e.addEventListener("dblclick",C=>{let U=S(C);U&&(C.preventDefault(),C.stopImmediatePropagation(),a(),F(U),Ue(U))},!0);for(let C of j)C.addEventListener("pointerdown",U=>{if(U.button!==0||!v)return;U.preventDefault(),U.stopPropagation(),a();let B=d.get(v),X=new pt().setFromObject(B.object),ne=X.getCenter(new O).project(t()),re=e.getBoundingClientRect(),he=re.left+(ne.x+1)*re.width/2,Me=re.top+(1-ne.y)*re.height/2;E={id:v,pointerId:U.pointerId,cx:he,cy:Me,distance:Math.max(20,Math.hypot(U.clientX-he,U.clientY-Me)),units:B.record.span*(B.record.scale||1)},C.setPointerCapture(U.pointerId)}),C.addEventListener("keydown",U=>{(U.key==="ArrowUp"||U.key==="ArrowRight")&&(U.preventDefault(),le(v,Math.min(3,d.get(v).record.span+1))),(U.key==="ArrowDown"||U.key==="ArrowLeft")&&(U.preventDefault(),le(v,Math.max(1,d.get(v).record.span-1)))});function W(C,U,B=!0){let X=d.get(C);return!X||!Number.isFinite(U)?!1:(X.record.rotation=U,ze(X),Ye(),B&&Fe(),!0)}H.addEventListener("pointerdown",C=>{if(C.button!==0||!v)return;C.preventDefault(),C.stopPropagation(),a();let U=d.get(v),B=new pt().setFromObject(U.object).getCenter(new O).project(t()),X=e.getBoundingClientRect(),ne=X.left+(B.x+1)*X.width/2,re=X.top+(1-B.y)*X.height/2;R={id:v,pointerId:C.pointerId,cx:ne,cy:re,last:Math.atan2(C.clientY-re,C.clientX-ne),angle:U.record.rotation||0},H.setPointerCapture(C.pointerId)}),H.addEventListener("keydown",C=>{["ArrowLeft","ArrowRight"].includes(C.key)&&(C.preventDefault(),W(v,(d.get(v)?.record.rotation||0)+(C.key==="ArrowLeft"?-1:1)*Math.PI/12))}),document.addEventListener("pointermove",C=>{if(!R||R.pointerId!==C.pointerId)return;C.preventDefault(),C.stopImmediatePropagation();let U=R,B=Math.atan2(C.clientY-U.cy,C.clientX-U.cx),X=Math.atan2(Math.sin(B-U.last),Math.cos(B-U.last));U.angle+=X,U.last=B,W(U.id,C.shiftKey?Math.round(U.angle/(Math.PI/12))*Math.PI/12:U.angle,!1)},{capture:!0,passive:!1});for(let C of["pointerup","pointercancel"])document.addEventListener(C,U=>{R?.pointerId===U.pointerId&&(R=null,Fe())},!0);document.addEventListener("pointermove",C=>{if(!E||E.pointerId!==C.pointerId)return;C.preventDefault(),C.stopImmediatePropagation();let U=E,B=Math.max(.35,Math.min(3,U.units*Math.hypot(C.clientX-U.cx,C.clientY-U.cy)/U.distance)),X=Math.ceil(B-1e-6);le(U.id,X,B/X,!1)},{capture:!0,passive:!1});for(let C of["pointerup","pointercancel"])document.addEventListener(C,U=>{E?.pointerId===U.pointerId&&(E=null,Fe())},!0);e.addEventListener("pointerup",Z,!0),e.addEventListener("pointercancel",Z,!0),e.addEventListener("lostpointercapture",()=>{w=null,Y(),Ne()}),l("exhibition-move-model").onclick=()=>{T=!T,a(),l("exhibition-move-model").setAttribute("aria-pressed",String(T)),T?pe("Click a floor cell, or drag the selected model."):Ne()},l("exhibition-turn-model").onclick=()=>{let C=d.get(v);C&&(C.record.rotation=((C.record.rotation||0)+Math.PI/4)%(2*Math.PI),ze(C),Ye(),Fe())},l("exhibition-remove-model").onclick=()=>{let C=d.get(v);C&&(c.remove(C.object),d.delete(v),ie(),F(null),$(),Fe(),pe("Model removed from the room."))},l("exhibition-model-smaller").onclick=()=>le(v,(d.get(v)?.record.span||1)-1),l("exhibition-model-larger").onclick=()=>le(v,(d.get(v)?.record.span||1)+1),l("exhibition-open-model").onclick=()=>Ue(v),l("exhibition-deselect-model").onclick=()=>{F(null),Ne(),pe("")},window.addEventListener("blur",()=>{if((E||R)&&(E=null,R=null,Fe()),T=!1,Y(),Ne(),w){try{e.releasePointerCapture(w.pointerId)}catch{}w=null}}),document.addEventListener("keydown",C=>{if(C.key==="Escape"&&((E||R)&&(E=null,R=null,Fe()),T=!1,Ne(),Y(),w)){try{e.releasePointerCapture(w.pointerId)}catch{}w=null}});function me(){let C=new Set;for(let U of h.values())U.template.traverse(B=>{for(let X of B.material?Array.isArray(B.material)?B.material:[B.material]:[])for(let ne of Object.values(X))ne?.isTexture&&C.add(ne)});return C.size}let ue=(async()=>{try{let C=await Ee(),U=new Map(C.models.map(B=>[B.id,B]));for(let B of C.layout){if(!Number.isInteger(B.col)||B.col<0||B.col+(B.span||1)>20||!Number.isInteger(B.row)||B.row<0||B.row+(B.span||1)>20)continue;let X=U.get(B.modelId);if(X)try{let ne=await te(X);J(B,ne)}catch(ne){pe("Some stored models could not reopen: "+ne.message)}}}catch(C){pe("Previous room layout could not load: "+C.message)}finally{M=!0}})();return Object.freeze({ready:ue,updateHandles:de,spaceSources:()=>[...d.values()].map(C=>({id:C.record.id,modelId:C.record.modelId,name:C.record.name,object:C.object,layout:{col:C.record.col,row:C.record.row,span:C.record.span,scale:C.record.scale||1,rotation:C.record.rotation||0}})),showSources:C=>{c.visible=!!C,C||F(null),L.visible=!i()&&c.visible,o()},setViewMode:C=>{L.visible=C==="axonometric"&&c.visible,de(),o()},cellAt:Re,hitModelAt:(C,U)=>I({clientX:C,clientY:U}),hover:ve,stopHover:Ne,place:se,select:F,move:Se,resize:le,rotate:W,applyLayout:be,browseEntries:Ae,openModel:Ue,clearSelection:()=>F(null),state:()=>({restored:M,sourcesVisible:c.visible,selected:v,models:[...d.values()].map(C=>({...C.record,x:C.object.position.x,z:C.object.position.z,height:C.height,footprint:C.footprint,colour:h.get(C.record.modelId)?.colour})),modelCount:d.size,uniqueMeshes:h.size,textureCount:me(),occupiedCells:[...N].map(([C,U])=>({col:C%20,row:Math.floor(C/20),count:U})),occupiedColour:"#f2d86b",scaling:!!E,rotating:!!R,dragging:!!w?.started,pendingDrag:!!w}),dispose:()=>{V.remove(),L.geometry.dispose(),L.material.dispose(),h.forEach(C=>He(C.template)),b.geometry.dispose(),b.material.dispose(),_&&(_.geometry.dispose(),_.material.dispose())}})}var Sd={type:"change"},Wl={type:"start"},Td={type:"end"},Ma=new Cn,Ed=new Wt,wx=Math.cos(70*ti.DEG2RAD),Pt=new O,Kt=2*Math.PI,ct={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Gl=1e-6,ba=class extends gr{constructor(e,t=null){super(e,t),this.state=ct.NONE,this.target=new O,this.cursor=new O,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:hn.ROTATE,MIDDLE:hn.DOLLY,RIGHT:hn.PAN},this.touches={ONE:gi.ROTATE,TWO:gi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new O,this._lastQuaternion=new At,this._lastTargetPosition=new O,this._quat=new At().setFromUnitVectors(e.up,new O(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new mi,this._sphericalDelta=new mi,this._scale=1,this._panOffset=new O,this._rotateStart=new Be,this._rotateEnd=new Be,this._rotateDelta=new Be,this._panStart=new Be,this._panEnd=new Be,this._panDelta=new Be,this._dollyStart=new Be,this._dollyEnd=new Be,this._dollyDelta=new Be,this._dollyDirection=new O,this._mouse=new Be,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Rx.bind(this),this._onPointerDown=Ax.bind(this),this._onPointerUp=Cx.bind(this),this._onContextMenu=Fx.bind(this),this._onMouseWheel=Lx.bind(this),this._onKeyDown=Dx.bind(this),this._onTouchStart=Nx.bind(this),this._onTouchMove=Ux.bind(this),this._onMouseDown=Ix.bind(this),this._onMouseMove=Px.bind(this),this._interceptControlDown=Ox.bind(this),this._interceptControlUp=Bx.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Sd),this.update(),this.state=ct.NONE}update(e=null){let t=this.object.position;Pt.copy(t).sub(this.target),Pt.applyQuaternion(this._quat),this._spherical.setFromVector3(Pt),this.autoRotate&&this.state===ct.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=Kt:n>Math.PI&&(n-=Kt),i<-Math.PI?i+=Kt:i>Math.PI&&(i-=Kt),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Pt.setFromSpherical(this._spherical),Pt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Pt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=Pt.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let a=new O(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new O(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Pt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Ma.origin.copy(this.object.position),Ma.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ma.direction))<wx?this.object.lookAt(this.target):(Ed.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ma.intersectPlane(Ed,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Gl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Gl||this._lastTargetPosition.distanceToSquared(this.target)>Gl?(this.dispatchEvent(Sd),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Kt/60*this.autoRotateSpeed*e:Kt/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Pt.setFromMatrixColumn(t,0),Pt.multiplyScalar(-e),this._panOffset.add(Pt)}_panUp(e,t){this.screenSpacePanning===!0?Pt.setFromMatrixColumn(t,1):(Pt.setFromMatrixColumn(t,0),Pt.crossVectors(this.object.up,Pt)),Pt.multiplyScalar(e),this._panOffset.add(Pt)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let i=this.object.position;Pt.copy(i).sub(this.target);let r=Pt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),i=e-n.left,r=t-n.top,o=n.width,a=n.height;this._mouse.x=i/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Kt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Kt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Kt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Kt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Kt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Kt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panStart.set(n,i)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(i,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Kt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Kt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Be,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function Ax(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function Rx(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function Cx(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Td),this.state=ct.NONE;break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Ix(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case hn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=ct.DOLLY;break;case hn.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=ct.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=ct.ROTATE}break;case hn.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=ct.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=ct.PAN}break;default:this.state=ct.NONE}this.state!==ct.NONE&&this.dispatchEvent(Wl)}function Px(s){switch(this.state){case ct.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case ct.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case ct.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function Lx(s){this.enabled===!1||this.enableZoom===!1||this.state!==ct.NONE||(s.preventDefault(),this.dispatchEvent(Wl),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(Td))}function Dx(s){this.enabled!==!1&&this._handleKeyDown(s)}function Nx(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case gi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=ct.TOUCH_ROTATE;break;case gi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=ct.TOUCH_PAN;break;default:this.state=ct.NONE}break;case 2:switch(this.touches.TWO){case gi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=ct.TOUCH_DOLLY_PAN;break;case gi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=ct.TOUCH_DOLLY_ROTATE;break;default:this.state=ct.NONE}break;default:this.state=ct.NONE}this.state!==ct.NONE&&this.dispatchEvent(Wl)}function Ux(s){switch(this._trackPointer(s),this.state){case ct.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case ct.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case ct.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case ct.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=ct.NONE}}function Fx(s){this.enabled!==!1&&s.preventDefault()}function Ox(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Bx(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}(()=>{"use strict";let s=document.getElementById("walk-surface"),e=document.getElementById("walk-canvas-host");if(!s||!e)return;let t=D=>document.getElementById(D),n=Object.freeze({width:20,depth:20,height:5,wallThickness:.18}),i=1.65,r=.35,o=1.8,a=n.width/2-r,l=new Set,c=new zi,u=new Be,h=new O(0,i,7),d=new O,f=new O,g=new O,x,m,p,b,v,_,T,w,E,R=null,y=[],M=!1,P=!1,L="room",N=!1,k=0,G=0,V=!1,j=!1,H=null,ie=0,de=0,pe=0,ye=null,Ee=(D,Z,W)=>Math.max(Z,Math.min(W,D)),Fe=new Set(["KeyW","KeyA","KeyS","KeyD","KeyQ","KeyE","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","ShiftLeft","ShiftRight","ControlLeft","ControlRight"]),He=["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],$=(...D)=>D.some(Z=>l.has(Z));function te(D){return D.x=Ee(D.x,-a,a),D.z=Ee(D.z,-a,a),D.y=V?Ee(D.y,r,n.height-r):i,R?.constrain(D,r),D.x=Ee(D.x,-a,a),D.z=Ee(D.z,-a,a),D}function _e(){if(L==="axonometric"){p.updateMatrixWorld();return}p.position.copy(h),p.rotation.set(N?0:G,k,0,"YXZ"),p.updateProjectionMatrix(),N&&(p.projectionMatrix.elements[9]=Math.tan(Ee(G,-.8,.8))*p.projectionMatrix.elements[5],p.projectionMatrixInverse.copy(p.projectionMatrix).invert()),p.updateMatrixWorld()}function Re(){t("walk-mode").textContent=V?"Fly mode":"Walk mode",t("walk-mode").setAttribute("aria-pressed",String(V)),t("walk-mode").title="Space: switch between walking and flying";let D=L==="axonometric";t("walk-mode").disabled=D,t("walk-two-point").disabled=D,t("walk-two-point").textContent="Two-point "+(N?"on":"off"),t("walk-two-point").setAttribute("aria-pressed",String(N)),t("walk-view-toggle").textContent=D?"Axonometric / switch":"Eye level / switch",t("walk-view-toggle").setAttribute("aria-pressed",String(D)),t("walk-status").textContent=D?"AXONOMETRIC / 1 M GRID":(V?"FLY":"WALK")+" / EYE "+h.y.toFixed(2)+" M",t("walk-view-label").textContent=D?"FLOOR PLAN":"WHITE ROOM",t("walk-caption-text").textContent=D?"Drag to rotate \xB7 Wheel to zoom \xB7 Right / middle drag to pan":"Click to explore \xB7 Drag to look \xB7 WASD to walk \xB7 Shift to move faster",t("walk-dimensions").textContent=D?"20 \xD7 20 M / 400 CELLS":"20 \xD7 20 \xD7 5 M",t("walk-room-help").hidden=D,t("walk-axon-help").hidden=!D,s.setAttribute("aria-label",D?"Orthographic floor view with four hundred one metre grid cells. Drag to rotate; wheel to zoom; right or middle drag to pan.":"Walk through a twenty by twenty metre enclosed white exhibition room"),s.dataset.view=L}function ve(){if(l.clear(),H)try{x.domElement.releasePointerCapture(H.id)}catch{}H=null,s.classList.remove("is-dragging"),de=0}function Ne(){j=!1,_&&(_.enabled=!1),ve(),ye=null,document.activeElement===s&&s.blur()}function Ye(){j=!0,_&&(_.enabled=L==="axonometric"),s.focus({preventScroll:!0})}function F(){return L==="room"&&j&&(He.some(D=>l.has(D))||V&&$("KeyQ","KeyE"))}function ze(){!M||P||document.hidden||ie||(ie=requestAnimationFrame(J))}function J(D){if(ie=0,P||document.hidden)return;let Z=de?Math.min((D-de)/1e3,.05):1/60;if(de=D,ye){let W=Ee((D-ye.start)/420,0,1),me=W*W*(3-2*W);h.lerpVectors(ye.from,ye.to,me),te(h),W===1&&(ye=null)}if(F()){ye=null;let W=V?G:0;d.set(-Math.sin(k)*Math.cos(W),Math.sin(W),-Math.cos(k)*Math.cos(W)),f.set(Math.cos(k),0,-Math.sin(k)),g.set(0,0,0),$("KeyW","ArrowUp")&&g.add(d),$("KeyS","ArrowDown")&&g.sub(d),$("KeyD","ArrowRight")&&g.add(f),$("KeyA","ArrowLeft")&&g.sub(f),V&&$("KeyE")&&(g.y+=1),V&&$("KeyQ")&&(g.y-=1);let me=$("ControlLeft","ControlRight")?6:$("ShiftLeft","ShiftRight")?3:1;g.lengthSq()&&h.addScaledVector(g.normalize(),o*me*Z),te(h)}_e(),Ae.updateHandles(),x.render(m,p),pe++,Re(),F()||ye?ze():de=0}function ae(){ve(),ye=null,L==="axonometric"?(v.position.set(24,24,24),v.zoom=1,_.target.set(0,0,0),v.updateProjectionMatrix(),_.update()):(V=!1,h.set(0,i,7),k=0,G=0),Re(),ze()}function se(){if(!x||P)return;let D=e.getBoundingClientRect();if(!D.width||!D.height)return;x.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),x.setSize(D.width,D.height,!1);let Z=D.width/D.height;b.aspect=Z,b.updateProjectionMatrix();let W=Math.max(22,32/Z)/2;v.left=-W*Z,v.right=W*Z,v.top=W,v.bottom=-W,v.updateProjectionMatrix(),s.style.setProperty("--walk-toolbar-height",t("walk-toolbar").offsetHeight+"px"),ze()}function Se(D){_e();let Z=x.domElement.getBoundingClientRect();return u.set((D.clientX-Z.left)/Z.width*2-1,-(D.clientY-Z.top)/Z.height*2+1),c.setFromCamera(u,p),c.intersectObjects(L==="room"?[...y,...R?.collisionMeshes()||[]]:[T.getObjectByName("axonometric-floor")],!1)[0]||null}function le(D){t("walk-error").textContent=D,t("walk-error").hidden=!1,s.setAttribute("aria-busy","false")}try{let ue=function(Me,z,ce,fe,Te,ge,oe,Le=D){let Ve=new ht(new di(z,ce,fe),Le);return Ve.name=Me,Ve.position.set(Te,ge,oe),m.add(Ve),y.push(Ve),Ve};m=new In,m.background=new Ie("#ffffff"),b=new Et(62,1,.05,80),v=new Sn(-20,20,11,-11,.05,200),v.position.set(24,24,24),v.lookAt(0,0,0),p=b,x=new pa({antialias:!0,powerPreference:"low-power"}),x.outputColorSpace=dt,x.toneMapping=wo,x.toneMappingExposure=1.12,x.shadowMap.enabled=!1,e.append(x.domElement),x.domElement.setAttribute("aria-hidden","true");let D=new ln({color:16777215,roughness:.94,metalness:0}),Z=new ln({color:15263971,roughness:.96,metalness:0}),W=n.wallThickness,me=n.width/2;ue("floor",20+2*W,W,20+2*W,0,-W/2,0,Z),ue("ceiling",20+2*W,W,20+2*W,0,n.height+W/2,0),ue("west-wall",W,n.height,20+2*W,-me-W/2,n.height/2,0),ue("east-wall",W,n.height,20+2*W,me+W/2,n.height/2,0),ue("north-wall",20,n.height,W,0,n.height/2,-me-W/2),ue("south-wall",20,n.height,W,0,n.height/2,me+W/2),w=new Tt,w.name="room-floor-junctions",m.add(w);let C=new yt().setFromPoints([new O(-9.996,.009,-9.996),new O(9.996,.009,-9.996),new O(9.996,.009,9.996),new O(-9.996,.009,9.996)]);w.add(new pi(C,new Mn({color:12369077,transparent:!0,opacity:.7,toneMapped:!1})));let U=new bn(20,.22,1,12),B=U.attributes.position,X=[];for(let Me=0;Me<B.count;Me++){let z=Ee((B.getY(Me)+.11)/.22,0,1);X.push(1,1,1,.16*Math.pow(z,2))}U.setAttribute("color",new vt(X,4));let ne=new Mt({color:10066322,vertexColors:!0,transparent:!0,depthWrite:!1,toneMapped:!1,side:bt});for(let[Me,z,ce]of[[0,-9.89,0],[0,9.89,Math.PI],[-9.89,0,Math.PI/2],[9.89,0,-Math.PI/2]]){let fe=new ht(U,ne);fe.rotation.set(-Math.PI/2,0,ce),fe.position.set(Me,.005,z),w.add(fe)}T=new Tt,T.name="axonometric-floor-view",T.visible=!1,m.add(T);let re=new ht(new bn(20,20),new Mt({color:16250868,side:bt,toneMapped:!1}));re.name="axonometric-floor",re.rotation.x=-Math.PI/2,T.add(re),E=new pr(20,20,12434871,12434871),E.name="one-metre-grid",E.position.y=.004,E.material.transparent=!0,E.material.opacity=.48,E.material.depthWrite=!1,E.material.toneMapped=!1,T.add(E);let he=new pi(new yt().setFromPoints([new O(-10,.006,-10),new O(10,.006,-10),new O(10,.006,10),new O(-10,.006,10)]),new Mn({color:11842734,transparent:!0,opacity:.6,toneMapped:!1}));T.add(he),m.add(new Oi(16777215,15987699,3.8));for(let Me of[-5,5])for(let z of[-5,5]){let ce=new Bi(16777215,24,28,2);ce.position.set(Me,4.55,z),m.add(ce)}M=!0,s.setAttribute("aria-busy","false"),Re()}catch(D){console.error("White exhibition room:",D),le("The 3D room could not start. Enable WebGL in your browser and reload this page.");return}let be=x.domElement,Ae=bd({scene:m,canvas:be,getCamera:()=>p,getRoomMeshes:()=>y,isRoom:()=>L==="room",orient:_e,invalidate:ze,suspend:Ne});R=fd({scene:m,renderer:x,placement:Ae,getView:()=>L,setView:Ue,navigate:D=>{ve(),ye=null,V=!1,h.set(D.x,D.y,D.z),k=D.yaw,G=D.pitch||0,te(h),Re(),ze(),Ye()},invalidate:ze}),be.addEventListener("pointerdown",()=>{L==="axonometric"&&Ye()},!0),_=new ba(v,be),_.enabled=!1,_.enableDamping=!1,_.minPolarAngle=.12,_.maxPolarAngle=Math.PI/2-.1,_.minZoom=.35,_.maxZoom=12,_.screenSpacePanning=!1,_.mouseButtons={LEFT:hn.ROTATE,MIDDLE:hn.PAN,RIGHT:hn.PAN},_.addEventListener("change",ze);function Ue(D){if(!["room","axonometric"].includes(D))throw new TypeError("Unknown gallery view.");ve(),ye=null,L=D;let Z=D==="axonometric";y.forEach(W=>W.visible=!Z),w.visible=!Z,T.visible=Z,p=Z?v:b,Ae.setViewMode(D),_.enabled=Z&&j,Re(),se(),ze()}function I(D){N=!!D,N&&(G=Ee(G,-.8,.8)),Re(),ze()}Re(),se(),be.addEventListener("contextmenu",D=>D.preventDefault()),be.addEventListener("pointerdown",D=>{if(L==="axonometric"||D.button>2)return;D.preventDefault(),Ye(),ye=null;let W=(D.button===2?Se(D):null)?.point.clone()||h.clone().add(p.getWorldDirection(new O).multiplyScalar(5));H={id:D.pointerId,button:D.button,x:D.clientX,y:D.clientY,pivot:W},be.setPointerCapture(D.pointerId),s.classList.add("is-dragging")}),be.addEventListener("pointermove",D=>{if(!H||H.id!==D.pointerId)return;let Z=D.clientX-H.x,W=D.clientY-H.y;if(H.x=D.clientX,H.y=D.clientY,H.button===0)k-=Z*.0035,G=Ee(G-W*.0035,N?-.8:-1.45,N?.8:1.45);else if(H.button===1)f.set(Math.cos(k),0,-Math.sin(k)),h.addScaledVector(f,-Z*.008),V&&(h.y+=W*.008),te(h);else{let me=h.clone().sub(H.pivot),ue=new mi().setFromVector3(me);ue.theta-=Z*.0035,V&&(ue.phi=Ee(ue.phi+W*.0035,.1,Math.PI-.1)),h.copy(H.pivot).add(new O().setFromSpherical(ue)),te(h),p.position.copy(h),p.lookAt(H.pivot);let C=new Qt().setFromQuaternion(p.quaternion,"YXZ");k=C.y,G=Ee(C.x-(V?0:W*.0035),N?-.8:-1.45,N?.8:1.45)}ze()});function S(D){if(H?.id===D.pointerId){try{be.releasePointerCapture(D.pointerId)}catch{}H=null,s.classList.remove("is-dragging")}}be.addEventListener("pointerup",S),be.addEventListener("pointercancel",S),be.addEventListener("lostpointercapture",()=>{H=null,s.classList.remove("is-dragging")}),be.addEventListener("dblclick",D=>{if(L==="axonometric"||D.button!==0)return;let Z=Se(D);if(!Z||Z.object.name!=="floor")return;Ye();let W=Z.point.clone();W.y=V?h.y:i,te(W),ye={from:h.clone(),to:W,start:performance.now()},ze()}),be.addEventListener("wheel",D=>{if(L==="axonometric"||!j)return;D.preventDefault(),ye=null;let Z=D.deltaMode===1?16:D.deltaMode===2?e.clientHeight:1,W=Ee(D.deltaY*Z*.006,-1.2,1.2),me=V?G:0;d.set(-Math.sin(k)*Math.cos(me),Math.sin(me),-Math.cos(k)*Math.cos(me)),h.addScaledVector(d,-W),te(h),ze()},{passive:!1}),document.addEventListener("keydown",D=>{if(!(D.code==="Escape"&&document.querySelector("#exhibition-materials[open],#saved-model-edit[open]"))){if(D.code==="Escape"&&document.fullscreenElement===s){ve(),ye=null,document.exitFullscreen().catch(()=>{});return}if(!(!j||document.activeElement!==s||L==="axonometric")){if(D.code==="Escape"){ve(),ye=null;return}if(D.code==="Space"){D.preventDefault(),D.repeat||(V=!V,te(h),Re(),ze());return}Fe.has(D.code)&&(D.preventDefault(),l.add(D.code),ze())}}}),document.addEventListener("keyup",D=>{l.delete(D.code)&&ze()}),s.addEventListener("focus",()=>{j=!0,_&&(_.enabled=L==="axonometric")}),s.addEventListener("blur",()=>{j=!1,_.enabled=!1,ve(),ye=null}),document.addEventListener("pointerdown",D=>{s.contains(D.target)||(j=!1,_.enabled=!1,ve(),ye=null,s.blur())},!0),window.addEventListener("blur",()=>{j=!1,_.enabled=!1,ve(),ye=null}),document.addEventListener("visibilitychange",()=>{document.hidden?(ve(),ye=null,ie&&cancelAnimationFrame(ie),ie=0):ze()}),t("walk-mode").addEventListener("click",()=>{V=!V,te(h),Re(),Ye(),ze()}),t("walk-two-point").addEventListener("click",()=>{I(!N),Ye()}),t("walk-view-toggle").addEventListener("click",()=>{Ue(L==="room"?"axonometric":"room"),Ye()}),t("walk-reset").addEventListener("click",()=>{ae(),Ye()}),t("walk-help-toggle").addEventListener("click",()=>{let D=t("walk-help-panel").hidden;t("walk-help-panel").hidden=!D,t("walk-help-toggle").setAttribute("aria-expanded",String(D))}),t("walk-fullscreen").addEventListener("click",async()=>{try{document.fullscreenElement===s?await document.exitFullscreen():await s.requestFullscreen(),Ye()}catch{t("walk-notice").textContent="Fullscreen is unavailable in this browser. You can still explore the room here."}}),document.addEventListener("fullscreenchange",()=>{let D=document.fullscreenElement===s;t("walk-fullscreen").textContent=D?"Exit fullscreen":"Fullscreen",t("walk-fullscreen").setAttribute("aria-pressed",String(D)),ve(),se(),s.dataset.modelBrowse==="true"||document.fullscreenElement&&document.fullscreenElement!==s||s.dataset.workspaceOpen&&s.dataset.workspaceOpen!=="none"?Ne():Ye()}),be.addEventListener("webglcontextlost",D=>{D.preventDefault(),M=!1,ve(),le("The graphics connection was interrupted. Reload this page to reopen the room.")});let Y=new ResizeObserver(se);Y.observe(e),Y.observe(t("walk-toolbar")),window.addEventListener("resize",se),window.addEventListener("pagehide",D=>{if(ve(),ie&&cancelAnimationFrame(ie),ie=0,!D.persisted){P=!0,Y.disconnect(),_.dispose();let Z=new Set,W=new Set;m.traverse(me=>{if(me.geometry&&Z.add(me.geometry),me.material)for(let ue of Array.isArray(me.material)?me.material:[me.material])W.add(ue)}),Z.forEach(me=>me.dispose()),W.forEach(me=>me.dispose()),R?.dispose(),x.dispose()}}),window.addEventListener("pageshow",()=>{se()}),window.ExhibitionWalk=Object.freeze({state:()=>({space:R.state(),ready:M,environment:"white-enclosed-gallery",room:{...n,closed:!0,wallCount:4,floor:!0,ceiling:!0},camera:L==="room"?{x:h.x,y:h.y,z:h.z,yaw:k,pitch:G}:{x:v.position.x,y:v.position.y,z:v.position.z},viewMode:L,twoPoint:N,projection:p.isOrthographicCamera?"orthographic":"perspective",walkingCamera:{x:h.x,y:h.y,z:h.z,yaw:k,pitch:G},fly:V,active:j,fullscreen:document.fullscreenElement===s,axonometric:{zoom:v.zoom,target:_.target.toArray(),wallsVisible:y.filter(D=>D.name.includes("wall")&&D.visible).length,ceilingVisible:y.find(D=>D.name==="ceiling").visible},grid:{visible:T.visible,size:20,divisions:20,cellSize:1,cells:400,lines:E.geometry.attributes.position.count/2,opacity:E.material.opacity},floorJunctions:{visible:w.visible,seam:!0,softContactShading:!0},walkingBounds:{x:[-a,a],z:[-a,a],y:[r,n.height-r]},displayCount:Ae.state().modelCount,modelsLoaded:Ae.state().modelCount,textureCount:Ae.state().textureCount,placements:Ae.state(),performance:{triangles:x.info.render.triangles,drawCalls:x.info.render.calls,pixelRatio:x.getPixelRatio(),continuousRendering:!!ie,frameCount:pe},moving:!!ye||F()}),reset:ae,setViewMode:Ue,setTwoPoint:I,suspendNavigation:Ne,placement:Ae,space:R,gridSegments:()=>Array.from(E.geometry.attributes.position.array),setCamera:D=>{ve(),ye=null,typeof D.fly=="boolean"&&(V=D.fly),h.set(D.x??h.x,D.y??h.y,D.z??h.z),te(h),k=D.yaw??k,G=Ee(D.pitch??G,N?-.8:-1.45,N?.8:1.45),Re(),ze()},projectWorld:D=>{_e();let Z=be.getBoundingClientRect();return D.map(W=>{let me=new O().fromArray(W).project(p);return{x:Z.left+(me.x+1)*Z.width/2,y:Z.top+(1-me.y)*Z.height/2,depth:me.z}})}})})();})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
