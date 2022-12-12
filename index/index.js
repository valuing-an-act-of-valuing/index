async function populate() {
  const requestURL = '../topic.json';
  const request = new Request(requestURL);

  const response = await fetch(request);
  const indexJson = await response.text();

  const topicIndex = JSON.parse(indexJson);
  updateHeader(topicIndex);
  updateObject(topicIndex);
}

function updateHeader(obj) {
  const head = document.querySelector('head');
  const titleValue = document.createElement('title');
  const valueIndex = "https://creative-community.space/value/"
  titleValue.textContent = `${obj.title} by ${obj.author}`;
  head.appendChild(titleValue);

  const what = document.querySelector('#what a');
  what.innerText = obj.title;

  const you = document.querySelector('#you');
  you.innerText = obj.author;

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

function updateObject(obj) {
  const topic = document.querySelector('#update');
  const itemTopic = obj.topics;

  for (const item of itemTopic) {
    const itemTopic = document.createElement('div');
    const itemIMG = document.createElement('img');
    const itemPtitle = document.createElement('p');
    const itemPinfo = document.createElement('p');
    const itemPlink = document.createElement('p');
    const itemB = document.createElement('b');
    const itemBR = document.createElement('br');
    const itemSpan = document.createElement('span');
    const itemA = document.createElement('a');

    itemTopic.setAttribute("class", "other_app");
    itemIMG.style.display = item.img;
    itemIMG.src = `${item.link}${item.src}`;
    itemPtitle.setAttribute("class", "tt");
    itemB.textContent = item.news;
    itemSpan.textContent = item.as;
    itemPinfo.textContent = item.more;
    itemPlink.setAttribute("class", "link");
    itemA.href = item.link;
    itemA.textContent = "Read More";

    itemTopic.appendChild(itemIMG);
    itemTopic.appendChild(itemPtitle);
    itemPtitle.appendChild(itemB);
    itemPtitle.appendChild(itemBR);
    itemPtitle.appendChild(itemSpan);
    itemTopic.appendChild(itemPinfo);
    itemTopic.appendChild(itemPlink);
    itemPlink.appendChild(itemA);

    topic.appendChild(itemTopic);
  }
}

populate();
