let html = `
<!DOCTYPE html>
<html lang="th">
<head>
<meta charset="UTF-8">
<title>ฐานข้อมูลนักศึกษา</title>

<style>
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family: "Segoe UI",sans-serif;
}

body{
    min-height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    background:linear-gradient(to bottom,#0f172a,#1e3a8a,#93c5fd);
    overflow:hidden;
}

/* ดวงดาว */
.star{
    position:absolute;
    color:white;
    animation:twinkle 2s infinite alternate;
}

@keyframes twinkle{
    from{opacity:.3;}
    to{opacity:1;}
}

/* พระจันทร์ */
.moon{
    position:absolute;
    top:40px;
    right:70px;
    width:120px;
    height:120px;
    background:#fffde7;
    border-radius:50%;
    box-shadow:0 0 40px #fff9c4;
}

/* แมว */
.cat{
    position:absolute;
    bottom:20px;
    right:60px;
    font-size:120px;
}

/* กล่องข้อมูล */
.card{
    width:700px;
    background:rgba(255,255,255,.18);
    backdrop-filter:blur(12px);
    border-radius:25px;
    padding:30px;
    color:white;
    box-shadow:0 15px 35px rgba(0,0,0,.35);
    z-index:99;
}

h1{
    text-align:center;
    margin-bottom:20px;
    color:white;
}

table{
    width:100%;
    border-collapse:collapse;
}

th{
    background:#60a5fa;
    color:white;
    padding:12px;
}

td{
    background:rgba(255,255,255,.25);
    padding:10px;
    text-align:center;
}

tr:hover td{
    background:rgba(255,255,255,.4);
}

.footer{
    margin-top:20px;
    text-align:center;
    font-size:14px;
    color:#e0f2fe;
}
</style>

</head>

<body>

<div class="moon"></div>

<div class="star" style="top:40px;left:50px;">⭐</div>
<div class="star" style="top:120px;left:250px;">✨</div>
<div class="star" style="top:70px;left:500px;">⭐</div>
<div class="star" style="top:170px;left:850px;">✨</div>
<div class="star" style="top:90px;left:1050px;">⭐</div>

<div class="cat">🐱</div>

<div class="card">

<h1>🌙 ฐานข้อมูลนักศึกษา 🌙</h1>

<table>

<tr>
<th>รหัสนักศึกษา</th>
<th>ชื่อ-นามสกุล</th>
</tr>
`;

result.rows.forEach(row=>{
html+=`
<tr>
<td>${row.students_id}</td>
<td>${row.students_name}</td>
</tr>
`;
});

html+=`
</table>

<div class="footer">
💙 Good Night • Student Database • Made with Node.js 💙
</div>

</div>

</body>
</html>
`;

res.end(html);
