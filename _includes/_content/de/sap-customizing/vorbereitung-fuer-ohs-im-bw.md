Die Verwendung des OHS-Extraktionstyps als Datenquelle macht die nachfolgend dokumentierten Voraussetzungen im SAP-Quellsystem notwendig.

In Abhängigkeit des verwendeten SAP-Releases kann eine OHS-Extraktion wie folgt verwendet werden:

|SAP-Release| SAP-Objekt |
|:----|:----|
| BI < 7.0 | InfoSpoke |
| BI >= 7.0 | OHS-Destination |


{: .box-tip }
**Tipp:** Die Verwendung von InfoSpokes wird ebenfalls unter BI 7.0 empfohlen, da sich diese in der Praxis robuster als OHS-Destinationen gezeigt haben.

### RFC-Destination anlegen

1. Anlage einer RFC-Destination vom Typ *TCP/IP* mittels Transaktion *SM59*. (1)
2. Der Aktivierungstyp muss *Registered Server Program* lauten. (2)
3. Vergabe einer frei wählbaren Programm ID. (3)

{: .box-note }
**Hinweis:** Der Name der Programm ID wird für die spätere Konfiguration erneut benötigt.

![OHS-BW-01](/img/content/ohs_destination.png){:class="img-responsive"}

### InfoSpokes und Prozessketten (BI < 7.0)

1. Anlage eines InfoSpokes mittels Transaktion *RSA1* über das Menü **Tools -> Open Hub Service -> Infospoke**.
2. Datenquelle im InfoSpoke hinterlegen, z.B. ODS-Objekt oder Cube.
3. Definieren eines InfoSpokes zur Datenextraktion in ein Fremdsystem im Tab *Destination*. 
4. Angabe der vorab angelegten RFC-Destination. 
5. Befüllen von zu übertragenden Spalten sowie ggf. einer Selektion. 
6. Speichern und Aktivieren des InfoSpokes.
7. Generieren einer Prozesskette mit Transaktion *RSA1* in das Menü **Edit -> Process Chains**.
8. Anhaken von Start durch *API* in der Variante für die Prozesskette.
9. Einfügen des vorab angelegten InfoSpokes in die Prozesskette.
10. Speichern und Aktivieren der Prozesskette.

### OHS Destinations und Data Transfer Processes (BI >= 7.0)

1. In der Administrator Workbench mittels Transaktion *RSA1* im linken Baum auf *Open Hub Destination* klicken. Mit der rechten Maustaste auf eine InfoArea klicken und im Kontextmenü *Create Open Hub Destination* auswählen. 
![OHS-BW-02](/img/content/ohs_1.png){:class="img-responsive"}
2. Im  Editiermodus der Destination den *Destination Type* auf *Third Party Tool* setzen, sowie die vorab angelegte OHS-Destination eintragen.
![OHS-BW-03](/img/content/ohs_2.png){:class="img-responsive"}
3. Speichern und Aktivieren der OHS-Destination.
4. Anlage eines neuen Datentransferprozesses (DTP) sowie zugehöriger Transformationen. Klicken Sie in dem mittleren Baum der InfoAreas auf die neu angelegte OHS-Destination und wählen *Create Data Transfer Process*.
5. Speichern und Aktivieren des DTP (je nach Bedarf sollte vor dem Aktivieren der Extraktionstyp von *Delta* auf *Full* gestellt werden). Die Anordnung von Destination, Transformationen und DTP im OHS-Baum erfolgt danach.
6. Erstellen Sie eine Prozesskette, die den im vorherigen Schritt erstellten DTP enthält.
7. Stellen Sie sicher, dass bei der Variante Prozesskettenstart die Planungsoption *Start Using Meta Chain or API* ausgewählt ist.
8. Aktivieren Sie die Prozesskette.
![OHS-BW-02](/img/content/ohs_4.png){:class="img-responsive"}
![OHS-BW-02](/img/content/ohs_5.png){:class="img-responsive"}
![OHS-BW-02](/img/content/ohs_7.png){:class="img-responsive"}


****
#### Weiterführende Links
- [SAP Note 2437637](https://launchpad.support.sap.com/#/notes/2437637)
- [SAP Note 1983356](https://launchpad.support.sap.com/#/notes/1983356)

