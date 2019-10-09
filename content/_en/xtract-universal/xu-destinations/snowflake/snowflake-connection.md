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

Create a new Snowflake destination as described in the chapter [Managing destinations](../../xu-destinations/managing-destinations).
The following settings can be defined for Snowflake environment.
![Snowflake-Destination-Details](/img/content/xu/snowflake/snowflake-destination-details.png){:class="img-responsive"}

**Directory**<br>
Specifies an existing local directory in which the extracted files are stored.

**Region**<br>
Specifies the region of the Snowflake environment.<br>
In the given example, the region "AWS - EU (Frankfurt)" is selected. 
The selected region must match the information in the assigned account. 

**Account**<br>
Specifies the Snowflake authentication account.<br>
In the given example it is: "theobald_partner", see also the URL: <br>
https://theobald_partner.eu-central-1.snowflakecomputing.com/console#/

**User Name**<br>
Snowflake authentication - user name. 

**Password**<br>
Snowflake authentication - password.

**Database**<br>
The name of the Snowflake database.

**Connect**<br>
Button for checking the connection.
If the connection is successful, further settings can be changed. 

**Stage name**<br>
Snowflake Stage name. 
Please be aware that only "internal" stages are supported. <!--please check if "supported" a good term in this case-->

**Warehouse**<br>
Snowflake Data Warehouse name.