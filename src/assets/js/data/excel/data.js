import { reactive } from "vue";
import {
  postSelectList,
  candidatePersonSelectList,
} from "@/assets/js/data/select-data/post-search-data";

// 获得选择器的值
const selectData = reactive([
  {
    isSelect: true,
    selectList: postSelectList,
  },
  {
    isSelect: true,
    selectList: candidatePersonSelectList,
  },
  {
    isSelect: false,
    selectList: null,
  },
]);

const getSelectData = (title) => {
    console.log(title)
  if (title === '职位进展分析') {
    return selectData.filter(
      (Element) => Element.selectList === candidatePersonSelectList
    );
  } else if (title === '招聘团队效率分析') {
    return selectData.filter((Element) => Element.isSelect === false);
  } else {
    return selectData.filter(
      (Element) => Element.selectList === postSelectList
    );
  }
};

export { getSelectData };
