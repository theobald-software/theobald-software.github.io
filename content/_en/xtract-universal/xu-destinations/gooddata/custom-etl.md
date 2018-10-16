---
ref: xu-gooddata-04
layout: page
title: Custom ETL
description: Custom ETL
product: xtract-universal
parent: gooddata
permalink: /:collection/:path
weight: 4
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=custom-etl
---

If you have extracted and uploaded your data in preparation for a custom ETL process, the following steps will get you started. 

**Start up CloudConnect**<br>
If this is the first time you started CloudConnect, the program should ask for your login information and prompt you to create a new local project, which you can link to a project on the GoodData platform (or create a new cloud project as well, if you haven't done so already).

**Graph creation**<br>
Now you should create a new ETL graph by using **File->New->Graph**. Keep the default graph settings or alter them as you see fit.           

**Adding a CSV Reader**<br>
After you have created the graph, drag and drop a new **CSV Reader** from the **Readers** toolbox on the right side into the working area.

![GD-Csv-Reader](/img/content/GD-Csv-Reader.png){:class="img-responsive"}

Double-click the CSV Reader or right-click it and select **Edit** to open its settings. Click on the empty field next to **File URL** and then on the selection button on the right side.

![GD-Edit-Csv-Reader](/img/content/GD-Edit-Csv-Reader.png){:class="img-responsive"}

In the new window select the **Remote** files tab.

![GD-Url-Dialog](/img/content/GD-Url-Dialog.png){:class="img-responsive"}

Press the **Create/Edit URL** icon and enter the following Information as well as your user name and password:            

**Protocol**: HTTPS<br>
**Host**: secure-di.gooddata.com<br>
**Path**: /uploads/<br>     

Alter your **Path** accordingly if you have added additional sub-directories in your Xtract Universal destination settings.


![GD-Edit-Url](/img/content/GD-Edit-Url.png){:class="img-responsive"}

You can save these settings and load them in other graphs with the buttons at the bottom, if you want to.
After clicking OK, CloudConnect automatically connects to the server and navigates to the specified directory. Simply select the uploaded file (default: data.csv), click OK and close the CSV Reader settings by clicking OK again.

![GD-Url-Dialog-With-File](/img/content/GD-Url-Dialog-With-File.png){:class="img-responsive"}

Now right-click the CSV Reader and select **Extract metadata**. In the new window, change the Encoding to UTF-8, click Next and finally Finish.

![GD-Encoding](/img/content/GD-Encoding.png){:class="img-responsive"}

You are now ready to connect the CSV Reader to any ETL component you like to use. Just remember to use the extracted metadata from the previous step when you create your first edge from the CSV Reader to the next element in your ETL graph. 
            
**Taking it one step further**<br>
If you want to automate the data import, you can deploy your graph to the GoodData Server with **Deploy->Deploy** and run it at regular intervals by adding a schedule via GoodData's web-interface.

Now you can simply run the data extraction in Xtract Universal whenever you wish to update your data and GoodData will automatically run the scheduled ETL process in the background to integrate your exported data.

