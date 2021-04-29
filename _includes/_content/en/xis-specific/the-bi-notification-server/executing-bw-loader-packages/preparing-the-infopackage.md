
Dtexec.exe /f "C:\Source\XtractIS\Demos\BWLoadTest\BI7 InfoObject AdventureWorks ZAWVEND.dtsx" /set \package.variables[RequestID].Value;%REQUESTID%

Please have a look at the Microsoft documentation to find out more about how to create the correct command line for the dtexec tool. The BI Notification Receiver will replace the %REQUESTID% placeholder with the correct value.

If you don't have the parameters available in your InfoPackage click on the Refresh button.

![Notification-Server-Settings-InfoPackage](/img/content/Notification-Server-Settings-InfoPackage.png){:class="img-responsive" }