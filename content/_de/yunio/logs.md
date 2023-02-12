---
ref: yunio-09
layout: page
title: Logs
description: Logs
product: yunio
parent: yunio
permalink: /:collection/:path
weight: 32
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=server
---

Dieser Abschnitt enthält Informationen über die Server-Logs und Transaktions-Logs, die von yunIO erstellt werden.<br>

### Logs anzeigen lassen
Öffnen Sie die Logs unter dem Menüpunkt *Logs*.
Es gbt 2 Arten von Logs:
- *Services:* Zeigt alle Server-Logs an.
- *Transactions:* Zeigt die Ablaufprotokolle (tracing) von Services des Typs *Transaction* an.

Das Log-Menü besteht aus zwei Abschnitten:
- Zeitstempel der Logs (1)
- Inhalt der Logs (2)

Klicken Sie auf einen Zeitstempel, um die dazugehörigen Logs anzuzeigen.<br>
![yunIO-Logs](/img/content/yunio/yunIO-Logs.png){:class="img-responsive"}

### Logs lesen

Ein Eintrag hat folgendes Format: `Zeit | Typ | Quelle | Nachricht`. Beispiel:

| Zeit | Typ | Quelle | Nachricht | 
|--------|--------|--------|---|
| PT00H00M43.777S | D | ExecutionCore: | Extraction finished, firing callback.  | 

#### Zeit

Der Zeitstempel in den Logs ist angegeben als pazifische Zeit (PT) in Stunden (H), Minuten (M) und Sekunden (S), z.B. `PT00H00M43.777S`.

<!---
Der Zeitstempel in den Logs ist angegeben als pazifische Zeit (<span style="color:orange">PT</span>) in Stunden (<span style="color:green">H</span>), Minuten (<span style="color:blue">M</span>) und Sekunden (<span style="color:red">S</span>). <br>
Beispiel: <span style="color:orange">PT</span><span style="color:green">00H</span><span style="color:blue">00M</span><span style="color:red">43.777S</span>
-->

#### Typ
Jeder Logeintrag ist einem der folgenden Typen zugewiesen:
- **E - Errors:** Fehlermeldungen, die während des Extraktionsprozesses ausgegeben werden.<br>
- **I - Information:** Statusmeldungen, über Vorgänge, die nicht zu einem Fehler führen.<br>
- **W - Warnings:**  Informationen über Probleme, die nicht zu einem Extraktionsfehler führen. Zum Beispiel Authentifizierungsfehler.<br>
- **D - Debug Details:** detaillierte Informationen, die helfen, den Grund für aufgetretene Fehler zu finden.

### Struktur eines Extraktionslogs

Das folgende Beispiel zeigt, wie Logs strukturiert sind, die durch das Ausführen eines Services entstehen.<br>
In dem Beispiel wird ein Service ausgeführt, der eine SAP Tabelle extrahiert. 
Logs von Services, die Funktionsbausteine und Transaktionen ausführen, können von diesem Beispiel abweichen.

1. Allgemeine technische Informationen werden angezeigt.
```
PT00H00M00.048S I ServicesWorker: Client [fe80::3e2e:aad4:6600:e801%52]:57836
PT00H00M00.125S D AsyncHttpServer: Reading...
PT00H00M00.182S D Runtime: sourceName: source
```
2. Die Lizenz wird geprüft.
```
PT00H00M00.243S I LicenseLoader: Found demo license.
```
3. Die SAP-Verbindung wird hergestellt.
```
PT00H00M00.249S D R3ConnectionOpener: 'Use SAPGUI' expert option is disabled
PT00H00M00.249S D R3ConnectionOpener: Connecting to SAP application server, using NetWeaver RFC SDK
PT00H00M00.249S D R3ConnectionOpener: Client '800', language 'en'
PT00H00M00.249S D R3ConnectionOpener: User alice, Password has been provided
PT00H00M00.249S D R3ConnectionOpener: Using plain authentication
PT00H00M00.567S I R3ConnectionOpener: Connected to SAP host 'sap-erp-as05.example.com', instance 00, release 740, codepage 4103, user 'ALICE'
```
4. Die Extraktion wird gestartet. Im folgenden Beispiel wird die SAP Tabelle KNA1 extrahiert.
```
PT00H00M00.582S D yunIOWorker: Starting extraction...
PT00H00M00.584S D yunIOWorker: Waiting for data...
PT00H00M00.673S I TheoReadTableExtractor: Starting extraction - using function module Z_THEO_READ_TABLE
PT00H00M00.685S I TheoReadTableExtractor: Extracting table KNA1
```
5. Laufzeitparameter werden geprüft.
```
PT00H00M00.691S D TheoReadTableExtractor: WHERE clause is empty
PT00H00M00.691S D TheoReadTableExtractor: HAVING clause is empty
```
6. Daten werden in SAP angefragt.
```
PT00H00M00.692S D TheoReadTableExtractor: Data will be extracted in dialog work process
PT00H00M00.693S D TheoReadTableExtractor: Fetching packages (10 rows per package)
PT00H00M00.806S D TheoReadTableExtractor: Z_THEO_READ_TABLE version 1.x
```
7. Datenpakete werden von SAP empfangen.
```
PT00H00M00.806S D TheoReadTableExtractor: Received package #1 (10 rows)
PT00H00M00.812S D yunIOWorker: Data available.
PT00H00M00.843S D yunIOWorker: Registering Stream.
PT00H00M00.904S D TheoReadTableExtractor: Received package #2 (10 rows)
PT00H00M00.951S D TheoReadTableExtractor: Received package #3 (10 rows)
...
```
8. Extraktion wird abgeschlossen.
```
PT00H00M43.776S I TheoReadTableExtractor: Extraction finished - received 9,123 rows in total
PT00H00M43.777S D ExecutionCore: Extraction finished, firing callback.
PT00H00M43.781S D yunIOWorker: Target environment setup successful.
PT00H00M43.781S I yunIOWorker: Cleaning up...
PT00H00M43.785S D AsyncHttpServer: Closing connection: False
PT00H00M43.785S D AsyncHttpServer: Reading...
```