import { initText, initArc, initCircle, initRect } from './config';

// 加强版本的画笔
export default function (canvas) {

    // 获取canvas2D画笔
    let painter = canvas.getContext("2d");

    // 如果没有针对模糊问题处理
    if (canvas.__had_scale2_canvas__ !== 'YES') {
        canvas.__had_scale2_canvas__ = 'YES';

        let width = canvas.clientWidth,//内容+内边距
            height = canvas.clientHeight;

        // 设置显示大小
        canvas.style.width = width + "px";
        canvas.style.height = height + "px";

        // 设置画布大小（画布大小设置为显示的二倍，使得显示的时候更加清晰）
        canvas.setAttribute('width', width * 2);
        canvas.setAttribute('height', height * 2);

        // 通过缩放实现模糊问题
        painter.scale(2, 2);
    }

    // 默认配置不应该有canvas2D对象已经存在的属性
    // 这里是为了简化或和svg统一接口而自定义的属性
    let config = {
        "font-size": "16", // 文字大小
        "font-family": "sans-serif", // 字体
        "arc-start-cap": "butt", // 弧开始闭合方式
        "arc-end-cap": "butt" // 弧结束闭合方式
    };

    // 画笔
    let enhancePainter = {

        // 属性设置或获取
        "config": function () {
            if (arguments.length === 1) {
                if (typeof arguments[0] !== 'object') return painter[arguments[0]];
                for (let key in arguments[0]) {
                    if (config[key]) config[key] = arguments[0][key];
                    else painter[key] = arguments[0][key];
                }
            } else if (arguments.length === 2) {
                if (config[arguments[0]]) config[arguments[0]] = arguments[1];
                else painter[arguments[0]] = arguments[1];
            }
            return enhancePainter;
        },

        // 文字
        "fillText": function (text, x, y, deg) {
            painter.save();
            initText(painter, config, x, y, deg || 0).fillText(text, 0, 0);
            painter.restore();
            return enhancePainter;
        },
        "strokeText": function (text, x, y, deg) {
            painter.save();
            initText(painter, config, x, y, deg || 0).strokeText(text, 0, 0);
            painter.restore();
            return enhancePainter;
        },

        // 路径
        "beginPath": function () { painter.beginPath(); return enhancePainter; },
        "closePath": function () { painter.closePath(); return enhancePainter; },
        "moveTo": function (x, y) { painter.moveTo(x, y); return enhancePainter; },
        "lineTo": function (x, y) { painter.lineTo(x, y); return enhancePainter; },
        "fill": function () { painter.fill(); return enhancePainter; },
        "stroke": function () { painter.stroke(); return enhancePainter; },

        // 路径 - 贝塞尔曲线
        "quadraticCurveTo": function (cpx, cpy, x, y) {
            painter.quadraticCurveTo(cpx, cpy, x, y); return enhancePainter;
        },
        "bezierCurveTo": function (cp1x, cp1y, cp2x, cp2y, x, y) {
            painter.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y); return enhancePainter;
        },

        // 擦除画面
        "clearn": function (x, y, width, height) { painter.clearRect(x || 0, y || 0, width || canvas.clientWidth, height || canvas.clientHeight); return enhancePainter; },

        // 地址图片
        "toDataURL": function () { return canvas.toDataURL() },

        // image
        "drawImage": function (img, sx, sy, sw, sh, x, y, w, h) { painter.drawImage(img, sx, sy, sw, sh, x, y, w, h); return enhancePainter; },

        // 弧
        "fillArc": function (cx, cy, r1, r2, beginDeg, deg) {
            initArc(painter, config, cx, cy, r1, r2, beginDeg, deg).fill(); return enhancePainter;
        },
        "strokeArc": function (cx, cy, r1, r2, beginDeg, deg) {
            initArc(painter, config, cx, cy, r1, r2, beginDeg, deg).stroke(); return enhancePainter;
        },

        // 圆形
        "fillCircle": function (cx, cy, r) {
            initCircle(painter, cx, cy, r).fill(); return enhancePainter;
        },
        "strokeCircle": function (cx, cy, r) {
            initCircle(painter, cx, cy, r).stroke(); return enhancePainter;
        },

        // 矩形
        "fillRect": function (x, y, width, height) {
            initRect(painter, x, y, width, height).fill(); return enhancePainter;
        },
        "strokeRect": function (x, y, width, height) {
            initRect(painter, x, y, width, height).stroke(); return enhancePainter;
        }

    };

    return enhancePainter;
};
