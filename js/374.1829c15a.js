"use strict";(self["webpackChunkportal_ui"]=self["webpackChunkportal_ui"]||[]).push([[374],{5884:function(t,a,s){s.d(a,{Z:function(){return b}});var e=function(){var t=this,a=t._self._c;return a("main",{staticClass:"page-wrapper"},[a("Header"),a("div",{staticClass:"main-content"},[t._t("default")],2),a("Footer")],1)},i=[],c=function(){var t=this,a=t._self._c;return a("div",{staticClass:"header-wrapper"},[a("div",{staticClass:"nav-wrapper header-default"},[a("div",{staticClass:"nav"},[a("img",{attrs:{src:s(7794),alt:"",height:"50px\n\t\t\t"}}),a("ul",{staticClass:"am-nav am-nav-pills am-nav-justify"},[a("li",[a("router-link",{staticClass:"router",attrs:{to:"/index"}},[t._v("网站首页")])],1),t._m(0),t._m(1),t._m(2),t._m(3)])])])])},r=[function(){var t=this,a=t._self._c;return a("li",[a("a",{staticClass:"router",attrs:{href:"http://www.huadingweiye.com/szlzm/",target:"_blank"}},[t._v("产品展示")])])},function(){var t=this,a=t._self._c;return a("li",[a("a",{staticClass:"router",attrs:{href:"http://www.huadingweiye.com/case/",target:"_blank"}},[t._v("案例展示")])])},function(){var t=this,a=t._self._c;return a("li",[a("a",{staticClass:"router",attrs:{href:"http://www.huadingweiye.com/gsxw/",target:"_blank"}},[t._v("新闻动态")])])},function(){var t=this,a=t._self._c;return a("li",[a("a",{staticClass:"router",attrs:{href:"http://www.huadingweiye.com/aboutus/",target:"_blank"}},[t._v("关于我们")])])}];class n{static addClass(t,a){document.querySelector(t).classList.add(a)}static removeClass(t,a){document.querySelector(t).classList.remove(a)}static toggleClass(t,a){document.querySelector(t).classList.toggle(a)}static flatDeep(t,a=1){return a>0?t.reduce(((t,s)=>t.concat(Array.isArray(s)?this.flatDeep(s,a-1):s)),[]):t.slice()}static slugify(t){return t.toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}static containsObject(t,a){let s;for(s=0;s<a.length;s++)if(a[s].slug===t.slug)return s;return-1}}var l={name:"Header",components:{},data(){return{AppFunctions:n}},methods:{toggleStickyHeader(){const t=document.documentElement.scrollTop;t>100?n.addClass(".header-default","sticky"):t<=100&&n.removeClass(".header-default","sticky")}},created(){window.addEventListener("scroll",this.toggleStickyHeader)},mounted(){this.toggleStickyHeader()},beforeDestroy(){window.removeEventListener("scroll",this.toggleStickyHeader)}},o=l,d=s(1001),u=(0,d.Z)(o,c,r,!1,null,"5c67cb43",null),m=u.exports,v=function(){var t=this,a=t._self._c;return a("div",{staticClass:"footer"},[a("div",{staticClass:"footer--bg",staticStyle:{"background-color":"#383d61"}}),a("div",{staticClass:"footer--inner"},[a("div",{staticClass:"am-g"},[a("div",{staticClass:"am-u-md-3"},[a("div",{staticClass:"footer_main--column"},[a("strong",{staticClass:"footer_main--column_title"},[t._v("产品展示")]),a("ul",{staticClass:"footer_navigation"},[a("li",{staticClass:"footer_navigation--item",on:{click:function(a){return t.openInNewTab("http://www.huadingweiye.com/szlzm/")}}},[a("a",{staticClass:"footer_navigation--link"},[t._v("市政类照明")])]),a("li",{staticClass:"footer_navigation--item",on:{click:function(a){return t.openInNewTab("http://www.huadingweiye.com/mtlzm/")}}},[a("a",{staticClass:"footer_navigation--link"},[t._v("煤炭类照明")])]),a("li",{staticClass:"footer_navigation--item",on:{click:function(a){return t.openInNewTab("http://www.huadingweiye.com/shgklzm/")}}},[a("a",{staticClass:"footer_navigation--link"},[t._v("石化港口类照明")])])])])]),t._m(0),t._m(1)]),t._m(2)])])},_=[function(){var t=this,a=t._self._c;return a("div",{staticClass:"am-u-md-6"},[a("div",{staticClass:"footer_main--column"},[a("strong",{staticClass:"footer_main--column_title"},[t._v("关于我们")]),a("div",{staticClass:"footer_about"},[a("img",{staticClass:"ewm-img",attrs:{src:s(1378),alt:"扫一扫关注我们"}}),a("p",{staticClass:"footer_about--text"},[t._v(" 山东华鼎伟业能源科技股份有限公司是在全球能源危机日益突出，人类环保节能意识日渐增强的历史时期，由几名清华学子秉承“自强不息，厚德载物”的精神于2007年1月16日发起创建。2015年成功在(新三板)挂牌上市。股票简称：华鼎伟业，股票代码：832736。 ")])])])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"am-u-md-3"},[a("div",{staticClass:"footer_main--column"},[a("strong",{staticClass:"footer_main--column_title"},[t._v("联系详情")]),a("ul",{staticClass:"footer_contact_info"},[a("li",{staticClass:"footer_contact_info--item"},[a("i",{staticClass:"am-icon-phone"}),a("span",[t._v("人力资源：0535-6762977")])]),a("li",{staticClass:"footer_contact_info--item"},[a("i",{staticClass:"am-icon-map-marker"}),a("span",[t._v("山东省烟台市高新区创业路55号")])]),a("li",{staticClass:"footer_contact_info--item"},[a("i",{staticClass:"am-icon-envelope"}),a("span",[t._v("E-mail：hdwychina@163.com")])])])])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"footer-copyright"},[t._v(" Copyright © "),a("a",{attrs:{href:"http://www.huadingweiye.com/",target:"_blank"}},[t._v("山东华鼎伟业能源科技有限公司")]),t._v(" All Rights Reserved.   "),a("a",{attrs:{href:"https://beian.mps.gov.cn/#/query/webSearch",target:"_blank"}},[a("img",{staticStyle:{"vertical-align":"text-bottom"},attrs:{src:s(1495),alt:""}}),t._v("鲁ICP备17020895号-6")])])}],f={name:"Footer",methods:{openInNewTab(t){window.open(t,"_blank")}}},p=f,g=(0,d.Z)(p,v,_,!1,null,"f816e812",null),h=g.exports,C={name:"Layout",components:{Header:m,Footer:h}},w=C,y=(0,d.Z)(w,e,i,!1,null,"5a00a089",null),b=y.exports},7013:function(t,a,s){s.r(a),s.d(a,{default:function(){return d}});var e=function(){var t=this,a=t._self._c;return a("Layout",[a("div",{staticClass:"layout-container",staticStyle:{width:"100%"}},[a("div",{staticClass:"page-header",staticStyle:{"max-height":"14px"}}),a("div",{staticClass:"breadcrumb-box"},[a("div",{staticClass:"am-container"},[a("ol",{staticClass:"am-breadcrumb"},[a("li",[a("router-link",{attrs:{to:"/news"}},[t._v("公司动态")])],1),a("li",{staticClass:"am-active"},[t._v("文章详情")])])])])]),a("div",{staticClass:"section"},[a("div",{staticClass:"container",staticStyle:{"max-width":"1160px"}},[a("div",{staticClass:"section--header"},[a("h2",{staticClass:"section--title"},[t._v(t._s(t.article.title))]),a("p",{staticClass:"section--description"},[t._v(t._s(t.article.introduction))])]),a("div",{staticClass:"join-container"},[a("div",{staticClass:"am-g"},[a("div",{staticClass:"am-u-md-3"},[a("div",{staticClass:"careers--articles"},[a("div",{staticClass:"careers_articles"},t._l(t.recentArticles,(function(s,e){return a("div",{key:e,staticClass:"careers_article"},[a("div",{staticClass:"image"},[a("img",{staticStyle:{height:"160px"},attrs:{src:s.cover,alt:""}})]),a("h3",{staticClass:"careers_article--title"},[t._v(t._s(s.title))]),a("div",{staticClass:"careers_article--text"},[t._v(t._s(s.introduction))]),a("div",{staticClass:"careers_article--footer"},[a("router-link",{staticClass:"link",attrs:{to:{name:"newsDetails",params:{newsId:s.articleId}}}},[t._v("查看更多")])],1)])})),0)])]),a("div",{staticClass:"am-u-md-9"},[a("div",{staticClass:"careers--vacancies"},[a("div",{staticClass:"am-panel-group",attrs:{id:"accordion"}},[a("div",{staticClass:"am-panel am-panel-default"},[a("div",{staticClass:"am-panel-hd"},[a("h4",{staticClass:"am-panel-title",attrs:{"data-am-collapse":"{parent: '#accordion', target: '#do-not-say-1'}"}},[t._v(" 作者："+t._s(t.article.author)+"      /      发布时间："+t._s(t.article.createTime)+" ")])]),a("div",{staticClass:"am-panel-collapse am-collapse am-in"},[a("div",{staticClass:"am-panel-bd"},[a("div",{staticClass:"vacancies--item_content js-accordion--pane_content",domProps:{innerHTML:t._s(t.article.contentHtml)}})])])])])])])])])])])])},i=[],c=s(5884),r={name:"NewsDetailsView",components:{Layout:c.Z},data(){return{article:{},recentArticles:[]}},mounted(){this.getArticleByArticleId(this.$route.params.newsId)},methods:{getArticleByArticleId(t){this.getRequest(`/findArticleByArticleId/${t}`).then((a=>{a&&(this.article=a.data.data,this.getRecentArticle(t))}))},getRecentArticle(t){this.getRequest(`/findRecentArticle/${t}`).then((t=>{t&&(this.recentArticles=t.data.data)}))}}},n=r,l=s(1001),o=(0,l.Z)(n,e,i,!1,null,"e807f88e",null),d=o.exports},1495:function(t,a,s){t.exports=s.p+"img/gawb.ef881569.png"},1378:function(t,a,s){t.exports=s.p+"img/ewm.4cfef4ed.jpg"},7794:function(t,a,s){t.exports=s.p+"img/logo-huadingzhilian.268c600b.png"}}]);
//# sourceMappingURL=374.1829c15a.js.map