/**
 *公司接口
 */
import request from "./request";
/**
 *  得到公司的消息
 * @returns
 */
export const getCompanyMessage = () => {
  return request({
    url: "/auth/get-company-message",
    method: "get",
  });
};
