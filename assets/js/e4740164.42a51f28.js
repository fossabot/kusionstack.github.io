"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5378],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=o,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||r;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},38563:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=n(87462),o=(n(67294),n(3905));const r={sidebar_position:5},i="Docgen",l={unversionedId:"reference/cli/kcl/docgen",id:"reference/cli/kcl/docgen",title:"Docgen",description:"The KCL Docgen tool supports extracting model documents from KCL source code and supports multiple output formats: JSON, YAML and Markdown. This article introduces the document specification of the KCL language, gives an example of how to use the KCL Docgen tool to extract documents, and shows the process of importing localization documents.",source:"@site/docs/reference/cli/kcl/docgen.md",sourceDirName:"reference/cli/kcl",slug:"/reference/cli/kcl/docgen",permalink:"/docs/reference/cli/kcl/docgen",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/reference/cli/kcl/docgen.md",tags:[],version:"current",lastUpdatedBy:"chai2010",lastUpdatedAt:1663850372,formattedLastUpdatedAt:"9/22/2022",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"reference",previous:{title:"Validation",permalink:"/docs/reference/cli/kcl/vet"},next:{title:"Test Tool",permalink:"/docs/reference/cli/kcl/test"}},c={},s=[{value:"1. Document Specification of KCL",id:"1-document-specification-of-kcl",level:2},{value:"2. Generating Documentation From KCL",id:"2-generating-documentation-from-kcl",level:2},{value:"3. Add Documentation for Localized Languages",id:"3-add-documentation-for-localized-languages",level:2},{value:"4. Appendix",id:"4-appendix",level:2},{value:"1. Concept of reST",id:"1-concept-of-rest",level:3}],p={toc:s};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"docgen"},"Docgen"),(0,o.kt)("p",null,"The KCL Docgen tool supports extracting model documents from KCL source code and supports multiple output formats: JSON, YAML and Markdown. This article introduces the document specification of the KCL language, gives an example of how to use the KCL Docgen tool to extract documents, and shows the process of importing localization documents."),(0,o.kt)("h2",{id:"1-document-specification-of-kcl"},"1. Document Specification of KCL"),(0,o.kt)("p",null,"The documentation of the KCL file mainly contains the following two parts:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Current KCL Module document: description of the current KCL file"),(0,o.kt)("li",{parentName:"ul"},"All schema documents contained in the KCL file: a description of the current schema, including schema description, schema attribute descriptions, and Examples. The specific format is as follows:")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Schema description"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-python"},'"""This is a brief description of the Schema\n"""\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Description of each attribute of Schema: including attribute description, attribute type, default value, optional or required"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-python"},'"""\nAttributes\n----------\nx : type, default is a, optional.\n    Description of parameter `x`.\ny : type, default is b, required.\n    Description of parameter `y`.\n"""\n')),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"----------")," indicates that ",(0,o.kt)("inlineCode",{parentName:"p"},"Attributes")," is a title (the length of the symbol ",(0,o.kt)("inlineCode",{parentName:"p"},"-")," is the same as the length of the title), the attribute name and attribute type are separated by a colon ",(0,o.kt)("inlineCode",{parentName:"p"},":"),", the description of the attribute is written on another line with indentation. The default value of the attribute is separated by a comma ",(0,o.kt)("inlineCode",{parentName:"p"},",")," after the attribute type, and it is written in the form of ",(0,o.kt)("inlineCode",{parentName:"p"},"default is {default value}"),". In addition, it is necessary to indicate whether the attribute is optional/required. Write ",(0,o.kt)("inlineCode",{parentName:"p"},"optional")," after the default value for an optional attribute, and write ",(0,o.kt)("inlineCode",{parentName:"p"},"required")," after the default value for a required attribute.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Examples"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-python"},'"""\nExamples\n--------\nval = Schema {\n    name = "Alice"\n    age = 18\n}\n"""\n')))),(0,o.kt)("p",null,"In addition, the KCL docstring syntax should use a subset of the ",(0,o.kt)("a",{parentName:"p",href:"https://docutils.sourceforge.io/rst.html"},"re-structured text (reST)")," and be rendered using the ",(0,o.kt)("a",{parentName:"p",href:"https://www.sphinx-doc.org/en/master/"},"Sphinx"),"."),(0,o.kt)("h2",{id:"2-generating-documentation-from-kcl"},"2. Generating Documentation From KCL"),(0,o.kt)("p",null,"Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"kcl-doc generate")," command to extract documentation from a user-specified file or directory and output it to the specified directory."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Args"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"usage: kcl-doc generate [-h] [--format YAML] [-o OUTPUT] [--r]\n                        [--i18n-locale LOCALE] [--repo-url REPO_URL]\n                        [files [files ...]]\n\npositional arguments:\n  files                 KCL file paths. If there's more than one files to\n                        generate, separate them by space\n\noptional arguments:\n  -h, --help            show this help message and exit\n  --format YAML         Doc file format, support YAML, JSON and MARKDOWN.\n                        Defaults to MARKDOWN\n  -o OUTPUT, --output-path OUTPUT\n                        Specify the output directory. Defaults to ./kcl_doc\n  --r, -R, --recursive  Search directory recursively\n  --i18n-locale LOCALE  I18n locale, e.g.: zh, zh_cn, en, en_AS. Defaults to\n                        en\n  --repo-url REPO_URL   The source code repository url. It will displayed in\n                        the generated doc to link to the source code.\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Extract documents from the file(s) and output them to the specified directory"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-text"},"kcl-doc generate your_config.k your_another_config.k -o your_docs_output_dir\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"From the specified directory, recursively find the KCL file(s) and extract the documentation"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-text"},"kcl-doc generate your_config_dir -r -o your_docs_output_dir\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"When generating documentation, specify the source code repository address. The generated documentation will contain links to source files"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-text"},"kcl-doc generate your_config.k -o your_docs_output_dir --repo-url https://url/to/source_code\n")))),(0,o.kt)("h2",{id:"3-add-documentation-for-localized-languages"},"3. Add Documentation for Localized Languages"),(0,o.kt)("p",null,"As shown before, by default, the documentation extracted by the documentation generation tool is based on the content of the source docstring, and thus the language of the documentation depends on the language in which the docstring was written. If you need to add localized language documentation to the source file, you can follow the steps below:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Initialize the i18n configuration file. This step generates the corresponding i18n configuration file based on the specified KCL file. The file format can be JSON/YAML, and the default is YAML. The output profile name will end in the specified target localization language"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-text"},"kcl-doc init-i18n your_config.k --format JSON --i18n-locale your_target_locale\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Modify the i18n configuration file and update each doc field in your locale language")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Generate localized documents from the modified i18n configuration file"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-text"},"kcl-doc generate your_config_dir --i18n-locale your_target_locale --format Markdown\n")),(0,o.kt)("p",{parentName:"li"},"Next, a simple example is used to demonstrate the process of adding localized language documents."),(0,o.kt)("p",{parentName:"li"},"3.1 Prepare the KCL file, such as ",(0,o.kt)("inlineCode",{parentName:"p"},"server.k"),":"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-python"},'schema Server:\n    """Server is the common user interface for long-running\n    services adopting the best practice of Kubernetes.\n\n    Attributes\n    ----------\n    workloadType : str, default is "Deployment", required\n        Use this attribute to specify which kind of long-running service you want.\n        Valid values: Deployment, CafeDeployment.\n        See also: kusion_models/core/v1/workload_metadata.k.\n    name : str, required\n        A Server-level attribute.\n        The name of the long-running service.\n        See also: kusion_models/core/v1/metadata.k.\n    labels : {str:str}, optional\n        A Server-level attribute.\n        The labels of the long-running service.\n        See also: kusion_models/core/v1/metadata.k.\n\n    Examples\n    ----------------------\n    myCustomApp = AppConfiguration {\n        name = "componentName"\n    }\n    """\n\n    workloadType: str = "Deployment"\n    name: str\n    labels?: {str: str}\n')),(0,o.kt)("p",{parentName:"li"},"3.2 Get the initialized i18n configuration file from the ",(0,o.kt)("inlineCode",{parentName:"p"},"server.k"),". For example, if you want to add Chinese documents to it, specify the format of the generated configuration file as YAML"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-text"},"kcl init-i18n server.k --format YAML --i18n-locale zh_cn\n")),(0,o.kt)("p",{parentName:"li"},"  This command will create the directory ",(0,o.kt)("inlineCode",{parentName:"p"},"kcl_doc")," under the current directory and generate the i18n configuration file ",(0,o.kt)("inlineCode",{parentName:"p"},"kcl_doc/i18n_server_zh_cn.yaml"),". Its contents are as follows:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"name: server\nrelative_path: ./server.k\nschemas:\n- name: Server\n  doc: |\n    Server is the common user interface for long-running\n    services adopting the best practice of Kubernetes.\n  attributes:\n  - name: workloadType\n    doc: |\n      Use this attribute to specify which kind of long-running service you want.\n      Valid values: Deployment, CafeDeployment.\n      See also: kusion_models/core/v1/workload_metadata.k.\n    type:\n      type_str: str\n      type_category: BUILTIN\n      builtin_type: STRING\n    default_value: '\"Deployment\"'\n    is_optional: false\n  - name: name\n    doc: |\n      A Server-level attribute.\n      The name of the long-running service.\n      See also: kusion_models/core/v1/metadata.k.\n    type:\n      type_str: str\n      type_category: BUILTIN\n      builtin_type: STRING\n    is_optional: false\n    default_value: ''\n  - name: labels\n    doc: |\n      A Server-level attribute.\n      The labels of the long-running service.\n      See also: kusion_models/core/v1/metadata.k.\n    type:\n      type_str: '{str: str}'\n      type_category: DICT\n      dict_type:\n        key_type:\n          type_str: str\n          type_category: BUILTIN\n          builtin_type: STRING\n        value_type:\n          type_str: str\n          type_category: BUILTIN\n          builtin_type: STRING\n    is_optional: true\n    default_value: ''\n  examples: |\n    myCustomApp = AppConfiguration {\n        name = \"componentName\"\n    }\ndoc: ''\nsource_code_url: ''\n")),(0,o.kt)("p",{parentName:"li"},"3.3 Modify all the ",(0,o.kt)("inlineCode",{parentName:"p"},"doc")," fields to the Chinese description. The modified configuration is as follows:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"name: server\nrelative_path: ./server.k\nschemas:\n- name: Server\n  doc: |\n    Server \u6a21\u578b\u5b9a\u4e49\u4e86\u91c7\u7528 Kubernetes \u6700\u4f73\u5b9e\u8df5\u7684\u6301\u7eed\u8fd0\u884c\u7684\u670d\u52a1\u7684\u901a\u7528\u914d\u7f6e\u63a5\u53e3\n  attributes:\n  - name: workloadType\n    doc: |\n      workloadType \u5c5e\u6027\u5b9a\u4e49\u4e86\u670d\u52a1\u7684\u7c7b\u578b\uff0c\u662f\u670d\u52a1\u7ea7\u522b\u7684\u5c5e\u6027\u3002\u5408\u6cd5\u7684\u53d6\u503c\u6709\uff1aDeployment, CafeDeployment.\n      \u53e6\u8bf7\u67e5\u770b\uff1akusion_models/core/v1/workload_metadata.k.\n    type:\n      type_str: str\n      type_category: BUILTIN\n      builtin_type: STRING\n    default_value: '\"Deployment\"'\n    is_optional: false\n  - name: name\n    doc: |\n      name \u4e3a\u670d\u52a1\u7684\u540d\u79f0\uff0c\u662f\u670d\u52a1\u7ea7\u522b\u7684\u5c5e\u6027\u3002\n      \u53e6\u8bf7\u67e5\u770b\uff1akusion_models/core/v1/metadata.k.\n    type:\n      type_str: str\n      type_category: BUILTIN\n      builtin_type: STRING\n    is_optional: false\n    default_value: ''\n  - name: labels\n    doc: |\n      labels \u4e3a\u670d\u52a1\u7684\u6807\u7b7e\uff0c\u662f\u670d\u52a1\u7ea7\u522b\u7684\u5c5e\u6027\u3002\n      \u53e6\u8bf7\u67e5\u770b\uff1akusion_models/core/v1/metadata.k.\n    type:\n      type_str: '{str: str}'\n      type_category: DICT\n      dict_type:\n        key_type:\n          type_str: str\n          type_category: BUILTIN\n          builtin_type: STRING\n        value_type:\n          type_str: str\n          type_category: BUILTIN\n          builtin_type: STRING\n    is_optional: true\n    default_value: ''\n  examples: |\n    myCustomApp = AppConfiguration {\n        name = \"componentName\"\n    }\ndoc: ''\nsource_code_url: ''\n")),(0,o.kt)("p",{parentName:"li"},"3.4 Based on the modified i18n configuration, generate documents in localized languages. Execute the following command to output the Chinese document ",(0,o.kt)("inlineCode",{parentName:"p"},"kcl_doc/doc_server_zh_cn.md"),". The commands and the contents of the generated documents are as follows:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-text"},"kcl-doc generate server.k --i18n-locale zh_cn --format Markdown\n")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-markdown"},'# server\n## Schema Server\nServer \u6a21\u578b\u5b9a\u4e49\u4e86\u91c7\u7528 Kubernetes \u6700\u4f73\u5b9e\u8df5\u7684\u6301\u7eed\u8fd0\u884c\u7684\u670d\u52a1\u7684\u901a\u7528\u914d\u7f6e\u63a5\u53e3\n\n### Attributes\n|Name and Description|Type|Default Value|Required|\n|--------------------|----|-------------|--------|\n|**workloadType**<br />workloadType \u5c5e\u6027\u5b9a\u4e49\u4e86\u670d\u52a1\u7684\u7c7b\u578b\uff0c\u662f\u670d\u52a1\u7ea7\u522b\u7684\u5c5e\u6027\u3002\u5408\u6cd5\u7684\u53d6\u503c\u6709\uff1aDeployment, CafeDeployment.<br />\u53e6\u8bf7\u67e5\u770b\uff1akusion_models/core/v1/workload_metadata.k.|str|"Deployment"|**required**|\n|**name**<br />name \u4e3a\u670d\u52a1\u7684\u540d\u79f0\uff0c\u662f\u670d\u52a1\u7ea7\u522b\u7684\u5c5e\u6027\u3002<br />\u53e6\u8bf7\u67e5\u770b\uff1akusion_models/core/v1/metadata.k.|str|Undefined|**required**|\n|**labels**<br />labels \u4e3a\u670d\u52a1\u7684\u6807\u7b7e\uff0c\u662f\u670d\u52a1\u7ea7\u522b\u7684\u5c5e\u6027\u3002<br />\u53e6\u8bf7\u67e5\u770b\uff1akusion_models/core/v1/metadata.k.|{str: str}|Undefined|optional|\n### Examples\n```\nmyCustomApp = AppConfiguration {\n    name = "componentName"\n}\n```\n\n\x3c!-- Auto generated by kcl-doc tool, please do not edit. --\x3e\n')))),(0,o.kt)("h2",{id:"4-appendix"},"4. Appendix"),(0,o.kt)("h3",{id:"1-concept-of-rest"},"1. Concept of reST"),(0,o.kt)("p",null,"For documents in reST format, paragraphs and indentation are important, new paragraphs are marked with blank lines, and indentation is the indentation indicated in the output. Font styles can be expressed as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"*","Italic","*"),(0,o.kt)("li",{parentName:"ul"},"*","*","Bold","*","*"),(0,o.kt)("li",{parentName:"ul"},"`","`","Monospaced","`","`")),(0,o.kt)("p",null,"Refer to ",(0,o.kt)("a",{parentName:"p",href:"https://docutils.sourceforge.io/rst.html"},"reST")," for more information."))}d.isMDXComponent=!0}}]);