async function populate() {
  const requestURL = 'index.json';
  const request = new Request(requestURL);

  const response = await fetch(request);
  const indexJson = await response.text();

  const updateIndex = JSON.parse(indexJson);
  updateHeader(updateIndex);
}

function updateHeader(obj) {
  const head = document.querySelector('head');
  const titleValue = document.createElement('title');
  const valueIndex = "https://creative-community.space/value/"
  titleValue.textContent = `${obj.title} by ${obj.author}`;
  head.appendChild(titleValue);

  const what = document.querySelector('#what a');
  what.innerText = obj.title;

  const authorValue = document.createElement( "meta" );
  authorValue.setAttribute("name", "author");
  authorValue.setAttribute("content", obj.author);
  head.appendChild(authorValue);

  const descriptionValue = document.createElement( "meta" );
  descriptionValue.setAttribute("name", "description");
  descriptionValue.setAttribute("content", obj.description);
  head.appendChild(descriptionValue);

  const ogURL = document.createElement( "meta" );
  ogURL.setAttribute("property", "og:url");
  ogURL.setAttribute("content", `${valueIndex}${obj.appreciate}${obj.page}`);
  head.appendChild(ogURL);

  const ogIMG = document.createElement( "meta" );
  ogIMG.setAttribute("property", "og:image");
  ogIMG.setAttribute("content", `${valueIndex}${obj.appreciate}${obj.page}${obj.img}`);
  head.appendChild(ogIMG);

  const ogDescription = document.createElement('meta');
  ogDescription.setAttribute("property", "og:description");
  ogDescription.setAttribute("content", obj.description);
  head.appendChild(ogDescription);

  const twitterIMG = document.createElement( "meta" );
  twitterIMG.setAttribute("name", "twitter:image");
  twitterIMG.setAttribute("content", `${valueIndex}${obj.appreciate}${obj.page}${obj.img}`);
  head.appendChild(twitterIMG);
}

populate();
