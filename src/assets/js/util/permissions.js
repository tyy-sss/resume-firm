import store from "@/store"
/**
 * 设置权限判断
 * @param {属性名} data 
 * @returns 
 */
const isPermission =(data)=>{
    const permission = store.state.permission.permissionsList;
    console.log(permission,"权限")
    if(permission === null){
        return false;
    }
    return permission.hasOwnProperty(data)
}
export { isPermission }