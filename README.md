
<p align="center"><img src="https://cfm40oi5g6hasssesujg.baseapi.memfiredb.com/storage/v1/object/public/files/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20240410143245.png" width="128" hegiht="128" alt="logo"></a>

# 🎬 模仿知乎的简约小程序

🎉 此小程序模仿知乎的简约小程序，小程序的后端服务使用[MemFire Cloud](https://www.memfiredb.com/?from=XIMgJh)的baas服务,前端使用微信小程序。
其中使用到的[MemFire Cloud](https://www.memfiredb.com/?from=XIMgJh)功能包括：
- 云数据库：存储小程序所有数据表的信息。
- 即时API：创建数据表时会自动生成 API。
- 对象存储：存储小程序中物料的图片。

MemFire Cloud入学门槛低，开发应用简单方便，详情请[查看](https://www.memfiredb.com/?from=XIMgJh)

## 🔌 使用方法

1. 克隆或下载此项目
2. 在微信开发者工具导入此项目
3. 域名设置
- 如果有自己的APPID，可以使用自己的APPID，并在微信后台添加可信域名 `https://sesine.com/` 和 `https://sesine.com/mina/api/`。
- 如果没有自己的APPID，可以使用测试APPID。开发时勾选 `不校验合法域名、web-view（业务域名）、TLS 版本以及 HTTPS 证书` 的选项，如果需要在手机上预览，并且出现api无法访问的问题。请在 [微信小程序测试号管理](https://developers.weixin.qq.com/sandbox) 里面添加上一条中的二个可信域名。








