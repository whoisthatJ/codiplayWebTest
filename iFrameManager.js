window.ShowWebView = function (url) {
    const iframe = document.getElementById("unityWebView");
    const helper = document.getElementById("help-toggle-btn");

    iframe.src = url;
    iframe.style.display = "block";
    helper.style.display = "flex";
    iframe.style.opacity = "0";
    helper.style.opacity = "0";

    setTimeout(() => {
        iframe.style.opacity = "1";
        helper.style.opacity = "1";
    }, 100);
};

window.CloseWebView = function () {
    const iframe = document.getElementById("unityWebView");
    const helper = document.getElementById("help-toggle-btn");
    const helpContainer = document.getElementById("help-container");

    iframe.style.opacity = "0";
    helper.style.opacity = "0";
    helpContainer.style.display = "none";

    setTimeout(() => {
        iframe.src = "";
        iframe.style.display = "none";
        helper.style.display = "none";
    }, 500);
};

window.HideWebView = function () {
    const iframe = document.getElementById("unityWebView");
    const helper = document.getElementById("help-toggle-btn");

    iframe.style.opacity = "0";
    helper.style.opacity = "0";

    setTimeout(() => {
        iframe.style.display = "none";
        helper.style.display = "none";
    }, 500);
};

window.RestoreWebView = function () {
    const iframe = document.getElementById("unityWebView");
    const helper = document.getElementById("help-toggle-btn");

    iframe.style.display = "block";
    helper.style.display = "flex";
    iframe.style.opacity = "0";
    helper.style.opacity = "0";

    setTimeout(() => {
        iframe.style.opacity = "1";
        helper.style.opacity = "1";
    }, 100);
};
