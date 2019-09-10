---
ref: bc-getting-started-table-03
layout: page
title: Step 3 - Run an Extraction
description: Step 3 - Run an Extraction
product: board-connector
parent: getting-started-table
permalink: /:collection/:path
weight: 3
lang: en_GB
---

This step is optional and shows how to display the extraction result in a webbrowser to make sure that the extraction runs properly and delivers the appropriate result.

To execute the created extraction, select the corresponding line in the main form and then click Run.

![Extraction-Run](/img/content/Extraction-Run.png){:class="img-responsive"}

In the following window you can optionally specify details of the execution. 

The actual request of the data occurs via URL (see screenshot). To run an extraction it’s sufficient to specify its name. However, it is possible to override some extraction’s behavior with the help of parameters. If you want to change the maximum number of rows from 0 (unlimited) to 100, change the *Operation* from *Default*  to *Override* and set the desired parameter in the value column.

![Table-Plants-Run](/img/content/Table-Plants-Run.jpg){:class="img-responsive"}

The other parameters *format, bg* and *packagesize* are described in section Settings. To run the extraction, click *Run in Browser*. <br>
Your default browser opens and displays the data in accordance with the criteria and format.

![Run-Extraction-Result](/img/content/Run-Extraction-Result.png){:class="img-responsive"}


Please note that passing parameters (*rows* in our example) is optional. It is only necessary to set them if we want to override the default value.