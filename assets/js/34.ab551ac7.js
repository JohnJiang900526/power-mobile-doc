(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{391:function(t,s,o){"use strict";o.r(s);var e=o(44),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,o=t._self._c||s;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"power-configedit-exe-app配置信息"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#power-configedit-exe-app配置信息"}},[t._v("#")]),t._v(" Power.ConfigEdit.exe APP配置信息")]),t._v(" "),o("p",[t._v("在PowerMobile2部署的过程中，经常会遇到站点进入不去的问题，明明网页上已经可以访问了，\n但是在APP中还是进不去，如果你的配置环节也出现了这个问题，那么下面说的内容一定要注意。\n双击项目根目录下的Power.ConfigEdit.exe文件，切换到APP配置的tab页签，界面如图：")]),t._v(" "),o("img",{attrs:{src:t.$withBase("/img/图片3.png")}}),t._v(" "),o("p",[t._v("上图中，红色区域有三个配置项。")]),t._v(" "),o("div",{staticClass:"custom-block danger"},[o("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),o("p",[o("strong",[t._v("第一个是 APP首页标题")]),t._v("：这个要配置上，这个和PowerMobile2的界面没什么关系，但是后端接口\n会需要这个字段，有可能在将来APP的优化过程中也会用到此字段。")]),t._v(" "),o("p",[o("strong",[t._v("第二个是 APP首页副标题")]),t._v("：副标题和上面的标题一样，不在赘述。")]),t._v(" "),o("p",[o("strong",[t._v("第三个是 LOGO图片路径")]),t._v("：此处的配置是经常导致站点进不去的主要原因，\n上图中的路径是http://dev.p3china.com:7109/login-logo.png，\n这个路径一定要在服务端的浏览器中能正确访问，上面的路径，后端解析的时候\n会变成http://127.0.0.1:7109/login-logo.png，所以端口号一定是服务器\n对应站点的真实端口号，不是映射到外部的端口号，在服务器上保证\n类似http://127.0.0.1:7109/login-logo.png这样的链接可以正确访问就可以了，\n如果外部端口号和内部端口号不一致，这里填写的时候一定是内部端口号。")])]),t._v(" "),o("div",{staticClass:"custom-block danger"},[o("p",{staticClass:"custom-block-title"},[t._v("普通人员无法登陆问题")]),t._v(" "),o("p",[t._v("项目上经常出现管理员可以正常登陆，但是普通账号无法登陆。导致这个问题的原因是")]),t._v(" "),o("p",[t._v("/Apps/images 文件夹下面没有 headbackgroud.png 这个图片导致的。")])]),t._v(" "),o("p",[o("strong",[t._v("上面报错截图")]),t._v(" "),o("img",{attrs:{src:t.$withBase("/img/20200605170000.png")}})]),t._v(" "),o("p",[o("strong",[t._v("解决办法：/Apps/images 文件夹下面加一张名为headbackgroud.png的图片。")]),t._v(" "),o("img",{attrs:{src:t.$withBase("/img/20200605170300.png")}})])])}),[],!1,null,null,null);s.default=n.exports}}]);