The BAPI data source was developed to access BAPIs and RFC function modules. It makes it simple to develop programs with ABAP and directly use the output table. SAP Standard and custom BAPIs are supported equally. It is useful (but not necessary), that custom BAPIs have all necessary output in just one table. The terms BAPI and RFC function module are used as equivalent. There is no substantial difference between the two concepts.

Using the Xtract Universal client to define a new extraction of type BAPI. The following screen pops up:

![Define-Bapi-Data-Source](/img/content/Define-Bapi-Data-Source.png){:class="img-responsive"}

Click the binocular button to open up the search dialog as shown below.

When searching, you may also use wildcards ( * ). Click OK to choose one of the modules in
the list.

![Look-Up-Function-Module](/img/content/Look-Up-Function-Module.png){:class="img-responsive"}

The metadata of the BAPI are fetched from SAP. There are scalar and structured parameters, each of them is divided into imports and exports (see tab in the upper section) and tables (lower section).

![XU-BAPI-Parameters](/img/content/XU-BAPI-Parameters.png){:class="img-responsive"}
