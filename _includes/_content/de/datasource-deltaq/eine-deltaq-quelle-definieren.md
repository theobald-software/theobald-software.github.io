### Einen Extraktor suchen

Führen Sie die folgenden Schritte aus, um eine DataSource zu suchen. Mehr Informationen über die Suche nach Hierarchien finden Sie unter [Hierarchien](./hierarchien).

1. Navigieren Sie im Hauptfenster der Komponente zu **OLTP** und klicken Sie auf ![magnifying-glass](/img/content/icons/magnifying-glass.png). Das Fenster “Look Up OLTP Source” wird geöffnet.<br>
{% if page.product == "xtract-is" %}![DeltaQ](/img/content/xis/DeltaQ.png){:class="img-responsive"}{% else %}![DeltaQ](/img/content/DeltaQ.png){:class="img-responsive"}{% endif %}
2. Geben Sie den Namen einer DataSource in das Feld **Name**ein (1). Verwenden Sie Wildcards ( * ), wenn nötig.<br>
![search-ds-mat-attr](/img/content/search-ds-mat-attr2.png){:class="img-responsive"}
3. Klicken Sie auf ![magnifying-glass](/img/content/icons/magnifying-glass.png) und wählen Sie aus der angezeigten Liste (2) den gewünschten Extraktor aus.
4. Klicken Sie auf **[OK]**, um Ihre Auswahl zu Bestätigen.

Die Anwendung kehrt nun zum Hauptfenster der Komponente zurück.

{: .box-note }
**Hinweis:** Um DataSources zu suchen und zu finden, stellen Sie sicher, dass die DataSources in SAP aktiviert sind.


### Definieren einer DeltaQ-Extraktion

Führen Sie nach der Extraktorensuche die folgenden Schritte aus:

1. Navigieren Sie zu **Gateway** und klicken Sie auf ![magnifying-glass](/img/content/icons/magnifying-glass.png) (1), um ein RFC-Destination zu suchen. 
Weitere Informationen finden Sie unter [DeltaQ Customizing](./deltaq-customizing).<br>
![DeltaQ2](/img/content/DeltaQ2.png){:class="img-responsive"}
2. Navigieren Sie zu **Logical Destination** und klicken Sie auf ![magnifying-glass](/img/content/icons/magnifying-glass.png) (2) um eine logische RFC-Destination zu suchen.Weitere Informationen finden Sie unter [DeltaQ Customizing](./deltaq-customizing).
3. Klicken Sie auf **Customizing Check** (3) zur Validierung des DeltaQ-Customizings auf dem SAP-System.
Stellen Sie sicher, dass alle Häkchen grün sind. Weitere Informationen finden Sie unter [DeltaQ Customizing](./deltaq-customizing).<br>
![customizing-check-successful](/img/content/customizing-check-successfull.png){:class="img-responsive"}
4. Wählen Sie einen [Update Mode](./update-modus) aus, um z.B. eine Delta-Extraktion zu initialisieren.
5. Wählen Sie die Elemente aus, die der Ausgabe hinzugefügt werden sollen.<br>
![DeltaQ-output](/img/content/DeltaQ-output.png){:class="img-responsive"}
6. Optional: klicken Sie auf die **[Edit]**-Option neben dem Element, um [Filter](./datasource-parameter) hinzuzufügen.
7. Klicken Sie auf **[Run]**, um die Extraktion zu testen und Ihre Einstellungen zu validieren.
8. Klicken Sie auf **[Activate]**, um um die Extraktion in SAP zu aktivieren. Nach erfolgreicher Aktivierung öffnet sich eine entsprechende Statusmeldung:<br>
![Deltaq-System-Parameters-Info](/img/content/Deltaq-System-Parameters-Info.png){:class="img-responsive"}

{: .box-note } 
**Hinweis:** Die Aktivierung ist nur für die Update-Modi *Delta*, *Full*oder *Init* erforderlich.
Aktivieren Sie die Extraktion nicht für den *Delta Update*-Modus.

*****
#### Weiterführende Links
- [DeltaQ Troubleshooting Guide](https://support.theobald-software.com/helpdesk/KB/View/14424-deltaq-troubleshooting-guide). 
- [How to activate activate the BI Content DataSource (SAP Help)](https://help.sap.com/saphelp_scm70/helpdata/ru/d8/8f5738f988d439e10000009b38f842/content.htm?no_cache=true)
- [How to create Generic DataSource using Function Module and Timestamps](https://kb.theobald-software.com/sap/create-generic-datasource-using-function-module-and-timestamps)
- [DeltaQ Troubleshooting Guide](https://support.theobald-software.com/helpdesk/KB/View/14424-deltaq-troubleshooting-guide)
