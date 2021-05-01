In bestimmten Situationen kann es sinnvoll sein, die Steuerparameter für die SSIS-Paketausführung nicht beim InfoPackage sondern lokal zu pflegen.<br>
Um dies zu tun, fügen Sie bitte eine NotificationMapping-Sequenz in das config-File ein. Das NotificationReceiver-Tool findet diese Einstellungen anhand der InfoSource und des SourceSystems und übersteuert die Parameter, die von SAP kommen.

![Notification-Server-SAP-Override-01](/img/content/Notification-Server-SAP-Override-01.png){:class="img-responsive"}

So sieht das Ergebnis im Konsolenfenster aus:

![Notification-Server-SAP-Override-02](/img/content/Notification-Server-SAP-Override-02.png){:class="img-responsive"}

