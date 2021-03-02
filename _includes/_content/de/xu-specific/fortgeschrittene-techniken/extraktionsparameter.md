
Die Extraktionsparameter werden im Fenster "Run extractions" unter "Runtime Parameters" eingestellt. 

![Extraction parameters](/img/content/xu/xu_run_extraction_param_gen_2.png){:class="img-responsive"}

Um das Fenster "Run extractions" zu öffnen, wählen Sie eine Extraktion im Hauptfenster des Designers und klicken Sie auf **[Run]** (siehe Details in [Eine Extraktion ausführen](../erste-schritte/eine-extraktion-ausfuehren)).


### Extraction
Die Anzahl der verfügbaren Parameter hängt von dem Extraktionstyp und der Destination ab, z.B. ist **decimalSeparator** ein Parameter, der nur in der CSV-Destination vorhanden ist.

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
Ebenso wie die Systemparameter und benutzerdefinierten Parameter können auch die Verbindungseinstellungen zu einer Quelle (SAP) dynamisch über die URL geändert werden. 

Im Tab *Source* können Sie die Werte überschreiben, die in den [SAP-Source-Einstellungen](../einfuehrung/sap-verbindungen-anlegen) definiert sind.

![Source parameters](/img/content/xu/xu_run_extraction_param_gen.png){:class="img-responsive"}


Parametername | Beschreibung |
------------ | ------------- | 
lang | ändert dynamisch die SAP-Anmeldesprache des SAP-Quellsystems  
logonTicket | ändert dynamisch das Anmeldeticket. Siehe [SSO mit SAP Logon Ticket](https://help.theobald-software.com/en/xtract-universal/advanced-techniques/sap-single-sign-on/sso-with-sap-logon-ticket) für mehr Details.

{: .box-note }
**Hinweis:** Der Parameter **logonTicket** kann nur gesetzt werden, wenn "SAP logon ticket" als Authentifizierungsmethode in den [SAP-Source-Einstellungen](../einfuehrung/sap-verbindungen-anlegen).

#### "Source" Parameter verändern
1. Wählen Sie eine Extraktion aus.
2. Klicken Sie auf **[Run]**. Das Fenster "Run Extraction" wird geöffnet. 
3. Wählen Sie den Tab  *Source* und ändern Sie die Parameter.
![Run-Extraction-Connection-Parameters](/img/content/Run-Extraction-Connection-Parameters.png){:class="img-responsive"}

**Beispiel:** Das Überschreiben der Verbindungssprache zu DE generiert die Extraktions-URL: `http://localhost:8085/?name=plants&lang=DE`

### Custom

{: .box-note }
**Hinweis:** Der Tab "Custom" ist nur dann aktiv, wenn eine Variable mit dem @-Symbol in der [WHERE-Bedingung](../table/where-bedingung) definiert ist.

Um den vordefinierten Parameter einzustellen, markieren Sie die Checkbox und geben Sie den gewünschten Wert ein.
 
![Custom parameters](/img/content/xu/xu_run_extraction_param_cust.png){:class="img-responsive"}

