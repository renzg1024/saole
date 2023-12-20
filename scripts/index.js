/*
 1. fs.stat 检测是文件还是目录(目录 文件是否存在)
 2. fs.mkdir 创建目录 （创建之前先判断是否存在）
 3. fs.writeFile 写入文件(文件不存在就创建,但不能创建目录)
 4. fs.appendFile 写入追加文件
 5.fs.readFile 读取文件
 6.fs.readdir 读取目录
 7.fs.rename 重命名
 8. fs.rmdir 删除目录
 9. fs.unlink 删除文件
*/

import fs from 'fs'
import path from 'path'
const proPath = path.resolve(process.cwd(), './')
const dirPath = '/docs/guide'
const updateFilePath = 'docs/.vitepress/configs/sidebar.json'

//2. fs.mkdir 创建目录
// fs.mkdir('css',function(error){
//   if(error){
//     console.log(error);
//     return false;
//   }
//   console.log('创建目录成功');
// })
function getFileContentStr(filePath) {
  const config_path = path.resolve(proPath, filePath)
  console.log(config_path,'-config_path')
  return fs.readFileSync(config_path, 'utf-8')
}
// const config_str = getFileContentStr(updateFilePath)
//
// console.log(config_str,'--config_str')

function updateJSONFile(filePath, {key,route}) {
  try {
    console.log(`正在读取 ${filePath} 计划修改：`, {key,route})
    const readStr = getFileContentStr(filePath)
    const readJSON = JSON.parse(readStr)

    const posPath =  readJSON[`/${key}/`].find(pathItem=>{
      return pathItem.key === key
    })
    if (posPath){
      posPath.items.push(route)
    }

    console.log(`读取  ${filePath} 成功，正在更新  ${filePath}`)
    fs.writeFileSync(filePath, JSON.stringify(readJSON, null, 2), 'utf-8')
    console.log(`更新 ${filePath} 成功`)
  } catch (e) {
    console.error(`更新 ${filePath} 失败`, e)
    process.exit()
  }
}

const route =  { "text": "test", "link": "/guide/test" }

//3. fs.writeFile 写入文件（会覆盖之前的内容）（文件不存在就创建） utf8参数可以省略
fs.writeFile(`${proPath}${dirPath}/test.md`,'# hello nodejs',function(error){
  if(error){
    console.log(error);
    return false;
  }
  console.log('写入成功');
  updateJSONFile(updateFilePath,{key:"guide",route})

})

/*所以在文件指定位置更新内容
* 先读取文件内容，查询到指定位置，更新内容，再把内容重新写入到文件中*/
