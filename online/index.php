<?php

mb_language("ja");
mb_internal_encoding("UTF-8");

// メッセージを保存するファイルのパス設定
define('FILENAME', 'backup.csv');

// 変数の初期化
$page_flag = 0;

if (!empty($_POST['btn_confirm'])) {

	$page_flag = 1;
	session_start();
	$_SESSION['page'] = true;
} elseif (!empty($_POST['btn_submit'])) {

	if ($file_handle = fopen(FILENAME, "a")) {

		// 書き込むデータを作成
		$data = "'" . $_POST['title'] . "','" . $_POST['name'] . "',,'" . $_POST['language'] . "','" . nl2br($_POST['essay']) . "'\n\n";

		// 書き込み
		fwrite($file_handle, $data);

		// ファイルを閉じる
		fclose($file_handle);
	}

	session_start();
	if (!empty($_SESSION['page']) && $_SESSION['page'] === true) {

		$page_flag = 2;

		// 変数とタイムゾーンを初期化
		$header = null;
		$auto_reply_subject = null;
		$auto_reply_text = null;
		$admin_reply_subject = null;
		$admin_reply_text = null;
		date_default_timezone_set('Asia/Tokyo');

		// ヘッダー情報を設定
		$header = "MIME-Version: 1.0\n";
		$header .= "From: ∧°┐ <we.are.pe.hu@gmail.com>\n";
		$header .= "Reply-To: ∧°┐ <we.are.pe.hu@gmail.com>\n";

		// 件名を設定
		$auto_reply_subject = '大切にすることを大切にするための場所';

		// 本文を設定
		$auto_reply_text .= "Thank You for Submit\n\n";
		$auto_reply_text .= "大切なもの | What do you value?\n" . $_POST['title'] . "\n\n";

		$auto_reply_text .= "\n" . nl2br($_POST['essay']) . "\n\n";
		$auto_reply_text .= "\n" . $_POST['name'] . "\n\n";
		$auto_reply_text .= "Posted on " . date("Y-m-d H:i:s") . "\n\n";
		$auto_reply_text .= "creative-community.space/value/";

		mb_send_mail($_POST['email'], $auto_reply_subject, $auto_reply_text, $header);


		// 件名を設定
		$admin_reply_subject = '大切にすることを大切にするための場所';

		// 本文を設定
		$admin_reply_text .= "大切なもの | What do you value?\n" . $_POST['title'] . "\n\n";

		$admin_reply_text .= "\n" . nl2br($_POST['essay']) . "\n\n";
		$admin_reply_text .= "Name " . $_POST['name'] . "\n";
		$admin_reply_text .= "Email " . $_POST['email'] . "\n\n\n";

		$admin_reply_text .= "Posted on " . date("Y-m-d H:i:s") . "\n\n";
		$admin_reply_text .= "creative-community.space/value/";

		mb_send_mail('pehu@creative-community.space', $admin_reply_subject, $admin_reply_text, $header);
	} else {
		$page_flag = 0;
	}
}
?>

<!DOCTYPE html>
<html lang="ja">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="format-detection" content="telephone=no" />
	<meta name="author" content="∧°┐">
	<meta name="description" content="あなたの大切なものは何ですか？">

	<title>大切にすることを大切にするための場所</title>
	<meta property="og:title" content="大切にすることを大切にするための場所" />
	<meta property="og:description" content="あなたの大切なものは何ですか？" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://creative-community.space/value/online/" />
	<meta property="og:image" content="https://creative-community.space/value/icon.png" />
	<meta property="og:site_name" content="creative-community.space" />
	<meta property="og:locale" content="ja_JP" />

	<meta name="twitter:card" content="summary" />
	<meta name="twitter:site" content="@pe_hu_" />
	<meta name="twitter:image" content="https://creative-community.space/value/icon.png" />

	<link rel="stylesheet" type="text/css" href="style.css" />
	<link rel="stylesheet" type="text/css" href="../value.css" />
	<link rel="icon" href="https://creative-community.space/value/icon.png">
	<link href="https://fonts.googleapis.com/css2?family=Source+Serif+Pro:ital,wght@0,300;0,600;0,700;1,600&display=swap" rel="stylesheet">
</head>

<body>
	<?php if ($page_flag === 1) : ?>
		<form action="" method="post">
			<div id="what" class="<?php echo $_POST['language']; ?>">
				<b><?php echo $_POST['title']; ?></b>
			</div>
			<div id="you">
				<?php echo $_POST['name']; ?>
			</div>
			<div class="<?php echo $_POST['language']; ?>_app">
				<?php echo nl2br($_POST['essay']); ?>
			</div>

			<p id="btn_submit">
				Email <b><?php echo $_POST['email']; ?></b><br/><br/>
				<input type="submit" value="Submit"><br/>
				<input type="submit" value="Back" onClick="history.back(); return false;">
			</p>

			<input type="hidden" name="title" value="<?php echo $_POST['title']; ?>">
			<input type="hidden" name="name" value="<?php echo $_POST['name']; ?>">
			<input type="hidden" name="email" value="<?php echo $_POST['email']; ?>">
			<input type="hidden" name="language" value="<?php echo $_POST['language']; ?>">
			<input type="hidden" name="essay" value="<?php echo $_POST['essay']; ?>">
		</form>
	<?php elseif ($page_flag === 2) : ?>

		<div class="thankyou">
			<h1>Thank You for Submit</h1>
			<p>投稿フォームに入力いただいたメールアドレスに、あなたの大切なものを自動返信します。</p>
			<p><u>※ 投稿後、メールが届かなかった場合は、お手数ですが pehu@creative-community.space までお問合わせください。</u></p>
			<br />
			<p>あなたの大切なものを、このウェブサイトに公開する準備が整いましたら、改めてご連絡いたします。</p>
		</div>
		<a id="title" href="/value/" target="_parent">大切にすることを大切にするための場所</a>

	<?php else : ?>
		<a id="title" href="https://creative-community.space/value/" target="_parent">大切にすることを大切にするための場所</a>
		<section id="submit" class="form">

			<form action="" method="post">

				<h1>Q. What do you value?</h1>
				<p>Title<br />
					<input type="text" name="title" value="<?php if (!empty($_POST['title'])) {
						echo $_POST['title'];
					} ?>" placeholder="あなたの大切なものは何ですか？" required>
				</p>
				<p>Your Name<br />
					<input type="name" name="name" value="<?php if (!empty($_POST['name'])) {
						echo $_POST['name'];
					} ?>" placeholder="名前" required>
				</p>
				<p style="display:none;">Link<br />
					<input type="text" name="link" value="none">
				</p>
				<p>Your Email<br />
					<input type="email" name="email" value="<?php if (!empty($_POST['email'])) {
						echo $_POST['email'];
					} ?>" placeholder="メールアドレス" required>
				</p>
				<p>Text by
					<input type="radio" name="language" value="ja" <?php if (!empty($_POST['language']) && $_POST['language'] === "ja") {
						echo 'checked';
					} ?> required> 日本語
					<input type="radio" name="language" value="en" <?php if (!empty($_POST['language']) && $_POST['language'] === "en") {
						echo 'checked';
					} ?> required> English
					<input type="radio" name="language" value="other" <?php if (!empty($_POST['language']) && $_POST['language'] === "other") {
						echo 'checked';
					} ?> required> Other Language
					<br />
					<textarea name="essay" rows="12.5" placeholder="あなたの大切なものは何ですか？" required><?php if (!empty($_POST['essay'])) {
						echo $_POST['essay'];
					} ?></textarea>
				</p>

				<p><input type="submit" name="btn_confirm" value="Next"></p>
			</form>
		</section>
		<a class="back" href="#" onclick="window.history.back(); return false;">↩︎</a>
	<?php endif; ?>
</body>

</html>
