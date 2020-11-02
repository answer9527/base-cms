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
        keepAlive:true,
        pathArr:["系统首页"]
        
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
        pathArr:["用户相关"],
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
                keepAlive:true,
                pathArr:["用户相关","用户管理"],
            }
        ]
    },
    {
        route:null,
        name:"Classic",
        title:"文章管理",
        type:"folder",
        icon:"el-icon-film",
        filePath:null,
        order:null,
        isNav:true,
        keepAlive:true,
        pathArr:["文章管理"],
        children:[
            {
                route:"/classic/list",
                name:"ClassicList",
                title:"文章列表",
                type:"view",
                icon:"el-icon-s-operation",
                filePath:"page/home/classic/classicList",
                order:null,
                isNav:true,
                keepAlive:true,
                pathArr:["文章管理","文章列表"],
            },
            {
                route:"/classic/detail/:id",
                name:"ClassicDetail",
                title:"文章详情",
                type:"view",
                icon:"",
                filePath:"page/home/classic/classicDetail",
                order:null,
                isNav:false,
                keepAlive:false,
                pathArr:["文章管理","文章详情"],
            },
            {
                route:"/classic/add",
                name:"ClassicAdd",
                title:"文章发布",
                type:"view",
                icon:"el-icon-edit-outline",
                filePath:"page/home/classic/classicAdd",
                order:null,
                isNav:true,
                keepAlive:true,
                pathArr:["文章管理","文章发布"],
            }
        ]
    },
    {
        route:null,
        name:"Hole",
        title:"树洞管理",
        type:"folder",
        icon:"el-icon-umbrella",
        filePath:null,
        order:null,
        isNav:true,
        keepAlive:true,
        pathArr:["树洞管理"],
        children:[
            {
                route:"/hole/holelist",
                name:"HoleList",
                title:"树洞列表",
                type:"view",
                icon:"el-icon-document",
                filePath:"page/home/hole/holeList",
                order:null,
                isNav:true,
                keepAlive:true,
                pathArr:["树洞管理","树洞列表"],
            }
        ]
    },
    {
        route:"/home/version",
        name:"Version",
        title:"版本管理",
        type:"view",
        icon:"el-icon-info",
        filePath:"page/home/version/version",
        order:null,
        isNav:true,
        keepAlive:true,
        pathArr:["版本管理"], 
    }
]

export default adminMenu