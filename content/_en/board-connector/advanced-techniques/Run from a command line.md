---
ref: bc-advanced-techniques-09
layout: page
title: Run from a command line
description: Run from a command line
product: board-connector
parent: advanced-techniques
permalink: /:collection/:path
weight: 9
lang: en_GB
old_url: /BOARD-Connector-EN/default.aspx?pageid=user-defined-variables
---
Scheduling extractions at a later time is possible 
with any task scheduler e.g., Windows task scheduler
 (see the Xtract Universal example in [Blog article - How to schedule Xtract Universal extractions to load data from SAP](http://www.theobald-software.com/blog/2013/01/28/how-to-schedule-xtract-universal-extractions-with-the-windows-task-scheduler-to-load-data-from-sap/0) ). To use the task scheduler functionality, run BOARD Connector from a command line.

### Running Bord Connector from a command line
1. Navigate to the the installation folder of BOARDConnector e.g.,
 `C:\Program Files\BOARDConnector` <br>
2. Find the command-line tool BCConsole.exe, which can be used to execute an extraction.<br>

`C:\Program Files\BOARDConnector\BCConsole.exe`<br>
`http://localhost:8065/?name=MyExtractionName`

### Variables

When using variables, place an escape character *^* before the character *&* <br>
`C:\Program Files\BOARDConnector\BCConsole.exe`
`http://localhost:8065/?name=MyExtractionName^&Variable=Value`

If the extraction is called via the parameters, any number of variables can be added via the -o parameter:<br>
- -o variableName=variableValue 
- -o variableName2=variableValue2 ...

### Predefined variables

Predefined variables are described in [Extraction Parameters](./extraction-parameters). 

### Returned value 

If an operation is successfully completed, the program returns the value 0.
In case of an error, it returns one of the following codes:

|HTTP Status codes | Description |
|:----|:---| 
|404 | Extraction doesn't exist |
|1001 | An undefined error has occurred |
|1002 | The file could not be found|     
|1013 | Invalid Input Data |
|1014 | The number of arguments is invalid |
|1015 | The name of the parameter is unknown |
|1016 | The argument is invalid |
|1053 | The URL is wrong |
|1087 | The parameter is invalid |

#### Parameters

-h Outputs the help page

-s Server for extraction

-p Listener port of the Xtract Universal Server

-n Name of the extraction

-o Adds a variable

Examples: <br>
```
xu.exe http://localhost:8065/?name=MyExtractionName^&rows=200 <br>
xu.exe -s localhost -p 8065 -n MyExtractionName -o rows=200 <br>
xu.exe -s localhost -p 8065 -n MyExtractionName<br>
xu.exe -h
```

### Call in PowerShell

The following example shows how to call an extraction in PowerShell using the xu.exe command tool (see also an Xtract Universal example in the [Blog article - Mastering SAP Access with Xtract Universal and Powershell](https://blog.theobald-software.com/2018/04/26/mastering-sap-access-with-xtract-universal-and-powershell/)).<br>

### Showing extraction in the Windows Event viewer
BOARD Connector extraction events can be inserted into the Windows logs and displayed in the Event Viewer (see an Xtract Universal example [Knowledge base article - How to insert Xtract Universal extraction events into the windows logs](https://kb.theobald-software.com/xtract-universal/how-to-insert-xtract-universal-extraction-events-into-the-windows-logs-and-show-them-in-the-event-viewer)).
