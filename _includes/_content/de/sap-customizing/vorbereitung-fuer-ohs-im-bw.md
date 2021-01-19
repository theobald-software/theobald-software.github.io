Die Verwendung des OHS-Extraktionstyps als Datenquelle macht die nachfolgend dokumentierten Voraussetzungen im SAP-Quellsystem notwendig.

In Abhängigkeit des verwendeten SAP-Releases kann eine OHS-Extraktion wie folgt verwendet werden:

|SAP-Release| SAP-Objekt |
|:----|:----|
| BI < 7.0 | InfoSpoke |
| BI >= 7.0 | OHS-Destination |


{: .box-tip }
**Tipp:** Die Verwendung von InfoSpokes wird ebenfalls unter BI 7.0 empfohlen, da sich diese in der Praxis als robuster als OHS-Destination gezeigt haben.

### RFC-Destination anlegen

1. Anlage einer RFC-Destination vom Typ *TCP/IP* mittels Transaktion *SM59*. (1)
2. Der Aktivierungstyp muss *Registrierbares Serverprogramm* sein. (2)
3. Vergabe einer frei wählbarer Programm ID. (3)

{: .box-note }
**Hinweis:** Der Name der Programm ID wird für die spätere Konfiguration erneut benötigt.

![OHS-BW-01](/img/content/ohs_destination.png){:class="img-responsive"}

### InfoSpokes und Prozessketten (BI < 7.0)

1. Anlage eines InfoSpoke mittels Transaktion *RSA1* über das Menü **Werkzeuge -> Open Hub Service -> Infospoke**.
2. Datenquelle im InfoSpoke hinterlegen, z.B. ODS-Objekt oder Cube.
3. Im Tab *Destination* definieren eines Infospoke zur Datenextraktion in ein Fremdsystem. 
4. Angabe der vorab angelegten RFC-Destination. 
5. Befüllung von zu übertragenden Spalten sowie ggf. eine Selektion. 
6. Speicherung und Aktivierung des InfoSpokes.
7. Generierung einer Prozesskette Transaktion *RSA1* in das Menü **Editieren -> Prozessketten**.
8. Die Variante für die Prozesskette den Start durch *API* angehaken.
9. Den vorhab angelegten Infospoke in die Prozesskette einfügen.
10. Speichern und Aktivieren der Prozesskette.

### OHS Destinations und Data Transfer Processes (BI >= 7.0)

1. Im Administrator Workbench mittels Transaktion *RSA1* im linken Baum auf *Open Hub Destination* klicken. Klicken Sie mit der rechten Maustaste auf eine InfoArea und wählen Sie im Kontextmenü *Open Hub Destination* anlegen.
![OHS-BW-02](/img/content/ohs_1.png){:class="img-responsive"}
2. Im  Editiermodus der Destination den Typ auf *Third Party Tool* setzen sowie die vorab angelegte OHS-Destination ein.
![OHS-BW-03](/img/content/ohs_2.png){:class="img-responsive"}
3. Speichern und Aktivieren der OHS-Destination.
4. Anlage eines neuen Datentransfers sowie zugehörige Transformationen. Klicken Sie in dem mittleren Baum der InfoAreas auf die neu angelegte RFC-Destination und wählen *Data Transfer Prozess anlegen*.
5. Speicherung und Aktivierung der DTP (je nach Bedarf sollte vor dem Aktivieren der Extraktionstyp von Delta auf Full gestellt werden). Anordnung von Destination, Transformationen und DTP im OHS-Baum nachfolgend.
![OHS-BW-02](/img/content/ohs_4.png){:class="img-responsive"}
![OHS-BW-02](/img/content/ohs_5.png){:class="img-responsive"}
![OHS-BW-02](/img/content/ohs_7.png){:class="img-responsive"}


****
#### Weiterführende Links
- [SAP Note 2437637](https://launchpad.support.sap.com/#/notes/2437637)
- [SAP Note 1983356](https://launchpad.support.sap.com/#/notes/1983356)

