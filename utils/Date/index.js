/*
 * @Description: 时间格式化
 * @Autor: weiyang
 * @Date: 2021-08-31 15:50:57
 * @LastEditors: weiyang
 * @LastEditTime: 2021-08-31 16:40:46
 */
class DateFormat {
  static formatDateWithZero(time) {
    return new Date(time).format("yyyy-MM-dd 00:00:00");
  }

  static formatDateWithLast(time) {
    return new Date(time).format("yyyy-MM-dd 23:59:59");
  }

  static getDate(time = null) {
    time = typeof time === "string" ? time.replace(/-/g, "/").replace(/\./g, "/") : time;
    return time ? new Date(time).format("yyyy-MM-dd") : new Date().format("yyyy-MM-dd");
  }

  static getDateWithDot(time = null) {
    time = typeof time === "string" ? time.replace(/-/g, "/").replace(/\./g, "/") : time;
    return time ? new Date(time).format("yyyy.MM.dd") : new Date().format("yyyy.MM.dd");
  }

  static format(time = null, format = "yyyy年MM月dd日") {
    time = typeof time === "string" ? time.replace(/-/g, "/").replace(/\./g, "/") : time;
    return new Date(time).format(format);
  }

  static getNowYearAndMonth(time = null) {
    return time ? new Date(time).format("yyyy-MM") : new Date().format("yyyy-MM");
  }

  static formatAll(time = "") {
    return time.replace(/年/, "-").replace(/月/, "-").replace(/日/, "-");
  }

  // 当前星期几
  static getWeekDate() {
    const day = new Date().getDay();
    const weeks = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
    const week = weeks[day];
    return week;
  }

  // 当前月份第几周
  static getMonthWeek(time = null) {
    time = typeof time === "string" ? time.replace(/-/g, "/").replace(/\./g, "/") : time;
    const date = time && typeof time === "string" ? new Date(time) : new Date();
    const w = date.getDay();
    const d = date.getDate();
    return Math.ceil((d + 6 - w) / 7);
  }

  // 格式化时间为今天显示具体时间，昨天显示昨天，昨天以前显示日期
  static formatDateToRule(time) {
    time = typeof time === "string" ? time.replace(/-/g, "/").replace(/\./g, "/") : time;
    const now = new Date();
    const nowText = now.format("yyyy.MM.dd");
    const curDate = new Date(time);
    const curDateText = curDate.format("yyyy.MM.dd");
    const yestoday = new Date();
    yestoday.setDate(yestoday.getDate() - 1);
    const yestodayText = yestoday.format("yyyy.MM.dd");
    if (curDateText === nowText) {
      return time.split(" ")[1];
    }
    if (curDateText === yestodayText) {
      return "昨天";
    }
    return curDateText;
  }

  // 根据传入数字可正负,得到日期
  static getDateToNumber(time = null, n) {
    time = typeof time === "string" ? time.replace(/-/g, "/").replace(/\./g, "/") : time;
    const nextDate = time && typeof time === "string" ? new Date(time) : new Date();
    nextDate.setDate(nextDate.getDate() + n);
    return nextDate.format("yyyy-MM-dd");
  }

  // 比较时间大小
  static compareDate(startTime, endTime) {
    startTime = typeof startTime === "string" ? startTime.replace(/-/g, "/").replace(/\./g, "/") : startTime;
    endTime = typeof endTime === "string" ? endTime.replace(/-/g, "/").replace(/\./g, "/") : endTime;
    return new Date(endTime).getTime() >= new Date(startTime).getTime();
  }

  // 时间差
  static getDiffDate(startTime, endTime, fmt = "dd") {
    if (!this.compareDate(startTime, endTime)) return "";
    const diff = new Date(endTime).getTime() - new Date(startTime).getTime();
    const days = Math.floor(diff / (24 * 3600 * 1000));
    // 计算出小时数
    const leave1 = diff % (24 * 3600 * 1000); // 计算天数后剩余的毫秒数
    const hours = Math.floor(leave1 / (3600 * 1000));
    // 计算相差分钟数
    const leave2 = leave1 % (3600 * 1000); // 计算小时数后剩余的毫秒数
    const minutes = Math.floor(leave2 / (60 * 1000));
    // 计算相差秒数
    const leave3 = leave2 % (60 * 1000); // 计算分钟数后剩余的毫秒数
    const seconds = Math.round(leave3 / 1000);
    const o = {
      "d+": days, // 日
      "h+": hours, // 小时
      "m+": minutes, // 分
      "s+": seconds // 秒
    };
    for (const k in o) if (new RegExp(`(${k})`).test(fmt)) fmt = fmt.replace(RegExp.$1, o[k]);
    return fmt;
  }

  static getWeekList(defaultDate = new Date()) {
    let weekArray = [];
    const nowDate = this.format(defaultDate, "yyyy-MM-dd");
    const tempArr = nowDate.split("-");
    const tempDate = this.format(new Date(tempArr[0], tempArr[1], 0), "yyyy-MM-dd"); // 获取传入月份的最后一天，不传默认当前月
    // eslint-disable-next-line no-use-before-define
    const weeks = getCurrentWeek(tempDate); // 获取传入月份的最后一天是第几周，不传默认当前月
    let week = new Date(tempArr[0], tempArr[1], 0).getDay(); // 获取传入月份的最后一天是周几，不传默认当前月
    let tempNowDate = "";
    let laterTempNowDate = "";
    const list = {
      六: 6,
      五: 5,
      四: 4,
      三: 3,
      二: 2,
      一: 1
    };
    const ReverseList = {
      6: "六",
      5: "五",
      4: "四",
      3: "三",
      2: "二",
      1: "一"
    };
    for (let i = list[weeks]; i >= 1; i--) {
      if (week === 0) {
        week = 7;
      }
      if (i === list[weeks]) {
        tempNowDate = this.getDateToNumber(tempDate, -(week - 1));
        laterTempNowDate = tempDate;
      } else {
        const laterDay = tempNowDate.split("-")[2];
        laterTempNowDate = this.getDateToNumber(tempNowDate, -1);
        tempNowDate = this.getDateToNumber(tempNowDate, -7);
        const afterDay = tempNowDate.split("-")[2];
        if (afterDay > laterDay) {
          tempNowDate = `${tempDate.split("-")[0]}-${tempDate.split("-")[1]}-01`;
        }
      }
      const config = {};
      config[ReverseList[i]] = tempNowDate;
      config.laterTempNowDate = laterTempNowDate;
      weekArray.push(config);
    }
    weekArray = weekArray.reverse();
    return weekArray;
  }
}
export {
  DateFormat
}