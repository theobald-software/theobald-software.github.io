---
ref: xu-alteryx-04
layout: page
title: Einstellungen (Alteryx)
description: Einstellungen (Alteryx)
product: xtract-universal
parent: alteryx-de
permalink: /:collection/:path
weight: 4
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=einstellungen-alteryx-plugin-de
---

Um das Xtract Universal-Tool verwenden zu können, müssen Sie es in einen Workflow einfügen.	

![XU_alteryx_plugin](/img/content/XU_alteryx_plugin.jpg){:class="img-responsive"}

Folgende Einstellungen müssen im Alteryx Designer für das  Xtract Universal-Tool festgelegt werden.

## Verbindung
**Server**<br>
der Name, die IP oder die Domain und der Port unter denen der Server zu erreichen ist.<br>
(Format: [Server]:[Port])

**Extraction**<br>
der Name der auszuführenden Extraktion. Mit einem Klick auf den Pfeil werden alle verfügbaren Extraktionen des angegebenden Servers abgerufen und in einem Dropdown Menü dargestellt. Dies funktioniert nur, wenn der angegebene Server gültig und erreichbar ist.

**Send SAP credentials** <br>
wird für diejenigen Extraktionen benötigt, bei denen im *Security* Reiter der General Settings der Extraktion die Checkbox *Use SAP Credentials* angehakt wurde.<br>
Das kann z.B. in Self Service Szenarien sinnvoll sein, bei denen die Extraktionen mit den SAP Logon-Daten des jeweiligen Users ausgeführt werden sollen.

![alteryx-extraction-selection](/img/content/alteryx-extraction-selection.png){:class="img-responsive"}

## Parameter 

Unter dem Reiter **Parameters** können die extraktionsspezifischen Parameter festgelegt werden. 

**Das statische Überschreiben eines benutzerdefinierten Parameters**<br>
In diesem Fall haben wir eine Extraktion für SAP-Kundendaten (customers), in welcher ein Parameter City (für die Stadt) in dem Reiter **Custom defined Parameters** mit einem statische Wert (Stuttgart) überschrieben wird. 
Dafür setzen Sie einen Haken für das Feld **Override** und geben Sie einen neuen Wert in das **Value** Feld ein.<br>


![alteryx-custom-parameters](/img/content/alteryx-custom-parameters.PNG){:class="img-responsive"}

**Das dynamische Überschreiben eines benutzerdefinierten Parameters**<br>
Das Xtract Universal-Tool kann also eine Eingabe entgegennehmen, z.B. das Input Data Tool.
Die Daten-Eingabe kann dynamisch fürs das  Überschreiben des benutzerdefinierten parameters in Xtract Universal verwendet werden.<br> 
Unter dem Reiter **Parameters** können die extraktionsspezifischen Parameter festgelegt werden. Dafür müssen Sie einen Haken für das Feld **Override** und **Map** setzen und den Eingabeparameter aus der Wertehilfe wählen. <br>
In diesem Fall haben wir eine Extraktion für SAP-Kundendaten (customers), in welcher ein Parameter City (für die Stadt) mit einem dynamischen Wert (Stuttgart) überschrieben wird. 


![alteryx-custom-parameters](/img/content/alteryx-custom-parameters-override.PNG){:class="img-responsive"}

[Hier]() können Sie mehr über benutzerdefinierte Parameter erfahren.

Sind bei der Verbindung zu Ihrem Xtract Universal Server keine Fehler aufgetreten, dann trägt das Tool eine Unterschrift in folgendem Format: [Extraktion] @ [Server]

![alteryx-full-workflow](/img/content/alteryx-full-workflow.PNG){:class="img-responsive"}
