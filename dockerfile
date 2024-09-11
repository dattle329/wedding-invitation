# Sử dụng image chính thức của Node.js để build ứng dụng React
FROM node:16-alpine AS build

# Thiết lập thư mục làm việc
WORKDIR /app

# Sao chép file package.json và package-lock.json vào container
COPY package*.json ./

# Cài đặt các phụ thuộc
RUN npm install

# Sao chép tất cả các file của dự án vào container
COPY . .

# Build dự án ReactJS
RUN npm run dev

# Sử dụng image chính thức của Nginx để serve ứng dụng
FROM nginx:alpine

# Copy build output từ bước build vào Nginx public directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 để truy cập
EXPOSE 80

# Khởi động Nginx khi container chạy
CMD ["nginx", "-g", "daemon off;"]
