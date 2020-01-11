(this.webpackJsonpscriptorum=this.webpackJsonpscriptorum||[]).push([[0],{164:function(e,t,a){e.exports=a(319)},169:function(e,t,a){},217:function(e,t){},219:function(e,t){},250:function(e,t){},251:function(e,t){},319:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(51),o=a.n(l),s=(a(169),a(151)),i=a(152),c=a(160),m=a(153),u=a(161),p=(a(170),a(157)),d=a(326);var h=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Scriptorum"),r.a.createElement("p",{className:"lead"},"Readable datasheets for Warhammer 40k Kill Team"),r.a.createElement("ul",null,r.a.createElement("li",null,"Organises abilities and weapons by phase"),r.a.createElement("li",null,"Merges identical models"),r.a.createElement("li",null,"Prints out as one datasheet per page"),r.a.createElement("li",null,"Clear, readable layout")),r.a.createElement(d.a,{variant:"danger"},"Scriptorum is a work in progress, but it should work, so try it out! If you spot any problems, please create an issue ",r.a.createElement("a",{href:"https://github.com/Floppy/scriptorum/issues"},"on GitHub")," and include your roster file if possible."))};var g=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(h,null),r.a.createElement(p.a,{onDrop:e.onUpload,accept:".ros,.rosz"},(function(e){var t=e.getRootProps,a=e.getInputProps;return r.a.createElement(d.a,Object.assign({variant:"info"},t(),{style:{textAlign:"center"}}),r.a.createElement("input",a()),r.a.createElement("p",null,"Drop a Battlescribe roster file here, or click to select one."),r.a.createElement("p",null,r.a.createElement("em",null,"(*.rosz and *.ros accepted)")))})),r.a.createElement("footer",null,"Built with React and Bootstrap. Released as Open Source, code ",r.a.createElement("a",{href:"https://github.com/floppy/scriptorum"},"on GitHub"),"."))},f=a(321);var E=function(e){return r.a.createElement(f.a,{striped:!0,bordered:!0,size:"sm"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Movement"),r.a.createElement("th",null,"Weapon Skill"),r.a.createElement("th",null,"Ballistic Skill"),r.a.createElement("th",null,"Strength"),r.a.createElement("th",null,"Toughness"),r.a.createElement("th",null,"Wounds"),r.a.createElement("th",null,"Attacks"),r.a.createElement("th",null,"Leadership"),r.a.createElement("th",null,"Save"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,e.movement,'"'),r.a.createElement("td",null,e.weapon_skill,"+"),r.a.createElement("td",null,isNaN(e.ballistic_skill)?"-":e.ballistic_skill+"+"),r.a.createElement("td",null,e.strength),r.a.createElement("td",null,e.toughness),r.a.createElement("td",null,e.wounds),r.a.createElement("td",null,e.attacks),r.a.createElement("td",null,e.leadership),r.a.createElement("td",null,e.save,"+"))))};var y=function(e){return r.a.createElement("div",{className:"statbadge",style:{paddingTop:".2vw",border:"1px solid black",width:"5vw",height:"5vw",background:"black",color:"white",display:"flex",flexDirection:"column",textAlign:"center",borderRadius:"50%",marginBottom:"1vw"}},r.a.createElement("div",{className:"name",style:{fontSize:"1vw",lineHeight:"1vw"}},e.name),r.a.createElement("div",{className:"value",style:{fontSize:"3vw",lineHeight:"3vw",fontWeight:"bold"}},e.value))},v=a(33);var b=function(e){var t=e.phase?e.abilities.filter((function(t){return t.phases.indexOf(e.phase)>=0})):e.abilities.filter((function(e){return 0===e.phases.length}));return 0===t.length?r.a.createElement(r.a.Fragment,null):r.a.createElement(f.a,{striped:!0,bordered:!0,size:"sm"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Ability"),r.a.createElement("th",null,"Description"))),r.a.createElement("tbody",null,v.sortBy(t,["name"]).map((function(e){return r.a.createElement("tr",null,r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.description))}))))},w=a(33);var k=function(e){return 0===e.powers.length?r.a.createElement(r.a.Fragment,null):r.a.createElement(f.a,{striped:!0,bordered:!0,size:"sm"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Power"),r.a.createElement("th",null,"Warp Charge"),r.a.createElement("th",null,"Description"))),r.a.createElement("tbody",null,w.sortBy(e.powers,["name"]).map((function(e){return r.a.createElement("tr",null,r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.charge),r.a.createElement("td",null,e.description))}))))},A=a(33);var S=function(e){var t="shooting"===e.phase?e.weapons.filter((function(e){return"Melee"!==e.type})):e.weapons.filter((function(e){return"Melee"===e.type}));return 0===t.length?r.a.createElement(r.a.Fragment,null):r.a.createElement(f.a,{striped:!0,bordered:!0,size:"sm"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Weapon"),"shooting"===e.phase&&r.a.createElement("th",null,"Range"),"shooting"===e.phase&&r.a.createElement("th",null,"Type"),r.a.createElement("th",null,"S"),r.a.createElement("th",null,"AP"),r.a.createElement("th",null,"D"),r.a.createElement("th",null,"Abilities"))),r.a.createElement("tbody",null,A.sortBy(t,["name"]).map((function(t){return r.a.createElement("tr",null,r.a.createElement("td",{style:{whiteSpace:"nowrap"}},t.name),"shooting"===e.phase&&r.a.createElement("td",null,t.range,'"'),"shooting"===e.phase&&r.a.createElement("td",{style:{whiteSpace:"nowrap"}},t.type),r.a.createElement("td",null,t.strength),r.a.createElement("td",null,t.armourPiercing),r.a.createElement("td",null,t.damage),r.a.createElement("td",null,t.abilities))}))))};var N=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{style:{textTransform:"capitalize"}},e.name),e.children)};function x(e){return r.a.createElement("span",{className:"specialism",style:{marginRight:"10px"}},e.specialism?{combat:"\ud83e\udd1c",comms:"\ud83d\udcfb",demolitions:"\ud83d\udca3",ferocity:"\ud83e\udd96",fortitude:"\ud83d\udee1\ufe0f",heavy:"\ud83d\udca5",leadership:"\ud83d\udc80",logistics:"\ud83d\ude9a",medic:"\u2695\ufe0f",melee:"\ud83e\udd1c",psyker:"\ud83e\udde0",scout:"\ud83d\udd26",shooting:"\ud83d\udd2b",stealth:"\ud83d\udc7b",strategist:"\ud83d\uddfa\ufe0f",strength:"\ud83d\udcaa",sniper:"\ud83c\udfaf",veteran:"\u2b50",zealot:"\ud83d\ude24","":""}[e.specialism.toLowerCase()]:"")}function P(e){return r.a.createElement("span",{className:"category",style:{marginRight:"10px"}},e.category?{commander:"\ud83d\udc51",leader:"\ud83d\udc80",specialist:""}[e.category.toLowerCase()]:"")}var B=a(322),W=a(323),R=a(324);var O=function(e){return r.a.createElement("div",{className:"model",style:{pageBreakBefore:"always"}},r.a.createElement("h1",{style:{background:"black",color:"white",padding:"10px",display:"flex",width:"100%",justifyContent:"space-between"}},r.a.createElement(B.a,null,"Specialist"===e.model.category&&r.a.createElement(x,{specialism:e.model.specialism}),e.model.category&&r.a.createElement(P,{category:e.model.category}),r.a.createElement("strong",null,e.model.type),e.model.category&&("Specialist"===e.model.category?" (".concat([e.model.specialism,e.model.category].join(" "),")"):" (".concat(e.model.category,")"))),r.a.createElement(B.a,{style:{flexGrow:0,textAlign:"right"}},r.a.createElement("small",null,e.model.points,"pts"))),r.a.createElement("div",null,r.a.createElement(W.a,{pill:!0,variant:"danger",style:{textTransform:"uppercase",marginRight:"10px"}},e.model.faction),e.model.keywords.map((function(e){return r.a.createElement(W.a,{pill:!0,variant:"primary",style:{textTransform:"uppercase",marginRight:"10px"}},e)}))),e.model.name&&r.a.createElement("div",null,"Name: ",r.a.createElement("strong",null,e.model.name)),"Commander"===e.model.category&&r.a.createElement("div",null,"Commander specialism: ",r.a.createElement("strong",null,e.model.specialism)),r.a.createElement(E,e.model.stats),r.a.createElement(b,{abilities:e.model.abilities,phase:""}),r.a.createElement(N,{name:"movement"},r.a.createElement(R.a,null,r.a.createElement(B.a,{sm:"1"},r.a.createElement(y,{name:"M",value:"".concat(e.model.stats.movement,'"')})),r.a.createElement(B.a,null,r.a.createElement(b,{abilities:e.model.abilities,phase:"movement"})))),(e.model.psychicPowers.length>0||e.model.abilities.filter((function(e){return e.phases.indexOf("psychic")>=0})).length>0)&&r.a.createElement(N,{name:"psychic"},r.a.createElement(k,{powers:e.model.psychicPowers}),r.a.createElement(b,{abilities:e.model.abilities,phase:"psychic"})),!isNaN(e.model.stats.ballistic_skill)&&r.a.createElement(N,{name:"shooting"},r.a.createElement(R.a,null,r.a.createElement(B.a,{sm:"1"},r.a.createElement(y,{name:"BS",value:"".concat(e.model.stats.ballistic_skill,"+")})),r.a.createElement(B.a,null,r.a.createElement(S,{weapons:e.model.weapons,phase:"shooting",userStrength:e.model.stats.strength}),r.a.createElement(b,{abilities:e.model.abilities,phase:"shooting"})))),r.a.createElement(N,{name:"fight"},r.a.createElement(R.a,null,r.a.createElement(B.a,{sm:"1"},r.a.createElement(y,{name:"A",value:"".concat(e.model.stats.attacks)}),r.a.createElement(y,{name:"WS",value:"".concat(e.model.stats.weapon_skill,"+")})),r.a.createElement(B.a,null,r.a.createElement(S,{weapons:e.model.weapons,phase:"fight",userStrength:e.model.stats.strength}),r.a.createElement(b,{abilities:e.model.abilities,phase:"fight"})))),r.a.createElement(N,{name:"morale"},r.a.createElement(R.a,null,r.a.createElement(B.a,{sm:"1"},r.a.createElement(y,{name:"Ld",value:"".concat(e.model.stats.leadership)})),r.a.createElement(B.a,null,r.a.createElement(b,{abilities:e.model.abilities,phase:"morale"})))))},F=a(33);var j=function(e){return r.a.createElement(r.a.Fragment,null,F.sortBy(e.models,(function(e){return[null==e.category,e.category,e.type]})).map((function(e){return r.a.createElement(O,{model:e,key:e.hash})})))},C=a(325),D=a(82),I=a.n(D),M=a(163),T=a(174).DOMParser,z=a(177).useNamespaces({roster:"http://www.battlescribe.net/schema/rosterSchema"}),U=a(33),_=a(211)([]),L=function(e,t){var a=z("roster:profiles/roster:profile[@typeName='Model']//roster:characteristic[@name='".concat(e,"']"),t);return a.length>0?parseInt(a[0].childNodes[0].nodeValue):""},V=function(e,t,a){var n=z("roster:characteristics/roster:characteristic[@name='".concat(e,"']"),t);return n.length>0?a?parseInt(n[0].childNodes[0].nodeValue):n[0].childNodes[0].nodeValue:""},H=function(e){var t=z(".//roster:costs/roster:cost[@name='pts']",e);return U.sumBy(t,(function(e){return parseInt(e.getAttribute("value"))}))},G=function(e){var t=[];return/ attacks characteristic/i.test(e)&&t.push("fight"),/ ranged /i.test(e)&&t.push("shooting"),/ fight phase/i.test(e)&&t.push("fight"),/ charge /i.test(e)&&t.push("movement"),/ advance /i.test(e)&&t.push("movement"),/ move /i.test(e)&&t.push("movement"),/ psychic /i.test(e)&&t.push("psychic"),/ shoot/i.test(e)&&t.push("shooting"),/ nerve /i.test(e)&&t.push("morale"),/ leadership /i.test(e)&&t.push("morale"),t},J=function(e){var t=z("roster:description",e)[0].childNodes[0].nodeValue;return{name:e.getAttribute("name"),description:t,phases:G(t)}},q=function(e){var t=z("roster:characteristics/roster:characteristic[@name='Description']",e)[0].childNodes[0].nodeValue;return{name:e.getAttribute("name"),description:t,phases:G(t)}},K=function(e){var t=z("roster:characteristics/roster:characteristic[@name='Ability']",e)[0].childNodes[0].nodeValue;return{name:e.getAttribute("name"),description:t,phases:G(t)}},$=function(e){var t=z("roster:characteristics/roster:characteristic[@name='Psychic Power']",e)[0].childNodes[0].nodeValue,a=t.match(/warp charge value of ([0-9]+)\.(.*)/),n=null;return a.length>2&&(n=parseInt(a[1]),t=a[2]),{name:e.getAttribute("name"),charge:n,description:t}},Q=function(e){var t={movement:L("M",e),weapon_skill:L("WS",e),ballistic_skill:L("BS",e),strength:L("S",e),toughness:L("T",e),wounds:L("W",e),attacks:L("A",e),leadership:L("Ld",e),save:L("Sv",e)},a={name:"Bare fists",range:"-",type:"Melee",strength:t.strength,armourPiercing:0,damage:1,abilities:"Default close combat weapon available to all models"},n=z("//roster:force/roster:rules/roster:rule",e).map(J),r=z("roster:selections/roster:selection/roster:profiles/roster:profile[@typeName='Wargear']",e).map(K),l=z("roster:selections/roster:selection/roster:profiles/roster:profile[@typeName='Ability']",e).map(q),o=z("roster:profiles/roster:profile[@typeName='Ability']",e).map(q).concat(n).concat(r).concat(l),s=z("roster:selections/roster:selection/roster:profiles/roster:profile[@typeName='Weapon']",e).map((function(e){return function(e,t){var a=V("S",e,!1);"User"===a&&(a=t);var n=/x([0-9]+)/i.exec(a);return n&&(a=t*parseInt(n[1])),(n=/\+([0-9]+)/i.exec(a))&&(a=t+parseInt(n[1])),{name:e.getAttribute("name"),range:V("Range",e,!0),type:V("Type",e,!1),strength:a,armourPiercing:V("AP",e,!0),damage:V("D",e,!1),abilities:V("Abilities",e,!1)}}(e,t.strength)})).concat([a]),i=z("roster:selections/roster:selection[roster:selections/roster:selection/roster:profiles]",e),c=z("roster:selections/roster:selection/roster:selections/roster:selection/roster:profiles/roster:profile[@typeName='Ability']",e).map(q),m=z("roster:selections/roster:selection/roster:profiles/roster:profile[@typeName='Psychic Power']",e).map($),u=z("roster:categories/roster:category[@primary='true']",e)[0].getAttribute("name"),p=z("roster:categories/roster:category[@primary='false' and starts-with(@name,'Faction: ')]",e),d=z("roster:categories/roster:category[@primary='false' and not(starts-with(@name,'Faction: '))]",e).map((function(e){return e.getAttribute("name")}));U.remove(d,(function(e){return"Model"===e}));var h={name:e.getAttribute("customName"),type:e.getAttribute("name"),category:"Non-specialist"===u?null:u,stats:t,abilities:o.concat(c),weapons:s,psychicPowers:m,specialism:i.length>0?i[0].getAttribute("name"):null,faction:p.length>0?p[0].getAttribute("name").split(": ",2)[1]:null,keywords:d,points:H(e)};return Object(M.a)({},h,{hash:_.hash(h)})},X=function(e){var t=[],a=(new T).parseFromString(e),n=!0,r=!1,l=void 0;try{for(var o,s=z("//roster:force/roster:categories/roster:category",a)[Symbol.iterator]();!(n=(o=s.next()).done);n=!0){var i=o.value.getAttribute("entryId"),c=!0,m=!1,u=void 0;try{for(var p,d=z("//roster:selection[@type='model' and roster:categories/roster:category/@entryId='".concat(i,"']"),a)[Symbol.iterator]();!(c=(p=d.next()).done);c=!0){var h=p.value;t.push(Q(h))}}catch(g){m=!0,u=g}finally{try{c||null==d.return||d.return()}finally{if(m)throw u}}}}catch(g){r=!0,l=g}finally{try{n||null==s.return||s.return()}finally{if(r)throw l}}return U.uniqBy(t,(function(e){return e.hash}))},Y=a(293),Z=function(e){return function(e){return"P"!==e[0]?Promise.resolve(e):(new Y).loadAsync(e).then((function(e){return e.file(/[^/]+\.ros/)[0].async("string")}))}(e).then(X)},ee=function(e){return function(e){var t;return I.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return t=new FileReader,a.abrupt("return",new Promise((function(a,n){t.onerror=function(){t.abort(),n(new DOMException("Problem parsing input file."))},t.onloadend=function(){return I.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:a(Z(t.result));case 1:case"end":return e.stop()}}))},t.readAsBinaryString(e)})));case 2:case"end":return a.stop()}}))}(e[0])},te=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={models:[]},a.handleUpload=function(e){ee(e).then((function(e){a.setState({models:e})}))},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(C.a,null,0===this.state.models.length?r.a.createElement(g,{onUpload:this.handleUpload}):r.a.createElement(j,{models:this.state.models}))}}]),t}(r.a.Component),ae=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ne(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(r.a.createElement(te,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/scriptorum",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/scriptorum","/service-worker.js");ae?(!function(e,t){fetch(e).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ne(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):ne(t,e)}))}}()}},[[164,1,2]]]);
//# sourceMappingURL=main.d1369095.chunk.js.map