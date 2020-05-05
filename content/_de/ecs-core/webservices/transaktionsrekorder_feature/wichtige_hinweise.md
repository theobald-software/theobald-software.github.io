---
ref: ecs-core-webservice-designer-05
layout: page
title: Wichtige Hinweise
description: Wichtige Hinweise
product: ecs-core
parent: transaktionsrekorder_feature
permalink: /:collection/:path
weight: 7
lang: de_DE
---

- Ohne Parameter-Mapping wird ein Webservice mit den Standardwerten aus der Aufzeichnung ausgeführt. <br>
- Zum Testen einer aufgezeichneten Transaktion mit Standardwerten, kann es in einigen Szenarien notwendig sein, mindestens einen Parameter für eine neue Positionsnummer oder Beschreibung zu definieren (z.B. MATNR für Materialnummer), da SAP häufig nicht erlaubt, gleichnamige Positionen anzulegen. <br>
- Bei der Aufzeichnung einer Transaktion müssen die Eingabewerte immer im aufgezeichneten Format eingegeben werden und nicht wie üblich im SAP-konformen Format. Beispielsweise muss ein Datum im Format *20.06.2019* und nicht im Format *20190620* eingegeben werden. <br>
- Es gibt Transaktionen mit Kopfdaten und Positionsinformationen in mehreren Eingabebildern (z.B. Transaktion ME21 zum Anlegen von Bestellungen). Die Kopfdaten werden in das zweite Eingabebild übernommen und dort als Vorschlagswerte verwendet. Füllen Sie deshalb die Felder auf dem Kopfdatenbild nur dann, wenn Sie diese bei jeder Positionsanlage vorbelegen wollen. Felder, die Sie flexibel parametrisieren und füllen wollen, sollten Sie nur auf dem Positionseingabebild ausfüllen.   