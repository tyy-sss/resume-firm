
// 把职位下拉框数据给出对应的值
const getRecruitTimeValue = (data) =>{
    switch(data){
        case "在招":
            return 1;
        case "已结束":
            return 0;
        case "不限":
            return -1;
    }
}
export { getRecruitTimeValue }