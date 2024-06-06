"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[44826],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),g=i,d=m["".concat(l,".").concat(g)]||m[g]||u[g]||r;return n?a.createElement(d,o(o({ref:t},c),{},{components:n})):a.createElement(d,o({ref:t},c))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2316:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const r={title:"Test Conventions"},o=void 0,s={unversionedId:"developer-guide/conventions/test-conventions",id:"developer-guide/conventions/test-conventions",title:"Test Conventions",description:"Testing Principles",source:"@site/i18n/zh/docusaurus-plugin-content-docs-karpor/current/4-developer-guide/2-conventions/3-test-conventions.md",sourceDirName:"4-developer-guide/2-conventions",slug:"/developer-guide/conventions/test-conventions",permalink:"/zh/karpor/next/developer-guide/conventions/test-conventions",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/edit/main/docs/karpor/4-developer-guide/2-conventions/3-test-conventions.md",tags:[],version:"current",lastUpdatedBy:"elliotxx",lastUpdatedAt:1717665529,formattedLastUpdatedAt:"2024\u5e746\u67086\u65e5",sidebarPosition:3,frontMatter:{title:"Test Conventions"},sidebar:"karpor",previous:{title:"Code Conventions",permalink:"/zh/karpor/next/developer-guide/conventions/code-conventions"},next:{title:"Commit Conventions",permalink:"/zh/karpor/next/developer-guide/conventions/commit-conventions"}},l={},p=[{value:"Testing Principles",id:"testing-principles",level:2},{value:"Technology Selection",id:"technology-selection",level:2},{value:"Ginkgo/Gomega",id:"ginkgogomega",level:3},{value:"Testify",id:"testify",level:3},{value:"Summary",id:"summary",level:3},{value:"Writing Specifications",id:"writing-specifications",level:2},{value:"Test Style",id:"test-style",level:3},{value:"File Naming",id:"file-naming",level:3},{value:"Test Function Naming",id:"test-function-naming",level:3},{value:"Test Function Signature",id:"test-function-signature",level:3},{value:"Test Organization",id:"test-organization",level:3},{value:"Test Coverage",id:"test-coverage",level:3},{value:"Benchmark Tests",id:"benchmark-tests",level:3},{value:"Concurrency Testing",id:"concurrency-testing",level:3},{value:"Test Helper Functions",id:"test-helper-functions",level:3},{value:"Avoid Using Global Variables",id:"avoid-using-global-variables",level:3},{value:"Clear Error Messages",id:"clear-error-messages",level:3}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"testing-principles"},"Testing Principles"),(0,i.kt)("p",null,"In Karpor, we primarily focus on the following three types of tests:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Unit tests: Tests targeting the ",(0,i.kt)("strong",{parentName:"li"},"smallest testable units")," (such as functions, methods, utility classes, etc.)"),(0,i.kt)("li",{parentName:"ul"},"Integration tests: Tests targeting the interaction and integration between ",(0,i.kt)("strong",{parentName:"li"},"multiple units (or modules)")),(0,i.kt)("li",{parentName:"ul"},"End-to-End tests (e2e tests): Tests targeting the ",(0,i.kt)("strong",{parentName:"li"},"entire system's behavior"),", usually requiring the simulation of real user scenarios")),(0,i.kt)("p",null,"Each has its strengths, weaknesses, and suitable scenarios. To achieve a better development experience, we should adhere to the following principles when writing tests."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Testing principles"),"\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A case should only cover one scenario"),(0,i.kt)("li",{parentName:"ul"},"Follow the ",(0,i.kt)("strong",{parentName:"li"},"7-2-1 principle"),", i.e., 70% unit tests, 20% integration tests, and 10% end-to-end tests"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Avoid using Mock frameworks in unit tests unless necessary")," (e.g., ",(0,i.kt)("inlineCode",{parentName:"li"},"golang/mock"),"). If you feel the need to use a Mock framework in unit tests, what you actually need might be integration tests or even end-to-end tests")),(0,i.kt)("h2",{id:"technology-selection"},"Technology Selection"),(0,i.kt)("p",null,"At the current point in time, the most popular testing frameworks in the Go language ecosystem are ",(0,i.kt)("a",{parentName:"p",href:"https://onsi.github.io/ginkgo/"},"Ginkgo"),"/",(0,i.kt)("a",{parentName:"p",href:"https://onsi.github.io/gomega/"},"Gomega")," and ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/stretchr/testify"},"Testify"),". Therefore, this section mainly discusses the characteristics, pros and cons, and the final selection of these two testing frameworks."),(0,i.kt)("h3",{id:"ginkgogomega"},"Ginkgo/Gomega"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Advantages"),":"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"BDD Support"),": Ginkgo is favored by many developers for its support of Behavior-Driven Development (BDD) style. It offers a rich DSL syntax, making test cases more descriptive and readable through keywords like ",(0,i.kt)("inlineCode",{parentName:"li"},"Describe"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Context"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"It"),", etc."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Parallel Execution"),": Ginkgo can execute tests in parallel across different processes, improving the efficiency of test execution."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Rich Matchers"),": Used in conjunction with the Gomega matchers library, it provides a wealth of assertion capabilities, making tests more intuitive and convenient."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Asynchronous Support"),": Ginkgo provides native support for handling complex asynchronous scenarios, reducing the risk of deadlocks and timeouts."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Test Case Organization"),": Supports organizing test cases into Suites for easy management and expansion."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Documentation"),": Ginkgo's ",(0,i.kt)("a",{parentName:"li",href:"http://onsi.github.io/ginkgo/"},"official documentation")," is very detailed, offering guides from beginner to advanced usage.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Disadvantages"),":"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Learning Curve:")," For developers not familiar with BDD, Ginkgo's DSL syntax may take some time to get used to."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Complexity in Parallel Testing:")," Although Ginkgo supports parallel execution, managing resources and environment for parallel tests can introduce additional complexity in some cases.")),(0,i.kt)("h3",{id:"testify"},"Testify"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Advantages"),":"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Simplified API"),": Testify provides a simple and intuitive API, easy to get started with, especially for developers accustomed to the ",(0,i.kt)("inlineCode",{parentName:"li"},"testing")," package."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Mock Support"),": Testify offers powerful Mock functionalities, facilitating the simulation of dependencies and interfaces for unit testing."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Table-Driven Tests"),": Supports table-driven testing, allowing for easy provision of various inputs and expected outputs for the same test function, enhancing test case reusability."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Compatibility with ",(0,i.kt)("inlineCode",{parentName:"strong"},"testing")," Package"),": Testify is highly compatible with the Go standard library's ",(0,i.kt)("inlineCode",{parentName:"li"},"testing")," package, allowing for seamless integration into existing testing workflows."),(0,i.kt)("li",{parentName:"ol"},"Documentation: Testify's ",(0,i.kt)("a",{parentName:"li",href:"https://pkg.go.dev/github.com/stretchr/testify"},"official documentation")," also provides rich introductions on how to use its assertion and mocking functionalities.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Disadvantages"),":"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Lack of BDD Support"),": Testify does not support the BDD style, potentially less intuitive for developers looking to improve test case readability."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Relatively Simple Features"),": Compared to Ginkgo, Testify's features are relatively simple and may not meet some complex testing scenarios' requirements.")),(0,i.kt)("h3",{id:"summary"},"Summary"),(0,i.kt)("p",null,"In short, Ginkgo/Gomega offers better readability and maintainability, producing clean and clear tests, but with a higher learning curve requiring familiarity with BDD style. Testify is simpler, more practical, with a lower learning curve, but as time progresses, the testing code style may become more varied, lowering maintainability."),(0,i.kt)("p",null,"Considering the actual situation of Karpor and the pros and cons of both frameworks, we decide to use these two frameworks in combination:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Use Testify for unit testing, adhering to ",(0,i.kt)("a",{parentName:"li",href:"https://go.dev/wiki/TableDrivenTests"},"Table-Driven Testing")," to constrain the code style and prevent decay;"),(0,i.kt)("li",{parentName:"ul"},"Utilize Ginkgo's BDD features for writing higher-level integration and end-to-end tests;")),(0,i.kt)("p",null,"This combination fully leverages the strengths of both frameworks, improving the overall efficiency, readability, and quality of testing."),(0,i.kt)("h2",{id:"writing-specifications"},"Writing Specifications"),(0,i.kt)("h3",{id:"test-style"},"Test Style"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://go.dev/wiki/TableDrivenTests"},"Table-Driven Testing")," is a best practice for writing test cases, akin to design patterns in programming, and it is also the style recommended by the official Go language. Table-Driven Testing uses tables to provide a variety of inputs and expected outputs, allowing the same test function to verify different scenarios. The advantages of this method are that it increases the reusability of test cases, reduces repetitive code, and makes tests clearer and easier to maintain."),(0,i.kt)("p",null,"While there is no direct syntax support for Table-Driven Testing in Go's ",(0,i.kt)("inlineCode",{parentName:"p"},"testing")," package, it can be emulated by writing helper functions and using anonymous functions."),(0,i.kt)("p",null,"Here is an example of Table-Driven Testing implemented in the Go standard library's ",(0,i.kt)("inlineCode",{parentName:"p"},"fmt")," package:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'var flagtests = []struct {\n    in  string\n    out string\n}{\n    {"%a", "[%a]"},\n    {"%-a", "[%-a]"},\n    {"%+a", "[%+a]"},\n    {"%#a", "[%#a]"},\n    {"% a", "[% a]"},\n    {"%0a", "[%0a]"},\n    {"%1.2a", "[%1.2a]"},\n    {"%-1.2a", "[%-1.2a]"},\n    {"%+1.2a", "[%+1.2a]"},\n    {"%-+1.2a", "[%+-1.2a]"},\n    {"%-+1.2abc", "[%+-1.2a]bc"},\n    {"%-1.2abc", "[%-1.2a]bc"},\n}\nfunc TestFlagParser(t *testing.T) {\n    var flagprinter flagPrinter\n    for _, tt := range flagtests {\n        t.Run(tt.in, func(t *testing.T) {\n            s := Sprintf(tt.in, &flagprinter)\n            if s != tt.out {\n                t.Errorf("got %q, want %q", s, tt.out)\n            }\n        })\n    }\n}\n')),(0,i.kt)("p",null,"It is worth noting that most mainstream IDEs have already integrated ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/cweill/gotests"},"gotests"),", enabling the automatic generation of table-driven style Go unit tests, which I believe can enhance the efficiency of writing your unit tests:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://blog.jetbrains.com/go/2020/03/13/test-driven-development-with-goland/"},"GoLand")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://juandes.com/go-test-vsc/"},"Visual Studio Code"))),(0,i.kt)("h3",{id:"file-naming"},"File Naming"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Specification Content"),"\uff1aTest files should end with ",(0,i.kt)("inlineCode",{parentName:"li"},"_test.go")," to distinguish between test code and production code."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Positive Example"),"\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"xxx_test.go")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Negative Example"),"\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"testFile.go"),"\u3001",(0,i.kt)("inlineCode",{parentName:"li"},"test_xxx.go"))),(0,i.kt)("h3",{id:"test-function-naming"},"Test Function Naming"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Specification"),": The name of the test function should start with ",(0,i.kt)("inlineCode",{parentName:"li"},"Test"),", followed by the name of the function being tested, using camel case notation."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Positive Example"),"\uff1a",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-go"},"func TestAdd(t *testing.T) {\n    // Test logic ...\n}\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Negative Example"),"\uff1a",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-go"},"func TestAddWrong(t *testing.T) {\n    // Test logic ...\n}\n")))),(0,i.kt)("h3",{id:"test-function-signature"},"Test Function Signature"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Specification Content"),": The signature of the test function should be ",(0,i.kt)("inlineCode",{parentName:"li"},"func TestXxx(t *testing.T)"),", where ",(0,i.kt)("inlineCode",{parentName:"li"},"t")," is the test object, of type ",(0,i.kt)("inlineCode",{parentName:"li"},"*testing.T"),", and there should be no other parameters or return values."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Positive Example"),"\uff1a",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-go"},"func TestSubtraction(t *testing.T) {\n    // Test logic ...\n}\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Negative Example"),"\uff1a",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-go"},"func TestSubtraction(value int) {\n    // Test logic ...\n}\n")))),(0,i.kt)("h3",{id:"test-organization"},"Test Organization"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Specification Content"),"\uff1aTest cases should be independent of each other to avoid mutual influence between tests; use sub-tests (",(0,i.kt)("inlineCode",{parentName:"li"},"t.Run"),") to organize complex test scenarios."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Positive Example"),"\uff1a",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-go"},'func TestMathOperations(t *testing.T) {\n    t.Run("Addition", func(t *testing.T) {\n        // Test addition logic ...\n    })\n    t.Run("Subtraction", func(t *testing.T) {\n        // Test subtraction logic ...\n    })\n}\n'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Negative Example"),"\uff1a",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-go"},"func TestMathOperations(t *testing.T) {\n    // Mixed addition and subtraction logic...\n}\n")))),(0,i.kt)("h3",{id:"test-coverage"},"Test Coverage"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Specification Content"),"\uff1aAttention should be paid to test coverage, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"go test -cover")," command to examine the test coverage of the code.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Positive Example"),"\uff1a"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ go test -cover\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Negative Example"),"\uff1a"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ go test # Without checking test coverage\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Note"),": Karpor has wrapped this command as ",(0,i.kt)("inlineCode",{parentName:"p"},"make cover"),", which will output the coverage for each package and total coverage in the command line. If you would like to view the coverage report in the browser, please execute ",(0,i.kt)("inlineCode",{parentName:"p"},"make cover-html"),"."))),(0,i.kt)("h3",{id:"benchmark-tests"},"Benchmark Tests"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Specification Content"),"\uff1aBenchmark test functions should start with ",(0,i.kt)("inlineCode",{parentName:"li"},"Benchmark")," and accept an argument of type ",(0,i.kt)("inlineCode",{parentName:"li"},"*testing.B"),", focusing on performance testing."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Positive Example"),"\uff1a",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-go"},"func BenchmarkAdd(b *testing.B) {\n    for i := 0; i < b.N; i++ {\n        add(1, 1)\n    }\n}\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Negative Example"),"\uff1a",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-go"},"func BenchmarkAddWrong(b *testing.B) {\n    for i := 0; i < 1000; i++ {\n        add(1, 1)\n    }\n}\n")))),(0,i.kt)("h3",{id:"concurrency-testing"},"Concurrency Testing"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Specification Content"),"\uff1aFor concurrent code, appropriate test cases should be written to ensure the correctness of the concurrency logic."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Positive Example"),"\uff1a",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-go"},"func TestConcurrentAccess(t *testing.T) {\n    // Set up concurrent environment ... \n    // Test logic for concurrent access ...\n}\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Negative Example"),"\uff1a",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-go"},"func TestConcurrentAccess(t *testing.T) {\n    // Only test single-thread logic...\n}\n")))),(0,i.kt)("h3",{id:"test-helper-functions"},"Test Helper Functions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Specification Content"),"\uff1aHelper functions can be defined within the test files to help set up the test environment or clean up resources.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Positive Example"),"\uff1a"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-go"},'func setupTest(t *testing.T) {\n    // Set up test environment ...\n}\n\nfunc tearDownTest(t *testing.T) {\n    // Clean up resources ...\n}\n\nfunc TestMyFunction(t *testing.T) {\n    t.Run("TestSetup", func(t *testing.T) {\n        setupTest(t)\n        // Test logic ...\n    })\n}\n'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Negative Example"),"\uff1a"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-go"},"// Directly setting up and cleaning up resources in the test\nfunc TestMyFunction(t *testing.T) {\n    // Set up test environment... \n    // Test logic... \n    // Clean up resources...\n}\n")))),(0,i.kt)("h3",{id:"avoid-using-global-variables"},"Avoid Using Global Variables"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Specification Content"),": Try to avoid using global variables in tests to ensure test independence."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Positive Example"),": Declare and use the necessary variables inside the test function."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Negative Example"),": Declare global variables at the top of the test file.")),(0,i.kt)("h3",{id:"clear-error-messages"},"Clear Error Messages"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Specification Content"),": When a test fails, output clear and understandable error messages to help developers locate the problem."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Positive Example"),": ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'t.Errorf("Expected value %d, but got %d", expected, real)')))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Negative Example"),": ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'t.Errorf("Error occurred")')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'fmt.Println("Error occurred")')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'panic("Error occurred")'))))),(0,i.kt)("p",null,"When a test fails, output clear and understandable error messages to help developers locate the problem."))}u.isMDXComponent=!0}}]);