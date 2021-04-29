
First of all, we need a new source system of the type *3rd party / Staging BAPIs*. Please note the program ID. We will need it later on.

![BWLoader-Configuration-01](/img/content/BWLoader-Configuration-01.png){:class="img-responsive"}

![BWLoader-Configuration-02](/img/content/BWLoader-Configuration-02.png){:class="img-responsive"}

In case you are using a 3.x data flow you can assign the source system to the InfoSource and create an InfoPackage.

For 7.x data flows you create a DataSource for that newly created 3rd party source system and create an InfoPackage.
Data will be loaded to the PSA of the DataSource.

![XIS_BWLoader_7.x_DS](/img/content/XIS_BWLoader_7.x_DS.png){:class="img-responsive"}

For the BW Loader component, the most important thing is the InfoPackage. No data can be loaded without the InfoPackage.