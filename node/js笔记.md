# 前端笔记

## JavaScript

#### 一、 变量和数据类型

1. 变量：一个存储数据的容器

2. 等号是赋值的意思

3. 六种数据类型：数字、字符串、布尔、对象、Null(空值)、Undefined(未定义)

#### 二、 表达式

1. 基本概念：表达式是JavaScript语言中的一个短语，就像我们自然语言中说的一个词或一句话一样。浏览器会将这个短语计算出一个结果，这个结果我们叫它表达式的返回值。

2. 运算符：求余数(使用符号：%)，自增一(++)，自减一(--)

3.  逻辑运算符：与(&&),或(||),非(!)
    1.1 &&
    ```
    1.1.1:两边条件都为true时，结果才为true；
    1.1.2:如果有一个为false，结果就为false；
    1.1.3:当第一个条件为false时，就不再判断后面的条件
    注意：当数值参与逻辑与运算时，结果为true，那么会返回的会是第二个为真的值；如果结果为false，返回的会是第一个为假的值。
    ```
    
    1.2. ||
    ```
    1.2.1:只要有一个条件为true时，结果就为true；
    1.2.2:当两个条件都为false时，结果才为false；
    1.2.3:当一个条件为true时，后面的条件不再判断
    注意：当数值参与逻辑或运算时，结果为true，会返回第一个为真的值；如果结果为false，会返回第二个为假的值；
    ```
    1.3. ！
    ````
    1.3.1:当条件为false时，结果为true；反之亦然。

4. 赋值运算符
    ```
    x += y  //同x = x + y
    x -= y  //同x = x - y
    x *= y  //同x = x * y
    x /= y  //同x = x / y
    ```

#### 三、条件语句
    1. if
    2. switch
    3. ? 是什么
    ```
    var num1 = 10;
    var num2 = 20;
    var result = num1 > num2 ? 100 : 200;
    //如果num1大于num2，条件表达式的值为100，若num1小于等于num2时，条件表达式的值为200；
    console.log(result);
    ```
#### 四、 函数

函数的概念：可执行的语句块
函数特点：一次声明 多次调用

返回值：return


3.对象

对象：属性的无序集合

当对象的的属性值是一个函数的时候，我们叫这个属性是这个对象的方法。

new Date:创建日期对象


4.数组

数组：对象的一种，js的内置对象，元素的有序集合

length可以数组里获取元素的个数

5.语句流

代码执行的顺序:顺序、分支、循环


#### 五、DOM操作

1. 方法
    ```js
    1.1 元素.style.color = "" :设置元素内联样式
    1.2 querySelector():通过选择器获取元素
    1.3 querySelectorAll():遍历获取
    1.4 createTextNode():添加文本节点
    ```
2. 点击事件：
    ``` html
    <button>按钮</button>
    <script>
        var btn = document.querySelector("btn");
        btn.onclick = function(){
            console.log("hello world");
        }
    </script>
    ```

#### 六、计时器

1. 方法
    ```js
    1.1 setTimeout():执行
    1.2 setInterval():重复执行
    1.3 clearTimeout():停止计时
    ```
## jQuery.js

jQuery不是一门语言，而是JavaScript中的一个库。
jQuery极大地简化了js代码

jQuery库包含以下功能：

HTML 元素选取，
HTML 元素操作，
CSS 操作，
HTML 事件函数，
JavaScript 特效和动画，
HTML DOM 遍历和修改，
AJAX，
Utilities

## Vue.js

Vue.js 是一套构建用户界面的渐进式框架。

data 数据
methods 方法

@click 点击事件
++ 自增一 
-- 自减一

@submit.prevent="insert" 删除事件
v-for 绑定事件
:src 绑定属性

let target = new Date().getTime(); 获取当前时间

### ES(2015)

弃用var 使用let，
开始使用箭头函数