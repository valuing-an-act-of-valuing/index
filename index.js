async function populate() {
  const requestURL = 'index.json';
  const request = new Request(requestURL);

  const response = await fetch(request);
  const indexJson = await response.text();

  const indexIndex = JSON.parse(indexJson);
  indexHeader(indexIndex);
  indexObject(indexIndex);
}

function indexHeader(obj) {
  const host = location.hostname;
  const head = document.querySelector('head');
  const titleIndex = document.createElement('title');
  titleIndex.textContent = obj.title;
  head.appendChild(titleIndex);

  const authorIndex = document.createElement( "meta" );
  authorIndex.setAttribute("name", "author");
  authorIndex.setAttribute("content", obj.author);
  head.appendChild(authorIndex);

  const descriptionIndex = document.createElement( "meta" );
  descriptionIndex.setAttribute("name", "description");
  descriptionIndex.setAttribute("content", obj.description);
  head.appendChild(descriptionIndex);

  const ogTitle = document.createElement('meta');
  ogTitle.setAttribute("property", "og:title");
  ogTitle.setAttribute("content", obj.title);
  head.appendChild(ogTitle);

  const ogDescription = document.createElement('meta');
  ogDescription.setAttribute("property", "og:description");
  ogDescription.setAttribute("content", obj.description);
  head.appendChild(ogDescription);

  const ogSite = document.createElement( "meta" );
  ogSite.setAttribute("property", "og:site_name");
  ogSite.setAttribute("content", host);
  head.appendChild(ogSite);

  const ogURL = document.createElement( "meta" );
  ogURL.setAttribute("property", "og:url");
  ogURL.setAttribute("content", `host/${obj.href}`);
  head.appendChild(ogURL);

  const ogIMG = document.createElement( "meta" );
  ogIMG.setAttribute("property", "og:image");
  ogIMG.setAttribute("content", `host/${obj.href}${obj.src}`);
  head.appendChild(ogIMG);

  const twitterIMG = document.createElement( "meta" );
  twitterIMG.setAttribute("name", "twitter:image");
  twitterIMG.setAttribute("content", `host/${obj.href}${obj.src}`);
  head.appendChild(twitterIMG);
}

function indexObject(obj) {
  const org = document.querySelector('#org .random');
  const itemsORG = obj.org;

  for (const item of itemsORG) {
    const itemORG = document.createElement('li');
    const itemP = document.createElement('p');
    const itemSpan = document.createElement('span');
    const itemA = document.createElement('a');

    itemORG.setAttribute("class", "list_item");
    itemORG.setAttribute("data-appreciate", item.appreciate);
    itemP.textContent = item.date;
    itemSpan.textContent = item.name;
    itemA.href = `host/${obj.href}${item.appreciate}${item.url}`;

    itemORG.appendChild(itemP);
    itemORG.appendChild(itemSpan);
    itemORG.appendChild(itemA);

    org.appendChild(itemORG);
  }
}

populate();
