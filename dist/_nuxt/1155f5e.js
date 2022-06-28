(window.webpackJsonp=window.webpackJsonp||[]).push([[6,2],{280(t,e,r){"use strict";const n=r(7); const o=r(83).find; const d=r(137); const l="find"; let c=!0;l in[]&&Array(1).find((function(){c=!1})),n({target:"Array",proto:!0,forced:c},{find(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),d(l)},282(t,e,r){let content=r(287);content.__esModule&&(content=content.default),typeof content==="string"&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(41).default)("579d1285",content,!0,{sourceMap:!1})},283(t,e,r){"use strict";r.r(e);const n=r(4); const o=(r(39),r(38),{name:"ModalSaida",data(){return{orderId:"",sku:"",employee:"",shipping:"",date:"",status:"",tracker:"",quantity:"",error:0,message:0,showReadBarcode:0}},methods:{callShowModal(){this.$root.$refs.Outputs.showModal()},verifyInputs(){this.orderId&&this.sku&&this.employee&&this.shipping&&this.date&&this.status&&this.tracker&&this.quantity||(this.error=1)},saveModal(){const t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){let r,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=t.$cookies.get("auth._token.local"),data={orderId:t.orderId,sku:t.sku,employee:t.employee,shipping:t.shipping,date:t.date,status:t.status,tracker:t.tracker,quantity:t.quantity},e.next=5,t.$axios.$post("/output/create",data,{headers:{Authorization:r}});case 5:e.sent.error===0&&(t.error=0,t.message=1),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),e.t0&&(t.error=1);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()},readBarCode(){this.showReadBarcode?this.showReadBarcode=0:this.showReadBarcode=1},logIt(data){data.codeResult.code&&(this.orderId=data.codeResult.code,this.tracker=data.codeResult.code,this.sku=data.codeResult.code.slice(0,7),this.showReadBarcode=0)}}}); const d=r(18); const component=Object(d.a)(o,(function(){const t=this; const e=t.$createElement; const r=t._self._c||e;return r("div",{staticClass:"modal h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-50"},[r("div",{staticClass:"bg-white rounded shadow-lg w-11/12 md:w-2/3 md:m-10"},[r("div",{staticClass:"border-b px-4 md:py-2 flex justify-between items-center"},[r("h3",{staticClass:"font-medium text-lg"},[t._v("Cadastro de novas saídas")]),t._v(" "),r("button",{staticClass:"text-black close-modal",on:{click(e){return t.callShowModal()}}},[r("svg",{staticStyle:{fill:"#000000"},attrs:{xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"20",height:"20",viewBox:"0 0 24 24"}},[r("path",{attrs:{d:"M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z"}})])])]),t._v(" "),r("div",{staticClass:"bg-gray-100 mx-auto max-w-7xl md:py-1"},[r("form",[r("div",{staticClass:"bg-white w-auto shadow-md rounded px-3 m-10 flex flex-col"},[r("div",{staticClass:"-mx-3 md:flex mb-1"},[r("div",{staticClass:"md:w-1/3 px-3 mb-1 md:mb-0"},[r("label",{staticClass:"uppercase tracking-wide text-black text-md font-bold mb-1",attrs:{for:"orderId"}},[t._v("\n                ID\n              ")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.orderId,expression:"orderId"}],staticClass:"text-sm placeholder-gray-500 pl-3 rounded-md border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400",attrs:{id:"orderId",type:"text",placeholder:"ID do pedido"},domProps:{value:t.orderId},on:{input(e){e.target.composing||(t.orderId=e.target.value)}}})]),t._v(" "),r("div",{staticClass:"md:w-1/3 px-3"},[r("label",{staticClass:"uppercase tracking-wide text-black text-xs font-bold mb-1",attrs:{for:"tracker"}},[t._v("\n                Rastreio/Cód.\n              ")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.tracker,expression:"tracker"}],staticClass:"text-sm placeholder-gray-500 pl-3 rounded-md border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400",attrs:{id:"tracker",type:"text",placeholder:"Rastreio/Cód. barras"},domProps:{value:t.tracker},on:{input(e){e.target.composing||(t.tracker=e.target.value)}}})]),t._v(" "),r("div",{staticClass:"md:w-1/3 px-3"},[r("label",{staticClass:"uppercase tracking-wide text-black text-xs font-bold mb-1",attrs:{for:"shipping"}},[t._v("\n                Transportadora\n              ")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.shipping,expression:"shipping"}],staticClass:"text-sm placeholder-gray-500 pl-3 rounded-md border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400",attrs:{id:"shipping",type:"text",placeholder:"Transportadora do pedido"},domProps:{value:t.shipping},on:{input(e){e.target.composing||(t.shipping=e.target.value)}}})])]),t._v(" "),r("div",{staticClass:"-mx-3 md:flex mb-1"},[r("div",{staticClass:"md:w-1/3 px-3"},[r("label",{staticClass:"uppercase tracking-wide text-black text-xs font-bold mb-2",attrs:{for:"sku"}},[t._v("\n                SKU\n              ")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.sku,expression:"sku"}],staticClass:"text-sm placeholder-gray-500 pl-3 rounded-md border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400",attrs:{id:"sku",type:"text",placeholder:"SKU"},domProps:{value:t.sku},on:{input(e){e.target.composing||(t.sku=e.target.value)}}})]),t._v(" "),r("div",{staticClass:"md:w-1/3 px-3"},[r("label",{staticClass:"uppercase tracking-wide text-black text-xs font-bold mb-2",attrs:{for:"employee"}},[t._v("\n                Funcionário\n              ")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.employee,expression:"employee"}],staticClass:"text-sm placeholder-gray-500 pl-3 rounded-md border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400",attrs:{id:"employee",type:"text",placeholder:"Funcionário"},domProps:{value:t.employee},on:{input(e){e.target.composing||(t.employee=e.target.value)}}})]),t._v(" "),r("div",{staticClass:"md:w-1/3 px-3"},[r("label",{staticClass:"uppercase tracking-wide text-black text-xs font-bold mb-2",attrs:{for:"date"}},[t._v("\n                Data\n              ")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.date,expression:"date"}],staticClass:"text-sm placeholder-gray-500 pl-3 rounded-md border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400",attrs:{id:"date",type:"date",placeholder:"Data"},domProps:{value:t.date},on:{input(e){e.target.composing||(t.date=e.target.value)}}})])]),t._v(" "),r("div",{staticClass:"-mx-3 md:flex mb-2"},[r("div",{staticClass:"md:w-1/2 px-3 md:mb-0"},[r("label",{staticClass:"uppercase tracking-wide text-black text-xs font-bold mb-2",attrs:{for:"quantity"}},[t._v("\n                Quantidade\n              ")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.quantity,expression:"quantity"}],staticClass:"text-sm placeholder-gray-500 pl-3 rounded-md border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400",attrs:{id:"quantity",type:"number",placeholder:"Quantidade"},domProps:{value:t.quantity},on:{input(e){e.target.composing||(t.quantity=e.target.value)}}})]),t._v(" "),r("div",{staticClass:"md:w-1/2 px-3"},[r("label",{staticClass:"uppercase tracking-wide text-black text-xs font-bold",attrs:{for:"status"}},[t._v("\n                Status\n              ")]),t._v(" "),r("div",[r("select",{directives:[{name:"model",rawName:"v-model",value:t.status,expression:"status"}],staticClass:"text-sm placeholder-gray-500 pl-3 rounded-md border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400",on:{change(e){const r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.status=e.target.multiple?r:r[0]}}},[r("option",{attrs:{value:"1"}},[t._v("A enviar")]),t._v(" "),r("option",{attrs:{value:"2"}},[t._v("Enviado")]),t._v(" "),r("option",{attrs:{value:"3"}},[t._v("Duplicidade")]),t._v(" "),r("option",{attrs:{value:"4"}},[t._v("CEP errado")])])])])])])])]),t._v(" "),r("client-only",[t.showReadBarcode?r("v-quagga",{staticClass:"flex justify-center items-center barcode-width",attrs:{onDetected:t.logIt,readerSize:{width:350,height:350},readerTypes:["ean_reader"]}}):t._e()],1),t._v(" "),t.error?r("div",{staticClass:"bg-red-100 text-red-600 text-center p-5"},[t._v("\n      Ops, informações faltando ou já existe um registro com esse ID. Tente\n      novamente.\n    ")]):t._e(),t._v(" "),t.message?r("div",{staticClass:"bg-green-100 text-green-600 text-center p-5"},[t._v("\n      Saída criada com sucesso.\n    ")]):t._e(),t._v(" "),r("div",{staticClass:"flex justify-center items-center w-100 border-t p-3"},[r("button",{staticClass:"bg-red-600 hover:bg-red-700 md:w-1/6 px-5 py-1 rounded text-white mr-2 close-modal",on:{click(e){return t.callShowModal()}}},[t._v("\n        Cancelar\n      ")]),t._v(" "),r("button",{staticClass:"bg-blue-600 hover:bg-blue-700 md:w-1/6 px-5 py-1 rounded text-white",on:{click(e){return t.saveModal()}}},[t._v("\n        Salvar\n      ")]),t._v(" "),r("button",{staticClass:"bg-blue-600 hover:bg-blue-700 md:w-2/6 px-5 py-1 rounded text-white ml-3",on:{click(e){return t.readBarCode()}}},[t._v("\n        Escanear código de barra\n      ")])])],1)])}),[],!1,null,null,null);e.default=component.exports},286(t,e,r){"use strict";r(282)},287(t,e,r){const n=r(40)((function(i){return i[1]}));n.push([t.i,"/*purgecss start ignore*/\np[data-v-e00df614]{\n  max-width:15ch;\n  overflow:hidden;\n  text-overflow:ellipsis;\n  white-space:nowrap\n}\n\n/*purgecss end ignore*/",""]),n.locals={},t.exports=n},292(t,e,r){"use strict";r.r(e);const n=r(4); const o=(r(38),r(50),r(280),r(9),r(25),r(26),r(138),r(42),r(109),{name:"SaidasPage",layout:"default",middleware:"auth",asyncData(t){return Object(n.a)(regeneratorRuntime.mark((function e(){let r,n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$axios,e.next=3,r.$get("/outputs?limit=50");case 3:return n=e.sent,o=n.outputs.map((function(t){const e=n.status.find((function(e){return e.code===t.status}));return t.statusName=e.name,t.date=new Date(t.date).toLocaleString("PT-BR").split(" ")[0],t.createdAt=new Date(t.createdAt).toLocaleString("PT-BR").split(" ")[0],t})),e.abrupt("return",{formatedOutputs:o});case 6:case"end":return e.stop()}}),e)})))()},data(){return{readerSize:{width:200,height:100},detecteds:[],modal:0}},created(){this.$root.$refs.Outputs=this},methods:{showModal(){this.modal?this.modal=0:this.modal=1},exportData(){const data=JSON.parse(JSON.stringify(this.formatedOutputs)); const t=Object.keys(data[0]); const e=function(t,e){return e===null?"":e}; let r=data.map((function(r){return t.map((function(t){return JSON.stringify(r[t],e)})).join(",")}));r.unshift(t.join(",")),r=r.join("\r\n");const n=document.createElement("a");n.href="data:text/csv;charset=utf-8,"+encodeURIComponent(r),n.target="_blank",n.download="Relatorio-".concat(Date.now(),".csv"),n.click()}}}); const d=o; const l=(r(286),r(18)); const component=Object(l.a)(d,(function(){const t=this; const e=t.$createElement; const r=t._self._c||e;return r("div",[r("h1",{staticClass:"text-xl mb-2 text-center"},[t._v("\n    Exibindo "+t._s(t.formatedOutputs.length)+" saídas\n  ")]),t._v(" "),t.modal?r("OutputModal"):t._e(),t._v(" "),r("div",{staticClass:"md:flex md:justify-end md:mr-0"},[r("div"),t._v(" "),r("div",[r("button",{staticClass:"bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-white w-full my-2 md:mx-1 md:w-auto show-modal",on:{click(e){return t.showModal()}}},[t._v("\n        Cadastrar saída manual\n      ")])]),t._v(" "),r("div",[r("button",{staticClass:"bg-green-600 hover:bg-green-700 px-3 py-1 rounded text-white w-full my-2 md:mx-1 md:w-auto show-modal",on:{click(e){return t.exportData()}}},[t._v("\n        Exportar relatório\n      ")])])]),t._v(" "),r("div",{staticClass:"overflow-auto rounded-lg shadow hidden md:block pb-2"},[r("table",{staticClass:"w-full"},[t._m(0),t._v(" "),r("tbody",{staticClass:"divide-y divide-gray-100"},t._l(t.formatedOutputs,(function(e){return r("tr",{key:e.id,staticClass:"bg-white"},[r("td",{staticClass:"p-3 text-sm text-gray-700 whitespace-nowrap"},[r("nuxt-link",{staticClass:"font-bold text-blue-500 hover:underline",attrs:{to:"/saida/"+e.orderId}},[t._v("\n              "+t._s(e.orderId))])],1),t._v(" "),e.status===1?r("td",{staticClass:"p-1 text-xs text-center font-medium uppercase tracking-wider text-gray-800 bg-gray-200 rounded-lg bg-opacity-130",attrs:{name:e.status}},[t._v("\n            "+t._s(e.statusName)+"\n          ")]):t._e(),t._v(" "),e.status===2?r("td",{staticClass:"py-1 text-xs text-center font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-130",attrs:{name:e.status}},[t._v("\n            "+t._s(e.statusName)+"\n          ")]):t._e(),t._v(" "),e.status===3?r("td",{staticClass:"py-1 text-xs text-center font-medium uppercase tracking-wider text-red-800 bg-red-200 rounded-lg bg-opacity-130",attrs:{name:e.status}},[t._v("\n            "+t._s(e.statusName)+"\n          ")]):t._e(),t._v(" "),e.status===4?r("td",{staticClass:"py-1 text-xs text-center font-medium uppercase tracking-wider text-yellow-800 bg-yellow-200 rounded-lg bg-opacity-130",attrs:{name:e.status}},[t._v("\n            "+t._s(e.statusName)+"\n          ")]):t._e(),t._v(" "),e.status===5?r("td",{staticClass:"py-1 text-xs text-center font-medium uppercase tracking-wider text-red-800 bg-red-200 rounded-lg bg-opacity-130",attrs:{name:e.status}},[t._v("\n            "+t._s(e.statusName)+"\n          ")]):t._e(),t._v(" "),r("td",{staticClass:"p-3 text-sm text-gray-700 whitespace-nowrap"},[r("span",{staticClass:"p-3 text-sm text-gray-700 whitespace-nowrap"},[t._v(t._s(e.tracker))])]),t._v(" "),r("td",{staticClass:"p-3 text-sm text-gray-700 whitespace-nowrap"},[t._v("\n            "+t._s(e.shipping)+"\n          ")]),t._v(" "),r("td",{staticClass:"p-3 text-sm text-gray-700 whitespace-nowrap"},[t._v("\n            "+t._s(e.date)+"\n          ")]),t._v(" "),r("td",{staticClass:"p-3 text-sm text-gray-700 whitespace-nowrap"},[t._v("\n            "+t._s(e.employee)+"\n          ")]),t._v(" "),r("td",{staticClass:"p-3 text-sm text-gray-700 whitespace-nowrap"},[t._v("\n            "+t._s(e.sku)+"\n          ")]),t._v(" "),r("td",{staticClass:"p-3 text-sm text-gray-700 whitespace-nowrap"},[t._v("\n            "+t._s(e.quantity)+"\n          ")])])})),0)])]),t._v(" "),r("span",{staticClass:"text-sm py-2"},[t._v("Exibindo "+t._s(t.formatedOutputs.length)+" saídas")]),t._v(" "),r("div",{staticClass:"grid grid-cols-1 sm:grid-cols-3 gap-4 md:hidden"},t._l(t.formatedOutputs,(function(e){return r("div",{key:e.id,staticClass:"bg-white space-y-3 p-4 rounded-lg shadow"},[r("div",{staticClass:"flex items-center space-x-3 text-sm"},[r("div",[r("nuxt-link",{staticClass:"text-blue-500 font-bold break-text hover:underline",attrs:{to:"/saida/"+e.orderId}},[r("p",[t._v(t._s(e.orderId))])])],1),t._v(" "),r("div",{staticClass:"text-gray-500"},[t._v(t._s(e.date))]),t._v(" "),r("div",[e.status===1?r("span",{staticClass:"p-1 px-2 text-xs text-center font-medium uppercase tracking-wider text-gray-800 bg-gray-200 rounded-lg bg-opacity-130",attrs:{name:e.status}},[t._v("\n            "+t._s(e.statusName)+"\n          ")]):t._e(),t._v(" "),e.status===2?r("span",{staticClass:"py-1 px-2 text-xs text-center font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-130",attrs:{name:e.status}},[t._v("\n            "+t._s(e.statusName)+"\n          ")]):t._e(),t._v(" "),e.status===3?r("span",{staticClass:"py-1 px-2 text-xs text-center font-medium uppercase tracking-wider text-red-800 bg-red-200 rounded-lg bg-opacity-130",attrs:{name:e.status}},[t._v("\n            "+t._s(e.statusName)+"\n          ")]):t._e(),t._v(" "),e.status===4?r("span",{staticClass:"py-1 px-2 text-xs text-center font-medium uppercase tracking-wider text-yellow-800 bg-yellow-200 rounded-lg bg-opacity-130",attrs:{name:e.status}},[t._v("\n            "+t._s(e.statusName)+"\n          ")]):t._e(),t._v(" "),e.status===5?r("span",{staticClass:"py-1 px-2 text-xs text-center font-medium uppercase tracking-wider text-red-800 bg-red-200 rounded-lg bg-opacity-130",attrs:{name:e.status}},[t._v("\n            "+t._s(e.statusName)+"\n          ")]):t._e()])]),t._v(" "),r("div",{staticClass:"text-sm"},[r("span",{staticClass:"text-gray-900 font-semibold"},[t._v("SKU:")]),t._v(" "+t._s(e.sku)+"\n        "),r("br"),t._v(" "),r("span",{staticClass:"text-gray-900 font-semibold"},[t._v("Transportadora:")]),t._v("\n        "+t._s(e.shipping)+"\n        "),r("br"),t._v(" "),r("span",{staticClass:"text-gray-900 font-semibold"},[t._v("Funcionário:")]),t._v("\n        "+t._s(e.employee)+"\n        "),r("br"),t._v(" "),r("span",{staticClass:"text-gray-900 font-semibold"},[t._v("Quantidade:")]),t._v("\n        "+t._s(e.quantity)+"\n        "),r("br"),t._v(" "),r("span",{staticClass:"text-gray-900 font-semibold"},[t._v("Rastreio/Cód. barras:")]),t._v("\n        "+t._s(e.tracker)+"\n      ")]),t._v(" "),r("div",[r("nuxt-link",{staticClass:"px-2 py-2 bg-blue-500 text-white rounded-xl font-bold text-white",attrs:{to:"/dashboard/saida/"+e.orderId}},[t._v("\n          Acessar")])],1)])})),0)],1)}),[function(){const t=this; const e=t.$createElement; const r=t._self._c||e;return r("thead",{staticClass:"bg-gray-50 border-b-2 border-gray-200"},[r("tr",[r("th",{staticClass:"w-20 p-3 text-sm font-semibold tracking-wide text-left"},[t._v("\n            ID\n          ")]),t._v(" "),r("th",{staticClass:"w-20 p-3 text-sm font-semibold tracking-wide text-left"},[t._v("\n            Status\n          ")]),t._v(" "),r("th",{staticClass:"w-20 p-3 text-sm font-semibold tracking-wide text-left"},[t._v("\n            Rastreio/Cód. barras\n          ")]),t._v(" "),r("th",{staticClass:"w-24 p-3 text-sm font-semibold tracking-wide text-left"},[t._v("\n            Transportadora\n          ")]),t._v(" "),r("th",{staticClass:"w-32 p-3 text-sm font-semibold tracking-wide text-left"},[t._v("\n            Data\n          ")]),t._v(" "),r("th",{staticClass:"w-32 p-3 text-sm font-semibold tracking-wide text-left"},[t._v("\n            Funcionário\n          ")]),t._v(" "),r("th",{staticClass:"w-32 p-3 text-sm font-semibold tracking-wide text-left"},[t._v("\n            SKU\n          ")]),t._v(" "),r("th",{staticClass:"w-32 p-3 text-sm font-semibold tracking-wide text-left"},[t._v("\n            Quantidade\n          ")])])])}],!1,null,"e00df614",null);e.default=component.exports;installComponents(component,{OutputModal:r(283).default})}}]);