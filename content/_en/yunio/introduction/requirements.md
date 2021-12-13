---
ref: yunio-introduction-01
layout: page
title: Requirements
description: Requirements
product: yunio
parent: introduction
permalink: /:collection/:path
weight: 1
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=requirements
Progressstate: 5
---


### Supported SAP Systems and releases
All communication with SAP is performed via the RFC protocol. 
All SAP ABAP based systems that provide RFC connectivity are supported.
The integration occurs at SAP application server level. Therefore, the database used by the SAP system is irrelevant. 
SAP ABAP Systems on any database (including HANA) are supported. 
This means that the operating system of the SAP system is irrelevant - all operating systems are supported.
SAP Systems running on Big Endian and Little Endian hardware are supported.

SAP Releases 4.6C and newer are supported. Including the following:
<br/> 	
* mySAP
* SAP Application Server ABAP, Message Server, Router, Standalone Gateway
* SAP Business Suite 7 (CRM, SRM, SCM etc.)
* SAP Business All in One, CAR, APO, PI, IS-U etc.
* SAP BW 3.1 and later
* SAP BW/BI 7.x
* SAP BW/4HANA
* SAP ERP / ECC 5.0 / ECC 6.0 (including all EhPs)
* SAP R/3 Version 4.6C and later
* SAP S/4HANA

The following SAP Releases have only limited support:
- SAP S/4HANA Cloud Extended Edition (EX)

{% include _content/en/requirements/sap-misc.md %}
{% include _content/en/requirements/operating-systems.md %}

### Supported Web Browsers
yunIO supports current versions of the following web browsers: 
- Firefox 
- Chrome
- Edge
- Safari

### Processor Cores
Minimum: 2 Cores. 
1 additional core is required for each additional parallel extraction. 

### Processor Speed   
Minimum: Processor: 1.4 GHz, Recommended: 2.0 GHz or faster.

### Main Memory
Minimum: 8 GB, Recommended: 12 GB for up two parallel extractions.
4 GB dedicated memory in average for each additional parallel extraction.
You must check the exact storage requirements of an extraction in your scenario.<br>

Memory consumption depends on many factors including component type (i.e. Table, Extractor or BW Query), number of columns and number of rows in each data package (i.e. package size). <br> 
E.g. the BW Cube component needs for extracting and processing data more main memory space than the Table component for the same data amount. 


### Disk space
For the installation 150 MB disk space is required.

### 64-Bit Environment	
The product can be installed on 64-Bit operating systems only.
