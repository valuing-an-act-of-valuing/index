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
  descriptionValue.setAttribute("name", "description");
  descriptionValue.setAttribute("content", obj.description);
  head.appendChild(descriptionValue);

  const ogSite = document.createElement( "meta" );
  ogSite.setAttribute("property", "og:site_name");
  ogSite.setAttribute("content", obj.site_name);
  head.appendChild(ogSite);

  const ogURL = document.createElement( "meta" );
  ogURL.setAttribute("property", "og:url");
  ogURL.setAttribute("content", `${obj.site_name}${obj.url"}`);
  head.appendChild(ogURL);

  const ogIMG = document.createElement( "meta" );
  ogIMG.setAttribute("property", "og:image");
  ogIMG.setAttribute("content", `${obj.site_name}${obj.url}${obj.img}`);
  head.appendChild(ogIMG);

  const ogDescription = document.createElement('meta');
  ogDescription.setAttribute("property", "og:description");
  ogDescription.setAttribute("content", obj.description);
  head.appendChild(ogDescription);

  const twitterIMG = document.createElement( "meta" );
  twitterIMG.setAttribute("name", "twitter:image");
  twitterIMG.setAttribute("content", `${obj.site_name}${obj.url}${obj.img}`);
  head.appendChild(twitterIMG);
}

function indexObject(obj) {
  const distribute = document.querySelector('#buynow h3');
  const itemDistribute = obj.distribute;

  for (const item of itemDistribute) {
    const distributeA = document.createElement('a');
    distributeA.setAttribute("class", "ja");
    distributeA.setAttribute("target", "_blank");
    distributeA.setAttribute("href", item.link);
    distributeA.textContent = item.to;
    distributeA.style.display = item.display;

    distribute.appendChild(distributeA);
  }
}

populate();
