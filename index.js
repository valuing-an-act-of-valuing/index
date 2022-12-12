async function populate() {
  const requestURL = 'index.json';
  const request = new Request(requestURL);

  const response = await fetch(request);
  const indexJson = await response.text();

  const indexORG = JSON.parse(indexJson);
  indexHeader(indexORG);
  indexObject(indexORG);
}

function indexHeader(obj) {
  const head = document.querySelector('head');
  const titleORG = document.createElement('title');
  titleORG.textContent = ${obj.title};
  head.appendChild(titleORG);

  const authorORG = document.createElement( "meta" );
  authorORG.setAttribute("name", "author");
  authorORG.setAttribute("content", obj.author);
  head.appendChild(authorORG);

  const descriptionORG = document.createElement( "meta" );
  descriptionORG.setAttribute("name", "description");
  descriptionORG.setAttribute("content", obj.description);
  head.appendChild(descriptionORG);
}

function indexObject(obj) {
  const org = document.querySelector('#org .random');
  const itemsORG = obj.org;

  for (const item of itemsORG) {

    org.appendChild(itemORG);
  }
}

populate();
