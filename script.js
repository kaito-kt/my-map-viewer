// 地図の初期化
const map = L.map('map').setView([35.17, 138.68], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// Photo Sphere Viewer のインスタンスを保持
let viewer = null;

// 地図クリック時の処理
map.on('click', function(e) {
  const lat = e.latlng.lat;
  const lng = e.latlng.lng;

  let imagePath = 'images/default.jpg';

  // 特定範囲をクリックしたら別画像に切り替える
  if (lat > 35.16 && lat < 35.18 && lng > 138.67 && lng < 138.69) {
    imagePath = 'images/spot1.jpg';
  }

  // ビューアを初回だけ作成、それ以降は画像だけ切り替え
  if (viewer) {
    viewer.setPanorama(imagePath);
  } else {
    viewer = new PhotoSphereViewer.Viewer({
      container: document.getElementById('viewer'),
      panorama: imagePath,
      loadingImg: 'https://photo-sphere-viewer.js.org/assets/photosphere-logo.gif',
      navbar: true
    });
  }
});
