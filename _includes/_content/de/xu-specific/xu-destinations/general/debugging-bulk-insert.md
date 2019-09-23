#### Debugging

Durch das Anhaken des Debuggings wird der standardmäßige BULK-Insert beim Schreiben auf die Datenbank deaktiviert.

Das ermöglicht eine detaillierte Fehleranalyse, falls bestimmte Datenzeilen nicht auf der DB persistiert werden können. Mögliche Ursachen können fehlerhafte Werte bzgl. des hinterlegten Datentyps sein.

Das Debugging sollte nach der erfolgreichen Fehleranalyse wieder deaktiviert werden, da ansonsten die Performanz der DB Schreibprozesse dauerhaft sinkt. 

![Debugging](/img/content/debugging-bulk-insert.png){:class="img-responsive"}