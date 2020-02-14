---
ref: ecs-core-webservice-designer-05
layout: page
title: Parameter mapping
description: Parameter mapping
product: ecs-core
parent: transaction_recorder_feature
permalink: /:collection/:path
weight: 4
lang: en_GB
---

To map input parameters to the offered entry fields close the *Transaction Recorder Acivity* and define your parameters in the parameters box first.

![ta_rec_feature_12](/img/content/ecscore/ecscore-wsd_ta_rec_12.png){:class="img-responsive"}


All parameters must be defined as input parameters, the default case would be parameter of data type *String*. 
Note that you only need to define input parameters for fields you want to explicitely  allow interaction with through the web service. If you do not define input parameters for fields that have been recorded, 
for these fields the recorded values will be taken as default values.

After defining your parameters, close the parameter dialog and open the *Transaction Recorder Activity*. You can map now the defined parameters to the fields offered in the *Standard* tab. 

![ta_rec_feature_13](/img/content/ecscore/ecscore-wsd_ta_rec_13.png){:class="img-responsive"}


In the example for material creation (transaction MM01) no input parameter shall be defined for field MSICHTAUSW-KZSEL(01) which stands for the selection of input screen *Basic Data 1*. 
Furthermore for field MARA-MEINS which is the *Base Unit Of Measure* for the newly created material the recorded value shall be taken as default.  

![ta_rec_feature_14](/img/content/ecscore/ecscore-wsd_ta_rec_14.png){:class="img-responsive"}

However it is possible to assign another fixed value by default for this field, by entering the value between quotation marks directly in the mapping expression field.

![ta_rec_feature_15](/img/content/ecscore/ecscore-wsd_ta_rec_15.png){:class="img-responsive"}

It is recommended to first deploy and test a web service without any parameter mapping after a transaction recording. With this you can check whether the web service works with the default parameters from the recording. 
