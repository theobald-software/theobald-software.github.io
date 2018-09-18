---
layout: page
title: Architecture
description: Architecture
product: board-connector
parent: getting-started-table
permalink: /:collection/:path
weight: 1
lang: en_GB
old_url: /BOARD-Connector-EN/default.aspx?pageid=architecture
---

BOARD Connector for SAP is a middleware component to extract data from SAP systems and load it into BOARD. It has two components: Server and Designer.<br>
The Server is responsible for the extraction. BOARD communicates with the Server, und this in turn with SAP. You use the Designer for the design and configuration of the extractions. The Designer directly communicates also with SAP, not to transport data, but just to query metadata during the design process.

![Architecture-01](/img/content/Architecture-01.png){:class="img-responsive"}

BOARD is a set of eight extraction types which make it possible to cover the entire range of demands placed on SAP data extraction:

**Table** accesses Tables and Views.

**Query** accesses queries (not to be mistaken with BEx queries which are supplied by BW Cube).

**BAPI** accesses BAPIs and RFC function modules.

**BW Cube** extracts data from SAP BW InfoCubes and BEx Queries.

**Hierarchy** extracts Hierarchies from an SAP BW / BI system.

**Open Hub Service (OHS)** extracts InfoSpokes and OHS destinations.

**DeltaQ** extracts DataSources (OLTP).

**Report** executes ABAP Reports.