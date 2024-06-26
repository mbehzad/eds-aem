<<<<<<< Updated upstream
# Your Project's Title...
=======
# Boilerplate for AEM Edge Delivery Services
This is our Edge Delivery Services boilerplate.
>>>>>>> Stashed changes

## Table of Contents
- [Environments](#environments)
- [Getting started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
- [Linting](#linting)
- [Documentation](#documentation)

## Environments
- Preview: [https://<branch>--<your_repository>--<github_user>.hlx.page/](https://main--eds-editorial--ifahrentholz.hlx.page/)
- Live: [https://<branch>--<your_repository>--<github_user>.hlx.live/](https://main--eds-editorial--ifahrentholz.hlx.live/)

### Prerequisites

- GitHub account
- Google or Microsoft account
- npm
  ```sh
  npm i
  ```

### Installation

1. Create your repository using the Boilerplate GitHub repository as a template:
   https://github.com/divae/boilerplate

2. Add the AEM Code Sync GitHub App to the repository:
   https://github.com/apps/aem-code-sync/installations/new

    - Select `Only select Repositories` (not `All Repositories`).

3. Link content source (Google Drive or Microsoft Sharepoint)
    - Create a folder in Google Drive/Sharepoint and share the folder with the Adobe Experience Manager user (`helix@adobe.com`).
    - Change the reference in `fstab.yaml` in your GitHub repo to the Google Drive/Sharepoint folder URL and commit the changes.

4. Install the Sidekick Chrome extension:
   https://chromewebstore.google.com/detail/aem-sidekick/ccfggkjabjahcjoljmgmklhpaccedipo?pli=1

    - Go to the Google Drive/Sharepoint folder, click on the extension icon in the browser toolbar and select `Add this project`.
    - To preview and publish content, select a file in Google Drive/Sharepoint, click on the extension icon to open the new Sidekick Toolbar and click `preview` or `publish`.

5. Start development
    - Install the AEM Command Line Interface (CLI) and clone your repo locally.
    ```
      npm install -g @adobe/aem-cli
      git clone https://github.com/<owner>/<repo>
    ```
    - Change into project folder and start your local dev environment. `npm start` initializes a build as well as runs the `aem up` command.
    ```
      cd <repo>
      npm start
    ```
    - Use Git to push code changes to your preview (https://<branch>--<repo>--<owner>.hlx.page/) and production (https://<branch>--<repo>--<owner>.hlx.live/) sites.

## Linting

```sh
npm run lint
```

## Documentation

For more information, please refer to the <a href="https://github.com/ifahrentholz/eds-editorial/wiki">documentation</a>.