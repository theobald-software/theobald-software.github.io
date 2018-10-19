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

Das Tool IDocSchemaGenerator.exe erzeugt unter Angabe des IDoc-Typs (und ggfs. der Erweiterung) eine entsprechende Schema-Datei, die dann an die Methode *Idoc.LoadIdocSchema* übergeben werden kann. Eventuell kann es auch sinnvoll sein, auf die Schema-Dateien zurückzugreifen, anstatt *CreateIdoc* oder *CreateEmptyIdoc* zu verwenden (siehe Kapitel [IDocs als XML verarbeiten](../idocs-senden-und-empfangen/idocs-als-xml-verarbeiten) ). Die Schema-Variante ist etwas performanter, da für das Erstellen der Objekt-Struktur kein Kontakt zum SAP-System nötig ist.

![Tools-002](/img/content/Tools-002.png){:class="img-responsive"}