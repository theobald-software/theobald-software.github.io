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

{% include _content/en/xu-specific/xu-destinations/general/connection.md %}	

### Destination Details

![Snowflake-Destination-Details](/img/content/xu/snowflake/snowflake-destination-details_1.png){:class="img-responsive"}

#### Connection

**Output Directory**<br>
Enter an existing local directory in which the extracted files are stored.

**Region**<br>
Select the region of the Snowflake environment from the drop-down-menu.<br>
In the given example, the region *AWS - EU (Frankfurt)* is selected. 
The selected region must match the information in the assigned account. 

**Account**<br>
Enter the Snowflake authentication account. In the given example it is: "dummy_account", see also the URL: <br>
`https://dummy_account.eu-central-1.snowflakecomputing.com/console#/`

**User Name**<br>
Enter the Snowflake authentication user name. 

**Password**<br>
Enter the Snowflake authentication password.

**Database**<br>
Enter the name of the Snowflake database.

**Schema**<br>
Enter the schema of the Snowflake database.

**Connect**<br>
Check the connection to the database.
If the connection is successful, further settings can be edited. 

#### Stage

**Stage name**<br>
Enter the name of a Snowflake Stage. 
Please be aware that only "internal" stages are supported. <!--please check if "supported" a good term in this case-->

**Warehouse**<br>
Enter the name of a Snowflake Data Warehouse.