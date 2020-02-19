---
ref: ecs-core-webservice-designer-05
layout: page
title: Wichtige Hinweise
description: Wichtige Hinweise
product: ecs-core
parent: transaktionsrekorder_feature
permalink: /:collection/:path
weight: 7
lang: de_DE
---

•	Without parameter mapping a web service will be executed with the default values from the recording. <br>
•	For testing a recorded transaction with default values it might be necessary in some scenarios to define at least one parameter for a new item number or description (i.e. MATNR for material number) because SAP often does not allow to create identically named items. <br>
•	In a transaction recording the input values must always be entered in the recorded format and not in the SAP compliant format as is normally the case. For example a date has to be entered in format *20.06.2019* and not *20190620*. <br>
•	There are transactions with header data and item information in more than one input screen (i.e. transaction ME21 for creating purchase orders). The header data is copied to the second input screen and used as default values there. That’s why you should only fill fields in the header data screen if you want to use them by default for every item creation. Fields you want to parameterize and fill flexible, you should only fill in the positions input screen.   

