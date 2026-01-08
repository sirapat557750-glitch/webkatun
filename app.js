
const genres = [
  {
    id: "isekai",
    name: "ต่างโลก (Isekai)",
    items: [
      {
        title: "Mushoku Tensei",
        author: "Rifujin na Magonote",
        characters: ["รูเดียส เกรย์แรท", "ร็อกซี่ มิเกอร์เดีย", "ซิลฟีเอ็ต", "เอริส โบเรอัส เกรย์แรท"],
        description: "เรื่องราวของหนุ่มตกอับวัย 34 ปี ที่ได้ไปเกิดใหม่ในโลกแฟนตาซีที่มีเวทมนตร์และดาบ เขาสาบานว่าจะใช้ชีวิตใหม่ให้ดีที่สุด",
        image: "isekai/Jobless Reincarnation.jpg",
      },
      {
         title: "Re:Zero",
         author: "Tappei Nagatsuki",
         characters: ["นัตสึกิ สุบารุ", "เอมิลีอา", "เรม", "แรม", "เบียทริซ"],
         description: "เด็กหนุ่มที่ถูกอัญเชิญไปยังต่างโลกพร้อมกับพลัง 'ตายแล้วกลับมาเกิดใหม่' (Return by Death) เขาต้องใช้พลังนี้เพื่อปกป้องคนที่เขารักและเผชิญกับโชคชะตาที่โหดร้าย",
         image: "isekai/ReZero.webp", // ใช้ไฟล์ที่คุณระบุไว้ตอนแรก
      },
      {
    title: "Tensei Shitara Slime Datta Ken",
    author: "Fuse",
    characters: ["ริมุรุ เทมเพสต์", "เวรุดอร่า", "เบนิมารุ", "ชูนา", "ชิอน"],
    description: "พนักงานบริษัทหนุ่มถูกแทงตายแล้วไปเกิดใหม่ในต่างโลกเป็น 'สไลม์' แต่ด้วยทักษะสุดโกงอย่าง 'นักพยากรณ์' และ 'ผู้กลืนกิน' ทำให้เขากลายเป็นผู้สร้างประเทศอสูรที่ยิ่งใหญ่",
    image: "isekai/Tensei Shitara Slime Datta Ken.jpg"
},
      {
    title: "The Rising of the Shield Hero",
    author: "Aneko Yusagi",
    characters: ["อิวาทานิ นาโอฟุมิ", "ราฟทาเลีย", "ฟีโล", "เมลตี้"],
    description: "เด็กหนุ่มที่ถูกอัญเชิญไปต่างโลกในฐานะ 'ผู้กล้าแห่งโล่' แต่กลับถูกหักหลังและใส่ร้ายจนสูญเสียทุกอย่าง เขาจึงต้องเริ่มต้นจากศูนย์ด้วยความแค้นและพิสูจน์ตัวเองใหม่อีกครั้ง",
    image: "isekai/The Rising of the Shield Hero.jpg"
},
      {
    title: "Konosuba",
    author: "Natsume Akatsuki",
    characters: ["ซาโต้ คาซึมะ", "อควา", "เมกุมิน", "ดาร์คเนส"],
    description: "เด็กหนุ่มที่ตายด้วยสาเหตุสุดช็อกจนได้ไปเกิดใหม่ในต่างโลกพร้อมกับเทพธิดาสุดเพี้ยน และต้องร่วมปาร์ตี้กับเหล่านักผจญภัยจอมป่วนเพื่อทำภารกิจปราบราชาปีศาจ",
    image: "isekai/Konosuba.jpg"
},
      {
    title: "Overlord",
    author: "Kugane Maruyama",
    characters: ["ไอนซ์ อูล โกว์น", "อัลเบโด้", "แชลเทียร์ บลัดฟอลเลน", "เดมิอูร์โกส", "เซบาส เตียน"],
    description: "ในวันสุดท้ายของเกมออนไลน์ยอดฮิต ชายหนุ่มผู้หลงรักเกมนี้กลับไม่สามารถ Log-out ออกได้ และพบว่าโลกในเกมได้กลายเป็นความจริง เขาจึงต้องปกครองสุสานนาซาริคและแผ่ขยายอำนาจไปทั่วโลกใหม่",
    image: "isekai/Overlord.jpg"
},{
    title: "No Game No Life",
    author: "Yuu Kamiya",
    characters: ["โซระ", "ชิโระ", "สเตฟานี่ โดล่า", "จิบริล"],
    description: "สองพี่น้องเกมเมอร์อัจฉริยะที่ถูกอัญเชิญไปยังโลกที่ทุกอย่างตัดสินด้วย 'เกม' พวกเขาจึงต้องใช้สติปัญญาเพื่อกอบกู้เผ่าพันธุ์มนุษย์และท้าทายพระเจ้า",
    image: "isekai/No Game No Life.jpg"
},
      {
    title: "Isekai Oji-san",
    author: "Hotondoshindeiru",
    characters: ["ชิบาซากิ (คุณน้า)", "ทาคาฟุมิ", "ฟูจิมิยะ", "เอลฟ์ (ซุย)", "เมเบล"],
    description: "ชายวัยกลางคนที่ฟื้นจากอาการโคม่า 17 ปี และกลับมาพร้อมพลังเวทมนตร์จากต่างโลก เรื่องราวการปรับตัวให้เข้ากับยุค SEGA ครองใจ และการเล่าอดีตการผจญภัยสุดรันทดในต่างโลกจึงเริ่มขึ้น",
    image: "isekai/Isekai Oji-san.jpg"
},
     {
     title: "Tondemo Skill de Isekai Hourou Meshi",
    author: "Ren Eguchi",
    characters: ["มุโคด้า (ซึโยชิ มุโคดะ)", "เฟล", "ซุย", "ดร้าจัง"],
    description: "ชายหนุ่มที่ถูกอัญเชิญไปต่างโลกพร้อมสกิล 'ซูเปอร์มาร์เก็ตออนไลน์' ที่ดูไร้ค่าในตอนแรก แต่เขากลับใช้มันทำอาหารเลิศรสเพื่อผูกมิตรกับหมาป่าในตำนานและออกเดินทางท่องเที่ยวไปในโลกกว้าง",
    image: "isekai/Tondemo Skill de Isekai Hourou Meshi.jpg"
},
      {
    title: "Sword Art Online",
    author: "Reki Kawahara",
    characters: ["คิริโตะ (คิริกายะ คาสึโตะ)", "อาสึนะ (ยูกิ อาสึนะ)", "ยุย", "ชิน่อน", "ลีฟ่า"],
    description: "เหล่าเกมเมอร์นับหมื่นถูกขังอยู่ในเกม VRMMO ชื่อดังที่หากตายในเกมจะเท่ากับตายในโลกจริง คิริโตะนักดาบหนุ่มจึงต้องต่อสู้เพื่อเคลียร์เกมและพาเอาชีวิตรอดออกไปจากโลกแห่งดาบนี้ให้ได้",
    image: "isekai/Sword Art Online.jpg"
}
    ],
  },
  {
    id: "Fantasy",
    name: "แฟนตาซี (Fantasy)",
    items: [
      {
        title: "Frieren: Beyond Journey’s End",
        description: "เอลฟ์ผู้มีอายุยืนออกเดินทางอีกครั้งเพื่อเข้าใจมนุษย์หลังเพื่อนร่วมทีมตาย",
        image: "Fantasy/frieren_rec.png",
      },
     {
    title: "Fullmetal Alchemist: Brotherhood",
    author: "Hiromu Arakawa",
    characters: ["เอ็ดเวิร์ด เอลริค", "อัลฟอนเซ เอลริค", "วินรี่ ร็อกเบลล์", "รอย มัสแตง"],
    description: "สองพี่น้องเอลริคพยายามใช้ 'แปรธาตุ' เพื่อคืนชีพให้แม่ที่ตายไป แต่กลับต้องสูญเสียร่างกายไปเป็นค่าตอบแทน พวกเขาจึงออกเดินทางตามหา 'ศิลานักปราชญ์' เพื่อนำร่างกายเดิมกลับคืนมา",
    image: "Fantasy/Fullmetal Alchemist.jpg"
},
     {
    title: "Black Clover",
    author: "Yuki Tabata",
    characters: ["อัสตา", "ยูโน", "ยามิ สึเกะฮิโระ", "โนเอล ซิลวา"],
    description: "ในโลกที่ทุกคนใช้เวทมนตร์ได้ เด็กหนุ่มที่ไร้พลังเวทอย่างอัสตาต้องพยายามอย่างหนักเพื่อมุ่งสู่ตำแหน่งจักรพรรดิเวทมนตร์ โดยมีดาบมหึมาที่สามารถลบล้างเวทมนตร์ได้ทุกชนิดเป็นอาวุธคู่กาย",
    image: "Fantasy/Black Clover.jpg"
},
     {
    title: "Made in Abyss",
    author: "Akihito Tsukushi",
    characters: ["ริโกะ", "เร็ก", "นานาจิ", "บอนเดรด"],
    description: "เด็กสาวและหุ่นยนต์หนุ่มออกเดินทางลงไปสู่ 'อาบิส' หลุมยักษ์สุดลึกลับที่เต็มไปด้วยสมบัติและอันตราย เพื่อตามหาแม่ของเธอในส่วนลึกที่ไม่มีใครเคยรอดกลับมาได้ง่าย ๆ",
    image: "Fantasy/Made in Abyss.jpg"
},
      {
    title: "Ranking of Kings",
    author: "Sosuke Toko",
    characters: ["โบจจิ", "คาเกะ", "ไดด้า", "ฮิลลิ่ง", "โดมาส"],
    description: "เรื่องราวของ 'โบจจิ' เจ้าชายหูหนวกและไร้เรี่ยวแรงที่ผู้คนต่างดูแคลน แต่เขาไม่เคยย่อท้อและออกเดินทางไปพร้อมกับเพื่อนรัก 'คาเกะ' เพื่อพิสูจน์ตัวเองและก้าวขึ้นสู่การเป็นพระราชาที่ยิ่งใหญ่ที่สุด",
    image: "Fantasy/Ranking of Kings.jpg"
},
      {
    title: "Magi: The Labyrinth of Magic",
    author: "Shinobu Ohtaka",
    characters: ["อาลาดิน", "อาลีบาบา ซาลูจา", "โมลเซียน่า", "ซินแบด"],
    description: "การผจญภัยของเด็กน้อยผู้เป็น 'เมไจ' และเพื่อนพ้อง ในการพิชิตหอคอยปริศนาที่เรียกว่า 'ดันเจี้ยน' เพื่อรวบรวมพลังของจินและตัดสินผู้ที่จะขึ้นเป็นราชาเพื่อเปลี่ยนแปลงโลก",
    image: "Fantasy/Magi.jpg"
},
      {
    title: "Fairy Tail",
    author: "Hiro Mashima",
    characters: ["นัตสึ ดรากูนีล", "ลูซี่ ฮาร์ทฟิเลีย", "แฮปปี้", "เกรย์ ฟูลบัสเตอร์", "เอลซ่า สการ์เล็ต"],
    description: "เรื่องราวการผจญภัยของเหล่านักเวทแห่งกิลด์ 'แฟรี่เทล' ที่ขึ้นชื่อเรื่องความซ่าและความรักพวกพ้อง พวกเขาต้องออกทำภารกิจและต่อสู้กับศัตรูที่ร้ายกาจเพื่อปกป้องโลกเวทมนตร์",
    image: "Fantasy/Fairy Tail.jpg"
},
      {
    title: "Nanatsu no Taizai",
    author: "Nakaba Suzuki",
    characters: ["เมลิโอดัส", "เอลิซาเบธ", "บัน", "คิง", "ไดแอน", "โกเธอร์", "เมอร์ลิน", "เอสคานอร์"],
    description: "กลุ่มอดีตอัศวินผู้ทรงพลังที่สุด '7 บาป' ที่ถูกใส่ร้ายว่าก่อกบฏและต้องกระจัดกระจายกันไป ได้กลับมารวมตัวกันอีกครั้งตามคำขอของเจ้าหญิงเอลิซาเบธ เพื่อกอบกู้อาณาจักรลีโอเนสจากเหล่าอัศวินศักดิ์สิทธิ์ที่ฉ้อฉล",
    image: "Fantasy/Nanatsu no Taizai.jpg"
},
      {
    title: "Natsume's Book of Friends",
    author: "Yuki Midorikawa",
    characters: ["นัตสึเมะ ทาคาชิ", "มาดาระ (เนียนโกะเซนเซ)", "นัตสึเมะ เรโกะ", "ทานุมะ คานาเมะ"],
    description: "เด็กหนุ่มผู้มีพลังเห็นวิญญาณได้รับ 'บันทึกสหาย' ซึ่งเป็นมรดกจากคุณย่า เขาตัดสินใจจะคืนชื่อให้กับเหล่าปีศาจที่ถูกจองจำในบันทึก โดยมีปีศาจจอมกวนในคราบแมวกวักคอยติดตามและปกป้อง",
    image: "Fantasy/Natsume’s Book of Friends.jpg"
},
      {
    title: "Witch Watch",
    author: "Kenta Shinohara",
    characters: ["วากะ นิโกะ", "โอโตงิ โมริฮิโตะ", "คันซากิ เคโงะ", "มากามิ คันชิ"],
    description: "แม่มดฝึกหัด 'นิโกะ' ต้องมาอาศัยอยู่กับเพื่อนสมัยเด็กอย่าง 'โมริฮิโตะ' ผู้สืบเชื้อสายยักษ์ที่ต้องมาเป็นผู้พิทักษ์ให้เธอตามคำพยากรณ์ เรื่องราววุ่นๆ ของเวทมนตร์และชีวิตวัยรุ่นจึงเกิดขึ้น",
    image: "Fantasy/Witch Watch.jpg"
},
    ],
  },
  {
    id: "Action",
    name: "แอ็กชัน (Action)",
    items: [
      {
    title: "Jujutsu Kaisen",
    author: "Gege Akutami",
    characters: ["อิตาโดริ ยูจิ", "ฟุชิงุโระ เมงุมิ", "คุงิซากิ โนบาระ", "โกโจ ซาโตรุ"],
    description: "เรื่องราวของเด็กหนุ่มผู้กินนิ้วของเทพอสูรคำสาปเข้าไป ทำให้เขาต้องก้าวเข้าสู่โลกของไสยเวทเพื่อกำจัดคำสาปและเผชิญกับโชคชะตาที่ต้องเลือก",
    image: "Action/jujutsu kaisen.jpg"
},
     {
    title: "Demon Slayer: Kimetsu no Yaiba",
    author: "Koyoharu Gotouge",
    characters: ["คามาโดะ ทันจิโร่", "คามาโดะ เนซึโกะ", "อากาสึมะ เซนอิทซึ", "ฮาชิบิระ อิโนสึเกะ", "เรนโกคุ เคียวจูโร่"],
    description: "เรื่องราวของเด็กหนุ่มที่ครอบครัวถูกอสูรฆ่าตาย และน้องสาวกลายเป็นอสูร เขาจึงเข้ากลุ่มนักล่าอสูรเพื่อหาทางทำให้เธอประกลับมาเป็นมนุษย์อีกครั้ง",
    image: "Action/Demon Slayer.jpg"
},
      {
    title: "Attack on Titan",
    author: "Hajime Isayama",
    characters: ["เอเรน เยเกอร์", "มิคาสะ แอคเคอร์แมน", "อาร์มิน อัลเลิร์ท", "รีไวล์ แอคเคอร์แมน"],
    description: "มหากาพย์การต่อสู้ของมนุษยชาติที่ถูกกักขังอยู่หลังกำแพงเพื่อหนีการไล่ล่าจากเหล่าไททันกินคน สู่การเปิดเผยความลับของโลกที่เปลี่ยนโชคชะตาไปตลอดกาล",
    image: "Action/Attack on Titan.jpg"
  },
     {
    title: "My Hero Academia",
    author: "Kohei Horikoshi",
    characters: ["มิโดริยะ อิซึคุ (เดกุ)", "บาคุโก คัตสึกิ", "โทโดโริกิ โชโตะ", "ออลไมท์"],
    description: "ในโลกที่มนุษย์ส่วนใหญ่เกิดมาพร้อมพลังพิเศษที่เรียกว่า 'อัตลักษณ์' เด็กหนุ่มที่ไร้พลังอย่างเดกุได้รับสืบทอดพลังจากฮีโร่อันดับหนึ่งเพื่อเข้าเรียนในโรงเรียนฮีโร่และกลายเป็นสุดยอดฮีโร่ในอนาคต",
    image: "Action/My Hero Academia.jpg"
},
      {
    title: "Chainsaw Man",
    author: "Tatsuki Fujimoto",
    characters: ["เดนจิ", "มาคิมะ", "อากิ ฮายาคาวะ", "พาวเวอร์"],
    description: "เด็กหนุ่มถังแตกที่ทำสัญญากับปีศาจเลื่อยยนต์ 'โปจิตะ' จนกลายเป็นไฮบริดมนุษย์เลื่อยยนต์ เขาถูกดึงเข้าสู่หน่วยนักล่าปีศาจทางการเพื่อต่อสู้กับปีศาจที่น่ากลัวที่สุดในโลก",
    image: "Action/Chainsaw Man.jpg"
},
      {
    title: "One Punch Man",
    author: "ONE (Story), Yusuke Murata (Art)",
    characters: ["ไซตามะ", "เจนอส", "ทัตสึมากิ", "กาโร่", "แบงก์ (ซิลเวอร์แฟง)"],
    description: "เรื่องราวของไซตามะ ชายหนุ่มที่ฝึกฝนจนแข็งแกร่งเกินต้านทานจนสามารถปราบศัตรูทุกตัวได้ในหมัดเดียว เขาต้องเผชิญกับความเบื่อหน่ายในพลังที่ไร้เทียมทานของตนเอง พร้อมกับการทำหน้าที่ฮีโร่ไปวันๆ",
    image: "Action/One Punch Man.jpg"
},
      {
    title: "Sakamoto Days",
    author: "Yuto Suzuki",
    characters: ["ทาโร่ ซากาโมโตะ", "ชิน", "หลู เสี่ยวถัง", "อาโออิ ซากาโมโตะ"],
    description: "อดีตนักฆ่าในตำนานที่วางมือไปแต่งงานจนกลายเป็นเจ้าของร้านขายของชำหุ่นหมี แต่เมื่อโลกใต้ดินยังคงตามจองเวร เขาจึงต้องปกป้องชีวิตอันสงบสุขของครอบครัวด้วยทักษะการต่อสู้ระดับเทพ โดยมีกฎเหล็กว่า 'ห้ามฆ่าคนเด็ดขาด'",
    image: "Action/Sakamoto Days.jpg"
},
      {
    title: "Dandadan",
    author: "Yukinobu Tatsu",
    characters: ["อายาเสะ โมโมะ", "ทาคาคุระ เคน (โอคารุน)", "ยายเทอร์โบ", "ชิราโทริ ไอระ", "เอนโจจิ จิน (จิจิ)"],
    description: "เมื่อเด็กสาวผู้เชื่อเรื่องผีแต่ไม่เชื่อมนุษย์ต่างดาว และเด็กหนุ่มผู้เชื่อมนุษย์ต่างดาวแต่ไม่เชื่อเรื่องผี ต้องมาพัวพันกับเหตุการณ์เหนือธรรมชาติสุดเพี้ยน ทั้งคู่จึงต้องร่วมมือกันต่อสู้เพื่อทวงคืน 'อวัยวะสำคัญ' และปกป้องโลก",
    image: "Action/Dandadan.jpg"
},
      {
    title: "Bleach",
    author: "Tite Kubo",
    characters: ["คุโรซากิ อิจิโกะ", "คุจิกิ ลูเคีย", "อาบาราอิ เร็นจิ", "ไอเซ็น โซสึเกะ", "ซาราคิ เคมปาจิ"],
    description: "เด็กหนุ่มที่มองเห็นวิญญาณได้รับพลัง 'ยมทูต' มาโดยบังเอิญ เขาจึงต้องรับหน้าที่ปกป้องโลกมนุษย์จากเหล่าฮอลโลว์ และเข้าสู่การต่อสู้สุดอลังการในโซลโซไซตี้ที่มีชะตากรรมของทุกโลกเป็นเดิมพัน",
    image: "Action/Bleach.jpg"
},
      {
    title: "Tokyo Revengers",
    author: "Ken Wakui",
    characters: ["ฮานากากิ ทาเคมิจิ", "ซาโนะ มันจิโร่ (ไมกี้)", "ริวกูจิ เคน (ดราเค่น)", "บาจิ เคอิสึเกะ"],
    description: "ทาเคมิจิ ชายหนุ่มชีวิตห่วยแตกที่ย้อนเวลากลับไปเมื่อ 12 ปีก่อนได้ เขาจึงพยายามแก้ไขอดีตเพื่อเปลี่ยนโชคชะตาของแก๊งโตเกียวมันจิไคและช่วยชีวิตคนสำคัญไม่ให้ต้องตายในอนาคต",
    image: "Action/Tokyo Revengers.jpg"
},
    ],
  },
  {
    id: "Horror",
    name: "สยองขวัญ (Horror)",
    items: [
      {
    title: "Jujutsu Kaisen",
    author: "Gege Akutami",
    characters: ["อิตาโดริ ยูจิ", "ฟุชิงุโระ เมงุมิ", "คุงิซากิ โนบาระ", "โกโจ ซาโตรุ"],
    description: "เรื่องราวของเด็กหนุ่มผู้กินนิ้วของเทพอสูรคำสาปเข้าไป ทำให้เขาต้องก้าวเข้าสู่โลกของไสยเวทเพื่อกำจัดคำสาปและเผชิญกับโชคชะตาที่ต้องเลือก",
    image: "Horror/jujutsu kaisen 2.jpg"
},
      {
    title: "Tokyo Ghoul",
    author: "Sui Ishida",
    characters: ["คาเนกิ เคน", "คิริชิมะ โทกะ", "อามอน โคทาโร่", "ริเซะ คามิชิโระ"],
    description: "เด็กหนุ่มมหาวิทยาลัยธรรมดาที่ต้องกลายเป็นครึ่งมนุษย์ครึ่ง 'กูล' หลังอุบัติเหตุเฉียดตาย เขาต้องเรียนรู้ที่จะใช้ชีวิตในโลกมืดที่เต็มไปด้วยการล่าและความเกลียดชังระหว่างเผ่าพันธุ์เพื่อรักษาความเป็นมนุษย์ที่เหลืออยู่",
    image: "Horror/Tokyo Ghoul.jpg"
},
     {
    title: "Mieruko-chan",
    author: "Tomoki Izumi",
    characters: ["โยตสึยะ มิโกะ", "ยูริคาวะ ฮานะ", "นิกุเระโด มิชิรุ", "คุณย่ามิทสึเอะ"],
    description: "เด็กสาวมัธยมปลายธรรมดาที่จู่ๆ ก็มองเห็นวิญญาณสยองขวัญได้ทุกที่ วิธีเดียวที่จะเอาตัวรอดคือเธอต้องทำเป็น 'มองไม่เห็น' และเมินเฉยต่อพวกมันให้แนบเนียนที่สุดเพื่อไม่ให้ถูกคุกคาม",
    image: "Horror/Mieruko-chan.jpg"
},
      {
    title: "Another",
    author: "Yukito Ayatsuji",
    characters: ["ซากากิบาระ โคอิจิ", "มิซากิ เมย์", "อาคาซาวะ อิซุมิ", "มิคามิ เรอิโกะ"],
    description: "โศกนาฏกรรมสยองขวัญในโรงเรียนมัธยมที่มีคำสาปมรณะซ่อนอยู่ เมื่อห้องเรียนปี 3 ห้อง 3 มี 'คนตาย' แฝงตัวอยู่ ทำให้คนในห้องและคนรอบข้างต้องพบกับความตายที่หาสาเหตุไม่ได้ พวกเขาจึงต้องรีบหาคำตอบก่อนที่ทุกคนจะถูกกำจัดจนหมด",
    image: "Horror/Another.jpg"
},
      {
    title: "The Promised Neverland",
    author: "Kaiu Shirai (Story), Posuka Demizu (Art)",
    characters: ["เอ็มม่า", "นอร์แมน", "เรย์", "หม่าม่า อิซาเบลล่า"],
    description: "เด็กกำพร้าอัจฉริยะกลุ่มหนึ่งค้นพบความจริงอันดำมืดของสถานสงเคราะห์ที่พวกเขาเติบโตมา ว่าแท้จริงแล้วมันคือ 'ฟาร์ม' มนุษย์เพื่อส่งเป็นอาหารให้ปีศาจ พวกเขาจึงต้องใช้สติปัญญาทั้งหมดเพื่อวางแผนหลบหนีออกจากสวรรค์ลวงตานี้",
    image: "Horror/The Promised Neverland.jpg"
},
      {
    title: "Hell Girl",
    author: "Miyuki Etoo (Manga), Hiroshi Watanabe (Original concept)",
    characters: ["เอ็นมะ ไอ", "อิจิโมกุ เร็น", "โฮเนะ ออนนะ", "วานิวโดะ"],
    description: "ตำนานเมืองเกี่ยวกับเว็บไซต์ลึกลับที่จะเปิดตอนเที่ยงคืนเท่านั้น หากใครพิมพ์ชื่อคนที่มีความแค้นลงไป 'ธิดาอเวจี' จะปรากฏตัวเพื่อลากเป้าหมายลงนรกทันที แต่ผู้ร้องขอต้องแลกด้วยการตกนรกหลังสิ้นอายุขัยของตนเองเช่นกัน",
    image: "Horror/Hell Girl.jpg"
},
      {
    title: "Mob Psycho 100",
    author: "ONE",
    characters: ["คาเกยาม่า ชิเกโอะ (ม็อบ)", "เรเก็น อาราตากะ", "เอคุโบะ", "คาเกยาม่า ริตสึ", "ฮานาซาว่า เทรุกิ"],
    description: "เด็กหนุ่มผู้มีพลังจิตมหาศาลที่พยายามใช้ชีวิตอย่างถ่อมตัวและควบคุมอารมณ์ไม่ให้ระเบิดถึง 100% เขาทำงานพาร์ทไทม์เป็นผู้ช่วยของอาจารย์กำมะลอเพื่อเรียนรู้วิธีการใช้ชีวิตแบบคนปกติท่ามกลางเหตุการณ์เหนือธรรมชาติ",
    image: "Horror/Mob Psycho 100.jpg"
},
      {
    title: "Death Note",
    author: "Tsugumi Ohba (Story), Takeshi Obata (Art)",
    characters: ["ยางามิ ไลท์ (คิระ)", "แอล (L)", "ริวคุ", "อามาเนะ มิสะ", "เนียร์"],
    description: "เด็กหนุ่มอัจฉริยะ 'ยางามิ ไลท์' บังเอิญเก็บสมุดโน้ตของยมทูตที่สามารถพรากชีวิตใครก็ได้เพียงแค่เขียนชื่อลงไป เขาตัดสินใจใช้มันพิพากษาอาชญากรเพื่อสร้างโลกใหม่ที่ไร้ความชั่วร้าย จนกระทั่งต้องเผชิญหน้ากับการไล่ล่าจากนักสืบที่ฉลาดที่สุดในโลกอย่าง 'แอล'",
    image: "Horror/Death Note.jpg"
},
      {
    title: "Jigoku Raku",
    author: "Yuji Kaku",
    characters: ["กาบิมารุ", "ยามาดะ อาซาเอมอน ซากิริ", "ยูซึริฮะ", "อาซะ โจเบ", "ยามาดะ อาซาเอมอน ชิอน"],
    description: "กาบิมารุ 'ผู้ว่างเปล่า' นินจานักฆ่าระดับตำนาน ได้รับข้อเสนอให้ไปตามหา 'ยาอมตะ' บนเกาะลึกลับที่เชื่อว่าเป็นดินแดนสุขาวดี เพื่อแลกกับการพ้นผิดและกลับไปใช้ชีวิตสงบสุขกับภรรยา เขาต้องต่อสู้เอาชีวิตรอดจากอสูรประหลาดและนักโทษคนอื่นๆ บนเกาะที่เต็มไปด้วยปริศนา",
    image: "Horror/Jigoku Raku.jpg"
},
      {
    title: "High School DxD",
    author: "Ichiei Ishibumi",
    characters: ["เฮียวโด อิซเซย์", "เรียส เกรโมรี่", "อาเคโนะ ฮิเมะจิมะ", "อาเซีย อาร์เจนโต้"],
    description: "เด็กหนุ่มจอมหื่นที่ถูกฆ่าตายในเดทแรก แต่ถูกชุบชีวิตขึ้นมาเป็นปีศาจข้ารับใช้ของ 'เรียส เกรโมรี่' สาวสวยที่สุดในโรงเรียน เขาต้องเข้าสู่สงครามระหว่างเผ่าพันธุ์และฝึกฝนพลัง 'บูสต์เกียร์' เพื่อปกป้องเหล่านางฟ้าและปีศาจสาวในฮาเร็มของเขา",
    image: "Horror/Highschool DxD.jpg"
},
    ],
  },
  {
    id: "Romance",
    name: "โรแมนติก (Romance)",
    items: [
      {
    title: "Your Name",
    author: "Makoto Shinkai",
    characters: ["ทาจิบานะ ทาคิ", "มิยามิซุ มิตสึฮะ"],
    description: "เรื่องราวปาฏิหาริย์ระหว่างคนสองคนที่อยู่คนละที่แต่กลับสลับร่างกันในความฝัน จนเกิดเป็นสายสัมพันธ์ที่ข้ามผ่านกาลเวลาและระยะทาง ท่ามกลางปรากฏการณ์ดาวตกที่จะเปลี่ยนชีวิตของพวกเขาทั้งคู่ไปตลอดกาล",
    image: "Romance/Your Name.jpg"
},
      {
    title: "Horimiya",
    author: "HERO (Story), Daisuke Hagiwara (Art)",
    characters: ["โฮริ เคียวโกะ", "มิยามุระ อิซุมิ", "อิชิกาวะ โทรุ", "โยชิกาวะ ยูกิ"],
    description: "เรื่องราวของคนสองคนที่ต่างก็มี 'ตัวตนอีกด้าน' ซ่อนอยู่จากสายตาเพื่อนร่วมชั้น เมื่อโฮริสาวป๊อปผู้เก่งกาจมาพบกับมิยามุระหนุ่มเงียบขรึมในชุดนอกโรงเรียนที่คาดไม่ถึง ความสัมพันธ์ที่เริ่มต้นจากการแชร์ความลับจึงกลายเป็นความรักที่แสนบริสุทธิ์",
    image: "Romance/Horimiya.jpg"
},
      {
    title: "The Fragrant Flower Blooms With Dignity",
    author: "Saka Mikami",
    characters: ["สึมูกิ รินทาโร่", "วากุริ คาโอรุโกะ", "อุซามิ โชเฮ", "นัตสึซาวะ สึบารุ"],
    description: "รินทาโร่ เด็กหนุ่มหน้าดุจากโรงเรียนชายล้วนสุดเถื่อน ได้พบกับ คาโอรุโกะ เด็กสาวผู้สดใสจากโรงเรียนสตรีผู้ดีที่อยู่ติดกัน แม้กำแพงระหว่างโรงเรียนจะสูงชันและเต็มไปด้วยอคติ แต่ความจริงใจของทั้งคู่กลับค่อยๆ เบ่งบานเหมือนดอกไม้ที่งดงาม",
    image: "Romance/The Fragrant Flower Blooms With Dignity.jpg"
},
      {
    title: "Tonikaku Kawaii",
    author: "Kenjiro Hata",
    characters: ["ยูซากิ นาสะ", "ยูซากิ สึคาสะ"],
    description: "เรื่องราวของนาสะที่ตกหลุมรักสึคาสะสาวลึกลับตั้งแต่วินาทีแรกที่เห็น และตัดสินใจแต่งงานกันทันทีเพื่อที่จะได้อยู่ด้วยกัน นำไปสู่ชีวิตข้าวใหม่ปลามันที่เต็มไปด้วยความอบอุ่นและปริศนาเกี่ยวกับตัวตนที่แท้จริงของสึคาสะ",
    image: "Romance/Tonikaku Kawaii.jpg"
},
      {
    title: "Kubo-san wa Mob wo Yurusanai",
    author: "Nene Yukimori",
    characters: ["ชิราอิชิ จุนตะ", "คุโบะ นากิสะ", "คุโบะ อากินะ", "คุโบะ ซากิ"],
    description: "ชิราอิชิ เด็กหนุ่มที่มีตัวตนจืดชืดจนแทบไม่มีใครสังเกตเห็น แต่กลับมีเพียง คุโบะ สาวสวยเพื่อนร่วมชั้นที่มองเห็นเขาเสมอ และเธอมักจะเข้ามาป่วนชีวิตประจำวันของเขาให้ไม่เงียบเหงาอีกต่อไป",
    image: "Romance/Kubo-san wa Mob wo Yurusanai.jpg"
},
      
    {
    title: "Insomniacs After School",
    author: "Makoto Ojiro",
    characters: ["นากามิ กันตะ", "มางาริ อิซากิ"],
    description: "เรื่องราวของเด็กหนุ่มและเด็กสาวสองคนที่ทุกข์ทรมานจากโรคนอนไม่หลับเหมือนกัน พวกเขาได้พบความสบายใจในหอดูดาวร้างของโรงเรียน และเริ่มสร้างความสัมพันธ์อันแสนพิเศษผ่านช่วงเวลากลางคืนร่วมกัน",
    image: "Romance/Insomniacs After School.jpg"

},
      {
    title: "Rent-A-Girlfriend",
    author: "Reiji Miyajima",
    characters: ["มิซึฮาระ จิซึรุ", "คิโนชิตะ คาสึยะ", "นานามิ มามิ", "ซาราระ รุกะ", "ซากุระซาวะ สุมิ"],
    description: "เรื่องราวของคาสึยะที่ตัดสินใจเช่าแฟนสาวมาประชดรักครั้งเก่า แต่กลับได้พบกับจิซึรุ สาวเช่าสุดเพอร์เฟกต์ที่โชคชะตาเล่นตลกให้ต้องมาพัวพันกันในชีวิตจริงและแกล้งเป็นแฟนกันต่อหน้าครอบครัวจนถอนตัวไม่ขึ้น",
    image: "Romance/Rent-A-Girlfriend.jpg"
},
     {
    title: "Rascal Does Not Dream of Bunny Girl Senpai",
    author: "Hajime Kamoshida",
    characters: ["อาซาสึกาวะ ซาคุตะ", "ซากุระจิมะ ไม", "อาซาสึกาวะ คาเอเดะ", "มากิโนฮาระ โชโกะ"],
    description: "เรื่องราวของซาคุตะที่ได้พบกับรุ่นพี่ไม ดาราสาวชื่อดังในชุดบันนี่เกิร์ลกลางห้องสมุด แต่ความประหลาดคือไม่มีใครมองเห็นเธอเลย เขาจึงต้องยื่นมือเข้าไปช่วยแก้ปัญหา 'ภาวะผิดปกติในวัยรุ่น' ที่แฝงไปด้วยความเจ็บปวดและการเติบโต",
    image: "Romance/Rascal Does Not Dream of Bunny Girl Senpai.jpg"
},
      {
    title: "Wotakoi: Love is Hard for Otaku",
    author: "Fujita",
    characters: ["โมโมเซะ นารุมิ", "นิฟูจิ ฮิโรทากะ", "โคยานางิ ฮานาโกะ", "คาบาคุระ ทาโร่"],
    description: "เรื่องราวความรักของเหล่าโอตาคุวัยทำงาน เมื่อนารุมิสาวออฟฟิศผู้ปกปิดงานอดิเรกสายวายของเธอ ได้มาพบกับฮิโรทากะเพื่อนสมัยเด็กที่เป็นเกมเมอร์ตัวยง ทั้งคู่จึงตกลงคบกันเพื่อให้สามารถแชร์ชีวิตติ่งได้อย่างเต็มที่โดยไม่ต้องอายใคร",
    image: "Romance/Wotakoi.jpg"
},
      {
    title: "Kokoro Connect",
    author: "Sadanatsu Anda",
    characters: ["ยาเอกาชิ ไทจิ", "นากาเซะ อิโอริ", "อินาบะ ฮิเมโกะ", "คิริยามะ ยูอิ", "อาโอกิ โยชิฟุมิ"],
    description: "เรื่องราวของกลุ่มเพื่อน 5 คนในชมรมวิจัยวัฒนธรรมที่ต้องเผชิญกับปรากฏการณ์ประหลาดที่ทำให้พวกเขาสลับร่างกันและต้องเผยความลับในใจออกมา",
    image: "Romance/Kokoro Connect.jpg"
},
    ],
  },
  {
    id: "Adventure",
    name: "ผจญภัย (Adventure)",
    items: [
     {
    title: "One Piece",
    author: "Eiichiro Oda",
    characters: ["มังกี้ ดี. ลูฟี่", "โรโรโนอา โซโล", "นามิ","อุซป", "ซันจิ", "โทนีโทนี ช็อปเปอร์","นิโคล โรบิน","แฟงกี้","บรู๊ค","จินเบ"],
    description: "เรื่องราวของเด็กหนุ่มผู้กินผลปีศาจและต้องการเป็นราชาโจรสลัด เขาออกเดินเรือรวบรวมพรรคพวกเพื่อตามหาสมบัติในตำนาน 'วันพีซ' ในโลกแห่งการผจญภัยที่ไร้ขีดจำกัด",
    image: "Adventure/one piece.jpg"
},
      {
    title: "Hunter x Hunter",
    author: "Yoshihiro Togashi",
    characters: ["กอร์น ฟรีคส์", "คิรัวร์ โซลดิ๊กส์", "คุราปิก้า", "เลโอริโอ", "ฮิโซกะ"],
    description: "เด็กหนุ่มชื่อกอร์นออกเดินทางเพื่อเป็น 'ฮันเตอร์' และตามหาพ่อที่หายสาบสูญ ระหว่างทางเขาได้พบกับมิตรภาพแท้และการต่อสู้ที่ต้องใช้ไหวพริบมหาศาลเพื่อเอาชีวิตรอดในโลกที่เต็มไปด้วยอันตรายและปริศนาเหนือคาด",
    image: "Adventure/Hunter x Hunter.jpg"
},
      {
    title: "Naruto",
    author: "Masashi Kishimoto",
    characters: ["อุซึมากิ นารูโตะ", "อุจิวะ ซาสึเกะ", "ฮารุโนะ ซากุระ", "ฮาตาเกะ คาคาชิ", "จิไรยะ"],
    description: "เด็กหนุ่มผู้มีจิ้งจอกเก้าหางผนึกอยู่ในร่างและเติบโตมาพร้อมกับความโดดเดี่ยว เขามีความฝันอันยิ่งใหญ่ที่จะเป็น 'โฮคาเงะ' เพื่อให้ทุกคนในหมู่บ้านยอมรับ จนนำไปสู่มหากาพย์การต่อสู้และมิตรภาพที่ตราตรึงใจคนทั่วโลก",
    image: "Adventure/Naruto.jpg"
},
      {
    title: "Dragon Ball Z",
    author: "Akira Toriyama",
    characters: ["ซุน โกคู", "เบจิต้า", "ซุน โกฮัง", "พิคโกโร่", "ฟรีเซอร์", "เซล", "จอมมารบู"],
    description: "มหากาพย์การต่อสู้เพื่อปกป้องจักรวาลของโกคูและพรรคพวก จากเหล่าวายร้ายที่แข็งแกร่งที่สุดในจักรวาล เป็นอนิเมะแนวแอ็คชันที่เป็นต้นแบบของแนวโชเน็นทั่วโลก",
    image: "Adventure/Dragon Ball Z.jpg"
},
      {
    title: "Vinland Saga",
    author: "Makoto Yukimura",
    characters: ["ทอร์ฟิน", "อาสเกลัด", "ทอร์เคล", "เจ้าชายคนูต"],
    description: "เรื่องราวการล้างแค้นและการไถ่บาปของทอร์ฟิน ท่ามกลางยุคสมัยของชาวไวกิ้งที่เต็มไปด้วยสงครามและการแย่งชิง เพื่อค้นหาความหมายของ 'นักรบที่แท้จริง' และดินแดนที่ไม่มีการสู้รบอย่างวินแลนด์",
    image: "Adventure/Vinland Saga.jpg"
},
     {
    title: "Golden Kamuy",
    author: "Satoru Noda",
    characters: ["สุกิโมโตะ ไซจิ", "อาชิริปะ", "ชิราอิชิ โยชิทากะ", "สิบโทซึรุมิ", "ฮิจิคาตะ โทชิโซ"],
    description: "การผจญภัยในฮอกไกโดเพื่อตามหาขุมทรัพย์ทองคำที่ซ่อนอยู่ ผ่านเบาะแสรอยสักบนร่างของเหล่านักโทษประหาร เป็นการร่วมมือกันของทหารผ่านศึก 'สุกิโมโตะผู้ไม่ตาย' และเด็กสาวชาวไอนุ 'อาชิริปะ'",
    image: "Adventure/Golden Kamuy.jpg"
},
      {
    title: "Dr. Stone",
    author: "Riichiro Inagaki",
    characters: ["อิชิกามิ เซ็นคู", "อาซากิริ เก็น", "โคฮาคุ", "โครอม", "ชิชิโอะ สึคาสะ"],
    description: "เมื่อมนุษยชาติกลายเป็นหินไปหลายพันปี เซ็นคูเด็กหนุ่มอัจฉริยะจึงต้องใช้พลังแห่งวิทยาศาสตร์เพื่อฟื้นฟูอารยธรรมมนุษย์ขึ้นมาใหม่จากยุคหิน",
    image: "Adventure/Dr. Stone.jpg"
},
      {
    title: "Tower of God",
    author: "SIU",
    characters: ["พัมที่ 25", "ราเชล", "คูน อเกโร่ อักเนส", "รัค แรธเรเซอร์"],
    description: "การผจญภัยในหอคอยลึกลับของพัม เด็กหนุ่มที่ยอมทุ่มเททุกอย่างเพื่อตามหาราเชล เพื่อนคนสำคัญ โดยต้องเผชิญกับบททดสอบสุดอันตรายเพื่อปีนไปสู่จุดสูงสุดของหอคอย",
    image: "Adventure/Tower of God.jpg"
},
      {
    title: "Danmachi",
    author: "Fujino Omori",
    characters: ["เบล คราเนล", "เฮสเทีย", "ไอส์ วัลเลนสไตน์", "ลิลิรูคา อาเด้", "เวลฟ์ โครซโซ่"],
    description: "การผจญภัยของเบล นักผจญภัยมือใหม่ในเมืองโอราซาริโอที่มุ่งมั่นจะแข็งแกร่งขึ้นภายใต้การสนับสนุนของเทพธิดาเฮสเทีย เพื่อก้าวข้ามขีดจำกัดและเผชิญหน้ากับเหล่ามอนสเตอร์ในดันเจี้ยน",
    image: "Adventure/Danmachi.jpg"
},
      {
    title: "Magi: The Labyrinth of Magic",
    author: "Shinobu Ohtaka",
    characters: ["อาลาดิน", "อาลีบาบา ซาลูจา", "โมลเซียน่า", "ซินแบด"],
    description: "การผจญภัยของเด็กน้อยผู้เป็น 'เมไจ' และเพื่อนพ้อง ในการพิชิตหอคอยปริศนาที่เรียกว่า 'ดันเจี้ยน' เพื่อรวบรวมพลังของจินและตัดสินผู้ที่จะขึ้นเป็นราชาเพื่อเปลี่ยนแปลงโลก",
    image: "Adventure/Magi 2.jpg"
},
    ],
  },

];

// Helper: flatten items for search
const allItems = genres.flatMap((g) => // สร้างอาเรย์ใหม่ที่รวมอนิเมะจากทุกหมวดหมู่เข้าด้วยกันเพื่อให้ค้นหาง่ายขึ้น
  g.items.map((item, index) => ({ // วนลูปสร้างข้อมูล Object ใหม่สำหรับอนิเมะแต่ละเรื่อง
    ...item, // คัดลอกข้อมูลเดิมของไอเทมมาทั้งหมด
    genreId: g.id, // เพิ่มรหัสหมวดหมู่เข้าไปในตัวข้อมูลไอเทม
    genreName: g.name, // เพิ่มชื่อหมวดหมู่เข้าไป
    key: `${g.id}-${index}`, // สร้างคีย์เฉพาะ (Unique Key) โดยรวมไอดีหมวดหมู่กับลำดับ index
  }))
); // ปิดการรวมข้อมูล

// Review storage in-memory
const siteReviews = []; // อาร์เรย์สำหรับเก็บรีวิวของตัวเว็บไซต์
const animeReviews = {}; // อ็อบเจกต์เก็บรีวิวแยกตามรายเรื่อง โดยใช้ key เป็นตัวอ้างอิง
let favorites = new Set(); // เก็บรายการที่ถูกใจ (ใช้ Set เพื่อไม่ให้ข้อมูลซ้ำ)
const FAVORITES_STORAGE_KEY = "animeFavoritesByUser"; // ชื่อคีย์สำหรับบันทึกข้อมูลในความจำของ Browser (LocalStorage)
let currentView = "all"; // ตัวแปรบอกสถานะการแสดงผลปัจจุบัน (ทั้งหมด หรือ เฉพาะรายการโปรด)

 // Simple auth state
let isLoggedIn = false; // ตัวแปรเช็คสถานะว่าผู้ใช้ล็อกอินอยู่หรือไม่
let currentUser = null; // ตัวแปรเก็บข้อมูลชื่อผู้ใช้ที่กำลังล็อกอิน
// เก็บผู้ใช้แบบง่าย ๆ ในหน่วยความจำ โดยมี admin/admin เป็นค่าเริ่มต้น
const users = { // อ็อบเจกต์จำลองฐานข้อมูลผู้ใช้
  admin: "admin", // ชื่อผู้ใช้: admin, รหัสผ่าน: admin
};

// โหลด / บันทึกข้อมูลถูกใจแบบแยกตามผู้ใช้
function loadFavoritesForUser(username) { // ฟังก์ชันดึงข้อมูลรายการโปรดจาก LocalStorage ตามชื่อผู้ใช้
  try { // เริ่มต้นการตรวจสอบข้อผิดพลาด
    const raw = localStorage.getItem(FAVORITES_STORAGE_KEY); // ดึงข้อมูลดิบจากหน่วยความจำเครื่อง
    if (!raw) return new Set(); // ถ้าไม่มีข้อมูล ให้ส่งค่า Set ว่างกลับไป
    const parsed = JSON.parse(raw); // แปลงข้อมูลจากข้อความ (String) เป็น Object
    const list = parsed[username] || []; // ดึงรายการโปรดเฉพาะของคนนั้น ถ้าไม่มีให้เป็นอาเรย์ว่าง
    return new Set(list); // ส่งค่ากลับเป็นรูปแบบ Set
  } catch (e) { // ถ้าเกิดข้อผิดพลาดในการโหลด
    return new Set(); // ให้ส่งค่า Set ว่างกลับไปแทน
  }
}

function saveFavoritesForUser(username, favoritesSet) { // ฟังก์ชันบันทึกข้อมูลรายการโปรดลงเครื่อง
  try { // เริ่มต้นการตรวจสอบข้อผิดพลาด
    const raw = localStorage.getItem(FAVORITES_STORAGE_KEY); // ดึงข้อมูลเดิมที่มีอยู่ในเครื่องมาก่อน
    const parsed = raw ? JSON.parse(raw) : {}; // ถ้ามีข้อมูลให้แปลงเป็น Object ถ้าไม่มีให้สร้างใหม่
    parsed[username] = Array.from(favoritesSet); // แปลงข้อมูลจาก Set กลับเป็น Array เพื่อเซฟลง JSON
    localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(parsed)); // บันทึกข้อมูลที่แปลงเป็น String กลับลงเครื่อง
  } catch (e) { // ถ้าเกิดข้อผิดพลาดในการบันทึก
    // ignore write error (ข้ามข้อผิดพลาดไป)
  }
}

// DOM elements (การดึงองค์ประกอบต่างๆ จากหน้า HTML มาเก็บในตัวแปร)
const cardsContainer = document.getElementById("cardsContainer"); // พื้นที่แสดงการ์ดอนิเมะ
const currentCategoryTitle = document.getElementById("currentCategoryTitle"); // ข้อความหัวข้อหมวดหมู่ที่กำลังดู
const categoryListEl = document.getElementById("categoryList"); // รายการเมนูหมวดหมู่
const categoryMenu = document.getElementById("categoryMenu"); // ตัวเมนูหมวดหมู่ทั้งหมด
const categoryToggle = document.getElementById("categoryToggle"); // ปุ่มเปิด/ปิดเมนูหมวดหมู่
const categoryClose = document.getElementById("categoryClose"); // ปุ่มปิดเมนูหมวดหมู่
const favoritesMenu = document.getElementById("favoritesMenu"); // ตัวเมนูรายการโปรด
const favoritesListEl = document.getElementById("favoritesList"); // พื้นที่แสดงรายชื่อเรื่องที่ถูกใจ
const favoritesToggle = document.getElementById("favoritesToggle"); // ปุ่มเปิดเมนูรายการโปรด
const favoritesClose = document.getElementById("favoritesClose"); // ปุ่มปิดเมนูรายการโปรด
const overlay = document.getElementById("overlay"); // แผ่นสีดำโปร่งแสงด้านหลัง (Overlay)
const searchInput = document.getElementById("searchInput"); // ช่องกรอกคำค้นหา
const searchBtn = document.getElementById("searchBtn"); // ปุ่มกดเพื่อค้นหา
const homeLogo = document.getElementById("homeLogo"); // โลโก้หน้าแรก

const trendingSlide = document.getElementById("trendingSlide"); // ส่วนแสดงสไลด์อนิเมะยอดฮิต
const trendingPrev = document.getElementById("trendingPrev"); // ปุ่มย้อนกลับของสไลด์
const trendingNext = document.getElementById("trendingNext"); // ปุ่มถัดไปของสไลด์
const trendingDots = document.getElementById("trendingDots"); // จุดบอกตำแหน่งของสไลด์

// Login elements (องค์ประกอบหน้าล็อกอิน)
const loginToggle = document.getElementById("loginToggle"); // ปุ่มเปิดหน้าล็อกอิน
const loginSheet = document.getElementById("loginSheet"); // หน้าต่าง (Sheet) ล็อกอิน
const loginClose = document.getElementById("loginClose"); // ปุ่มปิดหน้าล็อกอิน
const loginSubmit = document.getElementById("loginSubmit"); // ปุ่มกดยืนยันการล็อกอิน
const loginUsername = document.getElementById("loginUsername"); // ช่องกรอกชื่อผู้ใช้สำหรับล็อกอิน
const loginPassword = document.getElementById("loginPassword"); // ช่องกรอกรหัสผ่านสำหรับล็อกอิน
const loginError = document.getElementById("loginError"); // ข้อความแจ้งเตือนเมื่อล็อกอินผิดพลาด
const signupOpen = document.getElementById("signupOpen"); // ปุ่มสำหรับสลับไปหน้าสมัครสมาชิก

// Signup elements (องค์ประกอบหน้าสมัครสมาชิก)
const signupSheet = document.getElementById("signupSheet"); // หน้าต่างสมัครสมาชิก
const signupClose = document.getElementById("signupClose"); // ปุ่มปิดหน้าสมัครสมาชิก
const signupSubmit = document.getElementById("signupSubmit"); // ปุ่มกดยืนยันการสมัคร
const signupUsername = document.getElementById("signupUsername"); // ช่องกรอกชื่อผู้ใช้ใหม่
const signupPassword = document.getElementById("signupPassword"); // ช่องกรอกรหัสผ่านใหม่
const signupPasswordConfirm = document.getElementById("signupPasswordConfirm"); // ช่องกรอกยืนยันรหัสผ่าน
const signupError = document.getElementById("signupError"); // ข้อความแจ้งเตือนเมื่อสมัครสมาชิกไม่สำเร็จ

// Theme toggle
const themeToggle = document.getElementById("themeToggle"); // ปุ่มเปลี่ยนธีม (เช่น มืด/สว่าง)

// Site review elements
const siteRatingStars = document.querySelector( // ดึงส่วนของการให้ดาวรีวิวเว็บไซต์
  '.rating-stars[data-context="site"]'
);

// Detail sheet elements (องค์ประกอบหน้าแสดงรายละเอียดอนิเมะ)
const detailSheet = document.getElementById("detailSheet"); // หน้าต่างรายละเอียดอนิเมะ
const detailTitle = document.getElementById("detailTitle"); // ชื่อเรื่องในหน้ารายละเอียด
const detailGenre = document.getElementById("detailGenre"); // หมวดหมู่ในหน้ารายละเอียด
const detailDescription = document.getElementById("detailDescription"); // คำอธิบายในหน้ารายละเอียด
const detailClose = document.getElementById("detailClose"); // ปุ่มปิดหน้ารายละเอียด
const detailReviewsList = document.getElementById("detailReviewsList"); // รายการรีวิวใต้เรื่องนั้นๆ
const detailReviewInput = document.getElementById("detailReviewInput"); // ช่องเขียนรีวิวอนิเมะ
const detailReviewSubmit = document.getElementById("detailReviewSubmit"); // ปุ่มส่งรีวิวอนิเมะ
const detailRatingStars = document.getElementById("detailRatingStars"); // ส่วนให้ดาวรีวิวอนิเมะ
const detailImg = document.getElementById("detailImg"); // รูปภาพอนิเมะในหน้ารายละเอียด
const detailAverage = document.getElementById("detailAverage"); // คะแนนเฉลี่ยของเรื่องนั้น
const detailAuthor = document.getElementById("detailAuthor"); // ชื่อผู้แต่ง
const detailAuthorContainer = document.getElementById("detailAuthorContainer"); // กล่องแสดงข้อมูลผู้แต่ง
const detailCharactersList = document.getElementById("detailCharactersList"); // รายการตัวละคร
const detailCharactersContainer = document.getElementById("detailCharactersContainer"); // กล่องแสดงข้อมูลตัวละครทั้งหมด

let currentCategoryId = "all"; // เก็บสถานะไอดีหมวดหมู่ที่เลือกอยู่ (ค่าเริ่มต้นคือ ทั้งหมด)
let currentSearch = ""; // เก็บข้อความที่กำลังใช้ค้นหาอยู่
let currentDetailKey = null; // เก็บค่าคีย์ของอนิเมะที่กำลังเปิดดูรายละเอียดอยู่ในขณะนั้น


// Recommended / featured state
// ปรับปรุงใหม่ตามอันดับความนิยมระดับโลก
const recommendedItems = [ // เริ่มต้นประกาศตัวแปรอาเรย์เพื่อเก็บรายการอนิเมะแนะนำทั้งหมด
  { // เริ่มต้นเก็บข้อมูล Object ของอนิเมะเรื่องที่ 1
    key: "Adventure-0", // รหัสอ้างอิงเฉพาะ (Unique Key) ของ One Piece
    title: "One Piece", // ชื่อเรื่องอนิเมะ
    description: "การผจญภัยสุดยิ่งใหญ่ของลูฟี่เพื่อเป็นราชาโจรสลัดในตำนานที่ครองใจแฟนคลับทั่วโลก", // คำอธิบายเนื้อเรื่องย่อ
    image: "Adventure/one piece.jpg", // ที่อยู่ไฟล์รูปภาพสำหรับนำไปแสดงบนหน้าจอ
    genreId: "Adventure", // ไอดีหมวดหมู่ ใช้สำหรับการคัดกรอง (Filtering)
    genreName: "ผจญภัย (Adventure)", // ชื่อหมวดหมู่ที่จะแสดงให้ผู้ใช้งานเห็น
    views: 15000 // จำนวนยอดเข้าชมสะสมของเรื่องนี้
  }, // สิ้นสุดข้อมูลเรื่องที่ 1
  { // เริ่มต้นเก็บข้อมูล Object ของอนิเมะเรื่องที่ 2
    key: "Action-2", // รหัสอ้างอิงเฉพาะของ Attack on Titan
    title: "Attack on Titan", // ชื่อเรื่องอนิเมะ
    description: "เมื่อมนุษยชาติต้องอาศัยอยู่หลังกำแพงเพื่อหนีการล่าจากเหล่าไททัน แต่แล้ววันหนึ่งกำแพงที่เคยปลอดภัยกลับถูกทำลายลง การต่อสู้เพื่ออิสรภาพจึงเริ่มต้นขึ้น", // คำอธิบายเนื้อเรื่องย่อ
    image: "Action/Attack on Titan.jpg", // ที่อยู่ไฟล์รูปภาพ
    genreId: "Action", // ไอดีหมวดหมู่
    genreName: "แอ็กชัน (Action)", // ชื่อหมวดหมู่
    views: 14000 // จำนวนยอดเข้าชมสะสม
  }, // สิ้นสุดข้อมูลเรื่องที่ 2
  { // เริ่มต้นเก็บข้อมูล Object ของอนิเมะเรื่องที่ 3
    key: "Adventure-3", // รหัสอ้างอิงเฉพาะของ Dragon Ball Z
    title: "Dragon Ball Z", // ชื่อเรื่องอนิเมะ
    description: "มหากาพย์การต่อสู้เพื่อปกป้องจักรวาลของโกคูและพรรคพวก จากเหล่าวายร้ายที่แข็งแกร่งที่สุดในจักรวาล เป็นอนิเมะแนวแอ็คชันที่เป็นต้นแบบของแนวโชเน็นทั่วโลก", // คำอธิบายเนื้อเรื่องย่อ
    image: "Adventure/Dragon Ball Z.jpg", // ที่อยู่ไฟล์รูปภาพ
    genreId: "Adventure", // ไอดีหมวดหมู่
    genreName: "ผจญภัย (Adventure)", // ชื่อหมวดหมู่
    views: 13000 // จำนวนยอดเข้าชมสะสม
  }, // สิ้นสุดข้อมูลเรื่องที่ 3
  { // เริ่มต้นเก็บข้อมูล Object ของอนิเมะเรื่องที่ 4
    key: "Action-1", // รหัสอ้างอิงเฉพาะของ Demon Slayer
    title: "Demon Slayer (Kimetsu no Yaiba)", // ชื่อเรื่องอนิเมะ
    description: "ดาบพิฆาตอสูร เรื่องราวความผูกพันของพี่น้องและการต่อสู้กับอสูรที่งดงามและดุดัน", // คำอธิบายเนื้อเรื่องย่อ
    image: "Action/Demon Slayer.jpg", // ที่อยู่ไฟล์รูปภาพ
    genreId: "Action", // ไอดีหมวดหมู่
    genreName: "แอ็กชัน (Action)", // ชื่อหมวดหมู่
    views: 12000 // จำนวนยอดเข้าชมสะสม
  }, // สิ้นสุดข้อมูลเรื่องที่ 4
  { // เริ่มต้นเก็บข้อมูล Object ของอนิเมะเรื่องที่ 5
    key: "Action-0", // รหัสอ้างอิงเฉพาะของ Jujutsu Kaisen
    title: "Jujutsu Kaisen", // ชื่อเรื่องอนิเมะ
    description: "สงครามไสยเวทสุดเดือดและการปราบคำสาปที่เต็มไปด้วยความระทึกใจและกราฟิกสุดอลังการ", // คำอธิบายเนื้อเรื่องย่อ
    image: "Action/jujutsu kaisen.jpg", // ที่อยู่ไฟล์รูปภาพ
    genreId: "Action", // ไอดีหมวดหมู่
    genreName: "แอ็กชัน (Action)", // ชื่อหมวดหมู่
    views: 11000 // จำนวนยอดเข้าชมสะสม
  } // สิ้นสุดข้อมูลเรื่องที่ 5
]; // สิ้นสุดการประกาศอาเรย์ recommendedItems
let currentRecommendedIndex = 0; // ประกาศตัวแปรเพื่อเก็บลำดับ (Index) ของเรื่องที่กำลังแสดงผลอยู่ปัจจุบัน (เริ่มที่ลำดับ 0)
let trendingAutoTimer = null; // ประกาศตัวแปรไว้สำหรับเก็บค่าฟังก์ชันจับเวลา (Timer) เพื่อใช้ทำระบบเลื่อนรูปอัตโนมัติ


// คำนวณค่าเฉลี่ยดาวและจำนวนรีวิวของเรื่องนั้น ๆ
function getRatingInfo(key) { // ฟังก์ชันสำหรับหาคะแนนเฉลี่ยและจำนวนคนรีวิวโดยใช้คีย์ของอนิเมะ
  const list = animeReviews[key] || []; // ดึงรายการรีวิวจากอ็อบเจกต์ ถ้าไม่มีข้อมูลให้เป็นอาเรย์ว่าง
  if (!list.length) { // ตรวจสอบว่าถ้ายังไม่มีใครมารีวิวเลย
    return { avg: 0, count: 0 }; // ให้ส่งค่ากลับเป็นคะแนนเฉลี่ย 0 และจำนวนรีวิว 0
  } // จบเงื่อนไขตรวจสอบ
  const sum = list.reduce((acc, r) => acc + (r.rating || 0), 0); // รวมคะแนนดาวทั้งหมดที่มีคนส่งเข้ามา
  const avg = sum / list.length; // คำนวณค่าเฉลี่ยโดยเอาผลรวมหารด้วยจำนวนรีวิวทั้งหมด
  return { avg, count: list.length }; // ส่งอ็อบเจกต์ค่าเฉลี่ยและจำนวนรีวิวกลับไปใช้งาน
} // จบฟังก์ชัน getRatingInfo

// สร้างข้อความ tooltip สำหรับคะแนน
function buildRatingLabel(avg, count) { // ฟังก์ชันสร้างข้อความอธิบายคะแนน (เช่น 4.5/5 จาก 10 รีวิว)
  if (!count) return "ยังไม่มีคะแนนจากผู้ใช้งาน"; // ถ้าไม่มีคนรีวิว ให้ส่งข้อความบอกว่ายังไม่มีคะแนน
  return `${avg.toFixed(1)}/5 จาก ${count} รีวิว`; // ถ้ามีคะแนน ให้ส่งข้อความพร้อมทศนิยม 1 ตำแหน่ง
} // จบฟังก์ชัน buildRatingLabel

// สร้างสตาร์สำหรับคะแนนเฉลี่ย
function buildStarDisplay(avg, maxStars = 5) { // ฟังก์ชันสร้างตัวอักษรรูปดาว (★/☆) ตามคะแนน
  if (!avg) { // ถ้าไม่มีคะแนนเฉลี่ย
    return "☆☆☆☆☆"; // ให้ส่งค่าเป็นดาวว่าง 5 ดวง
  } // จบเงื่อนไขตรวจสอบ
  const filled = Math.round(avg); // ปัดเศษคะแนนเฉลี่ยเพื่อหาจำนวนดาวที่ต้องระบายทึบ
  const empty = Math.max(0, maxStars - filled); // คำนวณจำนวนดาวว่างที่เหลือ (ไม่ให้ติดลบ)
  return "★".repeat(filled) + "☆".repeat(empty); // สร้างสตริงรูปดาวทึบผสมกับดาวว่างตามจำนวนที่คำนวณได้
} // จบฟังก์ชัน buildStarDisplay

 // สร้างไอคอนเหรียญตามอันดับ
function getMedalIcon(rank) { // ฟังก์ชันคืนค่าอีโมจิเหรียญรางวัลตามลำดับที่ส่งเข้ามา
  const medals = { // อ็อบเจกต์เก็บคู่ลำดับและอีโมจิ
    1: "🥇", // อันดับ 1 คือเหรียญทอง
    2: "🥈", // อันดับ 2 คือเหรียญเงิน
    3: "🥉", // อันดับ 3 คือเหรียญทองแดง
    4: "🏅", // อันดับ 4 คือเหรียญเกียรติยศ
    5: "🏅", // อันดับ 5 คือเหรียญเกียรติยศ
  }; // จบการนิยามเหรียญ
  // คืนค่าเป็นตัวอีโมจิอย่างเดียว เพื่อนำไปใช้ใน .medal-badge
  return medals[rank] || ""; // ส่งเหรียญกลับไป ถ้าไม่อยู่ใน 1-5 ให้ส่งค่าว่าง
} // จบฟังก์ชัน getMedalIcon

function renderCategoryMenu() { // ฟังก์ชันสร้างรายการเมนูหมวดหมู่ในหน้าเว็บ
  categoryListEl.innerHTML = ""; // ล้างข้อมูลเก่าที่อยู่ในเมนูทิ้งก่อนเริ่มสร้างใหม่

  const allLi = document.createElement("li"); // สร้างแท็ก <li> สำหรับปุ่ม "ทั้งหมด"
  allLi.textContent = "ทั้งหมด"; // กำหนดข้อความปุ่มว่า "ทั้งหมด"
  allLi.dataset.id = "all"; // กำหนดค่า id ใน Dataset เป็น "all"
  allLi.classList.add("active"); // เพิ่ม Class "active" เพื่อให้ปุ่มดูเหมือนถูกเลือกอยู่
  const allBadge = document.createElement("span"); // สร้างแท็ก <span> สำหรับตัวเลขบอกจำนวน
  allBadge.className = "badge"; // กำหนด Class เป็น "badge"
  allBadge.textContent = String(allItems.length); // ใส่จำนวนอนิเมะทั้งหมดลงในตัวเลข Badge
  allLi.appendChild(allBadge); // นำตัวเลข Badge ใส่เข้าไปในปุ่ม "ทั้งหมด"
  categoryListEl.appendChild(allLi); // นำปุ่ม "ทั้งหมด" ไปใส่ในรายการเมนูบนหน้าเว็บ

  genres.forEach((g) => { // วนลูปตามข้อมูลหมวดหมู่ (genres) ที่มี
    const li = document.createElement("li"); // สร้างแท็ก <li> สำหรับแต่ละหมวดหมู่
    li.dataset.id = g.id; // กำหนด id ของหมวดหมู่ลงใน Dataset

    // สร้างโครงภายในเพื่อรองรับไอคอน + ชื่อ + badge
    const leftWrapper = document.createElement("div"); // สร้างกล่องฝั่งซ้ายสำหรับรวมไอคอนและชื่อ
    leftWrapper.className = "category-left"; // กำหนด Class สำหรับจัดตำแหน่ง

    const icon = document.createElement("div"); // สร้างพื้นที่สำหรับแสดงไอคอน
    icon.className = "category-icon"; // กำหนด Class สำหรับไอคอน
    // ใช้ class แทนการเซ็ต backgroundImage ด้วย JS
    icon.classList.add(`icon-${g.id}`); // เพิ่ม Class เฉพาะของแต่ละหมวดหมู่ (เช่น icon-Action)

    const label = document.createElement("span"); // สร้างพื้นที่แสดงชื่อหมวดหมู่
    label.className = "category-label"; // กำหนด Class สำหรับชื่อ
    label.textContent = g.name; // ใส่ชื่อหมวดหมู่ลงไป (เช่น "แอ็กชัน")

    leftWrapper.appendChild(icon); // นำไอคอนใส่เข้าไปในกล่องซ้าย
    leftWrapper.appendChild(label); // นำชื่อใส่เข้าไปในกล่องซ้าย

    const badge = document.createElement("span"); // สร้างตัวเลข Badge สำหรับบอกจำนวนในหมวดนี้
    badge.className = "badge"; // กำหนด Class เป็น "badge"
    badge.textContent = String(g.items.length); // ใส่จำนวนอนิเมะเฉพาะในหมวดนี้ลงไป

    li.appendChild(leftWrapper); // นำส่วนฝั่งซ้าย (ไอคอน+ชื่อ) ใส่ในแท็ก <li>
    li.appendChild(badge); // นำ Badge ใส่ต่อท้ายในแท็ก <li>

    categoryListEl.appendChild(li); // นำรายการหมวดหมู่ที่สร้างเสร็จไปใส่บนหน้าเว็บ
  }); // จบการวนลูป
} // จบฟังก์ชัน renderCategoryMenu

function getFilteredItems() { // ฟังก์ชันสำหรับกรองข้อมูลอนิเมะตามการค้นหาหรือหมวดหมู่ที่เลือก
  let base = allItems; // เริ่มต้นโดยการดึงข้อมูลอนิเมะทั้งหมดเป็นฐาน

  // ถ้าอยู่ในหน้า "ถูกใจ" ให้แสดงเฉพาะเรื่องที่ถูกใจ
  if (currentView === "favorites") { // ตรวจสอบว่าตอนนี้ผู้ใช้เลือกดูรายการโปรดหรือไม่
    base = base.filter((it) => isFavorite(it.key)); // กรองเอาเฉพาะเรื่องที่มีอยู่ในรายการ Favorite
  } // จบเงื่อนไข favorites

  // ถ้ามีการค้นหา ให้ค้นหาจากชุดฐานที่มีอยู่
  if (currentSearch.trim() !== "") { // ตรวจสอบว่าช่องค้นหาไม่ได้ว่างเปล่า
    const q = currentSearch.toLowerCase(); // แปลงคำค้นหาให้เป็นตัวพิมพ์เล็กทั้งหมดเพื่อไม่ให้สับสน
    base = base.filter((it) => { // กรองข้อมูลอนิเมะทีละเรื่อง
      return ( // คืนค่าจริงถ้าเจอคำค้นหาในส่วนใดส่วนหนึ่งต่อไปนี้
        it.title.toLowerCase().includes(q) || // หาในชื่อเรื่อง
        it.description.toLowerCase().includes(q) || // หาในคำอธิบาย
        it.genreName.toLowerCase().includes(q) // หาในชื่อหมวดหมู่
      ); // จบการตรวจสอบคำค้นหา
    }); // จบการกรองข้อมูลตามคำค้นหา
    return base; // ส่งรายการที่กรองแล้วกลับไป
  } // จบเงื่อนไขค้นหา
// (หมายเหตุ: โค้ดส่วนนี้ดูเหมือนจะยังไม่จบดี แต่อธิบายตามเท่าที่มีครับ)

 
// ถ้าไม่มีการค้นหา ค่อยใช้ตัวกรองตามหมวดหมู่ (ตัดเงื่อนไข favorites ออกแล้ว)
  if (currentCategoryId !== "all") { // ตรวจสอบว่าถ้าไม่ได้เลือกหมวดหมู่ "ทั้งหมด"
    base = base.filter((it) => it.genreId === currentCategoryId); // กรองเอาเฉพาะอนิเมะที่มีรหัสหมวดหมู่ตรงกับที่เลือก
  } // ปิดเงื่อนไขการกรองตามหมวดหมู่

  return base; // ส่งคืนค่ารายการอนิเมะที่ผ่านการกรองแล้วทั้งหมด
} // ปิดฟังก์ชัน getFilteredItems

// --- ระบบถูกใจ (isFavorite, toggleFavorite, renderFavoritesMenu) ถูกนำออกแล้วตามคำขอ ---

function createCardElement(item) { // ฟังก์ชันสำหรับสร้างโครงสร้าง HTML ของการ์ดอนิเมะแต่ละเรื่อง
  const card = document.createElement("div"); // สร้าง Tag div เพื่อใช้เป็นตัวคอนเทนเนอร์หลักของการ์ด
  card.className = "card"; // กำหนด Class ชื่อว่า card เพื่อใช้จัดสไตล์ CSS
  card.dataset.key = item.key; // เก็บค่า Key ประจำเรื่องไว้ใน dataset เพื่อใช้ระบุตัวตนเวลาคลิก

  const inner = document.createElement("div"); // สร้าง Tag div ชั้นในเพื่อจัดการระยะห่างหรือเลย์เอาต์
  inner.className = "card-inner"; // กำหนด Class ชื่อว่า card-inner

  const imgContainer = document.createElement("div"); // สร้างพื้นที่สำหรับใส่รูปภาพอนิเมะ
  imgContainer.className = "card-image-container"; // กำหนด Class สำหรับจัดขนาดและรูปทรงของภาพ

  const img = document.createElement("img"); // สร้าง Tag img เพื่อแสดงรูปภาพ
  img.className = "card-image"; // กำหนด Class สำหรับรูปภาพ
  img.src = item.image || "mushoku_tensei_rec.png"; // กำหนดที่อยู่รูปภาพ (ถ้าไม่มีให้ใช้รูปสำรอง)
  img.alt = item.title; // กำหนดข้อความสำรองหากรูปไม่ขึ้นเป็นชื่อเรื่อง
  imgContainer.appendChild(img); // นำรูปภาพเข้าไปใส่ในคอนเทนเนอร์รูป

  const genreEl = document.createElement("div"); // สร้าง Tag div สำหรับแสดงชื่อหมวดหมู่บนการ์ด
  genreEl.className = "card-genre"; // กำหนด Class สำหรับสไตล์หมวดหมู่
  genreEl.textContent = item.genreName; // ใส่ชื่อหมวดหมู่ลงไปในข้อความ

  const titleEl = document.createElement("div"); // สร้าง Tag div สำหรับแสดงชื่อเรื่อง
  titleEl.className = "card-title"; // กำหนด Class สำหรับสไตล์หัวข้อ
  titleEl.textContent = item.title; // ใส่ชื่อเรื่องอนิเมะลงไป

  const descEl = document.createElement("div"); // สร้าง Tag div สำหรับแสดงคำอธิบายย่อ
  descEl.className = "card-description"; // กำหนด Class สำหรับสไตล์คำอธิบาย
  descEl.textContent = item.description; // ใส่เนื้อหาคำอธิบายลงไป

  const footer = document.createElement("div"); // สร้าง Tag div ส่วนท้ายของการ์ด
  footer.className = "card-footer"; // กำหนด Class สำหรับจัดวางคะแนนและปุ่ม

  const stars = document.createElement("span"); // สร้างพื้นที่สำหรับแสดงดาวคะแนน
  stars.className = "stars"; // กำหนด Class สำหรับดาว
  const { avg, count } = getRatingInfo(item.key); // ดึงค่าคะแนนเฉลี่ยและจำนวนรีวิวจากฟังก์ชันช่วย
  stars.textContent = buildStarDisplay(avg); // สร้างรูปดาว (★/☆) ตามคะแนนเฉลี่ย
  stars.title = buildRatingLabel(avg, count); // ใส่คำอธิบาย Tooltip เมื่อเอาเมาส์ไปชี้ที่ดาว

  const more = document.createElement("span"); // สร้างปุ่มหรือข้อความ "ดูเพิ่มเติม"
  more.className = "more"; // กำหนด Class สำหรับจัดสไตล์ปุ่มดูเพิ่มเติม
  more.textContent = "ดูเพิ่มเติม"; // กำหนดข้อความบนปุ่ม

  footer.appendChild(stars); // นำดาวคะแนนใส่เข้าไปในส่วนท้ายของการ์ด
  footer.appendChild(more); // นำปุ่มดูเพิ่มเติมใส่เข้าไปในส่วนท้ายของการ์ด

  inner.appendChild(imgContainer); // นำส่วนรูปภาพใส่เข้าไปในเนื้อหาชั้นใน
  inner.appendChild(genreEl); // นำส่วนหมวดหมู่ใส่เข้าไปในเนื้อหาชั้นใน
  inner.appendChild(titleEl); // นำชื่อเรื่องใส่เข้าไปในเนื้อหาชั้นใน
  inner.appendChild(descEl); // นำคำอธิบายใส่เข้าไปในเนื้อหาชั้นใน
  inner.appendChild(footer); // นำส่วนท้ายใส่เข้าไปในเนื้อหาชั้นใน

  card.appendChild(inner); // นำเนื้อหาชั้นในทั้งหมดใส่เข้าไปในการ์ดหลัก
  return card; // ส่งออก Element การ์ดที่สร้างเสร็จสมบูรณ์
} // ปิดฟังก์ชัน createCardElement

function renderCards() { // ฟังก์ชันสำหรับวาดการ์ดทั้งหมดลงบนหน้าจอ
  const items = getFilteredItems(); // ดึงรายการอนิเมะที่ผ่านการกรองตามเงื่อนไขปัจจุบัน
  cardsContainer.innerHTML = ""; // ล้างหน้าจอในส่วนคอนเทนเนอร์ให้ว่างเปล่าก่อนแสดงใหม่

  if (items.length === 0) { // ตรวจสอบว่าถ้าไม่มีอนิเมะเหลือในรายการเลย
    const msg = document.createElement("p"); // สร้าง Tag p เพื่อแสดงข้อความแจ้งเตือน
    msg.textContent = "ไม่พบผลลัพธ์ที่ตรงกับการค้นหา"; // กำหนดข้อความว่าหาไม่พบ
    msg.style.fontSize = "13px"; // กำหนดขนาดตัวอักษรของข้อความแจ้งเตือน
    msg.style.opacity = "0.8"; // ปรับความโปร่งใสของข้อความเล็กน้อย
    cardsContainer.appendChild(msg); // แสดงข้อความ "หาไม่พบ" ลงบนหน้าจอ
    return; // จบการทำงานของฟังก์ชันทันที
  } // ปิดเงื่อนไขตรวจสอบข้อมูลว่าง

  
  // ถ้าอยู่ในสถานะ "ทั้งหมด" และไม่มีการค้นหา หรือไม่ได้เลือกหมวดหมู่เฉพาะ ให้แสดงผลแบบจัดกลุ่มตามประเภท
  if (currentView === "all" && currentCategoryId === "all" && currentSearch === "") { // ตรวจสอบเงื่อนไขเพื่อแสดงหน้าแรกแบบจัดหมวดหมู่
    genres.forEach((genre) => { // วนลูปผ่านทุกหมวดหมู่ (เช่น แอ็กชัน, ผจญภัย) เพื่อสร้าง Section
      const section = document.createElement("div"); // สร้าง Tag div สำหรับเป็นกล่องหุ้มแต่ละหมวดหมู่
      section.className = "genre-section-block"; // กำหนด Class เพื่อจัดสไตล์ CSS ให้กับบล็อกหมวดหมู่
      section.dataset.genreName = genre.name; // เก็บชื่อหมวดหมู่ไว้ใน dataset เพื่อใช้อ้างอิงภายหลัง

      const title = document.createElement("h2"); // สร้าง Tag h2 สำหรับใช้แสดงเป็นหัวข้อหมวดหมู่
      title.className = "genre-section-title"; // กำหนด Class สำหรับสไตล์หัวข้อขนาดใหญ่
      title.textContent = genre.name; // ใส่ชื่อหมวดหมู่ลงไปในข้อความหัวข้อ
      section.appendChild(title); // นำหัวข้อเข้าไปใส่ไว้ในบล็อกหมวดหมู่

      const grid = document.createElement("div"); // สร้าง Tag div เพื่อทำเป็นตะแกรง (Grid) สำหรับวางการ์ด
      grid.className = "genre-cards-grid"; // กำหนด Class เพื่อจัดเรียงการ์ดแบบแถวและคอลัมน์

      genre.items.forEach((item, index) => { // วนลูปตามรายการอนิเมะแต่ละเรื่องที่อยู่ในหมวดหมู่นั้นๆ
        // ค้นหาข้อมูลเต็มจาก allItems เพื่อดึงข้อมูล Metadata และ Key ทั้งหมดมาใช้สร้างการ์ด
        const fullItem = allItems.find((it) => it.title === item.title && it.genreId === genre.id); // เปรียบเทียบชื่อเรื่องและไอดีหมวดหมู่
        if (fullItem) { // ถ้าพบข้อมูลอนิเมะที่ตรงกัน
          grid.appendChild(createCardElement(fullItem)); // สร้างการ์ดอนิเมะแล้วนำไปต่อท้ายใน Grid
        } // จบการตรวจสอบข้อมูล
      }); // จบการวนลูปไอเทมในหมวดหมู่

      section.appendChild(grid); // นำตะแกรงการ์ดใส่เข้าไปในบล็อกหมวดหมู่ต่อจากหัวข้อ
      cardsContainer.appendChild(section); // นำบล็อกหมวดหมู่ที่สร้างเสร็จแล้วไปแสดงในคอนเทนเนอร์หลักบนหน้าเว็บ
    }); // จบการวนลูปหมวดหมู่ทั้งหมด
  } else { // กรณีที่มีการค้นหา หรือเลือกดูเฉพาะบางหมวดหมู่ (จะแสดงผลแบบรายการเดียวไม่มีหัวข้อย่อย)
    
    // การแสดงผลแบบรายการเรียงยาวปกติสำหรับผลการค้นหา หรือเมื่อเลือกหมวดหมู่ใดหมวดหมู่หนึ่ง
    const grid = document.createElement("div"); // สร้าง Tag div เพื่อเป็นตะแกรง (Grid) สำหรับวางการ์ด
    grid.className = "genre-cards-grid"; // กำหนด Class เพื่อจัดเรียงการ์ดให้สวยงามตามสไตล์ที่ตั้งไว้
    items.forEach((item) => { // วนลูปผ่านรายการอนิเมะทุกเรื่องที่ผ่านการกรองมาแล้ว
      grid.appendChild(createCardElement(item)); // สร้างการ์ดของแต่ละเรื่องแล้วนำไปใส่ลงในตะแกรง (Grid)
    }); // จบการวนลูปรายการอนิเมะ
    cardsContainer.appendChild(grid); // นำตะแกรงที่รวมการ์ดเสร็จแล้วไปแสดงผลในพื้นที่หลักบนหน้าเว็บ
  } // จบเงื่อนไขการเลือกรูปแบบการแสดงผล
} // จบฟังก์ชัน renderCards

function renderTrending() { // ฟังก์ชันสำหรับแสดงผลส่วนสไลด์อนิเมะแนะนำหรือยอดนิยม (Trending Section)
  if (!trendingSlide) return; // ถ้าไม่พบส่วนแสดงสไลด์ในหน้า HTML ให้หยุดการทำงานทันที
  trendingSlide.innerHTML = ""; // ล้างข้อมูลหรือรูปภาพเก่าที่เคยแสดงอยู่ในสไลด์ออกทั้งหมด

  if (!recommendedItems.length) return; // ถ้าไม่มีข้อมูลอนิเมะแนะนำอยู่ในฐานข้อมูล ให้หยุดการทำงานทันที

  
  // เรียงลำดับข้อมูลโดยคัดลอกอาเรย์ใหม่ แล้วจัดเรียงตามจำนวนคนดูจากมากไปน้อย เลือกมาแค่ 5 อันดับแรก
  const sorted = [...recommendedItems].sort((a, b) => b.views - a.views).slice(0, 5); // สร้างรายการ Top 5 โดยเรียงจากยอดวิวสูงสุด

  sorted.forEach((item, index) => { // วนลูปเพื่อสร้างการ์ดแสดงผลสำหรับอนิเมะแต่ละเรื่องใน Top 5
    const card = document.createElement("div"); // สร้าง Element div เพื่อเป็นตัวเก็บข้อมูลการ์ดจัดอันดับ
    card.className = "recommended-card ranking-card"; // กำหนด Class สำหรับสไตล์การ์ดแนะนำและหมวดจัดอันดับ
    card.dataset.key = item.key; // เก็บค่า Key ประจำเรื่องไว้ใน dataset สำหรับอ้างอิงเวลาคลิก

    const imgSrc = item.image || "mushoku_tensei_rec.png"; // กำหนดตัวแปรเก็บที่อยู่รูปภาพ ถ้าไม่มีให้ใช้รูปสำรองที่ตั้งไว้

    
    // โครงสร้าง HTML ใหม่ที่ใช้ <img> และ overlay แยกกันเพื่อความเสถียรในการแสดงผล
    card.innerHTML = `
      <div class="medal-badge">
        ${getMedalIcon(index + 1)}
      </div>
      <div class="rec-card-inner">
        <div class="rec-image-box">
          <img src="${imgSrc}" class="rec-card-img" alt="${item.title}" onerror="this.src='mushoku_tensei_rec.png'">
          <div class="rec-overlay"></div>
          <div class="rec-genre-tag">${item.genreName}</div>
        </div>
        <div class="rec-info-content">
          <h3 class="rec-item-title">${item.title}</h3>
          <p class="rec-item-description">${item.description}</p>
          <div class="rec-item-footer">
            <span class="rec-views">👁️ ${item.views.toLocaleString()} views</span>
            <span class="rec-action-text">คลิกเพื่ออ่านต่อ</span>
          </div>
        </div>
      </div>
    `;

    trendingSlide.appendChild(card);
  });

  if (trendingDots) {
    trendingDots.innerHTML = "";
  }
}

// ไม่ใช้ auto slider แล้ว ฟังก์ชันเหล่านี้จะไม่ทำอะไร (ปล่อยว่างไว้เพื่อไม่ให้โค้ดส่วนอื่นที่เรียกใช้พัง)
function renderTrendingDots() {} // ฟังก์ชันสร้างจุดนำทาง (ว่างไว้)
function nextRecommended() {} // ฟังก์ชันเลื่อนไปรูปถัดไป (ว่างไว้)
function prevRecommended() {} // ฟังก์ชันเลื่อนกลับไปรูปก่อนหน้า (ว่างไว้)
function startTrendingAuto() {} // ฟังก์ชันเริ่มการเลื่อนอัตโนมัติ (ว่างไว้)
function resetTrendingAuto() {} // ฟังก์ชันรีเซ็ตตัวจับเวลา (ว่างไว้)

function openCategoryMenu() { // ฟังก์ชันสำหรับเปิดเมนูเลือกหมวดหมู่
  categoryMenu.classList.add("open"); // เพิ่มคลาส open เพื่อให้เมนูแสดงออกมา
  overlay.classList.add("visible"); // แสดงแผ่นพื้นหลังโปร่งแสง (Overlay) เพื่อเน้นเมนู
} // จบฟังก์ชันเปิดเมนูหมวดหมู่

function closeCategoryMenu() { // ฟังก์ชันสำหรับปิดเมนูเลือกหมวดหมู่
  categoryMenu.classList.remove("open"); // เอาคลาส open ออกเพื่อซ่อนเมนู
  if ( // ตรวจสอบว่าหน้าต่างอื่นๆ ปิดอยู่ทั้งหมดหรือไม่ ก่อนจะเอาแผ่น Overlay ออก
    !detailSheet.classList.contains("open") && // ถ้าหน้ารายละเอียดปิดอยู่
    !loginSheet.classList.contains("open") && // และหน้าล็อกอินปิดอยู่
    !signupSheet.classList.contains("open") && // และหน้าสมัครสมาชิกปิดอยู่
    !favoritesMenu.classList.contains("open") // และหน้าเมนูรายการโปรดปิดอยู่
  ) { // ถ้าทุกอย่างปิดหมดแล้ว
    overlay.classList.remove("visible"); // ให้ซ่อนแผ่นพื้นหลังโปร่งแสงได้
  } // จบเงื่อนไขการตรวจสอบ
} // จบฟังก์ชันปิดเมนูหมวดหมู่

function openFavoritesMenu() { // ฟังก์ชันสำหรับเปิดเมนูรายการโปรด (ถ้าจะตัดระบบถูกใจ ฟังก์ชันนี้จะไม่ถูกใช้)
  renderFavoritesMenu(); // สั่งให้วาดรายการอนิเมะที่ถูกใจลงในเมนูก่อนเปิด
  favoritesMenu.classList.add("open"); // แสดงเมนูรายการโปรดออกมา
  overlay.classList.add("visible"); // แสดงแผ่นพื้นหลังโปร่งแสง
} // จบฟังก์ชันเปิดเมนูรายการโปรด

function closeFavoritesMenu() { // ฟังก์ชันสำหรับปิดเมนูรายการโปรด
  favoritesMenu.classList.remove("open"); // ซ่อนเมนูรายการโปรด
  if ( // เช็คว่ามีหน้าต่างอื่นเปิดค้างไว้ไหมก่อนจะปิดแผ่น Overlay
    !detailSheet.classList.contains("open") && // หน้ารายละเอียดปิดอยู่หรือไม่
    !loginSheet.classList.contains("open") && // หน้าล็อกอินปิดอยู่หรือไม่
    !signupSheet.classList.contains("open") && // หน้าสมัครสมาชิกปิดอยู่หรือไม่
    !categoryMenu.classList.contains("open") // เมนูหมวดหมู่ปิดอยู่หรือไม่
  ) { // ถ้าปิดหมดทุกอย่าง
    overlay.classList.remove("visible"); // ให้ซ่อนแผ่นพื้นหลังโปร่งแสงได้
  } // จบเงื่อนไขการตรวจสอบ
} // จบฟังก์ชันปิดเมนูรายการโปรด

function performSearch() { // ฟังก์ชันหลักในการประมวลผลการค้นหา
  const query = searchInput.value.trim(); // ดึงข้อความจากช่องค้นหาและตัดช่องว่างหัวท้ายออก
  currentSearch = query; // เก็บข้อความค้นหาลงในตัวแปรกลาง

  if (query === "") { // กรณีที่ช่องค้นหาว่างเปล่า (ลบข้อความออกจนหมด)
    // คืนค่าหัวข้อตามหมวดหมู่ที่เลือกอยู่ (ถ้าเป็น all ให้โชว์ "ทั้งหมด" ถ้าไม่ใช่ให้หาชื่อจาก genres)
    currentCategoryTitle.textContent = currentCategoryId === "all" ? "ทั้งหมด" : (genres.find(g => g.id === currentCategoryId)?.name || "ทั้งหมด"); // ตั้งชื่อหัวข้อให้กลับมาเป็นชื่อหมวดหมู่เดิม
    renderCards(); // วาดการ์ดอนิเมะใหม่ตามโหมดปกติ
    return; // จบการทำงานของฟังก์ชันทันที
  } // จบเงื่อนไขช่องค้นหาว่าง

  const lowerQuery = query.toLowerCase(); // แปลงข้อความที่ใช้ค้นหาเป็นตัวพิมพ์เล็กเพื่อเริ่มการเปรียบเทียบ

  // ตรวจสอบว่าคำที่ผู้ใช้พิมพ์ค้นหา ตรงกับชื่อหมวดหมู่หรือไอดีหมวดหมู่ที่มีอยู่หรือไม่
 const matchedGenre = genres.find(g => // เริ่มค้นหาข้อมูลหมวดหมู่ในตัวแปร genres
   g.id.toLowerCase() === lowerQuery || // ตรวจสอบว่าไอดีหมวดหมู่ (ID) ตรงกับคำค้นหาหรือไม่
   g.name.toLowerCase().includes(lowerQuery) // ตรวจสอบว่าชื่อหมวดหมู่ (Name) มีคำค้นหาปนอยู่หรือไม่
 ); // จบการค้นหาหมวดหมู่

 if (matchedGenre) { // ถ้าพบหมวดหมู่ที่ตรงกับคำที่พิมพ์ค้นหามา
   // หากเป็นการค้นหาหมวดหมู่ ให้เปลี่ยนข้อความหัวข้อหน้าเว็บเป็นชื่อหมวดหมู่นั้นๆ
   currentCategoryTitle.textContent = matchedGenre.name.toUpperCase(); // เปลี่ยนหัวข้อเป็นชื่อหมวดหมู่และปรับเป็นตัวพิมพ์ใหญ่
 } else { // หากสิ่งที่ค้นหาไม่ใช่ชื่อหมวดหมู่ (แต่น่าจะเป็นชื่อเรื่องอนิเมะ)
   // หากเป็นการค้นหาชื่อเรื่องทั่วไป ให้ตั้งชื่อหัวข้อหลักเป็น "ทั้งหมด"
   currentCategoryTitle.textContent = "ทั้งหมด"; // กำหนดข้อความหัวข้อกลับเป็นค่าเริ่มต้น
 } // จบเงื่อนไขการตรวจสอบหมวดหมู่

 renderCards(); // เรียกใช้ฟังก์ชันแสดงผลการ์ดใหม่เพื่อโชว์ผลลัพธ์ที่ตรงตามคำค้นหา
} // จบฟังก์ชัน performSearch

function setCategory(id) { // ฟังก์ชันสำหรับเปลี่ยนหมวดหมู่เมื่อผู้ใช้คลิกเลือกจากเมนู
 currentView = "all"; // รีเซ็ตสถานะการมองเห็นให้กลับมาหน้าหลัก (เผื่อกรณีค้างอยู่ที่หน้าอื่น)
 currentCategoryId = id; // อัปเดตไอดีหมวดหมู่ปัจจุบันให้เป็นไอดีที่ถูกเลือกใหม่


  /// รีเซ็ตข้อความค้นหาให้เป็นค่าว่างเมื่อมีการเปลี่ยนหมวดหมู่ (เพื่อให้การแสดงผลไม่ตีกัน)
  currentSearch = ""; // ล้างค่าตัวแปรค้นหาปัจจุบันให้ว่างเปล่า
  if (searchInput) { // ตรวจสอบว่ามีช่องกรอกค้นหาอยู่ในหน้าเว็บหรือไม่
    searchInput.value = ""; // ล้างข้อความที่ผู้ใช้พิมพ์ค้างไว้ในช่อง Search บนหน้าจอ
  } // ปิดเงื่อนไขการล้างช่องค้นหา

  const items = categoryListEl.querySelectorAll("li"); // ดึงรายการเมนูหมวดหมู่ทั้งหมด (<li>) มาเก็บไว้ในตัวแปร items
  items.forEach((li) => { // วนลูปตรวจสอบรายการเมนูทีละอัน
    if (li.dataset.id === id) { // ถ้าไอดีของเมนูนั้นตรงกับไอดีหมวดหมู่ที่ผู้ใช้เลือก
      li.classList.add("active"); // เพิ่ม Class "active" เพื่อไฮไลต์ให้รู้ว่ากำลังดูหมวดนี้อยู่
    } else { // ถ้าไม่ใช่หมวดหมู่ที่เลือก
      li.classList.remove("active"); // เอา Class "active" ออก เพื่อให้เมนูอื่นดูเป็นสถานะปกติ
    } // ปิดเงื่อนไขการจัดการสถานะเมนู
  }); // จบการวนลูปรายการเมนู

  // เปลี่ยนข้อความหัวข้อหลักบนหน้าเว็บตามหมวดหมู่ที่เลือก
  currentCategoryTitle.textContent = // กำหนดข้อความหัวข้อใหม่
    id === "all" // ถ้าไอดีที่เลือกคือ "all" (ทั้งหมด)
      ? "ทั้งหมด" // ให้แสดงหัวข้อว่า "ทั้งหมด"
      : genres.find((g) => g.id === id)?.name || "ทั้งหมด"; // ถ้าไม่ใช่ ให้ไปหาชื่อหมวดหมู่จากข้อมูล genres มาแสดง (ถ้าไม่เจอให้ใช้ "ทั้งหมด")

  renderCards(); // เรียกใช้ฟังก์ชันวาดการ์ดอนิเมะใหม่ เพื่อให้แสดงเฉพาะเรื่องที่อยู่ในหมวดหมู่ที่เลือก
} // จบฟังก์ชัน setCategory

// ฟังก์ชันสำหรับตั้งค่าระบบดาว (รับคอนเทนเนอร์ และฟังก์ชันที่จะให้ทำงานเมื่อค่าเปลี่ยน)
function setupRatingStars(container, onChange) { // เริ่มต้นการประกาศฟังก์ชันหลัก
  if (!container) return () => {}; // ถ้าไม่พบกล่องใส่ดาวในหน้าเว็บ ให้คืนค่าฟังก์ชันว่างเปล่าเพื่อป้องกัน Error
  let currentValue = 0; // ตัวแปรสำหรับเก็บค่าคะแนนที่เลือกจริงในปัจจุบัน

  const stars = Array.from(container.querySelectorAll("span")); // ดึงแท็ก <span> (ดาว) ทั้งหมดออกมาเก็บไว้เป็นอาเรย์

  function updateVisual() { // ฟังก์ชันภายในสำหรับอัปเดตหน้าตาของดาวตามคะแนนที่เลือก
    stars.forEach((s) => { // วนลูปดาวทุกดวงเพื่อตรวจสอบสถานะ
      const val = Number(s.dataset.value); // ดึงค่าตัวเลขจาก dataset ของดาวดวงนั้นๆ
      if (val <= currentValue) { // ถ้าค่าของดาวน้อยกว่าหรือเท่ากับคะแนนที่เลือก
        s.classList.add("active"); // ให้ใส่คลาส active (เพื่อให้ดาวสว่าง/เปลี่ยนสี)
      } else { // ถ้าค่าของดาวมากกว่าคะแนนที่เลือก
        s.classList.remove("active"); // ให้เอาคลาส active ออก
      } // ปิดเงื่อนไขตรวจสอบค่า
      s.classList.remove("highlight"); // เคลียร์คลาส highlight ออกทุกครั้งที่อัปเดตหน้าตาจริง
    }); // จบการวนลูปอัปเดตดาว
  } // จบฟังก์ชัน updateVisual

  stars.forEach((star) => { // วนลูปเพื่อใส่เหตุการณ์ (Event) ให้ดาวแต่ละดวง
    star.addEventListener("mouseenter", () => { // เมื่อเอาเมาส์ไปชี้ (Hover) ที่ดาว
      const val = Number(star.dataset.value); // ดูว่าเมาส์ชี้อยู่ที่ดาวลำดับที่เท่าไหร่
      stars.forEach((s) => { // วนลูปดาวทั้งหมดเพื่อทำเอฟเฟกต์ชั่วคราว
        if (Number(s.dataset.value) <= val) { // ถ้าดาวดวงนั้นอยู่ในลำดับที่เมาส์ชี้ถึง
          s.classList.add("highlight"); // ใส่คลาส highlight (เช่น ให้ดาวเป็นสีทองอ่อนๆ)
        } else { // ถ้าเป็นดาวที่อยู่เลยตำแหน่งเมาส์ออกไป
          s.classList.remove("highlight"); // เอาคลาส highlight ออก
        } // ปิดเงื่อนไข highlight
      }); // จบการวนลูปเอฟเฟกต์ Hover
    }); // จบเหตุการณ์ mouseenter

    star.addEventListener("mouseleave", () => { // เมื่อเลื่อนเมาส์ออกจากดาวดวงนั้น
      stars.forEach((s) => s.classList.remove("highlight")); // ให้ล้างคลาส highlight ออกทันที
    }); // จบเหตุการณ์ mouseleave

    star.addEventListener("click", () => { // เมื่อผู้ใช้คลิกเลือกดาว
      currentValue = Number(star.dataset.value); // บันทึกค่าดาวที่คลิกไว้ในตัวแปรหลัก
      updateVisual(); // อัปเดตหน้าตาของดาวให้สว่างถาวรตามที่เลือก
      if (onChange) onChange(currentValue); // ถ้ามีการส่งฟังก์ชันจัดการข้อมูลมา ให้ส่งค่าคะแนนกลับไปทำงานต่อ
    }); // จบเหตุการณ์ click
  }); // จบการวนลูปใส่เหตุการณ์ให้ดาวแต่ละดวง

  container.addEventListener("mouseleave", () => { // เมื่อเมาส์หลุดออกจากพื้นที่ของกลุ่มดาวทั้งหมด
    stars.forEach((s) => s.classList.remove("highlight")); // ตรวจสอบความชัวร์อีกครั้งให้ลบสี highlight ออก
  }); // จบเหตุการณ์ mouseleave ของคอนเทนเนอร์

  return (val) => { // คืนค่าฟังก์ชันออกไป เพื่อให้ส่วนอื่นของโปรแกรมสามารถสั่งเปลี่ยนคะแนนดาวได้โดยตรง
    currentValue = val; // กำหนดค่าปัจจุบันตามที่ส่งมา
    updateVisual(); // สั่งให้อัปเดตหน้าตาของดาวทันที
  }; // จบฟังก์ชันการตั้งค่าคะแนนจากภายนอก
} // จบฟังก์ชัน setupRatingStars

// ฟังก์ชันสำหรับเปิดหน้าต่างแสดงรายละเอียดอนิเมะรายเรื่อง
function openDetail(key) { // เริ่มการทำงานโดยรับค่าคีย์ (Key) ของอนิเมะที่ถูกคลิก
  const item = allItems.find((i) => i.key === key); // ค้นหาข้อมูลอนิเมะจากอาเรย์รวมทั้งหมดโดยใช้ Key เป็นตัวระบุ
  if (!item) return; // หากไม่พบข้อมูล (เช่น คีย์ผิดพลาด) ให้จบการทำงานทันทีเพื่อป้องกันโค้ดค้าง

  currentDetailKey = key; // เก็บค่าคีย์ของเรื่องที่กำลังเปิดดูอยู่ไว้ในตัวแปรโกลบอลเพื่อใช้ในการเขียนรีวิว
  detailTitle.textContent = item.title; // นำชื่อเรื่องของอนิเมะไปแสดงที่หัวข้อของหน้ารายละเอียด
  detailGenre.textContent = item.genreName; // นำชื่อหมวดหมู่ไปแสดงในส่วนระบุประเภท
  detailDescription.textContent = item.description; // นำเนื้อเรื่องย่อไปใส่ในส่วนคำอธิบาย

  // จัดการข้อมูลผู้แต่ง (ล้างข้อมูลเก่าและตรวจสอบก่อนแสดง)
  if (item.author) { // ตรวจสอบว่าในข้อมูลอนิเมะเรื่องนี้มีระบุชื่อผู้แต่งไว้หรือไม่
    detailAuthor.textContent = item.author; // นำชื่อผู้แต่งใส่เข้าไปในองค์ประกอบข้อความที่เตรียมไว้บนหน้าจอ
    detailAuthorContainer.style.display = "block"; // สั่งให้กล่องคอนเทนเนอร์ของผู้แต่งแสดงผลออกมาให้เห็น
  } else { // ในกรณีที่ไม่มีข้อมูลผู้แต่งระบุไว้ (เป็นค่าว่างหรือไม่มีข้อมูลส่วนนี้)
    detailAuthorContainer.style.display = "none"; // สั่งซ่อนกล่องข้อมูลผู้แต่งทิ้งไปเพื่อรักษาความสวยงามของหน้าจอ
  } // จบการตรวจสอบและจัดการส่วนแสดงผลผู้แต่ง

  // จัดการข้อมูลผู้แต่ง (ล้างข้อมูลเก่าและตรวจสอบก่อนแสดง)
  if (item.author) { // ตรวจสอบว่าในข้อมูลอนิเมะเรื่องนี้มีระบุชื่อผู้แต่งไว้หรือไม่
    detailAuthor.textContent = item.author; // นำชื่อผู้แต่งใส่เข้าไปในองค์ประกอบข้อความที่เตรียมไว้บนหน้าจอ
    detailAuthorContainer.style.display = "block"; // สั่งให้กล่องคอนเทนเนอร์ของผู้แต่งแสดงผลออกมาให้เห็น
  } else { // ในกรณีที่ไม่มีข้อมูลผู้แต่งระบุไว้ (เป็นค่าว่างหรือไม่มีข้อมูลส่วนนี้)
    detailAuthorContainer.style.display = "none"; // สั่งซ่อนกล่องข้อมูลผู้แต่งทิ้งไปเพื่อรักษาความสวยงามของหน้าจอ
  } // จบการตรวจสอบและจัดการส่วนแสดงผลผู้แต่ง

  // ตั้งค่ารูปภาพในหน้ารายละเอียดให้เหมือนกับหน้าการ์ด
  if (detailImg) { // ตรวจสอบว่ามี Element รูปภาพในหน้ารายละเอียดหรือไม่
    detailImg.src = item.image || "mushoku_tensei_rec.png"; // กำหนดที่อยู่รูปภาพ (ถ้าไม่มีให้ใช้รูปสำรอง)
    detailImg.alt = item.title; // กำหนดข้อความสำรองเป็นชื่อเรื่องอนิเมะ
  } // จบการตั้งค่ารูปภาพ

  const { avg, count } = getRatingInfo(key); // ดึงข้อมูลคะแนนเฉลี่ยและจำนวนรีวิวของเรื่องนี้ออกมา
  if (detailAverage) { // ตรวจสอบว่ามีพื้นที่แสดงคะแนนเฉลี่ยหรือไม่
    detailAverage.textContent = buildRatingLabel(avg, count); // นำข้อความคะแนน (เช่น "4.5 (10 reviews)") ไปแสดงผล
  } // จบการแสดงผลคะแนน

  detailReviewInput.value = ""; // ล้างข้อความในช่องพิมพ์รีวิวเก่าออกให้หมดทุกครั้งที่เปิดเรื่องใหม่
  detailRatingController(0); // รีเซ็ตการเลือกดาวให้กลับไปที่ 0 (ใช้ฟังก์ชันที่ Return มาจาก setupRatingStars)

  renderAnimeReviews(); // เรียกฟังก์ชันแสดงผลรายการคอมเมนต์รีวิวของอนิเมะเรื่องนี้

  detailSheet.classList.add("open"); // สั่งให้หน้าต่างรายละเอียดอนิเมะเลื่อนขึ้นมาแสดงผล
  overlay.classList.add("visible"); // แสดงแผ่นพื้นหลังโปร่งแสงเพื่อเน้นหน้าต่างให้เด่นขึ้น
} // จบฟังก์ชัน openDetail

function closeDetail() { // ฟังก์ชันสำหรับปิดหน้าต่างรายละเอียดอนิเมะ
  detailSheet.classList.remove("open"); // ซ่อนหน้าต่างรายละเอียด
  overlay.classList.remove("visible"); // ซ่อนแผ่นพื้นหลังโปร่งแสง
  currentDetailKey = null; // ล้างค่าคีย์ของอนิเมะที่เคยเลือกไว้ออก
} // จบฟังก์ชัน closeDetail

function openLoginSheet() { // ฟังก์ชันสำหรับเปิดหน้าต่างเข้าสู่ระบบ
  loginError.textContent = ""; // ล้างข้อความแจ้งเตือนความผิดพลาดเก่าทิ้งไป
  loginUsername.value = ""; // ล้างชื่อผู้ใช้ที่เคยกรอกค้างไว้
  loginPassword.value = ""; // ล้างรหัสผ่านที่เคยกรอกค้างไว้
  loginSheet.classList.add("open"); // แสดงหน้าต่างเข้าสู่ระบบ
  overlay.classList.add("visible"); // แสดงแผ่นพื้นหลังโปร่งแสง
  setTimeout(() => { // หน่วงเวลาเล็กน้อยเพื่อให้หน้าต่างปรากฏก่อนเริ่มโฟกัส
    loginUsername.focus(); // ให้เคอร์เซอร์ไปรอที่ช่องชื่อผู้ใช้ทันทีเพื่อความสะดวก
  }, 50); // หน่วงเวลา 50 มิลลิวินาที
} // จบฟังก์ชัน openLoginSheet

function closeLoginSheet() { // ฟังก์ชันสำหรับปิดหน้าต่างเข้าสู่ระบบ
  loginSheet.classList.remove("open"); // ซ่อนหน้าต่างเข้าสู่ระบบ
} // จบฟังก์ชัน closeLoginSheet

function openSignupSheet() { // ฟังก์ชันสำหรับเปิดหน้าต่างสมัครสมาชิก
  signupError.textContent = ""; // ล้างข้อความแจ้งเตือนข้อผิดพลาด
  signupUsername.value = ""; // ล้างช่องชื่อผู้ใช้ใหม่
  signupPassword.value = ""; // ล้างช่องรหัสผ่านใหม่
  signupPasswordConfirm.value = ""; // ล้างช่องยืนยันรหัสผ่านใหม่
  signupSheet.classList.add("open"); // แสดงหน้าต่างสมัครสมาชิก
  overlay.classList.add("visible"); // แสดงแผ่นพื้นหลังโปร่งแสง
  setTimeout(() => { // หน่วงเวลาเพื่อให้ Transition ของ CSS ทำงานเสร็จ
    signupUsername.focus(); // ให้เคอร์เซอร์ไปรอที่ช่องชื่อผู้ใช้ใหม่
  }, 50); // หน่วงเวลา 50 มิลลิวินาที
} // จบฟังก์ชัน openSignupSheet

function closeSignupSheet() { // ฟังก์ชันสำหรับปิดหน้าต่างสมัครสมาชิก
  signupSheet.classList.remove("open"); // ซ่อนหน้าต่างสมัครสมาชิก
} // จบฟังก์ชัน closeSignupSheet


// ฟังก์ชันสำหรับแสดงผลรีวิวของเว็บไซต์ (Render Reviews)
function renderSiteReviews() { // เริ่มต้นฟังก์ชันแสดงรีวิวภาพรวมของเว็บไซต์
  // ฟังก์ชันนี้ยังคงอยู่เพื่อรองรับในอนาคต (เช่น การทำหน้า Guestbook หรือคำติชมเว็บ)
} // จบฟังก์ชัน renderSiteReviews

function renderAnimeReviews() { // ฟังก์ชันหลักสำหรับดึงรีวิวของอนิเมะแต่ละเรื่องมาแสดงผล
  detailReviewsList.innerHTML = ""; // ล้างรายการรีวิวเก่าที่ค้างอยู่ในหน้าต่างรายละเอียดออกให้หมดก่อน
  if (!currentDetailKey) return; // ถ้าไม่ได้ระบุว่ากำลังดูเรื่องอะไรอยู่ (ไม่มี Key) ให้หยุดทำงานทันที
  const list = animeReviews[currentDetailKey] || []; // ดึงข้อมูลรีวิวจาก Object ตามคีย์อนิเมะ ถ้าไม่มีข้อมูลให้ใช้เป็นอาเรย์ว่าง
  list.forEach((r) => { // เริ่มวนลูปเพื่อสร้างกล่องข้อความรีวิวทีละอันจากข้อมูลที่มี
    const item = document.createElement("div"); // สร้าง Tag div เพื่อใช้เป็นคอนเทนเนอร์หลักของหนึ่งรีวิว
    item.className = "review-item"; // กำหนด Class ชื่อ review-item เพื่อใช้จัดระเบียบและสไตล์ CSS

    const meta = document.createElement("div"); // สร้างพื้นที่สำหรับเก็บข้อมูลส่วนหัว (ดาวและชื่อคนรีวิว)
    meta.className = "review-meta"; // กำหนด Class เพื่อจัดวางตำแหน่งดาวและชื่อให้ดูเป็นระเบียบ
    const stars = document.createElement("span"); // สร้าง Tag span สำหรับแสดงสัญลักษณ์ดาว
    stars.className = "stars"; // กำหนด Class เพื่อระบุว่าเป็นส่วนการแสดงคะแนน
    stars.textContent = "★".repeat(r.rating); // วาดรูปดาวทึบตามจำนวนคะแนนที่รีวิวไว้ (เช่น คะแนน 4 ก็วาดดาว 4 ดวง)
    const label = document.createElement("span"); // สร้าง Tag span สำหรับแสดงชื่อผู้ใช้งานที่เขียนรีวิว
    label.style.fontSize = "11px"; // ปรับขนาดตัวอักษรชื่อผู้ใช้ให้เล็กลงเพื่อให้ดูไม่แย่งความโดดเด่นจากเนื้อหา
    label.style.opacity = "0.7"; // ปรับความโปร่งใสของชื่อผู้ใช้เพื่อให้ดูมีความเป็นข้อมูลรอง (Meta data)
    label.textContent = r.user || "ผู้ใช้"; // ใส่ชื่อผู้รีวิวลงไป หากไม่มีชื่อในระบบให้แสดงคำว่า "ผู้ใช้" แทน

    meta.appendChild(stars); // นำส่วนดาวใส่เข้าไปในกล่องข้อมูลส่วนหัว
    meta.appendChild(label); // นำชื่อผู้ใช้ใส่เข้าไปต่อท้ายดาวในกล่องข้อมูลส่วนหัว

    const text = document.createElement("div"); // สร้าง Tag div สำหรับแสดงเนื้อหาข้อความที่รีวิว
    text.className = "review-text"; // กำหนด Class เพื่อใช้จัดการเว้นวรรคและขนาดตัวอักษรของเนื้อหา
    text.textContent = r.text; // ใส่ข้อความรีวิวจริงที่ผู้ใช้พิมพ์ไว้ลงไป

    item.appendChild(meta); // นำข้อมูลส่วนหัว (ดาว+ชื่อ) ใส่เข้าไปในกล่องรีวิวหลัก
    item.appendChild(text); // นำข้อความรีวิวใส่ตามลงไปในกล่องรีวิวหลัก

    detailReviewsList.appendChild(item); // นำกล่องรีวิวที่สร้างสมบูรณ์แล้วไปแสดงผลในหน้าต่างรายละเอียดบนเว็บไซต์
  }); // จบการวนลูปสร้างรีวิว


 // อัปเดตคะแนนเฉลี่ยในหัวข้อรายละเอียดเมื่อมีรีวิวใหม่ถูกเพิ่มเข้ามา
 if (currentDetailKey && detailAverage) { // ตรวจสอบว่าหน้าจอยังเปิดเรื่องเดิมอยู่และมีที่สำหรับแสดงผลคะแนนหรือไม่
   const { avg, count } = getRatingInfo(currentDetailKey); // คำนวณหาค่าคะแนนเฉลี่ยและจำนวนรีวิวทั้งหมดของเรื่องนี้ใหม่อีกครั้ง
   detailAverage.textContent = buildRatingLabel(avg, count); // นำข้อความคะแนนที่สร้างใหม่ (เช่น "4.8 (15 รีวิว)") ไปเปลี่ยนบนหน้าจอ
 } // ปิดการทำงานในส่วนอัปเดตคะแนนเฉลี่ย
}

// ส่วนเริ่มต้น (Initialization)
let siteRatingValue = 0; // ประกาศตัวแปรเก็บคะแนนรีวิวเว็บไซต์เริ่มต้นที่ 0
let animeRatingValue = 0; // ประกาศตัวแปรเก็บคะแนนรีวิวอนิเมะเริ่มต้นที่ 0

const siteRatingController = setupRatingStars( // สร้างตัวควบคุมดาวสำหรับรีวิวเว็บไซต์
  siteRatingStars, // ระบุคอนเทนเนอร์ของดาวเว็บไซต์
  (val) => { // เมื่อมีการเปลี่ยนคะแนน (Callback)
    siteRatingValue = val; // อัปเดตค่าคะแนนเว็บไซต์ลงในตัวแปร
  }
);

const detailRatingController = setupRatingStars( // สร้างตัวควบคุมดาวสำหรับหน้ารายละเอียดอนิเมะ
  detailRatingStars, // ระบุคอนเทนเนอร์ของดาวในหน้ารายละเอียด
  (val) => { // เมื่อมีการเปลี่ยนคะแนน
    animeRatingValue = val; // อัปเดตค่าคะแนนอนิเมะลงในตัวแปร
  }
);

// การตั้งค่าธีมและการสลับธีม (Theme Management)
function applyTheme(theme) { // ฟังก์ชันสำหรับปรับใช้ธีมที่กำหนด
  const body = document.body; // อ้างอิงถึงส่วน Body ของหน้าเว็บ
  body.classList.remove("theme-light", "theme-dark"); // ล้างคลาสธีมเก่าออกทั้งหมดก่อน
  body.classList.add(theme); // เพิ่มคลาสธีมใหม่เข้าไป (มืดหรือสว่าง)
  if (themeToggle) { // ถ้ามีปุ่มสลับธีมหลัก
    themeToggle.textContent = theme === "theme-dark" ? "🌙" : "☀️"; // เปลี่ยนไอคอนปุ่มตามธีม (พระจันทร์/พระอาทิตย์)
  }
  const floatingToggle = document.getElementById("floatingThemeToggle"); // ค้นหาปุ่มสลับธีมแบบลอย (ถ้ามี)
  if (floatingToggle) { // ถ้าพบปุ่มลอย
    floatingToggle.textContent = theme === "theme-dark" ? "🌙" : "☀️"; // เปลี่ยนไอคอนปุ่มลอยให้ตรงกัน
  }
}

const savedTheme = localStorage.getItem("animeTheme"); // ดึงค่าธีมที่ผู้ใช้เคยเลือกไว้ออกจากหน่วยความจำถาวร (LocalStorage)
applyTheme(savedTheme === "theme-dark" ? "theme-dark" : "theme-light"); // ปรับใช้ธีมที่บันทึกไว้ (ถ้าไม่มีให้ใช้ธีมสว่างเป็นค่าเริ่มต้น)

if (themeToggle) { // ตรวจสอบว่ามีปุ่มสลับธีมอยู่หรือไม่
  themeToggle.addEventListener("click", () => { // เมื่อมีการคลิกปุ่มสลับธีม
    const isDark = document.body.classList.contains("theme-dark"); // เช็คว่าตอนนี้เป็นธีมมืดอยู่หรือไม่
    const next = isDark ? "theme-light" : "theme-dark"; // สลับสถานะ (ถ้ามืดไปสว่าง ถ้าสว่างไปมืด)
    applyTheme(next); // สั่งปรับใช้ธีมใหม่ทันที
    localStorage.setItem("animeTheme", next); // บันทึกการเลือกของผู้ใช้ลงใน LocalStorage เพื่อใช้ครั้งถัดไป
  });
}

// ส่วนจัดการเหตุการณ์ (Events) ต่างๆ บนหน้าเว็บ
categoryToggle.addEventListener("click", () => { // เมื่อคลิกที่ปุ่มเปิดเมนูหมวดหมู่
  openCategoryMenu(); // เรียกใช้ฟังก์ชันเพื่อแสดงเมนูหมวดหมู่และแผ่น Overlay
}); // จบเหตุการณ์คลิกปุ่มเปิดหมวดหมู่

categoryClose.addEventListener("click", () => { // เมื่อคลิกที่ปุ่มปิดเมนูหมวดหมู่ (เครื่องหมาย X)
  closeCategoryMenu(); // เรียกใช้ฟังก์ชันเพื่อซ่อนเมนูหมวดหมู่
}); // จบเหตุการณ์คลิกปุ่มปิดหมวดหมู่

favoritesToggle.addEventListener("click", () => { // เมื่อคลิกที่ปุ่มรายการโปรด (รูปหัวใจ)
  // สลับมุมมองการแสดงผลระหว่างหน้า "ทั้งหมด" กับหน้า "รายการที่ถูกใจ"
  if (currentView === "favorites") { // ถ้าปัจจุบันกำลังดูหน้าคนโปรดอยู่แล้ว
    currentView = "all"; // ให้เปลี่ยนสถานะการมองเห็นกลับเป็นหน้าหลัก (All)
    currentCategoryId = "all"; // รีเซ็ตไอดีหมวดหมู่ให้แสดงผลรวมทุกประเภท
    currentCategoryTitle.textContent = "ทั้งหมด"; // เปลี่ยนหัวข้อบนหน้าเว็บให้เป็นคำว่า "ทั้งหมด"
  } else { // ถ้าปัจจุบันกำลังอยู่ที่หน้าหลัก
    currentView = "favorites"; // ให้เปลี่ยนสถานะการมองเห็นไปเป็นหน้าคนโปรด
    currentCategoryTitle.textContent = "รายการถูกใจ"; // เปลี่ยนหัวข้อบนหน้าเว็บให้เป็น "รายการถูกใจ"
    currentCategoryId = "all"; // ตั้งค่าไอดีหมวดหมู่เป็น all เพื่อดึงข้อมูลที่ถูกใจจากทุกหมวดมาโชว์
  } // จบเงื่อนไขการสลับมุมมอง
  renderCards(); // สั่งให้วาดการ์ดอนิเมะใหม่ตามมุมมองที่เพิ่งสลับไป
}); // จบเหตุการณ์คลิกปุ่มสลับหน้าโปรด

favoritesClose.addEventListener("click", () => { // เมื่อคลิกที่ปุ่มปิดเมนูรายการโปรด
  closeFavoritesMenu(); // เรียกใช้ฟังก์ชันเพื่อซ่อนเมนูรายการโปรด
}); // จบเหตุการณ์คลิกปุ่มปิดรายการโปรด

/// เพิ่มเหตุการณ์เมื่อคลิกที่โลโก้เพื่อกลับไปหน้าหลักและล้างค่าการค้นหาทั้งหมด
homeLogo.addEventListener("click", () => { // เมื่อผู้ใช้คลิกที่โลโก้ของเว็บไซต์
  currentCategoryId = "all"; // รีเซ็ตหมวดหมู่ปัจจุบันให้กลับไปเป็น "ทั้งหมด"
  currentSearch = ""; // ล้างค่าข้อความค้นหาที่เก็บไว้ในตัวแปรทิ้ง
  if (searchInput) { // ตรวจสอบว่ามีช่องกรอกค้นหาอยู่ในหน้าเว็บหรือไม่
    searchInput.value = ""; // ล้างตัวอักษรที่พิมพ์ค้างไว้ในช่องค้นหาบนหน้าจอ
  } // จบการตรวจสอบช่องค้นหา
  setCategory("all"); // เรียกใช้ฟังก์ชันตั้งค่าหมวดหมู่เป็น "all" เพื่อเริ่มวาดการ์ดใหม่ทั้งหมด
  window.scrollTo({ top: 0, behavior: "smooth" }); // สั่งให้หน้าเว็บเลื่อนขึ้นไปด้านบนสุดแบบนุ่มนวล (Smooth Scroll)
}); // จบเหตุการณ์คลิกโลโก้

// เพิ่มเหตุการณ์เมื่อคลิกที่แผ่น Overlay (พื้นที่สีดำจางๆ ด้านหลังหน้าต่าง Pop-up)
overlay.addEventListener("click", () => { // เมื่อผู้ใช้คลิกพื้นที่ว่างๆ นอกหน้าต่างที่กำลังเปิดอยู่

  // ฟังก์ชันสำหรับปิดหน้าต่างทุกประเภท (เมนู, รายละเอียด และล็อกอิน) เมื่อคลิกที่พื้นที่ว่าง
  closeCategoryMenu(); // เรียกฟังก์ชันปิดเมนูหมวดหมู่
  closeFavoritesMenu(); // เรียกฟังก์ชันปิดเมนูรายการโปรด (ถ้ายังมีระบบนี้อยู่)
  closeDetail(); // เรียกฟังก์ชันปิดหน้าต่างรายละเอียดอนิเมะ
  closeLoginSheet(); // เรียกฟังก์ชันปิดหน้าต่างเข้าสู่ระบบ
  closeSignupSheet(); // เรียกฟังก์ชันปิดหน้าต่างสมัครสมาชิก
  overlay.classList.remove("visible"); // สั่งให้แผ่นพื้นหลังโปร่งแสงหายไปทันที
}); // จบเหตุการณ์คลิกที่ Overlay

loginToggle.addEventListener("click", () => { // เมื่อมีการคลิกที่ปุ่มล็อกอิน (หรือไอคอนโปรไฟล์)
  if (!isLoggedIn) { // ตรวจสอบว่าผู้ใช้ยังไม่ได้เข้าสู่ระบบใช่หรือไม่
    openLoginSheet(); // ถ้ายังไม่ได้เข้า ให้เปิดหน้าต่างสำหรับกรอกชื่อผู้ใช้และรหัสผ่าน
  } else { // ถ้าผู้ใช้เข้าสู่ระบบอยู่แล้ว (สถานะเป็น Logged In)
    
    // ระบบออกจากระบบแบบง่าย (Simple Logout Toggle)
    isLoggedIn = false; // ปรับสถานะการเข้าระบบให้เป็น false (สถานะแขกรับเชิญ)
    currentUser = null; // ล้างข้อมูลผู้ใช้งานปัจจุบันทิ้งเพื่อความปลอดภัย
    favorites = new Set(); // ล้างรายการที่เคยถูกใจไว้ทั้งหมด (เพื่อป้องกันข้อมูลค้างไปหาไอดีอื่น)
    loginToggle.textContent = "เข้าสู่ระบบ"; // เปลี่ยนข้อความบนปุ่มจาก "ออกจากระบบ" กลับเป็น "เข้าสู่ระบบ"
    loginToggle.classList.remove("logged-in"); // เอาคลาสสถานะล็อกอินออกเพื่อเปลี่ยนสีหรือดีไซน์ปุ่มให้เป็นแบบปกติ
    renderCards(); // สั่งให้วาดการ์ดใหม่อีกครั้งเพื่อปรับปรุงการแสดงผล (เช่น เอาไอคอนหัวใจออก)
  } // ปิดเงื่อนไข else ของการสลับสถานะล็อกอิน
}); // จบเหตุการณ์คลิกปุ่มสลับสถานะล็อกอิน

loginClose.addEventListener("click", () => { // เมื่อมีการคลิกที่ปุ่มปิดหน้าต่างล็อกอิน (เครื่องหมาย X)
  closeLoginSheet(); // เรียกใช้ฟังก์ชันเพื่อซ่อนหน้าต่างล็อกอิน
  if ( // ตรวจสอบสถานะหน้าต่างอื่นๆ ก่อนจะเอา Overlay ออก
    !detailSheet.classList.contains("open") && // ถ้าหน้ารายละเอียดปิดอยู่
    !signupSheet.classList.contains("open") && // และหน้าสมัครสมาชิกปิดอยู่
    !categoryMenu.classList.contains("open") // และเมนูหมวดหมู่ปิดอยู่
  ) { // ถ้าทุกอย่างปิดครบ
    overlay.classList.remove("visible"); // ให้ซ่อนแผ่นพื้นหลังโปร่งแสง (Overlay) ได้ทันที
  } // จบเงื่อนไขการตรวจสอบ
  // ซ่อนแผ่นพื้นหลังเฉพาะในกรณีที่ไม่มีหน้าต่างเมนูหรือป๊อปอัปอื่นเปิดค้างอยู่
  if (
    !categoryMenu.classList.contains("open") && // ตรวจสอบว่าเมนูหมวดหมู่ปิดอยู่
    !detailSheet.classList.contains("open") && // ตรวจสอบว่าหน้าต่างรายละเอียดปิดอยู่
    !signupSheet.classList.contains("open")    // ตรวจสอบว่าหน้าต่างสมัครสมาชิกปิดอยู่
  ) {
    overlay.classList.remove("visible"); // ถ้าปิดหมดแล้ว ให้เอาแผ่นพื้นหลังโปร่งแสงออก
  }
}); // จบส่วนจัดการ Overlay

signupOpen.addEventListener("click", () => { // เมื่อผู้ใช้คลิกปุ่ม "สมัครสมาชิก" จากหน้าล็อกอิน
  closeLoginSheet(); // ปิดหน้าต่างเข้าสู่ระบบก่อน
  openSignupSheet(); // แล้วจึงเปิดหน้าต่างสมัครสมาชิกขึ้นมาแทน
});

signupClose.addEventListener("click", () => { // เมื่อคลิกปิดหน้าสมัครสมาชิก
  closeSignupSheet(); // เรียกฟังก์ชันซ่อนหน้าต่างสมัครสมาชิก
  if ( // เช็คซ้ำอีกครั้งว่าต้องปิด Overlay ด้วยไหม
    !categoryMenu.classList.contains("open") &&
    !detailSheet.classList.contains("open") &&
    !loginSheet.classList.contains("open")
  ) {
    overlay.classList.remove("visible");
  }
});

loginSubmit.addEventListener("click", () => { // เมื่อคลิกปุ่ม "ตกลง" ในหน้าล็อกอิน
  const user = loginUsername.value.trim(); // ดึงชื่อผู้ใช้และตัดช่องว่างหัวท้ายออก
  const pass = loginPassword.value.trim(); // ดึงรหัสผ่านและตัดช่องว่างหัวท้ายออก
  if (user && users[user] && users[user] === pass) { // ถ้าพบชื่อในระบบและรหัสผ่านตรงกัน
    isLoggedIn = true; // ตั้งสถานะเป็นเข้าสู่ระบบแล้ว
    currentUser = user; // บันทึกชื่อผู้ใช้ปัจจุบัน
    favorites = loadFavoritesForUser(currentUser); // โหลดรายการโปรดเฉพาะของคนนี้ขึ้นมา
    loginError.textContent = ""; // ล้างข้อความแจ้งเตือนข้อผิดพลาด
    closeLoginSheet(); // ปิดหน้าต่างล็อกอิน
    loginToggle.textContent = `${user} (ออกจากระบบ)`; // เปลี่ยนชื่อปุ่มเป็นชื่อผู้ใช้พร้อมปุ่มออก
    loginToggle.classList.add("logged-in"); // ใส่สไตล์สำหรับผู้ที่เข้าสู่ระบบแล้ว
    renderCards(); // วาดการ์ดใหม่เพื่อโชว์ปุ่มถูกใจ (ถ้ามี)
    if ( // จัดการ Overlay หลังล็อกอินสำเร็จ
      !categoryMenu.classList.contains("open") &&
      !detailSheet.classList.contains("open") &&
      !signupSheet.classList.contains("open")
    ) {
      overlay.classList.remove("visible");
    }
  } else { // หากข้อมูลไม่ถูกต้อง
    loginError.textContent = "ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง"; // แสดงข้อความเตือนสีแดง
  }
});

signupSubmit.addEventListener("click", () => { // เมื่อคลิกปุ่ม "สมัครสมาชิก"
  const user = signupUsername.value.trim(); // รับชื่อผู้ใช้ใหม่
  const pass = signupPassword.value.trim(); // รับรหัสผ่านใหม่
  const pass2 = signupPasswordConfirm.value.trim(); // รับรหัสผ่านยืนยัน

  if (!user || !pass || !pass2) { // ตรวจสอบว่ากรอกครบทุกช่องหรือไม่
    signupError.textContent = "กรุณากรอกข้อมูลให้ครบถ้วน"; // แจ้งเตือนถ้ามีช่องว่าง
    return; // หยุดการทำงานทันที
  }
  if (pass.length < 4) { // ตรวจสอบความปลอดภัยเบื้องต้นของรหัสผ่าน
    signupError.textContent = "รหัสผ่านควรมีอย่างน้อย 4 ตัวอักษร"; // บังคับความยาวขั้นต่ำ
    return;
  }
  if (pass !== pass2) { // ตรวจสอบว่ารหัสผ่านทั้งสองช่องตรงกันหรือไม่
    signupError.textContent = "รหัสผ่านทั้งสองช่องไม่ตรงกัน"; // แจ้งเตือนถ้าไม่ตรงกัน
    return;
  }
  if (users[user]) { // ตรวจสอบว่าชื่อผู้ใช้นี้มีคนใช้ไปหรือยัง
    signupError.textContent = "มีชื่อผู้ใช้นี้อยู่แล้ว กรุณาใช้ชื่ออื่น"; // แจ้งเตือนชื่อซ้ำ
    return;
  }

  users[user] = pass; // บันทึกชื่อผู้ใช้และรหัสผ่านใหม่ลงในฐานข้อมูลจำลอง
  isLoggedIn = true; // ล็อกอินให้ทันทีหลังสมัครเสร็จ
  currentUser = user; // บันทึกชื่อ
  favorites = loadFavoritesForUser(currentUser); // สร้างรายการโปรดว่างเปล่าสำหรับคนใหม่
  signupError.textContent = ""; // ล้างข้อความเตือน
  closeSignupSheet(); // ปิดหน้าสมัครสมาชิก
  loginToggle.textContent = `${user} (ออกจากระบบ)`; // อัปเดต UI ปุ่มล็อกอิน
  loginToggle.classList.add("logged-in"); // ใส่สไตล์เข้าสู่ระบบ
  renderCards(); // วาดการ์ดใหม่

  if ( // จัดการ Overlay หลังสมัครเสร็จ
    !categoryMenu.classList.contains("open") &&
    !detailSheet.classList.contains("open") &&
    !loginSheet.classList.contains("open")
  ) {
    overlay.classList.remove("visible");
  }
});

// จัดการเหตุการณ์การคลิกภายในการ์ดอนิเมะทั้งหมด
cardsContainer.addEventListener("click", (e) => { // เมื่อมีการคลิกเกิดขึ้นภายในพื้นที่แสดงการ์ด (Container)
  const likeTarget = e.target.closest(".like-btn"); // ตรวจสอบว่าจุดที่คลิกคือปุ่มถูกใจ (Like Button) หรือไม่
  if (likeTarget) { // ถ้าสิ่งที่คลิกคือปุ่มถูกใจ
    const key = likeTarget.dataset.key; // ดึงค่า Key ของอนิเมะจาก attribute 'data-key' ของปุ่มนั้น
    if (key) { // ถ้ามีค่า Key อยู่จริง
      toggleFavorite(key); // เรียกใช้ฟังก์ชันเพื่อ สลับสถานะ (เพิ่ม/ลบ) จากรายการโปรด
    } // ปิดเงื่อนไขการเช็ค Key
    e.stopPropagation(); // หยุดการส่งต่อเหตุการณ์คลิก ไม่ให้ไปกระตุ้นการเปิดหน้าต่างรายละเอียด (สำคัญมาก!)
    return; // จบการทำงานของเหตุการณ์นี้ทันที เพื่อไม่ให้ไปทำงานในส่วนการคลิกการ์ดต่อ
  } // ปิดเงื่อนไขการจัดการปุ่มถูกใจ

  const card = e.target.closest(".card"); // ตรวจสอบว่าจุดที่คลิก (ที่ไม่ใช่ปุ่มถูกใจ) คือพื้นที่ของการ์ดอนิเมะหรือไม่
  if (!card) return; // ถ้าคลิกโดนพื้นที่ว่างที่ไม่มีการ์ด ให้จบการทำงานโดยไม่ทำอะไร
  const key = card.dataset.key; // ดึงค่า Key ของอนิเมะจากการ์ดที่ถูกคลิก
  openDetail(key); // เรียกใช้ฟังก์ชันเพื่อเปิดหน้าต่างแสดงรายละเอียดของอนิเมะเรื่องนั้น
}); // จบการจัดการเหตุการณ์คลิกการ์ด

// จัดการเหตุการณ์การคลิกบนสไลด์อนิเมะแนะนำ (Trending Slider)
trendingSlide.addEventListener("click", (e) => { // เมื่อมีการคลิกเกิดขึ้นในพื้นที่สไลด์
  const card = e.target.closest(".recommended-card"); // ตรวจสอบว่าจุดที่คลิกอยู่ภายในการ์ดแนะนำ (.recommended-card) หรือไม่
  if (!card) return; // ถ้าคลิกโดนพื้นที่ว่างข้างๆ ที่ไม่ใช่การ์ด ให้จบการทำงานทันที
  const key = card.dataset.key; // ดึงค่า Key ของอนิเมะจาก data-key ของการ์ดที่ถูกคลิก
  openDetail(key); // เรียกฟังก์ชันเปิดหน้าต่างรายละเอียดของอนิเมะเรื่องนั้นขึ้นมาแสดง
}); // จบการจัดการคลิกบนสไลด์

trendingPrev.addEventListener("click", () => { // เมื่อมีการคลิกปุ่ม "ก่อนหน้า" (<)
  prevRecommended(); // เรียกฟังก์ชันสั่งให้สไลด์เลื่อนกลับไปภาพก่อนหน้า
  resetTrendingAuto(); // รีเซ็ตตัวนับเวลาการเลื่อนอัตโนมัติ เพื่อไม่ให้สไลด์เลื่อนหนีไปเองทันทีหลังจากที่ผู้ใช้เพิ่งกด
}); // จบการจัดการคลิกปุ่มก่อนหน้า

trendingNext.addEventListener("click", () => { // เมื่อมีการคลิกปุ่ม "ถัดไป" (>)
  nextRecommended(); // เรียกฟังก์ชันสั่งให้สไลด์เลื่อนไปภาพถัดไป
  resetTrendingAuto(); // รีเซ็ตตัวนับเวลาการเลื่อนอัตโนมัติเพื่อให้เริ่มนับเวลาใหม่จากจุดนี้
}); // จบการจัดการคลิกปุ่มถัดไป

// จัดการเหตุการณ์เมื่อคลิกปุ่ม "ส่งรีวิว" ในหน้ารายละเอียดอนิเมะ
detailReviewSubmit.addEventListener("click", () => { // เมื่อผู้ใช้กดปุ่มส่งข้อความรีวิว
  if (!isLoggedIn) { // ตรวจสอบก่อนว่าผู้ใช้ได้ล็อกอินเข้าสู่ระบบแล้วหรือยัง
    openLoginSheet(); // ถ้ายังไม่ล็อกอิน ให้เด้งหน้าต่าง Login ขึ้นมาขัดจังหวะทันที
    return; // หยุดการทำงานของฟังก์ชันส่งรีวิวไว้แค่นี้
  }

  const text = detailReviewInput.value.trim(); // ดึงข้อความรีวิวออกมาและตัดช่องว่างที่เผลอพิมพ์เกินมาทิ้ง
  // ตรวจสอบความพร้อม: ต้องมีข้อความ, มีการเลือกดาว (ไม่เป็น 0), และต้องรู้ว่ารีวิวเรื่องอะไรอยู่
  if (!text || !animeRatingValue || !currentDetailKey) return; 

  if (!animeReviews[currentDetailKey]) { // ถ้าอนิเมะเรื่องนี้ยังไม่เคยมีใครมารีวิวเลย (อาเรย์ยังไม่ถูกสร้าง)
    animeReviews[currentDetailKey] = []; // ให้สร้างอาเรย์ว่างๆ มารองรับข้อมูลรีวิวใหม่
  }
  
  // เพิ่มข้อมูลรีวิวใหม่เข้าไปที่ "ตำแหน่งแรก" ของรายการ (ใช้ unshift เพื่อให้รีวิวใหม่ล่าสุดอยู่บนสุด)
  animeReviews[currentDetailKey].unshift({
    rating: animeRatingValue, // คะแนนดาวที่ผู้ใช้เลือก (จากตัวแปรโกลบอลที่อัปเดตโดย controller)
    text, // ข้อความที่ผู้ใช้พิมพ์
    user: currentUser || "ผู้ใช้", // ชื่อผู้ใช้งานปัจจุบัน (ถ้าไม่มีชื่อให้ใส่ว่า "ผู้ใช้")
  });

  detailReviewInput.value = ""; // ล้างช่องพิมพ์ข้อความให้ว่างเปล่าเพื่อรอการรีวิวครั้งต่อไป
  detailRatingController(0); // รีเซ็ตตัวควบคุมดาวให้กลับไปเป็น 0 ดวง (ไม่สว่าง)
  renderAnimeReviews(); // สั่งให้วาดรายการรีวิวในหน้ารายละเอียดใหม่ทันทีเพื่อให้เห็นข้อความตัวเอง
  renderCards(); // อัปเดตการ์ดในหน้าหลักด้วย เพราะคะแนนดาวเฉลี่ยบนการ์ดอาจจะเปลี่ยนไปแล้ว
}); // จบเหตุการณ์ส่งรีวิว

// เพิ่มเหตุการณ์เมื่อคลิกปุ่มกากบาท (X) ในหน้ารายละเอียด เพื่อสั่งปิดหน้าต่างนั้น
detailClose.addEventListener("click", () => {
  closeDetail(); // เรียกใช้ฟังก์ชันปิดหน้ารายละเอียดและเคลียร์ Overlay
});

// นำเข้าไอคอนจากไลบรารี Lucide (ต้องมีการติดตั้งหรือดึง CDN ของ Lucide มาก่อน)
import { createIcons, Facebook, Instagram, Twitter, Youtube } from 'lucide';

// --- เริ่มต้นการแสดงผลครั้งแรก (Initial Render) ---
createIcons({ // สั่งให้ Lucide ตรวจหา element ในหน้าเว็บและแทนที่ด้วยไอคอน SVG
  icons: {
    Facebook,
    Instagram,
    Twitter,
    Youtube
  }
});

renderCategoryMenu(); // วาดเมนูหมวดหมู่ที่ด้านข้าง
renderCards();        // วาดการ์ดอนิเมะทั้งหมดในหน้าหลัก
renderTrending();     // วาดสไลด์อนิเมะแนะนำด้านบน
renderSiteReviews();  // วาดรีวิวภาพรวมของเว็บไซต์
startTrendingAuto();  // เริ่มระบบเลื่อนสไลด์อัตโนมัติ

// --- ระบบปุ่มสลับธีมแบบลอยและลากได้ (Floating Draggable Theme Toggle Logic) ---
(function initFloatingToggle() { // ใช้ IIFE เพื่อแยกขอบเขตตัวแปรไม่ให้ปนกับส่วนอื่น
  const el = document.getElementById("floatingThemeToggle"); // ดึงปุ่มลอยออกมา
  if (!el) return; // ถ้าไม่เจอตัวปุ่มในหน้าเว็บ ให้จบการทำงานทันที

  let isDragging = false; // สถานะว่ากำลังลากอยู่หรือไม่
  let hasMoved = false;   // สถานะว่ามีการขยับเมาส์/นิ้วจริงๆ หรือไม่ (ป้องกันการเข้าใจผิดว่าเป็นแค่การคลิก)
  let startX, startY;     // เก็บตำแหน่งเริ่มต้นที่เมาส์หรือนิ้วสัมผัส
  let initialLeft, initialTop; // เก็บตำแหน่งพิกัดของปุ่มก่อนจะเริ่มลาก

  // ฟังก์ชันเมื่อเริ่มกด (เมาส์กดลง หรือ นิ้วจิ้ม)
  const onStart = (e) => {
    isDragging = true; // ตั้งสถานะว่าเริ่มลากแล้ว
    hasMoved = false;  // รีเซ็ตสถานะการเคลื่อนที่
    
    // ตรวจสอบว่าเป็นเหตุการณ์จากมือถือ (Touch) หรือเมาส์ (Mouse) เพื่อหาพิกัด X, Y
    const clientX = e.type === "touchstart" ? e.touches[0].clientX : e.clientX;
    const clientY = e.type === "touchstart" ? e.touches[0].clientY : e.clientY;
    
    startX = clientX; // บันทึกจุดเริ่มต้น X
    startY = clientY; // บันทึกจุดเริ่มต้น Y
    
    const rect = el.getBoundingClientRect(); // คำนวณพิกัดปัจจุบันของปุ่มบนหน้าจอ
    initialLeft = rect.left; // เก็บค่าตำแหน่งซ้าย
    initialTop = rect.top;   // เก็บค่าตำแหน่งบน
    
    el.style.transition = "none"; // ปิด Effect การเลื่อนแบบนุ่มนวลชั่วคราวเพื่อให้ลากตามมือได้ทันที (ไม่หน่วง)
    el.style.cursor = "grabbing"; // เปลี่ยนสัญลักษณ์เมาส์เป็นรูปมือคว้า
  };

  // ฟังก์ชันขณะที่กำลังลาก (เมาส์ขยับ หรือ นิ้วรูด)
  const onMove = (e) => {
    if (!isDragging) return; // ถ้าไม่ได้อยู่ในสถานะลาก ให้ข้ามไป
    
    const clientX = e.type === "touchmove" ? e.touches[0].clientX : e.clientX;
    const clientY = e.type === "touchmove" ? e.touches[0].clientY : e.clientY;
    
    const dx = clientX - startX; // คำนวณระยะทางที่ขยับไปจากจุดเริ่มในแนวแกน X
    const dy = clientY - startY; // คำนวณระยะทางที่ขยับไปจากจุดเริ่มในแนวแกน Y
    
    // ถ้าขยับเกิน 5 พิกเซล ให้ถือว่าเป็นการ "ลาก" (ไม่ใช่แค่การคลิกสั่นๆ)
    if (Math.abs(dx) > 5 || Math.abs(dy) > 5) {
      hasMoved = true;
    }

    // ส่วนอัปเดตตำแหน่งขณะลาก (Update position)
    let newX = initialLeft + dx; // คำนวณพิกัดแกน X ใหม่ โดยเอาตำแหน่งเดิมบวกกับระยะที่ลากไป
    let newY = initialTop + dy; // คำนวณพิกัดแกน Y ใหม่ โดยเอาตำแหน่งเดิมบวกกับระยะที่ลากไป
    
    // การจำกัดขอบเขตให้อยู่ภายในหน้าจอ (Containment within viewport)
    const padding = 10; // กำหนดระยะห่างจากขอบจอขั้นต่ำที่ 10 พิกเซล (ไม่ให้ปุ่มชิดขอบเกินไป)
    // ใช้ Math.max และ Math.min เพื่อดักไม่ให้ค่า newX น้อยกว่า padding หรือมากกว่าความกว้างจอหักลบขนาดปุ่ม
    newX = Math.max(padding, Math.min(newX, window.innerWidth - el.offsetWidth - padding));
    // ทำแบบเดียวกันในแกน Y เพื่อป้องกันไม่ให้ปุ่มหลุดหายไปด้านบนหรือด้านล่าง
    newY = Math.max(padding, Math.min(newY, window.innerHeight - el.offsetHeight - padding));
    
    el.style.left = `${newX}px`; // ปรับใช้พิกัด X จริงในรูปแบบพิกเซล
    el.style.top = `${newY}px`; // ปรับใช้พิกัด Y จริงในรูปแบบพิกเซล
    el.style.right = "auto"; // ล้างค่า CSS Right เดิมออกเพื่อไม่ให้ตำแหน่งขัดแย้งกัน
    el.style.bottom = "auto"; // ล้างค่า CSS Bottom เดิมออกเพื่อให้ปุ่มขยับตาม Left/Top ได้อิสระ
    
    // หากเป็นเหตุการณ์ที่ยกเลิกได้ ให้ป้องกันการ Scroll ของหน้าจอขณะลาก (ช่วยให้ลากบนมือถือได้ลื่นขึ้น)
    if (e.cancelable) e.preventDefault();
  };

  // ฟังก์ชันเมื่อปล่อยมือหรือปล่อยเมาส์ (onEnd)
  const onEnd = () => {
    if (!isDragging) return; // ถ้าไม่ได้กำลังลากอยู่ ให้ข้ามไป
    isDragging = false; // เปลี่ยนสถานะกลับเป็นไม่ได้ลาก
    el.style.cursor = "grab"; // เปลี่ยนสัญลักษณ์เมาส์กลับเป็นรูปมือเตรียมคว้า
    // ใส่ Transition ให้ปุ่มมีความ "เด้ง" หรือนุ่มนวลขึ้นเล็กน้อยหลังจากปล่อยมือด้วยค่า cubic-bezier
    el.style.transition = "transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
  };

  // ฟังก์ชันป้องกันการสลับธีมขณะลาก (onClick)
  const onClick = (e) => {
    if (hasMoved) { // หากมีการขยับปุ่มเกินระยะที่กำหนด (ถือว่าเป็นการลาก ไม่ใช่การคลิก)
      e.preventDefault(); // ยับยั้งเหตุการณ์ปกติของปุ่ม
      e.stopPropagation(); // หยุดการส่งต่อ Event ไม่ให้ไปถึงฟังก์ชันสลับธีม
      return; // จบการทำงานทันที
    }
    // ทำการสลับธีมด้วยตรรกะเดียวกับปุ่มที่อยู่บน Header
    const isDark = document.body.classList.contains("theme-dark"); // ตรวจสอบว่าปัจจุบันหน้าเว็บเป็นธีมมืดอยู่หรือไม่
    const next = isDark ? "theme-light" : "theme-dark"; // กำหนดธีมถัดไป (ถ้ามืดให้เป็นสว่าง ถ้าสว่างให้เป็นมืด)
    applyTheme(next); // เรียกฟังก์ชันเพื่อปรับเปลี่ยนสีและไอคอนบนหน้าจอทันที
    localStorage.setItem("animeTheme", next); // บันทึกค่าธีมที่เลือกไว้ลงในเครื่องเพื่อใช้ในครั้งต่อไป
  }; // จบฟังก์ชัน onClick

  // ผูกเหตุการณ์เมาส์ (Mouse Events)
  el.addEventListener("mousedown", onStart); // เริ่มตรวจจับเมื่อมีการกดเมาส์ลงบนตัวปุ่มลอย
  window.addEventListener("mousemove", onMove); // ตรวจจับการขยับเมาส์ทั่วทั้งหน้าต่างเพื่อให้ปุ่มเคลื่อนที่ตามได้ทัน
  window.addEventListener("mouseup", onEnd); // ตรวจจับเมื่อผู้ใช้ปล่อยเมาส์เพื่อหยุดการลาก

  // ผูกเหตุการณ์สัมผัส (Touch Events) สำหรับหน้าจอมือถือและแท็บเล็ต
  el.addEventListener("touchstart", onStart, { passive: false }); // เริ่มตรวจจับเมื่อนิ้วแตะปุ่ม (ปิด passive เพื่อให้สั่งหยุดการ Scroll ได้)
  window.addEventListener("touchmove", onMove, { passive: false }); // ตรวจจับการรูดนิ้ว (ปิด passive เพื่อป้องกันหน้าจอเลื่อนขณะลากปุ่ม)
  window.addEventListener("touchend", onEnd); // ตรวจจับเมื่อยกนิ้วขึ้นเพื่อจบการลากปุ่ม

  // ผูกเหตุการณ์คลิก (Click Event)
  el.addEventListener("click", onClick); // ตั้งค่าให้ปุ่มสลับธีมเมื่อมีการคลิกปกติ
})(); // จบการทำงานของฟังก์ชันเริ่มต้นระบบปุ่มลอย (Self-invoking function)