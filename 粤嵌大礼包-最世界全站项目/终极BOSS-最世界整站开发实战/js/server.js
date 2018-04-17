// 1、引入服务
var express = require('express');
var fs = require('fs');

// 2、服务初始化
var app = express();

// 获取页面的路由
app.get('/',function (req,res) {
    res.sendFile(fs.realpathSync('../最世界.html'));
});

app.get('/CityWalk.html',function (req,res) {
    res.sendFile(fs.realpathSync('../CityWalk.html'));
});
      // 获取数据路由
app.get('/getBanner',function (req,res) {
    var bannerData = {
        err:1,
        msg:[
            {
                "imgUrl": "http://ww4.sinaimg.cn/large/7853084cjw1f86tzrntcnj21hc0bo0yi.jpg",
                "href": "http://z.qyer.com/zt/gqsdjxs/?campaign=zkbanner&category=gqsdjxs"
            }, {
                "imgUrl": "http://ww1.sinaimg.cn/large/7853084cjw1f86u0lhcuhj21hc0bowhq.jpg",
                "href": "http://z.qyer.com/zt/kdjm/?campaign=zkbanner&category=kdjm"
            }, {
                "imgUrl": "http://ww3.sinaimg.cn/large/7853084cjw1f86u0v3py6j21hc0bogq8.jpg",
                "href": "http://z.qyer.com/zt/2016celebritycruise/?campaign=zkbanner&category=2016celebritycruise"
            }, {
                "imgUrl": "http://ww3.sinaimg.cn/large/7853084cjw1f86u1m29hpj21hc0bo43x.jpg",
                "href": "http://z.qyer.com/zt/qyzy/?campaign=zkbanner&category=qyzy"
            }
        ]
    };
    res.send(JSON.stringify(bannerData));
});

app.get('/getFreeWalk',function (req,res) {
    var freeWalkData = {
        err:1,
        msg:[
            {
                "title": "今日热点",
                "data": [
                    {
                        "title": "全国多地直飞台北2-15天往返含税机票（含7日保险）",
                        "time": "旅行时间 永久有效",
                        "price": 1379,
                        "imgUrl": "http://ww3.sinaimg.cn/large/801b780ajw1f83k1f359qj20go0b475q.jpg"
                    }, {
                        "title": "【国庆假期】西安/长沙直飞悉尼2-30天往返含税机票(赠送WIFI 2天)",
                        "price": 2999,
                        "imgUrl": "http://ww1.sinaimg.cn/large/801b780ajw1f83k1o9m6ij207n055dg5.jpg"
                    }, {
                        "title": "【五一/端午假期】上海直飞科伦坡7天往返含税机票（赠WiFi）",
                        "price": 2499,
                        "imgUrl": "http://ww3.sinaimg.cn/large/801b780ajw1f83k1uscj2j207n055mxe.jpg"
                    }, {
                        "title": "北京直飞日本东京/大阪/冲绳5-6天往返含税机票(双人送wifi)",
                        "price": 999,
                        "imgUrl": "http://ww2.sinaimg.cn/large/801b780ajw1f83k221s38j207n0550te.jpg"
                    }, {
                        "title": "【元旦特惠】天津直飞大阪6-7天往返含税机票",
                        "price": 899,
                        "imgUrl": "http://ww1.sinaimg.cn/large/801b780ajw1f83k28buwkj207n05574w.jpg"
                    }, {
                        "title": "上海/杭州直飞日本多地4-30天往返含税机票(日航/全日空/首都航空等,赠日上免税店打折券)",
                        "price": 888,
                        "imgUrl": "http://ww1.sinaimg.cn/large/801b780ajw1f83k2f831hj207n05574l.jpg"
                    }
                ]
            }, {
                "title": "今日新品",
                "data": [
                    {
                        "title": "【国庆假期】长沙直飞洛杉矶9天往返含税机票(可配全国联运)",
                        "time": "旅行时间 2016/07-2017/01",
                        "price": 2559,
                        "imgUrl": "http://ww3.sinaimg.cn/large/801b780ajw1f83lt81z9yj20go0b4wgt.jpg"
                    }, {
                        "title": "【五一/端午假期】上海直飞马尼拉5天往返含税机票（赠WiFi）",
                        "price": 1399,
                        "imgUrl": "http://ww3.sinaimg.cn/large/801b780ajw1f83ltetp1xj207n055dga.jpg"
                    }, {
                        "title": "上海迪士尼乐园酒店/玩具总动员酒店单订房+代售迪士尼门票",
                        "price": 928,
                        "imgUrl": "http://ww1.sinaimg.cn/large/801b780ajw1f83ltm76d6j207n0550t3.jpg"
                    }, {
                        "title": "天津直飞曼谷6/7天往返含税机票",
                        "price": 999,
                        "imgUrl": "http://ww2.sinaimg.cn/large/801b780ajw1f83ltreedaj207n0550t1.jpg"
                    }, {
                        "title": "天津直飞北海道函馆6天往返含税机票",
                        "price": 1699,
                        "imgUrl": "http://ww4.sinaimg.cn/large/801b780ajw1f83ltx1v2lj207n055t99.jpg"
                    }, {
                        "title": "广州直飞巴黎/阿姆斯特丹/罗马7-31天往返含税机票（赠10日的保险+全国多城市联运+可任意搭配起止点)",
                        "price": 4599,
                        "imgUrl": "http://ww1.sinaimg.cn/large/801b780ajw1f83lu35sc5j207n0550t0.jpg"
                    }
                ]
            }, {
                "title": "闪购",
                "data": [
                    {
                        "title": "【赠涂鸦秀门票/中秋假期】北京/上海直飞首尔4天3晚自由行(赠接机,+1元购交通卡/ +5元购演唱会门票)",
                        "time": "旅行时间 2016/02-2016/11",
                        "price": 1899,
                        "imgUrl": "http://ww4.sinaimg.cn/large/801b780ajw1f83lubskglj20go0b4adb.jpg"
                    }, {
                        "title": "上海直飞日本东京/大阪5-6天往返含税机票",
                        "price": 999,
                        "imgUrl": "http://ww2.sinaimg.cn/large/801b780ajw1f83luhx5yrj207n055q34.jpg"
                    }, {
                        "title": "【国庆假期/水灯节】上海直飞清迈6天自由行(可选3-5星古城附近酒店)",
                        "price": 1499,
                        "imgUrl": "http://ww4.sinaimg.cn/large/801b780ajw1f83lunr9w7j207n055q36.jpg"
                    }, {
                        "title": "【国庆假期】澳门直飞美娜多5-6天自由行（赠接送机+半天市区观光）",
                        "price": 2599,
                        "imgUrl": "http://ww3.sinaimg.cn/large/801b780ajw1f83lutvdonj207n055q36.jpg"
                    }, {
                        "title": "全国多地直飞迪拜8-31天往返含税机票（含首晚五星酒店）",
                        "price": 2999,
                        "imgUrl": "http://ww1.sinaimg.cn/large/801b780ajw1f83luziw8fj207n055jrk.jpg"
                    }, {
                        "title": "【899任选】上海直飞富山/新泻/长崎/冈山/广岛/小松/松山4-7天往返含税机票",
                        "price": 899,
                        "imgUrl": "http://ww4.sinaimg.cn/large/801b780ajw1f83lv58pb4j207n0550td.jpg"
                    }
                ]
            }, {
                "title": "国庆出行",
                "data": [
                    {
                        "title": "【国庆假期】香港/深圳/广州/武汉/杭州直飞沙巴5天4晚自由行（四星酒店/赠送接送机+电话卡）",
                        "time": "旅行时间 2016/08-2017/01",
                        "price": 2199,
                        "imgUrl": "http://ww2.sinaimg.cn/large/801b780ajw1f83lvc3725j20go0b4aaz.jpg"
                    }, {
                        "title": "【国庆假期】广州直飞塞班5-6天自由行",
                        "price": 2799,
                        "imgUrl": "http://ww2.sinaimg.cn/large/801b780ajw1f83lvhls3ij207n055t92.jpg"
                    }, {
                        "title": "【国庆特价】北京/上海/杭州直飞普吉岛6-7天自由行(多航空公司可选)",
                        "price": 1599,
                        "imgUrl": "http://ww3.sinaimg.cn/large/801b780ajw1f83lvnqbz4j207n055mx9.jpg"
                    }, {
                        "title": "【国庆假期】上海直飞沙巴5/6天往返含税机票(赠送电子地图)",
                        "price": 999,
                        "imgUrl": "http://ww3.sinaimg.cn/large/801b780ajw1f83lvtniqaj207n0553yo.jpg"
                    }, {
                        "title": "【国庆假期/水灯节】上海直飞清迈6天自由行(可选3-5星古城附近酒店)",
                        "price": 1499,
                        "imgUrl": "http://ww3.sinaimg.cn/large/801b780ajw1f83lvz2oyfj207n055q36.jpg"
                    }, {
                        "title": "【国庆假期】香港直飞巴厘岛5天往返含税机票（五星航空）",
                        "price": 3999,
                        "imgUrl": "http://ww3.sinaimg.cn/large/801b780ajw1f83lw4t22uj207n055mxb.jpg"
                    }
                ]
            }, {
                "title": "超值机票",
                "data": [
                    {
                        "title": "【超值特惠】上海直飞泰国多城市6-10天往返含税机票(清迈/普吉/曼谷多套餐可选)",
                        "time": "旅行时间 2016/07-2016/10",
                        "price": 899,
                        "imgUrl": "http://ww1.sinaimg.cn/large/801b780ajw1f83lwbjvjpj20go0b440t.jpg"
                    }, {
                        "title": "【拒签全退】上海往返欧洲多地6-30天含税机票",
                        "price": 3899,
                        "imgUrl": "http://ww2.sinaimg.cn/large/801b780ajw1f83lwk57t7j207n055wf2.jpg"
                    }, {
                        "title": "北京往返日本福冈3-30天含税机票(赠航空意外险,两人起订)",
                        "price": 1399,
                        "imgUrl": "http://ww4.sinaimg.cn/large/801b780ajw1f83lwphy53j207n055js2.jpg"
                    }, {
                        "title": "【十一假期】香港/深圳/澳门直飞日本多地5-7天往返机票（赠送日本签证/可选单机票）",
                        "price": 1430,
                        "imgUrl": "http://ww3.sinaimg.cn/large/801b780ajw1f83lwvczqvj207n0550t3.jpg"
                    }, {
                        "title": "全国多地往返曼谷5-15天含税机票(含接送机)",
                        "price": 999,
                        "imgUrl": "http://ww2.sinaimg.cn/large/801b780ajw1f83lx13ur9j207n055dg4.jpg"
                    }, {
                        "title": "【拒签退款/开口票】北京/上海直飞美国多地3-29天往返含税机票(可配全国多地联运及可同舱位改签)",
                        "price": 3679,
                        "imgUrl": "http://ww3.sinaimg.cn/large/801b780ajw1f83lx7qdvjj207n055gm6.jpg"
                    }
                ]
            }, {
                "title": "热门海岛",
                "data": [
                    {
                        "title": "【特惠！】上海直飞马尔代夫太阳岛6天4晚/7天5晚自由行(上海航空/美佳航空可选+2晚沙滩屋和2晚水屋+含早餐和晚餐)",
                        "time": "旅行时间 2016/10-2016/12",
                        "price": 9980,
                        "imgUrl": "http://ww3.sinaimg.cn/large/801b780ajw1f83lxdlk0vj20go0b4abw.jpg"
                    }, {
                        "title": "【国庆】澳门往返帕劳6-7天自由行（任选星级酒店+多款热销精品出海套餐+赠送独家无重装潜水/电话卡/水下相机/ SPA等9项超值礼包）",
                        "price": 2499,
                        "imgUrl": "http://ww2.sinaimg.cn/large/801b780ajw1f83lxj7xxzj207n0550t4.jpg"
                    }, {
                        "title": "【国庆假期】香港/深圳/广州/武汉/杭州直飞沙巴5天4晚自由行（四星酒店/赠送接送机+电话卡）",
                        "price": 2199,
                        "imgUrl": "http://ww1.sinaimg.cn/large/801b780ajw1f83lxosn8kj207n055aa4.jpg"
                    }, {
                        "title": "成都/重庆直飞苏梅/甲米/普吉岛7-8天往返含税机票",
                        "price": 680,
                        "imgUrl": "http://ww3.sinaimg.cn/large/801b780ajw1f83lxuqz7wj207n055mxl.jpg"
                    }, {
                        "title": "北京/香港直飞塞班岛5-7天自由行（赠接送机+环岛游；香港出发额外赠军舰岛游）",
                        "price": 5999,
                        "imgUrl": "http://ww2.sinaimg.cn/large/801b780ajw1f83ly0obwsj207n055t8z.jpg"
                    }, {
                        "title": "【国庆】香港/澳门直飞帕劳5-6天自由行(多酒店可选/赠中文接送机)",
                        "price": 1780,
                        "imgUrl": "http://ww3.sinaimg.cn/large/801b780ajw1f83ly5otmfj207n055dg4.jpg"
                    }
                ]
            }, {
                "title": "热门推荐",
                "data": [
                    {
                        "title": "杭州直飞苏梅岛5-6天往返含税机票",
                        "time": "旅行时间 2016/09-2017/01",
                        "price": 1999,
                        "imgUrl": "http://ww1.sinaimg.cn/large/801b780ajw1f83lyn7q5lj20go0b476r.jpg"
                    }, {
                        "title": "上海直飞斯里兰卡8天往返机票（赠送首晚住宿+签证）",
                        "price": 3899,
                        "imgUrl": "http://ww1.sinaimg.cn/large/801b780ajw1f83lyscbw3j207n055aa8.jpg"
                    }, {
                        "title": "北京/天津直飞苏梅岛5-6天往返含税机票（包机直飞本岛）",
                        "price": 888,
                        "imgUrl": "http://ww4.sinaimg.cn/large/801b780ajw1f83lyxy7hej207n055jri.jpg"
                    }, {
                        "title": "北京/上海/南京/广州/厦门出发台北3-14天马拉松机票套餐（含赛事报名费）",
                        "price": 2499,
                        "imgUrl": "http://ww3.sinaimg.cn/large/801b780ajw1f83lz3ds4uj207n055glt.jpg"
                    }, {
                        "title": "【国庆特惠】上海直飞名古屋+大阪/东京(茨城)/高松6-8天往返含税机票(可选含1晚酒店)",
                        "price": 599,
                        "imgUrl": "http://ww3.sinaimg.cn/large/801b780ajw1f83lz89uudj207n05574l.jpg"
                    }, {
                        "title": "【国庆假期】天津直飞济州岛4-5天自由行(可选五星酒店)",
                        "price": 1555,
                        "imgUrl": "http://ww3.sinaimg.cn/large/801b780ajw1f83lzd6zlmj207n055glz.jpg"
                    }
                ]
            }
        ]

    };
    res.send(JSON.stringify(freeWalkData));
});

app.get('/getMenu',function (req,res) {
    var menuData = {
        err:1,
        msg:[
            {
                "title": "港澳台 国内",
                "mainCity": [ "香港", "澳门", "台湾", "三亚", "长白山" ],
                "moreCity": [
                    {
                        "cityName": "香港 澳门",
                        "items": [ "香港", "澳门", "香港迪士尼", "昂坪360", "交通接驳", "太平山缆车", "海洋公园", "天际100", "港湾游船", "一日游", "水舞间", "澳门塔", "摩天轮", "新濠影汇", "港澳船票", "豪华自助", "极限运动"]
                    }, {
                        "cityName": "台湾",
                        "items": [ "台北", "高雄", "垦丁", "宜兰", "台南", "澎湖", "高铁票", "台北101", "野柳九份", "夜宿海生馆", "太鲁阁", "山海赏鲸", "清境农场", "日月潭", "阿里山", "水上活动", "各地接驳", "环岛精选"]
                    }, {
                        "cityName": "国内",
                        "items": [ "三亚", "厦门", "丽江", "西安", "满洲里", "乌鲁木齐", "桂林", "北海", "上海迪士尼", "上海迪士尼门票", "长隆", "北京周边", "华东周边", "华南周边", "成都周边"]
                    }
                ],
                "moreCityImg": "http://ww1.sinaimg.cn/large/7853084cjw1f86tunx4wzj20ci07ignk.jpg"
            }, {
                "title": "日本 韩国",
                "mainCity": [ "东京", "大阪", "冲绳", "首尔", "济州岛" ],
                "moreCity": [
                    {
                        "cityName": "日本",
                        "items": [ "东京", "大阪", "冲绳", "静岗", "京都", "北海道", "札幌", "名古屋", "长崎", "鹿儿岛", "小松", "广岛", "大阪环球影城", "关西周游券", "东京迪士尼", "冲绳一日游", "不二雄博物馆", "冲绳美海水馆", "三丽鸥彩虹乐园", "大江户温泉无语"]
                    }, {
                        "cityName": "韩国",
                        "items": [ "首尔", "济州岛", "乐天世界", "首尔塔", "爱宝乐园", "T-money", "仁川机场快线", "首尔夜景", "韩国美食", "K-LIVE演唱会", "弘大3D美术馆", "明洞设计体验", "韩国文化", "乱打秀", "济州接送用车", "泰迪熊"]
                    }, {
                        "cityName": "专题",
                        "items": [ "有趣の日本"]
                    }
                ],
                "moreCityImg": "http://ww1.sinaimg.cn/large/7853084cjw1f86tvajjg9j20ci07i3zw.jpg"
            }, {
                "title": "东南亚 南亚",
                "mainCity": [ "普吉", "清迈", "沙巴", "巴厘岛", "马尔代夫" ],
                "moreCity": [
                    {
                        "cityName": "泰国",
                        "items": [ "普吉岛", "清迈", "曼谷", "苏梅岛", "甲米", "芭提雅", "清莱", "拜县", "大城", "穷游精选", "皮皮岛", "人妖秀", "丛林飞跃", "寻海豚之旅", "spa按摩", "夜间动物园", "水上市场", "幻多奇乐园", "穷游独家citywalk", "接送机包车"]
                    }, {
                        "cityName": "南亚",
                        "items": [ "马尔代夫", "斯里兰卡", "尼泊尔", "班度士岛", "马尔代夫+斯里兰卡", "奥臻岛", "蓝色美人蕉", "伊露岛", "阿玛瑞岛", "港丽岛", "港丽岛", "都喜天阙", "神仙珊瑚岛"]
                    }, {
                        "cityName": "东南亚",
                        "items": [ "新加坡", "马来西亚", "沙巴", "长沙滩", "巴厘岛", "柬埔寨", "芽庄", "岘港", "杜马盖地", "宿雾", "美娜多", "新加坡环球影城", "S.E.A海洋馆", "新加坡动物园", "摩天轮", "滨海湾花园", "宝格丽下午茶", "红树林萤火虫", "芭雅岛", "巴厘岛漂流", "蓝梦岛"]
                    }
                ],
                "moreCityImg": "http://ww4.sinaimg.cn/large/7853084cjw1f86tvpa800j20ci07i0tq.jpg"
            }, {
                "title": "欧洲 美洲",
                "mainCity": [ "法国", "意大利", "美国", "英国" ],
                "moreCity": [
                    {
                        "cityName": "欧洲",
                        "items": [ "法国", "意大利", "西班牙", "希腊", "土耳其", "瑞士", "英国", "捷克", "冰岛", "荷兰", "德国", "巴黎", "伦敦", "罗马+梵蒂冈", "阿姆斯特丹", "巴塞罗那", "圣托里尼", "伊斯坦布尔", "慕尼黑", "威尼斯", "布拉格", "马德里", "巴库", "卡帕多奇亚", "米其林餐厅", "南法薰衣草", "塞纳河游船", "巨石阵", "瑞士铁路通票", "圣家堂", "英国深度游", "巴黎迪士尼", "下午茶", "希腊船票", "卢浮宫", "一日一世界", "游遍欧罗巴"]
                    }, {
                        "cityName": "美洲",
                        "items": [ "美国", "加拿大", "洛杉矶", "纽约", "拉斯维加斯", "旧金山", "圣地亚哥", "芝加哥", "西雅图", "华盛顿", "奥兰多", "夏威夷", "塞班岛", "关岛", "环球影城", "迪士尼", "秀票", "大峡谷", "羚羊谷", "尼亚加拉大瀑布", "帝国大厦", "乐高乐园", "城市通票", "Explorer Pass", "奥特拉斯"]
                    }
                ],
                "moreCityImg": "http://ww4.sinaimg.cn/large/7853084cjw1f86tw3n3elj20b403274q.jpg"
            }, {
                "title": "澳新 中东非",
                "mainCity": [ "悉尼", "新西兰", "迪拜", "帕劳" ],
                "moreCity": [
                    {
                        "cityName": "澳洲 新西兰",
                        "items": [ "澳大利亚", "新西兰", "帕劳", "斐济", "凯恩斯", "盛林群岛", "阿德莱德", "达尔文", "珀斯", "皇后镇", "西海岸冰川", "米尔福德峡湾", "罗托鲁河", "凯库拉", "瓦纳卡", "悉尼海湾大桥", "大堡礁", "澳大利亚观鲸", "太阳恋人号", "银梭号游船+直升机", "水母湖", "新西兰滑雪", "皇后镇跳伞", "天空缆车+晚餐", "观鲸", "霍比特人电影拍摄地+萤火虫洞"]
                    }, {
                        "cityName": "非洲",
                        "items": [ "毛里求斯", "塞舌尔", "留尼旺", "快艇追海豚", "埃及"]
                    }, {
                        "cityName": "中东",
                        "items": [ "迪拜", "迪拜塔", "沙漠冲沙", "迪拜直升飞机", "法拉利公园+亚斯水世界", "八星皇宫下午茶"]
                    }
                ],
                "moreCityImg": "http://ww4.sinaimg.cn/large/7853084cjw1f86tx7v5v2j20ci07iq3u.jpg"
            }, {
                "title": "主题推荐",
                "mainCity": [ "邮轮", "亲子", "情侣", "海岛游", "购物" ],
                "moreCity": [
                    {
                        "cityName": "主题推荐",
                        "items": [
                            "http://ww1.sinaimg.cn/large/7853084cjw1f86txt0owej204g04gweg.jpg",
                            "http://ww2.sinaimg.cn/large/7853084cjw1f86txycahcj204g04gq2v.jpg",
                            "http://ww2.sinaimg.cn/large/7853084cjw1f86txycahcj204g04gq2v.jpg",
                            "http://ww1.sinaimg.cn/large/7853084cjw1f86tybhx5zj204g04gdfv.jpg",
                            "http://ww1.sinaimg.cn/large/7853084cjw1f86tyhut5pj204g04gq2w.jpg",
                            "http://ww2.sinaimg.cn/large/7853084cjw1f86tyoduc3j204g04g3yi.jpg",
                            "http://ww3.sinaimg.cn/large/7853084cjw1f86tyxm9w8j204g04gjrd.jpg",
                            "http://ww1.sinaimg.cn/large/7853084cjw1f86tz4g8qdj204g04gwef.jpg",
                            "http://ww3.sinaimg.cn/large/7853084cjw1f86tza3mvqj204g04gmx5.jpg"
                        ]
                    }
                ]
            }, {
                "title": "出行必备",
                "mainCity": [ "Wi-Fi", "电话卡", "接送机", "保险" ],
                "moreCity": [
                    {
                        "cityName": "Wi-Fi/电话卡",
                        "items": [ "日本Wi-Fi", "韩国上网卡", "港澳台电话卡", "欧洲多国通用", "美国电话卡", "新加坡Wi-Fi", "泰国电话卡", "澳大利亚", "阿联酋" ]
                    }, {
                        "cityName": "接送机",
                        "items": [ "台北", "高雄", "首尔", "东京", "大阪", "冲绳", "北海道", "新加坡", "普吉岛", "清迈", "沙巴", "巴厘岛", "纽约", "悉尼", "奥克兰", "土耳其", "更多接送机产品" ]
                    }, {
                        "cityName": "签证",
                        "items": [ "泰国", "韩国", "日本", "美国", "入台证", "越南", "马来西亚", "新加坡", "斯里兰卡", "柬埔寨", "土耳其", "加拿大", "澳大利亚", "法国", "德国", "意大利", "希腊", "西班牙" ]
                    }
                ],
                "moreCityImg": "http://ww1.sinaimg.cn/large/7853084cjw1f86txkko9yj20820460sw.jpg"
            }
        ]

    };
    res.send(JSON.stringify(menuData));
});

app.get('/getCityWalk',function (req,res) {
    var cityWalkData = {
        err:1,
        msg:[
            {
                "title": "【最世界一日游】将军之道—京都绝景之旅（含米其林午餐）仅限10周岁以上参加",
                "introduce": [
                    "听惊心动魄的日本战国故事",
                    "品米其林餐厅会席料理",
                    "从东山最佳角度俯瞰京都"
                ],
                "address": "京都",
                "imgurl": "http://ww2.sinaimg.cn/large/801b780ajw1f83d8w3n25j20bo07sjs2.jpg",
                "oldPrice": 1650,
                "newPrice": 868,
                "browseCount": 36459,
                "soldCount": 186
            }, {
                "title": "【最世界一日游】京都岚山香风—竹林和温泉的纯净空气之旅（含午餐）",
                "introduce": [
                    "岚山不止有古风的竹林，更有犹如世外仙境的私家山庄，",
                    "像当地人一样游览岚山，亲手制作香包送给重要的人，",
                    "最后再泡上一汤天然温泉，才算到过岚山。"
                ],
                "address": "京都",
                "imgurl": "http://ww3.sinaimg.cn/large/801b780ajw1f83jc4tcijj20bo07s0tn.jpg",
                "oldPrice": 1110,
                "newPrice": 598,
                "browseCount": 37817,
                "soldCount": 164
            }, {
                "title": "【City Walk】从大栅栏到杨梅竹斜街－老北京的城南旧事",
                "introduce": [
                    "从元朝到民国，老北京最活跃、最有生活气息的地界，就在前门。",
                    "从原研哉到国际设计周，旧城保护与创意产业的培育，也悄悄发生在前门。",
                    "这里有北京最窄的胡同——钱市胡同（看自下而上商业文化的演变）"
                ],
                "address": "北京",
                "imgurl": "http://ww1.sinaimg.cn/large/801b780ajw1f83d9x4je0j20bo07st9l.jpg",
                "oldPrice": 198,
                "newPrice": 88,
                "browseCount": 40990,
                "soldCount": 205
            }, {
                "title": "【City Walk】Anne Walk武康路，老上海风情的缩影",
                "introduce": [
                    "逛租界，涨历史知识： 原法租界有多大？武康路是怎么规划建成的？",
                    "看洋房，数风流人物：民国最短命总理唐绍仪的被刺现场；上海滩名媛蓝妮的玫瑰别墅；巴金晚年故居……",
                    "喝咖啡，品海派生活：武康路仍旧是上海外国人密度最高的生活区。让我们在咖啡馆谈谈风月，享受法租界的午后阳光。"
                ],
                "address": "上海",
                "imgurl": "http://ww1.sinaimg.cn/large/801b780ajw1f83dabig4gj20bo07smxk.jpg",
                "oldPrice": 198,
                "newPrice": 88,
                "browseCount": 431576,
                "soldCount": 468
            }, {
                "title": "【City Walk】京都NI WALK— 探秘祇园东山半日游",
                "introduce": [
                    "京都建城有哪些秘密？艺妓有着怎样的人生？",
                    "梁思成到底是不是京都的保护者？",
                    "京都City Walk，带你走进这些风景背后的有趣故事。"
                ],
                "address": "京都",
                "imgurl": "http://ww4.sinaimg.cn/large/801b780ajw1f83daqfuc8j20bo07sjsn.jpg",
                "oldPrice": 480,
                "newPrice": 248,
                "browseCount": 44016,
                "soldCount": 334
            }, {
                "title": "对骑行上瘾-用单车丈量这个熟悉的城市",
                "introduce": [
                    "跟着最会玩的穷游锦囊，骑上“橙色小网红”摩拜单车（Mobike），回归脚踏的绿色时代，听着故事在城市间穿行。",
                    "",
                    "城市的起点，生活的源头：顺流而下，洋气的外滩源和生活的石库门并非那么泾渭分明，他们的交融也正是海派文化诞生的缩影。"
                ],
                "address": "上海",
                "imgurl": "http://ww1.sinaimg.cn/large/801b780ajw1f83daztpdzj20bo07sab7.jpg",
                "oldPrice": 1650,
                "newPrice": 868,
                "browseCount": 36459,
                "soldCount": 186
            }
        ]

    };
    res.send(JSON.stringify(cityWalkData));
});

app.get('*',function (req,res) {
    if (req.url != '/favicon.ico'){
        res.sendFile(fs.realpathSync('../'+req.url));
    }
});

// 3、监听服务
// listen有三个参数：第一个参数是端口号；
//第二个参数是主机名，没给默认是IP地址，
//给了则访问时输入IP地址无权访问，
//需用输入的参数名来访问；
//第三个是回调函数，当监听成功时触发该回调函数
app.listen(8888,function () {
    console.log('服务已启动完毕');
});
