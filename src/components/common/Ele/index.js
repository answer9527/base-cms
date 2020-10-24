import {Menu,Submenu,MenuItem,Dropdown,DropdownMenu,DropdownItem,Breadcrumb,BreadcrumbItem} from "element-ui"
export default{
    install(Vue){
        Vue.use(Menu)
        Vue.use(Submenu)
        Vue.use(MenuItem)
        Vue.use(Dropdown)
        Vue.use(DropdownMenu)
        Vue.use(DropdownItem)
        Vue.use(Breadcrumb)
        Vue.use(BreadcrumbItem)
    }
}