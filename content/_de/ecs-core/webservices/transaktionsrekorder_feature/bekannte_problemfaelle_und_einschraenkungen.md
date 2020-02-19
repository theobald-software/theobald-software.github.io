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

<!--test-->
•	Some transactions will probably not work with the transaction recorder feature. This includes, for example, some transactions with the ending N (i.e. ME51N, ME21N). Such transactions can technically not be recorded or played back like other transactions and will therefore not work with the feature. <br>
•	Using more than one Transaction Recorder activity in one web service operation is not supported. However it is possible to create multiple web service operations that use the transaction recorder feature in one web service. <br>
