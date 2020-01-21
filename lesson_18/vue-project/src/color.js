export default {
    // el - элемент, к которому привязывается директива
    // bindings - содержит все св-ва, которые передаются внутрь директивы
    // vnode - (virtual node) содержит объект виртуального дерева, где будет храниться директива
    bind(el, bindings, vnode) {

        // получаем параметр директивы
        const args = bindings.arg
        // получаем значение
        el.style[args] = bindings.value;
    }
}