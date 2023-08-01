function scrollTo(element, duration) {
    var e = document.documentElement;
    if (e.scrollTop === 0) {
      var t = e.scrollTop;
      ++e.scrollTop;
      e = t + 1 === e.scrollTop-- ? e : document.body;
    }
    scrollToC(e, e.scrollTop, element, duration);
  }
  
  // Element to move, element or px from, element or px to, time in ms to animate
  function scrollToC(element, from, to, duration) {
    if (duration <= 0) return;
    if (typeof from === "object") from = from.offsetTop;
    if (typeof to === "object") to = to.offsetTop;
  
    scrollToX(element, from, to, 0, 1 / duration, 20, easeOutCuaic);
  }
  
  function scrollToX(element, xFrom, xTo, t01, speed, step, motion) {
    if (t01 < 0 || t01 > 1 || speed <= 0) {
      element.scrollTop = xTo;
      return;
    }
    element.scrollTop = xFrom - (xFrom - xTo) * motion(t01);
    t01 += speed * step;
    setTimeout(function () {
      scrollToX(element, xFrom, xTo, t01, speed, step, motion);
    }, step);
  }
  
  function easeOutCuaic(t) {
    t--;
    return t * t * t + 1;
  }
  
  var timer;
  
  const Utils = {
    scrollTo,
    getStd(lang, key, obj) {
      if (!obj && obj !== 0 && obj !== "0") return "";
      if (lang === "tm") return obj[key];
      return obj[key + "_" + lang] || "";
    },
    isInViewport(element) {
      if (!element) return false;
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom - 20 <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right - 20 <=
          (window.innerWidth || document.documentElement.clientWidth)
      );
    },
    invertColor(hex, bw) {
      if (hex.indexOf("#") === 0) {
        hex = hex.slice(1);
      }
      // convert 3-digit hex to 6-digits.
      if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
      }
      if (hex.length !== 6) {
        return "#000000";
      }
      let r = parseInt(hex.slice(0, 2), 16),
        g = parseInt(hex.slice(2, 4), 16),
        b = parseInt(hex.slice(4, 6), 16);
      if (bw) {
        return r * 0.299 + g * 0.587 + b * 0.114 > 186 ? "#000000" : "#FFFFFF";
      }
      // invert color components
      r = (255 - r).toString(16);
      g = (255 - g).toString(16);
      b = (255 - b).toString(16);
      // pad each with zeros and return
      return (
        "#" +
        String(r).padStart(2, "0") +
        String(g).padStart(2, "0") +
        String(b).padStart(2, "0")
      );
    },
  
    getPercentage(sale_price, price) {
      return parseInt(100 - (sale_price / price) * 100);
    },
  
  
    setCookie: (cname, cvalue, exdays) => {
      let d = new Date();
      d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
      let expires = "expires=" + d.toUTCString();
      document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    },
    getCookie: (cname) => {
      let name = cname + "=";
      let decodedCookie = decodeURIComponent(document.cookie);
      let ca = decodedCookie.split(";");
      for (let c of ca) {
        while (c.charAt(0) === " ") c = c.substring(1);
        if (c.indexOf(name) === 0) {
          return c.substring(name.length, c.length);
        }
      }
      return "";
    },
    eraseCookie(name) {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    },
  
    getSession: (key) => {
      let ans;
      if (typeof Storage !== "undefined") {
        ans = sessionStorage.getItem(key);
        try {
          ans = ans ? JSON.parse(decodeURIComponent(ans)) : ans;
        } catch (err) {
          console.log(err);
        }
      }
      return ans;
    },
    setSession: (key, value) => {
      let ans;
      if (typeof Storage !== "undefined") {
        ans = sessionStorage.setItem(
          key,
          encodeURIComponent(JSON.stringify(value))
        );
      }
      return ans;
    },
  
    uuidv4() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
        /[xy]/g,
        function (c) {
          let r = (Math.random() * 16) | 0,
            v = c === "x" ? r : (r & 0x3) | 0x8;
          return v.toString(16);
        }
      );
    },
  
    getItem: (key) => {
      let ans;
      if (typeof Storage !== "undefined") {
        // Retrieve
        ans = localStorage.getItem(key);
      }
      return ans;
    },
    setItem: (key, value) => {
      let ans;
      if (typeof Storage !== "undefined") {
        // Store
        ans = localStorage.setItem(key, value);
      }
      return ans;
    },
  
    getDeviceId() {
      let device_id = this.getItem("device_id") || this.getCookie("device_id");
      if (!device_id) {
        device_id = this.uuidv4();
        this.setItem("device_id", device_id);
        this.setCookie("device_id", device_id, 365);
      }
      return device_id;
    },
  
    offset(el) {
      var rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
    },
  
    moveElementToBasket(image, afterImageLoad) {
      try {
        let main = document.getElementById("afc320936d"),
          endPoint = document.getElementById("k9e7ede"),
          { top, left } = this.offset(image),
          pos = this.offset(endPoint),
          imageRects = image.getBoundingClientRect();
        clearInterval(timer);
        main.style.display = "block";
        main.innerHTML = "";
        main.style.position = "absolute";
        main.style.zIndex = "9999";
        main.style.top = top + "px";
        main.style.left = left + "px";
        main.style.width = imageRects.width + "px";
        main.style.height = imageRects.height + "px";
        const clone = image.cloneNode(true);
        main.appendChild(clone);
        let percent = 0;
        clone.onload = function () {
          afterImageLoad(false);
          timer = setInterval(function () {
            try {
              if (percent > 100) {
                clearInterval(timer);
                main.style.display = "none";
              }
              percent += 2;
              main.style.top = top + ((pos.top - top) * percent) / 100 + "px";
              main.style.left = left + ((pos.left - left) * percent) / 100 + "px";
              main.style.width =
                imageRects.width -
                ((imageRects.width - 30) * percent) / 100 +
                "px";
              main.style.height =
                imageRects.height -
                ((imageRects.height - 30) * percent) / 100 +
                "px";
              main.style.opacity = 1 - percent / 200;
            } catch (err) {
                /* tslint:disable:no-empty */
            }
          }, 10);
        };
      } catch (err) {
        afterImageLoad(false);
      }
    },
  
    dateFormat(date, fstr, utc) {
      utc = utc ? "getUTC" : "get";
      return fstr.replace(/%[YmdHMS]/g, function (m) {
        switch (m) {
          case "%Y":
            return date[utc + "FullYear"](); // no leading zeros required
          case "%m":
            m = 1 + date[utc + "Month"]();
            break;
          case "%d":
            m = date[utc + "Date"]();
            break;
          case "%H":
            m = date[utc + "Hours"]();
            break;
          case "%M":
            m = date[utc + "Minutes"]();
            break;
          case "%S":
            m = date[utc + "Seconds"]();
            break;
          default:
            return m.slice(1); // unknown code, remove %
        }
        // add leading zero if required
        return ("0" + m).slice(-2);
      });
      // Util.dateFormat(new Date(order.created_at), '%Y-%m-%d %H:%M:%S', true)
    },
  
    isPhone(phone = ""){
      return phone.match(/^\+9936[0-9][0-9]{6}$/)
    },
    findNestedCategory(categories, cat_id, lang, placeholder){
      if (categories.length && cat_id){
        const cc = categories.reduce(function(acc, item){
          if (item.cat_id===cat_id){
            return item;
          }
          return (item.children||[]).find(e => e.cat_id===cat_id) || acc;
        })
        return cc ? this.getStd(lang, 'title', cc) : placeholder;
      }
      return placeholder;
    }
  };
  
  export default Utils;