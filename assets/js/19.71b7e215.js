(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{455:function(s,t,n){"use strict";n.r(t);var a=n(0),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("div",{staticClass:"custom-block tip"},[n("p",[s._v("<?php")]),s._v(" "),n("p",[s._v("// 1. 通过代码设置时区，更推荐\ndate_default_timezone_set('PRC');\n// 2. 通过配置文件设置时区，php.ini\n// date.timezone = PRC")]),s._v(" "),n("p",[s._v("// // time 获取到的是 秒数为单位的时间戳\n// echo time();")]),s._v(" "),n("p",[s._v("// echo '<br>';\n// // 格式化一个时间戳\n// // 第...")])]),s._v(" "),n("div",{staticClass:"language-php line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[n("span",{pre:!0,attrs:{class:"token php language-php"}},[n("span",{pre:!0,attrs:{class:"token delimiter important"}},[s._v("<?php")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 1. 通过代码设置时区，更推荐")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("date_default_timezone_set")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'PRC'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 2. 通过配置文件设置时区，php.ini")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// date.timezone = PRC")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// // time 获取到的是 秒数为单位的时间戳")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// echo time();")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// echo '<br>';")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// // 格式化一个时间戳")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// // 第一个参数是一个时间格式")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// // 第二个参数是一个时间戳")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// // 默认时间戳获取的就是格林威治时间")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// echo date('Y-m-d H:i:s', time());")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$str")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'2017-10-22 15:18:58'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 对已有时间做格式化")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// strtotime 可以用来将一个有格式的时间字符串 转换为一个 时间戳")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$timestamp")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("strtotime")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$str")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 注意单引号字符串问题")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'Y年m月d日<b\\r>H:i:s'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$timestamp")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);