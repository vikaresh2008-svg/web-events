export function createButton() {
    const button = document.createElement('button');
    button.textContent = 'Удали меня';

    button.addEventListener('click', function () {
        button.remove();
    });

    document.body.appendChild(button);
}

export function createArrList(arr) {
    const ul = document.createElement('ul');

    arr.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = item;

        li.addEventListener('mouseover', function () {
            li.setAttribute('title', li.textContent);
        });

        ul.appendChild(li);
    });

    document.body.appendChild(ul);
}

export function createLink() {
    const a = document.createElement('a');
    a.href = 'https://tensor.ru/';
    a.textContent = 'tensor';

    let isClicked = false;

    a.addEventListener('click', function (event) {
        if (!isClicked) {
            event.preventDefault();
            a.textContent = a.textContent + ' ' + a.href;
            isClicked = true;
        }
    });

    document.body.appendChild(a);
}

export function createList() {
    const ul = document.createElement('ul');
    const initialLi = document.createElement('li');
    initialLi.textContent = 'Пункт';
    ul.appendChild(initialLi);

    const button = document.createElement('button');
    button.textContent = 'Добавить пункт';

    function addLiClickListener(li) {
        li.addEventListener('click', function () {
            if (!li.textContent.endsWith('!')) {
                li.textContent += '!';
            }
        });
    }

    addLiClickListener(initialLi);

    button.addEventListener('click', function () {
        const newLi = document.createElement('li');
        newLi.textContent = 'Пункт';
        addLiClickListener(newLi);
        ul.appendChild(newLi);
    });

    document.body.appendChild(ul);
    document.body.appendChild(button);
}
