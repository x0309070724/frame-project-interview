const sum = (a, b) => a + b

// 新的 API
Promise.resolve(100).then(data => data);

// 新的 API
[10, 20, 30].includes(20)

// 语法，符合 ES5 语法规范
// 不处理模块化（webpack）

// babel-polyfill会污染全局环境，如果只是自己的系统，没有关系
// 污染全局环境
// window.Promise1 = function() {}
// Array.prototype.includes1 = function () {}

// babel-runtime不会污染全局环境，开发第三方库一定要使用babel-runtime
// 使用方
// window.Promise = 'abc'
// Array.prototype.includes = 100
