/*window.addEventListener("resize", sclshrot);
function sclshrot() {
    if (window.innerWidth <= 1000) {
        const ResNewsTAG = document.getElementById("NewsCardList");
        ResNewsTAG.classList.remove("row-cols-md-2");
        ResNewsTAG.classList.add("row-cols-md-1");
        const ResNewsCardTAG = document.getElementById("NewsCard");
        ResNewsCardTAG.style.maxwidth = "400px";
    }
    if (window.innerWidth > 1000) {

    }
}*/

/*
// 當頁面加載完成後，隱藏 loading 動畫並顯示內容
document.addEventListener("DOMContentLoaded", function () {
    //var loadingOverlay = document.getElementById("loading");
    var content = document.querySelector(".content");

    // 隱藏 loading 動畫並顯示內容
    //loadingOverlay.style.display = "none";
    content.style.display = "block";
});
*/
window.onload = function () {
    document.getElementById("loading").style.display = "none";  // 隱藏加載提示
    document.getElementById("content").style.display = "block"; // 顯示頁面內容


};

//彈窗
/*
    window.onload = function() {
        var MessageModal1 = new bootstrap.Modal(document.getElementById('mModal1'), {
        keyboard:6 false  
        });
        MessageModal1.show();  
    };

    */
console.log(localStorage.getItem('hideAd'));

 window.onload = function() {
        // 檢查 localStorage 中是否有設置過 "hideAd"
    var hideAd = localStorage.getItem('hideAd');

    // 如果 "hideAd" 為 null 或 'false'，顯示廣告
    if (!hideAd) {
        var MessageModal1 = new bootstrap.Modal(document.getElementById('mModal1'), {keyboard: false});
         MessageModal1.show();
    }
     
    // 監聽 '不再顯示廣告' 的勾選框
    document.getElementById('flexCheckIndeterminate').addEventListener('change', function() {
      if (this.checked) {
        localStorage.setItem('hideAd', 'true');
      }
      else { localStorage.removeItem('hideAd'); }

    });
}




// 顯示第一組輪播圖
document.getElementById('switchToFirstCarousel').addEventListener('click', function () {
    document.getElementById('NewsSlide1').style.display = 'block';
    document.getElementById('NewsSlide2').style.display = 'none';
});

// 顯示第二組輪播圖
document.getElementById('switchToSecondCarousel').addEventListener('click', function () {
    document.getElementById('NewsSlide1').style.display = 'none';
    document.getElementById('NewsSlide2').style.display = 'block';
});
