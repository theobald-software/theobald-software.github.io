---
ref: xu-introduction-05
layout: page
title: Schritt 2 -  Eine SAP-Verbindung erstellen
description: SAP-Verbindung
product: xtract-universal
parent: erste-schritte
permalink: /:collection/:path
weight: 2
lang: de_DE
redirect_from:
  - de/xtract-universal/einfuehrung/sap-verbindungen-anlegen
old_url: /Xtract-Universal-DE/default.aspx?pageid=sap-verbindungen-anlegen
---

{: .box-warning}
**Warnung!** **Fehlende Berechtigungen**
Um eine Verbindung zu SAP herzustellen, muss der Zugriff auf allgemeine Berechtigungsobjekte (RFC) verfügbar sein.
Stellen Sie sicher, dass der Zugriff auf die allgemeinen Berechtigungsobjekte möglich ist. Weitere Informationen finden Sie im Knowledge-Base-Artikel zu [SAP Zugriffsrechten](https://kb.theobald-software.com/sap/authority-objects-sap-user-rights).

### Eine Quelle Erstellen

{: .box-note}
**Hinweis:** Wenn Sie Xtract Universal zum 1. Mal installieren und keine Extraktionen angelegt sind, klicken Sie im Hauptfenster des Designers auf **[New]**.
Sie werden automatisch zu den Einstellungen für Quellsysteme weitergeleitet.

Wenn bereits Extraktionen angelegt sind:

1. Navigieren Sie im Hauptfenster des Designers zur Menüleiste und wählen Sie **Server > Manage Sources**. <br>
![XU-Create-Connection-1](/img/content/server_manage_sources.png){:class="img-responsive"}
Das Fenster "Manage Sources" wird geöffnet.  <br>
![XU-Create-Connection-2](/img/content/xu_manage_source.png){:class="img-responsive"}
2. Klicken Sie auf **[Add]**. Das Fenster "Change Source" wird geöffnet. 


{% include _content/de/xu-specific/fortgeschrittene-techniken/sap-verbindungen-anlegen.md %}

### Video Tutorial

Das folgende Video Tutorial zeigt, wie Sie nach der ersten Installation von Xtract Universal eine neue SAP-Verbindung erstellen.

<figure class="video_container">
  <video width="431" height="270" muted="true" controls="true" allowfullscreen="true" poster="../../../img/content/videos/sap_connection_poster.png">
    <source src="../../../img/content/videos/XU_Create_SAP_Source_Connection.mp4" type="video/mp4">
  <source src="../../../img/content/videos/XU_Create_SAP_Source_Connection.ogg" type="video/ogg">
 Your browser does not support the video tag.
  </video>
</figure>