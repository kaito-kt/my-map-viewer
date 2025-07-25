const map = L.map('map').setView([35.17, 138.68], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// クリックイベントで画像を変更
map.on('click', function(e) {
  const lat = e.latlng.lat;
  const lng = e.latlng.lng;

  // シンプルな条件：範囲内なら spot1.jpg を表示
  if (lat > 35.16 && lat < 35.18 && lng > 138.67 && lng < 138.69) {
    document.getElementById('viewer').src = 'images/spot1.jpg';
  } else {
    document.getElementById('viewer').src = 'images/default.jpg';
  }
});
