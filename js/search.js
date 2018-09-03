var main = {

    init: function () {
        // general settings for instant search
        const search = instantsearch({
            appId: '4C27F1P1UC',
            apiKey: '09cbfe4bbe8e6380e31d4572f85ad22e',
            indexName: 'theobald-software-online-help',
            routing: true,
            searchParameters: {
                filters: 'collection:"' + document.querySelector('#language').innerHTML  + '" AND NOT product:"none"'
            },
            highlightPreTag: '<em class="search-highlight">',
            highlightPostTag: '</em>'
        });

        // initialize SearchBox
        search.addWidget(
            instantsearch.widgets.searchBox({
                container: '#search-box',
                placeholder: document.querySelector('#search-box-text').innerHTML,
                poweredBy: true
            })
        );

        // initialize Hits
        search.addWidget(
            instantsearch.widgets.hits({
                container: '#hits',
                templates: {
                    item: document.querySelector('#hit-template').innerHTML,
                    empty: document.querySelector('#no-results-template').innerHTML
                },
                transformData: {
                    item: function(data) {
                        switch (data.product) {
                            case 'erpconnect':
                                data.label = 'ERPConnect';
                                break;
                            case 'erpconnect-services':
                                data.label = 'ERPConnect Services';
                                break;
                            case 'board-connector':
                                data.label = 'Board Connector';
                                break;
                            case 'xtract-for-alteryz':
                                data.label = 'Xtract for Alteryx';
                                break;
                            case 'xtract-is':
                                data.label = 'Xtract IS';
                                break;
                            case 'xtract-rs':
                                data.label = 'Xtract RS';
                                break;
                            case 'xtract-universal':
                                data.label = 'Xtract Universal';
                                break;
                            case 'yunio':
                                data.label = 'Yunio';
                                break;
                            case 'none':
                            default:
                                data.label = 'none';
                                break;
                        }

                        return data;
                    }
                }
            })
        );

        // Initialize pagination
        search.addWidget(
            instantsearch.widgets.pagination({
                container: '#pagination',
                maxPages: 10
            })
        );

        // Initialize product menu
        search.addWidget(
            instantsearch.widgets.menuSelect({
                container: '#categories-menuSelect',
                attributeName: 'product',
                limit: 10,
                templates: {
                    header: document.querySelector('#search-filters').innerHTML,
                    item: '{{label}}',
                    seeAllOption: document.querySelector('#search-filter-all-products').innerHTML
                },
                transformData: {
                    item: function(data) {

                        switch (data.label) {
                            case 'erpconnect':
                                data.label = 'ERPConnect';
                                break;
                            case 'erpconnect-services':
                                data.label = 'ERPConnect Services';
                                break;
                            case 'board-connector':
                                data.label = 'Board Connector';
                                break;
                            case 'xtract-for-alteryz':
                                data.label = 'Xtract for Alteryx';
                                break;
                            case 'xtract-is':
                                data.label = 'Xtract IS';
                                break;
                            case 'xtract-rs':
                                data.label = 'Xtract RS';
                                break;
                            case 'xtract-universal':
                                data.label = 'Xtract Universal';
                                break;
                            case 'yunio':
                                data.label = 'Yunio';
                                break;
                            case 'none':
                            default:
                                data.label = 'none';
                                break;
                        }

                        return data;
                    }
                },
                init: function init(options) {
                    var elements = document.getElementsByClassName('ais-menu-select--option');

                    console.log(elements);
                    if (elements.length > 0) {
                        for(let i = 0; i < elements.length; i++){
                            console.log(elements[i]);
                            console.log(elements[i].value);
                            if(elements[i].value == null || elements[i].value === '') {
                                elements[i].parentNode.removeChild(elements[i]);
                            }
                        }
                    }
                }
            })
        );

        // start instantsearch
        search.start();

        // upon rendering, check the product title and enhance the appearance.
        // TODO: refactor the cases so the html isn't injected like it is now.
        search.on('render', function() {
            $('.hit-for-product-title').each(function() {

                switch ($(this).text()) {
                    case 'ERPConnect':
                        $(this).parent().html('<img src="/img/products/TS_Icon_2C_ERPConnect.svg" class="img-fluid hit-for-product-icon"> <p class="hit-for-product-text">ERPConnect</p>');
                        break;
                    case 'ERPConnect Services':
                        $(this).parent().html('<img src="/img/products/TS_Icon_2C_ERPConnectServices.svg" class="img-fluid hit-for-product-icon"> <p class="hit-for-product-text">ERPConnect Services</p>');
                        break;
                    case 'Board Connector':
                        $(this).parent().html('<img src="/img/products/board.png" class="img-fluid hit-for-product-icon"> <p class="hit-for-product-text">Board Connector</p>');
                        break;
                    case 'Xtract for Alteryx':
                        $(this).parent().html('<img src="/img/products/TS_Icon_2C_XtractAlteryx.svg" class="img-fluid hit-for-product-icon"> <p class="hit-for-product-text">Xtract for Alteryx</p>');
                        break;
                    case 'Xtract IS':
                        $(this).parent().html('<img src="/img/products/TS_Icon_2C_XtractIS.svg" class="img-fluid hit-for-product-icon"> <p class="hit-for-product-text">Xtract IS</p>');
                        break;
                    case 'Xtract RS':
                        $(this).parent().html('<img src="/img/products/TS_Icon_2C_XtractRS.svg" class="img-fluid hit-for-product-icon"> <p class="hit-for-product-text">Xtract RS</p>');
                        break;
                    case 'Xtract Universal':
                        $(this).parent().html('<img src="/img/products/TS_Icon_2C_XtractUniversal.svg" class="img-fluid hit-for-product-icon"> <p class="hit-for-product-text">Xtract Universal</p>');
                        break;
                    case 'Yunio':
                        $(this).parent().html('<img src="/img/products/TS_Icon_2C_YunIO.svg" class="img-fluid hit-for-product-icon"> <p class="hit-for-product-text">Yunio</p>');
                        break;
                    case 'none':
                    default:
                        break;
                }
            });
        });
    }
};

document.addEventListener('DOMContentLoaded', main.init);