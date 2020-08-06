---
ref: xu-introduction-01
layout: page
title: Architecture
description: Architecture
product: xtract-universal
parent: introduction
permalink: /:collection/:path
weight: 1
lang: en_GB
---

### Basic Functionality

Extractions are the main entities in Xtract Universal. An [extraction](https://help.theobald-software.com/en/xtract-universal/getting-started-xu/define-a-table-extraction) is a combination of a source (SAP system), 
destination (e.g., SQL server) and a defined extraction type (e.g., Xtract Table). 

<!----![xu-arch-01](/img/content/xu/xu_architecture.png){:class="img-responsive"} anderes Bild--->

A source represents a [connection to an SAP System](https://help.theobald-software.com/en/xtract-universal/introduction/sap-connection). A [destination](http://localhost:4000/en/xtract-universal/xu-destinations/) represents a connection to a target environment.


Using Xtract Universal contains two main phases:
- Design phases
- Execution phase

During the design phase the user can create and modify extractions, sources and destinations; and alter the [server settings](https://help.theobald-software.com/en/xtract-universal/server/server-settings) with the help of the [Designer](https://help.theobald-software.com/en/xtract-universal/getting-started-xu/designer-overview). 

During the execution phase the user can execute the extractions designed in the design phase. Depending on the target environment an execution can be triggered either by the [XU command line tool (xu.exe or xu.elf)](https://help.theobald-software.com/en/xtract-universal/advanced-techniques/scheduling_extraction) or 
by the data consumer. See also [Pull and Push Destinations](https://help.theobald-software.com/en/xtract-universal/xu-destinations#pull-and-push-destinations). 




two components: *Server* and *Designer*.

The Xtract Server is responsible for the extraction. The target system communicates with the Server, and this in turn with SAP. 
You use the Designer to design and configure the extractions, connections and further settings. The Designer directly communicates also with SAP, not to transport data, but just to query metadata during the design process.

![xu-arch-01](/img/content/xu/xu_architecture.png){:class="img-responsive"}

### Extraction Types

Xtract Universal offers a set of ten extraction types which make it possible to cover the entire range of demands placed on SAP data extraction:

### Extraction from ERP / ECC systems

![xu-arch-03](/img/content/xu/erp_extraction_xu.png){:class="img-responsive"}

**Table** extracts Tables and Views.

**Table Join** allows to join several SAP tables. 
The Join-process takes place entirely within the SAP system, which does not require to download each single table anymore.

**BAPI** accesses BAPIs and RFC function modules.

**Query** extracts ERP queries (not to be mistaken with BEx queries which are supplied by BW Cube).

**Report** extracts ABAP Reports.

**DeltaQ** extracts DataSources (OLTP) and extractors from ERP and ECC systems.

### Extraction from BW systems

![xu-arch-04](/img/content/xu/bw_extractions.png){:class="img-responsive"}

**BW Cube** extracts data from SAP BW InfoCubes and BEx Queries.

**Hierarchy** extracts Hierarchies from an SAP BW / BI system.

**Open Hub Service (OHS)** extracts InfoSpokes and OHS destinations.

**DeltaQ** extracts Export DataSources.


### Instant Data Warehousing

The idea of instant data warehousing with Xtract Universal is to make the load process design as simple, and therefore as fast as possible.

The relevant destination object can be very easily created from the SAP source object automatically. During this process, the metadata for the object in question is optimally and automatically transferred to the destination. 
A customer number that consists of 10 digits in the SAP system, for example, will also have 10 digits in the destination system. The accuracy of a value field with three decimal places will not be affected. 

The processing of data content works just like the automatic procedure for transferring metadata. 
In the simple case of a full load, the entire SAP object is replicated. 
Even more interesting is the incremental delta load process, that is, the limiting of the download to the data content that has been changed or added since the last download. The data to be loaded is then updated (merged) against the data already available in the target system from previous data runs. 
The data update can either also be automatic or, depending on the client’s specific requirements. 

### Destinations 

Xtract Universal supports a number of environments as the target for the data extraction, see [Destinations](https://help.theobald-software.com/en/xtract-universal/xu-destinations). 
