"use strict";(self["webpackChunkportal_ui"]=self["webpackChunkportal_ui"]||[]).push([[935],{5884:function(t,a,s){s.d(a,{Z:function(){return k}});var e=function(){var t=this,a=t._self._c;return a("main",{staticClass:"page-wrapper"},[a("Header"),a("div",{staticClass:"main-content"},[t._t("default")],2),a("Footer")],1)},i=[],n=function(){var t=this,a=t._self._c;return a("div",{staticClass:"header-wrapper"},[a("div",{staticClass:"nav-wrapper header-default"},[a("div",{staticClass:"nav"},[a("img",{attrs:{src:s(7794),alt:"",height:"50px\n\t\t\t"}}),a("ul",{staticClass:"am-nav am-nav-pills am-nav-justify"},[a("li",[a("router-link",{staticClass:"router",attrs:{to:"/index"}},[t._v("网站首页")])],1),t._m(0),t._m(1),t._m(2),t._m(3)])])])])},r=[function(){var t=this,a=t._self._c;return a("li",[a("a",{staticClass:"router",attrs:{href:"http://www.huadingweiye.com/szlzm/",target:"_blank"}},[t._v("产品展示")])])},function(){var t=this,a=t._self._c;return a("li",[a("a",{staticClass:"router",attrs:{href:"http://www.huadingweiye.com/case/",target:"_blank"}},[t._v("案例展示")])])},function(){var t=this,a=t._self._c;return a("li",[a("a",{staticClass:"router",attrs:{href:"http://www.huadingweiye.com/gsxw/",target:"_blank"}},[t._v("新闻动态")])])},function(){var t=this,a=t._self._c;return a("li",[a("a",{staticClass:"router",attrs:{href:"http://www.huadingweiye.com/aboutus/",target:"_blank"}},[t._v("关于我们")])])}];class c{static addClass(t,a){document.querySelector(t).classList.add(a)}static removeClass(t,a){document.querySelector(t).classList.remove(a)}static toggleClass(t,a){document.querySelector(t).classList.toggle(a)}static flatDeep(t,a=1){return a>0?t.reduce(((t,s)=>t.concat(Array.isArray(s)?this.flatDeep(s,a-1):s)),[]):t.slice()}static slugify(t){return t.toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}static containsObject(t,a){let s;for(s=0;s<a.length;s++)if(a[s].slug===t.slug)return s;return-1}}var l={name:"Header",components:{},data(){return{AppFunctions:c}},methods:{toggleStickyHeader(){const t=document.documentElement.scrollTop;t>100?c.addClass(".header-default","sticky"):t<=100&&c.removeClass(".header-default","sticky")}},created(){window.addEventListener("scroll",this.toggleStickyHeader)},mounted(){this.toggleStickyHeader()},beforeDestroy(){window.removeEventListener("scroll",this.toggleStickyHeader)}},o=l,u=s(1001),d=(0,u.Z)(o,n,r,!1,null,"5c67cb43",null),m=d.exports,v=function(){var t=this,a=t._self._c;return a("div",{staticClass:"footer"},[a("div",{staticClass:"footer--bg",staticStyle:{"background-color":"#383d61"}}),a("div",{staticClass:"footer--inner"},[a("div",{staticClass:"am-g"},[a("div",{staticClass:"am-u-md-3"},[a("div",{staticClass:"footer_main--column"},[a("strong",{staticClass:"footer_main--column_title"},[t._v("产品展示")]),a("ul",{staticClass:"footer_navigation"},[a("li",{staticClass:"footer_navigation--item",on:{click:function(a){return t.openInNewTab("http://www.huadingweiye.com/szlzm/")}}},[a("a",{staticClass:"footer_navigation--link"},[t._v("市政类照明")])]),a("li",{staticClass:"footer_navigation--item",on:{click:function(a){return t.openInNewTab("http://www.huadingweiye.com/mtlzm/")}}},[a("a",{staticClass:"footer_navigation--link"},[t._v("煤炭类照明")])]),a("li",{staticClass:"footer_navigation--item",on:{click:function(a){return t.openInNewTab("http://www.huadingweiye.com/shgklzm/")}}},[a("a",{staticClass:"footer_navigation--link"},[t._v("石化港口类照明")])])])])]),t._m(0),t._m(1)]),t._m(2)])])},_=[function(){var t=this,a=t._self._c;return a("div",{staticClass:"am-u-md-6"},[a("div",{staticClass:"footer_main--column"},[a("strong",{staticClass:"footer_main--column_title"},[t._v("关于我们")]),a("div",{staticClass:"footer_about"},[a("img",{staticClass:"ewm-img",attrs:{src:s(1378),alt:"扫一扫关注我们"}}),a("p",{staticClass:"footer_about--text"},[t._v(" 山东华鼎伟业能源科技股份有限公司是在全球能源危机日益突出，人类环保节能意识日渐增强的历史时期，由几名清华学子秉承“自强不息，厚德载物”的精神于2007年1月16日发起创建。2015年成功在(新三板)挂牌上市。股票简称：华鼎伟业，股票代码：832736。 ")])])])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"am-u-md-3"},[a("div",{staticClass:"footer_main--column"},[a("strong",{staticClass:"footer_main--column_title"},[t._v("联系详情")]),a("ul",{staticClass:"footer_contact_info"},[a("li",{staticClass:"footer_contact_info--item"},[a("i",{staticClass:"am-icon-phone"}),a("span",[t._v("人力资源：0535-6762977")])]),a("li",{staticClass:"footer_contact_info--item"},[a("i",{staticClass:"am-icon-map-marker"}),a("span",[t._v("山东省烟台市高新区创业路55号")])]),a("li",{staticClass:"footer_contact_info--item"},[a("i",{staticClass:"am-icon-envelope"}),a("span",[t._v("E-mail：hdwychina@163.com")])])])])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"footer-copyright"},[t._v(" Copyright © "),a("a",{attrs:{href:"http://www.huadingweiye.com/",target:"_blank"}},[t._v("山东华鼎伟业能源科技有限公司")]),t._v(" All Rights Reserved.   "),a("a",{attrs:{href:"https://beian.mps.gov.cn/#/query/webSearch",target:"_blank"}},[a("img",{staticStyle:{"vertical-align":"text-bottom"},attrs:{src:s(1495),alt:""}}),t._v("鲁ICP备17020895号-6")])])}],g={name:"Footer",methods:{openInNewTab(t){window.open(t,"_blank")}}},f=g,h=(0,u.Z)(f,v,_,!1,null,"f816e812",null),p=h.exports,C={name:"Layout",components:{Header:m,Footer:p}},w=C,y=(0,u.Z)(w,e,i,!1,null,"5a00a089",null),k=y.exports},2935:function(t,a,s){s.r(a),s.d(a,{default:function(){return u}});var e=function(){var t=this,a=t._self._c;return a("Layout",[a("div",{staticClass:"layout-container",staticStyle:{width:"100%"}},[a("div",{staticClass:"page-header"},[a("div",{staticClass:"am-container"},[a("h1",{staticClass:"page-header-title"},[t._v("公司动态")])])]),a("div",{staticClass:"breadcrumb-box"},[a("div",{staticClass:"am-container"},[a("ol",{staticClass:"am-breadcrumb"},[a("li",[a("router-link",{attrs:{to:"/"}},[t._v("首页")])],1),a("li",{staticClass:"am-active"},[t._v("公司动态")])])])])]),a("div",{staticClass:"section"},[a("div",{staticClass:"container",staticStyle:{"max-width":"1160px"}},[a("div",{staticClass:"section--header"},[a("h2",{staticClass:"section--title"},[t._v("最近新闻")]),a("p",{staticClass:"section--description"},[t._v(" 云适配与中建材信息技术股份有限公司（以下简称“中建信息”）联合举办的“战略 "),a("br"),t._v("合作签约仪式暨全国跨屏行动启动大会”在北京成功举办。 ")])]),a("div",{staticClass:"news-contaier"},[a("div",{staticClass:"blog"},[a("div",{staticClass:"am-g"},t._l(t.articles.records,(function(s,e){return a("div",{key:e,staticClass:"am-u-lg-4 am-u-md-6 am-u-end"},[a("div",{staticClass:"article"},[a("div",{staticClass:"article-img"},[a("img",{attrs:{src:s.cover,alt:""}})]),a("div",{staticClass:"article-header"},[a("h2",[a("router-link",{attrs:{to:{name:"newsDetails",params:{newsId:s.articleId}},rel:""}},[t._v(t._s(s.title))])],1),a("ul",{staticClass:"article--meta"},[a("li",{staticClass:"article--meta_item -date"},[t._v(t._s(s.createTime))])])]),a("div",{staticClass:"article--content"},[a("p",[t._v(t._s(s.introduction))])]),a("div",{staticClass:"article--footer"},[a("router-link",{staticClass:"link",attrs:{to:{name:"newsDetails",params:{newsId:s.articleId}}}},[t._v("查看更多")])],1)])])})),0),a("ul",{staticClass:"am-pagination",staticStyle:{"text-align":"center"}},[a("li",{class:1===t.pageIndex?"am-disabled":"",on:{click:function(a){return t.changeIndex(t.pageIndex-1)}}},[a("a",{attrs:{href:"#"}},[t._v("«")])]),t._l(t.articles.pages,(function(s,e){return a("li",{key:e,class:t.pageIndex===s?"am-active":"",on:{click:function(a){return t.changeIndex(s)}}},[a("a",{attrs:{href:"#"}},[t._v(t._s(s))])])})),a("li",{class:t.pageIndex===t.articles.pages?"am-disabled":"",on:{click:function(a){return t.changeIndex(t.pageIndex+1)}}},[a("a",{attrs:{href:"#"}},[t._v("»")])])],2)])])])])])},i=[],n=s(5884),r={name:"NewsView",components:{Layout:n.Z},data(){return{articles:{},pageIndex:1}},mounted(){this.getArticle(1)},methods:{getArticle(t){this.getRequest(`/findArticles/${t}`).then((t=>{t&&(this.articles=t.data.data,console.log(this.articles))}))},changeIndex(t){0===t?this.pageIndex=1:t===this.articles.pages+1?this.pageIndex=this.articles.pages:(this.pageIndex=t,this.getArticle(t))}}},c=r,l=s(1001),o=(0,l.Z)(c,e,i,!1,null,"dadceaf4",null),u=o.exports},1495:function(t,a,s){t.exports=s.p+"img/gawb.ef881569.png"},1378:function(t,a,s){t.exports=s.p+"img/ewm.4cfef4ed.jpg"},7794:function(t,a,s){t.exports=s.p+"img/logo-huadingzhilian.268c600b.png"}}]);
//# sourceMappingURL=935.e7a506b7.js.map