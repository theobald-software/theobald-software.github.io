After installation of Xtract Universal, the Xtract Universal service runs under the *Local System* account.

![xu service account](/img/content/xu/xu-service-account.png){:class="img-responsive"}

For restricting access to Xtract Universal's web server to Windows AD users, the Xtract Universal service needs to run under a dedicated Windows AD service account.

- Create a Windows AD service account and assign an SPN (Service Principle Name) to the service account in the following format: ```HTTP/[FQDN of XU Server]```

![xu service account SPN](/img/content/xu/xu-service-account-SPN.png){:class="img-responsive"}

{: .box-note}
**Note**: Creating an AD service account is a task that is usually performed by the company's network team.


- Let the Xtract Universal service run under the service account. Make sure the correct domain is used, e.g. *.company.local* instead of *.company.com*.
![xu service account services](/img/content/xu/xu-service-account-services.png){:class="img-responsive"}


- Grant access rights on Xtract Universal's installation folder and all sub folders to the service account as in the following screenshot:
![xu service account permissions](/img/content/xu/xu-service-account-permissions.png){:class="img-responsive"}

- Make sure the service account has Read access to the X.509 certificate's private key.

![xu service account private key 1](/img/content/xu/xu-service-account-privatekey_1.png){:class="img-responsive"}
![xu service account private key 2](/img/content/xu/xu-service-account-privatekey_2.png){:class="img-responsive"}

- Change the *Target principal* in the "Connect to Xtract Universal Server" window in the Xtract Universal Designer to the User Principal Name (UPN) of the Windows AD service account, as described [here](https://kb.theobald-software.com/xtract-universal/target-principal-TPN).




