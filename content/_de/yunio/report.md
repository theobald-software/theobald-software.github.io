---
ref: yunio-report-01
layout: page
title: Report
description: Definition von Report Extraktionen
product: yunio
parent: yunio
childidentifier: report
permalink: /:collection/:path
weight: 20
lang: de_DE

---

Der folgende Abschnitt zeigt, wie der Integrationstyp *Report* verwendet wird.<br>
Integrationstyp *Report* extrahiert Daten aus den am häufigsten verwendeten und benutzerdefinierten ABAP-Reports und SAP-Transaktionen.
Eine Report-Extraktion ist möglich, wenn der Report in SAP eine tabellenartige Struktur zurückgibt.

{: .box-warning}
**Warnung:** **Beta-Version - Grundlegende Änderungen möglich**
Der Integrationstyp im Preview-Modus. Grundlegende Änderungen können jederzeit veröffentlicht werden. 
Erstellen Sie regelmäßige Backups der Konfigurationsdateien, um bei Bedarf auf die vorige Version zu wechseln.

<!---
{: .box-note }
**Hinweis:** Die Report Komponente setzt die Installation des benutzerdefinierten Funktionsbausteins in Ihrem SAP-System voraus. `Z_XTRACT_IS_REMOTE_REPORT`
Nähere Informationen finden Sie unter [Report Funktionsbaustein installieren ](#sap-customizing).
-->

{: .box-warning}
**Warnung!** **Fehlende Berechtigungen**
Um den Integrationstyp in yunIO zu verwenden, muss der Zugriff auf die entsprechenden Berechtigungsobjekte (RFC) in SAP verfügbar sein. 

Weitere Informationen finden Sie im Knowledge-Base-Artikel [SAP Zugriffsrechte: Report](https://kb.theobald-software.com/sap/authority-objects-sap-user-rights#report).

## Allgemeiner Workflow
Die folgende Grafik zeigt den allgemeinen Workflow der Einrichtung von Report Services mit yunIO:<br>
![Report-Workflow](/img/content/report-general-workflow-yunIO.png){:class="img-responsive" width="400px"}


## Einen Report finden

1. Legen Sie einen [*Service*](./erste-schritte#einen-service-anlegen) vom Typ *Report* an. 
2. Klicken Sie auf **[Save and edit]**. Das *Search SAP Reports* Menü öffnet sich.
3. Geben Sie den Namen eines Reports oder den TCODE eines Reports in das Feld **Search by a report name or an exact TCODE** (1). Die Verwendung von Wildcards ( * ) wird nur für Reportnamen unterstützt.
![SAP-Table-or-Views](/img/content/yunio/report-lookup.png){:class="img-responsive" width="750px"}
4. Um nach Reportnamen zu suchen, klicken Sie auf **[Search]**. (2)
Um nach TCODES zu suchen, klicken Sie auf **[By TCODE]**.
5. Wählen Sie eine Quelldatei aus der Liste der Suchergebnisse aus (3). 
Die Extraktionseinstellungen von *Report* werden automatisch geöffnet. <br>

## Einstellungen
Das *Report* Menü ist in folgende Unterabschnitte unterteilt:
- [Report](#report) (4) zeigt den Namen und die Beschreibung des ausgewählten Reports.
- [Advanced Settings](#advanced-settings) (Erweiterte Einstellungen) (5) bestimmen, wie die Daten aus SAP extrahiert werden.
- [Selection Parameters](#selection-parameters) (Auswahlparameter) (6) bestimmen die Auswahlparameter für den yunIO-Service.
- [Output Columns](#output-columns) (Ausgabe-Spalten) (7) bestimmen die Ausgabe des yunIO-Services.

![yunIO-table](/img/content/yunio/report.png){:class="img-responsive"}


### Report

Im Abschnitt **Report** werden der Name und die Beschreibung des ausgewählten Reports angezeigt.<br>
Um eine andere Quelldatei auszuwählen, klicken Sie auf **Select** in der oberen rechten Ecke des Abschnitts.

### Advanced Settings (Erweiterte Einstellungen)

#### Run in background
Wenn die Checkbox **Run in background** aktiviert ist, wird die Reportextraktion als Hintergrundjob in SAP ausgeführt. 
Das Extrahieren großer Datenmengen im Vordergrundmodus kann zu Timeout-Fehlern (“Time limit exceeded”) führen.Um Timeout-Fehler zu vermeiden, aktivieren Sie die Einstellung **Run in background**.

#### Dynamic column width and offset
Wenn die Checkbox "Dynamic column width and offset" aktiviert ist, werden die Spaltenbreite und der Spaltenabstand zur Laufzeit des Reports dynamisch angepasst.
Alternative Anforderung für Reports, die je nach den Selektionskriterien des Reports unterschiedliche Spaltenbreiten haben.	

#### Skip rows from top
Metainformationen können im Kopfbereich des Reports vor dem eigentlichen Reportkörper angezeigt werden. Die Einstellung **Skip rows from top** ermöglicht das Überspringen von Metainformationen. <br>
Geben Sie die Anzahl der Zeilen ein, die am Anfang des Reports übersprungen werden sollen. 


#### Skip rows from bottom

Ähnlich wie die Einstellung **Skip rows from top**, ermöglicht die Einstellung **Skip rows from bottom** das Überspringen der Reihen im Fussbereich des Reports. <br>
Geben Sie die Anzahl der Zeilen ein, die am Ende des Reports übersprungen werden sollen.

#### Variant

Eine Variante besteht aus einer Reihe der [Auswahlparameter](#selection-parameters) die die Ergebnismenge des Reports auf Datensätze beschränken, die der Auswahl entsprechen.
Eine Variante mit Selektionen kann in SAP im Eingabebildschirm eines ABAP-Reports erstellt werden. 
Der Zweck einer Variante ist es, Selektionen zu speichern. Das minimiert die Eingabe von Selektionen, wenn Sie Reports ausführen.
Falls vorhanden, können Varianten aus der Dropdown-Liste ausgewählt werden..<br>


{: .box-note}
**Hinweis:** Manuelle Selektionen und Varianten können kombiniert werden. Manuelle Selektionen überschreiben Selektionen in Varianten.

#### Detect Columns
Die Erkennung von Spalten (Detect Columns) ist für die Nutzung des Dienstes obligatorisch.
Klicken Sie auf **[Detect columns]**, um den Report auf der Grundlage der gewählten Variante oder Selektionen auszuführen und Spalten automatisch zu erkennen.

{: .box-note}
**Hinweis:** Wenn ein Report Varianten hat, muss die Variante ausgewählt werden, bevor Sie die Einstellung **[Automatically detect columns]** verwenden.


### Selection Parameters
Der folgende Abschnitt entspricht dem Eingabebildschirm des Reports in SAP.<br>
Einige Selektionsfelder haben nur einen technischen Namen und keine Beschreibung. 
Um zu verstehen, welches Feld einem Feld in SAP entspricht, vergleichen Sie die Ergebnisse mit dem Eingabebildschirm des Reports in SAP. <br>
Klicken Sie auf ein Selektionsfeld und drücken Sie die Funktionstaste **[F1]**, um den technischen Namen des Selektionsfeldes anzuzeigen. 

{: .box-note}
**Hinweis:** Wenn ein Selektionsparameter leer gelassen wird, verwendet der Report den im Report definierten Wert. 


### Output Columns

Im folgenden Abschnitt werden die Länge und die Namen der erkannten Spalten des Reports angezeigt.

{: .box-tip }
**Tipp:** Um die Länge und die Namen der Spalten manuell anzupassen, laden Sie die Dienst-Definition des Report-Dienstes herunter und bearbeiten Sie diese  Definition.

## Beispiel eines Dienstes

Das folgende Beispiel zeigt, wie man einen yunIO-Service einrichtet, der den SAP ABAP-Report RLT10010 (Evaluation of Movements per Storage Type - "Bewegungen pro Lagertyp") extrahiert:
1. [Getting Started: Creating a Service]Legen Sie einen Service (./getting-started#creating-a-service) des Integrationstyps Report an.
2. Suchen Sie nach dem Report RLT10010, siehe [Einen Report finden](#einen-report-finden).
3. Wählen Sie eine Variante oder geben Sie Selektionsparameter ein. Das angeführte Beispiel verwendet eine Variante *VAR01*.<br>
![report-rlt10010](/img/content/yunio/report-rlt10010.png){:class="img-responsive"}
4. Führen Sie den Report in SAP aus, um die Anzahl der zu überspringenden Zeilen zu ermitteln. Setzen Sie die Einstellung **Skip rows from top** auf 8, um die Kopfzeile des Reports zu überspringen. 
![SAP-Table-or-Views](/img/content/yunio/report-sap3.png){:class="img-responsive"}
5. Klicken Sie auf **[Detect Columns]**, um die Spalten des Reports automatisch zu ermitteln. Die ermittelten Spalten werden im Abschnitt *Output Columns* angezeigt.
6. Klicken Sie auf **[Save]**, um den Service zu speichern.
7. Um die Ausgabe des Service zu testen, führen Sie den Service in Ihrem Browser aus, siehe [Erste Schritte: Einen Service anlegen](./erste-schritte#einen-service-anlegen).<br>
![report-response.png](/img/content/yunio/report-response.png){:class="img-responsive"}

<!---
****
 #### Weiterführende Links
-


## SAP Customizing

{% include _content/en/sap-customizing/install-report-custom-function-module.md  %}
-->
