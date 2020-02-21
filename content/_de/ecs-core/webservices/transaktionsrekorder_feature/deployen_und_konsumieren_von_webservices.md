---
ref: ecs-core-webservice-designer-05
layout: page
title: Deployen und Konsumieren von Webservices
description: Deployen und Konsumieren von Webservices
product: ecs-core
parent: transaktionsrekorder_feature
permalink: /:collection/:path
weight: 6
lang: de_DE
---

Nach dem Parameter-Mapping kann der Webservice bereitgestellt und getestet werden. Schließen Sie den Operationsdialog, geben Sie Ihrem Webservice einen Namen und einen Titel und klicken Sie auf *Deploy*. 

![ta_rec_feature_22](/img/content/ecscore/ecscore-wsd_ta_rec_22.png){:class="img-responsive"} 
 
Nach der erfolgreichen Bereitstellung kann der Service getestet werden (z.b. in einem REST-Client). Der Aufruf eines Webservice mit einer aufgezeichneten Transaktion funktioniert genauso wie der Aufruf jedes anderen Webservice, der diese Funktion nicht nutzt. <br>

Die Eingabeparameter müssen mit gültigen Werten gefüllt werden, und nach dem Aufruf wird eine Ausgabe-/Ergebnisnachricht im Webservice-Body ausgegeben. Wenn beispielsweise eine Dokumentnummer während des Prozesses erstellt wurde, wird sie im Body angezeigt. 

![ta_rec_feature_23](/img/content/ecscore/ecscore-wsd_ta_rec_23.png){:class="img-responsive"} 
 

