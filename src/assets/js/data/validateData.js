//验证判断
// 手机号码必须输入
const validatePhone = (rule, value, callback) => {
  var regex =
    /^(?:(?:\+|00)86)?1[3-9]\d{9}$|^852[569]\d{7}$|^853[68]\d{7}$|^886\d{9,10}$/;
  if (value == "") {
    callback(new Error("请输入电话"));
  } else if (!regex.test(value.toString())) {
    callback(new Error("请输入正确的电话"));
  } else {
    callback();
  }
};
// 手机号码不是必须输入的
const validatePhoneOne = (rule, value, callback) => {
  var regex =
    /^(?:(?:\+|00)86)?1[3-9]\d{9}$|^852[569]\d{7}$|^853[68]\d{7}$|^886\d{9,10}$/;
  if (value == "") {
    callback();
  } else if (!regex.test(value.toString())) {
    callback(new Error("请输入正确的电话"));
  } else {
    callback();
  }
};

const validatePass = (rule, value, callback) => {
  var regex = /^(?=.*[a-zA-Z])(?=.*\d).{6,12}$/;
  if (!value) {
    callback(new Error("请输入密码"));
  } else if (!regex.test(value.toString())) {
    console.log(value);
    callback(new Error("密码至少包含字母,数字,密码位数6位~12位"));
  } else {
    callback();
  }
};

export { validatePhone, validatePhoneOne, validatePass };
