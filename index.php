<!DOCTYPE html>
<html lang="ja">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="format-detection" content="telephone=no" />
  <meta property="og:locale" content="ja_JP" />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:site" content="@pe_hu_" />
  <link rel="icon" href="index/icon.png">
  <link rel="apple-touch-icon" href="index/icon.png">
  <link rel="stylesheet" type="text/css" href="index.css" />
  <link rel="stylesheet" type="text/css" href="online/value.css" />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Source+Serif+Pro:ital,wght@0,300;0,600;0,700;1,600&display=swap" rel="stylesheet">
  <style type="text/css">
  .pehu {
    font-family: "MS Mincho", "SimSong", serif;
  }
  </style>
</head>

<body>

  <form id="index">
    <p>Index /
      <button type="button" onclick="window.location.reload(true);">valuing an act of valuing</button>
    </p>
    <ul class="search-box" id="click">
      <li>
        <input type="radio" name="appreciate" value="topic" id="topic">
        <label for="topic" class="label">Topic</label>
      </li>
    <!--
      <li>
        <input type="radio" name="appreciate" value="show" id="show">
        <label for="show" class="label">Show</label>
      </li>
    -->
      <li>
        <input type="radio" name="appreciate" value="gallery" id="gallery">
        <label for="gallery" class="label">Gallery</label>
      </li>
      <hr />
      <li>
        <input type="radio" name="appreciate" value="thing" id="thing">
        <label for="thing" class="label">Thing</label>
      </li>
      <li>
        <input type="radio" name="appreciate" value="object" id="object">
        <label for="object" class="label">Object</label>
      </li>
      <li>
        <input type="radio" name="appreciate" value="people" id="people">
        <label for="people" class="label">People</label>
      </li>
      <li>
        <input type="radio" name="appreciate" value="valuing" id="valuing">
        <label for="valuing" class="label">Valuing</label>
      </li>
    </ul>
  </form>

  <div id="org">
    <ul>
      <li class="list_item" data-appreciate="topic">
        <p>あなたの大切なものは何ですか？</p>
        <span>this is a entry form for valuing an act of valuing</span>
        <a href="/value/online/"></a>
      </li>
    </ul>

    <ul class="random"></ul>
    <script src="topic.js"></script>
    <script src="index.js"></script>
  </div>

  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script src="org.js"></script>
  <script type="text/javascript">
  function shuffleContent(container) {
    var content = container.find("> *");
    var total = content.length;
    content.each(function() {
      content.eq(Math.floor(Math.random() * total)).prependTo(container);
    });
  }
  $(function() {
    shuffleContent($(".random"));
  });
  </script>

  <a id="update" href="/value/index/">
    <?php
    $mod = filemtime("index.json");
    date_default_timezone_set('Asia/Tokyo');
    print "" . date("Y-m-d H:i:s", $mod);
    ?>
    更新
  </a>

  <div id="credit" class="back">
    Presented by
    <a href="#" class="pehu">∧°┐</a>
  </div>
</body>

</html>
