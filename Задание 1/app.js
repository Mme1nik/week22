function onSearch() {
    let picture = document.querySelector('#pictureSearch').value;
    let count = document.querySelector('#pictureCount').value;
    let wrapper = document.querySelector('.wrapper');
    fetch('https://api.giphy.com/v1/gifs/search?api_key=YQC5cdN84xVsuGdzMV3zziL4tLR1yJpR&q='+ picture + '&limit='+ count + '&offset=0&rating=g&lang=en').then(resp => resp.json()).then(pictures => {
        let result = '';
        pictures.data.forEach(item => {
            result+= `<div><img src="${item.images.original.url}" alt="giphy"></div>`;
        });
        wrapper.innerHTML = result;
    }).catch(error => alert('Сервер потерян: ' + error));
};
document.getElementById('button').addEventListener('click', onSearch);