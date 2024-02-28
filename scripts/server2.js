import http from 'http'
import fs from 'fs'
import {updateJSONFile, writeMdFile} from './index.js'

var documentRoot = '/Users/tojoy/vitepress/saole/docs';
const updateJSONFilePath = '/.vitepress/configs/sidebar.json'
//需要访问的文件的存放目录

//开启服务，监听8783端口
//端口号最好为6000以上
const app = http.createServer((req,res)=>{
  var url = req.url;
  //客户端输入的url，例如如果输入localhost:8888/index.html
  //那么这里的url == /index.html

  var file = documentRoot + url;
  // console.log(file,'-url-');

  writeMdFile(file).then((msg)=>{
    console.log(msg,'--msg')
    const updateFilePath = documentRoot + updateJSONFilePath;
    const route =  { "text": "test", "link": "/guide/test" }
    updateJSONFile(updateFilePath,{key:"guide",route})

    fs.readFile( file , function(err,data){
      /*
       一参为文件路径
       二参为回调函数
        回调函数的一参为读取错误返回的信息，返回空就没有错误
        二参为读取成功返回的文本内容
      */
      if(err){
        res.writeHeader(404,{
          'content-type' : 'text/html;charset="utf-8"'
        });
        res.write('<h1>404错误</h1><p>你要找的页面不存在</p>');
        res.end();
      }else{
        res.writeHeader(200,{
          'Content-Type': 'text/plain'
          // 'content-type' : 'text/html;charset="utf-8"'
        });
        res.write(data);//将index.html显示在客户端
        res.end();

      }

    });

  })
}).listen(8783)
console.log('服务器开启成功');
