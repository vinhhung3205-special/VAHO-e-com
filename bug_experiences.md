# Sổ Mẹo & Kinh Nghiệm Bug (Bug Experiences)

File này lưu lại quá trình làm việc, một số lỗi thường gặp để tránh lặp lại trong tương lai đối với dự án Next.js & Frontend chung.

## 1. Lỗi PostCSS sinh ra `__esModule` Warning và `next/font` crash
- **Triệu chứng:** Khi chạy build hoặc dev, Next.js báo `Warning: Your PostCSS configuration defines a field which is not supported (__esModule)` kèm theo màn hình 500 `Error: Your custom PostCSS configuration must export a plugins key`.
- **Nguyên nhân:** File `postcss.config.js` được tạo dưới dạng ES Module (`export default`) trong khi project (package.json) thuộc dạng CommonJS (`"type"` không phải `"module"`).
- **Cách fix:** Đổi cú pháp export trong `postcss.config.js` thành CommonJS: `module.exports = { plugins: { ... } }`.

## 2. Lỗi `npm error ENOENT: no such file or directory, open '.../package.json'`
- **Triệu chứng:** Chạy `npm run dev` hoặc `npm install` bị báo lỗi không tìm thấy `package.json`.
- **Nguyên nhân:** Người dùng đang đứng sai đường dẫn trong Terminal. Project nằm ở thư mục cấp con (ví dụ: `D:\Agent\vaho\`) nhưng Terminal đang đứng ở quá cao (ví dụ: `D:\Agent\`).
- **Cách fix:** Mở Terminal và dùng lệnh di chuyển vào đúng thư mục dự án chứa mã nguồn:
  ```bash
  cd vaho
  npm run dev
  ```

*Sẽ tiếp tục cập nhật file này trong quá trình Dev...*
