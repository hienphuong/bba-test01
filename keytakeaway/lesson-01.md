Buổi 1: Playwright & Setup

I. Playwright là gì

Tool automation test
Hỗ trợ:
Cross browser → chạy nhiều trình duyệt
Cross platform → chạy nhiều hệ điều hành
Auto waiting → tự chờ element
Auto retry + assertion → giảm flaky test
II. Reporting

Report chi tiết:
Pass/Fail theo từng browser
Thời điểm chạy test
API gọi gì, response gì
Mapping với dòng code
III. Codegen

Tool sinh code tự động bằng thao tác UI
→ giúp viết test nhanh
IV. Công cụ cần cài

NVM → quản lý version Node
NodeJS → chạy code
Git → quản lý source
GitHub → lưu & làm việc nhóm
V. Cấu hình Git

git config --global user.name "ten"
git config --global user.email "email"
git config --global init.defaultBranch main
VI. SSH Key

Tạo key:
ssh-keygen -t rsa -b 4096 -C "email"
Lấy key:
cat ~/.ssh/id_rsa.pub
VII. Cài Playwright

npm init playwright@latest
VIII. Push code lên GitHub

git add .
git commit -m "message"
git push origin main
IX. Lệnh cơ bản

Kiểm tra version:
node -v
nvm -v
brew -v
Chạy test:
npx playwright test
X. Test cơ bản

Mở trang (go to page)
Kiểm tra element tồn tại
Click