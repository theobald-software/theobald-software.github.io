

![Notification-Server-Install-01](/img/content/Notification-Server-Install-01.png){:class="img-responsive"}

Editieren Sie das Config File BINotificationReceiver.config.xml, um ein oder mehrere BW Systeme zu definieren, an die sich das Notifier-Tool registrieren soll. Sie müssen den Hostnamen, den Gatewayservice und die Programm ID eintragen.

![Notification-Server-Install-02](/img/content/Notification-Server-Install-02.png){:class="img-responsive"}

Sie können folgende weitere Parameter unter `<BIListen>` hinzufügen:
- `<IsUnicode>true</IsUnicode>`: Dieser Parameter muss verwendet werden, wenn die RFC Destination in der SAP Transaktion SM59 auf Unicode gesetzt wurde.
- `<RFCLibrary>NWRFC</RFCLibrary>`: Dieser Parameter kann gesetzt werden, wenn die RFC Server-Verbindung mittels der NW RFC Bibliothek, und nicht mittels der librfc32 hergestellt werden soll.

Danach können Sie den Dienst starten. Nach jeder Änderung eines der oben angeführten Parameter muss der Dienst neu gestartet werden.

![Notification-Server-Install-03](/img/content/Notification-Server-Install-03.png){:class="img-responsive"}