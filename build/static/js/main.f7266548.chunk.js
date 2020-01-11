(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,n,t){e.exports=t(39)},20:function(e,n,t){},38:function(e,n,t){},39:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(13),u=t.n(o),c=(t(20),t(2)),l=function(e){var n=e.onChange,t=e.text,a=e.value;return r.a.createElement("div",null,t,": ",r.a.createElement("input",{onChange:n,value:a}))},i=function(e){var n=e.handleChange,t=e.action,a=e.newVariables;return r.a.createElement("form",{onSubmit:t},r.a.createElement(l,{onChange:n.name,text:"name",value:a.name}),r.a.createElement(l,{onChange:n.number,text:"phone",value:a.number}),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add")))},m=t(3),s=t.n(m),f="http://localhost:3001/persons",d=function(){return s.a.get(f).then(function(e){return e.data})},h=function(e){return s.a.post(f,e).then(function(e){return e.data})},v=function(e,n){return s.a.put("".concat(f,"/").concat(e),n).then(function(e){return e.data})},p=function(e){return s.a.delete("".concat(f,"/").concat(e)).then(function(e){return e.status})},b=function(e){var n=e.person,t=e.onact;return r.a.createElement("li",null,n.name," - ",n.number," ",r.a.createElement("button",{onClick:t,value:n.id},"Delete"))},E=function(e){var n=e.persons,t=function(e){var t=parseInt(e.target.value,10);window.confirm("Are you sure you want to delete "+n.find(function(e){return e.id===t}).name+"?")&&(p(e.target.value),window.location.reload())};return r.a.createElement("div",null,r.a.createElement("ul",null,n.map(function(e){return r.a.createElement(b,{person:e,key:e.name,onact:t})})))},g=function(e){var n=e.onChange;return r.a.createElement("div",null,"Search: ",r.a.createElement("input",{onChange:n}))},w=function(e){var n=e.message;return null===n?null:r.a.createElement("div",{className:n.type},r.a.createElement("p",null,n.message))},y=(t(38),function(){var e=Object(a.useState)([]),n=Object(c.a)(e,2),t=n[0],o=n[1],u=Object(a.useState)(t),l=Object(c.a)(u,2),m=l[0],s=l[1],f=Object(a.useState)(""),p=Object(c.a)(f,2),b=p[0],y=p[1],C=Object(a.useState)(""),O=Object(c.a)(C,2),j=O[0],k=O[1],S=Object(a.useState)({}),x=Object(c.a)(S,2),T=x[0],L=x[1];Object(a.useEffect)(function(){d().then(function(e){o(e),s(e)})},[]);var P={name:function(e){y(e.target.value)},number:function(e){k(e.target.value)}},A={name:b,number:j};return r.a.createElement("div",null,r.a.createElement("h1",null,"Phonebook"),r.a.createElement(w,{message:T}),r.a.createElement("h2",null,"Search"),r.a.createElement(g,{onChange:function(e){s(t.filter(function(n){return-1!==n.name.toLowerCase().indexOf(e.target.value.toLowerCase())}))}}),r.a.createElement("h2",null,"Add new"),r.a.createElement(i,{handleChange:P,action:function(e){e.preventDefault();var n={name:b,number:j};if(t.find(function(e){return e.name===n.name})){if(window.confirm(b+" is already added to phonebook, would you like to change the number?")){var a=t.find(function(e){return e.name===n.name});v(a.id,n).catch(function(e){s(m.filter(function(e){return e.id!==a.id})),L({type:"error",message:"Update of "+n.name+e+" failed"}),setTimeout(function(){L(null)},5e3)}),a.number=n.number,L({type:"success",message:"Person "+n.name+" was updated"}),setTimeout(function(){L(null)},5e3)}}else h(n).then(function(e){n=e,o(t.concat(n)),s(m.concat(n))}).catch(function(e){console.log("On create",e),L({type:"error",message:"Creation of "+n.name+" failed"}),setTimeout(function(){L(null)},5e3)}),L({type:"success",message:"Person "+n.name+" was created"}),setTimeout(function(){L(null)},5e3);y(""),k("")},newVariables:A}),r.a.createElement("h2",null,"List"),null!==m?r.a.createElement(E,{persons:m}):r.a.createElement("p",null,"No persons in list"))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[14,1,2]]]);
//# sourceMappingURL=main.f7266548.chunk.js.map