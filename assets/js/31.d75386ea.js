(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{473:function(t,s,n){"use strict";n.r(s);var a=n(0),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("div",{staticClass:"custom-block tip"},[n("p",[t._v("基本概念\nrem是CSS3新增的相对长度单位，是指相对于根元素html的font-size计算值的大小。简单可理解为屏幕宽度的百分比。\n原理")]),t._v(" "),n("p",[t._v("计算方法：（html的font-size） * （设置的rem的值） = （实际的px）")]),t._v(" "),n("p",[t._v("屏幕width\nhtml的font-size（都填100为了方便，这样的话要多少px就填（多少/100）的rem就好了）\n实际rem\n实际px")]),t._v(" "),n("p",[t._v("7...")])]),t._v(" "),n("h2",{attrs:{id:"基本概念"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#基本概念"}},[t._v("#")]),t._v(" 基本概念")]),t._v(" "),n("p",[t._v("rem是CSS3新增的相对长度单位，是指相对于根元素html的font-size计算值的大小。简单可理解为屏幕宽度的百分比。")]),t._v(" "),n("h2",{attrs:{id:"原理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#原理"}},[t._v("#")]),t._v(" 原理")]),t._v(" "),n("blockquote",[n("p",[t._v("计算方法：（html的font-size） * （设置的rem的值） = （实际的px）")])]),t._v(" "),n("hr"),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("屏幕width")]),t._v(" "),n("th",[t._v("html的font-size"),n("br"),t._v("（都填100为了方便，这样的话要多少px就填（多少/100）的rem就好了）")]),t._v(" "),n("th",[t._v("实际rem")]),t._v(" "),n("th",[t._v("实际px")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("750")]),t._v(" "),n("td",[t._v("100")]),t._v(" "),n("td",[t._v("7.5rem")]),t._v(" "),n("td",[t._v("750px（满屏）")])]),t._v(" "),n("tr",[n("td",[t._v("640")]),t._v(" "),n("td",[t._v("100")]),t._v(" "),n("td",[t._v("6.4rem")]),t._v(" "),n("td",[t._v("640px（满屏）")])]),t._v(" "),n("tr",[n("td",[t._v("640")]),t._v(" "),n("td",[t._v("要求的未知数")]),t._v(" "),n("td",[t._v("7.5rem")]),t._v(" "),n("td",[t._v("640px（满屏）")])])])]),t._v(" "),n("p",[t._v("然而，我们想要的是，设置7.5rem的话，在所有手机上都是满屏的。\n那么首先我们需要根据不同显示屏生成一个动态的 "),n("em",[n("strong",[t._v("html的font-size")])]),t._v(" 。")]),t._v(" "),n("hr"),t._v(" "),n("p",[t._v("开始计算（难度：小学数学）\n我们以750px的屏宽为基准（也就是设计稿给我们的width是750px），那么设置7.5rem则为满屏，我们要在640px的屏宽上设置7.5rem也满屏，需要的根font-size是多少呢？\n答：看上表第一行和第三行列出两个等式\n"),n("em",[n("strong",[t._v("100*7.5=750")])]),t._v(" "),n("em",[n("strong",[t._v("(font-size)*7.5=640")])])]),t._v(" "),n("p",[t._v("${750} \\over {100}$ = ${640} \\over {font-size}$")]),t._v(" "),n("p",[t._v("html 的 font-size = ${100*640} \\over {750}$ = ${640} \\over {7.5}$")]),t._v(" "),n("p",[t._v("又因为这个640是动态的，代表的显示屏的宽度，所以我们用"),n("code",[t._v("window.innerWidth")]),t._v(" 来代替，那么就得到了一个函数")]),t._v(" "),n("div",{staticClass:"language-javascript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[t._v("window"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("onresize "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" r"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("r")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" winW "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" window"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerWidth"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 屏宽")]),t._v("\n\tdocument"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementsByTagName")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'html'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fontSize "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("winW"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("7.5")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'px'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("r")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br")])]),n("p",[t._v("这就是早期的设置 rem 的根 font-size ，自从 css3 的 vw 出来之后就简单多了，把 "),n("code",[t._v("window.innerWidth")]),t._v(" 换成 "),n("code",[t._v("100vw")]),t._v(" 就好啦")]),t._v(" "),n("div",{staticClass:"language-css line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[n("span",{pre:!0,attrs:{class:"token selector"}},[t._v("html")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("calc")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("100vw/7.5"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 上面的window.innerWidth换成了 100vw */")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br")])]),n("p",[t._v("设计稿的宽度变为640的话，只需要把上面那个7.5换为6.4就可以啦~")])])}),[],!1,null,null,null);s.default=e.exports}}]);