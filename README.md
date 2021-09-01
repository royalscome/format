<!--
 * @Description: 
 * @Autor: weiyang
 * @Date: 2021-08-31 15:05:56
 * @LastEditors: weiyang
 * @LastEditTime: 2021-09-01 09:34:46
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
format | 格式化日期 | (time=null,format="yyyy年MM月dd日"),time可传时间戳，标准时间格式，format为想获得的时间格式 | DateFormat.format(new Date(), "yyyy年MM月dd日") // 2021年08月31日
formatDateWithZero | 将日期格式化到当天零时 | (time) | DateFormat.formatDateWithZero(new Date(), "yyyy年MM月dd日") // 2021年08月31日 00:00:00
formatDateWithLast | 将日期格式化到当天结束 | (time) | DateFormat.formatDateWithLast(new Date(), "yyyy年MM月dd日") // 2021年08月31日 23：59：59
getDate | 将非标准格式日期转换为标准时间格式 | (time) | DateFormat.getDate("2021.08.31") // 2021-08-31
getDateWithDot | 将标准时间格式转换为.形式 | (time) | DateFormat.getDateWithDot("2021-08-31") // 2021.08.31
getNowYearAndMonth | 获取当前年和月 | (time) | DateFormat.getNowYearAndMonth(new Date()) // 2021-8
getWeekDate | 获取当前星期几 | 无 | DateFormat.getWeekDate() // 星期三
getMonthWeek | 获取当前月份的第几周 | (time) | 无
formatDateToRule | 格式化时间为今天显示具体时间，昨天显示昨天，昨天以前显示日期 | (time) | 具体看介绍
getDateToNumber | 根据传入数字可正负,得到日期 | (time=null,n) | DateFormat.getDateToNumber(new Date(),-1) // 2021-08-30
compareDate | 比较时间大小 | (startTime, endTime) | 具体使用看介绍
getDiffDate | 计算时间差 | (startTime, endTime, fmt = "dd") | 具体使用看介绍


