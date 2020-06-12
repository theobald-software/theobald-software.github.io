### Einschränkungen von RFC_READ_TABLE 
Insbesondere bei älteren SAP Releases bestehen einige Einschränkungen bei der Extraktion von Tabellen wenn der SAP Standardfunktionsbaustein (RFC_READ_TABLE) verwendet wird:

- Die Gesamtbreite der zu extrahierenden Spalten darf 512 Bytes nicht überschreiten
- Andere Einschränkungen existieren abhängig von der SAP-Version. 
  Fehler können auftreten bei der Extraktion von Tabellen, die eine oder mehrere Spalten vom Typ f (FLTP, floating point), DEC (Decimal und Prozentzahl z.B.) oder x (RAW, LRAW) haben.
- Schlechte Extraktionsperformance bei Extraktion großer Tabellen.

Um die oben genannte Einschränkungen zu umgehen, installieren Sie den Z-Funktionsbaustein *Z_THEO_READ_TABLE* von Theobald Software auf Ihrem SAP-System.

## ABAP Framework Z_THEO_READ_TABLE installieren

{: .box-note}
**Hinweis:** Lesen Sie die README.txt, die sich im Installationsornder (z.B.`C:\Program Files\XtractProduct\ABAP\README.txt`) befindet, bevor Sie den Z-Funktionsbaustein installieren.

{: .box-warning}
**Warnung! Fehlerhafter Import des Funktionsbausteins**
Die Version des Transportauftrags muss mit der Version von SAP_ABA übereinstimmen, sonst tritt beim Importvorgang ein Fehler auf.
Für ältere SAP-Releases verwenden Sie den älteren Transportauftrag: Z_THEO_READ_TABLE-before_740SP05.

Beim Einspielen der Z_THEO_READ_TABLE-before_740SP05 auf älteren SAP-Releases kann ein Syntaxfehler auftreten. Wenden Sie sich an den Support von Theobald Software und senden Sie die dedizierte Fehlermeldung.

- Z_THEO_READ_TABLE.zip enthält die Version 1.x (bis 1.11) von Z_THEO_READ_TABLE - den einzigen benutzerdefinierten Funktionsbaustein.
- Z_THEO_READ_TABLE-before_740SP05.zip enthält die Version 2.x von Z_THEO_READ_TABLE - den benutzerdefinierten Funktionsbaustein, eine Reihe von ABAP-Klassen und andere DDIC-Objekte.  
![Z_THEO_READ_TABLE_SE80](/img/content/Z_THEO_READ_TABLE_SE80.png){:class="img-responsive" }