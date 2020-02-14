---
ref: ecs-core-webservice-designer-05
layout: page
title: Known issues and limitations
description: Known issues and limitations
product: ecs-core
parent: transaction_recorder_feature
permalink: /:collection/:path
weight: 8
lang: en_GB
---

•	Some transactions will probably not work with the transaction recorder feature. This includes, for example, some transactions with the ending N (i.e. ME51N, ME21N). Such transactions can technically not be recorded or played back like other transactions and will therefore not work with the feature. <br>
•	Using more than one Transaction Recorder activity in one web service operation is not supported. However it is possible to create multiple web service operations that use the transaction recorder feature in one web service. <br>
