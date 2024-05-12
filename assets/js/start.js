const MIN_DURATION = 10;

const body = document.querySelector("body");

function makeSnowflake(name){
    const snowflake = document.createElement("div");
    const delay = Math.random() * 10;
    const initialOpacity = Math.random();
    const duration = Math.random()*20 + MIN_DURATION;

    snowflake.classList.add("snowflake");
    snowflake.style.left = `${Math.random()*window.innerWidth}px`;
    snowflake.style.animationDelay = `${delay}s`;
    snowflake.style.opacity = initialOpacity;
    snowflake.style.animation = `fall ${duration}s linear`;

    snowflake.innerText = name; // 이름 설정

    body.appendChild(snowflake);

    setTimeout(() => {
        body.removeChild(snowflake);
    }, (duration + delay) * 1000);
}

for (let index=0; index<50; index++){
    setTimeout(() => {
        makeSnowflake('CSS');
        makeSnowflake('JavaScript');
        makeSnowflake('API');
    }, 500*index);
}
// index.html 파일로 이동하는 함수
function goToIndexPage() {
    window.location.href = "index.html";
}

// 버튼 요소를 찾습니다.
const button = document.querySelector("#goToIndexButton");

// 버튼에 클릭 이벤트 리스너를 추가합니다.
button.addEventListener("click", goToIndexPage);
