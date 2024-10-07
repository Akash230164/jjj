let currentPage = 1;

function nextPage(pageNumber) {
    const current = document.getElementById(`page${currentPage}`);
    const next = document.getElementById(`page${pageNumber}`);

    current.classList.remove('active');
    current.classList.add('previous');
    next.classList.add('active');

    currentPage = pageNumber;
}

function previousPage(pageNumber) {
    const current = document.getElementById(`page${currentPage}`);
    const previous = document.getElementById(`page${pageNumber}`);

    current.classList.remove('active');
    current.classList.add('previous');
    previous.classList.add('active');

    currentPage = pageNumber;
}

/* Initialize first page */
document.getElementById('page1').classList.add('active');

