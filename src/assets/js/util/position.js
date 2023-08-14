// 处理职位的js文件
const handlePositionForMacth = (data) => {
  const list = [];
  for (let item in data) {
    const element = data[item];
    list.push({
      pkPositionId: element.pkPositionId,
      positionName: element.positionName,
      description: element.description,
      type: typeList[item % 4],
    });
  }
  return list;
};
const typeList = ["primary", "success", "warning", "danger"];
export { handlePositionForMacth };
