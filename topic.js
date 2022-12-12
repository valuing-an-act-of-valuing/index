async function populate() {
  const requestURL = 'topic.json';
  const request = new Request(requestURL);

  const response = await fetch(request);
  const indexJson = await response.text();

  const indexIndex = JSON.parse(indexJson);
  topicObject(indexIndex);
}

function topicObject(obj) {
  const topics = document.querySelector('#org .random');
  const itemsTopics = obj.topics;

  for (const item of itemsTopics) {
    const topic = document.createElement('li');
    const topicP = document.createElement('p');
    const topicSpan = document.createElement('span');
    const topicA = document.createElement('a');

    topic.setAttribute("class", "list_item");
    topic.setAttribute("data-appreciate", item.type);
    topicP.textContent = item.news;
    topicSpan.textContent = item.as;
    topicA.href = item.link;

    topic.appendChild(topicP);
    topic.appendChild(topicSpan);
    topic.appendChild(topicA);

    topics.appendChild(topic);
  }
}

populate();
