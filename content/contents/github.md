---
# Common-Defined params
title: "GitHub"
description: "description"
menu: side # Optional, add page to a menu. Options: main, side, footer

# Theme-Defined params
authorbox: false
thumbnail_alt: "Thumbnail" # alt text for thumbnail image, be screen reader friendly!
thumbnail_hide_post: false # Hide thumbnail on single post view
pager: true # Enable pager navigation (prev/next) for specific page
toc: true # Enable Table of Contents for specific page
# sidebar: "right" # Enable sidebar (on the right side) per page
# widgets: # Enable sidebar widgets in given order per page
#   - "search"
#   - "recent"
#   - "taglist"
sitemap_hide: false # Do not add this page to the sitemap
scripts_head: # optional: include some literal <head> matter, e.g. for page-specific JS imports; safeHTML-filtered
  - "<!---->"
scripts_body: # optional: include some literal html just before <body/> tag, e.g. JS initialization; safeHTML-filtered
  - "<!-- -->"
---

![GitHub Stats](https://github-readme-stats.vercel.app/api?username=dai08srhg&show_icons=true&theme=tokyonight)

<img src="https://ghchart.rshah.org/dai08srhg" />


<!-- コメント　<ul id="github-achievements"></ul> -->
<script>
  fetch('https://api.github.com/users/dai08srhg/repos')
    .then(response => response.json())
    .then(data => {
      const repoList = document.getElementById('github-achievements');
      data.forEach(repo => {
        const li = document.createElement('li');
        li.innerHTML = `<a href="${repo.html_url}" target="_blank">${repo.name}</a>`;
        repoList.appendChild(li);
      });
    });
</script>