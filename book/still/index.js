async function populate() {
  const requestURL = 'index.json';
  const request = new Request(requestURL);

  const response = await fetch(request);
  const indexJson = await response.text();

  const topicIndex = JSON.parse(indexJson);
  indexHeader(topicIndex);
  indexObject(topicIndex);
}

function indexHeader(obj) {
  const head = document.querySelector('head');
  const titleValue = document.createElement('title');
  titleValue.textContent = obj.title;
  head.appendChild(titleValue);

  const authorValue = document.createElement( "meta" );
  authorValue.setAttribute("name", "author");
  authorValue.setAttribute("content", obj.author);
  head.appendChild(authorValue);

  const descriptionValue = document.createElement( "meta" );
  const ogDescription = document.createElement('meta');
  descriptionValue.setAttribute("name", "description");
  descriptionValue.setAttribute("content", obj.description);
  ogDescription.setAttribute("property", "og:description");
  ogDescription.setAttribute("content", obj.description);
  head.appendChild(descriptionValue);
  head.appendChild(ogDescription);

  const ogSite = document.createElement( "meta" );
  ogSite.setAttribute("property", "og:site_name");
  ogSite.setAttribute("content", location.hostname);
  head.appendChild(ogSite);

  const ogURL = document.createElement( "meta" );
  ogURL.setAttribute("property", "og:url");
  ogURL.setAttribute("content", location.href);
  head.appendChild(ogURL);

  const ogIMG = document.createElement( "meta" );
  const twitterIMG = document.createElement( "meta" );
  ogIMG.setAttribute("property", "og:image");
  ogIMG.setAttribute("content", `${location.href}${obj.cover}`);
  twitterIMG.setAttribute("name", "twitter:image");
  twitterIMG.setAttribute("content", `${location.href}${obj.cover}`);
  head.appendChild(ogIMG);
  head.appendChild(twitterIMG);
}

function indexObject(obj) {
  const images = obj.images;

  for (const image of images) {
    const ${image.class} = document.querySelector('.${image.class}');
    ${image.class}.style.backgroundImage = image.src;
    ${image.class}.style.backgroundPosition = image.position;
    ${image.class}.style.backgroundSize = image.size;
  }
}

populate();
