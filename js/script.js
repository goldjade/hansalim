// html 요소를 참조하는 법
// html 요소 및 이미지, 동영상 사운드 등,
// 모든  요소가 갖춰지면 실행하도록 한다
// window.onload = function () {}은 1번만 작성한다.
window.onload = function () {
  // 펼친 목록 보기 기능
  // 코드 블럭이 같은 기능이 반복이 된다.
  // 기능을 만들어서 써야겠다고 판단함
  //  추가 예정 기능 : 아이콘 바꾸기 추가 필요
  //
  function listToggle(button, list) {
    // 처음에는 목록을 보여주지 않는다. / css에서 처리하는것이 좋음
    list.style.display = "none";
    // click 이벤트가 발행하면 함수를 실행한다.
    button.addEventListener("click", function (event) {
      // 누군지 알아요.
      // 어떤 일(이벤트) 가 일어났는지 종류를 말함
      console.log(event.type);
      // target : 이벤트를 발생시킨 html요소
      // console.log(event.target);
      // currentTaget : 이벤트를 발생시킨 html요소
      // console.log(event.currentTarget);
      // 이벤트를 발생시킨html 태그 종류 파악
      console.log(this.tagName);
      // a 태그인 경우 href 가 작동한다
      // a 태그의 기본동작 (웹브라우저 이동) 막는다
      if (this.tagName === "A") {
        event.preventDefault();
      }
      //  href를 막아버린다
      event.preventDefault();
      // html요소의 css 적용 사항을 파악한다
      const css = getComputedStyle(list).display;
      // display 값을 비교
      if (css === "none") {
        list.style.display = "block";
      } else {
        list.style.display = "none";
      }
    });
  }

  // 더보기 목록
  // 더보기 버튼 저장(button more-menu-bt  id는 # 으로 참조)
  const menuBt = document.getElementById("menu-bt");
  // console.log(menuBt);
  // 더보기 펼침 목록 저장(ul more-menu-list)
  const menuList = document.getElementById("menu-list");
  // console.log(menuList);
  listToggle(menuBt, menuList);
  // 함수값 내용
  // // 더보기 버튼을 클릭해서
  // menuBt.addEventListener("click", function () {
  //   // 참여목록을 보이고 숨긴다.(토글)
  //   // 1.현재 css 값을 알아온다
  //   // menuList.style.display 로는 초기값을 읽지 못함
  //   const css = getComputedStyle(menuList).display;
  //   // console.log(css);
  //   // 2.diplay : none / block  알아낸다
  //   // 3.교체해준다 none -> block  /  block ->none
  //   if (css === "none") {
  //     menuList.style.display = "block";
  //   } else {
  //     menuList.style.display = "none";
  //   }
  // });
  // 참여 목록
  const joinBt = document.getElementById("join-bt");
  // console.log(joinBt);
  const joinList = document.getElementById("join-list");
  // console.log(joinList);
  listToggle(joinBt, joinList);
  // 함수값 내용
  // joinBt.addEventListener("click", function () {
  //   const css = getComputedStyle(joinList).display;
  //   // console.log(css);
  //   if (css === "none") {
  //     joinList.style.display = "block";
  //   } else {
  //     joinList.style.display = "none";
  //   }
  // });
  // 조합원센터 목록
  const centerMore = document.getElementById("center-more");
  // console.log(centerMore);
  const centerList = document.getElementById("center-list");
  listToggle(centerMore, centerList);
  // 함수값 내용
  // centerMore.addEventListener("click", function () {
  //   const css = getComputedStyle(centerList).display;
  //   // console.log(css);
  //   if (css === "none") {
  //     centerList.style.display = "block";
  //   } else {
  //     centerList.style.display = "none";
  //   }
  // });

  // 우측 고정메뉴 top 버튼을 찾아서 저장한다
  const fixTop = document.getElementById("fix-top");
  // console.log(fixTop);
  // 우측 고정 버튼을 클릭한다
  fixTop.addEventListener("click", function () {
    alert("올라갑니다");
  });
  // 스크롤 바를 상단으로 이동시킨다.
};
