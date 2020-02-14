---
ref: ecs-core-webservice-designer-05
layout: page
title: Recording a transaction
description: Recording a transaction
product: ecs-core
parent: transaction_recorder_feature
permalink: /:collection/:path
weight: 2
lang: en_GB
---

Before you do a recording, think about which entries for which fields and values shall be made later with the web service. 
There are mandatory and optional fields in SAP transactions, furthermore usually not every field needs manual input because values are obtained in the background and will be filled out automatically when you confirm with ENTER or save your entries with the disc symbol. 
You only need to fill the mandatory fields and the optional fields you want to explicitly provide users for entry. 

Navigate through the transaction as you would do when working directly in the SAP GUI. 
All actions are included in the recording that are executed explicitly in the process, such as clicking in a entry field and entering a value. 
Entered values (for example, for material items) are saved as default values in the recording and can later be defined as dynamic input parameters.   

A recording is finished when at least all mandatory fields are filled with valid values 
and you click on Save. 

 
Example for transaction MM01 (creation of material master data): 

![ta_rec_feature_05](/img/content/ecscore/ecscore-wsd_ta_rec_05.png){:class="img-responsive"}

![ta_rec_feature_06](/img/content/ecscore/ecscore-wsd_ta_rec_06.png){:class="img-responsive"}

![ta_rec_feature_07](/img/content/ecscore/ecscore-wsd_ta_rec_07.png){:class="img-responsive"}

![ta_rec_feature_08](/img/content/ecscore/ecscore-wsd_ta_rec_08.png){:class="img-responsive"}

![ta_rec_feature_09](/img/content/ecscore/ecscore-wsd_ta_rec_09.png){:class="img-responsive"}



 
 
 
 
 
 


 










