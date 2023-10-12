
### Transaction style

{: .box-note }
**Hinweis:** Je nach Destination variieren die verfügbaren Optionen für Transaction Style.

**One Transaction**<br>
*Preparation*, *Row Processing* und *Finalization* werden in einer einer einzigen Transaktion ausgeführt.<br>
Vorteil: sauberer Rollback aller Änderungen.<br>
Nachteil: ggf. umfangreiches Locking während der gesamten Extraktionsdauer 


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
