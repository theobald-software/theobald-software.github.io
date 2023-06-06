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


### Xtract BAPI


| Workflow | Source System | Description Source System |
| :------ |:--- | :--- | :--- |
| [BAPI-ERP-Dynamic-Read-With-Macro](/docs/alteryx-workflows/BAPI-ERP-DynamicReadWithMacro.yxzp){:download="BAPI-ERP-DynamicReadWithMacro.yxzp"}  |  SAP ERP  | This workflow shows how to use the [Xtract BAPI](./bapi) component with dynamic import parameters to load multiple rows of data from SAP. This workflow includes an Alteryx batch macro for parameterization. |
| [BAPI-ERP-Dynamic-Write](/docs/alteryx-workflows/BAPI-ERP-DynamicWrite.yxmd){:download="BAPI-ERP-DynamicWrite.yxmd"}  | SAP ERP | This workflow shows how to use the [Xtract BAPI](./bapi) component with dynamic table parameters to write data to SAP. |
| [BAPI-ERP-Read-Write-With-Macro](/docs/alteryx-workflows/BAPI-ERP-ReadAndWriteWithMacro.yxzp){:download="BAPI-ERP-ReadAndWriteWithMacro.yxzp"}  | SAP ERP | This workflow shows how to use the [Xtract BAPI](./bapi) component to create a purchase requisition in SAP and how to load the data of the purchase requisition into Alteryx.|

### Xtract Cube

| Workflow | Source System  | Description Source System |
| :------ |:--- | :--- | :--- | :--- |
| [Cube-BWInfoProvider](/docs/alteryx-workflows/Cube-BWInfoProvider.yxmd){:download="Cube-BWInfoProvider.yxmd"}  | SAP BW | This workflow shows how to use the [Xtract Cube](./bw-cube) component to load data from an SAP BW InfoProvider. |
| [Cube-BWQuery](/docs/alteryx-workflows/Cube-BWQuery.yxmd){:download="Cube-BWQuery.yxmd"}  | SAP BW | This workflow shows how to use the [Xtract Cube](./bw-cube) component to load data from an SAP BW Query. |

### Xtract Hierarchy

| Workflow | Source System  | Description Source System |
| :------ |:--- | :--- | :--- | :--- |
| [Hierarchy-BW](/docs/alteryx-workflows/Hierarchy-BW.yxmd){:download="Hierarchy-BW.yxmd"}  | SAP BW | This workflow shows how to use the [Xtract Hierarchy](./hierarchy) component to load data from an SAP BW CostCenter hierarchy. This workflow also showcases the different hierarchy representations "Parent-Child" and "Natural".  |

### Xtract ODP

| Workflow  | Source System  | Description Source System |
| :------ |:--- | :--- | :--- | :--- |
| [ODP-BW-Full](/docs/alteryx-workflows/ODP-BW-Full.yxmd){:download="ODP-BW-Full.yxmd"}  | SAP BW | This workflow shows how to use the [Xtract ODP](./odp) component to load sales documents and customer master data from an SAP BW system. The loaded data is then combined, cleaned, and prepared for further analysis. |
| [ODP-BW-Delta](/docs/alteryx-workflows/ODP-BW-Delta.yxmd){:download="ODP-BW-Delta.yxmd"}  | SAP BW | This workflow shows how to use the [Xtract ODP](./odp) component to load delta sales documents and customer master data from an SAP BW system. The sales documents are loaded using the delta function of Xtract ODP that only returns data that has been changed since the last execution. |
| [ODP-ERP-Full](/docs/alteryx-workflows/ODP-ERP-Full.yxmd){:download="ODP-ERP-Full.yxmd"}  |  SAP ERP | This workflow shows how to use the [Xtract ODP](./odp) component to load sales documents and customer master data from an SAP ERP system. The loaded data is then combined, cleaned, and prepared for further analysis.
| [ODP-ERP-Delta](/docs/alteryx-workflows/ODP-ERP-Delta.yxmd){:download="ODP-ERP-Delta.yxmd"}  | SAP ERP | This workflow shows how to use the [Xtract ODP](./odp) component to load sales documents and customer master data from an SAP ERP system. The sales documents are loaded using the delta function of Xtract ODP that only returns data that has been changed since the last execution. <br> For more information on this workflow, refer to the knowledge base article [ODP based Delta Extraction of Sales and Customer Data](https://kb.theobald-software.com/xtract-for-alteryx/ODP-based.delta-extraction-of-sales-data).  |
| [ODP-S4-Full](/docs/alteryx-workflows/ODP-S4-Full.yxmd){:download="ODP-S4-Full.yxmd"}  | SAP S/4HANA | This workflow shows how to use the [Xtract ODP](./odp) component to load business partner master data from SAP S/4HANA CDS views. The loaded data is then cleansed and filtered for further analysis. |
| [ODP-S4-Delta](/docs/alteryx-workflows/ODP-S4-Delta.yxmd){:download="ODP-S4-Delta.yxmd"}  | SAP S/4HANA | This workflow shows how to use the [Xtract ODP](./odp) component to load the delta data of suppliers and customers from SAP S/4HANA CDS views. The loaded data is then checked for missing address information. |

### Xtract Report

| Workflow  | Source System  | Description Source System |
| :------ |:--- | :--- | :--- | :--- |
| [Report-ERP-ABAPReport](/docs/alteryx-workflows/Report-ERP-ABAPReport.yxmd){:download="Report-ERP-ABAPReport.yxmd"}  | SAP ERP | This workflow shows how to use the [Xtract Report](./reports) component to load data from the ABAP Report RLT10010 (Evaluation of Movements per Storage Type). |
| [Report-S4-TCode](/docs/alteryx-workflows/Report-S4-TCode.yxmd){:download="Report-S4-TCode.yxmd"}  | SAP S/4HANA | This workflow shows how to use the [Xtract Report](./reports) component to load a list of sales orders from an SAP S/4HANA transaction. |

### Xtract Table

| Workflow | Source System  | Description Source System |
| :------ |:--- | :--- | :--- | :--- |
| [Table-ERP](/docs/alteryx-workflows/Table-ERP.yxmd){:download="Table-ERP.yxmd"}  | SAP ERP | This workflow shows how to use the [Xtract Table](./table) component to load customer master data and how to prepare the data for further analysis in Excel or a 3rd party BI solution. |
| [Table-ERP-Join](/docs/alteryx-workflows/Table-ERP-Join.yxmd){:download="Table-ERP-Join.yxmd"}  | SAP ERP | This workflow shows how to use the [Xtract Table](./table) component to perform a table join of the SAP tables KNA1 (Customer Master Data) and KNVV (Customer Master Sales Data) and how to prepare the data for further analysis in Excel or a 3rd party BI solution. |
| [Table-S4](/docs/alteryx-workflows/Table-S4.yxmd){:download="Table-S4.yxmd"}  | SAP S/4HANA | This workflow shows how to use the [Xtract Table](./table) component to load data from SAP S/4HANA's Universal Journal and how to prepare the data for further analysis in Excel or a 3rd party BI solution. |

<!---Alternatives:

| Workflow | Source System | SAP Object | Description |
| :------ |:--- | :--- | :--- | :--- |
| [BAPI-ERP-Dynamic-Read-With-Macro](/docs/alteryx-workflows/BAPI-ERP-DynamicReadWithMacro.yxzp){:download="BAPI-ERP-DynamicReadWithMacro.yxzp"}  | SAP ERP | `BAPI_REQUISITION_GETDETAIL` | This workflow shows how to use the [Xtract BAPI](./bapi) component with dynamic import parameters to load multiple rows of data from SAP. This workflow includes an Alteryx batch macro for parameterization. |
| [BAPI-ERP-Dynamic-Write](/docs/alteryx-workflows/BAPI-ERP-DynamicWrite.yxmd){:download="BAPI-ERP-DynamicWrite.yxmd"}  | SAP ERP | `BAPI_REQUISITION_CREATE` | This workflow shows how to use the [Xtract BAPI](./bapi) component with dynamic table parameters to write data to SAP. |
| [BAPI-ERP-Read-Write-With-Macro](/docs/alteryx-workflows/BAPI-ERP-ReadAndWriteWithMacro.yxzp){:download="BAPI-ERP-ReadAndWriteWithMacro.yxzp"}  | SAP ERP | `BAPI_REQUISITION_CREATE` | This workflow shows how to use the [Xtract BAPI](./bapi) component to create a purchase requisition in SAP and how to load the data of the purchase requisition into Alteryx.|
| [Cube-BWInfoProvider](/docs/alteryx-workflows/Cube-BWInfoProvider.yxmd){:download="Cube-BWInfoProvider.yxmd"}  | SAP BW | `$0D_DECU` (SAP Demo Cube) | This workflow shows how to use the [Xtract Cube](./bw-cube) component to load data from an SAP BW InfoProvider. |
| [Cube-BWQuery](/docs/alteryx-workflows/Cube-BWQuery.yxmd){:download="Cube-BWQuery.yxmd"}  | SAP BW | `0D_DECU/ZZ_D_DECU_Q0011` (Custom Query) | This workflow shows how to use the [Xtract Cube](./bw-cube) component to load data from an SAP BW Query. |
| [Hierarchy-BW](/docs/alteryx-workflows/Hierarchy-BW.yxmd){:download="Hierarchy-BW.yxmd"}  | SAP BW | `A0000001` (0COSTCENTER) | This workflow shows how to use the [Xtract Hierarchy](./hierarchy) component to load data from a CostCenter hierarchy. This workflow also showcases the different hierarchy representations "Parent-Child" and "Natural".  |
| [ODP-BW-Full](/docs/alteryx-workflows/ODP-BW-Full.yxmd){:download="ODP-BW-Full.yxmd"}  | SAP BW |  `/IMO/SD_D10$F`	(Sales Document Header Data) <br>`0CUSTOMER$P` (Customer number) | This workflow shows how to use the [Xtract ODP](./odp) component to load sales documents and customer master data from an SAP BW system. The loaded data is then combined, cleaned, and prepared for further analysis. |
| [ODP-BW-Delta](/docs/alteryx-workflows/ODP-BW-Delta.yxmd){:download="ODP-BW-Delta.yxmd"}  | SAP BW | `/IMO/SD_D10$F`	(Sales Document Header Data) <br>`0CUSTOMER$P` (Customer number) | This workflow shows how to use the [Xtract ODP](./odp) component to load delta sales documents and customer master data from an SAP BW system. The sales documents are loaded using the delta function of Xtract ODP that only returns data that has been changed since the last execution. |
| [ODP-ERP-Full](/docs/alteryx-workflows/ODP-ERP-Full.yxmd){:download="ODP-ERP-Full.yxmd"}  | SAP ERP |  `2LIS_11_VAITM` (Sales Document Item Data) <br>`0CUSTOMER_ATTR` (Customer number) | This workflow shows how to use the [Xtract ODP](./odp) component to load sales documents and customer master data from an SAP ERP system. The loaded data is then combined, cleaned, and prepared for further analysis.
| [ODP-ERP-Delta](/docs/alteryx-workflows/ODP-ERP-Delta.yxmd){:download="ODP-ERP-Delta.yxmd"}  | SAP ERP | `2LIS_11_VAITM`	(Sales Document Item Data) <br>`0CUSTOMER_ATTR` (Customer number) | This workflow shows how to use the [Xtract ODP](./odp) component to load sales documents and customer master data from an SAP ERP system. The sales documents are loaded using the delta function of Xtract ODP that only returns data that has been changed since the last execution. <br> For more information on this workflow, refer to the knowledge base article [ODP based Delta Extraction of Sales and Customer Data](https://kb.theobald-software.com/xtract-for-alteryx/ODP-based.delta-extraction-of-sales-data).  |
| [ODP-S4-Full](/docs/alteryx-workflows/ODP-S4-Full.yxmd){:download="ODP-S4-Full.yxmd"}  | SAP S/4HANA | `IBUSINESSPARTNER$P` (Business Partner) | This workflow shows how to use the [Xtract ODP](./odp) component to load business partner master data from SAP S/4HANA CDS views. The loaded data is then cleansed and filtered for further analysis. |
| [ODP-S4-Delta](/docs/alteryx-workflows/ODP-S4-Delta.yxmd){:download="ODP-S4-Delta.yxmd"}  | SAP S/4HANA | `I_CUSTOMER_CDS$P` (Customer) <br>`I_SUPPLIER_CDS$P` (Supplier) | This workflow shows how to use the [Xtract ODP](./odp) component to load the delta data of suppliers and customers  from SAP S/4HANA CDS views. The loaded data is then checked for missing address information. |
| [Report-ERP-ABAPReport](/docs/alteryx-workflows/Report-ERP-ABAPReport.yxmd){:download="Report-ERP-ABAPReport.yxmd"}  | SAP ERP | `RLT10010` (Evaluation of Movements per Storage Type) | This workflow shows how to use the [Xtract Report](./reports) component to load data from the ABAP Report RLT10010 (Evaluation of Movements per Storage Type). |
| [Report-S4-TCode](/docs/alteryx-workflows/Report-S4-TCode.yxmd){:download="Report-S4-TCode.yxmd"}  | SAP S/4HANA |  `SD_SALES_DOCUMENT_VIEW` (List of Sales Orders) | This workflow shows how to use the [Xtract Report](./reports) component to load a list of sales orders from an SAP S/4HANA transaction. |
| [Table-ERP](/docs/alteryx-workflows/Table-ERP.yxmd){:download="Table-ERP.yxmd"}  | SAP ERP |  `KNA1` (General Data in Customer Master) | This workflow shows how to use the [Xtract Table](./table) component to load customer master data and how to prepare the data for further analysis in Excel or a 3rd party BI solution. |
| [Table-ERP-Join](/docs/alteryx-workflows/Table-ERP-Join.yxmd){:download="Table-ERP-Join.yxmd"}  | SAP ERP | `KNA1`	(General Data in Customer Master) <br>`KNVV` (Customer Master Sales Data) | This workflow shows how to use the [Xtract Table](./table) component to perform a table join of the SAP tables KNA1 (Customer Master Data) and KNVV (Customer Master Sales Data) and how to prepare the data for further analysis in Excel or a 3rd party BI solution. |
| [Table-S4](/docs/alteryx-workflows/Table-S4.yxmd){:download="Table-S4.yxmd"}  | SAP S/4HANA | `ACDOCA` (Universal Journal Entry Line Items) | This workflow shows how to use the [Xtract Table](./table) component to load data from SAP's Universal Journal and how to prepare the data for further analysis in Excel or a 3rd party BI solution. |


| Workflow |  Description |
| :------ |:--- | :--- | 
| [BAPI-ERP-Dynamic-Read-With-Macro](/docs/alteryx-workflows/BAPI-ERP-DynamicReadWithMacro.yxzp){:download="BAPI-ERP-DynamicReadWithMacro.yxzp"}  | This workflow shows how to use the [Xtract BAPI](./bapi) component with dynamic import parameters to load multiple rows of data from an SAP ERP system. This workflow includes an Alteryx batch macro for parameterization.<br>SAP Objects: `BAPI_REQUISITION_GETDETAIL`. |
| [BAPI-ERP-Dynamic-Write](/docs/alteryx-workflows/BAPI-ERP-DynamicWrite.yxmd){:download="BAPI-ERP-DynamicWrite.yxmd"}  | This workflow shows how to use the [Xtract BAPI](./bapi) component with dynamic table parameters to write data to an SAP ERP system. <br>SAP Objects: `BAPI_REQUISITION_CREATE`.|
| [BAPI-ERP-Read-Write-With-Macro](/docs/alteryx-workflows/BAPI-ERP-ReadAndWriteWithMacro.yxzp){:download="BAPI-ERP-ReadAndWriteWithMacro.yxzp"}  | This workflow shows how to use the [Xtract BAPI](./bapi) component to create a purchase requisition in an SAP ERP system and how to load the data of the purchase requisition into Alteryx. <br>SAP Objects: `BAPI_REQUISITION_CREATE`.|
| [Cube-BWInfoProvider](/docs/alteryx-workflows/Cube-BWInfoProvider.yxmd){:download="Cube-BWInfoProvider.yxmd"}  | This workflow shows how to use the [Xtract Cube](./bw-cube) component to load data from an SAP BW InfoProvider. <br>SAP Objects: `$0D_DECU` (SAP Demo Cube).|
| [Cube-BWQuery](/docs/alteryx-workflows/Cube-BWQuery.yxmd){:download="Cube-BWQuery.yxmd"}  | This workflow shows how to use the [Xtract Cube](./bw-cube) component to load data from an SAP BW Query. <br>SAP Objects: `0D_DECU/ZZ_D_DECU_Q0011` (Custom Query). |
| [Hierarchy-BW](/docs/alteryx-workflows/Hierarchy-BW.yxmd){:download="Hierarchy-BW.yxmd"}  | This workflow shows how to use the [Xtract Hierarchy](./hierarchy) component to load data from an SAP BW CostCenter hierarchy. This workflow also showcases the different hierarchy representations "Parent-Child" and "Natural". <br>SAP Objects: `A0000001` (0COSTCENTER).|
| [ODP-BW-Full](/docs/alteryx-workflows/ODP-BW-Full.yxmd){:download="ODP-BW-Full.yxmd"}  | This workflow shows how to use the [Xtract ODP](./odp) component to load sales documents and customer master data from an SAP BW system. The loaded data is then combined, cleaned, and prepared for further analysis. <br>SAP Objects: `/IMO/SD_D10$F` (Sales Document Header Data) & `0CUSTOMER$P` (Customer number).|
| [ODP-BW-Delta](/docs/alteryx-workflows/ODP-BW-Delta.yxmd){:download="ODP-BW-Delta.yxmd"}  | This workflow shows how to use the [Xtract ODP](./odp) component to load delta sales documents and customer master data from an SAP BW system. The sales documents are loaded using the delta function of Xtract ODP that only returns data that has been changed since the last execution. <br>SAP Objects: `/IMO/SD_D10$F` (Sales Document Header Data) & `0CUSTOMER$P` (Customer number). |
| [ODP-ERP-Full](/docs/alteryx-workflows/ODP-ERP-Full.yxmd){:download="ODP-ERP-Full.yxmd"}  |  This workflow shows how to use the [Xtract ODP](./odp) component to load sales documents and customer master data from an SAP ERP system. The loaded data is then combined, cleaned, and prepared for further analysis. <br>SAP Objects: `2LIS_11_VAITM` (Sales Document Item Data) & `0CUSTOMER_ATTR` (Customer number). |
| [ODP-ERP-Delta](/docs/alteryx-workflows/ODP-ERP-Delta.yxmd){:download="ODP-ERP-Delta.yxmd"}  | This workflow shows how to use the [Xtract ODP](./odp) component to load sales documents and customer master data from an SAP ERP system. The sales documents are loaded using the delta function of Xtract ODP that only returns data that has been changed since the last execution. <br>SAP Objects: `2LIS_11_VAITM` (Sales Document Item Data) & `0CUSTOMER_ATTR` (Customer number). <br> For more information on this workflow, refer to the knowledge base article [ODP based Delta Extraction of Sales and Customer Data](https://kb.theobald-software.com/xtract-for-alteryx/ODP-based.delta-extraction-of-sales-data).  |
| [ODP-S4-Full](/docs/alteryx-workflows/ODP-S4-Full.yxmd){:download="ODP-S4-Full.yxmd"}  | This workflow shows how to use the [Xtract ODP](./odp) component to load business partner master data from SAP S/4HANA CDS views. The loaded data is then cleansed and filtered for further analysis. <br>SAP Objects: `IBUSINESSPARTNER$P` (Business Partner).|
| [ODP-S4-Delta](/docs/alteryx-workflows/ODP-S4-Delta.yxmd){:download="ODP-S4-Delta.yxmd"}  | This workflow shows how to use the [Xtract ODP](./odp) component to the delta data of suppliers and customers from SAP S/4HANA CDS views. The loaded data is then checked for missing address information. <br>SAP Objects: `I_CUSTOMER_CDS$P` (Customer) & `I_SUPPLIER_CDS$P` (Supplier). |
| [Report-ERP-ABAPReport](/docs/alteryx-workflows/Report-ERP-ABAPReport.yxmd){:download="Report-ERP-ABAPReport.yxmd"}  | This workflow shows how to use the [Xtract Report](./reports) component to load data from the SAP ERP ABAP Report RLT10010. <br>SAP Objects: `RLT10010` (Evaluation of Movements per Storage Type). |
| [Report-S4-TCode](/docs/alteryx-workflows/Report-S4-TCode.yxmd){:download="Report-S4-TCode.yxmd"}  | This workflow shows how to use the [Xtract Report](./reports) component to load a list of sales orders from an SAP S/4HANA transaction. <br>SAP Objects: `SD_SALES_DOCUMENT_VIEW` (List of Sales Orders). |
| [Table-ERP](/docs/alteryx-workflows/Table-ERP.yxmd){:download="Table-ERP.yxmd"}  | This workflow shows how to use the [Xtract Table](./table) component to load customer master data from an SAP ERP system and how to prepare the data for further analysis in Excel or a 3rd party BI solution. <br>SAP Objects: `KNA1` (General Data in Customer Master). |
| [Table-ERP-Join](/docs/alteryx-workflows/Table-ERP-Join.yxmd){:download="Table-ERP-Join.yxmd"}  | This workflow shows how to use the [Xtract Table](./table) component to perform a table join of the SAP ERP tables KNA1 (Customer Master Data) and KNVV (Customer Master Sales Data) and how to prepare the data for further analysis in Excel or a 3rd party BI solution. <br>SAP Objects: `KNA1` (General Data in Customer Master) & `KNVV` (Customer Master Sales Data).|
| [Table-S4](/docs/alteryx-workflows/Table-S4.yxmd){:download="Table-S4.yxmd"}  | This workflow shows how to use the [Xtract Table](./table) component to load data from SAP S/4HANA's Universal Journal and how to prepare the data for further analysis in Excel or a 3rd party BI solution. <br>SAP Objects: `ACDOCA` (Universal Journal Entry Line Items).|
-->

******
#### Related Links
- [Theobald Software Website: Xtract for Alteryx](https://theobald-software.com/xtract-for-alteryx/)
- [Knowledge Base: Xtract for Alteryx](https://kb.theobald-software.com/xtract-for-alteryx)