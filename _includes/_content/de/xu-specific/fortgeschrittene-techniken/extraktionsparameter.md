Der folgende Abschnitt beschreibt die Parameter einer Extraktion, welche dynamisch zur Laufzeit gesetzt werden können. Zu diesen Parametern gelangen Sie über das Fenster "Run Extraction". 

Die Extraktionsparameter definieren wie Daten aus der Datenquelle extrahiert werden.
Sie werden im Fenster "Run extractions" unter *Runtime Parameters* eingestellt. 

![Extraction parameters](/img/content/xu/xu_run_extraction_param_gen_2.png){:class="img-responsive"}

Wählen Sie eine Extraktion im Hauptfenster des Designers und klicken Sie auf **[Run]** 
um das Fenster "Run extractions" zu öffnen. Weitere Informationen finden Sie in [Eine Extraktion ausführen](../erste-schritte/eine-extraktion-ausfuehren).


### Extraction
Die Anzahl der verfügbaren Parameter ist abhängig von dem Extraktionstyp und der Destination, z.B. ist **decimalSeparator** ein Parameter, der nur in der CSV-Destination vorhanden ist.

Parametername | Beschreibung | Spezielle Infos
------------ | ------------- | -------------
clearBuffer | leert den Ergebnis-Buffer | Default-Wert - false
preview | aktiviert die Preview | Default-Wert - false
source | ermöglicht das dynamische Auswählen eines SAP-Quellsystems aus dem die Daten extrahiert werden. Nur aktiv, wenn mehrere SAP-Quellsysteme verfügbar sind, z.B. sap_dev und sap_prod. | -
destination | ermöglicht das dynamische Auswählen einer Destination, in die die extrahierten Daten geschrieben werden. Nur aktiv, wenn mehrere Destinationen verfügbar sind, z.B. db_1 und db_2.| -
rows | setzt die maximale Anzahl der extrahierten Datensätze | verfügbar in Table
where | setzt die WHERE-Bedingung | verfügbar in Table
packageSize | setzt die Paketgröße | verfügbar in Table
decimalSeparator | setzt ein Symbol zwischen dem Ganzzahlteil und dem Bruchzahlteil | verfügbar in CSV
columnSeparator | setzt ein Symbol, das den Anfang einer Spalte bezeichnet | verfügbar in CSV

### Source
Die Verbindungseinstellungen zu einer SAP Quelle können dynamisch über die URL oder die xu.exe geändert werden. 

Im Tab *Source* können Sie die Werte überschreiben, die in den [SAP-Source-Einstellungen](../einfuehrung/sap-verbindungen-anlegen) definiert sind.

![Source parameters](/img/content/xu/xu_run_extraction_param_gen.png){:class="img-responsive"}

Parametername | Beschreibung |
------------ | ------------- | 
lang | ändert dynamisch die SAP-Anmeldesprache des SAP-Quellsystems  
logonTicket | ändert dynamisch das Anmeldeticket. Siehe [SSO mit SAP Logon Ticket](https://help.theobald-software.com/en/xtract-universal/advanced-techniques/sap-single-sign-on/sso-with-sap-logon-ticket) für mehr Details.

{: .box-note }
**Hinweis:** Der Parameter **logonTicket** kann nur gesetzt werden, wenn "SAP logon ticket"
 als Authentifizierungsmethode in den [SAP-Source-Einstellungen](../einfuehrung/sap-verbindungen-anlegen) ausgewählt ist.

Es gibt auch Parameter, welche vom Typ der Destination abhängen. 
Bei einer Destination vom Typ vom Typ HTTP-CSV oder Flatfile-CSV sind es **decimalSeparator** und **columnSeperator**.

Parametername | Beschreibung | Spezielle Infos
------------ | ------------- | -------------
decimalSeparator | setzt ein Symbol zwischen dem Ganzzahlteil und dem Bruchzahlteil | verfügbar bei Destinationen vom Typ HTTP-CSV oder Flatfile-CSV
columnSeparator | setzt ein Symbol, das den Anfang einer Spalte bezeichnet | verfügbar bei Destinationen vom Typ HTTP-CSV oder Flatfile-CSV


![Run-Extraction-Connection-Parameters](/img/content/xu/xu_run_extraction_source_param.png){:class="img-responsive"}

#### Beispiel
1. Wählen Sie eine Checkbox aus, um einen Parameter zu überschreiben.
2. Tragen Sie den neuen Wert ein und bestätigen Sie ihn über die Eingabetaste.
- Extraktions-URL vor der Parameteränderung<br>
`http://localhost:8065?name=Plants`
- Extraktions-URL nach der Parameteränderung in **lang**:<br>
`http://localhost:8085/?name=Plants&lang=DE` 

Parametername | Beschreibung | Spezielle Infos
------------ | ------------- | -------------
rows | setzt die maximale Anzahl der extrahierten Datensätze | verfügbar bei Table-Extraktionen
where | setzt die WHERE-Bedingung | verfügbar bei Table-Extraktionen
packageSize | setzt die Paketgröße | verfügbar bei Table-Extraktionen

### Custom

{: .box-note }
**Hinweis:** Der Tab *Custom* ist nur dann aktiv, wenn eine [benutzerdefinierte Variable](./benutzerdefinierte-variablen) angelegt ist.

Aktivieren Sie die Checkbox und geben Sie einen neuen Wert ein, um den Parameter zu überschreiben.
 
![Custom parameters](/img/content/xu/xu_run_extraction_param_cust.png){:class="img-responsive"}

#### Beispiel
1. Wählen Sie eine Checkbox aus, um einen Parameter zu überschreiben.
2. Tragen Sie den neuen Wert ein und bestätigen Sie ihn über die Eingabetaste.
- Extraktions-URL vor der Parameteränderung<br>
`http://localhost:8065?name=Plants`
- Extraktions-URL nach der Parameteränderung in **myParameter**:<br>
`http://localhost:8085/?name=Plants&myParameter=EN` 
