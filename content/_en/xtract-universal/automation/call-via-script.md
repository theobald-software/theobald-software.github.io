---
ref: xu-script-01
layout: page
title: Call via Script
description: Call an Extraction via Windows Script
product: xtract-universal
parent: automation
permalink: /:collection/:path
weight: 7
lang: en_EN
---

This section shows how to call an extraction from a [Windows script (.bat)](../automation/call-via-script#aufruf-via-windows-skript-bat) or [PowerShell script](../automation/call-via-script#aufruf-via-powershell-skript).

### Call via Windows script (.bat)

The following example shows how to run an extraction using a Windows script.
First, you create a batch file in which you call the command line tool *xu.exe*.

#### Define Variables

Define the following variables:
- Standard output (*XUOutputfile*)
- Standard error output (*XULogfile*)

```bat
:: Execute an Xtract Universal extraction using the command tool xu.exe
:: clear screen  
cls
:: Turns off the command echoing feature
@echo off
:: write the output to a file
set XUOutputfile="C:\Data\xubatch\output.txt"
::write the log to a file
set XULogfile="C:\Data\xubatch\log.txt"
```

Define the following variables:
- Path to the command line tool (*XUCmd*)
- XU server name (*XUServer*)
- XU server port (*XUPort*) 
- Name of the extraction (*XUExtraction*)

```bat
::set the path to the installation folder
set XUCmd="C:\Program Files\XtractUniversal\xu.exe"
:: default is also localhost, so you skip it or change it  
set XUServer=localhost
:: default port is also 8065, so you skip it or change it  
set XUPort=8065
set XUExtraction=customers 
```

#### Set Parameters dynamically
Define the following variables:
- dynamic parameter (*v_country*)

```bat
:: the extraction has a variable Country that needs a country code of lenght 2, e.g. US
:: Skip this block if you don't use variable  
set v_country=US
:: Turns on the command echoing feature
@echo on
```

#### Run Extraction
After defining all variables, call the command line tool with the corresponding parameters. 

```bat
:: run the command tool with the right parameters
%XUCmd% -s %XUServer% -p %XUPort% -n %XUExtraction% -o Country=%v_country% 1>%XUOutputfile% 2>%XULogfile%
```

####  Check Return Code
After running the extraction, check the return code and write a corresponding message. The return code *0* indicates a successful execution.

Other [Return Codes](./automation/call-via-commandline#return-codes) indicate errors during execution.

```bat
:: check the last exit code
:: 0: successful
:: else unsuccessful
@echo off 
IF %ERRORLEVEL% EQU 0 ( 
 echo extraction %XUExtraction% is successful 
) ELSE (
 echo extraction %XUExtraction% is not successful. Error Code %ERRORLEVEL%. See log for details.
)
@echo on
```

#### Run a List of Extractions
You can also create a list of extractions to run consecutively. In this example there are two extractions by the names *customers* and *materials*.

```bat
@echo off 
:: create an array with many values seperated by empty space 
set extraction_list=customers materials 
:: alternative 
:: set extraction_list[0] = customers 
:: set extraction_list[1] = materials 
@echo on

for %%e in (%extraction_list%) do ( 
	%XUCmd% -s %XUServer% -p %XUPort% -n %%e 1>>%XUOutputfile% 2>>%XULogfile%
)
```

{: .box-note }
**Note:** Note that the output in this example is added to the existing file with *>>*.


#### Write Extraction Logs into Windows Logs
Extractions from Xtract Universal can be added to the Windows logs. They can be displayed in the Event Viewer.

### Call via PowerShell Script
You can run extractions using PowerShell. To do so, call the command line tool *xu.exe*.

#### Define Variables
Define the following variables:
- Standard output (*XUOutputfile*)
- Standard error output (*XULogfile*)

```shell
# Execute an Xtract Universal extraction using the command tool xu.exe 
# clear screen  
clear
# write the output to a file
$XUOutputfile = "C:\Data\powershell\output.txt"
# write the log to a file
$XULogfile = "C:\Data\powershell\log.txt"
```

Define the following variables:
- Path to the command line tool (*XUCmd*)
- XU server name (*XUServer*)
- XU server port (*XUPort*) 
- Name of the extraction (*XUExtraction*)

```shell
# set the path to the installation folder
$XUCmd = 'C:\Program Files\XtractUniversal\xu.exe'
  
$XUServer = "localhost"
$XUPort = "8065"
$XUExtraction = "SAPSalesCube" 
```
#### Set Parameters dynamically
Define the following variable that contains the current month in the format "yyyyMM" e.g., *201712*:
- dynamic parameter (*myCalendarMonth*) 

```shell
# the extraction has a variable CalendarMonth that needs a value in the format "yyyyMM", e.g. 201712
# Skip this block if you don't use variable
# generate the calender month from the current date to be used as a variable
# e.g. Tuesday, December 19, 2017 10:40:32 AM

$myyear = (Get-Date -format "yyyy")
$mymonth = (Get-Date -format "MM")

# 201712
$myCalendarMonth = "$myyear$mymonth"
# another option Get-Date -format "yyyyMM"
# just if you use variables
# the extraction has a variable CalendarMonth, its value has the format YYYYMM
# set the variable for calendar month e.g. 201712
```
#### Run Extraction
After defining all variables, call the command line tool with the corresponding parameters. 

```shell
:: run the command tool with the right parameters
%XUCmd% -s %XUServer% -p %XUPort% -n %XUExtraction% -o Country=%v_country% 1>%XUOutputfile% 2>%XULogfile%
```

####  Check Return Code
After running the extraction, check the return code and write a corresponding message. The return code *0* indicates a successful execution.

Other [Return Codes](./automation/call-via-commandline#return-codes) indicate errors during execution.
 

```shell
# check the last exit code
# 0: successful
# else unsuccessful
if($LASTEXITCODE -eq 0) {           
write-host -f Green "The last command executed successfully"          
} else {           
write-host -f Red "The last execution failed with error code $LASTEXITCODE!"
write-host $errorMessage
}
```

****
#### Related Links:
- [Creating extractions without using the Xtract Universal designer GUI](https://kb.theobald-software.com/xtract-universal/explanation-of-using-config-command-line-tool)
- [How to insert Xtract Universal Extraction Events into the windows logs](https://kb.theobald-software.com/xtract-universal/how-to-insert-xtract-universal-extraction-events-into-the-windows-logs-and-show-them-in-the-event-viewer)
- [Mastering SAP Access with Xtract Universal](https://blog.theobald-software.com/2018/04/26/mastering-sap-access-with-xtract-universal-and-powershell/)
