# water-track
ในส่วนของ back-end อยู่ที่ https://github.com/kaweepong-m/water-track-server

## การติดตั้งโปรเจค
```
ให้ git clone repository นี้
หลังจาก clone เสร็จแล้วให้พิมพ์คำสั่ง 'npm install'
เมื่อ install เสร็จแล้วให้พิมพ์คำสั่งว่า 'npm run serve' จากนั้นจะได้ path ของโปรเจคมาให้ทำการเปิดมาเพื่อไปเปิดใน web
```

## วิธีใช้งาน
เริ่มแรกมานั้นจะให้มีหน้า reward ให้ดูรางวัล กับ point ที่ต้องใช้ แต่ไม่สามารถกดแลกได้ต้อง login ก่อน
หน้า LOGIN สำหรับเข้าสู่ระบบ, หน้า Register สำหรับสมัครสมาชิก
ในกรณีที่เข้าเป็น admin
จะสามารถทำการ เพิ่ม แก้ และ ลบของรางวัลได้ แล้วก็สามารถดู leaderboard ที่จะบอกว่าใครมีแต้ม และ ใช้แต้มไปเท่าไหร่แล้วได้ แล้วก็เลือกได้ว่าจะให้เรียงแบบไหน และแอดมินเองก็สามารถแลกของรางวัลได้เหมือนกัน แล้วก็มี history ให้ดูว่าใครแลกอะไรไปแล้วบ้างตอนไหนวันที่เท่าไหร่
ในกรณีที่เข้าเป็น user จะมีปุ่มเพิ่ม ในหน้า home เพื่อที่จะสามารถเพิ่มแต้มของตัวเองเพื่อไปใช้ในการแลกรางวัลได้ user จะสามารถแลกของรางวัลได้ แล้วก็มี history ให้ดูว่าใครแลกอะไรไปแล้วบ้างตอนไหนวันที่เท่าไหร่

## Username และ Password 
```
Admin
username : admin@gmail.com 
password : admin123

Authenticated
username : test@gmail.com
password : test123

username : testuser@gmail.com
password : testuser123

username : user@gmail.com
password : user123
```

## ผู้จัดทำ
```
ศุภกร ใจพอดี 6110450987 , 
ธนภพ ชุมศรี 6110451321 , 
จักรภัทร ผลยงค์ 6110450669 , 
กวีพงศ์ เหมี้ยงหอม 6110450634
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
