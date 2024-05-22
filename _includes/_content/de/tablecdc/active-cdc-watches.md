
Dieser Abschnitt zeigt, wie Sie einen Überblick über alle Table CDC Log-Tabellen und Trigger in Ihrem SAP-System erhalten.
Das "Active CDC Watches" Menü listet alle aktiven Log-Tabellen und DB Trigger in Ihrem SAP Quellsystem auf.


### Active CDC Watches Öffnen

1. Doppelklicken Sie im Hauptfenster des Designers auf eine Extraktion.
Das Hauptfenster der Komponente wird geöffnet.<br>
{% if page.product == "xtract-is" %} ![Active-CDC-Watches_designer](/img/content/tablecdc/Active-CDC-Watches_designer-xis.png){:class="img-responsive"}{% else %}![Active-CDC-Watches_designer](/img/content/tablecdc/Active-CDC-Watches_designer.png){:class="img-responsive"}{% endif %}
2. Klicken Sie auf **[Show Active CDC Watches]**.
Das Fenster "Active CDC Watches" wird geöffnet.<br>
![Active-CDC-Watches](/img/content/tablecdc/Active-CDC-Watches.png){:class="img-responsive"}

### Active CDC Watches

#### Source Table
Name der Quelltabelle in SAP, die von der Table CDC Komponente getrackt wird.

#### Log Table
Name der Log-Tabelle, die Änderungen in der Quelltabelle aufzeichnet.

#### Created on
Zeitstempel, an dem die Log-Tabelle erstellt wurde.

#### Created by
SAP Benutzername, der verwendet wurde, um die Log-Tabelle zu erstellen.

#### Rows
Anzahl der Zeilen in der Log-Tabelle. 
<!--- After successfully running an extraction, the associated log table is cleared and the number of rows should be 0. -->

#### Show Details
Klicken Sie auf ![info](/img/content/icons/designer/info.png){:class="img-responsive" style="display:inline"}, um im "CDC watch details" Fenster mehr Informationen zu den DB Triggern anzuzeigen. 

![Active-CDC-Watches-details](/img/content/tablecdc/Active-CDC-Watches-details.png){:class="img-responsive"}

#### Delete CDC resources
Klicken Sie auf ![dustbin](/img/content/icons/trashbin.png){:class="img-responsive" style="display:inline"}, um die Log-Tabelle und alle alle dazugehörigen Elemente aus Ihrem SAP-System zu löschen.<br>
Es ist nicht möglich, die Log-Tabelle und die Trigger der aktuellen Extraktion zu löschen, siehe [Eine Table CDC Extraktion definieren: Log-Tabelle und DB Trigger Löschen](./extraktion-anlegen#log-tabelle-und-db-trigger-löschen).