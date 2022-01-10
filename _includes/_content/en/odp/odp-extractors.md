### About Extractors
Xtract ODP can be used to extract data from Business Content DataSource (Extractors). 
The majority of DataSources, including generic (custom) DataSources, can be released for Operational Data Provisioning. 

Xtract ODP does not change the implementation of application extractors, all features and capabilities remain unchanged. 

An extractor (in ERP or S/4 HANA) is an encapsulated business object, representing multiple source tables already in the source system  
and containing business logic.

### Available Extractors
- Transactional data
- Master data
- Text data
- Hierarchy data

There are standard delta extraction methods available for master data and transaction data. 

### Using Extractors

Things that need to be considered when using Extractors:

- DataSources have to be activated in SAP, see [Set Up and Activate DataSources](https://help.sap.com/viewer/7a60944343e543a1ab99e9b2904dab09/CLOUD/en-US/e5d447257a95416190d29638a64a5dfa.html).
- When [searching](./odp-define) for BW InfoProviders, make sure to select the correct context. <br>
![ODP SAPI Search](/img/content/odp/odp-datasource-sapi.png){:class="img-responsive"}
- If delta load is available for the source object in the SAP source system, the **Delta Update** option is available in the ODP component. 
- If the DataSource is a Hierarchy, there are additional settings, see [Hierarchies](#hierarchies).

