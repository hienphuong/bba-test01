Buổi 4: Java script continue
I. Java script nâng cao

A. Phạm vi của biến 
1. Global scope (biến toàn cục)
Khai báo ngoài tất cả {} hoặc function
2. Function scope
Biến khai báo trong function → chỉ dùng trong function
3. Block scope ({})
Áp dụng với if, for, {}
let, const có block scope
B. Break & Continue
1. break = dừng vòng lặp ngay
for (let i = 1; i <= 5; i++) {
  if (i === 3) break;
  console.log(i);
}
2. continue = bỏ qua lần lặp hiện tại
for (let i = 1; i <= 5; i++) {
  if (i % 2 === 0) continue;
  console.log(i);
} 
C. Vòng lặp nâng cao
forEach
const arr = [1, 2, 3];

arr.forEach(item => {
  console.log(item);
});

map (trả về mảng mới)
const arr = [1, 2, 3];

const newArr = arr.map(item => item * 2);

filter (lọc)
const arr = [1, 2, 3, 4];

const result = arr.filter(item => item > 2);

find

const arr = [1, 2, 3];

const result = arr.find(item => item > 1);

Không dùng được break / continue
D. Câu điều kiện nâng cao

let age = 18;

let result = age >= 18 ? "Adult" : "Child";

let name = inputName || "Guest";
E. Utils functions

Kiểm tra type
typeof x
Array.isArray(arr)

Chuyển đổi
Number("123")
String(123)
Boolean(1)

String
"hello".toUpperCase()
"hello".includes("he")