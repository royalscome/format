<!--
 * @Description: 
 * @Autor: weiyang
 * @Date: 2021-08-31 15:05:56
 * @LastEditors: weiyang
 * @LastEditTime: 2021-08-31 17:24:49
-->
# @royalscome/format
<hr />

[![avatar](https://img.shields.io/badge/npm-v2.0.4-green)](https://github.com/royalscome/format)
Time formatting tool and number formatting tool

## Install
```
$ npm i @royalscome/format
```

## Usage
```js
import { DateFormat } from "@royalscome/format";


DateFormat.format(new Date(), "yyyy年MM月dd日") // 2021年08月31日

// 具体使用介绍看下表（See the table below for detailed usage）
```

### DateFormat
子类名 | 介绍 | 参数 | 示例
- | - | - | -
format | 格式化日期
