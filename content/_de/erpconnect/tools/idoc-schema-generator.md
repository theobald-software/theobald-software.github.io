---
ref: ec-tools-02
layout: page
title: IDoc-Schema-Generator
description: IDoc-Schema-Generator
product: erpconnect
parent: tools
permalink: /:collection/:path
weight: 2
lang: de_DE
old_url: /ERPConnect-DE/default.aspx?pageid=idoc-schema-generator
---

Der *IDoc-Schema-Generator* generiert eine XML-Datei, die verwendet werden kann, um IDoc Schemas schneller zu laden.
Das Laden eines Schemas über XML ist i.d.R. performanter als das Laden von Schemas über `CreateIdoc` oder `CreateEmptyIdoc`, da keine Verbindung zu SAP benötigt wird.<br>
Siehe [IDocs als XML verarbeiten](../idocs-senden-und-empfangen/idocs-als-xml-verarbeiten) für mehr Informationen zur Anwendung.

### *IDoc-Schema-Generator* verwenden
 
1. Um den *IDoc-Schema-Generator* zu starten, führen Sie die *IdocSchemaGenerator.exe* aus dem ERPConnect-Verzeichnis `C:\Program Files\ERPConnect` aus.
2. Geben Sie ein, welchen IDoc Typ Sie generieren möchten. Falls nötig, geben Sie eine Erweiterung an und klicken Sie auf **[Generate Now!]**. <br>
![Tools-002](/img/content/Tools-002.png){:class="img-responsive" }
3. Das Fenster "SAP Login" öffnet sich. Geben Sie Ihre SAP Benutzerdaten ein und klicken Sie auf **[OK]**.
4. Speichern Sie die XML-Datei lokal auf Ihrer Festplatte.
5. Verwenden Sie die Methode `Idoc.LoadIdocSchema`, um die XML-Datei in Ihr Programm zu laden.
