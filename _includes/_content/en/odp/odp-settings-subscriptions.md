**Show Subscriptions / Show active subscriptions**<br/>
Click on the button *Show Subscriptions*/*Show active subscriptions* to display more details about the subscriber process:  
- **Queue**: Shows the technical name of all subscriptions for a specific product (e.g. Xtract Universal).<br>
A subscription is bound to a specific product and the ODP component the init was originally triggered from. An ODP data provider, such as 2LIS_02_ITM, can have multiple subscriptions. The subscription that refers to the ODP component at hand is marked with a red asterisks.
- **Process**: Technical name of Subscription (see SAP transaction ODQMON)
- **R. (number of requests)**: Number of executed delta requests
- **Last request**: timestamp of last delta request
- **Created**: timestamp of init request

To delete the subscription click on the *dustbin* icon on the right hand side. <br/><br/>

![ODP Subscriber](/img/content/odp/odp-settings-02.png){:class="img-responsive"}



