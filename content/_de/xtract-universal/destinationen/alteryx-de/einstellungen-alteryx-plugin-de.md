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
progressstate: 5
---

### Xtract Universal Tool in Alteryx verwenden
1. Fügen Sie das Werkzeug Xtract Universal zu Ihrem Alteryx-Workflow hinzu.
![XU_alteryx_plugin](/img/content/XU_alteryx_plugin.png){:class="img-responsive"}
2. Legen Sie die folgenden Einstellungen für das Xtract Universal-Werkzeug im Alteryx Designer fest:
- Connection (1)
- Parameters (2

### Verbindung

**Server**<br>
Der Name, die IP oder die Domain und der Port unter denen der Server zu erreichen ist.<br>
Format: [Server]:[Port].

**Extraction**<br>
Der Name der auszuführenden Extraktion. Durch das Klicken auf den Pfeil neben dem Textbereich, werden alle verfügbaren Extraktionen des angegebenden Servers abgerufen und in einem Dropdown-Menü dargestellt. 
Es werden nur die Extraktionen mit Alteryx als Destinationstyp angezeigt. Den Destinationstyp können Sie im Xtract Universal Designer definieren.

{: .box-note }
**Hinweis:** Stellen Sie sicher, dass der Xtract Universal Server läuft.

**Send SAP credentials** <br>
Markieren Sie die Checkbox *Send SAP credentials*, wenn auch die Checkbox *Require SAP Credentials to be explicitly supplied for execution* in den [SAP Source-Einstellungen](../../einfuehrung/sap-verbindungen-anlegen) in Xtract Unviersal markert ist.

Die Einstellung *Send SAP credentials* kann in Self-Service-Szenarien nützlich sein. Wenn jede Extraktion mit den SAP-Anmeldeinformationen eines einzelnen Benutzers anstelle der global definierten Anmeldeinformationen ausgeführt werden muss.


### Parameter 

Unter dem Tab **Parameters** können die extraktionsspezifischen Parameter festgelegt werden. 

### Beispiel 1: Das statische Überschreiben eines benutzerdefinierten Parameters
Im angegebenen Beispiel enthält eine Extraktion von SAP-Kunden den Parameter *city*, der in den **Custom Defined Parameters** definiert ist. Der Parameter *city* muss mit einem statischen Wert überschrieben werden (hier: Stuttgart).
Um den Parameter *city* zu überschreiben, markieren Sie die Checkbox **Override** und geben einen neuen  Wert *vert* ein.

![alteryx-custom-parameters](/img/content/alteryx-custom-parameters.PNG){:class="img-responsive"}

### Beispiel 2: Das dynamische Überschreiben eines benutzerdefinierten Parameters**<br>
Das Xtract Universal-Tool kann auch Eingaben empfangen, z. B. über das Input Data Tool.
Die eingegebenen Daten können dynamisch verwendet werden, um den benutzerdefinierten Parameter in Xtract Universal zu übersteuern.<br> 
Im angegebenen Beispiel liegt eine Extraktion von SAP-Kunden vor, bei der der Parameter Stadt dynamisch parametrisiert werden soll.
Um den Parameter *city* zu überschreiben, markieren Sie die Checkbox **Override** und die Checkbox **Map**. Wählen Sie einen Eintrag aus der Dropdown-Liste im Feld **value**.

![alteryx-custom-parameters](/img/content/alteryx-custom-parameters-override.PNG){:class="img-responsive"}

Weitere Informationen zu benutzerdefinierten Parametern finden Sie unter [Benutzerdefinierte Variablen](../../fortgeschrittene-techniken/benutzerdefinierte-variablen).

Sind bei der Verbindung zu Ihrem Xtract Universal Server keine Fehler aufgetreten, dann trägt das Tool ein Tooltip in folgendem Format: [Extraktion] @ [Server].

![alteryx-full-workflow](/img/content/alteryx-full-workflow.PNG){:class="img-responsive"}
