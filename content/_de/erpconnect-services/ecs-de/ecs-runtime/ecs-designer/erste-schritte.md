---
layout: page
title: Erste Schritte
description: Erste Schritte
product: erpconnect-services
parent: ecs-designer
permalink: /:collection/:path
weight: 2
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=ecs-designer-erste-schritte
---

Beim nächsten Start des Visual Studio steht ein neues Item ERPConnect Services Designer zum Einfügen zur Verfügung, um ein ERPConnect Services DataContext dem aktuellen Projekt hinzufügen.


![ECS-Designer-New-Item-01](/img/content/ECS-Designer-New-Item-01.png){:class="img-responsive"}
![ECS-Designer-New-Item-02](/img/content/ECS-Designer-New-Item-02.png){:class="img-responsive"}

Öffnen Sie den Designer nach der Anlage mit einem Doppelklick. Mit dem Designer können Komponenten der folgenden Typen hinzugefügt werden:

- RFC Functions
- Tables
- XtractQL

![ECS-Designer-New-Item-03](/img/content/ECS-Designer-New-Item-03.png){:class="img-responsive"}

Die Komponenten werden innerhalb des angebenen Context (*ERPConnectServicesContext*) bereitgestellt und werden auch im *ECS Explorer* angezeigt. 

Zuerst klicken Sie auf die Schaltfläche Edit neben Connection, um die SAP-Verbindungsdaten anzugeben.  

![ECS-Designer-Connection](/img/content/ECS-Designer-Connection.png){:class="img-responsive"}

Optional haben Sie die Möglichkeit, die SAP-Verbindungsdaten aus den ERPConnect Services zu laden, indem Sie die Schaltfläche *Load Connection Data from ECS*  wählen. Geben Sie die SAP-Anmeldedaten wie Mandant, User-Name, Passwort und Sprache an.<br>
Bei einer Verbindung zu einem einzelnen SAP-Applikationsserver ist die Angabe von Hostname und Systemnummer erforderlich. Bei einer Verbindung über Load Balancing muss der Message-Server, die Logon-Gruppe und die SID angegeben werden.

Mit der Schaltfläche Test Connection können Sie die Verbindungsdaten überprüfen.



