# MySQL笔记

## 1.数据库的增删改查

#### 查看数据库：show databases；
#### 创建数据库：create database 数据库名称；
#### 删除数据库：drop database 数据库名称；
#### 操作数据库：use 数据库名称；

## 2.表的增删改查

#### 查看表：show tables；
#### 创建表：create table 表名(字段名称 字段类型......)；
#### 查看表中数据：select * from 表名；
#### 查看表的结构：desc 表名；
#### 删除表：drop table 表名；
一个完整表的创建
create table student(num int(6),name varchar(10),sex varchar(2),age intschooldate date);
#### 向表中插入数据：insert into 表名(想插入的字段名称......)values(想插入的字段的值)
#### 表中删除数据：delete from 表名 where 条件表达式 
注：条件表达式 数据=数字
#### 表中修改记录：update 表名 set 字段名 = 新的字段值...... wheree 条件表达式

## 3.字段的增删改查
#### 增加字段：alter table 表名 add 字段名 字段类型；
#### 修改字段：alter table 表名 modify 字段类型；
#### 删除字段：alter table 表名 drop 字段名称；

## 4.MySQL约束
#### 唯一约束：create table 表名(字段名称 字段类型...... unique)；
#### 非空约束：添加 not noll
#### 主键约束：添加 primary key
#### 自动增长：添加 auto_increment
#### 外键约束：添加 foreign key
#### 同一字段加多个约束 不需要逗号隔开
#### 在MySQL中，外间必须是另一张表的主键
#### 非空约束和唯一约束的组合，我们称之为主键约束



## 5.查询语句
#### 删除主键：alter table 表名 drop primary key;
#### * 代表所有字段
#### select [字段列表，表达式+ - * / %，函数] from 表名            
注：%（求余数）
#### 去重：在字段列表前添加 distinct

#### 条件查询：select [字段列表，表达式+ - * / %，函数] from 表名 where 字段类型=><数字
#### 多个条件查询：select [字段列表，表达式，函数] from 表名 where 字段类型=><数字 or 字段类型=><数字
#### 关键字查询：select 字段列表 from 表名 where 字段列表 in(范围， )    
注：not in(指不在范围之内)

<!-- ### 函数
1. select 函数 from 表名
2. pi()：返回值（圆周率）
3. floor(x)：舍去小数
4. ceiling(x)：有小数则x加一 -->
## 6.表与表的关系
#### 一对多：需要创建被关联表和关联表
#### 举例：一个学院对应多个学生，而一个学生只对应一个学院  
#### 1. 先建被关联表： 
```
    create table if not exists classroom(
    id int primary key auto_increment,
    name varchar(20)
);
```
#### 2. 在建关联表的创建：
```
    create table student(
    id int primary key auto_increment,
    name varchar(10),
    cls_id int,
    constraint `idx_cls_id` foreign key(cls_id) references classroom(id)
);
```
#### 3.给被关联表插入数据：
insert into classroom(name) values('Python学院'),('Web学院'),('Java学院');
#### 4.给关联表插入数据：
    insert into student(name,cls_id) values('Which',1);
    insert into student(name,cls_id) values('Tuple',1);
    insert into student(name,cls_id) values('Tom',3);
    insert into student(name,cls_id) values('Tim',2);

## 7.多表联查
#### 查询两张表中的数据：select 字段名称，字段名称...... from 表名，表名......
#### select 字段名称，字段名称...... from 表名，表名...... join 表名 on 表名.字段名称 = 表名.字段名称
实例：select ename,dname from emp join dept on emp.deptno = dept.deptno
#### 左外联合：join前加 left
理解：左边表中如果存在记录没有匹配到还想显示出来
#### 右外联合：join前加 right
理解：右边表中如果存在记录没有匹配到还想显示出来

