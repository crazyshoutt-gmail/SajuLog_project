// ============================================================
// 사주 기본정보
// ============================================================
const sajuResult = {
    title: "갑술 (푸른 개)",
    user_name: "홍길동",
    birth_info: "1994년 05월 31일 | 양력 | 13:35 | 남성",
    summary: "당신의 사주는 화(火) 기운이 중심을 이루는 강렬한 구조입니다.\n추진력과 열정이 뛰어나 한 번 목표를 잡으면 끝까지 밀어붙이는 성향이 강합니다.\n재물운은 꾸준히 흐르는 물줄기처럼 안정적으로 쌓이는 형국이며,\n인간관계는 넓고 화려하지만 깊은 신뢰를 쌓는 데 시간이 필요합니다.\n중년 이후로 갈수록 운의 흐름이 크게 상승하는 대기만성형 사주입니다.\n현재의 준비가 곧 미래의 도약이 됩니다.",
    palja: [
        {
            type: "시주",
            top: { kanji: "丁", name: "정", sibseong: "비견" },
            bottom: { kanji: "未", name: "미", sibseong: "식신" }
        },
        {
            type: "일주",
            top: { kanji: "丁", name: "정", sibseong: "비견" },
            bottom: { kanji: "巳", name: "사", sibseong: "겁재" }
        },
        {
            type: "월주",
            top: { kanji: "己", name: "기", sibseong: "식신" },
            bottom: { kanji: "巳", name: "사", sibseong: "겁재" }
        },
        {
            type: "연주",
            top: { kanji: "申", name: "신", sibseong: "정인" },
            bottom: { kanji: "戌", name: "술", sibseong: "상관" }
        }
    ],
    extra_info: {
        jijanggan: [["정","을","기"], ["무","병","정"], ["무","병","정"], ["신","정","무"]],
        unseong:   [["관대"], ["제왕"], ["제왕"], ["양"]],
        shinsal:   [["반안살"], ["망신살"], ["망신살"], ["화개살"]],
        etc:       [["홍염살","퇴신"], [""], ["금신"], [""]]
    }
};

const sajuExplains = [
    {
        title: "차가운 샘물 위로 새순이 먼저 말을 걸고, 참아 온 마음은 밤에야 자기 자리를 찾는구나",
        content: `
님은 어릴 적부터 겉으로 넘기고 안에서 다시 살피는 버릇이 있었을 겁니다.
말을 바로 세우기보다 먼저 참고, 혼자서 답을 다시 맞춰 보는 쪽에 가까웠습니다.
지금도 사람 앞에서는 웃으며 받지만, 집에 오면 그날 대화를 여러 번 되짚습니다.
그래서 지금 님은 바로 반응하기보다, <span class="crt_hei">다음 말을 더 정확하게 고르려 합니다.</span><br><br>

지금까지 님은 빨리 대답한 뒤의 실수를 더 크게 느껴 왔을 가능성이 큽니다.
서두르면 손해를 본다고 몸이 먼저 기억해서, 한 번 멈추고 보는 습관이 굳었습니다.
말이 많은 자리보다 맥락이 또렷한 자리에서 마음이 놓이고 판단도 선명해집니다.
그렇다면 앞으로는 <span class="crt_hei">상대 말의 속도보다 내용부터 먼저 잡아 보세요.</span><br><br>

님은 감정에 휩쓸리는 사람이 아니라, 확인하고 움직이는 사람입니다.
서운한 말을 들었을 때 바로 맞받아치지 말고, 적어 두었다가 다시 말해 보세요.
<span class="crt_hei">급한 대답보다 다시 확인하는 습관을 살리세요</span><br><br>
`
    },
    {
        title: "말끝은 부드러우나 속도는 날카로워, 한 번 정한 기준은 쉽게 흐트러지지 않는구나",
        content: `
님은 어릴 적부터 겉으로 넘기고 안에서 다시 살피는 버릇이 있었을 겁니다.
말을 바로 세우기보다 먼저 참고, 혼자서 답을 다시 맞춰 보는 쪽에 가까웠습니다.
지금도 사람 앞에서는 웃으며 받지만, 집에 오면 그날 대화를 여러 번 되짚습니다.
그래서 지금 님은 바로 반응하기보다, <span class="crt_hei">다음 말을 더 정확하게 고르려 합니다.</span><br><br>

지금까지 님은 빨리 대답한 뒤의 실수를 더 크게 느껴 왔을 가능성이 큽니다.
서두르면 손해를 본다고 몸이 먼저 기억해서, 한 번 멈추고 보는 습관이 굳었습니다.
말이 많은 자리보다 맥락이 또렷한 자리에서 마음이 놓이고 판단도 선명해집니다.
그렇다면 앞으로는 <span class="crt_hei">상대 말의 속도보다 내용부터 먼저 잡아 보세요.</span><br><br>

님은 감정에 휩쓸리는 사람이 아니라, 확인하고 움직이는 사람입니다.
서운한 말을 들었을 때 바로 맞받아치지 말고, 적어 두었다가 다시 말해 보세요.
<span class="crt_hei">급한 대답보다 다시 확인하는 습관을 살리세요</span><br><br>
`
    },
    {
        title: "가벼운 손놀림으로 배운 것을 엮어 내니, 사람들 앞에서 더 또렷해지는구나",
        content: `
님은 어릴 적부터 겉으로 넘기고 안에서 다시 살피는 버릇이 있었을 겁니다.
말을 바로 세우기보다 먼저 참고, 혼자서 답을 다시 맞춰 보는 쪽에 가까웠습니다.
지금도 사람 앞에서는 웃으며 받지만, 집에 오면 그날 대화를 여러 번 되짚습니다.
그래서 지금 님은 바로 반응하기보다, <span class="crt_hei">다음 말을 더 정확하게 고르려 합니다.</span><br><br>

지금까지 님은 빨리 대답한 뒤의 실수를 더 크게 느껴 왔을 가능성이 큽니다.
서두르면 손해를 본다고 몸이 먼저 기억해서, 한 번 멈추고 보는 습관이 굳었습니다.
말이 많은 자리보다 맥락이 또렷한 자리에서 마음이 놓이고 판단도 선명해집니다.
그렇다면 앞으로는 <span class="crt_hei">상대 말의 속도보다 내용부터 먼저 잡아 보세요.</span><br><br>

님은 감정에 휩쓸리는 사람이 아니라, 확인하고 움직이는 사람입니다.
서운한 말을 들었을 때 바로 맞받아치지 말고, 적어 두었다가 다시 말해 보세요.
<span class="crt_hei">급한 대답보다 다시 확인하는 습관을 살리세요</span><br><br>
`
    },
    {
        title: "은근한 눈길과 단정한 태도에 마음이 머무르니, 가까이 갈수록 깊이가 드러나는구나",
        content: `
님은 어릴 적부터 겉으로 넘기고 안에서 다시 살피는 버릇이 있었을 겁니다.
말을 바로 세우기보다 먼저 참고, 혼자서 답을 다시 맞춰 보는 쪽에 가까웠습니다.
지금도 사람 앞에서는 웃으며 받지만, 집에 오면 그날 대화를 여러 번 되짚습니다.
그래서 지금 님은 바로 반응하기보다, <span class="crt_hei">다음 말을 더 정확하게 고르려 합니다.</span><br><br>

지금까지 님은 빨리 대답한 뒤의 실수를 더 크게 느껴 왔을 가능성이 큽니다.
서두르면 손해를 본다고 몸이 먼저 기억해서, 한 번 멈추고 보는 습관이 굳었습니다.
말이 많은 자리보다 맥락이 또렷한 자리에서 마음이 놓이고 판단도 선명해집니다.
그렇다면 앞으로는 <span class="crt_hei">상대 말의 속도보다 내용부터 먼저 잡아 보세요.</span><br><br>

님은 감정에 휩쓸리는 사람이 아니라, 확인하고 움직이는 사람입니다.
서운한 말을 들었을 때 바로 맞받아치지 말고, 적어 두었다가 다시 말해 보세요.
<span class="crt_hei">급한 대답보다 다시 확인하는 습관을 살리세요</span><br><br>
`
    },
    {
        title: "들쭉날쭉한 지출 속에서도 손에 남는 감각은 살아 있으니, 돈은 묶는 법이 먼저이구나",
        content: `
님은 어릴 적부터 겉으로 넘기고 안에서 다시 살피는 버릇이 있었을 겁니다.
말을 바로 세우기보다 먼저 참고, 혼자서 답을 다시 맞춰 보는 쪽에 가까웠습니다.
지금도 사람 앞에서는 웃으며 받지만, 집에 오면 그날 대화를 여러 번 되짚습니다.
그래서 지금 님은 바로 반응하기보다, <span class="crt_hei">다음 말을 더 정확하게 고르려 합니다.</span><br><br>

지금까지 님은 빨리 대답한 뒤의 실수를 더 크게 느껴 왔을 가능성이 큽니다.
서두르면 손해를 본다고 몸이 먼저 기억해서, 한 번 멈추고 보는 습관이 굳었습니다.
말이 많은 자리보다 맥락이 또렷한 자리에서 마음이 놓이고 판단도 선명해집니다.
그렇다면 앞으로는 <span class="crt_hei">상대 말의 속도보다 내용부터 먼저 잡아 보세요.</span><br><br>

님은 감정에 휩쓸리는 사람이 아니라, 확인하고 움직이는 사람입니다.
서운한 말을 들었을 때 바로 맞받아치지 말고, 적어 두었다가 다시 말해 보세요.
<span class="crt_hei">급한 대답보다 다시 확인하는 습관을 살리세요</span><br><br>
`
    },
    {
        title: "약속과 책임을 가볍게 여기지 못하니, 맡은 자리를 지키는 힘이 오래 가는구나",
        content: `
님은 어릴 적부터 겉으로 넘기고 안에서 다시 살피는 버릇이 있었을 겁니다.
말을 바로 세우기보다 먼저 참고, 혼자서 답을 다시 맞춰 보는 쪽에 가까웠습니다.
지금도 사람 앞에서는 웃으며 받지만, 집에 오면 그날 대화를 여러 번 되짚습니다.
그래서 지금 님은 바로 반응하기보다, <span class="crt_hei">다음 말을 더 정확하게 고르려 합니다.</span><br><br>

지금까지 님은 빨리 대답한 뒤의 실수를 더 크게 느껴 왔을 가능성이 큽니다.
서두르면 손해를 본다고 몸이 먼저 기억해서, 한 번 멈추고 보는 습관이 굳었습니다.
말이 많은 자리보다 맥락이 또렷한 자리에서 마음이 놓이고 판단도 선명해집니다.
그렇다면 앞으로는 <span class="crt_hei">상대 말의 속도보다 내용부터 먼저 잡아 보세요.</span><br><br>

님은 감정에 휩쓸리는 사람이 아니라, 확인하고 움직이는 사람입니다.
서운한 말을 들었을 때 바로 맞받아치지 말고, 적어 두었다가 다시 말해 보세요.
<span class="crt_hei">급한 대답보다 다시 확인하는 습관을 살리세요</span><br><br>
`
    },
    {
        title: "겉웃음 뒤에 선이 선명하니, 쉽게 다가오나 쉽게 잊히지 않는 인상이 남는구나",
        content: `
님은 어릴 적부터 겉으로 넘기고 안에서 다시 살피는 버릇이 있었을 겁니다.
말을 바로 세우기보다 먼저 참고, 혼자서 답을 다시 맞춰 보는 쪽에 가까웠습니다.
지금도 사람 앞에서는 웃으며 받지만, 집에 오면 그날 대화를 여러 번 되짚습니다.
그래서 지금 님은 바로 반응하기보다, <span class="crt_hei">다음 말을 더 정확하게 고르려 합니다.</span><br><br>

지금까지 님은 빨리 대답한 뒤의 실수를 더 크게 느껴 왔을 가능성이 큽니다.
서두르면 손해를 본다고 몸이 먼저 기억해서, 한 번 멈추고 보는 습관이 굳었습니다.
말이 많은 자리보다 맥락이 또렷한 자리에서 마음이 놓이고 판단도 선명해집니다.
그렇다면 앞으로는 <span class="crt_hei">상대 말의 속도보다 내용부터 먼저 잡아 보세요.</span><br><br>

님은 감정에 휩쓸리는 사람이 아니라, 확인하고 움직이는 사람입니다.
서운한 말을 들었을 때 바로 맞받아치지 말고, 적어 두었다가 다시 말해 보세요.
<span class="crt_hei">급한 대답보다 다시 확인하는 습관을 살리세요</span><br><br>
`
    },
    {
        title: "생각은 빠르고 손은 바쁘니, 길게 버티는 일은 차근차근 쌓아야 빛나는구나",
        content: `
님은 어릴 적부터 겉으로 넘기고 안에서 다시 살피는 버릇이 있었을 겁니다.
말을 바로 세우기보다 먼저 참고, 혼자서 답을 다시 맞춰 보는 쪽에 가까웠습니다.
지금도 사람 앞에서는 웃으며 받지만, 집에 오면 그날 대화를 여러 번 되짚습니다.
그래서 지금 님은 바로 반응하기보다, <span class="crt_hei">다음 말을 더 정확하게 고르려 합니다.</span><br><br>

지금까지 님은 빨리 대답한 뒤의 실수를 더 크게 느껴 왔을 가능성이 큽니다.
서두르면 손해를 본다고 몸이 먼저 기억해서, 한 번 멈추고 보는 습관이 굳었습니다.
말이 많은 자리보다 맥락이 또렷한 자리에서 마음이 놓이고 판단도 선명해집니다.
그렇다면 앞으로는 <span class="crt_hei">상대 말의 속도보다 내용부터 먼저 잡아 보세요.</span><br><br>

님은 감정에 휩쓸리는 사람이 아니라, 확인하고 움직이는 사람입니다.
서운한 말을 들었을 때 바로 맞받아치지 말고, 적어 두었다가 다시 말해 보세요.
<span class="crt_hei">급한 대답보다 다시 확인하는 습관을 살리세요</span><br><br>
`
    }
];


// ============================================================
// 오행 색상
// ============================================================
function getSajuColorClass(kanji) {
    const wood  = ['甲', '乙', '寅', '卯'];
    const fire  = ['丙', '丁', '巳', '午'];
    const earth = ['戊', '己', '辰', '戌', '丑', '未'];
    const metal = ['庚', '辛', '申', '酉'];
    const water = ['壬', '癸', '亥', '子'];

    if (wood.includes(kanji))  return 'saju_green';
    if (fire.includes(kanji))  return 'saju_red';
    if (earth.includes(kanji)) return 'saju_yellow';
    if (metal.includes(kanji)) return 'saju_white';
    if (water.includes(kanji)) return 'saju_blue';
    return 'saju-default';
}

function getBorderColorClass(colorClass) {
    const map = {
        'saju_green':  'border_saju_green',
        'saju_red':    'border_saju_red',
        'saju_yellow': 'border_saju_yellow',
        'saju_white':  'border_saju_white',
        'saju_blue':   'border_saju_blue',
    };
    return map[colorClass] || '';
}

function fillCard(cardEl, data) {
    if (!cardEl || !data) return;

    const kanjiEl    = cardEl.querySelector('.result_saju_kanji');
    const nameEl     = cardEl.querySelector('.result_saju_kanji_name');
    const sibseongEl = cardEl.querySelector('.result_saju_kanji_sibseong');

    if (!kanjiEl) return;

    const colorClass  = getSajuColorClass(data.kanji);
    const borderClass = getBorderColorClass(colorClass);

    kanjiEl.textContent    = data.kanji;
    nameEl.textContent     = data.name;
    sibseongEl.textContent = data.sibseong;

    [kanjiEl, nameEl, sibseongEl].forEach(el => el.classList.add(colorClass));

    cardEl.style.border = '';
    cardEl.classList.remove('border_saju_green', 'border_saju_red',
                             'border_saju_yellow', 'border_saju_white', 'border_saju_blue');
    cardEl.classList.add(borderClass);
}


// ============================================================
// 메인 렌더링
// ============================================================
function renderSaju() {
    document.querySelector('.js_result_userAnimal').textContent = sajuResult.title;
    document.querySelector('.js_result_userName').textContent   = sajuResult.user_name;
    document.querySelector('.js_result_userProf').textContent   = sajuResult.birth_info;

    const summaryEl = document.querySelector('.js_result_summaryTxt');
    if (summaryEl) {
        summaryEl.innerHTML = sajuResult.summary.replace(/\n/g, '<br>');
    }

    const typeToSelector = {
        "시주": { top: '.result_saju_time1',  bottom: '.result_saju_time2'  },
        "일주": { top: '.result_saju_day1',   bottom: '.result_saju_day2'   },
        "월주": { top: '.result_saju_month1', bottom: '.result_saju_month2' },
        "연주": { top: '.result_saju_year1',  bottom: '.result_saju_year2'  },
    };

    sajuResult.palja.forEach(pillar => {
        const sel = typeToSelector[pillar.type];
        if (!sel) return;
        fillCard(document.querySelector(sel.top),    pillar.top);
        fillCard(document.querySelector(sel.bottom), pillar.bottom);
    });

    const extra = sajuResult.extra_info;
    const pillarOrder = ['time', 'day', 'month', 'year'];
    const toArray = (val) => Array.isArray(val) ? val : (val ? [val] : []);

    ['jijanggan', 'unseong', 'shinsal', 'etc'].forEach(type => {
        pillarOrder.forEach((key, i) => {
            const el = document.querySelector(`.result_saju_${key}_${type}`);
            if (el) el.innerHTML = toArray(extra[type][i]).map(w => `<p>${w}</p>`).join('');
        });
    });
}

document.addEventListener('DOMContentLoaded', renderSaju);


// ============================================================
// 해설 렌더링
// ============================================================
// 일반 사주 해설 오픈후 간단해설 추가 
function renderExplains() {
    const container = document.querySelector('.js_result_explainList');
    if (!container) return;

    container.innerHTML = '';

    const card = document.createElement('div');
    card.className = 'result_explainTxtBox';
    card.innerHTML = `

        상황을 살피고 여러 가능성을 헤아린 뒤 방향을 정하는 기운이 강해서<br> 
        결단이 늦어 보일 수 있지만, 한 번 뜻을 세우면 끝까지 붙들 수 있는 끈기를 지녔네.<br>
        자네의 재능은 처음부터 화려하게 드러나기보다 경험이 쌓일수록 선명해질 것이다. <br>
        직접 부딪히고 실패하며 자신만의 방식을 만들어 가는 사람이므로, <br>
        남이 정해 놓은 길보다 스스로 선택한 일에서 더 뛰어난 능력을 드러낼 터이네.<br><br>
    
    <div class="result_extit">
        <span>“</span><br>
        <strong>
            지금 필요한 건 더 많이<br>
            해내는 것이 아닐 수 있습니다.
        </strong>

    </div>




        마음이 깊은 만큼 생각도 많은 사람이라, <br>
        속으로는 수많은 경우의 수를 헤아리며 자신을 무겁게 만들 수도 있지. <br>
        감정을 드러내지 않지만 한 번 마음 안에 들어온 것은 오랫동안 기억하며, <br>
        천천히 신뢰를 쌓은 몇 사람과 깊은 관계를 맺으려 할 것이네. <br>

    `;
    container.appendChild(card);
    card.style.display = 'none';
}

// ============================================================
// 아코디언 토글
// ============================================================
function toggleExplain(index, element) {
    const parent = element.parentElement;
    document.querySelectorAll('.result_explainCard').forEach(card => {
        if (card !== parent) card.classList.remove('on');
    });
    parent.classList.toggle('on');
}

// ============================================================
// 잠금 해제
// 카카오 친추 확인 로직은 여기에 추가
// 현재는 버튼 클릭 시 바로 오픈 (퍼블리싱 임시 처리)
// ============================================================
function unlockAll() {
    const unlockBox = document.querySelector('.js_kakaoUnlockBox');
    const explainList = document.querySelector('.js_result_explainList');
    const premSection = document.querySelector('.main_section3');
    const reviewSection = document.querySelector('.result_reviewBox');
    const sec3 = document.querySelector('.result_sec3');

    const titPer = document.querySelector('.js_result_titPer');
    const explainTitle = document.querySelector('.js_result_explainTitle');
    const resultBtm = document.querySelector('.js_result_btm');
    const btmCta = document.querySelector('.js_result_btm_cta');
    const btmPreview = document.querySelector('.result_btm_previewExplainList');
    const btmExplainList = document.querySelector('.js_result_btm_explainList');
    const premiumBtn = document.querySelector('.main_preSajuBtn_btm');
    const moreText = document.querySelector('.result_moreSaju_txt');
    const moreButton = document.querySelector('.result_moreSaju_btns');
    const moreBackground = document.querySelector('.result_moreSaju_BgImg');

    if (unlockBox) unlockBox.style.setProperty('display', 'none', 'important');
    if (explainList) {
        explainList.style.setProperty('display', 'block', 'important');
        renderExplains();
        explainList.querySelector('.result_explainTxtBox')?.style.setProperty('display', 'block', 'important');
    }
    if (premSection) premSection.style.setProperty('display', 'block', 'important');
    if (reviewSection) reviewSection.style.setProperty('display', 'block', 'important');

    if (titPer) titPer.style.setProperty('display', 'block', 'important');
    if (explainTitle) explainTitle.style.setProperty('display', 'flex', 'important');
    if (resultBtm) resultBtm.style.setProperty('display', 'block', 'important');
    if (btmCta) btmCta.style.setProperty('display', 'block', 'important');
    if (btmPreview) btmPreview.style.setProperty('display', 'block', 'important');
    if (btmExplainList) btmExplainList.style.setProperty('display', 'none', 'important');
    if (premiumBtn) premiumBtn.style.setProperty('display', 'none', 'important');
    if (moreText) moreText.classList.remove('active');
    if (moreButton) moreButton.classList.remove('active');
    if (moreBackground) moreBackground.classList.remove('active');
}




// ============================================================
document.addEventListener('DOMContentLoaded', function () {
    const unlockBox = document.querySelector('.js_kakaoUnlockBox');
    const claimBox  = document.querySelector('.result_explain_claimB');

    if (!unlockBox || !claimBox) return;

    // 이미 결제완료 상태로 로드된 경우 (새로고침 등) 즉시 체크
    function checkAndReveal() {
        if (unlockBox.style.display === 'none') {
            claimBox.style.setProperty('display', 'block', 'important');
            return true;
        }
        return false;
    }

    if (checkAndReveal()) return;

    // common.js의 결제완료 로직이 unlockBox.style.display = "none" 을
    // 실행하는 순간을 감지 (MutationObserver로 style 속성 변화만 관찰)
    const observer = new MutationObserver(function (mutations) {
        for (const m of mutations) {
            if (m.attributeName === 'style') {
                if (checkAndReveal()) {
                    observer.disconnect();
                    break;
                }
            }
        }
    });

    observer.observe(unlockBox, { attributes: true, attributeFilter: ['style'] });
});




document.addEventListener('DOMContentLoaded', function () {
    renderExplains();

    const kakaoBtn = document.querySelector('.js_kakaoUnlock_btn');
    if (kakaoBtn) {
        kakaoBtn.addEventListener('click', function (e) {
            e.preventDefault(); // 링크 이동 방지

            alert('잠금이 해제되었습니다.');

            unlockAll();
        });
    }
});


document.addEventListener('DOMContentLoaded', function () {



    // =========================
    // 990원 결제 버튼 추가
    // =========================
    const payBtn = document.querySelector('.openPayment[data-type="trial"]');

    if (payBtn) {
        payBtn.addEventListener('click', function (e) {
            e.preventDefault();

            // 여기서 모달 열려있다고 가정
            const modalPayBtn = document.querySelector('.payment_modal .pay_confirm_btn');

            if (modalPayBtn) {
                modalPayBtn.onclick = function () {
                    // 결제 성공 처리
                    unlockAll(); // 핵심
                };
            }
        });
    }
});




const reviewData = [
    { name: "정O영", age: 31, gender: "여성", date: "오늘", img: "w_mou", stars: 5, text: "사주 여기저기서 봐왔는데 여긴 결이 좀 달라요. 뻔한 말 늘어놓는 게 아니라 제 상황을 진짜 들여다본 느낌이라 읽으면서 몇 번이나 끄덕였네요. 추천합니다." },
    { name: "김O연", age: 29, gender: "여성", date: "오늘", img: "w_rab", stars: 5, text: "후기 잘 안 쓰는데 뜨끔한 적이 한두 번이 아니라ㅋㅋ 남겨봄. 굿" },
    { name: "박O호", age: 36, gender: "남성", date: "오늘", img: "w_tig", stars: 4.5, text: "아내가 먼저 보고 권해서 같이 봤습니다. 큰 기대 안 했는데 성격 분석은 공감되는 게 많더군요. 돈 아깝단 생각은 안 들었습니다." },
    { name: "최O영", age: 33, gender: "여성", date: "1일 전", img: "w_pig", stars: 5, text: "썸남 궁합 보러 왔다가 제 연애 패턴만 잔뜩 알고 가네요ㅋㅋ 왜 늘 비슷한 사람한테 끌리는지 알 것 같아요." },
    { name: "이O진", age: 25, gender: "여성", date: "1일 전", img: "w_mou", stars: 5, text: "지금 제 고민이랑 조언 방향이 딱 맞아서 좀 소름;;" },
    { name: "한O우", age: 28, gender: "남성", date: "1일 전", img: "w_cow", stars: 4, text: "풀이 깔끔하고 직설적이라 좋음." },
    { name: "윤O서", age: 22, gender: "여성", date: "2일 전", img: "w_dra", stars: 5, text: "그냥 심심해서 본 건데 성격 분석에서 진짜 소름 돋았어요;; 저도 몰랐던 제 성향을 어떻게 이렇게 콕 집어내는지... 읽다가 혼자 헉 했네요ㅋㅋㅋ 너무 신기해서 친구들 단톡방에 바로 링크 뿌렸어요. 다들 지금 자기 거 보는 중!! 진짜 강추합니다 ㅎㅎ" },
    { name: "강O현", age: 34, gender: "남성", date: "2일 전", img: "w_sna", stars: 5, text: "올해 사업을 준비하면서 마음이 영 불안해 결제해봤습니다. 조심해야 할 시기와 밀어붙여도 될 방향을 명확하게 짚어주니 머릿속이 한결 정리되더군요. 막연한 불안이 구체적인 계획으로 바뀐 느낌입니다. 결정 앞두고 갈팡질팡할 때 한 번씩 다시 꺼내 읽게 될 것 같네요. 좋은 길잡이 얻고 갑니다." },
    { name: "신O아", age: 27, gender: "여성", date: "2일 전", img: "w_hor", stars: 4.5, text: "태어난 시간 보정해주는 게 진짜 신의 한 수예요. 다른 데선 일주가 다르게 나와서 늘 갸우뚱했는데, 보정된 풀이 읽어보니 이게 진짜 제 얘기가 맞더라고요ㅋㅋ" },
    { name: "임O민", age: 30, gender: "남성", date: "3일 전", img: "w_goa", stars: 5, text: "돈이 자꾸 새는 느낌이라 재물운 위주로 봤는데, 고쳐야 할 습관이 그대로 적혀 있어서 좀 뜨끔했네요. 대기만성형이라니 믿고 가봅니다." },
    { name: "오O지", age: 32, gender: "여성", date: "3일 전", img: "w_mon", stars: 5, text: "결혼을 앞두고 마음이 싱숭생숭해서 프리미엄까지 다 봤어요. 예비신랑 사주랑 같이 맞춰보니 신기하게 성향이 잘 맞물리더라고요. 어디서 부딪히고 어디서 서로 채워줄 수 있는지까지 짚어줘서 앞으로 좋은 가이드가 될 것 같아요. 사실 결혼 준비하면서 사소한 걸로 자주 다퉜는데, 풀이 읽고 나니 서로 성향이 달라서 그랬던 거구나 이해가 되더라고요. 마음이 이렇게 편해진 건 진짜 오랜만이에요. 예비부부들한테 꼭 추천하고 싶어요." },
    { name: "송O원", age: 26, gender: "남성", date: "3일 전", img: "w_che", stars: 4, text: "디자인 깔끔하고 가독성 좋네요 굿." },
    { name: "배O은", age: 24, gender: "여성", date: "4일 전", img: "w_dog", stars: 5, text: "인간관계 때문에 스트레스 진짜 많이 받았는데 제 인복 흐름이 사주에 다 나와 있어서 신기했어요. 모두한테 잘 보일 필요 없었다는 걸 이제야 알았네요ㅠㅠ 감사해요." },
    { name: "유O재", age: 35, gender: "남성", date: "4일 전", img: "w_pig", stars: 4.5, text: "상사랑 도저히 안 맞아서 이직 고민 중이었는데, 올해 이동수가 강하게 들어와 있다니 묘하게 용기가 나네요. 타이밍이 절묘해서 한번 움직여볼 생각입니다." },
    { name: "고O라", age: 29, gender: "여성", date: "4일 전", img: "w_mou", stars: 5, text: "카톡 친추만 해도 무료 해설 볼 수 있어서 가성비 최고예요ㅋㅋ 근데 요약 보고 감질맛 나서 결국 프리미엄까지 질러버림... 후회는 안 함." },
    { name: "전O준", age: 38, gender: "남성", date: "5일 전", img: "w_rab", stars: 4, text: "성격과 성향 풀이는 거의 95% 일치하는 것 같습니다. 미래 운세야 지나봐야 알겠지만, 현재 상황과 대조해보면 신뢰가 가는 내용이 많네요." },
    { name: "황O연", age: 31, gender: "여성", date: "5일 전", img: "w_tig", stars: 5, text: "한자 용어 안 남발해서 술술 읽혀요. 굿." },
    { name: "권O훈", age: 27, gender: "남성", date: "5일 전", img: "w_mou", stars: 5, text: "친구 추천으로 들어왔는데 솔직히 좀 놀랐습니다. 최근에 겪은 심경 변화나 건강상 조심할 부분이 그대로 적혀 있더라고요. 종종 들를 것 같아요." },
    { name: "손O민", age: 23, gender: "여성", date: "6일 전", img: "w_cow", stars: 4.5, text: "졸업하고 진로 때문에 머리 터질 것 같았는데, 어떤 직군이 맞는지 디테일하게 짚어줘서 방향 잡는 데 도움 많이 됐어요." },
    { name: "안O성", age: 42, gender: "남성", date: "6일 전", img: "w_dra", stars: 5, text: "나이가 들수록 운명의 흐름이라는 것에 자연히 공감하게 됩니다. 젊을 적엔 흘려들었던 이야기들이 이제는 마음 깊이 와닿더군요. 중년 이후의 흐름을 긍정적으로 짚어주셔서 큰 위로와 동기부여를 얻고 갑니다. 지나온 세월을 돌아보고 앞으로 남은 길을 어떻게 가꿔갈지 차분히 생각해보는 귀한 시간이었습니다. 좋은 풀이 정성껏 준비해주셔서 감사합니다." },
    { name: "심O희", age: 28, gender: "여성", date: "6일 전", img: "w_sna", stars: 5, text: "헤어진 시기랑 새 인연 들어오는 시기가 진짜 딱 맞음;; 개신기" },
    { name: "노O우", age: 33, gender: "남성", date: "1주일 전", img: "w_hor", stars: 4, text: "인생 터닝포인트 정리해준 파트가 제일 와닿네요. 다가올 기회 놓치지 않으려면 미리 준비해둬야겠다 싶습니다." },
    { name: "하O나", age: 30, gender: "여성", date: "1주일 전", img: "w_goa", stars: 5, text: "인터넷 사주라 큰 기대 안 했는데 텍스트 양이 어마어마하고 꼼꼼해서 깜짝 놀랐어요. 제 성격 장단점을 한 발 떨어져 객관적으로 보게 됐네요." },
    { name: "곽O섭", age: 37, gender: "남성", date: "1주일 전", img: "w_mon", stars: 4.5, text: "요즘 주식이 계속 안 풀려서 재물운 보러 왔습니다. 과한 투자는 금물인 사주라니, 당분간 욕심 접고 자산 지키기에 집중하는 게 맞겠네요. 마음 다잡고 갑니다." },
    { name: "성O주", age: 25, gender: "여성", date: "1주일 전", img: "w_che", stars: 5, text: "디자인 너무 예뻐요ㅠㅠ 풀이도 알차고 대만족!!" },
    { name: "류O열", age: 31, gender: "남성", date: "1주일 전", img: "w_dog", stars: 5, text: "사주에 화 기운이 부족한 건 알고 있었는데, 일상에서 어떻게 보완하는지 구체적으로 알려줘서 유익했습니다. 막연한 지식이 실생활 조언으로 이어지니 좋네요." },
    { name: "홍O수", age: 34, gender: "남성", date: "1주일 전", img: "w_pig", stars: 4, text: "사업운 풀이 굿. 흉운 시기 미리 안 것만으로도 리스크 관리됨." },
    { name: "문O영", age: 29, gender: "여성", date: "2주일 전", img: "w_mou", stars: 5, text: "남친이랑 궁합 보러 왔다가 제 사주에 더 꽂혀서 갑니다ㅋㅋㅋ 제가 주도권 쥐어야 잘 풀리는 사주라네요. 참고할게요 ㅎㅎ" },
    { name: "양O진", age: 26, gender: "남성", date: "2주일 전", img: "w_rab", stars: 4.5, text: "핵심만 딱딱 짚어줘서 깔끔함. 신살 설명도 쉬움." },
    { name: "조O아", age: 32, gender: "여성", date: "2주일 전", img: "w_tig", stars: 5, text: "요즘 인간관계가 영 권태기였는데, 올해 비견 겁재 기운이 강해서 그렇다는 풀이 보니까 오히려 마음이 놓이더라고요. 이유를 아니까 한결 편해졌어요." },
    { name: "백O현", age: 35, gender: "남성", date: "2주일 전", img: "w_mou", stars: 5, text: "프리미엄 리포트는 돈값 제대로 합니다. 향후 10년 로드맵이 나와 있어서 인생 계획을 다시 짜는 데 좋은 이정표가 되어주네요. 매년 막연하게 흘려보내던 시간을 좀 더 전략적으로 쓰게 될 것 같습니다. 캡처해두고 연초마다 한 번씩 다시 읽으려고요." },
    { name: "남O우", age: 27, gender: "남성", date: "2주일 전", img: "w_cow", stars: 4, text: "반신반의하며 결제했는데, 원국이 오행별로 색이 다르게 표시되니까 시각적으로 보기 편하고 이해도 잘 되더라고요." },
    { name: "소O민", age: 24, gender: "여성", date: "2주일 전", img: "w_dra", stars: 5, text: "완전 쪽집게ㅋㅋㅋ 개신기" },
    { name: "진O하", age: 31, gender: "여성", date: "3주일 전", img: "w_sna", stars: 4.5, text: "귀인운 분석 파트가 제일 인상 깊었어요. 제 주변에 누가 절 도와줄 사람인지 어렴풋이 짐작이 가더라고요. 인연을 소중히 여겨야겠다 싶었습니다." },
    { name: "엄O용", age: 39, gender: "남성", date: "3주일 전", img: "w_hor", stars: 5, text: "직장 생활에 고비가 올 때마다 사주를 들여다보는 편입니다. 이번 풀이는 지금 제 심정을 그대로 대변해주는 듯해 적잖은 위로를 받았네요. 막막하던 마음이 한결 가벼워졌습니다. 가끔 흔들릴 때 다시 꺼내 읽어볼 생각입니다." },
    { name: "원O희", age: 28, gender: "여성", date: "3주일 전", img: "w_goa", stars: 5, text: "연애 세포 다 죽은 줄 알았는데 올해 연애운 들어온다길래 기대 중이에요ㅋㅋ 풀이대로 좀 더 적극적으로 움직여봐야겠어요!" },
    { name: "채O준", age: 33, gender: "남성", date: "3주일 전", img: "w_mon", stars: 4, text: "건강 조언이 의외로 유용했습니다. 위장 쪽 조심하라 나왔는데 마침 요즘 역류성 식도염으로 고생 중이라 좀 놀랐네요. 관리 들어갑니다." },
    { name: "천O우", age: 26, gender: "남성", date: "3주일 전", img: "w_che", stars: 5, text: "바이럴인 줄 알고 거르려다가 심심해서 해봤는데 생각보다 고퀄이라 놀람;; 다른 데서 볼 때랑 다르게 시간 보정해 줘서 그런가 성격 풀이 팩폭 지리네요ㅋㅋ 돈 안 아까움" },
    { name: "구O나", age: 30, gender: "여성", date: "3주일 전", img: "w_dog", stars: 4.5, text: "고집 세다는 소리 평생 듣고 살았는데 그게 사주에 그대로 박혀 있어서 빵 터졌어요ㅋㅋㅋ 그 단점을 어떻게 장점으로 살릴지까지 알려줘서 좋더라고요." },
    { name: "라O원", age: 36, gender: "여성", date: "4주일 전", img: "w_pig", stars: 5, text: "이 가격에 이 정도 퀄리티면 훌륭합니다. 질문 몇 개 던지고 끝나버리는 대면 상담과 달리, 텍스트로 남아 두고두고 다시 읽을 수 있다는 게 가장 큰 장점이네요. 그때그때 상황에 따라 다르게 와닿는 부분이 있어서 한 번 결제로 오래 보게 될 것 같습니다." },
    { name: "지O하", age: 23, gender: "남성", date: "4주일 전", img: "w_mou", stars: 5, text: "재물 창고 있다니 일단 기분 좋네요ㅋㅋ" },
    { name: "동O현", age: 32, gender: "남성", date: "4주일 전", img: "w_rab", stars: 4, text: "직업 적성 분석이 날카롭습니다. 지금 마케팅 일을 하는데 결국 독립해서 제 사업할 사주라고 나오네요. 커리어 진지하게 고민해봐야겠습니다." },
    { name: "마O아", age: 27, gender: "여성", date: "4주일 전", img: "w_tig", stars: 5, text: "카톡 공유하고 무료로 봤는데 퀄리티 너무 좋아서 깜짝 놀랐어요. 이 정도면 돈 받고 팔아도 될 듯?? 대박나세요!!" },
    { name: "표O우", age: 34, gender: "남성", date: "1달 전", img: "w_mou", stars: 4.5, text: "배우자운 분석이 꽤 흥미로웠습니다. 아직 미혼인데, 어떤 성향의 사람을 만나야 삶이 평탄할지 기준 세우는 데 큰 참고가 됐네요." },
    { name: "기O윤", age: 29, gender: "여성", date: "1달 전", img: "w_cow", stars: 5, text: "초년에 고생을 좀 많이 했는데, 중년부터 대운이 바뀐다는 풀이를 보고 솔직히 눈물이 핑 돌았어요. 지금까지 버틴 게 헛되지 않았구나 싶어서요. 한동안 모든 게 안 풀려서 제 탓만 했는데, 그냥 시기의 문제였다는 걸 알고 나니 마음이 좀 놓이네요. 풀이대로 조금만 더 힘내보려고요ㅠㅠ" },
    { name: "우O진", age: 31, gender: "남성", date: "1달 전", img: "w_dra", stars: 5, text: "이동수와 문서운 겹치는 시기를 콕 집어줘서 부동산 계약 타이밍 잡는 데 결정적인 힌트를 얻었습니다. 막연하던 결정에 근거가 생긴 느낌이라 만족스럽네요." },
    { name: "변O서", age: 25, gender: "여성", date: "1달 전", img: "w_sna", stars: 4, text: "텍스트 정리가 잘 돼 있어서 술술 읽혀요. 제 성격을 제3자 시선으로 한 발 떨어져 돌아볼 수 있어서 유익했어요." },
    { name: "도O훈", age: 38, gender: "남성", date: "1달 전", img: "w_hor", stars: 5, text: "나이가 들며 삶의 무게가 버겁게 느껴질 때가 많은데, 사주의 흐름을 통해 제 인생의 계절을 이해하게 되니 마음이 한결 가볍고 유연해지더군요. 봄을 기다리며 겨울을 견디는 마음이랄까요. 좋은 시간이었습니다. 감사합니다." },
    { name: "연O지", age: 28, gender: "여성", date: "1달 전", img: "w_goa", stars: 4.5, text: "친구들이 다들 용하다고 난리길래 반신반의하며 봤는데 진짜 신기하긴 하네요ㅋㅋ 특히 제가 평소 늘 불안해하던 포인트를 정확히 짚어내서 살짝 소름 돋았어요." },
    { name: "위O한", age: 33, gender: "남성", date: "1달 전", img: "w_mon", stars: 5, text: "인생 전반전 정산서와 후반전 안내서를 동시에 받아 든 기분입니다. 정통 명리학 기준이라 그런지 군더더기 없이 명쾌한 해설이 인상적이네요." }
];

// ============================================================
// 리뷰 50개 동적 삽입 로직
// ============================================================
function renderReviews() {
    const reviewListContainer = document.querySelector('.review_list');
    if (!reviewListContainer) return;

    reviewListContainer.innerHTML = ''; // 초기화

    reviewData.forEach(item => {
        const frameBox = document.createElement('div');
        frameBox.className = 'review_frameBox';

        // 별점 이미지 매핑 (5점인 경우 5개, 4.5점인 경우 4개 + 0.5평점 이미지 1개)
        let starHtml = '';
        const fullStars = Math.floor(item.stars);
        const hasHalf = item.stars % 1 !== 0;

        for (let i = 0; i < fullStars; i++) {
            starHtml += `<div><img src="./resources/img/result/review_star-2.webp" alt="★"></div>`;
        }
        if (hasHalf) {
            starHtml += `<div><img src="./resources/img/result/review_star0.5.webp" alt="½"></div>`;
        }

        // 전체 마크업 조립 (기존 디자인 가이드라인 100% 반영) 
        frameBox.innerHTML = `
            <div class="review_box">
                <div class="review_userBox">
                    <div class="review_userImg"><img src="./resources/img/animal/${item.img}.webp" alt=""></div>
                    <div class="review_userTxt">
                        <h3>${item.name}</h3><span>${item.age}세 ${item.gender} · ${item.date}</span>
                    </div>
                    <div class="review_star">
                        ${starHtml}
                    </div>
                </div>
                <div class="review_userrev">
                    ${item.text}
                </div>
            </div>
            <div class="review_frame">
                <div class="frame_cell" style="border-top: 2px solid #b89f82; border-right: 2px solid #b89f82;"></div>
                <div class="frame_cell" style="border-left: 2px solid #b89f82;"></div>
                <div class="frame_cell"></div>
                <div class="frame_cell" style="border-top: 2px solid #b89f82; border-right: 2px solid #b89f82;"></div>
                <div class="frame_cell" style="border-left: 2px solid #b89f82;"></div>
                <div class="frame_cell"></div>
                <div class="frame_cell" style="border-right: 2px solid #b89f82;"></div>
                <div class="frame_cell" style="border-top: 2px solid #b89f82; border-left: 2px solid #b89f82;"></div>
            </div>
            <div class="review_frame2">
                <div class="frame_cell" style="border-top: 2px solid #b89f82; border-right: 2px solid #b89f82;"></div>
                <div class="frame_cell" style="border-left: 2px solid #b89f82;"></div>
                <div class="frame_cell"></div>
                <div class="frame_cell" style="border-top: 2px solid #b89f82; border-right: 2px solid #b89f82;"></div>
                <div class="frame_cell" style="border-left: 2px solid #b89f82;"></div>
                <div class="frame_cell"></div>
                <div class="frame_cell" style="border-right: 2px solid #b89f82;"></div>
                <div class="frame_cell" style="border-top: 2px solid #b89f82; border-left: 2px solid #b89f82;"></div>
            </div>
        `;
        reviewListContainer.appendChild(frameBox);
    });
}

// DOM 로드 시점 제어 수정 (기존에 정의된 init 함수 실행 직전에 renderReviews()가 먼저 실행되어야 함)


/* ===================== 세로 무한 슬라이더 =====================
           - 카드 높이가 전부 달라도 매 스텝마다 실제 높이를 측정해서 이동
           - DOM 을 한 번만 옮기는 방식이라 끊김이 없음
           - 기존 .review_list / .review_frameBox 스타일은 건드리지 않고
             transform / transition 만 인라인으로 잠깐 주입
        ============================================================= */
        (function () {
          const wrap = document.querySelector('.review_slideWrap');
          const list = document.querySelector('.review_list');
          if (!wrap || !list) return;
        
          const VISIBLE   = 5;      // 한 번에 보이는 개수
          const INTERVAL  = 2000;   // 자동 재생 간격 (ms)
          const DURATION  = 600;    // 슬라이드 전환 시간 (ms)
          const DIRECTION = 'down'; // 'down' 아래로 / 'up' 위로
        
          let moving = false;
          let timer  = null;
        
          // 박스 a의 top 부터 b의 top 까지 거리 = a가 차지하는 세로 공간(높이+간격)
          const stepOf = (a, b) =>
            b.getBoundingClientRect().top - a.getBoundingClientRect().top;
        
          // start 인덱스부터 VISIBLE 개가 차지하는 전체 높이 (간격 포함)
          function visibleHeight(start) {
            const boxes = list.children;
            if (boxes.length < start + VISIBLE) return wrap.offsetHeight;
            const top    = boxes[start].getBoundingClientRect().top;
            const bottom = boxes[start + VISIBLE - 1].getBoundingClientRect().bottom;
            return bottom - top;
          }
      
          function setWrapHeight(h, animate) {
            wrap.style.transition = animate ? `height ${DURATION}ms ease` : 'none';
            wrap.style.height = h + 'px';
          }
      
          // 아래로 이동: 맨 마지막 카드가 맨 위로 와서 위에서 내려옴
          function slideDown() {
            if (moving) return; moving = true;
            const boxes = list.children;
            const last  = boxes[boxes.length - 1];
        
            list.insertBefore(last, boxes[0]);          // 마지막 → 맨 앞으로
            const move = stepOf(boxes[0], boxes[1]);    // 새 맨 앞 카드가 차지하는 높이
        
            list.style.transition = 'none';             // 일단 위로 숨겨두고
            list.style.transform  = `translateY(-${move}px)`;
            void list.offsetHeight;                     // reflow 강제
        
            list.style.transition = `transform ${DURATION}ms ease`;
            list.style.transform  = 'translateY(0)';    // 아래로 미끄러져 내려옴
            setWrapHeight(visibleHeight(0), true);
        
            setTimeout(() => { moving = false; }, DURATION);
          }
      
          // 위로 이동: 맨 위 카드가 위로 사라지고 다음 카드가 올라옴
          function slideUp() {
            if (moving) return; moving = true;
            const boxes = list.children;
            const first = boxes[0];
            const move  = stepOf(boxes[0], boxes[1]);
        
            list.style.transition = `transform ${DURATION}ms ease`;
            list.style.transform  = `translateY(-${move}px)`;
            setWrapHeight(visibleHeight(1), true);
        
            setTimeout(() => {
              list.style.transition = 'none';
              list.appendChild(first);                  // 맨 위 → 맨 뒤로
              list.style.transform  = 'translateY(0)';
              setWrapHeight(visibleHeight(0), false);
              void list.offsetHeight;
              moving = false;
            }, DURATION);
          }
      
          const slide = () => (DIRECTION === 'up' ? slideUp() : slideDown());
      
          function play()  { stop(); timer = setInterval(slide, INTERVAL); }
          function stop()  { if (timer) clearInterval(timer); timer = null; }
      
          // 초기 높이 세팅 + 시작
          function init() {
    renderReviews(); // 슬라이더가 돌아가기 전에 50개의 리뷰 노드를 HTML에 먼저 생성
    setWrapHeight(visibleHeight(0), false);
    play();
}
          // 마우스 올리면 잠깐 멈춤(선택사항 - 필요 없으면 두 줄 지우세요)
        //   wrap.addEventListener('mouseenter', stop);
        //   wrap.addEventListener('mouseleave', play);
      
          // 이미지/폰트 로딩 후 높이가 정확하도록 load 시점에 시작
          if (document.readyState === 'complete') init();
          else window.addEventListener('load', init);
      
          // 반응형: 창 크기 바뀌면 높이 다시 측정
          let rt;
          window.addEventListener('resize', () => {
            clearTimeout(rt);
            rt = setTimeout(() => setWrapHeight(visibleHeight(0), false), 150);
          });
        })();


// ============================================================
// 로딩
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
    const loadBox   = document.querySelector('.result_loadBox');
    const gage      = document.querySelector('.result_gage');
    const loadTxt   = document.querySelector('.result_loadTxt1');
    const loadImgs = loadTxt.querySelectorAll('img');
    const loadingP  = document.querySelector('.result_loadingBox > p');
    let currentImgIndex = 0;

    loadImgs[currentImgIndex]?.classList.add('on');

    const DURATION  = 8500;
    const INTERVAL  = 30;
    const STEPS     = DURATION / INTERVAL;

    // 점 애니메이션
    const texts = ['사주 분석 중', '풀이 준비 중'];
    let current = 0;
    let dotStep = 0;
    let textIndex = 0;

    // 점 업데이트 (400ms마다)
    const dotTimer = setInterval(() => {
        dotStep = (dotStep + 1) % 4; // 0,1,2,3 → '','.','..','..'
        const dots = '.'.repeat(dotStep);
        loadingP.textContent = texts[textIndex] + ' ' + dots;
    }, 400);

  // 게이지
  const gageTimer = setInterval(() => {
    current++;
    const progress = (current / STEPS) * 100;

    gage.style.width = progress + '%';

    const nextImgIndex = Math.min(
        Math.floor(progress / 25),
        loadImgs.length - 1
    );

    if (nextImgIndex !== currentImgIndex) {
        loadImgs[currentImgIndex]?.classList.remove('on');

        currentImgIndex = nextImgIndex;

        loadImgs[currentImgIndex]?.classList.add('on');
    }

    // 텍스트는 50%에서 변경
    if (progress >= 50 && textIndex === 0) {
        textIndex = 1;
        dotStep = 0;
    }

    if (current >= STEPS) {
      clearInterval(gageTimer);
      clearInterval(dotTimer);
      gage.style.width = '100%';
      loadingP.textContent = '풀이 준비 중 ...';
      loadBox.classList.add('on');

      const header = document.querySelector('header');
    const btnBox = document.querySelector('.resultPrem_btnBox');
    if (header && btnBox) {
        btnBox.style.top = header.getBoundingClientRect().height + 'px';
        syncPadding(); 
        window.addEventListener('resize', () => {
            btnBox.style.top = header.getBoundingClientRect().height + 'px';
            syncPadding(); 
        });
    }

    }
  }, INTERVAL);
});





// 260812


// ▼ 추가: .js_result_btm 전용 아코디언 렌더링 (기존 renderExplains와 별개)
function renderExplainsBtm() {
    const container = document.querySelector('.js_result_btm_explainList');
    if (!container) return;

    container.innerHTML = '';

    sajuExplains.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'result_explainCard';
        card.innerHTML = `
            <div class="result_explainCard_titleBox" onclick="toggleExplainBtm(${index}, this)">
                <p class="result_explainCard_title crt_pointGradient">${item.title}</p>
                <div class="result_explain_toggleBtn">
                    <img src="resources/img/ui/tab.png" alt="">
                </div>
            </div>
            <div class="result_explainCard_txt">
                <p>${item.content}</p>
            </div>
        `;
        container.appendChild(card);
    });
}

// ▼ 추가: btm 영역 전용 아코디언 토글 (기존 toggleExplain과 충돌 방지)
function toggleExplainBtm(index, element) {
    const parent = element.parentElement;
    document.querySelectorAll('.js_result_btm_explainList .result_explainCard').forEach(card => {
        if (card !== parent) card.classList.remove('on');
    });
    parent.classList.toggle('on');
}

function unlockPremium() {
    const explainList = document.querySelector('.js_result_explainList');
    const btmCta = document.querySelector('.js_result_btm_cta');
    const btmBlur = document.querySelector('.result_btm_previewExplainList');
    const btmExplainList = document.querySelector('.js_result_btm_explainList');
    const premiumBtn = document.querySelector('.main_preSajuBtn_btm');

    if (explainList) {
        explainList.style.setProperty('display', 'block', 'important');
        renderExplains();
        explainList.querySelector('.result_explainTxtBox')?.style.setProperty('display', 'block', 'important');
    }

    // 결제 완료 후 무료 CTA와 미리보기 숨김
    if (btmCta) {
        btmCta.style.setProperty('display', 'none', 'important');
    }

    // 블러 제거
    if (btmBlur) {
        btmBlur.style.setProperty('display', 'none', 'important');
    }

    // 라이트 해설 노출
    if (btmExplainList) {
        btmExplainList.style.setProperty('display', 'block', 'important');
        renderExplainsBtm();
    }

    // "프리미엄도 보러가기" 노출
    if (premiumBtn) {
        const premiumLink = premiumBtn.querySelector('a');
        premiumBtn.style.setProperty('display', 'block', 'important');
        if (premiumLink) {
            premiumLink.classList.remove('openPayment');
            premiumLink.textContent = '미래사주 넘어가기';
            premiumLink.href = './result_prem.html';
        }
    }


    const resultBtm = document.querySelector('.result_btm');
if (resultBtm) resultBtm.classList.add('premium_unlocked');

    purchase_trueOpenPage();
}



// 260814

document.addEventListener('DOMContentLoaded', function () {
    const previewList = document.querySelector('.result_btm_previewExplainList');
    if (!previewList) return;
 
    previewList.innerHTML = '';
 
    sajuExplains.forEach(function (item, index) {
        const card = document.createElement('div');
        card.className = 'result_btm_previewExplainCard';
        card.innerHTML = `
            <div class="result_btm_previewExplainTitle" onclick="togglePreviewExplain(this)">
                <p>${item.title}</p>
                <div class="result_explain_toggleBtn">
                    <img src="resources/img/ui/tab.png" alt="">
                </div>
            </div>
            <div class="result_btm_previewExplainContent">
                <img src="resources/img/result/explain_sample.webp" alt="">
            </div>
        `;
        previewList.appendChild(card);
    });
});
 
function togglePreviewExplain(element) {
    const card = element.parentElement;
    document.querySelectorAll('.result_btm_previewExplainCard').forEach(function (item) {
        if (item !== card) item.classList.remove('on');
    });
    card.classList.toggle('on');
}
 


// 260818 사주결과 리뷰리스트

const dummyReviews = [
  {
    meta: "30대 여성 · 오늘",
    name: "정O영",
    rating: 5,
    text: "평소 사주에 관심이 많아 이곳저곳 많이 찾아보는편인데,\n좀 색다른 풀이들이 많아서 신선했어요.\n충분히 추천받을만 합니다^^",
    icon: "resources/img/animal/saju_rat.webp",
  },
  {
    meta: "40대 남성 · 2일 전",
    name: "강O우",
    rating: 5,
    text: "사주 자체보다 설명 방식이 마음에 들었어요.\n어려운 용어 없이 술술 풀어주셔서 이해하기 편했습니다.",
    icon: "resources/img/animal/saju_ox.webp",
  },
  {
    meta: "40대 남성 · 어제",
    name: "박O수",
    rating: 5,
    text: "친구 추천으로 알게 됐는데 생각보다 정확해서 놀랐어요.\n주변에도 많이 알려주고 싶네요.",
    icon: "resources/img/animal/saju_tiger.webp",
  },
  {
    meta: "20대 여성 · 어제",
    name: "최O은",
    rating: 4,
    text: "재미로 봤는데 은근 몰입도 있고 풀이가 상세해서 좋았습니다.",
    icon: "resources/img/animal/saju_rabbit.webp",
  },
  {
    meta: "30대 남성 · 3일 전",
    name: "한O진",
    rating: 5,
    text: "사실 반신반의하면서 봤는데 생각보다 훨씬 꼼꼼하게 풀어주셔서 놀랐습니다.\n연애운, 재물운 다 궁금했던 부분들이 하나씩 짚어지는 느낌이었고,\n특히 올해 하반기 흐름 설명해주신 부분이 제일 인상 깊었어요.\n주변 친구들한테도 꼭 한번 보라고 추천하고 싶네요. 다음에 또 이용할 것 같습니다.",
    icon: "resources/img/animal/saju_dragon.webp",
  },
  {
    meta: "20대 여성 · 4일 전",
    name: "윤O아",
    rating: 5,
    text: "비슷한 서비스 여러 번 이용해봤는데 여기가 제일 꼼꼼했어요.\n특히 시기별로 짚어주는 부분이 좋았습니다.",
    icon: "resources/img/animal/saju_snake.webp",
  },
  {
    meta: "30대 여성 · 5일 전",
    name: "서O진",
    rating: 4,
    text: "가볍게 봤는데 은근 자세해서 좋았어요. 다음에 또 볼 것 같아요.",
    icon: "resources/img/animal/saju_horse.webp",
  },
  {
    meta: "20대 여성 · 오늘",
    name: "이O현",
    rating: 5,
    text: "평소 사주에 관심이 많아 이곳저곳 많이 찾아보는편인데,\n좀 색다른 풀이들이 많아서 신선했어요.\n충분히 추천받을만 합니다^^",
    icon: "resources/img/animal/saju_goat.webp",
  },
  {
    meta: "20대 남성 · 6일 전",
    name: "조O민",
    rating: 5,
    text: "친구가 추천해줘서 봤는데 저도 주변에 추천하고 싶네요.\n풀이가 상세해서 좋았습니다.",
    icon: "resources/img/animal/saju_monkey.webp",
  },
  {
    meta: "40대 여성 · 1주 전",
    name: "임O경",
    rating: 5,
    text: "예전부터 사주 보는 걸 좋아해서 여러 곳 다녀봤는데, 여기는 확실히 다른 느낌이었어요.\n특히 올해 재물운 관련 설명이 자세하고 현실적이어서 도움이 많이 됐습니다.\n주변 지인들한테도 적극 추천하고 있어요.",
    icon: "resources/img/animal/saju_rooster.webp",
  },
  {
    meta: "30대 남성 · 1주 전",
    name: "오O훈",
    rating: 4,
    text: "재미 삼아 봤는데 생각보다 잘 맞아서 놀랐어요.",
    icon: "resources/img/animal/saju_dog.webp",
  },
  {
    meta: "20대 여성 · 1주 전",
    name: "김O아",
    rating: 5,
    text: "연말에 봤는데 내년 운세까지 자세히 알려주셔서 좋았어요.\n만족스러운 후기 남깁니다.",
    icon: "resources/img/animal/saju_pig.webp",
  },
];

/* =========================================================
    2) 데이터 → 슬라이드 HTML 변환 함수
 ========================================================= */
function createReviewSlideHTML(review) {
    const filled = "★".repeat(review.rating);
    const empty = "☆".repeat(5 - review.rating);
    const textHTML = review.text.replace(/\n/g, "<br>");
    const iconHTML = review.icon
        ? `<div class="review-icon"><img src="${review.icon}" alt="" /></div>`
        : "";

    return `
        <div class="swiper-slide review-card">
            <div class="review-left">
                <div class="review-meta">${review.meta}</div>
                <div class="review-name">${review.name}</div>
                <div class="review-stars">${filled}${empty}</div>
            </div>
            <div class="review-right">
                <div class="review-text">${textHTML}</div>
            </div>
            ${iconHTML}
        </div>
    `;
}

/* =========================================================
    3) 초기 렌더 (Swiper 생성 "전"에 최초 슬라이드부터 심어둔다)
 ========================================================= */
    const wrapperEl = document.getElementById("result_reviewWrapper");
    wrapperEl.innerHTML = dummyReviews.map(createReviewSlideHTML).join("");
 
/* =========================================================
    4) Swiper 초기화
    - 세로(direction: vertical) + loop + 표준 autoplay 조합.
    - "한 장씩 딱딱 위로 올라가고 잠깐 멈췄다가 다음 카드" 방식이라
        카드 높이가 제각각이어도(가변 높이) 신경 쓸 게 없습니다.
        Swiper가 알아서 각 슬라이드의 실제 높이를 계산해서 이동시켜줍니다.
========================================================= */
const reviewSwiper = new Swiper(".result_reviewSwiper", {
    direction: "vertical",
    slidesPerView: "auto",
    loop: true,
    loopAdditionalSlides: 4, // 카드 높이가 들쭉날쭉할 때 루프 이음매에서 빈 공간이 생기지 않도록 여유분을 더 복제
    allowTouchMove: false,   // 사용자가 직접 드래그 못하게(자동 흐름 전용). 드래그 허용하려면 true로.
    speed: 600,              // 카드 한 장이 위로 올라가는 전환 애니메이션 시간(ms)
    autoplay: {
        delay: 2800,           // 다음 카드로 넘어가기 전 멈춰있는 시간(ms)
        disableOnInteraction: false,
        pauseOnMouseEnter: true, // 마우스 올리면 잠깐 정지
    },
});
 
/* =========================================================
    5) 나중에 백엔드 데이터로 교체할 때 쓸 함수 (예시)
    - loop 모드에서는 슬라이드를 추가/삭제한 뒤 반드시
        loopDestroy → 변경 → loopCreate → update 순서를 지켜야
        중복 계산이 꼬이지 않습니다.
========================================================= */
function updateReviewSlides(newReviews) {
    reviewSwiper.autoplay.stop();
    reviewSwiper.loopDestroy();
 
    wrapperEl.innerHTML = newReviews.map(createReviewSlideHTML).join("");
 
    reviewSwiper.loopCreate();
    reviewSwiper.update();
    reviewSwiper.autoplay.start();
}
 
  // 실제 연동 예시 (지금은 주석 처리):
  //
  // async function loadReviewsFromServer() {
  //   const res = await fetch("/api/reviews");
  //   const data = await res.json(); // [{ meta, name, rating, text, icon }, ...] 형태로 맞춰서 응답
  //   updateReviewSlides(data);
  // }
  // loadReviewsFromServer();




//   260819 사주 결제창 조절

// ============================================================
// 구매 상태에 따라 결과 페이지 적용
// ============================================================

function purchase_trueOpenPage(){
    document.querySelector('.result_moreSaju_txt').classList.add('active');
    document.querySelector('.result_moreSaju_BgImg').classList.add('active');
    document.querySelector('.result_moreSaju_btns').classList.add('active');
}

function applySajuPurchaseState(force = false, purchasedProduct = null) {

    if (!force) return;

    if (typeof getSajuPurchase !== "function") {
        console.warn("getSajuPurchase 함수를 찾을 수 없습니다.");
        return;
    }

    const purchase = getSajuPurchase();

    console.log("현재 구매 상태:", purchase);



    // ========================================
    // 정통사주를 가지고 있으면 정통 결과 해제
    // ========================================
    if (purchasedProduct === "traditional" || purchasedProduct === "package" || (!purchasedProduct && purchase.traditional)) {

        if (typeof unlockPremium === "function") {
            unlockPremium();
            purchase_trueOpenPage();
        }
    }


    // ========================================
    // 하단 CTA
    // ========================================
    const premiumBtnWrap =
        document.querySelector(".main_preSajuBtn_btm");

    const premiumBtn =
        premiumBtnWrap?.querySelector("a");


    if (!premiumBtn) return;


    // ========================================
    // 미래사주까지 이미 가지고 있음
    // 패키지도 future:true이므로 여기 해당
    // ========================================
    if (purchasedProduct === "future" || (!purchasedProduct && purchase.future)) {

        premiumBtn.textContent = "미래사주 넘어가기";

        // 결제모달이 열리지 않도록 openPayment 제거
        premiumBtn.classList.remove("openPayment");

        // 바로 미래사주 결과 이동
        premiumBtn.href = "./result_prem.html";
        purchase_trueOpenPage();

        return;
    }


    // ========================================
    // 정통사주만 구매함
    // ========================================
    if (purchasedProduct === "traditional" || (!purchasedProduct && purchase.traditional && !purchase.future)) {

        premiumBtn.textContent = "나의 미래흐름 확인하기";
        purchase_trueOpenPage();

        // 이 버튼은 다시 결제모달을 열어야 함
        premiumBtn.classList.add("openPayment");

        premiumBtn.href = "./register_prem.html";
    }

}


// 페이지 처음 들어왔을 때도 확인
document.addEventListener("DOMContentLoaded", () => {
    applySajuPurchaseState(false);
});