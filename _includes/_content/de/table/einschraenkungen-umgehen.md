Bei der Extraktion von Tabellen aus älteren SAP-Systemen gibt es Einschränkungen bei der Verwendung des SAP-Standardfunktionsbausteins (RFC_READ_TABLE).
Mögliche Einschränkungen sind z.B. schlechte Performance bei großen Tabellen, limitierte Gesamtbreite von Spalten, etc.

Um mögliche Einschränkungen zu vermeiden, installieren Sie den Theobald Software Z-Funktionsbaustein /THEO/READ_TABLE auf Ihrem SAP-System, siehe [Funktionsbaustein für Table](./sap-customizing/funktionsbaustein-fuer-table-extraktion).

Wir empfehlen die Installation des aktuellen Funktionsbausteins /THEO/READ_TABLE:
- `THEO_READ_TABLE_740SP05.zip` - kompatibel mit ABAP Version 7.40 SP05 und höher
- `THEO_READ_TABLE_710.zip` - kompatibel mit ABAP Version 7.10 und höher
- `THEO_READ_TABLE_640.zip` - kompatibel mit ABAP Versionen von 6.40 bis 7.03
- `THEO_READ_TABLE_46C.zip` - kompatibel mit ABAP Versionen von 4.6C bis 6.40