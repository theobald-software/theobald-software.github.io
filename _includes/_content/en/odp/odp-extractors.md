### About Extractors
Xtract ODP can be used to extract data from Business Content DataSource (Extractors). 
The majority of DataSources, including generic (custom) DataSources, can be released for Operational Data Provisioning. 

Xtract ODP does not change the implementation of application extractors, all features and capabilities remain unchanged. 

An extractor (in ERP or S/4 HANA) is an encapsulated business object, representing multiple source tables already in the source system  
and containing business logic.

Extractors can provide the following data types:
- Transactional data
- Master data
- Text data
- Hierarchy data

There are standard delta extraction methods available for master data and transaction data. 

### Using Extractors

Things that need to be considered when using Extractors:

1. When [searching](./odp-define) for BW InfoProviders, make sure to select the correct context. 
![ODP SAPI Search](/img/content/odp/odp-datasource-sapi.png){:class="img-responsive"}
2. If delta load is available for the source object in the SAP source system, the **Delta Update** option is available in the ODP component. 
3. If the data source is a Hierarchy, there are additional settings, see [Hierarchies](#hierarchies).

{% include _content/en/odp/odp-hierarchy.md %} 