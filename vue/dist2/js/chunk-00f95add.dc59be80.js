(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-00f95add"],{"0213":function(t,e,i){"use strict";var s=i("f5a5"),a=i.n(s);a.a},1715:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"icon",on:{click:t.back}},[i("van-icon",{staticClass:"arrow",attrs:{name:"arrow-left"}})],1)},a=[],n={methods:{back:function(){this.$emit("back")}}},r=n,o=(i("878e"),i("25c1")),c=Object(o["a"])(r,s,a,!1,null,"1280abbf",null);c.options.__file="Back.vue";e["a"]=c.exports},4424:function(t,e,i){t.exports=i.p+"img/login.4e54e532.jpg"},"6e66":function(t,e,i){},"878e":function(t,e,i){"use strict";var s=i("6e66"),a=i.n(s);a.a},a55b:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"login"},[s("div",{staticClass:"login-warpper"},[s("img",{staticClass:"login-img",attrs:{src:i("4424"),alt:"",srcset:""}}),s("div",{staticClass:"form"},[s("div",{staticClass:"form-cont"},[s("p",{staticClass:"login-title"},[t._v("登录 / 注册")]),s("div",{staticClass:"form-group"},[s("label",{staticClass:"sr-only",attrs:{for:"username"}},[t._v("USERNAME")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.nickname,expression:"nickname"}],staticClass:"form-control",attrs:{type:"text",maxlength:"16",placeholder:"USERNAME",autocomplete:"off"},domProps:{value:t.nickname},on:{input:function(e){e.target.composing||(t.nickname=e.target.value)}}})]),s("div",{staticClass:"form-group"},[s("label",{staticClass:"sr-only",attrs:{for:"password"}},[t._v("PASSWORD")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",maxlength:"16",placeholder:"PASSWORD",autocomplete:"off"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),s("div",{staticClass:"form-group verify"},[s("label",{staticClass:"col-sm-2 control-label",attrs:{for:"inputEmail3"}},[t._v("验证码：")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.verifyTxt,expression:"verifyTxt"}],staticClass:"form-control verify-input",attrs:{type:"text",placeholder:"请输入验证码",maxlength:"4",autocomplete:"off"},domProps:{value:t.verifyTxt},on:{input:function(e){e.target.composing||(t.verifyTxt=e.target.value)}}}),s("div",{staticClass:"col-sm-10"},[s("img",{ref:"eleVerify",attrs:{src:t.verify,alt:"",onclick:"javascript:this.src='/api/verify?mt='+Math.random()",srcset:"",title:"看不清？点击刷新"}})])]),s("div",{staticClass:"form-group form-group2"},[s("van-button",{staticStyle:{"margin-right":"10px"},attrs:{loading:t.loginLoding,type:"primary"},on:{click:function(e){t.login(!1)}}},[t._v("登 录")]),s("van-button",{attrs:{loading:t.regLoding,type:"danger"},on:{click:function(e){t.login(!0)}}},[t._v("注 册")])],1)])]),s("Back",{on:{back:t.back}})],1)])},a=[],n=(i("b5aa"),i("b8fa")),r=i("1715"),o=i("3d93"),c={mixins:[o["b"],o["e"]],data:function(){return{nickname:"",password:"",tip:"",timer:0,regLoding:!1,loginLoding:!1,verify:this.Api.averify(),verifyTxt:""}},components:{Back:r["a"]},methods:{login:function(t){this.nickname&&this.password?this.verifyTxt?t?this.register(!0):this.register(!1):this.$toast("请输入验证码"):this.$toast("请输入用户名或者密码")},register:function(){var t=Object(n["a"])(regeneratorRuntime.mark(function t(e){var i,s,a,n,r=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(!e){t.next=18;break}return t.prev=1,this.regLoding=!0,t.next=5,this.Api.register(this.nickname,this.password,this.verifyTxt);case 5:i=t.sent,s=i.data,200==s.code&&(this.setName(s.userInfo),setTimeout(function(){r.$router.go(-1)},1500)),this.regLoding=!1,this.$toast(s.msg),t.next=16;break;case 12:t.prev=12,t.t0=t["catch"](1),this.$toast("网络错误"),this.regLoding=!1;case 16:t.next=33;break;case 18:return t.prev=18,this.loginLoding=!0,t.next=22,this.Api.login(this.nickname,this.password,this.verifyTxt);case 22:a=t.sent,n=a.data,200==n.code&&(this.setName(n.userInfo),setTimeout(function(){r.$router.go(-1)},1500)),this.loginLoding=!1,this.$toast(n.msg),t.next=33;break;case 29:t.prev=29,t.t1=t["catch"](18),this.$toast("网络错误"),this.loginLoding=!1;case 33:case"end":return t.stop()}},t,this,[[1,12],[18,29]])}));function e(e){return t.apply(this,arguments)}return e}()},beforeRouteEnter:function(t,e,i){i(function(){var t=Object(n["a"])(regeneratorRuntime.mark(function t(e){var i,s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.Api.keeplogin();case 3:i=t.sent,s=i.data,200==s.code&&e.$router.push({path:"/"}),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),e.$toast("网络错误");case 11:case"end":return t.stop()}},t,this,[[0,8]])}));return function(e){return t.apply(this,arguments)}}())}},l=c,u=(i("0213"),i("25c1")),p=Object(u["a"])(l,s,a,!1,null,"78b31bbb",null);p.options.__file="Login.vue";e["default"]=p.exports},f5a5:function(t,e,i){}}]);