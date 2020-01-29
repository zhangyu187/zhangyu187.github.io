(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{486:function(t,s,a){"use strict";a.r(s);var n=a(0),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("div",{staticClass:"custom-block tip"},[a("p",[t._v("原型链：\n当调用一个对象的某个方法时，首先对象会查找本身有没有设置这个属性，如果找不到的话，其实每个对象都有一个__proto__属性，指向创建这个对象的构造函数的原型（这里也就是Object.prototype）,原型也就是一个对象，也有自己的属性和__proto__,如果原型还找不到，就这样沿着__proto__一直找下去，这就构成了js的原型链。\n例如：\nString.prototype.p...")])]),t._v(" "),a("h3",{attrs:{id:"原型链："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原型链："}},[t._v("#")]),t._v(" 原型链：")]),t._v(" "),a("p",[t._v("当调用一个对象的某个方法时，首先对象会查找本身有没有设置这个属性，如果找不到的话，其实每个对象都有一个__proto__属性，指向创建这个对象的构造函数的原型（这里也就是Object.prototype）,原型也就是一个对象，也有自己的属性和__proto__,如果原型还找不到，就这样沿着__proto__一直找下去，这就构成了js的原型链。")]),t._v(" "),a("h3",{attrs:{id:"举例："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#举例："}},[t._v("#")]),t._v(" 举例：")]),t._v(" "),a("p",[t._v("例1：")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("var str = new String('abc')\nstr.__proto__  ==> String.prototype（原型）\nString.prototype ==> 包含String的那些方法和属性，还有__proto__，指向Object\nString.prototype.__proto__.constructor  ===> Object\nObject.prototype.__proto__ ===> null\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[t._v("例2：")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("function Animal (name) {\n\tthis.name = name\n}\nvar cat = new Animal('小猫')\ncat.__proto__ === Animal.prototype //true\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[t._v("原型：Animal.prototype（原型也是一个对象，所以也叫原型对象）\n解释：所有的函数（函数是对象，函数对象有prototype，普通对象没有）都有一个名为prototype（原型）的属性，这个属性是一个指针，指向一个原型对象，而这个对象的用途是包含可以有特定类型的所有实例共享的属性和方法。（并且有一个constructors（构造器）属性，指回原来的构造函数）")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Animal.prototype\n\tconstructor: ƒ Animal(name)\n\t__proto__: Object\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/2019071314510585.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80Mzk3MjQzNw==,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})])])}),[],!1,null,null,null);s.default=r.exports}}]);