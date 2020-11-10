Der folgende Abschnitt beschreibt die Parameter einer Extraktion, welche dynamisch zur Laufzeit gesetzt werden können. Zu diesen Parametern gelangen Sie über das Fenster "Run Extraction". 

Um das Fenster "Run Extraction" zu öffnen, wählen Sie eine Extraktion im Hauptfenster des Designers und klicken Sie auf **[Run]** (siehe [Eine Extraktion ausführen](../erste-schritte-mit-table/eine-extraktion-ausfuehren)).

![Extraction parameters](/img/content/xu/xu_run_extraction_param_gen_2.png){:class="img-responsive"}

Die Parameter sind über die folgende Reiter verteilt:
- Extraction
- Source und
- Custom.

Um den Wert eines Parameters im Run-Dialog zu setzen bzw. zu überschreiben, markieren Sie das entsprechende Kästchen und geben Sie den gewünschten Wert ins Feld **Value** ein. Im Feld URL wird dieser Parameter entsprechend dann auch gezeigt.

```
http://localhost:8065/?name=Plants&rows=1000
```

Mit dem folgenden Befehl können Sie diese Extraktion mit der XU-Kommandozeile aufrufen.
```
"C:\Program Files\XtractUniversal\xu.exe" -s localhost -p 8065 -n Plants -o rows=1000
```


### Parameter der Extraktion
Es gibt Parameter, die bei allen Extraktion zur Verfügung stehen, z.B. **clearBuffer**, **preview**, **source** und **destination**. 

Parametername | Beschreibung | Spezielle Infos
------------ | ------------- | -------------
clearBuffer | leert den Ergebnis-Buffer | Default-Wert - false. Verfügbar bei allen Extraktionstypen.
preview | Extrahiert bzw. generiert Vorschauwerte. Es werden nur 200 Datensätze geladen. Je nach Extraktionstyp handelt es sich um tatsächliche Werte (z.B. bei Table) aus dem SAP Quellysytem oder um generierte Dummy-Werte (z.B. bei BW Queries). | Default-Wert - false. Verfügbar bei allen Extraktionstypen.
source | ermöglicht das dynamische Auswählen eines SAP-Quellsystems aus dem die Daten extrahiert werden. Aktiv, wenn mehrere SAP-Quellsysteme verfügbar sind, z.B. sap_dev und sap_prod. |  verfügbar bei allen Extraktionstypen.
destination | ermöglicht das dynamische Auswählen einer Destination, in die die extrahierten Daten geschrieben werden. Aktiv, wenn mehrere Destinationen verfügbar sind, z.B. db_1 und db_2.|  verfügbar bei allen Extraktionstypen.


Es gibt auch Parameter, welche vom Typ der Destination abhängen. 
Bei einer Destination vom Typ vom Typ HTTP-CSV oder Flatfile-CSV sind es **decimalSeparator** und **columnSeperator**.

Parametername | Beschreibung | Spezielle Infos
------------ | ------------- | -------------
decimalSeparator | setzt ein Symbol zwischen dem Ganzzahlteil und dem Bruchzahlteil | verfügbar bei Destinationen vom Typ HTTP-CSV oder Flatfile-CSV
columnSeparator | setzt ein Symbol, das den Anfang einer Spalte bezeichnet | verfügbar bei Destinationen vom Typ HTTP-CSV oder Flatfile-CSV

Es gibt auch Parameter, welche nur vom Extraktionstyp abhängen. Bei einer Table-Komponente sind es **rows**, **where** und **packageSize**.

Parametername | Beschreibung | Spezielle Infos
------------ | ------------- | -------------
rows | setzt die maximale Anzahl der extrahierten Datensätze | verfügbar bei Table-Extraktionen
where | setzt die WHERE-Bedingung | verfügbar bei Table-Extraktionen
packageSize | setzt die Paketgröße | verfügbar bei Table-Extraktionen


<!---
beschreiben ALLER Parameter aller möglichen Extraktionstype
-->

### Parameter der SAP-Quellverbindung
![Source parameters](/img/content/xu/xu_run_extraction_param_gen.png){:class="img-responsive"}

In diesem Tab können Sie Parameter zur SAP-Verbindung, siehe [SAP-Source-Einstellungen](https://help.theobald-software.com/de/xtract-universal/fortgeschrittene-techniken/sap-verbindungen-anlegen).


Parametername | Beschreibung |
------------ | ------------- | 
lang | setzt dynamisch die SAP-Anmeldesprache der benutzen SAP-Quellverbindung  
logonTicket | setzt dynamisch das Anmeldeticket, falls diese Option in der SAP-Verbindung konfiguriert wurde. Siehe [SSO mit SAP Logon Ticket](https://help.theobald-software.com/en/xtract-universal/advanced-techniques/sap-single-sign-on/sso-with-sap-logon-ticket) für mehr Details.

{: .box-note }
**Hinweis:** Der Parameter **logonTicket** kann nur gesetzt werden, wenn "SAP logon ticket" als Authentifizierungsmethode in den [SAP-Verbindung](https://help.theobald-software.com/de/xtract-universal/fortgeschrittene-techniken/sap-verbindungen-anlegen) ausgewählt ist.
