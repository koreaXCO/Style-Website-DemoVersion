const userForm = document.getElementById('user-form'); // 사용자 입력 폼 요소
const userInput = document.getElementById('user-input'); // 사용자 입력 필드
const apiKey = '{API키 입력하시오}'; // OpenAI API 키
const loadingIndicator = document.getElementById('loading-indicator'); // 로딩 표시 요소
const chatLog = document.getElementById('chat-log'); // 채팅 로그 요소
 
// 사용자 입력 폼 제출 이벤트 처리
userForm.addEventListener('submit', async (event) => {
    event.preventDefault(); // 폼 기본 제출 동작 막기
    disableUserInput(); // 사용자 입력 비활성화
    const message = userInput.value; // 사용자 입력 값
    displayMessage(message, 'user'); // 사용자 입력 표시
    showLoadingIndicator(); // 로딩 표시 활성화
    const botResponse = await getBotResponse(message); // 챗봇 응답 받아오기
    hideLoadingIndicator(); // 로딩 표시 비활성화
    displayMessage(botResponse, 'bot'); // 챗봇 응답 표시
    enableUserInput(); // 사용자 입력 활성화
    userInput.value = ''; // 입력 필드 초기화
});
 
// 사용자 입력 비활성화
function disableUserInput() {
    userInput.disabled = true;
}
 
// 사용자 입력 활성화
function enableUserInput() {
    userInput.disabled = false;
}
 
// 로딩 표시 활성화
function showLoadingIndicator() {
    loadingIndicator.style.display = 'flex';
}
 
// 로딩 표시 비활성화
function hideLoadingIndicator() {
    loadingIndicator.style.display = 'none';
}
 
// 챗봇 응답 받아오기
async function getBotResponse(userMessage) {
    const apiUrl = 'https://api.openai.com/v1/chat/completions';
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
    };
    const data = {
        model: 'gpt-3.5-turbo',
        messages: [
            { role: 'system', content: 'You are a chatbot.' },
            { role: 'user', content: userMessage },
        ],
    };
 
    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(data),
    });
 
    const responseData = await response.json();
    return responseData.choices[0].message.content;
}
 
// 메시지를 채팅 로그에 표시
function displayMessage(message, sender) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender);
    messageElement.textContent = message;
    chatLog.appendChild(messageElement);
}
