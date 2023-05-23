"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[804],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>c});var l=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,l,a=function(e,n){if(null==e)return{};var t,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=l.createContext({}),u=function(e){var n=l.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=u(e.components);return l.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},m=l.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=u(t),c=a,k=m["".concat(p,".").concat(c)]||m[c]||d[c]||r;return t?l.createElement(k,i(i({ref:n},s),{},{components:t})):l.createElement(k,i({ref:n},s))}));function c(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=m;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<r;u++)i[u]=t[u];return l.createElement.apply(null,i)}return l.createElement.apply(null,t)}m.displayName="MDXCreateElement"},581:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var l=t(87462),a=(t(67294),t(3905));const r={title:"builtin",sidebar_position:1},i=void 0,o={unversionedId:"reference/lang/model/builtin",id:"reference/lang/model/builtin",title:"builtin",description:"KCL provides a list of built-in functions that are automatically loaded and can be used directly without providing any module name. For example, print is a function provided by a widely used built-in module.",source:"@site/docs/reference/lang/model/builtin.md",sourceDirName:"reference/lang/model",slug:"/reference/lang/model/builtin",permalink:"/docs/reference/lang/model/builtin",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/reference/lang/model/builtin.md",tags:[],version:"current",lastUpdatedBy:"Peefy",lastUpdatedAt:1684845731,formattedLastUpdatedAt:"5/23/2023",sidebarPosition:1,frontMatter:{title:"builtin",sidebar_position:1},sidebar:"reference",previous:{title:"Overview",permalink:"/docs/reference/lang/model/overview"},next:{title:"base64",permalink:"/docs/reference/lang/model/base64"}},p={},u=[{value:"Type Conversion Functions",id:"type-conversion-functions",level:2},{value:"print",id:"print",level:2},{value:"multiplyof",id:"multiplyof",level:2},{value:"isunique",id:"isunique",level:2},{value:"len",id:"len",level:2},{value:"abs",id:"abs",level:2},{value:"all_true",id:"all_true",level:2},{value:"any_true",id:"any_true",level:2},{value:"bin",id:"bin",level:2},{value:"hex",id:"hex",level:2},{value:"oct",id:"oct",level:2},{value:"option",id:"option",level:2},{value:"ord",id:"ord",level:2},{value:"sorted",id:"sorted",level:2},{value:"range",id:"range",level:2},{value:"min",id:"min",level:2},{value:"max",id:"max",level:2},{value:"sum",id:"sum",level:2},{value:"pow",id:"pow",level:2},{value:"round",id:"round",level:2},{value:"typeof",id:"typeof",level:2},{value:"zip",id:"zip",level:2}],s={toc:u};function d(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,l.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"KCL provides a list of built-in functions that are automatically loaded and can be used directly without providing any module name. For example, ",(0,a.kt)("inlineCode",{parentName:"p"},"print")," is a function provided by a widely used built-in module."),(0,a.kt)("h2",{id:"type-conversion-functions"},"Type Conversion Functions"),(0,a.kt)("p",null,"KCL's ",(0,a.kt)("inlineCode",{parentName:"p"},"bool"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"int"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"float"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"str"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"list"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"dict")," and other types have built-in conversion functions of the same name. Among them, ",(0,a.kt)("inlineCode",{parentName:"p"},"int")," can not only be used to truncate floating-point numbers, but also can be used to convert strings to integers (decimal when parsing, other values can also be specified)."),(0,a.kt)("p",null,"The following are common uses of type-related functions:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},'b1 = bool(1)  # true\nb2 = bool(1.5)  # true\nb3 = bool("true")  # true\nb4 = bool("")  # false\nb5 = bool([])  # false\nb6 = bool({})  # false\n\ni1 = int("11")  # 11\ni2 = int("11", base=8)  # 9\ni3 = int("11", base=2)  # 3\n\nf1 = float(1)  # 1.0\nf2 = float("1.5")  # 1.5\n\ns1 = str(1)  # 1\n\nl1 = list([1, 2, 3])\n')),(0,a.kt)("h2",{id:"print"},"print"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"print(*args:any, end:str='\\n')")),(0,a.kt)("p",null,"The built-in print function, which provides different types of variable parameter printing, adds a newline at the end by default. The following are common usages:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"print(\"hello KCL\")\nprint()\nprint(None, end=':')\nprint(None)\nprint(True)\nprint(False)\nprint(123)\nprint(123.0)\nprint('abc ${123}')\nprint(\"abc ${456}\")\nprint([1,'a', True])\nprint(1,'a', True)\nprint({})\nprint({a: 123})\n")),(0,a.kt)("p",null,"The output is:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"hello KCL\n\nNone:None\nTrue\nFalse\n123\n123.0\nabc 123\nabc 456\n[1, 'a', True]\n1 a True\n{}\n{'a': 123}\n")),(0,a.kt)("p",null,"If you do not want the default newline, you can re-specify the ending string with the ",(0,a.kt)("inlineCode",{parentName:"p"},"end=''")," named parameter."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"print(\"Hello KCL\", end='')\n")),(0,a.kt)("h2",{id:"multiplyof"},"multiplyof"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"multiplyof(a:int, b:int) -> bool")),(0,a.kt)("p",null,"Check whether the integer ",(0,a.kt)("inlineCode",{parentName:"p"},"a")," is an integer multiple of ",(0,a.kt)("inlineCode",{parentName:"p"},"b"),", and return a boolean value:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"print(multiplyof(2, 1))  # True\nprint(multiplyof(1, 2))  # False\nprint(multiplyof(0, 1))  # True\nprint(multiplyof(0, 2))  # True\nprint(multiplyof(1, 0))  # Error\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"0")," is a multiple of any number. But ",(0,a.kt)("inlineCode",{parentName:"p"},"b")," cannot be ",(0,a.kt)("inlineCode",{parentName:"p"},"0"),", otherwise an exception will be thrown."),(0,a.kt)("h2",{id:"isunique"},"isunique"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"isunique(list: [any]) -> bool")),(0,a.kt)("p",null,"Check if there are duplicate elements in an array, and return a boolean value:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"print(isunique([]))     # True\nprint(isunique([1]))    # True\nprint(isunique([1, 2])) # True\n\nprint(isunique([1, 1]))     # False\nprint(isunique([1, 1.0]))   # False\nprint(isunique([1.1, 1.1])) # False\n\nprint(isunique(['abc', \"abc\"]))      # False\nprint(isunique(['abc', \"a${'bc'}\"])) # False\n")),(0,a.kt)("p",null,"It should be noted that integers and floating-point numbers ignore the type difference and judge whether the values are equal."),(0,a.kt)("h2",{id:"len"},"len"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"len(x: str | [any] | {:}) -> int")),(0,a.kt)("p",null,"Return the length of strings, lists, and arrays:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'print(len([])) # 0\nprint(len({})) # 0\n\nprint(len([1]))       # 1\nprint(len({abc:123})) # 1\n\nprint("abc") # 3\n')),(0,a.kt)("p",null,"Note: Calculating lengths on ",(0,a.kt)("inlineCode",{parentName:"p"},"schema")," objects is not supported."),(0,a.kt)("h2",{id:"abs"},"abs"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"abs(x: number) -> number")),(0,a.kt)("p",null,"Calculate the absolute value of ",(0,a.kt)("inlineCode",{parentName:"p"},"x"),"."),(0,a.kt)("h2",{id:"all_true"},"all_true"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"all_true(x:str|[]|{:}) -> bool")),(0,a.kt)("p",null,"Judging that all elements of a list or dictionary class are true, the usage is as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"print(all_true([])) # True\nprint(all_true({})) # True\n\nprint(all_true([True])) # True\nprint(all_true([1]))    # True\n\nprint(all_true([True, False])) # False\nprint(all_true([True, None]))  # False\n")),(0,a.kt)("p",null,"Returns true when the list is empty."),(0,a.kt)("h2",{id:"any_true"},"any_true"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"any_true(x:str|[]|{:}) -> bool")),(0,a.kt)("p",null,"Judging that at least one element in the iterable object is true, the usage is as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"print(any_true([]))  # False\nprint(any_true([1])) # True\n")),(0,a.kt)("h2",{id:"bin"},"bin"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"bin(x:number) -> str")),(0,a.kt)("p",null,"A string that returns the binary representation of an integer, used as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"print(bin(8)) # 0b1000\n")),(0,a.kt)("h2",{id:"hex"},"hex"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"hex(number)")),(0,a.kt)("p",null,"A string that returns the hexadecimal representation of an integer, used as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"print(hex(18)) # 0x12\n")),(0,a.kt)("h2",{id:"oct"},"oct"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"oct(number)")),(0,a.kt)("p",null,"A string that returns the octal representation of an integer, used as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"print(oct(10)) # 0o12\n")),(0,a.kt)("h2",{id:"option"},"option"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"option(key:str, type:str='', required=False, default=None, help=\"\") -> any")),(0,a.kt)("p",null,"Gets the value of the command line top level argument input."),(0,a.kt)("h2",{id:"ord"},"ord"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ord(c) -> int")),(0,a.kt)("p",null,"Get the Unicode code point value of the character, the usage is as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"print(ord('A')) # 65\nprint(ord('B')) # 66\nprint(ord('C')) # 67\n")),(0,a.kt)("h2",{id:"sorted"},"sorted"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"sorted(x: []) -> []")),(0,a.kt)("p",null,"Returns the sorted list, used as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"_a = []\n_b = [2, 1]\n\n_c = sorted(_a)\n_d = sorted(_b)\n\nprint(_a) # []\nprint(_b) # [2, 1]\nprint(_c) # []\nprint(_d) # [1, 2]\n")),(0,a.kt)("h2",{id:"range"},"range"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"range(start:int, end:int, step=1) -> [int]")),(0,a.kt)("p",null,"Generates an iterable list, used as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"print(range(1,5))      # [1, 2, 3, 4]\nprint(range(1,5, 2))   # [1, 3]\nprint(range(5, 1, -1)) # [5, 4, 3, 2]\n")),(0,a.kt)("h2",{id:"min"},"min"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"min(x:[number]) -> number")),(0,a.kt)("p",null,"Returns the smallest element in the list, used as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"print(min([1,2])) # 1\nprint(min([2,1])) # 1\n")),(0,a.kt)("h2",{id:"max"},"max"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"max(x:[number]) -> number")),(0,a.kt)("p",null,"Returns the largest element in the list, used as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"print(max([1,2])) # 2\nprint(max([2,1])) # 2\n")),(0,a.kt)("h2",{id:"sum"},"sum"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"sum(x:[number], init_value=0) -> number")),(0,a.kt)("p",null,"Returns the sum of all elements in the list, used as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"print(sum([1,2]))       # 3\nprint(sum([2,1], 1000)) # 1003\n")),(0,a.kt)("h2",{id:"pow"},"pow"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"pow(x: number, y: number, z: number = None) -> number")),(0,a.kt)("p",null,"Computes ",(0,a.kt)("inlineCode",{parentName:"p"},"x**y"),", or ",(0,a.kt)("inlineCode",{parentName:"p"},"(x**y)%z")," if ",(0,a.kt)("inlineCode",{parentName:"p"},"z")," is not empty, supports integer and floating point numbers, used as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"print(pow(2,3))    # 8\nprint(pow(2, 3, 5)) # 8%5 == 3\n\nprint(pow(2, 0.5)) # 1.414\n")),(0,a.kt)("h2",{id:"round"},"round"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"round(number: int|float, ndigits:int|None) -> float | int")),(0,a.kt)("p",null,"Returns the rounded approximation of ",(0,a.kt)("inlineCode",{parentName:"p"},"number"),". If ",(0,a.kt)("inlineCode",{parentName:"p"},"ndigits")," is not ",(0,a.kt)("inlineCode",{parentName:"p"},"None")," returns a float with the specified number of decimal places (cannot be negative), otherwise returns an integer structure, used as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"print(round(1))   # 1\nprint(round(1.4)) # 1\nprint(round(1.5)) # 2\n\nprint(round(1.5555, 1)) # 1.6\nprint(round(1.5555, 2)) # 1.56\n\nprint(round(1.5555))    # 2\nprint(round(1.5555, 0)) # 2.0\n")),(0,a.kt)("p",null,"It should be noted that the difference between ",(0,a.kt)("inlineCode",{parentName:"p"},"ndigits")," being ",(0,a.kt)("inlineCode",{parentName:"p"},"None")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"0")," is that the prefix returns ",(0,a.kt)("inlineCode",{parentName:"p"},"int")," type, the latter returns ",(0,a.kt)("inlineCode",{parentName:"p"},"float")," type."),(0,a.kt)("h2",{id:"typeof"},"typeof"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"typeof(x: any, full_name: bool = False) -> str")),(0,a.kt)("p",null,"Output the type of ",(0,a.kt)("inlineCode",{parentName:"p"},"x")," at runtime. When the ",(0,a.kt)("inlineCode",{parentName:"p"},"full_name")," parameter is set to ",(0,a.kt)("inlineCode",{parentName:"p"},"True"),", the package prefix of the form ",(0,a.kt)("inlineCode",{parentName:"p"},"pkg.schema")," will be returned, used as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import sub as pkg\n\n_a = 1\n\nt1 = typeof(_a)\nt2 = typeof("abc")\n\nschema Person:\n    name?: any\n\n_x1 = Person{}\nt3 = typeof(_x1)\n\n_x2 = pkg.Person{}\nt4 = typeof(_x2)\nt5 = typeof(_x2, full_name=True)\n\nt6 = typeof(_x1, full_name=True)\n\n# \u8f93\u51fa\n# t1: int\n# t2: str\n# t3: Person\n# t4: Person\n# t5: sub.Person\n# t6: __main__.Person\n')),(0,a.kt)("h2",{id:"zip"},"zip"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"zip(*args: str|list|dict)")),(0,a.kt)("p",null,"It is used to take an iterable object as a parameter, pack the corresponding elements in the object into tuples, and then return a list composed of these tuples, used as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"a = zip([0, 1, 2], [3, 4, 5])\nb = zip([0, 1], [3, 4, 5])\nc = zip([0, 1, 2], [3, 4, 5, 6])\n\n# \u8f93\u51fa\n# a:\n# - - 0\n#   - 3\n# - - 1\n#   - 4\n# - - 2\n#   - 5\n# b:\n# - - 0\n#   - 3\n# - - 1\n#   - 4\n# c:\n# - - 0\n#   - 3\n# - - 1\n#   - 4\n# - - 2\n")))}d.isMDXComponent=!0}}]);