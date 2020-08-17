---
ref: xu-qliksense-qlikview-05
layout: page
title: Datenladeskript generieren
description: Datenladeskript generieren
product: xtract-universal
parent: qlik
permalink: /:collection/:path
weight: 5
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=script_generieren
---
### Anzeigen eines Qlik-Skripts
1. Führen Sie eine Extraktion mit der Destination "Qlik" aus. Das Fenster "Run Extraction" wird geöffnet.
![XU_qlik_generate_Script](/img/content/XU_qlik_generate_Script.png){:class="img-responsive"}
2. *Optional (bei Verwendung von QlikSense)*: Markieren Sie im Abschnitt *Parameter* die Checkboxen für die Parameter, die Sie als SET-Variablen im QlikSense-Skript hinzufügen möchten.
3. Klicken Sie auf **[Generate Qlik Script]**, um ein Datenladeskript zu generieren. Das Fenster "Script" wird geöffnet.

### Skript Weiterverarbeiten
1. Wählen Sie einen der beiden Tabs aus: *QlikView Script* oder *QlikSense Script*.
2. Klicken Sie auf **[Copy to Clipboard]**, um das Skript zu kopieren.
![XU_qlik_generate_Script](/img/content/XU_qlik_generate_Script_2.png){:class="img-responsive"}
3. Fügen Sie das kopierte Skript in den Datenlade-Editor von Qlik View oder von Qlik Sense ein.
Mehr Details zu QlikSense finden Sie im Abschnitt [Einstellungen in QlikSense](./einstellungen_in_qlik_sense).

{: .box-note }
**Hinweis:** die "SET-Methoden" können nicht im Fenster "Script" editiert werden. Editieren Sie die SET-Methoden auf der Destinationsseite.  


****
#### Weiterführende Links
- [Destinationen](./xu-destinationen)
- [Qlik Help](https://help.qlik.com/)