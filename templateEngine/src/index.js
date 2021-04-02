
import parseTempToToken from './parseTemToToken.js';
import renderTemplate from './renderTemplate.js';


// 全局提供SSG_TemplateEngine对象
window.SSG_templateEngine = {
    // 渲染方法
    render(templateStr, data) {
        // 调用parseTempToToken函数，让模板字符串变成tokens数组
        var tokens = parseTempToToken(templateStr);
        // 调用renderTemplate函数，让tokens数组变为dom字符串
        var domStr = renderTemplate(tokens, data)
        console.log('domStr:\n', domStr)
        return domStr;
    }
    
}