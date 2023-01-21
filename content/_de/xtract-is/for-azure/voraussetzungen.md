---
ref: xi-for-azure-01
layout: page
title: Voraussetzungen
description: Voraussetzungen
product: xtract-is
parent: for-azure
permalink: /:collection/:path
weight: 1
lang: de_DE
old_url: /Xtract-IS-DE/default.aspx?pageid=voraussetzungen
---

### Notwendige Komponenten
- ADFv2
- Azure-SSIS Integration Runtime (IR)

### Einrichten der Umgebung

Das Einrichten der notwendigen Umgebung ist in der folgenden Microsoft-Dokumentation dokumentiert:

- [Bereitstellen der Azure-SSIS Integration Runtime in Azure Data Factory](https://docs.microsoft.com/de-de/azure/data-factory/tutorial-deploy-ssis-packages-azure)
- [Bereitstellen der Azure-SSIS Integration Runtime in Azure Data Factory mit PowerShell](https://docs.microsoft.com/de-de/azure/data-factory/tutorial-deploy-ssis-packages-azure-powershell).

Sobald die Umgebung läuft, entwickeln Sie ein einfaches SSIS-Paket (das KEINE Xtract IS-Komponenten enthält) und stellen Sie das Paket auf der Azure-SSIS IR bereit und führen es aus.

Wenn die Ausführung des SSIS-Pakets erfolgreich ist, fahren Sie mit der Einrichtung von Xtract IS für Azure auf der Azure-SSIS-IR fort. 