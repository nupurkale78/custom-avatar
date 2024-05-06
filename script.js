document.getElementById('choose-file-btn').addEventListener('click', function() {
  document.getElementById('imageUpload').click(); // Trigger the file input
});

document.getElementById('imageUpload').addEventListener('change', function(event) {
  var file = event.target.files[0];
  if (file.size > 10485760) { // 10MB limit
      alert('File is too large. Maximum size is 10MB.');
      return;
  }
  var reader = new FileReader();
  reader.onload = function(e) {
      var profileImage = document.getElementById('profileImage');
      profileImage.src = e.target.result;
  };
  reader.readAsDataURL(file);
});

document.getElementById('uploadButton').addEventListener('click', function() {
  var profileImage = document.getElementById('profileImage').src;
  if (profileImage) {
      // Here you would typically make an AJAX request to your server to upload the image
      console.log('Profile image data:', profileImage);
      alert('Your profile picture has been uploaded.');
  } else {
      alert('Please select an image first.');
  }
});

document.getElementById('generateButton').addEventListener('click', function() {
  var style = document.getElementById('avatarStyle').value;
  var seed = document.getElementById('avatarSeed').value;
  // Ensure you are using the correct API version and endpoint
  var avatarUrl = `https://api.dicebear.com/8.x/${style}/svg?seed=${encodeURIComponent(seed)}`;

  document.getElementById('avatarImage').src = avatarUrl;
});
