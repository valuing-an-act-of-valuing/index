async function populate() {
  const requestURL = 'index.json';
  const request = new Request(requestURL);

  const response = await fetch(request);
  const json = await response.text();

  const index = JSON.parse(json);
  indexJson(index);
}

function indexJson(obj) {
  const head = document.querySelector('head');
  const titleHead = document.createElement('title');
  titleHead.textContent = ${obj.title};
  head.appendChild(titleHead);
}

populate();
