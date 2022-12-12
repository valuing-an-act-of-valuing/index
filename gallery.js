async function populate() {
  const requestURL = '/value/gallery/index.json';
  const request = new Request(requestURL);

  const response = await fetch(request);
  const indexJson = await response.text();

  const galleryIndex = JSON.parse(indexJson);
  galleryObject(galleryIndex);
}

function galleryObject(obj) {
  const gallery = document.querySelector('#org .random');
  const itemsShow = obj.gallery;

  for (const item of itemsShow) {
    const show = document.createElement('li');
    const showP = document.createElement('p');
    const showSpan = document.createElement('span');
    const showA = document.createElement('a');

    show.setAttribute("class", "list_item");
    show.setAttribute("data-appreciate", item.type);
    showP.textContent = item.name;
    showA.textContent = item.date;
    topicA.href = item.href;

    show.appendChild(showP);
    show.appendChild(showSpan);
    show.appendChild(showA);

    gallery.appendChild(show);
  }
}

populate();
