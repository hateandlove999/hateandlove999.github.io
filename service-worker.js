if(!self.define){let i,a={};const e=(e,b)=>(e=new URL(e+".js",b).href,a[e]||new Promise((a=>{if("document"in self){const i=document.createElement("script");i.src=e,i.onload=a,document.head.appendChild(i)}else i=e,importScripts(e),a()})).then((()=>{let i=a[e];if(!i)throw new Error(`Module ${e} didn’t register its module`);return i})));self.define=(b,c)=>{const r=i||("document"in self?document.currentScript.src:"")||location.href;if(a[r])return;let f={};const d=i=>e(i,r),n={module:{uri:r},exports:f,require:d};a[r]=Promise.all(b.map((i=>n[i]||d(i)))).then((i=>(c(...i),f)))}}define(["./workbox-d249b2c8"],(function(i){"use strict";self.skipWaiting(),i.precacheAndRoute([{url:"1124/xuexiao.html",revision:"00a6d0446b5ce43decfd52c6f904ad45"},{url:"404.html",revision:"3495f60ac5c6fcf5c542757fd8e690de"},{url:"assets/404.html.a881d30c.js",revision:null},{url:"assets/404.html.d2dc3323.js",revision:null},{url:"assets/app.e0e6bd27.js",revision:null},{url:"assets/back-to-top.8efcbe56.svg",revision:null},{url:"assets/index.0e8935cb.js",revision:null},{url:"assets/index.html.14b863fa.js",revision:null},{url:"assets/index.html.a0967bfb.js",revision:null},{url:"assets/style.e68f4b87.css",revision:null},{url:"assets/xuexiao.html.2ee71293.js",revision:null},{url:"assets/xuexiao.html.61cfe66a.js",revision:null},{url:"baizhi/上海交通大学.png",revision:"3612a3237c842f74a95759c054e6fb9a"},{url:"baizhi/上海工程技术大学.png",revision:"c875134db813a4dd145672a79f12c0aa"},{url:"baizhi/上海工艺美术职业学院.png",revision:"4f61a5aec4ab8dfd32f14b7b60657964"},{url:"baizhi/上海师范大学.jpg",revision:"d9d933444b7545a847497fbd2c931bb4"},{url:"baizhi/上海师范大学.png",revision:"04468682de7b6b9b60a6d3bc2b395776"},{url:"baizhi/上海师范大学天华学院.jpg",revision:"f54edc7cdd6e55fd6dc15d5fb9f5bbe5"},{url:"baizhi/上海戏剧学院.jpg",revision:"a389577abe6545ee753f63a4b1c40d83"},{url:"baizhi/上海戏剧学院2.jpg",revision:"173444fcb9ed485bbbc9edc82c423fbe"},{url:"baizhi/上海海洋大学.jpg",revision:"c083d5ff39e190ff20f3a53ffd4a979e"},{url:"baizhi/上海理工大学.jpg",revision:"84790557fb18ac0e6489d890805a184d"},{url:"baizhi/上海理工大学2.jpg",revision:"b0ed8d04c5c0655dd4f6135215ac35cb"},{url:"baizhi/上海理工大学3.jpg",revision:"9cd97ce56a870da2a42c11288b08e96b"},{url:"baizhi/上海视觉艺术学院.jpg",revision:"3badf5b89e4ada24beee4280121b9b1f"},{url:"baizhi/上海科技大学.jpg",revision:"4560bc15cea246508c0da6a6fec79863"},{url:"baizhi/上海科技大学2.jpg",revision:"836c7d6ac42d68abc8d77869a4de63d7"},{url:"baizhi/东北农业大学.jpg",revision:"5afed14264cb4259b8620cab4158550f"},{url:"baizhi/东北大学.png",revision:"bd56457fab401c0e656173e05cbca87d"},{url:"baizhi/东北电力大学.jpg",revision:"04ff5984d3f4aa135bf3990c66920152"},{url:"baizhi/东华理工大学.jpg",revision:"114184fdd659d4f79ff27341a9f91a39"},{url:"baizhi/东南大学.jpg",revision:"ac2ffb04665df96283aac88247a6869e"},{url:"baizhi/中南大学.jpg",revision:"7e60a8228094f883a101662c10e23ecf"},{url:"baizhi/中南大学2.jpg",revision:"c6fe6e350d0396fcc80f01f64bd76dd1"},{url:"baizhi/中南大学3.jpg",revision:"849c6f7e64dc349eeb3e9d9299206aa0"},{url:"baizhi/中南林业科技大学.jpg",revision:"062842d77d4f23e17c6d17ffa6ed27a8"},{url:"baizhi/中南财经政法大学.jpg",revision:"ce820ddd5d1985fcdbfbdfc4e6409e1b"},{url:"baizhi/中南财经政法大学2.jpg",revision:"84b7431831b42188386da11a2225195a"},{url:"baizhi/中国人民大学.jpg",revision:"1cbfa8a99a49fc58b47e688364677d58"},{url:"baizhi/中国人民大学2.jpg",revision:"7bf6cec750080334adcd0f4108cd1f5b"},{url:"baizhi/中国传媒大学.jpg",revision:"ec42120fa8419efd7bd40b2f58257dd5"},{url:"baizhi/中国传媒大学2.jpg",revision:"88ee2d8e7e2a7ecd7222f734c5b6a99b"},{url:"baizhi/中国农业大学.jpg",revision:"d2fecabcb03149a69c5f6ff99b116a6d"},{url:"baizhi/中国戏曲学院.jpg",revision:"0632aac5778cd6b48dc62e2191c1f006"},{url:"baizhi/中国政法大学.jpg",revision:"739f95984cff0ccc131b10951c5e475c"},{url:"baizhi/中国海洋大学.jpg",revision:"58383d89e539fda322730b767557f4fc"},{url:"baizhi/中国海洋大学2.jpg",revision:"72af06376c0319dad6b4d42eb411c170"},{url:"baizhi/中国海洋大学3.jpg",revision:"b33548abb33532e2c312fddc7c5e1444"},{url:"baizhi/中国石油大学.jpg",revision:"2797731a6c8d5e2fad10adba3ba10dc9"},{url:"baizhi/中国矿业大学.jpg",revision:"1bdce150a5ef9278aa87343ebea2aecd"},{url:"baizhi/中国矿业大学.png",revision:"787fa12d43b195ed2a46788e6779d4bb"},{url:"baizhi/中国社会科学院大学.jpg",revision:"59d7d2f378d90f812b9156351572362e"},{url:"baizhi/中国科学技术大学.jpg",revision:"a6453c8b79f0e4eae5c01cf5034e3f1b"},{url:"baizhi/中国科学技术大学2.jpg",revision:"bf3584431707300c0a73d4a27af96ba7"},{url:"baizhi/中国科学技术大学3.jpg",revision:"0f48ea777be750419e5728d6d543aa9d"},{url:"baizhi/中国美术学院.jpg",revision:"56483e18e69ead2b5480fa2a7b09e665"},{url:"baizhi/中央戏剧学院.jpg",revision:"c7db668ac2ef6487efa407132e6fffca"},{url:"baizhi/中央民族大学.jpg",revision:"3ccd179c8fd5ed395d6ed54d012d6807"},{url:"baizhi/中央民族大学2.jpg",revision:"95b1b5b77c3e69f81f07ecdaf4f35b38"},{url:"baizhi/中央民族大学3.jpg",revision:"1cca258c6458022aaad3d3541652f649"},{url:"baizhi/中央美术学院.jpg",revision:"ff96f0ed1da4b7ba593df2ea0afccf8b"},{url:"baizhi/中央美术学院2.jpg",revision:"d1f973e559a0591a1f5af5a60bcedfa4"},{url:"baizhi/中央美术学院3.jpg",revision:"3f3aca489f08be92623f0a04d42f5188"},{url:"baizhi/中央音乐学院.jpg",revision:"c7bd0e477b0172ca77b74e8aed6a9353"},{url:"baizhi/临沂大学.jpg",revision:"d124cfa345c124c9bced1cec7b99ac98"},{url:"baizhi/临沂大学2.jpg",revision:"52bb806f8cc91d0960f3fc8c559805c9"},{url:"baizhi/云南艺术学院.jpg",revision:"17dcf57d9e0c69502fe6e97c0b4c0525"},{url:"baizhi/云南艺术学院2.jpg",revision:"e85fad1507c89416321fb012a0fbd1d1"},{url:"baizhi/凯里学院.jpg",revision:"a576db788664a9aeee1910aee36cfe56"},{url:"baizhi/北京交通大学.jpg",revision:"ea24e400c69c84a9f96e0b13a20ba1d3"},{url:"baizhi/北京交通大学2.jpg",revision:"c3377979719bcbd004b0a51f18ec0867"},{url:"baizhi/北京交通大学3.jpg",revision:"e37e7bd37b8f82e45a7bd04d327f56f4"},{url:"baizhi/北京交通大学4.jpg",revision:"3746d4a4d888afd5d482ce086faebf12"},{url:"baizhi/北京大学.jpg",revision:"8ccc62b8e1c4c99a66bb5240d0eb1337"},{url:"baizhi/北京大学2.jpg",revision:"c589d5c6257c76aea708945ea0495877"},{url:"baizhi/北京师范大学.png",revision:"725478316ecf310f7fe0ecf17b8ca9df"},{url:"baizhi/北京师范大学（珠海校区）.jpg",revision:"d1a2b4a094d39d5ab77ce67735247414"},{url:"baizhi/北京师范大学（珠海校区）2.jpg",revision:"211597ec0a9ea0157e3f9a1399e605f1"},{url:"baizhi/北京师范大学（珠海校区）3.jpg",revision:"e4dbc727feb2cd2f0dcc4e77c36bf7e7"},{url:"baizhi/北京服装学院.jpg",revision:"dc122960936c8b3d5e25f62425a44afc"},{url:"baizhi/北京理工大学.jpg",revision:"6e7dc2c81e0117d86e190841e993935c"},{url:"baizhi/北京理工大学2.jpg",revision:"a5520f25a3ca921d21ca9ba021732456"},{url:"baizhi/北京电影学院.png",revision:"7f000f8366d4503c22df91e22987e43f"},{url:"baizhi/北京航空航天大学.jpg",revision:"80f9a2414801e7c8ea6fdc11c0ca49b4"},{url:"baizhi/北京航空航天大学2.jpg",revision:"12e62408b2fb768e820a84db48b0cf39"},{url:"baizhi/北京语言大学.jpg",revision:"1abcb61dee850becb358e7cd91757853"},{url:"baizhi/北京语言大学2.jpg",revision:"a0ef99f1836c846a1b6875b730b4cda7"},{url:"baizhi/华东师范大学.jpg",revision:"9ca5df474a1bf2289b928639de52f7b1"},{url:"baizhi/华东政法大学.jpg",revision:"0a5853b72fb5df00ac8af553f547277d"},{url:"baizhi/华中农业大学.jpg",revision:"fa605eaeb7c2919090505d8e0517c72e"},{url:"baizhi/华中师范大学.jpg",revision:"789cd646efba9fa4d23a558ca7a16ebd"},{url:"baizhi/华中科技大学.jpg",revision:"48ff3d51baa2d8e49f14d68a0cac7c29"},{url:"baizhi/华侨大学泉州校区.jpg",revision:"9f159a813c2c85f612248f712935e20e"},{url:"baizhi/华南农业大学.jpg",revision:"e2d464d46870d498139058d0941722d4"},{url:"baizhi/华南理工大学.png",revision:"4e933fb35ee237b9bcd229fe581565ce"},{url:"baizhi/南京传媒学院.png",revision:"52b9279da1637a07d4f6ea31f98460e9"},{url:"baizhi/南京传媒学院2.jpg",revision:"6b762d69aa89f6a3b89f4ba436c416ee"},{url:"baizhi/南京信息工程大学.jpg",revision:"2923c471ad5a0c22a95c955bcf38c11b"},{url:"baizhi/南京农业大学.jpg",revision:"1e05d559256bc6f789e1c2d4ca204c6a"},{url:"baizhi/南京大学.jpg",revision:"96e97028199119072f8dc965dd3280c7"},{url:"baizhi/南京林业大学.jpg",revision:"66c794f0036609c653cdc70197835392"},{url:"baizhi/南京航空航天大学.jpg",revision:"1b13cbe3d13b726fb5f757379d3fbb1b"},{url:"baizhi/南开大学.jpg",revision:"2ce052ccf559698418b7a291c695892e"},{url:"baizhi/南开大学2.jpg",revision:"152b0433d69113e01ad5e5db68316c2b"},{url:"baizhi/南方医科大学.jpg",revision:"d485ce4b5ea16311ba7db200ed42d781"},{url:"baizhi/南方科技大学.jpg",revision:"d581fb2c1ac5ea862e5261be28550435"},{url:"baizhi/南昌工学院.jpg",revision:"c67a78d4a37f1c415bcb799b27dc74c2"},{url:"baizhi/南昌工学院2.jpg",revision:"dadfba4e06648aab50b93625fced12ae"},{url:"baizhi/厦门大学.png",revision:"08f920da06d4ffb6654cde95896040c4"},{url:"baizhi/厦门大学2.png",revision:"98465c984bd431a375b2ef290e232af4"},{url:"baizhi/合肥学院.jpg",revision:"e9732913dd022d75b80d032bbeb5195e"},{url:"baizhi/合肥工业大学.jpg",revision:"be0564aa8dd45d05af2a82ee4becb12d"},{url:"baizhi/合肥工业大学2.jpg",revision:"adb7c777814eff077856bb769e0ff4ea"},{url:"baizhi/合肥工业大学3.jpg",revision:"a59639b08bf06853cb848b291caff1d8"},{url:"baizhi/合肥师范学院.jpg",revision:"e8774e4450696e33756c27f3b5f4ac12"},{url:"baizhi/吉林大学.jpg",revision:"6cc315766b600c1869fa785bb01c766c"},{url:"baizhi/吉首大学.jpg",revision:"57ea64c13c9306bb3cdb7a19564093f1"},{url:"baizhi/同济大学.jpg",revision:"4c7519f06ac38095ac14da500aba8e01"},{url:"baizhi/同济大学.png",revision:"c44008d08ad78e18c42add000faa8263"},{url:"baizhi/哈尔滨商业大学.jpg",revision:"8708b5fb02c5b95a9690ecc2be6ee45e"},{url:"baizhi/哈尔滨商业大学2.jpg",revision:"7b3f618fd63b9ff335f193a0d419cdbe"},{url:"baizhi/哈尔滨商业大学3.jpg",revision:"a19a1a699610bb6a5897b8fbe1c2f7e8"},{url:"baizhi/哈尔滨工业大学.jpg",revision:"9816e38efb626b58b5399bbb97ac0213"},{url:"baizhi/嘉兴学院梁林校区.jpg",revision:"43925b0639f965d56d18add8a1745746"},{url:"baizhi/四川传媒学院.jpg",revision:"27fa32ebe0b395220feb6bc39412ea70"},{url:"baizhi/四川外国语大学.jpg",revision:"98ccea6cf78b73b4c284b97a0bd389ef"},{url:"baizhi/四川大学.jpg",revision:"7a1982d303751af4dd55a5b892c4d25c"},{url:"baizhi/四川大学2.jpg",revision:"e6a1226fc5d92c0df60fcf35bd4c6e8a"},{url:"baizhi/四川大学3.jpg",revision:"a68a8d47bb09edc09517ccab2e156a30"},{url:"baizhi/四川大学4.jpg",revision:"a91d9945543dd9c293f78e3d8b550790"},{url:"baizhi/四川师范大学.jpg",revision:"3032d0fdbe3f5cd621b2b646de3b3b93"},{url:"baizhi/四川师范大学.png",revision:"0d69396f934ce613f53e6b5d1b010520"},{url:"baizhi/四川文化艺术学院.png",revision:"888ed04a302a39ca2e0d4b351a9075a2"},{url:"baizhi/四川电影电视学院.jpg",revision:"4072996fe5c9683b273398079ac27fb2"},{url:"baizhi/四川美术学院.jpg",revision:"30ca98d89d769481c5df2136711b7e79"},{url:"baizhi/四川美术学院2.jpg",revision:"7091158b81a934555845836e3e66f29d"},{url:"baizhi/四川轻化工大学.jpg",revision:"37bf9ec8a775b4b09503dd40b8a9b4a9"},{url:"baizhi/四川轻化工大学2.jpg",revision:"02efe730b6e6f7b4b56bbb527104e0e9"},{url:"baizhi/四川轻化工大学3.jpg",revision:"9ef4f6cc943e47fb8c42cadace0c1e0f"},{url:"baizhi/四川音乐学院.jpg",revision:"e441db2a088c2580bde55a90cd5b41b5"},{url:"baizhi/四川音乐学院2.jpg",revision:"fc99e7102c1bb832d11404a54afb3bce"},{url:"baizhi/四川音乐学院3.jpg",revision:"909535fb732919d01da09a9455984c1b"},{url:"baizhi/复旦大学.jpg",revision:"8e9f3f4545fb72f89100a6685d748d02"},{url:"baizhi/复旦大学2.jpg",revision:"8b5ce2d27cd38388728d9e91c507a1c9"},{url:"baizhi/大连外国语大学.jpg",revision:"f53c58fbfd90ebfa77483bb3aff954c3"},{url:"baizhi/大连工业大学.jpg",revision:"f881a3c18837b80de96ef089301ab0f0"},{url:"baizhi/大连工业大学2.jpg",revision:"5f63b0f315a225189deaeeb53ae18453"},{url:"baizhi/天津美术学院.jpg",revision:"4db581d3271bad1c42c3d04e3d4fa8de"},{url:"baizhi/天津财经大学.jpg",revision:"eca230c90b90238df247bef3101a8adc"},{url:"baizhi/天津财经大学2.jpg",revision:"377bf005d3a2c71b6451fa280bafb969"},{url:"baizhi/天津财经大学3.jpg",revision:"bea06a3c364b830e2c2cd473eda8bbca"},{url:"baizhi/威海职业学院.jpg",revision:"a6cd6560eee4b953094f2ade871d833b"},{url:"baizhi/宁波北仑明港高级中学.jpg",revision:"e7fbdfd1daefabe1f8f00566ca8eacbd"},{url:"baizhi/宁波工程学院.jpg",revision:"c101e41dcb602276430c902202d6e5e0"},{url:"baizhi/安康学院.jpg",revision:"d3480ab4b668d4a9ca08791e96e9ff72"},{url:"baizhi/安康学院2.png",revision:"2c913f9257dfd410ef90e65b137ac454"},{url:"baizhi/安徽工业大学.jpg",revision:"8de843c1bc3aff6944403c9a73f7a0b7"},{url:"baizhi/安徽工程大学.jpg",revision:"c1cf911a33bba3065f1202803a97d36b"},{url:"baizhi/安徽建筑大学.png",revision:"e3b9c1061059d6a7e849b170d449ce32"},{url:"baizhi/山东中医药大学.jpg",revision:"4aa40ce337021f67b3b1bbf6e2e4c45b"},{url:"baizhi/山东大学威海校区.jpg",revision:"8e4b5da2efdf2095a76c58412d050955"},{url:"baizhi/山东大学威海校区2.jpg",revision:"15126608e1b6a793ccc03afec2c137d1"},{url:"baizhi/山东大学威海校区3.jpg",revision:"95151bff71280376b6c6bf57f6b91331"},{url:"baizhi/山东大学威海校区4.jpg",revision:"fc22592a548b32ba71218d8c2f33588c"},{url:"baizhi/山东工艺美术学院.png",revision:"87a854c9d8ba1d8af8e1cf9096447629"},{url:"baizhi/山东管理学院.png",revision:"3e6b8cf0f37f16876ac2dd6d6cea471d"},{url:"baizhi/山东艺术学院.jpg",revision:"72c589a6c1e38ba818843b320b4a259d"},{url:"baizhi/山东艺术学院.png",revision:"890bf6f21aba787e32bef54364448801"},{url:"baizhi/山西大学.jpg",revision:"f13c4c8a0e557bd10d9bf46e66f5a971"},{url:"baizhi/广东医科大学.jpg",revision:"67ef9ae39a41217ac25858761a34ac3c"},{url:"baizhi/广东医科大学.png",revision:"1bb91f22d03ef7edbf010b3e70cc95d3"},{url:"baizhi/广东外语外贸大学.png",revision:"67a21e15db0fb2044b545a44cfe47a0f"},{url:"baizhi/广东外语外贸大学2.png",revision:"449a0bd5e9db5909cfdb3903978a2e5a"},{url:"baizhi/广东白云学院.jpg",revision:"5e50ed16354cbb69896aeedaefff12dd"},{url:"baizhi/广东白云学院2.jpg",revision:"12a2dfeeede2d9bea3db0843f98cf9c2"},{url:"baizhi/广东第二师范大学.jpg",revision:"266b6f6c9146b186c1c148f88489194c"},{url:"baizhi/广州医科大学.jpg",revision:"45d595b4d454a34afb655ba49c4ca0d0"},{url:"baizhi/广州城市理工学院.png",revision:"a45fb779f14e90148bf8d121cc75576b"},{url:"baizhi/广州大学.jpg",revision:"d8748244cc9bbe1aa21d4e0f5cd35aaf"},{url:"baizhi/广州美术学院.jpg",revision:"c54eee7c97e5b74e6e2c16ad8a37df38"},{url:"baizhi/广州软件学院.jpg",revision:"1620885ddd3f5e6420ac6078d6dad88d"},{url:"baizhi/广西大学.jpg",revision:"0b0dac4d99ac7aacfd4785ff580f4fa0"},{url:"baizhi/广西艺术学院.jpg",revision:"f24f93e53f09f50e21d4c88229de16e0"},{url:"baizhi/广西艺术学院2.jpg",revision:"d28a9541813b58ef213b5e403bd40f29"},{url:"baizhi/延边大学.jpg",revision:"56335617655e032df2a51f9695190359"},{url:"baizhi/成都某高级中学.jpg",revision:"afe1ab46a754861f62b3cbba04b7a8c0"},{url:"baizhi/暨南大学.png",revision:"0436b9afb42ad5989956e135d81fe588"},{url:"baizhi/曲阜师范大学.jpg",revision:"d1cab37866c077c905495bd15d756dcf"},{url:"baizhi/曲阜师范大学2.jpg",revision:"d7af91a496557da28501a9b490b08464"},{url:"baizhi/曲阜师范大学3.jpg",revision:"6079642881fc05f02c70783d3a3c1acd"},{url:"baizhi/某文科大学外国语学院.jpg",revision:"cec64f23ae1083283f577ac6e1469431"},{url:"baizhi/桂林理工大学.jpg",revision:"3a463cc52364677c085b3bd08fcb306f"},{url:"baizhi/桂林理工大学.png",revision:"fdac335f745ee4d2fa7179d5d8c278cf"},{url:"baizhi/武昌理工学院.jpg",revision:"d9d93c5847bc36f9193c476a1b53d3d4"},{url:"baizhi/武汉传媒学院.png",revision:"0dff706f7c19fd5f76c8766cf0127983"},{url:"baizhi/武汉大学.jpg",revision:"d7e4272c3163d6c11f179541d311c5d1"},{url:"baizhi/武汉理工大学.jpg",revision:"4f4caad204a215594ee33d81fe0fae07"},{url:"baizhi/武汉音乐学院.jpg",revision:"d63ccafea37f8b00ffcdb5c7955bcdc0"},{url:"baizhi/武汉音乐学院2.jpg",revision:"c1d70000f3e42307ce2a4e85be22cf56"},{url:"baizhi/江南大学.jpg",revision:"c313641243a7c520d633969dab69f210"},{url:"baizhi/江汉大学.jpg",revision:"cb39dd4fc0b8db99474cbbaceeaf6a00"},{url:"baizhi/江汉大学2.jpg",revision:"f0ff92b95efebac811a75e95db643890"},{url:"baizhi/江苏大学.jpg",revision:"66179a2e40e468084cdaafcb5dbf1b93"},{url:"baizhi/江西中医药大学.jpg",revision:"7c64ff68ed343f06a2096260492dadbc"},{url:"baizhi/江西中医药大学2.jpg",revision:"e904c7924077b6403d71861850dc2bd2"},{url:"baizhi/江西中医药大学3.jpg",revision:"4e5c43c75fbff06b20883fc2ac80489b"},{url:"baizhi/江西农业大学.jpg",revision:"5123ca82611dbbfe52849594fae97d74"},{url:"baizhi/江西艺术职业学院.jpg",revision:"b5a78f30eddb12567a2f3cf15b664eaa"},{url:"baizhi/沈阳农业大学.jpg",revision:"0a5af01a7f0a37836db91306272765ac"},{url:"baizhi/沈阳理工大学.jpg",revision:"34f5bfdb63d97c7085af24f5052a900b"},{url:"baizhi/沈阳音乐学院.jpg",revision:"6bff4230ed155e3fe134c05d58ef3ee9"},{url:"baizhi/河北传媒学院.jpg",revision:"66e668150925fa120d74850d365c98be"},{url:"baizhi/河北师范大学.jpg",revision:"502dc321d514e8dff0b40ec5f5dab38f"},{url:"baizhi/河南工业大学.jpg",revision:"ad2431ef7f1293f3d45d7e5ddc287e40"},{url:"baizhi/河南工业大学2.jpg",revision:"494943553e5402a23a47b5e5207fb7e7"},{url:"baizhi/济南大学.jpg",revision:"af3a24998a07390415f63c14c305cc56"},{url:"baizhi/济南大学.png",revision:"439bad0d7c5b1bd4c4fc1d6c5dc4de00"},{url:"baizhi/济宁学院.jpg",revision:"8e4498b6e6af2b60d46530ac0a9ad49b"},{url:"baizhi/浙江万里学院.png",revision:"a15062f23f9271b1aedd3238f041e19e"},{url:"baizhi/浙江交通职业技术学院.jpg",revision:"b24a54e4de9786c7d5e5b494cc6a7766"},{url:"baizhi/浙江传媒学院.png",revision:"7208a14d756d51f62fcb4682996215b6"},{url:"baizhi/浙江农林大学.jpg",revision:"a2f9445cae5a89be8b5ac0aecd493024"},{url:"baizhi/浙江农林大学2.jpg",revision:"45fafe3c8ab3728a3c8e875a3eb1bb2d"},{url:"baizhi/浙江农林大学3.jpg",revision:"e5eb5c53f2a26f3061cccb424feed24f"},{url:"baizhi/浙江外国语学院.jpg",revision:"9b3c3766e61418e6320ae1dce42ff9a5"},{url:"baizhi/浙江外国语学院2.jpg",revision:"e9a616f0d6ceed7c795d27583a62bffc"},{url:"baizhi/浙江大学.jpg",revision:"ac3ca4d0d61fd4bd3993bff9b8e982a1"},{url:"baizhi/浙江大学.png",revision:"77e0c9a08cd52f398095e3e8c597520d"},{url:"baizhi/浙江大学2.jpg",revision:"3964489c456e4bdbbc3fac9193b0cdfc"},{url:"baizhi/浙江大学2.png",revision:"12ef91ea3d17f8daf53bd33b3c51daf1"},{url:"baizhi/浙江大学3.jpg",revision:"a8b7c83acdd312cef9b8099fc38dcdf4"},{url:"baizhi/浙江工业大学.jpg",revision:"8a6656d37d6baa754f9a8b1fc8206a3c"},{url:"baizhi/浙江师范大学.jpg",revision:"a7825177a89d3a770d90abba55b5165b"},{url:"baizhi/浙江师范大学2.jpg",revision:"0780c7115da08620e853744e8a2917a3"},{url:"baizhi/浙江师范大学3.jpg",revision:"d730190659d61575bcc7de77a1f35186"},{url:"baizhi/浙江师范大学4.jpg",revision:"fc4c474cc90d11f7f81a682d8cb715e4"},{url:"baizhi/浙江纺织服装职业技术学院.jpg",revision:"0e0d98f0d9b7162e1fe1857eecafbf98"},{url:"baizhi/海南师范大学.jpg",revision:"8e9099cc6c269bad89c6331c652a2f68"},{url:"baizhi/海南师范大学2.jpg",revision:"f2f7b84797e7d1c67a40c9e5af3d2341"},{url:"baizhi/海南热带海洋学院.jpg",revision:"44bc4c968453f4b2971a03a463fc8411"},{url:"baizhi/海南热带海洋学院2.jpg",revision:"0d9c3d4fa3856a7d761957b813d5745c"},{url:"baizhi/深圳中学.jpg",revision:"677bec1a60d310827e7291bad76a392e"},{url:"baizhi/深圳大学.jpg",revision:"b54c483205df440a4e8e8b94f100b81f"},{url:"baizhi/深圳大学2.jpg",revision:"1fec0ac30e1bd337786214d39b8b3a8e"},{url:"baizhi/深圳职业技术学院.jpg",revision:"ad2847248927e768ae1089be92087cd4"},{url:"baizhi/深圳职业技术学院2.png",revision:"03c63f3c0ccb05942e69964dadfd5dd6"},{url:"baizhi/清华大学.jpg",revision:"cc6bf4f8f2bbc55b45482b1bbb042a67"},{url:"baizhi/清华大学2.jpg",revision:"a739959e273ab777a923f2c7fb64cd15"},{url:"baizhi/清华大学3.jpg",revision:"65aee00f69691d92b934cd204fea4e59"},{url:"baizhi/清华大学4.jpg",revision:"875f15c8a6c3399f51a8b067576650c5"},{url:"baizhi/渭南中学.jpg",revision:"3c7eee1af0355181b33ef94469b868b3"},{url:"baizhi/湖北工业大学.jpg",revision:"18b9b70195775356ac04516fa659aa26"},{url:"baizhi/湖北工程学院.jpg",revision:"9c1fdbb1696046d8877b4f44ab741651"},{url:"baizhi/湖北民族大学.jpg",revision:"b617903cf46a7c28a138d640afb036ce"},{url:"baizhi/湖北汽车工业学院.jpg",revision:"004f38e6e4028bcb2a3f21523b8ff25e"},{url:"baizhi/湖北汽车工业学院2.jpg",revision:"2a28c44cd4cab5e2ec07a0a9249c873e"},{url:"baizhi/湖北美术学院.png",revision:"8f65fad34b72561b2de84198a7c3818b"},{url:"baizhi/湖南大学.jpg",revision:"124f981d9d20c5690b6a96302365bca1"},{url:"baizhi/湖南科技大学.jpg",revision:"f5dcc8a9662a91849ed5285c5340b5f3"},{url:"baizhi/湖南科技大学2.jpg",revision:"3aca1ea7305a38ba5f82495684c962c4"},{url:"baizhi/湖南科技大学3.jpg",revision:"044d3abaa1f6c66baff3fcb9a0c89908"},{url:"baizhi/湖南科技大学4.jpg",revision:"6cdf95704f4f1bdb84640b35bd755854"},{url:"baizhi/湖南科技大学5.jpg",revision:"90c780ff96edc9e91029295badd44077"},{url:"baizhi/湘潭大学.jpg",revision:"67b052022d6f606f361598606d010b31"},{url:"baizhi/湘潭大学2.jpg",revision:"0c482d3eb598eda6cc5d4b959b13723b"},{url:"baizhi/烟台大学.jpg",revision:"48dbbe9fcd3e8cb49c894eae166b83d5"},{url:"baizhi/烟台大学2.jpg",revision:"6ae27ff1c4cc7e47d723af148b4f8094"},{url:"baizhi/烟台大学3.jpg",revision:"00e85771deee9c0e3ea6ecb91f7f2cfc"},{url:"baizhi/电子科技大学.jpg",revision:"54ddb4afd589d75e4565669f580f45b6"},{url:"baizhi/电子科技大学（中山学院）.jpg",revision:"111427f3a1d4f99447244019dc56a19a"},{url:"baizhi/福州大学.jpg",revision:"1cd5aa5a6e0c7c4415cd401a8cc1e952"},{url:"baizhi/福州大学2.jpg",revision:"7b423fabce85767c182cf32e7d10b095"},{url:"baizhi/福州大学3.jpg",revision:"851f4264d59da94b6f5a1cafd3b94764"},{url:"baizhi/福建农林大学.jpg",revision:"bb8f9aa9c740835aee3f0cf1ecfdf853"},{url:"baizhi/苏州大学.jpg",revision:"f68631b8c247aa53def9ef129bc2ba91"},{url:"baizhi/苏州大学2.jpg",revision:"b992c928db04c4b60f1a069fcd56b8bf"},{url:"baizhi/苏州大学3.jpg",revision:"eead6af92dc9eb4a5624cba537687bb9"},{url:"baizhi/苏州大学文正学院.jpg",revision:"38c37aa73e7a12bd90dc5a38d975f1b3"},{url:"baizhi/苏州大学文正学院2.jpg",revision:"f35788d71ef69d44ffd20efeb13043c0"},{url:"baizhi/苏州大学文正学院3.jpg",revision:"9f970f3f2b5c99bf96fd9905159105a0"},{url:"baizhi/苏州科技大学.jpg",revision:"4d3b66c80caa18c0594bff752a3fd15e"},{url:"baizhi/苏州科技大学2.jpg",revision:"69cacecc24283b64c8781ed88b03ee9a"},{url:"baizhi/西交利物浦大学.jpg",revision:"e2d771521e1ee063f56d75feaea27303"},{url:"baizhi/西北大学.png",revision:"905fb4ac994e81a139188cfa6b229a56"},{url:"baizhi/西北政法大学.jpg",revision:"a4e85b509cc8265b9547c90272934a68"},{url:"baizhi/西华大学.jpg",revision:"318aeb8b7d73c1b83b36eeef2f8c74bf"},{url:"baizhi/西南交通大学.jpg",revision:"d2a1af50f4c78ba3449d3af6c9c7c984"},{url:"baizhi/西南交通大学2.jpg",revision:"c51942368a597abb87db8d8f3a5ee7fc"},{url:"baizhi/西南交通大学3.jpg",revision:"ee1f577a29d324ac80e3c87c1d1b05ca"},{url:"baizhi/西南交通大学4.jpg",revision:"812e502f42d14353e69ce28c2d4c0f49"},{url:"baizhi/西南医科大学.jpg",revision:"51147d10491b862741a2ceb32469005d"},{url:"baizhi/西南医科大学2.jpg",revision:"2e83c8af6729f9e122ca1fca83ca3d44"},{url:"baizhi/西南医科大学3.jpg",revision:"fee367254c0e3ba07c0e31f63c3c06ac"},{url:"baizhi/西南大学.jpg",revision:"3fcfad8c47334b7e0cc2289cac36f3e3"},{url:"baizhi/西南政法大学.jpg",revision:"5cce55bc6106289553598e1ea2371e73"},{url:"baizhi/西南科技大学.jpg",revision:"37f18899470c1682cff75a7dc83a7c43"},{url:"baizhi/西南科技大学2.jpg",revision:"9a33fbb9ed75d01990a6afaeaff22f54"},{url:"baizhi/西南科技大学3.jpg",revision:"f7ee3d6b64f3cbb8ad5ac1dbe657e726"},{url:"baizhi/西南科技大学4.jpg",revision:"1b197df5c98f98a5ba5f37b9a97a153a"},{url:"baizhi/西安外国语大学.png",revision:"a4d2c586687876cffec575708806815e"},{url:"baizhi/西安理工大学.jpg",revision:"724e7c00058a25d84bf5efea5f46f07b"},{url:"baizhi/西安电子科技大学.jpg",revision:"2428bac28f1afd08509f85c4456bd6dd"},{url:"baizhi/西安石油大学.png",revision:"3f756e84bce0b325a6275b89912a4b53"},{url:"baizhi/西安美术学院.jpg",revision:"5ce9c5c66d71c4a8d23cb67d856a43f3"},{url:"baizhi/西安美术学院2.jpg",revision:"d841ef4d2981b4a9f8bc71304f3c7761"},{url:"baizhi/西安美术学院3.jpg",revision:"30be3b68e6632f96440eec95db7f61a7"},{url:"baizhi/西安铁路职业技术学院.png",revision:"aeafe4bddbd4438c724b93b26068c4a0"},{url:"baizhi/贵州警察学院.jpg",revision:"a414af347e3e1c892cd2580f8647c5f4"},{url:"baizhi/辽宁大学.jpg",revision:"029e904c9297fab2739f347323c1ed9a"},{url:"baizhi/辽宁大学2.jpg",revision:"6ccd41fd3661ade676d365dd9f46744f"},{url:"baizhi/辽宁大学3.jpg",revision:"938210b5adac6c69e1ba458552ea5ab0"},{url:"baizhi/邵阳学院.jpg",revision:"fb9922836ecfb945975c761b13c73c09"},{url:"baizhi/郑州大学.png",revision:"a3677c839fa90bfb5f54a88600800833"},{url:"baizhi/重庆三峡学院.jpg",revision:"e8f2cd95424ff51198857a4f278db270"},{url:"baizhi/重庆外语外事学院.jpg",revision:"caf24fabe59a9f49c14adf277164f552"},{url:"baizhi/重庆外语外事学院2.jpg",revision:"bf4a46a41c310d06348df74c2238a972"},{url:"baizhi/重庆外语外事学院3.jpg",revision:"8949cc11febc5319b79b95841fc20dca"},{url:"baizhi/重庆大学.jpg",revision:"3450a60a3d72e42c7cc02c730c894319"},{url:"baizhi/重庆大学城某职业学院.jpg",revision:"d7af803b65b56f7ec15945f753f0124f"},{url:"baizhi/重庆大学城某职业学院2.jpg",revision:"53c6b74d304c118f7d7ebe71671d3901"},{url:"baizhi/重庆对外经贸学院.jpg",revision:"bb4546ba689b43316ada69a8b5f64f5c"},{url:"baizhi/重庆工商大学.jpg",revision:"464b374c603532fdf1bd04562947580f"},{url:"baizhi/重庆工商大学.png",revision:"51a84abf3ae9d12ea4aea2a69345baab"},{url:"baizhi/重庆科技学院.jpg",revision:"1031da9af92e5a64ec345c3f89dea6fa"},{url:"baizhi/重庆科技学院2.jpg",revision:"ce5413210ecac296fcc1193a86cab60d"},{url:"baizhi/长春人文学院.jpg",revision:"4589b9b68c0c65dfef0274c04b3c59aa"},{url:"baizhi/长沙师范学院.jpg",revision:"382be3d8e27e7d5ecdab6f331ab1ef1d"},{url:"baizhi/长沙师范学院2.jpg",revision:"a9b7cb5b7ac5af864cd7bbc3c08869a3"},{url:"baizhi/长沙师范学院3.jpg",revision:"28cd77f4d3ad99ef5c51bfed0a839a90"},{url:"baizhi/长沙理工大学.jpg",revision:"82ee6ef3554d6ee7436398a4d384d6d6"},{url:"baizhi/长沙理工大学2.jpg",revision:"9e5da2799b4d14549c92d3f1eca5b313"},{url:"baizhi/闽南师范大学.png",revision:"8ab00b5d250b96894abf680d7d24a1aa"},{url:"baizhi/闽南师范大学2.png",revision:"024a1f23b1456569d934de573e9c65d7"},{url:"baizhi/闽江学院.jpg",revision:"e7f1c7e88501e128f1c0146f4efdd227"},{url:"baizhi/闽江学院.png",revision:"70aacb3682290781eeed017dc06ac91c"},{url:"baizhi/闽江学院2.jpg",revision:"486bdd15e74e1276874b3b76b209de81"},{url:"baizhi/闽江学院3.jpg",revision:"a5bc58c7cc5084901b406031e01bc220"},{url:"baizhi/集美大学.jpg",revision:"8f8081be3d25c2be17c09f3328d617f4"},{url:"baizhi/青岛大学（浮山校区）.jpg",revision:"747b6072721c578b76fecd657ada5f7d"},{url:"baizhi/青岛大学（浮山校区）2.jpg",revision:"a7961935d11919c6f4c29503fd98df01"},{url:"baizhi/青岛大学（金家岭校区）.jpg",revision:"98c05ffe891e61154483bf21441d14e7"},{url:"baizhi/青岛大学（金家岭校区）2.jpg",revision:"ca55e2c74a7bbe817e5c2fc27428e7a4"},{url:"baizhi/青岛理工大学.jpg",revision:"9ce895729e539342cabee1464fead120"},{url:"baizhi/青岛电影学院.png",revision:"4ca8490f2865134d0785a9222416ecfc"},{url:"baizhi/鲁东大学.jpg",revision:"c5b5209e5c56545d7e0725f93303eac0"},{url:"baizhi/鲁东大学2.jpg",revision:"0ecf11d1f93a12c57146f2db9f0d55fe"},{url:"baizhi/鲁迅美术学院.jpg",revision:"a456ab0f3bcfc6040d7196214144cdaf"},{url:"baizhi/黑龙江大学.jpg",revision:"ed6b0baea362d8eccc19a46163b4845a"},{url:"gitalk.css",revision:"a7461a5e6c951e8fac128858bb848bc4"},{url:"index.html",revision:"2a0f3e948de94cfa771ac9a6fe4d5e78"},{url:"logo.png",revision:"e5d952f46288e55019d0a88245181a73"},{url:"shifachi.jpg",revision:"024531ec913b8e6fb8d603064cfeb538"}],{})}));