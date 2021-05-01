Edit the BINotificationReceiver.config.xml file as shown in the following screenshot. When the BINotificationServer receives an OHS notification, it looks up the SSIS package to be executed in the config file according to the name of the OHS destination.

Please note, that the value of the variable is set via the place holder %REQUESTID%

![Notification-Server-OHS-XmlConfig-01](/img/content/Notification-Server-OHS-XmlConfig-01.png){:class="img-responsive" }