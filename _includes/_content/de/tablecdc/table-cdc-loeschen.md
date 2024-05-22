
### Log-Tabelle und DB Trigger Löschen

Wenn eine Table CDC Extraktion nicht mehr gebraucht wird oder die Struktur der Ursprungstabelle geändert werden soll, ist es nicht ausreichend, nur die Extraktion zu löschen.
Um die Log-Tabelle und alle dazugehörigen Elemente aus Ihrem SAP-System zu löschen, öffnen Sie die Table CDC Extraktion und klicken Sie **[Delete CDC resources]**.

Um die SAP Elemente in mehrere Extraktionen zu löschen oder von Extraktionen, die bereits gelöscht wurden, siehe [Active CDC Watches](./active-cdc-watches).

{: .box-warning } 
**Warnung!** **Tabellenänderung nicht möglich**<br> Die Strukturen der Ursprungstabelle können nur geändert werden, nachdem die mit dieser Tabelle verbundenen CDC-bezogenen Ressourcen in SAP gelöscht wurden, siehe [SAP Note 2284776](https://launchpad.support.sap.com/#/notes/2284776).

