---
ref: xi-q-delta-06
layout: page
title: Update Mode
description: Update Mode
product: xtract-is
parent: xtract-is-deltaq
permalink: /:collection/:path
weight: 6
lang: de_DE
progressstate: 5
---
### Funktion
Der Aktualisierungsmodus ermöglicht ein Delta-Update, d. h. es werden nur hinzugefügte oder geänderte Daten extrahiert, anstelle eines vollständigen Ladevorgangs.

### Einstellungen

Wählen Sie im Hauptfenster "Extract SAP DataSources and Extractors" den **Update-Mode** aus dem Dropdown-Menü aus.
![Update-Mode2](/img/content/deltaq-extraction-seetings.png ){:class="img-responsive"}

{: .box-note } 
**Hinweis:** Der **Update-Mode** kann dynamisch als SSIS-Eigenschaft **[Xtract DeltaQ].[UpdateType]** im Dialog "Data Flow Task Properties" eingestellt werden.


| Buchstage | Bezeichnung | Beschreibung |
| :------: |:--- | :--- |
| F | Full | Extrahiert alle Daten, die den eingestellten Auswahlkriterien entsprechen.
| D | Delta Update | Extrahiert nur Daten, die seit der letzten Delta-Anforderung im SAP-System hinzugefügt oder geändert wurden. Initialisieren Sie das Deltaverfahren, bevor Sie ein Delta-Update durchführen. Um Fehler, Abbrüche und Lücken in Ihren Daten während eines Deltalaufs zu vermeiden, führen Sie die nächste Extraktion im Updatemodus **Repeat** durch. |
| C | Delta Initialisation | Initialisiert das Delta-Verfahren und extrahiert gleichzeitig alle Daten im Vollmodus. Wenn Sie ein Delta-Verfahren neu initialisieren, löschen Sie zunächst alle vorhandenen Inits, indem Sie in den DeltaQ-Extraktionseinstellungen auf **[Request Maintenance]** klicken.
| R | Repeat | Wiederholt den letzten Deltalauf und aktualisiert alle seit dem letzten Lauf angesammelten Deltadaten. Löscht alle Daten des letzten (erfolglosen) Delta-Updates, bevor eine Wiederholung ausgeführt wird. Sie können eine Wiederholung mehrmals ausführen.
| S | Delta Init (ohne Daten) | Initiliaziert das Deltaverfahren, ohne Daten aus der SAP-Datenquelle zu extrahieren. Das Ergebnis des **Delta-Inits** ist ein sogenannter **[Request Maintenance]** auf der SAP-Seite. Wenn Sie ein Delta-Verfahren neu initialisieren, löschen Sie zunächst alle vorhandenen Inits, indem Sie in den DeltaQ-Extraktionseinstellungen auf **[Request Maintenance]** klicken.
| I | Non-cumulative Init | (Bestands-Init) Relevant für DataSources wie *2LIS_03_BX*.  |
| A | Activate (nicht extrahieren) | Aktiviert eine DataSource ähnlich wie das Klicken auf **[Activate]**, ist aber praktischer, wenn alle DataSources im Batch aktiviert werden. **[Activate]** ist eine Alternative zu **[Automatic Synchronization]**.  Es werden keine Daten extrahiert. |
| V | **[Xtract IS only:]** SSIS-Variable veraltet, siehe [Variablen](../bwcube/variablen)| Wenn **V** ausgewählt ist, muss in den [Settings](./extraktionseinstellungen) ein Variablenname eingegeben werden. Die gleiche SSIS-Variable muss in SSIS angelegt und mit einem Wert versehen werden. Die folgenden Werte sind möglich: F, D, C, R, S, I und A. |
