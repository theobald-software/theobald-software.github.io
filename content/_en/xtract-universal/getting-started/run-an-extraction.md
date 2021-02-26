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

This step is optional and allows to directly run an extraction from the Xtract Universal designer, define runtime parameters and the setting and checking of other options related to the execution of an extraction. 


### Run Extraction dialogue ###
 
To open the "Run Extraction" dialogue, select an extraction from the list and click **[Run]**. <br>
This can be done through the Main Menu Bar, the GUI Buttons or through the dialogue when right-clicking on an extraction in the List of Extractions (see [Designer - Main Window Overview](./designer-overview)).   

![Run-Table-Extraktion](/img/content/xu/xu_run_extraction_dialogue.png){:class="img-responsive"}
The "Run extraction dialogue" window consists of the following sections:
- General Info (1)
- Runtime parameters(2)
- Extraction URL and command line tool (xu.exe) expression (3)
- Logs and Output (4)
- Run, Abort and Close (5)  

### General Info (1) ###

Info object |Details
------------ | ------------ |
Extraction name  | Name of the extraction |
Source | Information about the source settings chosen for that extraction (Name, Host, Client, User Name, Instance No., Language) |
Destination | Name of the destination (Name, Type, Pull destination info)|
Execution start | Start date and time stamp of the extraction run |
Time elapsed | Elapsed time for the extraction run |
Rows extracted| Number of extracted rows |
Status | Extraction status |
Duration | Extraction duration |

### Runtime parameters (2) ###

The three tabs "Extraction", "Source" and "Custom" are described in detail [here](../advanced-techniques/extraction-parameters).

#### Example ####
1. Select the checkbox of the parameter you want to override.
2. Enter the value. The actual request of the data occurs in the URL box below, also the modified expression for the command-line tool "xu.exe". 
- Before changing a parameter:
`http://localhost:8065?name=Plants`
- After editing the parameter **rows**:
`http://localhost:8065?name=Plants&rows=100` 

![Run-Table-Extraction-param](/img/content/xu/xu_run_extraction_param.png){:class="img-responsive"}

{: .box-note }
**Note:** Additional parameters such as *Package size* or *Row limit* etc. are described in section [Extraction settings](https://help.theobald-software.com/en/xtract-universal/table/extraction-settings). 


### Extraction URL and command-line tool expression (3) ###
The entries in these two fields change according to the settings made in the "Runtime parameters" section. The entries only change when confirming the settings with **[ENTER]** or by clicking in on of the two fields after the settings have been made.  

#### URL ####
The URL to run the extraction in a browser is displyed here. Copy the URL with the button on the right side and enter it in a web browser of your choice. 
This procedure corresponds to the "Run in browser" functionality available with a right-click on an extraction in the extraction list.

![Table-Extraction-Browser-Result](/img/content/run_ausgabe_browser_xu.png){:class="img-responsive"}

#### xu.exe ####
The expression to be used in the command-line tool "xu.exe" is displayed here. It allows to shcedule extraktions with the Windows task scheduler.
For more detailed information see [Scheduling an extraction](../advanced-techniques/scheduling_extraction).

By default the parameters "-s" (Server for extraction), "-p" (Listener port of the Xtract Universal Server) and "-n" (Name of the extraction) are generated for any extraction. 

### Logs and Output (4) ####
This section is populated with information when the extraction was executed with **[Run]**. 

#### Log ####
In the "Log" tab the extraction log is displayed in real time. If the checkbox "Auto scroll to the end" is activated, the log screen automatically scrolls down to the end.  

#### xu.exe ####
In the "xu.exe" tab the log of the command-line tool is displayed. 
 
#### Output ####
In the "Output" tab the extraction result is displayed to a maximum amount of 500 rows. The rows to be displayed can be changed by typing in different values in the two boxes. 

![Run-Extraction-Output](/img/content/xu/xu_run_extraction_output.png){:class="img-responsive"}

### Run, Abort and Close (5) ####
Run the extraction with **[Run]**, abort it with **[Abort]** and close the dialogue with **[Close]**.