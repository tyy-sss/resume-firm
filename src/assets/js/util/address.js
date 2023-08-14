// 把后端传过来的值转换前端的展示值
const handleAddress = (data) => {
  var list = [];
  const len = data.indexOf('/');
  list[0] = data.slice(0,len);
  list[1] = data.slice(len+1);
  return list;
};
export { handleAddress }