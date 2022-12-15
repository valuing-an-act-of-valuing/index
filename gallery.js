async function populate() {
  const requestURL = '/value/gallery/index.json';
  const request = new Request(requestURL);

  const response = await fetch(request);
  const galleryJson = await response.text();

  const galleryIndex = JSON.parse(galleryJson);
  galleryObject(galleryIndex);
}

function galleryObject(obj) {
  const gallery = document.querySelector('#org .random');
  const itemsGallery = obj.gallery;

  for (const item of itemsGallery) {
    const show = document.createElement('li');
    const showP = document.createElement('p');
    const showSpan = document.createElement('span');
    const showA = document.createElement('a');

    show.setAttribute("class", "list_item");
    show.setAttribute("data-appreciate", item.type);
    showP.textContent = item.name;
    showSpan.textContent = item.date;
    showA.href = item.href;

    show.appendChild(showP);
    show.appendChild(showSpan);
    show.appendChild(showA);

    gallery.appendChild(show);
  }
}

populate();
