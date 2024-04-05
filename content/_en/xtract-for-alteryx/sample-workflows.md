---
ref: xtract-for-alteryx-120
layout: page
title: Sample Workflows
description: Templates
product: xtract-for-alteryx
parent: xtract-for-alteryx
permalink: /:collection/:path
weight: 120
lang: en_GB
---

The following section offers Alteryx sample workflows and templates for download.

### SAP Migration Scenarios

The following workflows are designed to support an SAP migration, e.g., ECC to S/4HANA.

| Workflow | Description  |
| :------ | :--- |
| [Data Anonymization and Replication to QA system](/docs/alteryx-workflows/S4 Migration - Data Anonymization and Replication to QA system.yxzp){:download="S4 Migration - Data Anonymization and Replication to QA system.yxzp"}  | This workflow uses the [Xtract Table](./table) component to create development and testing data sets with anonymized data from the productive system to speed up quality assurance processes. |
| [Short-term bridge app.yxwz](/docs/alteryx-workflows/S4 Migration - Short-term bridge app.yxwz){:download="S4 Migration - Short-term bridge app.yxwz"}  | This workflow uses the [Xtract Table](./table) component to support an SAP migration that is done in a phased approach by extracting the data from the relevant system depending on the user input. |
| [Source & Target Validations - Report level.yxmd](/docs/alteryx-workflows/S4 Migration - Source & Target Validations - Report level.yxmd){:download="S4 Migration - Source & Target Validations - Report level.yxmd"}  | This workflow uses the [Xtract Report](./reports) component to validate data integrity between source and target. |
| [Source & Target Validations - Table level.yxmd](/docs/alteryx-workflows/S4 Migration - Source & Target Validations - Table level.yxmd){:download="S4 Migration - Source & Target Validations - Table level.yxmd"}  | This workflow uses the [Xtract Table](./table) component to validate data integrity between source and target.|
| [Source & Target Validations - Table & other.yxzp](/docs/alteryx-workflows/S4 Migration - Source & Target Validations - Table & other.yxzp){:download="S4 Migration - Source & Target Validations - Table & other.yxzp"}  | This workflow uses the [Xtract Table](./table) component to validate data integrity between source and target. This workflow can be used for tests and demos, as it uses a flat file as a target to resemble the source system with minor changes that are discovered in the reconciliation.|


### Xtract BAPI


| Workflow | Source System | Description |
| :------ |:--- | :--- | :--- |
| [BAPI-ERP-Read-And-Write](/docs/alteryx-workflows/BAPI-ERP-ReadandWrite.yxmd){:download="BAPI-ERP-ReadandWrite.yxmd"}  | SAP ERP | This workflow demonstrates using [Xtract BAPI](./bapi) to create a purchase requisition in SAP and load the data of the purchase requisition into Alteryx.|
| [SAP-Read-Long-Texts](/docs/alteryx-workflows/SAP-Read-Long-Texts.yxmd){:download="SAP-Read-Long-Texts.yxmd"} | SAP ERP | This workflow demonstrates reading SAP long texts in different languages.|
| [SAP-Read-Attachment-Files](/docs/alteryx-workflows/SAP-Read-Attachment-Files.yxmd){:download="SAP-Read-Attachment-Files.yxmd"}  | SAP ERP | This workflow demonstrates extracting attachments of all formats from an SAP systems, e.g., .pdf files of purchase orders. For more information on this workflow, refer to the knowledge base article [Read and Download SAP Attachment Files](https://kb.theobald-software.com/xtract-for-alteryx/read-sap-attachment-files).|
|[BAPI - Sync PRs from ERP to S4](/docs/alteryx-workflows/BAPI-Sync-PRs-from-ERP-to-S4.yxmd){:download="BAPI-Sync-PRs-from-ERP-to-S4.yxmd"} | SAP ERP |This workflow demonstrates syncing purchase requisitions from ERP to S/4. It involves creating a new requisition in ERP, checking its absence in S/4, syncing by generating corresponding entries in both systems, and confirming the presence in S/4. |


### Xtract Cube

| Workflow | Source System  | Description  |
| :------ |:--- | :--- | :--- | :--- |
| [Cube-BWInfoProvider](/docs/alteryx-workflows/Cube-BWInfoProvider.yxmd){:download="Cube-BWInfoProvider.yxmd"}  | SAP BW | This workflow demonstrates using [Xtract Cube](./bw-cube) to load data from an SAP BW InfoProvider. |
| [Cube-BWQuery](/docs/alteryx-workflows/Cube-BWQuery.yxmd){:download="Cube-BWQuery.yxmd"}  | SAP BW | This workflow demonstrates using [Xtract Cube](./bw-cube) to load data from an SAP BW Query. |

### Xtract Hierarchy

| Workflow | Source System  | Description |
| :------ |:--- | :--- | :--- | :--- |
| [Hierarchy-BW](/docs/alteryx-workflows/Hierarchy-BW.yxmd){:download="Hierarchy-BW.yxmd"}  | SAP BW | This workflow demonstrates using [Xtract Hierarchy](./bwhierarchy) to load data from an SAP BW CostCenter hierarchy. This workflow also showcases the different hierarchy representations "Parent-Child" and "Natural".  |

### Xtract ODP

| Workflow  | Source System  | Description Source System |
| :------ |:--- | :--- | :--- | :--- |
| [ODP-BW-Full](/docs/alteryx-workflows/ODP-BW-Full.yxmd){:download="ODP-BW-Full.yxmd"}  | SAP BW | This workflow demonstrates using [Xtract ODP](./odp) to load sales documents and customer master data from an SAP BW system. The loaded data is then combined, cleaned, and prepared for further analysis. |
| [ODP-BW-Delta](/docs/alteryx-workflows/ODP-BW-Delta.yxmd){:download="ODP-BW-Delta.yxmd"}  | SAP BW | This workflow demonstrates using [Xtract ODP](./odp) to load delta sales documents and customer master data from an SAP BW system. Sales documents are loaded using Xtract ODP's delta function, which retrieves only changed data since the last execution. |
| [ODP-ERP-Full](/docs/alteryx-workflows/ODP-ERP-Full.yxmd){:download="ODP-ERP-Full.yxmd"}  |  SAP ERP | This workflow demonstrates using [Xtract ODP](./odp) to load sales documents and customer master data from an SAP ERP system. The loaded data is then combined, cleaned, and prepared for further analysis.
| [ODP-ERP-Delta](/docs/alteryx-workflows/ODP-ERP-Delta.yxmd){:download="ODP-ERP-Delta.yxmd"}  | SAP ERP | This workflow demonstrates using [Xtract ODP](./odp) to load delta sales documents and customer master data from an SAP ERP system. Sales documents are loaded using Xtract ODP's delta function, which retrieves only changed data since the last execution. <br> For more information on this workflow, refer to the knowledge base article [ODP based Delta Extraction of Sales and Customer Data](https://kb.theobald-software.com/xtract-for-alteryx/ODP-based.delta-extraction-of-sales-data).  |
| [ODP-S4-Full](/docs/alteryx-workflows/ODP-S4-Full.yxmd){:download="ODP-S4-Full.yxmd"}  | SAP S/4HANA | This workflow demonstrates using [Xtract ODP](./odp) to load business partner master data from SAP S/4HANA CDS views. The loaded data is then cleaned and filtered for further analysis. |
| [ODP-S4-Delta](/docs/alteryx-workflows/ODP-S4-Delta.yxmd){:download="ODP-S4-Delta.yxmd"}  | SAP S/4HANA | This workflow demonstrates using [Xtract ODP](./odp) to load the delta data of suppliers and customers from SAP S/4HANA CDS views. The loaded data is then checked for missing address information. |

### Xtract Report

| Workflow  | Source System  | Description  |
| :------ |:--- | :--- | :--- | :--- |
| [Report-ERP-ABAPReport](/docs/alteryx-workflows/Report-ERP-ABAPReport.yxmd){:download="Report-ERP-ABAPReport.yxmd"}  | SAP ERP | This workflow demonstrates using [Xtract Report](./reports) to load data from the ABAP Report RLT10010 (Evaluation of Movements per Storage Type). |
| [Report-S4-TCode](/docs/alteryx-workflows/Report-S4-TCode.yxmd){:download="Report-S4-TCode.yxmd"}  | SAP S/4HANA | This workflow demonstrates using [Xtract Report](./reports) to load a list of sales orders from an SAP S/4HANA transaction. |

### Xtract Table

| Workflow | Source System  | Description Source System |
| :------ |:--- | :--- | :--- | :--- |
| [Table-ERP](/docs/alteryx-workflows/Table-ERP.yxmd){:download="Table-ERP.yxmd"}  | SAP ERP | This workflow demonstrates using [Xtract Table](./table) to load customer master data and to prepare the data for further analysis in Excel or a 3rd party BI solution. |
| [Table-ERP-Join](/docs/alteryx-workflows/Table-ERP-Join.yxmd){:download="Table-ERP-Join.yxmd"}  | SAP ERP | This workflow demonstrates using [Xtract Table](./table) to perform a table join of the SAP tables KNA1 (Customer Master Data) and KNVV (Customer Master Sales Data) and to prepare the data for further analysis in Excel or a 3rd party BI solution. |
| [Table-S4](/docs/alteryx-workflows/Table-S4.yxmd){:download="Table-S4.yxmd"}  | SAP S/4HANA | This workflow demonstrates using [Xtract Table](./table) to load data from SAP S/4HANA's Universal Journal and to prepare the data for further analysis in Excel or a 3rd party BI solution. |
| [Table-S4-Dynamic-Parameters.yxmd](/docs/alteryx-workflows/Table-Dynamic-Parameters.yxmd){:download="Table-Dynamic-Parameters.yxmd"}  | SAP S/4HANA | This workflow demonstrates how to use scalar and list parameters with the [Xtract Table](./table) component. |


******
#### Related Links
- [Theobald Software Website: Xtract for Alteryx](https://theobald-software.com/xtract-for-alteryx/)
- [Knowledge Base: Xtract for Alteryx](https://kb.theobald-software.com/xtract-for-alteryx)
