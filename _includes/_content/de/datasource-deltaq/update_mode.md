Die DeltaQ-Komponente wird hauptsächlich für Delta-Extraktionen verwendet.Dies bedeutet, dass nur kürzlich hinzugefügte oder geänderte Daten extrahiert werden, anstatt sie vollständig zu laden.
Die extrahierten Daten werden durch die Einstellung **Update Mode** der DeltaQ-Komponente definiert.

### Update-Modi

Wählen Sie im Hauptfenster der Komponente ein **Update Mode** aus einem Dropdown-Menü aus.
![Update-Mode2](/img/content/deltaq-extraction-seetings.png ){:class="img-responsive"}

**Update Mode** bietet die folgenden Optionen:

<!---    ab hier überprüfen -->

| Bruchstabe| Bezeichnung | Beschreibung |
| :------: |:--- | :--- |
| F | Full | Extrahiert alle Daten, die den festgelegten Auswahlkriterien entsprechen.
| D | Delta Update | Extrahiert nur Daten, die seit der letzten Delta-Anforderung im SAP-System hinzugefügt oder geändert wurden. [Initialisieren](#initialisierung-des-delta-prozesses) Sie das Delta-Verfahren, bevor Sie ein Delta-Update durchführen. Um Fehler, Abbrüche und Lücken in Ihren Daten während eines Deltalaufs zu vermeiden, führen Sie die nächste Extraktion im Updatemodus **Repeat** durch. |
| C | Delta Initialisation | Initialisiert das Delta-Verfahren und extrahiert gleichzeitig alle Daten im *Full Load*. Wenn Sie ein Delta-Verfahren neu initialisieren, löschen Sie zunächst alle vorhandenen Inits, indem Sie in den [Extraktionseinstellungen](./extraktionseinstellungen) auf **[Maintenance]** klicken.
| R | Repeat | Wiederholt den letzten Delta-Lauf und aktualisiert alle seit dem letzten Lauf angesammelten Deltadaten. Löscht alle Daten des letzten (erfolglosen) Delta-Updates, bevor eine Wiederholung ausgeführt wird. Sie können eine Wiederholung mehrmals ausführen.
| S | Delta Init (without data) | Initiliaziert das Delta-Verfahren, ohne Daten aus der SAP-Datenquelle zu extrahieren. Das Ergebnis der *Delta Init* ist eine **[Maintenance]** (Wartung) auf der SAP-Seite.Wenn Sie einen Deltaprozess neu initialisieren, löschen Sie zunächst alle vorhandenen Inits, indem Sie in den [Extraktionseinstellungen] (./extraktionseinstellungen) auf **[Maintenance]** klicken.|
| I | Non-cumulative Init | Relevant für DataSources wie *2LIS_03_BX*.  |
| A | Activate (don't extract) | Aktiviert eine DataSource ähnlich wie das Klicken auf **[Activate]**, ist aber praktischer, wenn alle DataSources im Batch aktiviert werden. **[Activate]** ist eine Alternative zu **[Automatic Synchronization]**.  Es werden keine Daten extrahiert. |
{% if page.product == "xtract-is"%}| V | SSIS-Variable | Wenn **V** ausgewählt ist, muss in den [Extraktionseinstellungen](./extraktionseinstellungen) ein Variablenname eingegeben werden. Die gleiche SSIS-Variable muss in SSIS angelegt und mit einem Wert versehen werden. Die folgenden Werte sind möglich: F, D, C, R, S, I und A. |
{% endif"%}

{% if page.product == "xtract-universal" %}
**Update mode** kann zur Laufzeit mithilfe des Extraktionsparameters **updateType** dynamisch festgelegt werden, siehe [Extraktion ausführen](../extraktionen-ausfuehren-und-einplanen/extraktionsparameter#extraktion-ausführen).<br>
![Update-Mode1](/img/content/updatetype_runtime_parameter.png ){:class="img-responsive"}
{% endif %}

Für weitere Informationen darüber, wann welcher Update-Modus verwendet werden soll, siehe [Initialisierung des Delta-Prozesses](#initialisierung-des-delta-prozesses).


### Initialisierung des Delta-Prozesses

Um einen echten Delta-Prozess zum Laufen zu bringen, muss Delta zunächst initialisiert werden. Eine Übersicht über die Modi finden Sie unter [Update-Modi](#update-modi).

#### Schritt 1: Delta Initialisierung [C]
In diesem Modus werden alle Daten angefordert, die den von Ihnen eingestellten Auswahlkriterien entsprechen.

Stellen Sie den **Update-Modus** auf *Delta-Initialisierung* und führen Sie ihn aus.<br>
Die Initialisierungsselektionen werden kopiert, um die Deltasätze zu laden. Sie können das Delta-Update verwenden.

{: .box-note } 
**Hinweis:** Wenn Sie einen Delta-Prozess neu initialisieren, löschen Sie zunächst alle vorhandenen Inits (Initialisierungsanforderungen), indem Sie in den [Extraktionseinstellungen](./extraktionseinstellungen) auf **[Maintenance]** klicken.

#### Alternativer Schritt 1: Delta Init (without data) [S]
Delta Init (without data) ähnelt einer **Delta-Initialisierung**, es werden jedoch keine Daten aus der SAP-Datenquelle extrahiert.
Stellen Sie den **Update Mode** auf *Delta Init (without data)* ein und führen Sie die Extraktion aus.<br>
Sie können jetzt *Delta Update* verwenden.

{: .box-note } 
**Hinweis:** Wenn Sie einen Delta-Prozess neu initialisieren, löschen Sie zunächst alle vorhandenen Inits (Initialisierungsanforderungen), indem Sie in den [Extraktionseinstellungen](./extraktionseinstellungen) auf **[Maintenance]** klicken.

#### Schritt 2: Delta-Update [D]
Das Delta-Update extrahiert nur Daten, die seit der letzten Delta-Anforderung im SAP-System hinzugefügt oder geändert wurden.

Führen Sie Ihr Paket zunächst einmal aus und setzen Sie dann den **Update-Modus** auf *Delta-Update*.
Es werden nur die Änderungen extrahiert, die seit der letzten Übertragung vorgenommen wurden.

{: .box-note } 
**Hinweis:** Um Fehler, Abbrüche und Lücken zu vermeiden, führen Sie die nächste Extraktion im Update-Modus *Wiederholen* durch.

#### Optional: Repeat [R]
Wiederholt den letzten Deltalauf und aktualisiert alle Daten, die seit dem letzten Lauf aufgelaufen sind. Wenn der letzte Lauf nicht erfolgreich war, werden alle Daten des letzten Delta-Updates gelöscht, bevor ein neuer Lauf gestartet wird.<br>
Ein **Repeat** kann mehrmals gestartet werden.

Viele Datenquellen liefern das Feld ROCANCEL. Dieses Feld legt fest, ob die Datensätze in Abhängigkeit von der Delta-Verfahrensart der Datenquelle ergänzt oder überschrieben werden. Es definiert, wie ein Datensatz im Delta-Verfahren aktualisiert wird.<br>
In einem ABR-Modus: <br>
* *'Blank'* gibt ein Nachbild zurück<br>
* *'X'* gibt ein Vorher-Bild zurück<br>
* *'D'* löscht den Datensatz<br>
* *'R'* gibt ein umgekehrtes Bild zurück

#### Optional: Delta-Queue - RSA7
Sobald Delta aktiviert ist, können Sie in der SAP-Transaktion RSA7 die in der Delta-Queue anstehenden Datensätze einsehen.

![Delta](/img/content/Delta.png){:class="img-responsive"}

Wenn im Moment keine neuen Daten zu übertragen sind, wird eine entsprechende Protokollmeldung vermerkt und die Datenpipeline bleibt leer.

{: .box-note } 
**Hinweis:** Bevor Sie das nächste Update einleiten, stellen Sie sicher, dass ein Delta-Update ordnungsgemäß ausgeführt wurde. Durch das Ausführen eines neuen Delta-Updates wird das letzte Update entfernt. 


*****
#### Weiterführende Links
- [Delta Transfer to BI](https://help.sap.com/doc/saphelp_nw70/7.0.31/en-US/37/4f3ca8b672a34082ab3085d3c22145/content.htm?no_cache=true)
- [Delta Process](https://help.sap.com/viewer/ccc9cdbdc6cd4eceaf1e5485b1bf8f4b/7.4.23/en-US/4f18f6aa3fca410ae10000000a42189d.html)
- [Delta Verfahren](http://help.sap.com/saphelp_nw73/helpdata/de/4f/18f6aa3fca410ae10000000a42189d/content.htm).