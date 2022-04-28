/**
 * index.js
 */
window.onload = () => {
    const text = document.querySelector('.bio-text');

    // 文本
    const contentArray = ["中国小动物开发社群", "Furry Developers in China"];
    let index = 0;

    // 颜文字
    const emotionArray = ["(*/ω＼*)", "( •̀ ω •́ )y", "( •̀ .̫ •́ )✧", "ヽ(＊>∇<)ﾉ", "ฅ"];
    let eIndex = 0;

    // 变向
    let change = true;

    // 拼接字符串
    let i = 0;
    let tempStr = contentArray[0] + "  " + emotionArray[0];

    setInterval(() => {

        if (change) {
            text.innerHTML = tempStr.slice(0, ++i);
        } else {
            if (i <= 0) {
                text.innerHTML = "_";
                i--;
            } else {
                text.innerHTML = tempStr.slice(0, i--);
            }
        }

        if (i == tempStr.length + 10) {
            change = false;
        } else if (i < 0) {
            i = 0;
            change = true;
            index++;
            if (index >= contentArray.length) {
                text.innerHTML = "_";
                index = 0;
            }
            eIndex++;
            if (eIndex >= emotionArray.length) {
                eIndex = 0;
            }
            tempStr = contentArray[index] + "  " + emotionArray[eIndex];
        }

    }, 100)
}


var styleTitle1 = `
font-size: 20px;
font-weight: 600;
color: rgb(244,167,89);
`
var styleTitle2 = `
font-style: oblique;
font-size:14px;
color: rgb(244,167,89);
font-weight: 400;
`
var styleContent = `
color: rgb(30,152,255);
`

/* 内容代码 */
var title1 = '🌈 FurDevsCN '
var title2 = '中国小动物开发社群'

// => 读取配置型（在配置文件里配置这些会变动的网址）
var offiUrl = 'https://furdevs.cn'
var content = `
版 本 号：1.0.0    
欸？你发现了一个彩蛋？

🏠官网:  ${offiUrl}
`
console.log(`%c${title1} %c${title2}
%c${content}`, styleTitle1, styleTitle2, styleContent)