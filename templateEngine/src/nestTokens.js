/**
 * 函数的功能是折叠tokens，将#和/之间的tokens能够整合起来，作为它的下标为3的项
*/
export default function nestTokens(tokens) {
    // 结果数组
    let nestTokens = [];
    // 栈结构，存放小tokens，栈顶（靠近端口的，最新进入的）的tokens数组中当前操作的这个tokens小数组
    var sections = [];
    // 收集器，初始指向nestTokens,引用类型值，所以指向的是同一个数组
    // 收集器的指向会变化，当遇见#的时候，收集器会指向这个token的下标为2的新数组
    let collector = nestTokens;
    for(let i = 0; i < tokens.length; i++) {
        let token = tokens[i];
        switch(token[0]) {
            case '#':
                // 收集器中放入这个token
                collector.push(token);
                // 入栈
                sections.push(token);
                // 收集器要换内容, 给token添加下标为2的项，并让收集器指向它
                collector = token[2] = [];
                break;
            case '/':
                // 出栈，pop()会返回刚刚弹出的项
                let section_pop = sections.pop();
                // 改变收集器为栈结构队尾（队尾是栈顶）那项的下标为2的数组
                collector = sections.length > 0 ? sections[sections.length - 1][2] : nestTokens;
                break;
           default:
               collector.push(token)
               break;
        }
    }
    return nestTokens;
}