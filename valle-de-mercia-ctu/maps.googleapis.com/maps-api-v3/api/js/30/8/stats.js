google.maps.__gjsload__('stats', function(_){var S_=function(){this.b=new _.bl},T_=function(a){var b=0,c=0;a.b.forEach(function(a){b+=a.Lo;c+=a.ko});return c?b/c:0},U_=function(a,b,c){var d=[];_.gb(a,function(a,c){d.push(c+b+a)});return d.join(c)},V_=function(a){var b={};_.gb(a,function(a,d){b[(0,window.encodeURIComponent)(d)]=(0,window.encodeURIComponent)(a).replace(/%7C/g,"|")});return U_(b,":",",")},W_=function(a,b,c){this.l=b;this.f=a+"/maps/gen_204";this.j=c},X_=function(a,b,c,d){var e={};e.host=window.document.location&&window.document.location.host||
window.location.host;e.v=a;e.r=Math.round(1/b);c&&(e.client=c);d&&(e.key=d);return e},Y_=function(a,b,c,d,e){this.m=a;this.C=b;this.l=c;this.f=d;this.j=e;this.b=new _.bl;this.B=_.Ua()},$_=function(a,b,c,d,e){var f=_.N(_.R,23,500);var g=_.N(_.R,22,2);this.D=a;this.G=b;this.F=f;this.l=g;this.C=c;this.m=d;this.B=e;this.f=new _.bl;this.b=0;this.j=_.Ua();Z_(this)},Z_=function(a){window.setTimeout(function(){a0(a);Z_(a)},Math.min(a.F*Math.pow(a.l,a.b),2147483647))},b0=function(a,b,c){a.f.set(b,c)},a0=function(a){var b=
X_(a.G,a.C,a.m,a.B);b.t=a.b+"-"+(_.Ua()-a.j);a.f.forEach(function(a,d){a=a();0<a&&(b[d]=Number(a.toFixed(2))+(_.Bm()?"-if":""))});a.D.b({ev:"api_snap"},b);++a.b},c0=function(a,b,c,d,e){this.B=a;this.C=b;this.m=c;this.j=d;this.l=e;this.f={};this.b=[]},d0=function(a,b,c,d){this.j=a;_.G.bind(this.j,"set_at",this,this.l);_.G.bind(this.j,"insert_at",this,this.l);this.B=b;this.C=c;this.m=d;this.f=0;this.b={};this.l()},e0=function(){this.j=_.O(_.R,6);this.C=_.yf();this.b=new W_(_.wg[35]?_.O(_.zf(_.R),11):
_.ow,_.lj,window.document);new d0(_.Zi,(0,_.p)(this.b.b,this.b),_.Ef,!!this.j);var a=_.O(new _.sf(_.R.data[3]),1);this.D=a.split(".")[1]||a;this.G={};this.B={};this.m={};this.F={};this.fa=_.N(_.R,0,1);_.kj&&(this.l=new $_(this.b,this.D,this.fa,this.j,this.C))};S_.prototype.f=function(a,b,c){this.b.set(_.Xc(a),{Lo:b,ko:c})};
W_.prototype.b=function(a,b){b=b||{};var c=_.hk().toString(36);b.src="apiv3";b.token=this.l;b.ts=c.substr(c.length-6);a.cad=V_(b);a=U_(a,"=","&");a=this.f+"?target=api&"+a;this.j.createElement("img").src=a;(b=_.pb.__gm_captureCSI)&&b(a)};
Y_.prototype.D=function(a,b){b=_.m(b)?b:1;this.b.isEmpty()&&window.setTimeout((0,_.p)(function(){var a=X_(this.C,this.l,this.f,this.j);a.t=_.Ua()-this.B;var b=this.b;_.Bl(b);for(var e={},f=0;f<b.b.length;f++){var g=b.b[f];e[g]=b.H[g]}_.Nz(a,e);this.b.clear();this.m.b({ev:"api_maprft"},a)},this),500);b=this.b.get(a,0)+b;this.b.set(a,b)};c0.prototype.D=function(a){this.f[a]||(this.f[a]=!0,this.b.push(a),2>this.b.length&&_.jA(this,this.G,500))};
c0.prototype.G=function(){for(var a=X_(this.C,this.m,this.j,this.l),b=0,c;c=this.b[b];++b)a[c]="1";a.hybrid=+_.fm();this.b.length=0;this.B.b({ev:"api_mapft"},a)};d0.prototype.l=function(){for(var a;a=this.j.removeAt(0);){var b=a.Mn;a=a.timestamp-this.C;++this.f;this.b[b]||(this.b[b]=0);++this.b[b];if(20<=this.f&&!(this.f%5)){var c={};c.s=b;c.sr=this.b[b];c.tr=this.f;c.te=a;c.hc=this.m?"1":"0";this.B({ev:"api_services"},c)}}};e0.prototype.V=function(a){a=_.Xc(a);this.G[a]||(this.G[a]=new c0(this.b,this.D,this.fa,this.j,this.C));return this.G[a]};e0.prototype.S=function(a){a=_.Xc(a);this.B[a]||(this.B[a]=new Y_(this.b,this.D,_.N(_.R,0,1),this.j,this.C));return this.B[a]};e0.prototype.f=function(a){if(this.l){this.m[a]||(this.m[a]=new _.bB,b0(this.l,a,function(){return b.Za()}));var b=this.m[a];return b}};
e0.prototype.O=function(a){if(this.l){this.F[a]||(this.F[a]=new S_,b0(this.l,a,function(){return T_(b)}));var b=this.F[a];return b}};var f0=new e0;_.je("stats",f0);});

/*
     FILE ARCHIVED ON 15:45:43 Oct 10, 2017 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 22:09:21 Apr 08, 2018.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  LoadShardBlock: 25.224 (3)
  esindex: 0.007
  captures_list: 127.609
  CDXLines.iter: 21.335 (3)
  PetaboxLoader3.datanode: 52.603 (5)
  exclusion.robots: 0.199
  exclusion.robots.policy: 0.174
  RedisCDXSource: 1.692
  PetaboxLoader3.resolve: 164.679 (2)
  load_resource: 212.104
*/