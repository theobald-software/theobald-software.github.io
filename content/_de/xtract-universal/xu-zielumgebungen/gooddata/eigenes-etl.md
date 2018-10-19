---
ref: xu-gooddata-04
layout: page
title: Eigenes ETL
description: Eigenes ETL
product: xtract-universal
parent: gooddata
permalink: /:collection/:path
weight: 4
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=eigenes-etl
---

Hier finden Sie Unterstützung für die ersten Schritte, nachdem Sie Ihre Daten für einen eigenen ETL-Prozess extrahiert und hochgeladen haben.

**Starten Sie CloudConnect**<br>
Wenn Sie CloudConnect gerade das erste Mal ausführen, sollten Sie nach Ihrem Benutzernamen und Passwort gefragt werden. Außerdem werden Sie gebeten, ein lokales Projekt anzulegen und mit einem GoodData-Projekt zu verknüpfen (welches Sie selbstverständlich auch in diesem Schritt anlegen können).

**Graph-Erstellung**<br>
Jetzt sollten Sie über **File->New->Graph** einen neuen Graphen anlegen. Sie können die Standard-Einstellungen übernehmen oder Ihren Vorgaben entsprechend anpassen.           

**CSV Reader hinzufügen**<br>
Nachdem Sie Ihren Graphen erstellen haben, ziehen Sie einen neuen **CSV Reade**r aus dem **Readers**-Werkzeugkasten auf der rechten Seite per Drag-and-Drop auf die Arbeitsfläche.

![GD-Csv-Reader](/img/content/GD-Csv-Reader.png){:class="img-responsive"}

Doppelklicken Sie auf den CSV Reader oder klicken Sie mit der rechten Maustaste und wählen **Edit**, um die Einstellungen zu öffnen. Klicken Sie auf das leere Feld neben **File URL** und anschließend auf den Auswahlknopf auf der rechten Seite.

![GD-Edit-Csv-Reader](/img/content/GD-Edit-Csv-Reader.png){:class="img-responsive"}

Im neuen Fenster wählen Sie den Reiter **Remote files**.

![GD-Url-Dialog](/img/content/GD-Url-Dialog.png){:class="img-responsive"}

Drücken Sie den Knopf **Create/Edit URL** und geben Sie die folgenden Informationen sowie Ihren Benutzernamen und Passwort ein:            

**Protocol**: HTTPS<br>
**Host**: secure-di.gooddata.com<br>
**Path**: /uploads/     

Passen Sie **Path** entsprechend an, falls Sie in den Verbindungseinstellungen in Xtract Universal weitere Unterverzeichnisse eingegeben haben.


![GD-Edit-Url](/img/content/GD-Edit-Url.png){:class="img-responsive"}

Sie können die Verbindungsinformationen mit den Buttons unten speichern und in anderen Graphen wieder laden, wenn Sie möchten. Nach einem Klick auf OK, verbindet sich CloudConnect automatisch mit dem Server und navigiert in das angegebene Verzeichnis. Wählen Sie einfach die hochgeladene Datei (standard: data.csv), klicken Sie auf OK und schließen Sie die Einstellungen des CSV Reader mit einem weiteren Klick auf OK.

![GD-Url-Dialog-With-File](/img/content/GD-Url-Dialog-With-File.png){:class="img-responsive"}

Klicken Sie jetzt mit der rechten Maustaste auf den CSV Reader und wählen Sie **Extract metadata**. Ändern Sie im neuen Fenster die Option Encoding zu UTF-8, klicken Sie auf Next und abschließend auf Finish.


![GD-Encoding](/img/content/GD-Encoding.png){:class="img-responsive"}

Jetzt können Sie den CSV Reader mit beliebigen anderen ETL-Komponenten verbinden, die Sie verwenden möchten. Denken Sie nur daran, bei der ersten vom CSV Reader ausgehenden Verknüpfung die eben extrahierten Metadaten auszuwählen.
                        

**Noch einen Schritt weiter**<br>
Wenn Sie den Daten-Import automatisieren möchten, können Sie den Graph mit **Deploy->Deploy** auf den GoodData-Server hochladen und mittels Schedules über die Web-Oberfläche von GoodData regelmäßig ausführen lassen.

Nun können Sie einfach, wann immer Sie Ihre Daten aktualisieren möchten, die Extraktion in Xtract Universal starten und GoodData wird automatisch über den ETL-Prozess die exportierten Daten integrieren.

