# MVC_ExitExam_2025

Server.js เป็นส่วนของ page ไปได้ทั้งหมดใน server นี้ โดยมี 
/home,/dragon,/phonix,/owl เป็นหน้า page html ใช้ในการแสดงผล
/css สำหรับ ไฟล์ css 
/pets เป็น Routes ขอ api ในระบบนี้

ใน Files routes/petRoutes.js
จะมี api ต่างๆในการรับข้อมูลไฟล์ โดยมี 
GET API 
/allpet เพื่อรับ json ของ pet ทั้งหมดที่มี
/findpet/:type เป็นตัวเลือกให้สามารถเลือกดูเฉพาะ typeๆ นั้นได้
/findpetbyid/:type/:id มีไว้สำหรับหาโดย id ของ pet
/rejected สำหรับดูไฟล์ Rejected ที่มีข้อมูลสัตว์ที่ถูก Rejected
/rejected/:type เลือกดูเฉพาะ typeๆ นั้น

POST API
/addpet เป็นapi ให้รับ pet ใหม่ๆเข้ามา

โดยเมื่อ API เหล่านี้ถูกใช้จะมาที่ petController.js เป็นตัวกลางรับ request จาก user
Method
getAllPet 
getPetsByType มีการแปลง type ที่เข้ามาเป็นตัวเล็กเพื่อให้นำไปหาง่าย
getPetById 
getAllRejectedPets
getRejectedPetsByType

addPet จะ check type ของ type ก่อน และ input body เป็น json โครงสร้างดังนี้
{
    "type": "phoenix",
    "healthDate": "15/11/2024",
    "vaccineCount": 3,
    "additionalInfo": true
}
แล้ว check แยก case ของสัตว์แต่ละประเภทเพื่อแปลง "additionalInfo": true ให้ตรงกับความต้องการของประเภทสัตว์นั้นๆ 
phoenix => newPet.fireproof_certificate = true;
groudon => newPet.smoke_pollution_level = pollutionLevel;
owl => newPet.flight_distance_without_food = flightDistance;
แล้วทำการเข้าไป addpet ต่อไปในส่วนของ model

petModel.js เป็นส่วนที่เข้าถึง database Insert,Update,Delete
โดยมี path ต่างของ database ทั้งหมด
readJSON อ่านไฟล์ผ่าน path
getAllPets รวมไฟล์ทั้งหมดแล้ว return
filePath รวม path ให้เป็น array 
getPetsByType เอา filePath มาให้แยก type ได้
getPetById เอา type กับ id มาหาข้อมูล pet ตัวนั้น
getFilePathByPetType method ใช้ type แยก path 
generatePetId จะสร้าง uniqueID 8 หลักเสมอโดยเอา Math.random()* 90000000 จะเอา ค่า Random ระหว่า 0-1 มาคูณให้ เลขไม่เกิน 8 หลัก แล้วมา + 10000000 จะทำให้ได้8 หลักเสมอ
ถ้าหาgenerate มาแล้วจะ check เทียบกับ ID ทั้งหมดก่อน แล้วถ้าซ้ำจะวนวร้างใหม่
addNewPet check ข้อมูลตามเกณฑที่ได้กำหนดถ้าไม่ถึงให้ save เข้า rejected
ถ้าผ่านก็ save เข้า database ของสัตว์นั้นๆ
saveRejectedPet
getRejectedPets
getRejectedPetsByType

corsOptions.js สำหรับ method ที่ allow ในการใช้งาน ปรับให้ใช้ได้ทั้งหมด
