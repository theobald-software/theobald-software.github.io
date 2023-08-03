---
ref: xis-odp-settings
layout: page
title: Einstellungen
description: ODP Settings
product: xtract-is
parent: odp
permalink: /:collection/:path
weight: 3
lang: de_DE
progressstate: 5
---

Der folgende Abschnitt beschreibt die Einstellungen der ODP-Komponente, die über das Hauptfenster der Komponente zugänglich sind.

![ODP Component](/img/content/xis/odp-settings.png){:class="img-responsive"}

{% include _content/de/odp/odp-settings-subscriptions.md %}

### Laufzeitparameter bearbeiten 

Verwenden Sie Laufzeitparameter für dynamische [Selektionen und Filter](./odp-define#selektion-und-filter).

1. Klicken Sie im Hauptfenster der Komponente auf **Edit Runtime Parameter**, um Laufzeitparameter anzulegen und zu bearbeiten.
Das Fenster "Edit Runtime Parameters" öffnet sich.<br> 
![ODP Add parameters](/img/content/odp/odp-settings-add-parameters2.png){:class="img-responsive"}<br> 
2. Klicken Sie auf **[Add Scalar]** (1), um Skalarparameter zu definieren, die als Platzhalter verwendet werden können. <br>
Die Platzhalter müssen zur Extraktionslaufzeit mit echten Werten befüllt werden.  <br>
**Tipp:** Parameter0..-n sind die Standardnamen für die hinzugefügten Parameter. Sie können einen beliebigen Namen eingeben (siehe vorliegendes Beispiel: *"p_MATNR"*).
3. Klicken Sie auf das Drop-Down-Menü (2) und weisen Sie einen der folgenden Datentypen einem Parameter zu. Die Datentypen müssen mit den SAP-Datentypen übereinstimmen. 
- String: dieser Datentyp kann für jeden Typ der SAP-Selektionsfelder verwendet werden.
- Integer / Number: dieser Datentyp kann nur für numerische SAP-Selektionsfelder verwendet werden.
- Flag: dieser Datentyp kann nur für SAP-Selektionsfelder verwendet werden, die einen 'X'&nbsp;(true) oder eine leere Eingabe ''&nbsp;(false) als Eingabewert benötigen. 
<br>
4. Klicken Sie auf **[OK]** (3) zum Bestätigen.


{: .box-note }
**Hinweis:** Verwenden Sie die *Properties* der Komponente in Kombination mit *Expressions*, um die Parameter in SSIS zu übergeben, siehe [Parametriesierung mit Properties](./odp-parametrisierung). 

{% include _content/de/odp/odp-settings-advanced.md %}
