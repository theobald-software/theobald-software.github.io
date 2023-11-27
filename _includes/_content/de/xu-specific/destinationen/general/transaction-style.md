
### Transaction style

{: .box-note }
**Hinweis:** Je nach Destination variieren die verfügbaren Optionen für Transaction Style.

**One Transaction**<br>
*Preparation*, *Row Processing* und *Finalization* werden in einer einer einzigen Transaktion ausgeführt.<br>
Vorteil: sauberer Rollback aller Änderungen.<br>
Nachteil: ggf. umfangreiches Locking während der gesamten Extraktionsdauer.
Es ist empfohlen, *One Transaction* nur in Kombination mit DML-Befehlen zu verwenden, z. B. „truncate table“ und „insert“.
Durch die Verwendung von DDL-Befehlen wird die aktive Transaktion festgeschrieben, was zu Rollback-Problemen für die Schritte nach dem DDL-Befehl führt.
Beispiel: Wenn im Vorbereitungsschritt eine Tabelle erstellt wird, wird die geöffnete „OneTransaction“ festgeschrieben und ein Rollback in den nächsten Schritten wird nicht korrekt durchgeführt.
Weitere Informationen finden Sie unter [Snowflake Documentation: DDL Statements](https://docs.snowflake.com/en/sql-reference/transactions#label-transactions-ddl).


**Three Transactions**<br>
*Prepare*, *Row Processing* und *Finalization* werden jeweils in einer eigenen Transaktion ausgeführt.<br>
Vorteil: sauberer Rollback der einzelnen Abschnitte, evtl. kürzere Locking-Phasen als bei *One Transaction* (z. B. bei DDL in *Preparation* wird die gesamte DB nur bei *Preparation* gelockt und nicht für die gesamte Extraktionsdauer)<br>
Nachteil: Kein Rollback von vorangegangen Schritt möglich (Fehler im *Row Processing* rollt nur Änderungen aus *Row Processing* zurück, nicht aus *Preparation*). 


**RowProcessingOnly**<br>
Nur *Row Processing* wird in einer Transaktion ausgeführt. *Preparation* und *Finalization* ohne explizite Transaktion (implizite commits).<br>
Vorteil: DDL in *Perparation* und *Finalization* bei DBMS, die kein DDL in expliziten Transaktionen zulassen (z. B. AzureDWH).<br>
Nachteil: Kein Rollback von *Preparation/Finalization*.


**No Transaction**<br>
Keine expliziten Transaktionen.<br>
Vorteil: Keine Transaktionsverwaltung durch DBMS benötigt (Locking, DB-Transaktionslog, etc.). Dadurch kein Locking und evtl. Performanzvorteile.<br>
Nachteil: Kein Rollback.
