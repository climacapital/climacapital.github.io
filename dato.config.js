//=================================================//
// Set up functions for Dato                       //
//=================================================//

    const htmlTag = require('html-tag');
    const toHtml = (tags) => (
      tags.map(({ tagName, attributes, content }) => (
        htmlTag(tagName, attributes, content)
      )).join("")
    );

//=================================================//
// Set up dato                                     //
//=================================================//

module.exports = (dato, root, i18n) => {
  ['config/config.toml'].forEach((file) => {
    root.addToDataFile(file, 'toml', {
      Title: dato.global.title,
      params: {
        copyright: dato.global.copyright,
      },
    });
  });


  // Create static pages
  //=================================================//

  // Standard frontmatter for all pages
  function pageFrontMatter(page) {
    return {
      translationKey: page.id,
      title: page.title,
      abstract: page.abstract,
      slug: page.slug,
      content: page.content.toMap(),
    }
  }

  // Get each page
  //=================================================//
  i18n.availableLocales.forEach((locale) => {
    i18n.withLocale(locale, () => {
      root.directory(`content/${locale}`, (dir) => {
        dato.pages.forEach((page) => {
          if(page.slug === 'home') {
            dir.createPost(`_index.md`, "yaml", {
              frontmatter: pageFrontMatter(page)
            });
          } else {
            dir.createPost(`${page.slug}.md`, "yaml", {
              frontmatter: pageFrontMatter(page)
            });
          }
        });
      });
    });
  });

  // Get each team member
  //=================================================//
  i18n.availableLocales.forEach((locale) => {
    i18n.withLocale(locale, () => {
      root.directory(`content/${locale}/team`, (dir) => {
        dato.teams.forEach((team) => {
          dir.createPost(`${team.slug}.md`, "yaml", {
            frontmatter: {
              translationKey: team.id,
              title: team.title,
              lastName: team.lastName,
              firstName: team.firstName,
              headshot: team.headshot.url({auto: 'compress'}),
            },
          });
        });
      });
    });
  });

  // Get global data
  //=================================================//
  const globalData = dato.global;
  i18n.availableLocales.forEach((locale) => {
    i18n.withLocale(locale, () => {
      root.createDataFile(`data/${locale}/global.json`, "json", {
        "title": globalData.title,
        "logo": globalData.logo.url(),
        "copyright": globalData.copyright,
      });
    });
  });
};
