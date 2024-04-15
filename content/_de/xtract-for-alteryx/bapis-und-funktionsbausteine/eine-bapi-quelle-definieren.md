---
ref: xfa-bapi-define
layout: page
title: Eine BAPI-Extraktion definieren
description: Eine BAPI-Quelle definieren
product: xtract-for-alteryx
parent: bapis-und-funktionsbausteine
permalink: /:collection/:path
weight: 1
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=eine-bapi-quelle-definieren
---

Der folgende Abschnitt beschreibt die Anwendung der Xtract Cube Komponente.

{% include _content/de/bapi/eine-bapi-quelle-definieren.md %}

### Transaction Commit

Einige SAP-Funktionsmodule erfordern den Aufruf des Funktionsmoduls BAPI_TRANSACTION_COMMIT, um Daten in der Datenbank erfolgreich zu aktualisieren, z. B. BAI_PO_CREATE.
Um BAPI_TRANSACTION_COMMIT nach der Verarbeitung des ausgewählten Funktionsbausteins /BAPI automatisch aufzurufen, aktivieren Sie im Konfigurationsmenü der Xtract BAPI-Komponente die Option **Commit work in SAP after execution**.

![xtract-bapi-commit-transaction](/img/content/xfa/xtract-bapi-commit-transaction.png){:class="img-responsive"}