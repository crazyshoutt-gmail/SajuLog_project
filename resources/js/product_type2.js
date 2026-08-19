
/**
 * 리스트 렌더링 함수 (1-3번 공개, 4번~ 잠금)
 */
// function renderExplains() {
//     const container = document.querySelector('.result_explainList');
//     if (!container) return;

//     container.innerHTML = ''; 

//     const lastIndex = sajuExplains.length - 1; // 마지막 인덱스 계산

//     sajuExplains.forEach((item, index) => {
//         const card = document.createElement('div');
        
//         if (index < 3) {
//             card.className = 'result_explainCard_match';
//             card.innerHTML = `
//                 <div class="result_explainCard_match_titleBox" onclick="toggleExplain(${index}, this)">
//                     <p class="result_explainCard_match_title">${item.title}</p>
//                     <div class="result_explain_toggleBtn">
//                         <div></div>
//                         <div class="result_explain_toggleBtn2"></div>
//                     </div>
//                 </div>
//                 <div class="result_explainCard_match_txt">
//                     <p>${item.content}</p>
//                 </div>
//             `;
//         } 
        
//         else {
//             card.className = 'result_explainCard_match';
//             card.innerHTML = `
//                 <div class="result_explainCard_match_titleBox" onclick="toggleExplain(${index}, this)">
//                     <p class="result_explainCard_match_title">${item.title}</p>
//                     <div class="result_explain_toggleBtn">
//                         <div></div>
//                         <div class="result_explain_toggleBtn2"></div>
//                     </div>
//                 </div>
//                 <div class="result_explainCard_match_txt">
//                     <div class="result_lockBox">
//                         <img src="https://land.withusmk.co.kr/assets/saju/resources/img/result/result_lockBox.webp" alt="">
//                         <div class="result_obBox">
//                             <img src="https://land.withusmk.co.kr/assets/saju/resources/img/result/result_lock.webp" alt="">
//                             <div class="result_lockBtnBox">
//                                 <div style="margin-bottom: 3%;" class="js_result_allTxt" onclick="unlockAll()">
//                                     <p>2,900원 결제 후 전부보기</p>
//                                     <span>2,900원 결제하면 모든 항목이 오픈됩니다.</span>
//                                 </div>
//                                 <div class="js_result_oneShare" onclick="unlockOne(${index}, this)">
//                                     <p>친구에게 공유하고 하나만 보기</p>
//                                     <span>2명의 친구에게 사주로그 공유하면 하나의 항목이 오픈됩니다.</span>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             `;
//         }
        
//         container.appendChild(card);
//     });
// }

// /**
//  * [공유] 클릭한 해당 리스트 하나만 개별 공개
//  */
// function unlockOne(index, element) {
//     // 1. 필요한 요소 찾기
//     const card = element.closest('.result_explainCard_match');
//     const cardTxt = card.querySelector('.result_explainCard_match_txt');
//     const cardTitleBox = card.querySelector('.result_explainCard_match_titleBox');
//     const content = sajuExplains[index].content;

//     // 2. 잠금 박스 삭제 및 내용 삽입
//     cardTxt.innerHTML = ''; 
//     const pTag = document.createElement('p');
//     pTag.textContent = content;
//     cardTxt.appendChild(pTag);

//     // 3. 타이틀 박스에 클릭 이벤트(토글) 부여 (이제 잠금이 풀렸으니 자유롭게 여닫기 가능)
//     cardTitleBox.setAttribute('onclick', `toggleExplain(${index}, this)`);
    
//     // 4. 리스트 상태 유지
//     // 이미 'on' 클래스가 붙어 열려있는 상태이므로, toggleExplain을 호출하지 않고
//     // 열린 상태를 강제로 유지합니다.
//     card.classList.add('on'); 
// }

// /**
//  * [결제] 가려진 모든 리스트 한꺼번에 공개
//  */
// function unlockAll() {
//     const allCards = document.querySelectorAll('.result_explainCard_match');
    
//     allCards.forEach((card, index) => {
//         // 4번째 리스트(index 3)부터 체크
//         if (index >= 3) {
//             const cardTxt = card.querySelector('.result_explainCard_match_txt');
//             const cardTitleBox = card.querySelector('.result_explainCard_match_titleBox');
            
//             // 아직 잠겨있는 카드인 경우에만 실행
//             if (cardTxt.querySelector('.result_lockBox')) {
//                 const content = sajuExplains[index].content;
                
//                 cardTxt.innerHTML = '';
//                 const pTag = document.createElement('p');
//                 pTag.textContent = content;
//                 cardTxt.appendChild(pTag);
                
//                 cardTitleBox.setAttribute('onclick', `toggleExplain(${index}, this)`);
//             }
//         }
//     });
//     alert("모든 항목이 공개되었습니다.");
// }

// // 헬퍼 함수: 리스트 해설 토글 (renderExplains에서 사용되는 함수)
// function toggleExplain(index, element) {
//     const card = element.closest('.result_explainCard_match');
//     if (card) {
//         card.classList.toggle('on');
//     }
// }



// 카카오 친추 버튼 → 잠긴 해설/프리미엄 영역 오픈
// function setupKakaoUnlock() {
//   const btn = document.querySelector('.js_kakaoUnlock_btn');
//   if (!btn) return;

//   btn.addEventListener('click', (e) => {
//     e.preventDefault();   // a 태그 기본 페이지 이동 막기

//     // 가려놨던 영역 보이기 (인라인 display:none 제거)
//     const explainList = document.querySelector('.js_result_explainList');
//     const premSec = document.querySelector('.result_match_addsec2');
//     if (explainList) explainList.style.display = '';
//     if (premSec) premSec.style.display = '';

//     const kakaoBox = document.querySelector('.js_kakaoUnlockBox');
//     if (kakaoBox) kakaoBox.style.display = 'none';

//     animateMatchTable(); 
//   });
// }

// function setupUnlockMat(){
//     const explainList = document.querySelector('.js_result_explainList');
//     const premSec = document.querySelector('.result_match_addsec2');
//     if (explainList) explainList.style.display = '';
//     if (premSec) premSec.style.display = '';

//     const kakaoBox = document.querySelector('.js_kakaoUnlockBox');
//     if (kakaoBox) kakaoBox.style.display = 'none';

//     animateMatchTable(); 
// }

// // 모든 렌더링이 끝난 후 실행
// document.addEventListener('DOMContentLoaded', () => {
//     renderSaju();      // 만세력 데이터 렌더링
//     // renderExplains();   하단 해설 리스트 렌더링
//     animateMatchScore(); 
//     // animateMatchTable(); 
//     setupKakaoUnlock();
//   setupUnlockMat()
//   setupPriceBtnToggle();
    
// });

// // ============================================================
// // 로딩
// // ============================================================
// document.addEventListener('DOMContentLoaded', () => {
//   const loadBox   = document.querySelector('.result_loadBox');
//   const gage      = document.querySelector('.result_gage');
//   const loadTxt   = document.querySelector('.result_loadTxt');
//   const loadingP  = document.querySelector('.result_loadingBox > p');

//   const DURATION  = 8500;
//   const INTERVAL  = 30;
//   const STEPS     = DURATION / INTERVAL;

//   // 점 애니메이션
//   const texts = ['사주 분석 중', '풀이 준비 중'];
//   let current = 0;
//   let dotStep = 0;
//   let textIndex = 0;

//   // 점 업데이트 (400ms마다)
//   const dotTimer = setInterval(() => {
//     dotStep = (dotStep + 1) % 4; // 0,1,2,3 → '','.','..','..'
//     const dots = '.'.repeat(dotStep);
//     loadingP.textContent = texts[textIndex] + ' ' + dots;
//   }, 400);

//   // 게이지
//   const gageTimer = setInterval(() => {
//     current++;
//     const progress = (current / STEPS) * 100;

//     gage.style.width = progress + '%';

//     // 50%에서 텍스트 + 이미지 전환
//     if (progress >= 30 && textIndex === 0) {
//       textIndex = 1;
//       dotStep = 0;
//       loadTxt.classList.add('on');
//     }

//     if (current >= STEPS) {
//       clearInterval(gageTimer);
//       clearInterval(dotTimer);
//       gage.style.width = '100%';
//       loadingP.textContent = '풀이 준비 중 ...';
//       loadBox.classList.add('on');

//       const header = document.querySelector('header');
//     const btnBox = document.querySelector('.resultPrem_btnBox');
//     if (header && btnBox) {
//         btnBox.style.top = header.getBoundingClientRect().height + 'px';
//         syncPadding(); 
//         window.addEventListener('resize', () => {
//             btnBox.style.top = header.getBoundingClientRect().height + 'px';
//             syncPadding(); 
//         });
//     }

//     }
//   }, INTERVAL);
// });

// 260811

// function setupPriceBtnToggle() {
//     const priceBtns = document.querySelectorAll('.price_btn');
//     if (!priceBtns.length) return;

//     priceBtns.forEach(btn => {
//         btn.addEventListener('click', () => {
//             document.querySelectorAll('.price_btn').forEach(b => b.classList.remove('active'));
//             btn.classList.add('active');

//             const target = btn.dataset.target;
//             document.querySelectorAll('.js_share_box').forEach(box => {
//                 box.classList.toggle('active', box.dataset.share === target);
//             });
//         });
//     });
// }




// 260819

document.addEventListener("click", (e) => {
    const box = e.target.closest(".choice_type_box");
    if (!box) return;

    const modal = document.getElementById("paymentModal");
    if (!modal) return;

    // 결제수단 전체에서 active 제거
    modal.querySelectorAll(".choice_type_box").forEach(item => {
        item.classList.remove("active");
    });

    // 클릭한 결제수단 강제 active
    box.classList.add("active");

    console.log("결제수단 active:", box.textContent.trim());
});


(function() {
            var priceBtns = document.querySelectorAll('.produc_choice_card');
            priceBtns.forEach(function(btn) {
                btn.addEventListener('click', function(e) {
                    e.stopPropagation();   // 추가

                    document.querySelector('.product_choice_option').classList.add('active')

                    document.querySelectorAll('.produc_choice_card').forEach(function(b) {
                        b.classList.remove('active');
                    });
                    btn.classList.add('active');

                    var target = btn.dataset.target;
                    document.querySelectorAll('.js_proudct_choice_explainCard').forEach(function(box) {
                        box.classList.toggle('active', box.dataset.share === target);
                    });
                });
            });
        })();