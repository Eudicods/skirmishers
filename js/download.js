const url_lookup = {
  // Rules
  'rules' : 'https://raw.githubusercontent.com/Eudicods/skirmishers/rules-pdf/skirmishers.pdf',
}

function downloadURL(url) {
  const link = document.createElement('a');

  // Generate a element
  link.href          = url;
  link.target        = '_blank';
  link.download      = '';
  link.style.display = 'none';

  // Trigger download
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function triggerDownloadOnLoad() {
  const url     = window.location.href;
  const keyword = url.split('?')[1];
  const pdf_url = url_lookup[keyword];

  // Trigger download if ? present and corresponds to valid target
  if (pdf_url) downloadURL(pdf_url);
}

window.onload = triggerDownloadOnLoad;
