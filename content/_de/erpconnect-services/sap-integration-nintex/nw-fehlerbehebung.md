---
ref: ecs-sin-nintex-integration-sharepoint-06
layout: page
title: Nintex Workflow Fehlerbehebung
description: Nintex Workflow Fehlerbehebung
product: erpconnect-services
parent: sap-integration-nintex
permalink: /:collection/:path
weight: 5
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=nw-fehlerbehebung
---

**Fehler bei der Installation der Nintex Workflow Custom Actions**

Trotz erfolgreicher Installation der Custom Actions erscheinen diese nicht im Workflow Manager. Dies kann die Ursache sein: 

Bei neueren Nintex Workflow Versionen ist es unter Umständen erforderlich, dass bei einer Neuinstallation und bei einer Aktualisierung (*Repair*) die Workflow Actions noch explizit auf der jeweiligen Site Collection aktiviert werden müssen. Rufen Sie dafür die Site Settings der Site Collection auf, unter welcher Sie die Workflow Actions nutzen möchten und öffnen den Menüpunkt *Nintex Workflow> Manage Allowed Actions*. Dort haken Sie die drei Custom Actions in der Kategorie *ERPConnect Services* an und sichern die Einstellungen mit *OK*. Anschließend stehen die Custom Actions dann in Nintex Workflow zur Verfügung. 

Falls sich ein Workflow trotz erfolgreicher Installation nicht publizieren lässt, kann das folgende Ursache haben:

Bei der Aktualisierung der Actions (*Repair*)  ist es zudem noch erforderlich, die Web Application für den Nintex Workflow erneut zu aktivieren. Tut man dies nicht, lassen sich eventuell neu angelegte Workflows nicht publizieren. Navigieren Sie zur *Central Administration* und wählen Sie *Nintex Workflow Management*. Klicken Sie auf *Web Application Activation*.<br>
Die default Web Application sollte automatisch gewählt sein. Klicken Sie auf Activate.

**ECS Custom Actions erscheinen nicht**

Falls die Workflow-Actions nach erfolgreicher, fehlerfreier Installation trotzdem nicht in der Nintex-Verwaltung auftauchen, führen Sie bitte folgende Skripts als Administrator in der SharePoint Managementshell aus (SP2016):

*NWAdmin.exe -o AddAction -nwaFile " C:\Program Files\Common Files\microsoft shared\Web Server Extensions\16\TEMPLATE\FEATURES\ERPConnectServices.NintexWorkflowActions.SP2016_ECSNWA\ReadTable.nwa" -updateIfAdapterExists -activateForFarm -verifyTypes*

*NWAdmin.exe -o AddAction -nwaFile " C:\Program Files\Common Files\microsoft shared\Web Server Extensions\16\TEMPLATE\FEATURES\ERPConnectServices.NintexWorkflowActions.SP2016_ECSNWA\CallBapi.nwa" -updateIfAdapterExists -activateForFarm -verifyTypes*

*NWAdmin.exe -o AddAction -nwaFile " C:\Program Files\Common Files\microsoft shared\Web Server Extensions\16\TEMPLATE\FEATURES\ERPConnectServices.NintexWorkflowActions.SP2016_ECSNWA\ExecuteXQL.nwa" -updateIfAdapterExists -activateForFarm -verifyTypes*

Für SP2013 (SP2010 entsprechend):<br>
*C:\Program Files\Common Files\microsoft shared\Web Server Extensions\15\TEMPLATE\FEATURES\ERPConnectServices.NintexWorkflowActions.SP2013_ECSNWA*\

            
 
**Fehler beim Ausführen von Workflows**

Ein gängiger Fehler tritt beim Ausführen von Workflows mit dem Farm-Administrator User auf. Der Workflow bricht dabei aufgrund von Authentifizierungsproblemen ab. Das Durchführen von Workflows mit einem Farm-Administrator User wird von SharePoint unterbunden. Bitte verwenden Sie einen anderen User zum Ausführen und Genehmigen von Workflows.   

**Fehler beim Schreiben eines XML-Outputs in eine SharePoint-Liste**

Falls Sie ein XML-Output in die Spalte einer SharePoint-Liste schreiben möchten und das XML-Statement taucht dort nicht auf, liegt es unter Umständen daran, dass Sie die SharePoint-Spalte *Multiple lines of text* nicht als *Plain Text* definiert haben. Stellen Sie in den Settings die Spalte auf Plain Text um, dann sollte der Text angezeigt werden. 

**Fehler bei Nutzung eines Secure Stores** 

Die Nutzung eines Secure Store in der ECS Service Application wird im Moment in Verbindung mit den Nintex Workflow Custom Actions nicht unterstützt. Egal welche Credentials Sie im Secure Store hinterlegen, es wird immer der Administrator-Account gezogen. Dies liegt daran, dass die Impersonierung von Credentials innerhalb eines Workflows nicht unterstützt wird.  Bitte verwenden Sie daher innerhalb der Custom Actions eine Service Application ohne Secure Store.   


**Fehler beim Ausführen eines Funktionsbausteins/BAPIs**

Falls sich ein Funktionsbaustein/BAPi nicht ausführen lässt, liegt es unter Umständen an falsch gesetzten Parametern. Bitte testen Sie den Funktionsbaustein/BAPi immer erst auf Ihrem SAP System. Sollte ein Baustein sich in Nintex Workflow trotz identisch gesetzter Parameter und erfolgreichem Aufruf in SAP nicht ausführen lassen, kann das folgende Gründe haben:

- Formatierung: SAP verlangt für viele Felder spezifische Formatierungen, z.B. muss das Datumsformat die Form yyyyMMdd haben. Ein Datum, dass in in SharePoint im Format 31.11.9999 aufgegeben wird, kann daher nicht verarbeitet werden und muss umformatiert werden. In Nintex stehen für die Umformatierung von Feldern diverse Inline Functions (z.B. format date) zur Verfügung. 
- Gesperrte Datensätze/Personalnummern: In SAP gesperrte Datensätze/Personalnummern können das erfolgreiche Ausführen eines Funktionsbausteins verhindern. Prüfen Sie SAP-Seitig ob Zugriff auf die entsprechende Tabelle/ Personalnummer/Komponente etc. besteht. 

Empfehlung: Lassen Sie über die Custom Action die Return Message des Funktionsbausteins nach SharePoint zurückschreiben, wenn dies der Funktionsbaustein erlaubt. Dies gibt oft hilfreiche Hinweise darüber, ob Datensätze korrekt verbucht werden konnten.  

**Funktionsbaustein/BAPI liefert keine Werte zurück mit der Call SAP Function Custom Action**

Sollte ein Funktionsbaustein keine Werte zurückliefern, dann überprüfen Sie bitte folgende Punkte

1. Erstellung eines neuen Nintex Workflows, in dem die Call SAP Function Custom Action verwendet wird. Die Custom Action sollte mit einem ganz einfachen SAP Standardbaustein (z.B. SD_RFC_CUSTOMER_GET) zum Lesen von SAP-Daten sowie gültigen Input- und Outputparametern konfiguriert werden. Liefert der Baustein Werte aus SAP zurück? Wenn ja, weiter mit Punkt zwei, wenn nein, dann wenden Sie sich bitte an den Support. 
2. Ist die grundsätzliche Funktionalität der Call SAP Function Custom Action sichergestellt, überprüfen Sie innerhalb des Workflows, der keine Werte zurückliefert, die Rückgabemeldungen aus dem SAP System. Dazu mappen Sie die entsprechende Meldungstabelle oder- struktur (i.d.R. RETURN) auf eine Workflow-Variable und protokollieren die Rückgabe im Workflow.      
