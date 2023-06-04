// 把Sat Oct 23 2010 00:00:00 GMT+0800 (中国标准时间)变成yyyy-mm-dd 00:00:00

//实现方法 @return 返回2个值，一个是带时分秒，另一个不带。

const formatTimeForChinaTime = (data,isTime) =>{
    let datetime = new Date(data);
    let year = datetime.getFullYear();
    let month = datetime.getMonth();
    let date = datetime.getDate();
    let hour = datetime.getHours();
    let minute = datetime.getMinutes();
    let second = datetime.getSeconds();
    let result1 = year + 
                 '-' + 
                 ((month + 1) >= 10 ? (month + 1) : '0' + (month + 1)) + 
                 '-' + 
                 ((date + 1) < 10 ? '0' + date : date) + 
                 ' ' + 
                 ((hour + 1) < 10 ? '0' + hour : hour) +
                 ':' + 
                 ((minute + 1) < 10 ? '0' + minute : minute) + 
                 ':' + 
                 ((second + 1) < 10 ? '0' + second : second);
    let result2 = year + 
                 '-' + 
                 ((month + 1) >= 10 ? (month + 1) : '0' + (month + 1)) + 
                 '-' + 
                 ((date + 1) < 10 ? '0' + date : date);
    let result = isTime ? result1: result2;
    return result;
}

export { formatTimeForChinaTime }