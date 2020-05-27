Der folgende Abschnitt beschreibt die Parameter einer Extraktion, welche dynamisch zur Laufzeit gesetzt werden können. Zu diesen Parametern gelangen Sie über das Fenster "Run extractions". 

![Extraction parameters](/img/content/xu/xu_run_extraction_param_gen_2.png){:class="img-responsive"}

Um das Fenster "Run extractions" zu öffnen, wählen Sie eine Extraktion im Hauptfenster des Designers und klicken Sie auf **[Run]** (siehe Details in [Eine Extraktion ausführen](../erste-schritte-mit-table/eine-extraktion-ausfuehren)).

### "Parameters" Tab *Extraction*
Es gibt Parameter, die bei allen Extraktion zur Verfügung stehen, z.B. **clearBuffer**, **preview**, **source** und **destination**.
Es gibt auch Parameter, welche nur vom Extraktionstyp abhängen. Bei einer Table-Komponente sind es **rows**, **where** und **packageSize**.
Zuletzt gibt es dann Parameter, welche vom Typ der Destination abhängen. Bei einer Destination vom Typ vom Typ HTTP-CSV oder Flatfile-CSV sind es **decimalSeparator** und **columnSeperator**.

Parametername | Beschreibung | Spezielle Infos
------------ | ------------- | -------------
clearBuffer | leert den Ergebnis-Buffer | Default-Wert - false. Verfügbar bei allen Extraktionen.
preview | aktiviert die Preview | Default-Wert - false. Verfügbar bei allen Extraktionen.
source | ermöglicht das dynamische Auswählen eines SAP-Quellsystems aus dem die Daten extrahiert werden. Aktiv, wenn mehrere SAP-Quellsysteme verfügbar sind, z.B. sap_dev und sap_prod. |  verfügbar bei allen Extraktionen.
destination | ermöglicht das dynamische Auswählen einer Destination, in die die extrahierten Daten geschrieben werden. Aktiv, wenn mehrere Destinationen verfügbar sind, z.B. db_1 und db_2.|  verfügbar bei allen Extraktionen.
rows | setzt die maximale Anzahl der extrahierten Datensätze | verfügbar in Table
where | setzt die WHERE-Bedingung | verfügbar bei Table-Extraktionen
packageSize | setzt die Paketgröße | verfügbar bei Table-Extraktionen
decimalSeparator | setzt ein Symbol zwischen dem Ganzzahlteil und dem Bruchzahlteil | verfügbar bei Destinationen vom Typ HTTP-CSV oder Flatfile-CSV
columnSeparator | setzt ein Symbol, das den Anfang einer Spalte bezeichnet | verfügbar bei Destinationen vom Typ HTTP-CSV oder Flatfile-CSV

### "Parameters" Tab *Source*
![Source parameters](/img/content/xu/xu_run_extraction_param_gen.png){:class="img-responsive"}

In diesem Tab können Sie Parameter zur SAP-Verbindung, siehe [SAP-Source-Einstellungen](https://help.theobald-software.com/de/xtract-universal/fortgeschrittene-techniken/sap-verbindungen-anlegen).


Parametername | Beschreibung |
------------ | ------------- | 
lang | setzt dynamisch die SAP-Anmeldesprache der benutzen SAP-Quellverbindung  
logonTicket | setzt dynamisch das Anmeldeticket, falls diese Option in der SAP-Verbindung konfiguriert wurde. Siehe [SSO mit SAP Logon Ticket](https://help.theobald-software.com/en/xtract-universal/advanced-techniques/sap-single-sign-on/sso-with-sap-logon-ticket) für mehr Details.

{: .box-note }
**Hinweis:** Der Parameter **logonTicket** kann nur gesetzt werden, wenn "SAP logon ticket" als Authentifizierungsmethode in den [SAP-Verbindung](https://help.theobald-software.com/de/xtract-universal/fortgeschrittene-techniken/sap-verbindungen-anlegen) ausgewählt ist.


### "Parameters" Tab *Custom*

{: .box-note }
**Hinweis:** Der Tab "Custom" ist nur dann aktiv, wenn ein benutzerdefinierter Parameter definiert ist, z.B. in der [WHERE-Bedingung](../table/where-bedingung) einer Table-Komponente.


Um den Wert eines Parameters im Run-Dialog zu setzen bzw. zu überschreiben, markieren Sie das Kästchen und geben Sie den gewünschten Wert ins Feld Value ein. Im Feld URL wird dieser Parameter entsprechend dann auch gezeigt.

```
http://localhost:8065/?name=Plants&rows=1000
```


![Custom Parameters](/img/content/xu/xu_run_extraction_param_cust.png){:class="img-responsive"}

