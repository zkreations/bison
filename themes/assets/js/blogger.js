// <![CDATA[
// Cortesía de JGMateran => https://github.com/JGMateran
window.addEventListener('DOMContentLoaded', () => {
  const loadScript = (src) => new Promise((resolve, reject) => {
    let script = document.createElement('script');
    script.src = src; script.onload = resolve; script.onerror = reject;
    document.head.appendChild(script);
  })
  document.querySelector('[data-bjs]') && loadScript('https://cdn.jsdelivr.net/npm/@zkreations/bjs@1.0/dist/js/blogger.min.js')
  // ]]>
    .then(() => {
      const options = {
        homepage: '<data:const.homeUrl/>',
        locale: '<data:blog.locale/>',
        image: '<data:const.image/>',
        avatarImage: '<data:skin.vars.d_avatar/>',
        authorUrl: '<data:skin.vars.d_profileUrl/>',
        snippet: '<data:skin.vars.e_truncate/>',
        empty: "<div class='alert col-full'><data:messages.noResultsFound/></div>",
        avatarSize: 'w30-h30-p-k-no-nu-<data:skin.vars.f_imageParams/>',
        pageClass: 'btn btn-outline',
        labels: {
          filter: ("<data:skin.vars.e_definedTags/>").split(",").map(l => l.trim()),
          length: <b:eval expr='[true] contains data:skin.vars.e_definedTags ? 1 : 3'/>,
          prefixClass: "ftag ftag-",
          containerClass: "card-ftag absolute t-0 z-10 pt-2 fw-500 capitalize",
        },
      };
    //- <b:if cond="data:view.isHomepage and data:widgets.Text any (w =&gt; w.title contains &quot;content: \&quot;section\&quot;&quot;)">
      BloggerJS.initSection(options);
    //- </b:if>
    //- <b:if cond="data:widgets.Text any (w =&gt; w.title contains &quot;content: \&quot;comments\&quot;&quot;)">
      BloggerJS.initComments({
        homepage: options.homepage,
        avatarImage: options.avatarImage,
        avatarSize: 's45-c-<data:skin.vars.f_imageParams/>',
      });
    //- </b:if>
    //- <b:if cond="data:view.isPost and data:skin.vars.p_related">
      BloggerJS.initRelated({
        homepage: options.homepage,
        image: options.image,
      })
    //- </b:if>
    //- <b:if cond="([&quot;numeric&quot;, &quot;infinite&quot;, &quot;load&quot;] contains data:skin.vars.f_pagination)">
    //- <b:if cond="data:view.isMultipleItems and !data:view.isArchive and !data:view.search.query">
    //- <b:if cond="(data:skin.vars.f_more and !data:view.isHomepage) or !data:skin.vars.f_more">
      BloggerJS.initEntry({/*<![CDATA[*/
        ...options,
        numberClass: 'btn btn-outline bjs-number',
        nextPageClass: 'btn btn-outline bjs-next-page',
        prevPageClass: 'btn btn-outline bjs-prev-page',
        firstPageClass: 'btn btn-outline bjs-first-page',
        lastPageClass: 'btn btn-outline bjs-last-page',
        buttonClass: 'btn btn-full bjs-button',
        dotsPageClass: 'flex items-center fs-3 bjs-dots',/*]]>*/
        prevText: "<svg class='i i-arrow-left' viewBox='0 0 24 24'><path d='M5 12h14m-7-7-7 7 7 7'></path></svg><data:skin.vars.t_prev/>",
        nextText: "<data:skin.vars.t_next/><svg class='i i-arrow-right' viewBox='0 0 24 24'><path d='M5 12h14m-7-7 7 7-7 7'></path></svg>",
      })
    //- </b:if>
    //- </b:if>
    //- </b:if>
     })
  .catch(console.error)
});