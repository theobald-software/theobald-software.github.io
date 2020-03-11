---
ref: ecs-core-webservice-designer-05
layout: page
title: Loggen von Fehlermeldungen
description: Loggen von Fehlermeldungen
product: ecs-core
parent: transaktionsrekorder_feature
permalink: /:collection/:path
weight: 5
lang: de_DE
---

Um Rückmeldungen aus einer aufgezeichneten Transaktion zu protokollieren, gehen Sie zur Registerkarte *Return Messages*.

![ta_rec_feature_16](/img/content/ecscore/ecscore-wsd_ta_rec_16.png){:class="img-responsive"} 

Wenn Sie auf *Generate* klicken, wird automatisch ein Custom Data Type für Rückgabewerte erstellt, der die Message ID und den Return Message Text enthält.

![ta_rec_feature_17](/img/content/ecscore/ecscore-wsd_ta_rec_17.png){:class="img-responsive"}

![ta_rec_feature_18](/img/content/ecscore/ecscore-wsd_ta_rec_18.png){:class="img-responsive"}  

Ein Return-Parameter, der diesen Custom Data Type verwendet, muss manuell erstellt werden und kann dann auf dem Tab *Return Messages* als Mapping-Wert verwendet werden.

![ta_rec_feature_19](/img/content/ecscore/ecscore-wsd_ta_rec_19.png){:class="img-responsive"} 

![ta_rec_feature_20](/img/content/ecscore/ecscore-wsd_ta_rec_20.png){:class="img-responsive"} 

Danach kann der Webservice eingesetzt werden und zeigt die Return Messages im Webservice Body an.

![ta_rec_feature_21](/img/content/ecscore/ecscore-wsd_ta_rec_21.png){:class="img-responsive"} 

 
