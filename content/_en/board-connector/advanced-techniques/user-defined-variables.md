---
ref: bc-advanced-techniques-01
layout: page
title: User-Defined Variables
description: User-Defined Variables
product: board-connector
parent: advanced-techniques
permalink: /:collection/:path
weight: 1
lang: en_GB
old_url: /BOARD-Connector-EN/default.aspx?pageid=user-defined-variables
---

Variables can be set as user-defined (custom) runtime parameters of an extraction.
The following example shows how to use user-defined variables as filter values in a WHERE condition.

In the following steps, the SAP standard table T001W (Plants/Branches) is used. The basic setup of a table extraction is described in section [Defining a Table Extraction](../getting-started/define-a-table-extraction).

### Creating user-defined variables

1. Select the tab *WHERE Clause* and enter the user-defined variables *@PlantLow* and *@PlantHigh* as well as Open-SQL operators, e.g. `T001W~WERKS BETWEEN @PlantLow AND @PlantHigh`.
![Extraction-User-Variables](/img/content/Extraction-User-Variables.png){:class="img-responsive"}
2. Click **[OK]** to confirm the input.
3. Click **[Run]**. The window 'Run Extraction' opens.
4. Switch to the tab *Custom* (1) of the runtime parameters. The variables are recognisable by the @ sign.
5. Enter the values and confirm by pressing the enter key.
![Run-Extraction-Custom-Defined-Parameters](/img/content/board/Run-Extraction-Custom-Defined-Parameters.png){:class="img-responsive"}
6. The values for the run-time parameters are taken from the extraction URL.
7. Click **[Run in Browser]** (2) to execute the extraction.

****
#### Related Links:
- [WHERE Clause](../table/where-clause)
