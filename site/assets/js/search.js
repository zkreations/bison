{{ $json := resources.Get "json/index.json" }}
{{ $data := $json | resources.ExecuteAsTemplate $json . | resources.Minify | resources.Fingerprint }}

!(function () {
  const dataJSON = '{{ $data.RelPermalink }}';
  const input = document.getElementById('search-input');
  const results = document.getElementById('search-results');

  const stringToHTML = (str) => {
    let parser = new DOMParser();
    let doc = parser.parseFromString(str, 'text/html');
    return doc.body.firstChild;
  };

  function init() {
    input.removeEventListener('focus', init);
    input.required = true;

    fetch(dataJSON)
      .then(pages => pages.json())
      .then(pages => {
        window.docsIndex = FlexSearch.create('balance', {
          doc: {
            id: 'id',
            field: ['title', 'summary'],
            store: ['title', 'url', 'summary', 'icon' ]
          }
        });
        window.docsIndex.add(pages);
      })
      .then(() => input.required = false)
      .then(search);
  }

  function truncate(str, length) {
    return str.length > length
      ? str.slice(0, length) + '...'
      : str;
  }

  function search() {
    while (results.firstChild) {
      results.removeChild(results.firstChild);
    }

    if (!input.value) {
      return;
    }

    const hits = window.docsIndex.search(input.value, 10);

    hits.forEach(function (page) {
      const content = truncate(page.summary, 100)
      const data = stringToHTML(`<li class="search-item">
        <a class="search-link" href="${page.url}">
          <div class="search-type">
            <svg class="i i-${page.icon}" viewBox="0 0 24 24"><use href="/svg-sprite.svg#${page.icon}"></use></svg>
            <span class="search-title">${page.title}</span>
          </div>
          ${content === "" ? "" : '<p class="search-summary">' + content + '</p>'}
        </a>
      </li>`)
      results.appendChild(data);
    });
  }

  function initSearch(input, container) {
    if (!input || !container) {
      return
    }

    input.addEventListener('focus', init);
    input.addEventListener('keyup', search);
  }

  initSearch(input, results)

})(this);
