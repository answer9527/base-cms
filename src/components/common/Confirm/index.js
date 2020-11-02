import Vue from "vue"
import Confirm from "./index.vue"
const createConfirm = (component,props)=>{
    const Ctor = Vue.extend(component)
    const comp = new Ctor({'propsData':props})
    comp.$mount()
    document.body.append(comp.$el)
    comp.remove = ()=>{
        document.body.removeChild(comp.$el)
        comp.$destroy()
    }
    return comp
}
export default{
    install(){
        Vue.prototype.$confirmAlert = title =>{
            return createConfirm(Confirm,{"title":title})._create()
        }
    }
}