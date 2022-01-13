(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{286:function(e,t,r){"use strict";r.r(t);var l=r(4),n=(r(38),{name:"LoginPage",layout:"simple",data:function(){return{login:{email:"",password:""},error:!1}},methods:{verificarInputs:function(){return!(!this.login.email||!this.login.password)||(this.error=!0,!1)},userLogin:function(){var e=this;return Object(l.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.error=!1,t.prev=1,t.next=4,e.$auth.loginWith("local",{data:e.login});case 4:e.$route.push("/dashboard"),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(1),e.error=!0;case 10:case"end":return t.stop()}}),t,null,[[1,7]])})))()}}}),o=r(17),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"min-h-screen flex flex-col items-center justify-center bg-gray-100"},[r("div",{staticClass:"flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-3xl w-50 max-w-md"},[r("div",{staticClass:"font-medium self-center text-xl sm:text-3xl orange-pallet"},[e._v("\n      Login\n    ")]),e._v(" "),r("div",{staticClass:"mt-10"},[r("form",{attrs:{action:"#"}},[r("div",{staticClass:"flex flex-col mb-5"},[r("label",{staticClass:"mb-1 text-xs tracking-wide text-gray-600",attrs:{for:"email"}},[e._v("Endereço de e-mail:")]),e._v(" "),r("div",{staticClass:"relative"},[e._m(0),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.login.email,expression:"login.email"}],staticClass:"text-sm placeholder-gray-500 pl-10 pr-4 rounded-2xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400",attrs:{id:"email",type:"email",name:"email",placeholder:"Preencha seu e-mail"},domProps:{value:e.login.email},on:{input:function(t){t.target.composing||e.$set(e.login,"email",t.target.value)}}})])]),e._v(" "),r("div",{staticClass:"flex flex-col mb-6"},[r("label",{staticClass:"mb-1 text-xs sm:text-sm tracking-wide text-gray-600",attrs:{for:"password"}},[e._v("Senha:")]),e._v(" "),r("div",{staticClass:"relative"},[e._m(1),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.login.password,expression:"login.password"}],staticClass:"text-sm placeholder-gray-500 pl-10 pr-4 rounded-2xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400",attrs:{id:"password",type:"password",name:"password",placeholder:"Preencha sua senha"},domProps:{value:e.login.password},on:{input:function(t){t.target.composing||e.$set(e.login,"password",t.target.value)}}})])]),e._v(" "),e.error?r("div",{staticClass:"bg-red-100 text-red-600 p-5"},[e._v("\n          Ops, algo errado. Tente novamente.\n        ")]):e._e(),e._v(" "),r("div",{staticClass:"flex w-full"},[r("div",{staticClass:"mt-2 text-center text-white text-sm sm:text-base bg-orange-pallet rounded-2xl py-2 w-full transition duration-150 _hover uppercase cursor-pointer",on:{click:function(t){return e.userLogin()}}},[e._v("\n            Entrar\n          ")])])])])]),e._v(" "),r("div",{staticClass:"flex justify-center items-center mt-6"},[r("div",{staticClass:"inline-flex items-center text-gray-700 font-medium text-xs text-center"},[r("span",{staticClass:"ml-2"},[e._v("Não possui uma conta ainda?\n        "),r("nuxt-link",{staticClass:"text-xs transition duration-150 _hover ml-2 text-blue-500 orange-pallet font-semibold",attrs:{to:"/register"}},[e._v("Registrar agora")])],1)])])])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400"},[t("i",{staticClass:"fas fa-at text-blue-500"})])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400"},[t("span",[t("i",{staticClass:"fas fa-lock text-blue-500"})])])}],!1,null,null,null);t.default=component.exports}}]);