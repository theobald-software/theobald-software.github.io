---
ref: xu-snowflake-02
layout: page
title: Connection
description: Connection
product: xtract-universal
parent: snowflake
permalink: /:collection/:path
weight: 2
lang: en_GB
---

### Adding a Snowflake Destination
1. To add a new destination, see [Managing Destinations](../managing-destinations)
2. Fill in **Name**.
3. Select the *Snowflake* destination from the drop-down list.

### Destination Details
The window "Destination Details" consists of:
- Name - Destination name
- Type - Destination type

![Snowflake-Destination-Details](/img/content/xu/snowflake/snowflake-destination-details_1.png){:class="img-responsive"}

**Directory**<br>
Specifies an existing local directory in which the extracted files are stored.

**Region**<br>
Specifies the region of the Snowflake environment.<br>
In the given example, the region "AWS - EU (Frankfurt)" is selected. 
The selected region must match the information in the assigned account. 

**Account**<br>
Specifies the Snowflake authentication account.<br>
In the given example it is: "dummy_account", see also the URL: <br>
https://dummy_account.eu-central-1.snowflakecomputing.com/console#/

**User Name**<br>
Snowflake authentication - user name. 

**Password**<br>
Snowflake authentication - password.

**Database**<br>
The name of the Snowflake database.

**Schema**<br>
The schema of the Snowflake database.

**Connect**<br>
Button for checking the connection.
If the connection is successful, further settings can be changed. 

**Stage name**<br>
Snowflake Stage name. 
Please be aware that only "internal" stages are supported. <!--please check if "supported" a good term in this case-->

**Warehouse**<br>
Snowflake Data Warehouse name.