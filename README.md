# How to run my project (pls Read)
check your node version (ตรวจเช็คว่าลง node ว่าเป็นเวอร์ชั่นล่าสุดแล้วหรือยัง) 
1.create your folder and open it on VScode (สร้างโฟล์เดอร์และเปิดโฟล์เดอร์ใน VScode)

2.open your terminal ( Ctrl + Shift + ` ) and clone my project (เปิดตัวของ Terminal ขึ้นมาแล้ว พิมพ์ คำสั่งเข้าไปในการ clone โปรเจ็ค)
```bast
git clone https://github.com/Puripan22/BOARD-POST.git
```
3.cd folder project and install (เข้าถึงโฟล์เดอร์ข้างในแล้ว install ) // cd เข้าตามชื่อFolder 
```bash
cd BOARD-POST
```
```bash
npm install
```
4.Split your Terminal ( Ctrl + Shift + 5 ) and use new Terminal run server by commmand this (สร้าง terminal ออกมาอีกตัวด้วยการ Split แล้วใช้ terminal ตัวใหม่ที่สร้างออกมารันเซิฟเวอร์โดยคำสั่งนี้)
```bash
cd BOARD-POST
```
```bash
cd server
```
```bash
npm start
```
5.Run website on another terminal by command this ( แล้วอีกฝั่งเดิม Run website ด้วยคำสั่งนี้)
```bash
npm run dev
```

pls wait when you change page in a first time ( กรุณารอในตอนที่ต้องการเปลี่ยนหรือคลิกเปลี่ยนหน้าในตอนที่เปลี่ยนครั้งแรก)

### Setup pnpm (optional)

If you are using `pnpm`, you need to add the following code to your `.npmrc` file:

```bash
public-hoist-pattern[]=*@nextui-org/*
```

After modifying the `.npmrc` file, you need to run `pnpm install` again to ensure that the dependencies are installed correctly.
