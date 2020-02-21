---
ref: ecs-core-webservice-designer-05
layout: page
title: Bekannte Problemfälle und Einschränkungen
description: Bekannte Problemfälle und Einschränkungen
product: ecs-core
parent: transaktionsrekorder_feature
permalink: /:collection/:path
weight: 8
lang: de_DE
---

•	Einige Transaktionen werden wahrscheinlich nicht mit dem Transaktionsrekorder funktionieren. Dazu gehören z.B. einige Transaktionen mit der Endung N (d.h. ME51N, ME21N). Solche Transaktionen können technisch nicht wie andere Transaktionen aufgezeichnet oder wiedergegeben werden und funktionieren daher nicht. <br>
•	Die Verwendung von mehr als einer Transaktionsrekorder-Aktivität in einer Webservice-Operation wird nicht unterstützt. Es ist jedoch möglich, mehrere Webservice-Operationen zu erstellen, die den Transaktionsrekorder in einem Webservice verwender. <br>
