Insbesondere bei älteren SAP Releases bestehen einige Einschränkungen bei der Extraktion von Tabellen wenn der SAP Standardfunktionsbaustein RFC_READ_TABLE verwendet wird:

- Die Gesamtbreite der zu extrahierenden Spalten darf 512 Bytes nicht überschreiten
- Andere Einschränkungen existieren abhängig von der SAP-Version. 
  Fehler können auftreten bei der Extraktion von Tabellen, die eine oder mehrere Spalten vom Typ f (FLTP, floating point), DEC (Decimal und Prozentzahl z.B.) oder x (RAW, LRAW) haben.
- Schlechte Extraktionsperformance bei Extraktion großer Tabellen.

Um diese Einschränkungen zu umgehen, installieren Sie bitte unser ABAP Framework Z_THEO_READ_TABLE auf Ihrem SAP-System.
(Bis Version 1.x des Z_THEO_READ_TABLE handelte es sich um einen einfachen Funktionsbaustein. Seit 2.x wurde eine Reihe von ABAP Klassen und weiteren DDIC Objekten hinzugefügt, s. Screenshot unten).


Sie können das ABAP Framework mit Hilfe eines der mitgelieferten Transportaufträge installieren.
- Z_THEO_READ_TABLE.zip *oder* 
- Z_THEO_READ_TABLE-before_740SP05.zip<br>

Die zip-Dateien finden Sie im Unterordner *ABAP* des Xtract-Installationsordners. <br>
Bitte leiten Sie die zip-Dateien an Ihre SAP Basis Administratoren weiter mit der Bitte um Import ins SAP System.

Weiterführende Informationen zur Installation eines Transportauftrags finden Sie im folgenden [Knowledgebase-Artikel](https://kb.theobald-software.com/sap/how-to-import-an-sap-transport-request-with-the-transport-management-system-stms)

**Achtung**:
- Die Verwendung des Z_THEO_READ_TABLE erfordert **SAP_ABA Version 6.40** oder höher.
- Z_THEO_READ_TABLE-before_740SP05 unterstützt keine sub-selects in WHERE-Bedingungen. Das ist eine Einschränkung des [SAP Open SQL](https://blogs.sap.com/2014/02/06/abap-news-for-release-740-sp05/). Bitte nutzen Sie für diesen Fall den Z_XTRACT_IS_TABLE_COMPRESSION.
- Auf einigen älteren SAP Releases kann der Import des Z_THEO_READ_TABLE-before_740SP05 einen Syntax Fehler erzeugen. Bitte kontaktieren Sie für diesen Fall den Theobald Software Support.
- Zur De-Installation des ABAP Frameworks Z_THEO_READ_TABLE können Sie den Löschauftrag *Z_THEO_READ_TABLE-deletion_ request* verwenden.


![Z_THEO_READ_TABLE_SE80](/img/content/Z_THEO_READ_TABLE_SE80.png){:class="img-responsive" }
