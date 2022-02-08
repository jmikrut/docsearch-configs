new Crawler({
  appId: '',
  apiKey: '',
  rateLimit: 8,
  startUrls: [
    'https://spatie.be/docs/laravel-backup/v1/',
    'https://spatie.be/',
    'https://spatie.be/docs/laravel-backup/v2/',
    'https://spatie.be/docs/laravel-backup/v3/',
    'https://spatie.be/docs/laravel-backup/v4/',
    'https://spatie.be/docs/laravel-backup/v5/',
    'https://spatie.be/docs/laravel-backup/v6/',
    'https://spatie.be/docs/laravel-backup/v7/',
    'https://spatie.be/docs/laravel-backup/v8/',
    'https://spatie.be/docs/laravel-backup/v9/',
    'https://spatie.be/docs/laravel-backup/v10/',
    'https://spatie.be/docs/laravel-backup/v11/',
    'https://spatie.be/docs/laravel-mailcoach/v1/',
    'https://spatie.be/docs/laravel-mailcoach/v2/',
    'https://spatie.be/docs/laravel-mailcoach/v3/',
    'https://spatie.be/docs/laravel-mailcoach/v4/',
    'https://spatie.be/docs/laravel-mailcoach/v5/',
    'https://spatie.be/docs/laravel-mailcoach/v6/',
    'https://spatie.be/docs/laravel-mailcoach/v7/',
    'https://spatie.be/docs/laravel-mailcoach/v8/',
    'https://spatie.be/docs/laravel-mailcoach/v9/',
    'https://spatie.be/docs/laravel-mailcoach/v10/',
    'https://spatie.be/docs/laravel-mailcoach/v11/',
    'https://spatie.be/docs/laravel-medialibrary/v1/',
    'https://spatie.be/docs/laravel-medialibrary/v2/',
    'https://spatie.be/docs/laravel-medialibrary/v3/',
    'https://spatie.be/docs/laravel-medialibrary/v4/',
    'https://spatie.be/docs/laravel-medialibrary/v5/',
    'https://spatie.be/docs/laravel-medialibrary/v6/',
    'https://spatie.be/docs/laravel-medialibrary/v7/',
    'https://spatie.be/docs/laravel-medialibrary/v8/',
    'https://spatie.be/docs/laravel-medialibrary/v9/',
    'https://spatie.be/docs/laravel-medialibrary/v10/',
    'https://spatie.be/docs/laravel-medialibrary/v11/',
    'https://spatie.be/docs/laravel-blade-x/v1/',
    'https://spatie.be/docs/laravel-blade-x/v2/',
    'https://spatie.be/docs/laravel-blade-x/v3/',
    'https://spatie.be/docs/laravel-blade-x/v4/',
    'https://spatie.be/docs/laravel-blade-x/v5/',
    'https://spatie.be/docs/laravel-blade-x/v6/',
    'https://spatie.be/docs/laravel-blade-x/v7/',
    'https://spatie.be/docs/laravel-blade-x/v8/',
    'https://spatie.be/docs/laravel-blade-x/v9/',
    'https://spatie.be/docs/laravel-blade-x/v10/',
    'https://spatie.be/docs/laravel-blade-x/v11/',
    'https://spatie.be/docs/laravel-tags/v1/',
    'https://spatie.be/docs/laravel-tags/v2/',
    'https://spatie.be/docs/laravel-tags/v3/',
    'https://spatie.be/docs/laravel-tags/v4/',
    'https://spatie.be/docs/laravel-tags/v5/',
    'https://spatie.be/docs/laravel-tags/v6/',
    'https://spatie.be/docs/laravel-tags/v7/',
    'https://spatie.be/docs/laravel-tags/v8/',
    'https://spatie.be/docs/laravel-tags/v9/',
    'https://spatie.be/docs/laravel-tags/v10/',
    'https://spatie.be/docs/laravel-tags/v11/',
    'https://spatie.be/docs/laravel-data/v1/',
    'https://spatie.be/docs/laravel-data/v2/',
    'https://spatie.be/docs/laravel-data/v3/',
    'https://spatie.be/docs/laravel-data/v4/',
    'https://spatie.be/docs/laravel-data/v5/',
    'https://spatie.be/docs/laravel-data/v6/',
    'https://spatie.be/docs/laravel-data/v7/',
    'https://spatie.be/docs/laravel-data/v8/',
    'https://spatie.be/docs/laravel-data/v9/',
    'https://spatie.be/docs/laravel-data/v10/',
    'https://spatie.be/docs/laravel-data/v11/',
    'https://spatie.be/docs/laravel-activitylog/v1/',
    'https://spatie.be/docs/laravel-activitylog/v2/',
    'https://spatie.be/docs/laravel-activitylog/v3/',
    'https://spatie.be/docs/laravel-activitylog/v4/',
    'https://spatie.be/docs/laravel-activitylog/v5/',
    'https://spatie.be/docs/laravel-activitylog/v6/',
    'https://spatie.be/docs/laravel-activitylog/v7/',
    'https://spatie.be/docs/laravel-activitylog/v8/',
    'https://spatie.be/docs/laravel-activitylog/v9/',
    'https://spatie.be/docs/laravel-activitylog/v10/',
    'https://spatie.be/docs/laravel-activitylog/v11/',
    'https://spatie.be/docs/laravel-html/v1/',
    'https://spatie.be/docs/laravel-html/v2/',
    'https://spatie.be/docs/laravel-html/v3/',
    'https://spatie.be/docs/laravel-html/v4/',
    'https://spatie.be/docs/laravel-html/v5/',
    'https://spatie.be/docs/laravel-html/v6/',
    'https://spatie.be/docs/laravel-html/v7/',
    'https://spatie.be/docs/laravel-html/v8/',
    'https://spatie.be/docs/laravel-html/v9/',
    'https://spatie.be/docs/laravel-html/v10/',
    'https://spatie.be/docs/laravel-html/v11/',
    'https://spatie.be/docs/laravel-site-search/v1/',
    'https://spatie.be/docs/laravel-site-search/v2/',
    'https://spatie.be/docs/laravel-site-search/v3/',
    'https://spatie.be/docs/laravel-site-search/v4/',
    'https://spatie.be/docs/laravel-site-search/v5/',
    'https://spatie.be/docs/laravel-site-search/v6/',
    'https://spatie.be/docs/laravel-site-search/v7/',
    'https://spatie.be/docs/laravel-site-search/v8/',
    'https://spatie.be/docs/laravel-site-search/v9/',
    'https://spatie.be/docs/laravel-site-search/v10/',
    'https://spatie.be/docs/laravel-site-search/v11/',
    'https://spatie.be/docs/laravel-server-monitor/v1/',
    'https://spatie.be/docs/laravel-server-monitor/v2/',
    'https://spatie.be/docs/laravel-server-monitor/v3/',
    'https://spatie.be/docs/laravel-server-monitor/v4/',
    'https://spatie.be/docs/laravel-server-monitor/v5/',
    'https://spatie.be/docs/laravel-server-monitor/v6/',
    'https://spatie.be/docs/laravel-server-monitor/v7/',
    'https://spatie.be/docs/laravel-server-monitor/v8/',
    'https://spatie.be/docs/laravel-server-monitor/v9/',
    'https://spatie.be/docs/laravel-server-monitor/v10/',
    'https://spatie.be/docs/laravel-server-monitor/v11/',
    'https://spatie.be/docs/laravel-uptime-monitor/v1/',
    'https://spatie.be/docs/laravel-uptime-monitor/v2/',
    'https://spatie.be/docs/laravel-uptime-monitor/v3/',
    'https://spatie.be/docs/laravel-uptime-monitor/v4/',
    'https://spatie.be/docs/laravel-uptime-monitor/v5/',
    'https://spatie.be/docs/laravel-uptime-monitor/v6/',
    'https://spatie.be/docs/laravel-uptime-monitor/v7/',
    'https://spatie.be/docs/laravel-uptime-monitor/v8/',
    'https://spatie.be/docs/laravel-uptime-monitor/v9/',
    'https://spatie.be/docs/laravel-uptime-monitor/v10/',
    'https://spatie.be/docs/laravel-uptime-monitor/v11/',
    'https://spatie.be/docs/laravel-slack-slash-command/v1/',
    'https://spatie.be/docs/laravel-slack-slash-command/v2/',
    'https://spatie.be/docs/laravel-slack-slash-command/v3/',
    'https://spatie.be/docs/laravel-slack-slash-command/v4/',
    'https://spatie.be/docs/laravel-slack-slash-command/v5/',
    'https://spatie.be/docs/laravel-slack-slash-command/v6/',
    'https://spatie.be/docs/laravel-slack-slash-command/v7/',
    'https://spatie.be/docs/laravel-slack-slash-command/v8/',
    'https://spatie.be/docs/laravel-slack-slash-command/v9/',
    'https://spatie.be/docs/laravel-slack-slash-command/v10/',
    'https://spatie.be/docs/laravel-slack-slash-command/v11/',
    'https://spatie.be/docs/menu/v1/',
    'https://spatie.be/docs/menu/v2/',
    'https://spatie.be/docs/menu/v3/',
    'https://spatie.be/docs/menu/v4/',
    'https://spatie.be/docs/menu/v5/',
    'https://spatie.be/docs/menu/v6/',
    'https://spatie.be/docs/menu/v7/',
    'https://spatie.be/docs/menu/v8/',
    'https://spatie.be/docs/menu/v9/',
    'https://spatie.be/docs/menu/v10/',
    'https://spatie.be/docs/menu/v11/',
    'https://spatie.be/docs/image/v1/',
    'https://spatie.be/docs/image/v2/',
    'https://spatie.be/docs/image/v3/',
    'https://spatie.be/docs/image/v4/',
    'https://spatie.be/docs/image/v5/',
    'https://spatie.be/docs/image/v6/',
    'https://spatie.be/docs/image/v7/',
    'https://spatie.be/docs/image/v8/',
    'https://spatie.be/docs/image/v9/',
    'https://spatie.be/docs/image/v10/',
    'https://spatie.be/docs/image/v11/',
    'https://spatie.be/docs/enum/v1/',
    'https://spatie.be/docs/enum/v2/',
    'https://spatie.be/docs/enum/v3/',
    'https://spatie.be/docs/enum/v4/',
    'https://spatie.be/docs/enum/v5/',
    'https://spatie.be/docs/enum/v6/',
    'https://spatie.be/docs/enum/v7/',
    'https://spatie.be/docs/enum/v8/',
    'https://spatie.be/docs/enum/v9/',
    'https://spatie.be/docs/enum/v10/',
    'https://spatie.be/docs/enum/v11/',
    'https://spatie.be/docs/laravel-model-states/v1/',
    'https://spatie.be/docs/laravel-model-states/v2/',
    'https://spatie.be/docs/laravel-model-states/v3/',
    'https://spatie.be/docs/laravel-model-states/v4/',
    'https://spatie.be/docs/laravel-model-states/v5/',
    'https://spatie.be/docs/laravel-model-states/v6/',
    'https://spatie.be/docs/laravel-model-states/v7/',
    'https://spatie.be/docs/laravel-model-states/v8/',
    'https://spatie.be/docs/laravel-model-states/v9/',
    'https://spatie.be/docs/laravel-model-states/v10/',
    'https://spatie.be/docs/laravel-model-states/v11/',
    'https://spatie.be/docs/laravel-permission/v1/',
    'https://spatie.be/docs/laravel-permission/v2/',
    'https://spatie.be/docs/laravel-permission/v3/',
    'https://spatie.be/docs/laravel-permission/v4/',
    'https://spatie.be/docs/laravel-permission/v5/',
    'https://spatie.be/docs/laravel-permission/v6/',
    'https://spatie.be/docs/laravel-permission/v7/',
    'https://spatie.be/docs/laravel-permission/v8/',
    'https://spatie.be/docs/laravel-permission/v9/',
    'https://spatie.be/docs/laravel-permission/v10/',
    'https://spatie.be/docs/laravel-permission/v11/',
    'https://spatie.be/docs/laravel-query-builder/v1/',
    'https://spatie.be/docs/laravel-query-builder/v2/',
    'https://spatie.be/docs/laravel-query-builder/v3/',
    'https://spatie.be/docs/laravel-query-builder/v4/',
    'https://spatie.be/docs/laravel-query-builder/v5/',
    'https://spatie.be/docs/laravel-query-builder/v6/',
    'https://spatie.be/docs/laravel-query-builder/v7/',
    'https://spatie.be/docs/laravel-query-builder/v8/',
    'https://spatie.be/docs/laravel-query-builder/v9/',
    'https://spatie.be/docs/laravel-query-builder/v10/',
    'https://spatie.be/docs/laravel-query-builder/v11/',
    'https://spatie.be/docs/laravel-event-sourcing/v1/',
    'https://spatie.be/docs/laravel-event-sourcing/v2/',
    'https://spatie.be/docs/laravel-event-sourcing/v3/',
    'https://spatie.be/docs/laravel-event-sourcing/v4/',
    'https://spatie.be/docs/laravel-event-sourcing/v5/',
    'https://spatie.be/docs/laravel-event-sourcing/v6/',
    'https://spatie.be/docs/laravel-event-sourcing/v7/',
    'https://spatie.be/docs/laravel-event-sourcing/v8/',
    'https://spatie.be/docs/laravel-event-sourcing/v9/',
    'https://spatie.be/docs/laravel-event-sourcing/v10/',
    'https://spatie.be/docs/laravel-event-sourcing/v11/',
    'https://spatie.be/docs/laravel-resource-links/v1/',
    'https://spatie.be/docs/laravel-resource-links/v2/',
    'https://spatie.be/docs/laravel-resource-links/v3/',
    'https://spatie.be/docs/laravel-resource-links/v4/',
    'https://spatie.be/docs/laravel-resource-links/v5/',
    'https://spatie.be/docs/laravel-resource-links/v6/',
    'https://spatie.be/docs/laravel-resource-links/v7/',
    'https://spatie.be/docs/laravel-resource-links/v8/',
    'https://spatie.be/docs/laravel-resource-links/v9/',
    'https://spatie.be/docs/laravel-resource-links/v10/',
    'https://spatie.be/docs/laravel-resource-links/v11/',
    'https://spatie.be/docs/laravel-backup-server/v1/',
    'https://spatie.be/docs/laravel-backup-server/v2/',
    'https://spatie.be/docs/laravel-backup-server/v3/',
    'https://spatie.be/docs/laravel-backup-server/v4/',
    'https://spatie.be/docs/laravel-backup-server/v5/',
    'https://spatie.be/docs/laravel-backup-server/v6/',
    'https://spatie.be/docs/laravel-backup-server/v7/',
    'https://spatie.be/docs/laravel-backup-server/v8/',
    'https://spatie.be/docs/laravel-backup-server/v9/',
    'https://spatie.be/docs/laravel-backup-server/v10/',
    'https://spatie.be/docs/laravel-backup-server/v11/',
    'https://spatie.be/docs/laravel-dashboard/v1/',
    'https://spatie.be/docs/laravel-dashboard/v2/',
    'https://spatie.be/docs/laravel-dashboard/v3/',
    'https://spatie.be/docs/laravel-dashboard/v4/',
    'https://spatie.be/docs/laravel-dashboard/v5/',
    'https://spatie.be/docs/laravel-dashboard/v6/',
    'https://spatie.be/docs/laravel-dashboard/v7/',
    'https://spatie.be/docs/laravel-dashboard/v8/',
    'https://spatie.be/docs/laravel-dashboard/v9/',
    'https://spatie.be/docs/laravel-dashboard/v10/',
    'https://spatie.be/docs/laravel-dashboard/v11/',
    'https://spatie.be/docs/laravel-multitenancy/v1/',
    'https://spatie.be/docs/laravel-multitenancy/v2/',
    'https://spatie.be/docs/laravel-multitenancy/v3/',
    'https://spatie.be/docs/laravel-multitenancy/v4/',
    'https://spatie.be/docs/laravel-multitenancy/v5/',
    'https://spatie.be/docs/laravel-multitenancy/v6/',
    'https://spatie.be/docs/laravel-multitenancy/v7/',
    'https://spatie.be/docs/laravel-multitenancy/v8/',
    'https://spatie.be/docs/laravel-multitenancy/v9/',
    'https://spatie.be/docs/laravel-multitenancy/v10/',
    'https://spatie.be/docs/laravel-multitenancy/v11/',
    'https://spatie.be/docs/ray/v1/',
    'https://spatie.be/docs/ray/v2/',
    'https://spatie.be/docs/ray/v3/',
    'https://spatie.be/docs/ray/v4/',
    'https://spatie.be/docs/ray/v5/',
    'https://spatie.be/docs/ray/v6/',
    'https://spatie.be/docs/ray/v7/',
    'https://spatie.be/docs/ray/v8/',
    'https://spatie.be/docs/ray/v9/',
    'https://spatie.be/docs/ray/v10/',
    'https://spatie.be/docs/ray/v11/',
    'https://spatie.be/docs/typescript-transformer/v1/',
    'https://spatie.be/docs/typescript-transformer/v2/',
    'https://spatie.be/docs/typescript-transformer/v3/',
    'https://spatie.be/docs/typescript-transformer/v4/',
    'https://spatie.be/docs/typescript-transformer/v5/',
    'https://spatie.be/docs/typescript-transformer/v6/',
    'https://spatie.be/docs/typescript-transformer/v7/',
    'https://spatie.be/docs/typescript-transformer/v8/',
    'https://spatie.be/docs/typescript-transformer/v9/',
    'https://spatie.be/docs/typescript-transformer/v10/',
    'https://spatie.be/docs/typescript-transformer/v11/',
  ],
  renderJavaScript: false,
  sitemaps: [],
  exclusionPatterns: ['**/edit'],
  ignoreCanonicalTo: false,
  discoveryPatterns: ['https://spatie.be/**'],
  schedule: 'at 15:30 on Friday',
  actions: [
    {
      indexName: 'spatie_be',
      pathsToMatch: ['https://spatie.be/docs/**'],
      recordExtractor: ({ $, helpers, url }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = 'footer, header';
        $(toRemove).remove();

        // This could be done by adding a `meta` tag on the website with the `project` and `version`.
        // Read more here: https://docsearch.algolia.com/docs/required-configuration/#introduce-global-information-as-meta-tags

        // Splitting path to retrieve project and version with following schema
        // domain.be/docs/PROJECT/VERSION/foo**
        const pathParts = url.pathname.split('/');
        const project = pathParts[1];
        const version = pathParts[2];

        return helpers.docsearch({
          recordProps: {
            lvl1: '.wrap h2',
            content: '.wrap p',
            lvl0: {
              selectors: '.wrap h1',
            },
            lvl2: '.wrap h3',
            lvl3: '.wrap h4',
            lvl4: '.wrap h5',
            version: {
              defaultValue: [version],
            },
            project: {
              defaultValue: [project],
            },
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    spatie_be: {
      attributesForFaceting: ['type', 'lang', 'version', 'project'],
      attributesToRetrieve: ['hierarchy', 'content', 'anchor', 'url'],
      attributesToHighlight: ['hierarchy', 'hierarchy_camel', 'content'],
      attributesToSnippet: ['content:10'],
      camelCaseAttributes: ['hierarchy', 'hierarchy_radio', 'content'],
      searchableAttributes: [
        'unordered(hierarchy_radio_camel.lvl0)',
        'unordered(hierarchy_radio.lvl0)',
        'unordered(hierarchy_radio_camel.lvl1)',
        'unordered(hierarchy_radio.lvl1)',
        'unordered(hierarchy_radio_camel.lvl2)',
        'unordered(hierarchy_radio.lvl2)',
        'unordered(hierarchy_radio_camel.lvl3)',
        'unordered(hierarchy_radio.lvl3)',
        'unordered(hierarchy_radio_camel.lvl4)',
        'unordered(hierarchy_radio.lvl4)',
        'unordered(hierarchy_radio_camel.lvl5)',
        'unordered(hierarchy_radio.lvl5)',
        'unordered(hierarchy_radio_camel.lvl6)',
        'unordered(hierarchy_radio.lvl6)',
        'unordered(hierarchy_camel.lvl0)',
        'unordered(hierarchy.lvl0)',
        'unordered(hierarchy_camel.lvl1)',
        'unordered(hierarchy.lvl1)',
        'unordered(hierarchy_camel.lvl2)',
        'unordered(hierarchy.lvl2)',
        'unordered(hierarchy_camel.lvl3)',
        'unordered(hierarchy.lvl3)',
        'unordered(hierarchy_camel.lvl4)',
        'unordered(hierarchy.lvl4)',
        'unordered(hierarchy_camel.lvl5)',
        'unordered(hierarchy.lvl5)',
        'unordered(hierarchy_camel.lvl6)',
        'unordered(hierarchy.lvl6)',
        'content',
      ],
      distinct: true,
      attributeForDistinct: 'url',
      customRanking: [
        'desc(weight.pageRank)',
        'desc(weight.level)',
        'asc(weight.position)',
      ],
      ranking: [
        'words',
        'filters',
        'typo',
        'attribute',
        'proximity',
        'exact',
        'custom',
      ],
      highlightPreTag: '<span class="algolia-docsearch-suggestion--highlight">',
      highlightPostTag: '</span>',
      minWordSizefor1Typo: 3,
      minWordSizefor2Typos: 7,
      allowTyposOnNumericTokens: false,
      minProximity: 1,
      ignorePlurals: true,
      advancedSyntax: true,
      attributeCriteriaComputedByMinProximity: true,
      removeWordsIfNoResults: 'allOptional',
    },
  },
});