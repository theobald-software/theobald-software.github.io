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

To explicitely log return messages from a recorded transaction go to the *Return Messages* tab.

![ta_rec_feature_16](/img/content/ecscore/ecscore-wsd_ta_rec_16.png){:class="img-responsive"} 

By clicking on *Generate* a custom data type for return values containing the message ID and the return message text will be automatically created.

![ta_rec_feature_17](/img/content/ecscore/ecscore-wsd_ta_rec_17.png){:class="img-responsive"}

![ta_rec_feature_18](/img/content/ecscore/ecscore-wsd_ta_rec_18.png){:class="img-responsive"}  

A return parameter using this custom data type has to be created manually and can then be used in the *Return Messages* screen a mapping value.

![ta_rec_feature_19](/img/content/ecscore/ecscore-wsd_ta_rec_19.png){:class="img-responsive"} 

![ta_rec_feature_20](/img/content/ecscore/ecscore-wsd_ta_rec_20.png){:class="img-responsive"} 

After that the web service can be deployed and will display readable return messages in the web service return body.

![ta_rec_feature_21](/img/content/ecscore/ecscore-wsd_ta_rec_21.png){:class="img-responsive"} 
 

 
