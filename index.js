async function populate() {
  const requestURL = 'index.json';
  const request = new Request(requestURL);

  const response = await fetch(request);
  const json = await response.text();

  const index = JSON.parse(json);
  indexValue(index);
}

function indexValue(obj) {
  const head = document.querySelector('head');

  const titleHead = document.createElement('title');
  titleHead.textContent = `${obj.title}`;
  head.appendChild(titleHead);

  const authorHead = document.createElement( "meta" );
  authorHead.setAttribute("name", "author");
  authorHead.setAttribute("content", obj.author);
  head.appendChild(authorHead);

  const descriptionHead = document.createElement('meta');
  descriptionHead.setAttribute("name", "description");
  descriptionHead.setAttribute("content", obj.description);
  head.appendChild(descriptionHead);

  const ogTitle = document.createElement('meta');
  ogTitle.setAttribute("property", "og:title");
  ogTitle.setAttribute("content", obj.title);
  head.appendChild(ogTitle);

  const ogDescription = document.createElement('meta');
  ogDescription.setAttribute("property", "og:description");
  ogDescription.setAttribute("content", obj.description);
  head.appendChild(ogTitle);

  const ogURL = document.createElement( "meta" );
  ogURL.setAttribute("property", "og:site_name");
  ogURL.setAttribute("content", `${obj.site}`);
  head.appendChild(ogURL);

  const ogURL = document.createElement( "meta" );
  ogURL.setAttribute("property", "og:url");
  ogURL.setAttribute("content", `${obj.site}${obj.page}`);
  head.appendChild(ogURL);

  const ogIMG = document.createElement( "meta" );
  ogIMG.setAttribute("property", "og:image");
  ogIMG.setAttribute("content", `${obj.site}${obj.page}${obj.card}`);
  head.appendChild(ogIMG);

  const twitterIMG = document.createElement( "meta" );
  twitterIMG.setAttribute("name", "twitter:image");
  twitterIMG.setAttribute("content", `${obj.site}${obj.page}${obj.card}`);
  head.appendChild(twitterIMG);
}

populate();
