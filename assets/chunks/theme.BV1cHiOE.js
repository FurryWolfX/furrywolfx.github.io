const __vite__fileDeps=["assets/chunks/VPLocalSearchBox.CIKYNEjr.js","assets/chunks/framework.CWaimgAe.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{d as F,o as _,c as L,r as k,n as wn,a as it,t as mn,b as J,w as P,e as V,T as Mo,_ as q,u as yu,i as S_,f as L_,g as Eo,h as nn,j as kn,k as Dt,l as T,m as $,p as Un,q as Gn,s as Rt,v as Co,x as ot,y as Oo,z as No,A as ku,B as A_,C as C_,D as _t,F as $n,E as Yn,G as wu,H as jr,I as W,J as ni,K as Su,L as Nt,M as Xr,N as ei,O as P_,P as Lu,Q as Po,R as T_,S as Au,U as ti,V as I_,W as x_,X as M_,Y as Cu,Z as Pu,$ as E_,a0 as O_,a1 as N_,a2 as R_,a3 as D_}from"./framework.CWaimgAe.js";var Ot=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Tu(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}var Iu={exports:{}};(function(l,u){(function(i,d){l.exports=d()})(Ot,function(){var i=1e3,d=6e4,h=36e5,m="millisecond",y="second",I="minute",C="hour",H="day",z="week",O="month",an="quarter",on="year",vn="date",Bn="Invalid Date",en=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,Qn=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,ie={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(Y){var R=["th","st","nd","rd"],E=Y%100;return"["+Y+(R[(E-20)%10]||R[E]||R[0])+"]"}},Tn=function(Y,R,E){var D=String(Y);return!D||D.length>=R?Y:""+Array(R+1-D.length).join(E)+Y},he={s:Tn,z:function(Y){var R=-Y.utcOffset(),E=Math.abs(R),D=Math.floor(E/60),x=E%60;return(R<=0?"+":"-")+Tn(D,2,"0")+":"+Tn(x,2,"0")},m:function Y(R,E){if(R.date()<E.date())return-Y(E,R);var D=12*(E.year()-R.year())+(E.month()-R.month()),x=R.clone().add(D,O),Q=E-x<0,X=R.clone().add(D+(Q?-1:1),O);return+(-(D+(E-x)/(Q?x-X:X-x))||0)},a:function(Y){return Y<0?Math.ceil(Y)||0:Math.floor(Y)},p:function(Y){return{M:O,y:on,w:z,d:H,D:vn,h:C,m:I,s:y,ms:m,Q:an}[Y]||String(Y||"").toLowerCase().replace(/s$/,"")},u:function(Y){return Y===void 0}},Mn="en",jn={};jn[Mn]=ie;var ve="$isDayjsObject",Ne=function(Y){return Y instanceof mt||!(!Y||!Y[ve])},Ye=function Y(R,E,D){var x;if(!R)return Mn;if(typeof R=="string"){var Q=R.toLowerCase();jn[Q]&&(x=Q),E&&(jn[Q]=E,x=Q);var X=R.split("-");if(!x&&X.length>1)return Y(X[0])}else{var un=R.name;jn[un]=R,x=un}return!D&&x&&(Mn=x),x||!D&&Mn},En=function(Y,R){if(Ne(Y))return Y.clone();var E=typeof R=="object"?R:{};return E.date=Y,E.args=arguments,new mt(E)},pn=he;pn.l=Ye,pn.i=Ne,pn.w=function(Y,R){return En(Y,{locale:R.$L,utc:R.$u,x:R.$x,$offset:R.$offset})};var mt=function(){function Y(E){this.$L=Ye(E.locale,null,!0),this.parse(E),this.$x=this.$x||E.x||{},this[ve]=!0}var R=Y.prototype;return R.parse=function(E){this.$d=function(D){var x=D.date,Q=D.utc;if(x===null)return new Date(NaN);if(pn.u(x))return new Date;if(x instanceof Date)return new Date(x);if(typeof x=="string"&&!/Z$/i.test(x)){var X=x.match(en);if(X){var un=X[2]-1||0,An=(X[7]||"0").substring(0,3);return Q?new Date(Date.UTC(X[1],un,X[3]||1,X[4]||0,X[5]||0,X[6]||0,An)):new Date(X[1],un,X[3]||1,X[4]||0,X[5]||0,X[6]||0,An)}}return new Date(x)}(E),this.init()},R.init=function(){var E=this.$d;this.$y=E.getFullYear(),this.$M=E.getMonth(),this.$D=E.getDate(),this.$W=E.getDay(),this.$H=E.getHours(),this.$m=E.getMinutes(),this.$s=E.getSeconds(),this.$ms=E.getMilliseconds()},R.$utils=function(){return pn},R.isValid=function(){return this.$d.toString()!==Bn},R.isSame=function(E,D){var x=En(E);return this.startOf(D)<=x&&x<=this.endOf(D)},R.isAfter=function(E,D){return En(E)<this.startOf(D)},R.isBefore=function(E,D){return this.endOf(D)<En(E)},R.$g=function(E,D,x){return pn.u(E)?this[D]:this.set(x,E)},R.unix=function(){return Math.floor(this.valueOf()/1e3)},R.valueOf=function(){return this.$d.getTime()},R.startOf=function(E,D){var x=this,Q=!!pn.u(D)||D,X=pn.p(E),un=function(oe,Kn){var se=pn.w(x.$u?Date.UTC(x.$y,Kn,oe):new Date(x.$y,Kn,oe),x);return Q?se:se.endOf(H)},An=function(oe,Kn){return pn.w(x.toDate()[oe].apply(x.toDate("s"),(Q?[0,0,0,0]:[23,59,59,999]).slice(Kn)),x)},On=this.$W,Vn=this.$M,Nn=this.$D,we="set"+(this.$u?"UTC":"");switch(X){case on:return Q?un(1,0):un(31,11);case O:return Q?un(1,Vn):un(0,Vn+1);case z:var Re=this.$locale().weekStart||0,Se=(On<Re?On+7:On)-Re;return un(Q?Nn-Se:Nn+(6-Se),Vn);case H:case vn:return An(we+"Hours",0);case C:return An(we+"Minutes",1);case I:return An(we+"Seconds",2);case y:return An(we+"Milliseconds",3);default:return this.clone()}},R.endOf=function(E){return this.startOf(E,!1)},R.$set=function(E,D){var x,Q=pn.p(E),X="set"+(this.$u?"UTC":""),un=(x={},x[H]=X+"Date",x[vn]=X+"Date",x[O]=X+"Month",x[on]=X+"FullYear",x[C]=X+"Hours",x[I]=X+"Minutes",x[y]=X+"Seconds",x[m]=X+"Milliseconds",x)[Q],An=Q===H?this.$D+(D-this.$W):D;if(Q===O||Q===on){var On=this.clone().set(vn,1);On.$d[un](An),On.init(),this.$d=On.set(vn,Math.min(this.$D,On.daysInMonth())).$d}else un&&this.$d[un](An);return this.init(),this},R.set=function(E,D){return this.clone().$set(E,D)},R.get=function(E){return this[pn.p(E)]()},R.add=function(E,D){var x,Q=this;E=Number(E);var X=pn.p(D),un=function(Vn){var Nn=En(Q);return pn.w(Nn.date(Nn.date()+Math.round(Vn*E)),Q)};if(X===O)return this.set(O,this.$M+E);if(X===on)return this.set(on,this.$y+E);if(X===H)return un(1);if(X===z)return un(7);var An=(x={},x[I]=d,x[C]=h,x[y]=i,x)[X]||1,On=this.$d.getTime()+E*An;return pn.w(On,this)},R.subtract=function(E,D){return this.add(-1*E,D)},R.format=function(E){var D=this,x=this.$locale();if(!this.isValid())return x.invalidDate||Bn;var Q=E||"YYYY-MM-DDTHH:mm:ssZ",X=pn.z(this),un=this.$H,An=this.$m,On=this.$M,Vn=x.weekdays,Nn=x.months,we=x.meridiem,Re=function(Kn,se,xe,st){return Kn&&(Kn[se]||Kn(D,Q))||xe[se].slice(0,st)},Se=function(Kn){return pn.s(un%12||12,Kn,"0")},oe=we||function(Kn,se,xe){var st=Kn<12?"AM":"PM";return xe?st.toLowerCase():st};return Q.replace(Qn,function(Kn,se){return se||function(xe){switch(xe){case"YY":return String(D.$y).slice(-2);case"YYYY":return pn.s(D.$y,4,"0");case"M":return On+1;case"MM":return pn.s(On+1,2,"0");case"MMM":return Re(x.monthsShort,On,Nn,3);case"MMMM":return Re(Nn,On);case"D":return D.$D;case"DD":return pn.s(D.$D,2,"0");case"d":return String(D.$W);case"dd":return Re(x.weekdaysMin,D.$W,Vn,2);case"ddd":return Re(x.weekdaysShort,D.$W,Vn,3);case"dddd":return Vn[D.$W];case"H":return String(un);case"HH":return pn.s(un,2,"0");case"h":return Se(1);case"hh":return Se(2);case"a":return oe(un,An,!0);case"A":return oe(un,An,!1);case"m":return String(An);case"mm":return pn.s(An,2,"0");case"s":return String(D.$s);case"ss":return pn.s(D.$s,2,"0");case"SSS":return pn.s(D.$ms,3,"0");case"Z":return X}return null}(Kn)||X.replace(":","")})},R.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},R.diff=function(E,D,x){var Q,X=this,un=pn.p(D),An=En(E),On=(An.utcOffset()-this.utcOffset())*d,Vn=this-An,Nn=function(){return pn.m(X,An)};switch(un){case on:Q=Nn()/12;break;case O:Q=Nn();break;case an:Q=Nn()/3;break;case z:Q=(Vn-On)/6048e5;break;case H:Q=(Vn-On)/864e5;break;case C:Q=Vn/h;break;case I:Q=Vn/d;break;case y:Q=Vn/i;break;default:Q=Vn}return x?Q:pn.a(Q)},R.daysInMonth=function(){return this.endOf(O).$D},R.$locale=function(){return jn[this.$L]},R.locale=function(E,D){if(!E)return this.$L;var x=this.clone(),Q=Ye(E,D,!0);return Q&&(x.$L=Q),x},R.clone=function(){return pn.w(this.$d,this)},R.toDate=function(){return new Date(this.valueOf())},R.toJSON=function(){return this.isValid()?this.toISOString():null},R.toISOString=function(){return this.$d.toISOString()},R.toString=function(){return this.$d.toUTCString()},Y}(),or=mt.prototype;return En.prototype=or,[["$ms",m],["$s",y],["$m",I],["$H",C],["$W",H],["$M",O],["$y",on],["$D",vn]].forEach(function(Y){or[Y[1]]=function(R){return this.$g(R,Y[0],Y[1])}}),En.extend=function(Y,R){return Y.$i||(Y(R,mt,En),Y.$i=!0),En},En.locale=Ye,En.isDayjs=Ne,En.unix=function(Y){return En(1e3*Y)},En.en=jn[Mn],En.Ls=jn,En.p={},En})})(Iu);var B_=Iu.exports;const V_=Tu(B_),F_=F({__name:"VPBadge",props:{text:{},type:{default:"tip"}},setup(l){return(u,i)=>(_(),L("span",{class:wn(["VPBadge",u.type])},[k(u.$slots,"default",{},()=>[it(mn(u.text),1)])],2))}}),H_={key:0,class:"VPBackdrop"},W_=F({__name:"VPBackdrop",props:{show:{type:Boolean}},setup(l){return(u,i)=>(_(),J(Mo,{name:"fade"},{default:P(()=>[u.show?(_(),L("div",H_)):V("",!0)]),_:1}))}}),U_=q(W_,[["__scopeId","data-v-9f780e81"]]),dn=yu;function G_(l,u){let i,d=!1;return()=>{i&&clearTimeout(i),d?i=setTimeout(l,u):(l(),(d=!0)&&setTimeout(()=>d=!1,u))}}function To(l){return/^\//.test(l)?l:`/${l}`}function Ro(l){const{pathname:u,search:i,hash:d,protocol:h}=new URL(l,"http://a.com");if(S_(l)||l.startsWith("#")||!h.startsWith("http")||!L_(u))return l;const{site:m}=dn(),y=u.endsWith("/")||u.endsWith(".html")?l:l.replace(/(?:(^\.+)\/)?.*$/,`$1${u.replace(/(\.md)?$/,m.value.cleanUrls?"":".html")}${i}${d}`);return Eo(y)}function ir({removeCurrent:l=!0,correspondingLink:u=!1}={}){const{site:i,localeIndex:d,page:h,theme:m,hash:y}=dn(),I=nn(()=>{var H,z;return{index:d.value,label:(H=i.value.locales[d.value])==null?void 0:H.label,link:((z=i.value.locales[d.value])==null?void 0:z.link)||(d.value==="root"?"/":`/${d.value}/`)}});return{localeLinks:nn(()=>Object.entries(i.value.locales).flatMap(([H,z])=>l&&I.value.label===z.label?[]:{index:H,text:z.label,link:K_(z.link||(H==="root"?"/":`/${H}/`),m.value.i18nRouting!==!1&&u,h.value.relativePath.slice(I.value.link.length-1),!i.value.cleanUrls)+y.value})),currentLang:I}}function K_(l,u,i,d){return u?l.replace(/\/$/,"")+To(i.replace(/(^|\/)index\.md$/,"$1").replace(/\.md$/,d?".html":"")):l}const q_=l=>(Un("data-v-27403d43"),l=l(),Gn(),l),z_={class:"NotFound"},Y_={class:"code"},X_={class:"title"},J_=q_(()=>T("div",{class:"divider"},null,-1)),Z_={class:"quote"},Q_={class:"action"},j_=["href","aria-label"],ng=F({__name:"NotFound",setup(l){const{site:u}=dn(),{localeLinks:i}=ir({removeCurrent:!1}),d=kn({link:"/",index:"root"});Dt(()=>{const m=window.location.pathname.replace(u.value.base,"").replace(/(^.*?\/).*$/,"/$1");i.value.length&&(d.value=i.value.find(({link:y})=>y.startsWith(m))||i.value[0])});const h=nn(()=>{var m,y,I,C;return{code:404,title:"PAGE NOT FOUND",quote:"But if you don't change your direction, and if you keep looking, you may end up where you are heading.",linkLabel:"go to home",linkText:"Take me home",...d.value.index==="root"?(m=u.value.themeConfig)==null?void 0:m.notFound:(C=(I=(y=u.value.locales)==null?void 0:y[d.value.index])==null?void 0:I.themeConfig)==null?void 0:C.notFound}});return(m,y)=>(_(),L("div",z_,[T("p",Y_,mn(h.value.code),1),T("h1",X_,mn(h.value.title),1),J_,T("blockquote",Z_,mn(h.value.quote),1),T("div",Q_,[T("a",{class:"link",href:$(Eo)(d.value.link),"aria-label":h.value.linkLabel},mn(h.value.linkText),9,j_)])]))}}),eg=q(ng,[["__scopeId","data-v-27403d43"]]);function tg(l,u){if(Array.isArray(l))return Jr(l);if(l==null)return[];u=To(u);const i=Object.keys(l).sort((h,m)=>m.split("/").length-h.split("/").length).find(h=>u.startsWith(To(h))),d=i?l[i]:[];return Array.isArray(d)?Jr(d):Jr(d.items,d.base)}function rg(l){const u=[];let i=0;for(const d in l){const h=l[d];if(h.items){i=u.push(h);continue}u[i]||u.push({items:[]}),u[i].items.push(h)}return u}function Io(l,u){return Array.isArray(u)?u.some(i=>Io(l,i)):Rt(l,u.link)?!0:u.items?Io(l,u.items):!1}function Jr(l,u){return[...l].map(i=>{const d={...i},h=d.base||u;return h&&d.link&&(d.link=h+d.link),d.items&&(d.items=Jr(d.items,h)),d})}function ze(){const{frontmatter:l,page:u,theme:i}=dn(),d=Co("(min-width: 960px)"),h=kn(!1),m=nn(()=>{const Bn=i.value.sidebar,en=u.value.relativePath;return Bn?tg(Bn,en):[]}),y=kn(m.value);ot(m,(Bn,en)=>{JSON.stringify(Bn)!==JSON.stringify(en)&&(y.value=m.value)});const I=nn(()=>l.value.sidebar!==!1&&y.value.length>0&&l.value.layout!=="home"),C=nn(()=>H?l.value.aside==null?i.value.aside==="left":l.value.aside==="left":!1),H=nn(()=>l.value.layout==="home"?!1:l.value.aside!=null?!!l.value.aside:i.value.aside!==!1),z=nn(()=>I.value&&d.value),O=nn(()=>I.value?rg(y.value):[]);function an(){h.value=!0}function on(){h.value=!1}function vn(){h.value?on():an()}return{isOpen:h,sidebar:y,sidebarGroups:O,hasSidebar:I,hasAside:H,leftAside:C,isSidebarEnabled:z,open:an,close:on,toggle:vn}}function ig(l,u){let i;Oo(()=>{i=l.value?document.activeElement:void 0}),Dt(()=>{window.addEventListener("keyup",d)}),No(()=>{window.removeEventListener("keyup",d)});function d(h){h.key==="Escape"&&l.value&&(u(),i==null||i.focus())}}function og(l){const{page:u,hash:i}=dn(),d=kn(!1),h=nn(()=>l.value.collapsed!=null),m=nn(()=>!!l.value.link),y=kn(!1),I=()=>{y.value=Rt(u.value.relativePath,l.value.link)};ot([u,l,i],I),Dt(I);const C=nn(()=>y.value?!0:l.value.items?Io(u.value.relativePath,l.value.items):!1),H=nn(()=>!!(l.value.items&&l.value.items.length));Oo(()=>{d.value=!!(h.value&&l.value.collapsed)}),ku(()=>{(y.value||C.value)&&(d.value=!1)});function z(){h.value&&(d.value=!d.value)}return{collapsed:d,collapsible:h,isLink:m,isActiveLink:y,hasActiveLink:C,hasChildren:H,toggle:z}}function sg(){const{hasSidebar:l}=ze(),u=Co("(min-width: 960px)"),i=Co("(min-width: 1280px)");return{isAsideEnabled:nn(()=>!i.value&&!u.value?!1:l.value?i.value:u.value)}}const xo=[];function xu(l){return typeof l.outline=="object"&&!Array.isArray(l.outline)&&l.outline.label||l.outlineTitle||"On this page"}function Do(l){const u=[...document.querySelectorAll(".VPDoc :where(h1,h2,h3,h4,h5,h6)")].filter(i=>i.id&&i.hasChildNodes()).map(i=>{const d=Number(i.tagName[1]);return{element:i,title:ag(i),link:"#"+i.id,level:d}});return ug(u,l)}function ag(l){let u="";for(const i of l.childNodes)if(i.nodeType===1){if(i.classList.contains("VPBadge")||i.classList.contains("header-anchor")||i.classList.contains("ignore-header"))continue;u+=i.textContent}else i.nodeType===3&&(u+=i.textContent);return u.trim()}function ug(l,u){if(u===!1)return[];const i=(typeof u=="object"&&!Array.isArray(u)?u.level:u)||2,[d,h]=typeof i=="number"?[i,i]:i==="deep"?[2,6]:i;l=l.filter(y=>y.level>=d&&y.level<=h),xo.length=0;for(const{element:y,link:I}of l)xo.push({element:y,link:I});const m=[];n:for(let y=0;y<l.length;y++){const I=l[y];if(y===0)m.push(I);else{for(let C=y-1;C>=0;C--){const H=l[C];if(H.level<I.level){(H.children||(H.children=[])).push(I);continue n}}m.push(I)}}return m}function lg(l,u){const{isAsideEnabled:i}=sg(),d=G_(m,100);let h=null;Dt(()=>{requestAnimationFrame(m),window.addEventListener("scroll",d)}),A_(()=>{y(location.hash)}),No(()=>{window.removeEventListener("scroll",d)});function m(){if(!i.value)return;const I=window.scrollY,C=window.innerHeight,H=document.body.offsetHeight,z=Math.abs(I+C-H)<1,O=xo.map(({element:on,link:vn})=>({link:vn,top:cg(on)})).filter(({top:on})=>!Number.isNaN(on)).sort((on,vn)=>on.top-vn.top);if(!O.length){y(null);return}if(I<1){y(null);return}if(z){y(O[O.length-1].link);return}let an=null;for(const{link:on,top:vn}of O){if(vn>I+C_()+4)break;an=on}y(an)}function y(I){h&&h.classList.remove("active"),I==null?h=null:h=l.value.querySelector(`a[href="${decodeURIComponent(I)}"]`);const C=h;C?(C.classList.add("active"),u.value.style.top=C.offsetTop+39+"px",u.value.style.opacity="1"):(u.value.style.top="33px",u.value.style.opacity="0")}}function cg(l){let u=0;for(;l!==document.body;){if(l===null)return NaN;u+=l.offsetTop,l=l.offsetParent}return u}const fg=["href","title"],dg=F({__name:"VPDocOutlineItem",props:{headers:{},root:{type:Boolean}},setup(l){function u({target:i}){const d=i.href.split("#")[1],h=document.getElementById(decodeURIComponent(d));h==null||h.focus({preventScroll:!0})}return(i,d)=>{const h=_t("VPDocOutlineItem",!0);return _(),L("ul",{class:wn(["VPDocOutlineItem",i.root?"root":"nested"])},[(_(!0),L($n,null,Yn(i.headers,({children:m,link:y,title:I})=>(_(),L("li",null,[T("a",{class:"outline-link",href:y,onClick:u,title:I},mn(I),9,fg),m!=null&&m.length?(_(),J(h,{key:0,headers:m},null,8,["headers"])):V("",!0)]))),256))],2)}}}),Mu=q(dg,[["__scopeId","data-v-30999ff8"]]),hg={class:"content"},vg={"aria-level":"2",class:"outline-title",id:"doc-outline-aria-label",role:"heading"},pg=F({__name:"VPDocAsideOutline",setup(l){const{frontmatter:u,theme:i}=dn(),d=wu([]);jr(()=>{d.value=Do(u.value.outline??i.value.outline)});const h=kn(),m=kn();return lg(h,m),(y,I)=>(_(),L("nav",{"aria-labelledby":"doc-outline-aria-label",class:wn(["VPDocAsideOutline",{"has-outline":d.value.length>0}]),ref_key:"container",ref:h,role:"navigation"},[T("div",hg,[T("div",{class:"outline-marker",ref_key:"marker",ref:m},null,512),T("div",vg,mn($(xu)($(i))),1),W(Mu,{headers:d.value,root:!0},null,8,["headers"])])],2))}}),_g=q(pg,[["__scopeId","data-v-36e0fc5d"]]),gg={class:"VPDocAsideCarbonAds"},mg=F({__name:"VPDocAsideCarbonAds",props:{carbonAds:{}},setup(l){const u=()=>null;return(i,d)=>(_(),L("div",gg,[W($(u),{"carbon-ads":i.carbonAds},null,8,["carbon-ads"])]))}}),bg=l=>(Un("data-v-7946170d"),l=l(),Gn(),l),$g={class:"VPDocAside"},yg=bg(()=>T("div",{class:"spacer"},null,-1)),kg=F({__name:"VPDocAside",setup(l){const{theme:u}=dn();return(i,d)=>(_(),L("div",$g,[k(i.$slots,"aside-top",{},void 0,!0),k(i.$slots,"aside-outline-before",{},void 0,!0),W(_g),k(i.$slots,"aside-outline-after",{},void 0,!0),yg,k(i.$slots,"aside-ads-before",{},void 0,!0),$(u).carbonAds?(_(),J(mg,{key:0,"carbon-ads":$(u).carbonAds},null,8,["carbon-ads"])):V("",!0),k(i.$slots,"aside-ads-after",{},void 0,!0),k(i.$slots,"aside-bottom",{},void 0,!0)]))}}),wg=q(kg,[["__scopeId","data-v-7946170d"]]);var Zr={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */Zr.exports;(function(l,u){(function(){var i,d="4.17.21",h=200,m="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",y="Expected a function",I="Invalid `variable` option passed into `_.template`",C="__lodash_hash_undefined__",H=500,z="__lodash_placeholder__",O=1,an=2,on=4,vn=1,Bn=2,en=1,Qn=2,ie=4,Tn=8,he=16,Mn=32,jn=64,ve=128,Ne=256,Ye=512,En=30,pn="...",mt=800,or=16,Y=1,R=2,E=3,D=1/0,x=9007199254740991,Q=17976931348623157e292,X=NaN,un=4294967295,An=un-1,On=un>>>1,Vn=[["ary",ve],["bind",en],["bindKey",Qn],["curry",Tn],["curryRight",he],["flip",Ye],["partial",Mn],["partialRight",jn],["rearg",Ne]],Nn="[object Arguments]",we="[object Array]",Re="[object AsyncFunction]",Se="[object Boolean]",oe="[object Date]",Kn="[object DOMException]",se="[object Error]",xe="[object Function]",st="[object GeneratorFunction]",Le="[object Map]",Bt="[object Number]",Fu="[object Null]",De="[object Object]",Wo="[object Promise]",Hu="[object Proxy]",Vt="[object RegExp]",Ae="[object Set]",Ft="[object String]",sr="[object Symbol]",Wu="[object Undefined]",Ht="[object WeakMap]",Uu="[object WeakSet]",Wt="[object ArrayBuffer]",bt="[object DataView]",ii="[object Float32Array]",oi="[object Float64Array]",si="[object Int8Array]",ai="[object Int16Array]",ui="[object Int32Array]",li="[object Uint8Array]",ci="[object Uint8ClampedArray]",fi="[object Uint16Array]",di="[object Uint32Array]",Gu=/\b__p \+= '';/g,Ku=/\b(__p \+=) '' \+/g,qu=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Uo=/&(?:amp|lt|gt|quot|#39);/g,Go=/[&<>"']/g,zu=RegExp(Uo.source),Yu=RegExp(Go.source),Xu=/<%-([\s\S]+?)%>/g,Ju=/<%([\s\S]+?)%>/g,Ko=/<%=([\s\S]+?)%>/g,Zu=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Qu=/^\w*$/,ju=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,hi=/[\\^$.*+?()[\]{}|]/g,nl=RegExp(hi.source),vi=/^\s+/,el=/\s/,tl=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,rl=/\{\n\/\* \[wrapped with (.+)\] \*/,il=/,? & /,ol=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,sl=/[()=,{}\[\]\/\s]/,al=/\\(\\)?/g,ul=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,qo=/\w*$/,ll=/^[-+]0x[0-9a-f]+$/i,cl=/^0b[01]+$/i,fl=/^\[object .+?Constructor\]$/,dl=/^0o[0-7]+$/i,hl=/^(?:0|[1-9]\d*)$/,vl=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,ar=/($^)/,pl=/['\n\r\u2028\u2029\\]/g,ur="\\ud800-\\udfff",_l="\\u0300-\\u036f",gl="\\ufe20-\\ufe2f",ml="\\u20d0-\\u20ff",zo=_l+gl+ml,Yo="\\u2700-\\u27bf",Xo="a-z\\xdf-\\xf6\\xf8-\\xff",bl="\\xac\\xb1\\xd7\\xf7",$l="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",yl="\\u2000-\\u206f",kl=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Jo="A-Z\\xc0-\\xd6\\xd8-\\xde",Zo="\\ufe0e\\ufe0f",Qo=bl+$l+yl+kl,pi="['’]",wl="["+ur+"]",jo="["+Qo+"]",lr="["+zo+"]",ns="\\d+",Sl="["+Yo+"]",es="["+Xo+"]",ts="[^"+ur+Qo+ns+Yo+Xo+Jo+"]",_i="\\ud83c[\\udffb-\\udfff]",Ll="(?:"+lr+"|"+_i+")",rs="[^"+ur+"]",gi="(?:\\ud83c[\\udde6-\\uddff]){2}",mi="[\\ud800-\\udbff][\\udc00-\\udfff]",$t="["+Jo+"]",is="\\u200d",os="(?:"+es+"|"+ts+")",Al="(?:"+$t+"|"+ts+")",ss="(?:"+pi+"(?:d|ll|m|re|s|t|ve))?",as="(?:"+pi+"(?:D|LL|M|RE|S|T|VE))?",us=Ll+"?",ls="["+Zo+"]?",Cl="(?:"+is+"(?:"+[rs,gi,mi].join("|")+")"+ls+us+")*",Pl="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Tl="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",cs=ls+us+Cl,Il="(?:"+[Sl,gi,mi].join("|")+")"+cs,xl="(?:"+[rs+lr+"?",lr,gi,mi,wl].join("|")+")",Ml=RegExp(pi,"g"),El=RegExp(lr,"g"),bi=RegExp(_i+"(?="+_i+")|"+xl+cs,"g"),Ol=RegExp([$t+"?"+es+"+"+ss+"(?="+[jo,$t,"$"].join("|")+")",Al+"+"+as+"(?="+[jo,$t+os,"$"].join("|")+")",$t+"?"+os+"+"+ss,$t+"+"+as,Tl,Pl,ns,Il].join("|"),"g"),Nl=RegExp("["+is+ur+zo+Zo+"]"),Rl=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Dl=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],Bl=-1,Sn={};Sn[ii]=Sn[oi]=Sn[si]=Sn[ai]=Sn[ui]=Sn[li]=Sn[ci]=Sn[fi]=Sn[di]=!0,Sn[Nn]=Sn[we]=Sn[Wt]=Sn[Se]=Sn[bt]=Sn[oe]=Sn[se]=Sn[xe]=Sn[Le]=Sn[Bt]=Sn[De]=Sn[Vt]=Sn[Ae]=Sn[Ft]=Sn[Ht]=!1;var yn={};yn[Nn]=yn[we]=yn[Wt]=yn[bt]=yn[Se]=yn[oe]=yn[ii]=yn[oi]=yn[si]=yn[ai]=yn[ui]=yn[Le]=yn[Bt]=yn[De]=yn[Vt]=yn[Ae]=yn[Ft]=yn[sr]=yn[li]=yn[ci]=yn[fi]=yn[di]=!0,yn[se]=yn[xe]=yn[Ht]=!1;var Vl={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},Fl={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Hl={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},Wl={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Ul=parseFloat,Gl=parseInt,fs=typeof Ot=="object"&&Ot&&Ot.Object===Object&&Ot,Kl=typeof self=="object"&&self&&self.Object===Object&&self,Hn=fs||Kl||Function("return this")(),$i=u&&!u.nodeType&&u,at=$i&&!0&&l&&!l.nodeType&&l,ds=at&&at.exports===$i,yi=ds&&fs.process,pe=function(){try{var v=at&&at.require&&at.require("util").types;return v||yi&&yi.binding&&yi.binding("util")}catch{}}(),hs=pe&&pe.isArrayBuffer,vs=pe&&pe.isDate,ps=pe&&pe.isMap,_s=pe&&pe.isRegExp,gs=pe&&pe.isSet,ms=pe&&pe.isTypedArray;function ae(v,b,g){switch(g.length){case 0:return v.call(b);case 1:return v.call(b,g[0]);case 2:return v.call(b,g[0],g[1]);case 3:return v.call(b,g[0],g[1],g[2])}return v.apply(b,g)}function ql(v,b,g,N){for(var Z=-1,hn=v==null?0:v.length;++Z<hn;){var Rn=v[Z];b(N,Rn,g(Rn),v)}return N}function _e(v,b){for(var g=-1,N=v==null?0:v.length;++g<N&&b(v[g],g,v)!==!1;);return v}function zl(v,b){for(var g=v==null?0:v.length;g--&&b(v[g],g,v)!==!1;);return v}function bs(v,b){for(var g=-1,N=v==null?0:v.length;++g<N;)if(!b(v[g],g,v))return!1;return!0}function Xe(v,b){for(var g=-1,N=v==null?0:v.length,Z=0,hn=[];++g<N;){var Rn=v[g];b(Rn,g,v)&&(hn[Z++]=Rn)}return hn}function cr(v,b){var g=v==null?0:v.length;return!!g&&yt(v,b,0)>-1}function ki(v,b,g){for(var N=-1,Z=v==null?0:v.length;++N<Z;)if(g(b,v[N]))return!0;return!1}function Ln(v,b){for(var g=-1,N=v==null?0:v.length,Z=Array(N);++g<N;)Z[g]=b(v[g],g,v);return Z}function Je(v,b){for(var g=-1,N=b.length,Z=v.length;++g<N;)v[Z+g]=b[g];return v}function wi(v,b,g,N){var Z=-1,hn=v==null?0:v.length;for(N&&hn&&(g=v[++Z]);++Z<hn;)g=b(g,v[Z],Z,v);return g}function Yl(v,b,g,N){var Z=v==null?0:v.length;for(N&&Z&&(g=v[--Z]);Z--;)g=b(g,v[Z],Z,v);return g}function Si(v,b){for(var g=-1,N=v==null?0:v.length;++g<N;)if(b(v[g],g,v))return!0;return!1}var Xl=Li("length");function Jl(v){return v.split("")}function Zl(v){return v.match(ol)||[]}function $s(v,b,g){var N;return g(v,function(Z,hn,Rn){if(b(Z,hn,Rn))return N=hn,!1}),N}function fr(v,b,g,N){for(var Z=v.length,hn=g+(N?1:-1);N?hn--:++hn<Z;)if(b(v[hn],hn,v))return hn;return-1}function yt(v,b,g){return b===b?lc(v,b,g):fr(v,ys,g)}function Ql(v,b,g,N){for(var Z=g-1,hn=v.length;++Z<hn;)if(N(v[Z],b))return Z;return-1}function ys(v){return v!==v}function ks(v,b){var g=v==null?0:v.length;return g?Ci(v,b)/g:X}function Li(v){return function(b){return b==null?i:b[v]}}function Ai(v){return function(b){return v==null?i:v[b]}}function ws(v,b,g,N,Z){return Z(v,function(hn,Rn,bn){g=N?(N=!1,hn):b(g,hn,Rn,bn)}),g}function jl(v,b){var g=v.length;for(v.sort(b);g--;)v[g]=v[g].value;return v}function Ci(v,b){for(var g,N=-1,Z=v.length;++N<Z;){var hn=b(v[N]);hn!==i&&(g=g===i?hn:g+hn)}return g}function Pi(v,b){for(var g=-1,N=Array(v);++g<v;)N[g]=b(g);return N}function nc(v,b){return Ln(b,function(g){return[g,v[g]]})}function Ss(v){return v&&v.slice(0,Ps(v)+1).replace(vi,"")}function ue(v){return function(b){return v(b)}}function Ti(v,b){return Ln(b,function(g){return v[g]})}function Ut(v,b){return v.has(b)}function Ls(v,b){for(var g=-1,N=v.length;++g<N&&yt(b,v[g],0)>-1;);return g}function As(v,b){for(var g=v.length;g--&&yt(b,v[g],0)>-1;);return g}function ec(v,b){for(var g=v.length,N=0;g--;)v[g]===b&&++N;return N}var tc=Ai(Vl),rc=Ai(Fl);function ic(v){return"\\"+Wl[v]}function oc(v,b){return v==null?i:v[b]}function kt(v){return Nl.test(v)}function sc(v){return Rl.test(v)}function ac(v){for(var b,g=[];!(b=v.next()).done;)g.push(b.value);return g}function Ii(v){var b=-1,g=Array(v.size);return v.forEach(function(N,Z){g[++b]=[Z,N]}),g}function Cs(v,b){return function(g){return v(b(g))}}function Ze(v,b){for(var g=-1,N=v.length,Z=0,hn=[];++g<N;){var Rn=v[g];(Rn===b||Rn===z)&&(v[g]=z,hn[Z++]=g)}return hn}function dr(v){var b=-1,g=Array(v.size);return v.forEach(function(N){g[++b]=N}),g}function uc(v){var b=-1,g=Array(v.size);return v.forEach(function(N){g[++b]=[N,N]}),g}function lc(v,b,g){for(var N=g-1,Z=v.length;++N<Z;)if(v[N]===b)return N;return-1}function cc(v,b,g){for(var N=g+1;N--;)if(v[N]===b)return N;return N}function wt(v){return kt(v)?dc(v):Xl(v)}function Ce(v){return kt(v)?hc(v):Jl(v)}function Ps(v){for(var b=v.length;b--&&el.test(v.charAt(b)););return b}var fc=Ai(Hl);function dc(v){for(var b=bi.lastIndex=0;bi.test(v);)++b;return b}function hc(v){return v.match(bi)||[]}function vc(v){return v.match(Ol)||[]}var pc=function v(b){b=b==null?Hn:St.defaults(Hn.Object(),b,St.pick(Hn,Dl));var g=b.Array,N=b.Date,Z=b.Error,hn=b.Function,Rn=b.Math,bn=b.Object,xi=b.RegExp,_c=b.String,ge=b.TypeError,hr=g.prototype,gc=hn.prototype,Lt=bn.prototype,vr=b["__core-js_shared__"],pr=gc.toString,gn=Lt.hasOwnProperty,mc=0,Ts=function(){var n=/[^.]+$/.exec(vr&&vr.keys&&vr.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""}(),_r=Lt.toString,bc=pr.call(bn),$c=Hn._,yc=xi("^"+pr.call(gn).replace(hi,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),gr=ds?b.Buffer:i,Qe=b.Symbol,mr=b.Uint8Array,Is=gr?gr.allocUnsafe:i,br=Cs(bn.getPrototypeOf,bn),xs=bn.create,Ms=Lt.propertyIsEnumerable,$r=hr.splice,Es=Qe?Qe.isConcatSpreadable:i,Gt=Qe?Qe.iterator:i,ut=Qe?Qe.toStringTag:i,yr=function(){try{var n=ht(bn,"defineProperty");return n({},"",{}),n}catch{}}(),kc=b.clearTimeout!==Hn.clearTimeout&&b.clearTimeout,wc=N&&N.now!==Hn.Date.now&&N.now,Sc=b.setTimeout!==Hn.setTimeout&&b.setTimeout,kr=Rn.ceil,wr=Rn.floor,Mi=bn.getOwnPropertySymbols,Lc=gr?gr.isBuffer:i,Os=b.isFinite,Ac=hr.join,Cc=Cs(bn.keys,bn),Dn=Rn.max,qn=Rn.min,Pc=N.now,Tc=b.parseInt,Ns=Rn.random,Ic=hr.reverse,Ei=ht(b,"DataView"),Kt=ht(b,"Map"),Oi=ht(b,"Promise"),At=ht(b,"Set"),qt=ht(b,"WeakMap"),zt=ht(bn,"create"),Sr=qt&&new qt,Ct={},xc=vt(Ei),Mc=vt(Kt),Ec=vt(Oi),Oc=vt(At),Nc=vt(qt),Lr=Qe?Qe.prototype:i,Yt=Lr?Lr.valueOf:i,Rs=Lr?Lr.toString:i;function s(n){if(Pn(n)&&!j(n)&&!(n instanceof cn)){if(n instanceof me)return n;if(gn.call(n,"__wrapped__"))return Da(n)}return new me(n)}var Pt=function(){function n(){}return function(e){if(!Cn(e))return{};if(xs)return xs(e);n.prototype=e;var t=new n;return n.prototype=i,t}}();function Ar(){}function me(n,e){this.__wrapped__=n,this.__actions__=[],this.__chain__=!!e,this.__index__=0,this.__values__=i}s.templateSettings={escape:Xu,evaluate:Ju,interpolate:Ko,variable:"",imports:{_:s}},s.prototype=Ar.prototype,s.prototype.constructor=s,me.prototype=Pt(Ar.prototype),me.prototype.constructor=me;function cn(n){this.__wrapped__=n,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=un,this.__views__=[]}function Rc(){var n=new cn(this.__wrapped__);return n.__actions__=ne(this.__actions__),n.__dir__=this.__dir__,n.__filtered__=this.__filtered__,n.__iteratees__=ne(this.__iteratees__),n.__takeCount__=this.__takeCount__,n.__views__=ne(this.__views__),n}function Dc(){if(this.__filtered__){var n=new cn(this);n.__dir__=-1,n.__filtered__=!0}else n=this.clone(),n.__dir__*=-1;return n}function Bc(){var n=this.__wrapped__.value(),e=this.__dir__,t=j(n),r=e<0,o=t?n.length:0,a=Zf(0,o,this.__views__),c=a.start,f=a.end,p=f-c,w=r?f:c-1,S=this.__iteratees__,A=S.length,M=0,B=qn(p,this.__takeCount__);if(!t||!r&&o==p&&B==p)return sa(n,this.__actions__);var G=[];n:for(;p--&&M<B;){w+=e;for(var rn=-1,K=n[w];++rn<A;){var ln=S[rn],fn=ln.iteratee,fe=ln.type,Zn=fn(K);if(fe==R)K=Zn;else if(!Zn){if(fe==Y)continue n;break n}}G[M++]=K}return G}cn.prototype=Pt(Ar.prototype),cn.prototype.constructor=cn;function lt(n){var e=-1,t=n==null?0:n.length;for(this.clear();++e<t;){var r=n[e];this.set(r[0],r[1])}}function Vc(){this.__data__=zt?zt(null):{},this.size=0}function Fc(n){var e=this.has(n)&&delete this.__data__[n];return this.size-=e?1:0,e}function Hc(n){var e=this.__data__;if(zt){var t=e[n];return t===C?i:t}return gn.call(e,n)?e[n]:i}function Wc(n){var e=this.__data__;return zt?e[n]!==i:gn.call(e,n)}function Uc(n,e){var t=this.__data__;return this.size+=this.has(n)?0:1,t[n]=zt&&e===i?C:e,this}lt.prototype.clear=Vc,lt.prototype.delete=Fc,lt.prototype.get=Hc,lt.prototype.has=Wc,lt.prototype.set=Uc;function Be(n){var e=-1,t=n==null?0:n.length;for(this.clear();++e<t;){var r=n[e];this.set(r[0],r[1])}}function Gc(){this.__data__=[],this.size=0}function Kc(n){var e=this.__data__,t=Cr(e,n);if(t<0)return!1;var r=e.length-1;return t==r?e.pop():$r.call(e,t,1),--this.size,!0}function qc(n){var e=this.__data__,t=Cr(e,n);return t<0?i:e[t][1]}function zc(n){return Cr(this.__data__,n)>-1}function Yc(n,e){var t=this.__data__,r=Cr(t,n);return r<0?(++this.size,t.push([n,e])):t[r][1]=e,this}Be.prototype.clear=Gc,Be.prototype.delete=Kc,Be.prototype.get=qc,Be.prototype.has=zc,Be.prototype.set=Yc;function Ve(n){var e=-1,t=n==null?0:n.length;for(this.clear();++e<t;){var r=n[e];this.set(r[0],r[1])}}function Xc(){this.size=0,this.__data__={hash:new lt,map:new(Kt||Be),string:new lt}}function Jc(n){var e=Vr(this,n).delete(n);return this.size-=e?1:0,e}function Zc(n){return Vr(this,n).get(n)}function Qc(n){return Vr(this,n).has(n)}function jc(n,e){var t=Vr(this,n),r=t.size;return t.set(n,e),this.size+=t.size==r?0:1,this}Ve.prototype.clear=Xc,Ve.prototype.delete=Jc,Ve.prototype.get=Zc,Ve.prototype.has=Qc,Ve.prototype.set=jc;function ct(n){var e=-1,t=n==null?0:n.length;for(this.__data__=new Ve;++e<t;)this.add(n[e])}function nf(n){return this.__data__.set(n,C),this}function ef(n){return this.__data__.has(n)}ct.prototype.add=ct.prototype.push=nf,ct.prototype.has=ef;function Pe(n){var e=this.__data__=new Be(n);this.size=e.size}function tf(){this.__data__=new Be,this.size=0}function rf(n){var e=this.__data__,t=e.delete(n);return this.size=e.size,t}function of(n){return this.__data__.get(n)}function sf(n){return this.__data__.has(n)}function af(n,e){var t=this.__data__;if(t instanceof Be){var r=t.__data__;if(!Kt||r.length<h-1)return r.push([n,e]),this.size=++t.size,this;t=this.__data__=new Ve(r)}return t.set(n,e),this.size=t.size,this}Pe.prototype.clear=tf,Pe.prototype.delete=rf,Pe.prototype.get=of,Pe.prototype.has=sf,Pe.prototype.set=af;function Ds(n,e){var t=j(n),r=!t&&pt(n),o=!t&&!r&&rt(n),a=!t&&!r&&!o&&Mt(n),c=t||r||o||a,f=c?Pi(n.length,_c):[],p=f.length;for(var w in n)(e||gn.call(n,w))&&!(c&&(w=="length"||o&&(w=="offset"||w=="parent")||a&&(w=="buffer"||w=="byteLength"||w=="byteOffset")||Ue(w,p)))&&f.push(w);return f}function Bs(n){var e=n.length;return e?n[Ki(0,e-1)]:i}function uf(n,e){return Fr(ne(n),ft(e,0,n.length))}function lf(n){return Fr(ne(n))}function Ni(n,e,t){(t!==i&&!Te(n[e],t)||t===i&&!(e in n))&&Fe(n,e,t)}function Xt(n,e,t){var r=n[e];(!(gn.call(n,e)&&Te(r,t))||t===i&&!(e in n))&&Fe(n,e,t)}function Cr(n,e){for(var t=n.length;t--;)if(Te(n[t][0],e))return t;return-1}function cf(n,e,t,r){return je(n,function(o,a,c){e(r,o,t(o),c)}),r}function Vs(n,e){return n&&Ee(e,Fn(e),n)}function ff(n,e){return n&&Ee(e,te(e),n)}function Fe(n,e,t){e=="__proto__"&&yr?yr(n,e,{configurable:!0,enumerable:!0,value:t,writable:!0}):n[e]=t}function Ri(n,e){for(var t=-1,r=e.length,o=g(r),a=n==null;++t<r;)o[t]=a?i:go(n,e[t]);return o}function ft(n,e,t){return n===n&&(t!==i&&(n=n<=t?n:t),e!==i&&(n=n>=e?n:e)),n}function be(n,e,t,r,o,a){var c,f=e&O,p=e&an,w=e&on;if(t&&(c=o?t(n,r,o,a):t(n)),c!==i)return c;if(!Cn(n))return n;var S=j(n);if(S){if(c=jf(n),!f)return ne(n,c)}else{var A=zn(n),M=A==xe||A==st;if(rt(n))return la(n,f);if(A==De||A==Nn||M&&!o){if(c=p||M?{}:Pa(n),!f)return p?Wf(n,ff(c,n)):Hf(n,Vs(c,n))}else{if(!yn[A])return o?n:{};c=nd(n,A,f)}}a||(a=new Pe);var B=a.get(n);if(B)return B;a.set(n,c),ru(n)?n.forEach(function(K){c.add(be(K,e,t,K,n,a))}):eu(n)&&n.forEach(function(K,ln){c.set(ln,be(K,e,t,ln,n,a))});var G=w?p?to:eo:p?te:Fn,rn=S?i:G(n);return _e(rn||n,function(K,ln){rn&&(ln=K,K=n[ln]),Xt(c,ln,be(K,e,t,ln,n,a))}),c}function df(n){var e=Fn(n);return function(t){return Fs(t,n,e)}}function Fs(n,e,t){var r=t.length;if(n==null)return!r;for(n=bn(n);r--;){var o=t[r],a=e[o],c=n[o];if(c===i&&!(o in n)||!a(c))return!1}return!0}function Hs(n,e,t){if(typeof n!="function")throw new ge(y);return tr(function(){n.apply(i,t)},e)}function Jt(n,e,t,r){var o=-1,a=cr,c=!0,f=n.length,p=[],w=e.length;if(!f)return p;t&&(e=Ln(e,ue(t))),r?(a=ki,c=!1):e.length>=h&&(a=Ut,c=!1,e=new ct(e));n:for(;++o<f;){var S=n[o],A=t==null?S:t(S);if(S=r||S!==0?S:0,c&&A===A){for(var M=w;M--;)if(e[M]===A)continue n;p.push(S)}else a(e,A,r)||p.push(S)}return p}var je=va(Me),Ws=va(Bi,!0);function hf(n,e){var t=!0;return je(n,function(r,o,a){return t=!!e(r,o,a),t}),t}function Pr(n,e,t){for(var r=-1,o=n.length;++r<o;){var a=n[r],c=e(a);if(c!=null&&(f===i?c===c&&!ce(c):t(c,f)))var f=c,p=a}return p}function vf(n,e,t,r){var o=n.length;for(t=tn(t),t<0&&(t=-t>o?0:o+t),r=r===i||r>o?o:tn(r),r<0&&(r+=o),r=t>r?0:ou(r);t<r;)n[t++]=e;return n}function Us(n,e){var t=[];return je(n,function(r,o,a){e(r,o,a)&&t.push(r)}),t}function Wn(n,e,t,r,o){var a=-1,c=n.length;for(t||(t=td),o||(o=[]);++a<c;){var f=n[a];e>0&&t(f)?e>1?Wn(f,e-1,t,r,o):Je(o,f):r||(o[o.length]=f)}return o}var Di=pa(),Gs=pa(!0);function Me(n,e){return n&&Di(n,e,Fn)}function Bi(n,e){return n&&Gs(n,e,Fn)}function Tr(n,e){return Xe(e,function(t){return Ge(n[t])})}function dt(n,e){e=et(e,n);for(var t=0,r=e.length;n!=null&&t<r;)n=n[Oe(e[t++])];return t&&t==r?n:i}function Ks(n,e,t){var r=e(n);return j(n)?r:Je(r,t(n))}function Xn(n){return n==null?n===i?Wu:Fu:ut&&ut in bn(n)?Jf(n):ld(n)}function Vi(n,e){return n>e}function pf(n,e){return n!=null&&gn.call(n,e)}function _f(n,e){return n!=null&&e in bn(n)}function gf(n,e,t){return n>=qn(e,t)&&n<Dn(e,t)}function Fi(n,e,t){for(var r=t?ki:cr,o=n[0].length,a=n.length,c=a,f=g(a),p=1/0,w=[];c--;){var S=n[c];c&&e&&(S=Ln(S,ue(e))),p=qn(S.length,p),f[c]=!t&&(e||o>=120&&S.length>=120)?new ct(c&&S):i}S=n[0];var A=-1,M=f[0];n:for(;++A<o&&w.length<p;){var B=S[A],G=e?e(B):B;if(B=t||B!==0?B:0,!(M?Ut(M,G):r(w,G,t))){for(c=a;--c;){var rn=f[c];if(!(rn?Ut(rn,G):r(n[c],G,t)))continue n}M&&M.push(G),w.push(B)}}return w}function mf(n,e,t,r){return Me(n,function(o,a,c){e(r,t(o),a,c)}),r}function Zt(n,e,t){e=et(e,n),n=Ma(n,e);var r=n==null?n:n[Oe(ye(e))];return r==null?i:ae(r,n,t)}function qs(n){return Pn(n)&&Xn(n)==Nn}function bf(n){return Pn(n)&&Xn(n)==Wt}function $f(n){return Pn(n)&&Xn(n)==oe}function Qt(n,e,t,r,o){return n===e?!0:n==null||e==null||!Pn(n)&&!Pn(e)?n!==n&&e!==e:yf(n,e,t,r,Qt,o)}function yf(n,e,t,r,o,a){var c=j(n),f=j(e),p=c?we:zn(n),w=f?we:zn(e);p=p==Nn?De:p,w=w==Nn?De:w;var S=p==De,A=w==De,M=p==w;if(M&&rt(n)){if(!rt(e))return!1;c=!0,S=!1}if(M&&!S)return a||(a=new Pe),c||Mt(n)?La(n,e,t,r,o,a):Yf(n,e,p,t,r,o,a);if(!(t&vn)){var B=S&&gn.call(n,"__wrapped__"),G=A&&gn.call(e,"__wrapped__");if(B||G){var rn=B?n.value():n,K=G?e.value():e;return a||(a=new Pe),o(rn,K,t,r,a)}}return M?(a||(a=new Pe),Xf(n,e,t,r,o,a)):!1}function kf(n){return Pn(n)&&zn(n)==Le}function Hi(n,e,t,r){var o=t.length,a=o,c=!r;if(n==null)return!a;for(n=bn(n);o--;){var f=t[o];if(c&&f[2]?f[1]!==n[f[0]]:!(f[0]in n))return!1}for(;++o<a;){f=t[o];var p=f[0],w=n[p],S=f[1];if(c&&f[2]){if(w===i&&!(p in n))return!1}else{var A=new Pe;if(r)var M=r(w,S,p,n,e,A);if(!(M===i?Qt(S,w,vn|Bn,r,A):M))return!1}}return!0}function zs(n){if(!Cn(n)||id(n))return!1;var e=Ge(n)?yc:fl;return e.test(vt(n))}function wf(n){return Pn(n)&&Xn(n)==Vt}function Sf(n){return Pn(n)&&zn(n)==Ae}function Lf(n){return Pn(n)&&qr(n.length)&&!!Sn[Xn(n)]}function Ys(n){return typeof n=="function"?n:n==null?re:typeof n=="object"?j(n)?Zs(n[0],n[1]):Js(n):_u(n)}function Wi(n){if(!er(n))return Cc(n);var e=[];for(var t in bn(n))gn.call(n,t)&&t!="constructor"&&e.push(t);return e}function Af(n){if(!Cn(n))return ud(n);var e=er(n),t=[];for(var r in n)r=="constructor"&&(e||!gn.call(n,r))||t.push(r);return t}function Ui(n,e){return n<e}function Xs(n,e){var t=-1,r=ee(n)?g(n.length):[];return je(n,function(o,a,c){r[++t]=e(o,a,c)}),r}function Js(n){var e=io(n);return e.length==1&&e[0][2]?Ia(e[0][0],e[0][1]):function(t){return t===n||Hi(t,n,e)}}function Zs(n,e){return so(n)&&Ta(e)?Ia(Oe(n),e):function(t){var r=go(t,n);return r===i&&r===e?mo(t,n):Qt(e,r,vn|Bn)}}function Ir(n,e,t,r,o){n!==e&&Di(e,function(a,c){if(o||(o=new Pe),Cn(a))Cf(n,e,c,t,Ir,r,o);else{var f=r?r(uo(n,c),a,c+"",n,e,o):i;f===i&&(f=a),Ni(n,c,f)}},te)}function Cf(n,e,t,r,o,a,c){var f=uo(n,t),p=uo(e,t),w=c.get(p);if(w){Ni(n,t,w);return}var S=a?a(f,p,t+"",n,e,c):i,A=S===i;if(A){var M=j(p),B=!M&&rt(p),G=!M&&!B&&Mt(p);S=p,M||B||G?j(f)?S=f:In(f)?S=ne(f):B?(A=!1,S=la(p,!0)):G?(A=!1,S=ca(p,!0)):S=[]:rr(p)||pt(p)?(S=f,pt(f)?S=su(f):(!Cn(f)||Ge(f))&&(S=Pa(p))):A=!1}A&&(c.set(p,S),o(S,p,r,a,c),c.delete(p)),Ni(n,t,S)}function Qs(n,e){var t=n.length;if(t)return e+=e<0?t:0,Ue(e,t)?n[e]:i}function js(n,e,t){e.length?e=Ln(e,function(a){return j(a)?function(c){return dt(c,a.length===1?a[0]:a)}:a}):e=[re];var r=-1;e=Ln(e,ue(U()));var o=Xs(n,function(a,c,f){var p=Ln(e,function(w){return w(a)});return{criteria:p,index:++r,value:a}});return jl(o,function(a,c){return Ff(a,c,t)})}function Pf(n,e){return na(n,e,function(t,r){return mo(n,r)})}function na(n,e,t){for(var r=-1,o=e.length,a={};++r<o;){var c=e[r],f=dt(n,c);t(f,c)&&jt(a,et(c,n),f)}return a}function Tf(n){return function(e){return dt(e,n)}}function Gi(n,e,t,r){var o=r?Ql:yt,a=-1,c=e.length,f=n;for(n===e&&(e=ne(e)),t&&(f=Ln(n,ue(t)));++a<c;)for(var p=0,w=e[a],S=t?t(w):w;(p=o(f,S,p,r))>-1;)f!==n&&$r.call(f,p,1),$r.call(n,p,1);return n}function ea(n,e){for(var t=n?e.length:0,r=t-1;t--;){var o=e[t];if(t==r||o!==a){var a=o;Ue(o)?$r.call(n,o,1):Yi(n,o)}}return n}function Ki(n,e){return n+wr(Ns()*(e-n+1))}function If(n,e,t,r){for(var o=-1,a=Dn(kr((e-n)/(t||1)),0),c=g(a);a--;)c[r?a:++o]=n,n+=t;return c}function qi(n,e){var t="";if(!n||e<1||e>x)return t;do e%2&&(t+=n),e=wr(e/2),e&&(n+=n);while(e);return t}function sn(n,e){return lo(xa(n,e,re),n+"")}function xf(n){return Bs(Et(n))}function Mf(n,e){var t=Et(n);return Fr(t,ft(e,0,t.length))}function jt(n,e,t,r){if(!Cn(n))return n;e=et(e,n);for(var o=-1,a=e.length,c=a-1,f=n;f!=null&&++o<a;){var p=Oe(e[o]),w=t;if(p==="__proto__"||p==="constructor"||p==="prototype")return n;if(o!=c){var S=f[p];w=r?r(S,p,f):i,w===i&&(w=Cn(S)?S:Ue(e[o+1])?[]:{})}Xt(f,p,w),f=f[p]}return n}var ta=Sr?function(n,e){return Sr.set(n,e),n}:re,Ef=yr?function(n,e){return yr(n,"toString",{configurable:!0,enumerable:!1,value:$o(e),writable:!0})}:re;function Of(n){return Fr(Et(n))}function $e(n,e,t){var r=-1,o=n.length;e<0&&(e=-e>o?0:o+e),t=t>o?o:t,t<0&&(t+=o),o=e>t?0:t-e>>>0,e>>>=0;for(var a=g(o);++r<o;)a[r]=n[r+e];return a}function Nf(n,e){var t;return je(n,function(r,o,a){return t=e(r,o,a),!t}),!!t}function xr(n,e,t){var r=0,o=n==null?r:n.length;if(typeof e=="number"&&e===e&&o<=On){for(;r<o;){var a=r+o>>>1,c=n[a];c!==null&&!ce(c)&&(t?c<=e:c<e)?r=a+1:o=a}return o}return zi(n,e,re,t)}function zi(n,e,t,r){var o=0,a=n==null?0:n.length;if(a===0)return 0;e=t(e);for(var c=e!==e,f=e===null,p=ce(e),w=e===i;o<a;){var S=wr((o+a)/2),A=t(n[S]),M=A!==i,B=A===null,G=A===A,rn=ce(A);if(c)var K=r||G;else w?K=G&&(r||M):f?K=G&&M&&(r||!B):p?K=G&&M&&!B&&(r||!rn):B||rn?K=!1:K=r?A<=e:A<e;K?o=S+1:a=S}return qn(a,An)}function ra(n,e){for(var t=-1,r=n.length,o=0,a=[];++t<r;){var c=n[t],f=e?e(c):c;if(!t||!Te(f,p)){var p=f;a[o++]=c===0?0:c}}return a}function ia(n){return typeof n=="number"?n:ce(n)?X:+n}function le(n){if(typeof n=="string")return n;if(j(n))return Ln(n,le)+"";if(ce(n))return Rs?Rs.call(n):"";var e=n+"";return e=="0"&&1/n==-D?"-0":e}function nt(n,e,t){var r=-1,o=cr,a=n.length,c=!0,f=[],p=f;if(t)c=!1,o=ki;else if(a>=h){var w=e?null:qf(n);if(w)return dr(w);c=!1,o=Ut,p=new ct}else p=e?[]:f;n:for(;++r<a;){var S=n[r],A=e?e(S):S;if(S=t||S!==0?S:0,c&&A===A){for(var M=p.length;M--;)if(p[M]===A)continue n;e&&p.push(A),f.push(S)}else o(p,A,t)||(p!==f&&p.push(A),f.push(S))}return f}function Yi(n,e){return e=et(e,n),n=Ma(n,e),n==null||delete n[Oe(ye(e))]}function oa(n,e,t,r){return jt(n,e,t(dt(n,e)),r)}function Mr(n,e,t,r){for(var o=n.length,a=r?o:-1;(r?a--:++a<o)&&e(n[a],a,n););return t?$e(n,r?0:a,r?a+1:o):$e(n,r?a+1:0,r?o:a)}function sa(n,e){var t=n;return t instanceof cn&&(t=t.value()),wi(e,function(r,o){return o.func.apply(o.thisArg,Je([r],o.args))},t)}function Xi(n,e,t){var r=n.length;if(r<2)return r?nt(n[0]):[];for(var o=-1,a=g(r);++o<r;)for(var c=n[o],f=-1;++f<r;)f!=o&&(a[o]=Jt(a[o]||c,n[f],e,t));return nt(Wn(a,1),e,t)}function aa(n,e,t){for(var r=-1,o=n.length,a=e.length,c={};++r<o;){var f=r<a?e[r]:i;t(c,n[r],f)}return c}function Ji(n){return In(n)?n:[]}function Zi(n){return typeof n=="function"?n:re}function et(n,e){return j(n)?n:so(n,e)?[n]:Ra(_n(n))}var Rf=sn;function tt(n,e,t){var r=n.length;return t=t===i?r:t,!e&&t>=r?n:$e(n,e,t)}var ua=kc||function(n){return Hn.clearTimeout(n)};function la(n,e){if(e)return n.slice();var t=n.length,r=Is?Is(t):new n.constructor(t);return n.copy(r),r}function Qi(n){var e=new n.constructor(n.byteLength);return new mr(e).set(new mr(n)),e}function Df(n,e){var t=e?Qi(n.buffer):n.buffer;return new n.constructor(t,n.byteOffset,n.byteLength)}function Bf(n){var e=new n.constructor(n.source,qo.exec(n));return e.lastIndex=n.lastIndex,e}function Vf(n){return Yt?bn(Yt.call(n)):{}}function ca(n,e){var t=e?Qi(n.buffer):n.buffer;return new n.constructor(t,n.byteOffset,n.length)}function fa(n,e){if(n!==e){var t=n!==i,r=n===null,o=n===n,a=ce(n),c=e!==i,f=e===null,p=e===e,w=ce(e);if(!f&&!w&&!a&&n>e||a&&c&&p&&!f&&!w||r&&c&&p||!t&&p||!o)return 1;if(!r&&!a&&!w&&n<e||w&&t&&o&&!r&&!a||f&&t&&o||!c&&o||!p)return-1}return 0}function Ff(n,e,t){for(var r=-1,o=n.criteria,a=e.criteria,c=o.length,f=t.length;++r<c;){var p=fa(o[r],a[r]);if(p){if(r>=f)return p;var w=t[r];return p*(w=="desc"?-1:1)}}return n.index-e.index}function da(n,e,t,r){for(var o=-1,a=n.length,c=t.length,f=-1,p=e.length,w=Dn(a-c,0),S=g(p+w),A=!r;++f<p;)S[f]=e[f];for(;++o<c;)(A||o<a)&&(S[t[o]]=n[o]);for(;w--;)S[f++]=n[o++];return S}function ha(n,e,t,r){for(var o=-1,a=n.length,c=-1,f=t.length,p=-1,w=e.length,S=Dn(a-f,0),A=g(S+w),M=!r;++o<S;)A[o]=n[o];for(var B=o;++p<w;)A[B+p]=e[p];for(;++c<f;)(M||o<a)&&(A[B+t[c]]=n[o++]);return A}function ne(n,e){var t=-1,r=n.length;for(e||(e=g(r));++t<r;)e[t]=n[t];return e}function Ee(n,e,t,r){var o=!t;t||(t={});for(var a=-1,c=e.length;++a<c;){var f=e[a],p=r?r(t[f],n[f],f,t,n):i;p===i&&(p=n[f]),o?Fe(t,f,p):Xt(t,f,p)}return t}function Hf(n,e){return Ee(n,oo(n),e)}function Wf(n,e){return Ee(n,Aa(n),e)}function Er(n,e){return function(t,r){var o=j(t)?ql:cf,a=e?e():{};return o(t,n,U(r,2),a)}}function Tt(n){return sn(function(e,t){var r=-1,o=t.length,a=o>1?t[o-1]:i,c=o>2?t[2]:i;for(a=n.length>3&&typeof a=="function"?(o--,a):i,c&&Jn(t[0],t[1],c)&&(a=o<3?i:a,o=1),e=bn(e);++r<o;){var f=t[r];f&&n(e,f,r,a)}return e})}function va(n,e){return function(t,r){if(t==null)return t;if(!ee(t))return n(t,r);for(var o=t.length,a=e?o:-1,c=bn(t);(e?a--:++a<o)&&r(c[a],a,c)!==!1;);return t}}function pa(n){return function(e,t,r){for(var o=-1,a=bn(e),c=r(e),f=c.length;f--;){var p=c[n?f:++o];if(t(a[p],p,a)===!1)break}return e}}function Uf(n,e,t){var r=e&en,o=nr(n);function a(){var c=this&&this!==Hn&&this instanceof a?o:n;return c.apply(r?t:this,arguments)}return a}function _a(n){return function(e){e=_n(e);var t=kt(e)?Ce(e):i,r=t?t[0]:e.charAt(0),o=t?tt(t,1).join(""):e.slice(1);return r[n]()+o}}function It(n){return function(e){return wi(vu(hu(e).replace(Ml,"")),n,"")}}function nr(n){return function(){var e=arguments;switch(e.length){case 0:return new n;case 1:return new n(e[0]);case 2:return new n(e[0],e[1]);case 3:return new n(e[0],e[1],e[2]);case 4:return new n(e[0],e[1],e[2],e[3]);case 5:return new n(e[0],e[1],e[2],e[3],e[4]);case 6:return new n(e[0],e[1],e[2],e[3],e[4],e[5]);case 7:return new n(e[0],e[1],e[2],e[3],e[4],e[5],e[6])}var t=Pt(n.prototype),r=n.apply(t,e);return Cn(r)?r:t}}function Gf(n,e,t){var r=nr(n);function o(){for(var a=arguments.length,c=g(a),f=a,p=xt(o);f--;)c[f]=arguments[f];var w=a<3&&c[0]!==p&&c[a-1]!==p?[]:Ze(c,p);if(a-=w.length,a<t)return ya(n,e,Or,o.placeholder,i,c,w,i,i,t-a);var S=this&&this!==Hn&&this instanceof o?r:n;return ae(S,this,c)}return o}function ga(n){return function(e,t,r){var o=bn(e);if(!ee(e)){var a=U(t,3);e=Fn(e),t=function(f){return a(o[f],f,o)}}var c=n(e,t,r);return c>-1?o[a?e[c]:c]:i}}function ma(n){return We(function(e){var t=e.length,r=t,o=me.prototype.thru;for(n&&e.reverse();r--;){var a=e[r];if(typeof a!="function")throw new ge(y);if(o&&!c&&Br(a)=="wrapper")var c=new me([],!0)}for(r=c?r:t;++r<t;){a=e[r];var f=Br(a),p=f=="wrapper"?ro(a):i;p&&ao(p[0])&&p[1]==(ve|Tn|Mn|Ne)&&!p[4].length&&p[9]==1?c=c[Br(p[0])].apply(c,p[3]):c=a.length==1&&ao(a)?c[f]():c.thru(a)}return function(){var w=arguments,S=w[0];if(c&&w.length==1&&j(S))return c.plant(S).value();for(var A=0,M=t?e[A].apply(this,w):S;++A<t;)M=e[A].call(this,M);return M}})}function Or(n,e,t,r,o,a,c,f,p,w){var S=e&ve,A=e&en,M=e&Qn,B=e&(Tn|he),G=e&Ye,rn=M?i:nr(n);function K(){for(var ln=arguments.length,fn=g(ln),fe=ln;fe--;)fn[fe]=arguments[fe];if(B)var Zn=xt(K),de=ec(fn,Zn);if(r&&(fn=da(fn,r,o,B)),a&&(fn=ha(fn,a,c,B)),ln-=de,B&&ln<w){var xn=Ze(fn,Zn);return ya(n,e,Or,K.placeholder,t,fn,xn,f,p,w-ln)}var Ie=A?t:this,qe=M?Ie[n]:n;return ln=fn.length,f?fn=cd(fn,f):G&&ln>1&&fn.reverse(),S&&p<ln&&(fn.length=p),this&&this!==Hn&&this instanceof K&&(qe=rn||nr(qe)),qe.apply(Ie,fn)}return K}function ba(n,e){return function(t,r){return mf(t,n,e(r),{})}}function Nr(n,e){return function(t,r){var o;if(t===i&&r===i)return e;if(t!==i&&(o=t),r!==i){if(o===i)return r;typeof t=="string"||typeof r=="string"?(t=le(t),r=le(r)):(t=ia(t),r=ia(r)),o=n(t,r)}return o}}function ji(n){return We(function(e){return e=Ln(e,ue(U())),sn(function(t){var r=this;return n(e,function(o){return ae(o,r,t)})})})}function Rr(n,e){e=e===i?" ":le(e);var t=e.length;if(t<2)return t?qi(e,n):e;var r=qi(e,kr(n/wt(e)));return kt(e)?tt(Ce(r),0,n).join(""):r.slice(0,n)}function Kf(n,e,t,r){var o=e&en,a=nr(n);function c(){for(var f=-1,p=arguments.length,w=-1,S=r.length,A=g(S+p),M=this&&this!==Hn&&this instanceof c?a:n;++w<S;)A[w]=r[w];for(;p--;)A[w++]=arguments[++f];return ae(M,o?t:this,A)}return c}function $a(n){return function(e,t,r){return r&&typeof r!="number"&&Jn(e,t,r)&&(t=r=i),e=Ke(e),t===i?(t=e,e=0):t=Ke(t),r=r===i?e<t?1:-1:Ke(r),If(e,t,r,n)}}function Dr(n){return function(e,t){return typeof e=="string"&&typeof t=="string"||(e=ke(e),t=ke(t)),n(e,t)}}function ya(n,e,t,r,o,a,c,f,p,w){var S=e&Tn,A=S?c:i,M=S?i:c,B=S?a:i,G=S?i:a;e|=S?Mn:jn,e&=~(S?jn:Mn),e&ie||(e&=~(en|Qn));var rn=[n,e,o,B,A,G,M,f,p,w],K=t.apply(i,rn);return ao(n)&&Ea(K,rn),K.placeholder=r,Oa(K,n,e)}function no(n){var e=Rn[n];return function(t,r){if(t=ke(t),r=r==null?0:qn(tn(r),292),r&&Os(t)){var o=(_n(t)+"e").split("e"),a=e(o[0]+"e"+(+o[1]+r));return o=(_n(a)+"e").split("e"),+(o[0]+"e"+(+o[1]-r))}return e(t)}}var qf=At&&1/dr(new At([,-0]))[1]==D?function(n){return new At(n)}:wo;function ka(n){return function(e){var t=zn(e);return t==Le?Ii(e):t==Ae?uc(e):nc(e,n(e))}}function He(n,e,t,r,o,a,c,f){var p=e&Qn;if(!p&&typeof n!="function")throw new ge(y);var w=r?r.length:0;if(w||(e&=~(Mn|jn),r=o=i),c=c===i?c:Dn(tn(c),0),f=f===i?f:tn(f),w-=o?o.length:0,e&jn){var S=r,A=o;r=o=i}var M=p?i:ro(n),B=[n,e,t,r,o,S,A,a,c,f];if(M&&ad(B,M),n=B[0],e=B[1],t=B[2],r=B[3],o=B[4],f=B[9]=B[9]===i?p?0:n.length:Dn(B[9]-w,0),!f&&e&(Tn|he)&&(e&=~(Tn|he)),!e||e==en)var G=Uf(n,e,t);else e==Tn||e==he?G=Gf(n,e,f):(e==Mn||e==(en|Mn))&&!o.length?G=Kf(n,e,t,r):G=Or.apply(i,B);var rn=M?ta:Ea;return Oa(rn(G,B),n,e)}function wa(n,e,t,r){return n===i||Te(n,Lt[t])&&!gn.call(r,t)?e:n}function Sa(n,e,t,r,o,a){return Cn(n)&&Cn(e)&&(a.set(e,n),Ir(n,e,i,Sa,a),a.delete(e)),n}function zf(n){return rr(n)?i:n}function La(n,e,t,r,o,a){var c=t&vn,f=n.length,p=e.length;if(f!=p&&!(c&&p>f))return!1;var w=a.get(n),S=a.get(e);if(w&&S)return w==e&&S==n;var A=-1,M=!0,B=t&Bn?new ct:i;for(a.set(n,e),a.set(e,n);++A<f;){var G=n[A],rn=e[A];if(r)var K=c?r(rn,G,A,e,n,a):r(G,rn,A,n,e,a);if(K!==i){if(K)continue;M=!1;break}if(B){if(!Si(e,function(ln,fn){if(!Ut(B,fn)&&(G===ln||o(G,ln,t,r,a)))return B.push(fn)})){M=!1;break}}else if(!(G===rn||o(G,rn,t,r,a))){M=!1;break}}return a.delete(n),a.delete(e),M}function Yf(n,e,t,r,o,a,c){switch(t){case bt:if(n.byteLength!=e.byteLength||n.byteOffset!=e.byteOffset)return!1;n=n.buffer,e=e.buffer;case Wt:return!(n.byteLength!=e.byteLength||!a(new mr(n),new mr(e)));case Se:case oe:case Bt:return Te(+n,+e);case se:return n.name==e.name&&n.message==e.message;case Vt:case Ft:return n==e+"";case Le:var f=Ii;case Ae:var p=r&vn;if(f||(f=dr),n.size!=e.size&&!p)return!1;var w=c.get(n);if(w)return w==e;r|=Bn,c.set(n,e);var S=La(f(n),f(e),r,o,a,c);return c.delete(n),S;case sr:if(Yt)return Yt.call(n)==Yt.call(e)}return!1}function Xf(n,e,t,r,o,a){var c=t&vn,f=eo(n),p=f.length,w=eo(e),S=w.length;if(p!=S&&!c)return!1;for(var A=p;A--;){var M=f[A];if(!(c?M in e:gn.call(e,M)))return!1}var B=a.get(n),G=a.get(e);if(B&&G)return B==e&&G==n;var rn=!0;a.set(n,e),a.set(e,n);for(var K=c;++A<p;){M=f[A];var ln=n[M],fn=e[M];if(r)var fe=c?r(fn,ln,M,e,n,a):r(ln,fn,M,n,e,a);if(!(fe===i?ln===fn||o(ln,fn,t,r,a):fe)){rn=!1;break}K||(K=M=="constructor")}if(rn&&!K){var Zn=n.constructor,de=e.constructor;Zn!=de&&"constructor"in n&&"constructor"in e&&!(typeof Zn=="function"&&Zn instanceof Zn&&typeof de=="function"&&de instanceof de)&&(rn=!1)}return a.delete(n),a.delete(e),rn}function We(n){return lo(xa(n,i,Fa),n+"")}function eo(n){return Ks(n,Fn,oo)}function to(n){return Ks(n,te,Aa)}var ro=Sr?function(n){return Sr.get(n)}:wo;function Br(n){for(var e=n.name+"",t=Ct[e],r=gn.call(Ct,e)?t.length:0;r--;){var o=t[r],a=o.func;if(a==null||a==n)return o.name}return e}function xt(n){var e=gn.call(s,"placeholder")?s:n;return e.placeholder}function U(){var n=s.iteratee||yo;return n=n===yo?Ys:n,arguments.length?n(arguments[0],arguments[1]):n}function Vr(n,e){var t=n.__data__;return rd(e)?t[typeof e=="string"?"string":"hash"]:t.map}function io(n){for(var e=Fn(n),t=e.length;t--;){var r=e[t],o=n[r];e[t]=[r,o,Ta(o)]}return e}function ht(n,e){var t=oc(n,e);return zs(t)?t:i}function Jf(n){var e=gn.call(n,ut),t=n[ut];try{n[ut]=i;var r=!0}catch{}var o=_r.call(n);return r&&(e?n[ut]=t:delete n[ut]),o}var oo=Mi?function(n){return n==null?[]:(n=bn(n),Xe(Mi(n),function(e){return Ms.call(n,e)}))}:So,Aa=Mi?function(n){for(var e=[];n;)Je(e,oo(n)),n=br(n);return e}:So,zn=Xn;(Ei&&zn(new Ei(new ArrayBuffer(1)))!=bt||Kt&&zn(new Kt)!=Le||Oi&&zn(Oi.resolve())!=Wo||At&&zn(new At)!=Ae||qt&&zn(new qt)!=Ht)&&(zn=function(n){var e=Xn(n),t=e==De?n.constructor:i,r=t?vt(t):"";if(r)switch(r){case xc:return bt;case Mc:return Le;case Ec:return Wo;case Oc:return Ae;case Nc:return Ht}return e});function Zf(n,e,t){for(var r=-1,o=t.length;++r<o;){var a=t[r],c=a.size;switch(a.type){case"drop":n+=c;break;case"dropRight":e-=c;break;case"take":e=qn(e,n+c);break;case"takeRight":n=Dn(n,e-c);break}}return{start:n,end:e}}function Qf(n){var e=n.match(rl);return e?e[1].split(il):[]}function Ca(n,e,t){e=et(e,n);for(var r=-1,o=e.length,a=!1;++r<o;){var c=Oe(e[r]);if(!(a=n!=null&&t(n,c)))break;n=n[c]}return a||++r!=o?a:(o=n==null?0:n.length,!!o&&qr(o)&&Ue(c,o)&&(j(n)||pt(n)))}function jf(n){var e=n.length,t=new n.constructor(e);return e&&typeof n[0]=="string"&&gn.call(n,"index")&&(t.index=n.index,t.input=n.input),t}function Pa(n){return typeof n.constructor=="function"&&!er(n)?Pt(br(n)):{}}function nd(n,e,t){var r=n.constructor;switch(e){case Wt:return Qi(n);case Se:case oe:return new r(+n);case bt:return Df(n,t);case ii:case oi:case si:case ai:case ui:case li:case ci:case fi:case di:return ca(n,t);case Le:return new r;case Bt:case Ft:return new r(n);case Vt:return Bf(n);case Ae:return new r;case sr:return Vf(n)}}function ed(n,e){var t=e.length;if(!t)return n;var r=t-1;return e[r]=(t>1?"& ":"")+e[r],e=e.join(t>2?", ":" "),n.replace(tl,`{
/* [wrapped with `+e+`] */
`)}function td(n){return j(n)||pt(n)||!!(Es&&n&&n[Es])}function Ue(n,e){var t=typeof n;return e=e??x,!!e&&(t=="number"||t!="symbol"&&hl.test(n))&&n>-1&&n%1==0&&n<e}function Jn(n,e,t){if(!Cn(t))return!1;var r=typeof e;return(r=="number"?ee(t)&&Ue(e,t.length):r=="string"&&e in t)?Te(t[e],n):!1}function so(n,e){if(j(n))return!1;var t=typeof n;return t=="number"||t=="symbol"||t=="boolean"||n==null||ce(n)?!0:Qu.test(n)||!Zu.test(n)||e!=null&&n in bn(e)}function rd(n){var e=typeof n;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?n!=="__proto__":n===null}function ao(n){var e=Br(n),t=s[e];if(typeof t!="function"||!(e in cn.prototype))return!1;if(n===t)return!0;var r=ro(t);return!!r&&n===r[0]}function id(n){return!!Ts&&Ts in n}var od=vr?Ge:Lo;function er(n){var e=n&&n.constructor,t=typeof e=="function"&&e.prototype||Lt;return n===t}function Ta(n){return n===n&&!Cn(n)}function Ia(n,e){return function(t){return t==null?!1:t[n]===e&&(e!==i||n in bn(t))}}function sd(n){var e=Gr(n,function(r){return t.size===H&&t.clear(),r}),t=e.cache;return e}function ad(n,e){var t=n[1],r=e[1],o=t|r,a=o<(en|Qn|ve),c=r==ve&&t==Tn||r==ve&&t==Ne&&n[7].length<=e[8]||r==(ve|Ne)&&e[7].length<=e[8]&&t==Tn;if(!(a||c))return n;r&en&&(n[2]=e[2],o|=t&en?0:ie);var f=e[3];if(f){var p=n[3];n[3]=p?da(p,f,e[4]):f,n[4]=p?Ze(n[3],z):e[4]}return f=e[5],f&&(p=n[5],n[5]=p?ha(p,f,e[6]):f,n[6]=p?Ze(n[5],z):e[6]),f=e[7],f&&(n[7]=f),r&ve&&(n[8]=n[8]==null?e[8]:qn(n[8],e[8])),n[9]==null&&(n[9]=e[9]),n[0]=e[0],n[1]=o,n}function ud(n){var e=[];if(n!=null)for(var t in bn(n))e.push(t);return e}function ld(n){return _r.call(n)}function xa(n,e,t){return e=Dn(e===i?n.length-1:e,0),function(){for(var r=arguments,o=-1,a=Dn(r.length-e,0),c=g(a);++o<a;)c[o]=r[e+o];o=-1;for(var f=g(e+1);++o<e;)f[o]=r[o];return f[e]=t(c),ae(n,this,f)}}function Ma(n,e){return e.length<2?n:dt(n,$e(e,0,-1))}function cd(n,e){for(var t=n.length,r=qn(e.length,t),o=ne(n);r--;){var a=e[r];n[r]=Ue(a,t)?o[a]:i}return n}function uo(n,e){if(!(e==="constructor"&&typeof n[e]=="function")&&e!="__proto__")return n[e]}var Ea=Na(ta),tr=Sc||function(n,e){return Hn.setTimeout(n,e)},lo=Na(Ef);function Oa(n,e,t){var r=e+"";return lo(n,ed(r,fd(Qf(r),t)))}function Na(n){var e=0,t=0;return function(){var r=Pc(),o=or-(r-t);if(t=r,o>0){if(++e>=mt)return arguments[0]}else e=0;return n.apply(i,arguments)}}function Fr(n,e){var t=-1,r=n.length,o=r-1;for(e=e===i?r:e;++t<e;){var a=Ki(t,o),c=n[a];n[a]=n[t],n[t]=c}return n.length=e,n}var Ra=sd(function(n){var e=[];return n.charCodeAt(0)===46&&e.push(""),n.replace(ju,function(t,r,o,a){e.push(o?a.replace(al,"$1"):r||t)}),e});function Oe(n){if(typeof n=="string"||ce(n))return n;var e=n+"";return e=="0"&&1/n==-D?"-0":e}function vt(n){if(n!=null){try{return pr.call(n)}catch{}try{return n+""}catch{}}return""}function fd(n,e){return _e(Vn,function(t){var r="_."+t[0];e&t[1]&&!cr(n,r)&&n.push(r)}),n.sort()}function Da(n){if(n instanceof cn)return n.clone();var e=new me(n.__wrapped__,n.__chain__);return e.__actions__=ne(n.__actions__),e.__index__=n.__index__,e.__values__=n.__values__,e}function dd(n,e,t){(t?Jn(n,e,t):e===i)?e=1:e=Dn(tn(e),0);var r=n==null?0:n.length;if(!r||e<1)return[];for(var o=0,a=0,c=g(kr(r/e));o<r;)c[a++]=$e(n,o,o+=e);return c}function hd(n){for(var e=-1,t=n==null?0:n.length,r=0,o=[];++e<t;){var a=n[e];a&&(o[r++]=a)}return o}function vd(){var n=arguments.length;if(!n)return[];for(var e=g(n-1),t=arguments[0],r=n;r--;)e[r-1]=arguments[r];return Je(j(t)?ne(t):[t],Wn(e,1))}var pd=sn(function(n,e){return In(n)?Jt(n,Wn(e,1,In,!0)):[]}),_d=sn(function(n,e){var t=ye(e);return In(t)&&(t=i),In(n)?Jt(n,Wn(e,1,In,!0),U(t,2)):[]}),gd=sn(function(n,e){var t=ye(e);return In(t)&&(t=i),In(n)?Jt(n,Wn(e,1,In,!0),i,t):[]});function md(n,e,t){var r=n==null?0:n.length;return r?(e=t||e===i?1:tn(e),$e(n,e<0?0:e,r)):[]}function bd(n,e,t){var r=n==null?0:n.length;return r?(e=t||e===i?1:tn(e),e=r-e,$e(n,0,e<0?0:e)):[]}function $d(n,e){return n&&n.length?Mr(n,U(e,3),!0,!0):[]}function yd(n,e){return n&&n.length?Mr(n,U(e,3),!0):[]}function kd(n,e,t,r){var o=n==null?0:n.length;return o?(t&&typeof t!="number"&&Jn(n,e,t)&&(t=0,r=o),vf(n,e,t,r)):[]}function Ba(n,e,t){var r=n==null?0:n.length;if(!r)return-1;var o=t==null?0:tn(t);return o<0&&(o=Dn(r+o,0)),fr(n,U(e,3),o)}function Va(n,e,t){var r=n==null?0:n.length;if(!r)return-1;var o=r-1;return t!==i&&(o=tn(t),o=t<0?Dn(r+o,0):qn(o,r-1)),fr(n,U(e,3),o,!0)}function Fa(n){var e=n==null?0:n.length;return e?Wn(n,1):[]}function wd(n){var e=n==null?0:n.length;return e?Wn(n,D):[]}function Sd(n,e){var t=n==null?0:n.length;return t?(e=e===i?1:tn(e),Wn(n,e)):[]}function Ld(n){for(var e=-1,t=n==null?0:n.length,r={};++e<t;){var o=n[e];r[o[0]]=o[1]}return r}function Ha(n){return n&&n.length?n[0]:i}function Ad(n,e,t){var r=n==null?0:n.length;if(!r)return-1;var o=t==null?0:tn(t);return o<0&&(o=Dn(r+o,0)),yt(n,e,o)}function Cd(n){var e=n==null?0:n.length;return e?$e(n,0,-1):[]}var Pd=sn(function(n){var e=Ln(n,Ji);return e.length&&e[0]===n[0]?Fi(e):[]}),Td=sn(function(n){var e=ye(n),t=Ln(n,Ji);return e===ye(t)?e=i:t.pop(),t.length&&t[0]===n[0]?Fi(t,U(e,2)):[]}),Id=sn(function(n){var e=ye(n),t=Ln(n,Ji);return e=typeof e=="function"?e:i,e&&t.pop(),t.length&&t[0]===n[0]?Fi(t,i,e):[]});function xd(n,e){return n==null?"":Ac.call(n,e)}function ye(n){var e=n==null?0:n.length;return e?n[e-1]:i}function Md(n,e,t){var r=n==null?0:n.length;if(!r)return-1;var o=r;return t!==i&&(o=tn(t),o=o<0?Dn(r+o,0):qn(o,r-1)),e===e?cc(n,e,o):fr(n,ys,o,!0)}function Ed(n,e){return n&&n.length?Qs(n,tn(e)):i}var Od=sn(Wa);function Wa(n,e){return n&&n.length&&e&&e.length?Gi(n,e):n}function Nd(n,e,t){return n&&n.length&&e&&e.length?Gi(n,e,U(t,2)):n}function Rd(n,e,t){return n&&n.length&&e&&e.length?Gi(n,e,i,t):n}var Dd=We(function(n,e){var t=n==null?0:n.length,r=Ri(n,e);return ea(n,Ln(e,function(o){return Ue(o,t)?+o:o}).sort(fa)),r});function Bd(n,e){var t=[];if(!(n&&n.length))return t;var r=-1,o=[],a=n.length;for(e=U(e,3);++r<a;){var c=n[r];e(c,r,n)&&(t.push(c),o.push(r))}return ea(n,o),t}function co(n){return n==null?n:Ic.call(n)}function Vd(n,e,t){var r=n==null?0:n.length;return r?(t&&typeof t!="number"&&Jn(n,e,t)?(e=0,t=r):(e=e==null?0:tn(e),t=t===i?r:tn(t)),$e(n,e,t)):[]}function Fd(n,e){return xr(n,e)}function Hd(n,e,t){return zi(n,e,U(t,2))}function Wd(n,e){var t=n==null?0:n.length;if(t){var r=xr(n,e);if(r<t&&Te(n[r],e))return r}return-1}function Ud(n,e){return xr(n,e,!0)}function Gd(n,e,t){return zi(n,e,U(t,2),!0)}function Kd(n,e){var t=n==null?0:n.length;if(t){var r=xr(n,e,!0)-1;if(Te(n[r],e))return r}return-1}function qd(n){return n&&n.length?ra(n):[]}function zd(n,e){return n&&n.length?ra(n,U(e,2)):[]}function Yd(n){var e=n==null?0:n.length;return e?$e(n,1,e):[]}function Xd(n,e,t){return n&&n.length?(e=t||e===i?1:tn(e),$e(n,0,e<0?0:e)):[]}function Jd(n,e,t){var r=n==null?0:n.length;return r?(e=t||e===i?1:tn(e),e=r-e,$e(n,e<0?0:e,r)):[]}function Zd(n,e){return n&&n.length?Mr(n,U(e,3),!1,!0):[]}function Qd(n,e){return n&&n.length?Mr(n,U(e,3)):[]}var jd=sn(function(n){return nt(Wn(n,1,In,!0))}),nh=sn(function(n){var e=ye(n);return In(e)&&(e=i),nt(Wn(n,1,In,!0),U(e,2))}),eh=sn(function(n){var e=ye(n);return e=typeof e=="function"?e:i,nt(Wn(n,1,In,!0),i,e)});function th(n){return n&&n.length?nt(n):[]}function rh(n,e){return n&&n.length?nt(n,U(e,2)):[]}function ih(n,e){return e=typeof e=="function"?e:i,n&&n.length?nt(n,i,e):[]}function fo(n){if(!(n&&n.length))return[];var e=0;return n=Xe(n,function(t){if(In(t))return e=Dn(t.length,e),!0}),Pi(e,function(t){return Ln(n,Li(t))})}function Ua(n,e){if(!(n&&n.length))return[];var t=fo(n);return e==null?t:Ln(t,function(r){return ae(e,i,r)})}var oh=sn(function(n,e){return In(n)?Jt(n,e):[]}),sh=sn(function(n){return Xi(Xe(n,In))}),ah=sn(function(n){var e=ye(n);return In(e)&&(e=i),Xi(Xe(n,In),U(e,2))}),uh=sn(function(n){var e=ye(n);return e=typeof e=="function"?e:i,Xi(Xe(n,In),i,e)}),lh=sn(fo);function ch(n,e){return aa(n||[],e||[],Xt)}function fh(n,e){return aa(n||[],e||[],jt)}var dh=sn(function(n){var e=n.length,t=e>1?n[e-1]:i;return t=typeof t=="function"?(n.pop(),t):i,Ua(n,t)});function Ga(n){var e=s(n);return e.__chain__=!0,e}function hh(n,e){return e(n),n}function Hr(n,e){return e(n)}var vh=We(function(n){var e=n.length,t=e?n[0]:0,r=this.__wrapped__,o=function(a){return Ri(a,n)};return e>1||this.__actions__.length||!(r instanceof cn)||!Ue(t)?this.thru(o):(r=r.slice(t,+t+(e?1:0)),r.__actions__.push({func:Hr,args:[o],thisArg:i}),new me(r,this.__chain__).thru(function(a){return e&&!a.length&&a.push(i),a}))});function ph(){return Ga(this)}function _h(){return new me(this.value(),this.__chain__)}function gh(){this.__values__===i&&(this.__values__=iu(this.value()));var n=this.__index__>=this.__values__.length,e=n?i:this.__values__[this.__index__++];return{done:n,value:e}}function mh(){return this}function bh(n){for(var e,t=this;t instanceof Ar;){var r=Da(t);r.__index__=0,r.__values__=i,e?o.__wrapped__=r:e=r;var o=r;t=t.__wrapped__}return o.__wrapped__=n,e}function $h(){var n=this.__wrapped__;if(n instanceof cn){var e=n;return this.__actions__.length&&(e=new cn(this)),e=e.reverse(),e.__actions__.push({func:Hr,args:[co],thisArg:i}),new me(e,this.__chain__)}return this.thru(co)}function yh(){return sa(this.__wrapped__,this.__actions__)}var kh=Er(function(n,e,t){gn.call(n,t)?++n[t]:Fe(n,t,1)});function wh(n,e,t){var r=j(n)?bs:hf;return t&&Jn(n,e,t)&&(e=i),r(n,U(e,3))}function Sh(n,e){var t=j(n)?Xe:Us;return t(n,U(e,3))}var Lh=ga(Ba),Ah=ga(Va);function Ch(n,e){return Wn(Wr(n,e),1)}function Ph(n,e){return Wn(Wr(n,e),D)}function Th(n,e,t){return t=t===i?1:tn(t),Wn(Wr(n,e),t)}function Ka(n,e){var t=j(n)?_e:je;return t(n,U(e,3))}function qa(n,e){var t=j(n)?zl:Ws;return t(n,U(e,3))}var Ih=Er(function(n,e,t){gn.call(n,t)?n[t].push(e):Fe(n,t,[e])});function xh(n,e,t,r){n=ee(n)?n:Et(n),t=t&&!r?tn(t):0;var o=n.length;return t<0&&(t=Dn(o+t,0)),zr(n)?t<=o&&n.indexOf(e,t)>-1:!!o&&yt(n,e,t)>-1}var Mh=sn(function(n,e,t){var r=-1,o=typeof e=="function",a=ee(n)?g(n.length):[];return je(n,function(c){a[++r]=o?ae(e,c,t):Zt(c,e,t)}),a}),Eh=Er(function(n,e,t){Fe(n,t,e)});function Wr(n,e){var t=j(n)?Ln:Xs;return t(n,U(e,3))}function Oh(n,e,t,r){return n==null?[]:(j(e)||(e=e==null?[]:[e]),t=r?i:t,j(t)||(t=t==null?[]:[t]),js(n,e,t))}var Nh=Er(function(n,e,t){n[t?0:1].push(e)},function(){return[[],[]]});function Rh(n,e,t){var r=j(n)?wi:ws,o=arguments.length<3;return r(n,U(e,4),t,o,je)}function Dh(n,e,t){var r=j(n)?Yl:ws,o=arguments.length<3;return r(n,U(e,4),t,o,Ws)}function Bh(n,e){var t=j(n)?Xe:Us;return t(n,Kr(U(e,3)))}function Vh(n){var e=j(n)?Bs:xf;return e(n)}function Fh(n,e,t){(t?Jn(n,e,t):e===i)?e=1:e=tn(e);var r=j(n)?uf:Mf;return r(n,e)}function Hh(n){var e=j(n)?lf:Of;return e(n)}function Wh(n){if(n==null)return 0;if(ee(n))return zr(n)?wt(n):n.length;var e=zn(n);return e==Le||e==Ae?n.size:Wi(n).length}function Uh(n,e,t){var r=j(n)?Si:Nf;return t&&Jn(n,e,t)&&(e=i),r(n,U(e,3))}var Gh=sn(function(n,e){if(n==null)return[];var t=e.length;return t>1&&Jn(n,e[0],e[1])?e=[]:t>2&&Jn(e[0],e[1],e[2])&&(e=[e[0]]),js(n,Wn(e,1),[])}),Ur=wc||function(){return Hn.Date.now()};function Kh(n,e){if(typeof e!="function")throw new ge(y);return n=tn(n),function(){if(--n<1)return e.apply(this,arguments)}}function za(n,e,t){return e=t?i:e,e=n&&e==null?n.length:e,He(n,ve,i,i,i,i,e)}function Ya(n,e){var t;if(typeof e!="function")throw new ge(y);return n=tn(n),function(){return--n>0&&(t=e.apply(this,arguments)),n<=1&&(e=i),t}}var ho=sn(function(n,e,t){var r=en;if(t.length){var o=Ze(t,xt(ho));r|=Mn}return He(n,r,e,t,o)}),Xa=sn(function(n,e,t){var r=en|Qn;if(t.length){var o=Ze(t,xt(Xa));r|=Mn}return He(e,r,n,t,o)});function Ja(n,e,t){e=t?i:e;var r=He(n,Tn,i,i,i,i,i,e);return r.placeholder=Ja.placeholder,r}function Za(n,e,t){e=t?i:e;var r=He(n,he,i,i,i,i,i,e);return r.placeholder=Za.placeholder,r}function Qa(n,e,t){var r,o,a,c,f,p,w=0,S=!1,A=!1,M=!0;if(typeof n!="function")throw new ge(y);e=ke(e)||0,Cn(t)&&(S=!!t.leading,A="maxWait"in t,a=A?Dn(ke(t.maxWait)||0,e):a,M="trailing"in t?!!t.trailing:M);function B(xn){var Ie=r,qe=o;return r=o=i,w=xn,c=n.apply(qe,Ie),c}function G(xn){return w=xn,f=tr(ln,e),S?B(xn):c}function rn(xn){var Ie=xn-p,qe=xn-w,gu=e-Ie;return A?qn(gu,a-qe):gu}function K(xn){var Ie=xn-p,qe=xn-w;return p===i||Ie>=e||Ie<0||A&&qe>=a}function ln(){var xn=Ur();if(K(xn))return fn(xn);f=tr(ln,rn(xn))}function fn(xn){return f=i,M&&r?B(xn):(r=o=i,c)}function fe(){f!==i&&ua(f),w=0,r=p=o=f=i}function Zn(){return f===i?c:fn(Ur())}function de(){var xn=Ur(),Ie=K(xn);if(r=arguments,o=this,p=xn,Ie){if(f===i)return G(p);if(A)return ua(f),f=tr(ln,e),B(p)}return f===i&&(f=tr(ln,e)),c}return de.cancel=fe,de.flush=Zn,de}var qh=sn(function(n,e){return Hs(n,1,e)}),zh=sn(function(n,e,t){return Hs(n,ke(e)||0,t)});function Yh(n){return He(n,Ye)}function Gr(n,e){if(typeof n!="function"||e!=null&&typeof e!="function")throw new ge(y);var t=function(){var r=arguments,o=e?e.apply(this,r):r[0],a=t.cache;if(a.has(o))return a.get(o);var c=n.apply(this,r);return t.cache=a.set(o,c)||a,c};return t.cache=new(Gr.Cache||Ve),t}Gr.Cache=Ve;function Kr(n){if(typeof n!="function")throw new ge(y);return function(){var e=arguments;switch(e.length){case 0:return!n.call(this);case 1:return!n.call(this,e[0]);case 2:return!n.call(this,e[0],e[1]);case 3:return!n.call(this,e[0],e[1],e[2])}return!n.apply(this,e)}}function Xh(n){return Ya(2,n)}var Jh=Rf(function(n,e){e=e.length==1&&j(e[0])?Ln(e[0],ue(U())):Ln(Wn(e,1),ue(U()));var t=e.length;return sn(function(r){for(var o=-1,a=qn(r.length,t);++o<a;)r[o]=e[o].call(this,r[o]);return ae(n,this,r)})}),vo=sn(function(n,e){var t=Ze(e,xt(vo));return He(n,Mn,i,e,t)}),ja=sn(function(n,e){var t=Ze(e,xt(ja));return He(n,jn,i,e,t)}),Zh=We(function(n,e){return He(n,Ne,i,i,i,e)});function Qh(n,e){if(typeof n!="function")throw new ge(y);return e=e===i?e:tn(e),sn(n,e)}function jh(n,e){if(typeof n!="function")throw new ge(y);return e=e==null?0:Dn(tn(e),0),sn(function(t){var r=t[e],o=tt(t,0,e);return r&&Je(o,r),ae(n,this,o)})}function nv(n,e,t){var r=!0,o=!0;if(typeof n!="function")throw new ge(y);return Cn(t)&&(r="leading"in t?!!t.leading:r,o="trailing"in t?!!t.trailing:o),Qa(n,e,{leading:r,maxWait:e,trailing:o})}function ev(n){return za(n,1)}function tv(n,e){return vo(Zi(e),n)}function rv(){if(!arguments.length)return[];var n=arguments[0];return j(n)?n:[n]}function iv(n){return be(n,on)}function ov(n,e){return e=typeof e=="function"?e:i,be(n,on,e)}function sv(n){return be(n,O|on)}function av(n,e){return e=typeof e=="function"?e:i,be(n,O|on,e)}function uv(n,e){return e==null||Fs(n,e,Fn(e))}function Te(n,e){return n===e||n!==n&&e!==e}var lv=Dr(Vi),cv=Dr(function(n,e){return n>=e}),pt=qs(function(){return arguments}())?qs:function(n){return Pn(n)&&gn.call(n,"callee")&&!Ms.call(n,"callee")},j=g.isArray,fv=hs?ue(hs):bf;function ee(n){return n!=null&&qr(n.length)&&!Ge(n)}function In(n){return Pn(n)&&ee(n)}function dv(n){return n===!0||n===!1||Pn(n)&&Xn(n)==Se}var rt=Lc||Lo,hv=vs?ue(vs):$f;function vv(n){return Pn(n)&&n.nodeType===1&&!rr(n)}function pv(n){if(n==null)return!0;if(ee(n)&&(j(n)||typeof n=="string"||typeof n.splice=="function"||rt(n)||Mt(n)||pt(n)))return!n.length;var e=zn(n);if(e==Le||e==Ae)return!n.size;if(er(n))return!Wi(n).length;for(var t in n)if(gn.call(n,t))return!1;return!0}function _v(n,e){return Qt(n,e)}function gv(n,e,t){t=typeof t=="function"?t:i;var r=t?t(n,e):i;return r===i?Qt(n,e,i,t):!!r}function po(n){if(!Pn(n))return!1;var e=Xn(n);return e==se||e==Kn||typeof n.message=="string"&&typeof n.name=="string"&&!rr(n)}function mv(n){return typeof n=="number"&&Os(n)}function Ge(n){if(!Cn(n))return!1;var e=Xn(n);return e==xe||e==st||e==Re||e==Hu}function nu(n){return typeof n=="number"&&n==tn(n)}function qr(n){return typeof n=="number"&&n>-1&&n%1==0&&n<=x}function Cn(n){var e=typeof n;return n!=null&&(e=="object"||e=="function")}function Pn(n){return n!=null&&typeof n=="object"}var eu=ps?ue(ps):kf;function bv(n,e){return n===e||Hi(n,e,io(e))}function $v(n,e,t){return t=typeof t=="function"?t:i,Hi(n,e,io(e),t)}function yv(n){return tu(n)&&n!=+n}function kv(n){if(od(n))throw new Z(m);return zs(n)}function wv(n){return n===null}function Sv(n){return n==null}function tu(n){return typeof n=="number"||Pn(n)&&Xn(n)==Bt}function rr(n){if(!Pn(n)||Xn(n)!=De)return!1;var e=br(n);if(e===null)return!0;var t=gn.call(e,"constructor")&&e.constructor;return typeof t=="function"&&t instanceof t&&pr.call(t)==bc}var _o=_s?ue(_s):wf;function Lv(n){return nu(n)&&n>=-x&&n<=x}var ru=gs?ue(gs):Sf;function zr(n){return typeof n=="string"||!j(n)&&Pn(n)&&Xn(n)==Ft}function ce(n){return typeof n=="symbol"||Pn(n)&&Xn(n)==sr}var Mt=ms?ue(ms):Lf;function Av(n){return n===i}function Cv(n){return Pn(n)&&zn(n)==Ht}function Pv(n){return Pn(n)&&Xn(n)==Uu}var Tv=Dr(Ui),Iv=Dr(function(n,e){return n<=e});function iu(n){if(!n)return[];if(ee(n))return zr(n)?Ce(n):ne(n);if(Gt&&n[Gt])return ac(n[Gt]());var e=zn(n),t=e==Le?Ii:e==Ae?dr:Et;return t(n)}function Ke(n){if(!n)return n===0?n:0;if(n=ke(n),n===D||n===-D){var e=n<0?-1:1;return e*Q}return n===n?n:0}function tn(n){var e=Ke(n),t=e%1;return e===e?t?e-t:e:0}function ou(n){return n?ft(tn(n),0,un):0}function ke(n){if(typeof n=="number")return n;if(ce(n))return X;if(Cn(n)){var e=typeof n.valueOf=="function"?n.valueOf():n;n=Cn(e)?e+"":e}if(typeof n!="string")return n===0?n:+n;n=Ss(n);var t=cl.test(n);return t||dl.test(n)?Gl(n.slice(2),t?2:8):ll.test(n)?X:+n}function su(n){return Ee(n,te(n))}function xv(n){return n?ft(tn(n),-x,x):n===0?n:0}function _n(n){return n==null?"":le(n)}var Mv=Tt(function(n,e){if(er(e)||ee(e)){Ee(e,Fn(e),n);return}for(var t in e)gn.call(e,t)&&Xt(n,t,e[t])}),au=Tt(function(n,e){Ee(e,te(e),n)}),Yr=Tt(function(n,e,t,r){Ee(e,te(e),n,r)}),Ev=Tt(function(n,e,t,r){Ee(e,Fn(e),n,r)}),Ov=We(Ri);function Nv(n,e){var t=Pt(n);return e==null?t:Vs(t,e)}var Rv=sn(function(n,e){n=bn(n);var t=-1,r=e.length,o=r>2?e[2]:i;for(o&&Jn(e[0],e[1],o)&&(r=1);++t<r;)for(var a=e[t],c=te(a),f=-1,p=c.length;++f<p;){var w=c[f],S=n[w];(S===i||Te(S,Lt[w])&&!gn.call(n,w))&&(n[w]=a[w])}return n}),Dv=sn(function(n){return n.push(i,Sa),ae(uu,i,n)});function Bv(n,e){return $s(n,U(e,3),Me)}function Vv(n,e){return $s(n,U(e,3),Bi)}function Fv(n,e){return n==null?n:Di(n,U(e,3),te)}function Hv(n,e){return n==null?n:Gs(n,U(e,3),te)}function Wv(n,e){return n&&Me(n,U(e,3))}function Uv(n,e){return n&&Bi(n,U(e,3))}function Gv(n){return n==null?[]:Tr(n,Fn(n))}function Kv(n){return n==null?[]:Tr(n,te(n))}function go(n,e,t){var r=n==null?i:dt(n,e);return r===i?t:r}function qv(n,e){return n!=null&&Ca(n,e,pf)}function mo(n,e){return n!=null&&Ca(n,e,_f)}var zv=ba(function(n,e,t){e!=null&&typeof e.toString!="function"&&(e=_r.call(e)),n[e]=t},$o(re)),Yv=ba(function(n,e,t){e!=null&&typeof e.toString!="function"&&(e=_r.call(e)),gn.call(n,e)?n[e].push(t):n[e]=[t]},U),Xv=sn(Zt);function Fn(n){return ee(n)?Ds(n):Wi(n)}function te(n){return ee(n)?Ds(n,!0):Af(n)}function Jv(n,e){var t={};return e=U(e,3),Me(n,function(r,o,a){Fe(t,e(r,o,a),r)}),t}function Zv(n,e){var t={};return e=U(e,3),Me(n,function(r,o,a){Fe(t,o,e(r,o,a))}),t}var Qv=Tt(function(n,e,t){Ir(n,e,t)}),uu=Tt(function(n,e,t,r){Ir(n,e,t,r)}),jv=We(function(n,e){var t={};if(n==null)return t;var r=!1;e=Ln(e,function(a){return a=et(a,n),r||(r=a.length>1),a}),Ee(n,to(n),t),r&&(t=be(t,O|an|on,zf));for(var o=e.length;o--;)Yi(t,e[o]);return t});function np(n,e){return lu(n,Kr(U(e)))}var ep=We(function(n,e){return n==null?{}:Pf(n,e)});function lu(n,e){if(n==null)return{};var t=Ln(to(n),function(r){return[r]});return e=U(e),na(n,t,function(r,o){return e(r,o[0])})}function tp(n,e,t){e=et(e,n);var r=-1,o=e.length;for(o||(o=1,n=i);++r<o;){var a=n==null?i:n[Oe(e[r])];a===i&&(r=o,a=t),n=Ge(a)?a.call(n):a}return n}function rp(n,e,t){return n==null?n:jt(n,e,t)}function ip(n,e,t,r){return r=typeof r=="function"?r:i,n==null?n:jt(n,e,t,r)}var cu=ka(Fn),fu=ka(te);function op(n,e,t){var r=j(n),o=r||rt(n)||Mt(n);if(e=U(e,4),t==null){var a=n&&n.constructor;o?t=r?new a:[]:Cn(n)?t=Ge(a)?Pt(br(n)):{}:t={}}return(o?_e:Me)(n,function(c,f,p){return e(t,c,f,p)}),t}function sp(n,e){return n==null?!0:Yi(n,e)}function ap(n,e,t){return n==null?n:oa(n,e,Zi(t))}function up(n,e,t,r){return r=typeof r=="function"?r:i,n==null?n:oa(n,e,Zi(t),r)}function Et(n){return n==null?[]:Ti(n,Fn(n))}function lp(n){return n==null?[]:Ti(n,te(n))}function cp(n,e,t){return t===i&&(t=e,e=i),t!==i&&(t=ke(t),t=t===t?t:0),e!==i&&(e=ke(e),e=e===e?e:0),ft(ke(n),e,t)}function fp(n,e,t){return e=Ke(e),t===i?(t=e,e=0):t=Ke(t),n=ke(n),gf(n,e,t)}function dp(n,e,t){if(t&&typeof t!="boolean"&&Jn(n,e,t)&&(e=t=i),t===i&&(typeof e=="boolean"?(t=e,e=i):typeof n=="boolean"&&(t=n,n=i)),n===i&&e===i?(n=0,e=1):(n=Ke(n),e===i?(e=n,n=0):e=Ke(e)),n>e){var r=n;n=e,e=r}if(t||n%1||e%1){var o=Ns();return qn(n+o*(e-n+Ul("1e-"+((o+"").length-1))),e)}return Ki(n,e)}var hp=It(function(n,e,t){return e=e.toLowerCase(),n+(t?du(e):e)});function du(n){return bo(_n(n).toLowerCase())}function hu(n){return n=_n(n),n&&n.replace(vl,tc).replace(El,"")}function vp(n,e,t){n=_n(n),e=le(e);var r=n.length;t=t===i?r:ft(tn(t),0,r);var o=t;return t-=e.length,t>=0&&n.slice(t,o)==e}function pp(n){return n=_n(n),n&&Yu.test(n)?n.replace(Go,rc):n}function _p(n){return n=_n(n),n&&nl.test(n)?n.replace(hi,"\\$&"):n}var gp=It(function(n,e,t){return n+(t?"-":"")+e.toLowerCase()}),mp=It(function(n,e,t){return n+(t?" ":"")+e.toLowerCase()}),bp=_a("toLowerCase");function $p(n,e,t){n=_n(n),e=tn(e);var r=e?wt(n):0;if(!e||r>=e)return n;var o=(e-r)/2;return Rr(wr(o),t)+n+Rr(kr(o),t)}function yp(n,e,t){n=_n(n),e=tn(e);var r=e?wt(n):0;return e&&r<e?n+Rr(e-r,t):n}function kp(n,e,t){n=_n(n),e=tn(e);var r=e?wt(n):0;return e&&r<e?Rr(e-r,t)+n:n}function wp(n,e,t){return t||e==null?e=0:e&&(e=+e),Tc(_n(n).replace(vi,""),e||0)}function Sp(n,e,t){return(t?Jn(n,e,t):e===i)?e=1:e=tn(e),qi(_n(n),e)}function Lp(){var n=arguments,e=_n(n[0]);return n.length<3?e:e.replace(n[1],n[2])}var Ap=It(function(n,e,t){return n+(t?"_":"")+e.toLowerCase()});function Cp(n,e,t){return t&&typeof t!="number"&&Jn(n,e,t)&&(e=t=i),t=t===i?un:t>>>0,t?(n=_n(n),n&&(typeof e=="string"||e!=null&&!_o(e))&&(e=le(e),!e&&kt(n))?tt(Ce(n),0,t):n.split(e,t)):[]}var Pp=It(function(n,e,t){return n+(t?" ":"")+bo(e)});function Tp(n,e,t){return n=_n(n),t=t==null?0:ft(tn(t),0,n.length),e=le(e),n.slice(t,t+e.length)==e}function Ip(n,e,t){var r=s.templateSettings;t&&Jn(n,e,t)&&(e=i),n=_n(n),e=Yr({},e,r,wa);var o=Yr({},e.imports,r.imports,wa),a=Fn(o),c=Ti(o,a),f,p,w=0,S=e.interpolate||ar,A="__p += '",M=xi((e.escape||ar).source+"|"+S.source+"|"+(S===Ko?ul:ar).source+"|"+(e.evaluate||ar).source+"|$","g"),B="//# sourceURL="+(gn.call(e,"sourceURL")?(e.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++Bl+"]")+`
`;n.replace(M,function(K,ln,fn,fe,Zn,de){return fn||(fn=fe),A+=n.slice(w,de).replace(pl,ic),ln&&(f=!0,A+=`' +
__e(`+ln+`) +
'`),Zn&&(p=!0,A+=`';
`+Zn+`;
__p += '`),fn&&(A+=`' +
((__t = (`+fn+`)) == null ? '' : __t) +
'`),w=de+K.length,K}),A+=`';
`;var G=gn.call(e,"variable")&&e.variable;if(!G)A=`with (obj) {
`+A+`
}
`;else if(sl.test(G))throw new Z(I);A=(p?A.replace(Gu,""):A).replace(Ku,"$1").replace(qu,"$1;"),A="function("+(G||"obj")+`) {
`+(G?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(f?", __e = _.escape":"")+(p?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+A+`return __p
}`;var rn=pu(function(){return hn(a,B+"return "+A).apply(i,c)});if(rn.source=A,po(rn))throw rn;return rn}function xp(n){return _n(n).toLowerCase()}function Mp(n){return _n(n).toUpperCase()}function Ep(n,e,t){if(n=_n(n),n&&(t||e===i))return Ss(n);if(!n||!(e=le(e)))return n;var r=Ce(n),o=Ce(e),a=Ls(r,o),c=As(r,o)+1;return tt(r,a,c).join("")}function Op(n,e,t){if(n=_n(n),n&&(t||e===i))return n.slice(0,Ps(n)+1);if(!n||!(e=le(e)))return n;var r=Ce(n),o=As(r,Ce(e))+1;return tt(r,0,o).join("")}function Np(n,e,t){if(n=_n(n),n&&(t||e===i))return n.replace(vi,"");if(!n||!(e=le(e)))return n;var r=Ce(n),o=Ls(r,Ce(e));return tt(r,o).join("")}function Rp(n,e){var t=En,r=pn;if(Cn(e)){var o="separator"in e?e.separator:o;t="length"in e?tn(e.length):t,r="omission"in e?le(e.omission):r}n=_n(n);var a=n.length;if(kt(n)){var c=Ce(n);a=c.length}if(t>=a)return n;var f=t-wt(r);if(f<1)return r;var p=c?tt(c,0,f).join(""):n.slice(0,f);if(o===i)return p+r;if(c&&(f+=p.length-f),_o(o)){if(n.slice(f).search(o)){var w,S=p;for(o.global||(o=xi(o.source,_n(qo.exec(o))+"g")),o.lastIndex=0;w=o.exec(S);)var A=w.index;p=p.slice(0,A===i?f:A)}}else if(n.indexOf(le(o),f)!=f){var M=p.lastIndexOf(o);M>-1&&(p=p.slice(0,M))}return p+r}function Dp(n){return n=_n(n),n&&zu.test(n)?n.replace(Uo,fc):n}var Bp=It(function(n,e,t){return n+(t?" ":"")+e.toUpperCase()}),bo=_a("toUpperCase");function vu(n,e,t){return n=_n(n),e=t?i:e,e===i?sc(n)?vc(n):Zl(n):n.match(e)||[]}var pu=sn(function(n,e){try{return ae(n,i,e)}catch(t){return po(t)?t:new Z(t)}}),Vp=We(function(n,e){return _e(e,function(t){t=Oe(t),Fe(n,t,ho(n[t],n))}),n});function Fp(n){var e=n==null?0:n.length,t=U();return n=e?Ln(n,function(r){if(typeof r[1]!="function")throw new ge(y);return[t(r[0]),r[1]]}):[],sn(function(r){for(var o=-1;++o<e;){var a=n[o];if(ae(a[0],this,r))return ae(a[1],this,r)}})}function Hp(n){return df(be(n,O))}function $o(n){return function(){return n}}function Wp(n,e){return n==null||n!==n?e:n}var Up=ma(),Gp=ma(!0);function re(n){return n}function yo(n){return Ys(typeof n=="function"?n:be(n,O))}function Kp(n){return Js(be(n,O))}function qp(n,e){return Zs(n,be(e,O))}var zp=sn(function(n,e){return function(t){return Zt(t,n,e)}}),Yp=sn(function(n,e){return function(t){return Zt(n,t,e)}});function ko(n,e,t){var r=Fn(e),o=Tr(e,r);t==null&&!(Cn(e)&&(o.length||!r.length))&&(t=e,e=n,n=this,o=Tr(e,Fn(e)));var a=!(Cn(t)&&"chain"in t)||!!t.chain,c=Ge(n);return _e(o,function(f){var p=e[f];n[f]=p,c&&(n.prototype[f]=function(){var w=this.__chain__;if(a||w){var S=n(this.__wrapped__),A=S.__actions__=ne(this.__actions__);return A.push({func:p,args:arguments,thisArg:n}),S.__chain__=w,S}return p.apply(n,Je([this.value()],arguments))})}),n}function Xp(){return Hn._===this&&(Hn._=$c),this}function wo(){}function Jp(n){return n=tn(n),sn(function(e){return Qs(e,n)})}var Zp=ji(Ln),Qp=ji(bs),jp=ji(Si);function _u(n){return so(n)?Li(Oe(n)):Tf(n)}function n_(n){return function(e){return n==null?i:dt(n,e)}}var e_=$a(),t_=$a(!0);function So(){return[]}function Lo(){return!1}function r_(){return{}}function i_(){return""}function o_(){return!0}function s_(n,e){if(n=tn(n),n<1||n>x)return[];var t=un,r=qn(n,un);e=U(e),n-=un;for(var o=Pi(r,e);++t<n;)e(t);return o}function a_(n){return j(n)?Ln(n,Oe):ce(n)?[n]:ne(Ra(_n(n)))}function u_(n){var e=++mc;return _n(n)+e}var l_=Nr(function(n,e){return n+e},0),c_=no("ceil"),f_=Nr(function(n,e){return n/e},1),d_=no("floor");function h_(n){return n&&n.length?Pr(n,re,Vi):i}function v_(n,e){return n&&n.length?Pr(n,U(e,2),Vi):i}function p_(n){return ks(n,re)}function __(n,e){return ks(n,U(e,2))}function g_(n){return n&&n.length?Pr(n,re,Ui):i}function m_(n,e){return n&&n.length?Pr(n,U(e,2),Ui):i}var b_=Nr(function(n,e){return n*e},1),$_=no("round"),y_=Nr(function(n,e){return n-e},0);function k_(n){return n&&n.length?Ci(n,re):0}function w_(n,e){return n&&n.length?Ci(n,U(e,2)):0}return s.after=Kh,s.ary=za,s.assign=Mv,s.assignIn=au,s.assignInWith=Yr,s.assignWith=Ev,s.at=Ov,s.before=Ya,s.bind=ho,s.bindAll=Vp,s.bindKey=Xa,s.castArray=rv,s.chain=Ga,s.chunk=dd,s.compact=hd,s.concat=vd,s.cond=Fp,s.conforms=Hp,s.constant=$o,s.countBy=kh,s.create=Nv,s.curry=Ja,s.curryRight=Za,s.debounce=Qa,s.defaults=Rv,s.defaultsDeep=Dv,s.defer=qh,s.delay=zh,s.difference=pd,s.differenceBy=_d,s.differenceWith=gd,s.drop=md,s.dropRight=bd,s.dropRightWhile=$d,s.dropWhile=yd,s.fill=kd,s.filter=Sh,s.flatMap=Ch,s.flatMapDeep=Ph,s.flatMapDepth=Th,s.flatten=Fa,s.flattenDeep=wd,s.flattenDepth=Sd,s.flip=Yh,s.flow=Up,s.flowRight=Gp,s.fromPairs=Ld,s.functions=Gv,s.functionsIn=Kv,s.groupBy=Ih,s.initial=Cd,s.intersection=Pd,s.intersectionBy=Td,s.intersectionWith=Id,s.invert=zv,s.invertBy=Yv,s.invokeMap=Mh,s.iteratee=yo,s.keyBy=Eh,s.keys=Fn,s.keysIn=te,s.map=Wr,s.mapKeys=Jv,s.mapValues=Zv,s.matches=Kp,s.matchesProperty=qp,s.memoize=Gr,s.merge=Qv,s.mergeWith=uu,s.method=zp,s.methodOf=Yp,s.mixin=ko,s.negate=Kr,s.nthArg=Jp,s.omit=jv,s.omitBy=np,s.once=Xh,s.orderBy=Oh,s.over=Zp,s.overArgs=Jh,s.overEvery=Qp,s.overSome=jp,s.partial=vo,s.partialRight=ja,s.partition=Nh,s.pick=ep,s.pickBy=lu,s.property=_u,s.propertyOf=n_,s.pull=Od,s.pullAll=Wa,s.pullAllBy=Nd,s.pullAllWith=Rd,s.pullAt=Dd,s.range=e_,s.rangeRight=t_,s.rearg=Zh,s.reject=Bh,s.remove=Bd,s.rest=Qh,s.reverse=co,s.sampleSize=Fh,s.set=rp,s.setWith=ip,s.shuffle=Hh,s.slice=Vd,s.sortBy=Gh,s.sortedUniq=qd,s.sortedUniqBy=zd,s.split=Cp,s.spread=jh,s.tail=Yd,s.take=Xd,s.takeRight=Jd,s.takeRightWhile=Zd,s.takeWhile=Qd,s.tap=hh,s.throttle=nv,s.thru=Hr,s.toArray=iu,s.toPairs=cu,s.toPairsIn=fu,s.toPath=a_,s.toPlainObject=su,s.transform=op,s.unary=ev,s.union=jd,s.unionBy=nh,s.unionWith=eh,s.uniq=th,s.uniqBy=rh,s.uniqWith=ih,s.unset=sp,s.unzip=fo,s.unzipWith=Ua,s.update=ap,s.updateWith=up,s.values=Et,s.valuesIn=lp,s.without=oh,s.words=vu,s.wrap=tv,s.xor=sh,s.xorBy=ah,s.xorWith=uh,s.zip=lh,s.zipObject=ch,s.zipObjectDeep=fh,s.zipWith=dh,s.entries=cu,s.entriesIn=fu,s.extend=au,s.extendWith=Yr,ko(s,s),s.add=l_,s.attempt=pu,s.camelCase=hp,s.capitalize=du,s.ceil=c_,s.clamp=cp,s.clone=iv,s.cloneDeep=sv,s.cloneDeepWith=av,s.cloneWith=ov,s.conformsTo=uv,s.deburr=hu,s.defaultTo=Wp,s.divide=f_,s.endsWith=vp,s.eq=Te,s.escape=pp,s.escapeRegExp=_p,s.every=wh,s.find=Lh,s.findIndex=Ba,s.findKey=Bv,s.findLast=Ah,s.findLastIndex=Va,s.findLastKey=Vv,s.floor=d_,s.forEach=Ka,s.forEachRight=qa,s.forIn=Fv,s.forInRight=Hv,s.forOwn=Wv,s.forOwnRight=Uv,s.get=go,s.gt=lv,s.gte=cv,s.has=qv,s.hasIn=mo,s.head=Ha,s.identity=re,s.includes=xh,s.indexOf=Ad,s.inRange=fp,s.invoke=Xv,s.isArguments=pt,s.isArray=j,s.isArrayBuffer=fv,s.isArrayLike=ee,s.isArrayLikeObject=In,s.isBoolean=dv,s.isBuffer=rt,s.isDate=hv,s.isElement=vv,s.isEmpty=pv,s.isEqual=_v,s.isEqualWith=gv,s.isError=po,s.isFinite=mv,s.isFunction=Ge,s.isInteger=nu,s.isLength=qr,s.isMap=eu,s.isMatch=bv,s.isMatchWith=$v,s.isNaN=yv,s.isNative=kv,s.isNil=Sv,s.isNull=wv,s.isNumber=tu,s.isObject=Cn,s.isObjectLike=Pn,s.isPlainObject=rr,s.isRegExp=_o,s.isSafeInteger=Lv,s.isSet=ru,s.isString=zr,s.isSymbol=ce,s.isTypedArray=Mt,s.isUndefined=Av,s.isWeakMap=Cv,s.isWeakSet=Pv,s.join=xd,s.kebabCase=gp,s.last=ye,s.lastIndexOf=Md,s.lowerCase=mp,s.lowerFirst=bp,s.lt=Tv,s.lte=Iv,s.max=h_,s.maxBy=v_,s.mean=p_,s.meanBy=__,s.min=g_,s.minBy=m_,s.stubArray=So,s.stubFalse=Lo,s.stubObject=r_,s.stubString=i_,s.stubTrue=o_,s.multiply=b_,s.nth=Ed,s.noConflict=Xp,s.noop=wo,s.now=Ur,s.pad=$p,s.padEnd=yp,s.padStart=kp,s.parseInt=wp,s.random=dp,s.reduce=Rh,s.reduceRight=Dh,s.repeat=Sp,s.replace=Lp,s.result=tp,s.round=$_,s.runInContext=v,s.sample=Vh,s.size=Wh,s.snakeCase=Ap,s.some=Uh,s.sortedIndex=Fd,s.sortedIndexBy=Hd,s.sortedIndexOf=Wd,s.sortedLastIndex=Ud,s.sortedLastIndexBy=Gd,s.sortedLastIndexOf=Kd,s.startCase=Pp,s.startsWith=Tp,s.subtract=y_,s.sum=k_,s.sumBy=w_,s.template=Ip,s.times=s_,s.toFinite=Ke,s.toInteger=tn,s.toLength=ou,s.toLower=xp,s.toNumber=ke,s.toSafeInteger=xv,s.toString=_n,s.toUpper=Mp,s.trim=Ep,s.trimEnd=Op,s.trimStart=Np,s.truncate=Rp,s.unescape=Dp,s.uniqueId=u_,s.upperCase=Bp,s.upperFirst=bo,s.each=Ka,s.eachRight=qa,s.first=Ha,ko(s,function(){var n={};return Me(s,function(e,t){gn.call(s.prototype,t)||(n[t]=e)}),n}(),{chain:!1}),s.VERSION=d,_e(["bind","bindKey","curry","curryRight","partial","partialRight"],function(n){s[n].placeholder=s}),_e(["drop","take"],function(n,e){cn.prototype[n]=function(t){t=t===i?1:Dn(tn(t),0);var r=this.__filtered__&&!e?new cn(this):this.clone();return r.__filtered__?r.__takeCount__=qn(t,r.__takeCount__):r.__views__.push({size:qn(t,un),type:n+(r.__dir__<0?"Right":"")}),r},cn.prototype[n+"Right"]=function(t){return this.reverse()[n](t).reverse()}}),_e(["filter","map","takeWhile"],function(n,e){var t=e+1,r=t==Y||t==E;cn.prototype[n]=function(o){var a=this.clone();return a.__iteratees__.push({iteratee:U(o,3),type:t}),a.__filtered__=a.__filtered__||r,a}}),_e(["head","last"],function(n,e){var t="take"+(e?"Right":"");cn.prototype[n]=function(){return this[t](1).value()[0]}}),_e(["initial","tail"],function(n,e){var t="drop"+(e?"":"Right");cn.prototype[n]=function(){return this.__filtered__?new cn(this):this[t](1)}}),cn.prototype.compact=function(){return this.filter(re)},cn.prototype.find=function(n){return this.filter(n).head()},cn.prototype.findLast=function(n){return this.reverse().find(n)},cn.prototype.invokeMap=sn(function(n,e){return typeof n=="function"?new cn(this):this.map(function(t){return Zt(t,n,e)})}),cn.prototype.reject=function(n){return this.filter(Kr(U(n)))},cn.prototype.slice=function(n,e){n=tn(n);var t=this;return t.__filtered__&&(n>0||e<0)?new cn(t):(n<0?t=t.takeRight(-n):n&&(t=t.drop(n)),e!==i&&(e=tn(e),t=e<0?t.dropRight(-e):t.take(e-n)),t)},cn.prototype.takeRightWhile=function(n){return this.reverse().takeWhile(n).reverse()},cn.prototype.toArray=function(){return this.take(un)},Me(cn.prototype,function(n,e){var t=/^(?:filter|find|map|reject)|While$/.test(e),r=/^(?:head|last)$/.test(e),o=s[r?"take"+(e=="last"?"Right":""):e],a=r||/^find/.test(e);o&&(s.prototype[e]=function(){var c=this.__wrapped__,f=r?[1]:arguments,p=c instanceof cn,w=f[0],S=p||j(c),A=function(ln){var fn=o.apply(s,Je([ln],f));return r&&M?fn[0]:fn};S&&t&&typeof w=="function"&&w.length!=1&&(p=S=!1);var M=this.__chain__,B=!!this.__actions__.length,G=a&&!M,rn=p&&!B;if(!a&&S){c=rn?c:new cn(this);var K=n.apply(c,f);return K.__actions__.push({func:Hr,args:[A],thisArg:i}),new me(K,M)}return G&&rn?n.apply(this,f):(K=this.thru(A),G?r?K.value()[0]:K.value():K)})}),_e(["pop","push","shift","sort","splice","unshift"],function(n){var e=hr[n],t=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",r=/^(?:pop|shift)$/.test(n);s.prototype[n]=function(){var o=arguments;if(r&&!this.__chain__){var a=this.value();return e.apply(j(a)?a:[],o)}return this[t](function(c){return e.apply(j(c)?c:[],o)})}}),Me(cn.prototype,function(n,e){var t=s[e];if(t){var r=t.name+"";gn.call(Ct,r)||(Ct[r]=[]),Ct[r].push({name:e,func:t})}}),Ct[Or(i,Qn).name]=[{name:"wrapper",func:i}],cn.prototype.clone=Rc,cn.prototype.reverse=Dc,cn.prototype.value=Bc,s.prototype.at=vh,s.prototype.chain=ph,s.prototype.commit=_h,s.prototype.next=gh,s.prototype.plant=bh,s.prototype.reverse=$h,s.prototype.toJSON=s.prototype.valueOf=s.prototype.value=yh,s.prototype.first=s.prototype.head,Gt&&(s.prototype[Gt]=mh),s},St=pc();at?((at.exports=St)._=St,$i._=St):Hn._=St}).call(Ot)})(Zr,Zr.exports);var Sg=Zr.exports;const mu=Tu(Sg),Lg={class:"VPLastUpdated"},Ag=F({__name:"VPDocFooterLastUpdated",props:{date:{}},setup(l){return(u,i)=>(_(),L("p",Lg,[it(mn("最后编辑时间")+": "),T("time",null,mn(u.date),1)]))}}),Cg=q(Ag,[["__scopeId","data-v-d326f0bd"]]),Pg=[{text:"鸿蒙NEXT开发：鸿蒙Flutter插件开发",link:"/docs/frontend/ohos/007-flutter-plugin",date:17140896e5,recommend:"ohos",content:`\r
\r
鸿蒙NEXT开发：鸿蒙Flutter插件开发\r
\r
鸿蒙适配版flutter：https://gitee.com/openharmony-sig/flutter_flutter  \r
\r
文档：https://gitee.com/openharmony-sig/flutter_samples/tree/master/ohos/docs\r
\r
插件模板：https://gitee.com/w...`,tags:["鸿蒙"]},{text:"鸿蒙NEXT开发：通过 N-API 调用 Rust",link:"/docs/frontend/ohos/006-napi",date:17114112e5,recommend:"ohos",content:`\r
\r
鸿蒙 NEXT 开发：通过 N-API 调用 Rust\r
\r
https://blog.csdn.net/zrufo747/article/details/132309037\r
\r
创建模板工程\r
\r
1. 使用 \`File-&gt;New-&gt;Create Project\` 创建 \`Native C++\` 模板工程。\r
2. 删除 \`entry/src/main/cpp\`。\r
3. 编辑 \`en...`,tags:["鸿蒙"]},{text:"鸿蒙NEXT开发：服务卡片开发汇总",link:"/docs/frontend/ohos/005-atom-service",date:1708992e6,recommend:"ohos",content:`\r
\r
鸿蒙 NEXT 开发：服务卡片开发汇总\r
\r
如何在 onAddForm 获取卡片标识(formId)\r
\r
\r
\r
加载远程图片\r
\r
参考文档：\r
\r
\r
\r
`,tags:["鸿蒙"]},{text:"鸿蒙NEXT开发：媒体操作汇总",link:"/docs/frontend/ohos/004-media",date:1708992e6,recommend:"ohos",content:`\r
\r
鸿蒙 NEXT 开发：媒体操作汇总\r
\r
选择图片并上传\r
\r
\r
\r
如何把 \`Canvas\` 的内容保存为图片\r
\r
\r
\r
将图片直接保存到相册\r
\r
\r
\r
\r
\r
通过离屏canvas合成水印图\r
\r
\r
\r
从 rawfile 读图片\r
\r
\r
\r
ArrayBuffer 和 PixelMap 互相转换\r
\r
\r
\r
PixelMap 转图片文件\r
\r
\r
\r
获取视频/音频信...`,tags:["鸿蒙"]},{text:"鸿蒙NEXT开发：上下文和路径问题汇总",link:"/docs/frontend/ohos/003-context-and-path",date:17070048e5,recommend:"ohos",content:`\r
\r
鸿蒙NEXT开发：上下文和路径问题汇总\r
\r
应用文件路径\r
\r
\r
\r
应用沙箱路径和真实物理路径的对应关系\r
\r
在应用沙箱路径下读写文件，经过映射转换，实际读写的是真实物理路径中的应用文件，应用沙箱路径与真实物理路径对应关系如下表所示。\r
\r
其中 \`\` 当前固定为100。\r
\r
| 应用沙箱路径                       | 物理路径               ...`,tags:["鸿蒙"]},{text:"鸿蒙NEXT开发：一些工具的包装",link:"/docs/frontend/ohos/002-utils",date:17070048e5,recommend:"ohos",content:`\r
\r
鸿蒙 NEXT 开发：一些工具的包装\r
\r
ObservedArray 可观察的数组类\r
\r
\r
\r
纯对象转 Class\r
\r
\r
\r
\r
\r
\r
\r
单例全局上下文\r
\r
\r
\r
尺寸适配类\r
\r
\r
\r
用于懒加载的数据源封装\r
\r
\r
\r
权限工具\r
\r
\r
\r
图片选择工具\r
\r
\r
\r
文件操作\r
\r
通过路径写文件\r
\r
\r
\r
文件上传工具\r
\r
推荐 \r
\r
窗口管理工具...`,tags:["鸿蒙"]},{text:"鸿蒙NEXT开发：常用三方库与包管理",link:"/docs/frontend/ohos/001-pkg",date:17070048e5,recommend:"ohos",content:`\r
\r
鸿蒙 NEXT 开发：常用三方库与包管理\r
\r
推荐列表\r
\r
| 名称                     | 简介                                                                                                                                       ...`,tags:["鸿蒙"]},{text:"鸿蒙NEXT开发：一些基础笔记",link:"/docs/frontend/ohos/000-base",date:17070048e5,recommend:"ohos",content:`\r
\r
鸿蒙 NEXT 开发：一些基础笔记\r
\r
一个不错的案例仓库\r
\r
\r
\r
路由的基本使用\r
\r
\r
\r
- \`router.pushUrl()\`  跳转到指定页面。\r
- \`router.replace()\`  替换当前页面并销毁。\r
- \`router.back()\`  返回上一个页面。\r
- \`router.getParams()\`  获取上一个页面跳转过来携带的参数。\r
- \`ro...`,tags:["鸿蒙"]}],Tg=[{text:"Fabric.js 补充笔记",link:"/docs/frontend/canvas/fabric",date:16692822e5,recommend:"canvas",content:"\n\nFabric.js 补充笔记\n\n选中状态元素置顶问题\n\n\n\n`fabric canvas` 的 `preserveObjectStacking`，当设置为 `true` 的时候是在当前层,设置为 `false` 时是置顶选中元素,默认的是 `false`。\n\n思路：图层排序问题\n\n`fabric` 中没有 `CSS` 中 `z-index` 的概念，需要通过 `moveTo()` 和 `bri...",tags:["Fabric","Canvas"]},{text:"Canvas 事件系统的思考",link:"/docs/frontend/canvas/canvas-note2",date:1658335824e3,recommend:"canvas",content:`

Canvas 事件系统的思考

基于投影的事件系统（投影法）

这是目前我项目中使用的方式，因为公司**保密协议**的问题，这里只说一下思路：

1. 首先我们需要创建两个画布，一个是给用户看的主画布，另一个是用户不可见的影子画布。
2. 当主画布渲染图形的时候，在影子画布上生成主画布形状的投影，投影的颜色和图形 ID 使用特定的算法形成映射。
3. 当主画布被点击时，获取点击的坐标。
4. ...`,tags:["Canvas"]},{text:"Canvas 笔记",link:"/docs/frontend/canvas/canvas-note",date:1515603024e3,recommend:"canvas",content:`

Canvas 笔记

HTML5 画布(Canvas)元素



浏览器不支持画布(canvas)时的备案



2d context



Webgl context (3d)



图形

绘制方形



填充区域



绘制方形的边框



绘制圆形



风格

填充



勾勒



线性渐变



径向渐变



图案



交点



线头



阴影



Alpha (透明)...`,tags:["Canvas"]}],Ig=[{text:"Blender 笔记03: 建模篇",link:"/docs/frontend/3d/blender-03-modeling",date:1603731e6,recommend:"blender",content:`

Blender 笔记 03: 建模篇

平面挖孔建模案例 01

镜像

对一个平面做镜像





CTRL+SHIFT+B 打孔

选中需要打洞的顶点



CTRL+SHIFT+B 或 CTRL+BV



按 X 删除选中的面



用切线控制细分的弧度

如果不希望角的弧度过大：



可以用 K 加两条切线，注意可以用 C 来锁定角度



平面挖孔建模案例 02

用 E 挤出来...`,tags:["3D","Blender"]},{text:"Blender 笔记02: 修改器",link:"/docs/frontend/3d/blender-02-modify",date:16031262e5,recommend:"blender",content:`

Blender 笔记 02: 修改器



阵列修改器





使用物体偏移可以制作这样的效果：



倒角修改器

一般会配合权重和顶点组去使用，对倒角进行精细的控制。

2.90 增加了自定义模式，可以通过曲线控制倒角。



布尔修改器

注意：要留下哪个物体就在哪个物体上添加修改器。



布尔插件



需要留下哪个就最后点哪个



精简修改器



塌陷模式可配合顶点组达到这样...`,tags:["3D","Blender"]},{text:"Blender 笔记01: 基本操作和编辑模式",link:"/docs/frontend/3d/blender-01-basic",date:16025214e5,recommend:"blender",content:`

Blender 笔记 01: 基本操作和编辑模式

参考教程

https://www.bilibili.com/video/BV1WD4y1o7TT

快捷键

视图切换（~）

通过波浪键可以快速切换视图

切换编辑模式（TAB）

约束轴向（CTRL）

着色模式切换（Z）



着色模式切换（线框模式）（ALT+Z）

四视图（CTRL+ALT+Q）

隐藏选中项（H）

取消隐藏选中...`,tags:["3D","Blender"]}],xg=[{text:"CentOS 8 FAQ",link:"/docs/os/centos-8-faq",date:15926874e5,recommend:"CentOS",content:`

CentOS 8 FAQ

CentOS 8 关闭防火墙



CentOS 8 安装 docker



CentOS 8 安装 docker-compose



linux 下使用 cpu 并发解压缩来加快速度



修改成中国时区



升级 8 至 stream


`,tags:["Linux"]},{text:"CentOS 磁盘扩容",link:"/docs/os/centos-disk-extend",date:1586553e6,recommend:"CentOS",content:`

CentOS 磁盘扩容



可以看到现在的分区情况如下



创建分区 sda3





再次查看分区情况



可以看到现在的分区情况如下



重启操作系统



格式化新分区为 ext4



将物理硬盘分区初始化为物理卷，以便被 LVM 使用，输入指令



向卷组中添加物理卷来增加卷组的容量





查看可扩展的空间大小



其中 Free PE / Size 就是可供分配的...`,tags:["Linux"]},{text:"CentOS 7 FAQ",link:"/docs/os/centos-7-faq",date:15261594e5,recommend:"CentOS",content:`

CentOS 7 FAQ

&gt; 本来一直用的 ArchLinux，不过 Arch 其实不适合作为服务器使用，因为其滚动更新的特性使得服务器不稳定。

CentOS 如何安装最新版本的 GCC 编译器

默认没做任何设置的情况下，yum 安装的 GCC 版本比较陈旧。如果想安装较新的版本，需要如下操作：

GCC 4.9 安装



GCC 5.2 安装



Centos7 安装完毕后无法联网...`,tags:["Linux"]},{text:"记一个 CentOS 6 升 7",link:"/docs/os/centos-6-to-7",date:15261594e5,recommend:"CentOS",content:`

记一个 CentOS 6 升 7

1. 查看下当前的系统版本



2. 配置更新源





3. 安装更新助手

由于 \`centos 6.5\` 自带的助手之一版本较高，所以需要卸载了装个更老的：



4. 升级前检查潜在问题



在线更新,在线更新会比较慢。可以先下载好镜像，进行本地更新。



5. 本地更新





设置好之后，执行重启系统, 重启系统会进入更新的操作
界面可...`,tags:["Linux"]}],Mg={ohos:Pg,canvas:Tg,blender:Ig,CentOS:xg,"docker-note":[{text:"Docker 笔记(常用模板)",link:"/docs/backend/docker-note-4",date:1589734224e3,recommend:"docker-note",content:`

Docker 笔记(常用模板)

docker-mongodb



docker-mariadb



docker-GitLab



docker-jenkins

参考: 



映射宿主的 docker 到容器内，这样容器内可以构建 docker。
其中 privileged 使得容器的 root 对宿主具有真正的 root 权限。

jenkins 插件更新加速



docker...`,tags:["Docker"]},{text:"Docker开启Remote API 访问 2375端口",link:"/docs/backend/docker-note-3",date:1589734224e3,recommend:"docker-note",content:`

Docker 开启 Remote API 访问 2375 端口

Docker 常见端口

2375：未加密的 docker socket,远程 root 无密码访问主机

2376：tls 加密套接字,很可能这是您的 CI 服务器 4243 端口作为 https 443 端口的修改

2377：群集模式套接字,适用于群集管理器,不适用于 docker 客户端

5000：docker 注册服...`,tags:["Docker"]},{text:"Docker 笔记(构建)",link:"/docs/backend/docker-note-2",date:1589734224e3,recommend:"docker-note",content:`

Docker 笔记(构建)

编写 dockerfle

Vue SPA 模板



NuxtJS 模板



项目中创建一个 \`.dockerignore\` 文件来忽略一些直接跳过的文件：



如何构建



如何导出



如何导入



如何运行



容器间通信



如何让容器支持后台服务（特权模式）



如何备份数据卷

docker 没有提供特有的备份功能，需要用户用容器挂载...`,tags:["Docker"]},{text:"Docker 打包 NuxtJS",link:"/docs/backend/docker-nuxt",date:1573059024e3,recommend:"docker-note",content:`

Docker 打包 NuxtJS

Docker 镜像加速（Linux 为例）

创建 \`/etc/docker/daemon.json\` 的配置文件





编写 dockerfle



如何构建



如何导出



如何导入



如何运行


`,tags:["Docker"]},{text:"Docker 笔记(部署)",link:"/docs/backend/docker-note",date:1516553424e3,recommend:"docker-note",content:`

Docker 笔记(部署)

镜像加速

编辑 \`/etc/default/docker\` 文件

CentOS 系统的配置文件是 \`/etc/docker/daemon.json\`
Ubuntu 系统的配置文件是 \`/etc/default/docker\`





免 sudo

如果还没有 docker group 就添加一个：



将用户加入该 group 内。然后退出并重新登录就生...`,tags:["Docker"]}],"React-Native":[{text:"React Native 开发笔记（长期更新）",link:"/docs/frontend/hybird/react-native-tips",date:15897267e5,recommend:"React-Native",content:`

React Native 开发笔记（长期更新）

RN 技巧

单独启动 android studio 模拟器(Linux)



文字过长隐藏的问题

CSS3 中大家可能都会用到 text-oveflow，然而 RN 的 Text 并没有这个属性，不过我们可以通过设置 numberOfLIne 或者 JS 自动计算来实现：



获取窗体大小



关于相对单位



阴影效果

andr...`,tags:["React-Native","JavaScript"]},{text:"React-Navigation 使用笔记",link:"/docs/frontend/hybird/react-navigation-note",date:1508950224e3,recommend:"React-Native",content:"\n\nReact-Navigation 使用笔记\n\nReact-Navigation 之自定义 Header\n\n`React-Native` 的新版本取消了 `navigator`，使用了新的 `React-Navigation` 组件。这个组件非常强大。\n\n但是有的时候我们需要自定义 `Header`，又不想在每个 `View` 上附带 `Header`，而是想要实现原生的效果（即 `Header...",tags:["React-Native","React"]}],"cordova-dev-note":[{text:"Cordova 开发日记 08：与原生 Android 交互",link:"/docs/frontend/hybird/cordova-dev-note-08",date:15590592e5,recommend:"cordova-dev-note",content:`

Cordova 开发日记 08：与原生 Android 交互

&gt; 以下是记录 JS 调用 Native 的全过程

定义 Java Class



声明对外暴露的配置

在 \`config.xml\` 中：



JS 调用示例

原生方法的调用方式：\`exec(, , , , []);\`





问题：webview 中进行跳转时打开的是外部浏览器

希望直接替换 webview 的页面...`,tags:["JavaScript","Cordova"]},{text:"Cordova 开发日记 07：cordova-plugin-baidu-geolocation 定位偏差问题",link:"/docs/frontend/hybird/cordova-dev-note-07",date:1470070224e3,recommend:"cordova-dev-note",content:`

Cordova 开发日记 07：cordova-plugin-baidu-geolocation 定位偏差问题

使用这个 SDK 定位出的经纬度，在百度地图中显示的位置有很大偏差。

经过研究，其实定位的地址是对的，只是百度使用的是自己的坐标系 (bd09ll), 而 SDK 默认是 gcj02.



修改 coorType 即可。

关于坐标系的补充

**wgs84** --GPS 系...`,tags:["JavaScript","Cordova"]},{text:"Cordova 开发日记 06：处理网络缓慢被墙的问题",link:"/docs/frontend/hybird/cordova-dev-note-06",date:1469379024e3,recommend:"cordova-dev-note",content:`

Cordova 开发日记 06：处理网络缓慢被墙的问题

cordova: download gradle 超时解决办法

直接用迅雷下载：



下完后放入 cordova 生成的默认下载目录：

Windows10 下在用户主文件夹下的 .gradle 中

例如我的是：



gradle 调用 maven 源缓慢

改用国内源的办法如下：

找到 \`android\` 平台下的 \`bui...`,tags:["JavaScript","Cordova"]},{text:"Cordova 开发日记 05：白名单的配置和说明 Whitelist",link:"/docs/frontend/hybird/cordova-dev-note-05",date:1469292624e3,recommend:"cordova-dev-note",content:`

Cordova 开发日记 05：白名单的配置和说明 Whitelist

&gt; Whitelist 是 cordova 为了解决同源策略的方案，配置方法如下：

官网地址：





config.xml access 配置

只允许 google.com
Access to google.com:



只允许 google.com 的 https 协议
Access to the secur...`,tags:["JavaScript","Cordova"]},{text:"Cordova 开发日记 04：常用插件与使用",link:"/docs/frontend/hybird/cordova-dev-note-04",date:1469206224e3,recommend:"cordova-dev-note",content:`

Cordova 开发日记 04：常用插件与使用

常用插件推荐

1.cordova-plugin-camera 相机拍照

安装：



获取照片：



关于 options 的详细说明：


2.cordova-plugin-device 检查当前操作系统和设备情况



安装：



属性：



3. cordova-plugin-file 文件

安装：



创建一个永久的文件：...`,tags:["JavaScript","Cordova"]},{text:"Cordova 开发日记 03：如何生成安卓 apk-release 版",link:"/docs/frontend/hybird/cordova-dev-note-03",date:1469119824e3,recommend:"cordova-dev-note",content:`

Cordova 开发日记 03：如何生成安卓 apk-release 版



生成以下三个文件：



获得第一个（XXXX-release.apk） APK 文件需要进行签名。签名方法参考如下：

1.  使用 JDK 的 keytool 工具生成 keystore 文件



按照提示输入操作。

2.  使用签名打包



但每次输入命令行参数是很重复的，Cordova 允许我们建立一...`,tags:["JavaScript","Cordova"]},{text:"Cordova 开发日记 02：navigation.app 和 event",link:"/docs/frontend/hybird/cordova-dev-note-02",date:1469033424e3,recommend:"cordova-dev-note",content:`

Cordova 开发日记 02：navigation.app 和 event

navigator.app 对象

这是内置的一个对象，不需要插件



Events

对一些原生事件的监听



官方链接：
`,tags:["JavaScript","Cordova"]},{text:"Cordova 开发日记 01：环境部署",link:"/docs/frontend/hybird/cordova-dev-note-01",date:1468947024e3,recommend:"cordova-dev-note",content:`

Cordova 开发日记 01：环境部署

安装部署



&gt; 上面的 browser 可以是其他平台 (android/ios 等)

我目前使用的是 android 平台，系统是 ubuntu

以下几个问题注意以下：

1.  编译安卓 app 需要 oracle jdk, 不能用系统自带的 openjdk
2.  保证 android sdk 已经配置到环境变量
3.  保证 adb ...`,tags:["JavaScript","Cordova"]}],"linux-cmd":[{text:"Linux traceroute 命令排查网络状况",link:"/docs/os/linux-traceroute",date:1542819024e3,recommend:"linux-cmd",content:"\n\nLinux traceroute 命令排查网络状况\n\n通过 `traceroute` 我们可以知道信息从你的计算机到互联网另一端的主机是走的什么路径。\n\n当然每次数据包由某一同样的出发点（`source`）到达某一同样的目的地(`destination`)走的路径可能会不一样，但基本上来说大部分时候所走的路由是相同的。\n\n`linux` 系统中，我们称之为 `traceroute`,在 `MS...",tags:["Linux"]},{text:"Linux 常用（通用）命令整理",link:"/docs/os/linux-cmds",date:1505062224e3,recommend:"linux-cmd",content:`

Linux 常用（通用）命令整理

系统信息



关机（系统的关机、重启以及登出 )



文件和目录



文件搜索



挂载一个文件系统



磁盘空间



用户和群组



文件的权限 - 使用 "+" 设置权限，使用 "-" 用于取消



文件的特殊属性 - 使用 "+" 设置权限，使用 "-" 用于取消



打包和压缩文件



RPM 包 - （Fedora, Redha...`,tags:["Linux"]}]},Eg=l=>(Un("data-v-5f1e89f2"),l=l(),Gn(),l),Og={key:0,class:"VPDocFooter"},Ng={key:0,class:"edit-info"},Rg={class:"last-updated"},Dg={key:1,class:"prev-next"},Bg=Eg(()=>T("div",{class:"line-text"},"关联文章",-1)),Vg={key:0,class:"pager"},Fg=["href"],Hg={class:"title"},Wg=F({__name:"VPDocFooter",setup(l){const{frontmatter:u,page:i}=yu(),d=nn(()=>u.value.date?V_(u.value.date).format("YYYY-MM-DD"):""),h=nn(()=>!!u.value.indexPage),m=nn(()=>Mg[u.value.recommend]||[]);function y(I){var z,O;let C=(z=mu.last(i.value.filePath.split("/")))==null?void 0:z.replace(".md",""),H=(O=mu.last(I.split("/")))==null?void 0:O.replace(".html","");return H=H==null?void 0:H.split("#")[0],H===C}return(I,C)=>h.value?V("",!0):(_(),L("footer",Og,[d.value?(_(),L("div",Ng,[T("div",Rg,[W(Cg,{date:d.value},null,8,["date"])])])):V("",!0),m.value.length?(_(),L("nav",Dg,[Bg,(_(!0),L($n,null,Yn(m.value,H=>(_(),L($n,null,[y(H.link)?V("",!0):(_(),L("div",Vg,[T("a",{class:"pager-link",href:H.link},[T("span",Hg,mn(H.text),1)],8,Fg)]))],64))),256))])):V("",!0)]))}}),Ug=q(Wg,[["__scopeId","data-v-5f1e89f2"]]),Gg=l=>(Un("data-v-003ea689"),l=l(),Gn(),l),Kg={class:"container"},qg=Gg(()=>T("div",{class:"aside-curtain"},null,-1)),zg={class:"aside-container"},Yg={class:"aside-content"},Xg={class:"content"},Jg={class:"content-container"},Zg={class:"main"},Qg=F({__name:"VPDoc",setup(l){const{theme:u}=dn(),i=ni(),{hasSidebar:d,hasAside:h,leftAside:m}=ze(),y=nn(()=>i.path.replace(/[./]+/g,"_").replace(/_html$/,""));return(I,C)=>{const H=_t("Content");return _(),L("div",{class:wn(["VPDoc",{"has-sidebar":$(d),"has-aside":$(h)}])},[k(I.$slots,"doc-top",{},void 0,!0),T("div",Kg,[$(h)?(_(),L("div",{key:0,class:wn(["aside",{"left-aside":$(m)}])},[qg,T("div",zg,[T("div",Yg,[W(wg,null,{"aside-top":P(()=>[k(I.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":P(()=>[k(I.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":P(()=>[k(I.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":P(()=>[k(I.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":P(()=>[k(I.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":P(()=>[k(I.$slots,"aside-ads-after",{},void 0,!0)]),_:3})])])],2)):V("",!0),T("div",Xg,[T("div",Jg,[k(I.$slots,"doc-before",{},void 0,!0),T("main",Zg,[W(H,{class:wn(["vp-doc",[y.value,$(u).externalLinkIcon&&"external-link-icon-enabled"]])},null,8,["class"])]),W(Ug,null,{"doc-footer-before":P(()=>[k(I.$slots,"doc-footer-before",{},void 0,!0)]),_:3}),k(I.$slots,"doc-after",{},void 0,!0)])])]),k(I.$slots,"doc-bottom",{},void 0,!0)],2)}}}),jg=q(Qg,[["__scopeId","data-v-003ea689"]]),n0=F({__name:"VPButton",props:{tag:{},size:{default:"medium"},theme:{default:"brand"},text:{},href:{},target:{},rel:{}},setup(l){const u=l,i=nn(()=>u.href&&Su.test(u.href)),d=nn(()=>u.tag||u.href?"a":"button");return(h,m)=>(_(),J(Nt(d.value),{class:wn(["VPButton",[h.size,h.theme]]),href:h.href?$(Ro)(h.href):void 0,target:u.target??(i.value?"_blank":void 0),rel:u.rel??(i.value?"noreferrer":void 0)},{default:P(()=>[it(mn(h.text),1)]),_:1},8,["class","href","target","rel"]))}}),e0=q(n0,[["__scopeId","data-v-76d4b09d"]]),t0=["src","alt"],r0=F({inheritAttrs:!1,__name:"VPImage",props:{image:{},alt:{}},setup(l){return(u,i)=>{const d=_t("VPImage",!0);return u.image?(_(),L($n,{key:0},[typeof u.image=="string"||"src"in u.image?(_(),L("img",Xr({key:0,class:"VPImage"},typeof u.image=="string"?u.$attrs:{...u.image,...u.$attrs},{src:$(Eo)(typeof u.image=="string"?u.image:u.image.src),alt:u.alt??(typeof u.image=="string"?"":u.image.alt||"")}),null,16,t0)):(_(),L($n,{key:1},[W(d,Xr({class:"dark",image:u.image.dark,alt:u.image.alt},u.$attrs),null,16,["image","alt"]),W(d,Xr({class:"light",image:u.image.light,alt:u.image.alt},u.$attrs),null,16,["image","alt"])],64))],64)):V("",!0)}}}),Qr=q(r0,[["__scopeId","data-v-1829801f"]]),i0=l=>(Un("data-v-04c3189b"),l=l(),Gn(),l),o0={class:"container"},s0={class:"main"},a0={key:0,class:"name"},u0=["innerHTML"],l0=["innerHTML"],c0=["innerHTML"],f0={key:0,class:"actions"},d0={key:0,class:"image"},h0={class:"image-container"},v0=i0(()=>T("div",{class:"image-bg"},null,-1)),p0=F({__name:"VPHero",props:{name:{},text:{},tagline:{},image:{},actions:{}},setup(l){const u=ei("hero-image-slot-exists");return(i,d)=>(_(),L("div",{class:wn(["VPHero",{"has-image":i.image||$(u)}])},[T("div",o0,[T("div",s0,[k(i.$slots,"home-hero-info-before",{},void 0,!0),k(i.$slots,"home-hero-info",{},()=>[i.name?(_(),L("h1",a0,[T("span",{innerHTML:i.name,class:"clip"},null,8,u0)])):V("",!0),i.text?(_(),L("p",{key:1,innerHTML:i.text,class:"text"},null,8,l0)):V("",!0),i.tagline?(_(),L("p",{key:2,innerHTML:i.tagline,class:"tagline"},null,8,c0)):V("",!0)],!0),k(i.$slots,"home-hero-info-after",{},void 0,!0),i.actions?(_(),L("div",f0,[(_(!0),L($n,null,Yn(i.actions,h=>(_(),L("div",{key:h.link,class:"action"},[W(e0,{tag:"a",size:"medium",theme:h.theme,text:h.text,href:h.link,target:h.target,rel:h.rel},null,8,["theme","text","href","target","rel"])]))),128))])):V("",!0),k(i.$slots,"home-hero-actions-after",{},void 0,!0)]),i.image||$(u)?(_(),L("div",d0,[T("div",h0,[v0,k(i.$slots,"home-hero-image",{},()=>[i.image?(_(),J(Qr,{key:0,class:"image-src",image:i.image},null,8,["image"])):V("",!0)],!0)])])):V("",!0)])],2))}}),_0=q(p0,[["__scopeId","data-v-04c3189b"]]),g0=F({__name:"VPHomeHero",setup(l){const{frontmatter:u}=dn();return(i,d)=>$(u).hero?(_(),J(_0,{key:0,class:"VPHomeHero",name:$(u).hero.name,text:$(u).hero.text,tagline:$(u).hero.tagline,image:$(u).hero.image,actions:$(u).hero.actions},{"home-hero-info-before":P(()=>[k(i.$slots,"home-hero-info-before")]),"home-hero-info":P(()=>[k(i.$slots,"home-hero-info")]),"home-hero-info-after":P(()=>[k(i.$slots,"home-hero-info-after")]),"home-hero-actions-after":P(()=>[k(i.$slots,"home-hero-actions-after")]),"home-hero-image":P(()=>[k(i.$slots,"home-hero-image")]),_:3},8,["name","text","tagline","image","actions"])):V("",!0)}}),gt=F({__name:"VPLink",props:{tag:{},href:{},noIcon:{type:Boolean},target:{},rel:{}},setup(l){const u=l,i=nn(()=>u.tag??(u.href?"a":"span")),d=nn(()=>u.href&&Su.test(u.href));return(h,m)=>(_(),J(Nt(i.value),{class:wn(["VPLink",{link:h.href,"vp-external-link-icon":d.value,"no-icon":h.noIcon}]),href:h.href?$(Ro)(h.href):void 0,target:h.target??(d.value?"_blank":void 0),rel:h.rel??(d.value?"noreferrer":void 0)},{default:P(()=>[k(h.$slots,"default")]),_:3},8,["class","href","target","rel"]))}}),m0=l=>(Un("data-v-a08b9b09"),l=l(),Gn(),l),b0={class:"box"},$0={key:0,class:"icon"},y0=["innerHTML"],k0=["innerHTML"],w0=["innerHTML"],S0={key:4,class:"link-text"},L0={class:"link-text-value"},A0=m0(()=>T("span",{class:"vpi-arrow-right link-text-icon"},null,-1)),C0=F({__name:"VPFeature",props:{icon:{},title:{},details:{},link:{},linkText:{},rel:{},target:{}},setup(l){return(u,i)=>(_(),J(gt,{class:"VPFeature",href:u.link,rel:u.rel,target:u.target,"no-icon":!0,tag:u.link?"a":"div"},{default:P(()=>[T("article",b0,[typeof u.icon=="object"&&u.icon.wrap?(_(),L("div",$0,[W(Qr,{image:u.icon,alt:u.icon.alt,height:u.icon.height||48,width:u.icon.width||48},null,8,["image","alt","height","width"])])):typeof u.icon=="object"?(_(),J(Qr,{key:1,image:u.icon,alt:u.icon.alt,height:u.icon.height||48,width:u.icon.width||48},null,8,["image","alt","height","width"])):u.icon?(_(),L("div",{key:2,class:"icon",innerHTML:u.icon},null,8,y0)):V("",!0),T("h2",{class:"title",innerHTML:u.title},null,8,k0),u.details?(_(),L("p",{key:3,class:"details",innerHTML:u.details},null,8,w0)):V("",!0),u.linkText?(_(),L("div",S0,[T("p",L0,[it(mn(u.linkText)+" ",1),A0])])):V("",!0)])]),_:1},8,["href","rel","target","tag"]))}}),P0=q(C0,[["__scopeId","data-v-a08b9b09"]]),T0={key:0,class:"VPFeatures"},I0={class:"container"},x0={class:"items"},M0=F({__name:"VPFeatures",props:{features:{}},setup(l){const u=l,i=nn(()=>{const d=u.features.length;if(d){if(d===2)return"grid-2";if(d===3)return"grid-3";if(d%3===0)return"grid-6";if(d>3)return"grid-4"}else return});return(d,h)=>d.features?(_(),L("div",T0,[T("div",I0,[T("div",x0,[(_(!0),L($n,null,Yn(d.features,m=>(_(),L("div",{key:m.title,class:wn(["item",[i.value]])},[W(P0,{icon:m.icon,title:m.title,details:m.details,link:m.link,"link-text":m.linkText,rel:m.rel,target:m.target},null,8,["icon","title","details","link","link-text","rel","target"])],2))),128))])])])):V("",!0)}}),E0=q(M0,[["__scopeId","data-v-09c45331"]]),O0=F({__name:"VPHomeFeatures",setup(l){const{frontmatter:u}=dn();return(i,d)=>$(u).features?(_(),J(E0,{key:0,class:"VPHomeFeatures",features:$(u).features},null,8,["features"])):V("",!0)}}),N0=F({__name:"VPHomeContent",setup(l){const{width:u}=P_({includeScrollbar:!1});return(i,d)=>(_(),L("div",{class:"vp-doc container",style:Lu($(u)?{"--vp-offset":`calc(50% - ${$(u)/2}px)`}:{})},[k(i.$slots,"default",{},void 0,!0)],4))}}),R0=q(N0,[["__scopeId","data-v-ee190ae1"]]),D0={class:"VPHome"},B0=F({__name:"VPHome",setup(l){const{frontmatter:u}=dn();return(i,d)=>{const h=_t("Content");return _(),L("div",D0,[k(i.$slots,"home-hero-before",{},void 0,!0),W(g0,null,{"home-hero-info-before":P(()=>[k(i.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":P(()=>[k(i.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":P(()=>[k(i.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":P(()=>[k(i.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":P(()=>[k(i.$slots,"home-hero-image",{},void 0,!0)]),_:3}),k(i.$slots,"home-hero-after",{},void 0,!0),k(i.$slots,"home-features-before",{},void 0,!0),W(O0),k(i.$slots,"home-features-after",{},void 0,!0),$(u).markdownStyles!==!1?(_(),J(R0,{key:0},{default:P(()=>[W(h)]),_:1})):(_(),J(h,{key:1}))])}}}),V0=q(B0,[["__scopeId","data-v-4c1c22f7"]]),F0={},H0={class:"VPPage"};function W0(l,u){const i=_t("Content");return _(),L("div",H0,[k(l.$slots,"page-top"),W(i),k(l.$slots,"page-bottom")])}const U0=q(F0,[["render",W0]]),G0=F({__name:"VPContent",setup(l){const{page:u,frontmatter:i}=dn(),{hasSidebar:d}=ze();return(h,m)=>(_(),L("div",{class:wn(["VPContent",{"has-sidebar":$(d),"is-home":$(i).layout==="home"}]),id:"VPContent"},[$(u).isNotFound?k(h.$slots,"not-found",{key:0},()=>[W(eg)],!0):$(i).layout==="page"?(_(),J(U0,{key:1},{"page-top":P(()=>[k(h.$slots,"page-top",{},void 0,!0)]),"page-bottom":P(()=>[k(h.$slots,"page-bottom",{},void 0,!0)]),_:3})):$(i).layout==="home"?(_(),J(V0,{key:2},{"home-hero-before":P(()=>[k(h.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":P(()=>[k(h.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":P(()=>[k(h.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":P(()=>[k(h.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":P(()=>[k(h.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":P(()=>[k(h.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":P(()=>[k(h.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":P(()=>[k(h.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":P(()=>[k(h.$slots,"home-features-after",{},void 0,!0)]),_:3})):$(i).layout&&$(i).layout!=="doc"?(_(),J(Nt($(i).layout),{key:3})):(_(),J(jg,{key:4},{"doc-top":P(()=>[k(h.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":P(()=>[k(h.$slots,"doc-bottom",{},void 0,!0)]),"doc-footer-before":P(()=>[k(h.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":P(()=>[k(h.$slots,"doc-before",{},void 0,!0)]),"doc-after":P(()=>[k(h.$slots,"doc-after",{},void 0,!0)]),"aside-top":P(()=>[k(h.$slots,"aside-top",{},void 0,!0)]),"aside-outline-before":P(()=>[k(h.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":P(()=>[k(h.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":P(()=>[k(h.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":P(()=>[k(h.$slots,"aside-ads-after",{},void 0,!0)]),"aside-bottom":P(()=>[k(h.$slots,"aside-bottom",{},void 0,!0)]),_:3}))],2))}}),K0=q(G0,[["__scopeId","data-v-c804116e"]]),q0={class:"container"},z0=["innerHTML"],Y0=["innerHTML"],X0=F({__name:"VPFooter",setup(l){const{theme:u,frontmatter:i}=dn(),{hasSidebar:d}=ze();return(h,m)=>$(u).footer&&$(i).footer!==!1?(_(),L("footer",{key:0,class:wn(["VPFooter",{"has-sidebar":$(d)}])},[T("div",q0,[$(u).footer.message?(_(),L("p",{key:0,class:"message",innerHTML:$(u).footer.message},null,8,z0)):V("",!0),$(u).footer.copyright?(_(),L("p",{key:1,class:"copyright",innerHTML:$(u).footer.copyright},null,8,Y0)):V("",!0)])],2)):V("",!0)}}),J0=q(X0,[["__scopeId","data-v-7fcc76a9"]]);function Z0(){const{theme:l,frontmatter:u}=dn(),i=wu([]),d=nn(()=>i.value.length>0);return jr(()=>{i.value=Do(u.value.outline??l.value.outline)}),{headers:i,hasLocalNav:d}}const Q0=l=>(Un("data-v-5c276c11"),l=l(),Gn(),l),j0={class:"menu-text"},nm=Q0(()=>T("span",{class:"vpi-chevron-right icon"},null,-1)),em={class:"header"},tm={class:"outline"},rm=F({__name:"VPLocalNavOutlineDropdown",props:{headers:{},navHeight:{}},setup(l){const u=l,{theme:i}=dn(),d=kn(!1),h=kn(0),m=kn(),y=kn();function I(O){var an;(an=m.value)!=null&&an.contains(O.target)||(d.value=!1)}ot(d,O=>{if(O){document.addEventListener("click",I);return}document.removeEventListener("click",I)}),Po("Escape",()=>{d.value=!1}),jr(()=>{d.value=!1});function C(){d.value=!d.value,h.value=window.innerHeight+Math.min(window.scrollY-u.navHeight,0)}function H(O){O.target.classList.contains("outline-link")&&(y.value&&(y.value.style.transition="none"),T_(()=>{d.value=!1}))}function z(){d.value=!1,window.scrollTo({top:0,left:0,behavior:"smooth"})}return(O,an)=>(_(),L("div",{class:"VPLocalNavOutlineDropdown",style:Lu({"--vp-vh":h.value+"px"}),ref_key:"main",ref:m},[O.headers.length>0?(_(),L("button",{key:0,onClick:C,class:wn({open:d.value})},[T("span",j0,mn($(xu)($(i))),1),nm],2)):(_(),L("button",{key:1,onClick:z},mn($(i).returnToTopLabel||"Return to top"),1)),W(Mo,{name:"flyout"},{default:P(()=>[d.value?(_(),L("div",{key:0,ref_key:"items",ref:y,class:"items",onClick:H},[T("div",em,[T("a",{class:"top-link",href:"#",onClick:z},mn($(i).returnToTopLabel||"Return to top"),1)]),T("div",tm,[W(Mu,{headers:O.headers},null,8,["headers"])])],512)):V("",!0)]),_:1})],4))}}),im=q(rm,[["__scopeId","data-v-5c276c11"]]),om=l=>(Un("data-v-2dddd415"),l=l(),Gn(),l),sm={class:"container"},am=["aria-expanded"],um=om(()=>T("span",{class:"vpi-align-left menu-icon"},null,-1)),lm={class:"menu-text"},cm=F({__name:"VPLocalNav",props:{open:{type:Boolean}},emits:["open-menu"],setup(l){const{theme:u,frontmatter:i}=dn(),{hasSidebar:d}=ze(),{headers:h}=Z0(),{y:m}=Au(),y=kn(0);Dt(()=>{y.value=parseInt(getComputedStyle(document.documentElement).getPropertyValue("--vp-nav-height"))}),jr(()=>{h.value=Do(i.value.outline??u.value.outline)});const I=nn(()=>h.value.length===0),C=nn(()=>I.value&&!d.value),H=nn(()=>({VPLocalNav:!0,"has-sidebar":d.value,empty:I.value,fixed:C.value}));return(z,O)=>$(i).layout!=="home"&&(!C.value||$(m)>=y.value)?(_(),L("div",{key:0,class:wn(H.value)},[T("div",sm,[$(d)?(_(),L("button",{key:0,class:"menu","aria-expanded":z.open,"aria-controls":"VPSidebarNav",onClick:O[0]||(O[0]=an=>z.$emit("open-menu"))},[um,T("span",lm,mn($(u).sidebarMenuLabel||"Menu"),1)],8,am)):V("",!0),W(im,{headers:$(h),navHeight:y.value},null,8,["headers","navHeight"])])],2)):V("",!0)}}),fm=q(cm,[["__scopeId","data-v-2dddd415"]]);function dm(){const l=kn(!1);function u(){l.value=!0,window.addEventListener("resize",h)}function i(){l.value=!1,window.removeEventListener("resize",h)}function d(){l.value?i():u()}function h(){window.outerWidth>=768&&i()}const m=ni();return ot(()=>m.path,i),{isScreenOpen:l,openScreen:u,closeScreen:i,toggleScreen:d}}const hm={},vm={class:"VPSwitch",type:"button",role:"switch"},pm={class:"check"},_m={key:0,class:"icon"};function gm(l,u){return _(),L("button",vm,[T("span",pm,[l.$slots.default?(_(),L("span",_m,[k(l.$slots,"default",{},void 0,!0)])):V("",!0)])])}const mm=q(hm,[["render",gm],["__scopeId","data-v-3af7b247"]]),Eu=l=>(Un("data-v-8a0f3781"),l=l(),Gn(),l),bm=Eu(()=>T("span",{class:"vpi-sun sun"},null,-1)),$m=Eu(()=>T("span",{class:"vpi-moon moon"},null,-1)),ym=F({__name:"VPSwitchAppearance",setup(l){const{isDark:u,theme:i}=dn(),d=ei("toggle-appearance",()=>{u.value=!u.value}),h=nn(()=>u.value?i.value.lightModeSwitchTitle||"Switch to light theme":i.value.darkModeSwitchTitle||"Switch to dark theme");return(m,y)=>(_(),J(mm,{title:h.value,class:"VPSwitchAppearance","aria-checked":$(u),onClick:$(d)},{default:P(()=>[bm,$m]),_:1},8,["title","aria-checked","onClick"]))}}),Bo=q(ym,[["__scopeId","data-v-8a0f3781"]]),km={key:0,class:"VPNavBarAppearance"},wm=F({__name:"VPNavBarAppearance",setup(l){const{site:u}=dn();return(i,d)=>$(u).appearance&&$(u).appearance!=="force-dark"?(_(),L("div",km,[W(Bo)])):V("",!0)}}),Sm=q(wm,[["__scopeId","data-v-932b0736"]]),Vo=kn();let Ou=!1,Ao=0;function Lm(l){const u=kn(!1);if(ti){!Ou&&Am(),Ao++;const i=ot(Vo,d=>{var h,m,y;d===l.el.value||(h=l.el.value)!=null&&h.contains(d)?(u.value=!0,(m=l.onFocus)==null||m.call(l)):(u.value=!1,(y=l.onBlur)==null||y.call(l))});No(()=>{i(),Ao--,Ao||Cm()})}return I_(u)}function Am(){document.addEventListener("focusin",Nu),Ou=!0,Vo.value=document.activeElement}function Cm(){document.removeEventListener("focusin",Nu)}function Nu(){Vo.value=document.activeElement}const Pm={class:"VPMenuLink"},Tm=F({__name:"VPMenuLink",props:{item:{}},setup(l){const{page:u}=dn();return(i,d)=>(_(),L("div",Pm,[W(gt,{class:wn({active:$(Rt)($(u).relativePath,i.item.activeMatch||i.item.link,!!i.item.activeMatch)}),href:i.item.link,target:i.item.target,rel:i.item.rel},{default:P(()=>[it(mn(i.item.text),1)]),_:1},8,["class","href","target","rel"])]))}}),ri=q(Tm,[["__scopeId","data-v-da65484d"]]),Im={class:"VPMenuGroup"},xm={key:0,class:"title"},Mm=F({__name:"VPMenuGroup",props:{text:{},items:{}},setup(l){return(u,i)=>(_(),L("div",Im,[u.text?(_(),L("p",xm,mn(u.text),1)):V("",!0),(_(!0),L($n,null,Yn(u.items,d=>(_(),L($n,null,["link"in d?(_(),J(ri,{key:0,item:d},null,8,["item"])):V("",!0)],64))),256))]))}}),Em=q(Mm,[["__scopeId","data-v-1e7b45b9"]]),Om={class:"VPMenu"},Nm={key:0,class:"items"},Rm=F({__name:"VPMenu",props:{items:{}},setup(l){return(u,i)=>(_(),L("div",Om,[u.items?(_(),L("div",Nm,[(_(!0),L($n,null,Yn(u.items,d=>(_(),L($n,{key:d.text},["link"in d?(_(),J(ri,{key:0,item:d},null,8,["item"])):(_(),J(Em,{key:1,text:d.text,items:d.items},null,8,["text","items"]))],64))),128))])):V("",!0),k(u.$slots,"default",{},void 0,!0)]))}}),Dm=q(Rm,[["__scopeId","data-v-3526b2f6"]]),Bm=l=>(Un("data-v-be817f49"),l=l(),Gn(),l),Vm=["aria-expanded","aria-label"],Fm={key:0,class:"text"},Hm=["innerHTML"],Wm=Bm(()=>T("span",{class:"vpi-chevron-down text-icon"},null,-1)),Um={key:1,class:"vpi-more-horizontal icon"},Gm={class:"menu"},Km=F({__name:"VPFlyout",props:{icon:{},button:{},label:{},items:{}},setup(l){const u=kn(!1),i=kn();Lm({el:i,onBlur:d});function d(){u.value=!1}return(h,m)=>(_(),L("div",{class:"VPFlyout",ref_key:"el",ref:i,onMouseenter:m[1]||(m[1]=y=>u.value=!0),onMouseleave:m[2]||(m[2]=y=>u.value=!1)},[T("button",{type:"button",class:"button","aria-haspopup":"true","aria-expanded":u.value,"aria-label":h.label,onClick:m[0]||(m[0]=y=>u.value=!u.value)},[h.button||h.icon?(_(),L("span",Fm,[h.icon?(_(),L("span",{key:0,class:wn([h.icon,"option-icon"])},null,2)):V("",!0),h.button?(_(),L("span",{key:1,innerHTML:h.button},null,8,Hm)):V("",!0),Wm])):(_(),L("span",Um))],8,Vm),T("div",Gm,[W(Dm,{items:h.items},{default:P(()=>[k(h.$slots,"default",{},void 0,!0)]),_:3},8,["items"])])],544))}}),Fo=q(Km,[["__scopeId","data-v-be817f49"]]),qm=["href","aria-label","innerHTML"],zm=F({__name:"VPSocialLink",props:{icon:{},link:{},ariaLabel:{}},setup(l){const u=l,i=nn(()=>typeof u.icon=="object"?u.icon.svg:`<span class="vpi-social-${u.icon}" />`);return(d,h)=>(_(),L("a",{class:"VPSocialLink no-icon",href:d.link,"aria-label":d.ariaLabel??(typeof d.icon=="string"?d.icon:""),target:"_blank",rel:"noopener",innerHTML:i.value},null,8,qm))}}),Ym=q(zm,[["__scopeId","data-v-d48b97a0"]]),Xm={class:"VPSocialLinks"},Jm=F({__name:"VPSocialLinks",props:{links:{}},setup(l){return(u,i)=>(_(),L("div",Xm,[(_(!0),L($n,null,Yn(u.links,({link:d,icon:h,ariaLabel:m})=>(_(),J(Ym,{key:d,icon:h,link:d,ariaLabel:m},null,8,["icon","link","ariaLabel"]))),128))]))}}),Ho=q(Jm,[["__scopeId","data-v-4f3b06a1"]]),Zm={key:0,class:"group translations"},Qm={class:"trans-title"},jm={key:1,class:"group"},n1={class:"item appearance"},e1={class:"label"},t1={class:"appearance-action"},r1={key:2,class:"group"},i1={class:"item social-links"},o1=F({__name:"VPNavBarExtra",setup(l){const{site:u,theme:i}=dn(),{localeLinks:d,currentLang:h}=ir({correspondingLink:!0}),m=nn(()=>d.value.length&&h.value.label||u.value.appearance||i.value.socialLinks);return(y,I)=>m.value?(_(),J(Fo,{key:0,class:"VPNavBarExtra",label:"extra navigation"},{default:P(()=>[$(d).length&&$(h).label?(_(),L("div",Zm,[T("p",Qm,mn($(h).label),1),(_(!0),L($n,null,Yn($(d),C=>(_(),J(ri,{key:C.link,item:C},null,8,["item"]))),128))])):V("",!0),$(u).appearance&&$(u).appearance!=="force-dark"?(_(),L("div",jm,[T("div",n1,[T("p",e1,mn($(i).darkModeSwitchLabel||"Appearance"),1),T("div",t1,[W(Bo)])])])):V("",!0),$(i).socialLinks?(_(),L("div",r1,[T("div",i1,[W(Ho,{class:"social-links-list",links:$(i).socialLinks},null,8,["links"])])])):V("",!0)]),_:1})):V("",!0)}}),s1=q(o1,[["__scopeId","data-v-d60bf068"]]),a1=l=>(Un("data-v-6aa343b6"),l=l(),Gn(),l),u1=["aria-expanded"],l1=a1(()=>T("span",{class:"container"},[T("span",{class:"top"}),T("span",{class:"middle"}),T("span",{class:"bottom"})],-1)),c1=[l1],f1=F({__name:"VPNavBarHamburger",props:{active:{type:Boolean}},emits:["click"],setup(l){return(u,i)=>(_(),L("button",{type:"button",class:wn(["VPNavBarHamburger",{active:u.active}]),"aria-label":"mobile navigation","aria-expanded":u.active,"aria-controls":"VPNavScreen",onClick:i[0]||(i[0]=d=>u.$emit("click"))},c1,10,u1))}}),d1=q(f1,[["__scopeId","data-v-6aa343b6"]]),h1=["innerHTML"],v1=F({__name:"VPNavBarMenuLink",props:{item:{}},setup(l){const{page:u}=dn();return(i,d)=>(_(),J(gt,{class:wn({VPNavBarMenuLink:!0,active:$(Rt)($(u).relativePath,i.item.activeMatch||i.item.link,!!i.item.activeMatch)}),href:i.item.link,noIcon:i.item.noIcon,target:i.item.target,rel:i.item.rel,tabindex:"0"},{default:P(()=>[T("span",{innerHTML:i.item.text},null,8,h1)]),_:1},8,["class","href","noIcon","target","rel"]))}}),p1=q(v1,[["__scopeId","data-v-4305a7e5"]]),_1=F({__name:"VPNavBarMenuGroup",props:{item:{}},setup(l){const u=l,{page:i}=dn(),d=m=>"link"in m?Rt(i.value.relativePath,m.link,!!u.item.activeMatch):m.items.some(d),h=nn(()=>d(u.item));return(m,y)=>(_(),J(Fo,{class:wn({VPNavBarMenuGroup:!0,active:$(Rt)($(i).relativePath,m.item.activeMatch,!!m.item.activeMatch)||h.value}),button:m.item.text,items:m.item.items},null,8,["class","button","items"]))}}),g1=l=>(Un("data-v-9f84d18b"),l=l(),Gn(),l),m1={key:0,"aria-labelledby":"main-nav-aria-label",class:"VPNavBarMenu"},b1=g1(()=>T("span",{id:"main-nav-aria-label",class:"visually-hidden"},"Main Navigation",-1)),$1=F({__name:"VPNavBarMenu",setup(l){const{theme:u}=dn();return(i,d)=>$(u).nav?(_(),L("nav",m1,[b1,(_(!0),L($n,null,Yn($(u).nav,h=>(_(),L($n,{key:h.text},["link"in h?(_(),J(p1,{key:0,item:h},null,8,["item"])):(_(),J(_1,{key:1,item:h},null,8,["item"]))],64))),128))])):V("",!0)}}),y1=q($1,[["__scopeId","data-v-9f84d18b"]]);function k1(l){const{localeIndex:u,theme:i}=dn();function d(h){var vn,Bn,en;const m=h.split("."),y=(vn=i.value.search)==null?void 0:vn.options,I=y&&typeof y=="object",C=I&&((en=(Bn=y.locales)==null?void 0:Bn[u.value])==null?void 0:en.translations)||null,H=I&&y.translations||null;let z=C,O=H,an=l;const on=m.pop();for(const Qn of m){let ie=null;const Tn=an==null?void 0:an[Qn];Tn&&(ie=an=Tn);const he=O==null?void 0:O[Qn];he&&(ie=O=he);const Mn=z==null?void 0:z[Qn];Mn&&(ie=z=Mn),Tn||(an=ie),he||(O=ie),Mn||(z=ie)}return(z==null?void 0:z[on])??(O==null?void 0:O[on])??(an==null?void 0:an[on])??""}return d}const w1=["aria-label"],S1={class:"DocSearch-Button-Container"},L1=T("span",{class:"vp-icon DocSearch-Search-Icon"},null,-1),A1={class:"DocSearch-Button-Placeholder"},C1=T("span",{class:"DocSearch-Button-Keys"},[T("kbd",{class:"DocSearch-Button-Key"}),T("kbd",{class:"DocSearch-Button-Key"},"K")],-1),bu=F({__name:"VPNavBarSearchButton",setup(l){const i=k1({button:{buttonText:"Search",buttonAriaLabel:"Search"}});return(d,h)=>(_(),L("button",{type:"button",class:"DocSearch DocSearch-Button","aria-label":$(i)("button.buttonAriaLabel")},[T("span",S1,[L1,T("span",A1,mn($(i)("button.buttonText")),1)]),C1],8,w1))}}),P1={class:"VPNavBarSearch"},T1={id:"local-search"},I1={key:1,id:"docsearch"},x1=F({__name:"VPNavBarSearch",setup(l){const u=x_(()=>M_(()=>import("./VPLocalSearchBox.CIKYNEjr.js"),__vite__mapDeps([0,1]))),i=()=>null,{theme:d}=dn(),h=kn(!1),m=kn(!1);Dt(()=>{});function y(){h.value||(h.value=!0,setTimeout(I,16))}function I(){const O=new Event("keydown");O.key="k",O.metaKey=!0,window.dispatchEvent(O),setTimeout(()=>{document.querySelector(".DocSearch-Modal")||I()},16)}function C(O){const an=O.target,on=an.tagName;return an.isContentEditable||on==="INPUT"||on==="SELECT"||on==="TEXTAREA"}const H=kn(!1);Po("k",O=>{(O.ctrlKey||O.metaKey)&&(O.preventDefault(),H.value=!0)}),Po("/",O=>{C(O)||(O.preventDefault(),H.value=!0)});const z="local";return(O,an)=>{var on;return _(),L("div",P1,[$(z)==="local"?(_(),L($n,{key:0},[H.value?(_(),J($(u),{key:0,onClose:an[0]||(an[0]=vn=>H.value=!1)})):V("",!0),T("div",T1,[W(bu,{onClick:an[1]||(an[1]=vn=>H.value=!0)})])],64)):$(z)==="algolia"?(_(),L($n,{key:1},[h.value?(_(),J($(i),{key:0,algolia:((on=$(d).search)==null?void 0:on.options)??$(d).algolia,onVnodeBeforeMount:an[2]||(an[2]=vn=>m.value=!0)},null,8,["algolia"])):V("",!0),m.value?V("",!0):(_(),L("div",I1,[W(bu,{onClick:y})]))],64)):V("",!0)])}}}),M1=F({__name:"VPNavBarSocialLinks",setup(l){const{theme:u}=dn();return(i,d)=>$(u).socialLinks?(_(),J(Ho,{key:0,class:"VPNavBarSocialLinks",links:$(u).socialLinks},null,8,["links"])):V("",!0)}}),E1=q(M1,[["__scopeId","data-v-f9a5a4c5"]]),O1=["href","rel","target"],N1={key:1},R1={key:2},D1=F({__name:"VPNavBarTitle",setup(l){const{site:u,theme:i}=dn(),{hasSidebar:d}=ze(),{currentLang:h}=ir(),m=nn(()=>{var C;return typeof i.value.logoLink=="string"?i.value.logoLink:(C=i.value.logoLink)==null?void 0:C.link}),y=nn(()=>{var C;return typeof i.value.logoLink=="string"||(C=i.value.logoLink)==null?void 0:C.rel}),I=nn(()=>{var C;return typeof i.value.logoLink=="string"||(C=i.value.logoLink)==null?void 0:C.target});return(C,H)=>(_(),L("div",{class:wn(["VPNavBarTitle",{"has-sidebar":$(d)}])},[T("a",{class:"title",href:m.value??$(Ro)($(h).link),rel:y.value,target:I.value},[k(C.$slots,"nav-bar-title-before",{},void 0,!0),$(i).logo?(_(),J(Qr,{key:0,class:"logo",image:$(i).logo},null,8,["image"])):V("",!0),$(i).siteTitle?(_(),L("span",N1,mn($(i).siteTitle),1)):$(i).siteTitle===void 0?(_(),L("span",R1,mn($(u).title),1)):V("",!0),k(C.$slots,"nav-bar-title-after",{},void 0,!0)],8,O1)],2))}}),B1=q(D1,[["__scopeId","data-v-9029d37c"]]),V1={class:"items"},F1={class:"title"},H1=F({__name:"VPNavBarTranslations",setup(l){const{theme:u}=dn(),{localeLinks:i,currentLang:d}=ir({correspondingLink:!0});return(h,m)=>$(i).length&&$(d).label?(_(),J(Fo,{key:0,class:"VPNavBarTranslations",icon:"vpi-languages",label:$(u).langMenuLabel||"Change language"},{default:P(()=>[T("div",V1,[T("p",F1,mn($(d).label),1),(_(!0),L($n,null,Yn($(i),y=>(_(),J(ri,{key:y.link,item:y},null,8,["item"]))),128))])]),_:1},8,["label"])):V("",!0)}}),W1=q(H1,[["__scopeId","data-v-ecbf5c4d"]]),U1=l=>(Un("data-v-98303586"),l=l(),Gn(),l),G1={class:"wrapper"},K1={class:"container"},q1={class:"title"},z1={class:"content"},Y1={class:"content-body"},X1=U1(()=>T("div",{class:"divider"},[T("div",{class:"divider-line"})],-1)),J1=F({__name:"VPNavBar",props:{isScreenOpen:{type:Boolean}},emits:["toggle-screen"],setup(l){const{y:u}=Au(),{hasSidebar:i}=ze(),{frontmatter:d}=dn(),h=kn({});return ku(()=>{h.value={"has-sidebar":i.value,home:d.value.layout==="home",top:u.value===0}}),(m,y)=>(_(),L("div",{class:wn(["VPNavBar",h.value])},[T("div",G1,[T("div",K1,[T("div",q1,[W(B1,null,{"nav-bar-title-before":P(()=>[k(m.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":P(()=>[k(m.$slots,"nav-bar-title-after",{},void 0,!0)]),_:3})]),T("div",z1,[T("div",Y1,[k(m.$slots,"nav-bar-content-before",{},void 0,!0),W(x1,{class:"search"}),W(y1,{class:"menu"}),W(W1,{class:"translations"}),W(Sm,{class:"appearance"}),W(E1,{class:"social-links"}),W(s1,{class:"extra"}),k(m.$slots,"nav-bar-content-after",{},void 0,!0),W(d1,{class:"hamburger",active:m.isScreenOpen,onClick:y[0]||(y[0]=I=>m.$emit("toggle-screen"))},null,8,["active"])])])])]),X1],2))}}),Z1=q(J1,[["__scopeId","data-v-98303586"]]),Q1={key:0,class:"VPNavScreenAppearance"},j1={class:"text"},nb=F({__name:"VPNavScreenAppearance",setup(l){const{site:u,theme:i}=dn();return(d,h)=>$(u).appearance&&$(u).appearance!=="force-dark"?(_(),L("div",Q1,[T("p",j1,mn($(i).darkModeSwitchLabel||"Appearance"),1),W(Bo)])):V("",!0)}}),eb=q(nb,[["__scopeId","data-v-807e36b8"]]),tb=F({__name:"VPNavScreenMenuLink",props:{item:{}},setup(l){const u=ei("close-screen");return(i,d)=>(_(),J(gt,{class:"VPNavScreenMenuLink",href:i.item.link,target:i.item.target,rel:i.item.rel,onClick:$(u),innerHTML:i.item.text},null,8,["href","target","rel","onClick","innerHTML"]))}}),rb=q(tb,[["__scopeId","data-v-49ac9524"]]),ib=F({__name:"VPNavScreenMenuGroupLink",props:{item:{}},setup(l){const u=ei("close-screen");return(i,d)=>(_(),J(gt,{class:"VPNavScreenMenuGroupLink",href:i.item.link,target:i.item.target,rel:i.item.rel,onClick:$(u)},{default:P(()=>[it(mn(i.item.text),1)]),_:1},8,["href","target","rel","onClick"]))}}),Ru=q(ib,[["__scopeId","data-v-d4b27054"]]),ob={class:"VPNavScreenMenuGroupSection"},sb={key:0,class:"title"},ab=F({__name:"VPNavScreenMenuGroupSection",props:{text:{},items:{}},setup(l){return(u,i)=>(_(),L("div",ob,[u.text?(_(),L("p",sb,mn(u.text),1)):V("",!0),(_(!0),L($n,null,Yn(u.items,d=>(_(),J(Ru,{key:d.text,item:d},null,8,["item"]))),128))]))}}),ub=q(ab,[["__scopeId","data-v-b816482b"]]),lb=l=>(Un("data-v-ad5be189"),l=l(),Gn(),l),cb=["aria-controls","aria-expanded"],fb=["innerHTML"],db=lb(()=>T("span",{class:"vpi-plus button-icon"},null,-1)),hb=["id"],vb={key:1,class:"group"},pb=F({__name:"VPNavScreenMenuGroup",props:{text:{},items:{}},setup(l){const u=l,i=kn(!1),d=nn(()=>`NavScreenGroup-${u.text.replace(" ","-").toLowerCase()}`);function h(){i.value=!i.value}return(m,y)=>(_(),L("div",{class:wn(["VPNavScreenMenuGroup",{open:i.value}])},[T("button",{class:"button","aria-controls":d.value,"aria-expanded":i.value,onClick:h},[T("span",{class:"button-text",innerHTML:m.text},null,8,fb),db],8,cb),T("div",{id:d.value,class:"items"},[(_(!0),L($n,null,Yn(m.items,I=>(_(),L($n,{key:I.text},["link"in I?(_(),L("div",{key:I.text,class:"item"},[W(Ru,{item:I},null,8,["item"])])):(_(),L("div",vb,[W(ub,{text:I.text,items:I.items},null,8,["text","items"])]))],64))),128))],8,hb)],2))}}),_b=q(pb,[["__scopeId","data-v-ad5be189"]]),gb={key:0,class:"VPNavScreenMenu"},mb=F({__name:"VPNavScreenMenu",setup(l){const{theme:u}=dn();return(i,d)=>$(u).nav?(_(),L("nav",gb,[(_(!0),L($n,null,Yn($(u).nav,h=>(_(),L($n,{key:h.text},["link"in h?(_(),J(rb,{key:0,item:h},null,8,["item"])):(_(),J(_b,{key:1,text:h.text||"",items:h.items},null,8,["text","items"]))],64))),128))])):V("",!0)}}),bb=F({__name:"VPNavScreenSocialLinks",setup(l){const{theme:u}=dn();return(i,d)=>$(u).socialLinks?(_(),J(Ho,{key:0,class:"VPNavScreenSocialLinks",links:$(u).socialLinks},null,8,["links"])):V("",!0)}}),Du=l=>(Un("data-v-2a5063e7"),l=l(),Gn(),l),$b=Du(()=>T("span",{class:"vpi-languages icon lang"},null,-1)),yb=Du(()=>T("span",{class:"vpi-chevron-down icon chevron"},null,-1)),kb={class:"list"},wb=F({__name:"VPNavScreenTranslations",setup(l){const{localeLinks:u,currentLang:i}=ir({correspondingLink:!0}),d=kn(!1);function h(){d.value=!d.value}return(m,y)=>$(u).length&&$(i).label?(_(),L("div",{key:0,class:wn(["VPNavScreenTranslations",{open:d.value}])},[T("button",{class:"title",onClick:h},[$b,it(" "+mn($(i).label)+" ",1),yb]),T("ul",kb,[(_(!0),L($n,null,Yn($(u),I=>(_(),L("li",{key:I.link,class:"item"},[W(gt,{class:"link",href:I.link},{default:P(()=>[it(mn(I.text),1)]),_:2},1032,["href"])]))),128))])],2)):V("",!0)}}),Sb=q(wb,[["__scopeId","data-v-2a5063e7"]]),Lb={class:"container"},Ab=F({__name:"VPNavScreen",props:{open:{type:Boolean}},setup(l){const u=kn(null),i=Cu(ti?document.body:null);return(d,h)=>(_(),J(Mo,{name:"fade",onEnter:h[0]||(h[0]=m=>i.value=!0),onAfterLeave:h[1]||(h[1]=m=>i.value=!1)},{default:P(()=>[d.open?(_(),L("div",{key:0,class:"VPNavScreen",ref_key:"screen",ref:u,id:"VPNavScreen"},[T("div",Lb,[k(d.$slots,"nav-screen-content-before",{},void 0,!0),W(mb,{class:"menu"}),W(Sb,{class:"translations"}),W(eb,{class:"appearance"}),W(bb,{class:"social-links"}),k(d.$slots,"nav-screen-content-after",{},void 0,!0)])],512)):V("",!0)]),_:3}))}}),Cb=q(Ab,[["__scopeId","data-v-e87361ff"]]),Pb={key:0,class:"VPNav"},Tb=F({__name:"VPNav",setup(l){const{isScreenOpen:u,closeScreen:i,toggleScreen:d}=dm(),{frontmatter:h}=dn(),m=nn(()=>h.value.navbar!==!1);return Pu("close-screen",i),Oo(()=>{ti&&document.documentElement.classList.toggle("hide-nav",!m.value)}),(y,I)=>m.value?(_(),L("header",Pb,[W(Z1,{"is-screen-open":$(u),onToggleScreen:$(d)},{"nav-bar-title-before":P(()=>[k(y.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":P(()=>[k(y.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":P(()=>[k(y.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":P(()=>[k(y.$slots,"nav-bar-content-after",{},void 0,!0)]),_:3},8,["is-screen-open","onToggleScreen"]),W(Cb,{open:$(u)},{"nav-screen-content-before":P(()=>[k(y.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":P(()=>[k(y.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3},8,["open"])])):V("",!0)}}),Ib=q(Tb,[["__scopeId","data-v-8fe8c673"]]),Bu=l=>(Un("data-v-9d590fd9"),l=l(),Gn(),l),xb=["role","tabindex"],Mb=Bu(()=>T("div",{class:"indicator"},null,-1)),Eb=Bu(()=>T("span",{class:"vpi-chevron-right caret-icon"},null,-1)),Ob=[Eb],Nb={key:1,class:"items"},Rb=F({__name:"VPSidebarItem",props:{item:{},depth:{}},setup(l){const u=l,{collapsed:i,collapsible:d,isLink:h,isActiveLink:m,hasActiveLink:y,hasChildren:I,toggle:C}=og(nn(()=>u.item)),H=nn(()=>I.value?"section":"div"),z=nn(()=>h.value?"a":"div"),O=nn(()=>I.value?u.depth+2===7?"p":`h${u.depth+2}`:"p"),an=nn(()=>h.value?void 0:"button"),on=nn(()=>[[`level-${u.depth}`],{collapsible:d.value},{collapsed:i.value},{"is-link":h.value},{"is-active":m.value},{"has-active":y.value}]);function vn(en){"key"in en&&en.key!=="Enter"||!u.item.link&&C()}function Bn(){u.item.link&&C()}return(en,Qn)=>{const ie=_t("VPSidebarItem",!0);return _(),J(Nt(H.value),{class:wn(["VPSidebarItem",on.value])},{default:P(()=>[en.item.text?(_(),L("div",Xr({key:0,class:"item",role:an.value},O_(en.item.items?{click:vn,keydown:vn}:{},!0),{tabindex:en.item.items&&0}),[Mb,en.item.link?(_(),J(gt,{key:0,tag:z.value,class:"link",href:en.item.link,rel:en.item.rel,target:en.item.target},{default:P(()=>[(_(),J(Nt(O.value),{class:"text",innerHTML:en.item.text},null,8,["innerHTML"]))]),_:1},8,["tag","href","rel","target"])):(_(),J(Nt(O.value),{key:1,class:"text",innerHTML:en.item.text},null,8,["innerHTML"])),en.item.collapsed!=null&&en.item.items&&en.item.items.length?(_(),L("div",{key:2,class:"caret",role:"button","aria-label":"toggle section",onClick:Bn,onKeydown:E_(Bn,["enter"]),tabindex:"0"},Ob,32)):V("",!0)],16,xb)):V("",!0),en.item.items&&en.item.items.length?(_(),L("div",Nb,[en.depth<5?(_(!0),L($n,{key:0},Yn(en.item.items,Tn=>(_(),J(ie,{key:Tn.text,item:Tn,depth:en.depth+1},null,8,["item","depth"]))),128)):V("",!0)])):V("",!0)]),_:1},8,["class"])}}}),Db=q(Rb,[["__scopeId","data-v-9d590fd9"]]),Vu=l=>(Un("data-v-119234ca"),l=l(),Gn(),l),Bb=Vu(()=>T("div",{class:"curtain"},null,-1)),Vb={class:"nav",id:"VPSidebarNav","aria-labelledby":"sidebar-aria-label",tabindex:"-1"},Fb=Vu(()=>T("span",{class:"visually-hidden",id:"sidebar-aria-label"}," Sidebar Navigation ",-1)),Hb=F({__name:"VPSidebar",props:{open:{type:Boolean}},setup(l){const{sidebarGroups:u,hasSidebar:i}=ze(),d=l,h=kn(null),m=Cu(ti?document.body:null);return ot([d,h],()=>{var y;d.open?(m.value=!0,(y=h.value)==null||y.focus()):m.value=!1},{immediate:!0,flush:"post"}),(y,I)=>$(i)?(_(),L("aside",{key:0,class:wn(["VPSidebar",{open:y.open}]),ref_key:"navEl",ref:h,onClick:I[0]||(I[0]=N_(()=>{},["stop"]))},[Bb,T("nav",Vb,[Fb,k(y.$slots,"sidebar-nav-before",{},void 0,!0),(_(!0),L($n,null,Yn($(u),C=>(_(),L("div",{key:C.text,class:"group"},[W(Db,{item:C,depth:0},null,8,["item"])]))),128)),k(y.$slots,"sidebar-nav-after",{},void 0,!0)])],2)):V("",!0)}}),Wb=q(Hb,[["__scopeId","data-v-119234ca"]]),Ub=F({__name:"VPSkipLink",setup(l){const u=ni(),i=kn();ot(()=>u.path,()=>i.value.focus());function d({target:h}){const m=document.getElementById(decodeURIComponent(h.hash).slice(1));if(m){const y=()=>{m.removeAttribute("tabindex"),m.removeEventListener("blur",y)};m.setAttribute("tabindex","-1"),m.addEventListener("blur",y),m.focus(),window.scrollTo(0,0)}}return(h,m)=>(_(),L($n,null,[T("span",{ref_key:"backToTop",ref:i,tabindex:"-1"},null,512),T("a",{href:"#VPContent",class:"VPSkipLink visually-hidden",onClick:d}," Skip to content ")],64))}}),Gb=q(Ub,[["__scopeId","data-v-6a823e91"]]),Kb=F({__name:"Layout",setup(l){const{isOpen:u,open:i,close:d}=ze(),h=ni();ot(()=>h.path,d),ig(u,d);const{frontmatter:m}=dn(),y=R_(),I=nn(()=>!!y["home-hero-image"]);return Pu("hero-image-slot-exists",I),(C,H)=>{const z=_t("Content");return $(m).layout!==!1?(_(),L("div",{key:0,class:wn(["Layout",$(m).pageClass])},[k(C.$slots,"layout-top",{},void 0,!0),W(Gb),W(U_,{class:"backdrop",show:$(u),onClick:$(d)},null,8,["show","onClick"]),W(Ib,null,{"nav-bar-title-before":P(()=>[k(C.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":P(()=>[k(C.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":P(()=>[k(C.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":P(()=>[k(C.$slots,"nav-bar-content-after",{},void 0,!0)]),"nav-screen-content-before":P(()=>[k(C.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":P(()=>[k(C.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3}),W(fm,{open:$(u),onOpenMenu:$(i)},null,8,["open","onOpenMenu"]),W(Wb,{open:$(u)},{"sidebar-nav-before":P(()=>[k(C.$slots,"sidebar-nav-before",{},void 0,!0)]),"sidebar-nav-after":P(()=>[k(C.$slots,"sidebar-nav-after",{},void 0,!0)]),_:3},8,["open"]),W(K0,null,{"page-top":P(()=>[k(C.$slots,"page-top",{},void 0,!0)]),"page-bottom":P(()=>[k(C.$slots,"page-bottom",{},void 0,!0)]),"not-found":P(()=>[k(C.$slots,"not-found",{},void 0,!0)]),"home-hero-before":P(()=>[k(C.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":P(()=>[k(C.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":P(()=>[k(C.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":P(()=>[k(C.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":P(()=>[k(C.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":P(()=>[k(C.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":P(()=>[k(C.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":P(()=>[k(C.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":P(()=>[k(C.$slots,"home-features-after",{},void 0,!0)]),"doc-footer-before":P(()=>[k(C.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":P(()=>[k(C.$slots,"doc-before",{},void 0,!0)]),"doc-after":P(()=>[k(C.$slots,"doc-after",{},void 0,!0)]),"doc-top":P(()=>[k(C.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":P(()=>[k(C.$slots,"doc-bottom",{},void 0,!0)]),"aside-top":P(()=>[k(C.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":P(()=>[k(C.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":P(()=>[k(C.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":P(()=>[k(C.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":P(()=>[k(C.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":P(()=>[k(C.$slots,"aside-ads-after",{},void 0,!0)]),_:3}),W(J0),k(C.$slots,"layout-bottom",{},void 0,!0)],2)):(_(),J(z,{key:1}))}}}),qb=q(Kb,[["__scopeId","data-v-7569fcf6"]]),$u={Layout:qb,enhanceApp:({app:l})=>{l.component("Badge",F_)}},Yb={extends:$u,Layout:()=>D_($u.Layout,null,{}),enhanceApp({app:l,router:u,siteData:i}){}};export{Yb as R,k1 as c,V_ as d,dn as u};
