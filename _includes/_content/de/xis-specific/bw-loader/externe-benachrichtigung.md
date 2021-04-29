
1. Der Ladeprozess (das InfoPackage) wird von SSIS-Seite aus angestoßen.
2. Der Ladeprozess wird von SAP-Seite aus angestoßen.

Für den zweiten Fall gibt es zwei Möglichkeiten: Stellen Sie in den Settings die Option *No InfoPackage start (Only wait)* auf True. 

![XIS_BWL_Settings](/img/content/XIS_BWL_Settings.png){:class="img-responsive"}

In diesem Fall muss das SSIS Paket gestartet werden. Dann können Sie das InfoPackage im BW manuell oder durch den Scheduler starten, und der Prozess im SSIS fährt fort.

Wenn Sie jedoch beispielsweise mehrere InfoPackages ausführen wollen, oder nicht ständig die Pakete im Ausführungsmodus halten wollen, gibt es mit dem BI Notification Receiver eine weitere Option. Näheres dazu finden Sie im Abschnitt [BI Notification Server](../bi-notification-server).

