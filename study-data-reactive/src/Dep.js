var uid = 0;
export default class Dep {
    constructor() {
        // console.log('我是dep类的构造器')
        this.id = uid++;
        // 用数组存储自己的订阅者。subs是英语subscribes订阅者的意思。
        // 这个数组里面放的是Watcher的实例
        this.subs = [];
    }
    // 添加订阅
    addSub (sub) {
        this.subs.push(sub)
    }
    // 添加依赖
    depend () {
        // Dep.target 就是一个我们自己指定的全局的位置，你用window.target也行，只要全局唯一，没有歧义就行
        if (Dep.target) {
            // getter函数就会从全局唯一的这个地方读取正在读取数据的Watcher，并把这个Watcher收集到Dep当中
            this.addSub(Dep.target)
        }
    }
    // 通知更新
    notify () {
        console.log('我是notify')
        // 浅克隆一份
        const subs = this.subs.slice();
        // 遍历
        for (let i = 0, l = subs.length; i < l; i++) {
            subs[i].update()
        }
    }
}