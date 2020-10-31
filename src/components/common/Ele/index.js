import {Message,Menu,Submenu,MenuItem,MenuItemGroup,Tooltip,Dropdown,DropdownMenu,DropdownItem,Breadcrumb,BreadcrumbItem,Autocomplete,Table,TableColumn,Avatar,Button,Tag, Pagination, Image, Form, FormItem,Input, Switch, Select, Option, Col, Row, Dialog} from "element-ui"
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
        Vue.use(Table)
        Vue.use(TableColumn)
        Vue.use(Avatar)
        Vue.use(Button)
        Vue.use(Tag)
        Vue.use(Pagination)
        Vue.use(Image)
        Vue.use(Form)
        Vue.use(FormItem)
        Vue.use(Input)
        Vue.use(Switch)
        Vue.use(Select)
        Vue.use(Option)
        Vue.use(Col)
        Vue.use(Row)
        Vue.use(Dialog)
    }
}