async function populate() {
  const requestURL = '../index.json';
  const request = new Request(requestURL);

  const response = await fetch(request);
  const indexJson = await response.text();

  const updateIndex = JSON.parse(indexJson);
  updateObject(updateIndex);
}

function updateObject(obj) {
  const topic = document.querySelector('#update');
  const itemTopic = obj.org;

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
    itemIMG.src = `/value/${item.appreciate}${item.url}${item.src}`;
    itemPtitle.setAttribute("class", "tt");
    itemB.textContent = item.date;
    itemSpan.textContent = item.name;
    itemPinfo.textContent = item.info;
    itemPlink.setAttribute("class", "link");
    itemA.href = `/value/${item.appreciate}${item.url}`;
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
