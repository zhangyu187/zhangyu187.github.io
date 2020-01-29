(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{467:function(s,t,a){"use strict";a.r(t);var n=a(0),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("div",{staticClass:"custom-block tip"},[a("p",[s._v("PHP 5.4.0起， CLI SAPI 提供了一个内置的Web服务器。\n这个内置的Web服务器主要用于本地开发使用，不可用于线上产品环境。\n启动\ncd project\n// 启动\nphp -S localhost:8000\n// 启动时指定根目录\nphp -S localhost:8000 -t foo/")]),s._v(" "),a("p",[s._v("访问\nhttp://localhost:8000/\nhttp://localhost:8...")])]),s._v(" "),a("p",[s._v("PHP 5.4.0起， CLI SAPI 提供了一个内置的Web服务器。\n这个内置的Web服务器主要用于本地开发使用，不可用于线上产品环境。")]),s._v(" "),a("h2",{attrs:{id:"启动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动"}},[s._v("#")]),s._v(" 启动")]),s._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[s._v("cd project\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 启动")]),s._v("\nphp "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("S")]),s._v(" localhost"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8000")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 启动时指定根目录")]),s._v("\nphp "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("S")]),s._v(" localhost"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8000")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("t foo"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h2",{attrs:{id:"访问"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#访问"}},[s._v("#")]),s._v(" 访问")]),s._v(" "),a("p",[a("code",[s._v("http://localhost:8000/")]),s._v(" "),a("code",[s._v("http://localhost:8000/index.php")])]),s._v(" "),a("h2",{attrs:{id:"使用路由"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用路由"}},[s._v("#")]),s._v(" 使用路由")]),s._v(" "),a("p",[s._v("请求图片直接显示图片，请求HTML则显示“Welcome to PHP”")]),s._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token php language-php"}},[a("span",{pre:!0,attrs:{class:"token delimiter important"}},[s._v("<?php")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// router.php")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("preg_match")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'/\\.(?:png|jpg|jpeg|gif)$/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$_SERVER")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[s._v('"REQUEST_URI"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean constant"}},[s._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 直接返回请求的文件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[s._v('"<p>Welcome to PHP</p>"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token delimiter important"}},[s._v("?>")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[a("code",[s._v("php -S localhost:8000 router.php")])])])}),[],!1,null,null,null);t.default=e.exports}}]);