---
ref: xu-google-cloud-storage-01
layout: page
title: Requirements
description: Requirements
product: xtract-universal
parent: google-cloud-storage
permalink: /:collection/:path
weight: 1
lang: en_GB
---

### Prerequisites:
- Google account
- Google Cloud Platform (GCP) subscrition (trial version offered)
- Project ("My First Project" is pre-defined)
- Google Cloud Storage (GCS) bucket for data extractions

### The GCP console:
In the GCP console all resources and services can be configured.
Click **[Console]** or **[Go to console]** on [https://cloud.google.com/storage](https://cloud.google.com/storage) to get to the overview dashboard.

To access all settings and services use the navigation menu on the upper left side.

![xu-google-cloud-req-01](/img/content/xu/googlecloudstorage/xu-google-cloud-req-01.png){:class="img-responsive"}
 
### To set up OAuth 2.0:
Xtract Universal uses OAuth 2.0 for authentication with the Google servers.
To enable this protocol, an OAuth flow with the required access permissions to Xtract Universal needs to be configured.

{: .box-note }
**Note**: Google will initially generally classify third-party applications as unsafe and issue a warning. 
The verification process is optional and up to you. Note that an official app verification involves ongoing charges.

1. Navigate to **APIs & Services > Credentials** in the menu.
![xu-google-cloud-req-02](/img/content/xu/googlecloudstorage/xu-google-cloud-req-02.png){:class="img-responsive"}
2. In the "Credentials" section select **Create Credentials > OAuth client ID**.
![xu-google-cloud-req-03](/img/content/xu/googlecloudstorage/xu-google-cloud-req-03.png){:class="img-responsive"}
3. Click **[Configure consent screen]**. This screen is processed with the OAuth flow that is started when a connection is established in the designer (see [Connection](./connection#gcs-settings)).
![xu-google-cloud-req-04](/img/content/xu/googlecloudstorage/xu-google-cloud-req-04.png){:class="img-responsive"}
4. In the “User Type” option select “internal” if your account belongs to an organization and you only want users within the organization to use Xtract Universal in combination with GCS. This option is only possible, if you are a [GSuite](https://gsuite.google.com/) user. <br>
Select "external" if you wish that any user with access to the OAuth credentials will be able to grant Xtract Universal the permission to write data to your GCS buckets. <br> 
Click **[Create]** to continue.
![xu-google-cloud-req-05](/img/content/xu/googlecloudstorage/xu-google-cloud-req-05.png){:class="img-responsive"}
5. In the "App information" section enter an app name of your choice. <br>
"Support email" and "Developer contact information" are also mandatory fields. Click **[Save and continue]** to get to the next section. <br>
![xu-google-cloud-req-06](/img/content/xu/googlecloudstorage/xu-google-cloud-req-06.png){:class="img-responsive"}
![xu-google-cloud-req-07](/img/content/xu/googlecloudstorage/xu-google-cloud-req-07.png){:class="img-responsive"}
6. In the following screen click **[Add or remove scopes]**.
Xtract Universal needs read and write permissions for its operations, which are configured in the "Scopes" section.
![xu-google-cloud-req-08](/img/content/xu/googlecloudstorage/xu-google-cloud-req-08.png){:class="img-responsive"}
7. Enter [https://www.googleapis.com/auth/devstorage.read_write](https://www.googleapis.com/auth/devstorage.read_write) under **Manually add scopes** and click **[Add to table]**.
![xu-google-cloud-req-09](/img/content/xu/googlecloudstorage/xu-google-cloud-req-09.png){:class="img-responsive"}
The newly added scope can be found as first entry in the table. Click **[Update]** to create the entry. 
![xu-google-cloud-req-10](/img/content/xu/googlecloudstorage/xu-google-cloud-req-10.png){:class="img-responsive"}
8. Click **[Continue]** when the "Verfification required" window is prompted. <br>
![xu-google-cloud-req-11](/img/content/xu/googlecloudstorage/xu-google-cloud-req-11.png){:class="img-responsive"}
9. Confirm  the next two screens with **[Save and continue]**. Click **[Back to dashboard]** in the "Summary" screen.      
![xu-google-cloud-req-12](/img/content/xu/googlecloudstorage/xu-google-cloud-req-12.png){:class="img-responsive"}
![xu-google-cloud-req-13](/img/content/xu/googlecloudstorage/xu-google-cloud-req-13.png){:class="img-responsive"}
![xu-google-cloud-req-14](/img/content/xu/googlecloudstorage/xu-google-cloud-req-14.png){:class="img-responsive"}
10. Go back to the "Credentials" menu, click **[Create credentials]** and select "OAuth client ID". <br>
Select "Desktop app" as application type, give the app a name of your choice and click **[Create]**.
![xu-google-cloud-req-15](/img/content/xu/googlecloudstorage/xu-google-cloud-req-15.png){:class="img-responsive"}
11. Your OAuth client is now created. <br>
The "Client ID" and the "Client secret" is needed for the destination configuration in Xtract Universal (see [Connection](./connection)).
![xu-google-cloud-req-16](/img/content/xu/googlecloudstorage/xu-google-cloud-req-16.png){:class="img-responsive"}

