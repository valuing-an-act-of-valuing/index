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
  titleHead.textContent = ${obj.title};
  head.appendChild(titleHead);

  const authorHead = document.createElement( "meta" );
  authorHead.setAttribute("name", "author");
  authorHead.setAttribute("content", obj.author);
  head.appendChild(authorHead);

  const descriptionHead = document.createElement('meta');
  descriptionHead.setAttribute("name", "description");
  descriptionHead.setAttribute("content", obj.description);
  head.appendChild(descriptionHead);
}

populate();
