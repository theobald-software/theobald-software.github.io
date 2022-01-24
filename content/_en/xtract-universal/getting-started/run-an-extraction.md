---
ref: xu-getting-started-03
layout: page
title:  3. Running an Extraction
description: Step 3 - Run an Extraction
product: xtract-universal
parent: getting-started
permalink: /:collection/:path
weight: 3
lang: en_GB
progressstate: 5
---


Xtract Universal Designer offers a test run option for extractions. 
You can define runtime parameters and other options to run an extraction directly from the Xtract Universal Designer.

### Run Extraction 
 
Select an extraction from the list of Extractions and click **[Run]** to open the "Run Extraction" window.<br>
You can also right-click on an extraction or use the Main Menu Bar to open the "Run Extraction" window.

![Run-Table-Extraction](/img/content/xu/xu_run_extraction_dialogue.png){:class="img-responsive"}

The "Run extraction" window consists of:
- General Info (1)
- Runtime parameters (2)
- URL and command-line (3)
- Logs and Output (4)
- Buttons (5)  

### General Info (1)

Info object |Details
------------ | ------------ |
Extraction name  | Name of the extraction |
Source | Information about the source settings chosen for that extraction (Name, Host, Client, User Name, Instance No., Language) |
Destination | Name of the destination (Name, Type, Pull destination info)|
Execution start | Start date and time stamp of extraction run |
Time elapsed | Elapsed time of the extraction run |
Rows extracted| Number of extracted rows |
Status | Extraction status |
Duration | Extraction duration |

### Runtime parameters (2)

The three tabs "Extraction", "Source" and "Custom" contain [Extraction Parameters](../execute-and-automate-extractions/extraction-parameters).
When you change these parameters, the *extraction URL and command-line (3)* also change.

#### Example
1. Select the checkbox of the parameter you want to override.
2. Enter the value and confirm by pressing enter. 
- Extraction URL before changing the parameter:<br>
`http://localhost:8065?name=Plants`
- Extraction URL after editing the parameter **rows**:<br>
`http://localhost:8065?name=Plants&rows=100` 

![Run-Table-Extraction-param](/img/content/xu/xu_run_extraction_param.png){:class="img-responsive"}

{: .box-note }
**Note:** Additional parameters such as **Package size**, **Row limit**, etc. are described in [Extraction settings](./../table/extraction-settings). 


### URL and command-line (3)
The strings displayed in **URL** and **xu.exe** are generated and automatically update when you change the *Runtime Parameters (1)*.
Use them to run the extraction outside of the Xtract Universal Designer.

#### URL
The extraction URL can be used in different integration scenarios and use cases. 
- Call the extraction where it is not possible to use the command-line tool xu.exe, e.g. in cloud based environments.
- Call the URL when the extraction is set to a [Pull Destination](../destinations#pull-and-push-destinations).
- Run the extraction in a web browser, e.g. for testing purposes. 
- Other use cases are possible, e.g. calling it in a PowerShell script. 

{: .box-note }
**Note:** 
Copying the URL with *Ctrl+C* or the button on the right side and execute it in a web browser corresponds to the "Run in browser" functionality available by right-clicking an extraction in the [Main Window Overview](../getting-started/designer-overview).

#### xu.exe 
This command allows running an extraction with the command-line tool **xu.exe**, which is installed with Xtract Universal.
The tool can be found in the installation folder: ```C:\Program Files\XtractUniversal\xu.exe``` <br>
Copy the expression with *CTRL+C* or the button on the right side. 

We recommend using the command-line tool with [Push Destinations](../destinations#pull-and-push-destinations).
It can be called from a Windows script or any scheduler, that can invoke Windows command-line calls. <br>
In the most simple case, the Windows task scheduler can be used for calling and scheduling extractions using xu.exe. For more detailed information about scheduling with **xu.exe**, see [Scheduling an extraction](../execute-and-automate-extractions/call-via-scheduler).

By default the parameters "-s" (Server for extraction), "-p" (Listening port of the Xtract Universal Server) and "-n" (Name of the extraction) are generated for any extraction. 

### Logs and Output (4) 
When an extraction is executed, information about the extraction is displayed in this section.

#### Log 
In the *Log* tab the extraction log is displayed in real time.
Activate the checkbox **Auto scroll to the end** to automatically scroll down to the last protocol.  

#### xu.exe 
In the *xu.exe* tab the log of the command-line tool is displayed. 
 
#### Output 

In the *Output* tab the results of the extraction are displayed.
This option is only available for the following destinations:
- Web Service CSV 
- Web Service JSON 
- Alteryx
- SQL Server Reporting Services 
- QlikSense&QlikView

![Run-Extraction-Output](/img/content/xu/xu_run_extraction_output.png){:class="img-responsive"}

**Limiting the number of displayed rows**<br>
In the *Output* tab the extraction results are displayed to a maximum amount of 500 rows.
The number of rows to be displayed can be changed using the **Display rows from line** boxes.

**Filtering Results**<br>
To filter the results, enter filter values above the columns of the results and click **[Display]**.
To undo the filtering, click **[Clear search]**, followed by **[Display]**.

### Buttons (5) 
Run the extraction with **[Run]**, abort it with **[Abort]** and close the window with **[Close]**.
