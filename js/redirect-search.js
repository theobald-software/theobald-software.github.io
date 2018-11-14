var main = {

    init: function () {
        var referrer = document.referrer;
        var referrer_relative;
        if(referrer.indexOf(':4000') === -1) {
            referrer_relative = referrer.split('.com')[1];
        } else {
            referrer_relative = referrer.split(':4000')[1];
        }

        // remove any trailing slash if there is one
        referrer_relative = referrer_relative.replace(/\/$/, "");

        if(referrer_relative) {
            var old_url_homepage_english = '/en/default.aspx';
            var old_url_homepage_english_short = '/en';
            var old_url_homepage_german = '/de/default.aspx';
            var old_url_homepage_german_short = '/de';
            if (referrer_relative.toLowerCase() === old_url_homepage_english || referrer_relative.toLowerCase()=== old_url_homepage_english_short) {
                window.location.replace("https://help.theobald-software.com/en/");
            } else if (referrer_relative.toLowerCase() === old_url_homepage_german || referrer_relative.toLowerCase() === old_url_homepage_german_short) {
                window.location.replace("https://help.theobald-software.com/de/");
            } else {

                // general settings for instant search
                const search = instantsearch({
                    appId: '4C27F1P1UC',
                    apiKey: '09cbfe4bbe8e6380e31d4572f85ad22e',
                    indexName: 'theobald-software-online-help',
                    searchFunction: function (helper) {
                        helper.setQueryParameter('restrictSearchableAttributes', ['old_url']);
                        helper.setQueryParameter('facetFilters', ["old_url:" + referrer_relative + ""]);
                        helper.setQueryParameter('hitsPerPage', 1);
                        helper.search();
                    }
                });

                // initialize Hits
                search.addWidget(
                    instantsearch.widgets.hits({
                        container: '#hits',
                        templates: {
                            item: document.querySelector('#redirect-template').innerHTML,
                            empty: document.querySelector('#no-redirect-template').innerHTML
                        }
                    })
                );

                // start instantsearch
                search.start();

                search.helper.setQuery(referrer_relative).search();
            }
        } else {
            // make message visible
            $('.redirect-message').visible();
        }

    }
};

document.addEventListener('DOMContentLoaded', main.init);