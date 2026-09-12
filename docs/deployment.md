# GitHub Pages deployment

Repository: https://github.com/arpitg1304/armature
Site: https://arpitg1304.github.io/armature/

The workflow in `.github/workflows/pages.yml` runs the source/protocol/physics tests, builds the standalone page, and boots it in Chromium under a project URL path. Pull requests run the same checks without deploying. Successful pushes to `main` deploy the `_site` artifact through GitHub Pages; the workflow can also be run manually on `main`.

In repository **Settings → Pages → Build and deployment**, select **GitHub Actions** as the source. No deployment token or application server is required. The workflow uses GitHub's short-lived token with Pages and identity permissions confined to the deployment job. See [GitHub's custom workflow documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).

Local equivalent:

```sh
npm ci
npm test
npm run build:pages
npm run test:pages
```

The local browser smoke uses installed Chrome. CI installs Playwright Chromium. Only `_site/index.html` is uploaded. Scripts, workers, CSS, robot assets and scenery are embedded; project-path hosting requires no URL rewrites. The page's download link saves the current document as standalone HTML.

Memory tasks are hidden in the default interface, and the Memory Lab is not initialized. Append `?memory=1` to opt into the retained research interface. This is a visibility preference, not access control: the research source remains in this public repository and bundle. Protocol tests continue to cover it.

Local recording reports, source backups, Python environments, dependencies and generated files are ignored by Git. The supplied HTML artifacts are retained as migration fixtures. Phone pairing still needs the separate, unprovided `/api/phone` service; GitHub Pages cannot supply it. Default robot motion remains velocity-limited kinematic servos with approximate collision proxies.
