/**
 * 正式和测试域名管理
 */
var baseDomain = "https://dev-dos.32teeth.cn/"
// var baseBrushDomain = 'https://dev-os.32teeth.cn/'
var debug = true
if (!debug) {
  // 正式环境
  baseDomain = 'https://dos.32teeth.cn/'
//   baseBrushDomain = 'https://os.32teeth.cn/'
}

export const BaseURL = {
    baseDomain: baseDomain,
    debug: debug
}