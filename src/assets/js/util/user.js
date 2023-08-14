// 用户消息
const getUserNews = ()=>{
    const user = JSON.parse(sessionStorage.getItem("user"));
    console.log(user,"user")
    return user;
}
export { getUserNews }