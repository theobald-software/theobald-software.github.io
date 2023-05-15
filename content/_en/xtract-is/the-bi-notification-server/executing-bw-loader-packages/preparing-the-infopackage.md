---
ref: xi-bw-loader-packages-02
layout: page
title: Preparing the InfoPackage
description: Preparing the InfoPackage
product: xtract-is
parent: executing-bw-loader-packages
permalink: /:collection/:path
weight: 2
lang: en_GB
old_url: /Xtract-IS-EN/default.aspx?pageid=preparing-the-infopackage
---
Go to the InfoPackage and choose tab "3rd party selections". Here you can find 4 parameters. "Path to executable" is the path to the program to be executed (e.g. dtexec for executing an SSIS package). And there are 3 additional parameters for the command line. In our case we must provide the Request ID to the variable of the package. So the command line in our case would be:

Dtexec.exe /f "C:\Source\XtractIS\Demos\BWLoadTest\BI7 InfoObject AdventureWorks ZAWVEND.dtsx" /set \package.variables[RequestID].Value;%REQUESTID%

Please have a look at the Microsoft documentation to find out more about how to create the correct command line for the dtexec tool. The BI Notification Receiver will replace the %REQUESTID% placeholder with the correct value.

If you don't have the parameters available in your InfoPackage click the **[Refresh]** button.

![Notification-Server-Settings-InfoPackage](/img/content/Notification-Server-Settings-InfoPackage.png){:class="img-responsive" }