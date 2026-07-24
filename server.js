let html = `
<!DOCTYPE html>
<html lang="th">
<head>
<meta charset="UTF-8">
<title>Student Database</title>

<style>

*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:Segoe UI;
}

body{

background:linear-gradient(#020b1f,#052c5b,#0a4b75,#0b688f);
height:100vh;
overflow:hidden;
position:relative;
color:white;

}

/* พระจันทร์ */

.moon{

position:absolute;
top:40px;
right:80px;
width:120px;
height:120px;
border-radius:50%;
background:#fff;
box-shadow:
0 0 20px #fff,
0 0 60px #dbeafe;

}

/* ดาว */

.star{

position:absolute;
width:4px;
height:4px;
background:white;
border-radius:50%;
animation:twinkle 2s infinite alternate;

}

@keyframes twinkle{

from{opacity:.2;}
to{opacity:1;}

}

/* ทะเล */

.sea{

position:absolute;
bottom:0;
width:100%;
height:45%;
background:linear-gradient(#0b4f73,#083b5b,#062f49);

}

/* คลื่น */

.wave{

position:absolute;
width:200%;
height:180px;
background:rgba(255,255,255,.08);
border-radius:45%;
animation:wave 10s linear infinite;

}

.wave:nth-child(1){

bottom:110px;

}

.wave:nth-child(2){

bottom:70px;
animation-duration:15s;
opacity:.6;

}

.wave:nth-child(3){

bottom:30px;
animation-duration:20s;
opacity:.4;

}

@keyframes wave{

from{

transform:translateX(0);

}

to{

transform:translateX(-50%);

}

}

/* ปลาวาฬ */

.whale{

position:absolute;
font-size:90px;
bottom:170px;
left:-200px;
animation:whaleMove 22s linear infinite;

}

@keyframes whaleMove{

0%{

left:-200px;

}

50%{

transform:translateY(-20px);

}

100%{

left:120%;

}

}

/* โลมา */

.dolphin{

position:absolute;
font-size:55px;
bottom:260px;
left:-100px;
animation:dolphinMove 12s linear infinite;

}

@keyframes dolphinMove{

0%{

left:-100px;

}

25%{

transform:translateY(-40px) rotate(-10deg);

}

50%{

transform:translateY(-70px) rotate(10deg);

}

75%{

transform:translateY(-40px);

}

100%{

left:120%;

}

}

/* กล่องข้อมูล */

.card{

position:absolute;
left:50%;
top:50%;
transform:translate(-50%,-50%);
width:700px;
background:rgba(255,255,255,.15);
backdrop-filter:blur(10px);
border-radius:25px;
padding:25px;
box-shadow:0 0 25px rgba(255,255,255,.15);

}

h1{

text-align:center;
margin-bottom:20px;

}

table{

width:100%;
border-collapse:collapse;

}

th{

background:#4fc3f7;
padding:12px;

}

td{

padding:10px;
background:rgba(255,255,255,.1);
text-align:center;

}

tr:hover td{

background:rgba(255,255,255,.25);

}

.footer{

margin-top:20px;
text-align:center;
color:#dbeafe;

}

</style>

</head>

<body>

<div class="moon"></div>

<div class="star" style="top:70px;left:100px;"></div>
<div class="star" style="top:100px;left:400px;"></div>
<div class="star" style="top:80px;left:700px;"></div>
<div class="star" style="top:160px;left:900px;"></div>
<div class="star" style="top:50px;left:1200px;"></div>

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

🐋 Ocean Night • Student Database • 🐬

</div>

</div>

<div class="sea">

<div class="wave"></div>
<div class="wave"></div>
<div class="wave"></div>

</div>

<div class="whale">🐋</div>

<div class="dolphin">🐬</div>

</body>

</html>

`;

res.end(html);
