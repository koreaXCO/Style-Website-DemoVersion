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
  




  //하이퍼링크창 KakaoMapAPI(icon)
  document.addEventListener('DOMContentLoaded', function() {
    var searchIcon = document.getElementById('search-icon-api1');
  
    searchIcon.addEventListener('click', function() {
      var width = 600; // 팝업 창의 너비
      var height = 400; // 팝업 창의 높이
      var left = (screen.width / 2) - (width / 2);
      var top = (screen.height / 2) - (height / 2);
  
      window.open(
        'https://apis.map.kakao.com/web/sample/markerWithCustomOverlay/', // 팝업에 표시할 페이지의 URL
        'KakaoMapAPI(icon)', // 팝업 창의 이름
        'width=' + width + ',height=' + height + ',top=' + top + ',left=' + left + ',scrollbars=yes'
      );
    });
  });

  //하이퍼링크창 GoogleMap(그래픽)
  document.addEventListener('DOMContentLoaded', function() {
    var searchIcon = document.getElementById('search-icon-api2');
  
    searchIcon.addEventListener('click', function() {
      var width = 600; // 팝업 창의 너비
      var height = 400; // 팝업 창의 높이
      var left = (screen.width / 2) - (width / 2);
      var top = (screen.height / 2) - (height / 2);
  
      window.open(
        'https://mapsplatform.google.com/resources/blog/webgl-powered-maps-features-now-generally-available/?hl=ko', // 팝업에 표시할 페이지의 URL
        'GoogleMap(그래픽)', // 팝업 창의 이름
        'width=' + width + ',height=' + height + ',top=' + top + ',left=' + left + ',scrollbars=yes'
      );
    });
  });

  //하이퍼링크창 NaverSearchAPI(책검색)
  document.addEventListener('DOMContentLoaded', function() {
    var searchIcon = document.getElementById('search-icon-api3');
  
    searchIcon.addEventListener('click', function() {
      var width = 600; // 팝업 창의 너비
      var height = 400; // 팝업 창의 높이
      var left = (screen.width / 2) - (width / 2);
      var top = (screen.height / 2) - (height / 2);
  
      window.open(
        'https://developers.naver.com/docs/search/tutorial/', // 팝업에 표시할 페이지의 URL
        'NaverSearchAPI(책검색)', // 팝업 창의 이름
        'width=' + width + ',height=' + height + ',top=' + top + ',left=' + left + ',scrollbars=yes'
      );
    });
  });

  //하이퍼링크창 KakaoMapAPI(로드뷰)
  document.addEventListener('DOMContentLoaded', function() {
    var searchIcon = document.getElementById('search-icon-api4');
  
    searchIcon.addEventListener('click', function() {
      var width = 600; // 팝업 창의 너비
      var height = 400; // 팝업 창의 높이
      var left = (screen.width / 2) - (width / 2);
      var top = (screen.height / 2) - (height / 2);
  
      window.open(
        'https://apis.map.kakao.com/web/sample/roadviewCustomOverlay/', // 팝업에 표시할 페이지의 URL
        'KakaoMapAPI(로드뷰)', // 팝업 창의 이름
        'width=' + width + ',height=' + height + ',top=' + top + ',left=' + left + ',scrollbars=yes'
      );
    });
  });

  //하이퍼링크창 NaverQRAPI(QR코드제작)
  document.addEventListener('DOMContentLoaded', function() {
    var searchIcon = document.getElementById('search-icon-api5');
  
    searchIcon.addEventListener('click', function() {
      var width = 600; // 팝업 창의 너비
      var height = 400; // 팝업 창의 높이
      var left = (screen.width / 2) - (width / 2);
      var top = (screen.height / 2) - (height / 2);
  
      window.open(
        'https://developers.naver.com/docs/utils/shortenurl_tutorial/', // 팝업에 표시할 페이지의 URL
        'NaverQRAPI(QR코드제작)', // 팝업 창의 이름
        'width=' + width + ',height=' + height + ',top=' + top + ',left=' + left + ',scrollbars=yes'
      );
    });
  });

  //하이퍼링크창 KakaoMapAPI(원하는정보)
  document.addEventListener('DOMContentLoaded', function() {
    var searchIcon = document.getElementById('search-icon-api6');
  
    searchIcon.addEventListener('click', function() {
      var width = 600; // 팝업 창의 너비
      var height = 400; // 팝업 창의 높이
      var left = (screen.width / 2) - (width / 2);
      var top = (screen.height / 2) - (height / 2);
  
      window.open(
        'https://apis.map.kakao.com/web/sample/customOverlay2/', // 팝업에 표시할 페이지의 URL
        'KakaoMapAPI(원하는정보)', // 팝업 창의 이름
        'width=' + width + ',height=' + height + ',top=' + top + ',left=' + left + ',scrollbars=yes'
      );
    });
  });

  //하이퍼링크창 GPT챗봇API
  document.addEventListener('DOMContentLoaded', function() {
    var searchIcon = document.getElementById('search-icon-api7');
  
    searchIcon.addEventListener('click', function() {
      var width = 600; // 팝업 창의 너비
      var height = 400; // 팝업 창의 높이
      var left = (screen.width / 2) - (width / 2);
      var top = (screen.height / 2) - (height / 2);
  
      window.open(
        'https://platform.openai.com/playground/', // 팝업에 표시할 페이지의 URL
        'GPT챗봇API', // 팝업 창의 이름
        'width=' + width + ',height=' + height + ',top=' + top + ',left=' + left + ',scrollbars=yes'
      );
    });
  });

  //하이퍼링크창 KakaoMapAPI(지도거리계산)
  document.addEventListener('DOMContentLoaded', function() {
    var searchIcon = document.getElementById('search-icon-api8');
  
    searchIcon.addEventListener('click', function() {
      var width = 600; // 팝업 창의 너비
      var height = 400; // 팝업 창의 높이
      var left = (screen.width / 2) - (width / 2);
      var top = (screen.height / 2) - (height / 2);
  
      window.open(
        'https://apis.map.kakao.com/web/sample/calculatePolylineDistance/', // 팝업에 표시할 페이지의 URL
        'KakaoMapAPI(지도거리계산)', // 팝업 창의 이름
        'width=' + width + ',height=' + height + ',top=' + top + ',left=' + left + ',scrollbars=yes'
      );
    });
  });

  //하이퍼링크창 GoogleMap(색지정)
  document.addEventListener('DOMContentLoaded', function() {
    var searchIcon = document.getElementById('search-icon-api9');
  
    searchIcon.addEventListener('click', function() {
      var width = 600; // 팝업 창의 너비
      var height = 400; // 팝업 창의 높이
      var left = (screen.width / 2) - (width / 2);
      var top = (screen.height / 2) - (height / 2);
  
      window.open(
        'https://mapsplatform.google.com/resources/blog/introducing-data-driven-styling/?hl=ko', // 팝업에 표시할 페이지의 URL
        'GoogleMap(색지정)', // 팝업 창의 이름
        'width=' + width + ',height=' + height + ',top=' + top + ',left=' + left + ',scrollbars=yes'
      );
    });
  });

