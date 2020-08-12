### About Extractors
Xtract ODP can be used to extract data from Business Content DataSource (Extractors). The majority of DataSources, including generic (custom) DataSources, can get released for Operational Data Provisioning. 

Xtract ODP doesn’t change the implementation of application extractors, all the features and capabilities are unchanged. 

An extractor (in ERP or S/4 HANA) is an encapsulated business object, representing few source tables already in the source system  which brings business logic and it’s really a strength of the SAP source system because it’s very easy to get the business logic extracted. 

Extractors can provide the following data types:
- Transactional data
- Master data
- Text data
- Hierarchy data

There are standard delta extraction methods available for master data and transaction data. 

### Using Extractors

When [searching](./odp-functions-ov#operational-data-provider) for BW InfoProviders, make sure to select the correct context. 
![ODP SAPI Search](/img/content/odp/odp-datasource-sapi.png){:class="img-responsive"}

{: .box-note }
**Note:** When the delta load is available for the source object in the SAP source system, the **Delta Update** option is available in the ODP component. 

![ODP SAPI Search](/img/content/odp/odp-datasource-2lis-11-vaitm-02-preview.png){:class="img-responsive"}

Click **[Load live preview]** to preview the data without executing an extraction.