---
layout: page
title: Call SAP Function Action mit Variablen
description: Call SAP Function Action mit Variablen
product: erpconnect-services
parent: call_sap_function
permalink: /:collection/:path
weight: 2
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=call_sap_function_mit_variablen
---

Im folgenden Abschnitt zeigen wir Ihnen, wie Sie mit der *Call SAP Function* Custom Action die Tabellen-Ausgabe eines Funktionsbausteins in 
eine Workflow-Variable schreiben und sich den XML-Output in einer SharePoint Liste anzeigen lassen können. 

Als Anwendungsbeispiel ziehen wir den Funktionsbaustein BAPI_EMPLOYEE_GETDATA heran. Dieser Funktionsbaustein liest 
Personalstammdaten aus und gibt die Werte in mehreren Tabellen zurück. Als Eingabeparameter ist zwingend ein Auswertungsdatum erforderlich 
und ein weiteres Selektionskriterium, anhand dessen die Mitarbeiterdaten ausgelesen werden sollen (z.B. Nachname, Vorname, Kostenstelle).

Ziel unseres Szenarios ist es, die Ausgabe-Tabelle PERSONAL_DATA des Funktionsbausteins als XML-Output zu verwenden und das Output in 
die Workflow-Variable Output schreiben zu lassen. Als Eingabeparameter sollen folgende Werte gesetzt werden:
- LASTNAME_M = Smith
- DATE = Aktuelles Datum

Das XML-Output soll anschließend in der Spalte einer SharePoint-Liste angezeigt werden.

Legen Sie zunächst eine SharePoint-Liste (Custom-List) an, die die Spalte Output enthält. Wir nennen die Liste Personal Data. 

Das XML-Output soll anschließend in der Spalte einer SharePoint-Liste angezeigt werden.

Legen Sie zunächst eine SharePoint-Liste (*Custom-List*) an, die die Spalte *Output* enthält. Wir nennen die Liste *Personal Data*. 

![ECS-Nintex-CallSAPFunction-Variables1](/img/content/ECS-Nintex-CallSAPFunction-Variables1.png){:class="img-responsive"}

Achten Sie darauf, die Spalte *Output* als *Multiple lines of text* zu konfigurieren, da der spätere XML-Output mehrere Zeilen enthalten wird. <br>
Wählen Sie zudem als Texttyp Plain text, es kann sonst zu Formatierungsfehlern kommen.

![ECS-Nintex-CallSAPFunction-Variables30](/img/content/ECS-Nintex-CallSAPFunction-Variables30.png){:class="img-responsive"}

Rufen Sie anschließend über das LIST Menü und den Menüpunkt *Workflow Settings* den Punkt *Create Workflow in Nintex Workflow* auf, 
um einen neuen Workflow anzulegen.

![ECS-Nintex-CallSAPFunction-Variables31](/img/content/ECS-Nintex-CallSAPFunction-Variables31.png){:class="img-responsive"}

Wählen Sie die *Call SAP Function* Custom Action aus und ziehen Sie per Drag & Drop auf das Workflow-Diagramm. 
Öffnen Sie anschließend die Konfigurationseinstellungen der Action.

![ECS-Nintex-CallSAPFunction-Variables3](/img/content/ECS-Nintex-CallSAPFunction-Variables3.png){:class="img-responsive"}

Definieren Sie die *ERPConnect Service Application* und tragen Sie bei *SAP Function* den Funktionsbaustein BAPI_EMPLOYEE_GETDATA ein. 
Klicken Sie anschließend auf (Re-)Load parameters um die Parameter des Funktionsbausteins in die Konfigurationsmaske zu laden.  

![ECS-Nintex-CallSAPFunction-Variables4](/img/content/ECS-Nintex-CallSAPFunction-Variables4.png){:class="img-responsive"}

Unter *XML table output* im Menüpunkt Tables ist nun die gewünschte Ausgabe-Tabelle PERSONAL_DATA auswählbar.

![ECS-Nintex-CallSAPFunction-Variables5](/img/content/ECS-Nintex-CallSAPFunction-Variables5.png){:class="img-responsive"}

Wählen Sie die Tabelle PERSONAL_DATA aus und rufen Sie anschließend den Menüpunkt Variables auf, um die Workflow-Variable anzulegen, 
in die der XML-Output geschrieben werden soll. 

![ECS-Nintex-CallSAPFunction-Variables6](/img/content/ECS-Nintex-CallSAPFunction-Variables6.png){:class="img-responsive"}

Klicken Sie unter *Workflow Variables* auf *New*, um eine neue Variable anzulegen. 

![ECS-Nintex-CallSAPFunction-Variables7](/img/content/ECS-Nintex-CallSAPFunction-Variables7.png){:class="img-responsive"}

Benennen Sie die Variable Output. Da der XML-Output mehrere Zeilen enthalten wird, wählen Sie als Typ *Multiple lines of text* und klicken 
Sie anschließend auf Save, um die Variable abzuspeichern. 

![ECS-Nintex-CallSAPFunction-Variables8](/img/content/ECS-Nintex-CallSAPFunction-Variables8.png){:class="img-responsive"}

Die eben erstellte Workflow-Variable kann anschließend im Feld *XML output variable* zugeordnet werden. Damit haben wir sichergestellt, 
dass der erzeugte XML-Output für die Tabelle PERSONAL_DATA in die Workflow-Variable Output geschrieben wird.

![ECS-Nintex-CallSAPFunction-Variables9](/img/content/ECS-Nintex-CallSAPFunction-Variables9.png){:class="img-responsive"}

Nun müssen die Eingabeparameter definiert werden. Für den Parameter LASTNAME_M soll der Wert Smith definiert werden. 
Öffnen Sie die Input-Einstellungen und scrollen Sie zum Eingabeparameter  LASTNAME_M. Dort können Sie den Wert hinterlegen. 

![ECS-Nintex-CallSAPFunction-Variables10](/img/content/ECS-Nintex-CallSAPFunction-Variables10.png){:class="img-responsive"}

Anschließend soll für den Parameter DATE das aktuelle Datum hinterlegt werden. Scrollen Sie zum Parameter DATE. Dort könnte 
jetzt theoretisch direkt in dem Eingabefeld manuell das gewünschte Datum im SAP-konformen Datumsformat "yyyyMMdd" hinterlegt werden. 
Bei einer manuellen Eingabe müsste aber das Datum jedesmal, bevor man den Workflow ansteuert, neu hinterlegt werden. 
Aus diesem Grund macht es Sinn, das aktuelle Datum automatisch erzeugen zu lassen.  Öffnen Sie dafür mit einem Klick auf 
das Symbol rechts der Zeile mit dem Parameter DATE die *Insert Reference* Einstellungen.  

![ECS-Nintex-CallSAPFunction-Variables11](/img/content/ECS-Nintex-CallSAPFunction-Variables11.png){:class="img-responsive"}

Dort kann über den Karteireiter Common das automatisch generierte aktuelle Datum mit *Current Date* ausgewählt werden. Die Auswahl von 
*Current Date* reicht jedoch zur automatischen Datumsgenerierung nicht aus, da hier das SharePoint-interne Datumsformat zur Anwendung 
kommt und nicht das erforderliche SAP-Datumsformat. Das Datumsformat muss daher noch mit einer internen Funktion umformatiert werden. 
Wählen Sie daher *Current Date* noch nicht aus und wechseln Sie zunächst zum Karteireiter *Inline Functions*.

![ECS-Nintex-CallSAPFunction-Variables12](/img/content/ECS-Nintex-CallSAPFunction-Variables12.png){:class="img-responsive"}

Wählen Sie im Karteireiter Inline Functions mit einem Doppelklick die Funktion *FormatDate* aus. Die Formatierungsfunktion für das 
Datum hat folgenden Aufbau: fn-FormatDate(Datum, "Datumsformat"). In unserem Beispiel lautet die Funktion damit 
*fn-FormatDate(Current Date, "yyyyMMdd")*. Klicken Sie zur Vervollständigung der Funktion mit der linken Maustaste zwischen die beiden 
Klammern und fügen dann mit einem Doppelklick im Karteireiter Common das Feld *Current Date* hinzu. 
Das Datumsformat *yyyyMMdd* muss dann noch manuell ergänzt werden.  

![ECS-Nintex-CallSAPFunction-Variables13](/img/content/ECS-Nintex-CallSAPFunction-Variables13.png){:class="img-responsive"}

Bestätigen Sie die Eingaben mit OK. Die Formatierungsfunktion wird damit in das Eingabefeld das Parameters DATE übernommen. 

![ECS-Nintex-CallSAPFunction-Variables14](/img/content/ECS-Nintex-CallSAPFunction-Variables14.png){:class="img-responsive"}

Unter den weiteren Konfigurationspunkten *Changings, Output* und  *Advanced Options* muss in diesem Beispiel nichts weiter angepasst werden. 

Im Beispiel möchten wir nun den XML-Output in der Spalte einer SharePoint Liste ausgeben lassen. Dafür muss eine weitere Nintex Workflow Action 
in den Workflow integriert werden. Suchen Sie auf der linken Seite unter Workflow Actions nach der Action *Set field* value und ziehen Sie es auf das 
Workflow-Diagramm auf der rechten Seite. Mit der Action *Set field* value können Feldern einer SharePoint-Liste Werte, wie z.B. Workflow-Variablen 
zugewiesen werden. 

![ECS-Nintex-CallSAPFunction-Variables15](/img/content/ECS-Nintex-CallSAPFunction-Variables15.png){:class="img-responsive"}

Rufen Sie die Konfigurationseinstellungen für die *Set field* value action auf. In der Dropdown-Liste neben Set sind die Felder der 
SharePoint-Liste aufgeführt, für die der List-Workflow erstellt wird.  Wählen Sie das Feld *Output* aus, dass wir eingangs in der 
SharePoint-Liste angelegt hatten. 


![ECS-Nintex-CallSAPFunction-Variables17](/img/content/ECS-Nintex-CallSAPFunction-Variables17.png){:class="img-responsive"}

In der Zeile mit *Equals* kann dem Feld dann ein Wert zugewiesen werden. Unser Ziel ist es, der Listenspalte *Output* die Workflow-Variable 
*Output* zuzuweisen. Wählen Sie dafür Value aus der Liste neben Equals aus und rufen Sie anschließend rechts das Insert Reference Feld auf. 

![ECS-Nintex-CallSAPFunction-Variables18](/img/content/ECS-Nintex-CallSAPFunction-Variables18.png){:class="img-responsive"}

Rufen Sie hier den Karteireiter *Workflow Variables* auf und wählen dann die Workflow-Variable *Output* aus. Bestätigen Sie die Auswahl mit OK.

![ECS-Nintex-CallSAPFunction-Variables19](/img/content/ECS-Nintex-CallSAPFunction-Variables19.png){:class="img-responsive"}

Die Workflow-Variable *Output* ist damit dem Listenfeld *Output* zugewiesen, d.h. der XML-Output wird in dieser Spalte ausgegeben.  <br>
Sichern sie die Einstellungen mit dem Save Button. 

![ECS-Nintex-CallSAPFunction-Variables20](/img/content/ECS-Nintex-CallSAPFunction-Variables20.png){:class="img-responsive"}

Sichern und Publizieren Sie anschließend Ihren Workflow. 

![ECS-Nintex-CallSAPFunction-Variables21](/img/content/ECS-Nintex-CallSAPFunction-Variables21.png){:class="img-responsive"}

Wir nennen den Workflow *Personal Data*. Kehren Sie anschließend zur Seite mit der SharePoint-Liste zurück.

![ECS-Nintex-CallSAPFunction-Variables28](/img/content/ECS-Nintex-CallSAPFunction-Variables28.png){:class="img-responsive"}

Für die SharePoint-Liste soll nun der Workflow ausgeführt werden. Am schnellsten geht dies, indem man ein neues Item anlegt 
und anschließend im Menüpunkt Items in die hinterlegten Workflows abspringt. Alle der SharePoint-Liste zugewiesenen Listen-Workflows 
sind dort aufgeführt und können manuell gestartet werden. 

![ECS-Nintex-CallSAPFunction-Variables22](/img/content/ECS-Nintex-CallSAPFunction-Variables22.png){:class="img-responsive"}

Da noch kein Item vorhanden ist, legen sie zunächst ein beliebiges Item an und tragen einen Text für die Titelspalte ein. Das Feld *Output* soll über den Workflow mit Daten versorgt werden, hier müssen Sie nichts eintragen.

![ECS-Nintex-CallSAPFunction-Variables23](/img/content/ECS-Nintex-CallSAPFunction-Variables23.png){:class="img-responsive"}

Markieren Sie die Zeile mit dem angelegten Item und wechseln Sie in die *ITEMS* Menüzeile. Rufen Sie dort den Menüpunkt *Workflows* auf. 

![ECS-Nintex-CallSAPFunction-Variables24](/img/content/ECS-Nintex-CallSAPFunction-Variables24.png){:class="img-responsive"}

Wählen Sie unter Workflows den angelegten Workflow *Personal Data*. 

![ECS-Nintex-CallSAPFunction-Variables25](/img/content/ECS-Nintex-CallSAPFunction-Variables25.png){:class="img-responsive"}

Führen Sie den Workflow mit dem *Start Button* aus.

![ECS-Nintex-CallSAPFunction-Variables26](/img/content/ECS-Nintex-CallSAPFunction-Variables26.png){:class="img-responsive"}

Die Output-Spalte in der SharePoint-Liste wird nun wie gewünscht mit dem XML-Output befüllt. Die Daten sollten der Konfiguration in der Custom Action entsprechen (LASTNAME_M = Smith).


![ECS-Nintex-CallSAPFunction-Variables27](/img/content/ECS-Nintex-CallSAPFunction-Variables27.png){:class="img-responsive"}

Damit ist das Workflow-Beispiel abgeschlossen. 