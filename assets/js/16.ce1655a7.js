(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{443:function(s,e,a){"use strict";a.r(e);var r=a(0),n=Object(r.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("div",{staticClass:"custom-block tip"},[a("p",[s._v("目标\n使用 php 版本切换工具随意切换 php@5.6 和最新的 php@7.3\n安装版本控制工具php-version\nbrew tap wilmoore/formulae\nbrew install php-version")]),s._v(" "),a("p",[s._v("将以下命令放到 ~/. 最后一行")]),s._v(" "),a("h1",{attrs:{id:"homebrew-recommended"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#homebrew-recommended"}},[s._v("#")]),s._v(" Homebrew (recommended)")]),s._v(" "),a("p",[s._v("source $(brew --prefix php-version)/php-ver...")])]),s._v(" "),a("h2",{attrs:{id:"目标"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#目标"}},[s._v("#")]),s._v(" 目标")]),s._v(" "),a("p",[s._v("使用 php 版本切换工具随意切换 php@5.6 和最新的 php@7.3")]),s._v(" "),a("h2",{attrs:{id:"安装版本控制工具php-version"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装版本控制工具php-version"}},[s._v("#")]),s._v(" 安装版本控制工具php-version")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("brew tap wilmoore/formulae\nbrew "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" php-version\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("将以下命令放到 ~/. 最后一行")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Homebrew (recommended)")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("brew --prefix php-version"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("/php-version.sh\nphp-version "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("执行：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" ~/.zshrc\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("这样就安装完成了，试试使用命令：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看可用的php版本")]),s._v("\nphp-version\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 切换到某个版本")]),s._v("\nphp-version "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("version"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h2",{attrs:{id:"安装php5-6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装php5-6"}},[s._v("#")]),s._v(" 安装php5.6")]),s._v(" "),a("p",[s._v("由于历史项目用到了 php5.6.31 版本，而 homebrew 官方又在 2018-01-19 的时候宣布移除 Homebrew/php 库，导致不能通过 homebrew 安装 PHP 历史版本，在网上找到了别的方法安装")]),s._v(" "),a("p",[s._v("安装")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("brew tap exolnet/homebrew-deprecated\nbrew "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" php@5.6 -vvv\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("测试")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ php-version\n  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.6")]),s._v(".40\n* "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7.3")]),s._v(".1\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20191119151314794.png",alt:"在这里插入图片描述"}})]),s._v(" "),a("hr"),s._v(" "),a("p",[s._v("补充：phpbrew 好像更好。。")])])}),[],!1,null,null,null);e.default=n.exports}}]);