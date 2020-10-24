// route     路由地址
// name      路由的名称
// title     菜单名
// type      view 视图  folder 不可访问的视图
// icon      菜单图标
// filePath  导入的路由的路径
// order     排序
// isNav     是否为菜单导航
// keepAlive 是否缓存
// children  子节点


const adminMenu = [
    {
        route:"/home/dashboard",
        name:"Dashboard",
        title:"系统首页",
        type:"view",
        icon:"el-icon-menu",
        filePath:"page/home/dashboard/index",
        order:null,
        isNav:true,
        keepAlive:true
        
    },
    {
        route:null,
        name:"UserAbout",
        title:"用户相关",
        type:"folder",
        icon:"el-icon-s-custom",
        filePath:"",
        order:null,
        isNav:true,
        keepAlive:true,
        children:[
            {
                route:"/user/list",
                name:"UserList",
                title:"用户管理",
                type:"view",
                icon:"el-icon-setting",
                filePath:"page/home/user/userList",
                order:null,
                isNav:true,
                keepAlive:true
            }
        ]
    },
    {
        route:null,
        name:"Classic",
        title:"classic管理",
        type:"folder",
        icon:"el-icon-film",
        filePath:null,
        order:null,
        isNav:true,
        keepAlive:true,
        children:[
            {
                route:"/classic/list",
                name:"ClassicList",
                title:"classic列表",
                type:"view",
                icon:"el-icon-s-operation",
                filePath:"page/home/classic/classicList",
                order:null,
                isNav:true,
                keepAlive:true
            },
            {
                route:"/classic/detail",
                name:"ClassicDetail",
                title:"classic详情",
                type:"view",
                icon:"",
                filePath:"page/home/classic/classicDetail",
                order:null,
                isNav:false,
                keepAlive:true
            },
            {
                route:"/classic/add",
                name:"ClassicAdd",
                title:"classic发布",
                type:"view",
                icon:"el-icon-edit-outline",
                filePath:"page/home/classic/classicAdd",
                order:null,
                isNav:true,
                keepAlive:false
            }
        ]
    }
]

export default adminMenu