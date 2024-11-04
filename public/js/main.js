const ulEl = document.querySelector(".container ul");

fetch("http://localhost:3000/posts/list")
    .then(response => response.json())
    .then(data => {

        const results = data.data;

        results.forEach(singlePost => {

            const { title, slug, content, image, tags } = singlePost;

            const markup = `
                <li>
                    <img src="${image}" alt="${title}">
                    <h3>${title}</h3>
                    <p>${content}</p>
                    <p>${tags}</p>
                </li>
            `;

            ulEl.innerHTML += markup
        });

    })
    .catch(error => console.error(error))


