var main = {

    init: function () {
        var referrer = document.referrer;
        var referrer_relative = referrer.split('.com')[1];
        var referrer_relative_local = referrer.split(':4000')[1];
        console.log("using: " + referrer_relative_local);

        // general settings for instant search
        const search = instantsearch({
            appId: '4C27F1P1UC',
            apiKey: '09cbfe4bbe8e6380e31d4572f85ad22e',
            indexName: 'theobald-software-online-help',
            searchFunction: function(helper) {
                helper.setQueryParameter('restrictSearchableAttributes', ['old_url']);
                helper.search();
            }
        });

        // initialize Hits
        search.addWidget(
            instantsearch.widgets.hits({
                container: '#hits',
                templates: {
                    item: 'Old url: ' + referrer_relative_local + ' New url: {{url}}',
                    empty: 'empty'
                }
            })
        );

        // start instantsearch
        search.start();

        search.helper.setQuery(referrer_relative_local).search();
    }
};

document.addEventListener('DOMContentLoaded', main.init);