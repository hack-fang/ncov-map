# 全国新冠病例小区分布图

## UPDATE 2020.2.9

网页各标记点消息来源支持跳转链接，API接口增加 `sourceUrl` 来源链接字段


提供全国范围内的详细数据及来源，同时开放API接口，仅可用于学术科研用途，请勿用于商业用途。可能存在定位不准确问题，烦请告知。


致敬那些奋斗在一线的医疗人员们！


## 预览

在线预览: https://ncov.ahusmart.com/

![TIM截图20200208115710.png](https://i.loli.net/2020/02/08/WXCkU4YZtjQobsr.png)



## 项目依赖

- vuejs
- element-ui
- vue-baidu-map
- axios
- element-china-area-data

## 数据来源

均来源自各大省市卫生健康委员会及官方媒体通道，不收录未经官方证实的来源消息。


## 配置

首先需要申请百度地图密钥(似乎不需要也可以运行,可以先不申请)

### 百度地图AK

- 引用地图需要百度地图密钥，[申请链接](http://lbsyun.baidu.com/apiconsole/key)

- 将申请到的`ak`复制粘贴到`main.js`中相应的位置

### npm安装依赖编译运行

```bash
# 安装依赖
npm install
# 开发环境编译
npm run serve
# 生产环境编译
npm run build
```


## API 接口

目前带宽为10Mbps,不针对IP进行限速，请不要滥用接口。


### 请求接口 https://lab.ahusmart.com/nCoV/api/detail

返回指定区域的详细信息

提供三种组合方式，分别查询:
-  全国所有数据
    - https://lab.ahusmart.com/nCoV/api/detail
-  指定省份或直辖市所有的数据
    - https://lab.ahusmart.com/nCoV/api/detail?province=上海市
-  指定城市所有的数据
    - https://lab.ahusmart.com/nCoV/api/detail?city=武汉市
-  指定三级行政机构(即xx省xx市xx区)所有的数据
    - https://lab.ahusmart.com/nCoV/api/detail?city=合肥市&county=蜀山区


|  变量名 |  注释 |
| :------------: | :------------: |
| province  | 省份名或直辖市名如: 上海市 西藏自治区 湖北省 |
| city  | 二级行政区域，如 武汉市 浦东新区  |
| county  | 三级行政区域 如 蜀山区(合肥市) |

### 返回数据 


|  变量名 |  注释 |
| :------------: | :------------: |
|  country |  中国 |
|  province | 省份名  |
| city  |  城市名 |
|  county |  	三级行政区域名  |
| detail |  详细地址 |
| position  | 百度地图经纬度坐标  |
| infoSource  | 数据来源  |
| sourceUrl  | 数据来源链接  |
|  show |   	可忽略 |



### 实例 

#### 请求

- Method: **GET**
- URL:```https://lab.ahusmart.com/nCoV/api/detail?city=合肥市&county=蜀山区```


#### 响应

- Body

```json
{
    "results": [
        {
            "country": "中国",
            "province": "安徽省",
            "city": "合肥市",
            "county": "蜀山区",
            "detail": "蜀山区中央美域A区",
            "position": [
                117.24297069728766,
                31.87368409239553
            ],
            "infoSource": "合肥市卫生健康委员会",
            "sourceUrl": "http://wjw.hefei.gov.cn/ztzl/xxgzbdgrdfyyqfk/xxfb/17723463.html",
            "show": false
        },
        {
            "country": "中国",
            "province": "安徽省",
            "city": "合肥市",
            "county": "蜀山区",
            "detail": "蜀山区中铁青秀城",
            "position": [
                117.25144560882877,
                31.878036498537217
            ],
            "infoSource": "合肥市卫生健康委员会",
            "sourceUrl": "http://wjw.hefei.gov.cn/ztzl/xxgzbdgrdfyyqfk/xxfb/17723463.html",
            "show": false
        },
        ...
      
    ],
    "success": true
}
```






