Insbesondere bei älteren SAP Releases bestehen einige Einschränkungen bei der Extraktion von Tabellen wenn der SAP Standardfunktionsbaustein RFC_READ_TABLE verwendet wird:

- Die Gesamtbreite der zu extrahierenden Spalten darf 512 Bytes nicht überschreiten
- Andere Einschränkungen existieren abhängig von der SAP-Version. 
  Fehler können auftreten bei der Extraktion von Tabellen, die eine oder mehrere Spalten vom Typ f (FLTP, floating point), DEC (Decimal und Prozentzahl z.B.) oder x (RAW, LRAW) haben.
- Schlechte Extraktionsperformance bei Extraktion großer Tabellen.

Um diese Einschränkungen zu umgehen, gibt es die Möglichkeit, einen Z-Funktionsbaustein in Ihrem SAP-System zu installieren.

Für hochperformante Massendaten-Extraktion von SAP-Tabellen haben wir den Z-Funktionsbaustein Z_THEO_READ_TABLE entwickelt. 
Wir empfehlen die Nutzung dieses Z-Funktionsbausteins.

Um den Z-Funktionsbaustein manuell zu installieren, folgen Sie den Anweisungen in unserem Kowledge Base-Artikel (tbd).<br>
Alternativ können Sie den Funktionsbaustein mit Hilfe eines der mitgelieferten Transportaufträge (Z_THEO_READ_TABLE.zip *oder* Z_THEO_READ_TABLE-before_740SP05.zip) installieren. Die zip-Dateien finden Sie im Unterordner *ABAP* des Xtract-Installationsordners. <br>
Bitte leiten Sie die zip-Dateien an Ihre SAP Basis Adminstratoren weiter mit der Bitte um Import ins SAP System.

Weiterführende Informationen zur Installation eines Transportauftrags finden Sie im folgenden [Kowledge Base-Artikel](https://my.theobald-software.com/index.php?/Kowledge Base/Article/View/68/67/how-to-import-an-sap-transport-request-with-the-transport-management-system-stms) oder in der SAP-Help.



