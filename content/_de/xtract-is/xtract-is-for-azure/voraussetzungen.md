---
layout: page
title: Voraussetzungen
description: Voraussetzungen
product: xtract-is
parent: xtract-is-for-azure
permalink: /:collection/:path
weight: 1
lang: de_DE
old_url: /Xtract-IS-DE/default.aspx?pageid=voraussetzungen
---

*Xtract IS for Azure* setzt eine ADFv2 und Azure-SSIS Integration Runtime (IR) voraus.

Die Microsoft Dokumentation beschreibt, wie eine solche Umgebung aufgesetzt wird:

[Bereitstellen der Azure-SSIS Integration Runtime in Azure Data Factory](https://docs.microsoft.com/de-de/azure/data-factory/tutorial-deploy-ssis-packages-azure) oder<br>
[Bereitstellen der Azure-SSIS Integration Runtime in Azure Data Factory mit PowerShell](https://docs.microsoft.com/de-de/azure/data-factory/tutorial-deploy-ssis-packages-azure-powershell).

Entwickeln Sie ein einfaches SSIS Paket (das keine Xtract IS-Komponenten enthält). Veröffentlichen Sie es auf die Azure-SSIS IR und lassen Sie es dort laufen.

Wenn das Paket erfolgreich durchläuft können wir *Xtract IS for Azure* auf dieser IR installieren.
