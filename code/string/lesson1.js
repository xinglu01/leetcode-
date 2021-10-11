// 反转字符串的单词 => 给定一个字符串 将每个单词反转 同时保留空格和单词的初始顺序
// eg: hello world => olleh dlrow
// 解题思路: 首先将每个单词转为数组 在数组内部进行反转 在转为字符串并且保留空格

export default (str) => {
  // 1、将字符串按照空格分割成数组
  // 2、将数组中每个单词反转
  // 3、将数组转为字符串
  return str.split(' ').map((item) => {
    return item.split('').reverse().join('')
  }).join(' ')
}

// export default (str) => {
//   // 1、通过正则将字符串按照空格分割成数组
//   return str.split(/\s/g).map((item) => {
//     return item.split('').reverse().join('')
//   }).join(' ')
// }

// export default (str) => {
//   // 1、字符串方法 match()可在字符串内检索指定的值，或找到一个或多个正则表达式的匹配 返回的是数组 ["Let's", 'take', 'LeetCode', 'contest']。
//   return str.match(/[\w']+/g).map((item) => {
//     return item.split('').reverse().join('')
//   }).join(' ')
// }
