---
ref: bc-tablecdc-06
layout: page
title: General settings
description: General settings
product: board-connector
parent: table-cdc
permalink: /:collection/:path
weight: 6
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=where-clause
---

General Settings are independent of the extraction type.

### To open General Settings
1. In the main window of the Designer, double-click an extraction.<br>
The window "Define data source for [...]" opens.<br>
Example:
![General-Settings](/img/content/General-Settings_designer.png){:class="img-responsive"}

2. Within the opened window, click **[General Settings]**.<br>
The window "General Settings" opens.


### Misc. Tab
The miscellaneous tab consists of two subsections:
- Options
- Keywords

![General-Settings](/img/content/General-SettingsBC.png){:class="img-responsive"}

#### Options
**Cache results** (1)


BOARD often pulls the data from SAP for several times. To decrease the SAP server load, you can select the **Cache results** option, this way BOARD pulls the data from cache and not from the SAP.
This increases the performance and limits the impact on the SAP system. If this behavior is not wanted (for example, because the data must be always 100% up to date), the cache option must be explicitly turned off.

**Preview Mode** (2)

If preview mode is activated, only a small portion of data is extracted from SAP or, if extraction is not possible, sample data is generated instead.


#### Keywords
One or more keywords (Tags) can be set to an extraction. 
Keywords can be entered directly in the keyword field (3).
Within the Designer you can use these keywords to filter  extractions. 

{:.box-tip}
**Tip:** to display filter options, navigate to **[Extractions] > [Filter]** or press **[CTRL]+[F]**.
 

### Security Tab
The security tab is described in the section [access management](https://help.theobald-software.com/en/board-connector/security/access-management).

### CSV Tab

#### Column Name Style

Defines the style of the column name. Following options are available: 

- **Code**: The SAP technical column name is used as column name in the destination e.g. MAKTX<br>
- **PrefixedCode**: The SAP technical column name is prefixed by SAP object name and the tilde character e.g., MAKT~MAKTX
- **CodeAndText**: The SAP technical column name and the SAP description separated by an underscore are used as column name in the destination e.g., MAKTX_Material Description (Short Text)<br>
- **TextAndCode**: The SAP description and the SAP technical column name description separated by an underscore are used as column name in the destination e.g., Material Description (Short Text)_MAKTX

#### Date conversion

**Convert date strings**<br>
Converts the character-type SAP date (YYYYMMDD, e.g., 19900101) to a special date format (YYYY-MM-DD, e.g., 1990-01-01). Target data uses a real date data-type and not the string data-type to store dates.

**Convert invalid dates to**<br>
If an SAP date cannot be converted to a valid date format, the invalid date is converted to the entered value. NULL is supported as a value.

When converting the SAP date the two special cases 00000000 and 9999XXXX are checked at first.

**Convert 00000000 to**<br>
Converts the SAP date 00000000 to the entered value.

**Convert 9999XXXX to**<br>
Converts the SAP date 9999XXXX to the entered value.