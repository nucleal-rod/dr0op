import QuickPaper from 'quick-paper';

// 兼容文件
import '@hai2007/polyfill/Promise.js';

// 引入启动界面
import App from './App.paper';

// 引入基础样式
import '@hai2007/style/normalize.css';

// 引入公共样式
import './Styles/style.scss';
import './Styles/api.scss';
import './Styles/course.scss';

document.getElementById('root').innerHTML = "";

// 安装路由
import { loadRouter, goRouter } from './Service/router.config.js';
QuickPaper.prototype.loadRouter = loadRouter; QuickPaper.prototype.goRouter = goRouter;

// 监听浏览器点击了回退按钮
if (window.addEventListener)
    window.addEventListener("popstate", function (e) {
        setTimeout(() => {

            // 主动跳转的时候可以控制是否需要刷新
            if (window.image2d_noRefresh) {
                window.image2d_noRefresh = false;
            } else {
                window.location.reload();
            }

        },10);
    }, false);


//根对象
window.quickPaper = new QuickPaper({

    //挂载点
    el: document.getElementById('root'),

    // 启动QuickPaper
    render: createElement => createElement(App)
});
