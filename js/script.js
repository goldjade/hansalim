window.onload = function () {
  // 펼침목록들 보기 기능
  {
    const menuBt = document.getElementById("menu-bt");
    const menuList = document.getElementById("menu-list");
    const joinBt = document.getElementById("join-bt");
    const joinList = document.getElementById("join-list");
    const centerBt = document.getElementById("center-bt");
    const centerList = document.getElementById("center-list");
    const toggleListArr = [menuList, joinList, centerList];
    const toggleBtArr = [menuBt, joinBt, centerBt];
    document.addEventListener("click", function () {
      toggleListArr.forEach(function (item) {
        item.style.display = "none";
      });
      toggleBtArr.forEach(function (item) {
        item.classList.remove("active");
      });
    });
    toggleListArr.forEach(function (item) {
      item.addEventListener("click", function (event) {
        event.stopPropagation();
      });
    });
    function listToggle(버튼, 목록) {
      목록["style"].display = "none";
      버튼.addEventListener("click", function (event) {
        event.stopPropagation();
        toggleBtArr.forEach(function (item) {
          item.classList.remove("active");
        });
        const nowListId = 목록.getAttribute("id");
        const hideArr = toggleListArr.filter(function (item) {
          let id = item.getAttribute("id");
          if (id !== nowListId) {
            return this;
          }
        });
        hideArr.forEach(function (item) {
          item.style.display = "none";
        });
        if (this.tagName === "A") {
          event.preventDefault();
        }
        const css = getComputedStyle(목록).display;
        if (css === "none") {
          목록.style.display = "block";
          this.classList.add("active");
        } else {
          목록.style.display = "none";
          this.classList.remove("active");
        }
      });
    }
    listToggle(menuBt, menuList);
    listToggle(joinBt, joinList);
    listToggle(centerBt, centerList);
  }
  // 위로가기 기능
  {
    const fixTopBt = document.querySelector(".fix-top");
    fixTopBt.addEventListener("click", function () {
      // Anime.js 버전
      const scrollElement =
        window.document.scrollingElement ||
        window.document.body ||
        window.document.documentElement;
      anime({
        targets: scrollElement,
        scrollTop: 0,
        duration: 600,
        easing: "easeInOutQuad",
      });
    });
  }
  // 오늘의 상품 기능
  const 제품 = {
    이름: "콩콩크림빵",
    단위: "1개",
    가격: 1500,
    태그: "인기",
    사진: "a.jpg",
    아이디: "0",
    링크: "#",
  };

  // 오늘의 상품 데이터 보관

  let VISUAL_ARR;
  let visualTag = document.getElementById("data-visual");

  let TODAY_GOOD;
  let todayTag = document.getElementById("data-today");
  let todayTag2 = document.getElementById("data-today2");
  // console.log(todayTag);

  let SALE_GOOD;
  let saleTag = document.getElementById("data-sale");

  let NEW_GOOD;
  let newTag = document.getElementById("data-new");
  let newListTag = document.getElementById("data-new-list");

  let RECOMMEND_GOOD;
  let recommendTag = document.getElementById("data-recommend");

  let POPULAR_ICON;
  let popularIconTag = document.getElementById("data-popular-icon");

  let POPULAR_GOOD;
  let popularShow = 0; // 목록중 0번을 보여준다.
  let popularTag = document.getElementById("data-popular");

  let BANNER_ARR;
  let bannerTag = document.getElementById("data-banner");

  let BRAND_ARR;
  let brandTag = document.getElementById("data-brand");

  let REVIEW_ARR;
  let reviewTag = document.getElementById("data-review");

  let NOTICE_ARR;
  let noticeTag = document.getElementById("data-notice");

  let GOODNEWS_ARR;
  let goodNewsTag = document.getElementById("data-goodnews");

  let SEASON_ARR;
  let seasonTag = document.getElementById("data-season");

  // 비주얼 화면 출력기능
  function showVisual() {
    let html = "";

    VISUAL_ARR.forEach(function (item) {
      const tag = `
  <div class="swiper-slide">
  <div class="visual-slide-page">
    <a href="${item.link}">
      <img src="images/${item.pic}" alt="${item.name}" />
    </a>
  </div>
</div>
  `;
      html += tag;
    });

    visualTag.innerHTML = html;

    // 비주얼 슬라이드 기능
    var swVisual = new Swiper(".sw-visual", {
      loop: true,
      navigation: {
        nextEl: ".visual-prev",
        prevEl: ".visual-next",
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".visual-pg",
        type: "fraction",
      },
    });

    // 비주얼 슬라이드 멈춤 기능
    const swVisualPlay = document.querySelector(".visual-play");
    swVisualPlay.addEventListener("click", function () {
      // 현재 active 클래스가 있는지 없는지 판단하고
      // 기능을 설정한다
      if (swVisualPlay.classList.contains("active")) {
        // 새로시작
        swVisual.autoplay.start();
        swVisualPlay.classList.remove("active");
      } else {
        swVisual.autoplay.stop();
        swVisualPlay.classList.add("active");
      }
    });
  }

  // 오늘의 상품 화면 출력 기능
  function showTodayGood() {
    // console.log(TODAY_GOOD);
    let htmlTop = "";
    let htmlBottom = "";
    // for(let i = 0; i < TODAY_GOOD.length; i++){
    //   // html 만든다.
    // }
    // TODAY_GOOD.forEach(function (item) {
    //   // console.log(item);
    //   let tag = `
    //     <div class="good-box">
    //         <!-- 제품이미지 -->
    //         <a href="${item.link}" class="good-img">
    //           <img src="images/${item.pic}" alt="${item.name}" />
    //           <span class="good-type">${item.tag}</span>
    //         </a>
    //         <!-- 제품정보 -->
    //         <a href="${item.link}" class="good-info">
    //           <em>${item.name}</em>(<em>${item.unit}</em>)
    //         </a>
    //         <!-- 제품가격 -->
    //         <a href="${item.link}" class="good-info-price">${item.price}<em>원</em></a>
    //         <!-- 장바구니 -->
    //         <button class="good-add-cart"></button>
    //     </div>
    //   `;
    //   // console.log(tag);
    //   // html = html + tag;
    //   html += tag;
    // });
    // console.log(html);

    // 조건에 맞는 배열 만들기
    // 인덱스 0~3 까지 배열만들기
    const topArr = TODAY_GOOD.filter(function (item, index) {
      // console.log(item, index);
      if (index < 4) {
        return item;
      }
    });
    // console.log(topArr);
    topArr.forEach(function (item) {
      let tag = `
        <div class="good-box">
            <!-- 제품이미지 -->
            <a href="${item.link}" class="good-img">
              <img src="images/${item.pic}" alt="${item.name}" />
              <span class="good-type">${item.tag}</span>
            </a>
            <!-- 제품정보 -->
            <a href="${item.link}" class="good-info">
              <em>${item.name}</em>(<em>${item.unit}</em>)
            </a>
            <!-- 제품가격 -->
            <a href="${item.link}" class="good-info-price">${item.price}<em>원</em></a>
            <!-- 장바구니 -->
            <button class="good-add-cart"></button>
        </div>
      `;

      htmlTop += tag;
    });

    // 인덱스 4~7 까지 배열만들기
    const botArr = TODAY_GOOD.filter(function (item, index) {
      if (index > 3) {
        return item;
      }
    });
    // htmlBottom 생성하기
    botArr.forEach(function (item) {
      let tag = `
      <div class="good-box">
          <!-- 제품이미지 -->
          <a href="${item.link}" class="good-img">
            <img src="images/${item.pic}" alt="${item.name}" />
            <span class="good-type">${item.tag}</span>
          </a>
          <!-- 제품정보 -->
          <a href="${item.link}" class="good-info">
            <em>${item.name}</em>(<em>${item.unit}</em>)
          </a>
          <!-- 제품가격 -->
          <a href="${item.link}" class="good-info-price">${item.price}<em>원</em></a>
          <!-- 장바구니 -->
          <button class="good-add-cart"></button>
      </div>
      `;

      htmlBottom += tag;
    });

    todayTag.innerHTML = htmlTop;
    todayTag2.innerHTML = htmlBottom;
  }
  // 알뜰 상품 화면 출력 기능
  function showSaleGood() {
    let html = `
    <div class="swiper sw-sale">
      <div class="swiper-wrapper">
    `;
    SALE_GOOD.forEach(function (item) {
      let tag = `
      <div class="swiper-slide">
        <div class="good-box">
            <!-- 제품이미지 -->
            <a href="${item.link}" class="good-img">
              <img src="images/${item.pic}" alt="${item.name}" />
              <span class="good-type">${item.tag}</span>
            </a>
            <!-- 제품정보 -->
            <a href="${item.link}" class="good-info">
              <em>${item.name}</em>(<em>${item.unit}</em>)
            </a>
            <!-- 제품가격 -->
            <a href="${item.link}" class="good-info-price">${item.price}<em>원</em></a>
            <!-- 장바구니 -->
            <button class="good-add-cart"></button>
        </div>
      </div>
      `;

      html += tag;
    });
    html += `
      </div>
    </div>
    `;
    saleTag.innerHTML = html;
    const swiper = new Swiper(".sw-sale", {
      slidesPerView: 3,
      spaceBetween: 16,
      slidesPerGroup: 3,
      pagination: {
        el: ".sale .slide-pg",
        type: "fraction",
      },
      navigation: {
        prevEl: ".sale .slide-prev",
        nextEl: ".sale .slide-next",
      },

      //
    });
  }
  // 신상품 화면 출력 기능
  function showNewGood() {
    // 첫번째 출력 자료
    let obj = NEW_GOOD[0];
    let newGoodFirst = `
      <a href="${obj.link}" class="new-img">
        <img src="images/${obj.pic}" alt="${obj.title}" />
      </a>
      <a href="${obj.link}" class="new-title">${obj.title}</a>
      <a href="${obj.link}" class="new-txt">${obj.txt}</a>
    `;
    newTag.innerHTML = newGoodFirst;
    // 나머지 출력 1~4번
    let html = "";
    NEW_GOOD.forEach(function (item, index) {
      let tag = "";
      // 0 번은 출력했으므로
      if (index !== 0) {
        tag = `
          <div class="new-box">
            <a href="${item.link}" class="new-box-img">
              <img src="images/${item.pic}" alt="${item.title}" />
            </a>
            <a href="${item.link}" class="new-box-title">
              ${item.title}
            </a>
          </div>
        `;
      }
      html += tag;
    });

    newListTag.innerHTML = html;
  }
  // 추천 상품 화면 출력 기능
  function showRecommendGood() {
    let html = `
    <div class="swiper sw-recommend">
    <div class="swiper-wrapper">
    `;

    RECOMMEND_GOOD.forEach(function (item) {
      let tag = `
      <div class="swiper-slide">
        <div class="good-box">
          <!-- 제품이미지 -->
          <a href="${item.link}" class="good-img">
            <img src="images/${item.pic}" alt="${item.name}" />
            <span class="good-type">${item.tag}</span>
          </a>
          <!-- 제품정보 -->
          <a href="${item.link}" class="good-info">
            <em>${item.name}</em>(<em>${item.unit}</em>)
          </a>
          <!-- 제품가격 -->
          <a href="${item.link}" class="good-info-price">${item.price}<em>원</em></a>
          <!-- 장바구니 -->
          <button class="good-add-cart"></button>
        </div>
        </div>

      `;
      html += tag;
    });
    html += `
    </div>
    </div>
    `;

    recommendTag.innerHTML = html;

    const swiper = new Swiper(".sw-recommend", {
      slidesPerView: 3,
      spaceBetween: 16,
      slidesPerGroup: 3,
      pagination: {
        el: ".recommend .slide-pg",
        type: "fraction",
      },
      navigation: {
        prevEl: ".recommend .slide-prev",
        nextEl: ".recommend .slide-next",
      },

      //
    });
  }
  // 만약에 목록의 개수가 slidesPerView 보다 적으면
  // 1 / 1 출력한다.
  // 0 / 0
  // .recommend .slide-pg 글자를 출력
  // const sg = document.querySelector(".recommend .slide-pg");
  // sg.style.display = "block";
  // if (RECOMMEND_GOOD.length == 0) {
  //   sg.innerHTML = "0/0";
  // } else if (RECOMMEND_GOOD.length < swRecommend.params.slidesPerView) {
  //   sg.innerHTML = "1/1";
  // }
  // 인기 상품 아이콘 출력 기능
  // 인기 상품 아이콘 출력 기능
  function showPopularIcon() {
    let html = `
    <div class="swiper sw-icon">
      <div class="swiper-wrapper">
  `;
    // 데이터처리
    POPULAR_ICON.forEach(function (item) {
      const tag = `
      <div class="swiper-slide">
        <a href="${item.link}">
          <span
            class="popular-cate-icon"              
            style="
              background: url('images/${item.icon}') no-repeat;
              background-position: 0px 0px;
            "
          ></span>
          <span class="popular-cate-name">${item.txt}</span>
        </a>
      </div>
    `;

      html += tag;
    });

    html += `
      </div>
    </div>
  `;

    // html 이 화면에 배치하고 나야 js로 참조할 수있다.
    popularIconTag.innerHTML = html;

    const swIcon = new Swiper(".sw-icon", {
      slidesPerView: 7,
      slidesPerGroup: 7,
      spaceBetween: 10,
      navigation: {
        nextEl: ".popular-slide-next",
        prevEl: ".popular-slide-prev",
      },
    });
    // html에 배치가 되었으몇 찾을수 있다
    // a 태그 14개를 찾아야 해서 querySelectorAll 을 이용함
    // querySelectorAll은 배열 [] 을 리턴한다
    const tag = document.querySelectorAll(".popular-slide a");
    // 찾아서 저장한 배열의 각 a 태그에 기능을 준다
    // forEach가  for 문 보다 적용하기가 수월
    console.log(tag);
    tag.forEach(function (item) {
      // 현재 item 에는 a 태그가 하나씩 순차적으로 대입된다.
      // mouseover, mouseout 의 콜백 적용
      item.addEventListener("mouseover", function () {
        // a 태그 내부의 아이콘 클래스, 즉 .popular-cate-icon 찾는다.
        const spanTag = this.querySelector(".popular-cate-icon");
        // style 변경을 한다.
        spanTag.style.backgroundPositionY = "-64px";
      });
      item.addEventListener("mouseout", function () {
        const spanTag = this.querySelector(".popular-cate-icon");
        spanTag.style.backgroundPositionY = "0px";
      });
      // 클릭을 하면 버튼 (.popular-more)의 글자를
      // 클릭된 타이틀의 글자로 변경 한다.
      item.addEventListener("click", function (event) {
        // a태그 이므로 href 가 적용되 웹브라우저 갱신을 막아야함.
        event.preventDefault();
        const bt = document.querySelector(".popular-more");
        const title = this.querySelector(".popular-cate-name");

        console.log(title.innerHTML);
        bt.innerHTML = `${title.innerHTML} 물품 더보기 `;
      });
    });
  }
  // 인기 상품 화면 출력 기능
  function showPopularGood() {
    let html = "";
    let popCate = "populargood-" + (popularShow + 1);
    POPULAR_GOOD[popCate].forEach(function (item) {
      let tag = `
        <div class="good-box">
          <!-- 제품이미지 -->
          <a href="${item.link}" class="good-img">
            <img src="images/${item.pic}" alt="${item.name}" />
            <span class="good-type">${item.tag}</span>
          </a>
          <!-- 제품정보 -->
          <a href="${item.link}" class="good-info">
            <em>${item.name}</em>(<em>${item.unit}</em>)
          </a>
          <!-- 제품가격 -->
          <a href="${item.link}" class="good-info-price">${item.price}<em>원</em></a>
          <!-- 장바구니 -->
          <button class="good-add-cart"></button>
        </div>
      `;
      html += tag;
    });
    popularTag.innerHTML = html;
  }
  // 배너 화면 출력 기능
  function showBanner() {
    let html = `
    <div class="swiper sw-banner">
              <div class="swiper-wrapper">
    `;

    BANNER_ARR.forEach(function (item) {
      const tag = ` 
      <div class="swiper-slide">
      <a href="${item.link}">
        <img src="images/${item.image}" alt="${item.title}" />
      </a>
      </div>
      `;
      html += tag;
    });
    html += `
    </div>
    </div>
    `;
    bannerTag.innerHTML = html;

    const swiper = new Swiper(".sw-banner", {
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      slidesPerView: 2,
      spaceBetween: 0,
      navigation: {
        prevEl: ".banner .banner-slide-prev",
        nextEl: ".banner .banner-slide-next",
      },

      //
    });
  }
  // 브랜드 화면 출력 기능
  function showBrand() {
    let html = `
    <div class="swiper sw-brand">
    <div class="swiper-wrapper">
    `;
    BRAND_ARR.forEach(function (item) {
      const tag = `      
      <div class="swiper-slide">
      <div class="brand-box">
        <a href="${item.link}">
          <img src="images/${item.image}" alt="${item.id}" />
          <p>${item.title}</p>
          <ul class="brand-info clearfix">
            <li>
              <span class="brand-info-title">${item.infotitle}</span>
              <span class="brand-info-title-value">${item.infovalue}</span>
            </li>
            <li>
              <span class="brand-info-title">${item.infotitle2}</span>
              <span class="brand-info-title-value">${item.infovalue2}</span>
            </li>
          </ul>
        </a>
        </div>
      </div>
      `;
      html += tag;
    });
    html += `
    </div>
    </div>
    `;
    brandTag.innerHTML = html;
    const swiper = new Swiper(".sw-brand", {
      slidesPerView: 3,
      spaceBetween: 16,
      slidesPerGroup: 1,
      pagination: {
        el: ".brand .slide-pg",
        type: "fraction",
      },
      navigation: {
        prevEl: ".brand .slide-prev",
        nextEl: ".brand .slide-next",
      },

      //
    });
  }
  // 리뷰 화면 출력 기능
  function showReview() {
    let html = `
    <div class="swiper sw-review">
    <div class="swiper-wrapper">
    
    `;
    // 데이터 처리
    REVIEW_ARR.forEach(function (item) {
      const tag = `
      <div class="swiper-slide">
      <div class="review-box">
      <a href="${item.link}">
        <div class="review-box-desc">
          <span class="review-box-title">
          ${item.title}
          </span>
          <span class="review-box-star"> ${item.star + ""} </span>
          <span class="review-box-img">
            <img src="images/${item.pic}" alt="${item.title}" />
          </span>
        </div>
        <p class="review-box-txt">
        ${item.txt}
        </p>
        <span class="review-box-user"> ${item.user} ( ${item.shop} ) </span>
      </a>
    </div>
    </div>
      `;
      html += tag;
    });
    html += `
    </div>
    </div>
    `;
    reviewTag.innerHTML = html;
    const swiper = new Swiper(".sw-review", {
      slidesPerView: 3,
      spaceBetween: 16,
      slidesPerGroup: 3,
      pagination: {
        el: ".review .slide-pg",
        type: "fraction",
      },
      navigation: {
        prevEl: ".review .slide-prev",
        nextEl: ".review .slide-next",
      },
      //
    });
  }
  // 공지사항 화면 출력 기능
  function showNotice() {
    let html = "";
    // 데이터 갱신
    NOTICE_ARR.forEach(function (item) {
      const tag = `
        <li>
          <a href="${item.link}">
            <span>${item.title}</span><em>${item.date}</em>
          </a>
        </li>
      `;
      html += tag;
    });
    noticeTag.innerHTML = html;
  }
  // 물품소식 화면 출력 기능
  function showGoodNews() {
    let html = "";
    // 데이터 처리
    GOODNEWS_ARR.forEach(function (item) {
      const tag = `
      <li>
        <a href="${item.link}">
          <span>${item.title}</span><em>${item.date}</em>
        </a>
      </li>
      `;
      html += tag;
    });

    goodNewsTag.innerHTML = html;
  }
  // 시즌 화면 출력기능
  function showSeason() {
    let html = "";
    SEASON_ARR.forEach(function (item, index) {
      const tag = `
      <li>
        <div class="season-good clearfix">
          <input
            type="checkbox"
            id="ch${index}"
            class="season-good-check"
            checked
          />
          <label for="ch${index}" class="season-label"> ${item.title} </label>
          <a href="${item.link}" class="season-good-img">
            <img src="images/${item.pic}" alt="${item.title}" />
          </a>
          <p class="season-good-info">
            <a href="${item.link}" class="season-good-title">${item.title}</a>
            <a href="${item.link}" class="season-good-price"><em>${item.price}</em>원</a>
          </p>
        </div>
      </li>
      `;
      html += tag;
    });
    seasonTag.innerHTML = html;
  }

  // data.json 을 로딩
  const xhttp = new XMLHttpRequest();
  // 파일이 모두 불러들여졌는지 검사하고
  // State : Response 불러들이고 있는 상태
  xhttp.onreadystatechange = function (event) {
    const req = event.target;
    if (req.readyState === XMLHttpRequest.DONE) {
      console.log("데이터 다 불러들였지롱");
      console.log("자료를 정리하자");
      console.log("html 배치하자");
      // 불러온 데이터 확인해 보자.
      // 글자 즉 "" 로 전달이된다.
      const str = req.response;
      // console.log(str);
      // console.log(typeof str);
      // 글자로 온 데이터를 객체로 변환
      // 글자가 json 규칙대로 만들어진 문자열이다.
      // 그러므로 json 글자를 객체!!!!! 로 변환하여서 활용한다.
      let obj = JSON.parse(str);
      // console.log(obj);
      // console.log(typeof obj);
      VISUAL_ARR = obj.visual;
      TODAY_GOOD = obj.todaygood;
      SALE_GOOD = obj.salegood;
      NEW_GOOD = obj.newgood;
      RECOMMEND_GOOD = obj.recommendgood;
      POPULAR_ICON = obj.popularicon;
      POPULAR_GOOD = obj.populargood;
      BANNER_ARR = obj.banner;
      BRAND_ARR = obj.brand;
      REVIEW_ARR = obj.review;
      NOTICE_ARR = obj.notice;
      GOODNEWS_ARR = obj.goodnews;
      SEASON_ARR = obj.season;
      // 비주얼 화면에 배치
      showVisual();
      // 오늘의 상품을 화면에 배치한다.
      showTodayGood();
      // 할인 상품을 화면에 배치한다.
      showSaleGood();
      // 신상품을 화면에 배치한다.
      showNewGood();
      // 추천 상품을 화면에 배치한다.
      showRecommendGood();
      // 인기상품 아이콘을 화면에 배치
      showPopularIcon();
      // 인기 상품을 화면에 배치한다.
      showPopularGood();
      // 배너목록을 화면에 배치한다.
      showBanner();
      // 브랜드목록을 화면에 배치한다.
      showBrand();
      // 리뷰목록을 화면에 배치한다.
      showReview();
      // 공지사항목록을 화면에 배치한다.
      showNotice();
      // 물품소식목록을 화면에 배치한다.
      showGoodNews();
      // 시즌 목록을 화면에 배치한다.
      showSeason();
    }
  };

  // 자료를 호출한다.
  console.log("자료를 가져온다.");

  xhttp.open("GET", "data.json");
  // 웹브라우저 기능 실행 요청
  xhttp.send();
};
