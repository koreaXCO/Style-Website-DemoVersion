async function fetchText(id) {
    try {
        const response = await fetch(`http://localhost:3000/get-text/${id}`);
        if (!response.ok) {
            throw new Error('텍스트를 찾을 수 없습니다');
        }
        const data = await response.json();
        document.getElementById('popup-text').innerText = data.text;
    } catch (error) {
        document.getElementById('popup-text').innerText = error.message;
    }
}
