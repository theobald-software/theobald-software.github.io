
### Load-Verfahren (Update Mode) 
**Full update**: <br/>
extrahiert die Daten im Full-Update-Modus.<br/>

{: .box-note }
**Hinweis:** Die Option **Delta update** ist nur dann eingabebereit, wenn der ODP-Anbieter im SAP-Quellsystem Delta-Updates unterstützt, siehe offizielle [SAP-Dokumentation](https://help.sap.com/doc/7b257f34728810148a4b1a83b0e91070/1511%20001/de-de/frameset.htm?4a1d039e24521977e10000000a42189c.html).

**Delta update**:<br/>
Führt eine Delta-Initialisierung aus, wenn für den ausgewählten Abonnenten keine Delta-Initialisierung verfügbar ist. Führt ein Delta-Update aus, wenn eine Delta-Initialisierung für den ausgewählten Abonnenten vorhanden ist. <br/>

- **On delta initialization** <br/>
Aktivieren der Checkbox *Extract data* ermöglicht eine Datenextraktion während einer laufenden Delta-Initialisierung.
Bei einer nicht angekreuzten Checkbox würde keine Datenextraktion während einer Delta-Initialisierung stattfinden.<br/>
- **Auto-sync subscription**<br/>
ermöglicht das Löschen des bestehenden Abonnements und erstellt bei Bedarf ein neues.
Jede Extraktion hat eine interne ID, die Teil des Abonnenten ist. 
Wenn Sie dann nach der Delta-Initialisierung den Filter einer Extraktion ändern, löscht die Option *Auto-sync subscription* automatisch das bestehende Abonnement und legt ein neues an. 
Ein Abonnement wird gelöscht, wenn die Fehlermeldung "Illegale Änderung der Selektionsparameter" seitens SAP-System erscheint. <br/>

**Delta recovery:**<br/>
wiederholt das letzte Delta-Update.


