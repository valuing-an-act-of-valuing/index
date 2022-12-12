
<!DOCTYPE html>
<html lang="ja">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="format-detection" content="telephone=no" />
  <meta property="og:locale" content="ja_JP" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="https://creative-community.space/value/" />

  <meta name="twitter:card" content="summary" />
  <meta name="twitter:site" content="@pe_hu_" />
  <link rel="stylesheet" type="text/css" href="icon.css" />
  <link rel="stylesheet" type="text/css" href="../value.css" />

  <style>

  #what a,
  #you {
    color: #000;
    text-decoration: none;
    transition: 2.5s all;
  }

  #what a:hover,
  #you:hover  {
    color: red;
    transition: 1s all;
  }

  #what a {
    border-left: solid 1px red;
    padding-left: 0.5em;
  }

  #what a:hover  {
    border-left: solid 1px #000;
  }

  #update {
    display: flex;
    flex-direction: column-reverse;
  }

  #update div {
    clear: both;
    display: block;
    width: 100%;
  }

  #update div .tt b,
  #update div .link {
    font-size: 125%;
  }

  #update div .tt b {
    line-height: 150%;
  }

  #update div .link a {
    color: #000;
    border: 1px solid;
    border-radius: 50%;
    display: inline-block;
    padding: 0.25rem 0.75rem;
    text-decoration: none;
    transition: 2.5s all;
  }

  #update div .link a:hover {
    color: #fff;
    background-color: red;
    transition: 1.5s all;
  }

  #update img {
    float: right;
    margin: 0 0 1rem 1rem;
    width: auto;
    height: auto;
    max-width: 10rem;
    max-height: 10rem;
    pointer-events: none;
    user-select: none;
    filter: blur(0.5rem);
    -webkit-filter: blur(0.5rem);
    transition: all 2500ms ease;
  }

  #update div:hover img {
    filter: blur(0);
    -webkit-filter: blur(0);
    transition: all 1000ms ease;
  }
  </style>

  <link href="https://fonts.googleapis.com/css2?family=Source+Serif+Pro:ital,wght@0,300;0,600;0,700;1,600&display=swap" rel="stylesheet">
</head>

<body>
  <div id="icon">
    <h1>
      <u>this is</u> a
      <i>space</i> for
      <b>valuing an act of valuing</b>
    </h1>
  </div>

  <div id="update"></div>

  <div id="about" class="ja_app">
    わたしたちが「大切にすること」はただ一つ。
    <br />誰にでもある「何かを大切に思う気持ち」を平等に評価すること。<br />
    <br />誰にもわかってもらえないかもしれないけど、自分にとっては大切なことやもの。
    <br />特別な人からの贈り物とか、ずっと使っている愛着のあるものだったり、自慢したいことだったり、もうここにはないけど時々思い出す瞬間とか。<br />
    <br />いろいろな人たちの「大切にすること」を知ることが、「大切にすることを大切にする」ための第一歩。<br />
    <br />誰からの評価も批判も気にならないほど、大切にすることを大切にするために、いろいろな人たちが大切にすることやものをここに集めます。
  </div>

  <div id="what" class="ja"><a href="#about"></a></div>
  <a id="you" href="#update">
    <?php
    $mod = filemtime("../index.json");
    date_default_timezone_set('Asia/Tokyo');
    print "" . date("Y-m-d H:i:s", $mod);
    ?>
    更新
  </a>

  <a class="back" href="#" onclick="window.history.back(); return false;">↩︎</a>
  <script src="index.js"></script>
  <script src="update.js"></script>

  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script type="text/javascript">
  $(function () {
    // #で始まるアンカーをクリックした場合に処理
    $('a[href^=#]').click(function () {
      // スクロールの速度
      var speed = 1500; // ミリ秒
      var href = $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top;
      $('body,html').animate({
        scrollTop: position
      }, speed, 'swing');
      return false;
    });
  });
  </script>
</body>

</html>
