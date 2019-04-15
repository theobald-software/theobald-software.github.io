---
ref: xu-advanced-techniques-09
layout: page
title: Run from a command line
description: Run from a command line
product: xtract-universal
parent: advanced-techniques
permalink: /:collection/:path
weight: 9
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=run-from-a-command-line
---

In the installation folder (e.g. C:\Program Files\XtractUniversal) you will find the program xu.exe, which can be used to execute an extraction.<br>
```
"C:\Program Files\XtractUniversal\xu.exe" http://localhost:8065/?name=MyExtractionName
```

Among other things, you can use the tool to execute the extractions using a task scheduler. You can find an example in our [Blog](http://www.theobald-software.com/blog/2013/01/28/how-to-schedule-xtract-universal-extractions-with-the-windows-task-scheduler-to-load-data-from-sap/0). 

**Variables**

When using variables, you must precede the character (&) with an escape character (^): 
```
"C:\Program Files\XtractUniversal\xu.exe" http://localhost:8065/?name=MyExtractionName^&Variable=Value
```

If the extraction is called via the parameters, any number of variables can be added via the -o parameter:<br>
-o variableName=variableValue -o variableName2=variableValue2 ...

**Predefined variables**

Predefined variables can be found under [Extraction Parameters](./extraction Parameters). 

**Returned value**

If an operation was successfully completed, the program returns the value 0.<br>.
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

**Parameters**

-h Outputs the help page

-s Server for extraction

-p Listener port of the Xtract Universal Server

-n Name of the extraction

-o Adds a variable

**Examples**
```
xu.exe http://localhost:8065/?name=MyExtractionName^&rows=200
xu.exe -s localhost -p 8065 -n MyExtractionName -o rows=200
xu.exe -s localhost -p 8065 -n MyExtractionName
xu.exe -h
```

**Call in PowerShell** 

The following example shows how to call an extraction in PowerShell using the xu.exe command tool. 
In the example, the extraction has a dynamic variable that can be set in the script. 

See our [Blog](https://blog.theobald-software.com/2018/04/26/mastering-sap-access-with-xtract-universal-and-powershell/) about Xtract Universal and PowerShell for more scripts and examples.

<details>
<summary>Click here to show PowerShell Script.</summary>
{% highlight javascript %}
# Execute an Xtract Universal extraction using the command tool xu.exe in a powershell script
# the extraction has a variable CalendarMonth that needs a value in the format YYYYMM, e.g. 201712
  
clear
# write the output to a file
$XUOutputfile = "C:\Data\powershell\output.txt"
# write the log to a file
$XULogfile = "C:\Data\powershell\log.txt"
  
# set the path to the installation folder
$XUCmd = 'C:\Program Files\XtractUniversal\xu.exe'
  
$XUServer = "localhost"
$XUPort = "8065"
$XUExtraction = "SAPSalesCube"
  
  
# BEGIN OF BLOCK FOR SETTING VARIABLE
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
 
  
# END OF BLOCK FOR SETTING VARIABLE
  
  
# define error message
$errorMessage = @'
If the command completes an operation successfully, it returns an exit code of zero (0).
In case of an error, it will return one of the following (http status) codes:
HTTP Statuscodes (e.g. 404 when the extraction does not exist)
1001    An undefined error occured
1002    Could not find the specified file      
1013    Invalid input data
1014    The number of arguments is invalid
1015    The parameter name is unknown
1016    The argument is not valid
1053    Something is wrong with your URL
1087    The parameter is invalid
  
check the online help for further information
http://help.theobald-software.com/Xtract-Universal-EN/default.aspx?pageid=run-from-a-command-line
'@
  
  
# run the command tool with the right parameters
$res = &$XUCmd -s $XUServer -p $XUPort -n $XUExtraction -o CalenderMonth=$myCalenderMonth 1>$XUOutputfile 2>$XULogfile
  
# check the last exit code
# 0: successful
# else unsuccessful
if($LASTEXITCODE -eq 0) {
           
write-host -f Green "The last command executed successfully"          
} else {
           
write-host -f Red "The last execution failed with error code $LASTEXITCODE!"
write-host $errorMessage
}
{% endhighlight %}
</details>

See also  <br>
[How to insert Xtract Universal Extraction Events into the windows logs and show them in the Event Viewer](https://kb.theobald-software.com/xtract-universal/how-to-insert-xtract-universal-extraction-events-into-the-windows-logs-and-show-them-in-the-event-viewer) (English)