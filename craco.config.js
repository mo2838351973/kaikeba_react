//配置完成后记得重启下
const { addDecoratorsLegacy } = require("customize-cra");
module.exports = override(
  addDecoratorsLegacy()//配置装饰器 
);