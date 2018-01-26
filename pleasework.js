document.getElementById('submit').addEventListener('click', function () {
  var resource = {
    type: document.getElementById('type').value,
    url: document.getElementById('link').value
  };

  if (resource.type !== 'null' && resource.url !== '') {
    alert(resource.type + ' // ' + resource.url);
  } else {
    alert('Be sure to select a resource type and enter a URL to your resource.');
  }
});
