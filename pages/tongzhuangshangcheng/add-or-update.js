(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tongzhuangshangcheng/add-or-update"],{"40b6":function(e,t,n){"use strict";var i={"w-picker":function(){return Promise.all([n.e("common/vendor"),n.e("components/w-picker/w-picker")]).then(n.bind(null,"1fc0"))}},r=function(){var e=this,t=e.$createElement;e._self._c},u=[];n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return u})),n.d(t,"a",(function(){return i}))},"5bcb":function(e,t,n){"use strict";var i=n("b7f4"),r=n.n(i);r.a},"78d1":function(e,t,n){"use strict";n.r(t);var i=n("40b6"),r=n("dbf8");for(var u in r)"default"!==u&&function(e){n.d(t,e,(function(){return r[e]}))}(u);n("5bcb");var a,s=n("f0c5"),c=Object(s["a"])(r["default"],i["b"],i["c"],!1,null,"1bce09e7",null,!1,i["a"],a);t["default"]=c.exports},b7f4:function(e,t,n){},d101:function(e,t,n){"use strict";(function(e){n("7ebc"),n("921b");i(n("66fd"));var t=i(n("78d1"));function i(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},d5cb:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n("a34a"));function r(e){return e&&e.__esModule?e:{default:e}}function u(e,t,n,i,r,u,a){try{var s=e[u](a),c=s.value}catch(o){return void n(o)}s.done?t(c):Promise.resolve(c).then(i,r)}function a(e){return function(){var t=this,n=arguments;return new Promise((function(i,r){var a=e.apply(t,n);function s(e){u(a,i,r,s,c,"next",e)}function c(e){u(a,i,r,s,c,"throw",e)}s(void 0)}))}}var s=function(){Promise.all([n.e("common/vendor"),n.e("components/w-picker/w-picker")]).then(function(){return resolve(n("1fc0"))}.bind(null,n)).catch(n.oe)},c={data:function(){return{ruleForm:{mingcheng:"",fenlei:"",leibie:"",pinpai:"",chima:"",yanse:"",tupian:"",xiangqing:"",thumbsupnum:"",crazilynum:"",clicktime:"",clicknum:"",jifen:"",price:""},fenleiOptions:[],fenleiIndex:0,leibieOptions:[],leibieIndex:0,user:{},ro:{mingcheng:!1,fenlei:!1,leibie:!1,pinpai:!1,chima:!1,yanse:!1,tupian:!1,xiangqing:!1,thumbsupnum:!1,crazilynum:!1,clicktime:!1,clicknum:!1,jifen:!1,price:!1}}},components:{wPicker:s},computed:{},onLoad:function(){var t=a(i.default.mark((function t(n){var r,u,a,s;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.getStorageSync("nowTable"),t.next=3,this.$api.session(r);case 3:return u=t.sent,this.user=u.data,t.next=7,this.$api.option("fenleiliebiao","fenlei",{});case 7:if(u=t.sent,this.fenleiOptions=u.data,this.leibieOptions="男装,女装".split(","),this.ruleForm.userid=e.getStorageSync("userid"),n.refid&&(this.ruleForm.refid=n.refid,this.ruleForm.nickname=e.getStorageSync("nickname")),!n.id){t.next=18;break}return this.ruleForm.id=n.id,t.next=16,this.$api.info("tongzhuangshangcheng",this.ruleForm.id);case 16:u=t.sent,this.ruleForm=u.data;case 18:if(!n.cross){t.next=81;break}a=e.getStorageSync("crossObj"),t.t0=i.default.keys(a);case 21:if((t.t1=t.t0()).done){t.next=81;break}if(s=t.t1.value,"mingcheng"!=s){t.next=27;break}return this.ruleForm.mingcheng=a[s],this.ro.mingcheng=!0,t.abrupt("continue",21);case 27:if("fenlei"!=s){t.next=31;break}return this.ruleForm.fenlei=a[s],this.ro.fenlei=!0,t.abrupt("continue",21);case 31:if("leibie"!=s){t.next=35;break}return this.ruleForm.leibie=a[s],this.ro.leibie=!0,t.abrupt("continue",21);case 35:if("pinpai"!=s){t.next=39;break}return this.ruleForm.pinpai=a[s],this.ro.pinpai=!0,t.abrupt("continue",21);case 39:if("chima"!=s){t.next=43;break}return this.ruleForm.chima=a[s],this.ro.chima=!0,t.abrupt("continue",21);case 43:if("yanse"!=s){t.next=47;break}return this.ruleForm.yanse=a[s],this.ro.yanse=!0,t.abrupt("continue",21);case 47:if("tupian"!=s){t.next=51;break}return this.ruleForm.tupian=a[s],this.ro.tupian=!0,t.abrupt("continue",21);case 51:if("xiangqing"!=s){t.next=55;break}return this.ruleForm.xiangqing=a[s],this.ro.xiangqing=!0,t.abrupt("continue",21);case 55:if("thumbsupnum"!=s){t.next=59;break}return this.ruleForm.thumbsupnum=a[s],this.ro.thumbsupnum=!0,t.abrupt("continue",21);case 59:if("crazilynum"!=s){t.next=63;break}return this.ruleForm.crazilynum=a[s],this.ro.crazilynum=!0,t.abrupt("continue",21);case 63:if("clicktime"!=s){t.next=67;break}return this.ruleForm.clicktime=a[s],this.ro.clicktime=!0,t.abrupt("continue",21);case 67:if("clicknum"!=s){t.next=71;break}return this.ruleForm.clicknum=a[s],this.ro.clicknum=!0,t.abrupt("continue",21);case 71:if("jifen"!=s){t.next=75;break}return this.ruleForm.jifen=a[s],this.ro.jifen=!0,t.abrupt("continue",21);case 75:if("price"!=s){t.next=79;break}return this.ruleForm.price=a[s],this.ro.price=!0,t.abrupt("continue",21);case 79:t.next=21;break;case 81:this.styleChange();case 82:case"end":return t.stop()}}),t,this)})));function n(e){return t.apply(this,arguments)}return n}(),methods:{styleChange:function(){this.$nextTick((function(){}))},clicktimeConfirm:function(e){console.log(e),this.ruleForm.clicktime=e.result,this.$forceUpdate()},fenleiChange:function(e){this.fenleiIndex=e.target.value,this.ruleForm.fenlei=this.fenleiOptions[this.fenleiIndex]},leibieChange:function(e){this.leibieIndex=e.target.value,this.ruleForm.leibie=this.leibieOptions[this.leibieIndex]},tupianTap:function(){var e=this;this.$api.upload((function(t){e.ruleForm.tupian=e.$base.url+"upload/"+t.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=a(i.default.mark((function e(){return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.ruleForm.thumbsupnum||this.$validate.isIntNumer(this.ruleForm.thumbsupnum)){e.next=3;break}return this.$utils.msg("赞应输入整数"),e.abrupt("return");case 3:if(!this.ruleForm.crazilynum||this.$validate.isIntNumer(this.ruleForm.crazilynum)){e.next=6;break}return this.$utils.msg("踩应输入整数"),e.abrupt("return");case 6:if(!this.ruleForm.clicknum||this.$validate.isIntNumer(this.ruleForm.clicknum)){e.next=9;break}return this.$utils.msg("点击次数应输入整数"),e.abrupt("return");case 9:if(!this.ruleForm.jifen||this.$validate.isIntNumer(this.ruleForm.jifen)){e.next=12;break}return this.$utils.msg("积分应输入整数"),e.abrupt("return");case 12:if(this.ruleForm.price){e.next=15;break}return this.$utils.msg("价格不能为空"),e.abrupt("return");case 15:if(!this.ruleForm.price||this.$validate.isNumber(this.ruleForm.price)){e.next=18;break}return this.$utils.msg("价格应输入数字"),e.abrupt("return");case 18:if(!this.ruleForm.id){e.next=23;break}return e.next=21,this.$api.update("tongzhuangshangcheng",this.ruleForm);case 21:e.next=25;break;case 23:return e.next=25,this.$api.add("tongzhuangshangcheng",this.ruleForm);case 25:this.$utils.msgBack("提交成功");case 26:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var t=new Date,n=t.getFullYear(),i=t.getMonth()+1,r=t.getDate();return"start"===e?n-=60:"end"===e&&(n+=2),i=i>9?i:"0"+i,r=r>9?r:"0"+r,"".concat(n,"-").concat(i,"-").concat(r)},toggleTab:function(e){this.$refs[e].show()}}};t.default=c}).call(this,n("543d")["default"])},dbf8:function(e,t,n){"use strict";n.r(t);var i=n("d5cb"),r=n.n(i);for(var u in i)"default"!==u&&function(e){n.d(t,e,(function(){return i[e]}))}(u);t["default"]=r.a}},[["d101","common/runtime","common/vendor"]]]);