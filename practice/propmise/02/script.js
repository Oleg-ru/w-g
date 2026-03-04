'use strict';

const loaderEl = document.querySelector('.loader-container');
const postsContainerEl = document.querySelector('.posts-container');

async function fetchData(url, errorMessage) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            return await response.json();
        }
    } catch (error) {
        console.error(errorMessage)
    }
}

async function getPosts() {
    const url = "https://jsonplaceholder.typicode.com/posts";
    const errorMessage = "Ошибка при получении постов";
    return await fetchData(url, errorMessage)
}

async function getUsers() {
    const url = "https://jsonplaceholder.typicode.com/users";
    const errorMessage = "Ошибка при получении пользователей";
    return await fetchData(url, errorMessage)
}

async function getComments() {
    const url = "https://jsonplaceholder.typicode.com/comments";
    const errorMessage = "Ошибка при получении комментариев";
    return await fetchData(url, errorMessage)
}

const render = async () => {
    try {
        loaderEl.style.display = 'flex';
        const [posts, users, comments] = await Promise.all([getPosts(), getUsers(), getComments()]);

        console.log(posts);
        const post = {
            "userId": 1,
            "id": 1,
            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        };
        console.log(users)
        const user = {
            "id": 1,
            "name": "Leanne Graham",
            "username": "Bret",
            "email": "Sincere@april.biz",
            "address": {
                "street": "Kulas Light",
                "suite": "Apt. 556",
                "city": "Gwenborough",
                "zipcode": "92998-3874",
                "geo": {
                    "lat": "-37.3159",
                    "lng": "81.1496"
                }
            },
            "phone": "1-770-736-8031 x56442",
            "website": "hildegard.org",
            "company": {
                "name": "Romaguera-Crona",
                "catchPhrase": "Multi-layered client-server neural-net",
                "bs": "harness real-time e-markets"
            }
        };
        console.log(comments)
        const comment = {
            "postId": 1,
            "id": 1,
            "name": "id labore ex et quam laborum",
            "email": "Eliseo@gardner.biz",
            "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
        };
        const postsResult = `
        <ul class="posts-list">
                ${posts.map(post => {
            const currentUser = users.find(user => user.id === post.userId);
            const currentComments = comments.filter(comment => comment.postId === post.id);
                    return `
                        <li class="post">
                        <details class="details-user">
                            <summary>Автор: ${currentUser.username}</summary>
                            <p>Имя: ${currentUser.name}</p>
                            <p>Вебсайт: ${currentUser.website}</p>
                        </details>
                        <p class="post-desc-title">Я хочу рассказать об:</p>
                            <div class="post-title">${post.title}</div>
                            <p class="post-deck-title">Описание:</p>
                            <div class="post-body">${post.body}</div>
                            <div class="comments">
                                <h3 class="comment-title">Комментарии:</h3>
                                <details class="details-user-comment">
                                    <summary class="accordeon-comments">Показать все комментарии</summary>
                                    <ul class="comments-container">
                                       
                                             ${currentComments.map(comment => `
                                            <li class="comment">
                                                <p>Пользователь <span class="comment-name">${comment.name}</span> прокоменитровал:</p>
                                                <p class="comment-person-desc">${comment.body}</p>
                                            </li>`).join("")}
                                       
                                    </ul>
                                </details>
                            </div>
                        </li>
                        `
        }).join('')}
        </ul>
    `;
        postsContainerEl.innerHTML = '';
        postsContainerEl.innerHTML = postsResult;
    } catch (error) {
        console.error('Ошибка при  получение данных: ', error)
    } finally {
        loaderEl.style.display = 'none';
    }
};

render()