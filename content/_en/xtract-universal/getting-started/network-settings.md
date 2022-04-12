---
ref: xu-getting-started-01
layout: page
title: 0. Setting Up Xtract Universal
description:  0. Setting Up Xtract Universal
product: xtract-universal
parent: getting-started
permalink: /:collection/:path
weight: 1
lang: en_GB
progressstate: 5
---

This section shows how to set up Xtract Universal with your SAP system. <br>
It also includes information on which SAP installations and customizations are mandatory for using components of the SAP connector.

### Network Settings


#### SAP Ports

The following ports between the Windows server, on which the connector
is installed and the SAP server from which data is extracted, must be
open:
| SAP NetWeaver Component | Port<br> NN = System number of the SAP system, see https://help.sap.com/viewer/ports |
| ------------- |:-------------:|
| SAP Application Server | 33<NN> |
| SAP Message Server | 36<NN> |
| Secure Network Communication (SNC)| 48<NN> |
| SAP-Router | 3399 |

#### Xtract Universal Ports

- The default port or the communication between the Xtract Universal Designer and the Xtract Universal (configuration) server is 8064.
- The default ports for the communication with the Xtract Universal (web) server are 8065 (HTTP) or 8165 (HTTPS).

The ports can be changed in the [Server Settings](../server/server-settings) of the Designer.

### SAP User Rights
To connect to an SAP system and to extract data, an SAP user (system or
dialog user) with dedicated user rights is needed. Usually an SAP system
user (also called technical user) is used for the production environment.
Which rights are required for the SAP user is dependant on the component that is used for rhe data extraction. The following Knowledgebase article lists the necessary user rights::
https://kb.theobald-software.com/sap/authority-objects-sap-user-rights
The section General Authority Object documents the access rights
needed to establish an SAP connection via RFC. The article is divided into
subsections that documents the access rights needed for each component. Make sure to have the SAP Basis team set up a user with the designated user rights.
Attention: An SAP system user cannot be used to acces SAP via the
SAP GUI. To access SAP via the SAP GUI a dialog user is needed. We
recommend using a dialog user with further administration rights (SE37,
SE16, RSA3, ...) for the evaluation phase, so that the consultant can
check data in the SAP system using the SAP GUI if necessary.

### Installation & Customization of SAP

If the installation of function modules or a customization of the SAP system is neccessary, depends on the extraction type, see:
https://help.theobald-software.com/en/xtract-universal/index#extractiontypes
The following table provides an overview of components and their respective SAP customization:
Component
Usage
Details
Table, Table Join
Extraction & Joining of SAP Tables
and Views
Installation on the SAP system is recommended
and depending on your scenario necessary:
https://help.theobald-software.com/en/xtract-universal/sap-customizing/custom-function-modulefor-table-extraction
Report
Extraction of
ABAP reports
Installation on the SAP system is necessary:
https://help.theobald-software.com/en/xtract-universal/sap-customizing/install-report-custom-function-module

#### Installation
SAP transport requests for the installation of function modules is provided.
The transport request is located in the installation directory: C:\Program
Files\[XtractProduct]\ABAP\.

#### Customizing
For the following components a customization of the SAP system is necessary:
Component
Usage
Details
DeltaQ
Extraction of
(OLTP / Export)
DataSourcesaund
(BW) Extractors
SAP customization:
https://help.theobald-software.com/en/xtract-universal/sap-customizing/customizing-for-deltaq
OHS (Open Hub
Services)
Extraction of OHS
destinations from
a BW system
SAP customization:
https://help.theobald-software.com/en/xtract-universal/sap-customizing/preparation-for-ohs-in-bw

For all other components no installation or customizing is necessary, see
list below:
- ODP,
- BW Cube/Query,
- SAP Query,
- BAPI / Function Module,
- BW Hierarchy
Attention: To run an extraction, the SAP user rights have to be assigned
as described in the section SAP User Rights.
For the latest information on the installation and customization of the SAP
system, see:
https://help.theobald-software.com/en/xtract-universal/introduction/requirements#installation-and-configuration-on-sap
For more information contact our support team at:
https://support.theobald-software.com