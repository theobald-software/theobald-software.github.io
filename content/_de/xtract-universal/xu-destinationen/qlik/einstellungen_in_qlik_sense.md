---
ref: xu-qliksense-qlikview-04
layout: page
title: Einstellungen in Qlik Sense
description: Einstellungen in Qlik Sense
product: xtract-universal
parent: qlik
permalink: /:collection/:path
weight: 4
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=einstellungen_in_qlik_sense
---

Wenn Sie ein von Xtract Universal generiertes Qlik Script in Qlik Sense verwenden bekommen Sie möglicherweise folgende Fehlermeldung: *This statement only works with lib:// paths in this script mode*.

Das dynamische Laden von Daten aus einer Webseite ist in Qlik Sense standardmäßig deaktiviert. Wie Sie es aktivieren finden Sie in der Hilfe-Seite von Qlik Sense. Suchen Sie dort nach 'Disabling standard mode' oder probieren Sie es über die folgende [Seite](https://help.qlik.com/en-US/sense/2.2/Subsystems/Hub/Content/LoadData/disable-standard-mode.htm).  

In *Qlik Sense* deaktivieren Sie den Standard Mode in der Qlik Management Console -> Engine Properties.<br>
In *Qlik Sense Desktop* öffnen Sie die Datei C:\Users\{user}\Documents\Qlik\Sense\Settings.ini in einem Texteditor.<br>
Ändern Sie StandardReload=1 zu StandardReload=0. Speichern Sie die Datei und starten Sie Qlik Sense erneut.  

Mit der Qlik Sense Version vom Juni 2018 wird standardmäßig Port 5555 (Default Port der Qlik Web Connectors) für die WebFile Verbindung mit *http://localhost* verwendet. 
Falls Sie daher beim Ausführen eines Qlik Sense Berichtes die Meldung *Forbidden* oder *Access is denied* erhalten..Dieses Verhalten ist unter den nachfolgenden Links beschrieben:

[Cannot load data from Qlik Web Connectors](https://help.qlik.com/en-US/connectors/Subsystems/Web_Connectors_help/Content/Connectors_QWC/Install/troubleshooting_load.htm?l=DE-DE).

["Access is denied" when connecting to localhost with WebFile connection ](https://qliksupport.force.com/articles/000054581?_ga=2.234987393.1633897554.1546511952-1716671580.1545392499).

****
#### Weiterführende Links
- [Destinationen](./xu-destinationen)
- [Qlik Help](https://help.qlik.com/)