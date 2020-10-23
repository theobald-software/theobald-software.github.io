Scheduling extractions at a later time is possible 
with any task scheduler e.g., Windows task scheduler.


### Running Xtract Universal from a command line
1. Navigate to the the installation folder of Xtract Universal e.g.,
 `C:\Program Files\XtractUniversal` <br>
2. Find the command-line tool xu.exe, which can be used to execute an extraction.<br>

`C:\Program Files\XtractUniversal\xu.exe`<br>
`http://localhost:8065/?name=MyExtractionName`


### Variables

When using variables, place an escape character *^* before the character *&* <br>
`C:\Program Files\XtractUniversal\xu.exe`
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
|1040 | Timeout error: Waiting time for HTTP response of xu.exe exceeded. |
|1053 | The URL is wrong |
|1087 | The parameter is invalid |


#### Parameters

-h Outputs the help page

-s Server for extraction

-p Listener port of the Xtract Universal Server

-n Name of the extraction

-o Adds a variable

Examples:

```
xu.exe http://localhost:8065/?name=MyExtractionName^&rows=200
xu.exe -s localhost -p 8065 -n MyExtractionName -o rows=200 
xu.exe -s localhost -p 8065 -n MyExtractionName
xu.exe -h
```


### Call in PowerShell

The following example shows how to call an extraction in PowerShell using the xu.exe /xu.elf commandline tool. In the example, the extraction has a dynamic variable that can be set in the script. 

<details>
<summary>Click here to show PowerShell Script.</summary>
{% highlight javascript %}
# Execute an Xtract Universal extraction using the command-line tool xu.exe in a powershell script
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


### Showing extraction in the Windows Event viewer
Xtract Universal extraction events can be inserted into the Windows logs and displayed in the Event Viewer. 