import adminMenu from "../config/stage/menu"
import { config } from "shelljs"
const homeRouter=[]

// 深度遍历配置的菜单
function deepTravel(menu,func){
    if(Array.isArray(menu)){
        menu.forEach(subMenu=>{
            deepTravel(subMenu,func)
        })
    }else if(menu.children){
        menu.children.forEach(subMenu=>{
            deepTravel(subMenu,func)
        })
    }else{
        func(menu)
    }
}

deepTravel(adminMenu,config=>{
    if(config.type=="view"){
        const viewRouter = {}
        viewRouter.path = config.route
        viewRouter.name = config.name
        viewRouter.component = ()=>import(`@/components/${config.filePath}`)
        viewRouter.meta={
            title:config.title,
            icon:config.icon,
        }
        homeRouter.push(viewRouter)
    }

})

export default homeRouter