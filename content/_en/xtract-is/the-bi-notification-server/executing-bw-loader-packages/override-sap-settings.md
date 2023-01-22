---
ref: xi-bw-loader-packages-04
layout: page
title: Override SAP settings
description: Override SAP settings
product: xtract-is
parent: executing-bw-loader-packages
permalink: /:collection/:path
weight: 4
lang: en_GB
old_url: /Xtract-IS-EN/default.aspx?pageid=override-sap-settings
---
In some situations it might be useful, to maintain the parameters for executing the SSIS package locally instead of using the parameters provided by the InfoPackage.

To do so, just add the NotificationMapping XML sequence to the config file to overwrite the parameters provided by SAP. To find the correct parameters InfoSource and SourceSystem are the key columns.

![Notification-Server-SAP-Override-01](/img/content/Notification-Server-SAP-Override-01.png){:class="img-responsive" }



{% highlight xml %}

<xml version="1.0" standalone="yes"?>
<BINotificationConfigBase xmlns="http://tempuri.org/BINotificationConfig.xsd">
  <BIListen>
    <Host>GARGIHost>
    <GatewayService>sapgw57GatewayService>
    <ProgramID>XTRACT01ProgramID>
  BIListen>
  
  <NotificationMapping>
    <InfoSource>ZAWVENDInfoSource>
    <SourceSystem>XTRACTSYSSourceSystem>
    <ExecCommand>dtexec.exeExecCommand>
    <CommandArgs>/f "C:\Source\XtractIS\Demos\BWLoadTest\BWLoadTest\BI7 InfoObject AdventureWorks ZAWVEND.dtsx" /set \package.variables[RequestID].Value;%REQUESTID%CommandArgs>
  NotificationMapping>   
  
  <OHSMapping>
    <OHSDestination>ZTH03OHSDestination>
    <ExecCommand>dtexec.exeExecCommand>
    <CommandArgs>/f "c:\Source\XtractIS\Demos\ZTH03.dtsx" /set \package.variables[RequestID].Value;%REQUESTID%CommandArgs>
  OHSMapping>
  
BINotificationConfigBase>

{% endhighlight %}

Here is the result:

![Notification-Server-SAP-Override-02](/img/content/Notification-Server-SAP-Override-02.png){:class="img-responsive" }
