---
ref: xu-getting-started-table-03
layout: page
title: Schritt 2 - Eine neue Extraktion anlegen
description: Schritt 2 - Eine neue Extraktion anlegen
product: xtract-universal
parent: erste-schritte-mit-xtract-table
permalink: /:collection/:path
weight: 3
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=eine-neue-extraktion-anlegen
---
### SAP-Verbindung anlegen

Wählen Sie den Menüpunkt **Server -> Manage Sources**.

![XU-Create-Connection-1](/img/content/server_manage_sources.png){:class="img-responsive"}

Klicken Sie auf **Add**.

![XU-Create-Connection-2](/img/content/xu_manage_sources.png){:class="img-responsive"}

Geben Sie den frei wählbaren Verbindungsnamen ins Feld **Name** ein. Anschließend müssen die SAP-Verbindungsdetails eingegeben werden. <br>

Folgende Parameter müssen gesetzt werden: <br>
- Mandant (Client)
- Sprache (Language)
- Benutzer (User) und 
- Passwort (Password). <br>

Wenn Sie sich mit einem Single-Applicationsserver verbinden wollen, dann füllen Sie die Felder Host und System Number. <br>

Wenn Sie sich über Load-Balancing mit einem Message-Server verbinden wollen, dann füllen Sie die Felder Message Server , Group und SID. <br>

Wenn Sie die Parameter nicht kennen, schauen Sie in Ihre SAP-GUI nach oder fragen Sie Ihre SAP-Basis. 

![XU-Create-Connection-3-A](/img/content/xu_source_details.png){:class="img-responsive"}

Anschließend klicken Sie auf *Test Connection*, um die erfolgreiche Verbindung zu testen. 

![XU-Create-Connection-3](/img/content/xu_test_connection.png){:class="img-responsive"}

Die SAP-Verbindung ist nun erfolgreich eingerichtet. 

![XU-Create-Connection-4](/img/content/xu_manage_source_2.png){:class="img-responsive"}

### Extraktion anlegen

Klicken Sie auf *New*, um eine neue Extraktion anzulegen.

![Create-New-Table-Extraction](/img/content/xu_extraction_anlegen.png){:class="img-responsive"}

Wählen Sie die zuvor erstellte SAP-Verbindung und geben Sie der Extraktion einen eindeutigen Namen.

Anschließend definieren Sie, um welchen Typ von Extraktion es sich handelt. In unserem Fall wollen wir eine *Tabelle* aus SAP extrahieren. 

![Add-Extraction](/img/content/xu/xu_tabellen_extraktion_anlegen.png){:class="img-responsive"}

Nun öffnet sich der Tabellen-Dialog zur Definition von einfachen Tabellen-Extraktionen oder auch Tabellen-Joins. Im folgenden Beispiel soll eine einzelne Tabelle extrahiert werden.

Klicken Sie auf *Add*, um eine Tabelle hinzuzufügen.

![New-Table-Extraction](/img/content/xu/xu_tabelle_suchen.png){:class="img-responsive"}

Im Suchen-Dialog geben Sie den Namen der zu extrahierenden Tabelle ein, klicken auf den *Suchen*-Button, wählen die gewünschte Tabelle aus und bestätigen Sie mit *OK*.

Wie Sie erkennen können, ist die Eingabe einer Wildcard (*) ebenfalls in der Suchleiste möglich.

![Look-Up-Table](/img/content/xu/xu_tabelle_auswählen.png){:class="img-responsive"}

Die Anwendung kehrt nun zurück zum Hauptdialog. Die Spalten der Tabelle wurden aus SAP abgerufen und werden in der Box rechts unter "Fields" angezeigt. <br>
Es können entweder alle oder nur einzelne Spalten selektiert werden. <br>

![Table-Form](/img/content/xu/xu_felder_auswählen.png){:class="img-responsive"}

Des Weiteren stehen folgende Optionen bei der Spaltenselektion zur Verfügung. <br>

**Filter** <br>
Der Spaltenname und die Spaltenbeschreibung lassen sich filtern.

**Alias** <br>
Die technischen SAP-Spaltennamen können hier umbenannt werden.

**Aggregate Function** <br>
Es stehen folgende Funktionen zur Aggregierung von numerischen Spalteninhalten zur Verfügung:
- None: Keine Aggregierung 
- AVG: Durchschnittswert wird gebildet.
- COUNT: Zähler über alle Werte wird gesetzt.  
- MAX: Der Maximalwert wird gebildet.
- MIN: Der Minimalwert wird gebildet. 
- SUM: Die Summe wird gebildet.

**Use Conversion Routine (Conv.)** <br>
Definiert, ob die im Data Dictionary hinterlegte Konvertierungsroutinen für die jeweiligen Felder angewendet werden. 
Typische Beispiele dafür sind der Sprachenschlüssel (z.B. D auf der Datenbank, aber DE nach der Konvertierung) oder die Projektnummer (z.B. T000012738GT auf der Datenbank, T/12738/GT nach der Konvertierung). 
Nach der Konvertierung wird immer der Wert angezeigt, so wie er auch in einer Transaktion im SAP GUI erscheinen würde. 
Diese Option wird nur im Zusammenhang mit den Funktionsbausteinen Z_THEO_READ_TABLE und Z_XTRACT_IS_TABLE_COMPRESSION unterstützt. 	

Unter *Preview* können Extraktionsdaten im Preview-Modus angezeigt werden. Klicken Sie dazu auf *Load live preview*. <br>
Mit der Preview lassen sich auch die Aggregierungsfunktionen als Vorschau anzeigen. 
 
![Table-Form](/img/content/xu/xu_preview_modus.png){:class="img-responsive"}

Bestätigen Sie mit OK, um die Extraktion im Repository - also auf dem Server - zu speichern.

