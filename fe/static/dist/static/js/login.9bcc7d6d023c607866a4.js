webpackJsonp([3],{"2hPG":function(s,t){},"V/Lv":function(s,t){},mTzT:function(s,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=o("7+uW"),e=o("mvHQ"),n=o.n(e),i=o("7t+N"),r=o.n(i),c={name:"login",data:function(){return{setInter:null,flowType:1,userPhone:"",focusName:!1,password:"",focusPassword:!1,againPassword:"",focusAgainPwd:!1,focusVer:!1,showErrorTip:!1,regPhone:/^[1][3,4,5,6,7,8][0-9]{9}$/,regPassword:/^[0-9a-zA-Z_]{6,12}$/}},watch:{password:function(){2!==this.flowType&&3!==this.flowType||(this.password!==this.againPassword?this.showErrorTip=!0:this.showErrorTip=!1)},againPassword:function(){2!==this.flowType&&3!==this.flowType||(this.password!==this.againPassword?this.showErrorTip=!0:this.showErrorTip=!1)}},methods:{verificationVal_:function(s){var t="";return""===this.userPhone&&(t="用户名不能为空"),""===this.password&&(t="密码不能为空"),2===s&&this.password!==this.againPassword&&(t="两次密码输入不一致"),t},initInp_:function(){this.userPhone="",this.password="",this.againPassword="",this.focusName=!1,this.focusPassword=!1,this.focusAgainPwd=!1,this.focusVer=!1,this.showErrorTip=!1},login_func:function(){var s=this.verificationVal_();s?alert(s):this.onClickLogin()},red_func:function(s){var t=this.verificationVal_(2);t?alert(t):2!==s?this.onClickRegister_():alert("当前版本不开放次功能，请联系管理员吧")},onClickLogin:function(){var s={username:this.userPhone,password:this.password};r.a.ajax({type:"POST",contentType:"application/json; charset=utf-8",data:n()(s),dataType:"json",url:"http://localhost:8081/api/login",success:function(t){if(-400==t.code)alert(t.message);else if(0==t.code){alert(t.message);var o=new Date;o.setDate(o.getDate()+99||0),document.cookie="username="+escape(s.username)+";expires="+o.toGMTString(),document.cookie="password="+escape(s.password)+";expires="+o.toGMTString(),0==t.data.administrator?(null!=sessionStorage.getItem("super_token")&&sessionStorage.removeItem("super_token"),document.cookie="token="+escape(t.data.access_token)+";expires="+o.toGMTString()):(sessionStorage.setItem("super_token",t.data.super_token),document.cookie="token="+escape(t.data.super_token)+";expires="+o.toGMTString()),window.location.href="manage.html"}},error:function(s){alert("服务器内部出错了，请稍等!!!")}})},onClickRegister_:function(){alert("register")}}},l={render:function(){var s=this,t=s.$createElement,o=s._self._c||t;return o("div",{attrs:{id:"app"}},[o("div",{staticClass:"content-box"},[o("div",{staticClass:"right-box"},[o("div",{staticClass:"login-box"},[1===s.flowType?o("div",{staticClass:"login-title"},[s._v("欢迎登录")]):2===s.flowType?o("div",{staticClass:"login-title"},[s._v("立即注册")]):3===s.flowType?o("div",{staticClass:"login-title"},[s._v("重置密码")]):s._e(),s._v(" "),o("div",{staticClass:"inp-group"},[o("label",{staticClass:"label"},[s._v("账户名称")]),s._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:s.userPhone,expression:"userPhone"}],staticClass:"inp",class:{focus:s.focusName},attrs:{placeholder:"请输入手机号码",type:"text"},domProps:{value:s.userPhone},on:{focus:function(t){s.focusName=!0},blur:function(t){""===s.userPhone&&(s.focusName=!1)},input:function(t){t.target.composing||(s.userPhone=t.target.value)}}})]),s._v(" "),o("div",{staticClass:"inp-group"},[o("label",{staticClass:"label"},[s._v("账户密码")]),s._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:s.password,expression:"password"}],staticClass:"inp",class:{focus:s.focusPassword},attrs:{placeholder:3===s.flowType?"请输入新密码":"请输入密码",type:"password"},domProps:{value:s.password},on:{focus:function(t){s.focusPassword=!0},blur:function(t){""===s.password&&(s.focusPassword=!1)},input:function(t){t.target.composing||(s.password=t.target.value)}}})]),s._v(" "),2===s.flowType||3===s.flowType?o("div",{staticClass:"inp-group"},[o("label",{staticClass:"label"},[s._v("确认密码")]),s._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:s.againPassword,expression:"againPassword"}],staticClass:"inp",class:{focus:s.focusAgainPwd},attrs:{placeholder:3===s.flowType?"请再次输入新密码":"请再次输入密码",type:"password"},domProps:{value:s.againPassword},on:{focus:function(t){s.focusAgainPwd=!0},blur:function(t){""===s.againPassword&&(s.focusAgainPwd=!1)},input:function(t){t.target.composing||(s.againPassword=t.target.value)}}}),s._v(" "),s.showErrorTip&&""!==s.password&&""!==s.againPassword?o("p",{staticClass:"error-tip"},[s._v("两次密码输入不一致")]):s._e()]):s._e(),s._v(" "),o("div",{staticClass:"btn-box"},[o("label",{staticClass:"label"}),s._v(" "),1===s.flowType?o("button",{staticClass:"entry-btn",on:{click:function(t){return s.login_func()}}},[s._v("登录")]):2===s.flowType?o("button",{staticClass:"entry-btn",on:{click:function(t){return s.red_func()}}},[s._v("注册")]):3===s.flowType?o("button",{staticClass:"entry-btn",on:{click:function(t){return s.red_func(2)}}},[s._v("修改")]):s._e(),s._v(" "),1===s.flowType?o("div",{staticClass:"regFog"},[o("span",{staticClass:"option mcarloData-btn",on:{click:function(t){s.flowType=2,s.initInp_()}}},[s._v("立即注册")]),s._v(" "),o("span",{staticClass:"option mcarloData-btn",on:{click:function(t){s.flowType=3,s.initInp_()}}},[s._v("忘记密码")])]):s._e(),s._v(" "),2===s.flowType?o("div",{staticClass:"regFog"},[o("span",{staticClass:"option mcarloData-btn",on:{click:function(t){s.flowType=1,s.initInp_()}}},[s._v("返回登录")]),s._v(" "),o("span",{staticClass:"option mcarloData-btn",on:{click:function(t){s.flowType=3,s.initInp_()}}},[s._v("忘记密码")])]):s._e(),s._v(" "),3===s.flowType?o("div",{staticClass:"regFog"},[o("span",{staticClass:"option mcarloData-btn",on:{click:function(t){s.flowType=1,s.initInp_()}}},[s._v("返回登录")]),s._v(" "),o("span",{staticClass:"option mcarloData-btn",on:{click:function(t){s.flowType=2,s.initInp_()}}},[s._v("立即注册")])]):s._e()])])])])])},staticRenderFns:[]};var p=o("VU/8")(c,l,!1,function(s){o("2hPG"),o("V/Lv")},"data-v-2c629719",null).exports,u=o("zL8q"),d=o.n(u);o("tvR6");a.default.config.productionTip=!1,a.default.use(d.a),new a.default({el:"#app",components:{login:p},template:"<login/>"})},tvR6:function(s,t){}},["mTzT"]);
//# sourceMappingURL=login.9bcc7d6d023c607866a4.js.map