
## Testumgebung 
### Update oder neue Version installieren
Um eine neuere Version der Software zu installieren, führen Sie die folgenden Schritte aus. 

### Vorbereitung

1. Empfehlungen: 
 - Verwenden Sie eine Testumgebung mit gültiger Lizenz und Wartung. Die Testumgebung ist eine Kopie der aktuellen Produktivumgebung.
 - Aktualisieren Sie die Software regelmäßig, insbesondere bei Versionen mit größeren Änderungen (Major Changes) und hoher ([H]) Empfehlung für das Update.
 - Erstellen Sie ein [Backup](#erstellen-eines-backups) der aktuellen Installation. 
 
2. Vor dem Update prüfen Sie sorgfältig die [Version History](https://kb.theobald-software.com/version-history) und Release-Notes in der Kowledge Base.
 - Führen Sie ggf. alle notwendigen Vorbereitungen und Änderungen durch, welche in der Release Note / Version History beschrieben werden, insbesondere bei größeren Änderungen (Major Changes) und hoher ([H]) Empfehlung für das Update.
 - Sie können auch den regelmäßigen Theobald Software Newsletter über die Änderungen in der Versionshistorie und Release Notes abonnieren. Schicken Sie eine Anfrage per [E-Mail](mailto:news@theobald-software.com). 

### Installationsvorgang

Eine neuere Version kann über die alte Version installiert werden. Es ist nicht notwendig, die vorige Version zu deinstallieren. 
Neue Versionen sind über das [Kundenportal von Theobald Software](https://my.theobald-software.com) verfügbar.

Während der Installation überprüft das Setup-Programm, ob andere Prozesse im Hintergrund laufen, die mit der zu installierenden Software zusammenhängen. Wenn dies der Fall ist, wird eine Meldung mit verschiedenen Optionen angezeigt: 
- Check Again - Sie können die betroffenen Programme schließen, dann **[Check Again]** klicken, um die Installation fortzusetzen. 
- Kill Process - Sie können den betroffenen Prozess beenden und mit der Installation fortfahren.
- Ignore - Sie können die Meldung ignorieren, die Installation kann jedoch wegen der Sperrung bestimmter Dateien abgebrochen werden.
- Quit Install - Sie können die Installation abbrechen und zu einem anderen Zeitpunkt wiederaufnehmen.

Installieren Sie zunächst die aktuelle Version der Software in der Testumgebung und testen Sie die neue Version ausführlich.
 - Testen Sie alle Ihre bestehenden Projekte.
 - Im Erfolgsfall folgen Sie den Schritten zur Installation der aktuellen Version auf der [Produktivumgebung](#update-intsallieren----produktivumgebung). 
 - Im Fehlerfall erstellen Sie ein Ticket im [Support-Portal](https://support.theobald-software.com). Registrieren Sie sich, wenn Sie noch kein Kundenkonto haben. Verwenden Sie ihr Backup bis eine Lösung zur Verfügung gestellt wird.


##  Produktivumgebung
### Update oder neue Version installieren
Nach einer erfolgreichen Installation und Test der Update-Version auf der Testumgebung, wiederholen Sie die Schritte [Update oder neue Version installieren](#testumgebung) für die Produktionsumgebung. 
Achten Sie darauf, dass Sie vorher ein Backup erstellen und ggf. die notwendigen Vorbereitungen durchführen. 
