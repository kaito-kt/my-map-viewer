map.on('click', function(e) {
  alert('クリックされました！');  // ← この行を追加

  const lat = e.latlng.lat;
  const lng = e.latlng.lng;

  if (lat > 35.16 && lat < 35.18 && lng > 138.67 && lng < 138.69) {
    document.getElementById('viewer').src = 'images/spot1.jpg';
  } else {
    document.getElementById('viewer').src = 'images/default.jpg';
  }
});
