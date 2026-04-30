Buổi 2: Git & JavaScript Basic

I. GIT

1. Workflow cơ bản

git init → khởi tạo repo (working directory)
git status → kiểm tra trạng thái file
git add . → đưa file vào staging
git commit -m "message" → lưu vào repository
 Flow: init → add → commit → push

2. Config

git config user.name "Sand Tran"
git config user.email "sand@gmail.com"
(có thể dùng global config để khỏi set lại mỗi lần)

3. Xem lịch sử

git log → xem commit history
4. Commit convention

feat → thêm tính năng
fix → sửa lỗi
chore → việc linh tinh
message nên ngắn gọn, mô tả rõ
II. JavaScript Basic

1. JavaScript là gì

Ngôn ngữ lập trình dùng cho web
2. Hello world

Chương trình đầu tiên để test môi trường
3. Biến & hằng

Dùng để lưu dữ liệu
let → có thể thay đổi giá trị
const → không đổi (khuyến khích dùng)
var → ít dùng (cũ)
Quy tắc:

const ưu tiên dùng mặc định
chỉ dùng let khi cần thay đổi giá trị
4. Comment

Ghi chú trong code
5. Kiểu dữ liệu

Các loại dữ liệu cơ bản 
number → số
string → chuỗi "hello"
boolean → true / false
undefined → chưa có giá trị
null → giá trị rỗng
6. Toán tử

So sánh: < > === !==
Logic: && ||
Tăng giảm: x++, ++x, x--, --x
7. Câu điều kiện

if (điều kiện) {
// chạy nếu đúng
} else {
// chạy nếu sai
}
8. Vòng lặp

for → lặp cơ bản, rất quan trọng
for (let i = 0; i < 5; i++) {
console.log(i);
}