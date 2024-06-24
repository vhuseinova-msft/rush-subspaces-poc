# Project Name: rush-subspaces-poc

This repository serves as a POC for implementing functionality that was previously used in Rush variants. The goal is to explore the use of subspaces to achieve the same functionality.

## Project Structure

The project follows the following structure:

```
rush-subspaces-poc/
├── sample-app1/
│   ├── src/
│   ├── package.json
│   └── ...
├── sample-app2/
│   ├── src/
│   ├── package.json
│   └── ...
├── core/
│   ├── src/
│   ├── package.json
│   └── ...
├── README.md
└── ...
```

The `sample-app1` and `sample-app2` directories contain the respective applications that utilize the shared components from the `composite` and `core` directories.

## React Versions

To accommodate different React versions, `r16` and `r18` projects have been added. The goal is to be able to run both samples (`sample-app1` and `sample-app2`) with React 16 and 18.

Please refer to the individual `package.json` files for more details on the dependencies and scripts.
