<?php
// Обработка загруженных изображений
$uploadedImages = '';
if (!empty($_FILES['file']['name'][0])) {
  foreach ($_FILES['file']['name'] as $key => $name) {
    if ($_FILES['file']['error'][$key] === 0 && move_uploaded_file($_FILES['file']['tmp_name'][$key], 'uploads/' . $name)) {
      $uploadedImages .= '<img src="uploads/' . $name . '" alt="Изображение">';
    }
  }
}
echo $uploadedImages;
?>