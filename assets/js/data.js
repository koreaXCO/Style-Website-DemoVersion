//팝업창
document.addEventListener('DOMContentLoaded', function() {
    var searchIcon = document.getElementById('search-icon');
  
    searchIcon.addEventListener('click', function() {
      var width = 600; // 팝업 창의 너비
      var height = 400; // 팝업 창의 높이
      var left = (screen.width / 2) - (width / 2);
      var top = (screen.height / 2) - (height / 2);
  
      window.open(
        'popup.html', // 팝업에 표시할 페이지의 URL
        'popupWindow', // 팝업 창의 이름
        'width=' + width + ',height=' + height + ',top=' + top + ',left=' + left + ',scrollbars=yes'
      );
    });
  });
  
  //하이퍼링크창
  document.addEventListener('DOMContentLoaded', function() {
    var searchIcon = document.getElementById('search-icon-api');
  
    searchIcon.addEventListener('click', function() {
      var width = 600; // 팝업 창의 너비
      var height = 400; // 팝업 창의 높이
      var left = (screen.width / 2) - (width / 2);
      var top = (screen.height / 2) - (height / 2);
  
      window.open(
        'https://developers.naver.com/docs/utils/shortenurl_tutorial/#%EB%8B%A8%EC%B6%95-url-api-%ED%8A%9C%ED%86%A0%EB%A6%AC%EC%96%BC', // 팝업에 표시할 페이지의 URL
        'kakao', // 팝업 창의 이름
        'width=' + width + ',height=' + height + ',top=' + top + ',left=' + left + ',scrollbars=yes'
      );
    });
  });