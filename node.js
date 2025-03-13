const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
// استخدام body-parser لتحليل بيانات JSON في الـ POST
app.use(bodyParser.json());
// قاعدة بيانات مؤقتة في الذاكرة
let users = [];
// عملية GET لجلب جميع المستخدمين
app.get("/users", (req, res) => {
    res.json(users);
});
// عملية POST لإضافة مستخدم جديد
app.post("/users", (req, res) => {
    const { name, age, email } = req.body;
    if (!name || !age || !email) {
        return res.status(400).json({ error: "الرجاء إدخال جميع البيانات المطلوبة!" });
    }
    const newUser = { id: users.length + 1, name, age, email };
    users.push(newUser);
    res.status(201).json({ message: "تمت إضافة المستخدم بنجاح!", user: newUser });
});
// تشغيل السيرفر
app.listen(port, () => {
    console.log(` السيرفر يعمل على: http://localhost:${port}`);
});
