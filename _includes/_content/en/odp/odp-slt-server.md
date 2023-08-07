
The Operational Data Provisioning (ODP) framework allows you to extract tables and simple views from SAP HANA systems via an SAP Landscape Transformation Replication Server (SLT).
The SLT server is a trigger-based CDC solution that can replicate SAP tables and views and make them available as delta extracts.


### Available Tables

- Regular SAP tables
- Cluster tables
- Pool tables

### Requirements

To use the SLT server context requires an SAP Landscape Transformation Replication Server (SLT) that is set up for ODP, see [SAP Documentation: Transferring Data from SLT Using Operational Data Provisioning](https://help.sap.com/docs/SAP_NETWEAVER_750/ccc9cdbdc6cd4eceaf1e5485b1bf8f4b/6ca2eb9870c049159de25831d3269f3f.html?locale=en-US).

The following requirements apply to the SLT server:
- Minimum release version of the SLT server:
	- Add-On DMIS 2011 SP05 
	- SAP NetWeaver 7.3 SPS10, 7.31 SPS09 or 7.4 SPS04 (ODP infrastructure)
- Add-On DMIS_2011 SP03/SP04 or higher or 2010 SP08/SP09 is installed in the SAP source system.
- The following SAP Notes are published in the SAP source system: 
	- SAP Note 1863476 
	- SAP Note 1817467 when using Add-On DMIS 2011 SP05

### Using SLT Server

Things that need to be considered when using an SLT server:
1. When [searching](./odp-define) for data via an SLT server, make sure to select the correct context. 
![ODP SLT-Server](/img/content/odp/odp-component-slt-server.png){:class="img-responsive"}
2. A live preview of the data is not available in the SLT server context. 

<!---
2. The **Delta Update** option is selected by default. The full data load is not available when using an SLT server.
-->

