
### Debugging

![Debugging](/img/content/debugging-bulk-insert.png){:class="img-responsive"}

{: .box-warning}
**Warnung! Performance-Verlust (Leistungseinbuße)!**
Die Performance sinkt, wenn Bulk Insert deaktiviert ist.
Deaktivieren Sie den Bulk Insert nur wenn es notwendig ist, z.B. auf Anfrage des Support-Teams.


Durch das Anhaken der Checkbox **Disable bulk operations** wird der standardmäßige Bulk Insert beim Schreiben auf die Datenbank deaktiviert.

Diese Option ermöglicht eine detaillierte Fehleranalyse, falls bestimmte Datenzeilen nicht auf der Datenbank persistiert werden können. 
Mögliche Ursachen für dieses Verhalten können fehlerhafte Werte im hinterlegten Datentyp sein.

Das Debugging sollte nach der erfolgreichen Fehleranalyse wieder deaktiviert werden, da ansonsten die Performance der Datenbank-Schreibprozesse dauerhaft niedrig bleibt. 

#### Verwendung von Custom SQL

{: .box-note }
**Hinweis:** Bulk Operations werden beim Verwenden von [Custom SQL Anweisungen](#custom-sql) (z.B. bei *Row Processing*) nicht unterstützt. Dies führt zu Performance-Verlust (Leistungseinbußen).

{: .box-tip }
**Tip:** Um die Performance beim Verwenden von [Custom SQL Anweisungen](#custom-sql) zu steigern, wird empfohlen die Custom-Verarbeitung im *Finalization*-Schritt zu verwenden.
