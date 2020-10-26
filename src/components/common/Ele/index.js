import {Message,Menu,Submenu,MenuItem,MenuItemGroup,Tooltip,Dropdown,DropdownMenu,DropdownItem,Breadcrumb,BreadcrumbItem,Autocomplete} from "element-ui"
export default{
    install(Vue){
        Vue.prototype.$message = Message;
        Vue.use(Menu)
        Vue.use(Submenu)
        Vue.use(MenuItem)
        Vue.use(MenuItemGroup)
        Vue.use(Tooltip)
        Vue.use(Dropdown)
        Vue.use(DropdownMenu)
        Vue.use(DropdownItem)
        Vue.use(Breadcrumb)
        Vue.use(BreadcrumbItem)
        Vue.use(Autocomplete)
    }
}