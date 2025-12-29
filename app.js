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
        image: "Jobless Reincarnation.jpg",
      },
      {
         title: "Re:Zero",
         author: "Tappei Nagatsuki",
         characters: ["นัตสึกิ สุบารุ", "เอมิลีอา", "เรม", "แรม", "เบียทริซ"],
         description: "เด็กหนุ่มที่ถูกอัญเชิญไปยังต่างโลกพร้อมกับพลัง 'ตายแล้วกลับมาเกิดใหม่' (Return by Death) เขาต้องใช้พลังนี้เพื่อปกป้องคนที่เขารักและเผชิญกับโชคชะตาที่โหดร้าย",
         image: "ReZero.webp", // ใช้ไฟล์ที่คุณระบุไว้ตอนแรก
      },
      {
    title: "Tensei Shitara Slime Datta Ken",
    author: "Fuse",
    characters: ["ริมุรุ เทมเพสต์", "เวรุดอร่า", "เบนิมารุ", "ชูนา", "ชิอน"],
    description: "พนักงานบริษัทหนุ่มถูกแทงตายแล้วไปเกิดใหม่ในต่างโลกเป็น 'สไลม์' แต่ด้วยทักษะสุดโกงอย่าง 'นักพยากรณ์' และ 'ผู้กลืนกิน' ทำให้เขากลายเป็นผู้สร้างประเทศอสูรที่ยิ่งใหญ่",
    image: "Tensei Shitara Slime Datta Ken.jpg"
},
      {
    title: "The Rising of the Shield Hero",
    author: "Aneko Yusagi",
    characters: ["อิวาทานิ นาโอฟุมิ", "ราฟทาเลีย", "ฟีโล", "เมลตี้"],
    description: "เด็กหนุ่มที่ถูกอัญเชิญไปต่างโลกในฐานะ 'ผู้กล้าแห่งโล่' แต่กลับถูกหักหลังและใส่ร้ายจนสูญเสียทุกอย่าง เขาจึงต้องเริ่มต้นจากศูนย์ด้วยความแค้นและพิสูจน์ตัวเองใหม่อีกครั้ง",
    image: "The Rising of the Shield Hero.jpg"
},
      {
    title: "Konosuba",
    author: "Natsume Akatsuki",
    characters: ["ซาโต้ คาซึมะ", "อควา", "เมกุมิน", "ดาร์คเนส"],
    description: "เด็กหนุ่มที่ตายด้วยสาเหตุสุดช็อกจนได้ไปเกิดใหม่ในต่างโลกพร้อมกับเทพธิดาสุดเพี้ยน และต้องร่วมปาร์ตี้กับเหล่านักผจญภัยจอมป่วนเพื่อทำภารกิจปราบราชาปีศาจ",
    image: "Konosuba.jpg"
},
      {
    title: "Overlord",
    author: "Kugane Maruyama",
    characters: ["ไอนซ์ อูล โกว์น", "อัลเบโด้", "แชลเทียร์ บลัดฟอลเลน", "เดมิอูร์โกส", "เซบาส เตียน"],
    description: "ในวันสุดท้ายของเกมออนไลน์ยอดฮิต ชายหนุ่มผู้หลงรักเกมนี้กลับไม่สามารถ Log-out ออกได้ และพบว่าโลกในเกมได้กลายเป็นความจริง เขาจึงต้องปกครองสุสานนาซาริคและแผ่ขยายอำนาจไปทั่วโลกใหม่",
    image: "Overlord.jpg"
},{
    title: "No Game No Life",
    author: "Yuu Kamiya",
    characters: ["โซระ", "ชิโระ", "สเตฟานี่ โดล่า", "จิบริล"],
    description: "สองพี่น้องเกมเมอร์อัจฉริยะที่ถูกอัญเชิญไปยังโลกที่ทุกอย่างตัดสินด้วย 'เกม' พวกเขาจึงต้องใช้สติปัญญาเพื่อกอบกู้เผ่าพันธุ์มนุษย์และท้าทายพระเจ้า",
    image: "No Game No Life.jpg"
},
      {
    title: "Isekai Oji-san",
    author: "Hotondoshindeiru",
    characters: ["ชิบาซากิ (คุณน้า)", "ทาคาฟุมิ", "ฟูจิมิยะ", "เอลฟ์ (ซุย)", "เมเบล"],
    description: "ชายวัยกลางคนที่ฟื้นจากอาการโคม่า 17 ปี และกลับมาพร้อมพลังเวทมนตร์จากต่างโลก เรื่องราวการปรับตัวให้เข้ากับยุค SEGA ครองใจ และการเล่าอดีตการผจญภัยสุดรันทดในต่างโลกจึงเริ่มขึ้น",
    image: "Isekai Oji-san.jpg"
},
     {
     title: "Tondemo Skill de Isekai Hourou Meshi",
    author: "Ren Eguchi",
    characters: ["มุโคด้า (ซึโยชิ มุโคดะ)", "เฟล", "ซุย", "ดร้าจัง"],
    description: "ชายหนุ่มที่ถูกอัญเชิญไปต่างโลกพร้อมสกิล 'ซูเปอร์มาร์เก็ตออนไลน์' ที่ดูไร้ค่าในตอนแรก แต่เขากลับใช้มันทำอาหารเลิศรสเพื่อผูกมิตรกับหมาป่าในตำนานและออกเดินทางท่องเที่ยวไปในโลกกว้าง",
    image: "Tondemo Skill de Isekai Hourou Meshi.jpg"
},
      {
    title: "Sword Art Online",
    author: "Reki Kawahara",
    characters: ["คิริโตะ (คิริกายะ คาสึโตะ)", "อาสึนะ (ยูกิ อาสึนะ)", "ยุย", "ชิน่อน", "ลีฟ่า"],
    description: "เหล่าเกมเมอร์นับหมื่นถูกขังอยู่ในเกม VRMMO ชื่อดังที่หากตายในเกมจะเท่ากับตายในโลกจริง คิริโตะนักดาบหนุ่มจึงต้องต่อสู้เพื่อเคลียร์เกมและพาเอาชีวิตรอดออกไปจากโลกแห่งดาบนี้ให้ได้",
    image: "Sword Art Online.jpg"
}
    ],
  },
  {
    id: "fantasy",
    name: "แฟนตาซี (Fantasy)",
    items: [
      {
        title: "Frieren: Beyond Journey’s End",
        description: "เอลฟ์ผู้มีอายุยืนออกเดินทางอีกครั้งเพื่อเข้าใจมนุษย์หลังเพื่อนร่วมทีมตาย",
        image: "frieren_rec.png",
      },
     {
    title: "Fullmetal Alchemist: Brotherhood",
    author: "Hiromu Arakawa",
    characters: ["เอ็ดเวิร์ด เอลริค", "อัลฟอนเซ เอลริค", "วินรี่ ร็อกเบลล์", "รอย มัสแตง"],
    description: "สองพี่น้องเอลริคพยายามใช้ 'แปรธาตุ' เพื่อคืนชีพให้แม่ที่ตายไป แต่กลับต้องสูญเสียร่างกายไปเป็นค่าตอบแทน พวกเขาจึงออกเดินทางตามหา 'ศิลานักปราชญ์' เพื่อนำร่างกายเดิมกลับคืนมา",
    image: "Fullmetal Alchemist.jpg"
},
     {
    title: "Black Clover",
    author: "Yuki Tabata",
    characters: ["อัสตา", "ยูโน", "ยามิ สึเกะฮิโระ", "โนเอล ซิลวา"],
    description: "ในโลกที่ทุกคนใช้เวทมนตร์ได้ เด็กหนุ่มที่ไร้พลังเวทอย่างอัสตาต้องพยายามอย่างหนักเพื่อมุ่งสู่ตำแหน่งจักรพรรดิเวทมนตร์ โดยมีดาบมหึมาที่สามารถลบล้างเวทมนตร์ได้ทุกชนิดเป็นอาวุธคู่กาย",
    image: "Black Clover.jpg"
},
     {
    title: "Made in Abyss",
    author: "Akihito Tsukushi",
    characters: ["ริโกะ", "เร็ก", "นานาจิ", "บอนเดรด"],
    description: "เด็กสาวและหุ่นยนต์หนุ่มออกเดินทางลงไปสู่ 'อาบิส' หลุมยักษ์สุดลึกลับที่เต็มไปด้วยสมบัติและอันตราย เพื่อตามหาแม่ของเธอในส่วนลึกที่ไม่มีใครเคยรอดกลับมาได้ง่าย ๆ",
    image: "Made in Abyss.jpg"
},
      {
    title: "Ranking of Kings",
    author: "Sosuke Toko",
    characters: ["โบจจิ", "คาเกะ", "ไดด้า", "ฮิลลิ่ง", "โดมาส"],
    description: "เรื่องราวของ 'โบจจิ' เจ้าชายหูหนวกและไร้เรี่ยวแรงที่ผู้คนต่างดูแคลน แต่เขาไม่เคยย่อท้อและออกเดินทางไปพร้อมกับเพื่อนรัก 'คาเกะ' เพื่อพิสูจน์ตัวเองและก้าวขึ้นสู่การเป็นพระราชาที่ยิ่งใหญ่ที่สุด",
    image: "Ranking of Kings.jpg"
},
      {
    title: "Magi: The Labyrinth of Magic",
    author: "Shinobu Ohtaka",
    characters: ["อาลาดิน", "อาลีบาบา ซาลูจา", "โมลเซียน่า", "ซินแบด"],
    description: "การผจญภัยของเด็กน้อยผู้เป็น 'เมไจ' และเพื่อนพ้อง ในการพิชิตหอคอยปริศนาที่เรียกว่า 'ดันเจี้ยน' เพื่อรวบรวมพลังของจินและตัดสินผู้ที่จะขึ้นเป็นราชาเพื่อเปลี่ยนแปลงโลก",
    image: "Magi.jpg"
},
      {
    title: "Fairy Tail",
    author: "Hiro Mashima",
    characters: ["นัตสึ ดรากูนีล", "ลูซี่ ฮาร์ทฟิเลีย", "แฮปปี้", "เกรย์ ฟูลบัสเตอร์", "เอลซ่า สการ์เล็ต"],
    description: "เรื่องราวการผจญภัยของเหล่านักเวทแห่งกิลด์ 'แฟรี่เทล' ที่ขึ้นชื่อเรื่องความซ่าและความรักพวกพ้อง พวกเขาต้องออกทำภารกิจและต่อสู้กับศัตรูที่ร้ายกาจเพื่อปกป้องโลกเวทมนตร์",
    image: "Fairy Tail.jpg"
},
      {
    title: "Nanatsu no Taizai",
    author: "Nakaba Suzuki",
    characters: ["เมลิโอดัส", "เอลิซาเบธ", "บัน", "คิง", "ไดแอน", "โกเธอร์", "เมอร์ลิน", "เอสคานอร์"],
    description: "กลุ่มอดีตอัศวินผู้ทรงพลังที่สุด '7 บาป' ที่ถูกใส่ร้ายว่าก่อกบฏและต้องกระจัดกระจายกันไป ได้กลับมารวมตัวกันอีกครั้งตามคำขอของเจ้าหญิงเอลิซาเบธ เพื่อกอบกู้อาณาจักรลีโอเนสจากเหล่าอัศวินศักดิ์สิทธิ์ที่ฉ้อฉล",
    image: "Nanatsu no Taizai.jpg"
},
      {
    title: "Natsume's Book of Friends",
    author: "Yuki Midorikawa",
    characters: ["นัตสึเมะ ทาคาชิ", "มาดาระ (เนียนโกะเซนเซ)", "นัตสึเมะ เรโกะ", "ทานุมะ คานาเมะ"],
    description: "เด็กหนุ่มผู้มีพลังเห็นวิญญาณได้รับ 'บันทึกสหาย' ซึ่งเป็นมรดกจากคุณย่า เขาตัดสินใจจะคืนชื่อให้กับเหล่าปีศาจที่ถูกจองจำในบันทึก โดยมีปีศาจจอมกวนในคราบแมวกวักคอยติดตามและปกป้อง",
    image: "Natsume’s Book of Friends.jpg"
},
      {
    title: "Witch Watch",
    author: "Kenta Shinohara",
    characters: ["วากะ นิโกะ", "โอโตงิ โมริฮิโตะ", "คันซากิ เคโงะ", "มากามิ คันชิ"],
    description: "แม่มดฝึกหัด 'นิโกะ' ต้องมาอาศัยอยู่กับเพื่อนสมัยเด็กอย่าง 'โมริฮิโตะ' ผู้สืบเชื้อสายยักษ์ที่ต้องมาเป็นผู้พิทักษ์ให้เธอตามคำพยากรณ์ เรื่องราววุ่นๆ ของเวทมนตร์และชีวิตวัยรุ่นจึงเกิดขึ้น",
    image: "Witch Watch.jpg"
},
    ],
  },
  {
    id: "action",
    name: "แอ็กชัน (Action)",
    items: [
      {
    title: "Jujutsu Kaisen",
    author: "Gege Akutami",
    characters: ["อิตาโดริ ยูจิ", "ฟุชิงุโระ เมงุมิ", "คุงิซากิ โนบาระ", "โกโจ ซาโตรุ"],
    description: "เรื่องราวของเด็กหนุ่มผู้กินนิ้วของเทพอสูรคำสาปเข้าไป ทำให้เขาต้องก้าวเข้าสู่โลกของไสยเวทเพื่อกำจัดคำสาปและเผชิญกับโชคชะตาที่ต้องเลือก",
    image: "jujutsu kaisen.jpg"
},
     {
    title: "Demon Slayer: Kimetsu no Yaiba",
    author: "Koyoharu Gotouge",
    characters: ["คามาโดะ ทันจิโร่", "คามาโดะ เนซึโกะ", "อากาสึมะ เซนอิทซึ", "ฮาชิบิระ อิโนสึเกะ", "เรนโกคุ เคียวจูโร่"],
    description: "เรื่องราวของเด็กหนุ่มที่ครอบครัวถูกอสูรฆ่าตาย และน้องสาวกลายเป็นอสูร เขาจึงเข้ากลุ่มนักล่าอสูรเพื่อหาทางทำให้เธอประกลับมาเป็นมนุษย์อีกครั้ง",
    image: "Demon Slayer.jpg"
},
      {
    title: "Attack on Titan",
    author: "Hajime Isayama",
    characters: ["เอเรน เยเกอร์", "มิคาสะ แอคเคอร์แมน", "อาร์มิน อัลเลิร์ท", "รีไวล์ แอคเคอร์แมน"],
    description: "มหากาพย์การต่อสู้ของมนุษยชาติที่ถูกกักขังอยู่หลังกำแพงเพื่อหนีการไล่ล่าจากเหล่าไททันกินคน สู่การเปิดเผยความลับของโลกที่เปลี่ยนโชคชะตาไปตลอดกาล",
    image: "Attack on Titan.jpg"
  },
     {
    title: "My Hero Academia",
    author: "Kohei Horikoshi",
    characters: ["มิโดริยะ อิซึคุ (เดกุ)", "บาคุโก คัตสึกิ", "โทโดโริกิ โชโตะ", "ออลไมท์"],
    description: "ในโลกที่มนุษย์ส่วนใหญ่เกิดมาพร้อมพลังพิเศษที่เรียกว่า 'อัตลักษณ์' เด็กหนุ่มที่ไร้พลังอย่างเดกุได้รับสืบทอดพลังจากฮีโร่อันดับหนึ่งเพื่อเข้าเรียนในโรงเรียนฮีโร่และกลายเป็นสุดยอดฮีโร่ในอนาคต",
    image: "My Hero Academia.jpg"
},
      {
    title: "Chainsaw Man",
    author: "Tatsuki Fujimoto",
    characters: ["เดนจิ", "มาคิมะ", "อากิ ฮายาคาวะ", "พาวเวอร์"],
    description: "เด็กหนุ่มถังแตกที่ทำสัญญากับปีศาจเลื่อยยนต์ 'โปจิตะ' จนกลายเป็นไฮบริดมนุษย์เลื่อยยนต์ เขาถูกดึงเข้าสู่หน่วยนักล่าปีศาจทางการเพื่อต่อสู้กับปีศาจที่น่ากลัวที่สุดในโลก",
    image: "Chainsaw Man.jpg"
},
      {
    title: "One Punch Man",
    author: "ONE (Story), Yusuke Murata (Art)",
    characters: ["ไซตามะ", "เจนอส", "ทัตสึมากิ", "กาโร่", "แบงก์ (ซิลเวอร์แฟง)"],
    description: "เรื่องราวของไซตามะ ชายหนุ่มที่ฝึกฝนจนแข็งแกร่งเกินต้านทานจนสามารถปราบศัตรูทุกตัวได้ในหมัดเดียว เขาต้องเผชิญกับความเบื่อหน่ายในพลังที่ไร้เทียมทานของตนเอง พร้อมกับการทำหน้าที่ฮีโร่ไปวันๆ",
    image: "One Punch Man.jpg"
},
      {
    title: "Sakamoto Days",
    author: "Yuto Suzuki",
    characters: ["ทาโร่ ซากาโมโตะ", "ชิน", "หลู เสี่ยวถัง", "อาโออิ ซากาโมโตะ"],
    description: "อดีตนักฆ่าในตำนานที่วางมือไปแต่งงานจนกลายเป็นเจ้าของร้านขายของชำหุ่นหมี แต่เมื่อโลกใต้ดินยังคงตามจองเวร เขาจึงต้องปกป้องชีวิตอันสงบสุขของครอบครัวด้วยทักษะการต่อสู้ระดับเทพ โดยมีกฎเหล็กว่า 'ห้ามฆ่าคนเด็ดขาด'",
    image: "Sakamoto Days.jpg"
},
      {
    title: "Dandadan",
    author: "Yukinobu Tatsu",
    characters: ["อายาเสะ โมโมะ", "ทาคาคุระ เคน (โอคารุน)", "ยายเทอร์โบ", "ชิราโทริ ไอระ", "เอนโจจิ จิน (จิจิ)"],
    description: "เมื่อเด็กสาวผู้เชื่อเรื่องผีแต่ไม่เชื่อมนุษย์ต่างดาว และเด็กหนุ่มผู้เชื่อมนุษย์ต่างดาวแต่ไม่เชื่อเรื่องผี ต้องมาพัวพันกับเหตุการณ์เหนือธรรมชาติสุดเพี้ยน ทั้งคู่จึงต้องร่วมมือกันต่อสู้เพื่อทวงคืน 'อวัยวะสำคัญ' และปกป้องโลก",
    image: "Dandadan.jpg"
},
      {
    title: "Bleach",
    author: "Tite Kubo",
    characters: ["คุโรซากิ อิจิโกะ", "คุจิกิ ลูเคีย", "อาบาราอิ เร็นจิ", "ไอเซ็น โซสึเกะ", "ซาราคิ เคมปาจิ"],
    description: "เด็กหนุ่มที่มองเห็นวิญญาณได้รับพลัง 'ยมทูต' มาโดยบังเอิญ เขาจึงต้องรับหน้าที่ปกป้องโลกมนุษย์จากเหล่าฮอลโลว์ และเข้าสู่การต่อสู้สุดอลังการในโซลโซไซตี้ที่มีชะตากรรมของทุกโลกเป็นเดิมพัน",
    image: "Bleach.jpg"
},
      {
    title: "Tokyo Revengers",
    author: "Ken Wakui",
    characters: ["ฮานากากิ ทาเคมิจิ", "ซาโนะ มันจิโร่ (ไมกี้)", "ริวกูจิ เคน (ดราเค่น)", "บาจิ เคอิสึเกะ"],
    description: "ทาเคมิจิ ชายหนุ่มชีวิตห่วยแตกที่ย้อนเวลากลับไปเมื่อ 12 ปีก่อนได้ เขาจึงพยายามแก้ไขอดีตเพื่อเปลี่ยนโชคชะตาของแก๊งโตเกียวมันจิไคและช่วยชีวิตคนสำคัญไม่ให้ต้องตายในอนาคต",
    image: "Tokyo Revengers.jpg"
},
    ],
  },
  {
    id: "horror",
    name: "สยองขวัญ (Horror)",
    items: [
      {
    title: "Jujutsu Kaisen",
    author: "Gege Akutami",
    characters: ["อิตาโดริ ยูจิ", "ฟุชิงุโระ เมงุมิ", "คุงิซากิ โนบาระ", "โกโจ ซาโตรุ"],
    description: "เรื่องราวของเด็กหนุ่มผู้กินนิ้วของเทพอสูรคำสาปเข้าไป ทำให้เขาต้องก้าวเข้าสู่โลกของไสยเวทเพื่อกำจัดคำสาปและเผชิญกับโชคชะตาที่ต้องเลือก",
    image: "jujutsu kaisen.jpg"
},
      {
    title: "Tokyo Ghoul",
    author: "Sui Ishida",
    characters: ["คาเนกิ เคน", "คิริชิมะ โทกะ", "อามอน โคทาโร่", "ริเซะ คามิชิโระ"],
    description: "เด็กหนุ่มมหาวิทยาลัยธรรมดาที่ต้องกลายเป็นครึ่งมนุษย์ครึ่ง 'กูล' หลังอุบัติเหตุเฉียดตาย เขาต้องเรียนรู้ที่จะใช้ชีวิตในโลกมืดที่เต็มไปด้วยการล่าและความเกลียดชังระหว่างเผ่าพันธุ์เพื่อรักษาความเป็นมนุษย์ที่เหลืออยู่",
    image: "Tokyo Ghoul.jpg"
},
     {
    title: "Mieruko-chan",
    author: "Tomoki Izumi",
    characters: ["โยตสึยะ มิโกะ", "ยูริคาวะ ฮานะ", "นิกุเระโด มิชิรุ", "คุณย่ามิทสึเอะ"],
    description: "เด็กสาวมัธยมปลายธรรมดาที่จู่ๆ ก็มองเห็นวิญญาณสยองขวัญได้ทุกที่ วิธีเดียวที่จะเอาตัวรอดคือเธอต้องทำเป็น 'มองไม่เห็น' และเมินเฉยต่อพวกมันให้แนบเนียนที่สุดเพื่อไม่ให้ถูกคุกคาม",
    image: "Mieruko-chan.jpg"
},
      {
    title: "Another",
    author: "Yukito Ayatsuji",
    characters: ["ซากากิบาระ โคอิจิ", "มิซากิ เมย์", "อาคาซาวะ อิซุมิ", "มิคามิ เรอิโกะ"],
    description: "โศกนาฏกรรมสยองขวัญในโรงเรียนมัธยมที่มีคำสาปมรณะซ่อนอยู่ เมื่อห้องเรียนปี 3 ห้อง 3 มี 'คนตาย' แฝงตัวอยู่ ทำให้คนในห้องและคนรอบข้างต้องพบกับความตายที่หาสาเหตุไม่ได้ พวกเขาจึงต้องรีบหาคำตอบก่อนที่ทุกคนจะถูกกำจัดจนหมด",
    image: "Another.jpg"
},
      {
    title: "The Promised Neverland",
    author: "Kaiu Shirai (Story), Posuka Demizu (Art)",
    characters: ["เอ็มม่า", "นอร์แมน", "เรย์", "หม่าม่า อิซาเบลล่า"],
    description: "เด็กกำพร้าอัจฉริยะกลุ่มหนึ่งค้นพบความจริงอันดำมืดของสถานสงเคราะห์ที่พวกเขาเติบโตมา ว่าแท้จริงแล้วมันคือ 'ฟาร์ม' มนุษย์เพื่อส่งเป็นอาหารให้ปีศาจ พวกเขาจึงต้องใช้สติปัญญาทั้งหมดเพื่อวางแผนหลบหนีออกจากสวรรค์ลวงตานี้",
    image: "The Promised Neverland.jpg"
},
      {
    title: "Hell Girl",
    author: "Miyuki Etoo (Manga), Hiroshi Watanabe (Original concept)",
    characters: ["เอ็นมะ ไอ", "อิจิโมกุ เร็น", "โฮเนะ ออนนะ", "วานิวโดะ"],
    description: "ตำนานเมืองเกี่ยวกับเว็บไซต์ลึกลับที่จะเปิดตอนเที่ยงคืนเท่านั้น หากใครพิมพ์ชื่อคนที่มีความแค้นลงไป 'ธิดาอเวจี' จะปรากฏตัวเพื่อลากเป้าหมายลงนรกทันที แต่ผู้ร้องขอต้องแลกด้วยการตกนรกหลังสิ้นอายุขัยของตนเองเช่นกัน",
    image: "Hell Girl.jpg"
},
      {
    title: "Mob Psycho 100",
    author: "ONE",
    characters: ["คาเกยาม่า ชิเกโอะ (ม็อบ)", "เรเก็น อาราตากะ", "เอคุโบะ", "คาเกยาม่า ริตสึ", "ฮานาซาว่า เทรุกิ"],
    description: "เด็กหนุ่มผู้มีพลังจิตมหาศาลที่พยายามใช้ชีวิตอย่างถ่อมตัวและควบคุมอารมณ์ไม่ให้ระเบิดถึง 100% เขาทำงานพาร์ทไทม์เป็นผู้ช่วยของอาจารย์กำมะลอเพื่อเรียนรู้วิธีการใช้ชีวิตแบบคนปกติท่ามกลางเหตุการณ์เหนือธรรมชาติ",
    image: "Mob Psycho 100.jpg"
},
      {
    title: "Death Note",
    author: "Tsugumi Ohba (Story), Takeshi Obata (Art)",
    characters: ["ยางามิ ไลท์ (คิระ)", "แอล (L)", "ริวคุ", "อามาเนะ มิสะ", "เนียร์"],
    description: "เด็กหนุ่มอัจฉริยะ 'ยางามิ ไลท์' บังเอิญเก็บสมุดโน้ตของยมทูตที่สามารถพรากชีวิตใครก็ได้เพียงแค่เขียนชื่อลงไป เขาตัดสินใจใช้มันพิพากษาอาชญากรเพื่อสร้างโลกใหม่ที่ไร้ความชั่วร้าย จนกระทั่งต้องเผชิญหน้ากับการไล่ล่าจากนักสืบที่ฉลาดที่สุดในโลกอย่าง 'แอล'",
    image: "Death Note.jpg"
},
      {
    title: "Jigoku Raku",
    author: "Yuji Kaku",
    characters: ["กาบิมารุ", "ยามาดะ อาซาเอมอน ซากิริ", "ยูซึริฮะ", "อาซะ โจเบ", "ยามาดะ อาซาเอมอน ชิอน"],
    description: "กาบิมารุ 'ผู้ว่างเปล่า' นินจานักฆ่าระดับตำนาน ได้รับข้อเสนอให้ไปตามหา 'ยาอมตะ' บนเกาะลึกลับที่เชื่อว่าเป็นดินแดนสุขาวดี เพื่อแลกกับการพ้นผิดและกลับไปใช้ชีวิตสงบสุขกับภรรยา เขาต้องต่อสู้เอาชีวิตรอดจากอสูรประหลาดและนักโทษคนอื่นๆ บนเกาะที่เต็มไปด้วยปริศนา",
    image: "Jigoku Raku.jpg"
},
      {
    title: "High School DxD",
    author: "Ichiei Ishibumi",
    characters: ["เฮียวโด อิซเซย์", "เรียส เกรโมรี่", "อาเคโนะ ฮิเมะจิมะ", "อาเซีย อาร์เจนโต้"],
    description: "เด็กหนุ่มจอมหื่นที่ถูกฆ่าตายในเดทแรก แต่ถูกชุบชีวิตขึ้นมาเป็นปีศาจข้ารับใช้ของ 'เรียส เกรโมรี่' สาวสวยที่สุดในโรงเรียน เขาต้องเข้าสู่สงครามระหว่างเผ่าพันธุ์และฝึกฝนพลัง 'บูสต์เกียร์' เพื่อปกป้องเหล่านางฟ้าและปีศาจสาวในฮาเร็มของเขา",
    image: "Highschool DxD.jpg"
},
    ],
  },
  {
    id: "romance",
    name: "โรแมนติก (Romance)",
    items: [
      {
    title: "Your Name",
    author: "Makoto Shinkai",
    characters: ["ทาจิบานะ ทาคิ", "มิยามิซุ มิตสึฮะ"],
    description: "เรื่องราวปาฏิหาริย์ระหว่างคนสองคนที่อยู่คนละที่แต่กลับสลับร่างกันในความฝัน จนเกิดเป็นสายสัมพันธ์ที่ข้ามผ่านกาลเวลาและระยะทาง ท่ามกลางปรากฏการณ์ดาวตกที่จะเปลี่ยนชีวิตของพวกเขาทั้งคู่ไปตลอดกาล",
    image: "Your Name.jpg"
},
      {
    title: "Horimiya",
    author: "HERO (Story), Daisuke Hagiwara (Art)",
    characters: ["โฮริ เคียวโกะ", "มิยามุระ อิซุมิ", "อิชิกาวะ โทรุ", "โยชิกาวะ ยูกิ"],
    description: "เรื่องราวของคนสองคนที่ต่างก็มี 'ตัวตนอีกด้าน' ซ่อนอยู่จากสายตาเพื่อนร่วมชั้น เมื่อโฮริสาวป๊อปผู้เก่งกาจมาพบกับมิยามุระหนุ่มเงียบขรึมในชุดนอกโรงเรียนที่คาดไม่ถึง ความสัมพันธ์ที่เริ่มต้นจากการแชร์ความลับจึงกลายเป็นความรักที่แสนบริสุทธิ์",
    image: "Horimiya.jpg"
},
      {
    title: "The Fragrant Flower Blooms With Dignity",
    author: "Saka Mikami",
    characters: ["สึมูกิ รินทาโร่", "วากุริ คาโอรุโกะ", "อุซามิ โชเฮ", "นัตสึซาวะ สึบารุ"],
    description: "รินทาโร่ เด็กหนุ่มหน้าดุจากโรงเรียนชายล้วนสุดเถื่อน ได้พบกับ คาโอรุโกะ เด็กสาวผู้สดใสจากโรงเรียนสตรีผู้ดีที่อยู่ติดกัน แม้กำแพงระหว่างโรงเรียนจะสูงชันและเต็มไปด้วยอคติ แต่ความจริงใจของทั้งคู่กลับค่อยๆ เบ่งบานเหมือนดอกไม้ที่งดงาม",
    image: "The Fragrant Flower Blooms With Dignity.jpg"
},
      {
    title: "Tonikaku Kawaii",
    author: "Kenjiro Hata",
    characters: ["ยูซากิ นาสะ", "ยูซากิ สึคาสะ"],
    description: "เรื่องราวของนาสะที่ตกหลุมรักสึคาสะสาวลึกลับตั้งแต่วินาทีแรกที่เห็น และตัดสินใจแต่งงานกันทันทีเพื่อที่จะได้อยู่ด้วยกัน นำไปสู่ชีวิตข้าวใหม่ปลามันที่เต็มไปด้วยความอบอุ่นและปริศนาเกี่ยวกับตัวตนที่แท้จริงของสึคาสะ",
    image: "Tonikaku Kawaii.jpg"
},
      {
    title: "Kubo-san wa Mob wo Yurusanai",
    author: "Nene Yukimori",
    characters: ["ชิราอิชิ จุนตะ", "คุโบะ นากิสะ", "คุโบะ อากินะ", "คุโบะ ซากิ"],
    description: "ชิราอิชิ เด็กหนุ่มที่มีตัวตนจืดชืดจนแทบไม่มีใครสังเกตเห็น แต่กลับมีเพียง คุโบะ สาวสวยเพื่อนร่วมชั้นที่มองเห็นเขาเสมอ และเธอมักจะเข้ามาป่วนชีวิตประจำวันของเขาให้ไม่เงียบเหงาอีกต่อไป",
    image: "Kubo-san wa Mob wo Yurusanai.jpg"
},
      {
    title: "Kubo Won’t Let Me Be Invisible",
    author: "Nene Yukimori",
    characters: ["ชิราอิชิ จุนตะ", "คุโบะ นากิสะ"],
    description: "เรื่องราวของชิราอิชิ เด็กหนุ่มที่จืดชืดจนแทบไม่มีใครเห็นหัว แต่กลับมีเพียงคุโบะ สาวสวยเพื่อนร่วมชั้นที่มองเห็นเขาเสมอ และคอยกลั่นแกล้งหยอกล้อเพื่อดึงตัวตนของเขาออกมาให้โลกเห็น",
    image: "Kubo Won’t Let Me Be Invisible.jpg"
},
      {
    title: "Rent-A-Girlfriend",
    author: "Reiji Miyajima",
    characters: ["มิซึฮาระ จิซึรุ", "คิโนชิตะ คาสึยะ", "นานามิ มามิ", "ซาราระ รุกะ", "ซากุระซาวะ สุมิ"],
    description: "เรื่องราวของคาสึยะที่ตัดสินใจเช่าแฟนสาวมาประชดรักครั้งเก่า แต่กลับได้พบกับจิซึรุ สาวเช่าสุดเพอร์เฟกต์ที่โชคชะตาเล่นตลกให้ต้องมาพัวพันกันในชีวิตจริงและแกล้งเป็นแฟนกันต่อหน้าครอบครัวจนถอนตัวไม่ขึ้น",
    image: "Rent-A-Girlfriend.jpg"
},
     {
    title: "Rascal Does Not Dream of Bunny Girl Senpai",
    author: "Hajime Kamoshida",
    characters: ["อาซาสึกาวะ ซาคุตะ", "ซากุระจิมะ ไม", "อาซาสึกาวะ คาเอเดะ", "มากิโนฮาระ โชโกะ"],
    description: "เรื่องราวของซาคุตะที่ได้พบกับรุ่นพี่ไม ดาราสาวชื่อดังในชุดบันนี่เกิร์ลกลางห้องสมุด แต่ความประหลาดคือไม่มีใครมองเห็นเธอเลย เขาจึงต้องยื่นมือเข้าไปช่วยแก้ปัญหา 'ภาวะผิดปกติในวัยรุ่น' ที่แฝงไปด้วยความเจ็บปวดและการเติบโต",
    image: "Rascal Does Not Dream of Bunny Girl Senpai.jpg"
},
      {
    title: "Wotakoi: Love is Hard for Otaku",
    author: "Fujita",
    characters: ["โมโมเซะ นารุมิ", "นิฟูจิ ฮิโรทากะ", "โคยานางิ ฮานาโกะ", "คาบาคุระ ทาโร่"],
    description: "เรื่องราวความรักของเหล่าโอตาคุวัยทำงาน เมื่อนารุมิสาวออฟฟิศผู้ปกปิดงานอดิเรกสายวายของเธอ ได้มาพบกับฮิโรทากะเพื่อนสมัยเด็กที่เป็นเกมเมอร์ตัวยง ทั้งคู่จึงตกลงคบกันเพื่อให้สามารถแชร์ชีวิตติ่งได้อย่างเต็มที่โดยไม่ต้องอายใคร",
    image: "Wotakoi.jpg"
},
      {
    title: "Daily Lives of High School Boys",
    author: "Yasunobu Yamauchi",
    characters: ["ทาดาคุนิ", "ฮิเดโนริ", "โยชิทากะ"],
    description: "เรื่องราวสุดฮาและไร้สติของสามเพื่อนซี้ในโรงเรียนชายล้วน ที่จะมาตีแผ่ชีวิตประจำวันสุดเกรียน ตั้งแต่การลองใส่ชุดชั้นในผู้หญิง ยันการจำลองสถานการณ์RPGในทุ่งหญ้า เป็นอนิเมะที่เรียกเสียงหัวเราะได้ตลอดเวลา",
    image: "Daily Lives of High School Boys.jpg"
},
    ],
  },
  {
    id: "adventure",
    name: "ผจญภัย (Adventure)",
    items: [
     {
    title: "One Piece",
    author: "Eiichiro Oda",
    characters: ["มังกี้ ดี. ลูฟี่", "โรโรโนอา โซโล", "นามิ","อุซป", "ซันจิ", "โทนีโทนี ช็อปเปอร์","นิโคล โรบิน","แฟงกี้","บรู๊ค","จินเบ"],
    description: "เรื่องราวของเด็กหนุ่มผู้กินผลปีศาจและต้องการเป็นราชาโจรสลัด เขาออกเดินเรือรวบรวมพรรคพวกเพื่อตามหาสมบัติในตำนาน 'วันพีซ' ในโลกแห่งการผจญภัยที่ไร้ขีดจำกัด",
    image: "one piece.jpg"
},
      {
    title: "Hunter x Hunter",
    author: "Yoshihiro Togashi",
    characters: ["กอร์น ฟรีคส์", "คิรัวร์ โซลดิ๊กส์", "คุราปิก้า", "เลโอริโอ", "ฮิโซกะ"],
    description: "เด็กหนุ่มชื่อกอร์นออกเดินทางเพื่อเป็น 'ฮันเตอร์' และตามหาพ่อที่หายสาบสูญ ระหว่างทางเขาได้พบกับมิตรภาพแท้และการต่อสู้ที่ต้องใช้ไหวพริบมหาศาลเพื่อเอาชีวิตรอดในโลกที่เต็มไปด้วยอันตรายและปริศนาเหนือคาด",
    image: "Hunter x Hunter.jpg"
},
      {
    title: "Naruto",
    author: "Masashi Kishimoto",
    characters: ["อุซึมากิ นารูโตะ", "อุจิวะ ซาสึเกะ", "ฮารุโนะ ซากุระ", "ฮาตาเกะ คาคาชิ", "จิไรยะ"],
    description: "เด็กหนุ่มผู้มีจิ้งจอกเก้าหางผนึกอยู่ในร่างและเติบโตมาพร้อมกับความโดดเดี่ยว เขามีความฝันอันยิ่งใหญ่ที่จะเป็น 'โฮคาเงะ' เพื่อให้ทุกคนในหมู่บ้านยอมรับ จนนำไปสู่มหากาพย์การต่อสู้และมิตรภาพที่ตราตรึงใจคนทั่วโลก",
    image: "Naruto.jpg"
},
      {
    title: "Dragon Ball Z",
    author: "Akira Toriyama",
    characters: ["ซุน โกคู", "เบจิต้า", "ซุน โกฮัง", "พิคโกโร่", "ฟรีเซอร์", "เซล", "จอมมารบู"],
    description: "มหากาพย์การต่อสู้เพื่อปกป้องจักรวาลของโกคูและพรรคพวก จากเหล่าวายร้ายที่แข็งแกร่งที่สุดในจักรวาล เป็นอนิเมะแนวแอ็คชันที่เป็นต้นแบบของแนวโชเน็นทั่วโลก",
    image: "Dragon Ball Z.jpg"
},
      {
    title: "Vinland Saga",
    author: "Makoto Yukimura",
    characters: ["ทอร์ฟิน", "อาสเกลัด", "ทอร์เคล", "เจ้าชายคนูต"],
    description: "เรื่องราวการล้างแค้นและการไถ่บาปของทอร์ฟิน ท่ามกลางยุคสมัยของชาวไวกิ้งที่เต็มไปด้วยสงครามและการแย่งชิง เพื่อค้นหาความหมายของ 'นักรบที่แท้จริง' และดินแดนที่ไม่มีการสู้รบอย่างวินแลนด์",
    image: "Vinland Saga.jpg"
},
     {
    title: "Golden Kamuy",
    author: "Satoru Noda",
    characters: ["สุกิโมโตะ ไซจิ", "อาชิริปะ", "ชิราอิชิ โยชิทากะ", "สิบโทซึรุมิ", "ฮิจิคาตะ โทชิโซ"],
    description: "การผจญภัยในฮอกไกโดเพื่อตามหาขุมทรัพย์ทองคำที่ซ่อนอยู่ ผ่านเบาะแสรอยสักบนร่างของเหล่านักโทษประหาร เป็นการร่วมมือกันของทหารผ่านศึก 'สุกิโมโตะผู้ไม่ตาย' และเด็กสาวชาวไอนุ 'อาชิริปะ'",
    image: "Golden Kamuy.jpg"
},
      {
    title: "Dr. Stone",
    author: "Riichiro Inagaki",
    characters: ["อิชิกามิ เซ็นคู", "อาซากิริ เก็น", "โคฮาคุ", "โครอม", "ชิชิโอะ สึคาสะ"],
    description: "เมื่อมนุษยชาติกลายเป็นหินไปหลายพันปี เซ็นคูเด็กหนุ่มอัจฉริยะจึงต้องใช้พลังแห่งวิทยาศาสตร์เพื่อฟื้นฟูอารยธรรมมนุษย์ขึ้นมาใหม่จากยุคหิน",
    image: "Dr. Stone.jpg"
},
      {
    title: "Tower of God",
    author: "SIU",
    characters: ["พัมที่ 25", "ราเชล", "คูน อเกโร่ อักเนส", "รัค แรธเรเซอร์"],
    description: "การผจญภัยในหอคอยลึกลับของพัม เด็กหนุ่มที่ยอมทุ่มเททุกอย่างเพื่อตามหาราเชล เพื่อนคนสำคัญ โดยต้องเผชิญกับบททดสอบสุดอันตรายเพื่อปีนไปสู่จุดสูงสุดของหอคอย",
    image: "Tower of God.jpg"
},
      {
    title: "Danmachi",
    author: "Fujino Omori",
    characters: ["เบล คราเนล", "เฮสเทีย", "ไอส์ วัลเลนสไตน์", "ลิลิรูคา อาเด้", "เวลฟ์ โครซโซ่"],
    description: "การผจญภัยของเบล นักผจญภัยมือใหม่ในเมืองโอราซาริโอที่มุ่งมั่นจะแข็งแกร่งขึ้นภายใต้การสนับสนุนของเทพธิดาเฮสเทีย เพื่อก้าวข้ามขีดจำกัดและเผชิญหน้ากับเหล่ามอนสเตอร์ในดันเจี้ยน",
    image: "Danmachi.jpg"
},
      {
    title: "Magi: The Labyrinth of Magic",
    author: "Shinobu Ohtaka",
    characters: ["อาลาดิน", "อาลีบาบา ซาลูจา", "โมลเซียน่า", "ซินแบด"],
    description: "การผจญภัยของเด็กน้อยผู้เป็น 'เมไจ' และเพื่อนพ้อง ในการพิชิตหอคอยปริศนาที่เรียกว่า 'ดันเจี้ยน' เพื่อรวบรวมพลังของจินและตัดสินผู้ที่จะขึ้นเป็นราชาเพื่อเปลี่ยนแปลงโลก",
    image: "Magi.jpg"
},
    ],
  },

];

// Helper: flatten items for search
const allItems = genres.flatMap((g) =>
  g.items.map((item, index) => ({
    ...item,
    genreId: g.id,
    genreName: g.name,
    key: `${g.id}-${index}`,
  }))
);

// Review storage in-memory
const siteReviews = [];
const animeReviews = {}; // key -> array of reviews
let favorites = new Set(); // เก็บ key ของเรื่องที่ถูกกดถูกใจ (ของผู้ใช้ปัจจุบัน)
const FAVORITES_STORAGE_KEY = "animeFavoritesByUser";
let currentView = "all"; // all | favorites

 // Simple auth state
let isLoggedIn = false;
let currentUser = null;
// เก็บผู้ใช้แบบง่าย ๆ ในหน่วยความจำ โดยมี admin/admin เป็นค่าเริ่มต้น
const users = {
  admin: "admin",
};

// โหลด / บันทึกข้อมูลถูกใจแบบแยกตามผู้ใช้
function loadFavoritesForUser(username) {
  try {
    const raw = localStorage.getItem(FAVORITES_STORAGE_KEY);
    if (!raw) return new Set();
    const parsed = JSON.parse(raw);
    const list = parsed[username] || [];
    return new Set(list);
  } catch (e) {
    return new Set();
  }
}

function saveFavoritesForUser(username, favoritesSet) {
  try {
    const raw = localStorage.getItem(FAVORITES_STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : {};
    parsed[username] = Array.from(favoritesSet);
    localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(parsed));
  } catch (e) {
    // ignore write error
  }
}

// DOM elements
const cardsContainer = document.getElementById("cardsContainer");
const currentCategoryTitle = document.getElementById("currentCategoryTitle");
const categoryListEl = document.getElementById("categoryList");
const categoryMenu = document.getElementById("categoryMenu");
const categoryToggle = document.getElementById("categoryToggle");
const categoryClose = document.getElementById("categoryClose");
const favoritesMenu = document.getElementById("favoritesMenu");
const favoritesListEl = document.getElementById("favoritesList");
const favoritesToggle = document.getElementById("favoritesToggle");
const favoritesClose = document.getElementById("favoritesClose");
const overlay = document.getElementById("overlay");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const homeLogo = document.getElementById("homeLogo");

const trendingSlide = document.getElementById("trendingSlide");
const trendingPrev = document.getElementById("trendingPrev");
const trendingNext = document.getElementById("trendingNext");
const trendingDots = document.getElementById("trendingDots");

// Login elements
const loginToggle = document.getElementById("loginToggle");
const loginSheet = document.getElementById("loginSheet");
const loginClose = document.getElementById("loginClose");
const loginSubmit = document.getElementById("loginSubmit");
const loginUsername = document.getElementById("loginUsername");
const loginPassword = document.getElementById("loginPassword");
const loginError = document.getElementById("loginError");
const signupOpen = document.getElementById("signupOpen");

// Signup elements
const signupSheet = document.getElementById("signupSheet");
const signupClose = document.getElementById("signupClose");
const signupSubmit = document.getElementById("signupSubmit");
const signupUsername = document.getElementById("signupUsername");
const signupPassword = document.getElementById("signupPassword");
const signupPasswordConfirm = document.getElementById("signupPasswordConfirm");
const signupError = document.getElementById("signupError");

// Theme toggle
const themeToggle = document.getElementById("themeToggle");

// Site review elements (ยังคงใช้สำหรับรีวิวเว็บในอนาคตถ้าต้องการ)
// const siteReviewInput = document.getElementById("siteReviewInput");
// const siteReviewSubmit = document.getElementById("siteReviewSubmit");
// const siteReviewsList = document.getElementById("siteReviewsList");
const siteRatingStars = document.querySelector(
  '.rating-stars[data-context="site"]'
);



// Detail sheet elements
const detailSheet = document.getElementById("detailSheet");
const detailTitle = document.getElementById("detailTitle");
const detailGenre = document.getElementById("detailGenre");
const detailDescription = document.getElementById("detailDescription");
const detailClose = document.getElementById("detailClose");
const detailReviewsList = document.getElementById("detailReviewsList");
const detailReviewInput = document.getElementById("detailReviewInput");
const detailReviewSubmit = document.getElementById("detailReviewSubmit");
const detailRatingStars = document.getElementById("detailRatingStars");
const detailImg = document.getElementById("detailImg");
const detailAverage = document.getElementById("detailAverage");
const detailAuthor = document.getElementById("detailAuthor");
const detailAuthorContainer = document.getElementById("detailAuthorContainer");
const detailCharactersList = document.getElementById("detailCharactersList");
const detailCharactersContainer = document.getElementById("detailCharactersContainer");

let currentCategoryId = "all";
let currentSearch = "";
let currentDetailKey = null;

// Recommended / featured state
// ปรับปรุงใหม่ตามอันดับความนิยมระดับโลก
const recommendedItems = [
  {
    key: "adventure-0",
    title: "One Piece",
    description: "การผจญภัยสุดยิ่งใหญ่ของลูฟี่เพื่อเป็นราชาโจรสลัดในตำนานที่ครองใจแฟนคลับทั่วโลก",
    image: "one piece.jpg",
    genreId: "adventure",
    genreName: "ผจญภัย (Adventure)",
    views: 15000
  },
  {
    key: "action-2", 
    title: "Attack on Titan",
    description: "เมื่อมนุษยชาติต้องอาศัยอยู่หลังกำแพงเพื่อหนีการล่าจากเหล่าไททัน แต่แล้ววันหนึ่งกำแพงที่เคยปลอดภัยกลับถูกทำลายลง การต่อสู้เพื่ออิสรภาพจึงเริ่มต้นขึ้น",
    image: "Attack on Titan.jpg",
    genreId: "action",
    genreName: "แอ็กชัน (Action)",
    views: 14000
  },
  {
    key: "adventure-3",
    title: "Dragon Ball Z",
    description: "มหากาพย์การต่อสู้เพื่อปกป้องจักรวาลของโกคูและพรรคพวก จากเหล่าวายร้ายที่แข็งแกร่งที่สุดในจักรวาล เป็นอนิเมะแนวแอ็คชันที่เป็นต้นแบบของแนวโชเน็นทั่วโลก",
    image: "Dragon Ball Z.jpg",
    genreId: "adventure",
    genreName: "ผจญภัย (Adventure)",
    views: 13000
  },
  {
    key: "action-1",
    title: "Demon Slayer (Kimetsu no Yaiba)",
    description: "ดาบพิฆาตอสูร เรื่องราวความผูกพันของพี่น้องและการต่อสู้กับอสูรที่งดงามและดุดัน",
    image: "Demon Slayer.jpg",
    genreId: "action",
    genreName: "แอ็กชัน (Action)",
    views: 12000
  },
  {
    key: "action-0",
    title: "Jujutsu Kaisen",
    description: "สงครามไสยเวทสุดเดือดและการปราบคำสาปที่เต็มไปด้วยความระทึกใจและกราฟิกสุดอลังการ",
    image: "jujutsu kaisen.jpg",
    genreId: "action",
    genreName: "แอ็กชัน (Action)",
    views: 11000
  }
];
let currentRecommendedIndex = 0;
let trendingAutoTimer = null;

// คำนวณค่าเฉลี่ยดาวและจำนวนรีวิวของเรื่องนั้น ๆ
function getRatingInfo(key) {
  const list = animeReviews[key] || [];
  if (!list.length) {
    return { avg: 0, count: 0 };
  }
  const sum = list.reduce((acc, r) => acc + (r.rating || 0), 0);
  const avg = sum / list.length;
  return { avg, count: list.length };
}

// สร้างข้อความ tooltip สำหรับคะแนน
function buildRatingLabel(avg, count) {
  if (!count) return "ยังไม่มีคะแนนจากผู้ใช้งาน";
  return `${avg.toFixed(1)}/5 จาก ${count} รีวิว`;
}

// สร้างสตาร์สำหรับคะแนนเฉลี่ย
function buildStarDisplay(avg, maxStars = 5) {
  if (!avg) {
    return "☆☆☆☆☆";
  }
  const filled = Math.round(avg);
  const empty = Math.max(0, maxStars - filled);
  return "★".repeat(filled) + "☆".repeat(empty);
}

 // สร้างไอคอนเหรียญตามอันดับ
function getMedalIcon(rank) {
  const medals = {
    1: "🥇",
    2: "🥈",
    3: "🥉",
    4: "🏅",
    5: "🏅",
  };
  // คืนค่าเป็นตัวอีโมจิอย่างเดียว เพื่อนำไปใช้ใน .medal-badge
  return medals[rank] || "";
}

function renderCategoryMenu() {
  categoryListEl.innerHTML = "";

  const allLi = document.createElement("li");
  allLi.textContent = "ทั้งหมด";
  allLi.dataset.id = "all";
  allLi.classList.add("active");
  const allBadge = document.createElement("span");
  allBadge.className = "badge";
  allBadge.textContent = String(allItems.length);
  allLi.appendChild(allBadge);
  categoryListEl.appendChild(allLi);

  genres.forEach((g) => {
    const li = document.createElement("li");
    li.dataset.id = g.id;

    // สร้างโครงภายในเพื่อรองรับไอคอน + ชื่อ + badge
    const leftWrapper = document.createElement("div");
    leftWrapper.className = "category-left";

    const icon = document.createElement("div");
    icon.className = "category-icon";
    // ใช้ class แทนการเซ็ต backgroundImage ด้วย JS
    icon.classList.add(`icon-${g.id}`);

    const label = document.createElement("span");
    label.className = "category-label";
    label.textContent = g.name;

    leftWrapper.appendChild(icon);
    leftWrapper.appendChild(label);

    const badge = document.createElement("span");
    badge.className = "badge";
    badge.textContent = String(g.items.length);

    li.appendChild(leftWrapper);
    li.appendChild(badge);

    categoryListEl.appendChild(li);
  });
}
function getFilteredItems() {
  let base = allItems;

  // ถ้าอยู่ในหน้า "ถูกใจ" ให้แสดงเฉพาะเรื่องที่ถูกใจ
  if (currentView === "favorites") {
    base = base.filter((it) => isFavorite(it.key));
  }

  // ถ้ามีการค้นหา ให้ค้นหาจากชุดฐานที่มีอยู่
  if (currentSearch.trim() !== "") {
    const q = currentSearch.toLowerCase();
    base = base.filter((it) => {
      return (
        it.title.toLowerCase().includes(q) ||
        it.description.toLowerCase().includes(q) ||
        it.genreName.toLowerCase().includes(q)
      );
    });
    return base;
  }

  // ถ้าไม่มีการค้นหาและไม่ใช่หน้า favorites ค่อยใช้ตัวกรองตามหมวดหมู่
  if (currentView !== "favorites" && currentCategoryId !== "all") {
    base = base.filter((it) => it.genreId === currentCategoryId);
  }

  return base;
}

function isFavorite(key) {
  return favorites.has(key);
}

function toggleFavorite(key) {
  if (!isLoggedIn || !currentUser) {
    alert("กรุณาล็อกอินก่อนใช้งานฟังก์ชันถูกใจ");
    openLoginSheet();
    return;
  }

  if (favorites.has(key)) {
    favorites.delete(key);
  } else {
    favorites.add(key);
  }

  saveFavoritesForUser(currentUser, favorites);
  renderCards();
  renderFavoritesMenu();
}

function renderFavoritesMenu() {
  favoritesListEl.innerHTML = "";
  if (favorites.size === 0) {
    const li = document.createElement("li");
    li.className = "favorites-empty";
    li.textContent = "ยังไม่มีรายการถูกใจ";
    favoritesListEl.appendChild(li);
    return;
  }

  Array.from(favorites).forEach((key) => {
    const item = allItems.find((i) => i.key === key);
    if (!item) return;
    const li = document.createElement("li");
    li.dataset.key = key;

    const title = document.createElement("span");
    title.className = "favorites-title";
    title.textContent = item.title;

    const genre = document.createElement("span");
    genre.className = "favorites-genre";
    genre.textContent = item.genreName;

    li.appendChild(title);
    li.appendChild(genre);
    favoritesListEl.appendChild(li);
  });
}

function createCardElement(item) {
  const card = document.createElement("div");
  card.className = "card";
  card.dataset.key = item.key;

  const inner = document.createElement("div");
  inner.className = "card-inner";

  const imgContainer = document.createElement("div");
  imgContainer.className = "card-image-container";

  const img = document.createElement("img");
  img.className = "card-image";
  img.src = item.image || "mushoku_tensei_rec.png";
  img.alt = item.title;
  imgContainer.appendChild(img);

  const genreEl = document.createElement("div");
  genreEl.className = "card-genre";
  genreEl.textContent = item.genreName;

  const titleEl = document.createElement("div");
  titleEl.className = "card-title";
  titleEl.textContent = item.title;

  const descEl = document.createElement("div");
  descEl.className = "card-description";
  descEl.textContent = item.description;

  const footer = document.createElement("div");
  footer.className = "card-footer";

  const stars = document.createElement("span");
  stars.className = "stars";
  const { avg, count } = getRatingInfo(item.key);
  stars.textContent = buildStarDisplay(avg);
  stars.title = buildRatingLabel(avg, count);

  const more = document.createElement("span");
  more.className = "more";
  more.textContent = "ดูเพิ่มเติม";

  footer.appendChild(stars);
  footer.appendChild(more);

  inner.appendChild(imgContainer);
  inner.appendChild(genreEl);
  inner.appendChild(titleEl);
  inner.appendChild(descEl);
  inner.appendChild(footer);

  card.appendChild(inner);
  return card;
}

function renderCards() {
  const items = getFilteredItems();
  cardsContainer.innerHTML = "";

  if (items.length === 0) {
    const msg = document.createElement("p");
    msg.textContent = "ไม่พบผลลัพธ์ที่ตรงกับการค้นหา";
    msg.style.fontSize = "13px";
    msg.style.opacity = "0.8";
    cardsContainer.appendChild(msg);
    return;
  }

  // If in "All" view with no active search or specific category selected, group by genre
  if (currentView === "all" && currentCategoryId === "all" && currentSearch === "") {
    genres.forEach((genre) => {
      const section = document.createElement("div");
      section.className = "genre-section-block";
      section.dataset.genreName = genre.name;

      const title = document.createElement("h2");
      title.className = "genre-section-title";
      title.textContent = genre.name;
      section.appendChild(title);

      const grid = document.createElement("div");
      grid.className = "genre-cards-grid";

      genre.items.forEach((item, index) => {
        // Find corresponding item in allItems to get keys/metadata
        const fullItem = allItems.find((it) => it.title === item.title && it.genreId === genre.id);
        if (fullItem) {
          grid.appendChild(createCardElement(fullItem));
        }
      });

      section.appendChild(grid);
      cardsContainer.appendChild(section);
    });
  } else {
    // Normal flat list rendering for search results or specific filters
    const grid = document.createElement("div");
    grid.className = "genre-cards-grid";
    items.forEach((item) => {
      grid.appendChild(createCardElement(item));
    });
    cardsContainer.appendChild(grid);
  }
}

function renderTrending() {
  if (!trendingSlide) return;
  trendingSlide.innerHTML = "";

  if (!recommendedItems.length) return;

  // เรียงตามจำนวนคนดูมากไปน้อย (Top 5)
  const sorted = [...recommendedItems].sort((a, b) => b.views - a.views).slice(0, 5);

  sorted.forEach((item, index) => {
    const card = document.createElement("div");
    card.className = "recommended-card ranking-card";
    card.dataset.key = item.key;

    const imgSrc = item.image || "mushoku_tensei_rec.png";

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

// ไม่ใช้ auto slider แล้ว ฟังก์ชันเหล่านี้จะไม่ทำอะไร
function renderTrendingDots() {}
function nextRecommended() {}
function prevRecommended() {}
function startTrendingAuto() {}
function resetTrendingAuto() {}

function openCategoryMenu() {
  categoryMenu.classList.add("open");
  overlay.classList.add("visible");
}

function closeCategoryMenu() {
  categoryMenu.classList.remove("open");
  if (
    !detailSheet.classList.contains("open") &&
    !loginSheet.classList.contains("open") &&
    !signupSheet.classList.contains("open") &&
    !favoritesMenu.classList.contains("open")
  ) {
    overlay.classList.remove("visible");
  }
}

function openFavoritesMenu() {
  renderFavoritesMenu();
  favoritesMenu.classList.add("open");
  overlay.classList.add("visible");
}

function closeFavoritesMenu() {
  favoritesMenu.classList.remove("open");
  if (
    !detailSheet.classList.contains("open") &&
    !loginSheet.classList.contains("open") &&
    !signupSheet.classList.contains("open") &&
    !categoryMenu.classList.contains("open")
  ) {
    overlay.classList.remove("visible");
  }
}

function performSearch() {
  const query = searchInput.value.trim();
  currentSearch = query;

  if (query === "") {
    currentCategoryTitle.textContent = currentCategoryId === "all" ? "ทั้งหมด" : (genres.find(g => g.id === currentCategoryId)?.name || "ทั้งหมด");
    renderCards();
    return;
  }

  const lowerQuery = query.toLowerCase();
  
  // Check if query matches a genre name or ID
  const matchedGenre = genres.find(g => 
    g.id.toLowerCase() === lowerQuery || 
    g.name.toLowerCase().includes(lowerQuery)
  );

  if (matchedGenre) {
    // If it's a category match, change title to genre name
    currentCategoryTitle.textContent = matchedGenre.name.toUpperCase();
  } else {
    // If it's likely an anime name or other search, set to "ทั้งหมด"
    currentCategoryTitle.textContent = "ทั้งหมด";
  }

  renderCards();
}

function setCategory(id) {
  currentView = "all";
  currentCategoryId = id;

  // รีเซ็ตช่องค้นหาและสถานะการค้นหาเมื่อเปลี่ยนหมวดหมู่
  currentSearch = "";
  if (searchInput) {
    searchInput.value = "";
  }

  const items = categoryListEl.querySelectorAll("li");
  items.forEach((li) => {
    if (li.dataset.id === id) {
      li.classList.add("active");
    } else {
      li.classList.remove("active");
    }
  });

  currentCategoryTitle.textContent =
    id === "all"
      ? "ทั้งหมด"
      : genres.find((g) => g.id === id)?.name || "ทั้งหมด";

  renderCards();
}

// Rating helpers
function setupRatingStars(container, onChange) {
  if (!container) return () => {};
  let currentValue = 0;

  const stars = Array.from(container.querySelectorAll("span"));

  function updateVisual() {
    stars.forEach((s) => {
      const val = Number(s.dataset.value);
      if (val <= currentValue) {
        s.classList.add("active");
      } else {
        s.classList.remove("active");
      }
      s.classList.remove("highlight");
    });
  }

  stars.forEach((star) => {
    star.addEventListener("mouseenter", () => {
      const val = Number(star.dataset.value);
      stars.forEach((s) => {
        if (Number(s.dataset.value) <= val) {
          s.classList.add("highlight");
        } else {
          s.classList.remove("highlight");
        }
      });
    });

    star.addEventListener("mouseleave", () => {
      stars.forEach((s) => s.classList.remove("highlight"));
    });

    star.addEventListener("click", () => {
      currentValue = Number(star.dataset.value);
      updateVisual();
      if (onChange) onChange(currentValue);
    });
  });

  container.addEventListener("mouseleave", () => {
    stars.forEach((s) => s.classList.remove("highlight"));
  });

  return (val) => {
    currentValue = val;
    updateVisual();
  };
}

// Detail sheet
function openDetail(key) {
  const item = allItems.find((i) => i.key === key);
  if (!item) return;

  currentDetailKey = key;
  detailTitle.textContent = item.title;
  detailGenre.textContent = item.genreName;
  detailDescription.textContent = item.description;

  // จัดการข้อมูลผู้แต่ง (ล้างข้อมูลเก่าและตรวจสอบก่อนแสดง)
  if (item.author) {
    detailAuthor.textContent = item.author;
    detailAuthorContainer.style.display = "block";
  } else {
    detailAuthorContainer.style.display = "none";
  }

  // จัดการข้อมูลตัวละครหลัก (แสดงเป็น Badge/Pill)
  detailCharactersList.innerHTML = ""; // ล้างข้อมูลเก่า
  if (item.characters && Array.isArray(item.characters) && item.characters.length > 0) {
    item.characters.forEach(char => {
      const span = document.createElement("span");
      span.className = "char-badge";
      span.textContent = char;
      detailCharactersList.appendChild(span);
    });
    detailCharactersContainer.style.display = "block";
  } else {
    detailCharactersContainer.style.display = "none";
  }

  // ตั้งค่ารูปภาพในหน้ารายละเอียดให้เหมือนกับหน้าการ์ด
  if (detailImg) {
    detailImg.src = item.image || "mushoku_tensei_rec.png";
    detailImg.alt = item.title;
  }

  const { avg, count } = getRatingInfo(key);
  if (detailAverage) {
    detailAverage.textContent = buildRatingLabel(avg, count);
  }

  detailReviewInput.value = "";
  detailRatingController(0);

  renderAnimeReviews();

  detailSheet.classList.add("open");
  overlay.classList.add("visible");
}

function closeDetail() {
  detailSheet.classList.remove("open");
  overlay.classList.remove("visible");
  currentDetailKey = null;
}

function openLoginSheet() {
  loginError.textContent = "";
  loginUsername.value = "";
  loginPassword.value = "";
  loginSheet.classList.add("open");
  overlay.classList.add("visible");
  setTimeout(() => {
    loginUsername.focus();
  }, 50);
}

function closeLoginSheet() {
  loginSheet.classList.remove("open");
}

function openSignupSheet() {
  signupError.textContent = "";
  signupUsername.value = "";
  signupPassword.value = "";
  signupPasswordConfirm.value = "";
  signupSheet.classList.add("open");
  overlay.classList.add("visible");
  setTimeout(() => {
    signupUsername.focus();
  }, 50);
}

function closeSignupSheet() {
  signupSheet.classList.remove("open");
}

// Render reviews
function renderSiteReviews() {
  // ฟังก์ชันนี้ยังคงอยู่เพื่อรองรับในอนาคต
}

function renderAnimeReviews() {
  detailReviewsList.innerHTML = "";
  if (!currentDetailKey) return;
  const list = animeReviews[currentDetailKey] || [];
  list.forEach((r) => {
    const item = document.createElement("div");
    item.className = "review-item";

    const meta = document.createElement("div");
    meta.className = "review-meta";
    const stars = document.createElement("span");
    stars.className = "stars";
    stars.textContent = "★".repeat(r.rating);
    const label = document.createElement("span");
    label.style.fontSize = "11px";
    label.style.opacity = "0.7";
    label.textContent = r.user || "ผู้ใช้";

    meta.appendChild(stars);
    meta.appendChild(label);

    const text = document.createElement("div");
    text.className = "review-text";
    text.textContent = r.text;

    item.appendChild(meta);
    item.appendChild(text);

    detailReviewsList.appendChild(item);
  });

  // อัปเดตคะแนนเฉลี่ยในหัวข้อรายละเอียดเมื่อมีรีวิวใหม่
  if (currentDetailKey && detailAverage) {
    const { avg, count } = getRatingInfo(currentDetailKey);
    detailAverage.textContent = buildRatingLabel(avg, count);
  }
}

// Init
let siteRatingValue = 0;
let animeRatingValue = 0;

const siteRatingController = setupRatingStars(
  siteRatingStars,
  (val) => {
    siteRatingValue = val;
  }
);

const detailRatingController = setupRatingStars(
  detailRatingStars,
  (val) => {
    animeRatingValue = val;
  }
);

// Theme init + toggle
function applyTheme(theme) {
  const body = document.body;
  body.classList.remove("theme-light", "theme-dark");
  body.classList.add(theme);
  if (themeToggle) {
    themeToggle.textContent = theme === "theme-dark" ? "🌙" : "☀️";
  }
  const floatingToggle = document.getElementById("floatingThemeToggle");
  if (floatingToggle) {
    floatingToggle.textContent = theme === "theme-dark" ? "🌙" : "☀️";
  }
}

const savedTheme = localStorage.getItem("animeTheme");
applyTheme(savedTheme === "theme-dark" ? "theme-dark" : "theme-light");

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const isDark = document.body.classList.contains("theme-dark");
    const next = isDark ? "theme-light" : "theme-dark";
    applyTheme(next);
    localStorage.setItem("animeTheme", next);
  });
}

// Events
categoryToggle.addEventListener("click", () => {
  openCategoryMenu();
});

categoryClose.addEventListener("click", () => {
  closeCategoryMenu();
});

favoritesToggle.addEventListener("click", () => {
  // สลับมุมมองระหว่าง "ทั้งหมด" กับ "ถูกใจ"
  if (currentView === "favorites") {
    currentView = "all";
    currentCategoryId = "all";
    currentCategoryTitle.textContent = "ทั้งหมด";
  } else {
    currentView = "favorites";
    currentCategoryTitle.textContent = "รายการถูกใจ";
    currentCategoryId = "all";
  }
  renderCards();
});

favoritesClose.addEventListener("click", () => {
  closeFavoritesMenu();
});

// คลิกโลโก้เพื่อกลับไปหน้าทั้งหมดและล้างการค้นหา
homeLogo.addEventListener("click", () => {
  currentCategoryId = "all";
  currentSearch = "";
  if (searchInput) {
    searchInput.value = "";
  }
  setCategory("all");
  window.scrollTo({ top: 0, behavior: "smooth" });
});

overlay.addEventListener("click", () => {
  // close menu, detail and login
  closeCategoryMenu();
  closeFavoritesMenu();
  closeDetail();
  closeLoginSheet();
  closeSignupSheet();
  overlay.classList.remove("visible");
});

loginToggle.addEventListener("click", () => {
  if (!isLoggedIn) {
    openLoginSheet();
  } else {
    // simple logout toggle
    isLoggedIn = false;
    currentUser = null;
    favorites = new Set();
    loginToggle.textContent = "เข้าสู่ระบบ";
    loginToggle.classList.remove("logged-in");
    renderCards();
  }
});

loginClose.addEventListener("click", () => {
  closeLoginSheet();
  // hide overlay only if nothing else open
  if (
    !categoryMenu.classList.contains("open") &&
    !detailSheet.classList.contains("open") &&
    !signupSheet.classList.contains("open")
  ) {
    overlay.classList.remove("visible");
  }
});

signupOpen.addEventListener("click", () => {
  closeLoginSheet();
  openSignupSheet();
});

signupClose.addEventListener("click", () => {
  closeSignupSheet();
  if (
    !categoryMenu.classList.contains("open") &&
    !detailSheet.classList.contains("open") &&
    !loginSheet.classList.contains("open")
  ) {
    overlay.classList.remove("visible");
  }
});

loginSubmit.addEventListener("click", () => {
  const user = loginUsername.value.trim();
  const pass = loginPassword.value.trim();
  if (user && users[user] && users[user] === pass) {
    isLoggedIn = true;
    currentUser = user;
    favorites = loadFavoritesForUser(currentUser);
    loginError.textContent = "";
    closeLoginSheet();
    loginToggle.textContent = `${user} (ออกจากระบบ)`;
    loginToggle.classList.add("logged-in");
    renderCards();
    if (
      !categoryMenu.classList.contains("open") &&
      !detailSheet.classList.contains("open") &&
      !signupSheet.classList.contains("open")
    ) {
      overlay.classList.remove("visible");
    }
  } else {
    loginError.textContent = "ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง";
  }
});

signupSubmit.addEventListener("click", () => {
  const user = signupUsername.value.trim();
  const pass = signupPassword.value.trim();
  const pass2 = signupPasswordConfirm.value.trim();

  if (!user || !pass || !pass2) {
    signupError.textContent = "กรุณากรอกข้อมูลให้ครบถ้วน";
    return;
  }
  if (pass.length < 4) {
    signupError.textContent = "รหัสผ่านควรมีอย่างน้อย 4 ตัวอักษร";
    return;
  }
  if (pass !== pass2) {
    signupError.textContent = "รหัสผ่านทั้งสองช่องไม่ตรงกัน";
    return;
  }
  if (users[user]) {
    signupError.textContent = "มีชื่อผู้ใช้นี้อยู่แล้ว กรุณาใช้ชื่ออื่น";
    return;
  }

  users[user] = pass;
  isLoggedIn = true;
  currentUser = user;
  favorites = loadFavoritesForUser(currentUser);
  signupError.textContent = "";
  closeSignupSheet();
  loginToggle.textContent = `${user} (ออกจากระบบ)`;
  loginToggle.classList.add("logged-in");
  renderCards();

  if (
    !categoryMenu.classList.contains("open") &&
    !detailSheet.classList.contains("open") &&
    !loginSheet.classList.contains("open")
  ) {
    overlay.classList.remove("visible");
  }
});

categoryListEl.addEventListener("click", (e) => {
  const li = e.target.closest("li");
  if (!li) return;
  const id = li.dataset.id;
  if (!id) return;
  setCategory(id);
  closeCategoryMenu();
  if (
    !detailSheet.classList.contains("open") &&
    !loginSheet.classList.contains("open")
  ) {
    overlay.classList.remove("visible");
  }
});

searchInput.addEventListener("input", () => {
  performSearch();
});

searchInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    performSearch();
  }
});

searchBtn.addEventListener("click", () => {
  performSearch();
});

// Card click
cardsContainer.addEventListener("click", (e) => {
  const likeTarget = e.target.closest(".like-btn");
  if (likeTarget) {
    const key = likeTarget.dataset.key;
    if (key) {
      toggleFavorite(key);
    }
    e.stopPropagation();
    return;
  }

  const card = e.target.closest(".card");
  if (!card) return;
  const key = card.dataset.key;
  openDetail(key);
});

// Recommended slider click
trendingSlide.addEventListener("click", (e) => {
  const card = e.target.closest(".recommended-card");
  if (!card) return;
  const key = card.dataset.key;
  openDetail(key);
});

trendingPrev.addEventListener("click", () => {
  prevRecommended();
  resetTrendingAuto();
});

trendingNext.addEventListener("click", () => {
  nextRecommended();
  resetTrendingAuto();
});

// Anime review submit
detailReviewSubmit.addEventListener("click", () => {
  if (!isLoggedIn) {
    openLoginSheet();
    return;
  }

  const text = detailReviewInput.value.trim();
  if (!text || !animeRatingValue || !currentDetailKey) return;

  if (!animeReviews[currentDetailKey]) {
    animeReviews[currentDetailKey] = [];
  }
  animeReviews[currentDetailKey].unshift({
    rating: animeRatingValue,
    text,
    user: currentUser || "ผู้ใช้",
  });

  detailReviewInput.value = "";
  detailRatingController(0);
  renderAnimeReviews();
  renderCards(); // อัปเดตดาวเฉลี่ยบนการ์ดให้ตรงกับรีวิวล่าสุด
});

// เพิ่มให้กดกากบาทปิดหน้ารายละเอียดได้
detailClose.addEventListener("click", () => {
  closeDetail();
});

 import { createIcons, Facebook, Instagram, Twitter, Youtube } from 'lucide';

// Initial render
createIcons({
  icons: {
    Facebook,
    Instagram,
    Twitter,
    Youtube
  }
});
renderCategoryMenu();
renderCards();
renderTrending();
renderSiteReviews();
startTrendingAuto();

// --- Floating Draggable Theme Toggle Logic ---
(function initFloatingToggle() {
  const el = document.getElementById("floatingThemeToggle");
  if (!el) return;

  let isDragging = false;
  let hasMoved = false;
  let startX, startY;
  let initialLeft, initialTop;

  const onStart = (e) => {
    isDragging = true;
    hasMoved = false;
    const clientX = e.type === "touchstart" ? e.touches[0].clientX : e.clientX;
    const clientY = e.type === "touchstart" ? e.touches[0].clientY : e.clientY;
    
    startX = clientX;
    startY = clientY;
    
    const rect = el.getBoundingClientRect();
    initialLeft = rect.left;
    initialTop = rect.top;
    
    el.style.transition = "none";
    el.style.cursor = "grabbing";
  };

  const onMove = (e) => {
    if (!isDragging) return;
    
    const clientX = e.type === "touchmove" ? e.touches[0].clientX : e.clientX;
    const clientY = e.type === "touchmove" ? e.touches[0].clientY : e.clientY;
    
    const dx = clientX - startX;
    const dy = clientY - startY;
    
    if (Math.abs(dx) > 5 || Math.abs(dy) > 5) {
      hasMoved = true;
    }
    
    // Update position
    let newX = initialLeft + dx;
    let newY = initialTop + dy;
    
    // Containment within viewport
    const padding = 10;
    newX = Math.max(padding, Math.min(newX, window.innerWidth - el.offsetWidth - padding));
    newY = Math.max(padding, Math.min(newY, window.innerHeight - el.offsetHeight - padding));
    
    el.style.left = `${newX}px`;
    el.style.top = `${newY}px`;
    el.style.right = "auto";
    el.style.bottom = "auto";
    
    if (e.cancelable) e.preventDefault();
  };

  const onEnd = () => {
    if (!isDragging) return;
    isDragging = false;
    el.style.cursor = "grab";
    el.style.transition = "transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
  };

  const onClick = (e) => {
    if (hasMoved) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }
    // Perform same toggle logic as header button
    const isDark = document.body.classList.contains("theme-dark");
    const next = isDark ? "theme-light" : "theme-dark";
    applyTheme(next);
    localStorage.setItem("animeTheme", next);
  };

  // Mouse Events
  el.addEventListener("mousedown", onStart);
  window.addEventListener("mousemove", onMove);
  window.addEventListener("mouseup", onEnd);

  // Touch Events
  el.addEventListener("touchstart", onStart, { passive: false });
  window.addEventListener("touchmove", onMove, { passive: false });
  window.addEventListener("touchend", onEnd);

  // Click Event
  el.addEventListener("click", onClick);
})();