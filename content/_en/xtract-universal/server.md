---
ref: xtract-universal-07
layout: page
title: Server
description: Server
product: xtract-universal
parent: xtract-universal
childidentifier: server
permalink: /:collection/:path
weight: 7
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=server
---

The follwing section contains an overview of the Xtract Universal server.

The server performs two main tasks:

- Run extractions stored in the [Config](./advanced-techniques/backup-and-migration#configuration-files) directory. 

- Make extractions stored in the [Config](./advanced-techniques/backup-and-migration#configuration-files) directory available to the designer.

### Run Extraction on the Server

Execution is triggered by an HTTP request. The HTTP request can be triggered from the target environment for [pull destinations](./xu-destinations#pull--and-push destinations) or from the xu command line tool (xu.exe /xu.elf). 

{: .box-tip }
**Tip:** The process can be traced in the [Extraction Log](./logging/extraction-logging).

1. Server checks the authentication and authorization of the request.
2. The target environment is prepared for writing the extracted data (e.g. establish database connection, create file).
3. The license is checked.
4. A connection to the SAP system defined in the source is established.
5. The data of the defined extraction type is requested.
6. Each extracted data package is written to the target environment.
7. After all packages are received, the connection to the SAP system is terminated and the target environment is informed that the extraction is complete.


{% include _content/table-of-contents.html parent=page.childidentifier collection=site.en %}
