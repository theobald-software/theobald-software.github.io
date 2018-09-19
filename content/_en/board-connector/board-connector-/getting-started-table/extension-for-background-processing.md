---
layout: page
title: Extension for Background Processing
description: Extension for Background Processing
product: board-connector
parent: getting-started-table
permalink: /:collection/:path
weight: 8
lang: en_GB
old_url: /BOARD-Connector-EN/default.aspx?pageid=extension-for-background-processing
---

Table data is extracted by default in the dialog, i.e. for each data packet a select is done on the original table and the respective data packet is extracted and sent.

With the help of *background extraction*, you may make a selection in the background and temporarily deposit it in a buffer table.

In certain cases, this might lead to a significant improvement in performance. Background processing works as follows:

The background application is activated through the selection. In SM37 (job administration), you can check the background job during the extraction process. 

- The background app writes to the ZXTRACTBUFFER table for temporary data.
- The data are downloaded from the ZXTRACTBUFFER table.
- The temporary data are then deleted from the ZXTRACTBUFFER table.

In order to be able to use the extension, the ZXTRACTBUFFER table and the additional functional module Z_XTRACT_IS_TABLE_EX must be installed in SAP. 

In the section SAP Customizing in the chapter [Extension for Background Processing]() you'll find a step-by-step solution.