
Dtexec.exe /f "C:\Source\XtractIS\Demos\BWLoadTest\BI7 InfoObject AdventureWorks ZAWVEND.dtsx" /set \package.variables[RequestID].Value;%REQUESTID%

Bitte schauen Sie in der Microsoft Dokumentation nach, um mehr über die Erstellung der korrekten Kommandozeilenargumente für das dtexec Tool herauszufinden. Der BI Notification Receiver ersetzt den Platzhalter %REQUESTID% mit dem richtigen Wert.
Wenn die Parameter im InfoPackage nicht zur Verfügung stehen, klicken Sie bitte auf den Refresh Button.

![Notification-Server-Settings-InfoPackage](/img/content/Notification-Server-Settings-InfoPackage.png){:class="img-responsive"}

