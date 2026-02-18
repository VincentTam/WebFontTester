function applyFont() {
  const url = convertGitHubBlobToRaw(document.getElementById('fontUrl').value.trim());
  const styleTag = document.getElementById('dynamic-font-style');
  const status = document.getElementById('status');
  const footerStatus = document.getElementById('footer-status');

  if (!url) return;

  styleTag.innerHTML = `
        @font-face {
            font-family: 'TestFont';
            src: url('${url}');
            font-display: block;
        }
    `;

  status.innerHTML = "⌛ Loading...";
  // Use the FontFaceSet API to detect when it's actually ready
  document.fonts.ready.then(() => {
    // Check if our specific 'TestFont' is loaded
    if (document.fonts.check("1em TestFont")) {
      status.innerHTML = "✅ Font loaded: <strong>" + url.split('/').pop() + "</strong>";
      status.classList.remove('text-danger');
      status.classList.add('text-success');
    } else {
      status.innerHTML = "❌ Font could not be matched. Check URL/CORS.";
      status.classList.remove('text-success');
      status.classList.add('text-danger');
    }
  }).catch(err => {
    status.innerHTML = "❌ Error: " + err.message;
    status.classList.remove('text-success');
    status.classList.add('text-danger');
  });
}

function convertGitHubBlobToRaw(blobUrl) {
  return blobUrl.replace(
    /https:\/\/github\.com\/([^\/]+)\/([^\/]+)\/blob\/([^\/]+)\//,
    'https://raw.githubusercontent.com/$1/$2/$3/'
  );
}
