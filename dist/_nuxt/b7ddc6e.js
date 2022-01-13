(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{287:function(e,t,r){"use strict";r.r(t);var l=r(4),n=(r(38),r(31),{name:"RegisterPage",layout:"simple",data:function(){return{register:{name:"",email:"",password:"",permission:""},error:!1,success:!1}},methods:{verifyInputs:function(){return!!(this.register.email&&this.register.password&&this.register.name)||(this.error=!0,!1)},userRegister:function(){var e=this;return Object(l.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,!e.verifyInputs()){t.next=8;break}return e.error=!1,t.next=5,e.$axios.post("/login/create",{name:e.register.name,email:e.register.email,password:e.register.password,permission:e.register.permission});case 5:200===(r=t.sent).status&&(e.success=!0),200!==r.status&&(e.error=!0);case 8:t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),t.t0&&(e.error=!0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))()}}}),o=r(17),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"min-h-screen flex flex-col items-center justify-center bg-gray-100"},[r("div",{staticClass:"flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-3xl w-50 max-w-md"},[r("div",{staticClass:"font-medium self-center text-xl sm:text-3xl orange-pallet"},[e._v("\n      Cadastro\n    ")]),e._v(" "),r("div",{staticClass:"mt-10"},[r("form",{attrs:{action:"#"}},[r("div",{staticClass:"flex flex-col mb-5"},[r("label",{staticClass:"mb-1 text-xs tracking-wide text-gray-600",attrs:{for:"email"}},[e._v("Nome:")]),e._v(" "),r("div",{staticClass:"relative"},[e._m(0),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.register.name,expression:"register.name"}],staticClass:"text-sm placeholder-gray-500 pl-10 pr-4 rounded-2xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400",attrs:{id:"name",type:"text",placeholder:"Preencha seu nome"},domProps:{value:e.register.name},on:{input:function(t){t.target.composing||e.$set(e.register,"name",t.target.value)}}})])]),e._v(" "),r("div",{staticClass:"flex flex-col mb-5"},[r("label",{staticClass:"mb-1 text-xs tracking-wide text-gray-600",attrs:{for:"email"}},[e._v("Endereço de e-mail:")]),e._v(" "),r("div",{staticClass:"relative"},[e._m(1),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.register.email,expression:"register.email"}],staticClass:"text-sm placeholder-gray-500 pl-10 pr-4 rounded-2xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400",attrs:{id:"email",type:"email",placeholder:"Preencha seu e-mail"},domProps:{value:e.register.email},on:{input:function(t){t.target.composing||e.$set(e.register,"email",t.target.value)}}})])]),e._v(" "),r("div",{staticClass:"flex flex-col mb-6"},[r("label",{staticClass:"mb-1 text-xs tracking-wide text-gray-600",attrs:{for:"password"}},[e._v("Senha:")]),e._v(" "),r("div",{staticClass:"relative"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.register.password,expression:"register.password"}],staticClass:"text-sm placeholder-gray-500 pl-10 pr-4 rounded-2xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400",attrs:{id:"password",type:"password",placeholder:"Preencha sua senha"},domProps:{value:e.register.password},on:{input:function(t){t.target.composing||e.$set(e.register,"password",t.target.value)}}})])]),e._v(" "),e.error?r("div",{staticClass:"bg-red-100 text-red-600 p-5"},[e._v("\n          Ops, usuário já cadastrado ou dados faltando. Faça login ou tente\n          novamente.\n        ")]):e._e(),e._v(" "),e.success?r("div",{staticClass:"bg-green-100 text-green-600 p-5"},[e._v("\n          Usuário criado! Faça login.\n        ")]):e._e(),e._v(" "),r("div",{staticClass:"flex w-full"},[r("div",{staticClass:"mt-2 text-white text-center text-sm sm:text-base bg-orange-pallet rounded-2xl py-2 w-full transition duration-150 _hover uppercase cursor-pointer",on:{click:function(t){return e.userRegister()}}},[e._v("\n            Registrar\n          ")])])])])]),e._v(" "),r("div",{staticClass:"flex justify-center items-center mt-6"},[r("div",{staticClass:"inline-flex items-center text-gray-700 font-medium text-xs text-center"},[r("span",{staticClass:"ml-2"},[e._v("Já possui um conta?\n        "),r("nuxt-link",{staticClass:"text-xs ml-2 _hover orange-pallet font-semibold",attrs:{to:"/login"}},[e._v("Faça login")])],1)])])])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400"},[t("i",{staticClass:"fas fa-at text-blue-500"})])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400"},[t("i",{staticClass:"fas fa-at text-blue-500"})])}],!1,null,null,null);t.default=component.exports}}]);