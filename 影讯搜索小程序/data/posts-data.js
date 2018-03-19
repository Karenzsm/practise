//alt+shift+F可以将代码样式格式化
//将业务中的数据分离到单独的数据文件中
var local_database = [
  {
    date: "Dec 17 2017",
    title: "成都一女子“被老赖”无法订机票，法院：信息录错了",
    imgSrc: "/images/post/979.gif",
    avatar: "/images/avatar/5.png",
    content: "张英是成都市某公司法定代表人，日前在订机票时发现被“限制高消费”无法订票。法院回应道，张英所在公司涉及到一起劳动纠纷仲裁案，在6月份结案了，但是录系统时录错了。",
    reading: "68",
    collection: "24",
  },
  {
    date: "Dec 16 2017",
    title: "专家谈国歌法迟到20余年：歌词曾存在很大争议",
    imgSrc: "/images/post/61.jpg",
    avatar: "/images/avatar/4.png",
    content: "国旗国徽国歌等国家标志是对国家本质的一种彰显，对其进行立法保护是宪法精神的具体化。",
    reading: "35",
    collection: "12",
  },
  {
    date: "Dec 15 2017",
    title: "后续｜4.5亿美元的《救世主》未必是沙特王子买的？",
    imgSrc: "/images/post/276.jpg",
    avatar: "/images/avatar/3.png",
    content: "天价成交额、真赝之争、神秘买主，关于11月15日刚刚以近4.5亿美元成交的达·芬奇画作《救世主》的纷纷扰扰，还远不到束之高阁的时候。",
    reading: "28",
    collection: "7",
  },
  {
    date: "Dec 14 2017",
    title: "纪念馆长回忆习近平参访细节",
    imgSrc: "/images/post/653.jpg",
    avatar: "/images/avatar/1.png",
    content: "纪念馆馆长张建军告诉记者，他注意到习近平对幸存者，询问“很细致”，对国际友人，则表明“滴水之恩，涌泉相报”。",
    reading: "112",
    collection: "96",
  },
  {
    date: "Nov 22 2017",
    title: "大阪宣布与旧金山解除60年友好城市关系：反对接受慰安妇像",
    imgSrc: "/images/post/450.jpg",
    avatar: "/images/avatar/2.png",
    content: "日本大阪市13日正式宣布，与美国旧金山解除长达60年的友好城市关系。该消息已获大阪市长吉村洋文证实，将在旧金山新市长上任后再正式行文。",
    reading: "78",
    collection: "49",
  }
]

//给脚本文件定义一个出口，和nodejs里的文件输出是一样的
module.exports={
  //postlist变量名，local_database值
  postList:local_database       //赋值
}
