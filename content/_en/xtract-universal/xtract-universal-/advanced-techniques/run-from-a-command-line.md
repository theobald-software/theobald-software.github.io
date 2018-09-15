---
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

In the installation folder (e.g. C:\Program Files\XtractUniversal) you will find the program **xu.exe** that runs an extraction from the command line.

**Using the extraction URL**

You can execute the command line using the extraction URL:<br> 
**"C:\Program Files\XtractUniversal\xu.exe" http://localhost:8065/?name=MyExtractionName** 

**Variables**

When using variables be sure that the ampersand (&) is preceded by the escape character (^):

**"C:\Program Files\XtractUniversal\xu.exe" http://localhost:8065/?name=MyExtractionName^&Variable=Value** 

**Predefined Variables**

See predefined variables under [Extraction Parameters](). 

**Server output**<br> 
When the extraction is executed, then the server will return the timestamp as result. 
The timestamp can be used to access the log of the extraction.

**Return value**  

If the command completes an operation successfully, it returns an exit code of zero (0).
In case of an error, it will return one of the following (http status) codes:

HTTP Statuscodes (e.g. 404 when the extraction does not exist)

1001     An undefined error occured

1002    Could not find the specified file
          
1013    Invalid input data

1014    The number of arguments is invalid

1015    The parameter name is unknown

1016    The argument is not valid

1053    Something is wrong with your URL

1087    The parameter is invalid

**Using command Parameters**

You can execute the command line using the extraction URL:<br> 
    xu.exe -s localhost -p 8065 -n MyExtractionName -o rows=200

Following parameters are supported:<br> 
-h        print the help page

-s        server of your extraction

-p        listening port of your Xtract Universal server

-n        name of your extraction

-o        add a variable to your extraction

When using parameters to call the extraction, you can add as many variables as you need with the parameter -o:
-o variableName=variableValue -o variableName2=variableValue2.

**Examples** 

    xu.exe http://localhost:8065/?name=MyExtractionName^&rows=200
    
    xu.exe -s localhost -p 8065 -n MyExtractionName -o rows=200
    
    xu.exe -s localhost -p 8065 -n MyExtractionName
    
    xu.exe -h 

You can use this tool to run the extractions with a task scheduler. For a sample refer to the following blog:<br> 
[http://www.theobald-software.com/blog/2013/01/28/how-to-schedule-xtract-universal-extractions-with-the-windows-task-scheduler-to-load-data-from-sap/](http://www.theobald-software.com/blog/2013/01/28/how-to-schedule-xtract-universal-extractions-with-the-windows-task-scheduler-to-load-data-from-sap/)

**Running extraction using PowerShell**

The following PowerShell script shows how to execute an extraction using the command tool. 
The extraction has a dynamic variable that can be set in PowerShell. 

Check our [Blog]() about using Xtract Universal with PowerShell for further scripts and examples.

<details>
<summary>PowerShell Script.</summary>
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
[How to insert Xtract Universal Extraction Events into the windows logs and show them in the Event Viewer]()