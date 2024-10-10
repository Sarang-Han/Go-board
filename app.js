document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    const mainContent = document.getElementById('main-content');
    const toggleBtn = document.getElementById('toggle-btn');

    toggleBtn.addEventListener('click', () => {
        navbar.classList.toggle('closed');
        mainContent.classList.toggle('closed');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('board');
    const size = 19;
    let currentPlayer = 'black';

    // 바둑판 생성
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            const intersection = document.createElement('div');
            intersection.classList.add('intersection');
            intersection.dataset.row = i;
            intersection.dataset.col = j;
            board.appendChild(intersection);
        }
    }

    // 화점 추가
    const hoshiPositions = [
        [3, 3], [3, 9], [3, 15],
        [9, 3], [9, 9], [9, 15],
        [15, 3], [15, 9], [15, 15]
    ];

    hoshiPositions.forEach(([row, col]) => {
        const intersection = board.querySelector(`[data-row="${row}"][data-col="${col}"]`);
        if (intersection) {
            intersection.classList.add('hoshi');
        }
    });

    // 클릭 이벤트 처리
    board.addEventListener('click', (e) => {
        const target = e.target.closest('.intersection');
        if (target && !target.querySelector('.stone')) {
            const stone = document.createElement('div');
            stone.classList.add('stone', currentPlayer);
            target.appendChild(stone);
            
            currentPlayer = currentPlayer === 'black' ? 'white' : 'black';
        }
    });
});