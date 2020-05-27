---
ref: xu-parameters-01
layout: page
title: Parametrisierung
description: Parametrisierung
product: xtract-universal
parent: automation
permalink: /:collection/:path
weight: 5
lang: de_DE
---

### Dynamische Parametrisierung 
Mit den dynamischen Parametern ist es möglich, beim Aufruf einer Extraktion bestimmte Werte zu setzen bzw. zu überschreiben. 

#### Dynamische Parametrisierung der Extraktion

- Standard Parameter für alle Extraktionen: 
  - clearBuffer
  - preview 
  - source 
  - destination

- Standard Parameter abhängig von der Komponente. Bei Table sind es die folgenden Parameter: 
  - rows
  - where 
  - packageSize

- Standard Parameter abhänig von der Zielumgebung
  - decimalSeperator
  - columnSeperator 

#### Dynamische Parametrisierung der SAP-Quellverbindung
- lang: zur dynamischen Übergabe bzw. Überschreibung der Sprache der SAP-Quellverbindung
- logonTicket: zur dynamischen Übergabe des logonTickets 

#### Benutzerdefinierte Parameter
Abhängig von der benutzen Komponente können Sie benutzerspezifische Parameter definieren. Oben haben Sie z.B. über den Parameter **rows** die ganze Where-Bedingung bei einer Tabellenextraktion zu dynamisieren. Es ist aber auch möglich, nur bestimmte Teile der Where-Bedingung zu dynamisieren. 


# Extraktionsparameter

{% include _content/de/xu-specific/fortgeschrittene-techniken/extraktionsparameter.md %}

### Benutzerdefinierte Variablen 

{% include _content/de/xu-specific/fortgeschrittene-techniken/benutzerdefinierte-variablen.md %}
