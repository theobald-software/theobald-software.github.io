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
Der Update Mode ermöglicht ein Delta-Update, d. h. es werden nur hinzugefügte oder geänderte Daten extrahiert, anstelle eines vollständigen Ladevorgangs.

### Einstellungen

Wählen Sie im Hauptfenster "SAP DataSources und Extraktoren extrahieren" den **Update-Mode** aus dem Dropdown-Menü aus.
![Update-Mode2](/img/content/deltaq-extraction-seetings2.png ){:class="img-responsive"}


| Bruchstabe| Bezeichnung | Beschreibung |
| :------: |:--- | :--- |
| F | Full | Extrahiert alle Daten, die den festgelegten Auswahlkriterien entsprechen.
| D | Delta Update | Extrahiert nur Daten, die seit der letzten Delta-Anforderung im SAP-System hinzugefügt oder geändert wurden. Initialisieren Sie das Deltaverfahren, bevor Sie ein Delta-Update durchführen. Um Fehler, Abbrüche und Lücken in Ihren Daten während eines Deltalaufs zu vermeiden, führen Sie die nächste Extraktion im Updatemodus **Repeat** durch. |
| C | Delta Initialisation | Initialisiert das Delta-Verfahren und extrahiert gleichzeitig alle Daten im Vollmodus. Wenn Sie ein Delta-Verfahren neu initialisieren, löschen Sie zunächst alle vorhandenen Inits, indem Sie in den DeltaQ-Extraktionseinstellungen auf **[Request Maintenance]** klicken.
| R | Repeat | Wiederholt den letzten Deltalauf und aktualisiert alle seit dem letzten Lauf angesammelten Deltadaten. Löscht alle Daten des letzten (erfolglosen) Delta-Updates, bevor eine Wiederholung ausgeführt wird. Sie können eine Wiederholung mehrmals ausführen.
| S | Delta Init (ohne Daten) | Initiliaziert das Deltaverfahren, ohne Daten aus der SAP-Datenquelle zu extrahieren. Das Ergebnis des **Delta-Inits** ist ein sogenannter **[Request Maintenance]** auf der SAP-Seite. Wenn Sie ein Delta-Verfahren neu initialisieren, löschen Sie zunächst alle vorhandenen Inits, indem Sie in den DeltaQ-Extraktionseinstellungen auf **[Request Maintenance]** klicken.
| I | Non-cumulative Init | Relevant für DataSources wie *2LIS_03_BX*.  |
| A | Activate (don't extract) | Aktiviert eine DataSource ähnlich wie das Klicken auf **[Activate]**, ist aber praktischer, wenn alle DataSources im Batch aktiviert werden. **[Activate]** ist eine Alternative zu **[Automatic Synchronization]**.  Es werden keine Daten extrahiert. |
| V | **[Nur Xtract IS]** SSIS-Variable; veraltet, siehe [Variablen](../bwcube/variablen) | Wenn **V** ausgewählt ist, muss in den [DeltaQ Settings](./extraktionseinstellungen) ein Variablenname eingegeben werden. Die gleiche SSIS-Variable muss in SSIS angelegt und mit einem Wert versehen werden. Die folgenden Werte sind möglich: F, D, C, R, S, I und A. |

{: .box-note }
**Hinweis:** Der **Update-Modus** kann ebenfalls dynamisch als Laufzeitparameter **updateType** im "Run Extraction"-Dialog gesetzt werden.

![Update-Mode1](/img/content/updatetype_runtime_parameter.png ){:class="img-responsive"}