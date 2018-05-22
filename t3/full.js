'use strict';

(function () {
    var c = document.createElement('div');
    var b = document.createElement('a');
    var x = document.createElement('a');
    b.href = "https://www.batonrougemitsubishi.com/get-pre-approved.htm";
    c.className = "c";
    b.className = "b";
    x.className = "x";
    b.innerText = "GET APPROVED NOW";
    x.innerText = "x";
    c.appendChild(b);
    c.appendChild(x);
    x.addEventListener('click', function () {
        c.remove();
        document.querySelector('.page-header').style.transform = 'translateY(0)';
        document.querySelector('.navbar').style.transform = 'translateY(0)';
    });
    setTimeout(function () {
        if (document.querySelector('body')) {
            document.querySelector('body').appendChild(c);
        }
    }, 1000);
    var css = 'div.c{\n        position:fixed;\n        top:0;\n        left:0;\n        background-color: #d80003;\n        width:100%;\n        display:flex;\n        justify-content:center;\n        align-items:center;\n        height:70px;\n        font-family:tahoma, serif;\n        }\n        a.b{\n        font-size:24px;\n        padding:5px 20px;\n        border:3px solid #fff;\n        background:linear-gradient(#f09091,#d80003);\n        position:relative;\n        }\n        a.b::after{\n        content:\'\';\n        z-index:-1;\n        width:100%;\n        height:100%;\n        top:0;\n        left:0;\n        background:#fff;\n        display:block;\n        position:absolute;\n        animation: b 2s ease-out infinite;\n        }\n        a.x{\n        position:absolute;\n        top:10px;\n        right:5px;\n        font-size: 16px;\n        width:20px;\n        height:20px;\n        border-radius:50%;\n        border:2px solid #fff;\n        text-align:center;\n        line-height:14px;\n        }\n        div.c a,div.c a:hover{\n            text-decoration:none;\n            color:white;\n            cursor:pointer;\n        }\n        @keyframes b {\n        from{\n            transform: scale(1);\n            opacity:1;\n        }\n        to{\n            transform: scale(1.2,2);\n            opacity:0;\n        }\n        }';
    head = document.head || document.getElementsByTagName('head')[0], style = document.createElement('style');
    style.type = 'text/css';
    if (style.styleSheet) {
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));
    }
    head.appendChild(style);
    //custom code for royal mitsubishi
    document.querySelector('.page-header').style.transform = 'translateY(70px)';
    document.querySelector('.navbar').style.transform = 'translateY(70px)';
})();