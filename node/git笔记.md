# Git笔记

### 安装依赖：npm install
### 启动项目：npm run serve（Vue）
### 启动项目：npm run dev（Egg）
### 克隆：git clone
### 打包：npm run build

### cnpm（淘宝镜像）：npm install -g cnpm -registry=https://registry.npm.taobao.org

## 上传文件
#### 1. 克隆项目
#### 2. 把你想要添加的文件复制到克隆好的文件夹里
#### 3. git add .
#### 4. git commit -m"简述"
#### 5. git push

## 安装模板依赖：npm install --save egg-view-nunjucks

## 上传分支
#### 1. 首先克隆git项目
#### 2. 然后在项目里创建文件夹
#### 3. git checkout -b 分支名称
#### 4. git add .
#### 5. git commit -m"简述"
#### 6. git push origin 分支名称

## 把本地文件上传到指定分支中
### 查看当前分支
#### git branch -a
### 如果当前不在自己想要的分支上，则：
#### git checkout 想要操作的分支
### 将本地文件复制到该分支下，然后：
#### git add .
#### git commit -m “你的注释” 
#### git push -u origin 想要操作的分支