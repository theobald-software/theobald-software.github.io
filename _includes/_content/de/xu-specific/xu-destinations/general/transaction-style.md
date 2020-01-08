### Transaction style

**One Transaction** <br>
Prepare, Row Processing und Finalization werden in einer einer einzigen Transaktion ausgeführt.<br>
Vorteil: sauberer Rollback aller Änderungen.<br>
Nachteil: ggf. umfangreiches Locking während der gesamten Extraktionsdauer 


**Three Transactions**<br>
Prepare, Row Processing und Finalization werden jeweils in einer eigenen Transaktion ausgeführt.<br>
Vorteil: sauberer Rollback der einzelnen Abschnitte, evtl. kürzere Locking-Phasen als bei One Transaction (z. B. bei DDL im Prepare wird die gesamte DB nur beim Prepare gelockt und nicht für die gesamte Extraktionsdauer)<br>
Nachteil: Kein Rollback von vorangegangen Schritt möglich (Fehler im Row Processing rollt nur Row-Processing-Änderungen zurück, aber nicht Prepare) 


**RowProcessingOnly**<br> 
Nur Row Processing wird in einer Transaktion ausgeführt. Prepare und Finalization ohne explizite Transaktion (implizite commits).<br>
Vorteil: DDL im Perpare und Finalization bei DMBS, die kein DDL in expliziten Transaktionen zulassen (z. B. AzureDWH)<br>
Nachteil: Kein Rollback von Prepare/Finalization, auch nicht als Teilschritt 


**No Transaction**<br>
Keine expliziten Transaktionen.<br>
Vorteil: Keine Transaktionsverwaltung durch DBMS benötigt (Locking, DB-Transaktionslog, etc.). Dadurch kein Locking und evtl. Performanzvorteile<br>
Nachteil: Kein Rollback
