
The Operational Data Provisioning (ODP) framework allows you to extract data from an HANA systems.
SLT as a proxy
The SLT context uses the ODP framework to extract tables and logical objects created by tables.

### Requirements
To use the SLT server context, an SAP Landscape Transformation Replication Server (SLT) must be installed and configured. 
For more information, see [SAP Product page: SAP Landscape Transformation Replication Server](https://www.sap.com/products/technology-platform/landscape-replication-server.html).

### Available Data Sources

### Restriction for SLT Server

- Only delta loads, no full loads
- No filter
- No live preview before running the extraction

### Using SLT Server

{: .box-note }
**Note:** 

Things that need to be considered when using an SLT server:
1. When [searching](./odp-define) for data via an SLT server, make sure to select the correct context. 
![ODP SLT-Server](/img/content/odp/odp-component-slt-server.png){:class="img-responsive"}
2. The **Delta Update** option is selected by default. The full data load is not available when using an SLT server.
3. Filters are not 
3. A live preview of the data is not available when using an SLT server.
