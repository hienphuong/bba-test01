Buổi 3: Git & JavaScript (continue)
I. GIT

1. Commit & undo

git restore staged <file> → bỏ file khỏi staging
git restore staged . → bỏ tất cả khỏi staging
git reset head~1 → quay lại 1 commit trước
git reset head~2 → quay lại 2 commit trước

2. Branching

git branch <tên_nhánh> → tạo nhánh
git checkout <tên_nhánh> → chuyển nhánh
git checkout -b <tên_nhánh> → tạo + chuyển nhánh
git branch -D <tên_nhánh> → xoá nhánh

3. Gitignore

Dùng để ignore file không cần commit
II. JavaScript Basic

1. Naming convention

snake_case → tạm dùng
kebab-case → file, folder
camelCase → biến, hàm
PascalCase → class
UPPERCASE → hằng số

2. Console.log

Dùng để debug
"text" → in chuỗi
${variable} → chèn biến
Nối chuỗi bằng +
Truy cập object:
myInfor.name.class
myInfor["name"]["class"]

3. Array

Khai báo: const arr = [1,2,3]
Truy cập: arr[0]
Độ dài: arr.length
Dùng for để lặp

4. Function

Là đoạn code dùng lại nhiều lần
Ví dụ:
tinhDienTich(dai, rong)
kiemTraChanLe(x)